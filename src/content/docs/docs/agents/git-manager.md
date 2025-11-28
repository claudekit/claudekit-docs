---
title: Git Manager Agent
description: Token-optimized Git operations specialist for staging, committing, and pushing with conventional commits and security scanning
section: docs
category: agents
order: 13
published: true
---

# Git Manager Agent

The git-manager agent is a specialized DevOps agent optimized for Git operations with token efficiency. It handles staging, committing, and pushing code with professional conventional commits while preventing security leaks.

## Purpose

Stage, commit, and push code changes with conventional commit messages, security scanning, and optimized token usage (81% cost reduction vs baseline).

## Model & Performance

**Model**: Haiku (optimized for token efficiency)

**Performance Metrics:**
- **Tool Calls**: 2-3 per commit
- **Token Usage**: 5-8K tokens
- **Execution Time**: 10-15 seconds
- **Cost**: ~$0.015 per commit

**Why Haiku?**
- 81% token reduction compared to baseline
- Fast execution for routine operations
- Cost-effective for frequent commits
- Sufficient for Git operations

## When Activated

The git-manager agent activates when:

- User says "commit" or "push"
- Using `/git:cm` command (commit)
- Using `/git:cp` command (commit and push)
- Using `/git:pr` command (pull request)
- After implementing features or fixes
- When explicitly requested

## Capabilities

### Conventional Commits

Creates semantic commit messages following conventional commit format:

**Format**: `type(scope): description`

**Types**:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Formatting, missing semicolons
- `refactor` - Code restructuring
- `test` - Adding/updating tests
- `chore` - Maintenance tasks
- `perf` - Performance improvements
- `build` - Build system changes
- `ci` - CI/CD configuration

**Rules**:
- Description max 72 characters
- Use imperative mood ("add" not "added")
- No period at the end
- Clear and concise

### Security Scanning

Automatically scans diffs for sensitive data:

**Detects**:
- API keys and tokens
- Passwords and secrets
- Private keys
- AWS credentials
- Database connection strings
- OAuth tokens
- JWT secrets

**Action**: Blocks commit and warns user if secrets detected.

### Auto-Generated Messages

**Simple Changes** (handled by Haiku):
- Single file modifications
- Small refactors
- Documentation updates
- Dependency updates

**Complex Changes** (delegates to Gemini):
- Multiple file changes
- Architectural changes
- Feature implementations
- Major refactors

### Smart Staging

**Automatic Detection**:
- Stages all relevant changes
- Excludes temporary files
- Respects `.gitignore`
- Groups related changes

## Example Usage

### Basic Commit

**Input:**
```bash
/git:cm
```

**Process:**
```
1. Security Scan (2s)
   Scanning: git diff
   ✓ No secrets detected

2. Change Analysis (3s)
   Modified:
   - src/auth/login.ts (15 lines)
   - tests/auth/login.test.ts (8 lines)

   Type: Bug fix (added validation)
   Scope: auth

3. Generate Message (2s)
   Message: fix(auth): add email validation in login

4. Commit (2s)
   Staging: src/auth/login.ts, tests/auth/login.test.ts
   ✓ Committed: fix(auth): add email validation in login

5. Status (1s)
   ✓ Success
   Commit: a3f5c8d
```

**Total Time**: 10 seconds
**Total Cost**: $0.015

### Commit and Push

**Input:**
```bash
/git:cp
```

**Process:**
```
1. Security Scan (2s)
   Scanning: git diff
   ✓ No secrets detected

2. Change Analysis (3s)
   Modified:
   - src/components/Dashboard.tsx (45 lines)
   - src/components/Chart.tsx (NEW)
   - src/styles/dashboard.css (12 lines)

   Type: Feature (new chart component)
   Scope: dashboard

3. Generate Message (3s)
   Complex changes detected
   Delegating to Gemini for better context...

   Message: feat(dashboard): add interactive chart component

   Body:
   - Add Chart component with real-time updates
   - Integrate with Dashboard layout
   - Add responsive styles

4. Commit (2s)
   Staging: 3 files
   ✓ Committed: feat(dashboard): add interactive chart component

5. Push (5s)
   Pushing to: origin/main
   ✓ Pushed successfully
```

**Total Time**: 15 seconds

### Security Block Example

**Input:**
```bash
/git:cm
```

**Process:**
```
1. Security Scan (2s)
   Scanning: git diff

   ⚠ SECURITY WARNING: Secrets detected!

   File: src/config/api.ts
   Line 3: const API_KEY = "sk-1234567890abcdef"

   File: .env.production
   Line 5: DATABASE_URL=postgres://user:pass@...

   ❌ COMMIT BLOCKED

   Action Required:
   1. Remove hardcoded secrets
   2. Use environment variables
   3. Update .env.example instead
   4. Add secrets to .gitignore
```

