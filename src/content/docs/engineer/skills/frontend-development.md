---
title: Frontend Development
description: Modern React and TypeScript development patterns with Suspense, lazy loading, TanStack Query, and MUI v7 for building performant applications
section: engineer
kit: engineer
category: skills
order: 17
---

Building React applications the modern way means embracing Suspense, lazy loading, and proper data fetching patterns. This skill shows you how.

## What This Skill Does

Frontend Development provides comprehensive guidelines for building modern React applications with TypeScript. It emphasizes Suspense-based data fetching with TanStack Query, lazy loading for performance, proper file organization using a features directory, MUI v7 for styling, and TanStack Router for navigation.

This isn't just a collection of code snippets. It's a complete approach to structuring React applications that scale, perform well, and maintain consistency across your codebase. You'll learn patterns that prevent common pitfalls like layout shift from loading states, memory leaks from untracked effects, and prop drilling from poor component organization.

The skill covers everything from creating a single component to organizing multi-feature applications, with specific guidance on data fetching, styling, routing, error handling, and performance optimization.

## Prerequisites

You should have:

- Working knowledge of React and TypeScript
- Familiarity with npm or yarn package managers
- Basic understanding of async/await patterns
- A React project set up (or willingness to create one)

The skill assumes you're working with:

- React 18.3+
- TypeScript 5.7+
- TanStack Query v5 (for data fetching)
- TanStack Router (for routing)
- MUI v7 (Material-UI for components and styling)

## Quick Start Checklists

### Creating a New Component

When you create a component, follow this checklist:

- Use `React.FC<Props>` pattern with TypeScript
- Lazy load if it's a heavy component (DataGrid, charts, editors)
- Wrap in `<SuspenseLoader>` for loading states
- Use `useSuspenseQuery` for data fetching
- Import using aliases: `@/`, `~types`, `~components`, `~features`
- Styles: inline if under 100 lines, separate `.styles.ts` file if over 100 lines
- Use `useCallback` for event handlers passed to children
- Default export at bottom
- Never use early returns for loading states
- Use `useMuiSnackbar` for user notifications

### Creating a New Feature

When building a feature, set up this structure:

```
src/features/my-feature/
  api/
    myFeatureApi.ts       # API service layer
  components/
    MyFeature.tsx         # Main component
    SubComponent.tsx      # Related components
  hooks/
    useMyFeature.ts       # Custom hooks
  helpers/
    myFeatureHelpers.ts   # Utility functions
  types/
    index.ts              # TypeScript types
  index.ts                # Public exports
```

Then create a route in `src/routes/my-feature/index.tsx` with lazy loading.

## Core Patterns

### Component Structure

Modern React components follow a consistent pattern:

```typescript
import React, { useState, useCallback } from 'react';
import { Box, Paper } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';
import { featureApi } from '../api/featureApi';
import type { FeatureData } from '~types/feature';

interface MyComponentProps {
  id: number;
  onAction?: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({ id, onAction }) => {
  const [state, setState] = useState<string>('');

  const { data } = useSuspenseQuery({
    queryKey: ['feature', id],
    queryFn: () => featureApi.getFeature(id),
  });

  const handleAction = useCallback(() => {
    setState('updated');
    onAction?.();
  }, [onAction]);

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

**Key points**:

- Props interface with clear types
- `useSuspenseQuery` instead of `isLoading` checks
- `useCallback` for handlers passed to children
- Named const export + default export
- MUI components with `sx` prop for styling

### Data Fetching with useSuspenseQuery

The primary pattern for data fetching is `useSuspenseQuery`:

```typescript
import { useSuspenseQuery } from '@tanstack/react-query';
import { postsApi } from '~features/posts/api/postsApi';

// Inside component
const { data } = useSuspenseQuery({
  queryKey: ['posts', { status: 'published' }],
  queryFn: () => postsApi.getPosts({ status: 'published' }),
});

// data is guaranteed to be defined (no null checks needed)
```

This replaces the old pattern of checking `isLoading` and showing spinners. Instead, wrap components in `<SuspenseLoader>`:

```typescript
import { SuspenseLoader } from '~components/SuspenseLoader';

// In parent component
<SuspenseLoader>
  <MyComponent id={5} />
