---
title: /fix:hard
description: "Documentation for /fix:hard
description:
section: docs
category: docs/commands/fix
order: 21
published: true"
section: docs
category: docs/commands/fix
order: 21
published: true
---

# /fix:hard

Fix complex bugs with thorough investigation and root cause analysis. This command deploys multiple agents to scan the codebase, research solutions, create a detailed fix plan, and implement it with comprehensive testing.

## Syntax

```bash
/fix:hard [issue description]
```

## How It Works

The `/fix:hard` command follows a comprehensive debugging workflow:

### 1. Codebase Analysis (Scout Phase)

- Deploys multiple scout agents in parallel
- Scans entire codebase for related code
- Identifies all files involved
- Maps dependencies and relationships

### 2. Root Cause Analysis

- Invokes **debugger** agent
- Analyzes logs and error traces
- Identifies underlying causes
- Distinguishes symptoms from root causes

### 3. Research Phase

- Searches for best practices
- Reviews similar issues in documentation
- Checks for known solutions
- Identifies potential pitfalls

### 4. Planning

- Creates detailed fix strategy
- Plans implementation steps
- Identifies test scenarios
- Documents approach

### 5. Implementation

- Implements fix following plan
- Handles edge cases
- Adds error handling
- Updates related code

### 6. Comprehensive Testing

- Generates new tests
- Runs full test suite
- Validates edge cases
- Checks for regressions

## When to Use

### ✅ Use /fix:hard for:

**Complex Bugs**
```bash
/fix:hard [users randomly get logged out after 5-10 minutes of activity]
```

**System-Wide Issues**
```bash
/fix:hard [memory leak in WebSocket connections causing server crashes]
```

**Intermittent Problems**
```bash
/fix:hard [database deadlocks occurring under high load]
```

**Multiple Related Issues**
```bash
/fix:hard [authentication system has issues with session handling, token refresh, and logout]
```

**Unknown Root Cause**
```bash
/fix:hard [API sometimes returns 500 errors but logs don't show anything]
```

**Performance Problems**
```bash
/fix:hard [page load time increased from 200ms to 3s after recent changes]
```

## Examples

### Complex Authentication Bug

```bash
/fix:hard [users getting logged out randomly, seems to happen more on mobile, error logs show "invalid token" but token looks valid]
```

**What happens:**
```
1. Scout Phase (3 agents parallel)
   Agent 1: Scanning auth/* files
   Agent 2: Scanning middleware/* files
   Agent 3: Scanning session/* files

   Found:
   - src/auth/token.service.ts
   - src/middleware/auth.middleware.ts
   - src/services/session.service.ts
   - config/jwt.config.ts

2. Root Cause Analysis
   Debugger Agent analyzing...

   Findings:
   - Token expiry set to 15 minutes
   - Mobile apps don't refresh tokens proactively
   - Token refresh endpoint has race condition
   - Session cleanup runs every 10 minutes

   Root Cause: Race condition between session cleanup
   and token refresh when requests overlap

3. Research
   Researcher Agent: Searching best practices...

   Found:
   - Token refresh patterns for mobile
   - Race condition prevention strategies
   - Session management best practices

4. Fix Plan Created
   Plan: plans/fix-token-race-condition.md

   Steps:
   1. Add mutex to token refresh endpoint
   2. Implement exponential backoff in mobile client
   3. Extend token expiry to 30 minutes
   4. Add refresh token rotation
   5. Update session cleanup logic
   6. Add comprehensive logging

5. Implementation
   Files Modified:
   ✓ src/auth/token.service.ts (mutex added)
   ✓ src/middleware/auth.middleware.ts (logging)
   ✓ src/services/session.service.ts (cleanup logic)
   ✓ config/jwt.config.ts (expiry extended)

   Files Created:
   ✓ src/auth/token-mutex.ts
   ✓ tests/auth/token-race-condition.test.ts

6. Testing
   New Tests: 25 generated
   - Token refresh race conditions: ✓
   - Concurrent requests: ✓
   - Session cleanup during refresh: ✓
   - Mobile token expiry: ✓

   All 87 tests passed
   Coverage: 94%

✓ Fix complete (8 minutes)
```

