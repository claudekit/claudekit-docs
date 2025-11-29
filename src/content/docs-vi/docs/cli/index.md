---
title: CLI Tổng Quan
description: "Documentation for CLI Tổng Quan
description:
section: docs
category: docs/cli
order: 0
published: true"
section: docs
category: docs/cli
order: 0
published: true
---

# ClaudeKit CLI Overview

Command-line tool for bootstrapping and updating ClaudeKit projects from private GitHub repository releases.

## What is ClaudeKit CLI?

**ClaudeKit CLI** (`ck`) is a command-line tool that downloads and manages ClaudeKit starter kits from private GitHub repositories. Built with Bun and TypeScript, it provides fast, secure project setup and updates.

**Important:** You need to purchase a ClaudeKit Starter Kit from [ClaudeKit.cc](https://claudekit.cc) to use this CLI. Without a purchased kit and repository access, the CLI cannot download project templates.

## Key Features

- **Multi-tier GitHub Authentication** - Secure authentication via gh CLI → env vars → keychain → prompt
- **Streaming Downloads** - Fast downloads with progress tracking
- **Smart File Merging** - Updates projects without breaking custom changes
- **Protected Files** - Automatic protection of sensitive files and custom configurations
- **Secure Credential Storage** - Uses OS keychain for token management
- **Beautiful CLI Interface** - Interactive prompts with progress indicators

## Core Commands

### ck init

Khởi tạo hoặc cập nhật ClaudeKit Engineer trong dự án:

**Lưu ý:** Lệnh này nên được chạy từ thư mục gốc của dự án.

```bash
# Chế độ tương tác (khuyến nghị)
ck init

# Với tùy chọn
ck init --kit engineer

# Phiên bản cụ thể
ck init --kit engineer --version v1.0.0

# Với mẫu loại trừ
ck init --exclude "local-config/**" --exclude "*.local"

# Chế độ global - sử dụng thư mục cấu hình người dùng theo platform
ck init --global
ck init -g --kit engineer
```

**Chức năng:**
- Tải xuống bản phát hành ClaudeKit được chỉ định
- Merge file thông minh
- Bảo toàn các thay đổi tùy chỉnh của bạn
- Bảo vệ file nhạy cảm
- Duy trì file tùy chỉnh trong `.claude/`

**Tùy chọn:**
- `--dir <dir>` - Thư mục đích (mặc định: thư mục hiện tại)
- `--kit <kit>` - Kit sử dụng (`engineer` hoặc `marketing`)
- `--version <version>` - Phiên bản cụ thể để tải (mặc định: mới nhất)
- `--exclude <pattern>` - Loại trừ file/thư mục sử dụng glob patterns (có thể dùng nhiều lần)
- `--global, -g` - Sử dụng thư mục cấu hình người dùng theo platform

**Cấu hình Global vs Local:**

Mặc định, ClaudeKit sử dụng cấu hình local (`~/.claudekit`).

Để cài đặt **user-scoped theo platform**, sử dụng flag `--global`:
- **macOS/Linux**: `~/.claude`
- **Windows**: `%LOCALAPPDATA%\.claude`

Chế độ global sử dụng thư mục user-scoped (không cần sudo), cho phép cấu hình riêng biệt cho các dự án khác nhau.

### ck update

Cập nhật ClaudeKit CLI lên phiên bản mới nhất:

```bash
# Cập nhật CLI lên phiên bản mới nhất
ck update
```

**Chức năng:**
- Cập nhật công cụ dòng lệnh `ck` lên phiên bản mới nhất
- KHÔNG cập nhật file ClaudeKit Engineer (dùng `ck init` cho việc đó)

### ck versions

List available versions of ClaudeKit releases:

```bash
# Show all available versions
ck versions

# Filter by specific kit
ck versions --kit engineer
ck versions --kit marketing

# Show more versions (default: 30)
ck versions --limit 50

# Include prereleases and drafts
ck versions --all
```

**Options:**
- `--kit <kit>` - Filter by specific kit
- `--limit <limit>` - Number of releases to show (default: 30)
- `--all` - Show all releases including prereleases

## Global Options

All commands support these global options:

### --verbose, -v

Enable verbose logging for debugging:

```bash
ck new --verbose
ck init -v  # Short form
```

**Shows:**
- HTTP request/response details (tokens sanitized)
- File operations (downloads, extractions, copies)
- Command execution steps and timing
- Error stack traces with full context
- Authentication flow details

### --log-file

Write logs to file for sharing:

```bash
ck new --verbose --log-file debug.log
```

**Note:** All sensitive data (tokens, credentials) is automatically sanitized in logs.

## Available Kits

ClaudeKit offers premium starter kits (purchase required):

- **engineer**: ClaudeKit Engineer - Engineering toolkit with 14 specialized agents
- **marketing**: ClaudeKit Marketing - [Coming Soon]

Purchase at [ClaudeKit.cc](https://claudekit.cc) to get repository access.

## Authentication

The CLI requires a **GitHub Personal Access Token (PAT)** to download releases from private repositories.

### Authentication Flow (Multi-Tier Fallback)

1. **GitHub CLI**: Uses `gh auth token` if available
2. **Environment Variables**: Checks `GITHUB_TOKEN` or `GH_TOKEN`
3. **OS Keychain**: Retrieves stored token
4. **User Prompt**: Prompts for token and offers secure storage

### Creating a Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope (for private repositories)
3. Copy the token

### Setting Token via Environment Variable

```bash
export GITHUB_TOKEN=ghp_your_token_here
```

## Configuration

Configuration stored in `~/.claudekit/config.json`:

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

## Protected Files

These files are **never overwritten** during updates:

- Environment files: `.env`, `.env.local`, `.env.*.local`
- Security files: `*.key`, `*.pem`, `*.p12`
- Dependencies: `node_modules/**`, `.git/**`
- Build outputs: `dist/**`, `build/**`

### Custom .claude Files

Your custom files in `.claude/` directory are automatically preserved:

**Example:**
```
Your project:
  .claude/
    ├── commands/standard.md  (from ClaudeKit)
    └── commands/my-custom.md (your custom command)

After update:
  .claude/
    ├── commands/standard.md  (updated from release)
    └── commands/my-custom.md (preserved automatically)
```

## Quick Start

```bash
# Cài đặt CLI
npm install -g claudekit-cli

# Kiểm tra cài đặt
ck --version

# Xác thực với GitHub
gh auth login
# HOẶC
export GITHUB_TOKEN=ghp_your_token

# Khởi tạo dự án
ck init --kit engineer

# Điều hướng tới dự án
cd my-project

# Bắt đầu sử dụng ClaudeKit
claude  # Khởi động Claude Code
```

## Common Workflows

### Khởi tạo hoặc Cập nhật ClaudeKit Engineer

```bash
# Chế độ tương tác (khuyến nghị)
ck init

# Trực tiếp với tùy chọn
ck init --dir my-app --kit engineer

# Phiên bản cụ thể
ck init --dir my-app --kit engineer --version v1.0.0

# Với loại trừ
ck init --exclude "*.log" --exclude "temp/**"

# Cập nhật ClaudeKit Engineer lên mới nhất
ck init

# Cập nhật lên phiên bản cụ thể
ck init --version v1.2.0

# Cập nhật với loại trừ
ck init --exclude "local-config/**" --exclude "*.local"

# Cập nhật với verbose output
ck init --verbose
```

### Cập nhật CLI

```bash
# Cập nhật ck CLI lên phiên bản mới nhất
ck update
```

### Check Available Versions

```bash
# List all versions
ck versions

# Filter by kit
ck versions --kit engineer

# Show more releases
ck versions --limit 50
```

## Troubleshooting

### Authentication Failed

**Problem:** "Authentication failed"

**Solutions:**
1. Check if GitHub CLI is authenticated: `gh auth status`
2. Or set environment variable: `export GITHUB_TOKEN=ghp_your_token`
3. Verify token has `repo` scope
4. Check repository access (requires purchased kit)

### Command Not Found

**Problem:** `ck: command not found`

**Solutions:**
```bash
# Reinstall globally
npm install -g claudekit-cli

# Check installation
npm list -g claudekit-cli

# Restart terminal
```

### Download Fails

**Problem:** "Failed to download release"

**Solutions:**
1. Check internet connection
2. Verify GitHub token is valid: `gh auth status`
3. Confirm you have repository access (purchased kit)
4. Try with verbose flag: `ck new --verbose`

## Version Information

Current version: **1.2.1**

Check version:
```bash
ck --version
```

View help:
```bash
ck --help
ck -h
```

## Next Steps

- [Installation Guide](/docs/cli/installation) - Install ClaudeKit CLI
- [ck new Command](/docs/cli/new) - Create new projects
- [Getting Started](/docs/getting-started/installation) - Start using ClaudeKit

---

**Ready to start?** Purchase a kit at [ClaudeKit.cc](https://claudekit.cc), then run `ck init` to initialize your first project.
