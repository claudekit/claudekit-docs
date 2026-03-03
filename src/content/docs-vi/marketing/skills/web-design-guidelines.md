---
lang: vi
title: "ckm:web-design-guidelines"
description: "Đánh giá và cải thiện UI theo Web Interface Guidelines — usability, accessibility, visual hierarchy."
section: marketing
kit: marketing
category: skills
order: 110
---

# `ckm:web-design-guidelines`

> Đảm bảo giao diện web đạt chuẩn chất lượng cao với đánh giá có hệ thống theo Web Interface Guidelines.

## Kỹ Năng Này Làm Gì

Skill `ckm:web-design-guidelines` đánh giá UI theo bộ tiêu chuẩn Web Interface Guidelines — bao gồm usability principles (Nielsen's heuristics), WCAG accessibility standards, visual design principles và UX best practices.

## Bắt Đầu Nhanh

```
/ckm:web-design-guidelines
```

Hoặc chỉ định trang cần đánh giá:

```
/ckm:web-design-guidelines Đánh giá trang pricing của chúng tôi — conversion không tốt
```

## Khung Đánh Giá

### 1. Usability (Nielsen's 10 Heuristics)
- Visibility of system status
- Match between system and real world
- User control and freedom
- Consistency and standards
- Error prevention
- Recognition rather than recall
- Flexibility and efficiency of use
- Aesthetic and minimalist design
- Help users recognize, diagnose, recover from errors
- Help and documentation

### 2. Accessibility (WCAG 2.1 AA)
- Contrast ratio tối thiểu 4.5:1 cho text thường
- Keyboard navigation đầy đủ
- Alt text cho images
- Focus indicators rõ ràng
- Semantic HTML structure

### 3. Visual Hierarchy
- Typography scale nhất quán
- Spacing và whitespace cân bằng
- Color usage có mục đích
- CTA nổi bật và rõ ràng

### 4. Performance Impact
- Core Web Vitals (LCP, FID, CLS)
- Image optimization
- Font loading strategy

## Ví Dụ Sử Dụng

**Review landing page:**
```
/ckm:web-design-guidelines Review landing page này và cho điểm theo từng tiêu chí, ưu tiên các vấn đề cần fix
```

**Accessibility audit:**
```
/ckm:web-design-guidelines Kiểm tra accessibility của form đăng ký — keyboard nav và screen reader
```

**Conversion optimization:**
```
/ckm:web-design-guidelines Trang checkout có friction points nào làm giảm conversion?
```

## Báo Cáo Đánh Giá

```markdown
## UI Review Report

### Tổng Điểm: 72/100

### Critical Issues (phải fix ngay)
- [ ] Contrast ratio nút CTA: 2.8:1 (cần ≥4.5:1)
- [ ] Form không có error messages rõ ràng

### Improvements (nên fix)
- [ ] Khoảng cách giữa sections không nhất quán
- [ ] Mobile viewport thiếu touch target size

### Good Practices
- [x] Keyboard navigation hoạt động tốt
- [x] Loading states được xử lý đúng
```

## Liên Quan

- [ckm:ui-ux-pro-max](/vi/docs/marketing/skills/ui-ux-pro-max) - Thiết kế UI/UX nâng cao
- [ckm:ui-styling](/vi/docs/marketing/skills/ui-styling) - Implement các cải tiến
- [ckm:chrome-devtools](/vi/docs/marketing/skills/chrome-devtools) - Kiểm tra performance
