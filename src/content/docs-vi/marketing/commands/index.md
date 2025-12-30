---
title: "Marketing Commands"
description: "Tài liệu đầy đủ về 21 lệnh marketing được hỗ trợ AI của ClaudeKit Marketing Kit - từ quản lý chiến dịch đến tạo nội dung"
section: marketing
category: commands
order: 1
published: true
---

# Lệnh Marketing (Marketing Commands)

19 lệnh chuyên biệt cho tự động hóa marketing, tạo nội dung và quản lý chiến dịch. Mỗi lệnh kích hoạt các agent AI chuyên môn sâu về marketing.

## Ma Trận Tham Chiếu Nhanh

### Lệnh Marketing Cốt Lõi (6 lệnh)

| Lệnh | Mục Đích | Kết Quả | Agents Sử Dụng |
|---------|---------|--------|-------------|
| [/campaign](/docs/marketing/commands/campaign) | Tạo và quản lý chiến dịch | Bản tóm tắt chiến dịch + báo cáo | campaign-manager, funnel-architect |
| [/content](/docs/marketing/commands/content) | Tạo nội dung marketing | Bài blog, trang landing | content-creator, seo-specialist |
| [/seo](/docs/marketing/commands/seo) | Kiểm tra và tối ưu SEO | Báo cáo SEO + đề xuất | seo-specialist |
| [/email](/docs/marketing/commands/email) | Tạo nội dung email | Chuỗi email | email-wizard, copywriter |
| [/social](/docs/marketing/commands/social) | Nội dung mạng xã hội | Bài đăng theo nền tảng | social-media-manager |
| [/analyze](/docs/marketing/commands/analyze) | Phân tích và hiệu suất | Thông tin dựa trên dữ liệu | analytics-analyst |

### Lệnh Tạo Nội Dung (6 lệnh)

| Lệnh | Mục Đích | Tốt Nhất Cho | Thời Gian Tiết Kiệm |
|---------|---------|----------|------------|
| [/write](/docs/marketing/commands/write) | Bài blog, kiểm tra nội dung, xuất bản | Nội dung dài | 2-4 giờ |
| [/video](/docs/marketing/commands/video) | Script video, storyboard, sản xuất | Marketing video | 4-8 giờ |
| [/slide](/docs/marketing/commands/slide) | Bài thuyết trình, pitch deck | Bán hàng & đề xuất | 2-3 giờ |
| [/brainstorm](/docs/marketing/commands/brainstorm) | Tạo ý tưởng hợp tác | Phiên chiến lược | 1-2 giờ |
| [/design](/docs/marketing/commands/design) | Tạo hình ảnh AI | Tài sản hình ảnh | 30-60 phút |

### Lệnh Tiện Ích (8 lệnh)

| Lệnh | Mục Đích | Khi Nào Sử Dụng |
|---------|---------|-------------|
| [/scout](/docs/marketing/commands/scout) | Tìm kiếm codebase nhanh | Tìm tệp liên quan |
| [/review](/docs/marketing/commands/review) | Phân tích chất lượng code | Trước khi commit |
| [/ask](/docs/marketing/commands/ask) | Tư vấn kiến trúc | Quyết định kỹ thuật |
| [/bootstrap](/docs/marketing/commands/bootstrap) | Khởi tạo dự án | Dự án mới |
| [/git](/docs/marketing/commands/git) | Thao tác Git | Tạo PR, commit |
| [/dashboard](/docs/marketing/commands/dashboard) | Giao diện dashboard marketing | Quản lý trực quan |
| [/use-mcp](/docs/marketing/commands/use-mcp) | Thao tác MCP server | Tích hợp bên ngoài |
| [/persona](/docs/marketing/commands/persona) | Quản lý persona khách hàng | Nghiên cứu đối tượng |

## Danh Mục Lệnh

### Lập Kế Hoạch & Chiến Lược

Bắt đầu từ đây cho chiến dịch hoặc creative brief mới:

```bash
# Brainstorm giải pháp cùng nhau
/brainstorm how to improve conversion rates

# Nhận hướng dẫn kiến trúc
/ask what's the best way to structure our marketing automation?

# Tạo persona khách hàng
/persona create "enterprise software buyers"
```

### Tạo Nội Dung

Tạo tài sản marketing:

```bash
# Tạo nội dung blog với khớp giọng văn thương hiệu
/write:blog "AI marketing automation guide"

# Kiểm tra chất lượng nội dung hiện có
/write:audit /assets/blog-posts/latest-post.md

# Tạo video với script và storyboard
/video:create "30-second product demo for social media"

# Tạo pitch deck
/slide:create "Series A investor pitch deck"

# Tạo chuỗi email
/email nurture "SaaS trial users"

# Bài đăng mạng xã hội
/social linkedin post "product launch announcement"

# Tài sản hình ảnh
/design hero banner for landing page
```

### Quản Lý Chiến Dịch

Điều phối chiến dịch marketing:

