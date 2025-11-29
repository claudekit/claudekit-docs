---
title: /fix:ci
description: "Documentation for /fix:ci
description:
section: docs
category: docs/commands/fix
order: 22
published: true"
section: docs
category: docs/commands/fix
order: 22
published: true
---

# /fix:ci

Automatically fix GitHub Actions CI failures by analyzing workflow logs, identifying root causes, and implementing solutions. Essential for maintaining green CI/CD pipelines.

## Syntax

```bash
/fix:ci [github-workflow-url]
```

## Prerequisites

You need the GitHub CLI (`gh`) installed:

```bash
# macOS
brew install gh

# Windows
winget install GitHub.cli

# Linux
sudo apt install gh

# Authenticate
gh auth login
```

## How It Works

### 1. Log Retrieval

- Uses `gh` CLI to fetch workflow run logs
- Downloads all job logs
- Parses error messages and stack traces
- Identifies failed steps

### 2. Error Analysis

- Categorizes failures (tests, build, lint, deploy, etc.)
- Identifies root causes
- Distinguishes between flaky and real failures
- Maps errors to specific files/lines

### 3. Solution Research

- Searches for similar CI issues
- Reviews GitHub Actions documentation
- Checks for known issues with actions
- Identifies best practices

### 4. Implementation

- Fixes code issues (if code problem)
- Updates workflow configuration (if CI config problem)
- Adds missing dependencies
- Adjusts environment settings

### 5. Verification

- Runs tests locally if possible
- Validates workflow syntax
- Suggests manual verification steps

## Examples

### Test Failures

```bash
/fix:ci https://github.com/user/repo/actions/runs/123456789
```

**CI Output:**
```
Error: Cannot find module '@testing-library/react'
  at require (src/components/Button.test.tsx:1:1)
```

**What happens:**
```
1. Analyzing logs...
   - Job: test
   - Step: Run tests
   - Error: Missing dependency

2. Root Cause:
   @testing-library/react not in package.json
   Recently removed in commit abc123

3. Fix: Add missing dependency
   npm install --save-dev @testing-library/react

4. Update package.json
   ✓ Added @testing-library/react@14.0.0

5. Commit fix
   ✓ fix(ci): add missing test dependency

Would you like to push and re-run CI? (y/n)
```

### Build Failures

```bash
/fix:ci https://github.com/user/repo/actions/runs/987654321
```

**CI Output:**
```
Error: TypeScript compilation failed
src/auth/login.ts:45:12 - error TS2339: Property 'user' does not exist on type 'Response'
```

**What happens:**
```
1. Analyzing TypeScript errors...
   - 5 type errors found
   - All in src/auth/ directory

2. Root Cause:
   Updated Response type doesn't include 'user' property
   Need to use 'data.user' instead

3. Fixes Applied:
   ✓ src/auth/login.ts - Changed to response.data.user
   ✓ src/auth/register.ts - Changed to response.data.user
   ✓ src/auth/logout.ts - Changed to response.data.user

4. Verification:
   ✓ TypeScript compiles locally
   ✓ All type checks pass

Push changes? (y/n)
```

### Lint Failures

```bash
/fix:ci https://github.com/user/repo/actions/runs/456789123
```

**CI Output:**
```
/home/runner/work/repo/src/utils/helper.ts
  12:7  error  'result' is assigned a value but never used  @typescript-eslint/no-unused-vars
  45:1  error  Expected linebreak to be 'LF' but found 'CRLF'  prettier/prettier
```

**What happens:**
```
1. Found 15 linting errors
   - 8 unused variables
   - 7 formatting issues

2. Auto-fixing...
   ✓ Removed unused variables
   ✓ Fixed line endings (CRLF → LF)
   ✓ Applied Prettier formatting

3. Running lint locally...
   ✓ ESLint: No errors
   ✓ Prettier: All files formatted

Ready to commit and push? (y/n)
```

### Workflow Configuration Issues

```bash
/fix:ci https://github.com/user/repo/actions/runs/321654987
```

**CI Output:**
```
Error: The workflow is not valid.
.github/workflows/ci.yml (Line: 25, Col: 7): Unexpected value 'node-version'
```

**What happens:**
```
1. Workflow syntax error detected
   File: .github/workflows/ci.yml
   Line: 25

2. Issue:
   - 'node-version' should be under 'with:' block
   - Indentation incorrect

3. Fixed workflow file:
   Before:
     - uses: actions/setup-node@v3
       node-version: '18'

   After:
     - uses: actions/setup-node@v3
       with:
         node-version: '18'

4. Validated workflow syntax
   ✓ Workflow is valid

Commit fix? (y/n)
```

### Flaky Tests

```bash
/fix:ci https://github.com/user/repo/actions/runs/147258369
```

**CI Output:**
```
FAIL src/api/users.test.ts
  ● UserService › should create user

    expect(received).toBe(expected)

    Expected: "user-123"
    Received: "user-124"
```

**What happens:**
```
1. Test failure analysis
   - Test: "should create user"
   - Failure: ID mismatch
   - History: Failed 3 times this week

2. Root Cause: Flaky test
   - Test relies on database auto-increment
   - Non-deterministic ID generation
   - Race condition in parallel tests

3. Fix: Use mocked IDs
   Before:
     const user = await userService.create(data)
     expect(user.id).toBe('user-123')

   After:
     const user = await userService.create(data)
     expect(user.id).toMatch(/^user-\d+$/)

4. Added test isolation
   ✓ Each test uses separate database
   ✓ IDs reset between tests

Re-run tests locally? (y/n)
```

