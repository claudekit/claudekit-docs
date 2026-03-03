---
title: "ck:bootstrap"
description: "End-to-end project scaffolding from idea to running code with research, tech stack selection, and implementation"
section: engineer
kit: engineer
category: skills
order: 50
published: true
---

# Bootstrap

End-to-end project scaffolding orchestrator. Takes a requirement from zero to running, tested, reviewed code by delegating through research, planning, and implementation in sequence.

## What This Skill Does

Bootstrap handles the entire "greenfield" workflow: git init, tech stack research, architecture design, planning, implementation, tests, review, docs, and onboarding. It doesn't write code directly—it orchestrates `/ck:plan` and `/ck:cook` with the right flags for your chosen mode.

## Modes

| Flag | Mode | User Gates | Planning Skill | Cook Skill |
|------|------|-----------|----------------|------------|
| `--full` | Full interactive | Every phase | `--hard` | (interactive) |
| `--auto` | Automatic (default) | Design only | `--auto` | `--auto` |
| `--fast` | Quick | None | `--fast` | `--auto` |
| `--parallel` | Multi-agent | Design only | `--parallel` | `--parallel` |

## Usage

```
/ck:bootstrap <requirements> [flags]
```

**Examples:**
- `/ck:bootstrap "Build a SaaS dashboard with auth and billing"`
- `/ck:bootstrap "REST API for inventory management" --fast`
- `/ck:bootstrap "Real-time collaboration tool like Figma" --full`
- `/ck:bootstrap "E-commerce platform with Stripe + CMS" --parallel`

## Workflow Overview

```
Git Init → Research → Tech Stack Selection → Design Review
→ Planning → Implementation → Tests → Code Review
→ Docs → Onboarding Guide → Final Summary
```

**User gates** (pause for approval) depend on mode:
- `--full`: every phase
- `--auto` / `--parallel`: design phase only
- `--fast`: none (fully autonomous)

## How It Works

Bootstrap is an orchestrator, not an implementer:

1. **Git Init** — initialize repo if not already a git project
2. **Research** — investigate tech stack options for your requirements
3. **Tech Stack** — recommend and confirm stack (Node/Bun, framework, DB, auth, etc.)
4. **Design** — architecture overview, data model, API shape
5. **Plan** — delegates to `/ck:plan` with mode-appropriate flags
6. **Implement** — delegates to `/ck:cook` with mode-appropriate flags
7. **Test** — verifies test suite passes (100% required)
8. **Review** — code-reviewer agent validates quality
9. **Docs** — generates README, API docs, setup guide
10. **Onboard** — produces `CONTRIBUTING.md` and dev quickstart

## Example Prompts

- `/ck:bootstrap "Multi-tenant SaaS with team workspaces" --auto`
- `/ck:bootstrap "CLI tool for managing dotfiles" --fast`
- `/ck:bootstrap "GraphQL API with subscriptions" --parallel`
- `/ck:bootstrap "Mobile app backend with push notifications" --full`

## Related Skills

- [Planning](/docs/engineer/skills/plan) — plan skill invoked during workflow
- [Cook](/docs/engineer/skills/cook) — cook skill invoked during workflow
- [Agent Teams](/docs/engineer/skills/team) — use with `--parallel` for multi-agent execution
