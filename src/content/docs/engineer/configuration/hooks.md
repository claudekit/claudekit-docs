---
title: Hooks
description: Configure Claude Code hooks for notifications, automation, and custom behaviors
section: engineer
kit: engineer
category: configuration
order: 4
published: true
---

# Hooks

Hooks allow you to extend Claude Code with custom scripts that run at specific points in the workflow. ClaudeKit Engineer (v2.12.0) includes pre-built hooks for session management, subagent coordination, file access control, developer rule enforcement, and notifications.

## Overview

Hooks are configured in `.claude/settings.json` and execute shell commands in response to Claude Code events.

> **Always-on diagnostics (v2.11.0+):** All built-in hooks are wrapped in crash handlers that automatically capture errors and write them to `.claude/hooks/logs/`. Hook failures are logged but do not interrupt your session.

### Available Hook Events

| Event | When Triggered |
|-------|----------------|
| `SessionStart` | When a Claude Code session begins |
| `SubagentStart` | When a Task tool spawns a subagent |
| `UserPromptSubmit` | Before user prompt is processed |
| `PreToolUse` | Before a tool executes |
| `PostToolUse` | After a tool executes |
| `TaskCompleted` | When a task is marked completed |
| `TeammateIdle` | When an Agent Team member goes idle |
| `Stop` | When Claude session ends |
| `SubagentStop` | When a subagent completes |

## Configuration

