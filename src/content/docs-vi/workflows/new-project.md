---
title: "Dự Án Greenfield"
description: "Documentation for Dự Án Greenfield"
lang: vi
section: workflows
category: engineer
order: 6
published: true
lastUpdated: 2025-11-07
---

# Dự Án Greenfield

Tạo dự án mới từ đầu với quy trình phát triển AI-powered của ClaudeKit. Biến ý tưởng thành ứng dụng production nhanh chóng với intelligent agents.

## Cài Đặt

### 1. Cài ClaudeKit CLI

```bash
npm i -g claudekit-cli@latest
```

## Bắt Đầu Nhanh

### Phương Pháp 1: Bootstrap Dự Án Mới

```bash
# Tạo dự án mới với ClaudeKit Engineer kit
ck new --kit engineer --dir /đường/dẫn/đến/dự/án
```

**Tùy chọn:**
- `--kit engineer`: Cài ClaudeKit Engineer configuration
- `--dir`: Thư mục đích cho dự án

### Phương Pháp 2: Thiết Lập Thủ Công

```bash
# Tạo thư mục
mkdir dự-án-tuyệt-vời
cd dự-án-tuyệt-vời

# Khởi tạo git (tùy chọn nhưng nên có)
git init

# Khởi động Claude Code
claude
```

## Bootstrap Ý Tưởng

### Lệnh Bootstrap

```bash
/ck:bootstrap <mô-tả-ý-tưởng-của-bạn>
```

Đây là **lệnh mạnh nhất** cho dự án greenfield. Nó:
1. Hỏi thêm câu hỏi để hiểu rõ
2. **Cung cấp kế hoạch triển khai chi tiết** (xem kỹ!)
3. Sau khi đồng ý, bắt đầu triển khai
4. Tự động viết tests
5. Thực hiện code reviews
6. Tạo specs và roadmap ban đầu
7. Cung cấp báo cáo tóm tắt

**Không cần chạy `/ck:docs init`** - specs được tạo tự động trong quá trình bootstrap.

### Ví Dụ: Dự Án Đơn Giản

```bash
/ck:bootstrap Một CLI tool convert markdown files thành PDF với custom styling
```

**CC sẽ hỏi:**
- Nền tảng mục tiêu? (Node.js, Deno, Bun?)
- Thư viện PDF ưa thích? (pdfkit, puppeteer, weasyprint?)
- Phương pháp custom styling? (CSS, theme files?)
- Phương thức phân phối? (npm, binary, cả hai?)

### Ví Dụ: Web Application

```bash
/ck:bootstrap Một ứng dụng todo cộng tác real-time với team workspaces và permissions
```

**CC sẽ hỏi:**
- Frontend framework? (React, Vue, Svelte?)
- Backend? (Node.js, Python, Go?)
- Database? (PostgreSQL, MongoDB, Supabase?)
- Giải pháp real-time? (WebSocket, Server-Sent Events?)
- Authentication? (OAuth, email/password, magic link?)

### Ví Dụ: Discord Bot

```bash
/ck:bootstrap Bot Discord nghiên cứu, phân tích và gửi báo cáo cổ phiếu DJI lúc 7am hàng ngày
```

**CC sẽ hỏi:**
- Nguồn dữ liệu cổ phiếu? (API nào?)
- Loại phân tích? (Technical, fundamental, cả hai?)
- Định dạng báo cáo? (Embed, text, charts?)
- Time zone cho lịch trình?
- Lưu trữ dữ liệu lịch sử?

### Chế Độ Tự Động (Dùng Cẩn Thận!)

```bash
/ck:bootstrap --auto <ý-tưởng-của-bạn>
```

Chạy chế độ tự động hoàn toàn không cần review plan. CC sẽ:
- Tự quyết định kỹ thuật
- Triển khai toàn bộ dự án
- Chạy tests và sửa lỗi
- Tạo tài liệu

**Khuyến nghị:** Chỉ dùng cho:
- Dự án đơn giản, rõ ràng
- Prototypes và thử nghiệm
- Ứng dụng không quan trọng

**Luôn review code** trước khi dùng production.

## Sau Bootstrap

### Cấu Trúc Dự Án

ClaudeKit tạo cấu trúc dự án chuẩn:

