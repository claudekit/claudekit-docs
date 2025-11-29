---
title: /git:pr
description: "Documentation for /git:pr
description:
section: docs
category: commands/git
order: 32
published: true"
section: docs
category: commands/git
order: 32
published: true
---

# /git:pr

Create a pull request with an AI-generated comprehensive summary and test plan. Analyzes all commits since branch divergence, reviews complete change set, and generates professional PR description using GitHub CLI.

## Syntax

```bash
/git:pr [target-branch] [source-branch]
```

### Parameters

- `[target-branch]` (optional): Branch to merge into (defaults to `main`)
- `[source-branch]` (optional): Branch to merge from (defaults to current branch)

## How It Works

The `/git:pr` command uses the `git-manager` agent with this workflow:

### 1. Branch Analysis

- Identifies target and source branches
- Checks branch tracking and remote status
- Determines divergence point from base branch
- Reviews all commits since divergence

### 2. Change Review

- Runs `git status` to see current state
- Runs `git diff` for staged/unstaged changes
- Runs `git log` to review commit history
- Runs `git diff [base]...HEAD` for complete changeset
- Analyzes ALL commits (not just latest)

### 3. PR Summary Generation

- Reviews complete diff and commit messages
- Identifies feature additions, bug fixes, refactoring
- Creates bullet-point summary of changes
- Generates test plan checklist
- Follows professional PR format

### 4. PR Creation

- Creates/pushes branch if needed
- Executes `gh pr create` with generated content
- Returns PR URL for review
- Handles authentication and permissions

## When to Use

### ✅ Perfect For

**Feature Completion**
```bash
# After implementing feature
/git:pr
```

**Bug Fix Ready**
```bash
# After fixing and testing bug
/git:pr main hotfix/critical-bug
```

**Release Preparation**
```bash
# Merge develop to main
/git:pr main develop
```

**Code Review Request**
```bash
# Request team review
/git:pr
```

### ❌ Don't Use For

**Work in Progress**
```bash
❌ /git:pr  # Before feature is complete
✅ Finish feature first, then create PR
```

**No Commits**
```bash
❌ /git:pr  # Nothing committed yet
✅ /git:cm  # Commit first
```

**GitHub CLI Not Installed**
```bash
❌ /git:pr
✅ Install gh: brew install gh
```

## Examples

### Simple Feature PR

```bash
/git:pr
```

**What happens:**
```
1. Analyzing branch
   Current branch: feature/user-profile
   Target branch: main
   Diverged at: commit abc1234
   Commits ahead: 5

2. Reviewing changes
   $ git log main..HEAD
   - feat: add user profile page
   - feat: add profile avatar upload
   - test: add profile component tests
   - docs: document profile API
   - fix: handle missing avatar gracefully

   $ git diff main...HEAD
   Files changed: 12
   Insertions: +487
   Deletions: -23

3. Generating PR description
   ✓ Created summary from all 5 commits
   ✓ Generated test plan

4. Creating PR
   $ gh pr create --title "Add user profile page" --body "..."

   ✓ Created: https://github.com/user/repo/pull/42

✓ Pull request created (34s)
```

**Generated PR:**
```markdown
## Summary

- Add user profile page with avatar upload capability
- Implement profile data editing functionality
- Add profile avatar upload with image validation
- Include comprehensive test suite for profile components
- Document profile API endpoints
- Handle edge case for missing avatar with default image

## Test plan

- [ ] Verify profile page loads correctly
- [ ] Test profile data editing and saving
- [ ] Validate avatar upload with various image formats
- [ ] Test avatar size limits and validation
- [ ] Verify default avatar displays when none uploaded
- [ ] Run full test suite (npm test)
- [ ] Check API endpoint documentation accuracy
- [ ] Test error handling for failed uploads
```

### Hotfix PR

```bash
/git:pr main hotfix/payment-timeout
```

**What happens:**
```
1. Branch setup
   Source: hotfix/payment-timeout
   Target: main
   Commits: 2

2. Analyzing hotfix
   $ git diff main...hotfix/payment-timeout
   - fix: increase payment gateway timeout
   - test: add timeout handling tests

   Critical fix: Payment processing timeouts under load

3. Creating PR
   Title: "Fix: Payment gateway timeout issues"
   Labels: hotfix, urgent

   ✓ Created: https://github.com/user/repo/pull/43

✓ Hotfix PR ready for immediate review (18s)
```

**Generated PR:**
```markdown
## Summary

- Increase payment gateway timeout from 5s to 30s to handle slow connections
- Add comprehensive timeout handling with retry logic
- Include tests validating timeout behavior under various network conditions

## Test plan

- [ ] Verify payments complete successfully under normal conditions
- [ ] Test timeout handling with slow network simulation
- [ ] Validate retry logic works correctly
- [ ] Run full payment integration test suite
- [ ] Monitor production metrics after deployment
- [ ] Check error logging captures timeout events correctly
```