Hooks are defined in `.claude/settings.json`:

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "node .claude/hooks/dev-rules-reminder.cjs"
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash|Glob|Grep|Read|Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "node .claude/hooks/scout-block.cjs"
          }
        ]
      }
    ]
  }
}
```

### Hook Properties

- **type**: Always `"command"` for shell execution
- **command**: Shell command to run
- **matcher**: (PreToolUse only) Regex to match tool names

## Built-in Hooks

ClaudeKit Engineer ships with hooks organized by event type. All hook files live in `.claude/hooks/`. Shared utilities are in `.claude/hooks/lib/`. Notification providers are in `.claude/hooks/notifications/`.

### Summary Table

| Hook File | Event | Purpose |
|-----------|-------|---------|
| `session-init.cjs` | `SessionStart` | Load config, detect project, persist env vars |
| `subagent-init.cjs` | `SubagentStart` | Inject minimal context (~200 tokens) to subagents |
| `team-context-inject.cjs` | `SubagentStart` | Inject peer info + task summary for Agent Team members |
| `cook-after-plan-reminder.cjs` | `SubagentStop` (Plan) | Remind to invoke `/ck:cook --auto` after planning |
| `dev-rules-reminder.cjs` | `UserPromptSubmit` | Inject session context, rules, modularization, Plan Context |
| `usage-context-awareness.cjs` | `UserPromptSubmit` + `PostToolUse` | Fetch usage limits, write to cache (throttled) |
| `descriptive-name.cjs` | `PreToolUse` (Write) | Inject file naming guidance: kebab-case, language conventions |
| `scout-block.cjs` | `PreToolUse` (Bash/Glob/Grep/Read/Edit/Write) | Block access to `.ckignore`-listed directories |
| `privacy-block.cjs` | `PreToolUse` (Bash/Glob/Grep/Read/Edit/Write) | Block sensitive files, require user approval |
| `post-edit-simplify-reminder.cjs` | `PostToolUse` (Edit/Write/MultiEdit) | Remind about code-simplifier after 5+ edits |
| `task-completed-handler.cjs` | `TaskCompleted` | Log completions, inject progress for Agent Team leads |
| `teammate-idle-handler.cjs` | `TeammateIdle` | Inject available task context when team member goes idle |

---

### session-init.cjs

**Event:** `SessionStart`

**Purpose:** Runs once when a Claude Code session begins. Loads `.claude/.env`, detects the current project, and persists environment variables for the session.

**What it does:**
- Reads `.claude/.env` and `.env` files and exports variables to the session
- Detects project type (Next.js, Express, etc.) and sets `CK_PROJECT_TYPE`
- Stores session metadata for hooks that run later in the session

---

### subagent-init.cjs

**Event:** `SubagentStart`

**Purpose:** Injects minimal context (~200 tokens) into subagents spawned by the Task tool. Keeps subagent prompts lean while ensuring they have the critical paths and config they need.

**What it does:**
- Injects CWD, plan directory, reports directory
- Passes `CK_SESSION_ID` and project type to subagents
- Does NOT inject full rules (those come from `dev-rules-reminder.cjs`)

---

### team-context-inject.cjs

**Event:** `SubagentStart`

**Purpose:** Used in Agent Team workflows. Injects peer agent names, task summary, and coordination context into team member subagents.

**What it does:**
- Reads team config from `.claude/teams/`
- Injects available peer names and their current task status
- Provides file ownership boundaries from the active task

> Only active when `CK_TEAM_MODE=1` is set.

---

### cook-after-plan-reminder.cjs

**Event:** `SubagentStop` (matcher: Plan subagents)

**Purpose:** After a planning subagent completes, reminds Claude to invoke `/ck:cook --auto` to begin implementation from the generated plan.

**What it does:**
- Detects if the stopping subagent was a planner
- Injects a reminder with the path to the generated plan file
- Prevents the common pattern of forgetting to start implementation

---

### dev-rules-reminder.cjs

**Event:** `UserPromptSubmit`

**Purpose:** Injects session context, development rules, modularization guidelines, and Plan Context into Claude's context before each user prompt.

**What it does:**
- Reads `.claude/workflows/development-rules.md` and injects key rules
- Injects active Plan Context (current plan directory) from session state
- Reminds about modularization limits (200-line files)
- Ensures consistent code quality standards across prompts

---

### usage-context-awareness.cjs

**Event:** `UserPromptSubmit` + `PostToolUse`

**Purpose:** Fetches Claude Code usage limits from the API and writes them to a cache file. Throttled to avoid excessive API calls. Helps Claude be aware of remaining token budget.

**What it does:**
- Reads cached usage data from `.claude/.usage-cache.json` (max 60s old)
- Fetches fresh usage stats if cache is stale
- Injects remaining token budget into context
- Silently skips if `ANTHROPIC_API_KEY` is not set

---

### descriptive-name.cjs

**Event:** `PreToolUse` (matcher: `Write`)

**Purpose:** Injects file naming guidance before Claude writes a new file, enforcing kebab-case and language-specific conventions.

**What it does:**
- Detects the target file path from the Write tool parameters
- Checks if the name follows kebab-case (for most files) or language conventions (e.g., PascalCase for React components)
- Injects a reminder if the name is non-descriptive or uses the wrong convention

---

### scout-block.cjs

**Event:** `PreToolUse` (matcher: `Bash|Glob|Grep|Read|Edit|Write`)

**Purpose:** Blocks file system access to directories listed in `.ckignore`. Allows build commands (e.g., `npm run build`) to pass through.

**What it does:**
- Reads the shipped `.ckignore` baseline and then layers an optional git-root `./.claude/.ckignore` override
- Blocks Read/Edit/Write/Glob/Grep operations on matched paths
- Allows Bash commands that are recognized build/test commands
- Returns a clear error message explaining which path is blocked and which `.ckignore` file to edit

---

### privacy-block.cjs

**Event:** `PreToolUse` (matcher: `Bash|Glob|Grep|Read|Edit|Write`)

**Purpose:** Blocks access to sensitive files (`.env`, credentials, private keys). Requires explicit user approval via `AskUserQuestion` before allowing access.

**What it does:**
- Matches file paths against a list of sensitive patterns (`.env*`, `*.pem`, `*.key`, `credentials.*`, etc.)
- On match: returns a `@@PRIVACY_PROMPT@@` JSON marker that triggers the `AskUserQuestion` flow
- If user approves: Claude uses `bash cat` to read the file (bypasses the hook)
- If user denies: continues without the sensitive file

> See `$HOME/.claude/CLAUDE.md` → "Hook Response Protocol" for the full `@@PRIVACY_PROMPT@@` flow.

---

### post-edit-simplify-reminder.cjs

**Event:** `PostToolUse` (matcher: `Edit|Write|MultiEdit`)

**Purpose:** Tracks the number of file edits in the current session. After 5 or more edits, injects a reminder to run the `code-simplifier` agent to review accumulated complexity.

**What it does:**
- Increments edit counter in session state after each Edit/Write/MultiEdit
- At threshold (default: 5), injects: "You've made N edits. Consider invoking `/simplify` to review accumulated complexity."
- Resets counter after reminder is shown

---

### task-completed-handler.cjs

**Event:** `TaskCompleted`

**Purpose:** Logs task completions to `.claude/logs/tasks.log`. In Agent Team mode, injects progress summary for the lead agent.

**What it does:**
- Appends task ID, subject, completion time, and owner to the task log
- If `CK_TEAM_MODE=1`: formats a progress summary showing completed vs total tasks and injects it into lead's context

---

### teammate-idle-handler.cjs

**Event:** `TeammateIdle`

**Purpose:** When an Agent Team member goes idle (waiting for input), injects available unblocked task context so they can claim the next task without waiting for a message.

**What it does:**
- Reads `TaskList` for unblocked pending tasks
- Formats task summary and injects it as context
- Prevents teammates from staying idle when work is available

---

### Discord Notifications

**File:** `.claude/hooks/send-discord.sh`

**Purpose:** Sends rich notifications to Discord when tasks complete.

> **Note:** Discord notifications are triggered manually in workflows, not automatically via hook events. This is intentional for flexibility.

**Setup:**

1. **Create Discord Webhook:**
   - Discord Server → Settings → Integrations → Webhooks
   - Create webhook, copy URL

2. **Configure Environment:**
   ```bash
   # .env or .claude/.env
   DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_ID/YOUR_TOKEN
   ```

3. **Make Executable:**
   ```bash
   chmod +x .claude/hooks/send-discord.sh
   ```

4. **Test:**
   ```bash
   ./.claude/hooks/send-discord.sh 'Test notification'
   ```

**Usage in Workflows:**
```markdown
<!-- In .claude/workflows/development-rules.md -->
- When implementation complete, run:
  `./.claude/hooks/send-discord.sh 'Task completed: [summary]'`