```
dự-án-của-tôi/
├── .claude/           # ClaudeKit configuration
├── docs/              # Tài liệu đã tạo
│   ├── project-overview-pdr.md
│   ├── system-architecture.md
│   └── roadmap.md
├── src/               # Source code
├── tests/             # Test files
├── package.json       # Dependencies
└── README.md          # Project readme
```

### Tiếp Tục Phát Triển

Dùng tất cả lệnh ClaudeKit cho phát triển tiếp:

#### Thêm Tính Năng Mới
```bash
/ck:cook Thêm xác thực người dùng với email verification
```

#### Sửa Lỗi
```bash
/ck:fix --quick Button click handler không hoạt động trên mobile
/ck:fix Lỗi state management phức tạp trong checkout flow
```

#### Lên Kế Hoạch Cải Tiến
```bash
/ck:plan Thêm xử lý thanh toán với Stripe
```

#### Chạy Tests
```bash
/ck:test
```

## Các Loại Dự Án Thường Gặp

### Web API Server

```bash
/ck:bootstrap REST API cho nền tảng e-commerce với products, cart, orders và payments
```

**Câu hỏi thường gặp:**
- Framework: Express, Fastify, Nest.js?
- Database: PostgreSQL, MySQL, MongoDB?
- Authentication: JWT, session-based?
- Payment provider: Stripe, PayPal?
- Hosting: Vercel, AWS, Railway?

### Full-Stack Application

```bash
/ck:bootstrap Ứng dụng quản lý task full-stack với kanban boards, time tracking và team collaboration
```

**Câu hỏi thường gặp:**
- Frontend: Next.js, React + Vite, Remix?
- State management: Redux, Zustand, Context?
- Database: Supabase, PlanetScale, MongoDB?
- Real-time: Socket.io, Supabase Realtime?
- File storage: S3, Cloudflare R2?

### Chrome Extension

```bash
/ck:bootstrap Chrome extension tóm tắt bài viết web và lưu highlights vào Notion
```

**Câu hỏi thường gặp:**
- Manifest version: V2 hay V3?
- AI service: OpenAI, Anthropic, local?
- Notion integration: Official API?
- Storage: Chrome storage, cloud sync?

### Mobile App Backend

```bash
/ck:bootstrap Backend API cho ứng dụng fitness mobile với workout tracking, social features và achievements
```

**Câu hỏi thường gặp:**
- Framework: Express, FastAPI, Rails?
- Database: PostgreSQL, MongoDB?
- File uploads: S3, Cloudflare R2?
- Push notifications: FCM, OneSignal?
- Analytics: Mixpanel, PostHog?

## Workflows Nâng Cao

### Phát Triển Lặp

```bash
# 1. Bắt đầu với MVP
/ck:bootstrap Sản phẩm tối thiểu cho ứng dụng theo dõi thói quen

# 2. Sau khi hoàn thành MVP, thêm tính năng
/ck:cook Thêm tính năng chia sẻ social
/ck:cook Thêm streak tracking và notifications
/ck:cook Thêm analytics dashboard

# 3. Tối ưu và tinh chỉnh
/ck:fix Vấn đề hiệu suất với datasets lớn 1000+ items
/ck:plan Thêm tính năng premium với subscription
```

### Kiến Trúc Multi-Service

```bash
# 1. Bootstrap main API
/ck:bootstrap API service chính cho nền tảng social media

# 2. Lên kế hoạch microservices
/ck:plan Thêm service auth riêng
/ck:plan Thêm service xử lý media
/ck:plan Thêm service notification

# 3. Triển khai services riêng biệt
/ck:cook auth-service-plan.md
/ck:cook media-service-plan.md
/ck:cook notification-service-plan.md
```

### Documentation-Driven Development

```bash
# 1. Tạo kế hoạch chi tiết trước
/ck:plan Nền tảng SaaS hoàn chỉnh với multi-tenancy, billing và admin dashboard

# 2. Xem và tinh chỉnh kế hoạch
# Chỉnh sửa file markdown plan đã tạo

# 3. Triển khai theo từng giai đoạn
/ck:cook plan.md --phase 1
/ck:test
/ck:cook plan.md --phase 2
/ck:test
```