**Total Time**: 2 seconds (blocked)

## Commit Message Examples

### Features

```bash
feat(api): add user authentication endpoint
feat(ui): implement dark mode toggle
feat(db): add user preferences table
```

### Bug Fixes

```bash
fix(auth): prevent duplicate email registration
fix(ui): correct button alignment on mobile
fix(api): handle null values in response
```

### Documentation

```bash
docs(readme): add installation instructions
docs(api): document authentication flow
docs(contributing): add commit guidelines
```

### Refactoring

```bash
refactor(auth): simplify token validation logic
refactor(db): extract query builders to helpers
refactor(ui): convert class components to hooks
```

### Performance

```bash
perf(api): add Redis caching for user queries
perf(ui): lazy load images in gallery
perf(db): add indexes on frequently queried fields
```

### Tests

```bash
test(auth): add integration tests for login
test(api): increase coverage to 90%
test(ui): add snapshot tests for components
```

## Output Format

### Success

```
✓ Changes committed successfully

Commit: a3f5c8d
Type: feat(dashboard)
Message: add interactive chart component

Files changed: 3
Insertions: 125
Deletions: 8

Next steps:
- Push changes: /git:cp
- Create PR: /git:pr
```

### With Push

```
✓ Changes committed and pushed

Commit: a3f5c8d
Branch: feature/dashboard-charts
Remote: origin

Next steps:
- Create PR: /git:pr main feature/dashboard-charts
```

### Security Warning

```
⚠ Security scan detected issues

Blocked files:
- src/config/api.ts (API key)
- .env.production (credentials)

Recommendation:
1. Move secrets to environment variables
2. Update .env.example with placeholder values
3. Ensure .env is in .gitignore
4. Use secret management tools

After fixing, run /git:cm again
```

## Workflow Integration

### After Feature Implementation

```bash
# 1. Review changes
git status
git diff

# 2. Commit with git-manager
/git:cm

# 3. Review commit
git log -1

# 4. Push if satisfied
/git:cp

# 5. Create PR if needed
/git:pr main feature-branch
```

### After Bug Fix

```bash
# Fix the bug...

# Commit and push immediately
/git:cp
```

### Before Pull Request

```bash
# Ensure all changes committed
/git:cm

# Push to feature branch
git push origin feature/new-feature

# Create PR
/git:pr main feature/new-feature
```

## Advanced Features

### Custom Commit Messages

If you want to override auto-generated messages:

```bash
# git-manager will still validate format
git add .
git commit -m "feat(auth): custom message here"
```

The agent validates but doesn't interfere with manual commits.

### Multi-Part Commits

For large changes, commit in logical chunks:

```bash
# Stage specific files
git add src/auth/*
/git:cm  # Commits auth changes

# Stage UI files
git add src/components/*
/git:cm  # Commits UI changes
```

### Amend Commits

```bash
# Make additional changes
git add .
git commit --amend --no-edit

# Or with new message
git commit --amend -m "feat(auth): updated message"
```

## Token Optimization

### Haiku Optimization Strategies

**1. Minimal Context Loading**
```
Instead of reading entire files:
✓ Read git diff only
✓ Analyze changed lines
✗ Don't read full file history
```

**2. Focused Analysis**
```
Analyze:
✓ File paths
✓ Change types (add/modify/delete)
✓ Line count changes
✗ Don't analyze file contents deeply
```

**3. Simple Pattern Matching**
```
Commit type detection:
✓ Pattern matching on file paths
✓ Change magnitude analysis
✗ Don't use complex NLP
```

**4. Delegation Strategy**
```
Delegate to Gemini when:
- Changes span >5 files
- Mixed change types (feat + fix)
- Architectural changes
- Complex refactoring
```

### Performance Comparison

| Approach | Tokens | Time | Cost |
|----------|--------|------|------|
| Baseline (Sonnet) | 25K-30K | 45s | $0.075 |
| Optimized (Haiku) | 5K-8K | 10-15s | $0.015 |
| **Savings** | **81%** | **67%** | **80%** |

## Best Practices

### Do's ✅

**Clear Commit Scope**
```bash
✓ git add src/auth/login.ts src/auth/register.ts
✓ /git:cm  # Commits only auth changes
```

**Logical Grouping**
```bash
✓ Commit related changes together
✓ Separate features from fixes
✓ Keep commits focused
```

**Review Before Push**
```bash
✓ /git:cm  # Review commit message
✓ git log -1  # Verify commit
✓ /git:cp  # Push if satisfied
```

### Don'ts ❌

