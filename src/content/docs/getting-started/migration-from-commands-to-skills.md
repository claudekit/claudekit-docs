---
title: "Migration: Commands → Skills"
description: "Guide for migrating from deprecated slash commands to skills in engineer@1.3.0+"
category: "getting-started"
section: "getting-started"
order: 6
published: true
---

## What Changed in engineer@1.3.0+

Many slash commands have been converted to **skills** that activate automatically or via natural language. This reduces command clutter and creates a more intuitive workflow.

**Commands still exist** for core operations: planning, bootstrapping, documentation, testing, code review, and utilities.

---

## Migration Reference Table

| Old Command | New Skill | Invocation Type |
|-------------|-----------|-----------------|
| `/code` | `cook` | Linked (auto-activates) |
| `/cook` | `cook` | Linked (auto-activates) |
| `/fix` | `fix` | Linked (auto-activates) |
| `/debug` | `debug` | Linked (auto-activates) |
| `/scout` | `scout` | Linked (auto-activates) |
| `/design` | `frontend-design` | Linked (auto-activates) |
| `/code-review` | `code-review` | Linked (auto-activates) |
| `/content` | `PowerWriting` | Skill |
| `/brainstorm` | `brainstorm` | Passive (natural language) |

---

## Invocation Types Explained

- **Linked**: Auto-activates when relevant context is detected (e.g., `cook` activates when implementing from a plan)
- **Passive**: Activates via natural language (e.g., "brainstorm ideas for...")
- **Skill**: Explicitly referenced by name or natural language

---

## Updated Workflow

### Old Workflow (pre-1.3.0)
```
/plan "feature X"
/code @plans/feature.md
```

### New Workflow (1.3.0+)
```
/plan "feature X"
/clear
Implement feature X as planned
```

**Important**: Run `/clear` after `/plan` to free context before implementation. The `cook` skill auto-activates from natural language.

---

## Active Commands (unchanged)

These commands remain as slash commands:

- `/ask` — Ask questions about project
- `/bootstrap*` — Initialize project templates
- `/ck-help` — ClaudeKit help system
- `/coding-level` — Set coding detail level
- `/docs*` — Documentation generation
- `/journal` — Session journaling
- `/kanban` — Task board management
- `/plan*` — Planning workflows
- `/preview` — Preview changes
- `/review:codebase*` — Codebase review
- `/test*` — Testing workflows
- `/use-mcp` — MCP integration
- `/watzup` — Status overview
- `/worktree` — Git worktree management

---

## Command Modifiers (still work)

Command modifiers apply to active commands:

- `:fast` — Use faster model tier
- `:hard` — Use highest-capability model
- `:parallel` — Enable parallel execution
- `:two` — Use two-agent workflow

**Example**: `/plan:hard "complex feature"` still works.

---

## Migration Tips

1. **Don't memorize**: Just describe what you want. Skills activate automatically.
2. **Use `/clear` liberally**: Especially after `/plan` or before starting new tasks.
3. **Check `/ck-help`**: Lists all active commands and available skills.
4. **Natural language first**: Try describing your task before reaching for a command.

---

## Example Migration

### Before (1.2.x)
```
/plan "Add authentication"
/code @plans/260129-auth.md
/test
/code-review
```

### After (1.3.0+)
```
/plan "Add authentication"
/clear
Implement the authentication plan
/test
Review the code quality
```

The workflow is simpler and more streamlined. Skills auto-activate from natural language prompts.
