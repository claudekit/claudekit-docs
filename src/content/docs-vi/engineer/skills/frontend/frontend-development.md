---
title: Phát Triển Frontend
description: Các mẫu phát triển React và TypeScript hiện đại với Suspense, lazy loading, TanStack Query và MUI v7 để xây dựng ứng dụng hiệu năng cao
section: engineer
kit: engineer
category: skills
order: 17
lang: vi
---

Xây dựng ứng dụng React theo cách hiện đại có nghĩa là tận dụng Suspense, lazy loading và các pattern data fetching phù hợp. Skill này sẽ chỉ cho bạn cách làm.

## Skill Này Làm Gì

Frontend Development cung cấp hướng dẫn toàn diện để xây dựng ứng dụng React hiện đại với TypeScript. Nó nhấn mạnh data fetching dựa trên Suspense với TanStack Query, lazy loading để tối ưu hiệu năng, tổ chức file hợp lý bằng features directory, MUI v7 cho styling và TanStack Router cho navigation.

Đây không chỉ là tập hợp code snippets. Đây là cách tiếp cận hoàn chỉnh để cấu trúc ứng dụng React có khả năng mở rộng, hiệu năng tốt và duy trì tính nhất quán trong codebase. Bạn sẽ học các pattern giúp tránh những lỗi phổ biến như layout shift từ loading states, memory leak từ effects không được theo dõi và prop drilling từ tổ chức component kém.

Skill này bao gồm mọi thứ từ tạo một component đơn giản đến tổ chức ứng dụng đa tính năng, với hướng dẫn cụ thể về data fetching, styling, routing, xử lý lỗi và tối ưu hiệu năng.

## Yêu Cầu Trước

Bạn cần có:

- Kiến thức làm việc với React và TypeScript
- Quen thuộc với npm hoặc yarn package managers
- Hiểu biết cơ bản về async/await patterns
- Một dự án React đã setup (hoặc sẵn sàng tạo mới)

Skill này giả định bạn đang làm việc với:

- React 18.3+
- TypeScript 5.7+
- TanStack Query v5 (cho data fetching)
- TanStack Router (cho routing)
- MUI v7 (Material-UI cho components và styling)

## Checklist Bắt Đầu Nhanh

### Tạo Component Mới

Khi tạo component, làm theo checklist này:

- Sử dụng pattern `React.FC<Props>` với TypeScript
- Lazy load nếu là component nặng (DataGrid, charts, editors)
- Wrap trong `<SuspenseLoader>` cho loading states
- Dùng `useSuspenseQuery` cho data fetching
- Import sử dụng aliases: `@/`, `~types`, `~components`, `~features`
- Styles: inline nếu dưới 100 dòng, file `.styles.ts` riêng nếu trên 100 dòng
- Dùng `useCallback` cho event handlers được truyền cho children
- Default export ở cuối
- Không bao giờ dùng early return cho loading states
- Dùng `useMuiSnackbar` cho user notifications

### Tạo Feature Mới

Khi xây dựng feature, setup cấu trúc này:

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

Sau đó tạo route trong `src/routes/my-feature/index.tsx` với lazy loading.

## Các Pattern Cốt Lõi

### Cấu Trúc Component

Component React hiện đại theo một pattern nhất quán:

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

**Điểm chính**:

- Props interface với types rõ ràng
- `useSuspenseQuery` thay vì kiểm tra `isLoading`
- `useCallback` cho handlers truyền cho children
- Named const export + default export
- MUI components với `sx` prop cho styling

### Data Fetching với useSuspenseQuery

Pattern chính cho data fetching là `useSuspenseQuery`:

```typescript
import { useSuspenseQuery } from '@tanstack/react-query';
import { postsApi } from '~features/posts/api/postsApi';

// Trong component
const { data } = useSuspenseQuery({
  queryKey: ['posts', { status: 'published' }],
  queryFn: () => postsApi.getPosts({ status: 'published' }),
});

// data được đảm bảo là defined (không cần kiểm tra null)
```

