---
title: "ck:frontend-development"
description: Các pattern phát triển React và TypeScript hiện đại với Suspense, lazy loading, TanStack Query, và MUI v7 để xây dựng ứng dụng hiệu suất cao
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

# Frontend Development

Xây dựng ứng dụng React theo cách hiện đại có nghĩa là áp dụng Suspense, lazy loading, và các pattern fetching dữ liệu phù hợp. Skill này hướng dẫn bạn cách làm điều đó.

## Skill Này Làm Gì

Frontend Development cung cấp hướng dẫn toàn diện để xây dựng ứng dụng React hiện đại với TypeScript. Nó nhấn mạnh việc fetch dữ liệu dựa trên Suspense với TanStack Query, lazy loading để tối ưu hiệu suất, tổ chức file đúng cách bằng thư mục features, MUI v7 để styling, và TanStack Router để điều hướng.

Đây không chỉ là tập hợp các đoạn code. Đây là phương pháp hoàn chỉnh để cấu trúc các ứng dụng React có khả năng mở rộng, hiệu suất tốt, và duy trì sự nhất quán trên codebase. Bạn sẽ học được các pattern ngăn chặn những vấn đề phổ biến như layout shift từ loading states, memory leaks từ effects không được theo dõi, và prop drilling từ tổ chức component kém.

Skill bao gồm mọi thứ từ tạo một component đơn đến tổ chức ứng dụng nhiều tính năng, với hướng dẫn cụ thể về fetching dữ liệu, styling, routing, xử lý lỗi, và tối ưu hóa hiệu suất.

## Yêu Cầu Trước

Bạn cần có:

- Kiến thức làm việc về React và TypeScript
- Quen thuộc với npm hoặc yarn package managers
- Hiểu biết cơ bản về các pattern async/await
- Dự án React đã thiết lập (hoặc sẵn sàng tạo mới)

Skill giả định bạn đang làm việc với:

- React 18.3+
- TypeScript 5.7+
- TanStack Query v5 (để fetch dữ liệu)
- TanStack Router (để routing)
- MUI v7 (Material-UI cho components và styling)

## Danh Sách Kiểm Tra Nhanh

### Tạo Component Mới

Khi tạo component, theo dõi danh sách kiểm tra này:

- Dùng pattern `React.FC<Props>` với TypeScript
- Lazy load nếu là component nặng (DataGrid, charts, editors)
- Bọc trong `<SuspenseLoader>` cho loading states
- Dùng `useSuspenseQuery` để fetch dữ liệu
- Import dùng aliases: `@/`, `~types`, `~components`, `~features`
- Styles: inline nếu dưới 100 dòng, file `.styles.ts` riêng nếu trên 100 dòng
- Dùng `useCallback` cho event handlers được truyền vào children
- Default export ở cuối
- Không bao giờ dùng early returns cho loading states
- Dùng `useMuiSnackbar` cho thông báo người dùng

### Tạo Feature Mới

Khi xây dựng feature, thiết lập cấu trúc này:

```
src/features/my-feature/
  api/
    myFeatureApi.ts       # Tầng API service
  components/
    MyFeature.tsx         # Component chính
    SubComponent.tsx      # Các component liên quan
  hooks/
    useMyFeature.ts       # Custom hooks
  helpers/
    myFeatureHelpers.ts   # Các hàm tiện ích
  types/
    index.ts              # TypeScript types
  index.ts                # Public exports
```

Sau đó tạo route trong `src/routes/my-feature/index.tsx` với lazy loading.

## Các Pattern Cốt Lõi

### Cấu Trúc Component

Các React component hiện đại theo một pattern nhất quán:

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
        {/* Nội dung */}
      </Paper>
    </Box>
  );
};

