---
title: "ckm:cook"
description: "End-to-end feature implementation with smart routing — from planning to code to tests to review, auto-selecting the right specialist agents."
section: marketing
kit: marketing
category: skills
order: 113
---

# `ckm:cook`

> Implement complete features end-to-end with smart agent routing — automatically selecting planner, coder, tester, and reviewer based on task complexity.

## What This Skill Does

**The Challenge**: Feature implementation requires orchestrating multiple specialists (planning, coding, testing, reviewing) in the right sequence. Manually coordinating this workflow is slow and inconsistent.

**The Solution**: Cook skill is the primary implementation command that analyzes task complexity, auto-routes to appropriate specialist agents, and orchestrates the full development pipeline — plan → implement → test → review — in a single invocation.

## Activation

**Implicit**: Activates as the default implementation workflow for new feature requests.

**Explicit**: Activate via prompt:
```
/cook add Stripe subscription billing to the user dashboard
```

**Auto mode** (recommended):
```
/cook --auto
```

## Capabilities

### 1. Complexity Analysis
Assess task scope to determine the right workflow.

**Complexity tiers**:
| Tier | Scope | Workflow |
|------|-------|---------|
| Simple | Single file, <50 lines | Direct implement → review |
| Medium | 2-5 files, single feature | Plan → implement → test → review |
| Complex | Multi-file, cross-system | Research → plan → parallel implement → integrate → test → review |

### 2. Smart Agent Routing
Auto-select specialist agents based on task analysis.

**Routing logic**:
- New feature → `planner` first, then `implementer`
- Bug fix → `debugger` → `implementer` → `tester`
- Refactor → `code-reviewer` first for impact assessment
- UI work → `ui-designer` → `implementer`
- Full stack → parallel `frontend-implementer` + `backend-implementer`

### 3. Pipeline Orchestration
Coordinate sequential and parallel agent execution.

**Standard pipeline**:
```
Scout (codebase orientation)
    ↓
Plan (implementation plan)
    ↓
Implement (code changes)
    ↓
Test (unit + integration tests)
    ↓
Review (code quality check)
    ↓
Docs (update if needed)
```

### 4. Plan Generation
Produce structured implementation plans before coding.

**Plan output**: Phase files in `./plans/` with file ownership, implementation steps, and success criteria.

## Prerequisites

- Clear feature description or task specification
- Access to codebase (local or via Repomix)
- Target tech stack understood

## Configuration

**`/cook --auto`**: Fully autonomous mode — analyzes, plans, implements, tests, reviews without prompting.

**`/cook --plan-only`**: Generate implementation plan only, no code changes.

**`/cook --steps`**: Show pipeline steps before executing.

## Best Practices

**1. Provide context with the command**
`/cook add payments` is ambiguous. `/cook add Stripe one-time payment checkout for the premium upgrade flow` produces better results.

**2. Use `--auto` for well-defined features**
When requirements are clear and codebase is familiar, `--auto` saves significant time.

**3. Review the plan before implementation**
For complex features, run `--plan-only` first. Review and approve before full implementation run.

## Common Use Cases

### Use Case 1: New Feature Implementation
**Scenario**: Add dark mode toggle to marketing site.

**Command**:
```
/cook add dark mode toggle to the site header, persisting preference to localStorage
```

**Pipeline executed**:
1. Scout: Find header component and CSS variable setup
2. Plan: Two files — header component + CSS variables
3. Implement: Toggle button + `dark` class on `<html>` + localStorage
4. Test: Toggle behavior, preference persistence
5. Review: Accessibility check (contrast in dark mode)

**Output**: Dark mode implementation with tests.

### Use Case 2: Complex Feature with Parallel Agents
**Scenario**: Build complete notification system (backend + frontend).

**Command**:
```
/cook --auto build notification system: DB schema, API endpoints, and React UI
```

**Pipeline**: Plan → parallel (backend agent + frontend agent) → integration → tests → review

**Output**: Complete notification system with coordinated backend and frontend.

## Troubleshooting

**Issue**: Cook produces plan but implementation differs
**Solution**: Approve plan explicitly before implementation run. Use `--plan-only` + review + rerun.

**Issue**: Auto mode changes too many files
**Solution**: Scope the request more precisely. Specify which files should be affected.

## Related Skills

- [Plan](/docs/marketing/skills/plan) - Standalone planning workflow
- [Fix](/docs/marketing/skills/fix) - Bug fixing workflow
- [Scout](/docs/marketing/skills/scout) - Codebase orientation before cooking

## Related Commands

- `/cook` — Primary feature implementation command
- `/cook --auto` — Autonomous end-to-end implementation
- `/ckm:plan` — Standalone implementation planning
- `/ckm:fix` — Bug-focused workflow
