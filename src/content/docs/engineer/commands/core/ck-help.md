---
title: /ck-help
description: ClaudeKit usage guide - search commands, categories, and workflows
section: engineer
kit: engineer
category: commands/core
order: 21
published: true
---

# /ck-help

All-in-one ClaudeKit guide for discovering commands and workflows.

## Syntax

```bash
/ck-help [category|command|task description]
```

## Examples

```bash
# Overview of all commands
/ck-help

# Explore a category
/ck-help fix

# Task-based search
/ck-help add login page
```

## Response Patterns

| Input | Response |
|-------|----------|
| Empty | Full overview of commands |
| Category | Category workflow with commands |
| Task description | Recommended commands for task |

## Correct Workflows

- `/plan` → `/cook`: Plan first, then execute the plan
- `/cook`: Standalone - plans internally, no separate `/plan` needed
- **NEVER** `/plan` → `/cook` (cook has its own planning)

## Example Interaction

```bash
/ck-help fix
# Response: Here's the fixing workflow:
# - /fix --quick - Quick fix for simple issues
# - /fix - Deep analysis for complex bugs
# - /fix - Fix test failures
# - /fix - Fix TypeScript errors
# - /fix - Fix CI/CD failures
```

---

**Key Takeaway**: Use `/ck-help` to discover ClaudeKit commands, explore categories, or find commands for specific tasks.
