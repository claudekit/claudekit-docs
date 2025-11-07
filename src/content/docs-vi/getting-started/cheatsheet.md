---
title: "ClaudeKit Cheatsheet"
description: "Tham khảo nhanh các lệnh ClaudeKit - lệnh thiết yếu cho quy trình phát triển AI-powered."
category: "getting-started"
order: 5
published: true
lastUpdated: 2025-11-07
---

# ClaudeKit Cheatsheet

Hướng dẫn tham khảo nhanh cho ClaudeKit CLI commands và workflows.

## Cài Đặt

```bash
# Cài ClaudeKit globally
npm i -g claudekit-cli@latest

# Kiểm tra phiên bản
claudekit --version
```

## Khởi Động ClaudeKit

```bash
# Di chuyển đến dự án
cd /đường/dẫn/đến/dự/án

# Khởi động Claude Code với ClaudeKit
claude
```

## Thiết Lập Ban Đầu

```bash
# Cho dự án có sẵn (brownfield)
/docs:init

# Cho dự án mới (greenfield)
ck new --kit engineer --dir /đường/dẫn/đến/dự/án
```

## Lệnh Cơ Bản

### Phát Triển

```bash
# Khởi tạo tài liệu và specs
/docs:init

# Triển khai tính năng mới
/cook <mô-tả>

# Triển khai tính năng tự động
/cook:auto <mô-tả>

# Chế độ tự động nhanh (ít plan hơn)
/cook:auto:fast <mô-tả>

# Chỉ tạo kế hoạch triển khai
/plan <mô-tả>

# Thực thi kế hoạch có sẵn
/code <plan.md>

# Bootstrap dự án mới
/bootstrap <mô-tả-ý-tưởng>

# Bootstrap tự động
/bootstrap:auto <mô-tả-ý-tưởng>
```

### Sửa Lỗi

```bash
# Sửa lỗi nhanh
/fix:fast <mô-tả>

# Sửa lỗi phức tạp (phân tích sâu)
/fix:hard <mô-tả>

# Tự động lấy logs và sửa
/fix:logs

# Chạy test suite và sửa cho đến khi pass
/fix:test

# Sửa lỗi CI/CD pipeline
/fix:ci <github-action-url>
```

### Testing

```bash
# Chạy test suite và báo cáo (không sửa)
/test
```

### Tài Liệu

```bash
# Khởi tạo tài liệu
/docs:init

# Cập nhật tài liệu
/docs:update

# Tóm tắt tài liệu
/docs:summarize
```

### Git Operations

```bash
# Tạo commit với message có ý nghĩa
/commit

# Commit và push changes
/commit-push

# Tạo pull request
/pull-request
```

### Lập Kế Hoạch & Nghiên Cứu

```bash
# Brainstorm cách tiếp cận kỹ thuật
/brainstorm <mô-tả>

# Tạo kế hoạch triển khai chi tiết
/plan <mô-tả>

# Lên kế hoạch CI/CD setup
/plan ci

# Kế hoạch triển khai hai bước
/plan two
```

### Tích Hợp

```bash
# Tích hợp Polar API
/integrate polar

# Tích hợp thanh toán SePay
/integrate sepay
```

### Quản Lý Skills

```bash
# Tạo skill mới
/skill create

# Sửa lỗi skill
/skill fix-logs
```

## So Sánh Lệnh

### Quy Trình Triển Khai Tính Năng

```bash
# Cách 1: Với review plan (khuyến nghị)
/cook <mô-tả-tính-năng>
# → CC hỏi thêm câu hỏi
# → Xem kế hoạch
# → Đồng ý
# → Bắt đầu triển khai

# Cách 2: Tự động (dùng cẩn thận)
/cook:auto <mô-tả-tính-năng>
# → Tự động hoàn toàn không review plan

# Cách 3: Tự động nhanh (ít tokens nhất)
/cook:auto:fast <mô-tả-tính-năng>
# → Chế độ nhanh với kế hoạch tối thiểu
```

### Quy Trình Sửa Lỗi