export default MyComponent;
```

**Điểm chính**:

- Interface Props với types rõ ràng
- `useSuspenseQuery` thay vì kiểm tra `isLoading`
- `useCallback` cho handlers được truyền vào children
- Named const export + default export
- Các component MUI với `sx` prop để styling

### Fetch Dữ Liệu Với useSuspenseQuery

Pattern chính để fetch dữ liệu là `useSuspenseQuery`:

```typescript
import { useSuspenseQuery } from '@tanstack/react-query';
import { postsApi } from '~features/posts/api/postsApi';

// Bên trong component
const { data } = useSuspenseQuery({
  queryKey: ['posts', { status: 'published' }],
  queryFn: () => postsApi.getPosts({ status: 'published' }),
});

// data được đảm bảo là defined (không cần kiểm tra null)
```

Pattern này thay thế cách cũ là kiểm tra `isLoading` và hiển thị spinner. Thay vào đó, bọc components trong `<SuspenseLoader>`:

```typescript
import { SuspenseLoader } from '~components/SuspenseLoader';

// Trong component cha
<SuspenseLoader>
  <MyComponent id={5} />
</SuspenseLoader>
```

### Tổ Chức File

Tổ chức code theo feature, không theo type:

**Tốt** (thư mục features):
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

**Kém** (tổ chức theo type):
```
src/
  api/
    postsApi.ts
    commentsApi.ts
  components/
    PostList.tsx
    CommentList.tsx
```

Thư mục `components/` ở root dành cho các component thực sự tái sử dụng như `SuspenseLoader` và `CustomAppBar`.

### Import Aliases

Dùng import aliases để import sạch hơn:

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

- `@/` trỏ đến `src/`
- `~types` trỏ đến `src/types`
- `~components` trỏ đến `src/components`
- `~features` trỏ đến `src/features`

### Styling Với MUI v7

Dùng `sx` prop để styling MUI components:

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
    {/* Nội dung */}
  </Box>
</Box>
```

Trên 100 dòng styles, tạo file `.styles.ts` riêng.

**Cú Pháp MUI v7 Grid** (thay đổi quan trọng):

```typescript
// ✅ Đúng (v7)
<Grid size={{ xs: 12, md: 6 }}>
  <Paper>Nội dung</Paper>
</Grid>

// ❌ Sai (cú pháp cũ)
<Grid xs={12} md={6}>
  <Paper>Nội dung</Paper>
</Grid>
```

### Routing Với TanStack Router

Tạo routes dựa trên thư mục với lazy loading:

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

Cấu trúc thư mục ánh xạ đến URLs:

- `routes/posts/index.tsx` → `/posts`
- `routes/posts/create/index.tsx` → `/posts/create`
- `routes/posts/$postId/index.tsx` → `/posts/:postId`

### Loading và Error States

**Quy Tắc Quan Trọng**: Không bao giờ dùng early returns cho loading states.

```typescript
// ❌ XẤU - Gây layout shift
if (isLoading) {
  return <LoadingSpinner />;
}

// ✅ TỐT - Layout nhất quán
<SuspenseLoader>
  <Content />
</SuspenseLoader>
```

Để phản hồi người dùng, dùng `useMuiSnackbar`:

```typescript
import { useMuiSnackbar } from '@/hooks/useMuiSnackbar';

const { showSnackbar } = useMuiSnackbar();

// Thông báo thành công
showSnackbar('Post created successfully', 'success');

// Thông báo lỗi
showSnackbar('Failed to save changes', 'error');
```

Không bao giờ dùng `react-toastify` hoặc early return loading states.

## Tối Ưu Hiệu Suất

### Lazy Loading

Lazy load các component nặng:

```typescript
import React from 'react';

// Các component nặng (DataGrid, charts, editors)
const DataGrid = React.lazy(() => import('@mui/x-data-grid').then(m => ({ default: m.DataGrid })));
const RichTextEditor = React.lazy(() => import('~/components/RichTextEditor'));

// Trong component
<SuspenseLoader>
  <DataGrid rows={data} columns={columns} />
</SuspenseLoader>
```

### Memoization

Dùng `useMemo` cho các tính toán tốn kém:

