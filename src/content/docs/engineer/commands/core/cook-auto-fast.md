---
title: /cook:auto:fast
description: Quick scout, plan & implement without research
section: engineer
kit: engineer
category: commands/core
order: 27
published: true
---

# /cook:auto:fast

Fast feature implementation with scouting and quick planning (no research).

## Syntax

```bash
/cook:auto:fast [tasks-or-prompt]
```

## Workflow

1. **Scout**: `scout` subagent finds related resources in codebase
2. **Plan**: `/plan:fast` creates plan (no research)
3. **Implement**: `/code "skip code review step"` implements the plan

## Key Characteristics

- No external research
- Uses existing codebase knowledge
- Skips code review step
- Fastest `/cook` variant

## Comparison

| Command | Research | Scout | Code Review |
|---------|----------|-------|-------------|
| `/cook` | If needed | If needed | Yes |
| `/cook:auto` | Yes | If needed | Yes |
| `/cook:auto:fast` | No | Yes | No |

## When to Use

- Task is well-understood
- Codebase patterns are established
- Quick iteration needed
- Trust existing code quality

## When NOT to Use

- Complex integrations
- Security-critical code
- Production-facing changes
- New architecture patterns

## Example

```bash
/cook:auto:fast [add pagination to user list API]

# Workflow:
# 1. Scout finds existing pagination patterns
# 2. Quick plan based on codebase
# 3. Implement without review
```

---

**Key Takeaway**: Use `/cook:auto:fast` for rapid development when you trust the codebase and need minimal overhead.
