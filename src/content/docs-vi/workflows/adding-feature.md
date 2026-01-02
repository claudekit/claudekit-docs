---
title: Thêm Tính Năng Mới
description: "Tài liệu hướng dẫn Thêm Tính Năng Mới"
lang: vi
section: workflows
category: workflows
order: 3
published: true
---

# Thêm Tính Năng Mới

Tìm hiểu quy trình hoàn chỉnh để thêm tính năng mới vào dự án của bạn với ClaudeKit - từ lập kế hoạch ban đầu đến triển khai thực tế với đầy đủ kiểm thử và tài liệu.

## Tổng quan

**Mục tiêu**: Thêm một tính năng hoàn chỉnh bao gồm lập kế hoạch, triển khai, kiểm thử và tài liệu.
**Thời gian**: 15-30 phút (so với 2-4 giờ làm thủ công)
**Các Agent sử dụng**: planner, scout, tester, code-reviewer, docs-manager
**Các lệnh**: /plan, /code, /test, /docs:update, /git:cm

## Điều kiện tiên quyết

- Dự án hiện tại đã được cấu hình ClaudeKit
- Yêu cầu tính năng rõ ràng
- Môi trường phát triển đã được thiết lập
- Kho lưu trữ Git đã được khởi tạo

## Quy trình từng bước

### Bước 1: Xác định yêu cầu tính năng

Bắt đầu bằng cách xác định rõ ràng những gì bạn muốn xây dựng:

```bash
# Khởi động Claude Code
claude

# Xác định tính năng của bạn
# Ví dụ: Thêm chức năng đặt lại mật khẩu
```

**Mô tả tính năng tốt:**
- "Thêm luồng đặt lại mật khẩu với xác minh email"
- "Triển khai tìm kiếm sản phẩm với bộ lọc và phân trang"
- "Tạo bảng điều khiển quản trị để quản lý người dùng"

**Mô tả chưa tốt:**
- "Thêm mấy thứ liên quan mật khẩu"
- "Làm cho tìm kiếm tốt hơn"
- "Bảng quản trị"

### Bước 2: Nghiên cứu và Lập kế hoạch

Sử dụng agent planner để tạo kế hoạch triển khai chi tiết:

```bash
/plan [thêm luồng đặt lại mật khẩu với xác minh email]
```

**Điều gì sẽ xảy ra**:
```
[1/3] Đang khởi tạo các agent nghiên cứu...
  ✓ Researcher 1: Các thực hành tốt nhất cho dịch vụ email
  ✓ Researcher 2: Các mẫu tạo mã token
  ✓ Researcher 3: Các cân nhắc về bảo mật

[2/3] Đang phân tích cấu trúc dự án...
  ✓ Tìm thấy module xác thực
  ✓ Tìm thấy cấu hình dịch vụ email
  ✓ Xác định được model người dùng

[3/3] Đang tạo kế hoạch triển khai...
  ✓ Kế hoạch đã lưu: plans/password-reset-20251030.md

Xem lại kế hoạch tại: plans/password-reset-20251030.md
```

### Bước 3: Xem lại Kế hoạch

```bash
# Đọc kế hoạch đã tạo
cat plans/password-reset-20251030.md
```

**Cấu trúc kế hoạch**:
```markdown
# Kế hoạch triển khai Đặt lại mật khẩu

## 1. Thay đổi cơ sở dữ liệu
- Thêm trường reset_token vào bảng users
- Thêm trường reset_token_expires (timestamp)
- Tạo script migration

## 2. Triển khai Backend
- Endpoint POST /api/auth/forgot-password
- Endpoint POST /api/auth/reset-password
- Tích hợp dịch vụ email
- Tiện ích tạo token
- Middleware xác thực token

## 3. Cân nhắc bảo mật
- Hết hạn token (15 phút)
- Giới hạn tốc độ (5 yêu cầu/giờ)
- Bắt buộc sử dụng HTTPS
- Bắt buộc token chỉ sử dụng một lần

## 4. Chiến lược kiểm thử
- Kiểm thử đơn vị (Unit tests) cho việc tạo token
- Kiểm thử tích hợp (Integration tests) cho các endpoint
- Mock dịch vụ gửi email
- Kiểm thử bảo mật cho các trường hợp biên

## 5. Tài liệu
- Tài liệu endpoint API
- Hướng dẫn người dùng cho luồng đặt lại mật khẩu
- Hướng dẫn khắc phục sự cố cho quản trị viên
```