Điều này thay thế pattern cũ là kiểm tra `isLoading` và hiện spinner. Thay vào đó, wrap components trong `<SuspenseLoader>`:

```typescript
import { SuspenseLoader } from '~components/SuspenseLoader';

// Trong parent component
<SuspenseLoader>
  <MyComponent id={5} />
</SuspenseLoader>
```

### Tổ Chức File

Tổ chức code theo feature, không theo type:

**Tốt** (features directory):
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

**Không tốt** (tổ chức theo type):
```
src/
  api/
    postsApi.ts
    commentsApi.ts
  components/
    PostList.tsx
    CommentList.tsx
```

Thư mục `components/` ở root chỉ dành cho các component thực sự có thể tái sử dụng như `SuspenseLoader` và `CustomAppBar`.

### Import Aliases

Sử dụng import aliases cho imports gọn gàng hơn:

```typescript
// Thay vì: import { apiClient } from '../../../lib/apiClient'
import { apiClient } from '@/lib/apiClient';

// Thay vì: import type { User } from '../../../types/user'
import type { User } from '~types/user';

// Thay vì: import { SuspenseLoader } from '../../components/SuspenseLoader'
import { SuspenseLoader } from '~components/SuspenseLoader';

// Thay vì: import { authApi } from '../features/auth/api/authApi'
import { authApi } from '~features/auth';
```

Aliases được định nghĩa trong `vite.config.ts`:

- `@/` resolve tới `src/`
- `~types` resolve tới `src/types`
- `~components` resolve tới `src/components`
- `~features` resolve tới `src/features`

### Styling với MUI v7

Sử dụng `sx` prop để style MUI components:

```typescript
import type { SxProps, Theme } from '@mui/material';

// Inline styles (dưới 100 dòng)
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

// Trong component
<Box sx={styles.container}>
  <Box sx={styles.header}>
    {/* Content */}
  </Box>
</Box>
```

Với hơn 100 dòng styles, tạo file `.styles.ts` riêng.

**Cú pháp MUI v7 Grid** (thay đổi quan trọng):

```typescript
// ✅ Đúng (v7)
<Grid size={{ xs: 12, md: 6 }}>
  <Paper>Content</Paper>
</Grid>

// ❌ Sai (cú pháp cũ)
<Grid xs={12} md={6}>
  <Paper>Content</Paper>
</Grid>
```

### Routing với TanStack Router

Tạo folder-based routes với lazy loading:

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

Cấu trúc thư mục map tới URLs:

- `routes/posts/index.tsx` → `/posts`
- `routes/posts/create/index.tsx` → `/posts/create`
- `routes/posts/$postId/index.tsx` → `/posts/:postId`

### Loading và Error States

**Quy tắc quan trọng**: Không bao giờ sử dụng early returns cho loading states.

```typescript
// ❌ TỆ - Gây layout shift
if (isLoading) {
  return <LoadingSpinner />;
}

// ✅ TỐT - Layout nhất quán
<SuspenseLoader>
  <Content />
</SuspenseLoader>
```

Để thông báo người dùng, dùng `useMuiSnackbar`:

```typescript
import { useMuiSnackbar } from '@/hooks/useMuiSnackbar';

const { showSnackbar } = useMuiSnackbar();

// Success message
showSnackbar('Post created successfully', 'success');

// Error message
showSnackbar('Failed to save changes', 'error');
```

Không bao giờ dùng `react-toastify` hoặc early return loading states.

## Tối Ưu Hiệu Năng

### Lazy Loading

Lazy load các component nặng:

```typescript
import React from 'react';

// Heavy components (DataGrid, charts, editors)
const DataGrid = React.lazy(() => import('@mui/x-data-grid').then(m => ({ default: m.DataGrid })));
const RichTextEditor = React.lazy(() => import('~/components/RichTextEditor'));

// Trong component
<SuspenseLoader>
  <DataGrid rows={data} columns={columns} />
</SuspenseLoader>
```

### Memoization

Sử dụng `useMemo` cho các phép tính phức tạp:

