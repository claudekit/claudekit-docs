---
lang: vi
title: "ckm:use-mcp"
description: "Sử dụng công cụ của máy chủ Model Context Protocol"
section: marketing
kit: marketing
category: skills
order: 48
---

# ckm:use-mcp

> Kết nối và sử dụng các công cụ từ MCP servers để mở rộng khả năng marketing AI.

## Kỹ Năng Này Làm Gì

Skill `ckm:use-mcp` cho phép ClaudeKit Marketing tương tác với các MCP (Model Context Protocol) servers — bao gồm trình duyệt web, database, APIs và công cụ bên thứ ba. Mở rộng khả năng của AI agent vượt ra ngoài phạm vi project local.

Hỗ trợ các MCP servers phổ biến: Playwright (browser automation), filesystem, database queries, Slack, GitHub và nhiều hơn.

## Bắt Đầu Nhanh

```
/ckm:use-mcp
```

Sử dụng công cụ cụ thể:

```
/ckm:use-mcp Dùng Playwright MCP để chụp screenshot landing page đối thủ
```

## Tính Năng Chính

- **Browser automation**: Chụp screenshot, điền form, crawl trang web qua Playwright MCP
- **Database access**: Truy vấn CRM và marketing database qua database MCP
- **File operations**: Đọc/ghi file ngoài project directory
- **Third-party APIs**: Kết nối Slack, GitHub, Notion và các dịch vụ khác
- **Tool discovery**: Liệt kê và khám phá tools có sẵn từ MCP servers

## Ví Dụ Sử Dụng

**Chụp screenshot:**
```
/ckm:use-mcp Dùng browser MCP chụp screenshot trang pricing của 5 đối thủ chính
```

**Truy vấn dữ liệu:**
```
/ckm:use-mcp Dùng database MCP lấy danh sách khách hàng chưa mở email trong 30 ngày từ CRM
```

**Tự động hóa:**
```
/ckm:use-mcp Dùng Playwright MCP điền form đăng ký thử nghiệm để kiểm tra luồng onboarding
```

## Cấu Hình

MCP servers được cấu hình trong `.claude/settings.json` hoặc `.claude/mcp.json`:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp"]
    }
  }
}
```

## Liên Quan

- [ckm:test](/vi/docs/marketing/skills/test) - Kiểm thử UI với browser automation
- [ckm:competitor](/vi/docs/marketing/skills/competitor) - Phân tích đối thủ với web scraping
- [ckm:ask](/vi/docs/marketing/skills/ask) - Hỏi về cấu hình MCP
