---
title: Bảo Trì Dự Án Cũ
description: "Tìm hiểu cách tích hợp ClaudeKit vào một dự án hiện có, hiểu mã nguồn cũ (legacy code) và cải thiện nó một cách hệ thống."
lang: vi
section: workflows
category: workflows
order: 2
published: true
---

# Bảo Trì Dự Án Cũ

Tìm hiểu cách tích hợp ClaudeKit vào một dự án hiện có, hiểu mã nguồn cũ (legacy code) và cải thiện nó một cách hệ thống. Hướng dẫn này đi qua một kịch bản thực tế về việc hồi sinh một dự án Node.js đã 2 năm tuổi.

## Kịch Bản

**Thử thách:** Tiếp nhận một dự án Node.js 2 năm tuổi
- Không có tài liệu
- Độ bao phủ kiểm thử (Test coverage): 12%
- Commit cuối cùng: 18 tháng trước
- Nhiều thư viện (dependencies) đã lỗi thời/ngừng hỗ trợ
- Không ai nhớ cách nó hoạt động
- Triển khai production bị lỗi

**Mục tiêu:** Hiểu, viết tài liệu, sửa lỗi và cải thiện dự án

**Thời gian:** 2-3 giờ cho thiết lập ban đầu, và tiếp tục cải thiện sau đó

## Bước 1: Đánh Giá Ban Đầu

### Clone và Khám Phá

```bash
# Clone dự án
git clone https://github.com/company/legacy-project.git
cd legacy-project

# Kiểm tra những gì có ở đây
ls -la
cat package.json
cat README.md  # Thường là cũ hoặc thiếu
```

### Khởi Động Claude Code

```bash
claude
```

### Tạo Tài Liệu

Đây là **bước quan trọng nhất đầu tiên**:

```bash
/docs:init
```

**Điều gì xảy ra (5-8 phút):**

```
Đang phân tích codebase...
[████████████████████████] 100%

Số tệp đã quét: 1,247
Số dòng code: 45,829
Dependencies: 73 packages

Đang tạo tài liệu...

✓ docs/codebase-summary.md
✓ docs/code-standards.md
✓ docs/system-architecture.md
✓ docs/project-overview-pdr.md
✓ docs/technical-debt.md (MỚI!)
✓ docs/migration-recommendations.md (MỚI!)

Tạo tài liệu hoàn tất!

Phát hiện chính:
⚠ 15 dependencies đã lỗi thời
⚠ 88% code chưa có tests
⚠ 3 lỗ hổng bảo mật
⚠ Style code không nhất quán
✓ Kiến trúc được cấu trúc tốt
✓ Phân tách mối quan tâm (separation of concerns) tốt
```

### Xem Lại Tài Liệu Đã Tạo

```bash
# Đọc bản tóm tắt
cat docs/codebase-summary.md
```

**Ví dụ output:**

```markdown
# Codebase Summary

## Loại Dự Án
E-commerce backend API

## Tech Stack
- **Backend**: Node.js 14 (cũ), Express 4
- **Database**: MongoDB 4.2 (cần nâng cấp)
- **Cache**: Redis 5
- **Queue**: Bull (xử lý công việc)

## Kiến Trúc
- Kiến trúc phân lớp (routes → controllers → services → models)
- Đang cố gắng làm microservices nhưng chưa hoàn thiện
- Chạy ngầm (background jobs) cho email, thanh toán

## Tính Năng Chính
1. Xác thực người dùng (Passport.js + JWT)
2. Danh mục sản phẩm với tìm kiếm
3. Giỏ hàng và thanh toán
4. Xử lý thanh toán (Stripe)
5. Quản lý đơn hàng
6. Thông báo qua email

## Các Vấn Đề Nghiêm Trọng
1. **Bảo mật**: Sử dụng các phương pháp crypto cũ
2. **Hiệu suất**: Lỗi N+1 query trong danh sách sản phẩm
3. **Độ tin cậy**: Thiếu xử lý lỗi trong luồng thanh toán
4. **Khả năng bảo trì**: Code trộn lẫn ES5 và ES6

## Trạng Thái Dependencies
- 15 packages có bản cập nhật lớn (major updates)
- 3 packages có lỗ hổng bảo mật
- bcrypt, jsonwebtoken, mongoose cần được cập nhật

## Độ Bao Phủ Kiểm Thử: 12%
- Unit tests: 8 tệp
- Integration tests: 2 tệp
- E2E tests: 0 tệp
```

## Bước 2: Hiểu Hệ Thống

### Đặt Câu Hỏi