```bash
# Tạo chiến dịch mới
/campaign create "Q1 Product Launch"

# Kiểm tra trạng thái chiến dịch
/campaign status "Q1 Product Launch"

# Phân tích hiệu suất
/campaign analyze "Q1 Product Launch"
```

### SEO & Phân Tích

Tối ưu hóa và đo lường:

```bash
# Kiểm tra SEO kỹ thuật
/seo audit https://example.com

# Nghiên cứu từ khóa
/seo keywords "project management software"

# Báo cáo phân tích
/analyze traffic
/analyze conversions
```

## Quy Trình Làm Việc Phổ Biến

### 1. Khởi Chạy Chiến Dịch Marketing

```bash
# Bước 1: Xác định đối tượng
/persona create

# Bước 2: Lập kế hoạch chiến dịch
/campaign create "Summer Sale 2025"

# Bước 3: Tạo nội dung
/email launch "Summer Sale"
/social twitter thread "Summer Sale announcement"
/design social graphic for Twitter

# Bước 4: Theo dõi hiệu suất
/analyze campaigns
```

**Thời gian**: 30 phút so với 2-3 ngày làm thủ công

### 2. Tạo Bài Blog SEO

```bash
# Bước 1: Nghiên cứu từ khóa
/seo keywords "best marketing automation tools"

# Bước 2: Tạo nội dung
/content blog "Marketing automation tools comparison 2025"

# Bước 3: Tạo hình ảnh
/design featured image for blog post

# Bước 4: Tối ưu hóa
/seo audit https://yourblog.com/marketing-automation

# Bước 5: Commit
/git:cm
```

**Thời gian**: 20 phút so với 4-6 giờ làm thủ công

### 3. Tạo Video Marketing

```bash
# Bước 1: Tạo script
/video:script "Product feature demo" --duration=60 --platform=youtube

# Bước 2: Tạo storyboard
/video:storyboard /assets/videos/latest-script.md

# Bước 3: Tạo video hoàn chỉnh
/video:create "Product demo video for homepage"
```

**Thời gian**: 30 phút so với 2-3 ngày làm thủ công

### 4. Chuẩn Bị Pitch Deck

```bash
# Bước 1: Tạo bài thuyết trình
/slide:create "Series A investor pitch deck"

# Bước 2: Xem dashboard để quản lý tài sản
/dashboard

# Bước 3: Xuất và chia sẻ
# File .pptx sẵn sàng chỉnh sửa tại /assets/slides/
```

**Thời gian**: 20 phút so với 1-2 ngày làm thủ công

## Quy Ước Đầu Ra

Tất cả lệnh tuân theo các mẫu đầu ra nhất quán:

### Tài Sản Chiến Dịch
```
assets/campaigns/{date}-{slug}/
├── briefs/
├── creatives/
└── reports/
```

### Tài Sản Nội Dung
```
assets/
├── copy/emails/{date}-{type}-{slug}.md
├── posts/{platform}/{date}-{slug}.md
├── articles/{date}-{slug}/{date}-{slug}.md
└── banners/
```

### Báo Cáo
```
reports/analytics/{date}-{type}.md
assets/diagnostics/campaign-audits/{date}-{name}.md
assets/seo/audits/{date}-{domain}-audit.md
```

### Kế Hoạch
```
plans/{date}-{slug}/
├── plan.md
├── phase-01-{name}.md
├── phase-02-{name}.md
└── reports/
```

## Hệ Sinh Thái Agent

Các lệnh kích hoạt các agent AI chuyên biệt:

### Content Agents
- **content-creator**: Bài blog, trang landing
- **copywriter**: Bản sao bán hàng, CTAs
- **email-wizard**: Chuỗi email
- **social-media-manager**: Nội dung xã hội

### Strategy Agents
- **campaign-manager**: Điều phối chiến dịch
- **funnel-architect**: Phễu chuyển đổi
- **seo-specialist**: Tối ưu SEO
- **analytics-analyst**: Phân tích hiệu suất

### Development Agents
- **planner**: Lập kế hoạch triển khai
- **tester**: Đảm bảo chất lượng
- **code-reviewer**: Chất lượng code
- **debugger**: Phân tích nguyên nhân gốc

### Support Agents
- **researcher**: Nghiên cứu thị trường
- **lead-qualifier**: Phân tích đối tượng
- **project-manager**: Theo dõi tiến độ
- **docs-manager**: Tài liệu

Xem [Marketing Agents](/vi/docs/marketing/agents) để biết chi tiết đầy đủ.

## Kích Hoạt Skill

Các lệnh tự động kích hoạt các skill liên quan:

- **campaign-management**: Mẫu và quy trình chiến dịch
- **email-marketing**: Best practices email
- **seo-optimization**: Frameworks SEO
- **social-media**: Chiến lược nền tảng
- **creativity**: Thiết kế và copywriting
- **analytics**: Theo dõi hiệu suất
- **ai-multimodal**: Tạo và phân tích hình ảnh
- **brand-guidelines**: Tính nhất quán thương hiệu

