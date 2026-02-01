---
title: "/git"
description: "Create pull requests with automated branch comparison, conventional commit messages, and GitHub CLI integration"
section: marketing
category: commands
order: 21
published: true
---

> Create PRs with perfect commit messages

## Quick Start

```bash
/git pr
```

**What happens**:
1. Ensures remote is synced
2. Compares REMOTE branches (not local)
3. Analyzes actual PR content
4. Generates conventional commit title
5. Creates PR via GitHub CLI

**Output**: GitHub PR URL

## Syntax

```bash
/git pr [to-branch] [from-branch]
```

### Arguments

| Argument | Description | Default |
|----------|-------------|---------|
| `to-branch` | Target branch | `main` |
| `from-branch` | Source branch | Current branch |

## Example

**Input**:
```bash
/git pr main feature/email-campaigns
```

**Process**:
```markdown
✓ Fetching remote branches...
✓ Pushing feature/email-campaigns to remote...

Analyzing remote diff: origin/main...origin/feature/email-campaigns

Commits (3):
- Add email campaign creation API
- Implement campaign scheduler
- Add campaign analytics dashboard

Files changed (12):
+1,247 lines, -89 lines

Key changes:
- lib/email/campaign.ts (new file)
- lib/email/scheduler.ts (new file)
- app/api/campaigns/route.ts (modified)
- components/CampaignDashboard.tsx (new file)
[... 8 more files]

Generating PR content...

Title: feat(email): add email campaign system with analytics

Body:
## Summary
- Email campaign creation and scheduling
- Trigger-based automation
- Real-time analytics dashboard

## Technical Changes
- Added campaign API endpoints
- Implemented scheduling engine
- Created analytics dashboard component
- Added 12 test cases

## Testing
✓ All tests passing (101/101)
✓ Type-safe
✓ Code reviewed

---

Creating PR...
✓ PR created: https://github.com/yourorg/yourrepo/pull/42

Next: Review PR and merge when ready
```

## Critical: Remote Comparison

**ALWAYS compares REMOTE branches**, not local:

**Correct**:
```bash
git diff origin/main...origin/feature-branch
```

**Wrong** (includes unpushed local changes):
```bash
git diff main...HEAD
git diff --cached
git status
```

## Workflow Integration

### After Implementation
```bash
"Implement feature"
# Implementation complete
/git pr  # Create PR
```

### After /cook
```bash
/cook add feature
# User approves
/git pr  # Create PR
```

### Custom Branch Flow
```bash
/git pr dev  # PR to dev branch
/git pr main feature/auth  # Specific branches
```

## Requirements

### GitHub CLI
Must have `gh` CLI installed and authorized:

```bash
# Install (macOS)
brew install gh

# Install (Linux)
sudo apt install gh

# Authorize
gh auth login
```

If `gh` not available, instructs user to install.

## Conventional Commits

Auto-generates titles following convention:

| Type | Example | When |
|------|---------|------|
| `feat` | feat(auth): add OAuth support | New feature |
| `fix` | fix(email): resolve send timeout | Bug fix |
| `docs` | docs: update API documentation | Documentation only |
| `refactor` | refactor(db): optimize queries | Code restructure |
| `test` | test(api): add integration tests | Test addition |
| `chore` | chore: update dependencies | Maintenance |

## Related Commands

- [/cook](/docs/engineer/skills/cook) - Auto-commits after implementation and includes git commit
- [/git cm](/docs/marketing/commands/git) - Commit only (no PR)

---

**Perfect PRs. Every time.** Automated commit messages that follow conventions.
