---
lang: vi
title: "ck:mintlify"
description: "Xây dựng và triển khai trang tài liệu hiện đại với Mintlify, hỗ trợ MDX component, tích hợp OpenAPI, và tính năng AI"
section: engineer
kit: engineer
category: skills
order: 50
published: true
---

v2.0.0 — Trình xây dựng tài liệu Mintlify. Bao gồm cài đặt, cấu hình, MDX component, tài liệu API, tính năng AI, và triển khai.

## Chức Năng Của Skill Này

Kích hoạt khi xây dựng hoặc cập nhật trang tài liệu Mintlify. Xử lý cấu hình `docs.json`, sử dụng MDX component, tích hợp OpenAPI, cấu trúc điều hướng, và triển khai lên nền tảng hosting của Mintlify.

## Bắt Đầu Nhanh

```bash
npm i -g mintlify       # Cài đặt CLI
mint new                 # Scaffold dự án tài liệu mới
mint dev                 # Server dev local → http://localhost:3000
mint validate            # Xác nhận docs.json + nội dung
```

## Các Khái Niệm Cốt Lõi

### Cấu Hình (`docs.json`)

Cấu hình trung tâm kiểm soát toàn bộ cấu trúc và metadata của trang:

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

| Loại | Trường Hợp Sử Dụng |
|------|-------------------|
| **Tabs** | Khu vực sản phẩm cấp cao nhất |
| **Anchors** | Liên kết sidebar cố định (changelog, blog) |
| **Groups** | Các mục trong tab |
| **Dropdowns** | Bộ sưu tập nhóm lồng nhau |
| **Products** | Điều hướng đa sản phẩm (enterprise) |
| **Versions** | Chuyển đổi nội dung v1/v2 |
| **Languages** | Chuyển đổi nội dung i18n |

### MDX + React Component

Các trang là MDX — hỗ trợ React component đầy đủ bên cạnh markdown.

## MDX Component

26+ component tích hợp có sẵn:

| Component | Mục Đích |
|-----------|---------|
| `<Card>`, `<CardGroup>` | Card liên kết trong layout grid |
| `<Steps>` | Chuỗi bước có số |
| `<Tabs>`, `<Tab>` | Nội dung dạng tab |
| `<Accordion>`, `<AccordionGroup>` | Các mục có thể thu gọn |
| `<CodeGroup>` | Ví dụ code đa ngôn ngữ |
| `<Note>`, `<Warning>`, `<Tip>`, `<Info>` | Hộp callout |
| `<Frame>` | Container ảnh/video có chú thích |
| `<Tooltip>` | Văn bản hover inline |
| `<Icon>` | Icon inline (1000+ có sẵn) |
| `<ResponseField>` | Tài liệu trường phản hồi API |
| `<ParamField>` | Tài liệu tham số API |
| Mermaid | Sơ đồ qua khối code có rào chắn |

## Lệnh CLI

| Lệnh | Mục Đích |
|------|---------|
| `mint dev` | Khởi động server dev local |
| `mint new` | Scaffold dự án mới |
| `mint update` | Cập nhật Mintlify CLI |
| `mint broken-links` | Tìm liên kết nội bộ bị hỏng |
| `mint a11y` | Kiểm toán khả năng tiếp cận |
| `mint validate` | Xác nhận config + frontmatter |
| `mint openapi-check` | Xác nhận spec OpenAPI |
| `mint rename <cũ> <mới>` | Đổi tên file và cập nhật tham chiếu |
| `mint migrate-mdx` | Di chuyển mint.json sang docs.json |

## Tài Liệu API

Tự động tạo trang tham chiếu từ spec OpenAPI 3.x hoặc AsyncAPI:

```json
// docs.json
{
  "openapi": "openapi.yaml"
}
```

Mỗi endpoint có playground tương tác với:
- Trình xây dựng request (headers, params, body)
- Gọi API trực tiếp từ trình duyệt
- Trình xem response schema
- Code snippet trong 10+ ngôn ngữ

Hỗ trợ: REST (OpenAPI), async API (AsyncAPI), webhook.

## Tính Năng AI

| Tính Năng | Mục Đích |
|---------|---------|
| `llms.txt` | Công khai tài liệu cho LLM crawler |
| `skill.md` | Định nghĩa skill Claude Code cho tài liệu của bạn |
| Hỗ trợ MCP | Kết nối trang tài liệu như MCP server cho AI assistant |

## Triển Khai

**Chính:** Kết nối repo GitHub hoặc GitLab — tự động triển khai khi push lên main.

**Preview deployment:** URL tự động tạo cho mỗi PR.

**Domain tùy chỉnh:** Cấu hình trong dashboard Mintlify, SSL tự động.

**Self-hosting / CDN:**

| Nền Tảng | Phương Pháp |
|----------|------------|
| Vercel | `@mintlify/vercel` adapter |
| Cloudflare Pages | Static export |
| AWS S3 + CloudFront | Static export |

**Tích hợp analytics:** GA4, PostHog, Amplitude, Mixpanel, Segment, Plausible, Fathom, và 5+ thêm nữa.

## Skill Liên Quan

- [Docs Seeker](/vi/docs/engineer/skills/tools/docs-seeker) — tra cứu tài liệu Mintlify
- [MCP Builder](/vi/docs/engineer/skills/tools/mcp-builder) — xây dựng MCP server cho trang tài liệu của bạn