Bây giờ ClaudeKit đã có ngữ cảnh, hãy đặt các câu hỏi cụ thể:

```bash
/ask [luồng xử lý thanh toán hoạt động như thế nào?]
```

**Phản hồi:**

```
Luồng xử lý thanh toán:

1. Người dùng gửi đơn hàng (POST /api/orders)
   File: src/controllers/order.controller.js:45

2. Đơn hàng được kiểm tra (validated)
   File: src/services/order.service.js:120

3. Tạo Stripe payment intent
   File: src/services/payment.service.js:78

4. Webhook xử lý xác nhận thanh toán
   File: src/routes/webhooks/stripe.js:23

5. Trạng thái đơn hàng cập nhật thành 'paid'
   Chạy ngầm (background job) gửi email xác nhận

Các vấn đề nghiêm trọng tìm thấy:
⚠ Thiếu logic thử lại (retry) nếu Stripe lỗi
⚠ Webhook chưa được xác thực (rủi ro bảo mật)
⚠ Lỗi race condition khi cập nhật đơn hàng
⚠ Lỗi gửi email làm chặn quá trình hoàn tất đơn hàng

Khuyến nghị: Sử dụng /fix:hard để giải quyết các vấn đề này
```

Thêm các câu hỏi khác:

```bash
/ask [luồng xác thực như thế nào?]
/ask [các công việc chạy ngầm được xử lý ra sao?]
/ask [điều gì làm cho việc tìm kiếm sản phẩm bị chậm?]
```

## Bước 3: Cập Nhật Dependencies

### Kiểm Tra Các Bản Cập Nhật

```bash
npm outdated
```

### Tạo Kế Hoạch Cập Nhật

```bash
/plan [cập nhật tất cả dependencies lên phiên bản ổn định mới nhất]
```

**Kế hoạch được tạo bao gồm:**
- Các thay đổi gây phá vỡ (breaking changes) cho từng package
- Các bước di chuyển (migration steps)
- Chiến lược kiểm thử
- Kế hoạch hoàn tác (rollback)

### Triển Khai Cập Nhật

```bash
/cook [cập nhật dependencies theo kế hoạch]
```

**Điều gì xảy ra:**
```
1. Cập nhật package.json
   ✓ Node.js: 14 → 18 (cập nhật .nvmrc)
   ✓ Express: 4.17 → 4.18
   ✓ Mongoose: 5.13 → 7.6
   ✓ Jest: 26 → 29
   ... (cập nhật tất cả 73 packages)

2. Xử lý các thay đổi gây phá vỡ
   ✓ Cập nhật các câu truy vấn Mongoose (xóa các phương thức cũ)
   ✓ Sửa cấu hình Jest cho v29
   ✓ Cập nhật các lệnh gọi bcrypt
   ✓ Hiện đại hóa các mẫu async/await

3. Vá lỗi bảo mật
   ✓ Cập nhật jsonwebtoken (CVE-2022-23529)
   ✓ Cập nhật minimist (CVE-2021-44906)
   ✓ Cập nhật node-fetch (CVE-2022-0235)

4. Chạy tests
   ⚠ 23 tests thất bại do các thay đổi phá vỡ

5. Sửa các lỗi test
   ✓ Cập nhật test mocks cho Mongoose 7
   ✓ Sửa các mẫu test async
   ✓ Cập nhật snapshot tests

6. Chạy test cuối cùng
   ✓ Tất cả 45 tests đã vượt qua
   ✓ 0 lỗ hổng bảo mật
   ✓ Tất cả dependencies đã được cập nhật

Sẵn sàng để commit!
```

### Xác Minh Cập Nhật

```bash
# Chạy tests
npm test

# Kiểm tra lỗ hổng bảo mật
npm audit

# Thử chạy ứng dụng
npm run dev
```

## Bước 4: Thêm Các Tests Còn Thiếu

### Tạo Bộ Kiểm Thử (Test Suite)

```bash
/cook [tạo bộ kiểm thử toàn diện cho các luồng quan trọng]
```

**Các khu vực ưu tiên:**
1. Xác thực (Authentication)
2. Xử lý thanh toán
3. Quản lý đơn hàng
4. Tìm kiếm sản phẩm

