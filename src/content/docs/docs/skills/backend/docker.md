---
title: docker
description: "Documentation for docker
description:
section: docs
category: skills/backend
order: 11
published: true"
section: docs
category: skills/backend
order: 11
published: true
---

# docker

Containerize applications with production-ready Dockerfiles, multi-stage builds, and Docker Compose orchestration.

## When to Use

- **Containerize apps**: Create optimized Dockerfiles for any language/framework
- **Multi-container setups**: Orchestrate services with Docker Compose
- **Dev/prod parity**: Consistent environments across local/staging/production
- **CI/CD integration**: Build, test, and deploy containerized workflows

## Quick Start

```bash
# Build multi-stage Dockerfile
docker build -t myapp:1.0 .

# Run with Docker Compose
docker compose up -d

# View logs
docker compose logs -f
```

## Common Use Cases

### 1. Containerize Node.js App
**Who**: Full-stack dev deploying Next.js app to VPS
**Prompt**: "Use docker to create production Dockerfile for Next.js 14 with multi-stage build, Node 20 Alpine, non-root user, and health checks"

### 2. Multi-Service Stack
**Who**: Backend dev setting up API + database locally
**Prompt**: "Use docker to create Docker Compose with FastAPI, PostgreSQL, Redis, and Nginx reverse proxy"

### 3. Optimize Existing Image
**Who**: DevOps engineer reducing CI build time
**Prompt**: "Use docker to optimize this Dockerfile—reduce image size, improve layer caching, add security hardening"

### 4. Development Environment
**Who**: Team lead standardizing local dev setup
**Prompt**: "Use docker to create dev Docker Compose with hot reload, volume mounts, seed data, and debug config"

### 5. Production Deployment
**Who**: SRE preparing container for Kubernetes
**Prompt**: "Use docker for production: health checks, resource limits, logging, secrets management, and vulnerability scan"

## Key Differences

| Feature | Development | Production |
|---------|-------------|------------|
| **Base image** | Standard (node:20) | Alpine (node:20-alpine) |
| **Build** | Single-stage | Multi-stage |
| **Volumes** | Bind mounts (hot reload) | Named volumes only |
| **User** | root (convenience) | Non-root (security) |
| **Health checks** | Optional | Required |
| **Resource limits** | None | CPU/memory caps |

## Quick Reference

### Essential Commands
```bash
# Build & run
docker build -t app:1.0 .
docker run -d -p 8080:3000 app:1.0

# Compose lifecycle
docker compose up -d          # Start
docker compose logs -f web    # Logs
docker compose restart web    # Restart
docker compose down --volumes # Clean up

# Debugging
docker exec -it container sh
docker logs -f container
docker inspect container

# Cleanup
docker system prune -a
docker volume prune
```

### Multi-Stage Template
```dockerfile
# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
USER node
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

### Docker Compose Template
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      DATABASE_URL: postgresql://user:pass@db:5432/app
  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:
```

## Pro Tips

- **Multi-stage builds**: Reduce image size by 60-80% (keeps build tools out of production)
- **Layer caching**: Copy `package*.json` before source code for faster rebuilds
- **Security**: Always run as non-root user, pin specific versions, scan with `docker scout cves`
- **.dockerignore**: Exclude `node_modules`, `.git`, `.env` to speed builds
- **Health checks**: Add `/health` endpoint for container orchestrators
- **Resource limits**: Set memory/CPU caps in production to prevent runaway containers
- **Alpine images**: Use `-alpine` variants (5-10x smaller than standard images)

**Not activating?** Say: "Use docker skill to containerize my app"

## Related Skills

- [/docs/skills/backend/devops](/docs/skills/backend/devops) - Cloudflare Workers, GCP, deployment strategies
- [/docs/skills/backend/databases](/docs/skills/backend/databases) - PostgreSQL, MongoDB containerization
- [/docs/skills/backend/backend-development](/docs/skills/backend/backend-development) - Node.js, Python, Go backends

## Key Takeaway

Docker skill creates production-ready containers with security hardening, optimized builds, and multi-service orchestration. Just describe your stack—get Dockerfiles, Compose configs, and best practices instantly.
