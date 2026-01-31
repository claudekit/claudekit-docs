---
title: "ClaudeKit Cheatsheet"
description: "Tham khảo nhanh các lệnh ClaudeKit - các lệnh thiết yếu cho quy trình phát triển được hỗ trợ bởi AI."
lang: vi
section: getting-started
category: "getting-started"
order: 5
published: true
lastUpdated: 2025-11-07
---

# ClaudeKit Cheatsheet

Hướng dẫn tham khảo nhanh cho các lệnh ClaudeKit CLI và quy trình làm việc (workflows).

## Cài Đặt

```bash
# Cài đặt ClaudeKit toàn hệ thống (globally)
npm i -g claudekit-cli@latest

# Kiểm tra phiên bản
ck --version
```

## Khởi Động ClaudeKit

```bash
# Di chuyển đến dự án của bạn
cd /path/to/project

# Khởi động Claude Code cùng với ClaudeKit
claude
```

## Thiết Lập Ban Đầu

```bash
# Cho các dự án đã có sẵn (brownfield)
/docs:init

# Cho các dự án mới (greenfield)
ck init --kit engineer --dir /path/to/project

# Đồng bộ các file cấu hình với thượng nguồn (upstream) - trộn thủ công (interactive merge)
ck init --sync

# Sử dụng git clone thay vì API (không cần token)
ck init --use-git
```

## Các Lệnh Cốt Lõi

### Phát Triển

```bash
# Khởi tạo tài liệu và các đặc tả (specs)
/docs:init

# Triển khai tính năng mới
/cook <mô-tả>

# Triển khai tính năng tự động (autonomous)
/cook --auto <mô-tả>

# Chế độ tự động nhanh (ít lập kế hoạch hơn)
/cook --auto --fast <mô-tả>

# Chỉ tạo kế hoạch triển khai
/plan <mô-tả>

# Thực thi một kế hoạch đã có sẵn
/cook <plan.md>

# Khởi tạo dự án mới (bootstrap)
/bootstrap <mô-tả-ý-tưởng>

# Khởi tạo tự động (autonomous bootstrap)
/bootstrap:auto <mô-tả-ý-tưởng>
```

### Sửa Lỗi (Bug Fixing)

```bash
# Sửa lỗi nhanh
/fix --quick <mô-tả>

# Sửa lỗi phức tạp (phân tích sâu hơn)
/fix <mô-tả>

# Tự động lấy logs và sửa lỗi
/fix

# Chạy bộ test và sửa lỗi cho đến khi đạt yêu cầu
/fix

# Sửa các vấn đề trong luồng CI/CD (pipeline)
/fix <github-action-url>
```

### Kiểm Thử (Testing)

```bash
# Chạy bộ test và báo cáo kết quả (không sửa lỗi)
/test
```

### Tài Liệu (Documentation)

```bash
# Khởi tạo tài liệu
/docs:init

# Cập nhật tài liệu
/docs:update

# Tóm tắt tài liệu
/docs:summarize
```

### Thao Tác Git (Git Operations)

```bash
# Tạo commit với thông điệp có ý nghĩa
/git:cm

# Commit và push các thay đổi
/git:cp

# Tạo pull request
/git:pr
```

### Lập Kế Hoạch & Nghiên Cứu

```bash
# Brainstorm các hướng tiếp cận kỹ thuật
/brainstorm <mô-tả>

# Tạo kế hoạch triển khai chi tiết
/plan <mô-tả>

# Lập kế hoạch thiết lập CI/CD hoặc sửa lỗi luồng CI/CD
/plan:ci

# Kế hoạch triển khai hai bước
/plan:two
```

### Tích Hợp (Integration)

```bash
# Tích hợp Polar API
/integrate:polar

# Tích hợp thanh toán SePay
/integrate:sepay
```

### Quản Lý Skills

```bash
# Tạo skill mới
/skill:create

# Sửa các lỗi liên quan đến skill
/skill:fix-logs
```

## So Sánh Các Lệnh

### Luồng Triển Khai Tính Năng

```bash
# Cách 1: Có xem lại kế hoạch (được khuyến nghị)
/cook <mô-tả-tính-năng>
# → CC sẽ đặt thêm câu hỏi
# → Bạn xem lại kế hoạch
# → Bạn phê duyệt
# → Quá trình triển khai bắt đầu

# Cách 2: Tự động hoàn toàn (cẩn thận khi dùng)
/cook --auto <mô-tả-tính-năng>
# → Triển khai tự động mà không cần xem lại kế hoạch

# Cách 3: Tự động nhanh (tiết kiệm token nhất)
/cook --auto --fast <mô-tả-tính-năng>
# → Chế độ nhanh với việc lập kế hoạch tối thiểu
```

