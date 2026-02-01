---
title: Databases
description: Làm việc với MongoDB và PostgreSQL cho schema design, queries, indexing, performance optimization và administration
section: engineer
kit: engineer
category: skills/backend
order: 4
published: true
lang: vi
---

# Databases

Hướng dẫn chuyên gia cho MongoDB (document-oriented) và PostgreSQL (relational) databases.

## Khi Nào Sử Dụng

- Thiết kế database schemas và data models
- Viết queries (SQL hoặc MongoDB query language)
- Build aggregation pipelines hoặc complex joins
- Tối ưu hóa indexes và query performance
- Implement database migrations
- Thiết lập replication, sharding hoặc clustering
- Cấu hình backups và disaster recovery
- Quản lý database users và permissions
- Phân tích slow queries và performance issues

## Quick Start

### MongoDB

```bash
# Atlas (Cloud) - Recommended
# 1. Đăng ký tại mongodb.com/atlas
# 2. Tạo M0 free cluster
# 3. Lấy connection string

# Connect
mongosh "mongodb+srv://cluster.mongodb.net/mydb"

# Basic operations
db.users.insertOne({ name: "Alice", age: 30 })
db.users.find({ age: { $gte: 18 } })
db.users.updateOne({ name: "Alice" }, { $set: { age: 31 } })
```

### PostgreSQL

```bash
# Install (Ubuntu/Debian)
sudo apt-get install postgresql postgresql-contrib
sudo systemctl start postgresql

# Connect
psql -U postgres -d mydb

# Basic operations
CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT, age INT);
INSERT INTO users (name, age) VALUES ('Alice', 30);
SELECT * FROM users WHERE age >= 18;
UPDATE users SET age = 31 WHERE name = 'Alice';
```

## Common Use Cases

### Schema Design cho E-commerce

"Thiết kế MongoDB schema cho e-commerce platform với products, users, orders và reviews"

"Tạo PostgreSQL schema cho e-commerce platform với proper normalization và foreign keys"

### Query Optimization

"Tối ưu hóa MongoDB aggregation pipeline chậm này xử lý user analytics data"

"Phân tích và cải thiện PostgreSQL query này join 5 tables và mất 10 giây"

### Database Migration

"Generate migration để thêm field 'status' mới vào tất cả documents trong MongoDB users collection"

"Tạo PostgreSQL migration để thêm composite index trên orders(user_id, created_at)"

### Performance Analysis

"Phân tích MongoDB slow query log và recommend indexes cho collections với high read latency"

"Dùng EXPLAIN ANALYZE để chẩn đoán tại sao PostgreSQL query này đang làm sequential scans"

## Key Differences

| Aspect | MongoDB | PostgreSQL |
|--------|---------|------------|
| **Data Model** | Document (JSON/BSON) | Relational (Tables/Rows) |
| **Schema** | Flexible, dynamic | Strict, predefined |
| **Query Language** | MongoDB Query Language | SQL |
| **Joins** | $lookup (limited) | Native, optimized |
| **Transactions** | Multi-document (4.0+) | Native ACID |
| **Scaling** | Horizontal (sharding) | Vertical (primary) |
| **Best For** | Content management, IoT, real-time analytics | Financial systems, e-commerce, ERP |

### Chọn MongoDB Khi

- Schema flexibility: Frequent structure changes, heterogeneous data
- Document-centric: Natural JSON/BSON data model
- Horizontal scaling: Cần shard qua nhiều servers
- High write throughput: IoT, logging, real-time analytics
- Nested/hierarchical data: Embedded documents preferred

### Chọn PostgreSQL Khi

- Strong consistency: ACID transactions critical
- Complex relationships: Many-to-many joins, referential integrity
- SQL requirement: Team expertise, reporting tools, BI systems
- Data integrity: Strict schema validation, constraints
- Complex queries: Window functions, CTEs, analytical workloads

## Quick Reference

### Indexing

```javascript
// MongoDB
db.users.createIndex({ email: 1 })
db.users.createIndex({ status: 1, createdAt: -1 })
```

```sql
-- PostgreSQL
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status_created ON users(status, created_at DESC);
```

### Common Operations Comparison

| Operation | MongoDB | PostgreSQL |
|-----------|---------|------------|
| **Insert** | `insertOne({ name: "Bob" })` | `INSERT INTO users (name) VALUES ('Bob')` |
| **Query** | `find({ age: { $gte: 18 } })` | `SELECT * FROM users WHERE age >= 18` |
| **Update** | `updateOne({}, { $set: { age: 25 } })` | `UPDATE users SET age = 25 WHERE ...` |
| **Delete** | `deleteOne({ name: "Bob" })` | `DELETE FROM users WHERE name = 'Bob'` |

## Pro Tips

- Chỉ định database context ngay từ đầu: "Using MongoDB" hoặc "Using PostgreSQL"
- Cho complex queries, cung cấp sample data structure
- Đề cập performance requirements: "Query cần chạy dưới 100ms"
- Bao gồm current index strategy khi optimizing
- **Không kích hoạt?** Nói: "Dùng databases skill để thiết kế MongoDB schema cho..."

## Các Skills Liên Quan

- [Backend Development](/vi/docs/engineer/skills/backend/backend-development) - Full backend implementation
- [DevOps](/vi/docs/engineer/skills/backend/devops) - Database deployment và management

---

## Key Takeaway

Chọn MongoDB cho flexible schemas và horizontal scaling, PostgreSQL cho ACID transactions và complex relationships—cả hai đều hỗ trợ JSON, full-text search và geospatial queries.
