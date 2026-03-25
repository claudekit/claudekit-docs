---
title: Tối Ưu Hóa Hiệu Suất
description: "Xác định và khắc phục các nút thắt cổ chai về hiệu suất với ClaudeKit - từ profiling đến caching, tối ưu hóa database và cải thiện mã nguồn."
lang: vi
section: workflows
category: engineer
order: 9
published: true
---

# Tối Ưu Hóa Hiệu Suất

Tìm hiểu cách xác định và khắc phục các nút thắt cổ chai về hiệu suất với ClaudeKit - từ profiling và phân tích đến triển khai caching, tối ưu hóa database và cải thiện mã nguồn.

## Tổng Quan

**Mục tiêu**: Xác định và giải quyết các nút thắt cổ chai về hiệu suất một cách hệ thống
**Thời gian**: 30-60 phút (so với 4-12 giờ làm thủ công)
**Agents sử dụng**: debugger, code-reviewer, tester
**Lệnh**: `/ck:debug`, `/ck:cook`, `/ck:test`

## Điều Kiện Tiên Quyết

- Ứng dụng đang gặp vấn đề về hiệu suất
- Các công cụ giám sát/profiling đã được cài đặt
- Các chỉ số hiệu suất cơ bản (baseline metrics)
- Dữ liệu thử nghiệm đại diện cho môi trường production

## Mục Tiêu Hiệu Suất

| Chỉ số | Tốt | Chấp nhận được | Kém |
|--------|------|------------|------|
| Thời gian phản hồi API | <200ms | 200-500ms | >500ms |
| Thời gian tải trang | <2s | 2-4s | >4s |
| Truy vấn Database | <50ms | 50-200ms | >200ms |
| Sử dụng Bộ nhớ | <512MB | 512MB-2GB | >2GB |
| Sử dụng CPU | <30% | 30-70% | >70% |

## Quy Trình Từng Bước

### Bước 1: Xác Định Các Vấn Đề Hiệu Suất

Bắt đầu bằng cách profiling ứng dụng của bạn:

```bash
# Chạy phân tích hiệu suất
/ck:debug [analyze application performance and identify bottlenecks]
```

**Kết quả phân tích**:
```
Báo Cáo Phân Tích Hiệu Suất

🔴 Các Vấn Đề Nghiêm Trọng (3)

1. Hiệu suất truy vấn Database
   Vị trí: src/users/service.js:23
   Vấn đề: Lỗi N+1 query
   Tác động: 2,847ms mỗi request
   Số truy vấn: 156 truy vấn riêng lẻ
   Khuyến nghị: Sử dụng eager loading

2. Hình ảnh chưa được tối ưu hóa
   Vị trí: public/uploads/
   Vấn đề: Kích thước hình ảnh lớn
   Tác động: Thêm 3.2s thời gian tải
   Tổng cộng: 12.4MB dữ liệu truyền tải
   Khuyến nghị: Tối ưu hóa hình ảnh + CDN

3. Thiếu lớp Caching
   Vị trí: src/products/service.js
   Vấn đề: Lặp lại các thao tác tốn kém
   Tác động: Tỷ lệ cache miss 95%
   Khuyến nghị: Triển khai Redis caching

🟡 Các Vấn Đề Cảnh Báo (5)

4. Thuật toán không hiệu quả
   Vị trí: src/search/index.js:45
   Vấn đề: Độ phức tạp O(n²)
   Tác động: 523ms cho 1000 items
   Khuyến nghị: Sử dụng hash map (O(n))

5. Các thao tác gây nghẽn (Blocking)
   Vị trí: src/emails/send.js:12
   Vấn đề: Gửi email đồng bộ (Synchronous)
   Tác động: Gây nghẽn 890ms
   Khuyến nghị: Sử dụng hàng chờ (Bull/Redis)

6. Kích thước Bundle lớn
   Vị trí: frontend/dist/
   Vấn đề: JavaScript bundle 4.2MB
   Tác động: 6s thời gian parse trên thiết bị di động
   Khuyến nghị: Chia nhỏ code (Code splitting)

7. Không có nén dữ liệu
   Vấn đề: Thiếu gzip/brotli
   Tác động: Truyền tải dữ liệu lớn hơn 2.8 lần
   Khuyến nghị: Bật nén dữ liệu

8. Rò rỉ bộ nhớ (Memory Leaks)
   Vị trí: src/websocket/handler.js
   Vấn đề: Các event listeners không được gỡ bỏ
   Tác động: Tăng trưởng 125MB/giờ
   Khuyến nghị: Dọn dẹp khi ngắt kết nối

Điểm hiệu suất: 34/100 (Kém)
Thời gian tải: 8.2s (Mục tiêu: <2s)
Thời gian tương tác (TTI): 12.4s (Mục tiêu: <3.5s)
```

