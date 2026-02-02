---
title: "Database Admin Agent"
description: "Manage databases, optimize queries, analyze performance, and ensure data reliability."
section: marketing
category: agents
order: 11
---
# Database Admin Agent

> **Your database specialist** - Keeps your data fast, reliable, and secure

## What This Agent Does

Your campaign dashboard loads slowly. Users complain checkout takes too long. You check the logs and see database queries timing out. The database works, but it's not working well.

**The Problem**: Databases are complex. Poorly optimized queries slow down your entire application. Missing indexes cause table scans. Bad schemas lead to data integrity issues. Most developers aren't database experts, so performance degrades over time.

**The Solution**: The Database Admin Agent manages your database health. It optimizes queries, designs efficient schemas, creates proper indexes, implements backup strategies, and diagnoses performance issues. Your database becomes a competitive advantage, not a bottleneck.

## Quick Start

Diagnose database performance:

```bash
# Check database health and performance
/db "Analyze campaign database performance and optimize"
```

You'll get query analysis, index recommendations, schema improvements, and actionable optimization steps.

## Capabilities

### Query Optimization
Makes slow queries fast:
- Analyzes query execution plans (EXPLAIN ANALYZE)
- Identifies full table scans and N+1 queries
- Recommends index additions or modifications
- Rewrites queries for better performance
- Validates query changes don't break functionality

### Schema Design & Optimization
Structures data efficiently:
- Designs normalized schemas avoiding redundancy
- Optimizes data types for storage and speed
- Plans proper table partitioning for large datasets
- Defines foreign keys and constraints
- Creates migration scripts with rollback plans

### Index Strategy Development
Speeds up data retrieval:
- Analyzes query patterns to identify needed indexes
- Creates B-tree, Hash, GiST indexes as appropriate
- Removes unused or redundant indexes
- Monitors index usage and effectiveness
- Balances read performance vs write overhead

### Backup & Recovery Planning
Protects your data:
- Designs comprehensive backup schedules
- Tests restore procedures regularly
- Implements point-in-time recovery
- Plans disaster recovery strategies
- Documents backup and restore processes

### Performance Monitoring & Troubleshooting
Identifies and fixes issues:
- Monitors query performance metrics
- Tracks connection pool usage
- Identifies lock contention and deadlocks
- Analyzes resource utilization (CPU, memory, I/O)
- Detects slow queries and optimization opportunities

### Database Security
Keeps data safe:
- Implements user roles and permissions (least privilege)
- Configures encryption for data at rest and in transit
- Sets up audit logging for compliance
- Reviews and closes security vulnerabilities
- Manages database access control

## When to Use

Use the Database Admin Agent when you need to:
- Diagnose slow query performance
- Design database schema for new features
- Optimize existing database structure
- Implement backup and recovery strategies
- Set up database monitoring and alerts
- Migrate data or change database systems
- Troubleshoot connection or lock issues
- Ensure database security compliance

## Example Workflows

### Performance Diagnosis

```bash
/db "Diagnose why campaign dashboard loads slowly"
```

**The admin will**:
1. Identify slow queries using database logs
2. Run EXPLAIN ANALYZE on problematic queries
3. Check for missing indexes
4. Analyze table statistics and vacuum status
5. Review connection pool configuration
6. Provide optimization recommendations

