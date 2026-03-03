---
lang: vi
title: "ckm:databases"
description: "Thiết kế database MongoDB và PostgreSQL, truy vấn, tối ưu"
section: marketing
kit: marketing
category: skills
order: 70
---

# `ckm:databases`

> Thiết kế, truy vấn và tối ưu databases cho marketing applications với PostgreSQL và MongoDB.

## Skill Này Làm Gì

**Thách thức**: Marketing databases thường xử lý lượng lớn events, leads và analytics data. Schema thiết kế kém dẫn đến queries chậm, khó scale và tốn chi phí infrastructure.

**Giải pháp**: Skill databases cung cấp schema patterns cho các use cases marketing phổ biến, query optimization techniques, indexing strategies và migration workflows cho PostgreSQL và MongoDB.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi cần thiết kế schema, viết queries hoặc tối ưu database performance.

**Tường minh**: Kích hoạt qua prompt:
```
Activate databases skill to [design/query/optimize] [database/table]
```

## Tính Năng

### 1. Schema Patterns Cho Marketing

**Lead Management (PostgreSQL)**:
```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  company VARCHAR(200),
  source VARCHAR(100),           -- utm_source
  medium VARCHAR(100),           -- utm_medium
  campaign VARCHAR(200),         -- utm_campaign
  lead_score INTEGER DEFAULT 0,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index cho queries phổ biến
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_source ON leads(source, medium, campaign);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created ON leads(created_at DESC);
```

**Campaign Analytics**:
```sql
CREATE TABLE campaign_events (
  id BIGSERIAL PRIMARY KEY,
  campaign_id UUID NOT NULL REFERENCES campaigns(id),
  lead_id UUID REFERENCES leads(id),
  event_type VARCHAR(50) NOT NULL,  -- 'impression', 'click', 'conversion'
  event_value DECIMAL(10,2),
  session_id UUID,
  occurred_at TIMESTAMPTZ DEFAULT NOW()
) PARTITION BY RANGE (occurred_at);

-- Time-based partitioning cho performance
CREATE TABLE campaign_events_2025_01 PARTITION OF campaign_events
  FOR VALUES FROM ('2025-01-01') TO ('2025-02-01');
```

**Email Marketing (MongoDB)**:
```javascript
// Email campaign document
{
  _id: ObjectId(),
  campaignId: "camp_abc123",
  subject: "Giới thiệu tính năng mới",
  recipients: 15000,
  sentAt: ISODate("2025-01-15"),
  stats: {
    delivered: 14850,
    opened: 4455,        // 30% open rate
    clicked: 892,        // 6% CTR
    unsubscribed: 15,
    bounced: 150
  },
  segments: ["active_users", "premium"],
  abTest: {
    variantA: { subject: "...", openRate: 0.29 },
    variantB: { subject: "...", openRate: 0.31 }
  }
}
```

### 2. Query Optimization

**Explain analyze cho PostgreSQL**:
```sql
EXPLAIN ANALYZE
SELECT l.email, l.source, COUNT(e.id) as events
FROM leads l
JOIN campaign_events e ON l.id = e.lead_id
WHERE e.occurred_at > NOW() - INTERVAL '30 days'
  AND e.event_type = 'conversion'
GROUP BY l.id
ORDER BY events DESC
LIMIT 100;
```

**Common optimization patterns**:
```sql
-- Tránh SELECT * trong production
-- Kém:
SELECT * FROM leads WHERE status = 'active';

-- Tốt:
SELECT id, email, first_name, lead_score
FROM leads
WHERE status = 'active'
LIMIT 1000;

-- Dùng EXISTS thay vì IN cho subqueries lớn
-- Kém:
SELECT * FROM leads WHERE id IN (SELECT lead_id FROM conversions);

-- Tốt:
SELECT l.* FROM leads l
WHERE EXISTS (SELECT 1 FROM conversions c WHERE c.lead_id = l.id);
```

### 3. Indexing Strategy

