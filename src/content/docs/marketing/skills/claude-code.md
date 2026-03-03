---
title: "ckm:claude-code"
description: "Claude Code installation, skills, MCP servers, hooks, IDE integration — setup and configuration guide for the AI coding agent."
section: marketing
category: skills
order: 66
---

> Configure and extend Claude Code with custom skills, MCP server integrations, and workflow automation hooks.

## What This Skill Does

**The Challenge**: Claude Code is powerful out of the box but teams miss the productivity multiplier of custom skills, MCP integrations, and workflow hooks. Setting up the optimal environment requires navigating multiple configuration layers.

**The Solution**: Claude Code skill provides structured setup guides for installation, skill creation, MCP server configuration, hook automation, and IDE integration. Covers both personal and team-wide configurations for maximum leverage.

## Activation

**Implicit**: Activates when user asks about Claude Code setup, configuration, skills, or MCP servers.

**Explicit**: Activate via prompt:
```
Activate claude-code skill to [configure/install/extend] Claude Code
```

## Capabilities

### 1. Installation and Setup
```bash
# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Initialize in project
cd your-project
claude init

# Start interactive session
claude
```

**Global config**: `~/.claude/CLAUDE.md` — personal instructions for all projects.
**Project config**: `./CLAUDE.md` — project-specific context.

### 2. Skills System
Custom reusable workflows saved to `~/.claude/skills/`.

**Skill structure**:
```
~/.claude/skills/
├── my-skill/
│   ├── SKILL.md          # Skill definition and activation
│   ├── scripts/          # Python/Bash scripts
│   └── references/       # Reference docs
```

**Activate a skill**:
```
Activate [skill-name] skill to [describe task]
```

### 3. MCP Server Configuration
Connect Claude Code to external tools and data sources.

**`.claude/mcp.json` example**:
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/you/projects"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}" }
    }
  }
}
```

### 4. Hooks Automation
Trigger scripts before/after Claude Code operations.

**Hook types**: `PreToolCall`, `PostToolCall`, `Stop`, `SubagentStop`

**Use cases**: Auto-commit on file write, privacy blocking for sensitive paths, notification on task completion.

### 5. IDE Integration
- **VS Code**: Install "Claude Code" extension
- **Cursor**: Built-in support via API key
- **JetBrains**: Plugin available

## Prerequisites

- Node.js 18+
- Anthropic API key (`ANTHROPIC_API_KEY` in env)
- `~/.claude/CLAUDE.md` for personal configuration

## Best Practices

**1. Layer configurations**
Global `~/.claude/CLAUDE.md` for personal preferences. Project `./CLAUDE.md` for team-shared context.

**2. Use skills for repeated workflows**
Any task you do more than twice belongs in a skill.

**3. Pin MCP server versions**
Use exact versions in `mcp.json` to prevent breaking changes in automated workflows.

## Common Use Cases

### Use Case 1: Marketing Team Setup
**Scenario**: Onboard marketing team with ClaudeKit skills and shared config.

**Workflow**:
1. Install Claude Code globally on each machine
2. Clone `~/.claude/skills/` with team skill library
3. Share project `CLAUDE.md` with brand context and workflow rules
4. Configure MCP servers for shared tools (GA4, CRM, Notion)

### Use Case 2: Custom Marketing Automation Skill
**Scenario**: Build a skill that auto-generates weekly performance reports.

**Workflow**:
1. Create `~/.claude/skills/weekly-report/SKILL.md`
2. Add GA4 query scripts in `scripts/`
3. Define activation trigger in SKILL.md
4. Test with `/weekly-report` command

## Troubleshooting

**Issue**: Skill not activating automatically
**Solution**: Check `SKILL.md` activation triggers. Ensure phrasing matches patterns in skill definition.

**Issue**: MCP server fails to connect
**Solution**: Verify `command` is in PATH. Check environment variable names match exactly.

## Related Skills

- [Context Engineering](/docs/marketing/skills/context-engineering) - Token optimization
- [Kit Builder](/docs/marketing/skills/kit-builder) - Build ClaudeKit components
- [Docs Seeker](/docs/marketing/skills/docs-seeker) - Find latest Claude documentation
- [Debugging](/docs/marketing/skills/debugging) - Debug skill and agent issues

## Related Commands

- `/ckm:brainstorm` - Design skill architecture
- `/ckm:plan` - Plan automation workflows
