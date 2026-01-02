---
title: /docs:update
description: Tài liệu hướng dẫn lệnh update
section: engineer
kit: engineer
category: commands/docs-cmd
order: 61
published: true
lang: vi
---

# /docs:update

Phân tích toàn diện codebase của bạn và cập nhật tất cả các tệp tài liệu để đảm bảo chúng phản ánh chính xác trạng thái hiện tại của dự án. Lệnh này sử dụng agent `docs-manager` để duy trì tài liệu đồng bộ và chất lượng cao.

## Cú Pháp

```bash
/docs:update [yêu cầu bổ sung]
```

### Tham Số

- `[yêu cầu bổ sung]` (tùy chọn): Các cập nhật tài liệu cụ thể hoặc các khu vực cần tập trung.

## Cách Hoạt Động

Lệnh `/docs:update` sử dụng agent `docs-manager` với quy trình làm việc sau:

### 1. Phân Tích Codebase

- Tạo bản nén codebase toàn diện bằng `repomix`
- Tạo/cập nhật tệp `./docs/codebase-summary.md`
- Quét cấu trúc và kiến trúc dự án
- Xác định các thành phần và mẫu (patterns) chính
- Phân tích các phụ thuộc và tích hợp

### 2. Xem Lại Tài Liệu

- Đọc tất cả tài liệu hiện có trong thư mục `./docs/`
- Xác định các thông tin lỗi thời
- Tìm kiếm các lỗ hổng và sự thiếu nhất quán
- Đối chiếu với việc triển khai mã thực tế
- Kiểm tra tính chính xác của các ví dụ và đoạn mã

### 3. Cập Nhật Hệ Thống

- Cập nhật từng tệp tài liệu:
  - `README.md` - Tổng quan dự án và bắt đầu nhanh
  - `docs/project-overview-pdr.md` - Yêu cầu phát triển sản phẩm (PDR)
  - `docs/codebase-summary.md` - Tóm tắt codebase toàn diện
  - `docs/code-standards.md` - Cấu trúc và tiêu chuẩn codebase
  - `docs/system-architecture.md` - Tài liệu kiến trúc hệ thống
  - `docs/project-roadmap.md` - Lộ trình dự án và kế hoạch tương lai
  - `docs/deployment-guide.md` (tùy chọn) - Hướng dẫn triển khai
  - `docs/design-guidelines.md` (tùy chọn) - Hướng dẫn hệ thống thiết kế

### 4. Đảm Bảo Chất Lượng

- Đảm bảo định dạng và thuật ngữ nhất quán
- Xác minh tất cả các liên kết và tham chiếu
- Kiểm tra tính hoạt động của các ví dụ mã
- Duy trì phân cấp tài liệu
- Cập nhật thông tin phiên bản và dấu thời gian

## Khi Nào Nên Sử Dụng

### ✅ Hoàn Hảo Cho

**Sau Khi Hoàn Thành Các Tính Năng Lớn**
```bash
# Đã triển khai hệ thống xác thực mới
/docs:update
```

**Các Dự Án Tái Cấu Trúc (Refactoring)**
```bash
# Đã tái cấu trúc toàn bộ lớp API
/docs:update [tập trung vào các thay đổi kiến trúc API]
```

**Thành Viên Mới Trong Nhóm**
```bash
# Chuẩn bị tài liệu để hướng dẫn thành viên mới
/docs:update [đảm bảo tất cả hướng dẫn thiết lập đều mới nhất]
```

**Trước Khi Phát Hành**
```bash
# Trước khi phát hành phiên bản mới
/docs:update [chuẩn bị cho việc phát hành phiên bản v2.0]
```

**Bảo Trì Định Kỳ Hàng Quý**
```bash
# Xem lại tài liệu định kỳ
/docs:update [kiểm tra tài liệu hàng quý]
```

### ❌ Không Sử Dụng Cho

**Lỗi Đánh Máy Đơn Giản**
```bash
❌ /docs:update [sửa lỗi đánh máy trong README]
✅ Chỉ cần chỉnh sửa trực tiếp tệp README
```

**Không Có Thay Đổi Mã Nguồn**
```bash
❌ /docs:update [chỉ kiểm tra thử]
✅ Chỉ chạy sau khi có những thay đổi mã nguồn đáng kể
```

**Kiểm Tra Trạng Thái Nhanh**
```bash
❌ /docs:update [có gì thay đổi?]
✅ /watzup [xem lại các thay đổi gần đây]
```

## Ví Dụ

### Sau Khi Triển Khai Tính Năng

```bash
/docs:update
```