### Complex Feature PR

```bash
/git:pr main feature/oauth-integration
```

**What happens:**
```
1. Analyzing large feature
   Commits: 23
   Files changed: 45
   Insertions: +2,345
   Deletions: -567

2. Reviewing comprehensive changes
   ✓ Analyzed all 23 commits
   ✓ Reviewed complete diff
   ✓ Identified major components:
     - OAuth2 authentication flow
     - Google and GitHub providers
     - Token management system
     - User account linking
     - Security enhancements

3. Generating detailed PR
   ✓ Created comprehensive summary
   ✓ Generated thorough test plan
   ✓ Listed breaking changes
   ✓ Documented migration steps

4. Creating PR
   ✓ https://github.com/user/repo/pull/44

✓ Complex PR created with full documentation (1m 12s)
```

**Generated PR:**
```markdown
## Summary

### OAuth2 Implementation
- Implement OAuth2 authentication flow with authorization code grant
- Add Google OAuth provider with profile data retrieval
- Add GitHub OAuth provider with email and profile access
- Create token management system with secure storage

### User Experience
- Allow account linking for existing users
- Implement seamless signup flow for new users via OAuth
- Add OAuth disconnect functionality in account settings

### Security Enhancements
- Implement PKCE for OAuth flow security
- Add CSRF protection for OAuth callbacks
- Secure token storage with encryption
- Add rate limiting for OAuth endpoints

### Infrastructure
- Create OAuth callback endpoints
- Implement OAuth state management
- Add comprehensive error handling
- Include extensive test coverage (94%)

## Breaking Changes

- Authentication flow now requires `AUTH_CALLBACK_URL` environment variable
- Users table schema updated with OAuth fields (migration required)

## Migration Guide

1. Add environment variables:
   ```
   GOOGLE_CLIENT_ID=...
   GOOGLE_CLIENT_SECRET=...
   GITHUB_CLIENT_ID=...
   GITHUB_CLIENT_SECRET=...
   AUTH_CALLBACK_URL=https://yourdomain.com/auth/callback
   ```

2. Run database migration:
   ```
   npm run migrate
   ```

## Test plan

### OAuth Flow
- [ ] Test Google OAuth signup flow
- [ ] Test GitHub OAuth signup flow
- [ ] Test Google OAuth login flow
- [ ] Test GitHub OAuth login flow
- [ ] Verify OAuth callback handling

### Account Linking
- [ ] Test linking Google account to existing user
- [ ] Test linking GitHub account to existing user
- [ ] Verify unlinking OAuth accounts
- [ ] Test multiple OAuth providers per user

### Security
- [ ] Verify PKCE implementation
- [ ] Test CSRF protection
- [ ] Validate token encryption
- [ ] Test rate limiting
- [ ] Security audit of OAuth flow

### Edge Cases
- [ ] Test OAuth with invalid credentials
- [ ] Test OAuth callback errors
- [ ] Test concurrent OAuth attempts
- [ ] Verify expired token handling

### Integration
- [ ] Run full test suite (npm test)
- [ ] Test in staging environment
- [ ] Verify database migrations
- [ ] Check error logging and monitoring
```

### Release PR

```bash
/git:pr main develop
```

**What happens:**
```
1. Analyzing release
   Source: develop
   Target: main
   Commits since last release: 67
   Features: 12
   Bug fixes: 8
   Improvements: 5

2. Generating release summary
   ✓ Grouped changes by type
   ✓ Highlighted breaking changes
   ✓ Listed new features
   ✓ Documented bug fixes

3. Creating release PR
   Title: "Release v2.1.0"

   ✓ https://github.com/user/repo/pull/45

✓ Release PR created (1m 45s)
```

## GitHub CLI Integration

### Requirements

The command requires GitHub CLI (`gh`):

```bash
# Install GitHub CLI
brew install gh  # macOS
# or
sudo apt install gh  # Linux
# or
winget install --id GitHub.cli  # Windows

# Authenticate
gh auth login
```

### Authentication

If not authenticated:
```
! GitHub CLI not authenticated
Run: gh auth login

Follow prompts to authenticate with GitHub.
```

### Permissions Required