</SuspenseLoader>
```

### File Organization

Organize code by feature, not by type:

**Good** (features directory):
```
src/features/
  posts/
    api/postsApi.ts
    components/PostList.tsx
    hooks/usePosts.ts
    types/index.ts
  comments/
    api/commentsApi.ts
    components/CommentList.tsx
```

**Bad** (organized by type):
```
src/
  api/
    postsApi.ts
    commentsApi.ts
  components/
    PostList.tsx
    CommentList.tsx
```

The `components/` directory at the root is for truly reusable components like `SuspenseLoader` and `CustomAppBar`.

### Import Aliases

Use import aliases for cleaner imports:

```typescript
// Instead of: import { apiClient } from '../../../lib/apiClient'
import { apiClient } from '@/lib/apiClient';

// Instead of: import type { User } from '../../../types/user'
import type { User } from '~types/user';

// Instead of: import { SuspenseLoader } from '../../components/SuspenseLoader'
import { SuspenseLoader } from '~components/SuspenseLoader';

// Instead of: import { authApi } from '../features/auth/api/authApi'
import { authApi } from '~features/auth';
```

Aliases are defined in `vite.config.ts`:

- `@/` resolves to `src/`
- `~types` resolves to `src/types`
- `~components` resolves to `src/components`
- `~features` resolves to `src/features`

### Styling with MUI v7

Use the `sx` prop for styling MUI components:

```typescript
import type { SxProps, Theme } from '@mui/material';

// Inline styles (under 100 lines)
const styles: Record<string, SxProps<Theme>> = {
  container: {
    p: 2,
    bgcolor: 'background.paper',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    mb: 3,
  },
};

// In component
<Box sx={styles.container}>
  <Box sx={styles.header}>
    {/* Content */}
  </Box>
</Box>
```

For over 100 lines of styles, create a separate `.styles.ts` file.

**MUI v7 Grid Syntax** (important change):

```typescript
// ✅ Correct (v7)
<Grid size={{ xs: 12, md: 6 }}>
  <Paper>Content</Paper>
</Grid>

// ❌ Wrong (old syntax)
<Grid xs={12} md={6}>
  <Paper>Content</Paper>
</Grid>
```

### Routing with TanStack Router

Create folder-based routes with lazy loading:

```typescript
// src/routes/posts/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

const PostsPage = lazy(() => import('@/features/posts/components/PostsPage'));

export const Route = createFileRoute('/posts/')({
  component: PostsPage,
  loader: () => ({ crumb: 'Posts' }),
});
```

Directory structure maps to URLs:

- `routes/posts/index.tsx` → `/posts`
- `routes/posts/create/index.tsx` → `/posts/create`
- `routes/posts/$postId/index.tsx` → `/posts/:postId`

### Loading and Error States

**Critical Rule**: Never use early returns for loading states.

```typescript
// ❌ BAD - Causes layout shift
if (isLoading) {
  return <LoadingSpinner />;
}

// ✅ GOOD - Consistent layout
<SuspenseLoader>
  <Content />
</SuspenseLoader>
```

For user feedback, use `useMuiSnackbar`:

```typescript
import { useMuiSnackbar } from '@/hooks/useMuiSnackbar';

const { showSnackbar } = useMuiSnackbar();

// Success message
showSnackbar('Post created successfully', 'success');

// Error message
showSnackbar('Failed to save changes', 'error');
```

Never use `react-toastify` or early return loading states.

## Performance Optimization

### Lazy Loading

Lazy load heavy components:

```typescript
import React from 'react';

// Heavy components (DataGrid, charts, editors)
const DataGrid = React.lazy(() => import('@mui/x-data-grid').then(m => ({ default: m.DataGrid })));
const RichTextEditor = React.lazy(() => import('~/components/RichTextEditor'));

// In component
<SuspenseLoader>
  <DataGrid rows={data} columns={columns} />
</SuspenseLoader>
```

### Memoization

Use `useMemo` for expensive computations:

```typescript
import { useMemo } from 'react';

const filteredPosts = useMemo(() => {
  return posts
    .filter(p => p.status === 'published')
    .sort((a, b) => b.createdAt - a.createdAt);
}, [posts]);
```

Use `useCallback` for event handlers passed to children:

```typescript
import { useCallback } from 'react';

const handleClick = useCallback(() => {
  console.log('Button clicked');
}, []);

