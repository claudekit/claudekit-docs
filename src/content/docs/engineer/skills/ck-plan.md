---
title: "ck:plan"
description: "Create detailed technical implementation plans with research, architecture design, and comprehensive phase documentation"
section: engineer
kit: engineer
category: skills
order: 3
published: true
---

# Plan

Creates structured, research-backed implementation plans in the active plan root. Project scope defaults to `plans/` in the current project. Global scope is allowed conditionally and resolves through the configured global plans root, defaulting to `~/.claude/plans/` when unset. Formerly split across `/ck:plan --fast`, `/ck:plan --hard`, and other commands—now consolidated into one skill.

## What This Skill Does

Planning produces complete project blueprints: `plan.md` overview plus `phase-XX-*.md` files with implementation steps, file ownership, success criteria, and risk assessment. Plans persist across sessions and drive task hydration.

## Workflow Modes

| Flag | Mode | Research | Red Team | Validation | Cook Flag |
|------|------|----------|----------|------------|-----------|
| `--auto` | Auto-detect | Follows mode | Follows mode | Follows mode | `--auto` |
| `--fast` | Fast | Skip | Skip | Skip | `--auto` |
| `--hard` | Hard | 2 researchers | Yes | Optional | (none) |
| `--deep` | Deep | 2-3 researchers + per-phase scout | Yes | Yes | (none) |
| `--parallel` | Parallel | 2 researchers | Yes | Optional | `--parallel` |
| `--two` | Two approaches | 2+ researchers | After selection | After selection | (none) |

Composable flags:
- `--tdd` — add tests-first structure to each phase for regression-safe refactors
- `--no-tasks` — skip task hydration after plan creation

## Usage

```
/ck:plan <requirements> [flags]
```

**Examples:**
- `/ck:plan "add Stripe subscription billing" --fast`
- `/ck:plan "migrate from REST to GraphQL" --hard`
- `/ck:plan "untangle the notification pipeline" --deep`
- `/ck:plan "refactor auth middleware safely" --tdd`
- `/ck:plan "implement real-time notifications + presence" --parallel`
- `/ck:plan "redesign auth system" --two`
- `/ck:plan "scaffold new microservice" --auto --no-tasks`
- `/ck:plan "create shared architecture roadmap" --global`

## Scope Rules

- **Project scope** is the default whenever the current working tree has project context.
- **Global scope** is allowed when:
  - you explicitly ask for it with `--global`, or
  - there is no project context to anchor a local plan.
- **No project context** means no `.git`, `package.json`, or `CLAUDE.md` was found in the ancestor chain.
- Scan unfinished plans in the active scope before creating a new one.

## Workflow Process

```
Pre-Creation Check → Mode Detection → Research Phase
→ Codebase Analysis → Plan Documentation → Red Team Review
→ Validation → Hydrate Tasks → Context Reminder
```

1. **Pre-Creation Check** — scan existing plans to avoid duplication
2. **Mode Detection** — interpret flags or auto-select based on task complexity
3. **Research Phase** — spawn parallel researchers (hard/deep/parallel/two modes)
4. **Codebase Analysis** — scout relevant files, patterns, dependencies
5. **Plan Documentation** — write plan.md + phase files
6. **Red Team Review** — adversarial critique of the plan (hard/deep/parallel/two)
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

Global scope uses the same directory shape under the configured global plans root instead of the current project.

Each phase file contains: overview, requirements, architecture, file ownership,
implementation steps, todo checklist, success criteria, risk assessment.

Deep mode adds per-phase file inventories, test scenario matrices, and
dependency maps. `--tdd` adds "Tests Before", "Refactor", and "Tests After"
sections so the generated plan protects existing behavior during refactors.

## Task Hydration

Tasks are ephemeral (session-scoped). Plan files are persistent. Hydration bridges them:

1. Read `[ ]` items from phase files
2. `TaskCreate` for each unchecked item
3. Work proceeds via `TaskUpdate`
4. On complete: mark `[x]` in plan file
5. Next session: re-hydrate remaining `[ ]` items

Use `--no-tasks` when you want the plan only (e.g., for review before execution).

If planning used `--tdd`, keep that flag on the cook handoff command:
`/ck:cook /absolute/path/to/plan.md --tdd`

## Cross-Plan Dependencies

Use `ck plan status` as the authoritative dependency/status view.

- Bare references such as `260413-auth-system` stay in the current scope.
- Cross-scope references use explicit prefixes:
  - `global:260413-auth-system`
  - `project:260413-dashboard`
- Missing refs should warn and render as `not found`, not hard-fail the plan.

## Active Plan State

Hooks track the current active plan. Downstream skills (cook, project-management, research) automatically write reports to the active plan's directory. Switching plans updates hook context.

## Quality Standards

Plans follow YAGNI, KISS, DRY. Honest and brutal—no wishful thinking about complexity or timeline. Concise phase files beat exhaustive ones. Each phase must be independently executable.

## Subcommands

| Subcommand | Purpose |
|------------|---------|
| `/ck:plan archive` | Write journal entry and archive completed plans |
| `/ck:plan red-team` | Adversarial review — hostile critique of a plan to find weaknesses |
| `/ck:plan validate` | Critical questions interview to verify plan is implementable |

## Related Skills

- [Cook](/docs/engineer/skills/cook) — executes plans produced by this skill
- [Bootstrap](/docs/engineer/skills/bootstrap) — end-to-end scaffold that delegates to plan + cook
- [Agent Teams](/docs/engineer/skills/team) — parallel execution teams that consume phase files
