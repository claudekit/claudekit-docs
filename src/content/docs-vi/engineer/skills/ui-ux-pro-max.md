---
title: "ck:ui-ux-pro-max"
description: Trí tuệ thiết kế UI/UX với cơ sở dữ liệu 50 styles, 21 palettes, 50 font pairings, 20 charts trên 8 stacks có thể tìm kiếm
section: engineer
kit: engineer
category: skills/frontend
order: 50
published: true
lang: vi
---

# UI/UX Pro Max Skill

Truy cập ngay 50 UI styles, 21 bảng màu, 50 font pairings và 20 loại biểu đồ—tất cả được điều chỉnh theo loại sản phẩm và tech stack của bạn.

## Chỉ Cần Hỏi Claude...

```
"Design a SaaS dashboard with dark mode"
"Build a landing page for my beauty spa"
"The navbar hover effect feels janky, fix it"
"Create a fintech dashboard with trend charts"
"Review this modal for accessibility"
```

Claude tự động kích hoạt skill này khi bạn làm việc trên các task UI/UX.

## Bạn Sẽ Nhận Được

- **Style guide** với màu sắc, hiệu ứng và khuyến nghị framework
- **Font pairings** với Google Fonts imports sẵn sàng dùng
- **Bảng màu** (Primary, Secondary, CTA, Background, Text, Border)
- **Page structure** patterns cho landing pages
- **Chart recommendations** cho dashboards
- **Stack-specific code** cho framework của bạn

## Stacks Được Hỗ Trợ

`html-tailwind` (mặc định) · `react` · `nextjs` · `vue` · `svelte` · `swiftui` · `react-native` · `flutter`

## Các Trường Hợp Sử Dụng Phổ Biến

### Landing Page Mới
**Ai dùng**: Startup founder ra mắt sản phẩm
```
"Build a landing page for my AI writing tool targeting content creators.
Use glassmorphism style, include hero, features, pricing, and testimonials sections."
```

### Thiết Kế Lại Dashboard
**Ai dùng**: Developer cải thiện công cụ nội bộ
```
"Redesign our analytics dashboard with dark mode.
Show user metrics, revenue charts, and activity feed. React + Tailwind."
```

### E-commerce Product Page
**Ai dùng**: Agency xây dựng cho khách hàng
```
"Create a luxury fashion product page with image gallery,
size selector, reviews, and related products. Minimalist aesthetic."
```

### Mobile App Onboarding
**Ai dùng**: Mobile developer cải thiện UX
```
"Design 4 onboarding screens for a fitness app.
Vibrant colors, progress indicator, skip option. React Native."
```

### UI Code Review
**Ai dùng**: Tech lead đảm bảo chất lượng
```
"Review this checkout form for accessibility issues and mobile responsiveness.
Check contrast, focus states, and error handling."
```

## Mẹo Pro

- **Đề cập loại sản phẩm** (SaaS, e-commerce, healthcare, beauty, fintech) để có khuyến nghị tùy chỉnh
- **Chỉ định stack** để nhận các pattern đặc thù framework
- **Không kích hoạt?** Nói: "Use the ui-ux-pro-max skill to..."

## Quy Tắc Chất Lượng Claude Tuân Theo

### Icons & Phần Tử Hình Ảnh
- Chỉ SVG icons (Heroicons, Lucide)—không dùng emojis
- Hover states ổn định với chuyển đổi màu/độ mờ
- Logo thương hiệu đã xác minh từ Simple Icons

### Tương Tác
- `cursor-pointer` trên tất cả phần tử có thể click
- `transition-colors duration-200` để phản hồi mượt mà
- Visible focus states cho điều hướng bàn phím

### Light/Dark Mode
- Glass cards: `bg-white/80` hoặc cao hơn ở light mode
- Text contrast: `#0F172A` (slate-900) cho body
- Borders: `border-gray-200` hiển thị ở light mode

### Layout
- Floating navbar với khoảng cách `top-4 left-4 right-4`
- Responsive tại 320px, 768px, 1024px, 1440px
- Không có horizontal scroll trên mobile

## Checklist Trước Khi Giao

Claude xác nhận trước khi giao:

- [ ] Không dùng emoji icons
- [ ] Icon set nhất quán
- [ ] `cursor-pointer` trên các phần tử có thể click
- [ ] Transitions 150-300ms
- [ ] Text contrast 4.5:1+
- [ ] Cả light/dark modes đã được kiểm tra
- [ ] Responsive breakpoints
- [ ] Alt text trên hình ảnh
- [ ] Form labels có mặt

## Skill Liên Quan

- [Frontend Design Pro](/vi/docs/engineer/skills/frontend-design) - Giao diện chất lượng agency cao cấp
- [Aesthetic](/vi/docs/engineer/skills/frontend-design) - Framework thiết kế bốn giai đoạn
- [UI Styling](/vi/docs/engineer/skills/ui-styling) - Các pattern shadcn/ui + Tailwind
