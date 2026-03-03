---
title: "ckm:databases"
description: "MongoDB and PostgreSQL database design, queries, schema optimization, and data modeling for marketing applications."
section: marketing
category: skills
order: 70
---

# `ckm:databases`

> Design efficient schemas, write optimized queries, and manage data at scale for marketing tools and analytics pipelines.

## What This Skill Does

**The Challenge**: Marketing applications have complex data needs — event tracking, lead management, campaign metrics, user attribution — that require careful schema design and query optimization to stay fast at scale.

**The Solution**: Databases skill provides schema design patterns, query optimization techniques, indexing strategies, and migration workflows for PostgreSQL and MongoDB. Includes marketing-specific data models for leads, events, campaigns, and analytics.

## Activation

**Implicit**: Activates when user requests schema design, database queries, data modeling, or performance optimization.

**Explicit**: Activate via prompt:
```
Activate databases skill to [design schema/optimize query/debug] for [describe task]
```

## Capabilities

### 1. Marketing Data Models
Pre-designed schemas for common marketing entities.

**Lead management (PostgreSQL)**:
```sql
CREATE TABLE leads (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email       TEXT NOT NULL UNIQUE,
  source      TEXT,         -- utm_source
  campaign    TEXT,         -- utm_campaign
  status      TEXT DEFAULT 'new',
  score       INTEGER DEFAULT 0,
  enriched_at TIMESTAMPTZ,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_source_campaign ON leads(source, campaign);
CREATE INDEX idx_leads_status ON leads(status) WHERE status != 'converted';
```

**Event tracking (MongoDB)**:
```javascript
{
  userId: ObjectId,
  event: "page_view",    // event name
  properties: {           // flexible event properties
    url: "/pricing",
    referrer: "google",
  },
  session: "sess_abc123",
  timestamp: ISODate("2026-03-03T10:00:00Z"),
}
```

### 2. Query Optimization
Diagnose and fix slow queries.

**PostgreSQL EXPLAIN ANALYZE**:
```sql
EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON)
SELECT * FROM leads WHERE source = 'google' AND status = 'qualified';
```

**Warning signs**: Seq Scan on large tables, Nested Loop with high row count, missing index.

### 3. Indexing Strategy
Choose the right index for query patterns.

| Query Pattern | Index Type |
|--------------|-----------|
| Equality filter | B-tree |
| Range filter (dates) | B-tree |
| Full-text search | GIN |
| JSON document fields | GIN with jsonb_ops |
| Geospatial | GiST |
| Partial (WHERE clause) | Partial index |

### 4. Migration Workflow
Safe schema changes with zero-downtime patterns.

**Migration checklist**:
1. Add column as nullable first
2. Backfill data asynchronously
3. Add NOT NULL constraint after backfill
4. Deploy code using new column
5. Drop old column in next release

## Prerequisites

- PostgreSQL 15+ or MongoDB 7+
- ORM: Prisma (TS), SQLAlchemy (Python), Mongoose (Node)
- Database connection string in `.env`

## Best Practices

**1. Index for your queries, not your schema**
Add indexes based on actual query patterns from slow query log.

**2. Use connection pooling**
Never open raw connections per request. Use PgBouncer (Postgres) or connection pool settings.

**3. Paginate large result sets**
Never fetch unbounded records. Use cursor-based pagination for sequential reads.

## Common Use Cases

### Use Case 1: Lead Attribution Schema
**Scenario**: Track UTM parameters through signup and purchases.

**Workflow**:
1. Add `utm_*` columns to `leads` table
2. Create `conversions` table with `lead_id` FK and revenue
3. Build attribution query joining leads to conversions on first touch
4. Add composite index on `(source, campaign, created_at)`

### Use Case 2: Campaign Performance Analytics
**Scenario**: Query aggregated metrics for marketing dashboard.

**Workflow**:
1. Design `events` table with partitioning by month
2. Create materialized view for daily aggregates
3. Schedule refresh with `REFRESH MATERIALIZED VIEW CONCURRENTLY`
4. Dashboard queries hit materialized view, not raw events

## Troubleshooting

**Issue**: Dashboard queries taking 5+ seconds
**Solution**: Run EXPLAIN ANALYZE. Add composite index matching filter and ORDER BY columns.

**Issue**: MongoDB queries slow despite indexes
**Solution**: Run `db.collection.find({...}).explain("executionStats")`. Check `totalDocsExamined` vs `totalDocsReturned` ratio. Should be close to 1:1.

## Related Skills

- [Backend Development](/docs/marketing/skills/backend-development) - API layer using these schemas
- [Analytics](/docs/marketing/skills/analytics) - Marketing metrics and reporting
- [Marketing Dashboard](/docs/marketing/skills/marketing-dashboard) - Dashboard powered by these queries
- [DevOps](/docs/marketing/skills/devops) - Database hosting and backups

## Related Commands

- `/ckm:brainstorm` - Design data models
- `/ckm:plan` - Plan database migration
