---
lang: vi
title: "ckm:mcp-management"
description: "Quản lý MCP server — khám phá, phân tích, thực thi tools và giám sát tích hợp LLM với dịch vụ bên ngoài."
section: marketing
kit: marketing
category: skills
order: 91
---

# `ckm:mcp-management`

> Kiểm soát toàn bộ vòng đời MCP server — từ khám phá tools đến thực thi và giám sát.

## Kỹ Năng Này Làm Gì

Skill `ckm:mcp-management` cung cấp bộ công cụ quản lý MCP server: liệt kê tools có sẵn, kiểm tra schema, thực thi lệnh và xử lý phản hồi. Giúp vận hành và debug tích hợp MCP hiệu quả.

## Bắt Đầu Nhanh

```
/ckm:mcp-management
```

Hoặc chỉ định tác vụ:

```
/ckm:mcp-management Liệt kê tất cả tools có sẵn trên MCP server hiện tại
```

## Tính Năng Chính

- **Server discovery**: Khám phá MCP servers được cấu hình trong môi trường
- **Tool inspection**: Xem schema, tham số và mô tả của từng tool
- **Execution management**: Thực thi tools với tham số đúng định dạng
- **Response handling**: Xử lý và trình bày kết quả từ MCP tools
- **Debugging**: Chẩn đoán lỗi kết nối và thực thi

## Ví Dụ Sử Dụng

**Khám phá tools:**
```
/ckm:mcp-management Hiển thị danh sách tất cả MCP tools và mô tả ngắn gọn
```

**Kiểm tra tool cụ thể:**
```
/ckm:mcp-management Xem schema đầy đủ của tool create-product trên Shopify MCP server
```

**Debug tích hợp:**
```
/ckm:mcp-management Kiểm tra kết nối đến GitHub MCP server và liệt kê tools có sẵn
```

## Cấu Hình MCP

MCP servers được cấu hình trong file `.mcp.json` hoặc `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "my-server": {
      "command": "node",
      "args": ["path/to/server/index.js"],
      "env": {
        "API_KEY": "your-key"
      }
    }
  }
}
```

## Liên Quan

- [ckm:mcp-builder](/vi/docs/marketing/skills/mcp-builder) - Tạo MCP server mới
- [ckm:use-mcp](/vi/docs/marketing/skills/use-mcp) - Sử dụng MCP tools trong workflow
