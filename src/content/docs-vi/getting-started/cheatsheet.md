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
/ck:docs init

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
/ck:docs init

# Triển khai tính năng mới
/ck:cook <mô-tả>

# Triển khai tính năng tự động (autonomous)
/ck:cook --auto <mô-tả>

# Chế độ tự động nhanh (ít lập kế hoạch hơn)
/ck:cook --auto --fast <mô-tả>

# Chỉ tạo kế hoạch triển khai
/ck:plan <mô-tả>

# Thực thi một kế hoạch đã có sẵn
/ck:cook <plan.md>

# Khởi tạo dự án mới (bootstrap)
/ck:bootstrap <mô-tả-ý-tưởng>

# Khởi tạo tự động (autonomous bootstrap)
/ck:bootstrap --auto <mô-tả-ý-tưởng>
```

### Sửa Lỗi (Bug Fixing)

```bash
# Sửa lỗi nhanh
/ck:fix --quick <mô-tả>

# Sửa lỗi phức tạp (phân tích sâu hơn)
/ck:fix <mô-tả>

# Tự động lấy logs và sửa lỗi
/ck:fix

# Chạy bộ test và sửa lỗi cho đến khi đạt yêu cầu
/ck:fix

# Sửa các vấn đề trong luồng CI/CD (pipeline)
/ck:fix <github-action-url>
```

### Kiểm Thử (Testing)

```bash
# Chạy bộ test và báo cáo kết quả (không sửa lỗi)
/ck:test
```

### Tài Liệu (Documentation)

```bash
# Khởi tạo tài liệu
/ck:docs init

# Cập nhật tài liệu
/ck:docs update

# Tóm tắt tài liệu
/ck:docs summarize
```

### Thao Tác Git (Git Operations)

```bash
# Tạo commit với thông điệp có ý nghĩa
/ck:git cm

# Commit và push các thay đổi
/ck:git cp

# Tạo pull request
/ck:git pr
```

### Lập Kế Hoạch & Nghiên Cứu

```bash
# Brainstorm các hướng tiếp cận kỹ thuật
/ck:brainstorm <mô-tả>

# Tạo kế hoạch triển khai chi tiết
/ck:plan <mô-tả>

# Lập kế hoạch thiết lập CI/CD hoặc sửa lỗi luồng CI/CD
/ck:plan

# Kế hoạch triển khai hai bước
/ck:plan --two
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
skill-creator skill

# Sửa các lỗi liên quan đến skill
skill-creator skill
```

## So Sánh Các Lệnh

### Luồng Triển Khai Tính Năng

```bash
# Cách 1: Có xem lại kế hoạch (được khuyến nghị)
/ck:cook <mô-tả-tính-năng>
# → CC sẽ đặt thêm câu hỏi
# → Bạn xem lại kế hoạch
# → Bạn phê duyệt
# → Quá trình triển khai bắt đầu

# Cách 2: Tự động hoàn toàn (cẩn thận khi dùng)
/ck:cook --auto <mô-tả-tính-năng>
# → Triển khai tự động mà không cần xem lại kế hoạch

# Cách 3: Tự động nhanh (tiết kiệm token nhất)
/ck:cook --auto --fast <mô-tả-tính-năng>
# → Chế độ nhanh với việc lập kế hoạch tối thiểu
```

### Luồng Sửa Lỗi

```bash
# Các lỗi đơn giản
/ck:fix --quick <mô-tả-lỗi>

# Các lỗi phức tạp
/ck:fix <mô-tả-lỗi>

# Sửa từ logs
/ck:fix

# Sửa từ các test bị thất bại
/ck:fix

# Sửa từ CI/CD
/ck:fix <action-url>
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
/ck:docs init

# 5. Bắt đầu làm việc
/ck:cook <tính-năng>
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
/ck:bootstrap <mô-tả-ý-tưởng>

# 6. Tiếp tục phát triển
/ck:cook <tính-năng-tiếp-theo>
```

### Phát Triển Tính Năng

```bash
# 1. Lập kế hoạch tính năng
/ck:plan Thêm hồ sơ người dùng với tính năng tải ảnh đại diện

# 2. Xem lại kế hoạch (một file markdown sẽ được tạo ra)

# 3. Triển khai
/ck:cook profile-feature-plan.md

# 4. Kiểm thử
/ck:test

# 5. Sửa lỗi nếu cần
/ck:fix

# 6. Commit
/ck:git cm
```

### Quy Trình Sửa Lỗi

```bash
# 1. Mô tả lỗi
/ck:fix Lỗi thanh toán trên Safari sau khi xác thực biểu mẫu

# 2. CC phân tích và sửa lỗi
/ck:fix

# 3. Kiểm thử bản sửa lỗi
/ck:test

# 4. Commit
/ck:git cm
```

### Quy Trình Sửa Lỗi CI/CD

```bash
# 1. Lấy URL của action bị thất bại
# https://github.com/user/repo/actions/runs/12345

# 2. Sửa CI
/ck:fix https://github.com/user/repo/actions/runs/12345

# 3. CC lấy logs, phân tích và sửa lỗi

