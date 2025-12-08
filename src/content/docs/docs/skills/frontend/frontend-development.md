---
title: Frontend Development Skill
description: Modern React/TypeScript patterns with Suspense, lazy loading, MUI v7, TanStack Query/Router, and performance optimization
section: docs
category: skills/frontend
order: 8
published: true
---

# Frontend Development

Modern React patterns with Suspense-first data fetching, lazy loading, and feature-based organization. Zero layout shift, type-safe, performance-optimized.

## When to Use

- Building React components with data fetching
- Setting up TanStack Router routes
- Organizing features with proper file structure
- Implementing MUI v7 styling patterns
- Optimizing React performance (memo, lazy, Suspense)

## Quick Start

**New Component Template:**

```typescript
import React, { useCallback } from 'react';
import { Box, Paper } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';
import { featureApi } from '../api/featureApi';

interface Props {
  id: number;
}

export const MyComponent: React.FC<Props> = ({ id }) => {
  const { data } = useSuspenseQuery({
    queryKey: ['feature', id],
    queryFn: () => featureApi.getFeature(id),
  });

  const handleAction = useCallback(() => {
    // Handler logic
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 3 }}>
        {/* Content */}
      </Paper>
    </Box>
  );
};

export default MyComponent;
```

**Route Setup:**

```typescript
import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

const MyPage = lazy(() => import('@/features/my-feature/components/MyPage'));

export const Route = createFileRoute('/my-route/')({
  component: MyPage,
  loader: () => ({ crumb: 'My Route' }),
});
```

## Common Use Cases

### Dashboard with Real-time Data
**Who**: SaaS developer building analytics dashboard

"Build a dashboard page that fetches user analytics from /analytics endpoint. Use lazy loading for the chart components and proper loading states. Include a DataGrid for recent activities."

### Feature with Forms
**Who**: Full-stack developer adding CRUD feature

"Create a new 'projects' feature with list and create pages. Use React Hook Form with Zod validation. Set up proper routing and data fetching with cache invalidation on mutations."

### Performance Optimization
**Who**: Frontend engineer reducing bundle size

"The app is slow to load. Implement lazy loading for all routes, optimize heavy components with React.memo, and ensure proper code splitting. Check for unnecessary re-renders."

### Migration to Suspense Pattern
**Who**: React developer modernizing legacy code

"Refactor the Posts feature to use useSuspenseQuery instead of useQuery. Remove all early return loading states and use SuspenseLoader component. Update error handling to use useMuiSnackbar."

### Component Library Integration
**Who**: UI developer integrating design system

"Create reusable Card and Modal components using MUI v7 with proper TypeScript types. Style using sx prop with theme support. Make them accessible and responsive."

## Key Patterns

### Data Fetching (Suspense-first)

| Pattern | When to Use | Example |
|---------|-------------|---------|
| `useSuspenseQuery` | New code, primary pattern | List/detail views |
| `useQuery` | Legacy code only | Existing components |
| API service layer | All data fetching | `features/*/api/` |

### Loading States (Zero Layout Shift)

| Approach | Status | Reason |
|----------|--------|--------|
| `<SuspenseLoader>` | ✅ Use | No layout shift |
| Early return loading | ❌ Avoid | Causes CLS |
| Inline spinners | ❌ Avoid | Inconsistent UX |

### File Organization

```
features/{feature-name}/
  api/          # API service layer
  components/   # Feature components
  hooks/        # Custom hooks
  helpers/      # Utilities
  types/        # TypeScript types
  index.ts      # Public exports
```

## Quick Reference

**Import Aliases:**
```typescript
@/            → src/
~types        → src/types
~components   → src/components
~features     → src/features
```

**MUI v7 Grid (Breaking Change):**
```typescript
<Grid size={{ xs: 12, md: 6 }}>  // ✅ v7
<Grid xs={12} md={6}>             // ❌ Old
```

**Styling Rules:**
- <100 lines → Inline `const styles: Record<string, SxProps<Theme>>`
- >100 lines → Separate `.styles.ts` file

**Performance Hooks:**
- `useMemo` → Filter/sort/map operations
- `useCallback` → Event handlers passed to children
- `React.memo` → Expensive components

**Component Checklist:**
- [ ] `React.FC<Props>` with TypeScript
- [ ] Lazy load if heavy (DataGrid, charts)
- [ ] Wrap in `<SuspenseLoader>`
- [ ] Use `useSuspenseQuery` for data
- [ ] No early return loading states
- [ ] `useCallback` for child handlers
- [ ] Default export at bottom

## Pro Tips

**Not activating?** Say: "Use frontend-development skill to create this component"

**Common Issues:**
- MUI Grid not working → Update to v7 syntax: `size={{ xs: 12 }}`
- Layout shifts on load → Replace early returns with `<SuspenseLoader>`
- Slow route transitions → Lazy load page components
- Bundle too large → Check for missing `React.lazy()` imports

**Best Practices:**
- Always use `import type` for TypeScript types
- Keep features self-contained (no cross-feature imports except via index.ts)
- Use `useMuiSnackbar` for all notifications (NOT react-toastify)
- Debounce search inputs (300-500ms)
- Clean up effects to prevent memory leaks

## Related Skills

- [UI/UX Pro Max](/docs/skills/frontend/ui-ux-pro-max) - Advanced design patterns
- [Frontend Design](/docs/skills/frontend/frontend-design) - Component styling & layouts
- [Web Frameworks](/docs/skills/frontend/web-frameworks) - Next.js, Remix integration
- [Backend Development](/docs/skills/backend/backend-development) - API patterns
- [Debugging](/docs/skills/tools/debugging) - React DevTools & performance profiling

## Key Takeaway

Modern React = `useSuspenseQuery` + `<SuspenseLoader>` + lazy loading + feature-based files. Zero layout shift, type-safe, performance-first. No early returns, no react-toastify, use MUI v7 Grid syntax.
