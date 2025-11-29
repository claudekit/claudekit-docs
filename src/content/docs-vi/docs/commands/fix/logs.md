---
title: /fix:logs
description: "Documentation for /fix:logs
description:
section: docs
category: docs/commands/fix
order: 23
published: true"
section: docs
category: docs/commands/fix
order: 23
published: true
---

# /fix:logs

Analyze log files to identify errors, warnings, and issues, then automatically implement fixes based on comprehensive root cause analysis. Perfect for troubleshooting production issues, debugging failed deployments, or investigating system errors.

## Syntax

```bash
/fix:logs [issue description]
```

## How It Works

The `/fix:logs` command uses the `debugger` agent to systematically analyze logs:

### 1. Log Collection

- Reads entire `./logs.txt` file
- Identifies all errors and warnings
- Captures stack traces and error messages
- Collects contextual information

### 2. Root Cause Analysis

- Correlates events across log entries
- Identifies patterns and anomalies
- Traces execution paths
- Determines underlying causes

### 3. Solution Development

- Creates comprehensive diagnostic report
- Designs targeted fixes for identified problems
- Implements fixes systematically
- Validates fixes with appropriate commands

### 4. Verification

- Re-analyzes logs after fixes
- Ensures issues are resolved
- Confirms no new issues introduced
- Provides final status report

## When to Use

### ✅ Perfect For

**Production Errors**
```bash
/fix:logs [users reporting 500 errors in checkout]
```

**Failed Deployments**
```bash
/fix:logs [CI/CD pipeline failing on deployment step]
```

**Database Issues**
```bash
/fix:logs [connection timeout errors in logs]
```

**API Failures**
```bash
/fix:logs [intermittent API timeouts]
```

**Performance Issues**
```bash
/fix:logs [slow response times logged]
```

### ❌ Don't Use For

**No Log File**
```bash
❌ /fix:logs [issue but no logs collected]
✅ First collect logs to ./logs.txt
```

**Simple Code Typos**
```bash
❌ /fix:logs [typo in variable name]
✅ /fix:fast [typo in variable name]
```

**Known Simple Fix**
```bash
❌ /fix:logs [need to update config value]
✅ /fix:fast [update config value]
```

## Examples

### API Error Investigation

```bash
/fix:logs [API returning 500 errors for /users endpoint]
```

**What happens:**
```
1. Analyzing logs
   - Reading: ./logs.txt (2,345 lines)
   - Found: 47 error entries
   - Time range: 2025-10-29 14:23 - 16:45

2. Root cause identified
   - Issue: Unhandled null reference in user.profile
   - Location: src/api/users.controller.ts:89
   - Cause: Missing null check after database query
   - Impact: 47 failed requests over 2h 22m

3. Implementing fix
   - Added: Null validation before profile access
   - Updated: Error handling with proper status codes
   - Added: Logging for better diagnostics

4. Verifying fix
   - Tests: All passing
   - No errors in new logs

✓ Issue resolved (2m 34s)
```

### Database Connection Issues

```bash
/fix:logs [database connection timeouts]
```

**What happens:**
```
1. Log analysis
   - Found: 23 timeout errors
   - Pattern: Occurs during high load (>100 concurrent users)
   - Database: Connection pool exhausted

2. Root cause
   - Pool size: 10 (too small)
   - Connections not released properly
   - Missing connection cleanup in error handlers

3. Fixes applied
   - Increased pool size: 10 → 50
   - Added connection release in finally blocks
   - Implemented connection timeout: 30s
   - Added pool monitoring

4. Validation
   - Load test: 200 concurrent users ✓
   - No timeouts observed
   - Pool utilization: healthy (avg 35%)

✓ Database issues resolved (3m 12s)
```

### Memory Leak Detection

```bash
/fix:logs [application crashing with out of memory errors]
```

