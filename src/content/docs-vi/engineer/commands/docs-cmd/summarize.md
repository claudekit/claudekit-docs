---
title: /docs:summarize
description: Tài liệu hướng dẫn lệnh summarize
section: engineer
kit: engineer
category: commands/docs-cmd
order: 62
published: true
lang: vi
---

# /docs:summarize

Tạo một bản tóm tắt toàn diện về codebase của bạn bằng cách phân tích cấu trúc dự án, các tệp tin và kiến trúc. Lệnh này tạo hoặc cập nhật tệp `./docs/codebase-summary.md` với cái nhìn tổng quan chi tiết về dự án, số liệu thống kê tệp và số lượng token.

## Cú Pháp

```bash
/docs:summarize
```

Không cần tham số - lệnh sẽ tự động phân tích toàn bộ codebase của bạn.

## Cách Hoạt Động

Lệnh `/docs:summarize` sử dụng agent `docs-manager`:

### 1. Nén Codebase (Codebase Compaction)

- Chạy `repomix` để phân tích toàn bộ dự án
- Tạo tệp `./repomix-output.xml` chứa toàn bộ codebase đã nén
- Tính toán số lượng tệp và thống kê token
- Xác định cấu trúc và các mẫu (patterns) của dự án
- Loại bỏ các thành phần build (artifacts) và các phụ thuộc (dependencies)

### 2. Tạo Bản Tóm Tắt

- Phân tích dữ liệu codebase đã nén
- Xác định các thành phần và module chính
- Phân tích các mẫu tổ chức tệp
- Ghi lại các quyết định về kiến trúc
- Liệt kê bộ công nghệ (stack) và các phụ thuộc

### 3. Tạo Tài Liệu

- Tạo/cập nhật tệp `./docs/codebase-summary.md`
- Bao gồm cây cấu trúc dự án
- Tài liệu hóa việc tổ chức tệp
- Liệt kê các tệp quan trọng và mục đích của chúng
- Cung cấp số lượng token và số liệu thống kê
- Thêm dấu thời gian (timestamp) và thông tin phiên bản

### 4. Đảm Bảo Chất Lượng

- Đảm bảo định dạng nhất quán
- Xác minh đường dẫn tệp và các tham chiếu
- Kiểm tra tính đầy đủ
- Duy trì các tiêu chuẩn tài liệu

## Khi Nào Nên Sử Dụng

### ✅ Hoàn Hảo Cho

**Thành Viên Mới Trong Nhóm**
```bash
# Hướng dẫn lập trình viên mới
/docs:summarize
```

**Bàn Giao Dự Án**
```bash
# Chuẩn bị dự án để chuyển giao
/docs:summarize
```

**Xem Lại Kiến Trúc**
```bash
# Trước khi thực hiện tái cấu trúc (refactoring) lớn
/docs:summarize
```

**Tạo Ngữ Cảnh Cho AI**
```bash
# Tạo ngữ cảnh cho các công cụ AI
/docs:summarize
```

**Bảo Trì Định Kỳ**
```bash
# Xem lại codebase hàng tuần/hàng tháng
/docs:summarize
```

### ❌ Không Sử Dụng Cho

**Cập Nhật Toàn Bộ Tài Liệu**
```bash
❌ /docs:summarize  # Chỉ cập nhật bản tóm tắt
✅ /docs:update     # Cập nhật tất cả tài liệu
```

**Tài Liệu API Chi Tiết**
```bash
❌ /docs:summarize  # Chỉ cung cấp cái nhìn tổng quan cấp cao
✅ /docs:update [tập trung vào tài liệu API]
```

## Ví Dụ

### Tóm Tắt Codebase Cơ Bản

```bash
/docs:summarize
```

**Điều gì xảy ra:**
```
1. Đang phân tích codebase
   $ repomix
   - Đang quét các tệp dự án...
   - Đang xử lý: 245 tệp
   - Loại trừ: node_modules, dist, .git

2. Đang tạo bản nén
   ✓ Đã tạo: ./repomix-output.xml
   - Kích thước: 1.2 MB
   - Tokens: 325,478
   - Số dòng code: 45,234

3. Đang tạo bản tóm tắt
   ✓ Đã cập nhật: ./docs/codebase-summary.md

   Nội dung:
   - Tổng quan dự án
   - Bộ công nghệ (Technology Stack)
   - Cấu trúc dự án (sơ đồ thư mục)
   - Các thành phần chính
   - Tổ chức tệp tin
   - Thống kê và số liệu

✓ Đã tạo bản tóm tắt codebase (1m 23s)
```

