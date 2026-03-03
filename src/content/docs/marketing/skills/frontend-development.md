---
title: "ckm:frontend-development"
description: "React/TypeScript frontend with Suspense, lazy loading, modern patterns, and performance best practices for marketing tools."
section: marketing
category: skills
order: 80
---

# Frontend Development

> Build fast, maintainable React/TypeScript frontends with modern patterns — Suspense, lazy loading, and optimized rendering.

## What This Skill Does

**The Challenge**: Marketing frontends need to be fast (Core Web Vitals affect SEO), maintainable (frequent content updates), and conversion-optimized. Ad hoc React code accumulates technical debt that slows down every future campaign update.

**The Solution**: Frontend Development skill provides React 18+ patterns including Suspense boundaries, lazy loading, custom hooks, state management patterns, and performance optimization techniques. Tailored for marketing tool stacks: Next.js, Astro, Vite.

## Activation

**Implicit**: Activates when user requests React components, frontend logic, hooks, state management, or TypeScript interfaces.

**Explicit**: Activate via prompt:
```
Activate frontend-development skill to build [component/feature] with [tech stack]
```

## Capabilities

### 1. Component Architecture
Organized, reusable component structure.

**Structure pattern**:
```
src/
├── components/
│   ├── ui/          # Base: Button, Input, Modal (Shadcn/Radix)
│   ├── marketing/   # Marketing: HeroSection, PricingCard
│   └── layout/      # Layout: Header, Footer, Sidebar
├── hooks/           # Custom React hooks
├── lib/             # Utilities, API clients
└── types/           # TypeScript type definitions
```

### 2. React 18+ Patterns
Modern React with Suspense and concurrent features.

**Suspense + lazy loading**:
```tsx
import { lazy, Suspense } from "react";

const HeavyChart = lazy(() => import("./HeavyChart"));

export function Dashboard() {
  return (
    <Suspense fallback={<ChartSkeleton />}>
      <HeavyChart data={metrics} />
    </Suspense>
  );
}
```

**Server components (Next.js App Router)**:
```tsx
// page.tsx — server component, no "use client"
export default async function CampaignPage({ params }) {
  const data = await fetchCampaignData(params.id); // Direct async/await
  return <CampaignView data={data} />;
}
```

### 3. Custom Hooks
Reusable stateful logic for marketing tools.

**Common marketing hooks**:
```tsx
// Track UTM parameters
function useUtmParams() {
  const [utms, setUtms] = useState({});
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtms({ source: params.get("utm_source"), campaign: params.get("utm_campaign") });
  }, []);
  return utms;
}
```

### 4. TypeScript Integration
Strict typing for reliability.

**Marketing data types**:
```typescript
interface Lead {
  id: string;
  email: string;
  source: "organic" | "paid" | "referral" | "direct";
  campaign?: string;
  status: "new" | "qualified" | "converted";
  createdAt: Date;
}
```

### 5. Performance Optimization
Core Web Vitals and bundle size management.

**Key optimizations**:
- Dynamic imports for heavy components
- Image optimization with `next/image` or `<Image>` tag
- `useMemo` / `useCallback` for expensive computations
- Virtual scrolling for long lists (`@tanstack/react-virtual`)

## Prerequisites

- Node.js 20+
- React 18+
- TypeScript 5+
- Vite or Next.js 15

## Best Practices

**1. Co-locate related code**
Keep component, its types, and its tests in the same folder.

**2. Use composition over prop drilling**
Pass components as props or use Context for deep sharing. Avoid prop chains beyond 2 levels.

**3. Measure before optimizing**
Use React DevTools Profiler. Premature `memo` adds complexity without benefit.

## Common Use Cases

### Use Case 1: Marketing Dashboard with Real-Time Metrics
**Scenario**: Dashboard polling API for campaign metrics every 30 seconds.

**Workflow**:
1. Create `useMetrics(campaignId, interval)` custom hook
2. Implement SWR or React Query for background refetching
3. Wrap chart components in Suspense with skeleton fallbacks
4. Add error boundary for API failures
5. Optimize chart renders with `memo`

### Use Case 2: Multi-Step Lead Capture Form
**Scenario**: 3-step onboarding form with progress persistence.

**Workflow**:
1. Define `FormState` TypeScript interface for all steps
2. Use `useReducer` for form state management
3. Persist to `localStorage` (recovery on page refresh)
4. Validate each step before advancing
5. Show progress indicator between steps

## Troubleshooting

**Issue**: Component re-renders too frequently
**Solution**: Wrap in `memo`. Check if parent passes new object/array reference on every render. Use `useMemo` for derived data.

**Issue**: Bundle size too large (>1MB)
**Solution**: Run `npx vite-bundle-visualizer`. Identify heavy imports. Use dynamic `import()` for non-critical paths.

## Related Skills

- [Frontend Design](/docs/marketing/skills/frontend-design) - UI implementation from designs
- [Backend Development](/docs/marketing/skills/backend-development) - APIs for frontend to consume
- [Design System](/docs/marketing/skills/design-system) - Tokens and components
- [Debugging](/docs/marketing/skills/debugging) - Frontend debugging

## Related Commands

- `/ckm:plan` - Plan frontend architecture
- `/ckm:brainstorm` - Evaluate framework options
