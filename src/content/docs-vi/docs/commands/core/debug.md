---
title: /debug
description: "Documentation for /debug
description:
section: docs
category: commands/core
order: 5
published: true"
section: docs
category: commands/core
order: 5
published: true
---

# /debug

Issue investigation and diagnosis command. Analyzes bugs, errors, and technical problems to identify root causes and explain them clearly—without automatically implementing fixes.

## Syntax

```bash
/debug [issues]
```

## When to Use

- **Bug Investigation**: Understand why something isn't working
- **Error Analysis**: Diagnose error messages and stack traces
- **Behavior Investigation**: Figure out unexpected application behavior
- **Performance Issues**: Identify bottlenecks and slowdowns
- **Test Failures**: Understand why tests are failing

## Quick Example

```bash
/debug [API returns 500 error when creating user with long username]
```

**Output**:
```
Root Cause Analysis:
- src/controllers/user.js:34 - No validation for username length
- Database constraint: usernames max 50 chars
- Request with 75-char username triggers database error
- Error not caught, returns generic 500 instead of 400

Chain of Events:
1. POST /api/users with username length 75
2. Controller passes directly to database
3. PostgreSQL rejects: "value too long for type character varying(50)"
4. Unhandled error bubbles up as 500 Internal Server Error

Affected Components:
- src/controllers/user.js (missing validation)
- src/models/user.js (constraint defined but not enforced in app)
- src/middleware/validator.js (username validation not implemented)

Fix Required:
Add username length validation before database call:
- Validate max 50 chars in controller or middleware
- Return 400 Bad Request with clear error message
- Add test case for long username

Related Issues:
- Email field also lacks length validation (same pattern)
- Consider centralized validation schema (Joi/Zod)
```

**Result**: Root cause identified, fix approach explained, no code changed yet.

## Arguments

- `[issues]`: Description of the problem, error message, unexpected behavior, or failing test

## What Happens

When you run this command:

1. **Issue Intake**: System captures your problem description
2. **Debugger Agent Invocation**: Delegates to specialized `debugger` subagent
3. **Root Cause Analysis**: Agent investigates:
   - Examines relevant code files
   - Traces execution flow
   - Analyzes error messages and stack traces
   - Identifies integration points
   - Reviews recent changes (if relevant)
4. **Explanation Generation**: Creates detailed diagnostic report
5. **User Communication**: Explains findings in clear, actionable terms

**Agents Invoked**: `debugger` subagent

**Important**: `/debug` does NOT implement fixes automatically. It only diagnoses and explains.

## Complete Example

### Scenario: Memory Leak in Production

You notice memory usage growing indefinitely in production.

```bash
/debug [Node.js process memory grows from 200MB to 2GB over 24 hours, eventually crashes]
```

**Debugger Agent Investigation Process**:

**1. Information Gathering**
```
Examining production metrics...
- Memory growth rate: ~75MB/hour
- No corresponding user activity increase
- Heap snapshots show string accumulation

Checking recent deployments...
- Feature added 3 days ago: real-time notifications
- Timeline matches memory leak onset
```

**2. Code Analysis**
```
Analyzing notification system...

src/websocket/notifier.js:
  ✓ Connection handling looks correct
  ✓ Disconnection cleanup present
  ! Event listeners not being removed

src/services/notification-queue.js:
  ! Queue maintains references to all notifications
  ! No cleanup of old notifications
  ! Growing unbounded
```

**3. Root Cause Identification**
```
Root Cause Found:

File: src/services/notification-queue.js
Lines: 23-45

Issue:
- Notification queue stores all notifications in memory array
- Array grows without cleanup
- Each notification ~2KB with user data
- 1000 notifications/hour = 2MB/hour growth
- 24 hours = 48MB direct + garbage collection overhead = ~75MB/hour

Code Pattern:
  class NotificationQueue {
    constructor() {
      this.queue = []; // Never cleared!
    }

    add(notification) {
      this.queue.push(notification); // Unbounded growth
      this.emit('notification', notification);
    }
  }

Why It's Problematic:
- Old notifications never removed from memory
- References prevent garbage collection
- Event listeners accumulate on each notification
```

