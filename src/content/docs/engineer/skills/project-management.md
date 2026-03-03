---
title: "ck:project-management"
description: "Track progress, manage tasks, coordinate documentation updates, and bridge sessions with persistent plan files"
section: engineer
kit: engineer
category: skills
order: 50
published: true
---

# `ck:project-management`

Project oversight using Claude's native task system with persistent plan files. Bridges sessions, tracks progress, coordinates docs updates, and generates status reports.

## What This Skill Does

Project Management connects ephemeral session tasks to persistent plan files. Tasks disappear when a session ends—plan files don't. This skill maintains continuity by hydrating tasks from plan files at session start and syncing state back on completion.

## Core Capabilities

### Task Operations

| Operation | When |
|-----------|------|
| `TaskCreate` | Hydrate from plan `[ ]` items, add discovered work |
| `TaskUpdate` | Mark in_progress on start, completed on finish |
| `TaskGet` | Read full task details before starting |
| `TaskList` | Survey available / blocked work |

### Session Bridging

The hydration pattern keeps plans and tasks in sync:

```
Session Start:
  Read plan files → find [ ] items → TaskCreate for each

During Work:
  TaskUpdate(in_progress) → do work → TaskUpdate(completed)

Sync Back:
  Mark [ ] → [x] in plan file, update YAML frontmatter status

Next Session:
  Re-hydrate remaining [ ] items → continue
```

### Progress Tracking

Scan active plans directory, compute:
- Phases complete vs. total
- Tasks completed vs. in-progress vs. blocked
- Estimated remaining effort (from phase frontmatter)
- Blockers and dependencies

### Documentation Coordination

After implementation milestones, triggers docs-manager to:
- Update `./docs/` directory files
- Evaluate claudekit-docs impact
- Create or update relevant documentation pages

### Status Reporting

Generates `plans/reports/project-status-YYMMDD.md` with:
- Phase completion percentages
- Active blockers
- Recent completions
- Next priorities

## Plan YAML Frontmatter

Phase files support structured metadata for tracking:

```yaml
---
title: "ck:project-management"
status: in-progress   # pending | in-progress | completed
priority: P1
effort: medium
branch: feature-branch
tags: [auth, api]
created: 2026-02-05
---
```

## Workflow

```
Scan Plans → Hydrate Tasks → Track Progress
→ Update Status → Generate Report → Trigger Doc Updates
```

1. **Scan Plans** — find active `plans/` directories with uncompleted phases
2. **Hydrate Tasks** — create session tasks from `[ ]` items in phase files
3. **Track Progress** — monitor task state changes during session
4. **Update Status** — sync completed tasks back to plan files (`[x]`)
5. **Generate Report** — write status report with metrics
6. **Trigger Doc Updates** — coordinate with docs-manager if milestones hit

## Example Prompts

- "What's the current status of the active plan?"
- "Hydrate tasks from the authentication plan and start tracking"
- "Generate a project status report"
- "Mark the database phase complete and update the plan"
- "What's blocked in the current sprint?"

## Related Skills

- [Planning](/docs/engineer/skills/plan) — creates the plan files this skill tracks
- [Cook](/docs/engineer/skills/cook) — executes phases tracked by this skill
- [Plans Kanban](/docs/engineer/skills/plans-kanban) — visual kanban view of plan progress
