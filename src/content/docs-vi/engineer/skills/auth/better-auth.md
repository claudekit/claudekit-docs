---
title: better-auth
description: Tài liệu hướng dẫn sử dụng kỹ năng better-auth
section: engineer
kit: engineer
category: skills/auth
order: 10
published: true
lang: vi
---

# Kỹ năng better-auth

Framework xác thực (authentication) và phân quyền (authorization) độc lập với framework dành cho TypeScript. Hoạt động với mọi framework - Next.js, Nuxt, SvelteKit, Remix, Astro, Hono, Express.

## Khi nào nên sử dụng

Sử dụng better-auth khi bạn cần:
- Xác thực bằng Email/mật khẩu
- OAuth mạng xã hội (GitHub, Google, v.v.)
- Xác thực hai yếu tố (2FA)
- Passkeys (WebAuthn)
- Magic links (Đăng nhập không mật khẩu qua email)
- Đa người dùng (Multi-tenancy) / Tổ chức (Organizations)
- Sự linh hoạt giữa các framework

## Bắt đầu nhanh

### Cách gọi kỹ năng

```
"Sử dụng better-auth để thêm xác thực vào ứng dụng Next.js của tôi với:
- Đăng ký bằng Email/mật khẩu
- GitHub OAuth
- PostgreSQL với Drizzle"
```

### Kết quả nhận được

Kỹ năng này sẽ giúp bạn:
1. Cài đặt và cấu hình better-auth
2. Thiết lập schema cơ sở dữ liệu
3. Tạo instance server auth
4. Gắn kết các route API
5. Tạo instance client
6. Triển khai giao diện Đăng ký/Đăng nhập
7. Thêm quản lý phiên làm việc (session)
8. Bảo vệ các route

## Các trường hợp sử dụng phổ biến

### Xác thực Email/Mật khẩu cơ bản

```
"Sử dụng better-auth để triển khai xác thực email/mật khẩu với:
- Tự động đăng nhập sau khi đăng ký
- Xác minh email
- Luồng khôi phục mật khẩu"
```

### OAuth mạng xã hội

```
"Sử dụng better-auth để thêm GitHub và Google OAuth vào ứng dụng của tôi"
```

### Xác thực hai yếu tố

```
"Sử dụng better-auth để thêm 2FA với mã TOTP và các thiết bị tin cậy"
```

### Ứng dụng đa tổ chức (Multi-Tenant)

```
"Sử dụng better-auth để xây dựng ứng dụng đa tổ chức với:
- Các tổ chức (Organizations)
- Mời thành viên nhóm
- Phân quyền dựa trên vai trò (RBAC)"
```

## Các tính năng chính

### Phương thức xác thực

- **Email/Mật khẩu** - Đăng ký/đăng nhập truyền thống
- **OAuth mạng xã hội** - GitHub, Google, Apple, Discord, Facebook, v.v.
- **Magic Links** - Xác thực email không cần mật khẩu
- **Passkeys** - Xác thực sinh trắc học WebAuthn
- **2FA/TOTP** - Xác thực hai yếu tố
- **Email OTP** - Mã mật khẩu một lần qua email

### Hỗ trợ Framework

- Next.js (App Router & Pages Router)
- Nuxt
- SvelteKit
- Remix
- Astro
- Hono
- Express
- Mọi framework Node.js

### Hỗ trợ Cơ sở dữ liệu

- PostgreSQL
- MySQL
- SQLite
- MongoDB

### Adapter ORM

- Drizzle
- Prisma
- Kysely
- MongoDB native

## Ví dụ triển khai

### Next.js App Router

```
"Sử dụng better-auth để thiết lập xác thực cho Next.js 14 App Router với:
- Email/mật khẩu
- GitHub OAuth
- PostgreSQL + Drizzle
- Middleware bảo vệ route
- Server actions cho xác thực"
```

### SvelteKit

```
"Sử dụng better-auth để triển khai xác thực trong SvelteKit với:
- Xác thực Magic link
- Quản lý phiên làm việc
- Bảo vệ các route"
```

### Đa Framework

```
"Sử dụng better-auth để tạo hệ thống xác thực hoạt động với cả:
- Frontend Next.js
- Backend API Hono
- Cơ sở dữ liệu PostgreSQL dùng chung"
```

## Tính năng nâng cao

