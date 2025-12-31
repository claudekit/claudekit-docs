---
title: Debugger Agent
description: Systematically investigate issues, analyze logs, and provide root cause analysis with actionable solutions
section: engineer
kit: engineer
category: agents
order: 5
published: true
---

# Debugger Agent

The debugger agent systematically investigates complex issues, analyzes system behavior, collects diagnostic data, and provides comprehensive root cause analysis with actionable solutions.

## Purpose

Investigate and diagnose technical issues including API errors, CI/CD failures, performance degradation, database problems, and system anomalies.

## When Activated

The debugger agent activates when:

- Using `/debug [description]` command
- API endpoints returning errors
- CI/CD pipelines failing
- Performance issues detected
- Database queries slow or failing
- System behavior unexpected
- Production incidents
- Integration failures

## Capabilities

### Issue Investigation

- **Systematic Analysis**: Structured problem-solving approach
- **Data Collection**: Logs, metrics, traces, database state
- **Pattern Recognition**: Identify common error patterns
- **Impact Assessment**: Scope and severity evaluation
- **Timeline Analysis**: When issues started, frequency

### Database Analysis

- **Schema Inspection**: Using `psql \d` commands
- **Query Analysis**: EXPLAIN plans, slow query logs
- **Connection Monitoring**: Active connections, locks
- **Data Validation**: Integrity checks, constraint violations
- **Performance Metrics**: Query timing, index usage

### Log Analysis

- **Server Logs**: Application error logs, access logs
- **CI/CD Logs**: Build output, test failures, deployment errors
- **GitHub Actions**: Workflow logs, job failures, step errors
- **Container Logs**: Docker/Kubernetes pod logs
- **System Logs**: OS-level errors, resource constraints

### Performance Analysis

- **Response Times**: API endpoint latency
- **Resource Usage**: CPU, memory, disk, network
- **Database Performance**: Query execution time, connection pool
- **Cache Efficiency**: Hit rates, eviction patterns
- **Bottleneck Identification**: Slowest components

### Root Cause Identification

- **Error Tracing**: Follow error stack traces
- **Dependency Analysis**: External service failures
- **Configuration Issues**: Environment variables, settings
- **Code Analysis**: Bug identification, logic errors
- **Infrastructure Problems**: Network, storage, compute

## Methodology

### 1. Initial Assessment (5-10 min)

```markdown
## Issue Reported
- **Type**: API Error / CI Failure / Performance / System
- **Severity**: Critical / High / Medium / Low
- **Environment**: Production / Staging / Development
- **First Occurred**: Timestamp
- **Frequency**: Constant / Intermittent / Once

## Initial Questions
- What changed recently?
- Can it be reproduced?
- Are there error messages?
- Is it environment-specific?
- Are other systems affected?
```

### 2. Data Collection (10-20 min)

```bash
# Server logs
kubectl logs -l app=api --tail=1000 --since=1h

# Database state
psql -c "SELECT * FROM pg_stat_activity WHERE state != 'idle';"

# GitHub Actions logs
gh run view 1234567890 --log-failed

# System metrics
docker stats --no-stream
```

### 3. Analysis (15-30 min)

- Review collected data
- Identify error patterns
- Check related systems
- Test hypotheses
- Narrow down root cause

### 4. Solution Development (10-20 min)

- Propose fixes
- Document workarounds
- Create action plan
- Estimate impact
- Define validation steps

## Example Usage

### API Error Investigation

**Input:**
```bash
/debug [API endpoint /api/orders returning 500 errors]
```

