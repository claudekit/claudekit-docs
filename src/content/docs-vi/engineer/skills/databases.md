---
title: "ck:databases"
description: Làm việc với MongoDB và PostgreSQL cho thiết kế schema, queries, indexing, tối ưu hóa hiệu năng và administration
section: engineer
kit: engineer
category: skills/backend
order: 50
published: true
lang: vi
---

# Databases

Hướng dẫn chuyên gia cho MongoDB (document-oriented) và PostgreSQL (relational) databases.

## Khi Nào Dùng

- Thiết kế database schemas và data models
- Viết queries (SQL hoặc MongoDB query language)
- Xây dựng aggregation pipelines hoặc complex joins
- Tối ưu hóa indexes và query performance
- Implement database migrations
- Thiết lập replication, sharding hoặc clustering
- Cấu hình backups và disaster recovery
- Quản lý database users và permissions
- Phân tích slow queries và performance issues

## Quick Start

### MongoDB

```bash
# Atlas (Cloud) - Được khuyến nghị
# 1. Đăng ký tại mongodb.com/atlas
# 2. Tạo M0 free cluster
# 3. Lấy connection string

# Kết nối
mongosh "mongodb+srv://cluster.mongodb.net/mydb"

# Các thao tác cơ bản
db.users.insertOne({ name: "Alice", age: 30 })
db.users.find({ age: { $gte: 18 } })
db.users.updateOne({ name: "Alice" }, { $set: { age: 31 } })
```

### PostgreSQL

```bash
# Cài đặt (Ubuntu/Debian)
sudo apt-get install postgresql postgresql-contrib
sudo systemctl start postgresql

# Kết nối
psql -U postgres -d mydb

# Các thao tác cơ bản
CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT, age INT);
INSERT INTO users (name, age) VALUES ('Alice', 30);
SELECT * FROM users WHERE age >= 18;
UPDATE users SET age = 31 WHERE name = 'Alice';
```

## Các Use Case Phổ Biến

### Thiết Kế Schema Cho E-commerce

"Design a MongoDB schema for an e-commerce platform with products, users, orders, and reviews"

"Create a PostgreSQL schema for an e-commerce platform with proper normalization and foreign keys"

### Tối Ưu Hóa Query

"Optimize this slow MongoDB aggregation pipeline that processes user analytics data"

"Analyze and improve this PostgreSQL query that joins 5 tables and takes 10 seconds"

### Database Migration

"Generate a migration to add a new 'status' field to all documents in MongoDB users collection"

"Create a PostgreSQL migration to add a composite index on orders(user_id, created_at)"

### Phân Tích Hiệu Năng

"Analyze MongoDB slow query log and recommend indexes for collections with high read latency"

"Use EXPLAIN ANALYZE to diagnose why this PostgreSQL query is doing sequential scans"

## Sự Khác Biệt Chính

| Khía Cạnh | MongoDB | PostgreSQL |
|-----------|---------|------------|
| **Data Model** | Document (JSON/BSON) | Relational (Tables/Rows) |
| **Schema** | Linh hoạt, dynamic | Nghiêm ngặt, predefined |
| **Query Language** | MongoDB Query Language | SQL |
| **Joins** | $lookup (giới hạn) | Native, optimized |
| **Transactions** | Multi-document (4.0+) | Native ACID |
| **Scaling** | Horizontal (sharding) | Vertical (primary) |
| **Phù Hợp Nhất** | Content management, IoT, real-time analytics | Hệ thống tài chính, e-commerce, ERP |

### Chọn MongoDB Khi

- Schema flexibility: Thay đổi cấu trúc thường xuyên, dữ liệu không đồng nhất
- Document-centric: Data model JSON/BSON tự nhiên
- Horizontal scaling: Cần shard qua nhiều servers
- High write throughput: IoT, logging, real-time analytics
- Dữ liệu lồng nhau/phân cấp: Embedded documents được ưu tiên

### Chọn PostgreSQL Khi

- Strong consistency: ACID transactions là quan trọng
- Complex relationships: Many-to-many joins, referential integrity
- SQL requirement: Chuyên môn team, reporting tools, BI systems
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

### So Sánh Các Thao Tác Phổ Biến

| Thao Tác | MongoDB | PostgreSQL |
|----------|---------|------------|
| **Insert** | `insertOne({ name: "Bob" })` | `INSERT INTO users (name) VALUES ('Bob')` |
| **Query** | `find({ age: { $gte: 18 } })` | `SELECT * FROM users WHERE age >= 18` |
| **Update** | `updateOne({}, { $set: { age: 25 } })` | `UPDATE users SET age = 25 WHERE ...` |
| **Delete** | `deleteOne({ name: "Bob" })` | `DELETE FROM users WHERE name = 'Bob'` |

## Pro Tips

- Chỉ định database context ngay từ đầu: "Using MongoDB" hoặc "Using PostgreSQL"
- Với queries phức tạp, cung cấp sample data structure
- Đề cập performance requirements: "Query cần chạy dưới 100ms"
- Bao gồm index strategy hiện tại khi tối ưu hóa
- **Không kích hoạt?** Nói: "Use databases skill to design a MongoDB schema for..."

## Các Skills Liên Quan

- [Backend Development](/vi/docs/engineer/skills/backend-development) - Full backend implementation
- [DevOps](/vi/docs/engineer/skills/devops) - Database deployment và management

---

## Điểm Mấu Chốt

Chọn MongoDB cho flexible schemas và horizontal scaling, PostgreSQL cho ACID transactions và complex relationships — cả hai đều hỗ trợ JSON, full-text search và geospatial queries.
