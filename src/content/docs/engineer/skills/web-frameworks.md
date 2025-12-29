---
title: Web Frameworks Skill
description: Build modern full-stack web applications with Next.js, Turborepo, and RemixIcon
section: engineer
kit: engineer
category: skills/frontend
order: 5
published: true
---

# Web Frameworks

Build full-stack web apps with Next.js, Turborepo monorepos, and RemixIcon.

## When to Use

- Building React apps with SSR/SSG/RSC
- Setting up monorepos with shared packages
- Optimizing build performance with caching
- Creating multi-app platforms with shared UI

## Quick Start

```bash
# Single app
npx create-next-app@latest my-app && cd my-app
npm install remixicon

# Monorepo
npx create-turbo@latest my-monorepo
```

## Common Use Cases

### New SaaS Application
**Who**: Startup founder building MVP
```
"Create a Next.js app for a project management SaaS with App Router,
TypeScript, Tailwind, and RemixIcon. Include auth pages, dashboard layout,
and API routes for CRUD operations."
```

### Monorepo Setup
**Who**: Tech lead scaling from single app to platform
```
"Convert my Next.js app to a Turborepo monorepo. I need separate apps for
customer portal (web), admin dashboard (admin), and docs site. Share UI
components and TypeScript types across all apps."
```

### E-commerce Storefront
**Who**: Agency developer building client site
```
"Build a Next.js e-commerce storefront with ISR for product pages, static
generation for categories, and server components for the cart. Use RemixIcon
for UI icons throughout."
```

### Design System with Docs
**Who**: Design engineer at growing company
```
"Set up a Turborepo with a shared component library using RemixIcon and a
Storybook docs site. Components should be publishable to npm and consumable
by our three Next.js apps."
```

### Performance Optimization
**Who**: Developer improving existing Next.js app
```
"Optimize my Next.js app's build performance. Add proper caching strategies,
implement ISR for dynamic content, and configure Turborepo remote caching
for our CI pipeline."
```

## Key Differences

| Need | Solution |
|------|----------|
| Single app | Next.js + RemixIcon |
| Multiple apps sharing code | Add Turborepo |
| SSR with real-time data | Server Components + `no-store` |
| Static marketing pages | SSG with `generateStaticParams` |
| Periodically updated content | ISR with `revalidate` |

## Quick Reference

| Tool | Key Commands |
|------|--------------|
| Next.js | `npm run dev`, `npm run build`, `npm run start` |
| Turborepo | `turbo run build`, `turbo run dev --filter=web` |
| RemixIcon | `<RiHomeLine size={24} />` or `<i class="ri-home-line">` |

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

- Default to Server Components, add `"use client"` only when needed
- Use `^build` in Turborepo for topological dependency ordering
- RemixIcon: `-line` suffix for minimal UI, `-fill` for emphasis
- Enable Turborepo remote caching for team CI speedup
- **Not activating?** Say: "Use web-frameworks skill to..."

## Related Skills

- [Frontend Development](/docs/skills/frontend/frontend-development) - React patterns and state management
- [UI Styling](/docs/skills/frontend/ui-styling) - Tailwind and CSS strategies
- [DevOps](/docs/skills/backend/devops) - Deployment and CI/CD

---

## Key Takeaway

 Next.js + RemixIcon for single apps, add Turborepo when sharing code across multiple applications.