### Memory Leak Investigation

```bash
/fix:hard [server memory usage grows continuously, eventually crashes after 6-8 hours]
```

**What happens:**
```
1. Scout + Analysis
   Scanning for:
   - Event listeners
   - Database connections
   - WebSocket handlers
   - Cache implementations

   Suspicious areas found:
   - src/websocket/connection-manager.ts
   - src/cache/redis-client.ts
   - src/events/event-bus.ts

2. Root Cause Analysis
   Debugger Agent profiling...

   Memory profile shows:
   - WebSocket connections not being cleaned up
   - Event listeners accumulating
   - Redis clients not pooled properly

   Root Cause: WebSocket disconnect handler not
   removing event listeners, causing memory leak

3. Research
   Best practices for:
   - WebSocket lifecycle management
   - Event listener cleanup
   - Connection pooling

4. Implementation Plan
   1. Add proper cleanup in disconnect handler
   2. Implement connection pooling for Redis
   3. Add automated cleanup checks
   4. Add memory monitoring
   5. Create load tests

5. Fix Applied
   ✓ Added cleanup logic
   ✓ Implemented connection pool
   ✓ Added monitoring
   ✓ Generated stress tests

6. Validation
   Load tested for 24 hours:
   - Memory stable at 450MB
   - No leaks detected
   - All tests passed

✓ Fix complete (12 minutes)
```

## Workflow Stages

### Stage 1: Discovery (2-3 min)

```
Scout Agents: Finding relevant code...

Progress:
[████████░░] 80%

Files scanned: 1,247
Files identified: 15
Dependencies mapped: 43
```

### Stage 2: Analysis (1-2 min)

```
Debugger Agent: Analyzing root cause...

Analyzing:
- Error patterns
- Log sequences
- Code flow
- Dependencies

Root cause identified: [description]
```

### Stage 3: Research (1-2 min)

```
Researcher Agent: Finding solutions...

Searching:
- Best practices
- Similar issues
- Documentation
- Stack Overflow

3 relevant solutions found
```

### Stage 4: Planning (1 min)

```
Planner Agent: Creating fix strategy...

Plan created: plans/fix-[issue].md

Strategy:
- Approach: [description]
- Files to modify: 8
- Tests to add: 15
- Estimated time: 10 min
```

### Stage 5: Implementation (3-5 min)

```
Code Agent: Implementing fix...

Progress:
✓ Updated authentication logic
⟳ Refactoring session handler
⧗ Adding error handling
⧗ Generating tests
```

### Stage 6: Validation (1-2 min)

```
Tester Agent: Running comprehensive tests...

Test Results:
✓ Unit tests: 45/45
✓ Integration tests: 23/23
✓ New tests: 15/15
✓ Regression tests: 67/67

Coverage: 96% (+8%)
```

## Best Practices

### Provide Detailed Context

✅ **Good Description:**
```bash
/fix:hard [
  Users report getting logged out randomly on mobile devices.
  Happens more frequently after 10-15 minutes of usage.
  Error in logs: "Invalid token signature"
  But token appears valid when decoded.
  Issue started after deploying session management update.
  Desktop users not affected.
]
```

❌ **Poor Description:**
```bash
/fix:hard [logout bug]
```

### Include Error Messages

```bash
/fix:hard [
  Payment processing fails with error:
  "PaymentError: Card declined (code: insufficient_funds)"
  But user's card has sufficient funds.
  Happens only for amounts over $100.
  Stripe dashboard shows payment as "pending".
]
```

### Mention When It Started

```bash
/fix:hard [
  Memory leak started after deploying v2.3.0.
  Server memory grows from 200MB to 2GB over 6 hours.
  Checked recent PRs: #245, #247, #251.
  Suspect WebSocket changes in #247.
]
```

### Share Reproduction Steps