```bash
# Lỗi đơn giản
/fix:fast <mô-tả-lỗi>

# Lỗi phức tạp
/fix:hard <mô-tả-lỗi>

# Từ logs
/fix:logs

# Từ tests thất bại
/fix:test

# Từ CI/CD
/fix:ci <action-url>
```

## Quy Trình Làm Việc Thường Gặp

### Thiết Lập Dự Án Brownfield

```bash
# 1. Cài ClaudeKit
npm i -g claudekit-cli@latest

# 2. Đi đến dự án
cd /đường/dẫn/đến/dự/án/hiện/tại

# 3. Khởi động Claude Code
claude

# 4. Khởi tạo
/docs:init

# 5. Bắt đầu làm việc
/cook <tính-năng>
```

### Thiết Lập Dự Án Greenfield

```bash
# 1. Cài ClaudeKit
npm i -g claudekit-cli@latest

# 2. Tạo dự án
ck new --kit engineer --dir /đường/dẫn/đến/dự/án

# 3. Di chuyển đến dự án
cd /đường/dẫn/đến/dự/án

# 4. Khởi động Claude Code
claude

# 5. Bootstrap ý tưởng
/bootstrap <mô-tả-ý-tưởng>

# 6. Tiếp tục phát triển
/cook <tính-năng-tiếp-theo>
```

### Phát Triển Tính Năng

```bash
# 1. Lên kế hoạch tính năng
/plan Thêm user profile với upload avatar

# 2. Xem kế hoạch (file markdown được tạo)

# 3. Triển khai
/code profile-feature-plan.md

# 4. Test
/test

# 5. Sửa nếu cần
/fix:test

# 6. Commit
/commit-push
```

### Quy Trình Sửa Lỗi

```bash
# 1. Mô tả lỗi
/fix:hard Thanh toán bị lỗi trên Safari sau khi validate form

# 2. CC phân tích và sửa

# 3. Test bản sửa
/test

# 4. Commit
/commit
```

### Quy Trình Sửa CI/CD

```bash
# 1. Lấy URL action bị lỗi
# https://github.com/user/repo/actions/runs/12345

# 2. Sửa CI
/fix:ci https://github.com/user/repo/actions/runs/12345

# 3. CC lấy logs, phân tích, sửa

# 4. Push bản sửa
/commit-push
```

## Ví Dụ Nhanh

### Thêm Authentication

```bash
/cook Thêm JWT authentication với login, register và password reset
```

### Sửa Vấn Đề Performance

```bash
/fix:hard Dashboard load chậm với 1000+ items
```

### Lên Kế Hoạch Database Migration

```bash
/plan Migrate từ MongoDB sang PostgreSQL với zero downtime
```

### Tích Hợp Payment

```bash
/integrate stripe
# hoặc
/cook Thêm Stripe payment integration với subscription billing
```

### Bootstrap API Mới

```bash
/bootstrap REST API cho task management với teams, projects, tasks và time tracking
```

## Phân Loại Lệnh

### 🚀 Phát Triển Cốt Lõi
- `/cook` - Triển khai tính năng
- `/plan` - Tạo kế hoạch
- `/code` - Thực thi kế hoạch
- `/bootstrap` - Dự án mới

### 🐛 Debug & Sửa Lỗi
- `/fix:fast` - Sửa nhanh
- `/fix:hard` - Sửa phức tạp
- `/fix:logs` - Sửa từ logs
- `/fix:test` - Sửa từ tests
- `/fix:ci` - Sửa CI/CD

### 🧪 Testing
- `/test` - Chạy tests

### 📚 Tài Liệu
- `/docs:init` - Khởi tạo
- `/docs:update` - Cập nhật
- `/docs:summarize` - Tóm tắt

### 🔧 Git Operations
- `/commit` - Commit changes
- `/commit-push` - Commit và push
- `/pull-request` - Tạo PR

### 💡 Lập Kế Hoạch
- `/plan` - Kế hoạch chi tiết
- `/brainstorm` - Khám phá ý tưởng

### 🔌 Tích Hợp
- `/integrate <service>` - Thêm integrations

### ⚙️ Skills
- `/skill create` - Skills mới
- `/skill fix-logs` - Sửa skills

## Tips & Best Practices

