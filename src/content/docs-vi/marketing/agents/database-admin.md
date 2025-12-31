---
title: "Database Admin Agent"
description: "Quản lý cơ sở dữ liệu, tối ưu hóa truy vấn, phân tích hiệu suất và đảm bảo độ tin cậy của dữ liệu."
section: marketing
category: agents
order: 11
---

# Database Admin Agent

> **Chuyên gia cơ sở dữ liệu của bạn** - Giữ dữ liệu của bạn nhanh, tin cậy và an toàn

## Công Việc Của Agent Này

Dashboard chiến dịch của bạn tải chậm. Người dùng phàn nàn rằng thanh toán mất quá lâu. Bạn kiểm tra nhật ký và thấy các truy vấn cơ sở dữ liệu hết thời gian. Cơ sở dữ liệu hoạt động, nhưng nó không hoạt động tốt.

**Vấn đề**: Cơ sở dữ liệu rất phức tạp. Các truy vấn không được tối ưu hóa làm chậm toàn bộ ứng dụng của bạn. Chỉ số bị thiếu gây quét toàn bộ bảng. Schema tệ dẫn đến vấn đề về tính toàn vẹn dữ liệu. Hầu hết các nhà phát triển không phải là chuyên gia cơ sở dữ liệu, vì vậy hiệu suất giảm theo thời gian.

**Giải pháp**: Database Admin Agent quản lý tình trạng sức khỏe của cơ sở dữ liệu. Nó tối ưu hóa truy vấn, thiết kế các schema hiệu quả, tạo chỉ số thích hợp, triển khai các chiến lược sao lưu và chẩn đoán các vấn đề về hiệu suất. Cơ sở dữ liệu của bạn trở thành lợi thế cạnh tranh, không phải một nút thắt cổ chai.

## Bắt Đầu Nhanh

Chẩn đoán hiệu suất cơ sở dữ liệu:

```bash
# Kiểm tra tình trạng sức khỏe và hiệu suất cơ sở dữ liệu
/db "Analyze campaign database performance and optimize"
```

Bạn sẽ nhận được phân tích truy vấn, khuyến nghị chỉ số, cải tiến schema và các bước tối ưu hóa có thể hành động.

## Khả Năng

### Query Optimization
Làm cho các truy vấn chậm trở nên nhanh:
- Phân tích các kế hoạch thực thi truy vấn (EXPLAIN ANALYZE)
- Xác định quét toàn bộ bảng và truy vấn N+1
- Khuyến nghị bổ sung hoặc sửa đổi chỉ số
- Viết lại truy vấn để có hiệu suất tốt hơn
- Xác thực các thay đổi truy vấn không làm hỏng chức năng

### Schema Design & Optimization
Cấu trúc dữ liệu hiệu quả:
- Thiết kế các schema được chuẩn hóa tránh dư thừa
- Tối ưu hóa kiểu dữ liệu để lưu trữ và tốc độ
- Lập kế hoạch phân vùng bảng thích hợp cho các tập dữ liệu lớn
- Xác định khóa ngoài và ràng buộc
- Tạo các script di chuyển với kế hoạch rollback

### Index Strategy Development
Tăng tốc độ truy xuất dữ liệu:
- Phân tích các mẫu truy vấn để xác định các chỉ số cần thiết
- Tạo chỉ số B-tree, Hash, GiST phù hợp
- Loại bỏ các chỉ số không sử dụng hoặc dư thừa
- Theo dõi việc sử dụng chỉ số và hiệu quả
- Cân bằng hiệu suất đọc so với chi phí ghi

### Backup & Recovery Planning
Bảo vệ dữ liệu của bạn:
- Thiết kế lịch sao lưu toàn diện
- Kiểm tra thủ tục khôi phục thường xuyên
- Triển khai khôi phục thời điểm cụ thể
- Lập kế hoạch các chiến lược khôi phục thảm họa
- Tài liệu các quy trình sao lưu và khôi phục

### Performance Monitoring & Troubleshooting
Xác định và sửa các vấn đề:
- Theo dõi các chỉ số hiệu suất truy vấn
- Theo dõi việc sử dụng nhóm kết nối
- Xác định tranh chấp khóa và liên kết chết
- Phân tích việc sử dụng tài nguyên (CPU, bộ nhớ, I/O)
- Phát hiện các truy vấn chậm và cơ hội tối ưu hóa

