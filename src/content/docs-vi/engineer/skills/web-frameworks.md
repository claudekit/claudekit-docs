---
title: "ck:web-frameworks"
description: Xây dựng ứng dụng web full-stack hiện đại với Next.js, Turborepo và RemixIcon
section: engineer
kit: engineer
category: skills/frontend
order: 50
published: true
lang: vi
---

# Web Frameworks

Xây dựng web apps full-stack với Next.js, Turborepo monorepos và RemixIcon.

## Khi Nào Sử Dụng

- Xây dựng React apps với SSR/SSG/RSC
- Thiết lập monorepos với shared packages
- Tối ưu hiệu suất build với caching
- Tạo nền tảng đa app với shared UI

## Bắt Đầu Nhanh

```bash
# Single app
npx create-next-app@latest my-app && cd my-app
npm install remixicon

# Monorepo
npx create-turbo@latest my-monorepo
```

## Các Trường Hợp Sử Dụng Phổ Biến

### SaaS Application Mới
**Ai dùng**: Startup founder xây dựng MVP
```
"Create a Next.js app for a project management SaaS with App Router,
TypeScript, Tailwind, and RemixIcon. Include auth pages, dashboard layout,
and API routes for CRUD operations."
```

### Thiết Lập Monorepo
**Ai dùng**: Tech lead mở rộng từ single app sang platform
```
"Convert my Next.js app to a Turborepo monorepo. I need separate apps for
customer portal (web), admin dashboard (admin), and docs site. Share UI
components and TypeScript types across all apps."
```

### E-commerce Storefront
**Ai dùng**: Agency developer xây dựng cho client
```
"Build a Next.js e-commerce storefront with ISR for product pages, static
generation for categories, and server components for the cart. Use RemixIcon
for UI icons throughout."
```

### Design System Với Docs
**Ai dùng**: Design engineer tại công ty đang phát triển
```
"Set up a Turborepo with a shared component library using RemixIcon and a
Storybook docs site. Components should be publishable to npm and consumable
by our three Next.js apps."
```

### Tối Ưu Hiệu Suất
**Ai dùng**: Developer cải thiện Next.js app hiện có
```
"Optimize my Next.js app's build performance. Add proper caching strategies,
implement ISR for dynamic content, and configure Turborepo remote caching
for our CI pipeline."
```

## Sự Khác Biệt Chính

| Nhu Cầu | Giải Pháp |
|------|----------|
| Single app | Next.js + RemixIcon |
| Nhiều apps chia sẻ code | Thêm Turborepo |
| SSR với dữ liệu real-time | Server Components + `no-store` |
| Trang marketing tĩnh | SSG với `generateStaticParams` |
| Nội dung cập nhật định kỳ | ISR với `revalidate` |

## Tham Khảo Nhanh

| Công Cụ | Lệnh Chính |
|------|--------------|
| Next.js | `npm run dev`, `npm run build`, `npm run start` |
| Turborepo | `turbo run build`, `turbo run dev --filter=web` |
| RemixIcon | `<RiHomeLine size={24} />` hoặc `<i class="ri-home-line">` |

**Turborepo Pipeline (turbo.json):**
```json
{
  "pipeline": {
    "build": { "dependsOn": ["^build"], "outputs": [".next/**", "dist/**"] },
    "dev": { "cache": false, "persistent": true }
  }
}
```

## Mẹo Pro

- Mặc định dùng Server Components, chỉ thêm `"use client"` khi cần thiết
- Dùng `^build` trong Turborepo để sắp xếp dependency topo
- RemixIcon: suffix `-line` cho UI tối giản, `-fill` để nhấn mạnh
- Bật Turborepo remote caching để tăng tốc CI của nhóm
- **Không kích hoạt?** Nói: "Use web-frameworks skill to..."

## Skill Liên Quan

- [Frontend Development](/vi/docs/engineer/skills/frontend-development) - Các pattern React và state management
- [UI Styling](/vi/docs/engineer/skills/ui-styling) - Chiến lược Tailwind và CSS
- [DevOps](/vi/docs/engineer/skills/devops) - Deployment và CI/CD

---

## Điểm Mấu Chốt

Next.js + RemixIcon cho single apps, thêm Turborepo khi chia sẻ code qua nhiều ứng dụng.
