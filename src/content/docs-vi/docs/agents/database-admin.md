---
title: Database Admin Agent
description: Senior database administrator specializing in performance optimization, query tuning, and reliability
section: docs
category: agents
order: 14
published: true
---

# Database Admin Agent

The database admin agent specializes in database performance analysis, query optimization, schema design, backup strategies, and ensuring high availability across PostgreSQL, MySQL, MongoDB, and other database systems.

## Purpose

Analyze database performance, optimize slow queries, design efficient schemas, implement backup strategies, configure replication, and ensure database security and reliability.

## When Activated

The database admin agent activates when:

- When database performance issues occur
- When queries are slow or timing out
- When designing database schemas
- When implementing backup strategies
- When configuring replication or high availability
- When investigating database errors
- When planning database migrations
- When optimizing database infrastructure costs

## Capabilities

### Performance Analysis

- **Query Performance**: EXPLAIN ANALYZE, execution plan analysis
- **Index Strategy**: Missing indexes, unused indexes, index optimization
- **Slow Query Identification**: Log analysis, performance metrics
- **Resource Usage**: CPU, memory, disk I/O analysis
- **Connection Pooling**: Optimize connection management
- **Cache Hit Ratio**: Buffer cache analysis and tuning

### Query Optimization

- **Query Rewriting**: Transform inefficient queries
- **Index Recommendations**: Suggest indexes based on query patterns
- **JOIN Optimization**: Reorder joins, use appropriate join types
- **Subquery Optimization**: Convert to JOINs or CTEs
- **Pagination**: Efficient LIMIT/OFFSET alternatives
- **N+1 Query Detection**: Identify and fix N+1 problems

### Schema Design

- **Normalization**: Proper table design and relationships
- **Denormalization**: Strategic denormalization for performance
- **Indexing Strategy**: Primary keys, foreign keys, composite indexes
- **Partitioning**: Table and index partitioning strategies
- **Data Types**: Optimal column types and sizes
- **Constraints**: Enforce data integrity with constraints

### Database Systems

- **PostgreSQL**: Advanced features, extensions, MVCC tuning
- **MySQL/MariaDB**: InnoDB optimization, replication configuration
- **MongoDB**: Aggregation pipeline, sharding, replica sets
- **Redis**: Caching strategies, persistence, cluster mode
- **SQLite**: Embedded database optimization
- **Distributed Databases**: Cassandra, CockroachDB, TiDB

### Backup & Recovery

- **Backup Strategies**: Full, incremental, differential backups
- **Point-in-Time Recovery**: WAL archiving, transaction log backups
- **Disaster Recovery**: Multi-region replication, failover procedures
- **Backup Testing**: Regular restore testing and validation
- **Retention Policies**: Balance cost and compliance requirements

### High Availability

- **Replication**: Streaming replication, logical replication
- **Failover**: Automatic failover configuration
- **Load Balancing**: Read replica configuration
- **Connection Pooling**: PgBouncer, ProxySQL configuration
- **Monitoring**: Health checks, alerting, metrics

### Security

- **Access Control**: Role-based permissions, least privilege
- **Encryption**: At-rest and in-transit encryption
- **SQL Injection Prevention**: Parameterized queries, validation
- **Audit Logging**: Track database access and changes
- **Compliance**: GDPR, HIPAA, SOC 2 requirements

## Example Usage

### Slow Query Optimization

**Input:**
```bash
"Our dashboard query takes 45 seconds. Can you optimize it?"

Query:
SELECT u.name, COUNT(o.id) as order_count, SUM(o.total) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.created_at >= '2024-01-01'
GROUP BY u.id, u.name
ORDER BY total_spent DESC
LIMIT 100;
```