```

**Message Format:**
```
╔═══════════════════════════════════════╗
║ 🤖 Claude Code Session Complete       ║
╠═══════════════════════════════════════╣
║ Implementation Complete               ║
║                                       ║
║ ✅ Added user authentication          ║
║ ✅ Created login/signup forms         ║
║ ✅ All tests passing                  ║
╠═══════════════════════════════════════╣
║ ⏰ Session Time: 14:30:45             ║
║ 📂 Project: my-project                ║
╚═══════════════════════════════════════╝
```

### Telegram Notifications

**File:** `.claude/hooks/telegram_notify.sh`

**Purpose:** Sends detailed notifications to Telegram with tool usage stats.

**Setup:**

1. **Create Telegram Bot:**
   - Message @BotFather on Telegram
   - Send `/newbot`, follow prompts
   - Copy bot token

2. **Get Chat ID:**
   ```bash
   # After messaging your bot, run:
   curl -s "https://api.telegram.org/bot<TOKEN>/getUpdates" | jq '.result[-1].message.chat.id'
   ```

3. **Configure Environment:**
   ```bash
   # .env or .claude/.env
   TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
   TELEGRAM_CHAT_ID=987654321
   ```

4. **Configure Hook (add to `.claude/settings.json`):**

   > **Note:** Telegram hooks are not configured by default. Add this to your `settings.json` to enable automatic notifications.

   ```json
   {
     "hooks": {
       "Stop": [
         {
           "hooks": [
             {
               "type": "command",
               "command": "${CLAUDE_PROJECT_DIR}/.claude/hooks/telegram_notify.sh"
             }
           ]
         }
       ],
       "SubagentStop": [
         {
           "hooks": [
             {
               "type": "command",
               "command": "${CLAUDE_PROJECT_DIR}/.claude/hooks/telegram_notify.sh"
             }
           ]
         }
       ]
     }
   }
   ```

**Message Format:**
```
🚀 Project Task Completed

📅 Time: 2025-10-22 14:30:45
📁 Project: my-project
🔧 Total Operations: 15
🆔 Session: abc12345...

Tools Used:
   5 Edit
   3 Read
   2 Bash
   2 Write

Files Modified:
• src/auth/service.ts
• src/utils/validation.ts
• tests/auth.test.ts