```typescript
import { useMemo } from 'react';

const filteredPosts = useMemo(() => {
  return posts
    .filter(p => p.status === 'published')
    .sort((a, b) => b.createdAt - a.createdAt);
}, [posts]);
```

Dùng `useCallback` cho event handlers được truyền vào children:

```typescript
import { useCallback } from 'react';

const handleClick = useCallback(() => {
  console.log('Button clicked');
}, []);

<ChildComponent onClick={handleClick} />
```

Dùng `React.memo` cho các component tốn kém:

```typescript
import React from 'react';

const ExpensiveComponent = React.memo(({ data }) => {
  // Logic render phức tạp
});
```

## Ví Dụ Thực Tế

### Tạo Trang Danh Sách Posts

Quy trình đầy đủ từ đầu:

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

## Tóm Tắt Thực Hành Tốt Nhất

**Luôn Dùng Suspense**: Bọc lazy components và components dùng `useSuspenseQuery` trong `<SuspenseLoader>`.

**Lazy Load Các Component Nặng**: DataGrid, charts, rich text editors, và bất kỳ component nào trên 50KB nên được lazy load.

**Tổ Chức Theo Feature**: Nhóm code liên quan trong thư mục `features/` với các thư mục con cho api, components, hooks, helpers và types.

**Dùng Import Aliases**: Import sạch hơn với `@/`, `~types`, `~components`, `~features`.

**Inline Vs Styles Riêng**: Dưới 100 dòng inline, trên 100 dòng trong file `.styles.ts` riêng.

**Không Có Early Returns**: Ngăn chặn Cumulative Layout Shift. Dùng Suspense boundaries thay thế.

**TypeScript Strict Mode**: Return types rõ ràng, không có type `any`, type imports với `import type`.

## Tài Liệu Tham Chiếu

Skill bao gồm các file tham chiếu chi tiết trong Engineer Kit tại `../claudekit-engineer/.claude/skills/frontend-development/resources/`:

- `component-patterns.md` - Cấu trúc component, props, exports
- `data-fetching.md` - Các pattern TanStack Query, tầng API service
- `file-organization.md` - Thư mục features, import aliases
- `styling-guide.md` - MUI v7, sx prop, inline vs styles riêng
- `routing-guide.md` - TanStack Router, routes dựa trên thư mục
- `loading-and-error-states.md` - Suspense, xử lý lỗi, phản hồi người dùng
- `performance.md` - Lazy loading, memoization, tối ưu hóa
- `typescript-standards.md` - Type safety, interfaces, generics
- `common-patterns.md` - Forms, auth, DataGrid, dialogs
- `complete-examples.md` - Ví dụ đầy đủ hoạt động

## Skills và Lệnh Liên Quan

Kết hợp Frontend Development với:

- [Frontend Design](/vi/docs/engineer/skills/frontend-design) - Tạo thiết kế UI độc đáo trước khi triển khai
- [AI Multimodal](/vi/docs/engineer/skills/ai-multimodal) - Tạo assets, trích xuất thiết kế từ ảnh chụp màn hình
- [Chrome DevTools](/vi/docs/engineer/skills/chrome-devtools) - Kiểm thử ứng dụng, chụp ảnh màn hình, debug vấn đề

## Nguyên Tắc Cốt Lõi

Skill được xây dựng trên tám nguyên tắc cốt lõi:

1. Lazy load mọi thứ nặng
2. Dùng Suspense cho loading states
3. Dùng `useSuspenseQuery` để fetch dữ liệu
4. Tổ chức features với các thư mục riêng
5. Inline styles dưới 100 dòng, file riêng trên 100 dòng
6. Dùng import aliases cho imports sạch
7. Không có early returns (ngăn chặn layout shift)
8. Dùng `useMuiSnackbar` cho tất cả thông báo người dùng

Tuân theo các nguyên tắc này và ứng dụng React của bạn sẽ có hiệu suất cao, dễ bảo trì, và nhất quán.