### Bước 2: Khắc Phục Hiệu Suất Database

#### Lỗi N+1 Query

```bash
/ck:cook [fix N+1 query problem in user service with eager loading]
```

**Triển khai**:
```
[1/4] Đang phân tích các truy vấn...
  ✓ Đã xác định 156 truy vấn riêng lẻ
  ✓ Nên sử dụng 1 truy vấn với joins

Trước đó:
const users = await User.findAll();
for (const user of users) {
  user.posts = await Post.findAll({ userId: user.id }); // N truy vấn
}

Sau đó:
const users = await User.findAll({
  include: [{ model: Post }] // 1 truy vấn với JOIN
});

[2/4] Đang triển khai bản sửa lỗi...
  ✓ Đã thêm eager loading
  ✓ Tối ưu hóa các includes
  ✓ Thêm select để giới hạn các trường

[3/4] Đang kiểm thử...
  ✓ Số lượng truy vấn: 156 → 1
  ✓ Thời gian phản hồi: 2,847ms → 87ms
  ✓ Cải thiện 97%

[4/4] Tài liệu...
  ✓ Đã thêm ghi chú về hiệu suất

✅ Đã sửa lỗi N+1
```

#### Thêm Index Database

```bash
/ck:cook [add database indexes for frequently queried fields]
```

**Triển khai**:
```
[1/3] Đang phân tích các mẫu truy vấn...
  ✓ Đã xác định các truy vấn chậm
  ✓ Tìm thấy các indexes còn thiếu

Các indexes cần thêm:
- users.email (unique)
- posts.userId (foreign key)
- posts.status (filter)
- posts.createdAt (sorting)
- products.categoryId (foreign key)
- products.price (range queries)

[2/3] Đang tạo indexes...
  ✓ Đã tạo migration
  ✓ Các indexes tổng hợp (Composite indexes) cho các truy vấn phức tạp
  ✓ Các indexes từng phần (Partial indexes) cho các truy vấn được lọc

[3/3] Đang kiểm thử...
  ✓ Hiệu suất truy vấn được cải thiện:
    - Tìm kiếm User: 234ms → 3ms
    - Lọc Post: 567ms → 12ms
    - Tìm kiếm sản phẩm: 892ms → 34ms

✅ Đã thêm các indexes
```

#### Tối Ưu Hóa Truy Vấn

```bash
/ck:cook [optimize database queries to reduce execution time]
```

### Bước 3: Triển Khai Caching

#### Redis Cache

```bash
/ck:cook [implement Redis caching for frequently accessed data]
```