**Process:**
```
1. Initial Assessment (10s)
   Analyzing: Query structure
   Analyzing: Table sizes
   Analyzing: Existing indexes
   Analyzing: Execution plan

   Findings:
   - users table: 1.2M rows
   - orders table: 8.5M rows
   - No index on orders.created_at
   - No index on orders.user_id
   - Sequential scan on orders table

2. Execution Plan Analysis (15s)
   Running: EXPLAIN ANALYZE

   EXPLAIN ANALYZE output:
   ```
   Limit  (cost=285432.43..285432.68 rows=100)
     ->  Sort  (cost=285432.43..289876.21 rows=1177510)
           Sort Key: (sum(o.total)) DESC
           ->  Hash Right Join  (cost=43215.00..271234.89 rows=1177510)
                 Hash Cond: (o.user_id = u.id)
                 ->  Seq Scan on orders o  (cost=0.00..185432.10 rows=4238971)
                       Filter: (created_at >= '2024-01-01')
                       Rows Removed by Filter: 4261029
                 ->  Hash  (cost=28432.00..28432.00 rows=1200000)
                       ->  Seq Scan on users u  (cost=0.00..28432.00 rows=1200000)
   ```

   Performance Issues:
   ❌ Sequential scan on 8.5M row orders table
   ❌ Filter removing 50% of rows after scan
   ❌ Hash join building 1.2M row hash table
   ❌ Sorting 1.1M rows for LIMIT 100

3. Index Analysis (10s)
   Checking: Existing indexes

   Current indexes:
   - users: PRIMARY KEY (id)
   - orders: PRIMARY KEY (id)

   Missing indexes:
   ❌ orders(user_id) - for JOIN
   ❌ orders(created_at) - for WHERE filter
   ❌ Composite index for covering query

4. Optimization Strategy (20s)
   Creating: Index recommendations
   Creating: Query rewrite options
   Creating: Performance estimates

   Strategy:
   1. Add covering index
   2. Rewrite query to use index
   3. Add materialized view for frequent access
   4. Implement caching layer

5. Implementation (30s)
   Creating: Optimized indexes
   Creating: Rewritten query
   Creating: Performance comparison
```

**Generated Optimization Report:**

```markdown
# Query Optimization Report

## Original Query Performance
- Execution Time: 45.2 seconds
- Rows Scanned: 8.5M (orders) + 1.2M (users)
- Cost: 285,432
- Memory: 1.2GB for hash join

## Root Causes

### Issue 1: Missing Indexes
**Problem**: Sequential scan on 8.5M row orders table

**Impact**: Reading entire table instead of using index
- Disk I/O: 8.5M rows × 1KB = 8.5GB read
- Time: 8.5GB / 200MB/s = 42 seconds

**Solution**: Add composite index
```sql
CREATE INDEX idx_orders_user_date_total
ON orders(user_id, created_at, total)
WHERE created_at >= '2024-01-01';
```

**Why This Works**:
- Covers all columns in query (covering index)
- Partial index reduces index size by 50%
- Index scan instead of table scan

### Issue 2: Inefficient JOIN Order
**Problem**: Building hash table with 1.2M users

**Impact**:
- Memory: 1.2GB hash table
- Time: 3-5 seconds to build

**Solution**: Reverse JOIN order
```sql
-- Start with filtered orders, then JOIN users
SELECT u.name, order_stats.order_count, order_stats.total_spent
FROM (
  SELECT user_id,
         COUNT(*) as order_count,
         SUM(total) as total_spent
  FROM orders
  WHERE created_at >= '2024-01-01'
  GROUP BY user_id
  ORDER BY total_spent DESC
  LIMIT 100
) order_stats
JOIN users u ON u.id = order_stats.user_id;
```

**Why This Works**:
- Filter and aggregate first (reduces rows)
- JOIN with only 100 rows instead of 1.2M
- Smaller hash table, less memory

### Issue 3: Sort Before Limit
**Problem**: Sorting 1.1M rows to get top 100

**Impact**:
- Memory: Sorting large dataset
- Time: O(n log n) complexity

**Solution**: Use window function with index
```sql
-- Leverages index for sorting
SELECT u.name, order_count, total_spent
FROM (
  SELECT
    o.user_id,
    COUNT(*) as order_count,
    SUM(o.total) as total_spent,
    ROW_NUMBER() OVER (ORDER BY SUM(o.total) DESC) as rank
  FROM orders o
  WHERE o.created_at >= '2024-01-01'
  GROUP BY o.user_id
) ranked
JOIN users u ON u.id = ranked.user_id
WHERE ranked.rank <= 100;
```

## Optimized Solution

### Step 1: Create Indexes
```sql
-- Covering index for orders query
CREATE INDEX idx_orders_user_date_total
ON orders(user_id, created_at, total)
WHERE created_at >= '2024-01-01';

-- Index for user lookup
CREATE INDEX idx_users_id_name ON users(id, name);

