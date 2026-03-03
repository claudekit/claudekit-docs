---
lang: vi
title: "ckm:better-auth"
description: "Xác thực với framework Better Auth TypeScript"
section: marketing
kit: marketing
category: skills
order: 64
---

# `ckm:better-auth`

> Triển khai xác thực an toàn và linh hoạt với Better Auth — framework TypeScript-first mã nguồn mở.

## Skill Này Làm Gì

**Thách thức**: Xây dựng authentication từ đầu rất tốn thời gian và dễ mắc lỗi bảo mật. Các giải pháp SaaS như Auth0 tốn kém và gây vendor lock-in.

**Giải pháp**: Skill better-auth hướng dẫn tích hợp Better Auth — framework TypeScript type-safe, hỗ trợ nhiều providers, self-hosted và có thể mở rộng với plugins.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi project cần authentication, user sessions hoặc authorization.

**Tường minh**: Kích hoạt qua prompt:
```
Activate better-auth skill to implement [loại auth]
```

## Tính Năng

### 1. Cài Đặt Nhanh
Thiết lập Better Auth trong dự án TypeScript chỉ với vài lệnh.

**Cài đặt**:
```bash
npm install better-auth
```

**Cấu hình server** (`auth.ts`):
```typescript
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./database";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // hoặc "mysql", "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});
```

**API route** (Next.js App Router):
```typescript
// app/api/auth/[...all]/route.ts
import { auth } from "@/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);
```

### 2. Social Providers
Tích hợp OAuth với các nền tảng phổ biến.

**Providers được hỗ trợ**:
- Google, GitHub, Facebook, Twitter/X
- Discord, Twitch, Microsoft
- Apple (dành cho mobile)
- Custom OAuth 2.0

**Cấu hình**:
```typescript
socialProviders: {
  github: {
    clientId: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  },
  facebook: {
    clientId: process.env.FACEBOOK_CLIENT_ID!,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
  },
}
```

### 3. Session Management
Quản lý session an toàn phía server và client.

**Lấy session phía server**:
```typescript
// Server component hoặc API route
import { auth } from "@/auth";
import { headers } from "next/headers";

const session = await auth.api.getSession({
  headers: await headers(),
});

if (!session) {
  redirect("/login");
}

const { user } = session;
```

**Client-side hook**:
```typescript
import { authClient } from "@/auth-client";

function Dashboard() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <LoadingSpinner />;
  if (!session) return <LoginButton />;

  return <WelcomeMessage user={session.user} />;
}
```

### 4. Plugins và Extensions
Mở rộng chức năng với plugin ecosystem.

**Plugin hữu ích**:
```typescript
import { twoFactor } from "better-auth/plugins";
import { organization } from "better-auth/plugins";
import { adminPlugin } from "better-auth/plugins";

export const auth = betterAuth({
  // ...
  plugins: [
    twoFactor(),           // 2FA với TOTP
    organization(),        // Multi-tenant với roles
    adminPlugin(),         // Admin dashboard
  ],
});
```

## Điều Kiện Tiên Quyết

- Node.js 18+ hoặc Bun
- TypeScript 5+
- Database: PostgreSQL, MySQL, hoặc SQLite
- ORM: Drizzle, Prisma, hoặc Kysely

## Cấu Hình

**Biến môi trường** (`.env`):
```bash
DATABASE_URL=postgresql://user:pass@localhost:5432/db
BETTER_AUTH_SECRET=random-32-char-secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
```

**Database schema** (tự động tạo):
```bash
npx better-auth generate
```

## Thực Hành Tốt Nhất

**1. Luôn Verify Email**
Kích hoạt `requireEmailVerification` cho production để tránh spam accounts.

**2. Rate Limiting Login**
Better Auth có built-in rate limiting. Cấu hình để phù hợp với traffic pattern.

**3. Session Rotation**
Rotate session tokens sau mỗi lần đăng nhập để giảm session hijacking risk.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: SaaS Marketing Tool
**Tình huống**: Xây dựng tool marketing với freemium model.

**Quy trình**:
1. Setup email/password + Google OAuth
2. Thêm organization plugin cho team accounts
3. Implement role-based access (admin, member, viewer)
4. Webhook để sync user data với CRM

### Trường Hợp 2: Gated Content
**Tình huống**: Bảo vệ premium content sau paywall.

**Quy trình**:
1. Auth với Better Auth
2. Thêm custom field `subscriptionTier` vào user model
3. Middleware kiểm tra tier trước khi serve content

## Xử Lý Sự Cố

**Vấn đề**: Session không persist sau restart server
**Giải pháp**: Đảm bảo `BETTER_AUTH_SECRET` không thay đổi. Secret dùng để sign/verify JWT.

**Vấn đề**: OAuth callback URL lỗi
**Giải pháp**: URL callback phải chính xác là `{BETTER_AUTH_URL}/api/auth/callback/{provider}`. Kiểm tra OAuth app settings.

## Skill Liên Quan

- [Backend Development](/vi/docs/marketing/skills/backend-development) - Xây dựng API backend
- [Databases](/vi/docs/marketing/skills/databases) - Schema và migrations
- [Brainstorming](/vi/docs/marketing/skills/brainstorming) - Thiết kế auth architecture

## Lệnh Liên Quan

- `/ckm:better-auth` - Thiết lập Better Auth
- `/ckm:backend-development` - Xây dựng API với auth
- `/ckm:databases` - Cấu hình database cho Better Auth
