---
title: "ckm:worktree"
description: "Create isolated git worktree for parallel development"
section: marketing
kit: marketing
category: skills
order: 51
---

# `ckm:worktree`

> Create isolated git worktrees so multiple marketing tasks can run in parallel without conflicts.

## What This Skill Does

The Worktree skill creates isolated git worktrees that let multiple marketing work streams run simultaneously without interfering with each other. Each worktree is a separate working directory on a dedicated branch, so a campaign draft, a website update, and a content batch can all be in progress at the same time without merge conflicts or lost work.

This is particularly valuable when AI agents are doing parallel work: one agent drafts email sequences while another updates landing pages, each in its own isolated worktree with no risk of overwriting the other's changes.

The skill handles worktree creation, branch setup, and cleanup when work is complete and merged.

## Quick Start

```
/ckm:worktree create --name "q2-email-campaign" --branch feat/q2-email
```

## Key Features

- Creates isolated git worktrees for parallel workstreams
- Automatic branch creation with naming conventions
- Worktree status listing: active branches and modified files
- Merge workflow guidance when work is complete
- Cleanup command to remove merged worktrees
- Integration with agent team orchestration for parallel agent work

## Usage Examples

**Create worktree for campaign work**:
```
/ckm:worktree create --name "product-launch" --branch feat/product-launch-2026
# Creates isolated directory at worktrees/product-launch/ on a new branch
```

**List active worktrees**:
```
/ckm:worktree list
# Shows all active worktrees with branch names and modification status
```

**Cleanup after merge**:
```
/ckm:worktree cleanup --name "product-launch"
# Removes worktree directory and deletes the merged branch
```

## Related

- [ckm:kanban](/docs/marketing/skills/kanban) - Track parallel tasks running in separate worktrees
- [ckm:plan](/docs/marketing/skills/plan) - Plans that spawn parallel workstreams
- [ckm:watzup](/docs/marketing/skills/watzup) - Wrap up before merging a worktree
