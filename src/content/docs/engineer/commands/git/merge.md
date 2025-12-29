---
title: /git:merge
description: Merge code from one branch to another
section: engineer
kit: engineer
category: commands/git
order: 6
published: true
---

# /git:merge

Merge code from one branch to another with conflict resolution.

## Syntax

```bash
/git:merge [to-branch] [from-branch]
```

## Arguments

| Argument | Default | Description |
|----------|---------|-------------|
| `to-branch` | `main` | Target branch to merge into |
| `from-branch` | Current branch | Source branch to merge from |

## How It Works

Uses `git-manager` agent to:
1. Checkout target branch
2. Merge source branch
3. Resolve conflicts if any
4. Complete merge

## Examples

```bash
# Merge current branch to main
/git:merge main

# Merge feature to develop
/git:merge develop feature/auth

# Merge hotfix to main and develop
/git:merge main hotfix/security
/git:merge develop hotfix/security
```

## Conflict Resolution

If conflicts occur:
1. Agent identifies conflicting files
2. Analyzes changes from both branches
3. Resolves conflicts intelligently
4. Completes merge

## Prerequisites

- `gh` CLI must be installed and authorized
- Git repository initialized
- Both branches must exist

---

**Key Takeaway**: Use `/git:merge` to merge branches with automatic conflict resolution via git-manager agent.