### Database Security
Giữ dữ liệu an toàn:
- Triển khai các vai trò và quyền người dùng (ít nhất có đặc quyền)
- Định cấu hình mã hóa cho dữ liệu lúc nghỉ và trong quá trình truyền
- Thiết lập ghi nhật ký kiểm tra cho tuân thủ
- Đánh giá và đóng các lỗ hổng bảo mật
- Quản lý kiểm soát truy cập cơ sở dữ liệu

## Khi Nào Sử Dụng

Sử dụng Database Admin Agent khi bạn cần:
- Chẩn đoán hiệu suất truy vấn chậm
- Thiết kế schema cơ sở dữ liệu cho các tính năng mới
- Tối ưu hóa cấu trúc cơ sở dữ liệu hiện có
- Triển khai các chiến lược sao lưu và khôi phục
- Thiết lập giám sát và cảnh báo cơ sở dữ liệu
- Di chuyển dữ liệu hoặc thay đổi hệ thống cơ sở dữ liệu
- Khắc phục sự cố kết nối hoặc khóa
- Đảm bảo tuân thủ bảo mật cơ sở dữ liệu

## Ví Dụ Quy Trình Làm Việc

### Chẩn Đoán Hiệu Suất

```bash
/db "Diagnose why campaign dashboard loads slowly"
```

**Admin sẽ**:
1. Xác định các truy vấn chậm bằng cách sử dụng nhật ký cơ sở dữ liệu
2. Chạy EXPLAIN ANALYZE trên các truy vấn có vấn đề
3. Kiểm tra các chỉ số bị thiếu
4. Phân tích thống kê bảng và trạng thái vacuum
5. Đánh giá cấu hình nhóm kết nối
6. Cung cấp khuyến nghị tối ưu hóa

**Bạn sẽ nhận được**:
```markdown
## Database Performance Analysis

### Executive Summary
Dashboard chiến dịch chậm do chỉ số bị thiếu trên `campaigns.created_at`.
Thêm chỉ số composite sẽ giảm thời gian truy vấn từ 2,3 giây xuống 45ms (cải thiện 98%).

### Slow Queries Identified
Query: `SELECT * FROM campaigns WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20`
- Thời gian thực thi hiện tại: 2.340ms
- Hàng được quét: 1,2 triệu (quét toàn bộ bảng)
- Cải thiện dự kiến: ~98% nhanh hơn với chỉ số

### Missing Indexes
Khuyến nghị 1: Thêm chỉ số composite
\`\`\`sql
CREATE INDEX CONCURRENTLY idx_campaigns_user_created
  ON campaigns(user_id, created_at DESC);
\`\`\`
Tác động dự kiến: Tăng tốc truy vấn 98%, thời gian truy vấn 15ms

Khuyến nghị 2: Thêm chỉ số bao gồm cho dashboard
\`\`\`sql
CREATE INDEX CONCURRENTLY idx_campaigns_dashboard
  ON campaigns(user_id, created_at DESC)
  INCLUDE (name, status, budget);
\`\`\`
Tác động dự kiến: Loại bỏ tra cứu bảng, ~50ms tổng thời gian truy vấn

### Database Statistics
- Kích thước bảng: campaigns (1,2 triệu hàng, 450MB)
- Vacuum cuối cùng: 3 ngày trước ✅
- Sử dụng chỉ số: 65% (nên là 80%+) ⚠️
- Nhóm kết nối: 15/20 được sử dụng ✅

### Implementation Plan
Giai đoạn 1 (Ngay lập tức):
1. Tạo chỉ số idx_campaigns_user_created (15 phút, không có thời gian chết)
2. Chạy ANALYZE bảng campaigns
3. Theo dõi hiệu suất truy vấn trong 24 giờ

Giai đoạn 2 (Sprint tiếp theo):
1. Thêm chỉ số bao gồm để tối ưu hóa hoàn toàn
2. Đánh giá và xóa các chỉ số không sử dụng (5 được tìm thấy)
3. Thiết lập giám sát hiệu suất truy vấn

### Risks & Mitigation
- Tạo chỉ số khóa bảng → Sử dụng cờ CONCURRENTLY (không có thời gian chết)
- Tăng lưu trữ → Tối thiểu (est. +25MB mỗi chỉ số)
- Tác động hiệu suất ghi → Không đáng kể cho khối lượng công việc này

### Expected Results
- Thời gian tải dashboard: 2,3 giây → 0,1 giây
- Sử dụng CPU cơ sở dữ liệu: -40%
- Trải nghiệm người dùng: Cải thiện đáng kể
```