## Common CI Failures

### Dependency Issues

```bash
# Package not installed
Error: Cannot find module 'express'
→ Fix: npm install express

# Version mismatch
Error: Requires Node.js >= 18, got 16
→ Fix: Update Node version in workflow

# Lock file out of sync
Error: package-lock.json is out of date
→ Fix: npm install, commit lock file
```

### Environment Issues

```bash
# Missing environment variable
Error: STRIPE_API_KEY is not defined
→ Fix: Add to GitHub Secrets

# Wrong working directory
Error: ENOENT: no such file or directory 'src/app'
→ Fix: Add 'working-directory' to step

# Insufficient permissions
Error: Permission denied
→ Fix: Add permissions to workflow
```

### Test Issues

```bash
# Timeout
Error: Test exceeded 5000ms timeout
→ Fix: Increase timeout or optimize test

# Flaky test
Error: Intermittent failures
→ Fix: Add retries or fix race condition

# Missing test setup
Error: Database not initialized
→ Fix: Add setup script before tests
```

### Build Issues

```bash
# Out of memory
Error: JavaScript heap out of memory
→ Fix: Increase NODE_OPTIONS=--max-old-space-size

# Build artifacts missing
Error: dist/ directory not found
→ Fix: Add build step before deploy

# Asset size too large
Error: Bundle size exceeds limit
→ Fix: Optimize bundle or increase limit
```

## Best Practices

### Provide Full Workflow URL

✅ **Complete URL:**
```bash
/fix:ci https://github.com/user/repo/actions/runs/123456789
```

❌ **Incomplete:**
```bash
/fix:ci 123456789
```

### Check Locally First

Before pushing fixes:

```bash
# Run tests
npm test

# Check types
npm run type-check

# Run linter
npm run lint

# Build
npm run build
```

### Review Changes

```bash
# After /fix:ci makes changes
git diff

# Verify changes make sense
# Then commit and push
```

### Monitor Re-run

After pushing fix:

```bash
# Watch the re-run
gh run watch

# Check if fix worked
# If still failing, investigate further
```

## Workflow Integration

### Standard CI Fix Workflow

```bash
# 1. CI fails
# (Receive notification)

# 2. Analyze and fix
/fix:ci https://github.com/user/repo/actions/runs/123

# 3. Review changes
git diff

# 4. Commit
/git:cm

# 5. Push
git push

# 6. Monitor re-run
gh run watch

# 7. Verify success
✓ All checks passed
```

### For Multiple Failures

```bash
# Fix one at a time
/fix:ci https://github.com/user/repo/actions/runs/123

# After fix is verified
/fix:ci https://github.com/user/repo/actions/runs/124

# Or batch fix if related
"Fix both issues in runs 123 and 124"
```

## Advanced Usage

### Specific Job Analysis

```bash
/fix:ci https://github.com/user/repo/actions/runs/123 --job=test
```

### Rerun After Fix

```bash
/fix:ci https://github.com/user/repo/actions/runs/123 --auto-rerun
```

### Create Issue If Can't Fix

```bash
/fix:ci https://github.com/user/repo/actions/runs/123 --create-issue
```

## Troubleshooting

### Can't Access Logs

**Problem:** "gh: Not authenticated"

**Solution:**
```bash
gh auth login
gh auth status

# Grant necessary permissions
gh auth refresh -s repo -s workflow
```

### Fix Doesn't Work

**Problem:** Fix applied but CI still fails

**Solution:**
```bash
# Get more details
/debug [CI failure in job X]

# Use comprehensive fix
/fix:hard [describe the CI issue]
```

### Workflow File Syntax Errors

**Problem:** Can't parse workflow file

**Solution:**
```bash
# Validate workflow locally
gh workflow view

# Use GitHub's validator
# https://github.com/user/repo/actions
```

## Common Scenarios

### After Dependency Update

```bash
# Update dependencies
npm update

# CI fails
/fix:ci [workflow-url]

# Usually: Update lock file, fix breaking changes
```

### After Refactoring

```bash
# Large refactor pushed
# CI fails with multiple test failures

/fix:ci [workflow-url]

# Fixes import paths, updates tests
```

### Deployment Failures

```bash
# Build succeeds but deploy fails
/fix:ci [workflow-url]

# Usually: Environment variables, permissions, or credentials
```

## Metrics

Average fix times:
- **Test failures**: 2-5 minutes
- **Build errors**: 3-7 minutes
- **Lint issues**: 1-2 minutes
- **Config errors**: 1-3 minutes
- **Flaky tests**: 5-10 minutes

Success rate: ~85% automated fix rate

## Next Steps

- [/plan:ci](/docs/commands/plan/ci) - Create fix plan without implementing
- [/fix:hard](/docs/commands/fix/hard) - For complex CI issues
- [/test](/docs/commands/core/test) - Run tests locally

---

**Key Takeaway**: `/fix:ci` automates the tedious process of analyzing GitHub Actions failures and implementing fixes, getting your CI pipeline back to green quickly.
