---
title: "ckm:kanban"
description: "AI agent orchestration board for task visualization"
section: marketing
kit: marketing
category: skills
order: 40
---

# Kanban

> Visualize and orchestrate AI agent tasks on a Kanban board for transparent, parallel marketing workflows.

## What This Skill Does

The Kanban skill provides a task visualization board for orchestrating AI agent workflows. When multiple agents are running in parallel — one writing copy, another researching competitors, another scheduling posts — Kanban tracks their status in real time so the team always knows what's in progress, blocked, or complete.

Beyond visualization, the skill helps structure work intake: tasks are defined with clear owners (human or agent), acceptance criteria, and dependencies. This prevents duplicate work, surfaces blockers early, and keeps complex multi-agent campaigns moving without coordination overhead.

The board integrates with the ClaudeKit task system, automatically pulling in tasks from active plans and updating their status as agents complete work.

## Quick Start

```
/ckm:kanban
```

Opens the Kanban board showing all active tasks across campaigns.

## Key Features

- Visual Kanban board: Backlog → In Progress → Review → Done
- AI agent task assignment and status tracking
- Dependency mapping between tasks
- Parallel agent workflow visualization
- Task intake from plan files
- Blocker flagging and escalation
- Export board state as Markdown or JSON

## Usage Examples

**Open team board**:
```
/ckm:kanban
# Shows all tasks across active campaigns with agent assignments
```

**Campaign-specific board**:
```
/ckm:kanban --campaign "Q2 Product Launch"
# Filters to tasks for a specific campaign
```

**Add task from conversation**:
```
Add a Kanban task: "Write 3 LinkedIn posts about the product launch"
Owner: social-media-agent, Priority: high, Due: Friday
```

## Related

- [ckm:plan](/docs/marketing/skills/plan) - Create plans that feed into Kanban
- [ckm:analyze](/docs/marketing/skills/analyze) - Track campaign performance alongside tasks
- [ckm:hub](/docs/marketing/skills/hub) - Full marketing workspace including Kanban