**Danh sách kiểm tra**:
- ✅ Tất cả yêu cầu đã được bao quát
- ✅ Đã bao gồm các cân nhắc bảo mật
- ✅ Các thay đổi cơ sở dữ liệu đã được ghi lại
- ✅ Chiến lược kiểm thử đã được xác định

Nếu kế hoạch cần điều chỉnh, hãy đưa ra phản hồi:
```bash
"Vui lòng thêm xác minh qua SMS như một lựa chọn thay thế cho email"
```

### Bước 4: Khảo sát mã nguồn hiện có (Tùy chọn)

Đối với các tính năng phức tạp, hãy khảo sát codebase trước:

```bash
/scout "Cho tôi xem mã nguồn xác thực hiện có" 3
```

**Kết quả**:
```
Tìm thấy 8 tệp liên quan:

Ưu tiên 1 (Cốt lõi):
- src/auth/login.js (logic xác thực)
- src/models/user.js (model người dùng)
- src/middleware/auth.js (middleware JWT)

Ưu tiên 2 (Liên quan):
- src/services/email.js (dịch vụ email)
- src/routes/auth.routes.js (routes xác thực)

Ưu tiên 3 (Tham khảo):
- tests/auth/login.test.js
- docs/api/authentication.md
- config/email.config.js
```

Việc này giúp hiểu các mẫu (patterns) hiện có trước khi triển khai.

### Bước 5: Triển khai Tính năng

Sử dụng lệnh cook để triển khai dựa trên kế hoạch:

```bash
/cook [triển khai đặt lại mật khẩu với xác minh email]
```

**Quy trình triển khai**:
```
[1/6] Đang khảo sát các tệp liên quan...
  ✓ Xác định được 8 tệp cần sửa đổi
  ✓ Xác định được các điểm tích hợp

[2/6] Đang triển khai thay đổi cơ sở dữ liệu...
  ✓ Tạo migration: 20251030_add_reset_tokens.sql
  ✓ Cập nhật model người dùng

[3/6] Đang triển khai các endpoint...
  ✓ POST /api/auth/forgot-password
  ✓ POST /api/auth/reset-password
  ✓ Middleware xác thực token

[4/6] Đang triển khai dịch vụ email...
  ✓ Template email đặt lại mật khẩu
  ✓ Logic gửi email
  ✓ Các biến template

[5/6] Đang thêm các biện pháp bảo mật...
  ✓ Middleware giới hạn tốc độ
  ✓ Xác thực hết hạn token
  ✓ Bắt buộc token chỉ dùng một lần

[6/6] Tích hợp hoàn tất
  ✓ 5 tệp được tạo mới
  ✓ 3 tệp được sửa đổi

Các tệp đã tạo:
- src/auth/password-reset.controller.js
- src/middleware/rate-limit.js
- src/templates/password-reset.html
- migrations/20251030_add_reset_tokens.sql
- tests/auth/password-reset.test.js

Các tệp đã sửa đổi:
- src/routes/auth.routes.js
- src/models/user.js
- src/services/email.js
```

### Bước 6: Chạy Kiểm thử

Tự động tạo và chạy các bài kiểm thử toàn diện:

```bash
/test
```

**Thực thi kiểm thử**:
```
Đang chạy bộ kiểm thử...

✓ Kiểm thử đơn vị (28 bài)
  ✓ Tạo token (8 bài)
  ✓ Xác thực token (7 bài)
  ✓ Render template email (5 bài)
  ✓ Logic giới hạn tốc độ (8 bài)

✓ Kiểm thử tích hợp (15 bài)
  ✓ Endpoint quên mật khẩu (8 bài)
  ✓ Endpoint đặt lại mật khẩu (7 bài)

✓ Kiểm thử bảo mật (10 bài)
  ✓ Bắt buộc hết hạn token (3 bài)
  ✓ Giới hạn tốc độ (3 bài)
  ✓ Token dùng một lần (4 bài)

Test Suites: 3 passed, 3 total
Tests:       53 passed, 53 total
Time:        4.382 s
Coverage:    89.3%

✅ Tất cả bài kiểm thử đã vượt qua
```

**Nếu kiểm thử thất bại**:
```bash
/fix:test
```

### Bước 7: Review Mã nguồn

