---
title: "ck:kanban"
description: "Visual plans dashboard — track plan progress, open plan files, and manage phases from the CLI UI"
section: engineer
kit: engineer
category: skills
order: 99
published: true
---

# kanban

Open the ClaudeKit plans dashboard to visually track plan progress, navigate phases, and manage implementation status.

## What This Skill Does

`/ck:kanban` is an alias for `/ck:plans-kanban`. It opens the ClaudeKit CLI dashboard at the plans route, giving you a visual board of your current implementation plans with phase statuses, checkboxes, and quick navigation into plan files.

## Usage

```
/ck:kanban
```

Or use the underlying CLI directly:

```bash
ck config ui
```

## Dashboard Features

- Visual plan board showing all plans in `plans/` directory
- Phase status tracking (not started / in progress / complete)
- Check/uncheck individual phase tasks
- Click-through to open plan files
- Auto-starts the CLI dashboard server if not running

## CLI Commands

For scripted plan management, use the CLI directly:

```bash
# Open dashboard UI
ck config ui

# Check plan status
ck plan status /path/to/plan.md

# Mark a phase started
cd /path/to/plan-dir && ck plan check <phase-id> --start

# Mark a phase complete
cd /path/to/plan-dir && ck plan check <phase-id>

# Uncheck a phase
cd /path/to/plan-dir && ck plan uncheck <phase-id>
```

## Related Skills

- [plans-kanban](/docs/engineer/skills/plans-kanban) — The underlying skill this aliases
- [project-management](/docs/engineer/skills/project-management) — Task tracking and session bridging
- [cook](/docs/engineer/skills/cook) — Feature implementation that generates plans
