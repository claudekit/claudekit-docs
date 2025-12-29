---
title: "Marketing Commands"
description: "Tài liệu đầy đủ về 21 lệnh marketing được hỗ trợ AI của ClaudeKit Marketing Kit - từ quản lý chiến dịch đến tạo nội dung"
section: marketing
category: commands
order: 1
published: true
---

# Lệnh Marketing (Marketing Commands)

21 lệnh chuyên biệt cho tự động hóa marketing, tạo nội dung và quản lý chiến dịch. Mỗi lệnh kích hoạt các agent AI chuyên môn sâu về marketing.

## Ma Trận Tham Chiếu Nhanh

### Lệnh Marketing Cốt Lõi (6 lệnh)

| Lệnh | Mục Đích | Kết Quả | Agents Sử Dụng |
|---------|---------|--------|-------------|
| [/campaign](/vi/docs/marketing/commands/campaign) | Tạo và quản lý chiến dịch | Bản tóm tắt chiến dịch + báo cáo | campaign-manager, funnel-architect |
| [/content](/vi/docs/marketing/commands/content) | Tạo nội dung marketing | Bài blog, trang landing | content-creator, seo-specialist |
| [/seo](/vi/docs/marketing/commands/seo) | Kiểm tra và tối ưu SEO | Báo cáo SEO + đề xuất | seo-specialist |
| [/email](/vi/docs/marketing/commands/email) | Tạo nội dung email | Chuỗi email | email-wizard, copywriter |
| [/social](/vi/docs/marketing/commands/social) | Nội dung mạng xã hội | Bài đăng theo nền tảng | social-media-manager |
| [/analyze](/vi/docs/marketing/commands/analyze) | Phân tích và hiệu suất | Thông tin dựa trên dữ liệu | analytics-analyst |

### Lệnh Quy Trình Làm Việc (4 lệnh)

| Lệnh | Mục Đích | Tốt Nhất Cho | Thời Gian Tiết Kiệm |
|---------|---------|----------|------------|
| [/plan](/vi/docs/marketing/commands/plan) | Tạo kế hoạch triển khai | Tính năng phức tạp | 2-4 giờ |
| [/cook](/vi/docs/marketing/commands/cook) | Triển khai tất cả trong một | Tính năng hoàn chỉnh | 4-8 giờ |
| [/brainstorm](/vi/docs/marketing/commands/brainstorm) | Tạo ý tưởng hợp tác | Phiên chiến lược | 1-2 giờ |
| [/design](/vi/docs/marketing/commands/design) | Tạo hình ảnh AI | Tài sản hình ảnh | 30-60 phút |

### Lệnh Tiện Ích (11 lệnh)

| Lệnh | Mục Đích | Khi Nào Sử Dụng |
|---------|---------|-------------|
| [/fix](/vi/docs/marketing/commands/fix) | Định tuyến vấn đề thông minh | Lỗi, sai sót, thất bại |
| [/code](/vi/docs/marketing/commands/code) | Thực thi kế hoạch hiện có | Sau giai đoạn lập kế hoạch |
| [/scout](/vi/docs/marketing/commands/scout) | Tìm kiếm codebase nhanh | Tìm tệp liên quan |
| [/review](/vi/docs/marketing/commands/review) | Phân tích chất lượng code | Trước khi commit |
| [/test](/vi/docs/marketing/commands/test) | Chạy bộ kiểm thử | Kiểm tra xác thực |
| [/ask](/vi/docs/marketing/commands/ask) | Tư vấn kiến trúc | Quyết định kỹ thuật |
| [/bootstrap](/vi/docs/marketing/commands/bootstrap) | Khởi tạo dự án | Dự án mới |
| [/git](/vi/docs/marketing/commands/git) | Thao tác Git | Tạo PR, commit |
| [/dashboard](/vi/docs/marketing/commands/dashboard) | Giao diện dashboard marketing | Quản lý trực quan |
| [/use-mcp](/vi/docs/marketing/commands/use-mcp) | Thao tác MCP server | Tích hợp bên ngoài |
| [/persona](/vi/docs/marketing/commands/persona) | Quản lý persona khách hàng | Nghiên cứu đối tượng |

## Danh Mục Lệnh

### Lập Kế Hoạch & Chiến Lược

Bắt đầu từ đây cho tính năng hoặc chiến dịch mới:

```bash
# Nghiên cứu và lập kế hoạch tính năng
/plan implement email drip campaign with analytics

# Brainstorm giải pháp cùng nhau
/brainstorm how to improve conversion rates

# Nhận hướng dẫn kiến trúc
/ask what's the best way to structure our marketing automation?
```

### Triển Khai

Thực thi kế hoạch của bạn:

```bash
# Triển khai kế hoạch hiện có
/code plans/251229-email-campaign.md

# Lập kế hoạch + triển khai trong một lệnh
/cook add blog post SEO optimization workflow
```

