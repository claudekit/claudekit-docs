---
title: /git:cm
description: Stage all files and create a commit (no push)
section: engineer
kit: engineer
category: commands/git
order: 4
published: true
---

# /git:cm

Stage all files and create a commit. Does NOT push to remote.

## Syntax

```bash
/git:cm
```

## How It Works

Uses `git-manager` agent to:
1. Stage all changed files (`git add .`)
2. Create meaningful commit message based on changes
3. Commit locally

**Important**: Does NOT push changes to remote repository.

## Workflow

```bash
# 1. Make changes with /cook or /code
/cook [add user authentication]

# 2. Review changes
git status
git diff

# 3. Commit locally
/git:cm

# 4. Push when ready
git push  # or /git:cp for combined commit+push
```

## Related Commands

| Command | Action |
|---------|--------|
| `/git:cm` | Stage & commit (no push) |
| `/git:cp` | Stage, commit & push |
| `/git:pr` | Create pull request |

---

**Key Takeaway**: Use `/git:cm` to commit changes locally without pushing, allowing review before pushing to remote.