### Monorepo Lớn

```bash
/docs:summarize
```

**Điều gì xảy ra:**
```
1. Đang phân tích cấu trúc monorepo
   $ repomix
   - Số package tìm thấy: 8
   - Tổng số tệp: 1,247
   - Thành phần dùng chung: 156

2. Đang xử lý các package
   ✓ packages/api (234 tệp, 78K tokens)
   ✓ packages/web (445 tệp, 125K tokens)
   ✓ packages/mobile (334 tệp, 89K tokens)
   ✓ packages/shared (156 tệp, 45K tokens)
   ✓ packages/database (45 tệp, 12K tokens)
   ✓ packages/auth (67 tệp, 23K tokens)
   ✓ packages/payment (89 tệp, 34K tokens)
   ✓ packages/analytics (78 tệp, 28K tokens)

3. Đang tạo bản tóm tắt toàn diện
   ✓ Đã tạo: ./docs/codebase-summary.md

   Các phần:
   - Tổng quan Monorepo
   - Cấu trúc Package
   - Phụ thuộc giữa các package
   - Thư viện dùng chung
   - Build và Triển khai
   - Quy trình phát triển
   - Thống kê tổng thể

   Số liệu:
   - Tổng số token: 434,000
   - Tổng số tệp: 1,247
   - Tổng số dòng: 156,789

✓ Hoàn tất tóm tắt Monorepo (2m 45s)
```

### Kiến Trúc Microservices

```bash
/docs:summarize
```

**Điều gì xảy ra:**
```
1. Đang phân tích microservices
   $ repomix
   - Số dịch vụ phát hiện: 7
   - Thư viện dùng chung: 3
   - Tệp cấu hình: 23

2. Chi tiết từng dịch vụ
   ✓ services/api-gateway (45 tệp, 15K tokens)
   ✓ services/auth (67 tệp, 23K tokens)
   ✓ services/users (89 tệp, 31K tokens)
   ✓ services/payments (78 tệp, 28K tokens)
   ✓ services/notifications (56 tệp, 19K tokens)
   ✓ services/analytics (67 tệp, 24K tokens)
   ✓ services/background-jobs (45 tệp, 16K tokens)

3. Đang tạo bản tóm tắt
   ✓ Đã cập nhật: ./docs/codebase-summary.md

   Cấu trúc:
   - Tổng quan kiến trúc Microservices
   - Mô tả các dịch vụ
   - Các mẫu giao tiếp
   - Hạ tầng dùng chung
   - Sơ đồ luồng dữ liệu
   - Cấu hình triển khai

   Thống kê:
   - Tổng số dịch vụ: 7
   - Tổng số token: 156,000
   - Kích thước dịch vụ trung bình: 22,000 tokens

✓ Đã tạo bản tóm tắt Microservices (1m 56s)
```

### TypeScript Monorepo

```bash
/docs:summarize
```

**Điều gì xảy ra:**
```
1. Đang quét dự án TypeScript
   $ repomix
   - Tệp TypeScript: 456
   - Định nghĩa kiểu (types): 67
   - Tệp kiểm tra (tests): 234
   - Cấu hình: 12

2. Đang phân tích cấu trúc
   ✓ Đã xác định các module cốt lõi
   ✓ Đã lập sơ đồ phân cấp kiểu
   ✓ Đã tính toán độ bao phủ kiểm tra
   ✓ Đã phân tích các phụ thuộc

3. Bản tóm tắt đã được tạo
   ✓ ./docs/codebase-summary.md

   Bao gồm:
   - Cấu hình TypeScript
   - Cấu trúc Module
   - Tổng quan hệ thống kiểu (Type System)
   - Các Interface và Type quan trọng
   - Tổ chức kiểm tra (Tests)
   - Cấu hình Build

   Số liệu:
   - Phiên bản TypeScript: 5.3.3
   - Tổng số token: 289,456
   - Số tệp kiểu: 67
   - Độ bao phủ kiểm tra: 87%

✓ Hoàn tất tóm tắt TypeScript (1m 34s)
```

## Cấu Trúc Bản Tóm Tắt Được Tạo

Tệp `./docs/codebase-summary.md` bao gồm:

### Tổng Quan Dự Án
- Tên và mô tả dự án
- Bộ công nghệ (Technology stack)
- Các tính năng chính
- Trạng thái phát triển

### Bộ Công Nghệ
- Ngôn ngữ lập trình
- Framework và thư viện
- Công cụ build
- Framework kiểm tra (testing)
- Công cụ hạ tầng