## Cấu Hình Dự Án

### Thiết Lập Environment

Sau bootstrap, cấu hình environments:

```bash
# Development
/config Tạo cấu hình môi trường development

# Production
/config Tạo cấu hình môi trường production

# Testing
/config Tạo cấu hình môi trường testing
```

### Deployment

```bash
# Lên kế hoạch deployment
/ck:plan Deploy lên Vercel với CI/CD

# Triển khai deployment
/ck:cook deployment-plan.md

# Hoặc dùng integration cụ thể
/integrate vercel
/integrate railway
/integrate fly.io
```

## Best Practices

### 1. Mô Tả Rõ Ràng

**Tốt:**
```bash
/ck:bootstrap Ứng dụng chat real-time với rooms, direct messages, file sharing và presence indicators. Target 1000 concurrent users.
```

**Không tốt:**
```bash
/ck:bootstrap App chat
```

### 2. Trả Lời Câu Hỏi Đầy Đủ

Cung cấp câu trả lời chi tiết cho câu hỏi của CC. Context tốt hơn = triển khai tốt hơn.

### 3. Xem Kỹ Kế Hoạch

**QUAN TRỌNG:** Luôn xem kỹ kế hoạch triển khai trước khi đồng ý. Kiểm tra:
- Quyết định kiến trúc
- Lựa chọn công nghệ
- Cân nhắc bảo mật
- Cách tiếp cận khả năng mở rộng
- Chiến lược testing

### 4. Bắt Đầu Nhỏ, Lặp Dần

Bắt đầu với chức năng cốt lõi, sau đó mở rộng:
```bash
# Giai đoạn 1: Core MVP
/ck:bootstrap Nền tảng blog cơ bản với posts và comments

# Giai đoạn 2: Cải tiến
/ck:cook Thêm rich text editor
/ck:cook Thêm upload hình ảnh
/ck:cook Thêm user profiles

# Giai đoạn 3: Tính năng nâng cao
/ck:cook Thêm chức năng tìm kiếm
/ck:cook Thêm social sharing
```

### 5. Dùng Version Control

```bash
# Sau bootstrap
git add .
git commit -m "Khởi tạo dự án qua ClaudeKit bootstrap"

# Sau mỗi tính năng
/ck:git cp
```

## Xử Lý Sự Cố

### Bootstrap Bị Treo hoặc Thất Bại

```bash
# Dừng và khởi động lại với mô tả cụ thể hơn
/ck:bootstrap [mô tả chi tiết hơn với tech stack preferences]
```

### Code Được Tạo Có Vấn Đề

```bash
# Sửa các vấn đề cụ thể
/ck:fix [mô tả vấn đề]

# Hoặc chạy full test suite và tự động sửa
/ck:fix
```

### Cần Đổi Cách Tiếp Cận

```bash
# Tạo kế hoạch mới
/ck:plan Refactor sang kiến trúc khác

# Triển khai thay đổi
/ck:cook new-approach-plan.md
```

## Bước Tiếp Theo

Sau khi bootstrap dự án:

1. **Phát Triển Liên Tục**: Dùng `/ck:cook` cho tính năng mới
2. **Testing**: Chạy `/ck:test` thường xuyên
3. **Tài Liệu**: Giữ `/ck:docs update` cập nhật
4. **Deployment**: Thiết lập CI/CD với `/ck:plan`
5. **Cộng Tác Nhóm**: Chia sẻ cấu hình `.claude/`

## Tài Nguyên

- [Tất Cả Skills](/vi/docs/engineer/skills) - Tham khảo kỹ năng đầy đủ
- [AI Agents](/vi/docs/engineer/agents/) - Hiểu specialized agents
- [Workflows](/vi/docs/engineer/configuration/workflows) - Quy trình phát triển
- [Use Cases](/vi/docs/workflows) - Ví dụ thực tế

---

**Sẵn sàng xây dựng?** Bắt đầu với `/ck:bootstrap` và để AI agents xử lý phần nặng nhọc. Nhớ **xem kỹ kế hoạch** trước khi đồng ý!

**Cần giúp?** Truy cập [GitHub Discussions](https://github.com/mrgoonie/claudekit-cli/discussions)
