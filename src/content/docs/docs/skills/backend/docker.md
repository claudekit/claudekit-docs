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

# docker Skill

Containerization platform for building, running, and deploying applications in isolated containers. Works with any language or framework.

## When to Use

Use docker when you need:
- Containerize applications
- Create Dockerfiles
- Set up Docker Compose
- Deploy to production
- Consistent dev environments
- CI/CD pipelines
- Microservices architecture

## Quick Start

### Invoke the Skill

```
"Use docker to containerize my Node.js app with:
- Production Dockerfile
- Docker Compose with PostgreSQL
- Health checks"
```

### What You Get

The skill will help you:
1. Create optimized Dockerfile
2. Set up Docker Compose
3. Configure networking
4. Add health checks
5. Implement security best practices
6. Optimize for production
7. Set up CI/CD integration

## Common Use Cases

### Create Production Dockerfile

```
"Use docker to create production Dockerfile for Next.js 14 app with:
- Multi-stage build
- Node 20 Alpine
- Non-root user
- Security hardening"
```

### Docker Compose Setup

```
"Use docker to set up Docker Compose with:
- Web application
- PostgreSQL database
- Redis cache
- Nginx reverse proxy"
```

### Development Environment

```
"Use docker to create development environment with:
- Hot reload
- Volume mounts
- Database seed data
- Debug configuration"
```

### Production Deployment

```
"Use docker to prepare for production:
- Optimize image size
- Add health checks
- Configure resource limits
- Set up logging
- Implement secrets management"
```

## Key Concepts

### Containers

Lightweight, isolated processes that bundle app with dependencies:
- Filesystem isolation
- Process isolation
- Network isolation
- Ephemeral by default

### Images

Blueprint for containers:
- Layered filesystem
- Immutable layers
- Reusable across containers
- Stored in registries

### Volumes

Persistent storage:
- Survives container deletion
- Share data between containers
- Managed by Docker

### Networks

Container communication:
- Isolated networks
- Service discovery
- Port mapping

## Example Implementations

### Node.js Application

```
"Use docker to containerize Node.js API with:
- Multi-stage build
- Production dependencies only
- PM2 process manager
- Health endpoint"
```

### Python Application

```
"Use docker to containerize FastAPI app with:
- Python 3.11 slim
- Virtual environment
- Gunicorn server
- Non-root user"
```

### Full Stack Application

```
"Use docker to set up full stack with:
- React frontend (Nginx)
- Node.js API
- PostgreSQL
- Redis
- Shared network"
```

### Microservices

```
"Use docker to create microservices setup:
- Multiple services
- Service mesh
- Load balancing
- Centralized logging"
```

## Best Practices

### Multi-Stage Builds

Separate build from runtime:
- Smaller final image
- No build tools in production
- Better security
- Faster deployments

### Layer Caching

Optimize for cache:
- Copy package files first
- Install dependencies
- Copy source code last
- Faster rebuilds

### Security

The skill ensures:
- Non-root user
- Specific image versions
- No secrets in images
- Vulnerability scanning
- Minimal base images
- Read-only filesystem

### Image Optimization

Reduce image size:
- Alpine base images
- Multi-stage builds
- Remove unnecessary files
- Combine RUN commands

## Common Workflows

### Build and Run

```
"Use docker to:
1. Build image with tag
2. Run container
3. View logs
4. Inspect container"
```

### Docker Compose

```
"Use docker to manage services:
- Start all services
- View logs
- Scale services
- Stop and clean up"
```

### Production Deployment

```
"Use docker for production:
- Build optimized image
- Push to registry
- Deploy with health checks
- Configure auto-restart
- Set resource limits"
```

## Advanced Features

### Health Checks

```
"Use docker to add health checks that:
- Monitor application status
- Trigger automatic restarts
- Integrate with orchestrators"
```

### Resource Limits

```
"Use docker to configure:
- CPU limits
- Memory limits
- Process limits
- Disk I/O limits"
```

### Networking

```
"Use docker to set up:
- Custom bridge network
- Service discovery
- Port publishing
- Network isolation"
```

### Volumes & Storage

```
"Use docker to manage storage:
- Named volumes
- Bind mounts
- Volume backups
- Data persistence"
```

## Language-Specific Examples

### Node.js

```
"Use docker for Node.js with:
- Multi-stage build
- npm ci for dependencies
- Production mode
- Health check endpoint"
```

### Python

```
"Use docker for Python with:
- Virtual environment
- Requirements caching
- Gunicorn server
- Non-root user"
```

### Go

```
"Use docker for Go with:
- Scratch base image
- Static binary
- Minimal attack surface
- 5MB final image"
```

### Java

```
"Use docker for Spring Boot with:
- JRE Alpine
- JAR execution
- JVM optimization
- Proper shutdown handling"
```

## CI/CD Integration

### GitHub Actions

```
"Use docker in GitHub Actions to:
- Build on every commit
- Run tests in container
- Push to registry
- Deploy to production"
```

### GitLab CI

```
"Use docker in GitLab CI for:
- Docker-in-Docker builds
- Multi-stage pipelines
- Registry integration
- Automated deployment"
```

## Troubleshooting

### Build Issues

Common problems:
- Cache not working → Check layer order
- Build slow → Optimize Dockerfile
- Image too large → Use multi-stage builds

### Runtime Issues

Common problems:
- Container exits → Check logs
- Can't connect → Verify port mapping
- Permission errors → Check user/volumes

### Performance Issues

Common problems:
- Slow startup → Reduce image size
- High memory → Set limits
- Disk full → Clean up images/containers

## Quick Reference

### Common Commands

| **Task** | **Command** |
|----------|-------------|
| Build image | `docker build -t app:1.0 .` |
| Run container | `docker run -d -p 8080:3000 app:1.0` |
| View logs | `docker logs -f container` |
| Shell into container | `docker exec -it container sh` |
| Stop container | `docker stop container` |
| Compose up | `docker compose up -d` |
| Compose down | `docker compose down` |
| Clean up | `docker system prune -a` |

### Best Base Images

| **Language** | **Base Image** |
|--------------|----------------|
| Node.js | `node:20-alpine` |
| Python | `python:3.11-slim` |
| Java | `eclipse-temurin:21-jre-alpine` |
| Go | `scratch` |
| .NET | `mcr.microsoft.com/dotnet/aspnet:8.0-alpine` |

## Quick Examples

**Simple Containerization:**
```
"Use docker to containerize my app"
```

**Production Ready:**
```
"Use docker for production with:
- Optimized Dockerfile
- Security hardening
- Health checks
- Resource limits
- Logging configuration"
```

**Full Development Environment:**
```
"Use docker to create dev environment with:
- Hot reload
- All services
- Seed data
- Debug tools"
```

## Next Steps

- [Deployment Guide](/docs/use-cases/)
- [PostgreSQL Integration](/docs/skills/postgresql-psql)
- [CI/CD Examples](/docs/use-cases/)

---

**Bottom Line:** docker skill creates production-ready containerized applications. Just invoke and describe your containerization needs.