**Điều gì xảy ra:**
```
1. Đang phân tích codebase
   $ repomix
   ✓ Đã tạo: ./repomix-output.xml (245KB, 45K tokens)
   ✓ Đã tạo: ./docs/codebase-summary.md

2. Đang xem lại tài liệu hiện có
   - README.md: Lỗi thời (đề cập đến cấu trúc API cũ)
   - project-overview-pdr.md: Thiếu các tính năng mới
   - code-standards.md: Đã mới nhất
   - system-architecture.md: Cần cập nhật (microservices mới)
   - codebase-summary.md: Đã được tạo lại

3. Đang cập nhật tài liệu
   ✓ README.md
     - Cập nhật các ví dụ endpoint API
     - Thêm các biến môi trường mới
     - Làm mới danh sách tính năng

   ✓ project-overview-pdr.md
     - Thêm phần xác thực OAuth2
     - Cập nhật các yêu cầu kỹ thuật
     - Thêm các tiêu chí chấp nhận mới

   ✓ system-architecture.md
     - Thêm kiến trúc dịch vụ thanh toán
     - Cập nhật sơ đồ schema cơ sở dữ liệu
     - Ghi lại tích hợp hàng đợi tin nhắn mới

   ✓ codebase-summary.md
     - Tổng quan cấu trúc dự án hoàn chỉnh
     - Tổ chức tệp và quy ước đặt tên
     - Các mẫu kiến trúc chính

4. Tóm tắt
   Số tệp đã cập nhật: 4
   Số phần đã thêm: 12
   Số ví dụ đã làm mới: 8
   Số liên kết hỏng đã sửa: 3

✓ Đã đồng bộ hóa tài liệu (3m 45s)
```

### Cập Nhật Có Trọng Tâm

```bash
/docs:update [cập nhật tài liệu API với các endpoint mới]
```

**Điều gì xảy ra:**
```
1. Đang phân tích các thay đổi API
   - Endpoint mới: 5 (quản lý người dùng)
   - Endpoint đã chỉnh sửa: 3 (xác thực)
   - Endpoint đã lỗi thời: 1 (đăng nhập cũ)

2. Đang cập nhật tài liệu API
   ✓ project-overview-pdr.md
     - Thêm phần các endpoint API
     - Ghi lại định dạng request/response
     - Thêm các yêu cầu xác thực

   ✓ code-standards.md
     - Cập nhật các mẫu thiết kế API
     - Thêm quy ước đặt tên endpoint
     - Ghi lại cấu trúc phản hồi lỗi

   ✓ README.md
     - Thêm các ví dụ bắt đầu nhanh với API
     - Cập nhật quy trình xác thực

3. Xác minh
   - Tất cả endpoint đã được ghi lại
   - Các ví dụ request đã được kiểm tra
   - Các schema response đã được xác minh

✓ Đã cập nhật tài liệu API (2m 12s)
```

### Tài Liệu Trước Khi Phát Hành

```bash
/docs:update [chuẩn bị tài liệu cho phiên bản phát hành v2.0]
```

**Điều gì xảy ra:**
```
1. Xem lại toàn diện
   - Xem lại 8 tệp tài liệu
   - Kiểm tra 156 ví dụ mã
   - Xác minh 43 liên kết

2. Các cập nhật chính
   ✓ README.md
     - Cập nhật phiên bản lên 2.0
     - Thêm phần các thay đổi gây phá vỡ (breaking changes)
     - Làm mới hướng dẫn cài đặt

   ✓ project-overview-pdr.md
     - Thêm tổng quan tính năng v2.0
     - Cập nhật yêu cầu kỹ thuật
     - Thêm hướng dẫn nâng cấp từ v1.x

   ✓ project-roadmap.md
     - Đánh dấu các mục v2.0 là đã hoàn thành
     - Thêm kế hoạch cho v2.1 và v3.0
     - Cập nhật mốc thời gian

   ✓ deployment-guide.md
     - Cập nhật cho kiến trúc triển khai mới
     - Thêm các ví dụ Docker Compose
     - Ghi lại các biến môi trường

3. Kiểm tra chất lượng
   ✓ Tất cả liên kết đã được xác minh
   ✓ Các ví dụ mã đã được kiểm tra
   ✓ Áp dụng định dạng nhất quán
   ✓ Cập nhật số phiên bản đồng nhất

✓ Tài liệu phát hành đã sẵn sàng (4m 23s)
```

### Tài Liệu Kiến Trúc

```bash
/docs:update [tập trung vào kiến trúc hệ thống]
```

