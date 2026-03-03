---
lang: vi
title: "ckm:mcp-builder"
description: "Tạo MCP server cho tích hợp LLM với dịch vụ bên ngoài, API và nguồn dữ liệu tùy chỉnh."
section: marketing
kit: marketing
category: skills
order: 90
---

# `ckm:mcp-builder`

> Xây dựng MCP (Model Context Protocol) server để kết nối Claude với bất kỳ dịch vụ hoặc API nào.

## Kỹ Năng Này Làm Gì

Skill `ckm:mcp-builder` hướng dẫn tạo MCP server từ đầu — từ thiết kế schema tools, viết handler, cấu hình transport đến kiểm thử và triển khai. Hỗ trợ tích hợp với REST API, database, file system và dịch vụ bên thứ ba.

## Bắt Đầu Nhanh

```
/ckm:mcp-builder
```

Hoặc mô tả tích hợp cần xây dựng:

```
/ckm:mcp-builder Tạo MCP server cho Shopify Admin API — quản lý sản phẩm và đơn hàng
```

## Tính Năng Chính

- **Scaffold MCP server**: Tạo cấu trúc project TypeScript/JavaScript chuẩn
- **Tool definition**: Thiết kế schema công cụ với Zod validation
- **Transport setup**: Hỗ trợ stdio và HTTP/SSE transport
- **Error handling**: Pattern xử lý lỗi nhất quán cho MCP tools
- **Testing**: Kiểm thử tools với MCP inspector

## Ví Dụ Sử Dụng

**Tạo MCP server từ REST API:**
```
/ckm:mcp-builder Tạo MCP server cho OpenWeather API với tools: get-forecast, get-current-weather
```

**Tích hợp database:**
```
/ckm:mcp-builder MCP server cho PostgreSQL — tools: query, list-tables, describe-table
```

**Tích hợp dịch vụ nội bộ:**
```
/ckm:mcp-builder MCP server cho hệ thống CRM nội bộ với auth JWT
```

## Cấu Trúc Project

```
my-mcp-server/
├── src/
│   ├── index.ts          # Entry point, server config
│   ├── tools/            # Tool definitions và handlers
│   └── utils/            # Helpers, auth, HTTP client
├── package.json
└── tsconfig.json
```

## Điều Kiện Tiên Quyết

- Node.js 18+
- TypeScript 5+
- Gói `@modelcontextprotocol/sdk`

## Liên Quan

- [ckm:mcp-management](/vi/docs/marketing/skills/mcp-management) - Quản lý và sử dụng MCP servers
- [ckm:use-mcp](/vi/docs/marketing/skills/use-mcp) - Sử dụng MCP tools trong workflow