-- Analyze tables to update statistics
ANALYZE orders;
ANALYZE users;
```

**Index Creation Time**: ~2 minutes (run during low-traffic period)
**Index Size**: 180MB (50% smaller due to partial index)

### Step 2: Optimized Query
```sql
-- Version 1: Best for one-time queries
SELECT u.name, order_stats.order_count, order_stats.total_spent
FROM (
  SELECT
    user_id,
    COUNT(*) as order_count,
    SUM(total) as total_spent
  FROM orders
  WHERE created_at >= '2024-01-01'
  GROUP BY user_id
  ORDER BY SUM(total) DESC
  LIMIT 100
) order_stats
JOIN users u ON u.id = order_stats.user_id
ORDER BY order_stats.total_spent DESC;
```

**Execution Plan (After Optimization)**:
```
Nested Loop  (cost=8234.45..8456.23 rows=100)
  ->  Limit  (cost=8234.45..8345.67 rows=100)
        ->  Sort  (cost=8234.45..9123.89 rows=354371)
              Sort Key: (sum(orders.total)) DESC
              ->  Index Scan using idx_orders_user_date_total on orders
                    (cost=0.43..7823.12 rows=354371)
                    Index Cond: (created_at >= '2024-01-01')
  ->  Index Scan using idx_users_id_name on users u
        (cost=0.43..1.11 rows=1)
        Index Cond: (id = orders.user_id)
```

**Performance Improvement**:
- Execution Time: **0.8 seconds** (98.2% faster)
- Rows Scanned: 4.2M (using index, not full scan)
- Cost: 8,456 (96.9% reduction)
- Memory: 45MB (96% reduction)

### Step 3: Materialized View (Optional)
For frequently accessed data:

```sql
-- Create materialized view for daily refresh
CREATE MATERIALIZED VIEW mv_user_order_stats AS
SELECT
  u.id,
  u.name,
  COUNT(o.id) as order_count,
  SUM(o.total) as total_spent,
  MAX(o.created_at) as last_order_date
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.created_at >= CURRENT_DATE - INTERVAL '365 days'
GROUP BY u.id, u.name;

-- Index on materialized view
CREATE INDEX idx_mv_user_order_stats_total
ON mv_user_order_stats(total_spent DESC);

-- Refresh daily
REFRESH MATERIALIZED VIEW CONCURRENTLY mv_user_order_stats;
```

**Query with Materialized View**:
```sql
SELECT name, order_count, total_spent
FROM mv_user_order_stats
WHERE last_order_date >= '2024-01-01'
ORDER BY total_spent DESC
LIMIT 100;
```

**Performance**:
- Execution Time: **0.05 seconds** (99.9% faster)
- Pre-aggregated data
- Daily refresh during low-traffic period

## Performance Comparison

| Metric | Original | Optimized | Materialized View |
|--------|----------|-----------|-------------------|
| Execution Time | 45.2s | 0.8s | 0.05s |
| Improvement | - | 98.2% | 99.9% |
| Cost | 285,432 | 8,456 | 234 |
| Memory | 1.2GB | 45MB | 2MB |
| Disk I/O | 8.5GB | 420MB | 1MB |

## Implementation Plan

### Phase 1: Create Indexes (Low Risk)
```bash
# During low-traffic period (e.g., 2am)
psql -U postgres -d production -f create_indexes.sql

# Monitor index creation
SELECT
  now()::time,
  query,
  state,
  (now() - query_start) as duration
FROM pg_stat_activity
WHERE query LIKE 'CREATE INDEX%';
```

**Time**: 2-3 minutes
**Impact**: No downtime, but temporary increase in disk I/O

### Phase 2: Update Application Queries (Medium Risk)
```bash
# Deploy new query in application code
# Test in staging first
# Use feature flag for gradual rollout
```

**Time**: 1 deployment cycle
**Impact**: Immediate performance improvement

### Phase 3: Materialized View (Optional, Low Risk)
```bash
# Create materialized view
psql -U postgres -d production -f create_mv.sql

# Setup cron job for daily refresh
crontab -e
# Add: 0 2 * * * psql -U postgres -d production -c "REFRESH MATERIALIZED VIEW CONCURRENTLY mv_user_order_stats"
```

**Time**: 5 minutes initial creation
**Impact**: 10-second refresh daily at 2am

## Monitoring & Validation

### Query Performance Metrics
```sql
-- Monitor query execution time
SELECT
  query,
  calls,
  total_exec_time / 1000 as total_time_seconds,
  mean_exec_time / 1000 as mean_time_seconds,
  max_exec_time / 1000 as max_time_seconds
