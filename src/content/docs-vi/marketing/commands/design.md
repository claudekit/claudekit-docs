---
lang: vi
title: "/design"
description: "Tạo nội dung hình ảnh trên brand với AI, tăng cường prompt, và xác minh tự động cho tài sản marketing"
section: marketing
category: commands
order: 13
published: true
---

> Tạo tài sản hình ảnh phù hợp với brand bằng AI

## Bắt Đầu Nhanh

```bash
/design hero banner for landing page
```

**Điều gì sẽ xảy ra**:
1. Trích xuất ngữ cảnh brand từ docs/brand-guidelines.md
2. Tăng cường prompt với màu sắc, phong cách, tâm trạng brand
3. Tạo hình ảnh với Imagen 4
4. Xác minh so với palette brand
5. Xuất hình ảnh kèm metadata

**Kết quả**: `assets/banners/hero-banner-251229.png`

## Nó Làm Gì

### Trước /design
- Công việc thiết kế thủ công (1-4 giờ)
- Thuê designer ($50-500)
- Ảnh stock (nhạt, lặp lại)
- Không nhất quán với brand

### Sau /design
- Tài sản được tạo bằng AI (2 phút)
- Nhất quán với brand mặc định
- Hình ảnh độc đáo
- Nhiều biến thể ngay lập tức

## Cú Pháp

```bash
/design [description]
```

## Ví Dụ

### Ví Dụ 1: Hero Banner

**Đầu vào**:
```bash
/design hero banner for SaaS landing page
```

**Quá trình**:
```markdown
✓ Brand context extracted from docs/brand-guidelines.md
   - Primary: Ocean Blue (#0077B6)
   - Accent: Golden Amber (#FFB627)
   - Style: Modern, minimalist, professional

✓ Prompt enhanced:
   Simple: "hero banner for SaaS landing page"
   Enhanced: "Modern minimalist SaaS hero section, professional team
   collaborating in sophisticated workspace, ocean blue and golden amber
   color palette, clean interface visible on screens, natural lighting,
   premium atmosphere, business-forward composition, cinematic depth,
   high-end corporate aesthetic"

✓ Image generated with Imagen 4 (16:9, 1920x1080)

✓ Verified:
   - Ocean Blue present: ✓
   - Golden Amber accents: ✓
   - Professional mood: ✓
   - High quality: ✓

Saved: assets/banners/hero-banner-saas-landing-251229.png
```

### Ví Dụ 2: Đồ Họa Mạng Xã Hội

**Đầu vào**:
```bash
/design LinkedIn post graphic, 1:1 aspect, stats overlay
```

**Kết quả**:
```markdown
✓ Generated: 1080x1080 px square graphic
✓ Style: Professional, data-focused
✓ Elements: Clean chart visualization, brand colors
✓ Text space: Reserved for stat overlays

Saved: assets/banners/social-media/linkedin-stats-graphic-251229.png

Next: Add text overlays in design tool or use:
/design LinkedIn graphic with "76% faster workflows" text
```

### Ví Dụ 3: Email Header

**Đầu vào**:
```bash
/design email header for welcome sequence
```

**Kết quả**:
```markdown
✓ Generated: 600x200 px email header
✓ Style: Welcoming, friendly, professional
✓ Brand colors integrated naturally
✓ Mobile-optimized dimensions

Saved: assets/banners/email-headers/welcome-sequence-251229.png
```

## Đường Dẫn Xuất

| Loại Nội Dung | Đường Dẫn | Kích Thước |
|--------------|------|------------|
| Banner/Header | assets/banners/ | 16:9 (1920x1080) |
| Mạng Xã Hội | assets/banners/social-media/ | 1:1 (1080x1080), 9:16 |
| Email Header | assets/banners/email-headers/ | 600x200 |
| Landing Page | assets/banners/landing-pages/ | 16:9 |
| Campaign Asset | assets/designs/campaigns/ | Various |
| Infographic | assets/infographics/ | Custom |

## Tỷ Lệ Khung Hình

| Định Dạng | Tỷ Lệ | Trường Hợp Sử Dụng |
|--------|-------|----------|
| 16:9 | Landscape | Banners, hero sections |
| 1:1 | Square | Instagram, LinkedIn |
| 9:16 | Vertical | Stories, TikTok |
| 4:3 | Standard | Presentations |

## Ngữ Cảnh Brand

Tự động trích xuất từ docs/brand-guidelines.md:
- Màu sắc chính/phụ
- Từ khóa phong cách trực quan
- Hướng dẫn typography
- Tâm trạng và giọng điệu
- Phần tử bị cấm

Nếu không có tài liệu brand, nhắc chạy:
```bash
/marketing:init  # Tạo hướng dẫn brand trước
```

## Tăng Cường Prompt

### Đầu Vào Đơn Giản
```
"team meeting"
```

### Prompt Tăng Cường AI
```
"Executive team meeting in sophisticated dark-themed boardroom,
warm golden amber lighting casting soft glows across polished
conference table, ocean blue subtle highlights in glass panels,
professional atmosphere with calm confidence, premium minimalist
interior, cinematic depth of field, business-forward"
```

### Danh Sách Kiểm Tra Chất Lượng
- Scene context added ✓
- Colors integrated naturally ✓
- Photography language ✓
- Mood matches brand ✓
- No prohibited elements ✓

## Mô Hình

| Mô Hình | Chất Lượng | Tốc Độ | Tốt Nhất Cho |
|-------|---------|-------|----------|
| imagen-4.0-fast-generate-001 | Good | 2-3 sec | Drafts, iterations |
| imagen-4.0-generate-001 | High | 5-8 sec | Final assets |
| imagen-4.0-ultra-generate-001 | Ultra | 15-20 sec | Hero images |

## Tích Hợp Quy Trình Làm Việc

### Quy Trình Tạo Nội Dung
```bash
# Blog post with visuals
/content blog "AI marketing guide"
/design featured image for blog post
/design infographic showing AI benefits

# Email campaign
/email launch "New Product"
/design email header for product launch
/design product showcase graphic
```

### Campaign Assets
```bash
# Complete campaign visuals
/campaign create "Q1 Launch"
/design hero banner for landing page
/design social media pack (Twitter, LinkedIn, Instagram)
/design email header series
```

## Lệnh Liên Quan

- [/content](/docs/marketing/commands/content) - Nội dung cần hình ảnh
- [/email](/docs/marketing/commands/email) - Email headers
- [/social](/docs/marketing/commands/social) - Đồ họa mạng xã hội
- [/campaign](/docs/marketing/commands/campaign) - Campaign assets

## Kỹ Năng Được Kích Hoạt

- **ai-multimodal**: Image generation (Imagen 4)
- **brand-guidelines**: Brand consistency
- **creativity**: Visual design direction

---

**Generate. Verify. Ship.** Hình ảnh được tạo bằng AI phù hợp với brand của bạn.
