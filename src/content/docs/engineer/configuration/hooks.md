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

Hooks allow you to extend Claude Code with custom scripts that run at specific points in the workflow. ClaudeKit includes pre-built hooks for notifications (Discord, Telegram) and development rule enforcement.

## Overview

Hooks are configured in `.claude/settings.json` and execute shell commands in response to Claude Code events.

### Available Hook Events

| Event | When Triggered |
|-------|----------------|
| `UserPromptSubmit` | Before user prompt is processed |
| `PreToolUse` | Before a tool executes |
| `PostToolUse` | After a tool executes |
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

### 1. Development Rules Reminder

**File:** `.claude/hooks/dev-rules-reminder.cjs`

**Purpose:** Reminds Claude about development rules before processing prompts.

**Event:** `UserPromptSubmit`

**Configuration:**
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
    ]
  }
}
```

**What it does:**
- Checks `.claude/workflows/development-rules.md`
- Injects rule reminders into Claude's context
- Ensures consistent code quality standards

### 2. Scout Block

**File:** `.claude/hooks/scout-block.cjs`

**Purpose:** Prevents file operations during scout mode to keep context focused.

**Event:** `PreToolUse`

**Configuration:**
```json
{
  "hooks": {
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

**What it does:**
- Blocks file operations when scout mode is active
- Prevents accidental modifications during exploration
- Keeps codebase search focused and efficient

### 3. Discord Notifications (Manual)

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

### 4. Telegram Notifications

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

- [CLAUDE.md](/docs/configuration/claude-md) - Project instructions
- [MCP Setup](/docs/configuration/mcp-setup) - MCP server configuration
- [Workflows](/docs/configuration/workflows) - Development workflows

---

**Key Takeaway**: Hooks extend Claude Code with custom automation - from development rule enforcement to real-time notifications. Use built-in Discord/Telegram hooks or create custom hooks to fit your workflow.