FROM pg_stat_statements
WHERE query LIKE '%orders%user%'
ORDER BY mean_exec_time DESC;
```

### Index Usage Statistics
```sql
-- Check if indexes are being used
SELECT
  schemaname,
  tablename,
  indexname,
  idx_scan,
  idx_tup_read,
  idx_tup_fetch
FROM pg_stat_user_indexes
WHERE indexname IN (
  'idx_orders_user_date_total',
  'idx_users_id_name'
);
```

### Expected Results
- **Query Execution Time**: <1 second (95th percentile)
- **Index Scans**: >1,000 per day
- **Cache Hit Ratio**: >95%
- **Disk I/O**: <100MB per query

## Rollback Plan

If issues occur:

### Drop Indexes (Instant)
```sql
DROP INDEX CONCURRENTLY idx_orders_user_date_total;
DROP INDEX CONCURRENTLY idx_users_id_name;
```

### Revert Query (Instant)
```bash
# Deploy previous version
git revert HEAD
deploy --env production
```

### Drop Materialized View (Instant)
```sql
DROP MATERIALIZED VIEW mv_user_order_stats;
```

## Cost Analysis

### Before Optimization
- Query Frequency: 100 queries/hour
- Execution Time: 45 seconds per query
- CPU Time: 45s × 100 = 4,500 CPU seconds/hour
- Daily Cost: 4,500s × 24h × $0.05/CPU-hour = $135/day

### After Optimization
- Query Frequency: 100 queries/hour
- Execution Time: 0.8 seconds per query
- CPU Time: 0.8s × 100 = 80 CPU seconds/hour
- Daily Cost: 80s × 24h × $0.05/CPU-hour = $2.40/day

**Savings**: $132.60/day = $3,978/month = $47,736/year

### Index Storage Cost
- Index Size: 180MB
- Storage Cost: 180MB × $0.10/GB = $0.018/month

**Net Savings**: $3,977.98/month

## Next Steps

1. ✅ Create indexes (Phase 1)
2. ✅ Deploy optimized query (Phase 2)
3. ⏳ Monitor performance for 7 days
4. ⏳ Create materialized view if needed (Phase 3)
5. ⏳ Document query patterns for future optimization

## Questions?

Reply to this report or schedule a call:
- Database optimization review
- Index strategy consultation
- Performance tuning workshop

---

Report generated: 2024-10-30 14:23:45 UTC
Database: PostgreSQL 15.3
Environment: Production
```

**Report Saved:**
```
plans/reports/241030-from-database-admin-to-dev-team-query-optimization-report.md
```

## Database Performance Analysis

### Comprehensive Health Check

**Input:**
```bash
"Run a comprehensive database health check"
```

**Generated Analysis:**

```markdown
# Database Health Check Report

## Executive Summary

**Database**: PostgreSQL 15.3
**Environment**: Production
**Date**: 2024-10-30 14:30:00 UTC
**Overall Health**: ⚠️ Warning (73/100)

**Critical Issues**: 2
**Warnings**: 5
**Info**: 3

## Critical Issues

### 1. Connection Pool Exhaustion
**Severity**: 🔴 Critical
**Impact**: Application timeouts, failed requests

**Current State**:
```sql
SELECT count(*) as connections, state
FROM pg_stat_activity
GROUP BY state;

 connections |        state
-------------|----------------------
         95  | active
          3  | idle in transaction
          2  | idle
```

**Problem**: 95/100 connections in use (95% utilization)

**Root Cause**:
- Application not closing connections properly
- No connection pooling in application layer
- Long-running transactions holding connections

**Impact**:
- New connections rejected
- Request timeouts (5-10% of traffic)
- Degraded user experience

**Solution**:

```javascript
// Application layer: Implement connection pooling
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: 5432,
  database: 'production',
  user: 'app_user',
  password: process.env.DB_PASSWORD,
  max: 20,  // Maximum connections per app instance
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Always return connections
const query = async (text, params) => {
  const client = await pool.connect();
  try {
    return await client.query(text, params);
  } finally {
    client.release();  // Critical: Always release
  }
};
```

```sql
-- Database layer: Increase max_connections
ALTER SYSTEM SET max_connections = 200;
SELECT pg_reload_conf();

