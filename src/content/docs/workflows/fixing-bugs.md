---
title: Fixing Bugs
description: "Documentation for Fixing Bugs
description:
section: workflows
category: workflows
order: 4
published: true"
section: workflows
category: workflows
order: 4
published: true
---

# Fixing Bugs

Learn how to systematically investigate, fix, and verify bug fixes using ClaudeKit's debugging workflow - from log analysis to production deployment.

## Overview

**Goal**: Debug and fix issues systematically with root cause analysis
**Time**: 5-20 minutes (vs 1-4 hours manually)
**Agents Used**: debugger, tester, code-reviewer
**Commands**: /fix:fast, /fix:hard, /fix:logs, /fix:ui, /fix:ci, /test

## Prerequisites

- Bug reproduction steps or error logs
- Development environment set up
- Access to relevant logs (if production bug)
- Test suite in place

## Choosing the Right Command

ClaudeKit provides different debugging commands for different scenarios:

| Command | Use Case | Complexity | Time |
|---------|----------|------------|------|
| `/fix:fast` | Simple bugs, quick fixes | Low | 2-5 min |
| `/fix:hard` | Complex bugs, multi-file changes | High | 10-20 min |
| `/fix:logs` | Production issues from logs | Medium | 5-15 min |
| `/fix:ui` | Visual/layout bugs | Low-Medium | 3-10 min |
| `/fix:ci` | CI/CD pipeline failures | Medium | 5-15 min |
| `/fix:types` | TypeScript type errors | Low | 2-5 min |

## Step-by-Step Workflow

### Step 1: Reproduce the Bug

Before fixing, confirm you can reproduce the issue:

```bash
# Example: Bug report
# "Users can't login with valid credentials"

# Test manually
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123"}'

# Expected: 200 OK with token
# Actual: 401 Unauthorized
```

Document the issue:
- What happens (actual behavior)
- What should happen (expected behavior)
- Steps to reproduce
- Error messages or logs

### Step 2: Choose Debugging Approach

#### Option A: Quick Fix (/fix:fast)

For simple, isolated bugs:

```bash
/fix:fast [users getting 401 error on login with valid credentials]
```

**What happens**:
```
[1/4] Analyzing issue...
  ✓ Located login controller
  ✓ Found authentication middleware
  ✓ Identified issue: password comparison using == instead of bcrypt.compare

[2/4] Implementing fix...
  ✓ Updated src/auth/login.controller.js
  ✓ Fixed password validation logic

[3/4] Running tests...
  ✓ All auth tests pass (24/24)
  ✓ Coverage maintained: 87%

[4/4] Verification...
  ✓ Manual test: Login successful
  ✓ Token generation working
  ✓ No regressions detected

✅ Bug fixed

Files modified:
- src/auth/login.controller.js

Change summary:
- Line 47: Replace == with bcrypt.compare()
- Added async/await for password validation
```

#### Option B: Complex Fix (/fix:hard)

For bugs requiring investigation and multiple changes:

```bash
/fix:hard [memory leak in WebSocket connections causing server crashes]
```

**What happens**:
```
[1/6] Investigation phase...
  ✓ Analyzing WebSocket implementation
  ✓ Checking connection cleanup
  ✓ Reviewing event listeners
  ✓ Inspecting memory patterns

Root cause identified:
- Event listeners not removed on disconnect
- Connection objects not garbage collected
- Socket references held in memory

[2/6] Creating fix plan...
  ✓ Plan saved: plans/fix-websocket-leak-20251030.md

[3/6] Implementing fixes...
  ✓ Add cleanup on disconnect
  ✓ Remove event listeners properly
  ✓ Implement connection pooling
  ✓ Add memory monitoring

[4/6] Running tests...
  ✓ Connection cleanup tests (12 new tests)
  ✓ Memory leak tests (5 new tests)
  ✓ All existing tests pass

[5/6] Performance validation...
  ✓ Memory usage stable over 1000 connections
  ✓ No leaks detected in 10-minute stress test

[6/6] Documentation updated...
  ✓ Added WebSocket lifecycle docs
  ✓ Updated architecture diagram

✅ Complex bug fixed

Files modified:
- src/websocket/server.js
- src/websocket/connection-manager.js
- src/utils/cleanup.js

Tests added:
- tests/websocket/cleanup.test.js
- tests/websocket/memory.test.js
```

#### Option C: Production Log Analysis (/fix:logs)

For bugs discovered in production:

```bash
# Copy production logs
# logs/production.log

/fix:logs [analyze production error logs and fix the issue]
```

**What happens**:
```
[1/5] Analyzing logs...
  ✓ Read logs/production.log
  ✓ Parsed 1,247 error entries
  ✓ Grouped by error type

Error distribution:
- TypeError: Cannot read property 'id' (847 occurrences)
- Database connection timeout (312 occurrences)
- Rate limit exceeded (88 occurrences)

[2/5] Root cause analysis...
  ✓ Primary issue: User object undefined in middleware
  ✓ Occurs when JWT token expired but not caught
  ✓ Affects: src/middleware/auth.js:34

[3/5] Implementing fix...
  ✓ Add token expiry validation
  ✓ Improve error handling
  ✓ Add logging for debugging

[4/5] Testing fix...
  ✓ Expired token test added
  ✓ Error handling test added
  ✓ All tests pass

[5/5] Prevention measures...
  ✓ Added monitoring alert
  ✓ Updated error response
  ✓ Documented in troubleshooting guide

✅ Production issue resolved

Next steps:
1. Deploy fix to staging
2. Monitor for 24 hours
3. Deploy to production
```

