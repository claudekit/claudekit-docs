---
title: /git:cp
description: Documentation for commit-push
section: engineer
kit: engineer
category: commands/git
order: 31
published: true
---

# /git:cp

Stage all changes, create a conventional commit with a professional message, and push to the remote repository in one streamlined command. Perfect for quick iteration cycles.

## Syntax

```bash
/git:cp
```

## How It Works

This command combines `/git:cm` (commit) with `git push`:

### 1. Stage & Commit (`/git:cm`)

- Analyzes all changes (staged + unstaged)
- Creates conventional commit message
- Stages relevant files
- Creates commit

### 2. Push to Remote

- Pushes to current branch's upstream
- Or prompts to set upstream if not configured
- Verifies push success

## When to Use

### ✅ Perfect For

**Rapid Development**
```bash
# Quick iteration cycle
/cook [add feature]
/git:cp  # Commit and push immediately
```

**Solo Development**
```bash
# Working alone on feature branch
/git:cp  # No need for local review
```

**Small Changes**
```bash
# Typo fixes, minor updates
/fix:fast [typo]
/git:cp  # Push right away
```

**Continuous Integration**
```bash
# Trigger CI on every change
/git:cp  # CI runs automatically after push
```

### ❌ When to Avoid

**Team Collaboration**
```bash
❌ /git:cp  # Pushing unreviewed code

✅ /git:cm  # Commit locally
✅ Create PR  # Team reviews first
```

**Uncertain Changes**
```bash
❌ /git:cp  # Not sure if fix works

✅ /git:cm  # Commit locally
✅ Test more
✅ Then: git push
```

**Shared Branches**
```bash
❌ /git:cp  # On main/develop

✅ Use feature branches
✅ Create PR for review
```

## Examples

### Feature Development

```bash
# 1. Implement feature
/cook [add user notifications]

✓ Feature implemented
✓ Tests generated (95% coverage)
✓ Documentation updated

# 2. Commit and push
/git:cp

Analyzing changes...
✓ Staged 8 files
✓ Created commit: "feat: add user notifications system"
✓ Pushed to origin/feature/notifications

Changes are now on GitHub!
```

### Bug Fix Workflow

```bash
# 1. Fix bug
/fix:fast [button text typo]

✓ Fixed typo in SubmitButton.tsx

# 2. Commit and push
/git:cp

✓ Commit: "fix: correct button text typo"
✓ Pushed to origin/bugfix/button-text

# 3. CI automatically runs
✓ Tests passed
✓ Ready for deployment
```

### Continuous Deployment

```bash
# Development with auto-deploy to staging

# Change 1
/cook [update header]
/git:cp  # → Deploys to staging

# Change 2
/fix:ui [alignment issue]
/git:cp  # → Deploys to staging

# Change 3
/docs:update
/git:cp  # → Deploys to staging
```

## What Happens

### Step-by-Step

```
1. Analyzing changes...
   - 5 files modified
   - 2 files created
   - 1 file deleted

2. Creating commit...
   ✓ Commit message generated:
     "feat: add real-time notifications

     - Implement WebSocket connection
     - Add notification bell UI
     - Store notifications in database
     - Add mark-as-read functionality
     - Include comprehensive tests"

3. Staging files...
   ✓ src/services/notification.service.ts
   ✓ src/components/NotificationBell.tsx
   ✓ src/websocket/notification-handler.ts
   ✓ tests/notification.test.ts
   ✓ docs/api/notifications.md

4. Creating commit...
   ✓ Commit created: a1b2c3d

5. Pushing to remote...
   ✓ Pushed to origin/feature/notifications

6. Verifying...
   ✓ Remote updated successfully
   ✓ CI triggered automatically

Complete! View at:
https://github.com/user/repo/commit/a1b2c3d
```

## Configuration

### Setting Upstream

If upstream not set:

```
⚠ No upstream branch set

Set upstream to origin/feature-name? (y/n)
> y

✓ Upstream set
✓ Pushing...
✓ Complete
```

Manual setup:
```bash
git branch --set-upstream-to=origin/feature-name
```

### Push Options

ClaudeKit automatically handles:
- First push (`git push -u origin branch-name`)
- Subsequent pushes (`git push`)
- Force push warnings
- Push conflicts

## Safety Checks

### Pre-Push Validation

```
Running pre-push checks...

✓ All tests passed (87/87)
✓ No TypeScript errors
✓ Lint checks passed
✓ No sensitive files detected

Safe to push.
```

