---
title: postgresql-psql
description: Tài liệu hướng dẫn sử dụng kỹ năng postgresql-psql
section: engineer
kit: engineer
category: skills/backend
order: 16
published: true
lang: vi
---

# Kỹ năng postgresql-psql

Quản trị, tối ưu hóa và các phương pháp hay nhất cho cơ sở dữ liệu PostgreSQL. Tối ưu hóa truy vấn, thiết kế schema, điều chỉnh hiệu suất.

## Khi nào nên sử dụng

Sử dụng postgresql-psql khi làm việc với:
- Tối ưu hóa truy vấn
- Thiết kế schema
- Các vấn đề về hiệu suất
- Di cư cơ sở dữ liệu (Database migrations)
- Sao lưu/Khôi phục (Backup/restore)
- Thiết lập bản sao (Replication)
- Chiến lược lập chỉ mục (Index strategies)

## Bắt đầu nhanh

### Cách gọi kỹ năng

```
"Sử dụng postgresql-psql để tối ưu hóa các truy vấn chậm trong ứng dụng của tôi:
- Phân tích kế hoạch truy vấn (query plans)
- Thêm các chỉ mục phù hợp
- Viết lại các truy vấn không hiệu quả"
```

### Kết quả nhận được

Kỹ năng này sẽ giúp bạn:
1. Phân tích hiệu suất
2. Thiết kế schema tối ưu
3. Tạo các chỉ mục (indexes)
4. Tối ưu hóa truy vấn
5. Thiết lập bản sao (replication)
6. Cấu hình sao lưu
7. Theo dõi sức khỏe hệ thống

## Các trường hợp sử dụng phổ biến

### Tối ưu hóa truy vấn

```
"Sử dụng postgresql-psql để tối ưu hóa truy vấn chậm này:
- Phân tích kế hoạch thực thi
- Xác định điểm nghẽn
- Thêm chỉ mục
- Viết lại truy vấn
- Xác minh sự cải thiện"
```

### Thiết kế Schema

```
"Sử dụng postgresql-psql để thiết kế schema cho:
- Xác thực người dùng
- Đa tổ chức (Multi-tenancy)
- Chuẩn hóa dữ liệu phù hợp
- Khóa ngoại (Foreign keys)
- Các ràng buộc (Constraints)"
```

### Điều chỉnh hiệu suất

```
"Sử dụng postgresql-psql để cải thiện hiệu suất cơ sở dữ liệu:
- Phân tích các truy vấn chậm
- Thêm các chỉ mục còn thiếu
- Cập nhật số liệu thống kê
- Điều chỉnh cấu hình
- Theo dõi các chỉ số (metrics)"
```

### Lập kế hoạch Di cư (Migration)

```
"Sử dụng postgresql-psql để lập kế hoạch di cư:
- Tạo các script di cư
- Xử lý chuyển đổi dữ liệu
- Chiến lược không gây gián đoạn (Zero-downtime)
- Kế hoạch hoàn tác (Rollback)"
```

## Các tính năng chính

### Phân tích truy vấn

Công cụ cho:
- EXPLAIN ANALYZE
- Kế hoạch thực thi
- Ước tính chi phí
- Xác định điểm nghẽn
- Sử dụng chỉ mục

### Quản lý chỉ mục (Index)

Chiến lược cho:
- Chỉ mục B-tree
- Chỉ mục một phần (Partial indexes)
- Chỉ mục biểu thức (Expression indexes)
- Chỉ mục đa cột
- Bảo trì chỉ mục

### Thiết kế Schema

Các phương pháp hay nhất cho:
- Cấu trúc bảng
- Kiểu dữ liệu
- Ràng buộc
- Mối quan hệ
- Chuẩn hóa

### Theo dõi hiệu suất

Theo dõi:
- Hiệu suất truy vấn
- Các nhóm kết nối (Connection pools)
- Tranh chấp khóa (Lock contention)
- Tỷ lệ khớp bộ nhớ đệm (Cache hit rates)
- I/O đĩa

## Ví dụ triển khai

### Cơ sở dữ liệu Thương mại điện tử

```
"Sử dụng postgresql-psql để thiết kế schema thương mại điện tử:
- Sản phẩm và danh mục
- Đơn hàng và các mặt hàng
- Tài khoản người dùng
- Theo dõi kho hàng
- Hồ sơ thanh toán
- Lập chỉ mục phù hợp"
```

### SaaS đa tổ chức (Multi-Tenant)

