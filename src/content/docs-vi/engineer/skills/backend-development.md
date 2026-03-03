---
title: "ck:backend-development"
description: Xây dựng hệ thống backend production-ready với công nghệ hiện đại, best practices bảo mật và các patterns có khả năng mở rộng
section: engineer
kit: engineer
category: skills/backend
order: 50
published: true
lang: vi
---

# Backend Development Skill

Xây dựng hệ thống backend production-ready với công nghệ hiện đại, best practices bảo mật và các patterns mở rộng đã được chứng minh.

## Khi Nào Dùng

- Thiết kế RESTful, GraphQL, hoặc gRPC APIs
- Xây dựng hệ thống authentication/authorization
- Tối ưu hóa database queries và schemas
- Implement caching và performance optimization
- Giảm thiểu rủi ro theo OWASP Top 10
- Thiết kế microservices có khả năng mở rộng
- Chiến lược testing (unit, integration, E2E)
- CI/CD pipelines và deployment

## Quick Start

```typescript
// NestJS API với security cơ bản
import { hash, verify } from 'argon2';
import { Controller, Get, Post, UseGuards } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post('register')
  async register(@Body() dto: CreateUserDto) {
    const hashedPassword = await hash(dto.password);
    return this.userService.create({ ...dto, password: hashedPassword });
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@CurrentUser() user: User) {
    return user;
  }
}
```

## Các Use Case Phổ Biến

### RESTful API với Authentication
**Đối tượng**: Startup xây dựng MVP backend
```
"Build a REST API with user registration, JWT authentication, and protected routes.
Use PostgreSQL with Prisma ORM. Add rate limiting and input validation."
```

### Kiến Trúc Microservices
**Đối tượng**: Team doanh nghiệp scale monolith
```
"Design microservices for orders, payments, and inventory.
Use gRPC for internal communication, Kafka for events, Redis for caching."
```

### Tối Ưu Hiệu Năng
**Đối tượng**: SaaS product gặp vấn đề scaling
```
"Database queries are slow. Add Redis caching, optimize N+1 queries,
create proper indexes, and implement connection pooling."
```

### Tăng Cường Bảo Mật
**Đối tượng**: Fintech đảm bảo tuân thủ
```
"Audit backend for OWASP Top 10. Implement Argon2id passwords,
parameterized queries, OAuth 2.1, rate limiting, and security headers."
```

### Chiến Lược Testing
**Đối tượng**: Team có bugs production
```
"Set up testing pyramid: 70% unit tests (Vitest), 20% integration (API contracts),
10% E2E (critical paths). Add CI/CD test automation."
```

## So Sánh Chính

| Ngôn Ngữ | Phù Hợp Nhất | Hiệu Năng | Ecosystem |
|----------|--------------|-----------|-----------|
| **Node.js** | Full-stack, phát triển nhanh | Tốt (async) | Lớn nhất (npm) |
| **Python** | Tích hợp Data/ML | Trung bình | Phong phú (PyPI) |
| **Go** | Concurrency, cloud | Xuất sắc | Đang tăng trưởng |
| **Rust** | Hiệu năng tối đa | Tốt nhất | Chuyên biệt |

| Database | Use Case | Transactions | Schema |
|----------|----------|--------------|--------|
| **PostgreSQL** | ACID-critical | Mạnh | Cứng nhắc |
| **MongoDB** | Dữ liệu linh hoạt | Giới hạn | Schema-less |
| **Redis** | Caching, sessions | Không có | Key-value |

## Quick Reference

### Security Essentials
```typescript
// Argon2id (không dùng bcrypt)
import { hash, verify } from 'argon2';
const hashed = await hash(password);

// Parameterized queries (giảm 98% SQL injection)
db.query('SELECT * FROM users WHERE id = $1', [userId]);

// Rate limiting
@UseGuards(ThrottlerGuard)
@Throttle({ default: { limit: 10, ttl: 60000 } })
```

### Caching Pattern
```typescript
// Redis caching (giảm 90% DB load)
const cached = await redis.get(`user:${id}`);
if (cached) return JSON.parse(cached);

const user = await db.findUser(id);
await redis.setex(`user:${id}`, 3600, JSON.stringify(user));
```

### Testing Commands
```bash
# Vitest (nhanh hơn Jest 50%)
npm install -D vitest
npx vitest run                # Chạy tests một lần
npx vitest watch              # Watch mode
npx vitest --coverage         # Với coverage
```

### Docker Deployment
```dockerfile
# Multi-stage build (giảm size 50-80%)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build

FROM node:20-alpine
USER node
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/main.js"]
```

## Pro Tips

- **70-20-10 testing pyramid**: 70% unit, 20% integration, 10% E2E
- **Database indexing**: Giảm 30% I/O trên các columns có traffic cao
- **Connection pooling**: Ngăn chặn cạn kiệt kết nối database
- **Feature flags**: Giảm 90% deployment failures
- **Blue-green deployments**: Releases không downtime
- **OpenTelemetry**: Distributed tracing qua microservices
- **Không kích hoạt?** Nói: "Use the backend-development skill to..."

## Các Skills Liên Quan

- [Databases](/vi/docs/engineer/skills/databases) - Tìm hiểu sâu về PostgreSQL, MongoDB
- [DevOps](/vi/docs/engineer/skills/devops) - Docker, Kubernetes, cloud deployment
- [Better Auth](/vi/docs/engineer/skills/better-auth) - Implement authentication

---

## Điểm Mấu Chốt

Backend development năm 2025 ưu tiên bảo mật (Argon2id, parameterized queries), hiệu năng (Redis, indexing) và độ tin cậy (testing pyramid, feature flags) với các frameworks hiện đại như NestJS, FastAPI và Gin.
