---
title: /cook --auto
description: Automatic feature implementation - plan, code, and optional commit
section: engineer
kit: engineer
category: commands/core
order: 26
published: true
---

# /cook --auto

Implement a feature automatically with planning, coding, and optional commit.

## Syntax

```bash
/cook --auto [tasks]
```

## Workflow

1. **Plan**: `/plan <detailed-instruction>` creates implementation plan
2. **Code**: `cook` skill implements the plan via natural language
3. **Commit**: Asks user if they want to commit, triggers `/git cm`

## Example

```bash
/cook --auto [add user authentication with JWT]

# Workflow:
# 1. Creates plan at plans/YYYYMMDD-HHmm-auth/
# 2. Implements authentication
# 3. Runs tests
# 4. Code review
# 5. Asks: "Want to commit?" → /git cm
```

## Comparison

| Command | Planning | Testing | Commit |
|---------|----------|---------|--------|
| `/cook` | Internal | Yes | No |
| `/cook --auto` | `/plan` | Yes | Ask user |
| `/cook --auto --fast` | `/plan:fast` | Yes | No |

## When to Use

- Feature needs explicit plan
- Want plan saved for reference
- Need user approval before commit

## When to Use /cook Instead

- Simple features
- Don't need saved plan
- Faster iteration

---

**Key Takeaway**: Use `/cook --auto` when you want explicit planning with saved plan files before implementation.
