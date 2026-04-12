---
title: "ck:kanban"
description: "Alias launcher for the ClaudeKit plans dashboard"
section: engineer
kit: engineer
category: skills
order: 55
---

# Kanban

`ck:kanban` is now an alias for the plans dashboard launcher.

It no longer refers to a separate AI agent orchestration board in the engineer kit. For engineer users, this command opens the same integrated plans experience as `ck:plans-kanban`.

## Usage

```bash
/ck:kanban
```

## Current Behavior

- opens the plans dashboard inside `ck config ui`
- starts the dashboard if it is not already running
- follows CLI auto-fallback ports if `3456` is unavailable
- accepts old path/server flags with warnings for compatibility

## Use It For

- visual plan progress tracking
- phase timelines and activity views
- quick navigation into `plan.md` and phase files
- lightweight plan-state actions from the dashboard

## Related Skills

- [ck:plans-kanban](/docs/engineer/skills/plans-kanban) - primary plans dashboard launcher
- [ck:plan](/docs/engineer/skills/ck-plan) - plan creation and updates
