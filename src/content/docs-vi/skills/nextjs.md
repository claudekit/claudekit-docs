---
title: Next.js Skill
description: React framework for server-side rendering, static generation, and modern web applications with App Router
category: skills
order: 2
published: true
---

# Next.js Skill

A comprehensive Next.js v15+ skill for building modern web applications with server-side rendering, static generation, and the App Router pattern.

## What Next.js Provides

- **Server Components**: React Server Components for zero-bundle size on the client
- **App Router**: File-system based routing with layouts and nested routes
- **Data Fetching**: Server-side data fetching with async/await
- **Image Optimization**: Automatic image optimization with next/image
- **API Routes**: Built-in API endpoints with route handlers
- **Metadata Management**: SEO-friendly metadata and Open Graph tags
- **Performance**: Automatic code splitting and lazy loading
- **TypeScript**: First-class TypeScript support

## Setup

### Prerequisites

- Node.js 20+ installed
- npm, pnpm, or yarn package manager
- Basic knowledge of React and TypeScript

### Installation

```bash
# Create new Next.js project
npx create-next-app@latest my-app

# Options during setup:
# - TypeScript: Yes
# - ESLint: Yes
# - Tailwind CSS: Yes (recommended)
# - src/ directory: Yes (recommended)
# - App Router: Yes (use App Router)
# - Import alias: @/* (recommended)

# Navigate to project
cd my-app

# Start development server
npm run dev
```

### Manual Setup

```bash
# Install Next.js in existing project
npm install next@latest react@latest react-dom@latest

# Add scripts to package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## Usage

### Basic Example: Creating Pages

**App Router Structure:**
```
src/app/
├── layout.tsx          # Root layout
├── page.tsx            # Home page (/)
├── about/
│   └── page.tsx        # About page (/about)
└── blog/
    ├── page.tsx        # Blog list (/blog)
    └── [slug]/
        └── page.tsx    # Blog post (/blog/[slug])
```

**Root Layout (src/app/layout.tsx):**
```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'Built with Next.js 15',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

**Home Page (src/app/page.tsx):**
```typescript
export default function HomePage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Welcome to Next.js</h1>
      <p className="mt-4 text-lg">
        Start building amazing web applications.
      </p>
    </main>
  );
}
```

### Advanced Example: Server Components with Data Fetching

**Blog Post Page (src/app/blog/[slug]/page.tsx):**
```typescript
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Define params type
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Fetch post data
async function getPost(slug: string) {
  const res = await fetch(`https://api.example.com/posts/${slug}`, {
    // Revalidate every 60 seconds
    next: { revalidate: 60 }
  });

  if (!res.ok) return null;
  return res.json();
}

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return { title: 'Post Not Found' };

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

// Generate static params for SSG
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

// Page component
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

**Interactive Component (src/components/Counter.tsx):**
```typescript
'use client'; // Mark as client component

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded-lg">
      <p className="text-2xl font-bold">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
}
```

### API Routes

**Route Handler (src/app/api/posts/route.ts):**
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

  // Validate body
  if (!body.title || !body.content) {
    return NextResponse.json(
      { error: 'Title and content are required' },
      { status: 400 }
    );
  }

  const post = await createPost(body);

  return NextResponse.json(post, { status: 201 });
}
```

**Dynamic Route Handler (src/app/api/posts/[id]/route.ts):**
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
      { error: 'Post not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}
```

### Image Optimization

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
        // Priority for above-the-fold images
        priority
        // Placeholder blur effect
        placeholder="blur"
        blurDataURL={product.blurDataURL}
        // Responsive sizes
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
  // Check authentication
  const token = request.cookies.get('token')?.value;

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Add custom header
  const response = NextResponse.next();
  response.headers.set('x-custom-header', 'my-value');

  return response;
}

