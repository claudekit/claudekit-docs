---
lang: vi
title: "/use-mcp"
description: "Thực thi MCP thông qua Gemini CLI để giữ lại ngân sách ngữ cảnh"
section: marketing
category: commands
order: 23
published: true
---

> Sử dụng công cụ MCP mà không lãng phí ngân sách ngữ cảnh

## Quick Start

```bash
/use-mcp Get Google Analytics traffic for last 30 days
```

**Điều gì xảy ra**:
1. Thực thi qua Gemini CLI (giữ lại ngữ cảnh Claude)
2. Gemini CLI tự động kết nối đến máy chủ MCP
3. Khám phá các công cụ có sẵn
4. Thực thi công cụ MCP
5. Trả về kết quả JSON có cấu trúc

**Output**: Phản hồi JSON từ công cụ MCP

## Tại sao Gemini CLI?

### Bảo toàn ngữ cảnh
- Máy chủ MCP tiêu thụ ngữ cảnh lớn
- Chạy MCP qua Claude lãng phí ngân sách token của bạn
- Gemini CLI chạy bên ngoài, bảo toàn token Claude
- Claude vẫn tập trung vào nhiệm vụ của bạn

### Cách nó hoạt động
```
You → Claude → Gemini CLI → MCP Servers → Tools
            ↓
        Thực thi bên ngoài
        Chỉ trả về JSON
```

## Syntax

```bash
/use-mcp [task]
```

## Execution Method

**Sử dụng stdin piping** (đúng):
```bash
echo "$ARGUMENTS. Return JSON only." | gemini -y -m gemini-2.5-flash
```

**KHÔNG sử dụng flag -p** (lỗi thời, bỏ qua MCP):
```bash
# SAI - bỏ qua kết nối máy chủ MCP
gemini -y -m gemini-2.5-flash -p "..."
```

## Examples

### Example 1: Google Analytics

**Input**:
```bash
/use-mcp Get traffic data for last 30 days
```

**Process**:
```markdown
Executing via Gemini CLI...

MCP Server: google-analytics
Tool: get_traffic_report
Parameters: { period: "30d" }

Result:
{
  "server": "google-analytics",
  "tool": "get_traffic_report",
  "success": true,
  "result": {
    "sessions": 47320,
    "users": 32180,
    "pageviews": 156890,
    "bounce_rate": 42.3,
    "avg_session_duration": "3:24"
  },
  "error": null
}

Summary:
- Sessions: 47,320
- Users: 32,180
- Pageviews: 156,890
- Bounce rate: 42.3%
```

### Example 2: Search Console

**Input**:
```bash
/use-mcp Get top 10 keywords from Search Console
```

**Output**:
```markdown
MCP Server: google-search-console
Tool: get_keywords

Result:
{
  "keywords": [
    { "keyword": "marketing automation", "impressions": 12400, "clicks": 847, "position": 3.2 },
    { "keyword": "email marketing tools", "impressions": 8900, "clicks": 623, "position": 4.1 },
    ...
  ]
}
```

### Example 3: Discord Posting

**Input**:
```bash
/use-mcp Post campaign announcement to #marketing channel
```

**Output**:
```markdown
MCP Server: discord
Tool: send_message

Result:
{
  "success": true,
  "message_id": "123456789",
  "channel": "#marketing",
  "timestamp": "2025-01-29T14:30:00Z"
}

Posted to Discord #marketing channel
Message ID: 123456789
```

## MCP Server Support

### Built-in MCP Servers

| Server | Tools | Use Cases |
|--------|-------|-----------|
| Google Analytics 4 | Traffic, behavior, conversions | Báo cáo phân tích |
| Search Console | Keywords, rankings, impressions | Theo dõi SEO |
| Discord | Post messages, read channels | Quản lý cộng đồng |
| Slack | Post messages, team comms | Cộng tác đội |

### Configure MCP Servers

Các máy chủ MCP được cấu hình trong GEMINI.md (tự động tải):
```json
{
  "mcpServers": {
    "google-analytics": {
      "command": "npx",
      "args": ["-y", "@google/mcp-server-ga4"]
    }
  }
}
```

## Fallback: mcp-manager Subagent

Nếu Gemini CLI không có sẵn:
```markdown
Gemini CLI not found. Using mcp-manager subagent...

✓ mcp-manager: Discovering MCP tools...
✓ Found 23 tools across 4 servers
✓ Executing: google-analytics.get_traffic_report

[Same result as Gemini CLI]
```

**Ghi chú**: Subagent tiêu thụ ngữ cảnh Claude. Gemini CLI ưu tiên hơn.

## Response Format

Tất cả phản hồi đều là JSON có cấu trúc:
```json
{
  "server": "server-name",
  "tool": "tool-name",
  "success": true,
  "result": { ... },
  "error": null
}
```

## Flags

- `-y`: Tự động phê duyệt thực thi công cụ (không có nhắc)
- `-m gemini-2.5-flash`: Sử dụng mô hình Gemini nhanh

## Workflow Integration

### Analytics Reporting
```bash
/use-mcp Get GA4 traffic for last 30 days
/analyze traffic  # Phân tích bằng AI
```

### SEO Tracking
```bash
/use-mcp Get Search Console keyword rankings
/seo keywords "top performing keywords"
```

### Multi-Channel Publishing
```bash
/social twitter thread "product launch"
/use-mcp Post to Discord #announcements
/use-mcp Post to Slack #marketing
```

## Troubleshooting

### Gemini CLI not found
```bash
# Cài đặt Gemini CLI
npm install -g @google/generative-ai-cli

# Hoặc sử dụng fallback
# /use-mcp tự động sử dụng mcp-manager subagent
```

### MCP server not connected
```bash
# Kiểm tra cấu hình GEMINI.md
# Đảm bảo máy chủ MCP được cài đặt
# Khởi động lại Gemini CLI
```

### Tool execution failed
```bash
# Kiểm tra nhật ký máy chủ MCP
# Xác minh khóa API
# Kiểm tra thông số công cụ
```

## Related Commands

- [/analyze](/docs/marketing/commands/analyze) - Phân tích dữ liệu MCP
- [/campaign](/docs/marketing/commands/campaign) - Sử dụng phân tích trong chiến dịch

## Related Skills

- **mcp-management**: Hoạt động máy chủ MCP
- **mcp-builder**: Phát triển công cụ MCP

---

**Thực thi bên ngoài. Chi phí ngữ cảnh bằng không.** Sử dụng công cụ MCP mà không lãng phí token.
