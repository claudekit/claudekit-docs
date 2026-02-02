---
title: "React Best Practices"
description: "React và Next.js performance optimization guidelines từ Vercel Engineering"
section: engineer
kit: engineer
category: skills
order: 31
lang: vi
---

Comprehensive performance optimization guide cho React và Next.js applications, được maintain bởi Vercel. Chứa 45 rules trên 8 categories được prioritized bởi impact.

## Skill Này Làm Gì

React Best Practices skill cung cấp battle-tested performance patterns từ Vercel Engineering. Đây không phải theoretical guidelines—chúng là actual optimizations được dùng trong production apps serving millions of users.

Hãy nghĩ về nó như có Vercel engineer pair-programming với bạn, catching performance issues trước khi chúng hit production: eliminating waterfalls, optimizing bundles, preventing unnecessary re-renders và implementing server-side optimizations.

## Khi Nào Apply

Reference guidelines này khi:
- Viết new React components hoặc Next.js pages
- Implementing data fetching (client hoặc server-side)
- Reviewing code cho performance issues
- Refactoring existing React/Next.js code
- Optimizing bundle size hoặc load times

## Rule Categories theo Priority

| Priority | Category | Impact | Focus |
|----------|----------|--------|-------|
| 1 | Eliminating Waterfalls | CRITICAL | Parallel fetching, Suspense boundaries |
| 2 | Bundle Size Optimization | CRITICAL | Dynamic imports, barrel files, tree-shaking |
| 3 | Server-Side Performance | HIGH | React.cache(), LRU caching, serialization |
| 4 | Client-Side Data Fetching | MEDIUM-HIGH | SWR deduplication, event listeners |
| 5 | Re-render Optimization | MEDIUM | Memo, derived state, transitions |
| 6 | Rendering Performance | MEDIUM | Content visibility, SVG optimization |
| 7 | JavaScript Performance | LOW-MEDIUM | Map lookups, caching, iteration |
| 8 | Advanced Patterns | LOW | Ref patterns, latest callbacks |

## Critical Optimizations (Top Priority)

### Eliminating Waterfalls
- Move await vào branches nơi actually used
- Dùng Promise.all() cho independent operations
- Start promises early, await late trong API routes
- Dùng Suspense để stream content

### Bundle Size
- Import directly, tránh barrel files
- Dùng next/dynamic cho heavy components
- Load analytics/logging sau hydration
- Load modules chỉ khi feature activated
- Preload on hover/focus cho perceived speed

## Quick Reference

**45 rules** với prefixes:
- `async-*` - Waterfall elimination
- `bundle-*` - Bundle optimization
- `server-*` - Server performance
- `client-*` - Client data fetching
- `rerender-*` - Re-render optimization
- `rendering-*` - Rendering performance
- `js-*` - JavaScript performance
- `advanced-*` - Advanced patterns

## Sử Dụng

Kích hoạt khi writing, reviewing hoặc refactoring React/Next.js code.

## Ví Dụ Prompts

- "Review component này cho performance issues"
- "Optimize data fetching logic này"
- "Tại sao page này loading slowly?"
- "Reduce bundle size của feature này"
- "Fix unnecessary re-renders trong form này"
- "Implement parallel data fetching cho page này"

## Cách Sử Dụng

Mỗi rule file chứa:
- Brief explanation của why nó matters
- Incorrect code example với explanation
- Correct code example với explanation
- Additional context và references

Browse individual rules tại: `rules/async-parallel.md`, `rules/bundle-barrel-imports.md`, etc.

## Điểm Khác Biệt

Đây không phải generic React tips—chúng là proven patterns từ teams shipping high-performance applications at scale. Rules được prioritized bởi actual impact trên Core Web Vitals và user experience, không phải theoretical importance.

## Skills Liên Quan

- [Cook](/docs/engineer/skills/cook) - Để implementing features với những patterns này
- [Web Testing](/docs/engineer/skills/web-testing) - Để performance testing và Core Web Vitals