Tự động kiểm tra chất lượng mã nguồn:

```bash
# Bộ review mã nguồn chạy tự động sau lệnh /cook
# Hoặc gọi thủ công
/review
```

**Kết quả review**:
```
Review mã nguồn hoàn tất

✓ Bảo mật
  ✓ Token được băm trước khi lưu trữ
  ✓ Đã triển khai giới hạn tốc độ
  ✓ Đã có xác thực đầu vào
  ✓ Đã cấu hình bắt buộc HTTPS

✓ Hiệu suất
  ✓ Các truy vấn cơ sở dữ liệu đã được tối ưu hóa
  ✓ Đã có index cho các trường tìm kiếm
  ✓ Gửi email bất đồng bộ

✓ Chất lượng mã nguồn
  ✓ Xử lý lỗi toàn diện
  ✓ Ghi log phù hợp
  ✓ Mã nguồn tuân thủ tiêu chuẩn dự án

⚠ Khuyến nghị
  - Cân nhắc thêm phương án dự phòng SMS
  - Thêm khả năng ghi đè cho quản trị viên
  - Triển khai ghi log kiểm toán (audit logging)

Tổng quan: ĐÃ DUYỆT ✓
```

### Bước 8: Cập nhật Tài liệu

Đồng bộ tài liệu với tính năng mới:

```bash
/docs:update
```

**Cập nhật tài liệu**:
```
Đang cập nhật tài liệu...

✓ Tài liệu API
  - Thêm /api/auth/forgot-password
  - Thêm /api/auth/reset-password
  - Cập nhật sơ đồ luồng xác thực

✓ Hướng dẫn người dùng
  - Tạo password-reset-guide.md
  - Cập nhật authentication.md

✓ Tài liệu kiến trúc
  - Cập nhật system-architecture.md
  - Thêm phần security-controls.md

✓ Tài liệu mã nguồn
  - Thêm các comment JSDoc
  - Cập nhật README.md

Đồng bộ tài liệu hoàn tất
```

### Bước 9: Kiểm thử thủ công (Tùy chọn)

Kiểm thử tính năng một cách thủ công:

```bash
# Khởi động server phát triển
npm run dev

# Kiểm thử quên mật khẩu
curl -X POST http://localhost:3000/api/auth/forgot-password \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com"}'

# Phản hồi mong đợi:
# {
#   "message": "Email đặt lại mật khẩu đã được gửi",
#   "expiresIn": "15 phút"
# }

# Kiểm tra email (môi trường phát triển)
# Mở: http://localhost:8025 (mailhog/mailcatcher)

# Kiểm thử đặt lại với token từ email
curl -X POST http://localhost:3000/api/auth/reset-password \
  -H "Content-Type: application/json" \
  -d '{
    "token": "abc123...",
    "newPassword": "NewSecure123!"
  }'

# Phản hồi mong đợi:
# {
#   "message": "Đặt lại mật khẩu thành công"
# }
```

### Bước 10: Commit thay đổi

Commit với thông điệp theo chuẩn conventional commit:

```bash
/git:cm
```

**Commit được tạo**:
```
feat: triển khai đặt lại mật khẩu với xác minh email

- Thêm endpoint quên mật khẩu với giới hạn tốc độ
- Triển khai endpoint đặt lại mật khẩu với xác thực token
- Tạo template email cho thông báo đặt lại mật khẩu
- Thêm migration cơ sở dữ liệu cho reset token
- Triển khai bắt buộc token chỉ dùng một lần
- Thêm bộ kiểm thử toàn diện (53 bài, độ bao phủ 89.3%)
- Cập nhật tài liệu API

Các tính năng bảo mật:
- Token hết hạn sau 15 phút
- Giới hạn tốc độ (5 yêu cầu/giờ cho mỗi email)
- Bắt buộc token dùng một lần
- Băm token bằng Bcrypt
```

### Bước 11: Tạo Pull Request (Tùy chọn)

Nếu làm việc cùng nhóm:

```bash
/git:pr main feature/password-reset
```