### Conflict Detection

```
⚠ Warning: Remote has changes

Remote branch has 3 new commits.
Pull before pushing? (y/n)
```

### Force Push Prevention

```
❌ Error: Would require force push

Your branch is behind 'origin/main' by 2 commits.

Options:
1. Pull and rebase: git pull --rebase
2. Create new branch
3. Cancel

Choose:
```

## Best Practices

### Verify Tests First

```bash
# Always test before pushing
/test

✓ All tests passed

# Now safe to push
/git:cp
```

### Review Changes

```bash
# Check what you're pushing
git diff

# Review commit
git show HEAD

# Then push
git push  # or /git:cp on next change
```

### Use Feature Branches

```bash
# Create feature branch
git checkout -b feature/new-dashboard

# Develop and push
/cook [build dashboard]
/git:cp  # Safe on feature branch

# Create PR when ready
/git:pr
```

### Small, Frequent Commits

✅ **Good:**
```bash
/cook [add login form]
/git:cp

/cook [add registration form]
/git:cp

/cook [add password reset]
/git:cp
```

❌ **Bad:**
```bash
# Work for 3 days
# Make 50 changes
/git:cp  # Huge, unclear commit
```

## Workflow Patterns

### Feature Development

```bash
# Day 1
git checkout -b feature/payments
/cook [implement Stripe integration]
/git:cp

# Day 2
/cook [add payment UI]
/git:cp

# Day 3
/test
/git:cp

# Create PR
/git:pr
```

### Hotfix

```bash
# Critical bug in production
git checkout -b hotfix/login-error
/fix:fast [login error]
/git:cp  # Push immediately

# Create PR to main
/git:pr main

# Merge and deploy
```

### Documentation Updates

```bash
# Update docs
/docs:update
/git:cp  # Push docs immediately

# Changes live on docs site
```

## Troubleshooting

### Push Rejected

**Problem:** `! [rejected] main -> main (non-fast-forward)`

**Solution:**
```bash
# Don't force push!
# Instead, pull and rebase
git pull --rebase origin main

# Resolve conflicts if any
# Then push
git push
```

### Upstream Not Set

**Problem:** "No upstream branch"

**Solution:**
```bash
# Set upstream
git push -u origin branch-name

# Or let /git:cp do it
/git:cp
> y  # When prompted to set upstream
```

### Failed Pre-Push Hooks

**Problem:** Pre-push hook prevents push

**Solution:**
```bash
# Fix the issues
npm run lint:fix
npm test

# Then retry
/git:cp
```

### Large Files

**Problem:** "File exceeds GitHub's 100 MB limit"

**Solution:**
```bash
# Use Git LFS
git lfs track "*.mp4"
git add .gitattributes

# Or remove large file
git rm --cached large-file.mp4
echo "large-file.mp4" >> .gitignore

# Then push
/git:cp
```

## Comparison

| Command | Local Commit | Push | Use Case |
|---------|-------------|------|----------|
| `/git:cm` | ✓ | ✗ | Review before push |
| `/git:cp` | ✓ | ✓ | Quick iteration |
| `git push` | ✗ | ✓ | After manual commit |

## Advanced Usage

### Multiple Remotes

```bash
# Push to specific remote
git push staging
git push production

# /git:cp uses default (origin)
```

### Branch Protection

Some repos have branch protection:

```
❌ Cannot push to protected branch 'main'

Create feature branch instead:
git checkout -b feature/your-changes
/git:cp  # Now works
```

### CI Integration

After `/git:cp`, CI automatically:
1. Runs tests
2. Builds project
3. Deploys to staging
4. Notifies team

Monitor: `gh run watch`

## When NOT to Use

❌ **Don't use `/git:cp` when:**
- Working on shared branches (main, develop)
- Changes need team review
- Uncertain if changes work
- Multiple unrelated changes
- Experimental code
- Breaking changes

✅ **Use instead:**
```bash
/git:cm  # Commit locally
# Test, review, get feedback
git push  # Manual push when ready
```

## Next Steps

- [/git:pr](/docs/commands/git/pull-request) - Create pull request
- [/git:cm](/docs/commands/git/commit) - Commit without pushing
- [Git Workflow](/docs/guides/git-workflow) - Team workflows

---

**Key Takeaway**: `/git:cp` streamlines rapid development by combining commit and push, perfect for feature branches and solo development, but use cautiously on shared branches.