**What happens:**
```
1. Log examination
   - Memory usage pattern: Steadily increasing
   - Crash point: ~2GB (heap limit reached)
   - Frequency: Every 4-6 hours under load

2. Analysis
   - Event listeners not removed
   - Large objects retained in cache indefinitely
   - WebSocket connections accumulating

3. Implementation
   - Added proper cleanup for event listeners
   - Implemented LRU cache with TTL (1 hour)
   - Added WebSocket connection pooling
   - Implemented periodic garbage collection hints

4. Testing
   - 24-hour stress test completed
   - Memory stable at ~400MB
   - No crashes observed

✓ Memory leak fixed (5m 43s)
```

### CI/CD Pipeline Failure

```bash
/fix:logs [GitHub Actions workflow failing]
```

**What happens:**
```
1. Collecting pipeline logs
   - Run ID: 1234567890
   - Failed step: "Build and Test"
   - Exit code: 1

2. Error identification
   - Test failures: 3 tests in auth.test.ts
   - Reason: Environment variable missing
   - Variable: JWT_SECRET not set in CI

3. Solution
   - Added JWT_SECRET to GitHub Secrets
   - Updated workflow: Use secrets.JWT_SECRET
   - Added validation step to check required env vars

4. Verification
   - Re-ran workflow: ✓ passed
   - All tests: 127/127 ✓

✓ CI/CD pipeline fixed (1m 56s)
```

## Agent Invoked

The command delegates to the **debugger agent** with these capabilities:

- **Log Analysis**: Systematic parsing and pattern recognition
- **Root Cause Identification**: Evidence-based diagnosis
- **Database Diagnostics**: Query analysis and structure examination
- **Performance Analysis**: Bottleneck identification
- **CI/CD Integration**: GitHub Actions log retrieval and analysis

## Log File Format

### Expected Location

```bash
./logs.txt
```

### Supported Log Formats

**Standard Application Logs**
```
2025-10-29T14:23:45.123Z [ERROR] Database connection failed
2025-10-29T14:23:45.456Z [WARN] Retrying connection (attempt 2/3)
```

**JSON Logs**
```json
{"timestamp":"2025-10-29T14:23:45.123Z","level":"error","message":"Request failed"}
```

**Stack Traces**
```
Error: Cannot read property 'id' of null
    at UserController.getProfile (src/controllers/user.ts:89:15)
    at processRequest (src/middleware/handler.ts:34:8)
```

## Best Practices

### Collect Complete Logs

✅ **Good - Full context:**
```bash
# Collect comprehensive logs
docker logs my-app > logs.txt
# Or from server
ssh server "cat /var/log/app/*.log" > logs.txt
```

❌ **Bad - Incomplete:**
```bash
# Only partial output
echo "some error" > logs.txt
```

### Include Timestamps

✅ **With timestamps:**
```
2025-10-29 14:23:45 [ERROR] Database timeout
2025-10-29 14:23:46 [INFO] Retrying connection
```

❌ **Without timestamps:**
```
ERROR Database timeout
INFO Retrying connection
```

### Provide Context

✅ **Specific issue:**
```bash
/fix:logs [payment processing failing with timeout errors since 14:00]
```

❌ **Vague issue:**
```bash
/fix:logs [something is broken]
```

## Collecting Logs

### Docker Containers

```bash
# Single container
docker logs container-name > logs.txt

# Follow logs in real-time
docker logs -f container-name > logs.txt

# Last 1000 lines
docker logs --tail 1000 container-name > logs.txt

# Then analyze
/fix:logs [describe the issue]
```

### Server Applications

```bash
# System logs
journalctl -u myapp > logs.txt

# Application logs
cat /var/log/myapp/*.log > logs.txt

# PM2 logs
pm2 logs --lines 1000 > logs.txt

# Then analyze
/fix:logs [describe the issue]
```

### CI/CD Pipelines

```bash
# GitHub Actions
gh run view 1234567890 --log > logs.txt

# GitLab CI
gitlab-ci-trace job_id > logs.txt

# Then analyze
/fix:logs [pipeline failure in build step]
```

