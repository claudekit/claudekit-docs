---
title: Command Errors
description: "Fix ClaudeKit command errors - slash commands not working or failing with errors"
section: support
category: support/troubleshooting
order: 3
published: true
---
# Command Errors

Commands not working? Get them running in minutes with these step-by-step fixes.

## Quick Fix: Command Does Nothing

**Symptom**: Typing `/ck:cook` or other slash commands produces no response

**Solution**:

```bash
# 1. Verify .claude directory exists
ls -la ~/.claude/    # global install
ls -la .claude/      # local project install

# 2. Check skills directory
ls ~/.claude/skills/

# 3. Verify a specific skill file exists
ls ~/.claude/skills/cook/

# If files missing, reinitialize ClaudeKit
ck init -g --kit engineer
```

---

## Command Not Found

### Slash Commands Don't Work

**Symptom**: `/command` shows "command not found" or no response

**Detailed Solution**:

**Step 1: Verify Claude Code is running**

```bash
# Check if Claude Code CLI is available
claude --version

# If not found, install from claude.ai/code
```

**Step 2: Check .claude directory structure**

```bash
# Global install (recommended)
# Should show:
# ~/.claude/
# ├── agents/
# ├── skills/
# └── .ck.json

tree ~/.claude -L 2

# Or without tree command
ls ~/.claude/
ls ~/.claude/skills/
```

**Step 3: Verify skill files exist**

```bash
# List all installed skills
ls ~/.claude/skills/

# Should show directories like:
# cook/  fix/  brainstorm/  test/  scout/ ...

# Verify a specific skill
ls ~/.claude/skills/cook/
# Should show: SKILL.md
```

**Step 4: Check skill file format**

```bash
# View skill file
cat ~/.claude/skills/cook/SKILL.md

# Must have frontmatter:
# ---
# name: ck:cook
# description: Implement features...
# ---
```

**Expected structure**:
```markdown
---
name: ck:cook
description: Implement features, plans, and fixes with structured workflow
category: utilities
---

# Cook - Smart Feature Implementation
...
```

---

### ck Commands Don't Work

**Symptom**: `ck new` or `ck init` shows "command not found"

**Solution**:

```bash
# Check if CLI installed
npm list -g claudekit-cli

# If not installed
npm install -g claudekit-cli

# Verify
ck --version

# If still not found, check PATH
which ck
echo $PATH
```

See [Installation Issues](/docs/support/troubleshooting/installation-issues) for PATH configuration.

---

## Command Execution Failures

### Command Starts But Fails

**Symptom**: Command begins execution but throws errors

**Diagnosis**:

```bash
# Run with verbose output
export CLAUDEKIT_VERBOSE=1
/ck:cook implement user authentication

# Check error message details
```

**Common failures**:

#### Missing API Keys

**Error**: "API key not found" or "GEMINI_API_KEY is not set"

**Solution**:

```bash
# Add to .env
echo 'GEMINI_API_KEY=your-key-here' >> .env

# Or export for current session
export GEMINI_API_KEY=your-key-here

# Verify
echo $GEMINI_API_KEY
```

See [API Key Setup](/docs/support/troubleshooting/api-key-setup) for complete configuration.

#### Invalid Command Arguments

**Error**: "Invalid argument" or "Unexpected option"

**Solution**:

```bash
# Use correct format — natural language after skill name:
/ck:cook implement feature name

# Flags use -- prefix:
/ck:fix --auto
/ck:cook "add auth" --fast

# NOT colon-separated flags (old syntax):
# /ck:fix:auto  ❌  (wrong)
# /ck:fix --auto  ✓  (correct)
```

#### Agent Not Available

**Error**: "Agent 'planner' not found" or agent fails to respond

**Solution**:

```bash
# Check agents directory
ls ~/.claude/agents/    # global
ls .claude/agents/      # local

# Should show:
# planner.md
# researcher.md
# code-reviewer.md
# etc.

# Verify agent file
cat ~/.claude/agents/planner.md

# Reinitialize if missing
ck init -g --kit engineer
```

See [Agent Issues](/docs/support/troubleshooting/agent-issues) for agent-specific problems.

---

## Syntax Errors

### Invalid Frontmatter

**Symptom**: Skill file exists but skill doesn't load

**Problem**: Frontmatter syntax errors

```bash
# Check frontmatter format
head -n 10 ~/.claude/skills/cook/SKILL.md
```

✅ **Correct format**:
```yaml
---
name: cook
description: Implement a feature step by step
model: gemini-2.5-flash-agent
---
```

❌ **Incorrect formats**:
```yaml
# Missing closing ---
---
name: cook
description: Implement a feature

# Extra spaces
---
 name: cook
description: Implement a feature
---

# Wrong separators
***
name: cook
description: Implement a feature
***
```

**Fix**:
1. Ensure exactly three dashes: `---`
2. No spaces before property names
3. Use correct YAML syntax
4. Include closing `---`

### Skill Name Conflicts

**Symptom**: Custom skill doesn't work, core skill runs instead

**Problem**: Duplicate skill names

**Solution**:

```bash
# Find duplicates
find ~/.claude/skills -name "SKILL.md" -exec grep -l "^name: ck:cook$" {} \;

# Should show only one file

# If duplicates exist, rename your custom skill
# Change name in frontmatter to a unique value:
# name: ck:cook-custom
```

---

## File System Issues

### .claude Directory Missing

**Symptom**: No slash commands work, directory not found

**Solution**:

```bash
# Initialize ClaudeKit
ck new --kit engineer

# Or if already initialized
ck init --kit engineer

# Verify structure
tree .claude -L 2
```

