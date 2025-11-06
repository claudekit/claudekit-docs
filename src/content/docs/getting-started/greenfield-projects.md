---
title: "Greenfield Projects"
description: "Start new projects with ClaudeKit from scratch. Build modern applications faster with AI-powered development tools."
category: "getting-started"
order: 4
published: true
lastUpdated: 2025-11-06
---

# Greenfield Projects

Start new projects with ClaudeKit's AI-powered development workflow. Perfect for new applications, prototypes, and modern development stacks.

## Project Initialization

### 1. Create New Project

```bash
# Create new project with ClaudeKit
claudekit new my-awesome-app

# Or create in current directory
claudekit init --project-type new
```

### 2. Choose Your Stack

ClaudeKit supports modern development stacks:

```bash
# React with TypeScript
claudekit bootstrap --framework react --language typescript

# Next.js full-stack
claudekit bootstrap --framework nextjs --features api,auth,db

# Node.js API
claudekit bootstrap --framework express --template api-server

# Vue.js application
claudekit bootstrap --framework vue --features router,pinia

# Python with FastAPI
claudekit bootstrap --framework fastapi --language python
```

### 3. Configure Project Features

```bash
# Add authentication
claudekit add feature auth --provider nextauth

# Add database
claudekit add feature database --provider postgres

# Add API routes
claudekit add feature api --pattern rest

# Add testing setup
claudekit add feature testing --framework jest
```

## Project Templates

### Modern Web Application

```bash
# Full-stack Next.js application
claudekit new my-web-app \
  --template nextjs-fullstack \
  --features auth,database,api,testing \
  --ui-framework tailwind \
  --deployment vercel
```

**Includes:**
- Next.js 14 with App Router
- TypeScript configuration
- Tailwind CSS + shadcn/ui
- Authentication setup
- PostgreSQL database
- API routes structure
- Testing with Jest and Playwright
- Deployment configuration

### React Component Library

```bash
# Reusable component library
claudekit new my-ui-library \
  --template react-library \
  --features storybook,testing \
  --build-tool rollup \
  --package-manager npm
```

**Includes:**
- TypeScript + React setup
- Storybook for component documentation
- Rollup build configuration
- Automated testing with Jest
- NPM package publishing setup

### Node.js Microservice

```bash
# API microservice
claudekit new my-api-service \
  --template node-microservice \
  --features api,database,cache \
  --database postgres \
  --cache redis
```

**Includes:**
- Express.js with TypeScript
- PostgreSQL connection
- Redis caching layer
- API documentation with Swagger
- Docker configuration
- Kubernetes manifests

### Mobile App Backend

```bash
# Backend for mobile apps
claudekit new mobile-backend \
  --template api-server \
  --features auth,database,storage \
  --auth jwt \
  --storage s3
```

## Development Workflow

### 1. Project Planning

```bash
# Plan project architecture
claudekit /plan project "Build a task management app"

# Create project structure
claudekit scaffold --pattern mvc

# Define data models
claudekit /model create User name:string email:string
claudekit /model create Task title:string completed:boolean
```

### 2. Core Development

```bash
# Generate components
claudekit /generate component UserProfile --props user,avatar
claudekit /generate component TaskList --props tasks,onDelete

# Create API endpoints
claudekit /generate api /api/users --methods GET,POST,PUT,DELETE
claudekit /generate api /api/tasks --methods GET,POST,PUT,DELETE

# Add database migrations
claudekit /migration create create_users_table
claudekit /migration create create_tasks_table
```

### 3. Feature Development

```bash
# Add authentication
claudekit /feature auth --flow email-password

# Add file uploads
claudekit /feature upload --provider s3

# Add real-time features
claudekit /feature realtime --provider socket.io

# Add search functionality
claudekit /feature search --provider elasticsearch
```

## Best Practices

### 1. Project Structure

ClaudeKit follows best practices for project organization:

```
my-project/
├── src/
│   ├── components/     # React/Vue components
│   ├── pages/         # Page components
│   ├── lib/           # Utility functions
│   ├── hooks/         # Custom hooks
│   ├── types/         # TypeScript definitions
│   └── styles/        # Global styles
├── docs/              # Documentation
├── tests/             # Test files
├── scripts/           # Build scripts
└── config/            # Configuration files
```