#### Option D: UI Bug Fix (/fix:ui)

For visual or layout issues:

```bash
# Provide screenshot or description
/fix:ui [button misaligned on mobile devices]
```

**What happens**:
```
[1/4] Analyzing UI issue...
  ✓ Located button component
  ✓ Checked responsive styles
  ✓ Issue: Missing media query for mobile

[2/4] Implementing fix...
  ✓ Added mobile breakpoint styles
  ✓ Fixed button alignment
  ✓ Improved touch target size

[3/4] Testing across devices...
  ✓ Desktop: ✓
  ✓ Tablet: ✓
  ✓ Mobile: ✓

[4/4] Visual regression check...
  ✓ No other layout changes
  ✓ All components render correctly

✅ UI bug fixed

Files modified:
- src/components/Button.css
```

#### Option E: CI/CD Fix (/fix:ci)

For build or deployment failures:

```bash
# Provide GitHub Actions URL
/fix:ci [https://github.com/user/repo/actions/runs/12345]
```

**What happens**:
```
[1/5] Fetching CI logs...
  ✓ Downloaded workflow logs
  ✓ Parsed 847 lines

[2/5] Analyzing failure...
  Error found at line 234:
  "Error: Cannot find module '@babel/preset-react'"

  Root cause: Missing dependency in package.json

[3/5] Implementing fix...
  ✓ Added @babel/preset-react to devDependencies
  ✓ Updated .babelrc configuration

[4/5] Local verification...
  ✓ npm install successful
  ✓ Build passes locally
  ✓ Tests pass

[5/5] CI validation...
  ✓ Pushing fix to trigger CI
  ✓ Monitoring workflow...
  ✓ CI build successful ✓

✅ CI fixed

Files modified:
- package.json
- .babelrc
```

### Step 3: Verify the Fix

Always verify fixes thoroughly:

```bash
# Run test suite
/test

# Manual testing
npm run dev
# Test the specific bug scenario

# Check for regressions
npm run test:integration
```

### Step 4: Document the Fix

Update documentation with the fix:

```bash
# Update docs
/docs:update [document the login bug fix and prevention measures]
```

**Generated documentation**:
```markdown
## Bug Fix: Login Authentication Issue

### Issue
Users unable to login with valid credentials due to incorrect password comparison.

### Root Cause
Password validation using == operator instead of bcrypt.compare()

### Fix Applied
Updated authentication logic to use proper async bcrypt comparison.

### Prevention
- Added test for bcrypt password validation
- Updated code review checklist
- Documented password handling best practices
```

### Step 5: Commit the Fix

```bash
/git:cm
```

**Generated commit**:
```
fix: resolve login authentication with valid credentials

- Fix password comparison to use bcrypt.compare instead of ==
- Add async/await for proper password validation
- Add test cases for password validation logic
- Update authentication documentation

Fixes: #123
```

## Complete Example: E-Commerce Cart Bug

### Bug Report

```
Title: Shopping cart duplicating items on page refresh
Severity: High
Impact: Users seeing incorrect cart totals

Steps to reproduce:
1. Add item to cart
2. Refresh page
3. Item appears twice in cart
4. Price incorrectly calculated

Environment: Production
Browser: All browsers
```

### Investigation

```bash
/fix:hard [shopping cart duplicating items on page refresh]
```

### Analysis Results

```
Root Cause Analysis:
1. Cart stored in localStorage
2. Also stored in database
3. On page load, both sources loaded and merged
4. Merge logic not checking for duplicates

Contributing factors:
- Missing unique key check
- No deduplication logic
- Improper state synchronization
```

### Implementation

```
Fixes applied:

1. src/store/cart.js
   - Add deduplication in loadCart()
   - Check by product ID before adding
   - Prioritize database as source of truth

2. src/utils/cart-sync.js
   - Implement proper sync strategy
   - Add conflict resolution
   - Clear localStorage after DB sync

3. tests/cart/sync.test.js
   - Add duplicate detection tests
   - Test localStorage/DB sync
   - Test refresh scenarios

4. docs/architecture/state-management.md
   - Document cart sync strategy
   - Add troubleshooting guide
```

### Verification

```bash
# Automated tests
✓ 15 new tests added
✓ All tests pass (187/187)
✓ Coverage: 89%

# Manual testing
✓ Add item to cart
✓ Refresh page
✓ Single item in cart ✓
✓ Correct price ✓
✓ Quantity correct ✓

# Regression testing
✓ Cart updates on quantity change
✓ Cart persists on navigation
✓ Cart syncs across tabs
```

### Time Comparison