**Điều gì xảy ra:**
```
Đang phân tích các luồng quan trọng...

Đã xác định 8 luồng quan trọng:
1. Đăng ký & đăng nhập người dùng
2. Luồng đặt lại mật khẩu
3. Tìm kiếm & lọc sản phẩm
4. Thêm vào giỏ hàng
5. Quy trình thanh toán
6. Xử lý thanh toán
7. Theo dõi trạng thái đơn hàng
8. Các thao tác quản trị (Admin)

Đang tạo tests...

Đã tạo 127 tests mới:
✓ Unit tests: 73 tệp
  - Xác thực: 15 tests
  - Thanh toán: 22 tests
  - Đơn hàng: 18 tests
  - Sản phẩm: 18 tests

✓ Integration tests: 35 tệp
  - API endpoints: 35 tests

✓ E2E tests: 19 tệp
  - Luồng người dùng hoàn chỉnh: 19 tests

Đang chạy bộ kiểm thử...
✓ 172/172 tests đã vượt qua
✓ Độ bao phủ (Coverage): 78% (tăng từ 12%)

Tests đã được tạo trong thư mục tests/
```

## Bước 5: Sửa Các Vấn Đề Nghiêm Trọng

### Lỗ Hổng Bảo Mật

```bash
/fix:hard [Stripe webhook chưa được xác thực - rủi ro bảo mật]
```

**Bản sửa lỗi đã áp dụng:**
```
1. Thêm xác thực chữ ký webhook
   File: src/routes/webhooks/stripe.js

2. Thêm phòng chống tấn công replay
   Sử dụng timestamp validation của Stripe

3. Thêm xử lý lỗi phù hợp
   Ghi log và cảnh báo khi xác thực thất bại

4. Tạo tests
   ✓ Chấp nhận chữ ký hợp lệ
   ✓ Từ chối chữ ký không hợp lệ
   ✓ Từ chối timestamp cũ
   ✓ Ngăn chặn tấn công replay

Vấn đề bảo mật đã được giải quyết!
```

### Vấn Đề Hiệu Suất

```bash
/fix:hard [Lỗi N+1 query trong danh sách sản phẩm làm chậm phản hồi]
```

**Bản sửa lỗi đã áp dụng:**
```
1. Xác định vị trí vấn đề
   File: src/services/product.service.js:156

2. Nguyên nhân gốc rễ
   - Lấy sản phẩm trong vòng lặp
   - Truy vấn riêng biệt cho từng category của sản phẩm
   - Thiếu index trong database

3. Triển khai các bản sửa lỗi
   ✓ Thêm Mongoose populate() cho categories
   ✓ Tạo các index trong database
   ✓ Triển khai lưu trữ kết quả truy vấn (Redis cache)
   ✓ Thêm phân trang (pagination)

4. Cải thiện hiệu suất
   Trước đó: 3.2s cho 50 sản phẩm
   Sau đó: 180ms cho 50 sản phẩm
   Cải thiện: nhanh hơn 94%

5. Thêm các bài kiểm tra hiệu suất (performance tests)
   ✓ Test thời gian phản hồi < 300ms
   ✓ Test phân trang hoạt động đúng
   ✓ Test việc xóa cache (invalidation)
```

### Xử Lý Lỗi

```bash
/fix:hard [luồng thanh toán thiếu xử lý lỗi, đơn hàng bị kẹt]
```

**Bản sửa lỗi đã áp dụng:**
```
1. Thêm xử lý lỗi toàn diện
   ✓ Các khối try-catch trong payment service
   ✓ Hoàn tác giao dịch (Transaction rollback) khi lỗi
   ✓ Logic thử lại (Retry) với exponential backoff
   ✓ Hàng chờ Dead letter cho các công việc thất bại

2. Thêm giám sát (monitoring)
   ✓ Ghi lỗi vào Sentry
   ✓ Các chỉ số (metrics) cho thanh toán thất bại
   ✓ Cảnh báo cho các đơn hàng bị kẹt

3. Thêm các cơ chế khôi phục
   ✓ Endpoint thử lại thủ công cho admin
   ✓ Tự động dọn dẹp các đơn hàng cũ
   ✓ Thông báo cho khách hàng khi có lỗi

4. Tạo tests
   ✓ Luồng thanh toán thành công
   ✓ Xử lý thanh toán thất bại
   ✓ Logic thử lại
   ✓ Xử lý timeout
```

## Bước 6: Cải Thiện Chất Lượng Code

### Hiện Đại Hóa Code

```bash
/cook [tái cấu trúc code trộn lẫn ES5/ES6 sang ES6+ hiện đại với async/await]
```

**Các cải tiến:**
- Chuyển đổi callbacks sang async/await
- Sử dụng const/let thay vì var
- Sử dụng template literals
- Sử dụng destructuring
- Sử dụng arrow functions
- Loại bỏ code không cần thiết