**Triển khai**:
```
[1/5] Thiết lập Redis...
  ✓ Đã cài đặt Redis client
  ✓ Đã thêm cấu hình
  ✓ Thiết lập Connection pool

[2/5] Chiến lược Cache...
  ✓ Mẫu Cache-aside
  ✓ Write-through cho các cập nhật
  ✓ Cấu hình TTL

[3/5] Triển khai cache...
  ✓ Dữ liệu người dùng (TTL: 1 giờ)
  ✓ Danh mục sản phẩm (TTL: 15 phút)
  ✓ Kết quả tìm kiếm (TTL: 5 phút)
  ✓ Phản hồi API (TTL: 1 phút)

[4/5] Xóa Cache (Invalidation)...
  ✓ Khi có thao tác cập nhật
  ✓ Khi có thao tác xóa
  ✓ API xóa cache thủ công

[5/5] Đang kiểm thử...
  ✓ Tỷ lệ cache hit: 0% → 87%
  ✓ Thời gian phản hồi: 456ms → 23ms
  ✓ Tải Database: -76%

✅ Đã triển khai Redis caching

Cải thiện hiệu suất:
- Phản hồi trung bình: nhanh hơn 95%
- Truy vấn Database: giảm 76%
- Tải server: giảm 64%
```

#### In-Memory Cache

```bash
/ck:cook [add in-memory LRU cache for hot data]
```

#### Tích Hợp CDN

```bash
/ck:cook [integrate CloudFlare CDN for static assets]
```

### Bước 4: Tối Ưu Hóa Frontend

#### Chia Nhỏ Code (Code Splitting)

```bash
/ck:cook [implement code splitting and lazy loading]
```

**Triển khai**:
```
[1/4] Đang phân tích bundle...
  ✓ Kích thước hiện tại: 4.2MB
  ✓ Đã xác định các module nặng
  ✓ Tìm thấy các dependencies không sử dụng

Các module nặng:
- moment.js: 287KB (nên dùng date-fns thay thế)
- lodash: 531KB (sử dụng imports riêng lẻ)
- chart.js: 456KB (sử dụng lazy load)

[2/4] Chia nhỏ code...
  ✓ Chia nhỏ theo Route (Route-based splitting)
  ✓ Lazy loading component
  ✓ Tối ưu hóa Vendor chunk

[3/4] Tree shaking...
  ✓ Đã gỡ bỏ code không sử dụng
  ✓ Tối ưu hóa imports
  ✓ Thay thế các thư viện nặng

[4/4] Kết quả...
  ✓ Kích thước bundle: 4.2MB → 687KB (giảm 84%)
  ✓ Lần tải đầu tiên: 6s → 1.2s
  ✓ Thời gian tương tác: 12.4s → 2.8s

✅ Đã tối ưu hóa Frontend
```

#### Tối Ưu Hóa Hình Ảnh

```bash
/ck:cook [optimize images with compression and lazy loading]
```

**Triển khai**:
```
[1/4] Phân tích hình ảnh...
  ✓ Tổng số hình ảnh: 342
  ✓ Tổng kích thước: 12.4MB
  ✓ Kích thước trung bình: 36KB

[2/4] Tối ưu hóa...
  ✓ Chuyển sang định dạng WebP
  ✓ Nén với chất lượng 85
  ✓ Tạo các kích thước đáp ứng (responsive sizes)
  ✓ Thêm lazy loading

[3/4] Triển khai...
  ✓ Sử dụng thẻ picture với các phương án dự phòng (fallbacks)
  ✓ Sử dụng Intersection Observer cho lazy load
  ✓ Hình ảnh giữ chỗ (Placeholder images)

[4/4] Kết quả...
  ✓ Kích thước hình ảnh: 12.4MB → 2.1MB (giảm 83%)
  ✓ Thời gian tải: 3.2s → 0.6s
  ✓ Băng thông: giảm 10.3MB mỗi trang

✅ Hình ảnh đã được tối ưu hóa
```

#### Nén Bundle

```bash
/ck:cook [enable gzip and brotli compression]
```

### Bước 5: Tối Ưu Hóa Thuật Toán

#### Thay Thế Thuật Toán Không Hiệu Quả

```bash
/ck:cook [replace O(n²) algorithm with O(n) hash map solution]
```

