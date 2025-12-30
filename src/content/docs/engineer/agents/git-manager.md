---
title: Git Manager Agent
description: Token-optimized Git operations specialist for staging, committing, and pushing with conventional commits and security scanning
section: engineer
kit: engineer
category: agents
order: 13
published: true
---

# Git Manager Agent

**Stage, commit, and push code with professional conventional commits, security scanning, and 81% cost reduction.**

## When to Use

- Auto-generate semantic commit messages (feat, fix, docs, refactor)
- Prevent secrets from leaking into Git history
- Commit and push after implementing features or fixes
- Create pull requests with proper formatting

## Key Capabilities

| Feature | Description |
|---------|-------------|
| **Conventional Commits** | Auto-generates `type(scope): description` messages (max 72 chars) |
| **Security Scanning** | Blocks commits with API keys, passwords, tokens, connection strings |
| **Token Optimization** | 81% cost reduction vs baseline (Haiku model, 5-8K tokens/commit) |
| **Smart Staging** | Auto-detects relevant changes, respects `.gitignore` |
| **Delegation** | Escalates complex changes (5+ files) to Gemini for context |

## Common Use Cases

### Developers - Quick Commits
**Prompt**: `/git:cm` or `/git:cp`
- Commits auth bug fix with `fix(auth): add email validation in login`
- 10-15 seconds, $0.015 per commit
- Security scan blocks if secrets detected

### Teams - Consistent History
**Prompt**: "commit and push"
- Enforces conventional commit format across team
- Compatible with changelog generators (semantic-release)
- No AI attribution in commit messages

### DevOps - Safe Deployments
**Prompt**: `/git:cp` after feature work
- Scans for leaked AWS credentials, DB passwords, OAuth tokens
- Blocks commit and shows file/line number of violations
- Whitelists `process.env.*` and `.env.example`

### Code Reviewers - Pre-Commit Validation
**Prompt**: Chain with code-reviewer agent → `/git:cm`
- Reviews code → fixes applied → commits with proper message
- Example: `refactor(db): extract query builders to helpers`

### Multi-File Features - Smart Delegation
**Prompt**: `/git:cm` after dashboard feature
- Detects complex changes (Dashboard.tsx, Chart.tsx, styles)
- Delegates to Gemini: `feat(dashboard): add interactive chart component`
- Includes multi-line body with implementation details

## Pro Tips

**Commit Types Reference**:
```
feat     → New feature
fix      → Bug fix
docs     → Documentation only
refactor → Code restructuring
perf     → Performance improvement
test     → Adding tests
chore    → Maintenance (deps, config)
```

**Security Patterns Blocked**:
```typescript
// ❌ Blocked
const API_KEY = "sk-1234567890abcdef";
const DB_URL = "postgres://user:pass@host/db";

// ✅ Allowed
const API_KEY = process.env.API_KEY;
```

**Logical Commit Grouping**:
```bash
git add src/auth/*
/git:cm  # Commits only auth changes

git add src/components/*
/git:cm  # Separate UI changes
```

**Performance Metrics**:
| Metric | Haiku (Optimized) | Sonnet (Baseline) | Savings |
|--------|-------------------|-------------------|---------|
| Tokens | 5-8K | 25-30K | 81% |
| Time | 10-15s | 45s | 67% |
| Cost | $0.015 | $0.075 | 80% |

**Workflow After Feature**:
```bash
git status      # Review changes
/git:cm         # Commit with auto-message
git log -1      # Verify commit
/git:cp         # Push if satisfied
```

**Fix Push Failures**:
```bash
git pull --rebase origin main  # Pull latest
# Resolve conflicts if any
/git:cp  # Retry push
```

## Related Agents

- [Code Reviewer](/docs/engineer/agents/code-reviewer) - Pre-commit code review
- [Project Manager](/docs/engineer/agents/project-manager) - Overall project coordination
- [Tester](/docs/engineer/agents/tester) - Pre-commit test verification

## Key Takeaway

**git-manager automates professional Git operations with security-first conventional commits at 81% lower cost than baseline—no AI attribution, just clean commit history.**