Xem [Marketing Skills](/vi/docs/marketing/skills) để biết danh mục đầy đủ.

## Tích Hợp MCP

Các lệnh hỗ trợ Model Context Protocol servers:

- **Google Analytics 4**: Dữ liệu lưu lượng và hành vi
- **Search Console**: Hiệu suất tìm kiếm
- **Discord**: Quản lý cộng đồng
- **Slack**: Cộng tác nhóm

Sử dụng `/use-mcp` để tương tác với các MCP servers đã kết nối.

## Best Practices

### 1. Bắt Đầu Cụ Thể
```bash
# Tốt: Cụ thể, tập trung
/write:blog "10 SaaS pricing strategies for 2025"

# Tránh: Mơ hồ, quá rộng
/write:blog "marketing tips"
```

### 2. Sử Dụng Đúng Lệnh Cho Công Việc
```bash
# Blog post → /write
/write:blog "Complete guide to email marketing"

# Video content → /video
/video:create "30-second product demo"

# Presentations → /slide
/slide:create "Q1 campaign proposal"
```

### 3. Để AI Làm Rõ
Các lệnh sẽ đặt câu hỏi khi cần:
```bash
/email newsletter

# AI hỏi:
# - Đối tượng mục tiêu?
# - Thông điệp chính?
# - Hành động mong muốn?
```

### 4. Xem Xét Trước Khi Xuất Bản
```bash
# Luôn kiểm tra nội dung
/write:audit /assets/blog-posts/latest.md

# Xem xét điểm chất lượng
# Sau đó xuất bản
/write:publish /assets/blog-posts/latest.md
```

### 5. Sử Dụng Dashboard Để Quản Lý
```bash
# Xem tất cả tài sản marketing
/dashboard

# Quản lý:
# - Copy & Writing Styles
# - Video Storyboards
# - Presentations
# - Branding Guidelines
# - Social Posts
```

## Nhận Trợ Giúp

### Trợ Giúp Lệnh Cụ Thể
```bash
# Nhận hướng dẫn sử dụng lệnh chi tiết
/ck-help campaign
/ck-help plan
/ck-help fix
```

### Tìm Kiếm Tài Liệu
```bash
# Tìm lệnh liên quan
/ck-help search email marketing
/ck-help search SEO
```

### Đề Xuất Nhiệm Vụ
```bash
# Nhận gợi ý lệnh
/ck-help How do I create a blog post?
/ck-help What command analyzes campaigns?
```

## Mẹo Hiệu Suất

### Sử Dụng Dashboard Để Quản Lý Trực Quan
```bash
# Khởi chạy giao diện trực quan
/dashboard

# Quản lý chiến dịch, nội dung, tài sản một cách trực quan
# Truy cập tại http://localhost:5173
```

### Tận Dụng Asset Management
```bash
# Tổ chức tài sản theo danh mục
# - Copy & Writing Styles
# - Video Storyboards
# - Presentations
# - Infographics
# - Branding Guidelines
# - Social Posts
```

### Kiểm Tra Nội Dung Trước Xuất Bản
```bash
# Kiểm tra chất lượng trước khi xuất bản
/write:audit /assets/blog-posts/article.md

# Đảm bảo điểm ≥75/100 cho SEO, khả năng đọc, giọng văn thương hiệu
```

## Bước Tiếp Theo

**Mới với ClaudeKit Marketing?**
1. [Hướng Dẫn Bắt Đầu Nhanh](/vi/docs/marketing/quick-start)
2. [Cài Đặt](/vi/docs/getting-started/installation)
3. [Khái Niệm Marketing](/vi/docs/marketing/core-concepts)

**Sẵn Sàng Tạo?**
- [Quản Lý Chiến Dịch](/vi/docs/marketing/commands/campaign)
- [Tạo Nội Dung](/vi/docs/marketing/commands/content)
- [Tối Ưu SEO](/vi/docs/marketing/commands/seo)

**Chủ Đề Nâng Cao**:
- [Marketing Agents Tùy Chỉnh](/vi/docs/marketing/agents/custom)
- [Marketing Workflows](/vi/docs/marketing/workflows)
- [Tính Năng Dashboard](/vi/docs/marketing/commands/dashboard)

## Tài Nguyên Liên Quan

- [Marketing Agents](/vi/docs/marketing/agents) - Gặp gỡ đội ngũ marketing AI của bạn
- [Marketing Skills](/vi/docs/marketing/skills) - Các module chuyên môn
- [Marketing Workflows](/vi/docs/marketing/workflows) - Quy trình làm việc phổ biến
- [Marketing Dashboard](/vi/docs/marketing/dashboard) - Giao diện quản lý trực quan

---

**19 lệnh. Khả năng marketing vô hạn.** Đội ngũ marketing AI của bạn đã sẵn sàng.