**Trước đó** (O(n²) - 523ms):
```javascript
function findDuplicates(items) {
  const duplicates = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[i] === items[j]) {
        duplicates.push(items[i]);
      }
    }
  }
  return duplicates;
}
```

**Sau đó** (O(n) - 4ms):
```javascript
function findDuplicates(items) {
  const seen = new Set();
  const duplicates = new Set();

  for (const item of items) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }

  return Array.from(duplicates);
}
```

**Kết quả**: nhanh hơn 99.2% (523ms → 4ms)

### Bước 6: Các Thao Tác Bất Đồng Bộ (Async)

#### Công Việc Chạy Ngầm (Background Jobs)

```bash
/ck:cook [move email sending to background queue with Bull]
```

**Triển khai**:
```
[1/4] Thiết lập hàng chờ Bull...
  ✓ Đã cấu hình hàng chờ Redis
  ✓ Thiết lập các quy trình Worker
  ✓ Logic xử lý công việc

[2/4] Chuyển các thao tác sang hàng chờ...
  ✓ Gửi email (trước đó gây nghẽn 890ms)
  ✓ Tạo báo cáo (trước đó gây nghẽn 2.3s)
  ✓ Xử lý hình ảnh (trước đó gây nghẽn 1.2s)

[3/4] Triển khai logic thử lại...
  ✓ Tự động thử lại khi lỗi
  ✓ Exponential backoff
  ✓ Hàng chờ Dead letter

[4/4] Kết quả...
  ✓ Phản hồi API: 890ms → 45ms
  ✓ Các thao tác không gây nghẽn
  ✓ Xử lý lỗi tốt hơn

✅ Đã triển khai công việc chạy ngầm
```

#### Xử Lý Song Song

```bash
/ck:cook [process multiple operations in parallel instead of sequential]
```

### Bước 7: Pool Kết Nối Database

```bash
/ck:cook [optimize database connection pooling]
```

**Cấu hình**:
```javascript
// Trước đó: Các thiết lập mặc định
pool: {
  max: 5,
  min: 0,
  idle: 10000
}

// Sau đó: Đã tối ưu hóa
pool: {
  max: 20,          // Thêm nhiều kết nối hơn
  min: 5,           // Luôn giữ tối thiểu sẵn sàng
  idle: 30000,      // Thời gian rảnh lâu hơn
  acquire: 60000,   // Thời gian timeout lấy kết nối lâu hơn
  evict: 1000       // Khoảng thời gian dọn dẹp
}

Kết quả: nhanh hơn 45% trong thời gian tải cao điểm
```

### Bước 8: Giới Hạn Tốc Độ (Rate Limiting) & Điều Tiết (Throttling)

```bash
/ck:cook [implement intelligent rate limiting and request throttling]
```

### Bước 9: Tối Ưu Hóa Bộ Nhớ

#### Sửa Lỗi Rò Rỉ Bộ Nhớ (Memory Leaks)

```bash
/ck:fix [fix memory leak in WebSocket handler]
```

**Triển khai**:
```
[1/4] Xác định rò rỉ...
  ✓ Bộ nhớ tăng 125MB/giờ
  ✓ Các event listeners không được dọn dẹp
  ✓ Các tham chiếu Socket được giữ lại

[2/4] Triển khai bản sửa lỗi...
  ✓ Gỡ bỏ event listeners khi ngắt kết nối
  ✓ Xóa các tham chiếu socket
  ✓ Triển khai hàm dọn dẹp (cleanup function)

[3/4] Quản lý bộ nhớ...
  ✓ Sử dụng WeakMap cho dữ liệu tạm thời
  ✓ Xóa các timers khi ngắt kết nối
  ✓ Các gợi ý Garbage collection

[4/4] Đang kiểm thử...
  ✓ Kiểm thử 24 giờ: bộ nhớ ổn định
  ✓ 1000 kết nối: không thấy tăng trưởng
  ✓ Stress test: đã vượt qua

✅ Lỗi rò rỉ bộ nhớ đã được xử lý
```

