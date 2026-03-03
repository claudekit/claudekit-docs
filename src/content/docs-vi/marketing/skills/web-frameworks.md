---
lang: vi
title: "ckm:web-frameworks"
description: "Xây dựng với Next.js App Router và Turborepo monorepo — từ project setup đến deployment pattern."
section: marketing
kit: marketing
category: skills
order: 111
---

# `ckm:web-frameworks`

> Xây dựng ứng dụng web hiện đại với Next.js App Router và quản lý monorepo Turborepo.

## Kỹ Năng Này Làm Gì

Skill `ckm:web-frameworks` cung cấp hướng dẫn chuyên sâu cho Next.js App Router (RSC, Server Actions, routing) và Turborepo monorepo (workspace management, build pipelines, shared packages). Tập trung vào patterns được khuyến nghị cho production.

## Bắt Đầu Nhanh

```
/ckm:web-frameworks
```

Hoặc chỉ định framework:

```
/ckm:web-frameworks Setup Next.js App Router với authentication, database và deployment
```

## Next.js App Router

### Cấu Trúc Thư Mục
```
app/
├── (auth)/
│   ├── login/page.tsx
│   └── signup/page.tsx
├── dashboard/
│   ├── layout.tsx      # Shared layout
│   └── page.tsx        # Server Component
├── api/
│   └── webhook/route.ts
├── layout.tsx          # Root layout
└── page.tsx            # Home
```

### Server vs Client Components
```tsx
// Server Component (mặc định) — không cần 'use client'
async function ProductList() {
  const products = await db.product.findMany(); // Direct DB access
  return <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}

// Client Component — cần 'use client'
'use client';
function SearchBar() {
  const [query, setQuery] = useState('');
  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}
```

### Server Actions
```tsx
// actions/product.ts
'use server';
export async function createProduct(formData: FormData) {
  const name = formData.get('name') as string;
  await db.product.create({ data: { name } });
  revalidatePath('/products');
}
```

## Turborepo Monorepo

```bash
npx create-turbo@latest my-monorepo
```

```
apps/
├── web/          # Next.js app
└── docs/         # Astro docs
packages/
├── ui/           # Shared components
├── database/     # Prisma schema + client
└── config/       # Shared configs (ESLint, TS)
```

## Ví Dụ Sử Dụng

**Setup project:**
```
/ckm:web-frameworks Setup Next.js App Router với Prisma, NextAuth và shadcn/ui
```

**Monorepo:**
```
/ckm:web-frameworks Tạo Turborepo với apps: web, admin, api và shared UI package
```

**Performance:**
```
/ckm:web-frameworks Tối ưu Next.js app — bundle size, image optimization, ISR strategy
```

## Liên Quan

- [ckm:ui-styling](/vi/docs/marketing/skills/ui-styling) - UI components với shadcn/ui
- [ckm:shopify](/vi/docs/marketing/skills/shopify) - Shopify app với Next.js
- [ckm:payment-integration](/vi/docs/marketing/skills/payment-integration) - Tích hợp thanh toán
