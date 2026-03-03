---
title: "ck:worktree"
description: "Create isolated git worktrees for parallel development without branch switching"
section: engineer
kit: engineer
category: skills
order: 59
---

# Worktree

Create isolated git worktrees for parallel development. Work on multiple features simultaneously without switching branches.

## Usage

```
/ck:worktree [feature-name]
```

## Examples

```bash
/ck:worktree add-auth           # Creates worktree for auth feature
/ck:worktree fix-login-bug      # Creates worktree for bug fix
```

## What It Does

- Creates a new git worktree with a dedicated branch
- Uses project naming conventions (e.g., `kai/feat/add-auth`)
- Branches from `dev` by default
- Provides isolated workspace for parallel work