#### Giảm Sử Dụng Bộ Nhớ

```bash
/ck:cook [optimize memory usage by using streams for large data]
```

### Bước 10: Giám Sát & Profiling

```bash
/ck:cook [implement performance monitoring with metrics and alerts]
```

**Thiết lập giám sát**:
```
✓ Theo dõi thời gian phản hồi
✓ Giám sát truy vấn Database
✓ Cảnh báo sử dụng bộ nhớ
✓ Theo dõi sử dụng CPU
✓ Giám sát tỷ lệ lỗi
✓ Các chỉ số cache hit rate
✓ Các chỉ số kinh doanh tùy chỉnh
✓ Giám sát người dùng thực (RUM)

Các cảnh báo đã được cấu hình:
- Thời gian phản hồi >500ms
- Tỷ lệ lỗi >1%
- Sử dụng bộ nhớ >80%
- Sử dụng CPU >75%
- Cache hit rate <70%
```

### Bước 11: Kiểm Thử Tải (Load Testing)

```bash
/ck:test
```

**Kết quả kiểm thử hiệu suất**:
```
Báo Cáo Kiểm Thử Tải (1000 người dùng đồng thời)

Trước khi tối ưu hóa:
- Thời gian phản hồi trung bình: 2,847ms
- Phân vị thứ 95 (95th percentile): 5,234ms
- Số request/giây: 23
- Tỷ lệ lỗi: 12.4%
- Số request thất bại: 124/1000

Sau khi tối ưu hóa:
- Thời gian phản hồi trung bình: 87ms (nhanh hơn 97%)
- Phân vị thứ 95 (95th percentile): 156ms (nhanh hơn 97%)
- Số request/giây: 892 (nhiều hơn 38 lần)
- Tỷ lệ lỗi: 0.1%
- Số request thất bại: 1/1000

Database:
- Thời gian truy vấn: 234ms → 8ms (nhanh hơn 97%)
- Số truy vấn mỗi request: 156 → 1
- Sử dụng connection pool: 95% → 34%

Bộ nhớ:
- Sử dụng: 2.1GB → 487MB (giảm 77%)
- Tỷ lệ rò rỉ: 125MB/giờ → 0MB/giờ
- Số lần tạm dừng GC: 89/giờ → 12/giờ

Frontend:
- Kích thước Bundle: 4.2MB → 687KB (nhỏ hơn 84%)
- Thời gian tải: 8.2s → 1.2s (nhanh hơn 85%)
- Thời gian tương tác: 12.4s → 2.8s (nhanh hơn 77%)

Điểm Hiệu Suất Tổng Thể: 34/100 → 94/100

✅ Tất cả các mục tiêu hiệu suất đã đạt được
```

## Ví Dụ Hoàn Chỉnh: Slow E-Commerce API

### Các Vấn Đề Ban Đầu

```
Các vấn đề hiệu suất:
- Danh sách sản phẩm: thời gian phản hồi 4.2s
- Tìm kiếm: 6.8s với 1000 sản phẩm
- Cập nhật giỏ hàng: 1.8s
- Thanh toán: 3.4s
- Trang chủ: thời gian tải 9.2s
- Tải database cao: 89% CPU
```

### Các Bước Tối Ưu Hóa

```bash
# 1. Profile ứng dụng
/ck:debug [analyze e-commerce API performance]

# 2. Tối ưu hóa Database
/ck:cook [fix N+1 queries and add indexes]
/ck:cook [optimize product search queries]

# 3. Caching
/ck:cook [implement Redis caching for products and categories]
/ck:cook [add query result caching]

# 4. Tối ưu hóa Frontend
/ck:cook [implement code splitting and lazy loading]
/ck:cook [optimize product images with WebP and lazy loading]

# 5. Tối ưu hóa API
/ck:cook [move image processing to background queue]
/ck:cook [implement response compression]

# 6. Tối ưu hóa thuật toán
/ck:cook [optimize search algorithm with inverted index]

# 7. Kiểm thử các cải thiện
/ck:test

# 8. Giám sát trên production
/ck:cook [set up performance monitoring with alerts]
```

