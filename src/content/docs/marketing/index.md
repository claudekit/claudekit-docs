---
title: "Marketing Kit"
description: "Bộ công cụ tự động hóa tiếp thị được cung cấp bởi AI"
lang: vi
section: marketing
category: overview
order: 1
---

# Marketing Kit

Chào mừng đến với tài liệu Marketing Kit của ClaudeKit. Bộ công cụ này cung cấp tự động hóa tiếp thị được cung cấp bởi AI cho toàn bộ quy trình tiếp thị của bạn.

## What's Inside

Marketing Kit bao gồm:

- **27 Specialized Agents** - Từ quản lý chiến dịch đến tạo nội dung
- **73+ Slash Commands** - Truy cập nhanh vào các tác vụ tự động hóa tiếp thị
- **60+ Skills** - Khả năng chuyên biệt cho mọi nhu cầu tiếp thị
- **10 Workflows** - Hướng dẫn từng bước cho các tác vụ tiếp thị phổ biến
- **Real-time Dashboard** - Giám sát chiến dịch và phân tích

## Quick Start

Bắt đầu với Marketing Kit chỉ với một vài lệnh:

```bash
# Cài đặt ClaudeKit CLI
npm install -g claudekit-cli

# Tạo một dự án tiếp thị mới
ck new --kit marketing

# Bắt đầu chiến dịch đầu tiên của bạn
/campaign create "Q1 Product Launch"
```

## Lợi Thế Vượt Trội

Không giống như các công cụ marketing truyền thống, ClaudeKit Marketing có **quyền truy cập đầy đủ vào codebase của bạn**:

- **Ảnh Chụp Màn Hình Sản Phẩm** - Tự động trích xuất từ code UI thực tế
- **Mô Tả Tính Năng** - Được tạo từ triển khai thực, không phải tưởng tượng
- **Độ Chính Xác Kỹ Thuật** - Tuyên bố marketing được xác minh dựa trên code thực
- **Đồng Bộ Phiên Bản** - Nội dung tự động cập nhật khi tính năng thay đổi

Điều này có nghĩa là tài liệu marketing của bạn luôn chính xác, chính xác về kỹ thuật và không thể bị đối thủ sao chép nếu không có codebase của bạn.

## Core Features

### Quản Lý Tài Sản (Content Hub)

Trung tâm tập trung cho tất cả tài sản marketing với tổ chức thông minh:

```bash
# Mở dashboard trực quan
/dashboard

# Quản lý 6 danh mục tài sản:
# - Copy & Phong Cách Viết
# - Storyboard (câu chuyện video)
# - Bài Thuyết Trình (pitch deck, đề xuất)
# - Infographic (trực quan hóa dữ liệu)
# - Hướng Dẫn Thương Hiệu (logo, màu sắc, giọng văn)
# - Bài Đăng Mạng Xã Hội (nội dung theo nền tảng)
```

**Ảnh chụp màn hình**:

![Trung tâm Quản lý Tài sản](/docs/screenshots/assets-management.png)
![Hướng dẫn Thương hiệu](/docs/screenshots/assets-branding-guideline.png)
![Xem trước Storyboard](/docs/screenshots/assets-storyboard-preview.png)

Xem [Quản Lý Tài Sản](/docs/marketing/features/asset-management) để biết chi tiết đầy đủ.

### Tạo Nội Dung

Tạo nội dung marketing chất lượng cao với trích xuất giọng văn tác giả:

```bash
# Bài blog với khớp phong cách
/write:blog "10 Chiến Lược Giá SaaS" --style casual-founder

# Kiểm tra chất lượng nội dung
/write:audit /assets/copy/blog-posts/pricing-guide.md

# Quy trình xuất bản
/write:publish /assets/copy/blog-posts/pricing-guide.md
```

Xem [Lệnh Write](/docs/marketing/commands/write) để biết chi tiết.

### Sản Xuất Video

Quy trình video chuyên nghiệp với Gemini Veo 3.1 + Imagen 4:

```bash
# Tạo video hoàn chỉnh
/video:create "Demo sản phẩm cho trang chủ"

# Tạo script video
/video:script "Giải thích API rate limiting" --duration=60 --platform=youtube

# Tạo storyboard trực quan
/video:storyboard /assets/videos/2024-12-30-api-demo/script.md
```

Xem [Lệnh Video](/docs/marketing/commands/video) để biết chi tiết.

### Bài Thuyết Trình

Tạo pitch deck, đề xuất chiến dịch và bài thuyết trình đẹp:

```bash
# Pitch deck cho nhà đầu tư
/slide:create "Series A pitch deck - AI marketing automation"

# Đề xuất chiến dịch
/slide:create "Q1 product launch campaign với phân tích ngân sách"

# Demo sản phẩm
/slide:create "Technical demo API features cho doanh nghiệp"
```

Xem [Lệnh Slide](/docs/marketing/commands/slide) để biết chi tiết.

### Quản Lý Chiến Dịch

Tạo, quản lý và tối ưu hóa chiến dịch tiếp thị với hỗ trợ AI:

```bash
/campaign create "Summer Sale 2025"
/campaign status
/campaign analyze
```

### SEO Optimization

Tăng xếp hạng tìm kiếm của bạn bằng các công cụ SEO được cung cấp bởi AI:

```bash
/seo keywords "competitor analysis"
/seo optimize "landing page"
/seo audit
```

### Analytics & Insights

Theo dõi hiệu suất và nhận được những hiểu biết có thể hành động:

```bash
/analyze traffic
/analyze campaigns
/analyze conversions
```

## Next Steps

- [Marketing Agents](/docs/marketing/agents) - Gặp gỡ đội tiếp thị AI của bạn
- [Marketing Commands](/docs/marketing/commands) - Tất cả các lệnh có sẵn
- [Marketing Workflows](/docs/marketing/workflows) - Hướng dẫn từng bước
