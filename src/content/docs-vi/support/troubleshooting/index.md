---
title: Khắc Phục Sự Cố
description: "Hướng dẫn khắc phục sự cố cho ClaudeKit"
lang: vi
section: support
category: support/troubleshooting
order: 1
published: true
---

# Khắc Phục Sự Cố

Sửa nhanh các vấn đề phổ biến. Hầu hết các vấn đề giải quyết trong vòng dưới 5 phút.

## Quick Diagnosis

**Loại vấn đề?**
- [Cài đặt thất bại](#installation) → [Vấn Đề Cài Đặt](/docs/support/troubleshooting/installation-issues)
- [Lệnh không tìm thấy hoặc lỗi](#commands) → [Lỗi Lệnh](/docs/support/troubleshooting/command-errors)
- [Agent không hoạt động](#agents) → [Vấn Đề Agent](/docs/support/troubleshooting/agent-issues)
- [Lỗi API key](#api-keys) → [Thiết Lập API Key](/docs/support/troubleshooting/api-key-setup)
- [Chậm hoặc treo](#performance) → [Vấn Đề Hiệu Suất](/docs/support/troubleshooting/performance-issues)

## Installation

**Vấn đề**: `ck: command not found`

**Sửa**:
```bash
# Xác minh cài đặt
npm list -g claudekit-cli

# Cài đặt lại nếu cần
npm install -g claudekit-cli

# Xác minh
ck --version
```

[Xem thêm cách sửa cài đặt →](/docs/support/troubleshooting/installation-issues)

## Commands

**Vấn đề**: `/command` không hoạt động

**Sửa**:
1. Kiểm tra `.claude/commands/` tồn tại
2. Xác minh file lệnh tồn tại
3. Kiểm tra frontmatter hợp lệ

```bash
# Liệt kê các lệnh có sẵn
ls .claude/commands/**/*.md

# Kiểm tra lệnh cụ thể
cat .claude/commands/core/cook.md
```

[Xem thêm cách sửa lệnh →](/docs/support/troubleshooting/command-errors)

## Agents

**Vấn đề**: Agent không kích hoạt

**Sửa**:
1. Xác minh `.claude/agents/` tồn tại
2. Kiểm tra định dạng file agent
3. Xác nhận Claude Code đang chạy

```bash
# Liệt kê agents
ls .claude/agents/*.md

# Xác minh file agent
cat .claude/agents/planner.md
```

[Xem thêm cách sửa agent →](/docs/support/troubleshooting/agent-issues)

## API Keys

**Vấn đề**: "API key not found"

**Sửa**:
```bash
# Thêm vào .env
echo 'GEMINI_API_KEY=your-key' >> .env
echo 'SEARCH_API_KEY=your-key' >> .env

# Hoặc export cho session
export GEMINI_API_KEY=your-key
```

[Hướng dẫn API key đầy đủ →](/docs/support/troubleshooting/api-key-setup)

## Performance

**Vấn đề**: Lệnh mất quá lâu

**Sửa**:
1. Kiểm tra kết nối internet
2. Xác minh API keys đã được thiết lập
3. Sử dụng `--verbose` để xem gì chậm

```bash
# Chạy với verbose logging
/cook add feature --verbose
```

[Xem thêm cách sửa hiệu suất →](/docs/support/troubleshooting/performance-issues)

## Common Quick Fixes

### Reset ClaudeKit

```bash
# Backup trước
cp -r .claude .claude.backup

# Cập nhật lên phiên bản mới nhất
ck init --kit engineer

# Khôi phục files tùy chỉnh
cp .claude.backup/commands/my-custom.md .claude/commands/
```

### Clear Cache

```bash
# Xóa Node modules
rm -rf node_modules
npm install

# Xóa ClaudeKit cache
rm -rf ~/.claudekit/cache
```

### Verify Setup

```bash
# Kiểm tra CLI
ck --version

# Kiểm tra Claude Code
claude --version

# Kiểm tra cấu trúc thư mục
tree .claude -L 2
```

## Still Stuck?

### Get Help

1. **Chạy diagnostics**:
   ```bash
   ck diagnose --verbose
   ```

2. **Kiểm tra logs**:
   ```bash
   # Bật verbose mode
   export CLAUDEKIT_VERBOSE=1

   # Chạy lệnh
   /cook add feature

   # Kiểm tra output
   cat claudekit-debug.log
   ```

3. **Báo cáo vấn đề**:
   - GitHub: https://github.com/claudekit/claudekit-engineer/issues
   - Bao gồm: OS, CLI version, error message, steps to reproduce

### Community

- **Discord**: [Tham gia ClaudeKit Discord](https://claudekit.cc/discord)
- **GitHub Discussions**: Chia sẻ giải pháp, đặt câu hỏi

## Prevention Tips

✅ **Nên**:
- Giữ ClaudeKit cập nhật (`ck init`)
- Sử dụng `--verbose` khi debug
- Backup trước khi thay đổi lớn
- Đọc kỹ thông báo lỗi

❌ **Không nên**:
- Sửa đổi trực tiếp các files core `.claude/`
- Bỏ qua API rate limits
- Bỏ qua cập nhật phiên bản
- Xóa thư mục `.claude/`

---

**95% các vấn đề giải quyết trong vòng dưới 5 phút** với các hướng dẫn này. Đi sâu vào các phần cụ thể để biết cách sửa chi tiết.