### Luồng Sửa Lỗi

```bash
# Các lỗi đơn giản
/fix --quick <mô-tả-lỗi>

# Các lỗi phức tạp
/fix <mô-tả-lỗi>

# Sửa từ logs
/fix

# Sửa từ các test bị thất bại
/fix

# Sửa từ CI/CD
/fix <action-url>
```

## Các Quy Trình Làm Việc Thường Gặp (Common Workflows)

### Thiết Lập Dự Án Brownfield (Dự án đã có sẵn)

```bash
# 1. Cài đặt ClaudeKit
npm i -g claudekit-cli@latest

# 2. Di chuyển đến dự án
cd /path/to/existing/project

# 3. Khởi động Claude Code
claude

# 4. Khởi tạo
/docs:init

# 5. Bắt đầu làm việc
/cook <tính-năng>
```

### Thiết Lập Dự Án Greenfield (Dự án mới hoàn toàn)

```bash
# 1. Cài đặt ClaudeKit
npm i -g claudekit-cli@latest

# 2. Khởi tạo dự án
ck init --kit engineer --dir /path/to/project

# 3. Di chuyển đến dự án
cd /path/to/project

# 4. Khởi động Claude Code
claude

# 5. Khởi tạo ý tưởng (bootstrap)
/bootstrap <mô-tả-ý-tưởng>

# 6. Tiếp tục phát triển
/cook <tính-năng-tiếp-theo>
```

### Phát Triển Tính Năng

```bash
# 1. Lập kế hoạch tính năng
/plan Thêm hồ sơ người dùng với tính năng tải ảnh đại diện

# 2. Xem lại kế hoạch (một file markdown sẽ được tạo ra)

# 3. Triển khai
/cook profile-feature-plan.md

# 4. Kiểm thử
/test

# 5. Sửa lỗi nếu cần
/fix

# 6. Commit
/git:cm
```

### Quy Trình Sửa Lỗi

```bash
# 1. Mô tả lỗi
/fix Lỗi thanh toán trên Safari sau khi xác thực biểu mẫu

# 2. CC phân tích và sửa lỗi
/fix

# 3. Kiểm thử bản sửa lỗi
/test

# 4. Commit
/git:cm
```

### Quy Trình Sửa Lỗi CI/CD

```bash
# 1. Lấy URL của action bị thất bại
# https://github.com/user/repo/actions/runs/12345

# 2. Sửa CI
/fix https://github.com/user/repo/actions/runs/12345

# 3. CC lấy logs, phân tích và sửa lỗi

# 4. Push bản sửa lỗi
/git:cp
```

## Các Ví Dụ Nhanh

### Thêm Xác Thực (Authentication)

```bash
/cook Thêm xác thực JWT với đăng nhập, đăng ký và đặt lại mật khẩu
```

### Sửa Vấn Đề Hiệu Suất

```bash
/fix Dashboard tải chậm khi có hơn 1000 mục
```

### Lập Kế Hoạch Di Cư Cơ Sở Dữ Liệu (Database Migration)

```bash
/plan Di cư từ MongoDB sang PostgreSQL mà không có thời gian dừng (zero downtime)
```

### Tích Hợp Thanh Toán

```bash
/integrate stripe
# hoặc
/cook Thêm tích hợp thanh toán Stripe với tính năng thanh toán theo gói (subscription billing)
```

### Khởi Tạo API Mới

```bash
/bootstrap REST API cho quản lý công việc với các nhóm, dự án, nhiệm vụ và theo dõi thời gian
```

## Các Danh Mục Lệnh

### 🚀 Phát Triển Cốt Lõi
- `/cook` - Triển khai tính năng
- `/plan` - Tạo kế hoạch
- `/code` - Thực thi kế hoạch
- `/bootstrap` - Dự án mới

### 🐛 Kiểm Lỗi & Sửa Lỗi
- `/fix --quick` - Sửa lỗi nhanh
- `/fix` - Sửa lỗi phức tạp
- `/fix` - Sửa lỗi dựa trên log
- `/fix` - Sửa lỗi dựa trên test
- `/fix` - Sửa lỗi CI/CD

### 🧪 Kiểm Thử
- `/test` - Chạy các bộ test

### 📚 Tài Liệu
- `/docs:init` - Khởi tạo
- `/docs:update` - Cập nhật
- `/docs:summarize` - Tóm tắt