### Corrupted Skill Files

**Symptom**: Skills worked before, now fail with parse errors

**Solution**:

ClaudeKit creates an automatic recovery backup under `~/.claudekit/backups/` before destructive refresh or uninstall flows. Keep the manual copy below for your own explicit backup as well.

```bash
# Backup current .claude (global)
cp -r ~/.claude ~/.claude.backup

# Re-install to fresh version
ck init -g --kit engineer

# Restore custom skills if needed
cp -r ~/.claude.backup/skills/my-custom-skill ~/.claude/skills/

# Verify
/ck:cook test command
```

### Permission Issues

**Symptom**: "Permission denied" when accessing .claude files

**Solution**:

```bash
# Check file permissions
ls -la .claude/

# Fix permissions (Unix/Linux/macOS)
chmod -R 755 .claude/

# On Windows (PowerShell as Admin)
icacls .claude /grant Everyone:F /T
```

---

## Verify Command Structure

### Required Files

ClaudeKit (global install) requires this structure:

```
~/.claude/
├── agents/          # AI agent definitions
│   ├── planner.md
│   ├── researcher.md
│   ├── code-reviewer.md
│   └── ...
├── skills/          # Installed skills (from AgentKit kits)
│   ├── cook/
│   │   └── SKILL.md
│   ├── fix/
│   │   └── SKILL.md
│   ├── brainstorm/
│   │   └── SKILL.md
│   └── ...
├── .ck.json         # ClaudeKit configuration
├── .ckignore        # Paths excluded from LLM context
└── settings.json    # Claude Code hook settings
```

> **Note:** There is no `commands/` directory in current AgentKit installations. Skills replaced commands as of engineer@2.12.0.

### Validate Structure

```bash
# Check all required directories (global)
for dir in agents skills; do
  if [ -d "$HOME/.claude/$dir" ]; then
    echo "✅ ~/.claude/$dir exists"
  else
    echo "❌ ~/.claude/$dir missing — run: ck init -g --kit engineer"
  fi
done

# Count skill directories
ls ~/.claude/skills/ | wc -l
# Should show 50+

# Count agent files
find ~/.claude/agents -name "*.md" | wc -l
# Should show 5+
```

---

## Debugging Commands

### Enable Verbose Mode

```bash
# Method 1: Environment variable
export CLAUDEKIT_VERBOSE=1
/ck:cook implement feature

# Method 2: Command flag (if supported)
/ck:cook implement feature --verbose

# Method 3: Check logs
cat ~/.claudekit/logs/latest.log
```

### Test Individual Components

```bash
# Test agent directly
cat ~/.claude/agents/planner.md

# Test skill file
head -n 20 ~/.claude/skills/cook/SKILL.md

# Test Claude Code
claude --version
```

### Run Diagnostics

```bash
# If available
ck diagnose --verbose

# Manual checks
echo "Node: $(node --version)"
echo "npm: $(npm --version)"
echo "Claude Code: $(claude --version)"
echo "ClaudeKit CLI: $(ck --version)"
echo "Working directory: $(pwd)"
echo ".claude exists: $([ -d .claude ] && echo yes || echo no)"
```

---

## Common Quick Fixes

### Reset ClaudeKit

```bash
# Backup custom files (global install)
cp -r ~/.claude ~/.claude.backup

# Update to latest
ck init -g --kit engineer

# Restore custom skills
cp -r ~/.claude.backup/skills/my-custom-skill ~/.claude/skills/

# Test
/ck:cook hello world
```

### Verify Command Works

```bash
# Simple test command
/ck:cook implement hello world feature

# Expected: Planner starts, creates plan, delegates to agents

# If works: Other commands should work too
# If fails: Check specific error message above
```

### Reload Claude Code

```bash
# Exit Claude Code (Ctrl+C or type 'exit')
exit

# Restart
claude

# Or with skip permissions
claude --dangerously-skip-permissions

# Test command again
/ck:cook test
```

---

## Prevention Tips

✅ **Do**:
- Keep ClaudeKit updated: `ck init`
- Backup .claude before modifications
- Use correct frontmatter syntax
- Verify command names are unique
- Check .claude structure regularly

❌ **Don't**:
- Modify core command files directly
- Delete .claude directory without backup
- Mix ClaudeKit versions
- Create commands without frontmatter
- Use special characters in command names

---

## Related Issues

- [Installation Issues](/docs/support/troubleshooting/installation-issues) - CLI not installed properly
- [Agent Issues](/docs/support/troubleshooting/agent-issues) - Agents not responding
- [API Key Setup](/docs/support/troubleshooting/api-key-setup) - Missing credentials

---

## Still Stuck?

### Collect Debug Info

```bash
# Create debug report
{
  echo "=== System Info ==="
  uname -a
  node --version
  npm --version
  claude --version
  ck --version

  echo -e "\n=== Directory Structure ==="
  tree .claude -L 2

  echo -e "\n=== Command Files ==="
  find .claude/commands -name "*.md"

  echo -e "\n=== Recent Errors ==="
  tail -50 ~/.claudekit/logs/latest.log
} > claudekit-debug.txt
```

### Get Help

1. **GitHub Issues**: [Report command problems](https://github.com/claudekit/claudekit-engineer/issues)
2. **Discord**: [Ask community](https://claudekit.cc/discord)
3. **Include**: Debug report, error message, steps to reproduce

---

**Most command issues stem from missing files or incorrect structure.** Run `ck init --kit engineer` to fix 80% of problems instantly.