📍 Location: /Users/user/projects/my-project
```

## Notification System

Notification providers live in `.claude/hooks/notifications/`. Each provider is a standalone module that reads from environment variables.

| Provider | File | Event |
|----------|------|-------|
| Discord | `notifications/discord.cjs` | `Stop`, `SubagentStop` |
| Slack | `notifications/slack.cjs` | `Stop`, `SubagentStop` |
| Telegram | `notifications/telegram.cjs` | `Stop`, `SubagentStop` |

Configure providers by setting the relevant env vars (see Discord/Telegram sections below) and adding them to `settings.json` hooks. The provider scripts are called by the main notification orchestrator.

## Creating Custom Hooks

### Basic Hook Structure

```javascript
// .claude/hooks/my-hook.cjs

// Read hook input from stdin (JSON)
let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  const data = JSON.parse(input);

  // Hook logic here
  console.log('Hook triggered:', data.hookType);

  // Exit 0 for success, non-zero to block
  process.exit(0);
});
```

### Hook Input Data

**UserPromptSubmit:**
```json
{
  "hookType": "UserPromptSubmit",
  "projectDir": "/path/to/project",
  "prompt": "User's prompt text"
}
```

**PreToolUse:**
```json
{
  "hookType": "PreToolUse",
  "projectDir": "/path/to/project",
  "tool": "Edit",
  "parameters": {
    "file_path": "/path/to/file.ts",
    "old_string": "...",
    "new_string": "..."
  }
}
```

**Stop:**
```json
{
  "hookType": "Stop",
  "projectDir": "/path/to/project",
  "sessionId": "abc123",
  "toolsUsed": [
    {"tool": "Read", "parameters": {"file_path": "..."}},
    {"tool": "Edit", "parameters": {"file_path": "..."}}
  ]
}
```

### Example: Logging Hook

```javascript
// .claude/hooks/log-tools.cjs
const fs = require('fs');

let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  const data = JSON.parse(input);

  const logEntry = {
    timestamp: new Date().toISOString(),
    hookType: data.hookType,
    tool: data.tool,
    file: data.parameters?.file_path
  };

  fs.appendFileSync('logs.txt', JSON.stringify(logEntry) + '\n');
  process.exit(0);
});
```

### Example: Blocking Hook

```javascript
// .claude/hooks/prevent-secrets.cjs
let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  const data = JSON.parse(input);

  // Block edits to .env files
  if (data.tool === 'Edit' && data.parameters?.file_path?.includes('.env')) {
    console.error('Blocked: Cannot edit .env files directly');
    process.exit(1); // Non-zero exits block the action
  }

  process.exit(0);
});
```

## Environment Variables

Hooks can access these environment variables:

| Variable | Description |
|----------|-------------|
| `CLAUDE_PROJECT_DIR` | Project root directory |
| `CLAUDE_SESSION_ID` | Current session identifier |
| Custom variables | From `.env` files |

### Loading .env Files

ClaudeKit hooks load environment variables in this priority:

1. System environment variables
2. `.claude/.env` (project-level)
3. `.claude/hooks/.env` (hook-specific)

## Best Practices

### Security

1. **Never commit secrets:**
   ```bash
   # .gitignore
   .env
   .env.*
   ```

2. **Use environment variables** for tokens and URLs

3. **Rotate webhook tokens** regularly

4. **Limit hook permissions** to necessary scope

### Performance

1. **Keep hooks lightweight** - they run on every event
2. **Use async operations** for slow tasks
3. **Exit quickly** if no action needed

### Reliability

1. **Handle errors gracefully**
2. **Log hook failures** for debugging
3. **Test hooks manually** before deployment

## Troubleshooting

### Hook Not Triggering

**Solutions:**
1. Verify hook in `settings.json` is valid JSON
2. Check script is executable (`chmod +x`)
3. Verify path is correct
4. Test script manually

### Hook Blocking Unexpectedly

**Solutions:**
1. Check exit code (0 = allow, non-zero = block)
2. Review matcher regex for PreToolUse
3. Add logging to debug

### Environment Variables Not Loading

**Solutions:**
1. Check `.env` file exists and has correct format
2. Verify no spaces around `=` in `.env`
3. Ensure script reads `.env` files

## Related

- [CLAUDE.md](/docs/engineer/configuration/claude-md) - Project instructions
- [MCP Setup](/docs/engineer/configuration/mcp-setup) - MCP server configuration
- [Workflows](/docs/engineer/configuration/workflows) - Development workflows

---

**Key Takeaway**: Hooks extend Claude Code with custom automation - from development rule enforcement to real-time notifications. Use built-in Discord/Telegram hooks or create custom hooks to fit your workflow.