### Schema Design for New Feature

```bash
/db "Design database schema for email campaign segmentation"
```

**Bạn sẽ nhận được**:
- Thiết kế schema hoàn chỉnh với các bảng và mối quan hệ
- Script di chuyển (lên và xuống)
- Khuyến nghị chỉ số
- Các truy vấn mẫu thể hiện cách sử dụng
- Cân nhắc hiệu suất

### Backup Strategy Implementation

```bash
/db "Implement production backup strategy for PostgreSQL"
```

**Admin sẽ**:
1. Thiết kế lịch sao lưu (đầy đủ + tăng dần)
2. Cấu hình sao lưu tự động
3. Kiểm tra quy trình khôi phục
4. Tài liệu các quy trình sao lưu và khôi phục
5. Thiết lập giám sát và cảnh báo

## Hệ Thống Cơ Sở Dữ Liệu Được Hỗ Trợ

Admin có chuyên môn trong:

**Relational Databases**:
- PostgreSQL (chính)
- MySQL/MariaDB
- SQLite

**NoSQL Databases**:
- MongoDB
- Redis (caching, sessions)

**Cloud Databases**:
- Amazon RDS
- Google Cloud SQL
- Azure Database

## Công Cụ & Lệnh Cơ Sở Dữ Liệu

Admin sử dụng các công cụ này:

**PostgreSQL**:
```bash
# Kết nối với cơ sở dữ liệu
psql -h localhost -U username -d database

# Phân tích hiệu suất truy vấn
EXPLAIN ANALYZE SELECT...;

# Kiểm tra thống kê bảng
SELECT * FROM pg_stat_user_tables WHERE relname = 'campaigns';

# Xem các truy vấn hoạt động
SELECT * FROM pg_stat_activity;
```

**Connection strings from**: `.env`, `.env.local`, `.env.production`

## Tiêu Chuẩn Chất Lượng

Admin đảm bảo:
- Tính toàn vẹn dữ liệu thông qua các ràng buộc thích hợp
- Các mục tiêu hiệu suất được đáp ứng (truy vấn <100ms)
- Sao lưu thường xuyên được kiểm tra và xác minh
- Bảo mật tuân theo nguyên tắc ít nhất có đặc quyền
- Schemas tuân theo các phương pháp chuẩn hóa tốt nhất
- Migrations có các thủ tục rollback được kiểm tra

## Related Agents

- [Fullstack Developer](/docs/marketing/agents/fullstack-developer) - Triển khai các thay đổi schema
- [Tester](/docs/marketing/agents/tester) - Kiểm tra di chuyển cơ sở dữ liệu
- [Project Manager](/docs/marketing/agents/project-manager) - Theo dõi cải tiến cơ sở dữ liệu

## Related Commands

- [`/db`](/docs/marketing/commands/db) - Quản lý và tối ưu hóa cơ sở dữ liệu
- [`/migrate`](/docs/marketing/commands/migrate) - Hỗ trợ di chuyển cơ sở dữ liệu

## Mẹo

**Index Strategically**: Không lập chỉ số cho mọi thứ. Phân tích các mẫu truy vấn trước tiên. Chỉ số tăng tốc đọc nhưng làm chậm ghi.

**Test Migrations**: Luôn kiểm tra script di chuyển trên một bản sao dữ liệu sản xuất trước khi chạy trong sản xuất.

**Monitor Query Performance**: Thiết lập ghi nhật ký truy vấn cho các truy vấn >100ms. Xem xét hàng tuần để bắt độ giảm hiệu suất sớm.

**Use EXPLAIN ANALYZE**: Trước khi tối ưu hóa, chạy EXPLAIN ANALYZE để hiểu hiệu suất truy vấn thực tế. Trực giác thường sai.

**Regular Vacuuming**: PostgreSQL cần VACUUM thường xuyên để lấy lại không gian và cập nhật thống kê. Thiết lập bảo trì vacuum tự động.

**Connection Pooling**: Sử dụng kết nối pooling (PgBouncer, pgpool) để xử lý các kết nối đồng thời một cách hiệu quả.

Database Admin Agent biến cơ sở dữ liệu của bạn thành một sức mạnh. Truy vấn nhanh, dữ liệu tin cậy, không có thời gian chết—xử lý được.
