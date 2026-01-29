---
title: /wt
description: Monorepo worktree creation shorthand
section: engineer
kit: engineer
category: commands/core
order: 24
published: true
---

# /wt

Monorepo-optimized alias for `/worktree` with streamlined project selection.

## Syntax

```bash
/wt [project] [feature-description]
```

## Usage

Same functionality as `/worktree` but optimized for monorepo workflows.

If project not specified in monorepo, prompts for selection interactively.

## Examples

```bash
/wt api add rate limiting
# → Creates: worktrees/api-add-rate-limiting
# → Branch: kai/feat/add-rate-limiting

/wt web fix mobile responsive layout
# → Creates: worktrees/web-fix-mobile-layout
# → Branch: kai/fix/mobile-layout
```

## Related Commands

- [/worktree](/docs/engineer/commands/core/worktree) - Full worktree command reference