**Process:**
```
1. Initial Assessment (2 min)
   Issue: POST /api/orders returns 500 Internal Server Error
   Severity: Critical (blocks order placement)
   Environment: Production
   Started: 2024-10-20 14:23:00 UTC
   Frequency: 100% of requests

2. Data Collection (8 min)

   Server Logs:
   $ kubectl logs -l app=api --tail=500 | grep "POST /api/orders"

   Found:
   [ERROR] 14:23:01 - POST /api/orders
   Error: Cannot read property 'userId' of undefined
     at OrderController.create (src/controllers/order.controller.ts:45)
     at Layer.handle (express/lib/router/layer.js:95)

   [ERROR] 14:23:15 - Database connection pool exhausted
   Error: Knex: Timeout acquiring a connection. Pool is exhausted

   Database State:
   $ psql -c "SELECT COUNT(*) FROM pg_stat_activity WHERE state = 'active';"
   count: 47 (max: 20)

   $ psql -c "SELECT query, state, wait_event FROM pg_stat_activity WHERE state != 'idle';"

   Found: 35 queries waiting on lock_tuple

3. Analysis (12 min)

   Root Causes Identified:

   A. Missing Null Check
      - File: src/controllers/order.controller.ts:45
      - Issue: req.user is undefined
      - Cause: Auth middleware not setting req.user
      - Impact: All POST /api/orders requests fail

   B. Database Connection Leak
      - Connections not released after queries
      - Pool exhausted (47 active, max 20)
      - Transactions not committed/rolled back
      - Impact: Cascading failures across all DB operations

   C. Table Lock Contention
      - 35 queries waiting on orders table lock
      - Long-running transaction blocking others
      - No query timeout configured
      - Impact: Slow queries, timeouts

   Timeline:
   - 14:15:00 - Deploy of v2.3.4
   - 14:20:00 - Connection pool warnings
   - 14:23:00 - First 500 errors
   - 14:25:00 - Complete service degradation

   Changed in v2.3.4:
   - Auth middleware refactor
   - Order service database queries
   - Transaction handling changes

4. Solution Development (8 min)
   Creating fix plan...
```

**Generated Report:**

```markdown
# Debugging Report: API Orders Endpoint Failure

## Executive Summary

POST /api/orders endpoint failing with 500 errors due to three interconnected issues:
1. Auth middleware not setting req.user (deployment bug)
2. Database connection pool exhaustion (resource leak)
3. Table lock contention (transaction management)

**Status**: Critical - Blocking all order placements
**Root Cause**: Code bug in v2.3.4 deployment
**Estimated Fix Time**: 30 minutes
**Recommended Action**: Rollback to v2.3.3, then fix and redeploy

---

## Root Cause Analysis

### Issue 1: Missing req.user (PRIMARY)

**Location:** `src/controllers/order.controller.ts:45`

**Error:**
```typescript
Cannot read property 'userId' of undefined
```

**Code:**
```typescript
// src/controllers/order.controller.ts
export const createOrder = async (req: Request, res: Response) => {
  const userId = req.user.userId; // ← req.user is undefined
  // ...
}
```

**Root Cause:**
Auth middleware refactored in v2.3.4 but TypeScript interface not updated.

**Before (v2.3.3):**
```typescript
// src/auth/middleware.ts
export const authenticate = async (req, res, next) => {
  const token = extractToken(req);
  const user = await verifyToken(token);
  req.user = user; // ✓ Sets req.user
  next();
};
```

**After (v2.3.4 - BROKEN):**
```typescript
// src/auth/middleware.ts
export const authenticate = async (req, res, next) => {
  const token = extractToken(req);
  const payload = await verifyToken(token); // ← Renamed to payload
  req.payload = payload; // ✗ Sets req.payload instead
  next();
};
```

**Fix:**
```typescript
// Option A: Restore original behavior
export const authenticate = async (req, res, next) => {
  const token = extractToken(req);
  const user = await verifyToken(token);
  req.user = user; // ✓ Restore req.user
  next();
};

// Option B: Update all controllers
// src/controllers/order.controller.ts
const userId = req.payload.userId; // Use req.payload
```

---

### Issue 2: Connection Pool Exhaustion (SECONDARY)

**Symptom:**
```
Knex: Timeout acquiring a connection. Pool is exhausted
Active connections: 47 (max: 20)
```

**Root Cause:**
Database transactions not properly closed in order service.

**Problematic Code:**
```typescript
// src/services/order.service.ts
export const createOrder = async (orderData) => {
  const trx = await db.transaction(); // ← Transaction started

  try {
    const order = await trx('orders').insert(orderData);
    const items = await trx('order_items').insert(order.items);

    // ✗ Missing: await trx.commit();
    return order;
  } catch (error) {
    // ✗ Missing: await trx.rollback();
    throw error;
  }
  // ✗ Transaction never closed - connection leaked
};
```

**Fix:**
```typescript
export const createOrder = async (orderData) => {
  const trx = await db.transaction();

  try {
    const order = await trx('orders').insert(orderData);
    const items = await trx('order_items').insert(order.items);

    await trx.commit(); // ✓ Commit transaction
    return order;
  } catch (error) {
    await trx.rollback(); // ✓ Rollback on error
    throw error;
  }
};
```

**Immediate Mitigation:**
```bash
# Restart API pods to reset connection pool
kubectl rollout restart deployment/api

