---
title: "Database Admin Agent"
description: "Quản lý cơ sở dữ liệu, tối ưu hóa truy vấn, phân tích hiệu suất và đảm bảo độ tin cậy của dữ liệu."
section: marketing
category: agents
order: 11
lang: vi
---

# Database Admin Agent

> **Chuyên gia cơ sở dữ liệu của bạn** - Giữ dữ liệu của bạn nhanh, tin cậy và an toàn

## Đại lý này làm gì

Dashboard chiến dịch của bạn tải chậm. Người dùng phàn nàn rằng thanh toán mất quá lâu. Bạn kiểm tra nhật ký và thấy các truy vấn cơ sở dữ liệu hết thời gian. Cơ sở dữ liệu hoạt động, nhưng nó không hoạt động tốt.

**Vấn đề**: Cơ sở dữ liệu rất phức tạp. Các truy vấn không được tối ưu hóa làm chậm toàn bộ ứng dụng của bạn. Chỉ số bị thiếu gây quét toàn bộ bảng. Schema tệ dẫn đến vấn đề về tính toàn vẹn dữ liệu. Hầu hết các nhà phát triển không phải là chuyên gia cơ sở dữ liệu, vì vậy hiệu suất giảm theo thời gian.

**Giải pháp**: Database Admin Agent quản lý tình trạng sức khỏe của cơ sở dữ liệu. Nó tối ưu hóa truy vấn, thiết kế các schema hiệu quả, tạo chỉ số thích hợp, triển khai các chiến lược sao lưu và chẩn đoán các vấn đề về hiệu suất. Cơ sở dữ liệu của bạn trở thành lợi thế cạnh tranh, không phải một nút thắt cổ chai.

## Bắt đầu nhanh

Chẩn đoán hiệu suất cơ sở dữ liệu:

```bash
# Kiểm tra tình trạng sức khỏe và hiệu suất cơ sở dữ liệu
/db "Analyze campaign database performance and optimize"
```

Bạn sẽ nhận được phân tích truy vấn, khuyến nghị chỉ số, cải tiến schema và các bước tối ưu hóa có thể thực hiện.

## Khả năng

### Tối ưu hóa truy vấn
Làm cho các truy vấn chậm trở nên nhanh:
- Phân tích các kế hoạch thực thi truy vấn (EXPLAIN ANALYZE)
- Xác định quét toàn bộ bảng và truy vấn N+1
- Khuyến nghị bổ sung hoặc sửa đổi chỉ số
- Viết lại truy vấn để có hiệu suất tốt hơn
- Xác thực các thay đổi truy vấn không làm hỏng chức năng

### Thiết kế & tối ưu hóa Schema
Cấu trúc dữ liệu hiệu quả:
- Thiết kế các schema được chuẩn hóa tránh dư thừa
- Tối ưu hóa kiểu dữ liệu để lưu trữ và tốc độ
- Lập kế hoạch phân vùng bảng thích hợp cho các tập dữ liệu lớn
- Xác định khóa ngoài và ràng buộc
- Tạo các script di chuyển với kế hoạch rollback

### Phát triển chiến lược chỉ mục (Index)
Tăng tốc độ truy xuất dữ liệu:
- Phân tích các mẫu truy vấn để xác định các chỉ số cần thiết
- Tạo chỉ số B-tree, Hash, GiST phù hợp
- Loại bỏ các chỉ số không sử dụng hoặc dư thừa
- Theo dõi việc sử dụng chỉ số và hiệu quả
- Cân bằng hiệu suất đọc so với chi phí ghi

### Lập kế hoạch sao lưu & phục hồi
Bảo vệ dữ liệu của bạn:
- Thiết kế lịch sao lưu toàn diện
- Kiểm tra quy trình khôi phục thường xuyên
- Triển khai khôi phục tại một thời điểm cụ thể (point-in-time recovery)
- Lập kế hoạch các chiến lược khôi phục sau thảm họa
- Tài liệu hóa các quy trình sao lưu và khôi phục

### Giám sát hiệu suất & khắc phục sự cố
Xác định và sửa các vấn đề:
- Theo dõi các chỉ số hiệu suất truy vấn
- Theo dõi việc sử dụng Connection Pool
- Xác định tranh chấp khóa (lock contention) và deadlock
- Phân tích việc sử dụng tài nguyên (CPU, bộ nhớ, I/O)
- Phát hiện các truy vấn chậm và cơ hội tối ưu hóa

