---
title: Backend Development Skill
description: Xây dựng hệ thống backend production-ready với công nghệ hiện đại, security best practices và scalable patterns
section: engineer
kit: engineer
category: skills/backend
order: 3
published: true
lang: vi
---

# Backend Development Skill

Xây dựng hệ thống backend production-ready với công nghệ hiện đại, security best practices và proven scalability patterns.

## Khi Nào Sử Dụng

- Thiết kế RESTful, GraphQL hoặc gRPC APIs
- Xây dựng hệ thống authentication/authorization
- Tối ưu hóa database queries và schemas
- Implement caching và performance optimization
- OWASP Top 10 security mitigation
- Thiết kế scalable microservices
- Testing strategies (unit, integration, E2E)
- CI/CD pipelines và deployment

## Quick Start

```typescript
// NestJS API với security basics
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

## Common Use Cases

### RESTful API với Authentication
**Who**: Startup xây dựng MVP backend
```
"Xây dựng REST API với user registration, JWT authentication và protected routes.
Dùng PostgreSQL với Prisma ORM. Thêm rate limiting và input validation."
```

### Microservices Architecture
**Who**: Enterprise team scaling monolith
```
"Thiết kế microservices cho orders, payments và inventory.
Dùng gRPC cho internal communication, Kafka cho events, Redis cho caching."
```

### Performance Optimization
**Who**: SaaS product với vấn đề scaling
```
"Database queries chậm. Thêm Redis caching, tối ưu hóa N+1 queries,
tạo proper indexes và implement connection pooling."
```

### Security Hardening
**Who**: Fintech đảm bảo compliance
```
"Audit backend cho OWASP Top 10. Implement Argon2id passwords,
parameterized queries, OAuth 2.1, rate limiting và security headers."
```

### Testing Strategy
**Who**: Team với production bugs
```
"Thiết lập testing pyramid: 70% unit tests (Vitest), 20% integration (API contracts),
10% E2E (critical paths). Thêm CI/CD test automation."
```

## Key Differences

| Language | Best For | Performance | Ecosystem |
|----------|----------|-------------|-----------|
| **Node.js** | Full-stack, rapid dev | Good (async) | Largest (npm) |
| **Python** | Data/ML integration | Moderate | Rich (PyPI) |
| **Go** | Concurrency, cloud | Excellent | Growing |
| **Rust** | Max performance | Best-in-class | Specialized |

| Database | Use Case | Transactions | Schema |
|----------|----------|--------------|--------|
| **PostgreSQL** | ACID-critical | Strong | Rigid |
| **MongoDB** | Flexible data | Limited | Schema-less |
| **Redis** | Caching, sessions | None | Key-value |

## Quick Reference

### Security Essentials
```typescript
// Argon2id (không phải bcrypt)
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
# Multi-stage build (giảm 50-80% size)
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
- **Database indexing**: Giảm 30% I/O trên high-traffic columns
- **Connection pooling**: Ngăn database connection exhaustion
- **Feature flags**: Giảm 90% deployment failures
- **Blue-green deployments**: Zero-downtime releases
- **OpenTelemetry**: Distributed tracing qua microservices
- **Không kích hoạt?** Nói: "Dùng backend-development skill để..."

## Các Skills Liên Quan

- [Databases](/vi/docs/engineer/skills/backend/databases) - PostgreSQL, MongoDB deep-dive
- [DevOps](/vi/docs/engineer/skills/backend/devops) - Docker, Kubernetes, cloud deployment
- [Better Auth](/vi/docs/engineer/skills/auth/better-auth) - Authentication implementation

---

## Key Takeaway

Backend development năm 2025 ưu tiên security (Argon2id, parameterized queries), performance (Redis, indexing) và reliability (testing pyramid, feature flags) với các frameworks hiện đại như NestJS, FastAPI và Gin.
