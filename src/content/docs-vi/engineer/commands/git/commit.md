---
title: /git:cm
description: Documentation for commit
section: engineer
kit: engineer
category: commands/git
order: 30
published: true
---

# /git:cm

Stage all files and create a conventional commit with a professionally crafted commit message following conventional commit standards.

## Syntax

```bash
/git:cm
```

## How It Works

The `/git:cm` command follows a structured git workflow:

### 1. Analysis Phase

- Runs `git status` to see untracked/modified files
- Runs `git diff` to analyze all changes (staged + unstaged)
- Runs `git log` to understand commit history and style

### 2. Change Categorization

- Identifies nature of changes (feature, fix, refactor, docs, etc.)
- Groups related changes
- Determines semantic version impact

### 3. Message Generation

- Creates concise, descriptive commit message
- Follows conventional commit format
- Focuses on "why" rather than "what"
- Matches repository's commit style

### 4. Staging and Committing

- Stages all relevant files (`git add`)
- Creates commit with generated message
- Runs `git status` to verify success

## Commit Message Format

ClaudeKit generates commits following [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code restructuring without changing behavior
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system or dependency changes
- `ci`: CI/CD configuration changes
- `chore`: Maintenance tasks

### Example Commits

**Feature:**
```
feat: add user registration endpoint

- Implement POST /auth/register
- Add email/password validation with Joi
- Secure password hashing with bcrypt
- Generate JWT tokens on registration
- Include comprehensive test suite (92% coverage)
```

**Bug Fix:**
```
fix: resolve token refresh race condition

- Add mutex to prevent concurrent refresh attempts
- Implement exponential backoff in retry logic
- Extend token expiry to 30 minutes
- Update session cleanup to respect active refreshes
```

**Refactor:**
```
refactor: extract payment processing into service layer

- Move Stripe logic from controller to service
- Improve error handling and logging
- Add payment state machine
- Increase test coverage to 95%
```

## Examples

### Simple Feature Addition

```bash
# After implementing a feature
/git:cm
```

**Generated commit:**
```
feat: add rate limiting middleware

- Implement token bucket algorithm
- Configure limit: 100 requests per 15 minutes
- Add Redis for distributed rate limiting
- Include bypass for admin users
```

### Bug Fix

```bash
# After fixing a bug
/git:cm
```

**Generated commit:**
```
fix: prevent memory leak in WebSocket connections

- Add proper cleanup in disconnect handler
- Implement connection pooling for Redis
- Add automated cleanup checks every 5 minutes
- Include stress tests validating 24-hour stability
```

### Multiple Changes

```bash
# After making several related changes
/git:cm
```

**Generated commit:**
```
feat: improve authentication security

- Add two-factor authentication support
- Implement refresh token rotation
- Enhance session management with Redis
- Update password requirements (min 12 chars)
- Add security event logging
```

## What Gets Committed

The command stages and commits:

✅ **Modified files** - Changes to existing files
✅ **New files** - Newly created files
✅ **Deleted files** - Removed files
✅ **Test files** - Test updates and new tests
✅ **Documentation** - Doc changes

❌ **Excluded by default:**
- Files in `.gitignore`
- Sensitive files (`.env`, `credentials.json`, etc.)
- Build artifacts
- Node_modules
- Temporary files

## Security Checks

Before committing, ClaudeKit checks for:

### Sensitive Files

```
⚠ Warning: Detected sensitive file

File: config/.env.production
Contains: API keys, database passwords

This file should NOT be committed.
Add to .gitignore? (y/n)
```

### Secrets in Code

```
⚠ Warning: Possible secret detected

File: src/config/api.ts
Line 12: apiKey: "sk_live_..."

Remove secret before committing? (y/n)
```

### Large Files

```
⚠ Warning: Large file detected

File: public/video.mp4 (45 MB)

Consider using Git LFS.
Continue anyway? (y/n)
```

## Pre-commit Hooks

If pre-commit hooks are configured, they run automatically:

```
Running pre-commit hooks...

✓ ESLint: No errors
✓ Prettier: All files formatted
✓ Tests: 87/87 passed
✓ TypeScript: No type errors

Pre-commit checks passed
```

If hooks fail:
```
❌ Pre-commit hooks failed

ESLint errors:
- src/auth/login.ts:45 - unused variable 'token'

Fix errors and try again.
```

## Workflow

### Standard Development Flow

```bash
# 1. Implement feature
/cook [add user profile page]

# 2. Review changes
git diff

# 3. Run tests
/test

# 4. Commit
/git:cm

# 5. Push (if ready)
git push
```

### With Code Review

```bash
# 1. Make changes
# ... implement feature ...

# 2. Commit locally
/git:cm

# 3. Review in commit
git show HEAD

# 4. Push to feature branch
git push origin feature/user-profile

# 5. Create PR
/git:pr
```

## Customization

### Commit Message Style

ClaudeKit analyzes your commit history and matches the style:

**If your repo uses:**
```
Add user authentication
Update README
Fix login bug
```

**ClaudeKit generates:**
```
Add rate limiting middleware
```

**If your repo uses:**
```
feat: add user authentication
fix: resolve login issue
docs: update README
```

**ClaudeKit generates:**
```
feat: add rate limiting middleware
```

### Scope Detection

ClaudeKit automatically detects scope from files changed:

```
Files changed: src/auth/login.ts, src/auth/register.ts
Generated: feat(auth): add OAuth2 support

Files changed: docs/api/users.md
Generated: docs(api): document user endpoints

Files changed: tests/integration/payment.test.ts
Generated: test(payment): add Stripe webhook tests
```

## Best Practices

### Commit Frequently

✅ **Good - Atomic commits:**
```bash
# Implement feature
/git:cm  # "feat: add login form"

# Add tests
/git:cm  # "test: add login form validation tests"

# Update docs
/git:cm  # "docs: document login API"
```

❌ **Bad - Massive commits:**
```bash
# Implement 10 features over 3 days
/git:cm  # Huge, unclear commit
```

### Review Before Committing

```bash
# Always review changes first
git diff
git status

# Then commit
/git:cm
```

### Don't Commit Broken Code

```bash
# Run tests first
/test

# Only commit if tests pass
✓ All tests passed
/git:cm
```

## Common Scenarios

### Emergency Hotfix

```bash
# 1. Fix critical bug
/fix:fast [production bug]

# 2. Test fix
/test

# 3. Quick commit
/git:cm

# 4. Deploy immediately
/deploy [production]
```

### Feature Branch Workflow

```bash
# 1. Create feature branch
git checkout -b feature/new-dashboard

# 2. Implement incrementally
/cook [add dashboard layout]
/git:cm

/cook [add dashboard widgets]
/git:cm

/cook [add dashboard filters]
/git:cm

# 3. Push branch
git push origin feature/new-dashboard

# 4. Create PR
/git:pr
```

### Refactoring Session

```bash
# 1. Refactor incrementally
# Refactor auth service
/git:cm  # "refactor(auth): extract validation logic"

# Refactor payment service
/git:cm  # "refactor(payment): simplify error handling"

# Update tests
/git:cm  # "test: update tests for refactored services"
```

## Troubleshooting

### Nothing to Commit

**Problem:** No changes to commit

**Solution:**
```bash
# Check status
git status

# If changes exist but not detected:
git add .
/git:cm
```

### Commit Message Unclear

**Problem:** Generated message doesn't capture intent

**Solution:**
```bash
# Provide more context in code comments
# ClaudeKit reads comments to understand intent

# Or manually edit commit message:
git commit --amend
```

### Pre-commit Hooks Failing

**Problem:** Hooks preventing commit

**Solution:**
```bash
# Fix issues identified by hooks
# ESLint errors
npm run lint:fix

# Prettier formatting
npm run format

# Then retry
/git:cm
```

### Sensitive Data Detected

**Problem:** Accidentally trying to commit secrets

**Solution:**
```bash
# Remove sensitive data
# Update .env file to .env.example
# Use environment variables

# Add to .gitignore
echo ".env" >> .gitignore

# Then commit
/git:cm
```

## Advanced Usage

### Amending Commits

If you need to amend (use sparingly):

```bash
# Make additional changes
# ... edit files ...

# Amend to previous commit
git add .
git commit --amend --no-edit
```

**Note:** Only amend commits that haven't been pushed!

### Partial Staging

If you want to commit only specific files:

```bash
# Stage specific files manually
git add src/auth/login.ts src/auth/register.ts

# Then commit
/git:cm
```

## Commit History Example

After using `/git:cm` regularly:

```
git log --oneline

a1b2c3d feat: add user profile page with avatar upload
d4e5f6g test: add comprehensive profile tests
g7h8i9j docs: document profile API endpoints
j0k1l2m fix: resolve avatar upload size limit
m3n4o5p refactor: extract file upload to service
p6q7r8s feat: add profile privacy settings
```

Clean, professional, and easy to understand!

## Next Steps

- [/git:cp](/docs/commands/git/commit-push) - Commit and push
- [/git:pr](/docs/commands/git/pull-request) - Create pull request
- [Code Review](/docs/commands/core/review) - Review before committing

---

**Key Takeaway**: `/git:cm` creates professional, conventional commits automatically by analyzing your changes and matching your repository's commit style.
