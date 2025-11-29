---
title: "Dự Án Brownfield"
description: "Documentation for Dự Án Brownfield"
section: workflows
category: workflows
order: 7
published: true
lastUpdated: 2025-11-07
---

# Dự Án Brownfield

Tích hợp ClaudeKit vào dự án hiện tại để nâng cao quy trình phát triển với AI agents. Hoàn hảo cho legacy codebase, dự án nhóm, và áp dụng AI dần dần.

## Cài Đặt

### 1. Cài ClaudeKit CLI

```bash
npm i -g claudekit-cli@latest
```

### 2. Di Chuyển Đến Dự Án

```bash
cd /đường/dẫn/đến/dự/án/hiện/tại
```

### 3. Khởi Động Claude Code

```bash
claude
```

Lệnh này sẽ khởi động Claude Code (CC) với ClaudeKit agents trong thư mục dự án.

## Thiết Lập Ban Đầu

### Phân Tích và Tạo Specs

Để Claude Code quét và phân tích codebase, tạo tài liệu kỹ thuật ban đầu:

```bash
/docs:init
```

Lệnh này sẽ:
- Phân tích cấu trúc dự án
- Hiểu tech stack của bạn
- Tạo tài liệu kỹ thuật ban đầu
- Tạo nền tảng cho phát triển với AI

**Đợi hoàn thành** trước khi thực hiện lệnh khác.

## Quy Trình Làm Việc Cơ Bản

### Triển Khai Tính Năng Mới

```bash
/cook <mô-tả-tính-năng>
```

**Ví dụ:**
```bash
/cook Thêm trang profile người dùng với upload avatar và chỉnh sửa thông tin
```

**Quy trình:**
1. CC sẽ hỏi thêm để làm rõ - trả lời đầy đủ!
2. **QUAN TRỌNG:** Xem kỹ kế hoạch triển khai chi tiết
3. Sau khi đồng ý, CC bắt đầu code
4. Tự động test và code review
5. Báo cáo tóm tắt khi hoàn thành

**Chế độ tự động** (dùng cẩn thận):
- `/cook:auto` - Chế độ tự động hoàn toàn
- `/cook:auto:fast` - Nhanh hơn, ít token hơn

### Sửa Lỗi

#### Sửa Lỗi Nhanh
```bash
/fix:fast <mô-tả-lỗi>
```

Dành cho lỗi đơn giản, dễ sửa.

#### Sửa Lỗi Phức Tạp
```bash
/fix:hard <mô-tả-lỗi>
```

Dành cho lỗi khó, cần phân tích sâu và suy nghĩ lâu hơn.

**Ví dụ:**
```bash
/fix:hard Xác thực người dùng bị lỗi sau khi đăng nhập OAuth khi email chưa verify
```

#### Tự Động Sửa Từ Logs
```bash
/fix:logs
```

Tự động lấy logs và sửa lỗi.

#### Sửa Test Suite
```bash
/fix:test
```

Chạy test suite và tiếp tục sửa cho đến khi tất cả tests pass.

#### Sửa Lỗi CI/CD
```bash
/fix:ci <github-action-url>
```

**Ví dụ:**
```bash
/fix:ci https://github.com/username/repo/actions/runs/12345
```

Lấy logs GitHub Actions và sửa lỗi build/deployment.

### Lập Kế Hoạch & Nghiên Cứu

#### Brainstorm Ý Tưởng
```bash
/brainstorm <mô-tả-của-bạn>
```

Dùng khi không chắc về tính khả thi kỹ thuật hoặc cách triển khai.

**Ví dụ:**
```bash
/brainstorm Tính năng chỉnh sửa cộng tác real-time như Google Docs
```

#### Tạo Kế Hoạch Triển Khai
```bash
/plan <mô-tả-của-bạn>
```

Nghiên cứu và tạo kế hoạch triển khai chi tiết mà không code.

**Ví dụ:**
```bash
/plan Chuyển từ REST API sang GraphQL với khả năng tương thích ngược
```

#### Thực Thi Kế Hoạch Có Sẵn
```bash
/code <kế-hoạch.md>
```

Bắt đầu code từ file markdown kế hoạch.

### Testing

#### Chạy Tests và Báo Cáo
```bash
/test
```

Chạy test suite và tạo báo cáo. Không tự động sửa.

## Lệnh Nâng Cao

