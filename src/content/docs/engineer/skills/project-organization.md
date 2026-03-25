---
title: "ck:project-organization"
description: "Standardize file and directory structure with advisory or automated organize modes"
section: engineer
kit: engineer
category: skills
order: 58
---

# Project Organization

Standardizes your project's file and directory structure. Two modes: Advisory (returns correct paths for files you're about to create) and Organize (scans, proposes, and optionally executes restructuring).

## What This Skill Does

Project Organization enforces consistent directory conventions across your codebase. It knows the standard locations for source code, documentation, plans, and tests—and can either advise on where to put new files or reorganize existing ones.

## When to Use

- Starting a new project and want standard structure from day one
- Codebase has drifted—files scattered in wrong directories
- Before onboarding new team members
- Asking "where should this file go?" before creating it

## Modes

### Advisory Mode (Default)
Returns the correct path for a file you describe. Non-destructive. Use when creating new files.

```
/ck:project-organization "where should I put the auth service?"
→ src/services/auth-service.ts
```

### Organize Mode
Scans project, proposes moves, and optionally executes them.

```
/ck:project-organization --organize
→ Shows proposed file moves
→ Confirms before executing
```

## Directory Categories

| Category | Standard Path |
|----------|--------------|
| Source code | `src/` |
| Documentation | `docs/` |
| Plans & specs | `plans/` |
| Tests | `src/__tests__/` or `tests/` |
| Config files | project root |
| Scripts | `scripts/` |
| Public assets | `public/` |
| Build output | `dist/` |

## Arguments

| Argument | Description |
|----------|-------------|
| `"[description]"` | Describe a file to get its correct path (advisory) |
| `--organize` | Scan and propose full restructuring (confirms before executing) |

## Example Usage

```
/ck:project-organization "where does the database migration script go?"
/ck:project-organization --organize
```

## Naming Conventions Enforced

- **TypeScript/JS files**: `kebab-case.ts` — descriptive, self-documenting names
- **React components**: `PascalCase.tsx`
- **Test files**: `*.test.ts` or `*.spec.ts` co-located or in `__tests__/`
- **Config files**: standard ecosystem names (`tsconfig.json`, `vite.config.ts`)
- **Docs**: `kebab-case.md` with descriptive names

## Related Skills

- [Bootstrap](/docs/engineer/skills/bootstrap) — sets up correct structure for new projects
- [Docs](/docs/engineer/skills/docs) — manages documentation within the standard structure
- [Scout](/docs/engineer/skills/scout) — finds files across the project structure