```
"Sử dụng postgresql-psql cho cơ sở dữ liệu đa tổ chức:
- Bảo mật cấp hàng (Row-level security)
- Cách ly tổ chức
- Schema dùng chung
- Tối ưu hóa hiệu suất
- Phân vùng dữ liệu (Data partitioning)"
```

### Cơ sở dữ liệu phân tích (Analytics)

```
"Sử dụng postgresql-psql cho phân tích:
- Dữ liệu chuỗi thời gian (Time-series)
- Các bảng tổng hợp (Aggregation tables)
- Materialized views
- Tối ưu hóa truy vấn
- Chiến lược phân vùng"
```

## Phương pháp hay nhất

### Quản lý kết nối

```
"Sử dụng postgresql-psql để thiết lập:
- Nhóm kết nối (Connection pooling)
- Điều chỉnh kích thước nhóm
- Giới hạn kết nối
- Cấu hình thời gian chờ (Timeout)"
```

### Chiến lược sao lưu

```
"Sử dụng postgresql-psql để sao lưu:
- pg_dump cho sao lưu logic
- pg_basebackup cho sao lưu vật lý
- Khôi phục tại một thời điểm (Point-in-time recovery)
- Xác minh bản sao lưu
- Kiểm tra khôi phục"
```

### Bảo mật

```
"Sử dụng postgresql-psql để bảo mật cơ sở dữ liệu:
- Truy cập dựa trên vai trò (RBAC)
- Bảo mật cấp hàng (RLS)
- Kết nối SSL
- Chính sách mật khẩu
- Nhật ký kiểm tra (Audit logging)"
```

### Theo dõi (Monitoring)

```
"Sử dụng postgresql-psql để theo dõi:
- Hiệu suất truy vấn (pg_stat_statements)
- Thống kê bảng
- Sử dụng chỉ mục
- Khóa và tắc nghẽn
- Độ trễ bản sao (Replication lag)"
```

## Tính năng nâng cao

### Phân vùng (Partitioning)

```
"Sử dụng postgresql-psql để triển khai phân vùng:
- Phân vùng theo phạm vi (Range partitioning)
- Phân vùng theo danh sách (List partitioning)
- Phân vùng theo băm (Hash partitioning)
- Bảo trì phân vùng
- Tối ưu hóa truy vấn"
```

### Bản sao (Replication)

```
"Sử dụng postgresql-psql để thiết lập bản sao:
- Bản sao luồng (Streaming replication)
- Bản sao logic (Logical replication)
- Cấu hình dự phòng (Failover)
- Theo dõi độ trễ
- Thăng cấp bản sao (Promoting replicas)"
```

### Tìm kiếm toàn văn (Full-Text Search)

```
"Sử dụng postgresql-psql cho tìm kiếm toàn văn:
- Tạo các cột tsvector
- Chỉ mục GIN
- Truy vấn tìm kiếm
- Xếp hạng kết quả
- Hỗ trợ ngôn ngữ"
```

### JSON/JSONB

```
"Sử dụng postgresql-psql với JSON:
- Kiểu dữ liệu JSONB
- Các toán tử JSON
- Chỉ mục GIN trên JSONB
- Tối ưu hóa truy vấn
- Schema linh hoạt"
```

## Tối ưu hóa truy vấn

### Phân tích truy vấn chậm

```
"Sử dụng postgresql-psql để gỡ lỗi truy vấn chậm:
1. Chạy EXPLAIN ANALYZE
2. Xác định các lần quét tuần tự (sequential scans)
3. Kiểm tra các chỉ mục còn thiếu
4. Xem xét thứ tự kết hợp (join order)
5. Tối ưu hóa các truy vấn con"
```

### Chiến lược chỉ mục

```
"Sử dụng postgresql-psql để thêm chỉ mục:
- Các cột trong mệnh đề WHERE
- Các cột tham gia JOIN
- Các cột trong ORDER BY
- Chỉ mục một phần cho các truy vấn có bộ lọc
- Chỉ mục đa cột cho các bộ lọc kết hợp"
```

### Viết lại truy vấn

```
"Sử dụng postgresql-psql để viết lại:
- Thay thế truy vấn con bằng phép kết hợp (joins)
- Sử dụng CTE để tăng khả năng đọc
- Tránh sử dụng SELECT *
- Giới hạn tập kết quả
- Sử dụng kiểu dữ liệu phù hợp"
```

## Các mẫu Schema

### Một-Nhiều (One-to-Many)

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

