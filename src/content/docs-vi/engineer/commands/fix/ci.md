---
title: /fix:ci
description: Tài liệu hướng dẫn lệnh fix:ci
section: engineer
kit: engineer
category: docs/commands/fix
order: 22
published: true
lang: vi
---

# /fix:ci

Tự động sửa các lỗi GitHub Actions CI bằng cách phân tích nhật ký (logs) quy trình làm việc, xác định nguyên nhân gốc rễ và triển khai các giải pháp. Đây là công cụ thiết yếu để duy trì các đường ống CI/CD luôn "xanh".

## Cú Pháp

```bash
/fix:ci [github-workflow-url]
```

## Điều Kiện Tiên Quyết

Bạn cần cài đặt GitHub CLI (`gh`):

```bash
# macOS
brew install gh

# Windows
winget install GitHub.cli

# Linux
sudo apt install gh

# Đăng nhập
gh auth login
```

## Cách Hoạt Động

### 1. Truy Xuất Nhật Ký (Logs)

- Sử dụng `gh` CLI để lấy nhật ký chạy quy trình làm việc (workflow run logs)
- Tải xuống tất cả nhật ký công việc (job logs)
- Phân tích các thông báo lỗi và dấu vết ngăn xếp (stack traces)
- Xác định các bước bị thất bại

### 2. Phân Tích Lỗi

- Phân loại các lỗi (kiểm tra, xây dựng, lint, triển khai, v.v.)
- Xác định nguyên nhân gốc rễ
- Phân biệt giữa lỗi không ổn định (flaky) và lỗi thực tế
- Ánh xạ lỗi tới các tệp/dòng cụ thể

### 3. Nghiên Cứu Giải Pháp

- Tìm kiếm các vấn đề CI tương tự
- Xem lại tài liệu của GitHub Actions
- Kiểm tra các vấn đề đã biết với các action
- Xác định các thực hành tốt nhất

### 4. Triển Khai

- Sửa các vấn đề về mã (nếu là lỗi do mã nguồn)
- Cập nhật cấu hình quy trình làm việc (nếu là lỗi do cấu hình CI)
- Thêm các phụ thuộc (dependencies) bị thiếu
- Điều chỉnh các cài đặt môi trường

### 5. Xác Minh

- Chạy các bài kiểm tra cục bộ nếu có thể
- Xác minh cú pháp quy trình làm việc
- Đề xuất các bước xác minh thủ công

## Ví Dụ

### Thất Bại Khi Kiểm Tra (Tests)

```bash
/fix:ci https://github.com/user/repo/actions/runs/123456789
```

**Đầu ra CI:**
```
Error: Cannot find module '@testing-library/react'
  at require (src/components/Button.test.tsx:1:1)
```

**Điều gì xảy ra:**
```
1. Đang phân tích nhật ký...
   - Công việc (Job): test
   - Bước (Step): Run tests
   - Lỗi: Thiếu phụ thuộc

2. Nguyên nhân gốc rễ:
   @testing-library/react không có trong package.json
   Vừa bị xóa trong commit abc123

3. Sửa lỗi: Thêm phụ thuộc bị thiếu
   npm install --save-dev @testing-library/react

4. Cập nhật package.json
   ✓ Đã thêm @testing-library/react@14.0.0

5. Commit sửa lỗi
   ✓ fix(ci): thêm phụ thuộc kiểm tra bị thiếu

Bạn có muốn push và chạy lại CI không? (y/n)
```

### Thất Bại Khi Xây Dựng (Build)

```bash
/fix:ci https://github.com/user/repo/actions/runs/987654321
```

**Đầu ra CI:**
```
Error: TypeScript compilation failed
src/auth/login.ts:45:12 - error TS2339: Property 'user' does not exist on type 'Response'
```

