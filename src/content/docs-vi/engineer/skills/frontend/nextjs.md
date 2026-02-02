---
title: Kỹ năng Next.js
description: Tài liệu hướng dẫn sử dụng kỹ năng nextjs
section: engineer
kit: engineer
category: skills/frontend
order: 2
published: true
lang: vi
---

# Kỹ năng Next.js

Kỹ năng Next.js v15+ toàn diện để xây dựng các ứng dụng web hiện đại với kết xuất phía máy chủ (server-side rendering), tạo trang tĩnh (static generation) và mô hình App Router.

## Những gì Next.js cung cấp

- **Server Components**: React Server Components giúp giảm kích thước bundle phía client về 0
- **App Router**: Hệ thống định tuyến dựa trên tệp tin với các layout và route lồng nhau
- **Data Fetching**: Lấy dữ liệu phía máy chủ với async/await
- **Tối ưu hóa hình ảnh**: Tự động tối ưu hóa hình ảnh với next/image
- **API Routes**: Các điểm cuối API tích hợp sẵn với trình xử lý route (route handlers)
- **Quản lý Metadata**: Metadata thân thiện với SEO và các thẻ Open Graph
- **Hiệu suất**: Tự động chia nhỏ mã (code splitting) và tải chậm (lazy loading)
- **TypeScript**: Hỗ trợ TypeScript ưu tiên hàng đầu

## Thiết lập

### Điều kiện tiên quyết

- Đã cài đặt Node.js 20+
- Trình quản lý gói npm, pnpm hoặc yarn
- Kiến thức cơ bản về React và TypeScript

### Cài đặt

```bash
# Tạo dự án Next.js mới
npx create-next-app@latest my-app

# Các tùy chọn trong quá trình thiết lập:
# - TypeScript: Yes
# - ESLint: Yes
# - Tailwind CSS: Yes (khuyến nghị)
# - src/ directory: Yes (khuyến nghị)
# - App Router: Yes (sử dụng App Router)
# - Import alias: @/* (khuyến nghị)

# Di chuyển vào thư mục dự án
cd my-app

# Chạy server phát triển
npm run dev
```

### Thiết lập thủ công

```bash
# Cài đặt Next.js vào dự án hiện có
npm install next@latest react@latest react-dom@latest

# Thêm các script vào package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## Cách sử dụng

### Ví dụ cơ bản: Tạo các trang

**Cấu trúc App Router:**
```
src/app/
├── layout.tsx          # Root layout
├── page.tsx            # Trang chủ (/)
├── about/
│   └── page.tsx        # Trang giới thiệu (/about)
└── blog/
    ├── page.tsx        # Danh sách blog (/blog)
    └── [slug]/
        └── page.tsx    # Bài viết blog (/blog/[slug])
```

**Root Layout (src/app/layout.tsx):**
```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ứng dụng Next.js của tôi',
  description: 'Xây dựng với Next.js 15',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

**Trang chủ (src/app/page.tsx):**
```typescript
export default function HomePage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Chào mừng đến với Next.js</h1>
      <p className="mt-4 text-lg">
        Bắt đầu xây dựng các ứng dụng web tuyệt vời.
      </p>
    </main>
  );
}
```

### Ví dụ nâng cao: Server Components với Data Fetching

**Trang bài viết blog (src/app/blog/[slug]/page.tsx):**
```typescript
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Định nghĩa kiểu cho props
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Hàm lấy dữ liệu bài viết
async function getPost(slug: string) {
  const res = await fetch(`https://api.example.com/posts/${slug}`, {
    // Xác thực lại mỗi 60 giây
    next: { revalidate: 60 }
  });

  if (!res.ok) return null;
  return res.json();
}

// Tạo metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return { title: 'Không tìm thấy bài viết' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

// Tạo static params cho SSG
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

// Component trang
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <article className="container mx-auto p-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date}</p>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
```

### Client Components

**Component tương tác (src/components/Counter.tsx):**
```typescript
'use client'; // Đánh dấu là client component

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded-lg">
      <p className="text-2xl font-bold">Số đếm: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Tăng lên
      </button>
    </div>
  );
}
```

### API Routes

**Trình xử lý Route (src/app/api/posts/route.ts):**
```typescript
import { NextRequest, NextResponse } from 'next/server';

