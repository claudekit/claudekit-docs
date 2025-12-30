---
title: /git:cp
description: Stage, commit and push all code in the current branch
section: engineer
kit: engineer
category: commands/git
order: 5
published: true
---

# /git:cp

Stage, commit and push all changes in one command.

## Syntax

```bash
/git:cp
```

## How It Works

Uses `git-manager` agent to:
1. Stage all changed files (`git add .`)
2. Create meaningful commit message based on changes
3. Commit locally
4. Push to remote repository

## Workflow

```bash
# 1. Complete feature
/cook [add user dashboard]

# 2. Review changes
git status
git diff

# 3. Commit and push in one step
/git:cp
```

## When to Use

- Quick iterations on feature branches
- Confident about changes
- Ready to share with team

## When NOT to Use

- Need to review before pushing: use `/git:cm` instead
- Working on main/master: be careful
- Unsure about changes: review first

## Related Commands

| Command | Action |
|---------|--------|
| `/git:cm` | Stage & commit only |
| `/git:cp` | Stage, commit & push |
| `/git:pr` | Create pull request |

---

**Key Takeaway**: Use `/git:cp` for quick stage-commit-push workflow when confident about your changes.
