---
title: "ClaudeKit CLI"
description: "CLI để tạo và quản lý các dự án ClaudeKit"
lang: vi
section: cli
order: 1
---

# ClaudeKit CLI

> Công cụ dòng lệnh nhanh, an toàn để khởi động và quản lý các dự án được cung cấp bởi ClaudeKit từ các bản phát hành GitHub riêng tư.

ClaudeKit CLI (`ck`) giúp bạn tạo và quản lý các dự án được cung cấp bởi ClaudeKit. Được xây dựng bằng Bun và TypeScript, nó cung cấp một giao diện đẹp cho thiết lập dự án, cập nhật và bảo trì.

## Key Features

- Xác thực GitHub đa tầng với lưu trữ thông tin đăng nhập an toàn
- Tải xuống trực tuyến với theo dõi tiến trình và tối ưu hóa nền tảng
- Sáp nhập tệp thông minh với phát hiện xung đột
- Quá trình di chuyển thư mục kỹ năng tự động với xử lý song song
- Cài đặt phụ thuộc hệ thống tự động
- Thông báo cập nhật thông minh với bộ đệm 7 ngày
- Giao diện CLI đẹp với các lời nhắc tương tác

## Quick Install

Cài đặt CLI trên toàn cầu bằng trình quản lý gói ưa thích của bạn:

```bash
# npm (recommended)
npm install -g claudekit-cli

# bun
bun add -g claudekit-cli

# pnpm
pnpm add -g claudekit-cli

# yarn
yarn global add claudekit-cli
```

Để biết hướng dẫn cài đặt chi tiết bao gồm các điều kiện tiên quyết và các bước xác minh, hãy xem [Installation](/docs/cli/installation).

## Verify Installation

```bash
ck --version
```

Bạn sẽ thấy đầu ra như:

```
CLI Version: 3.10.1
Local Kit Version: 1.16.0 (ClaudeKit Engineer)
```

## Available Commands

| Command | Description |
|---------|-------------|
| [`ck new`](/docs/cli/new) | Tạo một dự án ClaudeKit mới |
| [`ck init`](/docs/cli/init) | Khởi tạo hoặc cập nhật ClaudeKit trong dự án hiện có |
| [`ck doctor`](/docs/cli/doctor) | Chạy kiểm tra sức khỏe và chẩn đoán |
| [`ck versions`](/docs/cli/versions) | Liệt kê các phiên bản kit có sẵn |
| [`ck update`](/docs/cli/update) | Cập nhật CLI lên phiên bản mới nhất |
| [`ck uninstall`](/docs/cli/uninstall) | Xóa cài đặt ClaudeKit |

## Quick Start

### Create a New Project

```bash
# Interactive mode (recommended)
ck new

# With options
ck new --kit engineer --dir my-project

# Include beta versions in selection
ck new --beta

# Auto-install skill dependencies
ck new --install-skills
```

[Full documentation](/docs/cli/new)

### Initialize Existing Project

```bash
# Thêm ClaudeKit vào dự án hiện có của bạn
cd my-existing-project
ck init

# Non-interactive mode with defaults
ck init --yes

# Global installation (user-level config)
ck init --global
```

[Full documentation](/docs/cli/init)

### Health Check

```bash
# Chạy chẩn đoán
ck doctor

# Auto-fix issues
ck doctor --fix

# Generate shareable report
ck doctor --report
```

[Full documentation](/docs/cli/doctor)

## Prerequisites

Trước khi sử dụng ClaudeKit CLI, bạn cần:

1. **Purchase a ClaudeKit Starter Kit** từ [ClaudeKit.cc](https://claudekit.cc)
2. **Get Repository Access** - Bạn sẽ nhận được quyền truy cập vào kho lưu trữ GitHub riêng tư sau khi mua
3. **Install GitHub CLI** và xác thực bằng `gh auth login`

Nếu không có kit được mua và quyền truy cập kho lưu trữ, CLI không thể tải xuống các mẫu dự án.

## Authentication

ClaudeKit CLI sử dụng hệ thống xác thực đa tầng:

1. GitHub CLI (`gh auth token`)
2. Environment Variables (`GITHUB_TOKEN`)
3. Config File (`~/.claudekit/config.json`)
4. OS Keychain (secure storage)
5. User Prompt (with save option)

Để biết hướng dẫn thiết lập, hãy xem [Installation - Authentication](/docs/cli/installation#authentication).

## Kit Selection

Khi tạo một dự án mới, hãy chọn từ các kit có sẵn:

| Kit | Best For | Status |
|-----|----------|--------|
| **Engineer** | Phát triển phần mềm, tự động hóa, kiểm tra | Available |
| **Marketing** | Tạo nội dung, chiến dịch, phân tích | Coming Soon |

## Global vs Local Installation

ClaudeKit hỗ trợ hai chế độ cài đặt:

- **Local** (default): Cài đặt vào `.claude/` trong thư mục dự án của bạn
- **Global**: Cài đặt vào `~/.claude/` để cấu hình cấp người dùng

Sử dụng `ck init --global` để cài đặt toàn cầu, hoặc `ck init` để cài đặt cục bộ (dành riêng cho dự án).

## Configuration

Cấu hình được lưu trữ trong `~/.claudekit/config.json`:

```json
{
  "github": {
    "token": "stored_in_keychain"
  },
  "defaults": {
    "kit": "engineer",
    "dir": "."
  }
}
```

Để tham khảo cấu hình đầy đủ, hãy xem [Configuration](/docs/cli/configuration).

## Next Steps

- [Installation](/docs/cli/installation) - Hướng dẫn thiết lập chi tiết
- [ck new](/docs/cli/new) - Tạo dự án đầu tiên của bạn
- [ck init](/docs/cli/init) - Thêm vào dự án hiện có
- [ck doctor](/docs/cli/doctor) - Khắc phục sự cố
- [Configuration](/docs/cli/configuration) - Tùy chỉnh cài đặt của bạn
