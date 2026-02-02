---
title: UI Styling Skill
description: Tạo giao diện người dùng đẹp, dễ tiếp cận với shadcn/ui components, Tailwind CSS và thiết kế hình ảnh dựa trên canvas
section: engineer
kit: engineer
category: skills/frontend
order: 6
published: true
lang: vi
---

# UI Styling Skill

UI đẹp, dễ tiếp cận với shadcn/ui components (Radix UI + Tailwind), utility-first styling và hệ thống thiết kế hình ảnh dựa trên canvas.

## Chỉ Cần Yêu Cầu Claude...

```
"Thêm login form với email/password validation sử dụng shadcn form components"
```

```
"Tạo responsive dashboard với cards, buttons và dark mode support"
```

```
"Xây dựng data table với sorting, filtering và pagination"
```

```
"Style component này với Tailwind - mobile-first, thêm hover effects và smooth transitions"
```

```
"Thêm command palette với keyboard shortcuts và search"
```

```
"Tạo thiết kế hình ảnh poster cho product launch của chúng tôi - minimal text, bold colors"
```

```
"Implement settings page với tabs, switches và form validation"
```

## Bạn Sẽ Nhận Được

- **Accessible Components**: Dialog, Dropdown, Form, Table, Navigation với hỗ trợ keyboard đầy đủ và ARIA
- **Responsive Layouts**: Hệ thống grid mobile-first, breakpoint utilities (sm/md/lg/xl), dark mode variants
- **Consistent Styling**: Design tokens (colors, spacing, typography), utility classes, custom theme configurations
- **Visual Designs**: Posters dựa trên canvas, brand materials, compositions tinh tế với minimal text

## Stacks Được Hỗ Trợ

**Component Library**: shadcn/ui (Radix UI primitives)
**Styling**: Tailwind CSS v3+ với Vite hoặc PostCSS
**Frameworks**: Next.js, Vite, Remix, Astro (dựa trên React)
**Languages**: TypeScript (ưu tiên), JavaScript
**Visual Design**: Compositions hình ảnh dựa trên canvas

| Loại Component | Ví Dụ |
|----------------|-------|
| Forms & Inputs | Button, Input, Select, Checkbox, Date Picker, Form validation |
| Layout & Nav | Card, Tabs, Accordion, Navigation Menu |
| Overlays | Dialog, Drawer, Popover, Toast, Command |
| Feedback | Alert, Progress, Skeleton |
| Display | Table, Data Table, Avatar, Badge |

## Các Trường Hợp Sử Dụng Phổ Biến

### Landing Page Hero
**Ai**: SaaS founder xây dựng marketing site
```
"Tạo hero section với gradient background, large heading, subtitle,
CTA buttons (primary + secondary) và product screenshot card.
Mobile-responsive với Tailwind."
```

### Admin Dashboard
**Ai**: Backend dev cần admin UI nhanh
```
"Xây dựng dashboard layout: sidebar nav (collapsible trên mobile), header với
user dropdown, main content area với stats cards hiển thị metrics (users, revenue,
orders). Sử dụng shadcn components và chart library."
```

### Form Wizard
**Ai**: Product manager prototyping onboarding flow
```
"Tạo signup wizard 3 bước với progress indicator. Bước 1: email/password,
Bước 2: profile info (name, avatar upload), Bước 3: preferences (checkboxes).
Thêm validation với error messages."
```

### Design Assets
**Ai**: Startup founder cần event poster
```
"Tạo thiết kế hình ảnh cho launch event của chúng tôi - hình học bold,
màu công ty (blue/purple gradient), date/location minimal text.
Thẩm mỹ chất lượng museum, dựa trên canvas."
```

### E-commerce Product Page
**Ai**: Frontend dev xây dựng shop UI
```
"Tạo product page: image gallery với thumbnails, title, price,
size selector (radio buttons), quantity input, Add to Cart button,
collapsible description tabs. Dark mode support."
```

## Pro Tips

- **Setup shortcut**: Chạy `npx shadcn@latest init` một lần mỗi dự án - cấu hình cả shadcn và Tailwind
- **Mobile-first**: Luôn bắt đầu với base mobile styles, thêm `md:` và `lg:` prefixes cho màn hình lớn hơn
- **Dark mode**: Sử dụng `dark:` prefix cho tất cả themed elements (`dark:bg-gray-900`, `dark:text-white`)
- **Tránh dynamic classes**: Sử dụng tên class đầy đủ (`bg-blue-500` không `bg-${color}-500`) cho Tailwind purge
- **Component variants**: Tùy chỉnh trong `components/ui/*.tsx` cho tính nhất quán toàn dự án
- **Không kích hoạt?** Nói: **"Use ui-styling skill to build this interface with shadcn and Tailwind"**

## Các Kỹ Năng Liên Quan

- [Frontend Design](/docs/engineer/skills/frontend-design) - Tạo design system đầy đủ
- [Frontend Design Pro](/docs/engineer/skills) - Thiết kế hình ảnh nâng cao
- [Aesthetic](/docs/engineer/skills) - Visual polish và refinement
- [Canvas Design](/vi/docs/engineer/skills/ai/canvas-design) - Compositions hình ảnh chất lượng museum
- [Frontend Development](/docs/engineer/skills/frontend-development) - React/Next.js implementation

## Điểm Chính

Kết hợp shadcn/ui (accessible Radix components), Tailwind CSS (utility-first styling) và canvas design cho giao diện production-ready. Copy components vào codebase, style với utilities, ship nhanh với full TypeScript safety và accessibility được tích hợp sẵn.
