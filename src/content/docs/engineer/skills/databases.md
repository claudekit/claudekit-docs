---
title: Databases
description: Work with MongoDB and PostgreSQL for schema design, queries, indexing, performance optimization, and administration
section: engineer
kit: engineer
category: skills/backend
order: 4
published: true
---
# Databases

Expert guidance for MongoDB (document-oriented) and PostgreSQL (relational) databases.

## When to Use

- Designing database schemas and data models
- Writing queries (SQL or MongoDB query language)
- Building aggregation pipelines or complex joins
- Optimizing indexes and query performance
- Implementing database migrations
- Setting up replication, sharding, or clustering
- Configuring backups and disaster recovery
- Managing database users and permissions
- Analyzing slow queries and performance issues

## Quick Start

### MongoDB

```bash
# Atlas (Cloud) - Recommended
# 1. Sign up at mongodb.com/atlas
# 2. Create M0 free cluster
# 3. Get connection string

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

### Schema Design for E-commerce

"Design a MongoDB schema for an e-commerce platform with products, users, orders, and reviews"

"Create a PostgreSQL schema for an e-commerce platform with proper normalization and foreign keys"

### Query Optimization

"Optimize this slow MongoDB aggregation pipeline that processes user analytics data"

"Analyze and improve this PostgreSQL query that joins 5 tables and takes 10 seconds"

### Database Migration

"Generate a migration to add a new 'status' field to all documents in MongoDB users collection"

"Create a PostgreSQL migration to add a composite index on orders(user_id, created_at)"

### Performance Analysis

"Analyze MongoDB slow query log and recommend indexes for collections with high read latency"

"Use EXPLAIN ANALYZE to diagnose why this PostgreSQL query is doing sequential scans"

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

### Choose MongoDB When

- Schema flexibility: Frequent structure changes, heterogeneous data
- Document-centric: Natural JSON/BSON data model
- Horizontal scaling: Need to shard across multiple servers
- High write throughput: IoT, logging, real-time analytics
- Nested/hierarchical data: Embedded documents preferred

### Choose PostgreSQL When

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

- Specify database context upfront: "Using MongoDB" or "Using PostgreSQL"
- For complex queries, provide sample data structure
- Mention performance requirements: "Query needs to run under 100ms"
- Include current index strategy when optimizing
- **Not activating?** Say: "Use databases skill to design a MongoDB schema for..."

## Related Skills

- [Backend Development](/docs/engineer/skills/backend-development) - Full backend implementation
- [DevOps](/docs/engineer/skills/devops) - Database deployment and management

---

## Key Takeaway

 Choose MongoDB for flexible schemas and horizontal scaling, PostgreSQL for ACID transactions and complex relationships—both support JSON, full-text search, and geospatial queries.