**PR được tạo**:
```markdown
## Tóm tắt
Triển khai chức năng đặt lại mật khẩu với xác minh qua email

- Người dùng có thể yêu cầu đặt lại mật khẩu qua email
- Xác thực dựa trên token (hết hạn sau 15 phút)
- Giới hạn tốc độ để ngăn chặn lạm dụng
- Độ bao phủ kiểm thử toàn diện (89%)

## Kế hoạch kiểm thử
- [x] Tất cả kiểm thử tự động đã vượt qua
- [x] Đã hoàn thành kiểm thử thủ công
- [x] Đã vượt qua review bảo mật
- [x] Tài liệu đã được cập nhật

## Cân nhắc bảo mật
- Token hết hạn sau 15 phút
- Bắt buộc token dùng một lần
- Giới hạn tốc độ: 5 yêu cầu/giờ
- Token được băm trong cơ sở dữ liệu

## Ảnh chụp màn hình
[Xem trước template email]
[Ví dụ phản hồi API]
```

## Ví dụ Hoàn chỉnh

Tình huống thực tế: Thêm chức năng tìm kiếm cho trang thương mại điện tử.

### Lệnh ban đầu

```bash
/plan [thêm tìm kiếm sản phẩm với bộ lọc, sắp xếp và phân trang]
```

### Xem lại Kế hoạch

**Kế hoạch được tạo bao gồm**:
- Tích hợp Elasticsearch
- Thiết kế endpoint tìm kiếm
- Triển khai bộ lọc (danh mục, giá, đánh giá)
- Các tùy chọn sắp xếp (độ liên quan, giá, mới nhất)
- Chiến lược phân trang
- Phân tích tìm kiếm
- Gợi ý tự động hoàn thành (Autocomplete)

### Triển khai

```bash
/cook [triển khai tìm kiếm sản phẩm theo kế hoạch]
```

**Kết quả sau 8 phút**:
- Tích hợp dịch vụ Elasticsearch
- Dịch vụ đánh chỉ mục tìm kiếm
- Endpoint GET /api/products/search
- Trình xây dựng truy vấn bộ lọc
- Logic sắp xếp và phân trang
- Xếp hạng kết quả tìm kiếm
- API tự động hoàn thành
- 67 bài kiểm thử (độ bao phủ 91%)
- Tài liệu API hoàn chỉnh

### So sánh thời gian

**Triển khai thủ công**: 6-8 giờ
- Nghiên cứu: 1-2 giờ
- Triển khai: 3-4 giờ
- Kiểm thử: 1-2 giờ
- Tài liệu: 1 giờ

**Với ClaudeKit**: 25 phút
- Lập kế hoạch: 5 phút
- Triển khai: 12 phút
- Kiểm thử: 5 phút
- Tài liệu: 3 phút

**Thời gian tiết kiệm được**: 5.5-7.5 giờ (nhanh hơn 93%)

## Các biến thể thường gặp

### Biến thể 1: Chỉ Endpoint API

```bash
# Bỏ qua lập kế hoạch cho các endpoint đơn giản
/cook [thêm endpoint GET /api/users/:id/profile]
```

### Biến thể 2: Tính năng nặng về Cơ sở dữ liệu

```bash
# Lập kế hoạch cho các thay đổi DB phức tạp trước
/plan [triển khai kiến trúc đa khách thuê (multi-tenant) với sự cô lập khách thuê]
/cook [triển khai kiến trúc đa khách thuê]
```

### Biến thể 3: Tính năng UI + Backend

```bash
# Chia thành các tính năng nhỏ hơn
/cook [triển khai backend API cho thông báo]
/cook [triển khai bảng thông báo ở frontend]
```

### Biến thể 4: Tích hợp bên thứ ba

```bash
# Nghiên cứu được bao gồm tự động
/plan [tích hợp thông báo SMS Twilio]
/cook [tích hợp Twilio SMS theo kế hoạch]
```

## Khắc phục sự cố

### Vấn đề: Tính năng quá lớn

**Biểu hiện**: Việc triển khai mất quá nhiều thời gian hoặc thay đổi quá nhiều tệp.

**Giải pháp**:
```bash
# Chia nhỏ thành các tính năng bé hơn
/plan [thêm quản lý người dùng - giai đoạn 1: CRUD người dùng]
/cook [triển khai CRUD người dùng]

/plan [thêm quản lý người dùng - giai đoạn 2: vai trò và quyền hạn]
/cook [triển khai vai trò và quyền hạn]
```

### Vấn đề: Kiểm thử thất bại

**Biểu hiện**: Các bài kiểm thử được tạo ra không vượt qua.