**Ví dụ chuyển đổi:**

```javascript
// Trước đó (ES5 style)
var getUserOrders = function(userId, callback) {
  Order.find({userId: userId}, function(err, orders) {
    if (err) {
      return callback(err);
    }
    var orderIds = [];
    for (var i = 0; i < orders.length; i++) {
      orderIds.push(orders[i]._id);
    }
    callback(null, orderIds);
  });
};

// Sau đó (Modern ES6+)
const getUserOrders = async (userId) => {
  const orders = await Order.find({ userId });
  return orders.map(order => order._id);
};
```

### Thêm TypeScript (Tùy chọn)

```bash
/plan [chuyển đổi dự án sang TypeScript]
```

Xem lại kế hoạch, sau đó:

```bash
/cook [triển khai chuyển đổi sang TypeScript theo kế hoạch]
```

### Cải Thiện Tài Liệu

```bash
/docs:update
```

Thêm:
- Comment trong code
- Các chú thích JSDoc
- Tài liệu API
- Các ví dụ sử dụng

## Bước 7: Sửa Lỗi Triển Khai (Deployment)

### Chẩn Đoán Lỗi Triển Khai

```bash
/ask [tại sao việc triển khai production bị lỗi?]
```

**Phân tích:**
```
Tìm thấy các vấn đề triển khai:

1. Build script thất bại
   - Thiếu trình biên dịch TypeScript
   - Lệnh build đã lỗi thời

2. Biến môi trường (Environment variables)
   - Định dạng DATABASE_URL thay đổi trong Mongoose 7
   - Thiếu STRIPE_WEBHOOK_SECRET

3. Di chuyển database (Migrations)
   - Chưa có hệ thống migration
   - Các thay đổi schema chưa được quản lý phiên bản

4. Thiếu health check endpoint
   - Load balancer không thể xác nhận tình trạng ứng dụng

Khuyến nghị: Sửa các vấn đề này trước khi triển khai
```

### Sửa Các Lỗi Triển Khai

```bash
/fix:hard [sửa các vấn đề triển khai production]
```

**Các bản sửa lỗi đã áp dụng:**
```
1. Cập nhật quy trình build
   ✓ Sửa các script trong package.json
   ✓ Thêm TypeScript vào dependencies
   ✓ Tối ưu hóa kết quả build

2. Thêm hệ thống migration
   ✓ Thiết lập migrate-mongo
   ✓ Tạo migration cho các thay đổi schema
   ✓ Thêm bước migration vào quy trình triển khai

3. Cập nhật cấu hình môi trường
   ✓ Sửa định dạng DATABASE_URL
   ✓ Thêm các biến môi trường còn thiếu
   ✓ Tạo tệp .env.example

4. Thêm health check
   ✓ Endpoint GET /health
   ✓ Kiểm tra kết nối database
   ✓ Kiểm tra kết nối Redis
   ✓ Trả về trạng thái dịch vụ

5. Cập nhật tài liệu triển khai
   ✓ docs/deployment-guide.md

Sẵn sàng để triển khai!
```

### Triển Khai

```bash
# Kiểm tra build tại local
npm run build
npm run start:prod

# Triển khai lên staging
git push staging main

# Xác minh staging
curl https://staging.example.com/health

# Triển khai lên production
git push production main

# Giám sát
/fix:logs  # Theo dõi production logs
```

## Bước 8: Thiết Lập Bảo Trì

### Thêm CI/CD

```bash
/cook [tạo GitHub Actions workflow cho CI/CD]
```

**Workflow được tạo:**
- Chạy tests khi có PR
- Kiểm tra chất lượng code (Linting)
- Triển khai lên staging khi merge vào develop
- Triển khai lên production khi merge vào main

### Thêm Giám Sát (Monitoring)

```bash
/cook [thêm giám sát và cảnh báo]
```

**Đã thêm:**
- Theo dõi lỗi (Sentry)
- Giám sát hiệu suất (New Relic)
- Giám sát uptime (UptimeRobot)
- Tập hợp logs (Datadog)

### Tạo Runbook

```bash
/docs:update
```

Tạo `docs/runbook.md` với:
- Các vấn đề thường gặp và giải pháp
- Quy trình triển khai
- Quy trình hoàn tác (Rollback)
- Thông tin liên hệ khẩn cấp

## Theo Dõi Tiến Độ

