---
title: /kanban
description: Visual dashboard for plans with progress tracking and timeline visualization
section: engineer
kit: engineer
category: commands/core
order: 21
published: true
---

# /kanban

Plans dashboard with progress tracking, phase status breakdown, and timeline visualization.

## Syntax

```bash
/kanban                  # View ./plans directory
/kanban [directory]      # View specific directory
/kanban --stop          # Stop running server
```

## Features

- Plan cards with progress bars
- Phase status breakdown (completed, in-progress, pending)
- Timeline/Gantt visualization
- Activity heatmap
- Direct links to issues and branches

## Usage

The command starts a local HTTP server accessible from both your machine and network devices.

**Default port**: 3500

Server runs as background task visible in `/tasks` for easy management via `KillShell`.

## Examples

```bash
/kanban                      # Dashboard for ./plans
/kanban plans/archive/       # View archived plans
/kanban --stop              # Stop server
```

## Future Vision

Evolving into **VibeKanban-inspired** AI agent orchestration:

### Phase 1 (Current - MVP)
- ✅ Task board with progress tracking
- ✅ Visual representation of plans/tasks
- ✅ Click to view plan details

### Phase 2 (Worktree Integration)
- Create tasks → spawn git worktrees
- Assign agents to tasks
- Track agent progress per worktree

### Phase 3 (Full Orchestration)
- Parallel agent execution monitoring
- Code diff/review interface
- PR creation workflow
- Agent output streaming
- Conflict detection

Track progress: [Issue #189](https://github.com/claudekit/claudekit-engineer/issues/189)