### Tài Liệu

```bash
/docs:update    # Cập nhật tài liệu hiện tại
/docs:summarize # Tóm tắt tài liệu
```

### Git Operations

```bash
/git:cm         # Tạo commit message có ý nghĩa
/git:cp    # Commit và push changes
/git:pr   # Tạo pull request
```

### Tích Hợp

```bash
/integrate polar  # Tích hợp Polar API
/integrate sepay  # Tích hợp thanh toán SePay
```

### Quản Lý Skills

```bash
/skill:create    # Tạo skill mới
/skill:fix-logs  # Sửa lỗi skill
```

## Best Practices

### 1. Bắt Đầu Với Tài Liệu
Luôn chạy `/docs:init` trước để CC hiểu codebase của bạn.

### 2. Xem Kỹ Kế Hoạch
**QUAN TRỌNG:** Luôn xem kỹ kế hoạch triển khai trước khi đồng ý. CC cung cấp kế hoạch chi tiết có lý do.

### 3. Tích Hợp Từng Bước
- Bắt đầu với tính năng nhỏ
- Sửa lỗi không quan trọng trước
- Dần dần tăng độ phức tạp
- Xây dựng niềm tin cho team

### 4. Dùng Đúng Lệnh
- Lỗi đơn giản → `/fix:fast`
- Lỗi phức tạp → `/fix:hard`
- Tính năng nhỏ → `/cook`
- Tính năng lớn → `/plan` rồi `/code`

### 5. Test Thường Xuyên
Chạy `/test` thường xuyên để phát hiện lỗi sớm.

## Tình Huống Thường Gặp

### Thêm Tính Năng Vào Legacy Code

```bash
# 1. Phân tích codebase
/docs:init

# 2. Lên kế hoạch tính năng
/plan Thêm hệ thống roles và permissions cho user

# 3. Xem và đồng ý kế hoạch

# 4. Triển khai
/code plan.md

# 5. Test
/test
```

### Sửa Lỗi Production

```bash
# 1. Sửa nhanh cho vấn đề khẩn cấp
/fix:fast Thanh toán bị lỗi trên trình duyệt Safari

# 2. Test bản sửa
/test

# 3. Commit và deploy
/git:cp
```

### Refactor Legacy Module

```bash
# 1. Brainstorm cách tiếp cận
/brainstorm Refactor module authentication sang JWT hiện đại

# 2. Tạo kế hoạch chi tiết
/plan Refactor auth module với khả năng tương thích ngược

# 3. Xem kỹ kế hoạch

# 4. Triển khai từng bước
/code auth-refactor-plan.md

# 5. Chạy full test suite
/fix:test
```

## Cộng Tác Nhóm

### Chia Sẻ Configuration
Chia sẻ thư mục `.claude/` và specs đã tạo với team qua git.

### Onboarding Thành Viên Mới

```bash
# 1. Clone repository
git clone <repo-url>

# 2. Cài ClaudeKit
npm i -g claudekit-cli@latest

# 3. Di chuyển đến project
cd project-name

# 4. Khởi động Claude Code
claude

# 5. Specs đã có sẵn - bắt đầu làm việc!
/cook Thêm tính năng mới
```

## Xử Lý Sự Cố

### CC Không Hiểu Codebase
```bash
# Tạo lại specs
/docs:init
```

### Lệnh Không Hoạt Động
```bash
# Kiểm tra cài đặt ClaudeKit
ck --version

# Khởi động lại Claude Code
# Thoát CC và chạy: claude
```

### Cần Thêm Context
Cung cấp mô tả chi tiết trong lệnh. Nhiều context = kết quả tốt hơn.

## Bước Tiếp Theo

Sau khi tích hợp thành công:

1. **Khám Phá Lệnh**: Xem [Tài Liệu Lệnh](/vi/docs/commands/)
2. **Tìm Hiểu Agents**: Hiểu [Specialized Agents](/vi/docs/agents/)
3. **Workflows Nâng Cao**: Xem [Workflows Guide](/vi/docs/core-concepts/workflows)
4. **Đào Tạo Team**: Chia sẻ best practices với team

---

**Cần giúp?** Xem [Troubleshooting Guide](/vi/docs/troubleshooting/) hoặc [GitHub Discussions](https://github.com/mrgoonie/claudekit-cli/discussions)
