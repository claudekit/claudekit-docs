---
title: DevOps Skill
description: Deploy and manage cloud infrastructure on Cloudflare, Docker, and Google Cloud Platform
section: engineer
kit: engineer
category: skills/backend
order: 5
published: true
---

# DevOps Skill

Deploy and manage cloud infrastructure across Cloudflare edge, Docker containers, and Google Cloud Platform.

## When to Use

- Deploying serverless to Cloudflare Workers
- Containerizing apps with Docker
- Managing GCP infrastructure
- Setting up CI/CD pipelines
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
**Who**: Startup needing global low-latency
```
"Deploy my API to Cloudflare Workers with R2 for file storage
and D1 for user data. Need sub-50ms response times globally."
```

### Containerized Microservices
**Who**: Team migrating monolith to microservices
```
"Containerize our Node.js services with Docker multi-stage builds.
Deploy to Cloud Run with auto-scaling. PostgreSQL on Cloud SQL."
```

### Full-Stack Deployment
**Who**: Solo developer shipping fast
```
"Deploy my Next.js app to Cloudflare Pages with Workers for API routes.
Use R2 for uploads, D1 for database."
```

### Enterprise Kubernetes
**Who**: Platform team at scale
```
"Set up GKE cluster with auto-scaling node pools.
Configure Ingress, SSL, monitoring with Cloud Operations."
```

### Local Dev Environment
**Who**: Developer onboarding to project
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

## Key Capabilities

| Platform | Products |
|----------|----------|
| **Cloudflare** | Workers, R2, D1, KV, Pages, Durable Objects |
| **Docker** | Multi-stage builds, Compose, cross-platform |
| **GCP** | Compute Engine, GKE, Cloud Run, Cloud SQL |

## Pro Tips

- **Zero egress costs**: Use Cloudflare R2 instead of S3 for large file serving
- **Multi-stage builds**: Reduce Docker image size by 50-80%
- **Local testing**: `wrangler dev` for Workers, Docker Compose for containers
- **Run as non-root**: Always use `USER node` in production Dockerfiles
- **Not activating?** Say: "Use the devops skill to..."

## Related Skills

- [Docker](/docs/engineer/skills/backend/docker) - Container deep-dive
- [Databases](/docs/engineer/skills/backend/databases) - PostgreSQL, MongoDB setup
- [Backend Development](/docs/engineer/skills/backend/backend-development) - API patterns

---

## Key Takeaway

 Choose Cloudflare for edge-first with zero egress, Docker for containerization, and GCP for enterprise scale. Combine platforms for optimal architecture.
