---
title: "ck:devops"
description: Deploy và quản lý cloud infrastructure trên Cloudflare, Docker và Google Cloud Platform
section: engineer
kit: engineer
category: skills/backend
order: 50
published: true
lang: vi
---

# DevOps Skill

Deploy và quản lý cloud infrastructure qua Cloudflare edge, Docker containers và Google Cloud Platform.

## Khi Nào Dùng

- Deploy serverless lên Cloudflare Workers
- Containerize apps với Docker
- Quản lý GCP infrastructure
- Thiết lập CI/CD pipelines
- Multi-region deployments

## Lựa Chọn Platform

| Nhu Cầu | Chọn |
|---------|------|
| Latency toàn cầu dưới 50ms | Cloudflare Workers |
| Lưu trữ file lớn (không phí egress) | Cloudflare R2 |
| SQL database (global reads) | Cloudflare D1 |
| Containerized workloads | Docker + Cloud Run/GKE |
| Enterprise Kubernetes | GKE |
| Static site + API | Cloudflare Pages |
| WebSocket/real-time | Durable Objects |
| ML/AI pipelines | GCP Vertex AI |

## Các Use Case Phổ Biến

### Edge-First API
**Đối tượng**: Startup cần low-latency toàn cầu
```
"Deploy my API to Cloudflare Workers with R2 for file storage
and D1 for user data. Need sub-50ms response times globally."
```

### Containerized Microservices
**Đối tượng**: Team chuyển đổi monolith sang microservices
```
"Containerize our Node.js services with Docker multi-stage builds.
Deploy to Cloud Run with auto-scaling. PostgreSQL on Cloud SQL."
```

### Full-Stack Deployment
**Đối tượng**: Solo developer ship nhanh
```
"Deploy my Next.js app to Cloudflare Pages with Workers for API routes.
Use R2 for uploads, D1 for database."
```

### Enterprise Kubernetes
**Đối tượng**: Platform team ở quy mô lớn
```
"Set up GKE cluster with auto-scaling node pools.
Configure Ingress, SSL, monitoring with Cloud Operations."
```

### Local Dev Environment
**Đối tượng**: Developer onboarding vào project
```
"Create Docker Compose setup with app, PostgreSQL, and Redis.
Match production config for local development."
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

| Platform | Sản Phẩm |
|----------|----------|
| **Cloudflare** | Workers, R2, D1, KV, Pages, Durable Objects |
| **Docker** | Multi-stage builds, Compose, cross-platform |
| **GCP** | Compute Engine, GKE, Cloud Run, Cloud SQL |

## Pro Tips

- **Không phí egress**: Dùng Cloudflare R2 thay S3 để phục vụ file lớn
- **Multi-stage builds**: Giảm Docker image size 50-80%
- **Local testing**: `wrangler dev` cho Workers, Docker Compose cho containers
- **Chạy non-root**: Luôn dùng `USER node` trong production Dockerfiles
- **Không kích hoạt?** Nói: "Use the devops skill to..."

## Các Skills Liên Quan

- [Docker](/vi/docs/engineer/skills/devops) - Container deep-dive
- [Databases](/vi/docs/engineer/skills/databases) - Cài đặt PostgreSQL, MongoDB
- [Backend Development](/vi/docs/engineer/skills/backend-development) - API patterns

---

## Điểm Mấu Chốt

Chọn Cloudflare cho edge-first với không phí egress, Docker để containerization và GCP cho enterprise scale. Kết hợp các platforms để có kiến trúc tối ưu.