### Quản lý phiên làm việc (Session)

```
"Sử dụng better-auth để triển khai:
- Xác thực phiên làm việc phía server
- Hooks phiên làm việc phía client
- Tùy chỉnh thời gian hết hạn phiên
- Tính năng 'Ghi nhớ tôi' (Remember me)"
```

### Giới hạn tốc độ (Rate Limiting)

```
"Sử dụng better-auth để thêm giới hạn tốc độ nhằm ngăn chặn:
- Tấn công vét cạn (Brute force)
- Spam đăng ký
- Lạm dụng API"
```

### Xác minh Email

```
"Sử dụng better-auth để yêu cầu xác minh email:
- Gửi email xác minh
- Xử lý mã xác minh (tokens)
- Chặn người dùng chưa xác minh"
```

## Phương pháp hay nhất

### Biến môi trường

Luôn sử dụng biến môi trường cho:
- `BETTER_AUTH_SECRET` - Khóa bí mật (tối thiểu 32 ký tự)
- `BETTER_AUTH_URL` - URL của ứng dụng
- Client ID và Secret của OAuth

### Bảo mật

Kỹ năng này đảm bảo:
- HTTPS trong môi trường sản xuất
- Cấu hình cookie an toàn
- Cấu hình CORS
- Yêu cầu về độ mạnh mật khẩu
- Bảo mật phiên làm việc

### Di cư cơ sở dữ liệu (Database Migrations)

Sau khi thêm các plugin:
```bash
npx @better-auth/cli generate
npx @better-auth/cli migrate
```

## Plugins

### Các plugin có sẵn

- **twoFactor** - TOTP 2FA
- **username** - Xác thực bằng tên người dùng
- **magicLink** - Email không mật khẩu
- **passkey** - Sinh trắc học WebAuthn
- **organization** - Đa người dùng/tổ chức
- **emailOTP** - Mật khẩu một lần
- **anonymous** - Người dùng khách

### Thêm Plugin

```
"Sử dụng better-auth để thêm các plugin này:
- Xác thực hai yếu tố
- Hỗ trợ tổ chức (Organization)
- Đăng nhập bằng Magic link"
```

## Xử lý sự cố

### Các vấn đề thường gặp

**"Unable to find auth instance"**
- Kiểm tra vị trí file auth.ts (gốc, lib/, utils/)
- Xác minh tên xuất (export name)

**Lỗi kết nối cơ sở dữ liệu**
- Xác minh thông tin đăng nhập
- Kiểm tra cơ sở dữ liệu đang chạy
- Đảm bảo adapter chính xác

**Lỗi CORS**
- Cấu hình corsOptions
- Khớp URL client/server

## Tài nguyên

- [Tài liệu chính thức](https://www.better-auth.com/docs)
- [GitHub](https://github.com/better-auth/better-auth)
- [Plugins](https://www.better-auth.com/docs/plugins)
- [Ví dụ](https://www.better-auth.com/docs/examples)

## Các ví dụ nhanh

**Thiết lập tối giản:**
```
"Sử dụng better-auth để xác thực email/mật khẩu cơ bản với SQLite"
```

**Thiết lập môi trường sản xuất:**
```
"Sử dụng better-auth cho môi trường sản xuất với:
- GitHub + Google OAuth
- Xác minh email
- Hỗ trợ 2FA
- PostgreSQL
- Giới hạn tốc độ
- Xử lý lỗi đúng cách"
```

**Thiết lập doanh nghiệp:**
```
"Sử dụng better-auth cho ứng dụng doanh nghiệp với:
- Đa tổ chức (Multi-tenancy)
- Tích hợp SSO
- Phân quyền dựa trên vai trò (RBAC)
- Nhật ký kiểm tra (Audit logging)
- Quản lý phiên làm việc tùy chỉnh"
```

## Bước tiếp theo

- [Ví dụ xác thực](/docs/use-cases/)
- [Kỹ năng cơ sở dữ liệu](/docs/engineer/skills/postgresql-psql)
- [Tích hợp Next.js](/docs/engineer/skills/nextjs)

---

**Tóm lại:** better-auth cung cấp giải pháp xác thực sẵn sàng cho môi trường sản xuất, hoạt động với mọi framework TypeScript. Chỉ cần gọi kỹ năng và mô tả các yêu cầu xác thực của bạn.