### Tạo Nội Dung

Tạo tài sản marketing:

```bash
# Tạo nội dung blog
/content blog "AI marketing automation guide"

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

### Giải Quyết Vấn Đề

Sửa lỗi một cách thông minh:

```bash
# Lỗi kiểu dữ liệu
/fix TypeScript compilation errors in campaign module

# Vấn đề giao diện
/fix Button not responsive on mobile

# Lỗi CI/CD
/fix GitHub Actions build failing

# Vấn đề phức tạp
/fix:hard Refactor campaign architecture
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

### 3. Xây Dựng Marketing Dashboard

```bash
# Bước 1: Lập kế hoạch kiến trúc
/plan build marketing dashboard with campaign tracking

# Bước 2: Triển khai
/code

# Bước 3: Khởi chạy dashboard
/dashboard dev

# Bước 4: Kiểm thử
/test

# Bước 5: Xem xét và commit
/review
/git:cm
```

**Thời gian**: 2 giờ so với 2-3 ngày làm thủ công

### 4. Sửa Lỗi Chiến Dịch

```bash
# Chẩn đoán nhanh
/debug email open rates dropping

# Định tuyến thông minh
/fix campaign analytics not tracking conversions

# Cho vấn đề phức tạp
/fix:hard Refactor entire email delivery system
```

### 5. Khởi Tạo Dự Án Marketing Mới

```bash
# Thiết lập dự án hoàn chỉnh
/bootstrap Create AI-powered marketing automation platform

# Nó làm gì:
# - Nghiên cứu best practices
# - Đề xuất tech stack
# - Tạo kế hoạch triển khai
# - Tạo designs
# - Triển khai tính năng
# - Viết tests
# - Tạo tài liệu
# - Onboard người dùng
```

**Thời gian**: 1 giờ so với 1-2 tuần làm thủ công

## Biến Thể Lệnh

Nhiều lệnh hỗ trợ biến thể cho hành vi chuyên biệt:

### Biến Thể Tốc Độ
```bash
/plan:fast    # Lập kế hoạch nhanh (tính năng đơn giản)
/cook:fast    # Triển khai nhanh
/fix:fast     # Sửa lỗi nhanh
```

### Biến Thể Độ Phức Tạp
```bash
/plan:hard    # Lập kế hoạch phức tạp (nhiều giai đoạn)
/cook:hard    # Triển khai phức tạp
/fix:hard     # Sửa lỗi kiến trúc sâu
```

### Biến Thể Song Song
```bash
/plan:parallel    # Thực thi giai đoạn song song
/cook:parallel    # Phát triển tính năng song song
/fix:parallel     # Sửa nhiều vấn đề đồng thời
```

### Biến Thể Tự Động
```bash
/plan:auto        # Lập kế hoạch tự động
/cook:auto        # Tự động hóa hoàn toàn
/bootstrap:auto   # Khởi tạo tự động
```

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

### 1. Bắt Đầu Nhỏ
```bash
# Tốt: Cụ thể, tập trung
/plan add email open rate tracking

# Tránh: Mơ hồ, quá rộng
/plan improve marketing
```

### 2. Sử Dụng Biến Thể Một Cách Khôn Ngoan
```bash
# Tính năng đơn giản → biến thể fast
/cook:fast add newsletter signup form

# Tính năng phức tạp → biến thể tiêu chuẩn
/cook implement multi-channel campaign automation
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

### 4. Xem Xét Trước Khi Commit
```bash
# Luôn xem xét thay đổi
/code plans/feature.md

# Để code-reviewer xác thực
# Sau đó commit
/git:cm
```

### 5. Chuỗi Lệnh
```bash
# Nghiên cứu → Lập kế hoạch → Triển khai → Kiểm thử → Commit
/brainstorm email automation strategy
# (xem xét kết quả brainstorm)
/plan implement email automation
# (xem xét kế hoạch)
/code
# (tests chạy tự động)
/git:cm
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

### Thực Thi Song Song
Sử dụng biến thể song song cho các nhiệm vụ độc lập:
```bash
# Sửa nhiều vấn đề không liên quan
/fix:parallel type errors + UI bugs + test failures
```

### Scout Trước Khi Coding
Tìm các tệp liên quan trước:
```bash
# Tìm kiếm codebase hiệu quả
/scout find campaign-related components

# Sau đó triển khai
/code
```

### Sử Dụng Dashboard Để Hiển Thị
```bash
# Khởi chạy giao diện trực quan
/dashboard

# Quản lý chiến dịch, nội dung, tài sản một cách trực quan
# Truy cập tại http://localhost:5173
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

**21 lệnh. Khả năng marketing vô hạn.** Đội ngũ marketing AI của bạn đã sẵn sàng.
