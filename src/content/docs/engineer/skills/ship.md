---
title: "ck:ship"
description: "Unified pipeline from feature branch to merged PR: test, review, commit, push, PR in one command"
section: engineer
kit: engineer
category: skills
order: 57
---

# Ship

Single command that takes your feature branch from current state to an open PR. Merge main, test, review, commit, push, create PR—all in one orchestrated pipeline.

## What This Skill Does

Ship orchestrates the full handoff workflow so you don't have to run a dozen commands and risk skipping a step. It detects your branch, determines the correct target (main or dev), and executes each stage in sequence with rollback on failure.

## When to Use

- Feature work is complete and ready for review
- Shipping a hotfix that needs to bypass dev
- Beta release to dev branch
- Dry-running before actually shipping

## Modes

| Mode | Target Branch | When |
|------|--------------|------|
| `official` | `main` | Production release |
| `beta` | `dev` | Beta / staging release |
| auto-detect | inferred from branch name | Default behavior |

Branch name patterns for auto-detection:
- `feature/*`, `hotfix/*`, `bugfix/*` → targets `main` (official)
- `dev/*`, `beta/*`, `experiment/*` → targets `dev` (beta)

## Arguments

| Argument | Description |
|----------|-------------|
| `[mode]` | `official`, `beta`, or auto-detect (default) |
| `--skip-tests` | Skip test suite |
| `--skip-review` | Skip code review step |
| `--skip-journal` | Skip journal entry creation |
| `--skip-docs` | Skip docs impact evaluation |
| `--dry-run` | Show pipeline plan without executing |

## Example Usage

```
/ck:ship
/ck:ship beta
/ck:ship official --skip-journal
/ck:ship --dry-run
```

## Pipeline Stages

```
1. Merge main/dev into current branch
2. Run test suite
3. Code review (code-review skill)
4. Stage and commit staged changes
5. Push branch to remote
6. Create PR with conventional title
7. (optional) Write journal entry
8. (optional) Evaluate docs impact
```

Each stage must pass before the next begins. On failure, Ship reports which stage failed and what to fix.

## Related Skills

- [Git](/docs/engineer/skills/git) — git operations Ship orchestrates
- [Test](/docs/engineer/skills/test) — test suite Ship runs
- [Code Review](/docs/engineer/skills/code-review) — review gate Ship enforces
- [Deploy](/docs/engineer/skills/deploy) — deploy after PR merges