### Bảo mật cơ sở dữ liệu
Giữ dữ liệu an toàn:
- Triển khai các vai trò và quyền người dùng (nguyên tắc đặc quyền tối thiểu)
- Cấu hình mã hóa cho dữ liệu khi nghỉ và khi truyền
- Thiết lập nhật ký kiểm tra (audit logging) để tuân thủ
- Xem xét và khắc phục các lỗ hổng bảo mật
- Quản lý kiểm soát truy cập cơ sở dữ liệu

## Khi nào nên sử dụng

Sử dụng Database Admin Agent khi bạn cần:
- Chẩn đoán hiệu suất truy vấn chậm
- Thiết kế schema cơ sở dữ liệu cho các tính năng mới
- Tối ưu hóa cấu trúc cơ sở dữ liệu hiện có
- Triển khai các chiến lược sao lưu và khôi phục
- Thiết lập giám sát và cảnh báo cơ sở dữ liệu
- Di chuyển dữ liệu hoặc thay đổi hệ thống cơ sở dữ liệu
- Khắc phục sự cố kết nối hoặc khóa
- Đảm bảo tuân thủ bảo mật cơ sở dữ liệu

## Ví dụ quy trình làm việc

### Chẩn đoán hiệu suất

```bash
/db "Diagnose why campaign dashboard loads slowly"
```

**Đại lý sẽ**:
1. Xác định các truy vấn chậm bằng cách sử dụng nhật ký cơ sở dữ liệu
2. Chạy EXPLAIN ANALYZE trên các truy vấn có vấn đề
3. Kiểm tra các chỉ số bị thiếu
4. Phân tích thống kê bảng và trạng thái vacuum
5. Xem xét cấu hình connection pool
6. Cung cấp khuyến nghị tối ưu hóa

**Bạn sẽ nhận được**:
```markdown
## Phân tích hiệu suất cơ sở dữ liệu

### Tóm tắt
Dashboard chiến dịch chậm do thiếu chỉ mục trên `campaigns.created_at`.
Thêm chỉ mục phức hợp (composite index) sẽ giảm thời gian truy vấn từ 2.3 giây xuống 45ms (cải thiện 98%).

### Các truy vấn chậm được xác định
Truy vấn: `SELECT * FROM campaigns WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20`
- Thời gian thực thi hiện tại: 2,340ms
- Số hàng đã quét: 1.2 triệu (quét toàn bộ bảng)
- Cải thiện dự kiến: nhanh hơn ~98% với chỉ mục

### Các chỉ mục bị thiếu
Khuyến nghị 1: Thêm chỉ mục phức hợp
\`\`\`sql
CREATE INDEX CONCURRENTLY idx_campaigns_user_created
  ON campaigns(user_id, created_at DESC);
\`\`\`
Tác động dự kiến: Tăng tốc truy vấn 98%, thời gian truy vấn còn 15ms

Khuyến nghị 2: Thêm covering index cho dashboard
\`\`\`sql
CREATE INDEX CONCURRENTLY idx_campaigns_dashboard
  ON campaigns(user_id, created_at DESC)
  INCLUDE (name, status, budget);
\`\`\`
Tác động dự kiến: Loại bỏ việc tra cứu bảng, tổng thời gian truy vấn ~50ms

### Thống kê cơ sở dữ liệu
- Kích thước bảng: campaigns (1.2 triệu hàng, 450MB)
- Lần vacuum cuối: 3 ngày trước ✅
- Sử dụng chỉ mục: 65% (nên là 80%+) ⚠️
- Connection pool: đã dùng 15/20 ✅

### Kế hoạch triển khai
Giai đoạn 1 (Ngay lập tức):
1. Tạo chỉ mục idx_campaigns_user_created (15 phút, không làm gián đoạn)
2. Chạy ANALYZE bảng campaigns
3. Theo dõi hiệu suất truy vấn trong 24 giờ

Giai đoạn 2 (Sprint tiếp theo):
1. Thêm covering index để tối ưu hóa hoàn toàn
2. Xem xét và loại bỏ các chỉ mục không dùng (tìm thấy 5)
3. Thiết lập giám sát hiệu suất truy vấn

### Rủi ro & Giảm thiểu
- Việc tạo chỉ mục khóa bảng → Sử dụng cờ CONCURRENTLY (không gián đoạn)
- Tăng dung lượng lưu trữ → Tối thiểu (ước tính +25MB mỗi chỉ mục)
- Tác động hiệu suất ghi → Không đáng kể cho khối lượng công việc này

### Kết quả dự kiến
- Thời gian tải dashboard: 2.3 giây → 0.1 giây
- Sử dụng CPU cơ sở dữ liệu: -40%
- Trải nghiệm người dùng: Cải thiện đáng kể
```