**You'll get**:
```markdown
## Database Performance Analysis

### Executive Summary
Campaign dashboard slow due to missing index on `campaigns.created_at`.
Adding composite index will reduce query time from 2.3s to 45ms (98% improvement).

### Slow Queries Identified
Query: `SELECT * FROM campaigns WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20`
- Current execution time: 2,340ms
- Rows scanned: 1.2M (full table scan)
- Expected improvement: ~98% faster with index

### Missing Indexes
Recommendation 1: Add composite index
\`\`\`sql
CREATE INDEX CONCURRENTLY idx_campaigns_user_created
  ON campaigns(user_id, created_at DESC);
\`\`\`
Expected impact: 98% query speedup, 15ms query time

Recommendation 2: Add covering index for dashboard
\`\`\`sql
CREATE INDEX CONCURRENTLY idx_campaigns_dashboard
  ON campaigns(user_id, created_at DESC)
  INCLUDE (name, status, budget);
\`\`\`
Expected impact: Eliminates table lookup, ~50ms total query time

### Database Statistics
- Table size: campaigns (1.2M rows, 450MB)
- Last vacuum: 3 days ago ✅
- Index usage: 65% (should be 80%+) ⚠️
- Connection pool: 15/20 used ✅

### Implementation Plan
Phase 1 (Immediate):
1. Create idx_campaigns_user_created index (15 min, no downtime)
2. Run ANALYZE campaigns table
3. Monitor query performance for 24h

Phase 2 (Next sprint):
1. Add covering index for full optimization
2. Review and remove unused indexes (5 found)
3. Set up query performance monitoring

### Risks & Mitigation
- Index creation locks table → Use CONCURRENTLY flag (no downtime)
- Increased storage → Minimal (est. +25MB per index)
- Write performance impact → Negligible for this workload

### Expected Results
- Dashboard load time: 2.3s → 0.1s
- Database CPU usage: -40%
- User experience: Significantly improved
```

### Schema Design for New Feature

```bash
/db "Design database schema for email campaign segmentation"
```

**You'll get**:
- Complete schema design with tables and relationships
- Migration scripts (up and down)
- Index recommendations
- Sample queries demonstrating usage
- Performance considerations

### Backup Strategy Implementation

```bash
/db "Implement production backup strategy for PostgreSQL"
```

**The admin will**:
1. Design backup schedule (full + incremental)
2. Configure automated backups
3. Test restore procedure
4. Document backup and restore processes
5. Set up monitoring and alerts

## Supported Database Systems

The admin has expertise in:

**Relational Databases**:
- PostgreSQL (primary)
- MySQL/MariaDB
- SQLite

**NoSQL Databases**:
- MongoDB
- Redis (caching, sessions)

**Cloud Databases**:
- Amazon RDS
- Google Cloud SQL
- Azure Database

## Database Tools & Commands

The admin uses these tools:

**PostgreSQL**:
```bash
# Connect to database
psql -h localhost -U username -d database

# Analyze query performance
EXPLAIN ANALYZE SELECT...;

# Check table statistics
SELECT * FROM pg_stat_user_tables WHERE relname = 'campaigns';

# View active queries
SELECT * FROM pg_stat_activity;
```

**Connection strings from**: `.env`, `.env.local`, `.env.production`

## Quality Standards

The admin ensures:
- Data integrity through proper constraints
- Performance targets met (queries <100ms)
- Regular backups tested and verified
- Security follows principle of least privilege
- Schemas follow normalization best practices
- Migrations have tested rollback procedures

## Related Agents

- [Fullstack Developer](/docs/marketing/agents/fullstack-developer) - Implements schema changes
- [Tester](/docs/marketing/agents/tester) - Tests database migrations
- [Project Manager](/docs/marketing/agents/project-manager) - Tracks database improvements

## Related Commands

- [`/db`](/docs/marketing/commands) - Database management and optimization
- [`/migrate`](/docs/marketing/commands) - Database migration support

## Tips

**Index Strategically**: Don't index everything. Analyze query patterns first. Indexes speed up reads but slow down writes.

**Test Migrations**: Always test migration scripts on a copy of production data before running in production.

**Monitor Query Performance**: Set up query logging for queries >100ms. Review weekly to catch performance degradation early.

**Use EXPLAIN ANALYZE**: Before optimizing, run EXPLAIN ANALYZE to understand actual query performance. Intuition is often wrong.

**Regular Vacuuming**: PostgreSQL needs regular VACUUM to reclaim space and update statistics. Set up automated vacuum maintenance.

**Connection Pooling**: Use connection pooling (PgBouncer, pgpool) to handle concurrent connections efficiently.

The Database Admin Agent makes your database a strength. Fast queries, reliable data, zero downtime—handled.