**Manual debugging**: 3-4 hours
- Reproduce: 15 minutes
- Investigation: 60-90 minutes
- Implementation: 45-60 minutes
- Testing: 30-45 minutes
- Documentation: 30 minutes

**With ClaudeKit**: 18 minutes
- Reproduce: 5 minutes
- /fix:hard: 12 minutes
- Verification: 1 minute

**Time saved**: 3+ hours (90% faster)

## Common Variations

### Variation 1: Type Error Fix

```bash
/fix:types

# Automatically fixes TypeScript errors
# Updates type definitions
# Runs type checker
```

### Variation 2: Performance Bug

```bash
/fix:hard [API endpoint taking 8+ seconds to respond]

# Analyzes performance
# Identifies bottlenecks
# Implements optimization
# Validates improvement
```

### Variation 3: Security Bug

```bash
/fix:fast [SQL injection vulnerability in search endpoint]

# Identifies vulnerability
# Implements parameterized queries
# Adds input validation
# Runs security tests
```

### Variation 4: Integration Bug

```bash
/fix:logs [Stripe webhook failing with 400 errors]

# Analyzes webhook logs
# Identifies signature mismatch
# Fixes verification logic
# Tests webhook handling
```

## Troubleshooting

### Issue: Can't Reproduce Bug

**Problem**: Bug doesn't occur in development

**Solution**:
```bash
# Use production logs
/fix:logs [analyze production logs to identify the issue]

# Or try production-like environment
docker-compose -f docker-compose.prod.yml up
```

### Issue: Fix Breaks Other Features

**Problem**: Fix causes regressions

**Solution**:
```bash
# Run comprehensive tests
/test

# If tests fail
/fix:test

# Review all changes
git diff

# Consider alternative approach
/fix:hard [fix the login bug without changing the middleware]
```

### Issue: Root Cause Unclear

**Problem**: Can't identify why bug occurs

**Solution**:
```bash
# Use hard fix for investigation
/fix:hard [detailed description of symptoms]

# Provides thorough analysis
# Creates investigation plan
# Identifies root cause
```

### Issue: Intermittent Bug

**Problem**: Bug only happens sometimes

**Solution**:
```bash
# Add logging first
/cook [add detailed logging around the problematic area]

# Reproduce multiple times
# Collect logs
/fix:logs [analyze collected logs]
```

## Best Practices

### 1. Always Reproduce First

Before fixing:
```bash
✅ Reproduce the bug locally
✅ Document exact steps
✅ Capture error messages
✅ Note environment details

❌ Don't fix without reproducing
```

### 2. Add Tests for Bugs

Prevent regressions:
```bash
# After fixing
/test  # Includes new regression test

# Or add specific test
/cook [add test case for the login bug to prevent regression]
```

### 3. Check for Related Issues

Fix similar bugs:
```bash
# Search codebase
/scout "similar pattern to the bug" 3

# Fix all instances
/fix:fast [fix all instances of the password comparison bug]
```

### 4. Document in Changelog

Track bug fixes:
```bash
# Commit with fix: prefix
/git:cm

# Automatically added to CHANGELOG.md
# Links to issue number
```

### 5. Monitor After Deployment

Verify fix in production:
```bash
# After deploying fix
# Monitor logs for 24-48 hours
# Check error rates
# Verify user reports stopped
```

### 6. Root Cause Analysis

Understand why bug occurred:
```bash
# Use /fix:hard for analysis
# Documents root cause
# Suggests prevention measures
# Updates development guidelines
```

## Prevention Strategies

After fixing bugs, improve processes:

### 1. Add Validation

```bash
/cook [add input validation to prevent similar issues]
```

### 2. Improve Error Handling

```bash
/cook [enhance error handling with better logging and user messages]
```

### 3. Add Monitoring

```bash
/cook [add monitoring alerts for this type of error]
```

### 4. Update Code Standards

```bash
/docs:update [add this bug pattern to code review checklist]
```

## Next Steps

### Related Use Cases
- [Adding a New Feature](/docs/workflows/adding-feature) - Implement features
- [Optimizing Performance](/docs/workflows/optimizing-performance) - Speed improvements
- [Refactoring Code](/docs/workflows/refactoring-code) - Code quality

### Related Commands
- [/fix:fast](/docs/commands/fix/fast) - Quick bug fixes
- [/fix:hard](/docs/commands/fix/hard) - Complex debugging
- [/fix:logs](/docs/commands/fix/logs) - Log analysis
- [/fix:ui](/docs/commands/fix/ui) - UI bug fixes
- [/fix:ci](/docs/commands/fix/ci) - CI/CD fixes
- [/test](/docs/commands/core/test) - Test suite

### Further Reading
- [Debugger Agent](/docs/agents/debugger) - Debugging capabilities
- [Tester Agent](/docs/agents/tester) - Testing features
- [Troubleshooting](/docs/troubleshooting) - Common issues

---

**Key Takeaway**: ClaudeKit's debugging workflow provides systematic bug resolution with root cause analysis, automated testing, and prevention measures - turning hours of debugging into minutes.