```bash
/fix:hard [
  To reproduce:
  1. Login as admin
  2. Navigate to /admin/users
  3. Click "Export CSV"
  4. Gets 504 timeout after 30 seconds
  5. CSV generation works fine for < 1000 users
  6. Fails for > 5000 users
]
```

## Output Files

After `/fix:hard` completes, you'll have:

### Fix Plan

```
plans/fix-[issue]-YYYYMMDD-HHMMSS.md
```

Contains:
- Root cause analysis
- Proposed solution
- Implementation steps
- Test strategy
- Rollback plan

### Modified Code

```
src/
├── [fixed files]
└── [related updates]
```

### Generated Tests

```
tests/
├── unit/
│   └── [new tests]
├── integration/
│   └── [integration tests]
└── regression/
    └── [regression tests]
```

### Documentation Updates

```
docs/
└── [updated docs]
```

## Time Comparison

| Issue Complexity | /fix:fast | /fix:hard |
|-----------------|-----------|-----------|
| Simple typo | 10s | 2 min (overkill) |
| Logic error | 30s | 3 min |
| Race condition | May miss | 8 min |
| Memory leak | Won't find | 12 min |
| System-wide bug | Won't fix | 15 min |

## When /fix:hard Finds Multiple Issues

Sometimes investigation reveals multiple related issues:

```
Root Cause Analysis Complete

Found 3 related issues:
1. Primary: Token refresh race condition
2. Secondary: Missing token validation
3. Tertiary: Insufficient logging

Recommended fix order:
1. Fix race condition (critical)
2. Add validation (important)
3. Improve logging (nice-to-have)

Proceed with all fixes? (y/n)
```

Options:
1. **Fix all** - Address all issues together
2. **Primary only** - Fix critical issue first
3. **Custom** - Choose which to fix

## Rollback Plan

Every `/fix:hard` includes rollback instructions:

```
Rollback Plan (if needed):

1. Revert commits:
   git revert HEAD~3..HEAD

2. Restore config:
   cp config/jwt.config.backup.ts config/jwt.config.ts

3. Clear cache:
   redis-cli FLUSHDB

4. Restart services:
   pm2 restart all

5. Verify:
   curl https://api.example.com/health
```

## Troubleshooting

### Investigation Too Slow

**Problem:** Taking longer than expected

**Check:**
- Codebase size (larger = longer scan)
- Scout agent progress
- May need to narrow scope

**Solution:**
```bash
# Cancel and provide more specific location
Ctrl+C

/fix:hard [same issue description, but search only in src/auth/]
```

### Can't Find Root Cause

**Problem:** Analysis completes but no clear cause

**Check:**
- Error logs available?
- Can reproduce consistently?
- Recent changes documented?

**Solution:**
```bash
# Provide more diagnostic info
/debug [collect more details about the issue]

# Then retry with more context
/fix:hard [issue + new diagnostic info]
```

### Fix Breaks Other Features

**Problem:** Fix works but causes regressions

**Solution:**
```bash
# Use rollback plan
git revert HEAD

# Investigate impact
/debug [regression details]

# Create comprehensive plan
/plan [how to fix without breaking X]
```

## After Fixing

Recommended workflow:

```bash
# 1. Fix complete
/fix:hard [issue]

# 2. Review fix plan
cat plans/fix-[issue].md

# 3. Review changes
git diff

# 4. Run full test suite
/test

# 5. Deploy to staging
/deploy [staging]

# 6. Validate in staging
# (Manual testing)

# 7. Commit
/git:cm

# 8. Deploy to production
/deploy [production]

# 9. Monitor
# (Check logs, metrics)
```

## Next Steps

- [/debug](/docs/commands/core/debug) - Investigate issues
- [/fix:fast](/docs/commands/fix/fast) - For simple fixes
- [/test](/docs/commands/core/test) - Run tests
- [/git:cm](/docs/commands/git/commit) - Commit fix

---

**Key Takeaway**: `/fix:hard` is your go-to command for complex bugs requiring investigation. It deploys multiple agents to thoroughly analyze, research, plan, and fix issues with comprehensive testing.
