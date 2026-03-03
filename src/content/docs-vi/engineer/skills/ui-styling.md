---
title: "ck:ui-styling"
description: Tạo giao diện người dùng đẹp, accessible với shadcn/ui components, Tailwind CSS và thiết kế hình ảnh dựa trên canvas
section: engineer
kit: engineer
category: skills/frontend
order: 50
published: true
lang: vi
---

# UI Styling Skill

UI đẹp, accessible với shadcn/ui components (Radix UI + Tailwind), utility-first styling và hệ thống thiết kế hình ảnh dựa trên canvas.

## Chỉ Cần Hỏi Claude...

```
"Add a login form with email/password validation using shadcn form components"
```

```
"Create a responsive dashboard with cards, buttons, and dark mode support"
```

```
"Build a data table with sorting, filtering, and pagination"
```

```
"Style this component with Tailwind - mobile-first, add hover effects and smooth transitions"
```

```
"Add a command palette with keyboard shortcuts and search"
```

```
"Create a visual design poster for our product launch - minimal text, bold colors"
```

```
"Implement a settings page with tabs, switches, and form validation"
```

## Bạn Sẽ Nhận Được

- **Components Accessible**: Dialog, Dropdown, Form, Table, Navigation với hỗ trợ bàn phím đầy đủ và ARIA
- **Layouts Responsive**: Hệ thống grid mobile-first, breakpoint utilities (sm/md/lg/xl), biến thể dark mode
- **Styling Nhất Quán**: Design tokens (màu sắc, spacing, typography), utility classes, cấu hình theme tùy chỉnh
- **Thiết Kế Hình Ảnh**: Posters dựa trên canvas, tài liệu thương hiệu, compositions tinh tế với text tối thiểu

## Stacks Được Hỗ Trợ

**Component Library**: shadcn/ui (Radix UI primitives)
**Styling**: Tailwind CSS v3+ với Vite hoặc PostCSS
**Frameworks**: Next.js, Vite, Remix, Astro (React-based)
**Languages**: TypeScript (ưu tiên), JavaScript
**Visual Design**: Các composition hình ảnh dựa trên Canvas

| Loại Component | Ví Dụ |
|----------------|----------|
| Forms & Inputs | Button, Input, Select, Checkbox, Date Picker, Form validation |
| Layout & Nav | Card, Tabs, Accordion, Navigation Menu |
| Overlays | Dialog, Drawer, Popover, Toast, Command |
| Feedback | Alert, Progress, Skeleton |
| Display | Table, Data Table, Avatar, Badge |

## Các Trường Hợp Sử Dụng Phổ Biến

### Hero Landing Page
**Ai dùng**: SaaS founder xây dựng marketing site
```
"Create a hero section with gradient background, large heading, subtitle,
CTA buttons (primary + secondary), and a product screenshot card.
Mobile-responsive with Tailwind."
```

### Admin Dashboard
**Ai dùng**: Backend dev cần admin UI nhanh
```
"Build a dashboard layout: sidebar nav (collapsible on mobile), header with
user dropdown, main content area with stats cards showing metrics (users, revenue,
orders). Use shadcn components and chart library."
```

### Form Wizard
**Ai dùng**: Product manager prototype onboarding flow
```
"Create a 3-step signup wizard with progress indicator. Step 1: email/password,
Step 2: profile info (name, avatar upload), Step 3: preferences (checkboxes).
Add validation with error messages."
```

### Design Assets
**Ai dùng**: Startup founder cần event poster
```
"Generate a visual design for our launch event - bold geometric shapes,
company colors (blue/purple gradient), date/location minimal text.
Museum-quality aesthetic, canvas-based."
```

### E-commerce Product Page
**Ai dùng**: Frontend dev xây dựng shop UI
```
"Create a product page: image gallery with thumbnails, title, price,
size selector (radio buttons), quantity input, Add to Cart button,
collapsible description tabs. Dark mode support."
```

## Mẹo Pro

- **Shortcut cài đặt**: Chạy `npx shadcn@latest init` một lần mỗi dự án - cấu hình cả shadcn và Tailwind
- **Mobile-first**: Luôn bắt đầu với base mobile styles, thêm prefix `md:` và `lg:` cho màn hình lớn hơn
- **Dark mode**: Dùng prefix `dark:` cho tất cả phần tử có theme (`dark:bg-gray-900`, `dark:text-white`)
- **Tránh dynamic classes**: Dùng class names đầy đủ (`bg-blue-500` không phải `bg-${color}-500`) cho Tailwind purge
- **Component variants**: Tùy chỉnh trong `components/ui/*.tsx` để nhất quán toàn dự án
- **Không kích hoạt?** Nói: **"Use ui-styling skill to build this interface with shadcn and Tailwind"**

## Skill Liên Quan

- [Frontend Design](/vi/docs/engineer/skills/frontend-design) - Tạo design system đầy đủ
- [Frontend Design Pro](/vi/docs/engineer/skills/frontend-design) - Thiết kế hình ảnh nâng cao
- [Aesthetic](/vi/docs/engineer/skills/frontend-design) - Đánh bóng và tinh chỉnh hình ảnh
- [Canvas Design](/vi/docs/engineer/skills/frontend-design) - Compositions hình ảnh chất lượng museum
- [Frontend Development](/vi/docs/engineer/skills/frontend-development) - Triển khai React/Next.js

## Điểm Mấu Chốt

Kết hợp shadcn/ui (Radix components accessible), Tailwind CSS (utility-first styling) và canvas design cho giao diện sẵn sàng production. Copy components vào codebase, style bằng utilities, ship nhanh với TypeScript safety đầy đủ và accessibility tích hợp sẵn.