- Repository write access
- Pull request creation permissions
- Branch push permissions (if branch doesn't exist on remote)

## PR Format

### Title

Auto-generated based on commits:
- Single feature: "Add user authentication"
- Multiple features: "Release v2.1.0"
- Bug fix: "Fix payment processing timeout"

### Body Structure

```markdown
## Summary
- Bullet-point list of changes
- Organized by logical grouping
- Focuses on WHAT changed and WHY

## Test plan
- [ ] Checklist item 1
- [ ] Checklist item 2
- [ ] Integration tests
```

## Best Practices

### Commit Before Creating PR

✅ **Good - Everything committed:**
```bash
# Commit all work
/git:cm

# Push to remote
git push

# Create PR
/git:pr
```

❌ **Bad - Uncommitted changes:**
```bash
# Has uncommitted changes
/git:pr  # May not include all changes
```

### Provide Branch Context

✅ **Explicit branches:**
```bash
# Merge hotfix to main
/git:pr main hotfix/critical-bug

# Merge feature to develop
/git:pr develop feature/new-api
```

### Review Before Merging

✅ **Review the PR:**
```bash
# Create PR
/git:pr

# Review on GitHub
# Get team feedback
# Address comments
# Then merge
```

## Workflow

### Feature Development Flow

```bash
# 1. Create feature branch
git checkout -b feature/user-dashboard

# 2. Implement feature (multiple commits)
/cook [add dashboard layout]
/git:cm

/cook [add dashboard widgets]
/git:cm

/cook [add dashboard filters]
/git:cm

# 3. Run tests
/test

# 4. Create PR
/git:pr

# 5. Address review feedback
# ... make changes ...
/git:cm
git push

# 6. Merge on GitHub after approval
```

### Hotfix Flow

```bash
# 1. Create hotfix branch from main
git checkout main
git pull
git checkout -b hotfix/payment-bug

# 2. Fix issue
/fix:fast [payment processing bug]

# 3. Test fix
/test

# 4. Commit
/git:cm

# 5. Create PR immediately
/git:pr main hotfix/payment-bug

# 6. Request urgent review
# 7. Merge and deploy ASAP
```

### Release Flow

```bash
# 1. Ensure develop is clean
git checkout develop
git pull

# 2. Update version and changelog
# Edit package.json and CHANGELOG.md
/git:cm

# 3. Create release PR
/git:pr main develop

# 4. Review changes thoroughly
# 5. Run full test suite in staging
# 6. Merge to main
# 7. Tag release
git tag v2.1.0
git push --tags
```

## Troubleshooting

### GitHub CLI Not Installed

**Problem:** `gh` command not found

**Solution:**
```bash
# Install GitHub CLI
brew install gh  # macOS
sudo apt install gh  # Linux

# Authenticate
gh auth login

# Retry
/git:pr
```

### Not Authenticated

**Problem:** GitHub authentication required

**Solution:**
```bash
# Authenticate with GitHub
gh auth login

# Follow prompts to authenticate

# Retry
/git:pr
```

### No Commits Ahead

**Problem:** Current branch has no new commits

**Solution:**
```bash
# Check branch status
git status
git log main..HEAD

# Ensure you have commits
# Or create new feature first
```

### Branch Not Pushed

**Problem:** Local branch not on remote

**Solution:**
```bash
# Command automatically pushes
/git:pr

# Or push manually first
git push -u origin feature-branch
/git:pr
```

### PR Already Exists

**Problem:** PR already exists for branch

**Solution:**
```bash
# View existing PR
gh pr view

# Or close old PR and create new one
gh pr close 42
/git:pr
```

## Related Commands

### Commit and Create PR

```bash
# 1. Commit changes
/git:cm

# 2. Create PR
/git:pr
```

### Commit, Push, and Create PR

```bash
# 1. Commit and push
/git:cp

# 2. Create PR
/git:pr
```

### Fix and Create PR

```bash
# 1. Fix issue
/fix:fast [bug description]

# 2. Test
/test

# 3. Commit
/git:cm

# 4. Create PR
/git:pr
```

## Advanced Usage

### Custom Target Branch

```bash
# Merge to develop instead of main
/git:pr develop

# Merge to staging
/git:pr staging

# Merge specific branches
/git:pr production hotfix/urgent-fix
```

### Draft PRs

```bash
# Create PR first (work in progress)
/git:pr

# Then mark as draft on GitHub
gh pr ready --undo
```

## Metrics

Typical `/git:pr` performance:

- **Time**: 30 seconds - 2 minutes (depending on changeset size)
- **Commits analyzed**: All commits since branch divergence
- **Summary quality**: Professional, comprehensive
- **Test plan coverage**: Typically 8-15 checklist items
- **Success rate**: 99%+ (assuming gh CLI configured)

## Next Steps

After using `/git:pr`:

- Review PR on GitHub
- Address reviewer feedback
- Run CI/CD pipeline
- Merge when approved
- [/watzup](/docs/commands/core/watzup) - Review what was accomplished

---

**Key Takeaway**: `/git:pr` creates professional pull requests by analyzing all commits since branch divergence and generating comprehensive summaries with actionable test plans, streamlining the code review process.
