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

PostgreSQL database administration, optimization, and best practices. Query optimization, schema design, performance tuning.

## When to Use

Use postgresql-psql when working with:
- Query optimization
- Schema design
- Performance issues
- Database migrations
- Backup/restore
- Replication setup
- Index strategies

## Quick Start

### Invoke the Skill

```
"Use postgresql-psql to optimize slow queries in my app:
- Analyze query plans
- Add proper indexes
- Rewrite inefficient queries"
```

### What You Get

The skill will help you:
1. Analyze performance
2. Design optimal schema
3. Create indexes
4. Optimize queries
5. Set up replication
6. Configure backups
7. Monitor health

## Common Use Cases

### Query Optimization

```
"Use postgresql-psql to optimize this slow query:
- Analyze execution plan
- Identify bottlenecks
- Add indexes
- Rewrite query
- Verify improvement"
```

### Schema Design

```
"Use postgresql-psql to design schema for:
- User authentication
- Multi-tenancy
- Proper normalization
- Foreign keys
- Constraints"
```

### Performance Tuning

```
"Use postgresql-psql to improve database performance:
- Analyze slow queries
- Add missing indexes
- Update statistics
- Tune configuration
- Monitor metrics"
```

### Migration Planning

```
"Use postgresql-psql to plan migration:
- Create migration scripts
- Handle data transformation
- Zero-downtime strategy
- Rollback plan"
```

## Key Features

### Query Analysis

Tools for:
- EXPLAIN ANALYZE
- Execution plans
- Cost estimates
- Bottleneck identification
- Index usage

### Index Management

Strategies for:
- B-tree indexes
- Partial indexes
- Expression indexes
- Multi-column indexes
- Index maintenance

### Schema Design

Best practices for:
- Table structure
- Data types
- Constraints
- Relationships
- Normalization

### Performance Monitoring

Track:
- Query performance
- Connection pools
- Lock contention
- Cache hit rates
- Disk I/O

## Example Implementations

### E-commerce Database

```
"Use postgresql-psql to design e-commerce schema:
- Products and categories
- Orders and line items
- User accounts
- Inventory tracking
- Payment records
- Proper indexing"
```

### Multi-Tenant SaaS

```
"Use postgresql-psql for multi-tenant database:
- Row-level security
- Tenant isolation
- Shared schema
- Performance optimization
- Data partitioning"
```

### Analytics Database

```
"Use postgresql-psql for analytics:
- Time-series data
- Aggregation tables
- Materialized views
- Query optimization
- Partitioning strategy"
```

## Best Practices

### Connection Management

```
"Use postgresql-psql to set up:
- Connection pooling
- Pool size tuning
- Connection limits
- Timeout configuration"
```

### Backup Strategy

```
"Use postgresql-psql for backups:
- pg_dump for logical
- pg_basebackup for physical
- Point-in-time recovery
- Backup verification
- Restore testing"
```

### Security

```
"Use postgresql-psql to secure database:
- Role-based access
- Row-level security
- SSL connections
- Password policies
- Audit logging"
```

### Monitoring

```
"Use postgresql-psql to monitor:
- Query performance (pg_stat_statements)
- Table statistics
- Index usage
- Locks and blocks
- Replication lag"
```

## Advanced Features

### Partitioning

```
"Use postgresql-psql to implement partitioning:
- Range partitioning
- List partitioning
- Hash partitioning
- Partition maintenance
- Query optimization"
```

### Replication

```
"Use postgresql-psql to set up replication:
- Streaming replication
- Logical replication
- Failover configuration
- Monitoring lag
- Promoting replicas"
```

### Full-Text Search

```
"Use postgresql-psql for full-text search:
- Create tsvector columns
- GIN indexes
- Search queries
- Ranking results
- Language support"
```

### JSON/JSONB

```
"Use postgresql-psql with JSON:
- JSONB data type
- JSON operators
- GIN indexes on JSONB
- Query optimization
- Schema flexibility"
```