**Index patterns theo use case**:
```sql
-- Composite index cho filter + sort phổ biến
CREATE INDEX idx_leads_source_score
ON leads(source, lead_score DESC)
WHERE status = 'active';

-- Partial index cho filtered queries
CREATE INDEX idx_leads_hot
ON leads(created_at)
WHERE lead_score > 80 AND status = 'active';

-- Text search index
CREATE INDEX idx_leads_company_text
ON leads USING gin(to_tsvector('vietnamese', company));
```

### 4. Migration Workflows

**Drizzle ORM migrations**:
```typescript
// drizzle/0001_add_lead_scoring.ts
import { sql } from "drizzle-orm";

export async function up(db) {
  await db.execute(sql`
    ALTER TABLE leads ADD COLUMN lead_score INTEGER DEFAULT 0;
    CREATE INDEX idx_leads_score ON leads(lead_score);
    UPDATE leads SET lead_score = 50 WHERE status = 'active';
  `);
}

export async function down(db) {
  await db.execute(sql`
    DROP INDEX IF EXISTS idx_leads_score;
    ALTER TABLE leads DROP COLUMN lead_score;
  `);
}
```

## Điều Kiện Tiên Quyết

**PostgreSQL**:
- PostgreSQL 15+
- psql CLI hoặc GUI (TablePlus, DBeaver)
- ORM: Drizzle, Prisma, hoặc Kysely

**MongoDB**:
- MongoDB 7+
- mongosh CLI
- ODM: Mongoose hoặc Prisma

## Cấu Hình

**Connection pooling** (tối ưu cho production):
```typescript
// Drizzle + postgres.js
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL, {
  max: 20,                  // Pool size
  idle_timeout: 20,         // Đóng kết nối idle sau 20s
  max_lifetime: 1800,       // Tối đa 30 phút mỗi connection
  connect_timeout: 10,      // Timeout kết nối 10s
});
```

## Thực Hành Tốt Nhất

**1. Time-Series Data Partitioning**
Analytics events tăng rất nhanh. Partition theo tháng để queries nhanh hơn và archival dễ dàng hơn.

**2. Soft Delete Thay Vì Hard Delete**
Thêm `deleted_at TIMESTAMPTZ` thay vì xóa dữ liệu marketing. Compliance và audit trail.

**3. Denormalize Cho Analytics Read Paths**
Materialized views hoặc aggregate tables cho dashboard queries thay vì JOIN 5 bảng mỗi lần load.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Lead Scoring Database
**Tình huống**: Tính lead score real-time dựa trên hành vi.

**Quy trình**:
1. Thiết kế `lead_events` table với partitioning
2. Tạo aggregate function tính score
3. Trigger update `leads.lead_score` khi có event mới
4. Index để query top-scored leads nhanh

### Trường Hợp 2: Campaign Performance Analytics
**Tình huống**: Dashboard hiển thị performance của 100+ campaigns.

**Quy trình**:
1. Thiết kế `campaign_daily_stats` materialized view
2. Refresh nightly với cron job
3. Dashboard query chỉ read từ materialized view
4. Drill-down queries vào raw data khi cần

## Xử Lý Sự Cố

**Vấn đề**: Query dashboard chậm > 3 giây
**Giải pháp**: Chạy EXPLAIN ANALYZE, tìm sequential scans, thêm index phù hợp.

**Vấn đề**: Database size tăng 10GB/tháng
**Giải pháp**: Implement table partitioning và archival policy. Di chuyển data cũ sang cold storage.

## Skill Liên Quan

- [Backend Development](/vi/docs/marketing/skills/backend-development) - Tích hợp database với API
- [Analytics](/vi/docs/marketing/skills/analytics) - Analytics queries và reports
- [Debugging](/vi/docs/marketing/skills/debugging) - Debug slow queries

## Lệnh Liên Quan

- `/ckm:databases` - Thiết kế và tối ưu database
- `/ckm:backend-development` - Backend với database integration
- `/ckm:analyze` - Phân tích dữ liệu từ database
