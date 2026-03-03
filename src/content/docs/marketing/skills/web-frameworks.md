---
title: "ckm:web-frameworks"
description: "Build production applications with Next.js App Router, Turborepo monorepos, and full-stack TypeScript patterns."
section: marketing
kit: marketing
category: skills
order: 111
---

> Build scalable web applications using Next.js 14+ App Router, Turborepo monorepos, and modern full-stack TypeScript architecture patterns.

## What This Skill Does

**The Challenge**: Next.js App Router introduced fundamental paradigm shifts (Server Components, Server Actions, streaming) that require new mental models. Monorepo architecture with Turborepo adds build orchestration complexity on top.

**The Solution**: Web Frameworks skill covers Next.js App Router patterns, Turborepo workspace configuration, TypeScript full-stack patterns, and deployment strategies for building production-ready applications efficiently.

## Activation

**Implicit**: Activates automatically for Full-Stack Developer, Frontend Engineer, and Backend Developer agents.

**Explicit**: Activate via prompt:
```
Activate web-frameworks skill to set up a Next.js app with Turborepo monorepo
```

## Capabilities

### 1. Next.js App Router
Server Components, Server Actions, and App Router patterns.

**Project structure**:
```
app/
├── layout.tsx          # Root layout (Server Component)
├── page.tsx            # Home page
├── (auth)/
│   ├── login/page.tsx  # Auth group (no layout prefix)
│   └── layout.tsx      # Auth-specific layout
├── dashboard/
│   ├── layout.tsx      # Dashboard layout
│   └── page.tsx        # Dashboard page
└── api/
    └── webhook/route.ts # API route
```

**Server Component (default)**:
```tsx
// Runs on server, direct DB access, no client JS
async function ProductList() {
  const products = await db.query.products.findMany();
  return <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}
```

**Client Component**:
```tsx
'use client';  // Explicit directive required
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

### 2. Server Actions
Type-safe form mutations without API routes.

```tsx
'use server';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  await db.insert(posts).values({ title });
  revalidatePath('/posts');
}
```

### 3. Turborepo Monorepo
Workspace configuration for multi-package repositories.

```
apps/
├── web/          # Next.js app
└── docs/         # Documentation site
packages/
├── ui/           # Shared components
├── config/       # Shared configs (ESLint, TypeScript)
└── database/     # Shared DB schema (Drizzle/Prisma)
```

```json
// turbo.json
{
  "pipeline": {
    "build": { "dependsOn": ["^build"], "outputs": [".next/**"] },
    "dev": { "cache": false, "persistent": true }
  }
}
```

### 4. Data Fetching Patterns
Caching, revalidation, and streaming with Suspense.

```tsx
// Static with revalidation
const data = await fetch('/api/data', { next: { revalidate: 3600 } });

// Dynamic (no cache)
const data = await fetch('/api/data', { cache: 'no-store' });

// Streaming with Suspense
<Suspense fallback={<Skeleton />}>
  <SlowComponent />
</Suspense>
```

## Prerequisites

- Node.js 18+ and bun or npm
- TypeScript 5+
- Familiarity with React 18 Suspense model

## Configuration

```bash
# Create Next.js app
npx create-next-app@latest --typescript --tailwind --app

# Turborepo setup
npx create-turbo@latest
```

## Best Practices

**1. Server Components by default**
Only add `'use client'` when you need browser APIs, event listeners, or React hooks.

**2. Co-locate Server Actions with forms**
Put Server Actions in the same file as the form or in `actions.ts` in the same directory.

**3. Use route groups for layout segmentation**
`(auth)`, `(dashboard)` route groups apply different layouts without URL nesting.

## Common Use Cases

### Use Case 1: SaaS Application with Auth
**Scenario**: Full-stack SaaS with authentication, dashboard, and billing.

**Architecture**:
1. Next.js App Router + TypeScript
2. Auth: Better Auth or NextAuth.js
3. Database: Drizzle ORM + PostgreSQL
4. Payments: Stripe with Server Actions
5. UI: shadcn/ui + Tailwind

**Output**: Structured project with auth, payments, and dashboard.

### Use Case 2: Turborepo Multi-App Setup
**Scenario**: Marketing site + SaaS app sharing component library.

**Structure**:
- `apps/marketing` — Astro or Next.js
- `apps/app` — Next.js SaaS
- `packages/ui` — Shared shadcn/ui components

**Output**: Turborepo monorepo with shared UI and configs.

## Troubleshooting

**Issue**: Server Component trying to use browser API
**Solution**: Add `'use client'` directive or move browser logic to event handlers.

**Issue**: Turborepo build fails with circular dependencies
**Solution**: Check `turbo.json` pipeline. Packages can't depend on apps.

## Related Skills

- [UI Styling](/docs/marketing/skills/ui-styling) - shadcn/ui and Tailwind
- [Payment Integration](/docs/marketing/skills/payment-integration) - Stripe in Next.js
- [Shopify](/docs/marketing/skills/shopify) - Shopify app with Next.js

## Related Commands

- `/ckm:web-frameworks` - Web framework implementation
- `/ckm:cook` - End-to-end feature implementation
