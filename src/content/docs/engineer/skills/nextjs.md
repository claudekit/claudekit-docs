---
title: Next.js Skill
description: Documentation for Next.js Skill
section: engineer
kit: engineer
category: skills/frontend
order: 2
published: true
---

# Next.js Skill

React framework with SSR, SSG, Server Components (RSC), and App Router for building production-grade web applications.

## When to Use

- Building full-stack React apps with server-side rendering
- SEO-critical sites needing pre-rendered or dynamic content
- Applications requiring both static pages and dynamic data
- Projects needing API routes without separate backend

## Quick Start

```bash
# Create new project
npx create-next-app@latest my-app --typescript --tailwind --app

cd my-app && npm run dev
```

**Basic page structure:**
```typescript
// app/page.tsx (Server Component by default)
export default async function Page() {
  const data = await fetch('https://api.example.com/data');
  return <h1>Welcome to Next.js</h1>;
}

// app/components/Counter.tsx (Client Component)
'use client';
import { useState } from 'react';
export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

## Common Use Cases

**Frontend developer building e-commerce site:**
"Create Next.js product listing with SSG, dynamic [slug] routes, metadata for SEO, and Image optimization"

**Full-stack dev adding authentication:**
"Implement Next.js middleware for auth protection, server actions for login/logout, and cookie-based sessions"

**Startup founder launching SaaS:**
"Build Next.js dashboard with Server Components for data, Client Components for charts, and API routes for webhooks"

**Marketing team needing blog:**
"Set up Next.js blog with MDX support, generateStaticParams for posts, and automatic sitemap generation"

**Enterprise dev optimizing performance:**
"Add Next.js PPR (Partial Prerendering), streaming with Suspense, and revalidation strategies for high-traffic pages"

## Key Differences

| Feature | Server Component | Client Component | API Route |
|---------|-----------------|------------------|-----------|
| Default | Yes (no directive) | `'use client'` directive | `/app/api/*/route.ts` |
| Runs on | Server only | Server + Client | Server only |
| Can use | Async/await, DB access | Hooks, browser APIs | NextRequest/Response |
| Bundle | Not sent to client | Sent to client | Not sent to client |
| Best for | Data fetching, SEO | Interactivity, state | Backend logic, webhooks |

## Quick Reference

**File-based routing:**
```
app/
├── page.tsx              → /
├── about/page.tsx        → /about
├── blog/[slug]/page.tsx  → /blog/:slug
├── layout.tsx            → Shared layout
├── loading.tsx           → Loading UI
├── error.tsx             → Error boundary
└── not-found.tsx         → 404 page
```

**Data fetching:**
```typescript
// Static (SSG) - build time
const data = await fetch('https://api.example.com/data');

// Revalidate (ISR) - every 60s
const data = await fetch('url', { next: { revalidate: 60 } });

// Dynamic (SSR) - per request
const data = await fetch('url', { cache: 'no-store' });

// Generate static params
export async function generateStaticParams() {
  return [{ slug: 'post-1' }, { slug: 'post-2' }];
}
```

**Metadata:**
```typescript
export const metadata = {
  title: 'Page Title',
  description: 'SEO description',
  openGraph: { images: ['/og-image.png'] },
};
```

**API Routes:**
```typescript
// app/api/posts/route.ts
export async function GET(request: NextRequest) {
  return NextResponse.json({ posts: [] });
}
```

**Environment Variables:**
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com  # Client + Server
DATABASE_URL=postgresql://...                # Server only
```

## Pro Tips

**Not activating?** Say: "Use nextjs skill to build this with App Router and Server Components"

- Default to Server Components, add `'use client'` only when you need hooks/interactivity
- Use `next/image` for automatic optimization (WebP, lazy loading, blur placeholders)
- Leverage `generateMetadata` for dynamic SEO instead of React Helmet
- Implement `loading.tsx` and `error.tsx` for better UX (no extra code needed)
- Use Server Actions (`'use server'`) for form mutations without API routes
- Enable Turbopack in dev with `next dev --turbo` for faster reloads
- Check https://nextjs.org/docs/llms.txt for AI-optimized reference docs

## Related Skills

- [Frontend Design](/docs/engineer/skills/frontend/frontend-design) - UI/UX implementation
- [Web Frameworks](/docs/engineer/skills/frontend/web-frameworks) - Full-stack patterns with Turborepo
- [Backend Development](/docs/engineer/skills/backend/backend-development) - API integration patterns

## Key Takeaway

Next.js eliminates the client vs. server tradeoff by making Server Components the default, letting you fetch data directly in your components without APIs, while still supporting client-side interactivity when needed. ClaudeKit agents leverage this to build full-stack apps faster.