**Điều gì xảy ra:**
```
1. Phân tích kiến trúc
   - Microservices: 7 dịch vụ đã xác định
   - Cơ sở dữ liệu: 2 (PostgreSQL, Redis)
   - Hàng đợi tin nhắn: RabbitMQ
   - API bên ngoài: 4 tích hợp

2. Đang cập nhật system-architecture.md
   ✓ Thêm sơ đồ tổng quan hệ thống
   ✓ Ghi lại từng microservice
     - API Gateway
     - Auth Service
     - User Service
     - Payment Service
     - Notification Service
     - Analytics Service
     - Background Job Service

   ✓ Kiến trúc cơ sở dữ liệu
     - Quan hệ schema
     - Chiến lược migration
     - Quy trình sao lưu

   ✓ Các mẫu giao tiếp
     - REST APIs
     - Luồng hàng đợi tin nhắn
     - Kết nối WebSocket

   ✓ Kiến trúc triển khai
     - Điều phối container
     - Cân bằng tải
     - Chiến lược mở rộng

✓ Hoàn tất tài liệu kiến trúc (3m 56s)
```

## Các Tệp Tài Liệu Được Cập Nhật

### Tài Liệu Cốt Lõi

**README.md**
- Tổng quan dự án
- Hướng dẫn bắt đầu nhanh
- Hướng dẫn cài đặt
- Ví dụ sử dụng cơ bản
- Hướng dẫn đóng góp

**docs/project-overview-pdr.md**
- Tầm nhìn và mục tiêu sản phẩm
- Yêu cầu chức năng
- Yêu cầu phi chức năng
- Ràng buộc kỹ thuật
- Tiêu chí chấp nhận
- Chỉ số thành công

**docs/codebase-summary.md**
- Tổng quan cấu trúc dự án
- Tổ chức tệp tin
- Các thành phần chính
- Các mẫu kiến trúc
- Số lượng token và thống kê

**docs/code-standards.md**
- Quy ước lập trình
- Mẫu đặt tên tệp
- Cấu trúc thư mục
- Mẫu xử lý lỗi
- Chiến lược kiểm tra (testing)
- Thực hành bảo mật

**docs/system-architecture.md**
- Kiến trúc cấp cao
- Sơ đồ thành phần
- Luồng dữ liệu
- Bộ công nghệ (Technology stack)
- Các điểm tích hợp
- Kiến trúc triển khai

### Tài Liệu Tùy Chọn

**docs/project-roadmap.md**
- Mốc thời gian tính năng
- Kế hoạch phát hành
- Những cải tiến trong tương lai
- Theo dõi nợ kỹ thuật (technical debt)

**docs/deployment-guide.md**
- Quy trình triển khai
- Thiết lập môi trường
- Quản lý cấu hình
- Giám sát và nhật ký (logging)

**docs/design-guidelines.md**
- Các mẫu UI/UX
- Thư viện thành phần
- Hệ thống thiết kế
- Hướng dẫn về khả năng tiếp cận (accessibility)

## Agent Được Gọi

Lệnh này sử dụng agent **docs-manager** với các khả năng sau:

- **Phân tích tài liệu**: Xem lại toàn bộ tài liệu một cách hệ thống
- **Đồng bộ hóa Codebase**: Đối chiếu tài liệu với mã nguồn
- **Thực thi tiêu chuẩn**: Định dạng và thuật ngữ nhất quán
- **Xác định lỗ hổng**: Tìm kiếm tài liệu bị thiếu hoặc lỗi thời
- **Đảm bảo chất lượng**: Xác minh các ví dụ, liên kết và tham chiếu

## Thực Hành Tốt Nhất

### Chạy Sau Những Thay Đổi Lớn

✅ **Tốt - Sau khi hoàn thành công việc có ý nghĩa:**
```bash
# Sau khi triển khai tính năng
/cook [thêm tích hợp thanh toán]
/fix:types
/test
/docs:update

# Commit tất cả cùng nhau
/git:cm
```

❌ **Xấu - Quá thường xuyên:**
```bash
# Sau mỗi thay đổi nhỏ
/fix:fast [lỗi đánh máy]
/docs:update  # Lãng phí
```

### Cung Cấp Ngữ Cảnh

✅ **Tập trung cụ thể:**
```bash
/docs:update [tập trung vào các thay đổi API và luồng xác thực]
```

❌ **Không có ngữ cảnh:**
```bash
/docs:update  # Vẫn hoạt động nhưng kém mục tiêu hơn
```

### Xem Lại Trước Khi Commit

✅ **Xem lại thay đổi:**
```bash
/docs:update
git diff docs/
# Xem lại các thay đổi
/git:cm
```

## Quy Trình Làm Việc

### Phát Triển Tính Năng Tiêu Chuẩn