**4. Impact Assessment**
```
Affected Components:
- src/services/notification-queue.js (primary issue)
- src/websocket/notifier.js (uses the queue)
- All connected WebSocket clients (receive notifications)

Production Impact:
- Current: ~1.2GB memory usage (80% capacity)
- Projected: Crash in ~6 hours at current rate
- Risk: High - immediate fix required

User Impact:
- Intermittent connection drops as memory pressure increases
- Slow response times due to garbage collection pauses
- Service restarts cause notification loss
```

**5. Recommended Fix**
```
Solution 1: Implement Notification Expiry (Recommended)
- Add timestamp to notifications
- Remove notifications older than 1 hour
- Implement periodic cleanup
- Estimated effort: 2 hours

Solution 2: Switch to Redis Queue
- Move notification queue to Redis
- Automatic TTL-based expiry
- Supports horizontal scaling
- Estimated effort: 4 hours

Solution 3: Limit Queue Size
- Cap queue at 1000 notifications
- Remove oldest when adding new
- Quick fix but loses old notifications
- Estimated effort: 30 minutes

Immediate Mitigation:
- Restart service to clear memory
- Implement Solution 3 as temporary fix
- Plan Solution 1 or 2 for permanent fix

Testing Plan:
- Load test with 10k notifications
- Monitor memory over 24 hours
- Verify cleanup runs correctly
- Check notification delivery still works
```

**6. Additional Findings**
```
Secondary Issues Discovered:
1. WebSocket connections not cleaned on server restart
   File: src/websocket/server.js:67
   Impact: Low - minor memory leak

2. Logger buffering messages in memory
   File: src/utils/logger.js:12
   Impact: Medium - 10-20MB additional growth

3. No memory monitoring alerts configured
   Impact: High - prevented early detection

Recommendations:
- Add memory usage monitoring
- Set alerts at 1.5GB threshold
- Review all event listener registrations
- Audit other potential unbounded data structures
```

**Full Report Saved**: `plans/debug/memory-leak-investigation-20251030.md`

## Common Use Cases

### Error Message Investigation

```bash
/debug [TypeError: Cannot read property 'user' of undefined at src/auth/login.js:23]
```

**Output**:
```
Root Cause:
- req.session not initialized
- Session middleware not configured for /auth/login route
- Middleware order issue in src/server.js

Fix: Move session middleware before auth routes
```

### Test Failure Analysis

```bash
/debug [integration test "POST /api/orders" failing with 401 Unauthorized but should be 201]
```

**Output**:
```
Root Cause:
- Test not including authentication token
- Auth middleware added recently, test not updated
- Test data factory doesn't generate valid JWT

Fix: Update test to include authentication header
```

### Performance Degradation

```bash
/debug [API response time increased from 100ms to 3000ms after deploying caching layer]
```

**Output**:
```
Root Cause:
- Cache key generation is synchronous and expensive
- Using JSON.stringify on large objects
- Blocking event loop

Fix: Use hash-based cache keys instead of stringifying objects
```

### Unexpected Behavior

```bash
/debug [emails sending twice for password reset requests]
```

**Output**:
```
Root Cause:
- Password reset handler registered as event listener twice
- Duplicate registration in src/server.js lines 45 and 78
- Both execute on 'password-reset' event

Fix: Remove duplicate event listener registration
```

## Best Practices

### Provide Detailed Information

✅ **Good:**
```bash
/debug [
  Production error:
  - TypeError: Cannot read property 'email' of null
  - File: src/services/email-sender.js:45
  - Happens randomly ~5% of requests
  - Started after deploy at 2025-10-30 14:00
  - Error log: /logs/production-2025-10-30.log
]
```

❌ **Vague:**
```bash
/debug [something is broken]
/debug [it doesn't work]
/debug [fix the error]
```

### Include Context

Helpful details:
- Error messages and stack traces
- When issue started
- Frequency (always, sometimes, rarely)
- Environment (production, staging, dev)
- Recent changes or deployments
- Steps to reproduce
- Expected vs actual behavior

