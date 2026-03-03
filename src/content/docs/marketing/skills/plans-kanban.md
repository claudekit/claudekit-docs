---
title: "ckm:plans-kanban"
description: "Plans dashboard with Kanban-style progress tracking, phase visualization, and task status management for implementation plans."
section: marketing
kit: marketing
category: skills
order: 96
---

# `ckm:plans-kanban`

> Visualize implementation plans as Kanban boards with phase tracking, task statuses, and progress dashboards.

## What This Skill Does

**The Challenge**: Implementation plans stored as markdown files lack visual progress tracking. Teams can't see at a glance which phases are blocked, in progress, or complete without reading every file.

**The Solution**: Plans Kanban skill generates visual dashboards from plan directories, transforms phase files into Kanban columns, tracks task completion rates, and identifies blockers — all from existing plan file structure.

## Activation

**Implicit**: Activates when viewing plan status, generating progress reports, or visualizing project phases.

**Explicit**: Activate via prompt:
```
Activate plans-kanban skill to show the current status of our implementation plan
```

## Capabilities

### 1. Plan Directory Scanning
Parse plan directories to extract phase status and task completion.

**Scans for**:
- Phase files (`phase-XX-name.md`)
- Task checkboxes (`- [ ]` pending, `- [x]` complete)
- Status markers (`Status: In Progress`, `Status: Blocked`)
- Blocker annotations

### 2. Kanban Board Generation
Transform plan phases into visual Kanban columns.

**Column structure**:
```
| Todo | In Progress | Blocked | Done |
|------|-------------|---------|------|
| Phase 4 | Phase 2 | Phase 3 | Phase 1 |
| Phase 5 | | | |
```

### 3. Progress Dashboard
Aggregate task completion metrics across all phases.

**Metrics displayed**:
- Total tasks vs completed tasks per phase
- Overall completion percentage
- Phases by status (todo/in-progress/blocked/done)
- Estimated remaining work

## Prerequisites

- Plans directory at `./plans/` with standard phase file naming
- Phase files using checkbox format for task tracking

## Configuration

**Standard phase file structure**:
```markdown
## Status
In Progress  <!-- or: Todo, Blocked, Done -->

## Todo List
- [x] Completed task
- [ ] Pending task
- [ ] Another pending task
```

**Blocker annotation**:
```markdown
## Blockers
- Waiting for API credentials from DevOps
```

## Best Practices

**1. Update status on phase file, not just tasks**
Phase-level status (`## Status`) is used for Kanban columns. Keep it current.

**2. Use consistent checkbox format**
`- [x]` for done, `- [ ]` for pending. Mixed formats break progress calculation.

**3. Tag blockers explicitly**
Use `## Blockers` section so they surface in dashboard view.

## Common Use Cases

### Use Case 1: Sprint Planning Review
**Scenario**: Team standup needs quick overview of implementation progress.

**Workflow**:
1. Scan current plan directory
2. Generate Kanban board with phase statuses
3. Calculate completion percentages per phase
4. Flag blocked phases with blocker descriptions
5. Display in terminal or export to markdown

**Output**: Visual Kanban board + progress summary.

### Use Case 2: Stakeholder Progress Report
**Scenario**: Weekly progress report for non-technical stakeholders.

**Workflow**:
1. Aggregate task completion across all phases
2. Generate percentage complete by phase
3. List completed milestones (done phases)
4. Surface blockers requiring stakeholder attention

**Output**: Executive summary with completion metrics and blocker highlights.

## Troubleshooting

**Issue**: Phase tasks not counting correctly
**Solution**: Verify checkbox format is exactly `- [ ]` or `- [x]`. Spaces matter.

**Issue**: Status not reflecting in Kanban
**Solution**: Add `## Status` header with exact value: `Todo`, `In Progress`, `Blocked`, or `Done`.

## Related Skills

- [Kanban](/docs/marketing/skills/kanban) - General Kanban task management
- [Plan](/docs/marketing/skills/plan) - Implementation plan creation
- [Dashboard](/docs/marketing/skills/dashboard) - Marketing metrics dashboards

## Related Commands

- `/ckm:plans-kanban` - Generate plans Kanban view
- `/ckm:plan` - Create implementation plan
- `/ckm:kanban` - General Kanban management