### 2. Code Quality

```bash
# Set up linting and formatting
claudekit add feature linting --tools eslint,prettier

# Configure pre-commit hooks
claudekit add feature pre-commit --tools husky,lint-staged

# Set up code coverage
claudekit add feature coverage --threshold 80
```

### 3. Testing Strategy

```bash
# Unit tests
claudekit /test unit src/components/

# Integration tests
claudekit /test integration tests/api/

# End-to-end tests
claudekit /test e2e tests/e2e/

# Performance tests
claudekit /test performance --threshold 1000ms
```

## AI-Powered Development

### 1. Intelligent Code Generation

```bash
# Generate based on requirements
claudekit /ask "Create a user authentication system with JWT"

# Enhance existing code
claudekit /enhance src/components/Header.tsx --add mobile-responsive

# Optimize performance
claudekit /optimize src/pages/Dashboard.tsx --target performance
```

### 2. Automated Documentation

```bash
# Generate API documentation
claudekit /docs api --format openapi

# Create component documentation
claudekit /docs components --output docs/components/

# Generate README
claudekit /docs readme --template comprehensive
```

### 3. Code Review and Optimization

```bash
# Review code quality
claudekit /review src/ --strict

# Find and fix bugs
claudekit /debug src/ --auto-fix

# Refactor for better performance
claudekit /refactor src/ --strategy performance
```

## Deployment Setup

### 1. Choose Platform

```bash
# Vercel deployment
claudekit deploy vercel --auto-setup

# Netlify deployment
claudekit deploy netlify --setup-functions

# AWS deployment
claudekit deploy aws --services ec2,rds,s3

# Docker deployment
claudekit deploy docker --registry ghcr
```

### 2. CI/CD Pipeline

```bash
# GitHub Actions
claudekit /ci github --workflow test,build,deploy

# GitLab CI
claudekit /ci gitlab --stages test,build,deploy

# CircleCI
claudekit /ci circleci --workflow test,build,deploy
```

### 3. Environment Configuration

```bash
# Development environment
claudekit env set development NODE_ENV=development
claudekit env set development DATABASE_URL=postgresql://localhost/dev

# Production environment
claudekit env set production NODE_ENV=production
claudekit env set production DATABASE_URL=${DATABASE_URL}
```

## Project Templates Gallery

### E-commerce Platform

```bash
claudekit new ecommerce-store \
  --template nextjs-ecommerce \
  --features auth,payments,inventory,cms \
  --payment stripe \
  --cms contentful
```

### Social Media App

```bash
claudekit new social-app \
  --template react-native-social \
  --features auth,chat,feed,notifications \
  --backend firebase
```

### Analytics Dashboard

```bash
claudekit new analytics-dashboard \
  --template react-dashboard \
  --features charts,real-time,exports \
  --charts recharts
```

### Content Management System

```bash
claudekit new cms-platform \
  --template nextjs-cms \
  --features auth,content,media,workflow \
  --database mongodb
```

## Migration and Scaling

### 1. Scaling Up

```bash
# Add microservices
claudekit /microservice create users-service
claudekit /microservice create orders-service

# Add message queue
claudekit add feature queue --provider rabbitmq

# Add caching layer
claudekit add feature cache --provider redis
```

### 2. Team Collaboration

```bash
# Add team workspace
claudekit team add developer@company.com --role developer
claudekit team add designer@company.com --role designer

# Configure workflows
claudekit workflow set code-review --required 2
claudekit workflow set deployment --staging first
```

## Next Steps

After initializing your greenfield project:

1. **Customize Configuration**: Tailor settings to your needs
2. **Explore Agents**: Use specialized AI agents for specific tasks
3. **Build Features**: Leverage AI-powered development tools
4. **Deploy**: Set up production deployment
5. **Monitor**: Add analytics and monitoring

---

**Ready to start?** Use our [Quick Start Guide](./quick-start.md) or explore [Project Templates](https://github.com/mrgoonie/claudekit-cli/templates) for more options.