// Configure which routes use middleware
export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'],
};
```

## Integration with ClaudeKit

ClaudeKit agents use the Next.js skill to:

### 1. Project Scaffolding

```bash
# Bootstrap command creates Next.js projects
/bootstrap [Next.js app with authentication]
```

The Planner agent will:
- Set up Next.js with TypeScript and Tailwind
- Configure App Router structure
- Implement authentication flow
- Create reusable layouts and components

### 2. Feature Development

```bash
# Cook command implements features
/cook [add blog section with MDX support]
```

The Developer agent will:
- Create blog routes with App Router
- Set up MDX with next-mdx-remote
- Implement static generation
- Add metadata and SEO

### 3. UI Implementation

```bash
# Design command creates UI
/design:good [modern dashboard layout]
```

The UI/UX Designer agent will:
- Use Next.js layouts for consistent structure
- Implement Server Components for data
- Add Client Components for interactivity
- Optimize images with next/image

## Best Practices

### Server vs Client Components

**Use Server Components (default) for:**
- Data fetching from APIs or databases
- Accessing backend resources directly
- Keeping sensitive information on server
- Large dependencies that don't need client-side

**Use Client Components ('use client') for:**
- Interactive elements (onClick, onChange)
- React hooks (useState, useEffect)
- Browser-only APIs (localStorage, geolocation)
- Event listeners

### Data Fetching Strategies

**Static Generation (SSG):**
```typescript
// Pre-render at build time
export default async function Page() {
  const data = await fetch('https://api.example.com/data');
  return <div>{data}</div>;
}
```

**Revalidation (ISR):**
```typescript
// Revalidate every 60 seconds
const data = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 }
});
```

**Dynamic Rendering:**
```typescript
// Render on each request
const data = await fetch('https://api.example.com/data', {
  cache: 'no-store'
});
```

### Performance Optimization

**1. Code Splitting:**
```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable SSR for client-only components
});
```

**2. Font Optimization:**
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

**3. Metadata for SEO:**
```typescript
export const metadata: Metadata = {
  title: {
    template: '%s | My App',
    default: 'My App',
  },
  description: 'My application description',
  keywords: ['nextjs', 'react', 'typescript'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    siteName: 'My App',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yourusername',
  },
};
```

### Error Handling

**Error Boundary (error.tsx):**
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
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
```

**Not Found (not-found.tsx):**
```typescript
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-gray-600">Could not find requested resource</p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">
        Return Home
      </a>
    </div>
  );
}
```

### Environment Variables

**Configuration (.env.local):**
```bash
# Public variables (accessible in browser)
NEXT_PUBLIC_API_URL=https://api.example.com

# Private variables (server-only)
DATABASE_URL=postgresql://user:pass@localhost:5432/db
API_SECRET_KEY=your-secret-key
```

**Usage:**
```typescript
// Client-side (must have NEXT_PUBLIC_ prefix)
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Server-side (any variable)
const dbUrl = process.env.DATABASE_URL;
```

## Common Patterns

### Authentication with Server Actions

**src/app/actions/auth.ts:**
```typescript
'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  // Validate and authenticate
  const user = await authenticate(email, password);

  if (!user) {
    return { error: 'Invalid credentials' };
  }

  // Set cookie
  const cookieStore = await cookies();
  cookieStore.set('token', user.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  redirect('/dashboard');
}
```

### Loading States

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

## Related Skills

- [Tailwind CSS](/docs/skills/tailwindcss) - Styling Next.js applications
- [shadcn/ui](/docs/skills/shadcn-ui) - Pre-built UI components
- [TypeScript](/docs/skills/typescript) - Type-safe development
- [React](/docs/skills/react) - Core React patterns

## Reference

- **Official Docs**: https://nextjs.org/docs
- **llms.txt**: https://nextjs.org/docs/llms.txt
- **App Router Guide**: https://nextjs.org/docs/app
- **API Reference**: https://nextjs.org/docs/app/api-reference
- **Examples**: https://github.com/vercel/next.js/tree/canary/examples

---

**Key Takeaway**: Next.js combines the best of server-side rendering, static generation, and client-side interactivity, making it the ideal choice for modern web applications. ClaudeKit agents leverage these capabilities to build fast, SEO-friendly, and maintainable applications.
