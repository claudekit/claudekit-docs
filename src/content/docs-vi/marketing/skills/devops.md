---
lang: vi
title: "ckm:devops"
description: "Triển khai lên Cloudflare, Docker, GCP với CI/CD"
section: marketing
kit: marketing
category: skills
order: 74
---

> Deploy marketing tools lên production nhanh chóng và đáng tin cậy với Cloudflare, Docker và GCP.

## Skill Này Làm Gì

**Thách thức**: Marketing tools cần uptime cao, deploy nhanh và khả năng rollback khi có lỗi. Setup infrastructure từ đầu phức tạp và mất thời gian.

**Giải pháp**: Skill devops cung cấp templates và hướng dẫn deploy cho các platforms phổ biến — Cloudflare Pages/Workers, Docker containers, GCP Cloud Run — với CI/CD pipeline tự động.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi cần deploy, setup CI/CD hoặc configure infrastructure.

**Tường minh**: Kích hoạt qua prompt:
```
Activate devops skill to deploy [app] to [platform]
```

## Tính Năng

### 1. Cloudflare Deployment

**Cloudflare Pages** (static sites, Next.js, Astro):
```bash
# Cài đặt Wrangler CLI
npm install -g wrangler
wrangler login

# Deploy Next.js app
wrangler pages deploy .next/out --project-name my-marketing-site

# Hoặc dùng Git integration
# 1. Kết nối GitHub repo trong Cloudflare Dashboard
# 2. Tự động deploy khi push lên main
```

**Cloudflare Workers** (serverless APIs):
```javascript
// worker.js
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/leads') {
      const body = await request.json();
      await env.DB.prepare(
        'INSERT INTO leads (email, source) VALUES (?, ?)'
      ).bind(body.email, body.source).run();

      return Response.json({ success: true });
    }

    return new Response('Not Found', { status: 404 });
  }
};
```

```bash
# Deploy worker
wrangler deploy
```

### 2. Docker Setup

**Multi-stage Dockerfile cho Node.js**:
```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

**Docker Compose cho local development**:
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://postgres:password@db:5432/marketing
      REDIS_URL: redis://redis:6379
    depends_on:
      - db
      - redis

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_DB: marketing
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

### 3. GCP Cloud Run

**Deploy container lên Cloud Run**:
```bash
# Build và push image
gcloud builds submit --tag gcr.io/PROJECT_ID/marketing-api

# Deploy lên Cloud Run
gcloud run deploy marketing-api \
  --image gcr.io/PROJECT_ID/marketing-api \
  --platform managed \
  --region asia-southeast1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --concurrency 100 \
  --min-instances 0 \
  --max-instances 10 \
  --set-env-vars DATABASE_URL=$$DATABASE_URL
```

### 4. CI/CD Pipeline

**GitHub Actions workflow**:
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CF_API_TOKEN }}
          accountId: ${{ secrets.CF_ACCOUNT_ID }}
          projectName: marketing-site
          directory: out
```

### 5. Environment Management

**Secrets management**:
```bash
# Cloudflare Workers secrets
wrangler secret put DATABASE_URL
wrangler secret put STRIPE_SECRET_KEY

# GCP Secret Manager
gcloud secrets create db-password --replication-policy="automatic"
echo -n "my-password" | gcloud secrets versions add db-password --data-file=-

# Access trong Cloud Run
gcloud run deploy --update-secrets DATABASE_URL=db-password:latest
```

## Điều Kiện Tiên Quyết

- Git repo với code sẵn sàng deploy
- Accounts: Cloudflare, GCP, hoặc AWS (tùy platform)
- Docker Desktop (cho local testing)

## Cấu Hình

**Environment variables per environment**:
```
.env.local        # Local development
.env.staging      # Staging environment
.env.production   # Production (không commit!)
```

**Deployment checklist**:
- [ ] Environment variables đã set
- [ ] Database migrations đã chạy
- [ ] Health check endpoint hoạt động
- [ ] Monitoring và alerting đã setup
- [ ] Rollback plan đã có

## Thực Hành Tốt Nhất

**1. Zero-Downtime Deployments**
Dùng rolling deployments hoặc blue-green deployment. Không deploy trực tiếp lên production trong giờ cao điểm.

**2. Automatic Rollback**
Setup health checks để tự động rollback nếu deploy mới fail.

**3. Secrets Trong Vault, Không Trong Code**
Không bao giờ commit secrets. Dùng secret manager của platform hoặc Doppler/Vault.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Marketing Landing Page
**Tình huống**: Deploy static marketing site với form capture.

**Stack**: Astro → Cloudflare Pages + Cloudflare Worker (form handler)
**Deploy time**: < 2 phút
**Cost**: Free tier đủ cho hầu hết traffic

### Trường Hợp 2: Full-Stack Marketing Tool
**Tình huống**: Deploy Next.js app với PostgreSQL backend.

**Stack**: Next.js → Vercel, PostgreSQL → Railway, Redis → Upstash
**Deploy time**: < 5 phút via GitHub Actions

## Xử Lý Sự Cố

**Vấn đề**: Deploy fail silently
**Giải pháp**: Kiểm tra deployment logs chi tiết. Mọi platform đều có build/deploy logs.

**Vấn đề**: Container crash ngay sau khi start
**Giải pháp**: Test Docker image locally trước: `docker run -it --rm image-name sh`

## Skill Liên Quan

- [Backend Development](/vi/docs/marketing/skills/backend-development) - Code cần deploy
- [Databases](/vi/docs/marketing/skills/databases) - Database migrations khi deploy
- [Debugging](/vi/docs/marketing/skills/debugging) - Debug production issues

## Lệnh Liên Quan

- `/ckm:devops` - Deploy và infrastructure
- `/ckm:backend-development` - Backend code
- `/ckm:debugging` - Debug production issues
