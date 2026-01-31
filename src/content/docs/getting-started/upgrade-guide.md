---
title: "Upgrade Guide for Claude Code Users"
description: "Migrate from Claude Code to ClaudeKit seamlessly"
section: getting-started
order: 3
published: true
---

# Upgrading from Claude Code to ClaudeKit

Already using Claude Code? ClaudeKit enhances your workflow without breaking existing habits.

## What Changes?

**Stays the Same**:
- Claude Code CLI and interface
- Existing project structure
- .claude/ directory (extended, not replaced)
- Chat-based interaction

**New Capabilities**:
- Slash commands for common tasks
- Specialized agents (planner, tester, debugger)
- Reusable skills library
- Multi-agent collaboration

## Installation (Additive)

```bash
# Install ClaudeKit CLI (doesn't replace Claude Code)
npm install -g claudekit-cli

# Initialize in existing project
ck init
# → Adds .claude/CLAUDE.md, skills/, workflows/
# → Existing .claude/commands/ preserved
```

### Upgrading ClaudeKit

```bash
# Recommended: Use built-in update command
ck update

# Alternative: npm global update
npm install -g claudekit-cli@latest
```

## Gradual Migration Path

### Week 1: Try Core Commands
Start with `/cook` for feature development:
```bash
# Old way
You: "I need to add a new API endpoint for user profiles"
[Long conversation with manual guidance]

# ClaudeKit way
/cook "add user profiles API endpoint"
[Automated planning, development, testing]
```

### Week 2: Use Specialized Workflows
Adopt task-specific commands:
- `/fix` for bug fixing (faster than manual debugging)
- `/plan` for complex features (structured planning)
- `/docs:update` for documentation (automated sync)

### Week 3: Leverage Skills
Add custom skills for your stack:
```bash
/skill:create "Our GraphQL conventions"
# → Agents learn your team's patterns
```

### Week 4: Full Workflow Integration
Combine commands for complete workflows:
```bash
/plan "redesign checkout flow"
/clear  # Free context before implementation
/cook "Redesign checkout flow as planned"
/frontend-design "checkout UI mockup"
/fix
/git:pr "feature/new-checkout"
```

## Compatibility

**Supported**:
- Claude Code v1.0+
- Existing .claude/commands/ (fully compatible)
- Custom prompts (still work as-is)

**Not Supported**:
- Claude Desktop app (Claude Code CLI only)
- Projects without Git (ClaudeKit requires version control)

## FAQs

**Q: Do I need to rewrite existing commands?**
A: No. ClaudeKit commands coexist with your custom .claude/commands/

**Q: Can I still use regular chat?**
A: Yes. ClaudeKit adds slash commands, doesn't remove chat.

**Q: What if I don't like ClaudeKit?**
A: Uninstall and delete .claude/CLAUDE.md. No breaking changes.

## Next Steps

1. [Install ClaudeKit](/docs/getting-started/installation)
2. [Try Quick Start](/docs/getting-started/quick-start)
3. [Explore Commands](/docs/commands)