-- Add connection pooler (PgBouncer)
-- Install PgBouncer between application and database
-- Configuration in /etc/pgbouncer/pgbouncer.ini
```

**Timeline**:
- Application fix: 1 day (deploy + test)
- PgBouncer setup: 2 hours
- max_connections increase: Immediate (requires reload)

**Expected Outcome**:
- Connection utilization: <50%
- Zero connection rejections
- Faster query execution

---

### 2. Missing Indexes on Foreign Keys
**Severity**: 🔴 Critical
**Impact**: Slow JOIN queries, high disk I/O

**Analysis**:
```sql
-- Find foreign keys without indexes
SELECT
  tc.table_name,
  kcu.column_name,
  pg_size_pretty(pg_relation_size(tc.table_name::regclass)) as table_size
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu
  ON tc.constraint_name = kcu.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY'
  AND NOT EXISTS (
    SELECT 1
    FROM pg_indexes
    WHERE tablename = tc.table_name
      AND indexdef LIKE '%' || kcu.column_name || '%'
  );
```

**Result**:
```
  table_name   | column_name  | table_size
---------------|--------------|------------
 order_items   | order_id     | 4.2 GB
 order_items   | product_id   | 4.2 GB
 payments      | order_id     | 1.8 GB
 reviews       | user_id      | 890 MB
 reviews       | product_id   | 890 MB
```

**Impact**:
- Sequential scans on large tables
- Slow DELETE/UPDATE cascades
- High disk I/O (>80% utilization)

**Solution**:
```sql
-- Create missing indexes
-- Run during low-traffic period (2am-4am)

CREATE INDEX CONCURRENTLY idx_order_items_order_id
ON order_items(order_id);

CREATE INDEX CONCURRENTLY idx_order_items_product_id
ON order_items(product_id);

CREATE INDEX CONCURRENTLY idx_payments_order_id
ON payments(order_id);

CREATE INDEX CONCURRENTLY idx_reviews_user_id
ON reviews(user_id);

CREATE INDEX CONCURRENTLY idx_reviews_product_id
ON reviews(product_id);

-- Verify index creation
SELECT
  schemaname,
  tablename,
  indexname,
  pg_size_pretty(pg_relation_size(indexrelid))
FROM pg_stat_user_indexes
WHERE indexname LIKE 'idx_%'
ORDER BY pg_relation_size(indexrelid) DESC;
```

**Timeline**: 15-20 minutes per index (concurrent creation)
**Total Storage**: ~1.5GB additional disk space

**Expected Outcome**:
- 90% faster JOIN queries
- Disk I/O reduced from 80% to <30%
- Faster DELETE cascades

## Warnings

### 3. High Table Bloat
**Severity**: ⚠️ Warning
**Impact**: Increased disk usage, slower queries

**Analysis**:
```sql
SELECT
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as total_size,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename) - pg_relation_size(schemaname||'.'||tablename)) as bloat,
  round(100 * (pg_total_relation_size(schemaname||'.'||tablename) - pg_relation_size(schemaname||'.'||tablename))::numeric / pg_total_relation_size(schemaname||'.'||tablename), 2) as bloat_pct
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY bloat_pct DESC
LIMIT 10;
```

**Result**:
```
 tablename   | total_size | bloat  | bloat_pct
-------------|------------|--------|----------
 orders      | 8.4 GB     | 3.2 GB |     38.10
 order_items | 4.2 GB     | 1.1 GB |     26.19
 users       | 2.1 GB     | 450 MB |     20.95
```

**Recommendation**:
```sql
-- Schedule VACUUM FULL during maintenance window
VACUUM FULL ANALYZE orders;
VACUUM FULL ANALYZE order_items;
VACUUM FULL ANALYZE users;

-- Or use pg_repack for zero-downtime
pg_repack -d production -t orders --jobs 4
```

---

### 4. Slow Queries
**Severity**: ⚠️ Warning
**Impact**: User experience degradation

**Top 5 Slowest Queries**:
```sql
SELECT
  substring(query, 1, 80) as query_snippet,
  calls,
  mean_exec_time::numeric(10,2) as avg_ms,
  max_exec_time::numeric(10,2) as max_ms,
  (total_exec_time / 1000 / 60)::numeric(10,2) as total_mins
FROM pg_stat_statements
WHERE query NOT LIKE '%pg_stat%'
ORDER BY mean_exec_time DESC
LIMIT 5;
```

**Result**:
```
           query_snippet            | calls | avg_ms  | max_ms   | total_mins
------------------------------------|-------|---------|----------|------------
 SELECT * FROM orders WHERE...      |  4521 | 8234.12 | 45127.89 |    620.45
 UPDATE users SET last_login...     | 28901 | 2891.45 |  9823.12 |   1392.83
 SELECT COUNT(*) FROM products...   | 12043 | 1234.67 |  5432.10 |    247.56
