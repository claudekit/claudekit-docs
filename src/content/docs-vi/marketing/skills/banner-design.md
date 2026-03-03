---
lang: vi
title: "ckm:banner-design"
description: "Thiết kế banner cho mạng xã hội, quảng cáo, hero website với AI"
section: marketing
kit: marketing
category: skills
order: 63
---

# `ckm:banner-design`

> Tạo banner chuyên nghiệp cho mọi nền tảng với hướng dẫn thiết kế có cấu trúc và tạo ảnh bằng AI.

## Skill Này Làm Gì

**Thách thức**: Mỗi nền tảng marketing yêu cầu kích thước banner khác nhau, tỷ lệ khung hình khác nhau và yêu cầu thị giác khác nhau. Tạo tất cả thủ công tốn kém thời gian và đòi hỏi kỹ năng thiết kế.

**Giải pháp**: Skill banner-design cung cấp thông số kỹ thuật cho mọi nền tảng, guidelines thiết kế cho từng kênh, prompts tối ưu hóa cho AI image generation và quy trình review chất lượng.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi người dùng yêu cầu tạo banner, hero image hoặc visual cho quảng cáo.

**Tường minh**: Kích hoạt qua prompt:
```
Activate banner-design skill to create [loại banner] for [nền tảng]
```

## Tính Năng

### 1. Thông Số Kỹ Thuật Theo Nền Tảng

**Mạng xã hội**:
| Nền tảng | Kích thước | Tỷ lệ | Ghi chú |
|----------|-----------|-------|---------|
| Facebook Cover | 820×312px | 2.63:1 | Phần trên bị cắt trên mobile |
| Facebook Ad | 1200×628px | 1.91:1 | <20% text |
| Instagram Post | 1080×1080px | 1:1 | Cả feed và stories |
| Instagram Story | 1080×1920px | 9:16 | Safe zone: 250px trên/dưới |
| LinkedIn Banner | 1584×396px | 4:1 | Hình ảnh chuyên nghiệp |
| Twitter/X Header | 1500×500px | 3:1 | Phần giữa hiển thị tốt nhất |
| YouTube Channel Art | 2560×1440px | 16:9 | Thiết kế cho TV + mobile |

**Quảng cáo Display**:
| Định dạng | Kích thước |
|-----------|-----------|
| Leaderboard | 728×90px |
| Medium Rectangle | 300×250px |
| Wide Skyscraper | 160×600px |
| Large Rectangle | 336×280px |
| Half Page | 300×600px |

**Website**:
- Hero banner: 1920×600px (desktop), 768×400px (tablet)
- Feature banner: 1200×400px
- Sidebar: 300×250px hoặc 300×600px

### 2. AI Image Generation Prompts
Tạo prompts tối ưu cho DALL-E, Midjourney, Stable Diffusion.

**Template prompt chuẩn**:
```
[Mô tả chủ đề chính], [phong cách thiết kế], [bảng màu],
[tông cảm xúc], professional marketing banner,
high quality, [nền tảng] dimensions, clean composition,
[brand elements if any]
```

**Ví dụ**:
```
Modern SaaS dashboard screenshot, flat design style,
blue and white color palette, confident professional tone,
professional marketing banner, high quality,
Facebook ad 1200x628, clean composition,
minimal text overlay, gradient background
```

### 3. Checklist Thiết Kế
Đảm bảo banner đáp ứng tiêu chuẩn chất lượng trước khi sử dụng.

**Visual hierarchy**:
- [ ] Thông điệp chính nổi bật nhất
- [ ] CTA rõ ràng và dễ đọc
- [ ] Logo/brand mark đúng vị trí
- [ ] Tương phản đủ (WCAG AA minimum)

**Technical**:
- [ ] Đúng kích thước theo nền tảng
- [ ] File size < 150KB cho web ads
- [ ] PNG cho logo/graphics, JPG cho ảnh
- [ ] Safe zones đã được tôn trọng

### 4. A/B Testing Variants
Tạo nhiều biến thể để test hiệu quả.

**Biến thể phổ biến để test**:
- Headlines khác nhau
- CTA text khác nhau ("Dùng thử miễn phí" vs "Bắt đầu ngay")
- Màu nền khác nhau
- Hình ảnh sản phẩm vs người dùng

## Điều Kiện Tiên Quyết

- Truy cập AI image generation tool (DALL-E 3, Midjourney, hoặc Stable Diffusion)
- Figma hoặc Canva (tùy chọn, cho refinement)
- Brand guidelines (màu sắc, fonts, logo)

## Cấu Hình

**Brand tokens cần cung cấp**:
```yaml
brand:
  primary_color: "#0066FF"
  secondary_color: "#FF6600"
  font_heading: "Inter Bold"
  font_body: "Inter Regular"
  logo_url: "assets/logo.svg"
  tagline: "Marketing thông minh hơn"
```

## Thực Hành Tốt Nhất

**1. Mobile-First Design**
Hơn 60% impressions đến từ mobile. Kiểm tra banner trên màn hình nhỏ trước.

**2. Text Tối Thiểu**
Rule of thumb: <30% diện tích banner là text. Người dùng nhìn lướt, không đọc.

**3. Nhất Quán Với Brand**
Dùng cùng màu sắc, font và tone cho tất cả banners để tăng brand recognition.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Campaign Launch Pack
**Tình huống**: Cần toàn bộ banner assets cho product launch.

**Deliverables**:
- 5 kích thước Facebook/Instagram
- 4 kích thước Google Display
- 1 hero banner website
- 3 email header variants

### Trường Hợp 2: Seasonal Promotion
**Tình huống**: Banner khuyến mãi cho dịp lễ tết.

**Quy trình**:
1. Xác định thông điệp chính và offer
2. Tạo base design với seasonal elements
3. Adapt cho từng nền tảng
4. Tạo 2-3 variants để A/B test

## Xử Lý Sự Cố

**Vấn đề**: AI tạo ra ảnh không đúng kích thước
**Giải pháp**: Đa số AI tools tạo ra ảnh vuông. Resize và crop trong Figma/Canva, hoặc dùng outpainting để mở rộng canvas.

**Vấn đề**: Màu sắc không khớp brand
**Giải pháp**: Dùng Figma để layer brand overlay lên AI-generated image và điều chỉnh màu sắc.

## Skill Liên Quan

- [Logo Design](/vi/docs/marketing/skills/logo-design) - Thiết kế logo và brand mark
- [Design System](/vi/docs/marketing/skills/design-system) - Hệ thống thiết kế nhất quán
- [AI Artist](/vi/docs/marketing/skills/ai-artist) - Tạo ảnh nghệ thuật với AI

## Lệnh Liên Quan

- `/ckm:banner-design` - Bắt đầu tạo banner
- `/ckm:design` - Tác vụ thiết kế tổng quát
- `/ckm:ai-artist` - Tạo ảnh với AI
