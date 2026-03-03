---
title: "ckm:devops"
description: "Deploy marketing tools to Cloudflare, Docker, GCP with CI/CD pipelines, environment management, and security hardening."
section: marketing
category: skills
order: 74
---

# Devops

> Deploy marketing tools reliably with CI/CD, infrastructure-as-code, and production-grade security across Cloudflare, Docker, and GCP.

## What This Skill Does

**The Challenge**: Marketing teams build great tools that break in production due to missing environment variables, zero-downtime deployment gaps, or improperly secured APIs. DevOps knowledge is often the last mile before a marketing tool actually delivers value.

**The Solution**: DevOps skill provides deployment patterns for Cloudflare Pages/Workers, Docker containers, GCP Cloud Run, and GitHub Actions CI/CD. Includes environment management, secrets handling, health checks, and rollback strategies.

## Activation

**Implicit**: Activates when user requests deployment, hosting, CI/CD, Docker, or infrastructure configuration.

**Explicit**: Activate via prompt:
```
Activate devops skill to deploy [application] to [platform]
```

## Capabilities

### 1. Platform Deployment Patterns

**Cloudflare Pages (static sites)**:
```bash
# wrangler.toml
name = "marketing-site"
compatibility_date = "2026-01-01"

[build]
command = "bun run build"
directory = "dist"
```

**Cloudflare Workers (API/webhooks)**:
```bash
npx wrangler deploy
```

**Docker + Cloud Run (backend services)**:
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 8080
CMD ["node", "dist/index.js"]
```

### 2. GitHub Actions CI/CD
Automated test, build, and deploy pipeline.

**`.github/workflows/deploy.yml`**:
```yaml
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm test && npm run build
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CF_API_TOKEN }}
```

### 3. Environment Management
Structured approach to env vars across environments.

**Environment tiers**: `local` → `staging` → `production`

**Secret storage**:
- Local: `.env` (gitignored)
- CI/CD: GitHub Actions Secrets
- Production: Cloudflare Secrets / GCP Secret Manager

### 4. Health Checks and Monitoring
Verify deployments and catch issues before users do.

**Health endpoint pattern**:
```typescript
app.get("/health", (req, res) =>
  res.json({ status: "ok", version: process.env.VERSION, uptime: process.uptime() })
);
```

## Prerequisites

- GitHub repository
- Platform account: Cloudflare, GCP, or AWS
- Docker Desktop (for container builds)
- `wrangler` CLI or `gcloud` SDK

## Best Practices

**1. Never commit secrets**
Use `.env.example` with placeholder values. Real values go in secrets manager.

**2. Test deployment pipeline on staging first**
Staging should mirror production exactly. Validate every config change there first.

**3. Implement health checks**
Every deployed service needs `/health` endpoint. Enables load balancer routing and alerting.

## Common Use Cases

### Use Case 1: Deploy Marketing Dashboard to Cloudflare
**Scenario**: Deploy Next.js marketing dashboard with API routes.

**Workflow**:
1. Configure `wrangler.toml` for Pages + Workers
2. Set up GitHub Actions for automatic deploys on push to `main`
3. Add Cloudflare Secrets for API keys
4. Configure custom domain
5. Set up Cloudflare Analytics for performance monitoring

### Use Case 2: Containerize Lead Enrichment Service
**Scenario**: Python FastAPI service for lead enrichment needs container deployment.

**Workflow**:
1. Write Dockerfile with multi-stage build
2. Test container locally: `docker build -t lead-service . && docker run -p 8080:8080 lead-service`
3. Push to Google Artifact Registry
4. Deploy to Cloud Run with auto-scaling (0-10 instances)
5. Set secrets via Secret Manager

## Troubleshooting

**Issue**: Deployment succeeds but app returns 500 errors
**Solution**: Check application logs (Cloudflare Logs, Cloud Run logs). Usually missing env var.

**Issue**: Docker build fails in CI but works locally
**Solution**: Check platform architecture (ARM Mac vs x86 CI). Use `--platform linux/amd64` flag.

## Related Skills

- [Backend Development](/docs/marketing/skills/backend-development) - Services to deploy
- [Databases](/docs/marketing/skills/databases) - Database infrastructure
- [Claude Code](/docs/marketing/skills/claude-code) - CI/CD for Claude Code workflows
- [Debugging](/docs/marketing/skills/debugging) - Production debugging

## Related Commands

- `/ckm:plan` - Plan deployment strategy
- `/ckm:brainstorm` - Evaluate hosting options
