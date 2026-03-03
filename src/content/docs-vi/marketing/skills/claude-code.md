---
lang: vi
title: "ckm:claude-code"
description: "Cài đặt Claude Code, skills, MCP servers, hooks, tích hợp IDE"
section: marketing
kit: marketing
category: skills
order: 66
---

> Cài đặt và cấu hình Claude Code như một trợ lý marketing AI mạnh mẽ với skills, MCP servers và tích hợp IDE.

## Skill Này Làm Gì

**Thách thức**: Claude Code là công cụ mạnh mẽ nhưng cần cấu hình đúng để tối đa hóa hiệu quả cho marketing tasks. Thiếu hướng dẫn dẫn đến setup không đầy đủ và bỏ lỡ tính năng quan trọng.

**Giải pháp**: Skill claude-code hướng dẫn toàn bộ quy trình: cài đặt CLI, cấu hình skills marketing, thiết lập MCP servers, viết custom hooks và tích hợp với VS Code/Cursor.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi người dùng cần cài đặt hoặc cấu hình Claude Code.

**Tường minh**: Kích hoạt qua prompt:
```
Activate claude-code skill to setup [component]
```

## Tính Năng

### 1. Cài Đặt Claude Code CLI

**Yêu cầu hệ thống**:
- macOS 12+, Ubuntu 20.04+, hoặc Windows 11 (WSL2)
- Node.js 18+
- Git

**Cài đặt**:
```bash
npm install -g @anthropic-ai/claude-code
```

**Xác nhận cài đặt**:
```bash
claude --version
claude auth login
```

### 2. Cài Đặt ClaudeKit Marketing
Thiết lập bộ skills marketing đầy đủ.

```bash
# Cài đặt ClaudeKit Marketing
git clone https://github.com/claudekit/claudekit-marketing ~/.claude/skills/marketing
cd ~/.claude/skills/marketing
npm install

# Kích hoạt
echo "source ~/.claude/skills/marketing/activate.sh" >> ~/.zshrc
```

**Skills được bao gồm**: analytics, seo, copywriting, email-marketing, social-media, và 50+ skills khác.

### 3. Cấu Hình MCP Servers
Kết nối Claude Code với external tools và APIs.

**File cấu hình** (`~/.claude/mcp.json`):
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/yourname/projects"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your-token"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/mydb"]
    }
  }
}
```

**MCP servers hữu ích cho marketing**:
- `@modelcontextprotocol/server-filesystem` - Đọc/ghi files local
- `@modelcontextprotocol/server-github` - GitHub integration
- `@modelcontextprotocol/server-slack` - Slack notifications
- `@modelcontextprotocol/server-google-drive` - Google Drive access

### 4. Custom Hooks
Tự động hóa quy trình với hooks.

**Ví dụ hook lưu báo cáo marketing**:
```bash
# ~/.claude/hooks/post-message.sh
#!/bin/bash
# Tự động lưu báo cáo vào assets/reports/
if echo "$CLAUDE_OUTPUT" | grep -q "## Báo cáo"; then
  DATE=$(date +%Y-%m-%d)
  echo "$CLAUDE_OUTPUT" > "assets/reports/$DATE-report.md"
  echo "Báo cáo đã lưu vào assets/reports/"
fi
```

**Đăng ký hook** (`~/.claude/settings.json`):
```json
{
  "hooks": {
    "postMessage": ["~/.claude/hooks/post-message.sh"]
  }
}
```

### 5. Tích Hợp IDE
Sử dụng Claude Code trực tiếp trong VS Code hoặc Cursor.

**VS Code Extension**:
1. Tìm "Claude Code" trong Extensions marketplace
2. Install và authenticate
3. Mở Command Palette → "Claude: Open Chat"

**Cursor**:
- Claude Code tích hợp sẵn trong Cursor
- Mở với `Cmd/Ctrl + K` hoặc thanh chat bên phải

## Điều Kiện Tiên Quyết

- Tài khoản Anthropic (anthropic.com)
- API key hoặc Claude Pro/Team subscription
- Terminal (macOS/Linux) hoặc WSL2 (Windows)

## Cấu Hình

**File cấu hình chính** (`~/.claude/settings.json`):
```json
{
  "model": "claude-opus-4-5",
  "context_window": 200000,
  "theme": "dark",
  "auto_save": true,
  "project_context": true
}
```

**CLAUDE.md** (trong project root):
```markdown
# Project Context
Đây là project marketing tool cho [Company Name].
Stack: Next.js 14, TypeScript, Tailwind CSS, PostgreSQL.
Tuân thủ brand guidelines trong docs/brand-guidelines.md.
```

## Thực Hành Tốt Nhất

**1. Luôn Có CLAUDE.md Trong Project**
File này cung cấp context quan trọng cho mọi session. Cập nhật khi project thay đổi.

**2. Sử Dụng Slash Commands**
Tận dụng skill commands (`/ckm:analyze`, `/ckm:seo`) để kích hoạt skills nhanh chóng.

**3. Compact Mode Cho Token Efficiency**
Chạy `/compact` thường xuyên trong session dài để tối ưu context window.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Setup Marketing Workspace
**Tình huống**: Thiết lập Claude Code cho marketing team.

**Quy trình**:
1. Cài đặt CLI và authenticate
2. Clone ClaudeKit Marketing vào `~/.claude/skills/`
3. Cấu hình MCP servers (filesystem, GitHub)
4. Tạo CLAUDE.md với brand guidelines và project context
5. Test với `/ckm:marketing-dashboard`

### Trường Hợp 2: Tự Động Hóa Báo Cáo
**Tình huống**: Tự động tạo và lưu báo cáo marketing hàng tuần.

**Quy trình**:
1. Setup hook post-message để capture báo cáo
2. Cron job gọi Claude API với analytics data
3. Báo cáo tự động lưu vào `assets/reports/`

## Xử Lý Sự Cố

**Vấn đề**: `claude: command not found`
**Giải pháp**: Đảm bảo npm global bin trong PATH: `export PATH=$PATH:$(npm bin -g)`

**Vấn đề**: MCP server không kết nối được
**Giải pháp**: Kiểm tra logs: `claude --debug`. Verify config JSON valid bằng `jq . ~/.claude/mcp.json`

## Skill Liên Quan

- [Context Engineering](/vi/docs/marketing/skills/context-engineering) - Tối ưu hóa context window
- [Kit Builder](/vi/docs/marketing/skills/kit-builder) - Xây dựng skills tùy chỉnh
- [Marketing Dashboard](/vi/docs/marketing/skills/marketing-dashboard) - Trung tâm điều khiển marketing

## Lệnh Liên Quan

- `/ckm:claude-code` - Hỗ trợ cài đặt Claude Code
- `/ckm:kit-builder` - Xây dựng skills mới
- `/ckm:context-engineering` - Tối ưu context