### Cấu Trúc Dự Án
```
project-root/
├── src/
│   ├── api/
│   ├── services/
│   ├── models/
│   └── utils/
├── tests/
├── docs/
└── config/
```

### Các Thành Phần Chính
- Các điểm vào (entry points) chính của ứng dụng
- Các module logic nghiệp vụ cốt lõi
- Các endpoint API và tuyến đường (routes)
- Các model và schema cơ sở dữ liệu
- Các thư viện tiện ích (utils)

### Tổ Chức Tệp Tin
- Quy ước đặt tên
- Các mẫu cấu trúc thư mục
- Tổ chức module
- Các tệp cấu hình

### Thống Kê và Số Liệu
- Tổng số tệp: 245
- Tổng số dòng code: 45,234
- Tổng số token: 325,478
- Độ bao phủ kiểm tra: 87%
- Cập nhật lần cuối: 2025-10-29

## Tích Hợp Repomix

### Repomix là gì?

Repomix là một công cụ đóng gói toàn bộ kho lưu trữ (repository) thành các tệp đơn lẻ, thân thiện với AI:
- Tạo ảnh chụp nhanh (snapshot) toàn diện của codebase
- Tính toán số lượng token cho ngữ cảnh LLM
- Giữ nguyên cấu trúc dự án
- Loại bỏ các tệp không cần thiết

### Các Tệp Được Tạo

**./repomix-output.xml**
- Codebase đã được nén hoàn chỉnh
- Định dạng XML được tối ưu hóa cho AI phân tích
- Bao gồm tất cả các tệp nguồn
- Siêu dữ liệu (metadata) và thống kê

### Cấu Hình Repomix

Các loại trừ mặc định (thông qua `.gitignore` và `.repomixignore`):
```
node_modules/
dist/
build/
.git/
*.log
coverage/
.env
```

## Agent Được Gọi

Lệnh này sử dụng **docs-manager agent** với các khả năng sau:

- **Phân tích Codebase**: Quét dự án toàn diện
- **Xác định cấu trúc**: Nhận diện mẫu trong tổ chức tệp
- **Tạo thống kê**: Số lượng tệp, token, số liệu
- **Tạo tài liệu**: Tạo tệp markdown đã được định dạng
- **Đảm bảo chất lượng**: Xác minh tính nhất quán và đầy đủ

## Thực Hành Tốt Nhất

### Cập Nhật Thường Xuyên

✅ **Tóm tắt định kỳ:**
```bash
# Hàng tuần hoặc sau những thay đổi lớn
/docs:summarize
```

❌ **Quá thường xuyên:**
```bash
# Sau mỗi thay đổi nhỏ
/fix --quick [lỗi đánh máy]
/docs:summarize  # Lãng phí
```

### Trước Những Công Việc Lớn

✅ **Thiết lập mốc cơ sở (baseline):**
```bash
# Trước khi tái cấu trúc
/docs:summarize
# Thực hiện tái cấu trúc
/docs:summarize  # So sánh các thay đổi
```

### Cho Việc Hướng Dẫn (Onboarding)

✅ **Chuẩn bị cho lập trình viên mới:**
```bash
# Cập nhật tài liệu
/docs:summarize
/docs:update

# Thành viên mới có cái nhìn toàn diện về dự án
```

## Quy Trình Làm Việc

### Hướng Dẫn Lập Trình Viên Mới

```bash
# 1. Tạo bản tóm tắt
/docs:summarize

# 2. Cập nhật tài liệu đầy đủ
/docs:update

# 3. Chia sẻ tài liệu
# Chỉ cho lập trình viên mới tệp ./docs/codebase-summary.md
```

### Xem Lại Kiến Trúc

```bash
# 1. Tạo trạng thái hiện tại
/docs:summarize

# 2. Xem lại bản tóm tắt
cat docs/codebase-summary.md

# 3. Lập kế hoạch tái cấu trúc dựa trên những hiểu biết thu được
/plan [tái cấu trúc dựa trên xem lại kiến trúc]
```

### Bàn Giao Dự Án

```bash
# 1. Tạo bản tóm tắt toàn diện
/docs:summarize

# 2. Cập nhật tất cả tài liệu
/docs:update

# 3. Commit tài liệu
/git cm

# 4. Chia sẻ với nhóm tiếp nhận
```

### Bảo Trì Định Kỳ

```bash
# Tác vụ hàng tuần/hàng tháng
/docs:summarize

# Xem lại các thay đổi
git diff docs/codebase-summary.md

# Commit nếu có thay đổi đáng kể
/git cm
```

