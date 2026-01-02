---
title: /git:cm
description: Tài liệu hướng dẫn lệnh commit
section: engineer
kit: engineer
category: commands/git
order: 30
published: true
lang: vi
---

# /git:cm

Thực hiện stage tất cả các tệp và tạo một bản commit chuyên nghiệp tuân thủ các tiêu chuẩn conventional commit.

## Cú pháp

```bash
/git:cm
```

## Cách hoạt động

Lệnh `/git:cm` tuân theo một quy trình làm việc git có cấu trúc:

### 1. Giai đoạn phân tích

- Chạy `git status` để xem các tệp chưa được theo dõi hoặc đã thay đổi
- Chạy `git diff` để phân tích tất cả các thay đổi (staged + unstaged)
- Chạy `git log` để hiểu lịch sử commit và phong cách viết message

### 2. Phân loại thay đổi

- Xác định bản chất của các thay đổi (feature, fix, refactor, docs, v.v.)
- Nhóm các thay đổi liên quan
- Xác định tác động đến phiên bản ngữ nghĩa (semantic versioning)

### 3. Tạo thông điệp (Message)

- Tạo thông điệp commit ngắn gọn, mô tả đầy đủ
- Tuân theo định dạng conventional commit
- Tập trung vào lý do ("tại sao") thay vì hành động ("cái gì")
- Phù hợp với phong cách commit của kho lưu trữ

### 4. Stage và Commit

- Stage tất cả các tệp liên quan (`git add`)
- Tạo commit với thông điệp đã tạo
- Chạy `git status` để xác minh thành công

## Định dạng thông điệp commit

