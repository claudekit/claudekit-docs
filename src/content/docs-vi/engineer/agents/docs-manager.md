---
title: Agent Docs Manager
description: Chuyên gia tài liệu kỹ thuật cao cấp cho việc tạo, duy trì và tổ chức tài liệu cho nhà phát triển
section: engineer
kit: engineer
category: agents
order: 9
published: true
lang: vi
---

# Agent Docs Manager

Agent docs-manager là một chuyên gia tài liệu kỹ thuật cao cấp chịu trách nhiệm tạo, duy trì và tổ chức tất cả các tài liệu dành cho nhà phát triển. Nó đảm bảo tài liệu luôn chính xác, toàn diện và đồng bộ với mã nguồn.

## Mục đích

Tạo, duy trì và tổ chức tài liệu cho nhà phát triển để đảm bảo tính chính xác với mã nguồn, thiết lập các tiêu chuẩn triển khai và tối đa hóa năng suất của nhà phát triển.

## Mô hình & Chuyên môn

**Mô hình**: Sonnet (đầy đủ tính năng để phân tích toàn diện)

**Lĩnh vực chuyên môn**:
- Các tiêu chuẩn và hướng dẫn triển khai
- Tài liệu và đặc tả API
- Yêu cầu Phát triển Sản phẩm (PDRs)
- Tài liệu kiến trúc hệ thống
- Các tiêu chuẩn và quy ước mã nguồn
- Phân tích và tóm tắt mã nguồn

## Khi nào được kích hoạt

Agent docs-manager được kích hoạt khi:

- Sau khi triển khai các tính năng
- Sau khi có thay đổi mã nguồn yêu cầu cập nhật tài liệu
- Sử dụng lệnh `/docs:init` (thiết lập ban đầu)
- Sử dụng lệnh `/docs:update` (cập nhật tài liệu)
- Sử dụng lệnh `/docs:summarize` (tóm tắt mã nguồn)
- Xem xét toàn bộ thư mục `docs/`
- Thiết lập các tiêu chuẩn mã nguồn

## Khả năng

### Phân tích & Duy trì tài liệu

**Đánh giá hệ thống**:
- Đọc tất cả tài liệu trong thư mục `./docs`
- Xác định các khoảng trống và sự không nhất quán
- Tham chiếu chéo với mã nguồn thực tế
- Đảm bảo phân cấp tài liệu
- Cập nhật các thông tin lỗi thời

**Đảm bảo chất lượng**:
- Xác nhận độ chính xác kỹ thuật
- Kiểm tra các ví dụ mã nguồn hoạt động được
- Xác nhận các liên kết và tham chiếu
- Đảm bảo định dạng nhất quán
- Xác nhận việc sử dụng đúng quy tắc viết hoa (PascalCase, camelCase, snake_case)

### Tóm tắt mã nguồn

**Sử dụng Repomix**:
```bash
repomix
# Tạo ra: ./repomix-output.xml
```

**Tạo bản tóm tắt**:
- Phân tích mã nguồn đã được đóng gói
- Tạo tệp `./docs/codebase-summary.md`
- Bao gồm thống kê tệp
- Tài liệu hóa các mẫu kiến trúc
- Liệt kê các thành phần chính

### Tiêu chuẩn triển khai

**Tài liệu hóa**:
- Các mẫu cấu trúc mã nguồn
- Thực hành tốt nhất về xử lý lỗi
- Các quy ước thiết kế API
- Chiến lược kiểm thử
- Các giao thức bảo mật

### Yêu cầu Phát triển Sản phẩm (PDRs)

**Tạo và Duy trì**:
- Các yêu cầu chức năng
- Các yêu cầu phi chức năng
- Tiêu chí chấp nhận
- Các chỉ số thành công
- Các ràng buộc kỹ thuật
- Hướng dẫn triển khai

### Điều phối Agent Scout

**Khám phá song song**:
Agent có thể điều phối các Agent Scout thực hiện tìm kiếm song song các tệp xác thực, các điểm cuối API và các mô hình cơ sở dữ liệu để tổng hợp kết quả và cập nhật tài liệu.

## Cấu trúc tài liệu

Docs-manager duy trì cấu trúc sau:

```
./docs/
├── project-overview-pdr.md    # Yêu cầu sản phẩm & lộ trình
├── code-standards.md           # Tiêu chuẩn & quy ước mã nguồn
├── codebase-summary.md         # Bản tóm tắt do Repomix tạo ra
├── design-guidelines.md        # Đặc tả hệ thống thiết kế
├── deployment-guide.md         # Hướng dẫn triển khai sản xuất
├── system-architecture.md      # Kiến trúc kỹ thuật
└── project-roadmap.md          # Dòng thời gian & cột mốc dự án
```

## Ví dụ sử dụng

### Thiết lập tài liệu ban đầu

Khi chạy `/docs:init`, Agent sẽ:
1. Phân tích mã nguồn bằng Repomix.
2. Chạy các Scout song song để khám phá cấu trúc.
3. Tạo các tệp tài liệu cơ bản như tóm tắt mã nguồn, tiêu chuẩn mã nguồn, kiến trúc hệ thống.
4. Xác nhận tính chính xác và định dạng.

### Cập nhật tài liệu sau khi có tính năng mới

Khi chạy `/docs:update` sau khi thêm một tính năng (ví dụ: xác thực), Agent sẽ:
1. Phát hiện các thay đổi thông qua `git diff`.
2. Xác định các tài liệu cần cập nhật (kiến trúc, tiêu chuẩn, tóm tắt mã nguồn).
3. Sử dụng Scout để hiểu bối cảnh của tính năng mới.
4. Cập nhật các phần tương ứng trong tài liệu với các sơ đồ kiến trúc, giao thức bảo mật và ví dụ sử dụng mới.

## Định dạng đầu ra

Tất cả tài liệu sử dụng định dạng Markdown nhất quán với:
- Phân cấp tiêu đề rõ ràng.
- Các khối mã nguồn có chỉ định ngôn ngữ.
- Các liên kết có mô tả rõ ràng.
- Tuân thủ nghiêm ngặt các quy ước đặt tên (camelCase cho biến, PascalCase cho lớp, snake_case cho cơ sở dữ liệu).

## Liên quan

- [Agent Project Manager](/vi/docs/engineer/agents/project-manager) - Điều phối tổng thể dự án
- [Tiêu chuẩn mã nguồn](/vi/docs/core-concepts/code-standards) - Các quy ước mã nguồn
- [Kiến trúc hệ thống](/vi/docs/core-concepts/system-architecture) - Thiết kế kỹ thuật
- [Các lệnh](/vi/docs/engineer/commands/) - Các lệnh liên quan đến tài liệu

---

**Thông điệp chính**: Agent docs-manager đảm bảo tài liệu luôn chính xác, toàn diện và đồng bộ với mã nguồn thông qua phân tích tự động, tích hợp Repomix và các quy trình duy trì hệ thống.
