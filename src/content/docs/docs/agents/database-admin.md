---
title: Database Admin Agent
description: Senior database administrator specializing in performance optimization, query tuning, and reliability
section: docs
category: agents
order: 14
published: true
---

# Database Admin Agent

Optimize queries, design schemas, fix bottlenecks. Your database performance expert for PostgreSQL, MySQL, MongoDB, and more.

## When to Use

- Dashboard queries timing out (>5s response)
- Tables growing but queries slowing down
- Need schema design for new features
- Connection pool exhaustion or deadlocks

## Key Capabilities

| Area | What It Does |
|------|-------------|
| **Query Optimization** | EXPLAIN ANALYZE, index recommendations, rewrite slow queries (45s → 0.8s typical) |
| **Schema Design** | Normalized tables, optimal indexes, constraints, triggers, partitioning strategies |
| **Performance Analysis** | Health checks, connection pool tuning, cache hit ratio, bloat detection |
| **Backup & HA** | WAL archiving, point-in-time recovery, replication setup, failover config |
| **Database Systems** | PostgreSQL, MySQL/MariaDB, MongoDB, Redis, SQLite, distributed databases |

## Common Use Cases

### 1. Fix Slow Dashboard Query
**Who**: Backend dev with 45-second query
**Prompt**:
```
"Dashboard query takes 45 seconds. Optimize it:
SELECT u.name, COUNT(o.id), SUM(o.total)
FROM users u LEFT JOIN orders o ON u.id = o.user_id
WHERE o.created_at >= '2024-01-01'
GROUP BY u.id ORDER BY SUM(o.total) DESC LIMIT 100;"
```
**Output**: EXPLAIN ANALYZE, missing index report, optimized query (0.8s), materialized view option, implementation plan

### 2. Schema Design for New Feature
**Who**: Product team adding order history
**Prompt**: `"Design schema for order history: users, products, orders, payments. Handle 10M+ orders."`
**Output**: Complete DDL with indexes, constraints, triggers, denormalization strategy, partitioning plan

### 3. Database Health Check
**Who**: DevOps investigating production slowness
**Prompt**: `"Run comprehensive health check on production DB"`
**Output**: Connection pool analysis, missing FK indexes, bloat report, slow query top 5, cost analysis, action plan

### 4. Backup Strategy
**Who**: SRE setting up disaster recovery
**Prompt**: `"Setup backup strategy with PITR for production PostgreSQL"`
**Output**: Daily full backup script, WAL archiving config, restore procedures, S3 upload, verification tests

### 5. Connection Pool Exhaustion
**Who**: Frontend seeing "too many connections" errors
**Prompt**: `"95/100 connections used, app timing out. Fix connection pool."`
**Output**: PgBouncer config, app connection pooling code, max_connections tuning, monitoring queries

## Pro Tips

**For Query Optimization**:
- Always provide table sizes + existing indexes for better analysis
- Agent creates covering indexes (include all SELECT columns)
- Expects `plans/reports/` folder for optimization reports

**For Schema Design**:
- Mention scale requirements (10M rows? 1B?). Affects partitioning strategy
- Agent denormalizes strategically (e.g., product name in order_items for history)
- Foreign key indexes created automatically (common oversight)

**For Health Checks**:
- Run during business hours (not 3am). Real traffic reveals issues
- Agent checks: connections, slow queries, missing indexes, bloat, cache hit ratio
- Provides immediate + short-term + long-term action plans

**Performance Benchmarks**:
- Query optimization: Typically 90-98% faster execution time
- Index creation: 15-20 min per 1M rows (concurrent, no downtime)
- Health check: Identifies $4K/month in savings (typical)

## Related Agents

- [Debugger](/docs/agents/debugger) - Debug application database issues
- [Fullstack Developer](/docs/agents/fullstack-developer) - Implement schema changes in app
- [Tester](/docs/agents/tester) - Validate database migrations

## Key Takeaway

Database Admin agent turns 45-second queries into 0.8-second queries with index strategies and query rewrites. Designs production-ready schemas with proper normalization, constraints, and partitioning. Delivers actionable health reports with specific SQL fixes and cost impact ($4K/month savings typical).