<ChildComponent onClick={handleClick} />
```

Use `React.memo` for expensive components:

```typescript
import React from 'react';

const ExpensiveComponent = React.memo(({ data }) => {
  // Complex rendering logic
});
```

## Real-World Examples

### Create a Posts List Page

Full workflow from scratch:

**Step 1: Create feature structure**

```bash
mkdir -p src/features/posts/{api,components,hooks,types}
```

**Step 2: Define TypeScript types**

```typescript
// src/features/posts/types/index.ts
export interface Post {
  id: number;
  title: string;
  content: string;
  status: 'draft' | 'published';
  createdAt: Date;
}
```

**Step 3: Create API service**

```typescript
// src/features/posts/api/postsApi.ts
import { apiClient } from '@/lib/apiClient';
import type { Post } from '../types';

export const postsApi = {
  getPosts: async (): Promise<Post[]> => {
    const { data } = await apiClient.get('/posts');
    return data;
  },

  getPost: async (id: number): Promise<Post> => {
    const { data } = await apiClient.get(`/posts/${id}`);
    return data;
  },
};
```

**Step 4: Create component with useSuspenseQuery**

```typescript
// src/features/posts/components/PostsList.tsx
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';
import { postsApi } from '../api/postsApi';

export const PostsList: React.FC = () => {
  const { data: posts } = useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: postsApi.getPosts,
  });

  return (
    <Box sx={{ p: 2 }}>
      {posts.map(post => (
        <Paper key={post.id} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body2">{post.content}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default PostsList;
```

**Step 5: Create route with lazy loading**

```typescript
// src/routes/posts/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

const PostsList = lazy(() => import('@/features/posts/components/PostsList'));

export const Route = createFileRoute('/posts/')({
  component: PostsList,
  loader: () => ({ crumb: 'Posts' }),
});
```

## Best Practices Summary

**Always Use Suspense**: Wrap lazy components and components using `useSuspenseQuery` in `<SuspenseLoader>`.

**Lazy Load Heavy Components**: DataGrid, charts, rich text editors, and any component over 50KB should be lazy loaded.

**Organize by Feature**: Group related code in `features/` directory with subdirectories for api, components, hooks, helpers, and types.

**Use Import Aliases**: Cleaner imports with `@/`, `~types`, `~components`, `~features`.

**Inline vs Separate Styles**: Under 100 lines inline, over 100 lines in separate `.styles.ts` file.

**No Early Returns**: Prevents Cumulative Layout Shift. Use Suspense boundaries instead.

**TypeScript Strict Mode**: Explicit return types, no `any` type, type imports with `import type`.

## Reference Documentation

The skill includes detailed reference files in the Engineer Kit at `../claudekit-engineer/.claude/skills/frontend-development/resources/`:

- `component-patterns.md` - Component structure, props, exports
- `data-fetching.md` - TanStack Query patterns, API service layer
- `file-organization.md` - Features directory, import aliases
- `styling-guide.md` - MUI v7, sx prop, inline vs separate styles
- `routing-guide.md` - TanStack Router, folder-based routes
- `loading-and-error-states.md` - Suspense, error handling, user feedback
- `performance.md` - Lazy loading, memoization, optimization
- `typescript-standards.md` - Type safety, interfaces, generics
- `common-patterns.md` - Forms, auth, DataGrid, dialogs
- `complete-examples.md` - Full working examples

## Related Skills and Commands

Combine Frontend Development with:

- [Frontend Design](/docs/engineer/skills/frontend-design) - Create distinctive UI designs before implementing them
- [AI Multimodal](/docs/engineer/skills/ai-multimodal) - Generate assets, extract design from screenshots
- [Chrome DevTools](/docs/engineer/skills/chrome-devtools) - Test your application, take screenshots, debug issues

## Core Principles

The skill is built on eight core principles:

1. Lazy load everything heavy
2. Use Suspense for loading states
3. Use `useSuspenseQuery` for data fetching
4. Organize features with dedicated directories
5. Inline styles under 100 lines, separate file over 100 lines
6. Use import aliases for clean imports
7. No early returns (prevents layout shift)
8. Use `useMuiSnackbar` for all user notifications

Follow these principles and your React applications will be performant, maintainable, and consistent.