### Attach Evidence

```bash
/debug [
  Issue: Database connection pool exhausted
  Evidence:
  - Error: "remaining connection slots reserved for non-replication superuser connections"
  - Occurs during peak traffic (>1000 req/min)
  - Pool config: max 20 connections
  - Monitoring shows connections not released
  - Screenshot: /tmp/db-connections-graph.png
]
```

## What /debug Does NOT Do

- ❌ Automatically implement fixes (that's for `/fix:*` commands)
- ❌ Modify code files
- ❌ Deploy fixes to production
- ❌ Run tests or validations

## After Debugging

Standard workflow:

```bash
# 1. Investigate issue
/debug [issue description]

# 2. Review diagnostic report
cat plans/debug/issue-investigation-YYYYMMDD.md

# 3. Decide on fix approach

# 4. Implement fix using appropriate command
/fix:fast [implement the recommended fix]
# or
/fix:hard [complex fix requiring multiple changes]
# or manually implement

# 5. Verify fix
/test

# 6. Commit
/git:cm
```

## Integration with Other Commands

### Debug → Fix

```bash
# 1. Diagnose
/debug [API rate limiting not working]

# Output: Missing Redis connection, middleware not applied

# 2. Fix based on diagnosis
/fix:fast [add Redis connection and apply rate limit middleware to routes]
```

### Scout → Debug

```bash
# 1. Find relevant files
/scout [find all email sending code] 3

# 2. Debug issue with context
/debug [emails not sending, relevant files in scout report]
```

### Debug → Ask

```bash
# 1. Debug finds architectural issue
/debug [database deadlocks during concurrent user updates]

# Output: Transaction isolation level causing conflicts

# 2. Ask for architectural guidance
/ask [best transaction isolation level for concurrent user updates in PostgreSQL?]
```

## Advanced Debugging

### With Log Files

```bash
/debug [
  Issue: Intermittent 503 errors
  Log file: /var/log/app/error.log
  Relevant entries from 14:30-15:00
]
```

Debugger agent will analyze log patterns.

### Performance Profiling

```bash
/debug [
  Performance issue: /api/search endpoint slow
  Profiling data:
  - 90th percentile: 2.3s
  - 99th percentile: 5.8s
  - Database query time: 1.8s
  - CPU: 25%
  - Memory: stable
]
```

Agent identifies database query as bottleneck.

### Concurrency Issues

```bash
/debug [
  Race condition suspected:
  - Sometimes user balance goes negative
  - Only happens with concurrent requests
  - Balance checks passing but still overdrawing
]
```

Agent traces execution paths to find race condition.

## Common Issues

### Insufficient Information

**Problem**: Debug report says "need more information"

**Solution**: Provide error messages, logs, or steps to reproduce
```bash
/debug [
  Full error message: [paste here]
  Stack trace: [paste here]
  How to reproduce: [steps]
]
```

### Wrong Scope

**Problem**: Asking to debug and fix together

**Solution**: Separate diagnosis from fix
```bash
# Not: /debug [find and fix the bug]
# Instead:
/debug [diagnosis: why is the bug happening?]
# Then:
/fix:fast [implement the fix]
```

### Production Urgency

**Problem**: Need immediate fix, debug taking too long

**Solution**: Skip debug, go straight to fix with description
```bash
# If urgent:
/fix:fast [urgent: API returning 500, need immediate mitigation]

# Can debug later:
/debug [investigate root cause of API 500 errors]
```

## Related Commands

- [/fix:fast](/docs/commands/fix/fast) - Implement quick fixes after diagnosis
- [/fix:hard](/docs/commands/fix/hard) - Fix complex issues requiring planning
- [/fix:logs](/docs/commands/fix/logs) - Analyze and fix issues from log files
- [/scout](/docs/commands/core/scout) - Find relevant files before debugging
- [/ask](/docs/commands/core/ask) - Get architectural guidance on systemic issues

---

**Key Takeaway**: `/debug` provides thorough root cause analysis and clear explanations of technical issues, empowering you to make informed decisions about fixes without automatic code changes.
