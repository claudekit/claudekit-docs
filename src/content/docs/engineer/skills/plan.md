---
title: "Planning"
description: "Create detailed technical implementation plans with research, architecture design, and comprehensive phase documentation"
section: engineer
kit: engineer
category: skills
order: 38
published: true
---

Creates structured, research-backed implementation plans in your `plans/` directory. Formerly split across `/plan:fast`, `/plan:hard`, and other commands—now consolidated into one skill.

## What This Skill Does

Planning produces complete project blueprints: `plan.md` overview plus `phase-XX-*.md` files with implementation steps, file ownership, success criteria, and risk assessment. Plans persist across sessions and drive task hydration.

## Workflow Modes

| Flag | Mode | Research | Red Team | Validation | Cook Flag |
|------|------|----------|----------|------------|-----------|
| `--auto` | Auto-detect | Follows mode | Follows mode | Follows mode | `--auto` |
| `--fast` | Fast | Skip | Skip | Skip | `--auto` |
| `--hard` | Hard | 2 researchers | Yes | Optional | (none) |
| `--parallel` | Parallel | 2 researchers | Yes | Optional | `--parallel` |
| `--two` | Two approaches | 2+ researchers | After selection | After selection | (none) |

Add `--no-tasks` to any mode to skip task hydration after plan creation.

## Usage

```
/plan <requirements> [flags]
```

**Examples:**
- `/plan "add Stripe subscription billing" --fast`
- `/plan "migrate from REST to GraphQL" --hard`
- `/plan "implement real-time notifications + presence" --parallel`
- `/plan "redesign auth system" --two`
- `/plan "scaffold new microservice" --auto --no-tasks`

## Workflow Process

```
Pre-Creation Check → Mode Detection → Research Phase
→ Codebase Analysis → Plan Documentation → Red Team Review
→ Validation → Hydrate Tasks → Context Reminder
```

1. **Pre-Creation Check** — scan existing plans to avoid duplication
2. **Mode Detection** — interpret flags or auto-select based on task complexity
3. **Research Phase** — spawn parallel researchers (hard/parallel/two modes)
4. **Codebase Analysis** — scout relevant files, patterns, dependencies
5. **Plan Documentation** — write plan.md + phase files
6. **Red Team Review** — adversarial critique of the plan (hard/parallel)
7. **Validation** — confirm plan is implementable
8. **Hydrate Tasks** — create session-scoped tasks from phase todo items
9. **Context Reminder** — remind active plan for downstream tools

## Plan Output Structure

```
plans/
└── YYMMDD-HHMM-<slug>/
    ├── plan.md              # Overview, phases, status
    ├── phase-01-setup.md    # Setup / environment
    ├── phase-02-*.md        # Implementation phases
    └── reports/
        └── researcher-*.md  # Research findings
```

Each phase file contains: overview, requirements, architecture, file ownership, implementation steps, todo checklist, success criteria, risk assessment.

## Task Hydration

Tasks are ephemeral (session-scoped). Plan files are persistent. Hydration bridges them:

1. Read `[ ]` items from phase files
2. `TaskCreate` for each unchecked item
3. Work proceeds via `TaskUpdate`
4. On complete: mark `[x]` in plan file
5. Next session: re-hydrate remaining `[ ]` items

Use `--no-tasks` when you want the plan only (e.g., for review before execution).

## Active Plan State

Hooks track the current active plan. Downstream skills (cook, project-management, research) automatically write reports to the active plan's directory. Switching plans updates hook context.

## Quality Standards

Plans follow YAGNI, KISS, DRY. Honest and brutal—no wishful thinking about complexity or timeline. Concise phase files beat exhaustive ones. Each phase must be independently executable.

## Related Skills

- [Cook](/docs/engineer/skills/cook) — executes plans produced by this skill
- [Bootstrap](/docs/engineer/skills/bootstrap) — end-to-end scaffold that delegates to plan + cook
- [Agent Teams](/docs/engineer/skills/team) — parallel execution teams that consume phase files
