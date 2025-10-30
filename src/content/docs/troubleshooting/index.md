---
title: Troubleshooting
description: Quick fixes for common ClaudeKit issues - get unblocked in minutes
category: troubleshooting
order: 1
published: true
---

# Troubleshooting

Quick fixes for common issues. Most problems resolve in under 5 minutes.

## Quick Diagnosis

**Problem category?**
- [Installation fails](#installation) → [Installation Issues](/docs/troubleshooting/installation-issues)
- [Command not found or errors](#commands) → [Command Errors](/docs/troubleshooting/command-errors)
- [Agent not working](#agents) → [Agent Issues](/docs/troubleshooting/agent-issues)
- [API key errors](#api-keys) → [API Key Setup](/docs/troubleshooting/api-key-setup)
- [Slow or hanging](#performance) → [Performance Issues](/docs/troubleshooting/performance-issues)

## Installation

**Issue**: `ck: command not found`

**Fix**:
```bash
# Verify installation
npm list -g claudekit-cli

# Reinstall if needed
npm install -g claudekit-cli

# Verify
ck --version
```

[More installation fixes →](/docs/troubleshooting/installation-issues)

## Commands

**Issue**: `/command` does nothing

**Fix**:
1. Check `.claude/commands/` exists
2. Verify command file exists
3. Check frontmatter is valid

```bash
# List available commands
ls .claude/commands/**/*.md

# Test specific command
cat .claude/commands/core/cook.md
```

[More command fixes →](/docs/troubleshooting/command-errors)

## Agents

**Issue**: Agent not activating

**Fix**:
1. Verify `.claude/agents/` exists
2. Check agent file format
3. Confirm Claude Code is running

```bash
# List agents
ls .claude/agents/*.md

# Verify agent file
cat .claude/agents/planner.md
```

[More agent fixes →](/docs/troubleshooting/agent-issues)

## API Keys

**Issue**: "API key not found"

**Fix**:
```bash
# Add to .env
echo 'GEMINI_API_KEY=your-key' >> .env
echo 'SEARCH_API_KEY=your-key' >> .env

# Or export for session
export GEMINI_API_KEY=your-key
```

[Complete API key guide →](/docs/troubleshooting/api-key-setup)

## Performance

**Issue**: Commands take forever

**Fix**:
1. Check internet connection
2. Verify API keys are set
3. Use `--verbose` to see what's slow

```bash
# Run with verbose logging
/cook add feature --verbose
```

[More performance fixes →](/docs/troubleshooting/performance-issues)

## Common Quick Fixes

### Reset ClaudeKit

```bash
# Backup first
cp -r .claude .claude.backup

# Update to latest
ck update --kit engineer

# Restore custom files
cp .claude.backup/commands/my-custom.md .claude/commands/
```

### Clear Cache

```bash
# Clear Node modules
rm -rf node_modules
npm install

# Clear ClaudeKit cache
rm -rf ~/.claudekit/cache
```

### Verify Setup

```bash
# Check CLI
ck --version

# Check Claude Code
claude --version

# Check directory structure
tree .claude -L 2
```

## Still Stuck?

### Get Help

1. **Run diagnostics**:
   ```bash
   ck diagnose --verbose
   ```

2. **Check logs**:
   ```bash
   # Enable verbose mode
   export CLAUDEKIT_VERBOSE=1

   # Run command
   /cook add feature

   # Check output
   cat claudekit-debug.log
   ```

3. **Report issue**:
   - GitHub: https://github.com/claudekit/claudekit-engineer/issues
   - Include: OS, CLI version, error message, steps to reproduce

### Community

- **Discord**: [Join ClaudeKit Discord](https://discord.gg/claudekit)
- **GitHub Discussions**: Share solutions, ask questions
- **Twitter**: [@claudekit](https://twitter.com/claudekit) for updates

## Prevention Tips

✅ **Do**:
- Keep ClaudeKit updated (`ck update`)
- Use `--verbose` when debugging
- Backup before major changes
- Read error messages fully

❌ **Don't**:
- Modify core `.claude/` files directly
- Ignore API rate limits
- Skip version updates
- Delete `.claude/` directory

---

**95% of issues resolve in under 5 minutes** with these guides. Dive into specific sections for detailed fixes.