```typescript
import { useMemo } from 'react';

const filteredPosts = useMemo(() => {
  return posts
    .filter(p => p.status === 'published')
    .sort((a, b) => b.createdAt - a.createdAt);
}, [posts]);
```

Sử dụng `useCallback` cho event handlers được truyền cho children:

```typescript
import { useCallback } from 'react';

const handleClick = useCallback(() => {
  console.log('Button clicked');
}, []);

<ChildComponent onClick={handleClick} />
```

Sử dụng `React.memo` cho các component phức tạp:

```typescript
import React from 'react';

const ExpensiveComponent = React.memo(({ data }) => {
  // Complex rendering logic
});
```

## Ví Dụ Thực Tế

### Tạo Trang Danh Sách Posts

Workflow đầy đủ từ đầu:

**Bước 1: Tạo cấu trúc feature**

```bash
mkdir -p src/features/posts/{api,components,hooks,types}
```

**Bước 2: Định nghĩa TypeScript types**

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

**Bước 3: Tạo API service**

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

**Bước 4: Tạo component với useSuspenseQuery**

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

**Bước 5: Tạo route với lazy loading**

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

## Tóm Tắt Best Practices

**Luôn Sử Dụng Suspense**: Wrap các lazy components và components dùng `useSuspenseQuery` trong `<SuspenseLoader>`.

**Lazy Load Components Nặng**: DataGrid, charts, rich text editors và bất kỳ component nào trên 50KB nên được lazy loaded.

**Tổ Chức Theo Feature**: Nhóm code liên quan trong thư mục `features/` với các thư mục con cho api, components, hooks, helpers và types.

**Sử Dụng Import Aliases**: Imports gọn gàng hơn với `@/`, `~types`, `~components`, `~features`.

**Inline vs Styles Riêng**: Dưới 100 dòng inline, trên 100 dòng trong file `.styles.ts` riêng.

**Không Early Returns**: Ngăn chặn Cumulative Layout Shift. Sử dụng Suspense boundaries thay thế.

**TypeScript Strict Mode**: Explicit return types, không `any` type, type imports với `import type`.

## Tài Liệu Tham Khảo

Skill này bao gồm các file tham khảo chi tiết trong Engineer Kit tại `../claudekit-engineer/.claude/skills/frontend-development/resources/`:

- `component-patterns.md` - Cấu trúc component, props, exports
- `data-fetching.md` - TanStack Query patterns, API service layer
- `file-organization.md` - Features directory, import aliases
- `styling-guide.md` - MUI v7, sx prop, inline vs separate styles
- `routing-guide.md` - TanStack Router, folder-based routes
- `loading-and-error-states.md` - Suspense, error handling, user feedback
- `performance.md` - Lazy loading, memoization, optimization
- `typescript-standards.md` - Type safety, interfaces, generics
- `common-patterns.md` - Forms, auth, DataGrid, dialogs
- `complete-examples.md` - Ví dụ làm việc đầy đủ

## Skills và Commands Liên Quan

Kết hợp Frontend Development với:

- [Frontend Design](/vi/docs/engineer/skills/frontend-design) - Tạo UI design độc đáo trước khi implement
- [AI Multimodal](/vi/docs/engineer/skills/ai-multimodal) - Generate assets, extract design từ screenshots
- [Chrome DevTools](/vi/docs/engineer/skills/chrome-devtools) - Test ứng dụng, chụp screenshots, debug issues

## Nguyên Tắc Cốt Lõi

Skill được xây dựng trên 8 nguyên tắc cốt lõi:

1. Lazy load mọi thứ nặng
2. Sử dụng Suspense cho loading states
3. Sử dụng `useSuspenseQuery` cho data fetching
4. Tổ chức features với các thư mục chuyên biệt
5. Inline styles dưới 100 dòng, file riêng trên 100 dòng
6. Sử dụng import aliases cho imports gọn gàng
7. Không early returns (ngăn layout shift)
8. Sử dụng `useMuiSnackbar` cho mọi user notifications

Tuân theo những nguyên tắc này và ứng dụng React của bạn sẽ có hiệu năng cao, dễ bảo trì và nhất quán.