ClaudeKit tạo các commit tuân theo [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>
```

### Các loại (Types)

- `feat`: Tính năng mới
- `fix`: Sửa lỗi
- `docs`: Thay đổi tài liệu
- `style`: Định dạng, thiếu dấu chấm phẩy, v.v.
- `refactor`: Cấu trúc lại mã nguồn mà không thay đổi hành vi
- `perf`: Cải thiện hiệu suất
- `test`: Thêm hoặc cập nhật các bài kiểm tra
- `build`: Thay đổi hệ thống build hoặc các phụ thuộc
- `ci`: Thay đổi cấu hình CI/CD
- `chore`: Các nhiệm vụ bảo trì

### Ví dụ Commit

**Tính năng (Feature):**
```
feat: add user registration endpoint

- Implement POST /auth/register
- Add email/password validation with Joi
- Secure password hashing with bcrypt
- Generate JWT tokens on registration
- Include comprehensive test suite (92% coverage)
```

**Sửa lỗi (Bug Fix):**
```
fix: resolve token refresh race condition

- Add mutex to prevent concurrent refresh attempts
- Implement exponential backoff in retry logic
- Extend token expiry to 30 minutes
- Update session cleanup to respect active refreshes
```

**Tái cấu trúc (Refactor):**
```
refactor: extract payment processing into service layer

- Move Stripe logic from controller to service
- Improve error handling and logging
- Add payment state machine
- Increase test coverage to 95%
```

## Ví dụ

### Thêm tính năng đơn giản

```bash
# Sau khi triển khai một tính năng
/git:cm
```

**Commit được tạo:**
```
feat: add rate limiting middleware

- Implement token bucket algorithm
- Configure limit: 100 requests per 15 minutes
- Add Redis for distributed rate limiting
- Include bypass for admin users
```

### Sửa lỗi

```bash
# Sau khi sửa một lỗi
/git:cm
```

**Commit được tạo:**
```
fix: prevent memory leak in WebSocket connections

- Add proper cleanup in disconnect handler
- Implement connection pooling for Redis
- Add automated cleanup checks every 5 minutes
- Include stress tests validating 24-hour stability
```

### Nhiều thay đổi

```bash
# Sau khi thực hiện nhiều thay đổi liên quan
/git:cm
```

**Commit được tạo:**
```
feat: improve authentication security

- Add two-factor authentication support
- Implement refresh token rotation
- Enhance session management with Redis
- Update password requirements (min 12 chars)
- Add security event logging
```

## Những gì được commit

Lệnh thực hiện stage và commit:

✅ **Các tệp đã sửa đổi** - Thay đổi đối với các tệp hiện có
✅ **Các tệp mới** - Các tệp mới được tạo
✅ **Các tệp đã xóa** - Các tệp đã bị loại bỏ
✅ **Các tệp kiểm tra** - Cập nhật các bài kiểm tra và bài kiểm tra mới
✅ **Tài liệu** - Thay đổi tài liệu

❌ **Bị loại trừ mặc định:**
- Các tệp trong `.gitignore`
- Các tệp nhạy cảm (`.env`, `credentials.json`, v.v.)
- Các tệp build (artifacts)
- Node_modules
- Các tệp tạm thời

## Kiểm tra bảo mật

Trước khi commit, ClaudeKit sẽ kiểm tra:

### Tệp nhạy cảm

```
⚠ Cảnh báo: Phát hiện tệp nhạy cảm

Tệp: config/.env.production
Chứa: API keys, database passwords

Tệp này KHÔNG nên được commit.
Thêm vào .gitignore? (y/n)
```

### Bí mật (Secrets) trong mã nguồn

```
⚠ Cảnh báo: Phát hiện bí mật có khả năng xảy ra

Tệp: src/config/api.ts
Dòng 12: apiKey: "sk_live_..."

Loại bỏ bí mật trước khi commit? (y/n)
```

### Tệp lớn

```
⚠ Cảnh báo: Phát hiện tệp lớn

Tệp: public/video.mp4 (45 MB)

Hãy cân nhắc sử dụng Git LFS.
Vẫn tiếp tục? (y/n)
```

## Pre-commit Hooks

Nếu các hook pre-commit được cấu hình, chúng sẽ tự động chạy:

```
Đang chạy pre-commit hooks...

✓ ESLint: Không có lỗi
✓ Prettier: Tất cả các tệp đã được định dạng
✓ Tests: 87/87 passed
✓ TypeScript: Không có lỗi kiểu

Các kiểm tra pre-commit đã vượt qua
```

Nếu các hook thất bại:
```
❌ Pre-commit hooks thất bại

Lỗi ESLint:
- src/auth/login.ts:45 - biến 'token' không được sử dụng

Sửa lỗi và thử lại.
```

## Quy trình làm việc

### Luồng phát triển tiêu chuẩn

```bash
# 1. Triển khai tính năng
/cook [thêm trang hồ sơ người dùng]

# 2. Xem xét thay đổi
git diff

# 3. Chạy các bài kiểm tra
/test

# 4. Commit
/git:cm

# 5. Push (nếu đã sẵn sàng)
git push
```

### Với Code Review

```bash
# 1. Thực hiện thay đổi
# ... triển khai tính năng ...

# 2. Commit cục bộ
/git:cm

# 3. Xem lại trong commit
git show HEAD

# 4. Push lên nhánh tính năng
git push origin feature/user-profile

# 5. Tạo PR
/git:pr
```

## Tùy chỉnh

### Phong cách thông điệp commit

ClaudeKit phân tích lịch sử commit của bạn và khớp với phong cách đó:

**Nếu kho lưu trữ của bạn sử dụng:**
```
Add user authentication
Update README
Fix login bug
```

**ClaudeKit sẽ tạo:**
```
Add rate limiting middleware
```

**Nếu kho lưu trữ của bạn sử dụng:**
```
feat: add user authentication
fix: resolve login issue
docs: update README
```

**ClaudeKit sẽ tạo:**
```
feat: add rate limiting middleware
```

### Tự động phát hiện Scope

ClaudeKit tự động phát hiện scope từ các tệp đã thay đổi:

```
Các tệp đã thay đổi: src/auth/login.ts, src/auth/register.ts
Kết quả: feat(auth): add OAuth2 support

Các tệp đã thay đổi: docs/api/users.md
Kết quả: docs(api): document user endpoints

Các tệp đã thay đổi: tests/integration/payment.test.ts
Kết quả: test(payment): add Stripe webhook tests
```

## Thực hành tốt nhất

### Commit thường xuyên

✅ **Tốt - Commit nguyên tử (Atomic):**
```bash
# Triển khai tính năng
/git:cm  # "feat: add login form"

# Thêm bài kiểm tra
/git:cm  # "test: add login form validation tests"

# Cập nhật tài liệu
/git:cm  # "docs: document login API"
```

❌ **Xấu - Commit khổng lồ:**
```bash
# Triển khai 10 tính năng trong 3 ngày
/git:cm  # Commit quá lớn, không rõ ràng
```

### Xem lại trước khi commit

```bash
# Luôn xem lại các thay đổi trước
git diff
git status

# Sau đó commit
/git:cm
```

### Đừng commit mã nguồn lỗi

```bash
# Chạy các bài kiểm tra trước
/test

# Chỉ commit nếu bài kiểm tra vượt qua
✓ Tất cả các bài kiểm tra đã vượt qua
/git:cm
```

## Các kịch bản phổ biến

### Hotfix khẩn cấp

```bash
# 1. Sửa lỗi nghiêm trọng
/fix:fast [lỗi trên production]

# 2. Kiểm tra bản sửa lỗi
/test

# 3. Commit nhanh
/git:cm

# 4. Triển khai ngay lập tức
/deploy [production]
```

### Quy trình nhánh tính năng (Feature Branch)

```bash
# 1. Tạo nhánh tính năng
git checkout -b feature/new-dashboard

# 2. Triển khai từng bước
/cook [thêm bố cục dashboard]
/git:cm

/cook [thêm các widget dashboard]
/git:cm

/cook [thêm các bộ lọc dashboard]
/git:cm

# 3. Push nhánh
git push origin feature/new-dashboard

# 4. Tạo PR
/git:pr
```

### Giai đoạn tái cấu trúc (Refactoring)

```bash
# 1. Tái cấu trúc từng phần
# Tái cấu trúc dịch vụ auth
/git:cm  # "refactor(auth): extract validation logic"

# Tái cấu trúc dịch vụ thanh toán
/git:cm  # "refactor(payment): simplify error handling"

# Cập nhật các bài kiểm tra
/git:cm  # "test: update tests for refactored services"
```

## Xử lý sự cố

### Không có gì để commit

**Vấn đề:** Không có thay đổi nào để commit

**Giải pháp:**
```bash
# Kiểm tra trạng thái
git status

# Nếu thay đổi tồn tại nhưng không được phát hiện:
git add .
/git:cm
```

### Thông điệp commit không rõ ràng

**Vấn đề:** Thông điệp được tạo không nắm bắt được ý định

**Giải pháp:**
```bash
# Cung cấp thêm ngữ cảnh trong các chú thích mã nguồn
# ClaudeKit đọc các chú thích để hiểu ý định

# Hoặc chỉnh sửa thông điệp commit thủ công:
git commit --amend
```

### Pre-commit Hooks thất bại

**Vấn đề:** Các hook ngăn cản việc commit

**Giải pháp:**
```bash
# Sửa các vấn đề được xác định bởi các hook
# Lỗi ESLint
npm run lint:fix

# Định dạng Prettier
npm run format

# Sau đó thử lại
/git:cm
```

### Phát hiện dữ liệu nhạy cảm

**Vấn đề:** Vô tình cố gắng commit các bí mật

**Giải pháp:**
```bash
# Loại bỏ dữ liệu nhạy cảm
# Cập nhật tệp .env thành .env.example
# Sử dụng các biến môi trường

# Thêm vào .gitignore
echo ".env" >> .gitignore

# Sau đó commit
/git:cm
```

## Cách dùng nâng cao

### Sửa đổi Commit (Amending)

Nếu bạn cần sửa đổi (sử dụng một cách hạn chế):

```bash
# Thực hiện các thay đổi bổ sung
# ... sửa đổi các tệp ...

# Sửa đổi vào commit trước đó
git add .
git commit --amend --no-edit
```

**Lưu ý:** Chỉ sửa đổi các commit chưa được push!

### Stage một phần

Nếu bạn chỉ muốn commit các tệp cụ thể:

```bash
# Stage các tệp cụ thể thủ công
git add src/auth/login.ts src/auth/register.ts

# Sau đó commit
/git:cm
```

## Ví dụ lịch sử commit

Sau khi sử dụng `/git:cm` thường xuyên:

```
git log --oneline

a1b2c3d feat: add user profile page with avatar upload
d4e5f6g test: add comprehensive profile tests
g7h8i9j docs: document profile API endpoints
j0k1l2m fix: resolve avatar upload size limit
m3n4o5p refactor: extract file upload to service
p6q7r8s feat: add profile privacy settings
```

Sạch sẽ, chuyên nghiệp và dễ hiểu!

## Bước tiếp theo

- [/git:cp](/vi/docs/engineer/commands/git/commit-push) - Commit và push
- [/git:pr](/vi/docs/engineer/commands/git/pull-request) - Tạo pull request
- [/review](/vi/docs/engineer/commands/core/review) - Xem lại mã nguồn trước khi commit

---

**Điểm mấu chốt**: `/git:cm` tạo các commit chuyên nghiệp, tuân thủ tiêu chuẩn conventional một cách tự động bằng cách phân tích các thay đổi của bạn và khớp với phong cách commit của kho lưu trữ.
