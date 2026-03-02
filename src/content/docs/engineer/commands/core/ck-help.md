---
title: /ck:ck-help
description: ClaudeKit usage guide - search commands, categories, and workflows
section: engineer
kit: engineer
category: commands/core
order: 21
published: true
---

# /ck:ck-help

All-in-one ClaudeKit guide for discovering commands and workflows.

## Syntax

```bash
/ck:ck-help [category|command|task description]
```

## Examples

```bash
# Overview of all commands
/ck:ck-help

# Explore a category
/ck:ck-help fix

# Task-based search
/ck:ck-help add login page
```

## Response Patterns

| Input | Response |
|-------|----------|
| Empty | Full overview of commands |
| Category | Category workflow with commands |
| Task description | Recommended commands for task |

## Correct Workflows

- `/ck:plan` → `/ck:cook`: Plan first, then execute the plan
- `/ck:cook`: Standalone - plans internally, no separate `/ck:plan` needed
- **NEVER** `/ck:plan` → `/ck:cook` (cook has its own planning)

## Example Interaction

```bash
/ck:ck-help fix
# Response: Here's the fixing workflow:
# - /ck:fix --quick - Quick fix for simple issues
# - /ck:fix - Deep analysis for complex bugs
# - /ck:fix - Fix test failures
# - /ck:fix - Fix TypeScript errors
# - /ck:fix - Fix CI/CD failures
```

---

**Key Takeaway**: Use `/ck:ck-help` to discover ClaudeKit commands, explore categories, or find commands for specific tasks.