### 1. Luôn Xem Kế Hoạch
**QUAN TRỌNG:** Xem kỹ kế hoạch triển khai trước khi đồng ý. Kế hoạch tồn tại vì lý do.

### 2. Cung Cấp Context
Mô tả chi tiết hơn = kết quả tốt hơn
```bash
# ❌ Không tốt
/cook Thêm search

# ✅ Tốt
/cook Thêm full-text search cho blog posts với filters theo category, tag và date range
```

### 3. Dùng Đúng Lệnh

```bash
# Lỗi nhanh
/fix:fast <vấn-đề-đơn-giản>

# Lỗi phức tạp
/fix:hard <vấn-đề-phức-tạp>

# Tính năng nhỏ
/cook <tính-năng>

# Tính năng lớn
/plan <tính-năng> → xem → /code plan.md
```

### 4. Test Thường Xuyên

```bash
# Sau mỗi tính năng
/test

# Hoặc tự động sửa tests
/fix:test
```

### 5. Cập Nhật Tài Liệu

```bash
# Giữ docs cập nhật
/docs:update
```

## Xử Lý Sự Cố

### Lệnh Không Hoạt Động

```bash
# Kiểm tra phiên bản ClaudeKit
claudekit --version

# Khởi động lại Claude Code
# Thoát và chạy: claude
```

### Cần Bắt Đầu Lại

```bash
# Khởi tạo lại docs
/docs:init --force
```

### Cần Thêm Giúp Đỡ

```bash
# Brainstorm cách tiếp cận
/brainstorm Cách triển khai <tính-năng-phức-tạp>

# Lấy kế hoạch chi tiết
/plan <điều-bạn-muốn-làm>
```

## Tham Khảo Nhanh Theo Ngôn Ngữ

### Tiếng Việt

```bash
# Khởi tạo dự án có sẵn
/docs:init

# Tính năng mới (cần review plan)
/cook <mô-tả-tính-năng>

# Tính năng mới (tự động, ko review)
/cook:auto <mô-tả>

# Tính năng mới (nhanh hơn, ít plan hơn)
/cook:auto:fast <mô-tả>

# Chỉ lên plan, không code
/plan <mô-tả>

# Code theo plan có sẵn
/code <plan.md>

# Sửa lỗi nhanh
/fix:fast <mô-tả-lỗi>

# Sửa lỗi khó (suy nghĩ lâu hơn)
/fix:hard <mô-tả-lỗi>

# Tự lấy logs và sửa
/fix:logs

# Chạy test và sửa tới chết
/fix:test

# Lấy logs GitHub Actions và sửa
/fix:ci <github-action-url>

# Tạo dự án mới (cần review plan)
/bootstrap <ý-tưởng>

# Tạo dự án mới (tự động tới chết)
/bootstrap:auto <ý-tưởng>

# Chạy test và báo cáo (không sửa)
/test
```

### English

```bash
# Initialize existing project
/docs:init

# New feature (needs plan review)
/cook <feature-description>

# New feature (autonomous, no review)
/cook:auto <description>

# New feature (faster, less planning)
/cook:auto:fast <description>

# Only plan, no implementation
/plan <description>

# Code from existing plan
/code <plan.md>

# Quick bug fix
/fix:fast <bug-description>

# Hard bug fix (deeper analysis)
/fix:hard <bug-description>

# Auto-fetch logs and fix
/fix:logs

# Run tests and fix till passing
/fix:test

# Fetch GitHub Actions logs and fix
/fix:ci <github-action-url>

# Create new project (needs plan review)
/bootstrap <idea-description>

# Create new project (autonomous till death)
/bootstrap:auto <idea>

# Run test suite and report (no fixes)
/test
```

## Tài Nguyên

- [Tài Liệu Đầy Đủ](https://docs.claudekit.cc)
- [Tất Cả Lệnh](/vi/docs/commands/)
- [AI Agents](/vi/docs/agents/)
- [Workflows](/vi/docs/core-concepts/workflows)
- [Troubleshooting](/vi/docs/troubleshooting/)
- [GitHub Discussions](https://github.com/mrgoonie/claudekit-cli/discussions)

---

**In trang này** hoặc giữ mở khi làm việc với ClaudeKit để tham khảo lệnh nhanh!
