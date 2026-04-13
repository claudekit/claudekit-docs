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
| `/ck:cook` | `cook` | Linked (auto-activates) |
| `/ck:fix` | `fix` | Linked (auto-activates) |
| `/ck:debug` | `debug` | Linked (auto-activates) |
| `/ck:scout` | `scout` | Linked (auto-activates) |
| `/design` | `frontend-design` | Linked (auto-activates) |
| `/ck:code-review` | `code-review` | Linked (auto-activates) |
| `/content` | `PowerWriting` | Skill |
| `/ck:brainstorm` | `brainstorm` | Passive (natural language) |

---

## Invocation Types Explained

- **Linked**: Auto-activates when relevant context is detected (e.g., `cook` activates when implementing from a plan)
- **Passive**: Activates via natural language (e.g., "brainstorm ideas for...")
- **Skill**: Explicitly referenced by name or natural language

---

## Updated Workflow

### Old Workflow (pre-1.3.0)
```
/ck:plan "feature X"
/code @plans/feature.md
```

### New Workflow (1.3.0+)
```
/ck:plan "feature X"
/clear
/ck:cook plans/feature.md
```

**Important**: Run `/clear` after `/ck:plan` to free context before implementation.

---

## Active Commands (unchanged)

These commands remain as slash commands:

- `/ck:ask` — Ask questions about project
- `/ck:bootstrap*` — Initialize project templates
- `/ck:coding-level` — Set coding detail level
- `/ck:docs*` — Documentation generation
- `/ck:journal` — Session journaling
- `/ck:kanban` — Plans dashboard launcher
- `/ck:plan*` — Planning workflows
- `/ck:preview` — Preview changes
- `/ck:code-review` — Codebase review (migrated from `/review:codebase*`)
- `/ck:test*` — Testing workflows
- `/ck:use-mcp` — MCP integration
- `/ck:watzup` — Status overview
- `/ck:worktree` — Git worktree management

---

## Command Modifiers (still work)

Command modifiers apply to active commands:

- `:fast` — Use faster model tier
- `:hard` — Use highest-capability model
- `:parallel` — Enable parallel execution
- `:two` — Use two-agent workflow

**Example**: `/ck:plan --hard "complex feature"` still works.

---

## Migration Tips

1. **Don't memorize**: Just describe what you want. Skills activate automatically.
2. **Use `/clear` liberally**: Especially after `/ck:plan` or before starting new tasks.
3. **Natural language first**: Try describing your task before reaching for a command.

---

## Example Migration

### Before (1.2.x)
```
/ck:plan "Add authentication"
/code @plans/260129-auth.md
/ck:test
/ck:code-review
```

### After (1.3.0+)
```
/ck:plan "Add authentication"
/clear
/ck:cook plans/260129-auth.md
/ck:test
/ck:code-review
```

The workflow uses explicit `/ck:cook` with the plan path after clearing context.