| Giai Đoạn | Thời Gian | Trước Đó | Sau Đó |
|-----------|-----------|----------|--------|
| Tài liệu | 10 phút | Không có | Hoàn tất |
| Dependencies | 30 phút | 15 lỗi thời | Đã cập nhật tất cả |
| Tests | 45 phút | 12% coverage | 78% coverage |
| Bảo mật | 20 phút | 3 lỗ hổng | 0 lỗ hổng |
| Hiệu suất | 30 phút | 3.2s phản hồi | 180ms phản hồi |
| Chất lượng code | 40 phút | Trộn lẫn ES5/ES6 | ES6+ hiện đại |
| Triển khai | 25 phút | Bị lỗi | Hoạt động tốt |
| **Tổng cộng** | **3h 20phút** | **Khó bảo trì** | **Sẵn sàng cho Production** |

## Các Cải Thiện Chính

✅ **Tài liệu**: Từ 0% lên 100%
✅ **Tests**: Từ 12% lên 78% độ bao phủ
✅ **Dependencies**: Đã cập nhật tất cả, 0 lỗ hổng bảo mật
✅ **Hiệu suất**: Nhanh hơn 94%
✅ **Chất lượng code**: Code hiện đại, nhất quán
✅ **Triển khai**: Đã sửa và tự động hóa
✅ **Giám sát**: Khả năng quan sát (observability) đầy đủ
✅ **Bảo mật**: Tất cả vấn đề đã được giải quyết

## Bảo Trì Liên Tục

### Công Việc Hàng Tuần

```bash
# Kiểm tra các bản cập nhật
npm outdated

# Chạy kiểm tra bảo mật
npm audit

# Xem lại độ bao phủ tests
npm run test:coverage

# Cập nhật tài liệu nếu cần
/docs:update
```

### Công Việc Hàng Tháng

```bash
# Xem lại nợ kỹ thuật (technical debt)
cat docs/technical-debt.md

# Lên kế hoạch cải thiện
/plan [các cải thiện cho tháng tới]

# Cập nhật dependencies
/cook [cập nhật dependencies]
```

### Khi Thêm Tính Năng

```bash
# 1. Lập kế hoạch tính năng
/plan [mô tả tính năng mới]

# 2. Triển khai
/cook [triển khai tính năng]

# 3. Test
/test

# 4. Cập nhật tài liệu
/docs:update

# 5. Commit
/git:cm

# 6. Deploy
git push
```

## Các Thách Thức Thường Gặp

### "Tôi không hiểu code này"

```bash
/ask [giải thích cách X hoạt động]
/ask [hàm này làm nhiệm vụ gì?]
/ask [tại sao mẫu hình (pattern) này được dùng ở đây?]
```

### "Có quá nhiều vấn đề cần sửa"

Ưu tiên theo thứ tự:
1. Các vấn đề bảo mật (/fix:hard)
2. Các lỗi chặn triển khai production (/fix:hard)
3. Các vấn đề hiệu suất (/fix:hard)
4. Độ bao phủ tests (/cook [add tests])
5. Chất lượng code (/cook [refactor])
6. Tài liệu (/docs:update)

### "Có thay đổi phá vỡ trong dependencies"

```bash
/plan [di chuyển từ package X v1 sang v2]
# Xem lại kế hoạch cẩn thận
/cook [triển khai di chuyển]
/test  # Kiểm thử toàn diện
```

## Bước Tiếp Theo

### Cải Thiện Thêm

```bash
# Thêm feature flags
/cook [triển khai hệ thống feature flag]

# Thêm A/B testing
/cook [thêm framework A/B testing]

# Cải thiện khả năng quan sát
/cook [thêm distributed tracing]
```

### Đào Tạo Nhóm

1. Viết tài liệu mọi thứ (`/docs:update`)
2. Tạo hướng dẫn onboarding
3. Chia sẻ tài liệu kiến trúc
4. Thiết lập hướng dẫn môi trường phát triển

## Các Bài Học Chính

1. **Bắt đầu với `/docs:init`** - Cực kỳ quan trọng để hiểu mã nguồn cũ
2. **Sửa bảo mật trước tiên** - Bảo vệ người dùng và doanh nghiệp
3. **Thêm tests dần dần** - Tập trung vào các luồng quan trọng
4. **Cập nhật từng bước** - Đừng làm hỏng mọi thứ cùng một lúc
5. **Viết tài liệu song song** - Bạn trong tương lai sẽ cảm ơn chính mình
6. **Tự động hóa bảo trì** - Sử dụng CI/CD và giám sát

---

**Thành công!** Bạn đã biến một dự án cũ không thể bảo trì thành một codebase hiện đại, được kiểm thử tốt, có tài liệu đầy đủ và dễ dàng mở rộng.