# 4. Push bản sửa lỗi
/ck:git cp
```

## Các Ví Dụ Nhanh

### Thêm Xác Thực (Authentication)

```bash
/ck:cook Thêm xác thực JWT với đăng nhập, đăng ký và đặt lại mật khẩu
```

### Sửa Vấn Đề Hiệu Suất

```bash
/ck:fix Dashboard tải chậm khi có hơn 1000 mục
```

### Lập Kế Hoạch Di Cư Cơ Sở Dữ Liệu (Database Migration)

```bash
/ck:plan Di cư từ MongoDB sang PostgreSQL mà không có thời gian dừng (zero downtime)
```

### Tích Hợp Thanh Toán

```bash
/integrate stripe
# hoặc
/ck:cook Thêm tích hợp thanh toán Stripe với tính năng thanh toán theo gói (subscription billing)
```

### Khởi Tạo API Mới

```bash
/ck:bootstrap REST API cho quản lý công việc với các nhóm, dự án, nhiệm vụ và theo dõi thời gian
```

## Các Danh Mục Lệnh

### 🚀 Phát Triển Cốt Lõi
- `/ck:cook` - Triển khai tính năng
- `/ck:plan` - Tạo kế hoạch
- `/ck:bootstrap` - Dự án mới

### 🐛 Kiểm Lỗi & Sửa Lỗi
- `/ck:fix --quick` - Sửa lỗi nhanh
- `/ck:fix` - Sửa lỗi phức tạp
- `/ck:fix` - Sửa lỗi dựa trên log
- `/ck:fix` - Sửa lỗi dựa trên test
- `/ck:fix` - Sửa lỗi CI/CD

### 🧪 Kiểm Thử
- `/ck:test` - Chạy các bộ test

### 📚 Tài Liệu
- `/ck:docs init` - Khởi tạo
- `/ck:docs update` - Cập nhật
- `/ck:docs summarize` - Tóm tắt

### 🔧 Thao Tác Git
- `/ck:git cm` - Commit thay đổi
- `/ck:git cp` - Commit và push
- `/ck:git pr` - Tạo PR

### 💡 Lập Kế Hoạch
- `/ck:plan` - Lập kế hoạch chi tiết
- `/ck:brainstorm` - Khám phá ý tưởng

### 🔌 Tích Hợp
- `/integrate <service>` - Thêm các tích hợp

### ⚙️ Skills
- `skill-creator skill` - Tạo skill mới
- `skill-creator skill` - Sửa lỗi skill

## Lời Khuyên & Thực Hành Tốt Nhất

### 1. Luôn Xem Lại Kế Hoạch
**QUAN TRỌNG:** Xem xét kỹ lưỡng các kế hoạch triển khai trước khi phê duyệt. Kế hoạch tồn tại là có lý do.

### 2. Cung Cấp Đầy Đủ Ngữ Cảnh
Mô tả chi tiết hơn = Kết quả tốt hơn
```bash
# ❌ Không tốt
/ck:cook Thêm tính năng tìm kiếm

# ✅ Tốt
/ck:cook Thêm tính năng tìm kiếm toàn văn cho các bài viết blog với bộ lọc theo danh mục, nhãn và khoảng ngày
```

### 3. Sử Dụng Đúng Lệnh

```bash
# Lỗi nhanh
/ck:fix --quick <vấn-đề-đơn-giản>

# Lỗi phức tạp
/ck:fix <vấn-đề-phức-tạp>

# Tính năng nhỏ
/ck:cook <tính-năng>

# Tính năng lớn
/ck:plan <tính-năng> → xem lại → /ck:cook plan.md
```

### 4. Kiểm Thử Thường Xuyên

```bash
# Sau mỗi tính năng
/ck:test

# Hoặc tự động sửa lỗi test
/ck:fix
```

### 5. Ghi Lại Các Thay Đổi
```bash
# Giữ tài liệu luôn được cập nhật
/ck:docs update
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
/ck:docs init
```

### Cần Thêm Sự Trợ Giúp

```bash
# Brainstorm hướng tiếp cận
/ck:brainstorm Cách triển khai <tính-năng-phức-tạp>

# Lấy kế hoạch chi tiết
/ck:plan <điều-bạn-muốn-làm>
```

## Tham Khảo Nhanh Các Lệnh

```bash
# Khởi tạo dự án đã có sẵn
/ck:docs init

# Tính năng mới (cần xem lại kế hoạch)
/ck:cook <mô-tả-tính-năng>

# Tính năng mới (tự động, không xem lại)
/ck:cook --auto <mô-tả>

# Tính năng mới (nhanh hơn, ít kế hoạch hơn)
/ck:cook --auto --fast <mô-tả>

# Chỉ lập kế hoạch, không triển khai
/ck:plan <mô-tả>

# Code từ một kế hoạch có sẵn
/ck:cook <plan.md>

# Sửa lỗi nhanh
/ck:fix --quick <mô-tả-lỗi>

# Sửa lỗi khó (phân tích sâu hơn)
/ck:fix <mô-tả-lỗi>

# Tự động lấy logs và sửa lỗi
/ck:fix

# Chạy các test và sửa cho đến khi đạt
/ck:fix

# Lấy logs từ GitHub Actions và sửa lỗi
/ck:fix <github-action-url>

# Khởi tạo dự án mới (cần xem lại kế hoạch)
/ck:bootstrap <mô-tả-ý-tưởng>

# Khởi tạo dự án mới (tự động hoàn toàn)
/ck:bootstrap --auto <ý-tưởng>

# Chạy bộ test và báo cáo (không sửa lỗi)
/ck:test
```

## Tài Nguyên

- [Tài liệu đầy đủ](https://docs.claudekit.cc)
- [Tất cả các kỹ năng](/vi/docs/engineer/skills)
- [AI Agents](/vi/docs/engineer/agents/)
- [Quy trình làm việc (Workflows)](/vi/docs/engineer/configuration/workflows)
- [Khắc phục sự cố](/vi/docs/support/troubleshooting/)
- [Thảo luận trên GitHub](https://github.com/mrgoonie/claudekit-cli/discussions)

---

**In trang này** hoặc giữ nó luôn mở khi làm việc với ClaudeKit để tham khảo lệnh nhanh chóng!