# Increase pool size temporarily (not a fix)
export DB_POOL_MAX=50
```

---

### Issue 3: Table Lock Contention (TERTIARY)

**Symptom:**
```sql
-- 35 queries waiting on lock_tuple
SELECT query, state, wait_event
FROM pg_stat_activity
WHERE wait_event = 'lock_tuple';
```

**Root Cause:**
Long-running transaction holding locks on orders table.

**Analysis:**
```sql
-- Find blocking queries
SELECT
  blocked.pid AS blocked_pid,
  blocked.query AS blocked_query,
  blocking.pid AS blocking_pid,
  blocking.query AS blocking_query,
  blocking.query_start AS blocking_since
FROM pg_stat_activity blocked
JOIN pg_stat_activity blocking
  ON blocking.pid = ANY(pg_blocking_pids(blocked.pid))
WHERE NOT blocked.waiting;

-- Result:
blocked_pid: 12345
blocked_query: INSERT INTO orders...
blocking_pid: 11111
blocking_query: UPDATE orders SET status = 'pending' WHERE...
blocking_since: 2024-10-20 14:20:00 (5 minutes ago!)
```

**Root Cause:**
Transaction started but never committed due to Issue #2.

**Fix:**
```sql
-- Immediate: Kill blocking query
SELECT pg_terminate_backend(11111);

-- Permanent: Add query timeout
ALTER DATABASE production SET statement_timeout = '30s';

-- Code: Ensure transactions are short
export const updateOrderStatus = async (orderId, status) => {
  // Use separate connection, not transaction for simple updates
  return db('orders')
    .where({ id: orderId })
    .update({ status })
    .timeout(5000); // 5 second timeout
};
```

---

## Impact Assessment

### Affected Systems
- ✗ Order Placement API (100% failure)
- ✗ Order Status Updates (95% failure)
- ⚠ User Authentication (degraded, slow)
- ⚠ Inventory Management (slow queries)
- ✓ Product Catalog (unaffected)
- ✓ User Profile (unaffected)

### Business Impact
- **Revenue Loss**: $0 orders processed (normally $2,000/min)
- **Customer Impact**: Unable to place orders
- **Duration**: 30 minutes so far
- **Estimated Loss**: $60,000 (if 1hr total)

### Technical Debt
- No integration tests for auth middleware changes
- No database connection monitoring/alerting
- No query timeout enforcement
- No canary deployment strategy

---

## Recommended Actions

### Immediate (0-5 min)

```bash
# 1. Rollback to v2.3.3
kubectl rollout undo deployment/api

# 2. Kill blocking database connections
psql -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE state = 'active' AND query_start < NOW() - INTERVAL '1 minute';"

# 3. Verify recovery
curl https://api.example.com/health
curl -X POST https://api.example.com/api/orders -d '{...}'

# Expected: Orders processing successfully
```

### Short-term (30-60 min)

```bash
# 1. Fix auth middleware
# Restore req.user assignment
git checkout v2.3.3 -- src/auth/middleware.ts

# 2. Fix transaction handling
# Add commit/rollback to order service
# See Fix #2 above

# 3. Add query timeout
psql -c "ALTER DATABASE production SET statement_timeout = '30s';"

# 4. Add integration tests
npm run test:integration -- tests/auth

# 5. Redeploy v2.3.5 with fixes
npm run build
docker build -t api:v2.3.5 .
kubectl set image deployment/api api=api:v2.3.5

