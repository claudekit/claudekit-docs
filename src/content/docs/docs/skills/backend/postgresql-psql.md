---
title: postgresql-psql
description: "Documentation for postgresql-psql
description:
section: docs
category: skills/backend
order: 16
published: true"
section: docs
category: skills/backend
order: 16
published: true
---

# postgresql-psql Skill

Master PostgreSQL with psql CLI - query optimization, schema design, and production-ready database administration.

## When to Use

- **Slow queries**: Analyze EXPLAIN plans, add indexes, rewrite inefficient SQL
- **Schema design**: Model relationships, foreign keys, constraints, normalization
- **Performance tuning**: Configure PostgreSQL, connection pooling, vacuum strategies
- **Production ops**: Backups, replication, monitoring, security hardening

## Quick Start

```bash
# Connect to database
psql -U postgres -d myapp

# Essential meta-commands
\d users              # Describe table
\di                   # List indexes
\x on                 # Expanded output
\timing               # Show query time
```

## Common Use Cases

### 1. E-commerce Developer - Optimize Slow Checkout Query

**Who**: Backend dev, 2000ms checkout query killing conversions

**Prompt**:
```
"Use postgresql-psql skill to optimize this checkout query:
SELECT * FROM orders WHERE user_id = 123 AND status = 'pending'
It's taking 2 seconds. Need EXPLAIN analysis and index recommendations."
```

### 2. SaaS Founder - Design Multi-Tenant Schema

**Who**: Solo founder building B2B SaaS, needs tenant isolation

**Prompt**:
```
"Use postgresql-psql skill to design multi-tenant schema:
- Shared tables with tenant_id column
- Row-level security policies
- Indexes for tenant queries
- Migration from single-tenant"
```

### 3. Data Engineer - Fix Bloated Tables

**Who**: Data team seeing 10GB table that should be 2GB

**Prompt**:
```
"Use postgresql-psql skill to fix bloated tables:
- Identify bloat with pg_stat_user_tables
- VACUUM FULL strategy
- Autovacuum tuning
- Prevent future bloat"
```

### 4. DevOps Engineer - Production Replication Setup

**Who**: DevOps setting up HA PostgreSQL for production

**Prompt**:
```
"Use postgresql-psql skill for production replication:
- Streaming replication setup
- Failover automation
- Monitoring lag
- Backup strategy"
```

## Key Differences

| vs MongoDB | Use PostgreSQL When |
|------------|---------------------|
| Flexible schema | Need strict schema validation, ACID transactions |
| Document store | Complex joins, referential integrity critical |
| Horizontal scaling | SQL expertise, existing tools, BI integration |
| Nested data | Financial data, e-commerce, ERP systems |

## Quick Reference

### EXPLAIN Analysis
```sql
-- Basic execution plan
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';

-- Actual runtime (executes query)
EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 123;

-- Show buffer usage
EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM products;
```

### Index Types
```sql
-- B-tree (default, most common)
CREATE INDEX idx_email ON users(email);

-- Partial index (filtered)
CREATE INDEX idx_active_users ON users(id) WHERE deleted_at IS NULL;

-- Multi-column (order matters)
CREATE INDEX idx_status_created ON orders(status, created_at DESC);

-- Expression index
CREATE INDEX idx_email_lower ON users(LOWER(email));
```

### Performance Queries
```sql
-- Find slow queries
SELECT query, mean_exec_time, calls
FROM pg_stat_statements
ORDER BY mean_exec_time DESC LIMIT 10;

-- Unused indexes
SELECT schemaname, tablename, indexname, idx_scan
FROM pg_stat_user_indexes WHERE idx_scan = 0;

-- Table sizes
SELECT schemaname, tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename))
FROM pg_tables WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

### Schema Patterns
```sql
-- One-to-many with index
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_posts_user_id ON posts(user_id);

-- Many-to-many junction table
CREATE TABLE post_tags (
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);
```

## Pro Tips

**Not activating?** Say: "Use postgresql-psql skill to [your task]"

**Index strategy**: Index foreign keys, WHERE/JOIN columns, ORDER BY columns first.

**EXPLAIN gotchas**: "Seq Scan" isn't always bad - for small tables it's faster than indexes.

**Connection pooling**: Use pgBouncer in production. Formula: `max_connections = (CPU cores * 2) + disk spindles`.

**Vacuum**: Run `ANALYZE` after bulk inserts. If tables bloat, check autovacuum settings before VACUUM FULL.

**JSON in PostgreSQL**: Use JSONB (binary), not JSON (text). GIN indexes on JSONB for fast queries.

## Related Skills

- [databases](/docs/skills/backend/databases) - MongoDB + PostgreSQL unified guide
- [backend-development](/docs/skills/backend/backend-development) - API integration patterns
- [devops](/docs/skills/backend/devops) - Production deployment, monitoring

## Key Takeaway

PostgreSQL + psql = production-grade relational database. When queries slow down, schema needs redesign, or production needs HA - this skill delivers optimized SQL, proper indexes, and battle-tested patterns. No theory, just working solutions.
