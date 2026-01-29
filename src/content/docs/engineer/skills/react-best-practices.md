---
title: "React Best Practices"
description: "React and Next.js performance optimization guidelines from Vercel Engineering"
section: engineer
kit: engineer
category: skills
order: 31
---

Comprehensive performance optimization guide for React and Next.js applications, maintained by Vercel. Contains 45 rules across 8 categories prioritized by impact.

## What This Skill Does

The React Best Practices skill provides battle-tested performance patterns from Vercel Engineering. These aren't theoretical guidelines—they're the actual optimizations used in production apps serving millions of users.

Think of it as having a Vercel engineer pair-programming with you, catching performance issues before they hit production: eliminating waterfalls, optimizing bundles, preventing unnecessary re-renders, and implementing server-side optimizations.

## When to Apply

Reference these guidelines when:
- Writing new React components or Next.js pages
- Implementing data fetching (client or server-side)
- Reviewing code for performance issues
- Refactoring existing React/Next.js code
- Optimizing bundle size or load times

## Rule Categories by Priority

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
- Move await into branches where actually used
- Use Promise.all() for independent operations
- Start promises early, await late in API routes
- Use Suspense to stream content

### Bundle Size
- Import directly, avoid barrel files
- Use next/dynamic for heavy components
- Load analytics/logging after hydration
- Load modules only when feature activated
- Preload on hover/focus for perceived speed

## Quick Reference

**45 rules** with prefixes:
- `async-*` - Waterfall elimination
- `bundle-*` - Bundle optimization
- `server-*` - Server performance
- `client-*` - Client data fetching
- `rerender-*` - Re-render optimization
- `rendering-*` - Rendering performance
- `js-*` - JavaScript performance
- `advanced-*` - Advanced patterns

## Usage

Activate when writing, reviewing, or refactoring React/Next.js code.

## Example Prompts

- "Review this component for performance issues"
- "Optimize this data fetching logic"
- "Why is this page loading slowly?"
- "Reduce the bundle size of this feature"
- "Fix unnecessary re-renders in this form"
- "Implement parallel data fetching for this page"

## How to Use

Each rule file contains:
- Brief explanation of why it matters
- Incorrect code example with explanation
- Correct code example with explanation
- Additional context and references

Browse individual rules at: `rules/async-parallel.md`, `rules/bundle-barrel-imports.md`, etc.

## What Makes This Different

These aren't generic React tips—they're proven patterns from teams shipping high-performance applications at scale. The rules are prioritized by actual impact on Core Web Vitals and user experience, not theoretical importance.

## Related Skills

- [Cook](/docs/engineer/skills/cook) - For implementing features with these patterns
- [Web Testing](/docs/engineer/skills/web-testing) - For performance testing and Core Web Vitals