# 6. Monitor deployment
kubectl rollout status deployment/api
kubectl logs -f deployment/api
```

### Long-term (Next Sprint)

1. **Improve Testing**
   - Add integration tests for auth flows
   - Add database transaction tests
   - Add load tests for connection pool

2. **Improve Monitoring**
   - Alert on connection pool usage >80%
   - Alert on query duration >5s
   - Alert on error rate >1%
   - Dashboard for database metrics

3. **Improve Deployment**
   - Implement canary deployments
   - Add automatic rollback on errors
   - Require integration tests to pass

4. **Improve Code Quality**
   - Add lint rule: no unused function params
   - Add lint rule: require explicit transaction handling
   - Add pre-commit hooks for tests

---

## Validation Steps

After applying fixes:

```bash
# 1. Health check
curl https://api.example.com/health
# Expected: { "status": "healthy", "database": "connected" }

# 2. Create order
curl -X POST https://api.example.com/api/orders \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "items": [{ "productId": "123", "quantity": 1 }],
    "shippingAddress": {...}
  }'
# Expected: 201 Created with order details

# 3. Check database connections
psql -c "SELECT COUNT(*) FROM pg_stat_activity WHERE state = 'active';"
# Expected: <20 (within pool limit)

# 4. Check for errors
kubectl logs -l app=api --tail=100 | grep ERROR
# Expected: No errors

# 5. Monitor for 10 minutes
# Expected: No errors, normal response times
```

---

## Prevention Measures

### Code Review Checklist
- [ ] Auth middleware changes include tests
- [ ] Database transactions have commit/rollback
- [ ] Integration tests pass
- [ ] No breaking API changes without version bump
- [ ] Backward compatibility maintained

### Deployment Checklist
- [ ] Integration tests pass in CI
- [ ] Canary deployment successful (10% traffic)
- [ ] Error rates normal for 5 minutes
- [ ] Gradually increase to 100%
- [ ] Monitor for 15 minutes post-deployment

### Monitoring Alerts
```yaml
# alerts.yml
- alert: HighErrorRate
  expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.01
  annotations:
    summary: "High error rate detected"

- alert: DatabaseConnectionPoolHigh
  expr: db_connections_active / db_connections_max > 0.8
  annotations:
    summary: "Database connection pool usage high"

- alert: SlowDatabaseQueries
  expr: histogram_quantile(0.95, db_query_duration_seconds) > 5
  annotations:
    summary: "Slow database queries detected"
```

---

## Lessons Learned

### What Went Wrong
1. Auth middleware refactored without updating consumers
2. Transaction handling code merged without review
3. No integration tests for auth changes
4. No database monitoring/alerting
5. No canary deployment process

### What Went Right
1. Quick identification of root causes
2. Clear error messages in logs
3. Ability to rollback quickly
4. Database tools available for diagnosis

### Action Items
- [ ] Add integration tests for auth middleware
- [ ] Add database connection monitoring
- [ ] Implement canary deployments
- [ ] Add query timeout enforcement
- [ ] Create runbook for similar issues
- [ ] Post-mortem meeting scheduled

---

## Related Issues

- Similar: #1234 - Connection pool exhaustion (2024-09-15)
- Similar: #5678 - Auth middleware breaking change (2024-08-01)
- Related: #9012 - Add integration tests (ongoing)

---

## Appendix: Useful Commands

### Database Diagnostics
```sql
-- Active connections
SELECT COUNT(*) FROM pg_stat_activity WHERE state != 'idle';

-- Long-running queries
SELECT pid, now() - query_start AS duration, query
FROM pg_stat_activity
WHERE state != 'idle' AND query_start < NOW() - INTERVAL '1 minute'
ORDER BY duration DESC;

-- Table locks
SELECT t.relname, l.locktype, l.mode, l.granted
FROM pg_locks l
JOIN pg_stat_all_tables t ON l.relation = t.relid
WHERE t.relname = 'orders';

-- Kill connection
SELECT pg_terminate_backend(12345);
```

### Kubernetes Diagnostics
```bash
# Logs from all API pods
kubectl logs -l app=api --all-containers --tail=1000

# Logs from failed pods
kubectl logs -l app=api --previous

# Describe pod for events
kubectl describe pod api-7d8c9f4b6-x9z8k

