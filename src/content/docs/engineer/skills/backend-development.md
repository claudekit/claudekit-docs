---
title: Backend Development Skill
description: Build production-ready backend systems with modern technologies, security best practices, and scalable patterns
section: engineer
kit: engineer
category: skills/backend
order: 3
published: true
---

# Backend Development Skill

Build production-ready backend systems with modern technologies, security best practices, and proven scalability patterns.

## When to Use

- Designing RESTful, GraphQL, or gRPC APIs
- Building authentication/authorization systems
- Optimizing database queries and schemas
- Implementing caching and performance optimization
- OWASP Top 10 security mitigation
- Designing scalable microservices
- Testing strategies (unit, integration, E2E)
- CI/CD pipelines and deployment

## Quick Start

```typescript
// NestJS API with security basics
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

### RESTful API with Authentication
**Who**: Startup building MVP backend
```
"Build a REST API with user registration, JWT authentication, and protected routes.
Use PostgreSQL with Prisma ORM. Add rate limiting and input validation."
```

### Microservices Architecture
**Who**: Enterprise team scaling monolith
```
"Design microservices for orders, payments, and inventory.
Use gRPC for internal communication, Kafka for events, Redis for caching."
```

### Performance Optimization
**Who**: SaaS product with scaling issues
```
"Database queries are slow. Add Redis caching, optimize N+1 queries,
create proper indexes, and implement connection pooling."
```

### Security Hardening
**Who**: Fintech ensuring compliance
```
"Audit backend for OWASP Top 10. Implement Argon2id passwords,
parameterized queries, OAuth 2.1, rate limiting, and security headers."
```

### Testing Strategy
**Who**: Team with production bugs
```
"Set up testing pyramid: 70% unit tests (Vitest), 20% integration (API contracts),
10% E2E (critical paths). Add CI/CD test automation."
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
// Argon2id (not bcrypt)
import { hash, verify } from 'argon2';
const hashed = await hash(password);

// Parameterized queries (98% SQL injection reduction)
db.query('SELECT * FROM users WHERE id = $1', [userId]);

// Rate limiting
@UseGuards(ThrottlerGuard)
@Throttle({ default: { limit: 10, ttl: 60000 } })
```

### Caching Pattern
```typescript
// Redis caching (90% DB load reduction)
const cached = await redis.get(`user:${id}`);
if (cached) return JSON.parse(cached);

const user = await db.findUser(id);
await redis.setex(`user:${id}`, 3600, JSON.stringify(user));
```

### Testing Commands
```bash
# Vitest (50% faster than Jest)
npm install -D vitest
npx vitest run                # Run tests once
npx vitest watch              # Watch mode
npx vitest --coverage         # With coverage
```

### Docker Deployment
```dockerfile
# Multi-stage build (50-80% size reduction)
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
- **Database indexing**: 30% I/O reduction on high-traffic columns
- **Connection pooling**: Prevent database connection exhaustion
- **Feature flags**: 90% fewer deployment failures
- **Blue-green deployments**: Zero-downtime releases
- **OpenTelemetry**: Distributed tracing across microservices
- **Not activating?** Say: "Use the backend-development skill to..."

## Related Skills

- [Databases](/docs/skills/backend/databases) - PostgreSQL, MongoDB deep-dive
- [DevOps](/docs/skills/backend/devops) - Docker, Kubernetes, cloud deployment
- [Better Auth](/docs/skills/auth/better-auth) - Authentication implementation

---

## Key Takeaway

 Backend development in 2025 prioritizes security (Argon2id, parameterized queries), performance (Redis, indexing), and reliability (testing pyramid, feature flags) with modern frameworks like NestJS, FastAPI, and Gin.
