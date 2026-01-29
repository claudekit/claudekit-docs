---
title: /worktree
description: Create isolated git worktrees for parallel feature development
section: engineer
kit: engineer
category: commands/core
order: 23
published: true
---

# /worktree

Create isolated git worktrees for parallel feature development without disrupting your main working directory.

## Syntax

```bash
/worktree [feature-description]                    # Standalone repo
/worktree [project] [feature-description]          # Monorepo
```

## How It Works

1. Analyzes repo type (standalone/monorepo/superproject)
2. Detects branch prefix from description
3. Converts description to kebab-case slug
4. Creates worktree in smart default location
5. Auto-installs dependencies based on lock files

## Branch Prefixes

Auto-detected from description keywords:

| Keywords | Prefix |
|----------|--------|
| fix, bug, error, issue | `fix` |
| refactor, restructure, rewrite | `refactor` |
| docs, documentation, readme | `docs` |
| test, spec, coverage | `test` |
| chore, cleanup, deps | `chore` |
| perf, performance, optimize | `perf` |
| Default | `feat` |

## Examples

```bash
/worktree add authentication system
# → Creates: worktrees/project-add-auth
# → Branch: kai/feat/add-auth

/worktree fix login validation bug
# → Creates: worktrees/project-login-validation-bug
# → Branch: kai/fix/login-validation-bug
```

### Monorepo

```bash
/worktree api add webhook support
# → Creates: worktrees/api-add-webhook-support
# → Branch: kai/feat/add-webhook-support

/worktree frontend refactor dashboard layout
# → Creates: worktrees/frontend-refactor-dashboard
# → Branch: kai/refactor/refactor-dashboard
```

## Worktree Location

Smart defaults based on repo structure:
1. **Superproject**: `<superproject>/worktrees/`
2. **Monorepo**: `<monorepo>/worktrees/`
3. **Standalone**: `<parent-dir>/worktrees/`

Override with `--worktree-root <path>` if needed.

## Dependency Installation

Auto-runs based on lock files:
- `bun.lock` → `bun install`
- `pnpm-lock.yaml` → `pnpm install`
- `yarn.lock` → `yarn install`
- `package-lock.json` → `npm install`
- `poetry.lock` → `poetry install`
- `requirements.txt` → `pip install`
- `Cargo.toml` → `cargo build`
- `go.mod` → `go mod download`

## Environment Files

Template files (`.env*.example`) auto-copied with `.example` suffix removed.

## Related Commands

- [/wt](/docs/engineer/commands/core/wt) - Monorepo worktree variant