**Điều gì xảy ra:**
```
1. Đang phân tích lỗi TypeScript...
   - Tìm thấy 5 lỗi kiểu
   - Tất cả nằm trong thư mục src/auth/

2. Nguyên nhân gốc rễ:
   Kiểu Response đã cập nhật không bao gồm thuộc tính 'user'
   Cần sử dụng 'data.user' thay thế

3. Các sửa đổi đã áp dụng:
   ✓ src/auth/login.ts - Đã đổi thành response.data.user
   ✓ src/auth/register.ts - Đã đổi thành response.data.user
   ✓ src/auth/logout.ts - Đã đổi thành response.data.user

4. Xác minh:
   ✓ TypeScript biên dịch thành công tại cục bộ
   ✓ Tất cả kiểm tra kiểu đã vượt qua

Push các thay đổi? (y/n)
```

### Thất Bại Khi Lint

```bash
/fix:ci https://github.com/user/repo/actions/runs/456789123
```

**Đầu ra CI:**
```
/home/runner/work/repo/src/utils/helper.ts
  12:7  error  'result' is assigned a value but never used  @typescript-eslint/no-unused-vars
  45:1  error  Expected linebreak to be 'LF' but found 'CRLF'  prettier/prettier
```

**Điều gì xảy ra:**
```
1. Tìm thấy 15 lỗi linting
   - 8 biến không được sử dụng
   - 7 vấn đề về định dạng

2. Tự động sửa lỗi...
   ✓ Đã xóa các biến không sử dụng
   ✓ Đã sửa các ký tự xuống dòng (CRLF → LF)
   ✓ Đã áp dụng định dạng Prettier

3. Chạy lint tại cục bộ...
   ✓ ESLint: Không có lỗi
   ✓ Prettier: Tất cả các tệp đã được định dạng

Sẵn sàng commit và push? (y/n)
```

### Vấn Đề Cấu Hình Quy Trình Làm Việc

```bash
/fix:ci https://github.com/user/repo/actions/runs/321654987
```

**Đầu ra CI:**
```
Error: The workflow is not valid.
.github/workflows/ci.yml (Line: 25, Col: 7): Unexpected value 'node-version'
```

**Điều gì xảy ra:**
```
1. Phát hiện lỗi cú pháp quy trình làm việc
   Tệp: .github/workflows/ci.yml
   Dòng: 25

2. Vấn đề:
   - 'node-version' phải nằm trong khối 'with:'
   - Thụt lề không chính xác

3. Tệp quy trình làm việc đã sửa:
   Trước:
     - uses: actions/setup-node@v3
       node-version: '18'

   Sau:
     - uses: actions/setup-node@v3
       with:
         node-version: '18'

4. Đã xác minh cú pháp quy trình làm việc
   ✓ Quy trình làm việc hợp lệ

Commit sửa lỗi? (y/n)
```

### Các Bài Kiểm Tra Không Ổn Định (Flaky)

```bash
/fix:ci https://github.com/user/repo/actions/runs/147258369
```

**Đầu ra CI:**
```
FAIL src/api/users.test.ts
  ● UserService › should create user

    expect(received).toBe(expected)

    Expected: "user-123"
    Received: "user-124"
```

**Điều gì xảy ra:**
```
1. Phân tích thất bại bài kiểm tra
   - Bài kiểm tra: "should create user"
   - Thất bại: Không khớp ID
   - Lịch sử: Thất bại 3 lần trong tuần này

2. Nguyên nhân gốc rễ: Bài kiểm tra không ổn định (flaky)
   - Bài kiểm tra dựa trên tự động tăng (auto-increment) của cơ sở dữ liệu
   - Tạo ID không tất định
   - Tình trạng tranh chấp (race condition) khi chạy kiểm tra song song

3. Sửa lỗi: Sử dụng các ID giả (mocked)
   Trước:
     const user = await userService.create(data)
     expect(user.id).toBe('user-123')

   Sau:
     const user = await userService.create(data)
     expect(user.id).toMatch(/^user-\d+$/)

4. Thêm sự cô lập bài kiểm tra
   ✓ Mỗi bài kiểm tra sử dụng cơ sở dữ liệu riêng
   ✓ Reset các ID giữa các bài kiểm tra

Chạy lại các bài kiểm tra tại cục bộ? (y/n)
```