## Xử Lý Sự Cố

### Không Tìm Thấy Repomix

**Vấn đề:** Lệnh `repomix` không khả dụng

**Giải pháp:**
```bash
# Cài đặt repomix
npm install -g repomix

# Sau đó chạy lệnh
/docs:summarize
```

### Codebase Lớn Bị Timeout

**Vấn đề:** Hết thời gian chờ (timeout) trên các dự án rất lớn

**Giải pháp:**
```bash
# Cấu hình repomix để loại trừ nhiều hơn
echo "target/" >> .repomixignore
echo "*.min.js" >> .repomixignore

# Thử lại
/docs:summarize
```

### Thiếu Tệp Trong Bản Tóm Tắt

**Vấn đề:** Một số tệp không được bao gồm

**Giải pháp:**
```bash
# Kiểm tra .gitignore và .repomixignore
# Loại bỏ các loại trừ nếu cần thiết
# Sau đó tạo lại
/docs:summarize
```

## Sử Dụng Số Lượng Token

### Tại sao số lượng Token lại quan trọng

Số lượng token giúp:
- **Lập kế hoạch ngữ cảnh AI**: Biết liệu codebase có vừa với cửa sổ ngữ cảnh (context window) của LLM không
- **Phạm vi tài liệu**: Hiểu các yêu cầu về tài liệu
- **Xem lại mã (Code Review)**: Ước tính nỗ lực xem lại
- **Lập kế hoạch tái cấu trúc**: Đánh giá độ phức tạp

### Ví Dụ Phân Bổ Token

```
Tổng số token: 325,478

Phân bổ:
- Lớp API: 89,234 tokens (27%)
- Các dịch vụ (Services): 123,456 tokens (38%)
- Models: 45,678 tokens (14%)
- Tiện ích (Utils): 34,567 tokens (11%)
- Kiểm tra (Tests): 32,543 tokens (10%)
```

### Lập Kế Hoạch Cửa Sổ Ngữ Cảnh

```
Claude 3.5 Sonnet: 200K tokens
Kích thước dự án: 325K tokens

Chiến lược:
- Phân tích theo từng module (< 200K mỗi module)
- Sử dụng bản tóm tắt codebase cho các quyết định cấp cao
- Đi sâu vào các module cụ thể khi cần thiết
```

## Các Lệnh Liên Quan

### Cập Nhật Toàn Bộ Tài Liệu

```bash
# Chỉ tóm tắt
/docs:summarize

# Tất cả tài liệu
/docs:update
```

### Khởi Tạo Tài Liệu

```bash
# Thiết lập lần đầu
/docs:init

# Cập nhật định kỳ
/docs:summarize
```

### Xem Lại Thay Đổi

```bash
# Tạo bản tóm tắt
/docs:summarize

# Xem lại công việc gần đây
/watzup
```

## Các Tệp Đầu Ra

Sau khi chạy `/docs:summarize`:

```
./
├── docs/
│   └── codebase-summary.md (được tạo/cập nhật)
└── repomix-output.xml (được tạo)
```

## Số Liệu Thống Kê

Hiệu suất điển hình của `/docs:summarize`:

- **Thời gian**: 1-3 phút (tùy thuộc vào kích thước codebase)
- **Tệp được phân tích**: Tất cả các tệp nguồn (ngoại trừ node_modules, build artifacts)
- **Kích thước đầu ra**: Tệp markdown từ 5-50 KB
- **Độ chính xác token**: Đếm chính xác trên 99%
- **Tần suất cập nhật**: Khuyến nghị hàng tuần hoặc sau các thay đổi lớn

## Bước Tiếp Theo

Sau khi sử dụng `/docs:summarize`:

- [/docs:update](/vi/docs/engineer/commands/docs-cmd/update) - Cập nhật tất cả tài liệu
- [/docs:init](/vi/docs/engineer/commands/docs-cmd/init) - Khởi tạo tài liệu đầy đủ
- [/watzup](/vi/docs/engineer/commands/core/watzup) - Xem lại các thay đổi gần đây
- [/git cm](/vi/docs/engineer/skills/tools/git) - Commit tài liệu

---

**Điểm mấu chốt**: `/docs:summarize` cung cấp cái nhìn tổng quan nhanh chóng và toàn diện về cấu trúc codebase của bạn, giúp lập trình viên hiểu cách tổ chức dự án và đóng vai trò là ngữ cảnh quý giá cho việc phát triển với sự hỗ trợ của AI.