// GET /api/posts
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get('page') || '1';

  const posts = await fetchPostsFromDB(page);

  return NextResponse.json({ posts, page });
}

// POST /api/posts
export async function POST(request: NextRequest) {
  const body = await request.json();

  // Xác thực dữ liệu
  if (!body.title || !body.content) {
    return NextResponse.json(
      { error: 'Tiêu đề và nội dung là bắt buộc' },
      { status: 400 }
    );
  }

  const post = await createPost(body);

  return NextResponse.json(post, { status: 201 });
}
```

**Trình xử lý Route động (src/app/api/posts/[id]/route.ts):**
```typescript
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: Promise<{ id: string }>;
};

// GET /api/posts/[id]
export async function GET(request: NextRequest, context: Context) {
  const { id } = await context.params;
  const post = await fetchPostById(id);

  if (!post) {
    return NextResponse.json(
      { error: 'Không tìm thấy bài viết' },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}
```

### Tối ưu hóa hình ảnh

```typescript
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={300}
        // Ưu tiên cho các hình ảnh xuất hiện ngay khi tải trang
        priority
        // Hiệu ứng làm mờ khi đang tải
        placeholder="blur"
        blurDataURL={product.blurDataURL}
        // Kích thước phản hồi (responsive)
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
}
```

### Middleware

**src/middleware.ts:**
```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Kiểm tra xác thực
  const token = request.cookies.get('token')?.value;

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Thêm header tùy chỉnh
  const response = NextResponse.next();
  response.headers.set('x-custom-header', 'my-value');

  return response;
}

// Cấu hình các route sử dụng middleware
export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'],
};
```

## Tích hợp với ClaudeKit

Các agent của ClaudeKit sử dụng kỹ năng Next.js để:

### 1. Khởi tạo dự án

```bash
# Lệnh bootstrap tạo dự án Next.js
/bootstrap [Ứng dụng Next.js với xác thực]
```

Agent Planner sẽ:
- Thiết lập Next.js với TypeScript và Tailwind
- Cấu hình cấu trúc App Router
- Triển khai luồng xác thực
- Tạo các layout và component có thể tái sử dụng

### 2. Phát triển tính năng

```bash
# Lệnh cook triển khai các tính năng
/cook [thêm phần blog hỗ trợ MDX]
```

Agent Developer sẽ:
- Tạo các blog route với App Router
- Thiết lập MDX với next-mdx-remote
- Triển khai tạo trang tĩnh (static generation)
- Thêm metadata và SEO

### 3. Triển khai giao diện

```bash
# Sử dụng skill ai-artist (creative mode) để tạo giao diện người dùng
# "tạo bố cục dashboard hiện đại"
```

Agent UI/UX Designer sẽ:
- Sử dụng các layout của Next.js cho cấu trúc đồng nhất
- Triển khai Server Components để lấy dữ liệu
- Thêm Client Components cho tính tương tác
- Tối ưu hóa hình ảnh với next/image

## Phương pháp hay nhất

### Server vs Client Components

**Sử dụng Server Components (mặc định) cho:**
- Lấy dữ liệu từ API hoặc cơ sở dữ liệu
- Truy cập trực tiếp các tài nguyên backend
- Giữ thông tin nhạy cảm trên server
- Các phụ thuộc lớn không cần thiết ở phía client

**Sử dụng Client Components ('use client') cho:**
- Các yếu tố tương tác (onClick, onChange)
- React hooks (useState, useEffect)
- Các API chỉ dành cho trình duyệt (localStorage, geolocation)
- Các trình lắng nghe sự kiện (Event listeners)

### Chiến lược lấy dữ liệu (Data Fetching)

**Tạo trang tĩnh (Static Generation - SSG):**
```typescript
// Kết xuất trước tại thời điểm build
export default async function Page() {
  const data = await fetch('https://api.example.com/data');
  return <div>{data}</div>;
}
```

**Xác thực lại (ISR):**
```typescript
// Xác thực lại mỗi 60 giây
const data = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 }
});
```

**Kết xuất động (Dynamic Rendering):**
```typescript
// Kết xuất trên mỗi yêu cầu
const data = await fetch('https://api.example.com/data', {
  cache: 'no-store'
});
```

### Tối ưu hóa hiệu suất

**1. Chia nhỏ mã (Code Splitting):**
```typescript
// Import động cho các component nặng
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <p>Đang tải...</p>,
  ssr: false, // Tắt SSR cho các component chỉ dành cho client
});
```

**2. Tối ưu hóa Phông chữ:**
```typescript
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});
```

**3. Metadata cho SEO:**
```typescript
export const metadata: Metadata = {
  title: {
    template: '%s | Ứng dụng của tôi',
    default: 'Ứng dụng của tôi',
  },
  description: 'Mô tả ứng dụng của tôi',
  keywords: ['nextjs', 'react', 'typescript'],
  authors: [{ name: 'Tên của bạn' }],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://example.com',
    siteName: 'Ứng dụng của tôi',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yourusername',
  },
};
```

### Xử lý lỗi

**Ranh giới lỗi (error.tsx):**
```typescript
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Đã có lỗi xảy ra!</h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Thử lại
      </button>
    </div>
  );
}
```

**Trang Không tìm thấy (not-found.tsx):**
```typescript
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">404 - Không tìm thấy trang</h2>
      <p className="text-gray-600">Không thể tìm thấy tài nguyên yêu cầu</p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">
        Quay lại Trang chủ
      </a>
    </div>
  );
}
```

### Biến môi trường

**Cấu hình (.env.local):**
```bash
# Biến công khai (có thể truy cập từ trình duyệt)
NEXT_PUBLIC_API_URL=https://api.example.com