## Các Lỗi CI Thường Gặp

### Vấn Đề Phụ Thuộc (Dependency)

```bash
# Package chưa được cài đặt
Error: Cannot find module 'express'
→ Cách sửa: npm install express

# Không khớp phiên bản
Error: Requires Node.js >= 18, got 16
→ Cách sửa: Cập nhật phiên bản Node trong workflow

# File lock không đồng bộ
Error: package-lock.json is out of date
→ Cách sửa: npm install, commit lại file lock
```

### Vấn Đề Môi Trường

```bash
# Thiếu biến môi trường
Error: STRIPE_API_KEY is not defined
→ Cách sửa: Thêm vào GitHub Secrets

# Sai thư mục làm việc
Error: ENOENT: no such file or directory 'src/app'
→ Cách sửa: Thêm 'working-directory' vào bước thực thi

# Không đủ quyền hạn
Error: Permission denied
→ Cách sửa: Thêm quyền (permissions) vào workflow
```

### Vấn Đề Kiểm Tra (Tests)

```bash
# Quá thời gian (Timeout)
Error: Test exceeded 5000ms timeout
→ Cách sửa: Tăng thời gian chờ hoặc tối ưu hóa bài kiểm tra

# Kiểm tra không ổn định (Flaky)
Error: Intermittent failures
→ Cách sửa: Thêm cơ chế thử lại (retries) hoặc sửa tình trạng tranh chấp

# Thiếu thiết lập kiểm tra
Error: Database not initialized
→ Cách sửa: Thêm script thiết lập trước khi chạy bài kiểm tra
```

### Vấn Đề Xây Dựng (Build)

```bash
# Hết bộ nhớ
Error: JavaScript heap out of memory
→ Cách sửa: Tăng NODE_OPTIONS=--max-old-space-size

# Thiếu tệp tin build (artifacts)
Error: dist/ directory not found
→ Cách sửa: Thêm bước build trước khi triển khai

# Kích thước tài nguyên quá lớn
Error: Bundle size exceeds limit
→ Cách sửa: Tối ưu hóa bundle hoặc tăng giới hạn
```

## Thực Hành Tốt Nhất

### Cung Cấp URL Quy Trình Làm Việc Đầy Đủ

✅ **URL đầy đủ:**
```bash
/fix:ci https://github.com/user/repo/actions/runs/123456789
```

❌ **Không đầy đủ:**
```bash
/fix:ci 123456789
```

### Kiểm Tra Tại Cục Bộ Trước

Trước khi push các bản sửa lỗi:

```bash
# Chạy các bài kiểm tra
npm test

# Kiểm tra kiểu (types)
npm run type-check

# Chạy linter
npm run lint

# Xây dựng (build)
npm run build
```

### Xem Lại Các Thay Đổi

```bash
# Sau khi /fix:ci thực hiện các thay đổi
git diff

# Xác minh các thay đổi là hợp lý
# Sau đó commit và push
```

### Giám Sát Việc Chạy Lại

Sau khi push bản sửa lỗi:

```bash
# Theo dõi việc chạy lại
gh run watch

# Kiểm tra xem bản sửa lỗi có hoạt động không
# Nếu vẫn thất bại, hãy tiếp tục điều tra
```

## Tích Hợp Quy Trình Làm Việc

### Quy Trình Sửa CI Tiêu Chuẩn

```bash
# 1. CI thất bại
# (Nhận thông báo)

# 2. Phân tích và sửa lỗi
/fix:ci https://github.com/user/repo/actions/runs/123

# 3. Xem lại các thay đổi
git diff

# 4. Commit
/git:cm

# 5. Push
git push

# 6. Theo dõi việc chạy lại
gh run watch

# 7. Xác nhận thành công
✓ Tất cả các kiểm tra đã vượt qua
```

