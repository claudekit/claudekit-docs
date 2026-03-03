---
title: "ckm:backend-development"
description: "Build backend systems with Node.js, Python, Go, NestJS, FastAPI, Django for marketing tools, APIs, and data pipelines."
section: marketing
category: skills
order: 62
---

> Build production-grade backend systems and APIs to power marketing automations, data pipelines, and custom tools.

## What This Skill Does

**The Challenge**: Marketing teams increasingly need custom backend systems — webhook handlers, data pipelines, lead enrichment APIs, and integration services — but lack consistent patterns for building reliable, maintainable code.

**The Solution**: Backend Development skill provides opinionated patterns for Node.js, Python, Go, NestJS, FastAPI, and Django. Covers REST API design, database integration, authentication, error handling, and deployment-ready configuration.

## Activation

**Implicit**: Activates when user requests API endpoints, server-side logic, database schemas, or backend service design.

**Explicit**: Activate via prompt:
```
Activate backend-development skill to build [describe system]
```

## Capabilities

### 1. Framework Patterns
Production-ready starter patterns per framework.

**Supported stacks**:
| Framework | Language | Best For |
|-----------|----------|----------|
| NestJS | TypeScript | Enterprise APIs, microservices |
| FastAPI | Python | ML integrations, data APIs |
| Django | Python | CMS, admin panels, full-stack |
| Express/Hono | TypeScript | Lightweight APIs, webhooks |
| Go (Gin) | Go | High-throughput, low-latency |

### 2. REST API Design
Consistent endpoint patterns with validation and error responses.

**Standard response format**:
```typescript
// Success
{ success: true, data: T, meta?: { page, total } }

// Error
{ success: false, error: { code, message, details? } }
```

### 3. Database Integration
ORM patterns for PostgreSQL and MongoDB.

**Prisma (PostgreSQL)**:
```bash
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
```

**Mongoose (MongoDB)**:
```typescript
const LeadSchema = new Schema({
  email: { type: String, required: true, unique: true },
  source: String,
  createdAt: { type: Date, default: Date.now },
});
```

### 4. Authentication & Security
JWT, API key, and OAuth2 patterns ready to integrate.

**Middleware chain**: Rate limit → Authenticate → Authorize → Validate → Handle

## Prerequisites

- Node.js 20+ / Python 3.11+ / Go 1.22+
- PostgreSQL or MongoDB instance
- `.env` file with `DATABASE_URL`, `JWT_SECRET`

## Best Practices

**1. Validate at the boundary**
Use Zod (TS) or Pydantic (Python) for all incoming data. Never trust raw input.

**2. Return consistent error shapes**
Standardize error codes so frontends can handle responses predictably.

**3. Log structured JSON**
Use `pino` (Node) or `structlog` (Python) for machine-readable logs in production.

## Common Use Cases

### Use Case 1: Webhook Handler for Lead Enrichment
**Scenario**: Receive form submissions, enrich with Clearbit, store in PostgreSQL.

**Stack**: Hono + Prisma + PostgreSQL

**Workflow**:
1. POST `/webhooks/leads` validates payload with Zod
2. Enrich email via Clearbit API
3. Upsert lead in database
4. Trigger email sequence via Resend API
5. Return 200 within 3 seconds (async enrichment)

### Use Case 2: Analytics Aggregation API
**Scenario**: Pull GA4 + ad platform data, return unified metrics.

**Stack**: FastAPI + SQLAlchemy + PostgreSQL

**Endpoints**:
- `GET /metrics/overview?period=30d`
- `GET /metrics/channels?start=2026-01-01&end=2026-03-01`
- `GET /metrics/campaigns/{id}/performance`

## Troubleshooting

**Issue**: API responses too slow under load
**Solution**: Add database connection pooling (PgBouncer or Prisma pool config). Cache frequent queries with Redis.

**Issue**: Environment variables not loading in production
**Solution**: Validate required env vars on startup with a config module. Fail fast if missing.

## Related Skills

- [Databases](/docs/marketing/skills/databases) - Schema design and query optimization
- [DevOps](/docs/marketing/skills/devops) - Deploy backend services
- [Frontend Development](/docs/marketing/skills/frontend-development) - Frontend to connect to this API
- [Debugging](/docs/marketing/skills/debugging) - Debug backend issues

## Related Commands

- `/ckm:plan` - Plan backend architecture
- `/ckm:brainstorm` - Explore technical approaches