```bash
# 1. Lập kế hoạch tính năng
/plan [thêm xác thực OAuth2]

# 2. Triển khai tính năng
/cook [triển khai OAuth2 với các nhà cung cấp Google và GitHub]

# 3. Sửa bất kỳ vấn đề nào
/fix:types
/test

# 4. Cập nhật tài liệu
/docs:update [tài liệu hóa việc triển khai OAuth2]

# 5. Xem lại và commit
git diff
/git:cm
```

### Bảo Trì Tài Liệu Hàng Quý

```bash
# 1. Cập nhật tài liệu
/docs:update [xem lại tài liệu hàng quý]

# 2. Xem lại tất cả các thay đổi
git diff docs/

# 3. Commit các cập nhật tài liệu
/git:cm
```

### Checklist Trước Khi Phát Hành

```bash
# 1. Cập nhật tài liệu
/docs:update [chuẩn bị cho phiên bản phát hành v2.0]

# 2. Xem lại lộ trình
# Chỉnh sửa docs/project-roadmap.md

# 3. Cập nhật changelog
# Chỉnh sửa CHANGELOG.md

# 4. Commit tài liệu phát hành
/git:cm

# 5. Tạo PR phát hành
/git:pr main develop
```

## Xử Lý Sự Cố

### Cập Nhật Không Đầy Đủ

**Vấn đề:** Một số tệp tài liệu không được cập nhật

**Giải pháp:**
```bash
# Chỉ định tệp nào cần được chú ý
/docs:update [cập nhật system-architecture.md và deployment-guide.md]
```

### Các Ví Dụ Lỗi Thời

**Vấn đề:** Các ví dụ mã trong tài liệu không khớp với mã hiện tại

**Giải pháp:**
```bash
# Lệnh tự động phát hiện và cập nhật
/docs:update

# Hoặc chỉ định trọng tâm
/docs:update [làm mới tất cả các ví dụ mã]
```

### Thiếu Tài Liệu

**Vấn đề:** Các tính năng mới không được ghi lại trong tài liệu

**Giải pháp:**
```bash
# Lệnh sẽ tạo các phần còn thiếu
/docs:update [tài liệu hóa dịch vụ thanh toán mới]
```

### Vấn Đề Định Dạng

**Vấn đề:** Định dạng không nhất quán giữa các tài liệu

**Giải pháp:**
```bash
# Lệnh sẽ chuẩn hóa định dạng
/docs:update
```

## Các Lệnh Liên Quan

### Tổng Quan Tài Liệu

```bash
# Tóm tắt nhanh các thay đổi gần đây
/watzup

# Cập nhật tài liệu đầy đủ
/docs:update
```

### Chỉ Tóm Tắt Codebase

```bash
# Chỉ cập nhật bản tóm tắt codebase
/docs:summarize

# Cập nhật tài liệu đầy đủ
/docs:update
```

### Khởi Tạo Tài Liệu

```bash
# Thiết lập tài liệu lần đầu
/docs:init

# Cập nhật thường xuyên sau đó
/docs:update
```

## Cấu Trúc Đầu Ra

Sau khi chạy `/docs:update`, cấu trúc tài liệu của bạn sẽ như sau:

```
./
├── README.md (đã cập nhật)
├── docs/
│   ├── project-overview-pdr.md (đã cập nhật)
│   ├── codebase-summary.md (đã được tạo lại)
│   ├── code-standards.md (đã cập nhật)
│   ├── system-architecture.md (đã cập nhật)
│   ├── project-roadmap.md (đã cập nhật)
│   ├── deployment-guide.md (tùy chọn, đã cập nhật)
│   └── design-guidelines.md (tùy chọn, đã cập nhật)
└── repomix-output.xml (đã được tạo)
```

## Số Liệu Thống Kê

Hiệu suất điển hình của `/docs:update`:

- **Thời gian**: 3-5 phút (tùy thuộc vào kích thước codebase)
- **Tệp được phân tích**: Toàn bộ codebase
- **Tệp được cập nhật**: 4-8 tệp tài liệu
- **Ví dụ mã được xác minh**: Tất cả các ví dụ trong tài liệu
- **Liên kết được kiểm tra**: Tất cả các liên kết nội bộ và bên ngoài

## Bước Tiếp Theo

Sau khi sử dụng `/docs:update`:

- [/docs:summarize](/docs/engineer/commands/docs/summarize) - Chỉ cập nhật bản tóm tắt codebase
- [/watzup](/docs/engineer/commands/core/watzup) - Xem lại các thay đổi gần đây
- [/git:cm](/docs/engineer/commands/git/commit) - Commit các cập nhật tài liệu

---

**Điểm mấu chốt**: `/docs:update` đảm bảo tài liệu của bạn luôn đồng bộ với codebase thông qua phân tích toàn diện và cập nhật hệ thống trên tất cả các tệp tài liệu.
