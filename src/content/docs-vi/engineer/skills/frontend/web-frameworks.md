---
title: Web Frameworks Skill
description: Xây dựng ứng dụng web full-stack hiện đại với Next.js, Turborepo và RemixIcon
section: engineer
kit: engineer
category: skills/frontend
order: 5
published: true
lang: vi
---

# Web Frameworks

Xây dựng full-stack web apps với Next.js, Turborepo monorepos và RemixIcon.

## Khi Nào Sử Dụng

- Xây dựng React apps với SSR/SSG/RSC
- Thiết lập monorepos với shared packages
- Tối ưu build performance với caching
- Tạo multi-app platforms với shared UI

## Bắt Đầu Nhanh

```bash
# Single app
npx create-next-app@latest my-app && cd my-app
npm install remixicon

# Monorepo
npx create-turbo@latest my-monorepo
```

## Các Trường Hợp Sử Dụng Phổ Biến

### New SaaS Application
**Ai**: Startup founder xây dựng MVP
```
"Tạo Next.js app cho project management SaaS với App Router,
TypeScript, Tailwind và RemixIcon. Bao gồm auth pages, dashboard layout
và API routes cho CRUD operations."
```

### Monorepo Setup
**Ai**: Tech lead scaling từ single app sang platform
```
"Chuyển Next.js app của tôi sang Turborepo monorepo. Tôi cần apps riêng cho
customer portal (web), admin dashboard (admin) và docs site. Chia sẻ UI
components và TypeScript types qua tất cả apps."
```

### E-commerce Storefront
**Ai**: Agency developer xây dựng client site
```
"Xây dựng Next.js e-commerce storefront với ISR cho product pages, static
generation cho categories và server components cho cart. Sử dụng RemixIcon
cho UI icons khắp nơi."
```

### Design System with Docs
**Ai**: Design engineer tại công ty đang phát triển
```
"Thiết lập Turborepo với shared component library sử dụng RemixIcon và
Storybook docs site. Components nên publishable lên npm và consumable
bởi ba Next.js apps của chúng tôi."
```

### Performance Optimization
**Ai**: Developer cải thiện Next.js app hiện có
```
"Tối ưu build performance của Next.js app. Thêm caching strategies phù hợp,
implement ISR cho dynamic content và cấu hình Turborepo remote caching
cho CI pipeline của chúng tôi."
```

## Sự Khác Biệt Chính

| Cần | Giải Pháp |
|-----|-----------|
| Single app | Next.js + RemixIcon |
| Multiple apps sharing code | Thêm Turborepo |
| SSR với real-time data | Server Components + `no-store` |
| Static marketing pages | SSG với `generateStaticParams` |
| Periodically updated content | ISR với `revalidate` |

## Tham Khảo Nhanh

| Công Cụ | Lệnh Chính |
|---------|------------|
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

## Pro Tips

- Mặc định Server Components, chỉ thêm `"use client"` khi cần
- Sử dụng `^build` trong Turborepo cho topological dependency ordering
- RemixIcon: `-line` suffix cho minimal UI, `-fill` cho emphasis
- Bật Turborepo remote caching cho team CI speedup
- **Không kích hoạt?** Nói: "Use web-frameworks skill to..."

## Các Kỹ Năng Liên Quan

- [Frontend Development](/vi/docs/engineer/skills/frontend/frontend-development) - React patterns và state management
- [UI Styling](/vi/docs/engineer/skills/frontend/ui-styling) - Tailwind và CSS strategies
- [DevOps](/vi/docs/engineer/skills/backend/devops) - Deployment và CI/CD

---

## Điểm Chính

Next.js + RemixIcon cho single apps, thêm Turborepo khi chia sẻ code qua nhiều applications.