**Mixed Concerns**
```bash
✗ git add .  # Auth + UI + DB changes
✗ /git:cm  # Creates unclear commit
```

**Skipping Security Scan**
```bash
✗ git commit --no-verify  # Bypasses security
```

**Vague Messages**
```bash
✗ "update files"
✗ "fix bug"
✗ "WIP"
```

## Troubleshooting

### Problem: Commit Blocked by Security Scan

**Symptoms**: Warning about detected secrets

**Solutions:**
1. Remove hardcoded secrets from code
2. Use environment variables instead
3. Add `.env` files to `.gitignore`
4. Use secret management tools (Vault, AWS Secrets Manager)

**Example Fix:**
```typescript
// Before (blocked)
const API_KEY = "sk-1234567890abcdef";

// After (allowed)
const API_KEY = process.env.API_KEY;
```

### Problem: Message Too Long

**Symptoms**: Commit message exceeds 72 characters

**Solutions:**
1. Simplify description
2. Move details to commit body
3. Use shorter scope names

**Example:**
```bash
# Too long (80 chars)
fix(authentication): add comprehensive email validation for registration form

# Better (68 chars)
fix(auth): add email validation for registration

# With body
fix(auth): add email validation

- Validate email format
- Check domain DNS
- Prevent disposable emails
```

### Problem: Wrong Commit Type

**Symptoms**: Agent chose incorrect type

**Solutions:**
1. Stage more specific files
2. Split into multiple commits
3. Manually specify type

**Example:**
```bash
# Agent might be confused by mixed changes
git add .  # feat + fix + docs

# Better: separate commits
git add src/features/new-feature.ts
/git:cm  # Auto: feat(features)

git add src/bugs/fix.ts
/git:cm  # Auto: fix(bugs)
```

### Problem: Push Failed

**Symptoms**: Remote rejected push

**Solutions:**
1. Pull latest changes first
2. Resolve merge conflicts
3. Force push if appropriate (with caution)

**Commands:**
```bash
# Pull and rebase
git pull --rebase origin main

# Resolve conflicts if any
git add .
git rebase --continue

# Push again
/git:cp
```

## Security Features

### Secret Detection Patterns

The agent scans for:

**API Keys**
```
✗ API_KEY = "sk-..."
✗ apiKey: "pk_live_..."
✗ token = "ghp_..."
```

**Passwords**
```
✗ PASSWORD = "admin123"
✗ db_password: "secret"
✗ credentials.password = "..."
```

**Private Keys**
```
✗ -----BEGIN PRIVATE KEY-----
✗ -----BEGIN RSA PRIVATE KEY-----
```

**Connection Strings**
```
✗ postgres://user:pass@host/db
✗ mongodb://user:pass@host/db
✗ mysql://user:pass@host/db
```

**OAuth Tokens**
```
✗ access_token: "ya29..."
✗ refresh_token: "..."
```

### Whitelisting

Some patterns are allowed if properly managed:

**Environment Variable References**
```
✓ API_KEY = process.env.API_KEY
✓ password: process.env.DB_PASSWORD
```

**Example/Template Files**
```
✓ .env.example
✓ config.template.js
```

**Test Fixtures**
```
✓ tests/fixtures/mock-credentials.ts
```

## Integration with Other Agents

### After Implementation

```
planner → code → tester → git-manager
                           ↓
                    Commits changes
```

### After Code Review

```
code-reviewer → fixes applied → git-manager
                                 ↓
                          Commits reviewed code
```

### After Documentation

```
docs-manager → updates docs → git-manager
                               ↓
                        Commits documentation
```

## Important Notes

### AI Attribution

**Never includes AI attribution in commits**

The git-manager agent:
- ✅ Creates professional commit messages
- ✅ Follows team conventions
- ❌ Never adds "Generated by AI"
- ❌ Never includes attribution

### Commit Standards

Follows industry-standard conventional commits:
- Used by Angular, React, Vue, and many others
- Compatible with changelog generators
- Enables semantic versioning automation
- Clear commit history

### Token Efficiency

Optimized for frequent commits:
- Minimal token usage per commit
- Fast execution times
- Cost-effective for daily use
- Scales to hundreds of commits

## Next Steps

Learn more about related topics:

- [Commit & Push Command](/docs/commands/git/commit-push) - How to commit and push
- [Pull Request Command](/docs/commands/git/pr) - Creating pull requests
- [Code Review](/docs/agents/code-reviewer) - Pre-commit code review
- [Project Manager](/docs/agents/project-manager) - Overall project coordination

---

**Key Takeaway**: The git-manager agent provides token-optimized, secure Git operations with professional conventional commits, security scanning, and 81% cost reduction compared to baseline approaches.
