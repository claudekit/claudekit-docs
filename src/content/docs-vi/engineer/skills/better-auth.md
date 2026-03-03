---
title: "ck:better-auth"
description: Authentication TypeScript không phụ thuộc framework với email/password, OAuth, 2FA, passkeys và multi-tenancy
section: engineer
kit: engineer
category: skills/auth
order: 50
published: true
lang: vi
---

# Better Auth Skill

Authentication production-ready cho bất kỳ TypeScript framework nào — Next.js, Nuxt, SvelteKit, Remix, Astro, Hono, Express.

## Khi Nào Dùng

- Thêm authentication vào ứng dụng TypeScript/JavaScript
- Login email/password hoặc social OAuth
- 2FA, passkeys, magic links
- Ứng dụng multi-tenant với organizations
- Quản lý sessions và protected routes

## Khả Năng Chính

| Tính Năng | Built-in | Plugin |
|-----------|----------|--------|
| Email/Password | ✓ | - |
| OAuth (GitHub, Google, v.v.) | ✓ | - |
| Email Verification | ✓ | - |
| Password Reset | ✓ | - |
| Rate Limiting | ✓ | - |
| Two-Factor (TOTP) | - | `twoFactor` |
| Passkeys/WebAuthn | - | `passkey` |
| Magic Links | - | `magicLink` |
| Organizations | - | `organization` |

**Frameworks**: Next.js, Nuxt, SvelteKit, Remix, Astro, Hono, Express

**Databases**: PostgreSQL, MySQL, SQLite, MongoDB (qua Drizzle, Prisma, Kysely)

## Các Use Case Phổ Biến

### SaaS MVP Authentication
**Đối tượng**: Solo founder xây dựng product đầu tiên
```
"Add authentication to my Next.js app with email/password signup,
GitHub OAuth, and PostgreSQL with Drizzle. Include email verification."
```

### Multi-Tenant Platform
**Đối tượng**: Team xây dựng B2B SaaS
```
"Set up Better Auth with organization support for multi-tenant app.
Need team invitations, role-based permissions, and admin dashboard."
```

### Enterprise App Bảo Mật Cao
**Đối tượng**: Developer tại công ty có yêu cầu bảo mật nghiêm ngặt
```
"Implement Better Auth with 2FA requirement, passkey support,
rate limiting, and audit logging. PostgreSQL backend."
```

### Trải Nghiệm Passwordless
**Đối tượng**: Startup chú trọng UX
```
"Add magic link authentication to my SvelteKit app.
No passwords, just email-based login with session management."
```

### Prototype Nhanh
**Đối tượng**: Developer đang thử nghiệm ý tưởng
```
"Set up basic Better Auth with SQLite for local development.
Just email/password, minimal config."
```

## Quick Start

```bash
npm install better-auth
```

```bash
BETTER_AUTH_SECRET=your-32-char-secret
BETTER_AUTH_URL=http://localhost:3000
```

```bash
npx @better-auth/cli generate  # Tạo schema
npx @better-auth/cli migrate   # Áp dụng migrations
```

## Lựa Chọn Auth Method

| Phương Thức | Phù Hợp Nhất |
|-------------|--------------|
| Email/Password | Web apps truyền thống, kiểm soát credentials đầy đủ |
| OAuth | Đăng ký nhanh, truy cập social profile |
| Passkeys | Passwordless, ứng dụng ưu tiên bảo mật |
| Magic Links | Users ưu tiên email, truy cập tạm thời |

## Pro Tips

- **Chạy migrations sau khi thêm plugins**: `npx @better-auth/cli generate && migrate`
- **Dùng environment variables** cho secrets và OAuth credentials
- **Bật rate limiting** trong production để ngăn chặn lạm dụng
- **Kết hợp các phương thức** để linh hoạt cho users (OAuth + email dự phòng)
- **Không kích hoạt?** Nói: "Use the better-auth skill to..."

## Các Skills Liên Quan

- [Databases](/vi/docs/engineer/skills/databases) - Cài đặt PostgreSQL/MongoDB
- [Next.js](/vi/docs/engineer/skills/web-frameworks) - Tích hợp framework
- [Backend Development](/vi/docs/engineer/skills/backend-development) - API patterns

---

## Điểm Mấu Chốt

Dùng Better Auth cho authentication production-ready trong bất kỳ TypeScript framework nào với built-in email/password, OAuth và hệ thống plugin mở rộng cho 2FA, passkeys và organizations.