```

**Action Items**:
- Optimize top 3 queries (see Query Optimization section)
- Add indexes for frequent WHERE clauses
- Consider caching for COUNT(*) queries

---

### 5-7. Additional Warnings
- Cache hit ratio: 89% (target: >95%)
- Deadlocks: 23 in last 24 hours
- Long-running transactions: 5 transactions >1 hour

## Recommendations

### Immediate Actions (Within 24 hours)
1. ✅ Implement connection pooling in application
2. ✅ Create missing foreign key indexes
3. ✅ Increase max_connections to 200

### Short-term (Within 1 week)
4. Optimize top 5 slow queries
5. Schedule VACUUM FULL during maintenance window
6. Implement PgBouncer connection pooler
7. Add monitoring for connection pool usage

### Medium-term (Within 1 month)
8. Implement query caching (Redis)
9. Setup read replicas for read-heavy queries
10. Review and optimize table partitioning strategy
11. Implement automated backup testing

## Monitoring Dashboard

**Key Metrics to Track**:

```sql
-- Connection usage
SELECT count(*), state FROM pg_stat_activity GROUP BY state;

-- Cache hit ratio (target: >95%)
SELECT
  sum(heap_blks_hit) / (sum(heap_blks_hit) + sum(heap_blks_read)) * 100 as cache_hit_ratio
FROM pg_statio_user_tables;

-- Slow queries (>1 second)
SELECT count(*)
FROM pg_stat_statements
WHERE mean_exec_time > 1000;

-- Index usage
SELECT
  schemaname,
  tablename,
  indexname,
  idx_scan,
  idx_tup_read
FROM pg_stat_user_indexes
ORDER BY idx_scan ASC;

-- Deadlocks
SELECT deadlocks FROM pg_stat_database WHERE datname = 'production';
```

## Cost Analysis

**Current Infrastructure Cost**: $850/month
- Database instance: $650/month
- Storage: 50GB × $0.10/GB = $5/month
- Backups: $195/month

**After Optimization**:
- Database instance: $450/month (smaller instance due to better performance)
- Storage: 55GB × $0.10/GB = $5.50/month (slight increase for indexes)
- Backups: $195/month
- PgBouncer: $50/month

**Monthly Savings**: $149.50
**Annual Savings**: $1,794

## Next Steps

1. Schedule maintenance window for index creation
2. Deploy application changes for connection pooling
3. Setup PgBouncer connection pooler
4. Implement monitoring dashboard
5. Schedule follow-up health check in 2 weeks

---

Report generated by Database Admin Agent
Contact: Schedule optimization consultation
```

## Database Schema Design

### E-Commerce Schema Example

**Input:**
```bash
"Design database schema for e-commerce platform with users, products, orders, payments"
```

**Generated Schema:**

