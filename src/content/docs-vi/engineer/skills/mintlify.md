---
title: "ck:mintlify"
description: "Xây dựng và triển khai các trang tài liệu hiện đại với Mintlify, hỗ trợ các component MDX, tích hợp OpenAPI và các tính năng AI"
section: engineer
kit: engineer
category: skills
order: 50
published: true
lang: vi
---

# Mintlify

v2.0.0 — Mintlify documentation builder. Bao gồm thiết lập, cấu hình, MDX components, API docs, tính năng AI và triển khai.

## Skill Này Làm Gì

Kích hoạt khi xây dựng hoặc cập nhật các trang tài liệu Mintlify. Xử lý cấu hình `docs.json`, sử dụng MDX component, tích hợp OpenAPI, cấu trúc điều hướng, và triển khai lên nền tảng hosting của Mintlify.

## Bắt Đầu Nhanh

```bash
npm i -g mintlify       # Cài đặt CLI
mint new                 # Tạo dự án docs mới
mint dev                 # Local dev server → http://localhost:3000
mint validate            # Xác nhận docs.json + nội dung
```

## Khái Niệm Cốt Lõi

### Cấu Hình (`docs.json`)

Config trung tâm kiểm soát tất cả cấu trúc và metadata trang:

```json
{
  "name": "My Docs",
  "theme": "mint",
  "navigation": [...],
  "colors": { "primary": "#0D9373" },
  "favicon": "/favicon.png"
}
```

**7 theme tích hợp**: `mint`, `maple`, `palm`, `willow`, `linden`, `almond`, `aspen`

### Cấu Trúc Điều Hướng

Mintlify hỗ trợ điều hướng nhiều lớp:

| Loại | Use Case |
|------|----------|
| **Tabs** | Các khu vực sản phẩm cấp cao nhất |
| **Anchors** | Liên kết sidebar cố định (changelog, blog) |
| **Groups** | Các phần trong một tab |
| **Dropdowns** | Bộ sưu tập group lồng nhau |
| **Products** | Nav đa sản phẩm (enterprise) |
| **Versions** | Chuyển đổi nội dung v1/v2 |
| **Languages** | Chuyển đổi nội dung i18n |

### MDX + React Components

Các trang là MDX — hỗ trợ React component đầy đủ cùng markdown.

## MDX Components

26+ component tích hợp có sẵn:

| Component | Mục đích |
|-----------|---------|
| `<Card>`, `<CardGroup>` | Link cards trong layout dạng lưới |
| `<Steps>` | Chuỗi bước được đánh số |
| `<Tabs>`, `<Tab>` | Nội dung dạng tab |
| `<Accordion>`, `<AccordionGroup>` | Các phần có thể thu gọn |
| `<CodeGroup>` | Ví dụ code nhiều ngôn ngữ |
| `<Note>`, `<Warning>`, `<Tip>`, `<Info>` | Hộp callout |
| `<Frame>` | Container hình ảnh/video với caption |
| `<Tooltip>` | Văn bản hover inline |
| `<Icon>` | Icons inline (1000+ có sẵn) |
| `<ResponseField>` | Tài liệu field phản hồi API |
| `<ParamField>` | Tài liệu tham số API |
| Mermaid | Sơ đồ qua fenced code blocks |

## Lệnh CLI

| Lệnh | Mục đích |
|------|---------|
| `mint dev` | Khởi động local dev server |
| `mint new` | Tạo dự án mới |
| `mint update` | Cập nhật Mintlify CLI |
| `mint broken-links` | Tìm các liên kết nội bộ bị hỏng |
| `mint a11y` | Kiểm tra accessibility |
| `mint validate` | Xác nhận config + frontmatter |
| `mint openapi-check` | Xác nhận OpenAPI spec |
| `mint rename <old> <new>` | Đổi tên file và cập nhật tham chiếu |
| `mint migrate-mdx` | Di chuyển mint.json sang docs.json |

## Tài Liệu API

Tự động tạo các trang tham chiếu từ OpenAPI 3.x hoặc AsyncAPI specs:

```json
// docs.json
{
  "openapi": "openapi.yaml"
}
```

Mỗi endpoint có một playground tương tác với:
- Request builder (headers, params, body)
- API calls trực tiếp từ trình duyệt
- Trình xem response schema
- Code snippets trong 10+ ngôn ngữ

Hỗ trợ: REST (OpenAPI), async APIs (AsyncAPI), webhooks.

## Tính Năng AI

| Tính năng | Mục đích |
|---------|---------|
| `llms.txt` | Phơi bày tài liệu cho LLM crawlers |
| `skill.md` | Định nghĩa Claude Code skill cho tài liệu của bạn |
| Hỗ trợ MCP | Kết nối trang tài liệu như MCP server cho AI assistants |

## Triển Khai

**Chính:** Kết nối GitHub hoặc GitLab repo — tự động triển khai khi push lên main.

**Preview deployments:** URL tự động tạo cho mỗi PR.

**Custom domains:** Cấu hình trong Mintlify dashboard, SSL tự động.

**Self-hosting / CDN:**

| Nền tảng | Phương thức |
|----------|--------|
| Vercel | Adapter `@mintlify/vercel` |
| Cloudflare Pages | Static export |
| AWS S3 + CloudFront | Static export |

**Tích hợp analytics:** GA4, PostHog, Amplitude, Mixpanel, Segment, Plausible, Fathom và 5+ khác.

## Skills Liên Quan

- [Docs Seeker](/vi/docs/engineer/skills/docs-seeker) — tra cứu tài liệu Mintlify
- [MCP Builder](/vi/docs/engineer/skills/mcp-builder) — xây dựng MCP server cho trang tài liệu của bạn