### 🔧 Thao Tác Git
- `/git:cm` - Commit thay đổi
- `/git:cp` - Commit và push
- `/git:pr` - Tạo PR

### 💡 Lập Kế Hoạch
- `/plan` - Lập kế hoạch chi tiết
- `/brainstorm` - Khám phá ý tưởng

### 🔌 Tích Hợp
- `/integrate <service>` - Thêm các tích hợp

### ⚙️ Skills
- `/skill:create` - Tạo skill mới
- `/skill:fix-logs` - Sửa lỗi skill

## Lời Khuyên & Thực Hành Tốt Nhất

### 1. Luôn Xem Lại Kế Hoạch
**QUAN TRỌNG:** Xem xét kỹ lưỡng các kế hoạch triển khai trước khi phê duyệt. Kế hoạch tồn tại là có lý do.

### 2. Cung Cấp Đầy Đủ Ngữ Cảnh
Mô tả chi tiết hơn = Kết quả tốt hơn
```bash
# ❌ Không tốt
/cook Thêm tính năng tìm kiếm

# ✅ Tốt
/cook Thêm tính năng tìm kiếm toàn văn cho các bài viết blog với bộ lọc theo danh mục, nhãn và khoảng ngày
```

### 3. Sử Dụng Đúng Lệnh

```bash
# Lỗi nhanh
/fix --quick <vấn-đề-đơn-giản>

# Lỗi phức tạp
/fix <vấn-đề-phức-tạp>

# Tính năng nhỏ
/cook <tính-năng>

# Tính năng lớn
/plan <tính-năng> → xem lại → /cook plan.md
```

### 4. Kiểm Thử Thường Xuyên

```bash
# Sau mỗi tính năng
/test

# Hoặc tự động sửa lỗi test
/fix
```

### 5. Ghi Lại Các Thay Đổi
```bash
# Giữ tài liệu luôn được cập nhật
/docs:update
```

## Khắc Phục Sự Cố

### Lệnh Không Hoạt Động

```bash
# Kiểm tra phiên bản ClaudeKit
ck --version

# Khởi động lại Claude Code
# Thoát ra và chạy: claude
```

### Cần Bắt Đầu Lại Từ Đầu

```bash
# Khởi tạo lại tài liệu
/docs:init
```

### Cần Thêm Sự Trợ Giúp

```bash
# Brainstorm hướng tiếp cận
/brainstorm Cách triển khai <tính-năng-phức-tạp>

# Lấy kế hoạch chi tiết
/plan <điều-bạn-muốn-làm>
```

## Tham Khảo Nhanh Các Lệnh

```bash
# Khởi tạo dự án đã có sẵn
/docs:init

# Tính năng mới (cần xem lại kế hoạch)
/cook <mô-tả-tính-năng>

# Tính năng mới (tự động, không xem lại)
/cook --auto <mô-tả>

# Tính năng mới (nhanh hơn, ít kế hoạch hơn)
/cook --auto --fast <mô-tả>

# Chỉ lập kế hoạch, không triển khai
/plan <mô-tả>

# Code từ một kế hoạch có sẵn
/cook <plan.md>

# Sửa lỗi nhanh
/fix --quick <mô-tả-lỗi>

# Sửa lỗi khó (phân tích sâu hơn)
/fix <mô-tả-lỗi>

# Tự động lấy logs và sửa lỗi
/fix

# Chạy các test và sửa cho đến khi đạt
/fix

# Lấy logs từ GitHub Actions và sửa lỗi
/fix <github-action-url>

# Khởi tạo dự án mới (cần xem lại kế hoạch)
/bootstrap <mô-tả-ý-tưởng>

# Khởi tạo dự án mới (tự động hoàn toàn)
/bootstrap:auto <ý-tưởng>

# Chạy bộ test và báo cáo (không sửa lỗi)
/test
```

## Tài Nguyên

- [Tài liệu đầy đủ](https://docs.claudekit.cc)
- [Tất cả các lệnh](/vi/docs/engineer/commands/)
- [AI Agents](/vi/docs/engineer/agents/)
- [Quy trình làm việc (Workflows)](/vi/docs/core-concepts/workflows)
- [Khắc phục sự cố](/vi/docs/troubleshooting/)
- [Thảo luận trên GitHub](https://github.com/mrgoonie/claudekit-cli/discussions)

---

**In trang này** hoặc giữ nó luôn mở khi làm việc với ClaudeKit để tham khảo lệnh nhanh chóng!