# Pod resource usage
kubectl top pod -l app=api

# Restart deployment
kubectl rollout restart deployment/api

# Rollback deployment
kubectl rollout undo deployment/api

# Deployment history
kubectl rollout history deployment/api
```

### GitHub Actions Diagnostics
```bash
# View recent runs
gh run list --limit 20

# View specific run
gh run view 1234567890

# View failed logs
gh run view 1234567890 --log-failed

# Re-run failed jobs
gh run rerun 1234567890 --failed
```

---

**Report Generated**: 2024-10-20 14:51:00 UTC
**Debugger**: ClaudeKit Debugger Agent v1.0
**Total Investigation Time**: 30 minutes
```

## Tools Integration

### psql Commands

```bash
# Connection info
psql -c "\conninfo"

# List tables
psql -c "\dt"

# Describe table
psql -c "\d orders"

# Table indexes
psql -c "\di orders"

# Table size
psql -c "SELECT pg_size_pretty(pg_total_relation_size('orders'));"

# Slow queries
psql -c "SELECT query, mean_exec_time FROM pg_stat_statements ORDER BY mean_exec_time DESC LIMIT 10;"
```

### gh Command

```bash
# View workflow runs
gh run list --workflow=test.yml --limit=10

# View run details
gh run view 1234567890

# Download logs
gh run download 1234567890

# View specific job
gh run view 1234567890 --job=12345

# Re-run workflow
gh run rerun 1234567890
```

### docs-seeker

```bash
# Search for error patterns
docs-seeker "PostgreSQL connection pool exhausted"
docs-seeker "Knex transaction best practices"
docs-seeker "Express middleware testing"
```

### repomix

```bash
# Generate codebase summary for analysis
repomix --output analysis.xml

# Include specific patterns
repomix --include "src/**/*.ts" --output src-only.xml
```

### scout agents

```typescript
// Parallel investigation
await Promise.all([
  scout('Find all database transaction usage', 3),
  scout('Find all auth middleware implementations', 2),
  scout('Find all error handling patterns', 2)
]);
```

## Diagnostic Patterns

### Memory Leak Detection

```bash
# Monitor memory over time
watch -n 5 'kubectl top pod -l app=api'

# Heap snapshot analysis
node --inspect app.js
# Chrome DevTools → Memory → Take Heap Snapshot
```

### Network Issues

```bash
# Test connectivity
kubectl exec -it api-pod -- curl http://database:5432
kubectl exec -it api-pod -- ping database

# DNS resolution
kubectl exec -it api-pod -- nslookup database

# Network policies
kubectl get networkpolicies
kubectl describe networkpolicy api-policy
```

### Performance Profiling

```bash
# Node.js profiling
node --prof app.js
node --prof-process isolate-*.log > profile.txt

# Database query profiling
psql -c "EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 123;"

# API endpoint profiling
curl -w "@curl-format.txt" https://api.example.com/orders
```

## Success Metrics

Effective debugging achieves:

- ✅ Root cause identified (not just symptoms)
- ✅ Solution validated in affected environment
- ✅ Prevention measures documented
- ✅ Knowledge shared with team
- ✅ Similar issues prevented

## Workflow Integration

### Incident Response

```bash
# 1. Acknowledge incident
/debug [API returning 500 errors]

# 2. Investigate (debugger agent)
# Generates diagnostic report

# 3. Implement fix
/fix:fast [apply suggested fixes]

# 4. Validate
/test [verify fix works]

# 5. Deploy
git commit && git push

# 6. Monitor
kubectl logs -f deployment/api
```

### Post-Mortem

After major incidents:
1. Complete debugging report becomes post-mortem
2. Share lessons learned with team
3. Create preventive measures
4. Update runbooks
5. Improve monitoring

## Next Steps

- [Testing](/docs/engineer/agents/tester) - Validate fixes with tests
- [Code Review](/docs/engineer/agents/code-reviewer) - Review fix quality
- [Fix Commands](/docs/engineer/commands/fix) - Apply fixes systematically

---

**Key Takeaway**: The debugger agent provides systematic investigation, comprehensive root cause analysis, and actionable solutions with validation steps and prevention measures.