```sql
-- ============================================================================
-- E-Commerce Database Schema
-- ============================================================================

-- Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================================
-- Users & Authentication
-- ============================================================================

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login_at TIMESTAMP,
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'deleted'))
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(status);
CREATE INDEX idx_users_created_at ON users(created_at DESC);

-- ============================================================================
-- Products
-- ============================================================================

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  parent_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_parent_id ON categories(parent_id);

CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
  sku VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
  compare_at_price DECIMAL(10, 2) CHECK (compare_at_price >= 0),
  cost_price DECIMAL(10, 2) CHECK (cost_price >= 0),
  stock_quantity INTEGER DEFAULT 0 CHECK (stock_quantity >= 0),
  low_stock_threshold INTEGER DEFAULT 10,
  weight_grams INTEGER,
  is_active BOOLEAN DEFAULT TRUE,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_products_sku ON products(sku);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_is_active ON products(is_active);
CREATE INDEX idx_products_is_featured ON products(is_featured) WHERE is_featured = TRUE;
CREATE INDEX idx_products_price ON products(price);

-- ============================================================================
-- Orders
-- ============================================================================

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  order_number VARCHAR(50) UNIQUE NOT NULL,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded')),
  subtotal DECIMAL(10, 2) NOT NULL CHECK (subtotal >= 0),
  tax DECIMAL(10, 2) DEFAULT 0 CHECK (tax >= 0),
  shipping_cost DECIMAL(10, 2) DEFAULT 0 CHECK (shipping_cost >= 0),
  discount DECIMAL(10, 2) DEFAULT 0 CHECK (discount >= 0),
  total DECIMAL(10, 2) NOT NULL CHECK (total >= 0),
  currency VARCHAR(3) DEFAULT 'USD',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  shipped_at TIMESTAMP,
  delivered_at TIMESTAMP,
  cancelled_at TIMESTAMP
);

CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_order_number ON orders(order_number);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);

CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE SET NULL,
  product_name VARCHAR(255) NOT NULL, -- Denormalized for history
  product_sku VARCHAR(50) NOT NULL,   -- Denormalized for history
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  unit_price DECIMAL(10, 2) NOT NULL CHECK (unit_price >= 0),
  total DECIMAL(10, 2) NOT NULL CHECK (total >= 0),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);

-- ============================================================================
-- Payments
-- ============================================================================

CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  payment_method VARCHAR(50) NOT NULL CHECK (payment_method IN ('credit_card', 'debit_card', 'paypal', 'stripe', 'cash')),
  amount DECIMAL(10, 2) NOT NULL CHECK (amount >= 0),
  currency VARCHAR(3) DEFAULT 'USD',
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed', 'refunded')),
  transaction_id VARCHAR(255),
  gateway_response JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP,
  failed_at TIMESTAMP,
  refunded_at TIMESTAMP
);

CREATE INDEX idx_payments_order_id ON payments(order_id);
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_payments_transaction_id ON payments(transaction_id);
CREATE INDEX idx_payments_created_at ON payments(created_at DESC);

-- ============================================================================
-- Addresses
-- ============================================================================

CREATE TABLE addresses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  address_type VARCHAR(20) CHECK (address_type IN ('billing', 'shipping')),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  company VARCHAR(100),
  address_line1 VARCHAR(255) NOT NULL,
  address_line2 VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100),
  postal_code VARCHAR(20),
  country VARCHAR(2) NOT NULL, -- ISO country code
  phone VARCHAR(20),
  is_default BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_addresses_user_id ON addresses(user_id);
CREATE INDEX idx_addresses_type ON addresses(address_type);

-- ============================================================================
-- Functions & Triggers
-- ============================================================================

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at triggers
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Generate order number
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS TRIGGER AS $$
BEGIN
  NEW.order_number = 'ORD-' || TO_CHAR(CURRENT_DATE, 'YYMMDD') || '-' || LPAD(nextval('order_number_seq')::TEXT, 6, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE SEQUENCE order_number_seq;

CREATE TRIGGER generate_order_number_trigger
  BEFORE INSERT ON orders
  FOR EACH ROW
  WHEN (NEW.order_number IS NULL)
  EXECUTE FUNCTION generate_order_number();

-- ============================================================================
-- Views
-- ============================================================================

-- Order summary view
CREATE VIEW order_summary AS
SELECT
  o.id,
  o.order_number,
  o.status,
  o.total,
  o.created_at,
  u.email as customer_email,
  u.first_name || ' ' || u.last_name as customer_name,
  COUNT(oi.id) as item_count,
  p.status as payment_status
FROM orders o
JOIN users u ON u.id = o.user_id
LEFT JOIN order_items oi ON oi.order_id = o.id
LEFT JOIN payments p ON p.order_id = o.id
GROUP BY o.id, o.order_number, o.status, o.total, o.created_at, u.email, u.first_name, u.last_name, p.status;

-- ============================================================================
-- Sample Data (for testing)
-- ============================================================================

-- Insert sample categories
INSERT INTO categories (name, slug, description) VALUES
('Electronics', 'electronics', 'Electronic devices and accessories'),
('Clothing', 'clothing', 'Apparel and fashion'),
('Books', 'books', 'Books and publications');

-- Insert sample products
INSERT INTO products (category_id, sku, name, slug, description, price, stock_quantity) VALUES
(1, 'ELEC-001', 'Wireless Headphones', 'wireless-headphones', 'Premium wireless headphones with noise cancellation', 199.99, 50),
(1, 'ELEC-002', 'Smart Watch', 'smart-watch', 'Fitness tracking smart watch', 299.99, 30),
(2, 'CLTH-001', 'Cotton T-Shirt', 'cotton-t-shirt', 'Comfortable cotton t-shirt', 29.99, 100);

-- ============================================================================
-- Permissions
-- ============================================================================

-- Create application user (read/write)
CREATE USER app_user WITH PASSWORD 'secure_password_here';
GRANT CONNECT ON DATABASE ecommerce TO app_user;
GRANT USAGE ON SCHEMA public TO app_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app_user;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO app_user;

-- Create read-only user (for analytics)
CREATE USER analytics_user WITH PASSWORD 'secure_password_here';
GRANT CONNECT ON DATABASE ecommerce TO analytics_user;
GRANT USAGE ON SCHEMA public TO analytics_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO analytics_user;

-- ============================================================================
-- Maintenance
-- ============================================================================

-- Vacuum schedule (add to cron)
-- 0 2 * * * psql -U postgres -d ecommerce -c "VACUUM ANALYZE;"

-- Reindex schedule (monthly)
-- 0 3 1 * * psql -U postgres -d ecommerce -c "REINDEX DATABASE ecommerce;"
```

