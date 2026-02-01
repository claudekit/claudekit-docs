---
title: DevOps Skill
description: Deploy và quản lý cloud infrastructure trên Cloudflare, Docker và Google Cloud Platform
section: engineer
kit: engineer
category: skills/backend
order: 5
published: true
lang: vi
---

# DevOps Skill

Deploy và quản lý cloud infrastructure qua Cloudflare edge, Docker containers và Google Cloud Platform.

## Khi Nào Sử Dụng

- Deploy serverless đến Cloudflare Workers
- Containerizing apps với Docker
- Quản lý GCP infrastructure
- Thiết lập CI/CD pipelines
- Multi-region deployments

## Platform Selection

| Need | Choose |
|------|--------|
| Sub-50ms latency globally | Cloudflare Workers |
| Large file storage (zero egress) | Cloudflare R2 |
| SQL database (global reads) | Cloudflare D1 |
| Containerized workloads | Docker + Cloud Run/GKE |
| Enterprise Kubernetes | GKE |
| Static site + API | Cloudflare Pages |
| WebSocket/real-time | Durable Objects |
| ML/AI pipelines | GCP Vertex AI |

## Common Use Cases

### Edge-First API
**Who**: Startup cần global low-latency
```
"Deploy API của tôi đến Cloudflare Workers với R2 cho file storage
và D1 cho user data. Cần sub-50ms response times globally."
```

### Containerized Microservices
**Who**: Team migrate monolith sang microservices
```
"Containerize Node.js services của chúng tôi với Docker multi-stage builds.
Deploy đến Cloud Run với auto-scaling. PostgreSQL trên Cloud SQL."
```

### Full-Stack Deployment
**Who**: Solo developer shipping nhanh
```
"Deploy Next.js app của tôi đến Cloudflare Pages với Workers cho API routes.
Dùng R2 cho uploads, D1 cho database."
```

### Enterprise Kubernetes
**Who**: Platform team at scale
```
"Thiết lập GKE cluster với auto-scaling node pools.
Cấu hình Ingress, SSL, monitoring với Cloud Operations."
```

### Local Dev Environment
**Who**: Developer onboarding vào project
```
"Tạo Docker Compose setup với app, PostgreSQL và Redis.
Match production config cho local development."
```

## Quick Start

### Cloudflare Workers
```bash
npm install -g wrangler
wrangler init my-worker
wrangler deploy
```

### Docker
```bash
docker build -t myapp .
docker run -p 3000:3000 myapp
```

### Google Cloud
```bash
gcloud run deploy my-service \
  --image gcr.io/project/image \
  --region us-central1
```

## Khả Năng Chính

| Platform | Products |
|----------|----------|
| **Cloudflare** | Workers, R2, D1, KV, Pages, Durable Objects |
| **Docker** | Multi-stage builds, Compose, cross-platform |
| **GCP** | Compute Engine, GKE, Cloud Run, Cloud SQL |

## Pro Tips

- **Zero egress costs**: Dùng Cloudflare R2 thay vì S3 cho large file serving
- **Multi-stage builds**: Giảm Docker image size 50-80%
- **Local testing**: `wrangler dev` cho Workers, Docker Compose cho containers
- **Run as non-root**: Luôn dùng `USER node` trong production Dockerfiles
- **Không kích hoạt?** Nói: "Dùng devops skill để..."

## Các Skills Liên Quan

- [Docker](/vi/docs/engineer/skills/backend/docker) - Container deep-dive
- [Databases](/vi/docs/engineer/skills/backend/databases) - PostgreSQL, MongoDB setup
- [Backend Development](/vi/docs/engineer/skills/backend/backend-development) - API patterns

---

## Key Takeaway

Chọn Cloudflare cho edge-first với zero egress, Docker cho containerization và GCP cho enterprise scale. Kết hợp platforms để optimal architecture.