# Biến riêng tư (chỉ dành cho server)
DATABASE_URL=postgresql://user:pass@localhost:5432/db
API_SECRET_KEY=your-secret-key
```

**Cách sử dụng:**
```typescript
// Phía client (phải có tiền tố NEXT_PUBLIC_)
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Phía server (mọi biến số)
const dbUrl = process.env.DATABASE_URL;
```

## Các mô hình phổ biến

### Xác thực với Server Actions

**src/app/actions/auth.ts:**
```typescript
'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  // Xác thực và kiểm tra
  const user = await authenticate(email, password);

  if (!user) {
    return { error: 'Thông tin đăng nhập không hợp lệ' };
  }

  // Thiết lập cookie
  const cookieStore = await cookies();
  cookieStore.set('token', user.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 tuần
  });

  redirect('/dashboard');
}
```

### Trạng thái Loading

**loading.tsx:**
```typescript
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  );
}
```

### Parallel Routes

```
app/
└── dashboard/
    ├── @analytics/
    │   └── page.tsx
    ├── @stats/
    │   └── page.tsx
    ├── layout.tsx
    └── page.tsx
```

**dashboard/layout.tsx:**
```typescript
export default function DashboardLayout({
  children,
  analytics,
  stats,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  stats: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">{children}</div>
      <div>
        {analytics}
        {stats}
      </div>
    </div>
  );
}
```

## Các kỹ năng liên quan

- [Tailwind CSS](/vi/docs/engineer/skills/frontend/tailwindcss) - Tạo kiểu cho ứng dụng Next.js
- [shadcn/ui](/vi/docs/engineer/skills/frontend/shadcn-ui) - Các thành phần giao diện được xây dựng sẵn
- [TypeScript](/docs/engineer/skills) - Phát triển an toàn kiểu dữ liệu
- [React](/docs/engineer/skills) - Các mô hình React cốt lõi

## Tài liệu tham khảo

- **Tài liệu chính thức**: https://nextjs.org/docs
- **llms.txt**: https://nextjs.org/docs/llms.txt
- **Hướng dẫn App Router**: https://nextjs.org/docs/app
- **Tham khảo API**: https://nextjs.org/docs/app/api-reference
- **Ví dụ**: https://github.com/vercel/next.js/tree/canary/examples

---

**Điểm chính**: Next.js kết hợp những ưu điểm tốt nhất của kết xuất phía máy chủ, tạo trang tĩnh và tính tương tác phía client, khiến nó trở thành lựa chọn lý tưởng cho các ứng dụng web hiện đại. Các agent của ClaudeKit tận dụng những khả năng này để xây dựng các ứng dụng nhanh, thân thiện với SEO và dễ bảo trì.