## Query Optimization

### Analyze Slow Queries

```
"Use postgresql-psql to debug slow query:
1. Run EXPLAIN ANALYZE
2. Identify sequential scans
3. Check missing indexes
4. Review join order
5. Optimize subqueries"
```

### Index Strategies

```
"Use postgresql-psql to add indexes:
- WHERE clause columns
- JOIN columns
- ORDER BY columns
- Partial indexes for filtered queries
- Multi-column for compound filters"
```

### Query Rewriting

```
"Use postgresql-psql to rewrite:
- Replace subqueries with joins
- Use CTEs for readability
- Avoid SELECT *
- Limit result sets
- Use appropriate data types"
```

## Schema Patterns

### One-to-Many

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_posts_user_id ON posts(user_id);
```

### Many-to-Many

```sql
CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE post_tags (
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

CREATE INDEX idx_post_tags_tag_id ON post_tags(tag_id);
```

### Soft Delete

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  deleted_at TIMESTAMPTZ DEFAULT NULL
);

CREATE INDEX idx_products_active ON products(id)
  WHERE deleted_at IS NULL;
```

## Common Queries

### Find Slow Queries

```sql
SELECT query, mean_exec_time, calls
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;
```

### Check Index Usage

```sql
SELECT schemaname, tablename, indexname, idx_scan
FROM pg_stat_user_indexes
WHERE idx_scan = 0
ORDER BY schemaname, tablename;
```

### Table Sizes

```sql
SELECT schemaname, tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

### Lock Monitoring

```sql
SELECT pid, usename, pg_blocking_pids(pid) as blocked_by,
  query
FROM pg_stat_activity
WHERE cardinality(pg_blocking_pids(pid)) > 0;
```

## Troubleshooting

### Connection Issues

**Too many connections:**
```
"Use postgresql-psql to fix:
- Increase max_connections
- Implement connection pooling
- Find connection leaks
- Kill idle connections"
```

### Performance Problems

**Slow queries:**
```
"Use postgresql-psql to diagnose:
- Check pg_stat_statements
- Review EXPLAIN plans
- Update statistics
- Add missing indexes"
```

### Disk Space

**Running out of space:**
```
"Use postgresql-psql to manage:
- Find large tables
- Archive old data
- Vacuum bloated tables
- Monitor growth"
```

## Quick Examples

**Simple Optimization:**
```
"Use postgresql-psql to add index on users.email column"
```

**Schema Design:**
```
"Use postgresql-psql to design schema for blog with:
- Users, posts, comments
- Tags (many-to-many)
- Proper indexes
- Foreign keys"
```

**Production Setup:**
```
"Use postgresql-psql for production database:
- Replication setup
- Backup strategy
- Monitoring
- Performance tuning
- Security hardening"
```

## Configuration

### Performance Tuning

```
"Use postgresql-psql to tune config:
- shared_buffers (25% of RAM)
- effective_cache_size (75% of RAM)
- work_mem (per operation)
- maintenance_work_mem (maintenance tasks)"
```

### Connection Pooling

```
"Use postgresql-psql with pgBouncer:
- Transaction mode
- Pool size calculation
- Max client connections
- Health checks"
```

## Migration Tools

### Supported Tools

- **Prisma** - Type-safe migrations
- **Drizzle** - SQL-like TypeScript
- **Knex** - Query builder with migrations
- **TypeORM** - ORM with migrations
- **Flyway** - Version-based migrations
- **Liquibase** - XML/SQL migrations

### Migration Example

```
"Use postgresql-psql to create migration:
1. Add new column
2. Migrate existing data
3. Add constraints
4. Create indexes
5. Update application"
```

## Next Steps

- [Database Design Patterns](/docs/use-cases/)
- [Docker Integration](/docs/skills/docker)
- [Backend Examples](/docs/use-cases/)

---

**Bottom Line:** postgresql-psql handles all PostgreSQL needs. Query optimization, schema design, performance tuning - all covered.
