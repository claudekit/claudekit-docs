---
lang: vi
title: "ckm:cip-design"
description: "Thiết kế Chương trình Nhận diện Doanh nghiệp với 50 sản phẩm"
section: marketing
kit: marketing
category: skills
order: 65
---

> Xây dựng nhận diện thương hiệu toàn diện với hệ thống visual nhất quán trên 50+ loại sản phẩm.

## Skill Này Làm Gì

**Thách thức**: Corporate Identity Program (CIP) đòi hỏi thiết kế nhất quán trên hàng chục sản phẩm và điểm chạm — từ name card đến biển hiệu, từ email signature đến bao bì sản phẩm. Thiếu hệ thống dẫn đến brand inconsistency.

**Giải pháp**: Skill cip-design cung cấp framework thiết kế CIP đầy đủ, checklist 50 sản phẩm, hướng dẫn ứng dụng logo và templates cho từng loại collateral.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi người dùng yêu cầu thiết kế bộ nhận diện doanh nghiệp hoặc corporate identity.

**Tường minh**: Kích hoạt qua prompt:
```
Activate cip-design skill to create [loại CIP item]
```

## Tính Năng

### 1. Danh Sách 50 Sản Phẩm CIP

**Văn phòng phẩm (Stationery)**:
1. Name card (business card)
2. Letterhead A4
3. Envelope (C4, DL)
4. Folder tài liệu
5. Notepad / Sticky notes
6. Bút, bút chì branded
7. Stamp / Con dấu
8. Certificate template

**Kỹ thuật số**:
9. Email signature
10. Email newsletter template
11. Presentation template (PowerPoint/Google Slides)
12. Document template (Word/Google Docs)
13. Spreadsheet template
14. Social media profile picture
15. Cover photo (LinkedIn, Facebook)
16. Social media post template
17. Story template
18. Zoom/Meet virtual background

**Marketing Collateral**:
19. Brochure (bi-fold, tri-fold)
20. Flyer A4, A5
21. Poster A3, A2, A1
22. Banner dọc (pull-up banner)
23. Banner ngang (backdrop)
24. Roll-up display
25. Catalog
26. Price list template

**Quảng cáo**:
27. Google Display ads (5 kích thước)
28. Social media ads templates
29. Billboard design
30. Transit advertising (xe buýt, taxi)

**Sự kiện**:
31. Name badge / ID card
32. Table tent
33. Lanyard
34. Event backdrop
35. Booth design
36. Stage backdrop
37. Gift bag
38. Invitation card

**Sản phẩm / Bao bì**:
39. Product packaging
40. Label / Nhãn dán
41. Sticker sheet
42. Tissue paper / Giấy gói
43. Shopping bag
44. Box design

**Đồng phục**:
45. Áo thun (T-shirt)
46. Polo shirt
47. Jacket / Áo khoác
48. Mũ / Cap
49. Tạp dề / Apron

**Khác**:
50. Signage / Biển hiệu cửa hàng

### 2. Hệ Thống Grid và Margins
Quy tắc layout nhất quán cho tất cả sản phẩm.

**Safety margins theo kích thước**:
| Kích thước | Margin ngoài | Gutter |
|------------|-------------|--------|
| A4 (210×297mm) | 20mm | 6mm |
| A5 (148×210mm) | 15mm | 5mm |
| Business card (90×55mm) | 5mm | 3mm |
| Banner (600×200cm) | 50mm | - |

### 3. Quy Tắc Ứng Dụng Logo
Hướng dẫn sử dụng logo đúng cách trên các nền khác nhau.

**Logo versions cần có**:
- Full color (trên nền trắng/sáng)
- Reversed (trên nền tối)
- Monochrome đen
- Monochrome trắng
- Favicon (16×16, 32×32, 48×48px)

**Clear space**: Tối thiểu = chiều cao chữ "X" trong logo xung quanh mọi phía.

**Minimum size**: Logo không được nhỏ hơn 25mm chiều rộng cho print, 100px cho digital.

### 4. Typography System
Hệ thống font nhất quán cho tất cả sản phẩm.

```
Heading: [Font chính] Bold / ExtraBold
Subheading: [Font chính] SemiBold
Body: [Font phụ] Regular
Caption: [Font phụ] Regular, 80% opacity
```

## Điều Kiện Tiên Quyết

- Brand guidelines đã xác định (logo, màu sắc, font)
- Figma hoặc Adobe Creative Suite
- Mockup templates cho presentation

## Cấu Hình

**Brand token chuẩn**:
```json
{
  "colors": {
    "primary": "#1A1A2E",
    "secondary": "#E94560",
    "accent": "#0F3460",
    "text": "#FFFFFF",
    "background": "#FFFFFF"
  },
  "typography": {
    "heading": "Montserrat",
    "body": "Open Sans"
  },
  "spacing": {
    "unit": 8
  }
}
```

## Thực Hành Tốt Nhất

**1. Thiết Kế Logo Trước, Mọi Thứ Khác Sau**
Logo là nền tảng của toàn bộ CIP. Finalize logo trước khi bắt đầu collateral.

**2. Test Trên Mockup Trước Khi In**
Dùng photorealistic mockups để client phê duyệt, tiết kiệm chi phí in thử.

**3. Tạo Master Template**
Một Figma file với tất cả components để team có thể tái sử dụng.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Startup Brand Launch
**Tình huống**: Startup mới cần toàn bộ brand identity để ra mắt.

**Priority order**:
1. Logo + Brand guidelines
2. Business card, letterhead (Stationery core)
3. Email signature + presentation template
4. Social media templates
5. Website visual identity

### Trường Hợp 2: Brand Refresh
**Tình huống**: Company rebrand, cần update toàn bộ 50 sản phẩm.

**Quy trình**:
1. Audit tất cả materials hiện có
2. Identify priority items (digital-first)
3. Update templates gốc
4. Rollout theo department

## Xử Lý Sự Cố

**Vấn đề**: Logo bị pixelated khi phóng to
**Giải pháp**: Luôn sử dụng file vector (SVG, AI, EPS) cho logo. PNG chỉ dùng khi bắt buộc.

**Vấn đề**: Màu sắc không nhất quán giữa print và digital
**Giải pháp**: Sử dụng Pantone colors cho print, convert chính xác sang CMYK và RGB.

## Skill Liên Quan

- [Brand](/vi/docs/marketing/skills/brand) - Chiến lược thương hiệu tổng thể
- [Logo Design](/vi/docs/marketing/skills/logo-design) - Thiết kế logo chi tiết
- [Design System](/vi/docs/marketing/skills/design-system) - Hệ thống thiết kế kỹ thuật số

## Lệnh Liên Quan

- `/ckm:cip-design` - Bắt đầu CIP project
- `/ckm:logo-design` - Thiết kế logo
- `/ckm:brand` - Phát triển brand strategy