## Backup & Recovery Strategies

```markdown
# Backup Strategy

## Full Backups (Daily)
```bash
#!/bin/bash
# Daily full backup script

BACKUP_DIR="/backups/postgres"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="production"

# Create backup
pg_dump -Fc -U postgres $DB_NAME > "$BACKUP_DIR/full_${DB_NAME}_${DATE}.dump"

# Compress
gzip "$BACKUP_DIR/full_${DB_NAME}_${DATE}.dump"

# Upload to S3
aws s3 cp "$BACKUP_DIR/full_${DB_NAME}_${DATE}.dump.gz" \
  s3://my-backups/postgres/$DB_NAME/$(date +%Y/%m/)/

# Delete local backups older than 7 days
find $BACKUP_DIR -name "*.dump.gz" -mtime +7 -delete

# Verify backup
gunzip -c "$BACKUP_DIR/full_${DB_NAME}_${DATE}.dump.gz" | pg_restore --list > /dev/null
if [ $? -eq 0 ]; then
  echo "Backup successful: $DATE"
else
  echo "Backup verification failed: $DATE" | mail -s "Backup Failed" admin@example.com
fi
```

## Point-in-Time Recovery (WAL Archiving)
```sql
-- Enable WAL archiving
ALTER SYSTEM SET wal_level = 'replica';
ALTER SYSTEM SET archive_mode = 'on';
ALTER SYSTEM SET archive_command = 'test ! -f /mnt/wal_archive/%f && cp %p /mnt/wal_archive/%f';
SELECT pg_reload_conf();
```

## Restore Procedure
```bash
# Restore from full backup
pg_restore -U postgres -d production -Fc /backups/postgres/full_production_20241030.dump

# Point-in-time recovery
# 1. Restore base backup
# 2. Apply WAL files up to specific timestamp
```
```

## Output Format

All database analysis reports include:

### Performance Analysis
- Current metrics and benchmarks
- Root cause identification
- Specific optimization recommendations
- Implementation SQL scripts
- Performance before/after comparison
- Cost analysis

### Schema Design
- Complete DDL scripts
- Index strategy
- Constraint definitions
- Trigger implementations
- View definitions
- Permission setup

### Implementation Plans
- Phased rollout strategy
- Risk assessment
- Rollback procedures
- Monitoring queries
- Validation steps

### Reports
All reports saved to:
```
plans/reports/YYMMDD-from-database-admin-to-team-name-topic-report.md
```

## Success Metrics

A successful database optimization achieves:

- ✅ Query performance: >80% improvement
- ✅ Connection usage: <70% capacity
- ✅ Cache hit ratio: >95%
- ✅ Index usage: All indexes scanned >100 times/day
- ✅ Bloat: <15% table bloat
- ✅ Backup success: 100% successful backups
- ✅ Cost reduction: >30% infrastructure savings

## Workflow Integration

### With Debugger Agent
```bash
# Database admin analyzes slow queries
"Optimize slow order queries"

# Debugger validates fixes in application
"Test query performance after optimization"
```

### With Planner Agent
```bash
# Planner defines feature requirements
/plan [add order history feature]

# Database admin designs schema
"Design schema for order history with 10M+ orders"
```

### With Project Manager
```bash
# Project manager identifies performance issues
"Users complaining about slow dashboard"

# Database admin investigates and fixes
"Analyze dashboard query performance"
```

## Next Steps

- [Debugger](/docs/agents/debugger) - Debug application issues
- [Planner](/docs/agents/planner) - Plan database migrations
- [Tester](/docs/agents/tester) - Validate database changes

---

**Key Takeaway**: The database admin agent ensures optimal database performance, reliability, and scalability through systematic analysis, query optimization, schema design, and proactive monitoring across all major database systems.