### Cho Nhiều Lỗi Thất Bại

```bash
# Sửa từng lỗi một
/fix:ci https://github.com/user/repo/actions/runs/123

# Sau khi bản sửa lỗi được xác nhận
/fix:ci https://github.com/user/repo/actions/runs/124

# Hoặc sửa hàng loạt nếu có liên quan
"Sửa cả hai vấn đề trong các lượt chạy 123 và 124"
```

## Sử Dụng Nâng Cao

### Phân Tích Công Việc (Job) Cụ Thể

```bash
/fix:ci https://github.com/user/repo/actions/runs/123 --job=test
```

### Tự Động Chạy Lại Sau Khi Sửa

```bash
/fix:ci https://github.com/user/repo/actions/runs/123 --auto-rerun
```

### Tạo Issue Nếu Không Thể Sửa

```bash
/fix:ci https://github.com/user/repo/actions/runs/123 --create-issue
```

## Xử Lý Sự Cố

### Không Thể Truy Cập Nhật Ký

**Vấn đề:** "gh: Not authenticated"

**Giải pháp:**
```bash
gh auth login
gh auth status

# Cấp các quyền cần thiết
gh auth refresh -s repo -s workflow
```

### Bản Sửa Lỗi Không Hoạt Động

**Vấn đề:** Bản sửa lỗi đã được áp dụng nhưng CI vẫn thất bại

**Giải pháp:**
```bash
# Nhận thêm chi tiết
/debug [thất bại CI trong công việc X]

# Sử dụng lệnh sửa lỗi toàn diện
/fix:hard [mô tả vấn đề CI]
```

### Lỗi Cú Pháp Tệp Quy Trình Làm Việc

**Vấn đề:** Không thể phân tích tệp quy trình làm việc

**Giải pháp:**
```bash
# Xác minh quy trình làm việc tại cục bộ
gh workflow view

# Sử dụng công cụ xác thực của GitHub
# https://github.com/user/repo/actions
```

## Các Tình Huống Phổ Biến

### Sau Khi Cập Nhật Phụ Thuộc

```bash
# Cập nhật phụ thuộc
npm update

# CI thất bại
/fix:ci [workflow-url]

# Thường là: Cập nhật file lock, sửa các thay đổi gây phá vỡ
```

### Sau Khi Tái Cấu Trúc (Refactoring)

```bash
# Đã push một đợt tái cấu trúc lớn
# CI thất bại với nhiều lỗi kiểm tra

/fix:ci [workflow-url]

# Sửa các đường dẫn import, cập nhật các bài kiểm tra
```

### Thất Bại Khi Triển Khai (Deployment)

```bash
# Xây dựng thành công nhưng triển khai thất bại
/fix:ci [workflow-url]

# Thường là: Biến môi trường, quyền hạn hoặc thông tin xác thực
```

## Số Liệu

Thời gian sửa lỗi trung bình:
- **Lỗi kiểm tra**: 2-5 phút
- **Lỗi xây dựng**: 3-7 phút
- **Vấn đề lint**: 1-2 phút
- **Lỗi cấu hình**: 1-3 phút
- **Bài kiểm tra không ổn định**: 5-10 phút

Tỷ lệ thành công: Tỷ lệ sửa lỗi tự động khoảng 85%

## Bước Tiếp Theo

- [/plan:ci](/docs/engineer/commands/plan/ci) - Tạo kế hoạch sửa lỗi mà không triển khai
- [/fix:hard](/docs/engineer/commands/fix/hard) - Cho các vấn đề CI phức tạp
- [/test](/docs/engineer/commands/core/test) - Chạy các bài kiểm tra tại cục bộ

---

**Điểm mấu chốt**: `/fix:ci` tự động hóa quy trình phân tích thất bại GitHub Actions tẻ nhạt và triển khai các bản sửa lỗi, giúp đưa đường ống CI của bạn trở lại trạng thái xanh một cách nhanh chóng.