### Kubernetes

```bash
# Pod logs
kubectl logs pod-name > logs.txt

# Multiple pods
kubectl logs -l app=myapp --all-containers=true > logs.txt

# Previous crashed container
kubectl logs pod-name --previous > logs.txt

# Then analyze
/fix:logs [pods crashing with OOM errors]
```

## Workflow

### Standard Troubleshooting Flow

```bash
# 1. Collect logs
docker logs my-app > logs.txt

# 2. Analyze and fix
/fix:logs [users reporting checkout failures]

# 3. Review changes
git diff

# 4. Test fix
/test

# 5. Commit if satisfied
/git:cm

# 6. Deploy
git push
```

### Production Incident Response

```bash
# 1. Immediate log collection
ssh production "docker logs app > /tmp/incident.log"
scp production:/tmp/incident.log ./logs.txt

# 2. Analyze urgently
/fix:logs [production down - 500 errors on all endpoints]

# 3. Create hotfix branch
git checkout -b hotfix/production-500-errors

# 4. Apply fix and test
/test

# 5. Deploy immediately
/git:cm
git push origin hotfix/production-500-errors
/git:pr main hotfix/production-500-errors
```

## Troubleshooting

### Log File Not Found

**Problem:** `./logs.txt` doesn't exist

**Solution:**
```bash
# Create logs file first
docker logs my-app > logs.txt

# Or from server
ssh server "cat /var/log/app/error.log" > logs.txt

# Then run command
/fix:logs [issue description]
```

### Logs Too Large

**Problem:** Log file exceeds reasonable size

**Solution:**
```bash
# Filter relevant time period
grep "2025-10-29 14:" app.log > logs.txt

# Or last 5000 lines
tail -5000 app.log > logs.txt

# Then analyze
/fix:logs [issue occurring at 14:00]
```

### No Clear Root Cause

**Problem:** Logs analyzed but cause unclear

**Solution:**
```bash
# Collect more comprehensive logs
# Include debug level
docker logs my-app --since 1h > logs.txt

# Enable verbose logging first
# Then reproduce issue
# Then analyze again
/fix:logs [issue with more verbose logs]
```

### Fix Didn't Work

**Problem:** Issue persists after fix

**Solution:**
```bash
# Reproduce issue and collect new logs
./reproduce-issue.sh
docker logs my-app > logs.txt

# Analyze again with more context
/fix:logs [issue still occurring - previous fix was X]
```

## Related Commands

### Log Analysis + Testing

```bash
# 1. Analyze and fix
/fix:logs [API errors in production]

# 2. Run comprehensive tests
/test

# 3. If tests reveal more issues
/fix:hard [additional issues found in tests]
```

### Logs + CI/CD Fix

```bash
# 1. Get CI logs
/fix:ci [github-actions-url]

# Or with local logs
# 2. Collect and analyze
gh run view 123 --log > logs.txt
/fix:logs [CI pipeline failing on test step]
```

### Debug Complex Issues

```bash
# 1. Start with logs
/fix:logs [complex issue with multiple symptoms]

# 2. If more investigation needed
/debug [findings from log analysis]
```

## Metrics

Typical `/fix:logs` performance:

- **Time**: 2-5 minutes
- **Log lines analyzed**: 100-10,000+
- **Fix accuracy**: ~92% (based on single attempt)
- **Common fixes**: Configuration, error handling, resource limits
- **Secondary issues found**: ~35% of cases

## Next Steps

After using `/fix:logs`:

- [/test](/docs/commands/core/test) - Verify fix with tests
- [/fix:hard](/docs/commands/fix/hard) - For complex issues requiring deeper analysis
- [/debug](/docs/commands/core/debug) - If issue needs more investigation
- [/git:cm](/docs/commands/git/commit) - Commit the fix

---

**Key Takeaway**: `/fix:logs` provides automated log analysis and issue resolution by leveraging the debugger agent's systematic approach to root cause identification and fix implementation.
