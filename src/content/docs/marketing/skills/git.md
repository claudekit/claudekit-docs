---
title: "ckm:git"
description: "Git operations with conventional commits, branch management, secret detection, and PR creation workflows."
section: marketing
kit: marketing
category: skills
order: 115
---

# Git

> Manage git workflows with conventional commit enforcement, automatic secret scanning, branch strategy, and GitHub PR creation.

## What This Skill Does

**The Challenge**: Git workflows break down when teams use inconsistent commit messages, accidentally commit secrets, push directly to main, or skip PR review processes. Poor git hygiene creates unmaintainable history and security risks.

**The Solution**: Git skill enforces conventional commit format, runs pre-commit secret detection, manages branch strategy, and automates PR creation with structured templates — producing clean, auditable git history with zero secret leaks.

## Activation

**Implicit**: Activates when committing code, creating branches, pushing changes, or managing PRs.

**Explicit**: Activate via prompt:
```
/git commit and push these changes as a feature commit
```

## Capabilities

### 1. Conventional Commits
Enforce structured commit message format for changelog automation.

**Format**:
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Commit types**:
| Type | Version Bump | Use For |
|------|-------------|---------|
| `feat` | minor | New features |
| `fix` | patch | Bug fixes |
| `docs` | none | Documentation |
| `refactor` | none | Code restructuring |
| `test` | none | Test additions |
| `chore` | none | Build, deps, config |
| `perf` | patch | Performance improvements |
| `BREAKING CHANGE` | major | Breaking API changes |

**Examples**:
```bash
feat(auth): add OAuth2 login with GitHub
fix(checkout): handle empty cart 500 error
docs(api): update authentication guide
chore(deps): upgrade Stripe SDK to 14.x
```

### 2. Secret Detection
Scan staged files for credentials before committing.

**Detected patterns**:
- API keys and tokens (`sk_live_`, `ghp_`, `AKIA`, etc.)
- Private keys (`-----BEGIN RSA PRIVATE KEY-----`)
- Database connection strings with credentials
- `.env` files accidentally staged

**Action on detection**: Block commit, identify file and line, prompt for remediation.

### 3. Branch Strategy
Enforce branch naming and protection rules.

**Naming conventions**:
```bash
feat/add-oauth-login        # Features
fix/checkout-500-error      # Bug fixes
chore/upgrade-stripe-sdk    # Maintenance
docs/update-api-guide       # Documentation
release/v2.1.0              # Release branches
```

**Protected branches**: Never push directly to `main` or `master`. Always create PR.

### 4. PR Creation
Automated PR with structured template via GitHub CLI.

```bash
gh pr create \
  --title "feat(auth): add OAuth2 login with GitHub" \
  --body "$(cat <<'EOF'
## Summary
- Add GitHub OAuth2 authentication flow
- Store OAuth tokens securely in httpOnly cookies
- Handle account linking for existing email users

## Test Plan
- [ ] Login with GitHub account
- [ ] Verify token refresh works after expiry
- [ ] Test account linking with existing user
EOF
)"
```

## Prerequisites

- Git 2.30+ installed
- GitHub CLI (`gh`) for PR creation
- Repository with remote origin configured

## Configuration

**Pre-commit hook** (recommended):
```bash
# .git/hooks/pre-commit
#!/bin/sh
# Run secret detection
git diff --cached --name-only | xargs grep -rE \
  "(sk_live_|sk_test_|ghp_|AKIA[A-Z0-9]{16})" && \
  echo "Potential secrets detected!" && exit 1
```

**`.gitignore` essentials**:
```
.env
.env.local
*.env
.claude/secrets/
```

## Best Practices

**1. Never commit directly to main**
Every change goes through a PR. Even solo projects benefit from PR review history.

**2. Atomic commits**
One logical change per commit. Easier to revert, bisect, and cherry-pick.

**3. Commit early, commit often**
Small commits are safer and easier to review than large commits that mix concerns.

## Common Use Cases

### Use Case 1: Feature Branch Workflow
**Scenario**: Implementing new dashboard analytics feature.

**Workflow**:
1. `git checkout -b feat/dashboard-analytics`
2. Implement changes
3. `git add src/dashboard/` (specific files, not `git add .`)
4. Secret detection scan
5. `git commit -m "feat(dashboard): add weekly metrics chart"`
6. `git push origin feat/dashboard-analytics`
7. Create PR with checklist

**Output**: Clean PR ready for review.

### Use Case 2: Hotfix Deployment
**Scenario**: Production bug needs immediate fix.

**Workflow**:
1. `git checkout -b fix/payment-500-error main`
2. Apply minimal fix
3. `git commit -m "fix(payments): handle null cart in checkout"`
4. Fast-track PR review
5. Merge and tag release

**Output**: Isolated hotfix with clear commit history.

## Troubleshooting

**Issue**: Pre-commit hook blocking legitimate API keys in tests
**Solution**: Use mock/example keys in test fixtures (`sk_test_example`, `test_key_here`). Never real keys.

**Issue**: Merge conflicts on shared files
**Solution**: Rebase feature branch before PR: `git rebase main`. Resolve conflicts per-file.

## Related Skills

- [Cook](/docs/marketing/skills/cook) - Implementation that generates commits
- [Fix](/docs/marketing/skills/fix) - Bug fix commits
- [Plans Kanban](/docs/marketing/skills/plans-kanban) - Track what's committed per phase

## Related Commands

- `/git` — Git workflow management
- `/ckm:git` — Alias for git skill