### Kết Quả

```
Sau khi tối ưu hóa (1 giờ làm việc):

Danh sách sản phẩm: 4.2s → 124ms (nhanh hơn 97%)
Tìm kiếm: 6.8s → 89ms (nhanh hơn 99%)
Cập nhật giỏ hàng: 1.8s → 34ms (nhanh hơn 98%)
Thanh toán: 3.4s → 187ms (nhanh hơn 95%)
Trang chủ: 9.2s → 1.4s (nhanh hơn 85%)
CPU Database: 89% → 23%

Tác động đến khách hàng:
- Tải trang nhanh hơn 94%
- Phục vụ nhiều hơn 10 lần số người dùng đồng thời
- Chi phí server thấp hơn 87%
- Tăng 45% tỷ lệ chuyển đổi
```

### So Sánh Thời Gian

**Tối ưu hóa thủ công**: 8-16 giờ
- Profiling: 1-2 giờ
- Tối ưu hóa Database: 2-3 giờ
- Caching: 2-3 giờ
- Frontend: 2-4 giờ
- Kiểm thử: 1-2 giờ
- Debugging: 1-2 giờ

**Với ClaudeKit**: 58 phút
- Profiling: 8 phút
- Database: 15 phút
- Caching: 12 phút
- Frontend: 18 phút
- Kiểm thử: 5 phút

**Thời gian tiết kiệm**: 7-15 giờ (nhanh hơn 88%)

## Các Mẫu Hình (Patterns) Tối Ưu Hiệu Suất

### Mẫu 1: Tăng Cường Luỹ Tiến (Progressive Enhancement)

```bash
/ck:cook [implement progressive enhancement for slow connections]
```

### Mẫu 2: Tải Trước Dự Đoán (Predictive Prefetching)

```bash
/ck:cook [add predictive prefetching for likely user actions]
```

### Mẫu 3: Service Worker Caching

```bash
/ck:cook [implement service worker for offline-first experience]
```

### Mẫu 4: Read Replicas Database

```bash
/ck:cook [set up database read replicas for scaling reads]
```

## Các Thực Hành Tốt Nhất (Best Practices)

### 1. Đo Lường Trước

Luôn profile trước khi tối ưu hóa:
```bash
✅ Profile → Xác định → Khắc phục → Đo lường
❌ Đoán → Tối ưu hóa → Hy vọng
```

### 2. Tập Trung Vào Tác Động Lớn Nhất

Tối ưu hóa các vấn đề có tác động cao nhất trước:
```
Thứ tự ưu tiên:
1. Các thao tác trên luồng quan trọng (critical path)
2. Các thao tác có tần suất cao
3. Các thao tác hướng về phía người dùng
4. Các thao tác chạy ngầm
```

### 3. Caching Quyết Liệt

Nhưng phải xóa cache đúng cách:
```javascript
// Các lớp Cache
1. Browser cache (assets tĩnh)
2. CDN cache (nội dung toàn cầu)
3. Application cache (Redis)
4. Database query cache
5. Kết quả memoization
```

### 4. Sử Dụng Cấu Trúc Dữ Liệu Phù Hợp

```javascript
✅ Hash map cho việc tìm kiếm: O(1)
✅ Set cho việc đảm bảo duy nhất: O(1)
✅ Tìm kiếm nhị phân (Binary search): O(log n)

❌ Vòng lặp Array: O(n)
❌ Vòng lặp lồng nhau: O(n²)
```

### 5. Giám Sát Liên Tục

