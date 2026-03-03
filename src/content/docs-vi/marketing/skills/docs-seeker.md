---
lang: vi
title: "ckm:docs-seeker"
description: "Tìm kiếm tài liệu kỹ thuật qua nguồn llms.txt"
section: marketing
kit: marketing
category: skills
order: 75
---

# `ckm:docs-seeker`

> Truy cập tài liệu kỹ thuật cập nhật nhất thông qua llms.txt index — không cần tìm kiếm thủ công.

## Skill Này Làm Gì

**Thách thức**: Tài liệu kỹ thuật thay đổi nhanh — APIs được cập nhật, thư viện ra version mới, breaking changes xảy ra. Kiến thức training của AI có thể lỗi thời, dẫn đến code dùng deprecated APIs.

**Giải pháp**: Skill docs-seeker sử dụng llms.txt standard để truy cập tài liệu kỹ thuật cập nhật nhất từ các thư viện và frameworks marketing tools phổ biến.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi cần tài liệu cho thư viện, framework hoặc API cụ thể.

**Tường minh**: Kích hoạt qua prompt:
```
Activate docs-seeker skill to find docs for [thư viện/framework/API]
```

## Tính Năng

### 1. llms.txt Standard
Hiểu cách llms.txt hoạt động và tại sao nó hữu ích.

**llms.txt là gì?**
File text đặt tại root của documentation site (ví dụ: `docs.example.com/llms.txt`) chứa danh sách các tài liệu phù hợp cho LLMs đọc. Được tối ưu hóa cho AI context window.

**Truy cập llms.txt**:
```
https://docs.anthropic.com/llms.txt
https://nextjs.org/llms.txt
https://drizzle.team/llms.txt
https://docs.stripe.com/llms.txt
```

**Ví dụ nội dung llms.txt**:
```
# Next.js Documentation

## Getting Started
- /docs/getting-started/installation
- /docs/getting-started/project-structure

## App Router
- /docs/app/building-your-application/routing
- /docs/app/api-reference/components/link

## API Reference
...
```

### 2. Tìm Kiếm Tài Liệu Marketing Tools

**Danh sách llms.txt đã xác minh**:

**Frontend/Full-stack**:
- Next.js: `https://nextjs.org/llms.txt`
- Astro: `https://docs.astro.build/llms.txt`
- React: `https://react.dev/llms.txt`

**Backend**:
- NestJS: `https://docs.nestjs.com/llms.txt`
- FastAPI: `https://fastapi.tiangolo.com/llms.txt`

**Databases & ORMs**:
- Drizzle: `https://orm.drizzle.team/llms.txt`
- Prisma: `https://prisma.io/llms.txt`

**Payments**:
- Stripe: `https://docs.stripe.com/llms.txt`

**AI/ML**:
- Anthropic: `https://docs.anthropic.com/llms.txt`
- OpenAI: `https://platform.openai.com/llms.txt`

**Marketing**:
- Resend: `https://resend.com/docs/llms.txt`
- PostHog: `https://posthog.com/docs/llms.txt`

### 3. Query Patterns
Cách tìm kiếm hiệu quả nhất.

**Tìm kiếm API cụ thể**:
```
Fetch docs: https://docs.stripe.com/llms.txt
Focus on: PaymentIntent creation, webhook handling
```

**Tìm kiếm migration guide**:
```
Fetch docs: https://nextjs.org/llms.txt
Focus on: Migrating from Pages Router to App Router
```

**Tìm kiếm best practices**:
```
Fetch docs: https://orm.drizzle.team/llms.txt
Focus on: Query performance, connection pooling
```

### 4. Context7 Integration
Sử dụng context7 MCP server để truy cập docs tự động.

**Setup context7**:
```json
// ~/.claude/mcp.json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@context7/mcp-server"]
    }
  }
}
```

**Sử dụng**:
```
use context7 to find the latest docs for Drizzle ORM's
insert with conflict handling
```

## Điều Kiện Tiên Quyết

- Kết nối internet để truy cập llms.txt files
- Claude Code với WebFetch hoặc context7 MCP server

## Cấu Hình

**Danh sách docs ưu tiên cho project** (thêm vào CLAUDE.md):
```markdown
## Documentation Sources
- Next.js: https://nextjs.org/llms.txt
- Drizzle: https://orm.drizzle.team/llms.txt
- Better Auth: https://better-auth.com/llms.txt
- Stripe: https://docs.stripe.com/llms.txt
```

## Thực Hành Tốt Nhất

**1. Luôn Check Docs Cho APIs Quan Trọng**
Đặc biệt với payment APIs, auth libraries — lỗi ở đây có hậu quả nghiêm trọng.

**2. Version-Specific Docs**
Khi có breaking changes, tìm docs cho version cụ thể bạn đang dùng.

**3. Kết Hợp Docs + Examples**
llms.txt thường có link đến code examples. Đọc cả hai.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Implement Payment Feature
**Tình huống**: Cần implement Stripe subscription cho marketing tool.

**Quy trình**:
1. `Fetch https://docs.stripe.com/llms.txt`
2. Tìm sections về Subscriptions, Webhooks
3. Follow latest API patterns
4. Implement với confidence

### Trường Hợp 2: Upgrade thư viện
**Tình huống**: Upgrade từ Next.js 13 lên 14.

**Quy trình**:
1. `Fetch https://nextjs.org/llms.txt`
2. Tìm migration guide và breaking changes
3. Update code theo hướng dẫn chính thức

## Xử Lý Sự Cố

**Vấn đề**: llms.txt không tồn tại cho thư viện cần dùng
**Giải pháp**: Dùng WebFetch trực tiếp vào trang docs. Hoặc search GitHub cho official examples.

**Vấn đề**: Docs quá dài, tốn nhiều tokens
**Giải pháp**: Focus vào sections cụ thể thay vì load toàn bộ llms.txt.

## Skill Liên Quan

- [Claude Code](/vi/docs/marketing/skills/claude-code) - Cấu hình MCP servers
- [Context Engineering](/vi/docs/marketing/skills/context-engineering) - Quản lý token khi đọc docs
- [Backend Development](/vi/docs/marketing/skills/backend-development) - Áp dụng docs vào code

## Lệnh Liên Quan

- `/ckm:docs-seeker` - Tìm kiếm tài liệu
- `/ckm:context-engineering` - Tối ưu token khi đọc docs
- `/ckm:backend-development` - Implement từ docs