**Giải pháp**:
```bash
/fix:test

# Debugger sẽ phân tích lỗi và sửa chữa
# Tự động chạy lại các bài kiểm thử
```

### Vấn đề: Thiếu các trường hợp biên (Edge Cases)

**Biểu hiện**: Việc triển khai không bao quát hết tất cả các kịch bản.

**Giải pháp**:
```bash
# Thêm các yêu cầu cụ thể
/cook [thêm xử lý lỗi cho sự cố mạng trong luồng đặt lại mật khẩu]
```

### Vấn đề: Lo ngại về hiệu suất

**Biểu hiện**: Tính năng hoạt động nhưng quá chậm.

**Giải pháp**:
```bash
# Thêm tối ưu hóa
/cook [tối ưu hóa các truy vấn tìm kiếm với index DB và bộ nhớ đệm]
```

### Vấn đề: Tài liệu không rõ ràng

**Biểu hiện**: Tài liệu được tạo ra không giải thích rõ tính năng.

**Giải pháp**:
```bash
# Tạo lại với trọng tâm cụ thể
/docs:update [tập trung vào luồng đặt lại mật khẩu kèm sơ đồ]
```

## Thực hành tốt nhất

### 1. Lập kế hoạch cho các tính năng phức tạp

Đối với các tính năng yêu cầu nhiều thành phần:
```bash
# Luôn lập kế hoạch trước
/plan [mô tả tính năng]
# Xem lại kế hoạch
# Sau đó mới triển khai
/cook [mô tả tính năng]
```

### 2. Tính năng nhỏ và tập trung

Chia nhỏ các tính năng lớn:
```bash
✅ Tốt:
/cook [thêm chức năng tải ảnh đại diện người dùng]
/cook [thêm chức năng tạo ảnh thu nhỏ (thumbnail)]

❌ Quá lớn:
/cook [thêm hệ thống quản lý phương tiện hoàn chỉnh]
```

### 3. Kiểm thử ngay lập tức

Đừng bỏ qua việc kiểm thử:
```bash
/cook [tính năng]
/test           # Luôn chạy kiểm thử
/fix:test       # Sửa lỗi ngay lập tức
```

### 4. Viết tài liệu song song

Giữ tài liệu luôn mới:
```bash
/cook [tính năng]
/docs:update    # Cập nhật tài liệu ngay
```

### 5. Xem lại trước khi Commit

Luôn kiểm tra mã nguồn được tạo ra:
```bash
# Xem lại tất cả thay đổi
git status
git diff

# Hiểu những gì đã thay đổi
# Chỉ sau đó mới commit
/git:cm
```

### 6. Sử dụng Feature Branches

Làm việc một cách an toàn:
```bash
# Tạo nhánh tính năng
git checkout -b feature/password-reset

# Triển khai
/cook [tính năng]

# Commit
/git:cm

# Tạo PR
/git:pr main feature/password-reset
```

## Bước tiếp theo

### Các trường hợp sử dụng liên quan
- [Sửa Lỗi](/vi/docs/workflows/fixing-bugs) - Debug và sửa lỗi
- [Refactor Mã Nguồn](/vi/docs/workflows/refactoring-code) - Cải thiện chất lượng mã nguồn
- [Xây dựng API](/vi/docs/workflows/index) - Tạo các REST API

### Các lệnh liên quan
- [/plan](/vi/docs/engineer/commands/core/plan) - Tạo kế hoạch triển khai
- [/cook](/vi/docs/engineer/commands/core/cook) - Triển khai tính năng
- [/test](/vi/docs/engineer/commands/core/test) - Chạy bộ kiểm thử
- [/docs:update](/vi/docs/engineer/commands/docs/update) - Cập nhật tài liệu
- [/git:cm](/vi/docs/engineer/commands/git/commit) - Commit thay đổi

### Đọc thêm
- [Tham khảo lệnh](/vi/docs/engineer/commands) - Tất cả lệnh có sẵn
- [Hướng dẫn về Agent](/vi/docs/engineer/agents) - Hiểu về các agent
- [Workflows](/vi/docs/core-concepts/workflows) - Các mẫu phát triển

---

**Thông điệp chính**: Sử dụng quy trình làm việc hệ thống của ClaudeKit (kế hoạch → triển khai → kiểm thử → tài liệu → commit) để thêm các tính năng sẵn sàng cho sản xuất nhanh hơn 10 lần so với phát triển thủ công.