```bash
/ck:cook [implement continuous performance monitoring]
```

## Xử Lý Sự Cố

### Vấn Đề: Vẫn Chậm Sau Khi Tối Ưu Hóa

**Giải pháp**:
```bash
# Profile lại
/ck:debug [deep performance analysis with detailed metrics]

# Kiểm tra các nút thắt cổ chai mới
# Tiếp tục tối ưu hóa
```

### Vấn Đề: Cache Không Hoạt Động

**Giải pháp**:
```bash
/ck:fix --quick [Redis cache hit rate below 50%]
```

### Vấn Đề: Bộ Nhớ Vẫn Tăng

**Giải pháp**:
```bash
/ck:fix [memory still growing despite fixes]
```

### Vấn Đề: Database Timeout

**Giải pháp**:
```bash
/ck:cook [increase connection pool and optimize slow queries]
```

## Danh Mục Kiểm Tra Hiệu Suất

```bash
Backend:
✓ Các truy vấn Database đã được tối ưu hóa
✓ Đã có Index trên các trường được truy vấn thường xuyên
✓ Đã loại bỏ lỗi N+1 query
✓ Đã triển khai Caching (Redis)
✓ Đã tối ưu hóa Connection pooling
✓ Đã sử dụng công việc chạy ngầm cho các thao tác chậm
✓ Đã bật nén phản hồi API
✓ Đã cấu hình giới hạn tốc độ (Rate limiting)

Frontend:
✓ Đã triển khai chia nhỏ mã nguồn (Code splitting)
✓ Đã sử dụng Lazy loading cho các routes
✓ Đã tối ưu hóa hình ảnh (WebP, lazy load)
✓ Đã tối thiểu hóa kích thước bundle
✓ Đã bật Tree shaking
✓ Đã sử dụng CDN cho các assets tĩnh
✓ Đã sử dụng Service worker caching
✓ Đã inline các CSS quan trọng (Critical CSS)

Infrastructure:
✓ Đã cấu hình cân bằng tải (Load balancing)
✓ Đã bật tự động mở rộng (Auto-scaling)
✓ Đã tích hợp CDN
✓ Đã sử dụng database read replicas
✓ Đã có giám sát và cảnh báo
✓ Đã thiết lập ngân sách hiệu suất (Performance budgets)
✓ Đã thực hiện kiểm thử tải định kỳ

Chỉ số:
✓ Thời gian phản hồi <200ms
✓ Tải trang <2s
✓ Thời gian tương tác <3.5s
✓ Cache hit rate >80%
✓ Tỷ lệ lỗi <0.1%
```

## Bước Tiếp Theo

### Các Trường Hợp Sử Dụng Liên Quan
- [Sửa Lỗi](/docs/workflows/fixing-bugs) - Gỡ lỗi các vấn đề
- [Tái Cấu Trúc Mã Nguồn](/docs/workflows/refactoring-code) - Chất lượng mã nguồn
- [Xây Dựng REST API](/docs/workflows/building-api) - Phát triển API

### Các Lệnh Liên Quan
- [/ck:debug](/docs/engineer/skills/ck-debug) - Phân tích hiệu suất
- [/ck:cook](/docs/engineer/skills/cook) - Triển khai tối ưu hóa
- [/ck:test](/docs/engineer/skills/test) - Kiểm thử hiệu suất

### Đọc Thêm
- [Web.dev Performance](https://web.dev/performance/)
- [Database Indexing](https://use-the-index-luke.com/)
- [Redis Caching Patterns](https://redis.io/docs/manual/patterns/)

---

**Bài học chính**: ClaudeKit cho phép tối ưu hóa hiệu suất một cách hệ thống với việc phân tích, đo lường và triển khai các thực hành tốt nhất - biến các ứng dụng chậm chạp thành các ứng dụng tốc độ cao trong vòng chưa đầy một giờ với các cải thiện có thể đo lường được.