### Thiết kế Schema cho tính năng mới

```bash
/db "Design database schema for email campaign segmentation"
```

**Bạn sẽ nhận được**:
- Thiết kế schema hoàn chỉnh với các bảng và mối quan hệ
- Các tập lệnh di chuyển (migration scripts - up và down)
- Khuyến nghị chỉ mục
- Các truy vấn mẫu minh họa cách sử dụng
- Các cân nhắc về hiệu suất

### Triển khai chiến lược sao lưu

```bash
/db "Implement production backup strategy for PostgreSQL"
```

**Đại lý sẽ**:
1. Thiết kế lịch trình sao lưu (đầy đủ + tăng dần)
2. Cấu hình sao lưu tự động
3. Kiểm tra quy trình khôi phục
4. Tài liệu hóa quy trình sao lưu và khôi phục
5. Thiết lập giám sát và cảnh báo

## Hệ thống cơ sở dữ liệu được hỗ trợ

Đại lý có chuyên môn về:

**Cơ sở dữ liệu quan hệ**:
- PostgreSQL (chính)
- MySQL/MariaDB
- SQLite

**Cơ sở dữ liệu NoSQL**:
- MongoDB
- Redis (caching, sessions)

**Cơ sở dữ liệu đám mây**:
- Amazon RDS
- Google Cloud SQL
- Azure Database

## Công cụ & Lệnh cơ sở dữ liệu

Đại lý sử dụng các công cụ sau:

**PostgreSQL**:
```bash
# Kết nối tới cơ sở dữ liệu
psql -h localhost -U username -d database

# Phân tích hiệu suất truy vấn
EXPLAIN ANALYZE SELECT...;

# Kiểm tra thống kê bảng
SELECT * FROM pg_stat_user_tables WHERE relname = 'campaigns';

# Xem các truy vấn đang hoạt động
SELECT * FROM pg_stat_activity;
```

**Chuỗi kết nối lấy từ**: `.env`, `.env.local`, `.env.production`

## Tiêu chuẩn chất lượng

Đại lý đảm bảo:
- Toàn vẹn dữ liệu thông qua các ràng buộc phù hợp
- Đạt mục tiêu hiệu suất (truy vấn <100ms)
- Sao lưu định kỳ được kiểm tra và xác minh
- Bảo mật tuân theo nguyên tắc đặc quyền tối thiểu
- Schema tuân theo các thực hành chuẩn hóa tốt nhất
- Các bản di chuyển (migrations) có quy trình rollback đã được kiểm tra

## Các đại lý liên quan

- [Fullstack Developer](/vi/docs/marketing/agents/fullstack-developer) - Triển khai các thay đổi schema
- [Tester](/vi/docs/marketing/agents/tester) - Kiểm tra các bản di chuyển cơ sở dữ liệu
- [Project Manager](/vi/docs/marketing/agents/project-manager) - Theo dõi các cải tiến cơ sở dữ liệu

## Các lệnh liên quan

- [`/db`](/vi/docs/marketing/commands/db) - Quản lý và tối ưu hóa cơ sở dữ liệu
- [`/migrate`](/vi/docs/marketing/commands/migrate) - Hỗ trợ di chuyển cơ sở dữ liệu

## Mẹo

**Lập chỉ mục có chiến lược**: Đừng lập chỉ mục cho mọi thứ. Phân tích các mẫu truy vấn trước. Chỉ mục giúp tăng tốc độ đọc nhưng làm chậm tốc độ ghi.

**Kiểm tra bản di chuyển**: Luôn kiểm tra các tập lệnh di chuyển trên một bản sao của dữ liệu thực tế trước khi chạy trên môi trường chính thức.

**Giám sát hiệu suất truy vấn**: Thiết lập ghi nhật ký cho các truy vấn >100ms. Xem xét hàng tuần để phát hiện sớm tình trạng suy giảm hiệu suất.

**Sử dụng EXPLAIN ANALYZE**: Trước khi tối ưu hóa, hãy chạy EXPLAIN ANALYZE để hiểu hiệu suất truy vấn thực tế. Trực giác thường sai.

**Vacuum định kỳ**: PostgreSQL cần VACUUM thường xuyên để thu hồi không gian và cập nhật thống kê. Thiết lập bảo trì vacuum tự động.

**Connection Pooling**: Sử dụng Connection Pooling (PgBouncer, pgpool) để xử lý các kết nối đồng thời một cách hiệu quả.

Database Admin Agent biến cơ sở dữ liệu của bạn thành một thế mạnh. Truy vấn nhanh, dữ liệu tin cậy, không có thời gian dừng - tất cả đều được xử lý.