### Nhiều-Nhiều (Many-to-Many)

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

### Xóa mềm (Soft Delete)

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  deleted_at TIMESTAMPTZ DEFAULT NULL
);

CREATE INDEX idx_products_active ON products(id)
  WHERE deleted_at IS NULL;
```

## Các truy vấn thông dụng

### Tìm các truy vấn chậm

```sql
SELECT query, mean_exec_time, calls
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;
```

### Kiểm tra sử dụng chỉ mục

```sql
SELECT schemaname, tablename, indexname, idx_scan
FROM pg_stat_user_indexes
WHERE idx_scan = 0
ORDER BY schemaname, tablename;
```

### Kích thước các bảng

```sql
SELECT schemaname, tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

### Theo dõi khóa (Lock)

```sql
SELECT pid, usename, pg_blocking_pids(pid) as blocked_by,
  query
FROM pg_stat_activity
WHERE cardinality(pg_blocking_pids(pid)) > 0;
```

## Xử lý sự cố

### Vấn đề kết nối

**Quá nhiều kết nối:**
```
"Sử dụng postgresql-psql để khắc phục:
- Tăng max_connections
- Triển khai nhóm kết nối (connection pooling)
- Tìm rò rỉ kết nối
- Tắt các kết nối rảnh (idle)"
```

### Vấn đề hiệu suất

**Truy vấn chậm:**
```
"Sử dụng postgresql-psql để chẩn đoán:
- Kiểm tra pg_stat_statements
- Xem xét các kế hoạch EXPLAIN
- Cập nhật số liệu thống kê
- Thêm các chỉ mục còn thiếu"
```

### Không gian đĩa

**Hết dung lượng:**
```
"Sử dụng postgresql-psql để quản lý:
- Tìm các bảng lớn
- Lưu trữ dữ liệu cũ
- Hút bụi (Vacuum) các bảng bị phình to
- Theo dõi sự tăng trưởng"
```

## Các ví dụ nhanh

**Tối ưu hóa đơn giản:**
```
"Sử dụng postgresql-psql để thêm chỉ mục cho cột users.email"
```

**Thiết kế Schema:**
```
"Sử dụng postgresql-psql để thiết kế schema cho blog với:
- Người dùng, bài đăng, bình luận
- Thẻ (nhiều-nhiều)
- Chỉ mục phù hợp
- Khóa ngoại"
```

**Thiết lập sản xuất:**
```
"Sử dụng postgresql-psql cho cơ sở dữ liệu sản xuất:
- Thiết lập bản sao
- Chiến lược sao lưu
- Theo dõi
- Điều chỉnh hiệu suất
- Tăng cường bảo mật"
```

## Cấu hình

### Điều chỉnh hiệu suất

```
"Sử dụng postgresql-psql để điều chỉnh cấu hình:
- shared_buffers (25% RAM)
- effective_cache_size (75% RAM)
- work_mem (cho mỗi thao tác)
- maintenance_work_mem (cho các tác vụ bảo trì)"
```

### Nhóm kết nối (Connection Pooling)

```
"Sử dụng postgresql-psql với pgBouncer:
- Chế độ giao dịch (Transaction mode)
- Tính toán kích thước nhóm
- Kết nối client tối đa
- Kiểm tra sức khỏe"
```

## Công cụ Di cư (Migration)

### Các công cụ hỗ trợ

- **Prisma** - Di cư an toàn kiểu dữ liệu
- **Drizzle** - TypeScript giống SQL
- **Knex** - Trình tạo truy vấn hỗ trợ di cư
- **TypeORM** - ORM hỗ trợ di cư
- **Flyway** - Di cư dựa trên phiên bản
- **Liquibase** - Di cư XML/SQL

### Ví dụ Di cư

```
"Sử dụng postgresql-psql để tạo di cư:
1. Thêm cột mới
2. Chuyển đổi dữ liệu hiện có
3. Thêm ràng buộc
4. Tạo chỉ mục
5. Cập nhật ứng dụng"
```

## Bước tiếp theo

- [Các mẫu thiết kế cơ sở dữ liệu](/docs/use-cases/)
- [Tích hợp Docker](/docs/engineer/skills/docker)
- [Ví dụ Backend](/docs/use-cases/)

---

**Tóm lại:** postgresql-psql xử lý mọi nhu cầu về PostgreSQL. Tối ưu hóa truy vấn, thiết kế schema, điều chỉnh hiệu suất - tất cả đều được hỗ trợ.
