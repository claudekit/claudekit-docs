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

**Symptom**: Typing `/cook` or other slash commands produces no response

**Solution**:

```bash
# 1. Verify .claude directory exists
ls -la .claude/

# 2. Check commands directory
ls .claude/commands/

# 3. Verify specific command file
cat .claude/commands/core/cook.md

# If files missing, reinitialize ClaudeKit
ck init --kit engineer
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
# Should show:
# .claude/
# ├── agents/
# ├── commands/
# ├── skills/
# └── workflows/

tree .claude -L 2

# Or without tree command
ls -R .claude/
```

**Step 3: Verify command files exist**

```bash
# List all commands
find .claude/commands -name "*.md"

# Should show files like:
# .claude/commands/core/cook.md
# .claude/commands/core/plan.md
# .claude/commands/fix/fast.md
# etc.
```

**Step 4: Check command file format**

```bash
# View command file
cat .claude/commands/core/cook.md

# Must have frontmatter:
# ---
# name: cook
# description: Implement a feature step by step
# ---
```

**Expected structure**:
```markdown
---
name: cook
description: Implement a feature step by step
model: gemini-2.5-flash-agent
---

# Cook Command

Detailed implementation instructions...
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

See [Installation Issues](/docs/troubleshooting/installation-issues) for PATH configuration.

---

## Command Execution Failures

### Command Starts But Fails

**Symptom**: Command begins execution but throws errors

**Diagnosis**:

```bash
# Run with verbose output
export CLAUDEKIT_VERBOSE=1
/cook implement user authentication

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

See [API Key Setup](/docs/troubleshooting/api-key-setup) for complete configuration.

#### Invalid Command Arguments

**Error**: "Invalid argument" or "Unexpected option"

**Solution**:

```bash
# Check command syntax in file
cat .claude/commands/core/cook.md

# Use correct format:
/cook implement feature name

# NOT:
/cook --implement feature
```

#### Agent Not Available

**Error**: "Agent 'planner' not found" or agent fails to respond

**Solution**:

```bash
# Check agents directory
ls .claude/agents/

# Should show:
# planner.md
# researcher.md
# code-reviewer.md
# etc.

# Verify agent file
cat .claude/agents/planner.md

# Reinitialize if missing
ck init --kit engineer
```

See [Agent Issues](/docs/troubleshooting/agent-issues) for agent-specific problems.

---

## Syntax Errors

### Invalid Frontmatter

**Symptom**: Command file exists but command doesn't load

**Problem**: Frontmatter syntax errors

```bash
# Check frontmatter format
head -n 10 .claude/commands/core/cook.md
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

### Command Name Conflicts

**Symptom**: Custom command doesn't work, core command runs instead

**Problem**: Duplicate command names

**Solution**:

```bash
# Find duplicates
find .claude/commands -name "*.md" -exec grep -l "^name: cook$" {} \;

# Should show only one file

# If duplicates exist, rename custom command
# Change name in frontmatter
---
name: cook-custom
description: My custom cook implementation
---
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

### Corrupted Command Files

**Symptom**: Commands worked before, now fail with parse errors

**Solution**:

```bash
# Backup current .claude
cp -r .claude .claude.backup

# Update to fresh version
ck init --kit engineer

# Restore custom files if needed
cp .claude.backup/commands/my-custom.md .claude/commands/

# Verify
/cook test command
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

ClaudeKit requires this structure:

```
.claude/
├── agents/          # AI agent definitions
│   ├── planner.md
│   ├── researcher.md
│   ├── code-reviewer.md
│   └── ...
├── commands/        # Slash commands
│   ├── core/
│   │   ├── cook.md
│   │   ├── plan.md
│   │   └── ...
│   ├── fix/
│   ├── git/
│   └── ...
├── skills/          # Specialized skills
├── workflows/       # Workflow definitions
CLAUDE.md           # Configuration
.mcp.json           # MCP server config [DEPRECATED]
```

### Validate Structure

```bash
# Check all required directories
for dir in agents commands skills workflows; do
  if [ -d ".claude/$dir" ]; then
    echo "✅ .claude/$dir exists"
  else
    echo "❌ .claude/$dir missing"
  fi
done

# Count command files
find .claude/commands -name "*.md" | wc -l
# Should show 30+

# Count agent files
find .claude/agents -name "*.md" | wc -l
# Should show 12+
```

---

## Debugging Commands

### Enable Verbose Mode

```bash
# Method 1: Environment variable
export CLAUDEKIT_VERBOSE=1
/cook implement feature

# Method 2: Command flag (if supported)
/cook implement feature --verbose

# Method 3: Check logs
cat ~/.claudekit/logs/latest.log
```

### Test Individual Components

```bash
# Test agent directly
cat .claude/agents/planner.md

# Test command parsing
head -n 20 .claude/commands/core/cook.md

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
# Backup custom files
cp -r .claude .claude.backup

# Update to latest
ck init --kit engineer

# Restore custom commands
cp .claude.backup/commands/my-custom.md .claude/commands/

# Test
/cook hello world
```

### Verify Command Works

```bash
# Simple test command
/cook implement hello world feature

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
/cook test
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

- [Installation Issues](/docs/troubleshooting/installation-issues) - CLI not installed properly
- [Agent Issues](/docs/troubleshooting/agent-issues) - Agents not responding
- [API Key Setup](/docs/troubleshooting/api-key-setup) - Missing credentials

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
