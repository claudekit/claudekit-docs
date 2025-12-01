---
title: Starting a New Project
description: "Documentation for Starting a New Project
description:
section: workflows
category: workflows
order: 1
published: true"
section: workflows
category: workflows
order: 1
published: true
---

# Starting a New Project

Learn how to bootstrap a new project with ClaudeKit, from initial requirements to deployed application. This guide walks through a real-world example of building a task management API.

## Overview

**What we'll build:** REST API for task management
**Time required:** 45-60 minutes
**Tech stack:** Node.js, Express, PostgreSQL, TypeScript
**End result:** Tested, documented, deployable API

## Prerequisites

- Node.js 18+ installed
- ClaudeKit CLI installed (`npm install -g claudekit-cli`)
- GitHub account
- Basic understanding of REST APIs

## Step 1: Initialize Project

### Option A: Using /bootstrap (Recommended)

Start Claude Code and use the bootstrap command:

```bash
# Create project directory
mkdir task-api
cd task-api

# Start Claude Code
claude

# Bootstrap the project
/bootstrap [build a REST API for task management with user authentication]
```

**Interactive Q&A:**

```
🤖 ClaudeKit: I'll help you bootstrap a REST API for task management. Let me ask a few questions:

Q1: What's your primary tech stack preference?
   1. Node.js + Express
   2. Node.js + Fastify
   3. Python + FastAPI
   4. Go + Gin

> 1

Q2: Which database would you like to use?
   1. PostgreSQL
   2. MySQL
   3. MongoDB
   4. SQLite (development only)

> 1

Q3: What ORM/Query Builder?
   1. Prisma (recommended)
   2. TypeORM
   3. Sequelize
   4. Raw SQL

> 1

Q4: Authentication method?
   1. JWT
   2. OAuth2 (Google, GitHub)
   3. Session-based
   4. Both JWT + OAuth2

> 1

Q5: Additional features?
   [x] Input validation (Joi/Zod)
   [x] Rate limiting
   [x] API documentation (Swagger)
   [x] Docker support
   [ ] Redis caching
   [ ] WebSocket support

> Select 1,2,3,4 (Enter)

Q6: Testing framework?
   1. Jest
   2. Vitest
   3. Mocha + Chai

> 1

Perfect! I'll now:
1. Research best practices for Node.js + Express + PostgreSQL APIs
2. Create implementation plan
3. Generate project structure
4. Implement core features
5. Generate comprehensive tests
6. Create documentation

Proceed? (y/n) > y
```

**System works for 5-8 minutes:**

```
[1/6] Researching best practices...
  ✓ Node.js + Express patterns
  ✓ PostgreSQL + Prisma setup
  ✓ JWT authentication best practices
  ✓ API security considerations

[2/6] Creating implementation plan...
  ✓ Plan saved: plans/bootstrap-task-api.md

[3/6] Generating project structure...
  ✓ src/routes/
  ✓ src/controllers/
  ✓ src/services/
  ✓ src/middleware/
  ✓ src/models/ (Prisma schemas)
  ✓ tests/
  ✓ docs/

[4/6] Implementing features...
  ✓ User authentication (register, login, logout)
  ✓ Task CRUD operations
  ✓ Input validation with Joi
  ✓ Rate limiting middleware
  ✓ Error handling
  ✓ Database setup with Prisma

[5/6] Generating tests...
  ✓ Unit tests: 45 tests
  ✓ Integration tests: 23 tests
  ✓ E2E tests: 12 tests
  ✓ Coverage: 87%

[6/6] Creating documentation...
  ✓ API documentation (Swagger)
  ✓ README.md
  ✓ Setup guide
  ✓ Architecture docs

✅ Bootstrap complete!

Project structure:
task-api/
├── src/
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   └── task.routes.ts
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   └── task.controller.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   └── task.service.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── validate.middleware.ts
│   │   └── rate-limit.middleware.ts
│   ├── models/ (Prisma)
│   ├── utils/
│   └── server.ts
├── tests/
├── docs/
├── prisma/
│   └── schema.prisma
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md

Next steps:
1. cp .env.example .env (add your DB credentials)
2. npm install
3. npx prisma migrate dev
4. npm run dev
```

### Option B: Using ClaudeKit CLI

```bash
# Interactive setup
ck init

? Project name: task-api
? Template: Node.js API
? Database: PostgreSQL
? Authentication: JWT

✓ Project created
✓ ClaudeKit configured
✓ Dependencies installed

cd task-api
claude
```

Then use `/docs:init` and `/plan` to start development.

## Step 2: Review Generated Code

### Examine Project Structure

```bash
# Check what was created
ls -la

# Review main files
cat src/server.ts
cat prisma/schema.prisma
cat README.md
```

### Review API Endpoints

Generated endpoints:

```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me

GET    /api/tasks
POST   /api/tasks
GET    /api/tasks/:id
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

### Review Database Schema

```prisma
// prisma/schema.prisma

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  name      String?
  tasks     Task[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Task {
  id          String   @id @default(uuid())
  title       String
  description String?
  completed   Boolean  @default(false)
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Step 3: Setup Environment

### Configure Environment Variables

```bash
# Copy example env file
cp .env.example .env

# Edit with your values
nano .env
```

```env
# .env
NODE_ENV=development
PORT=3000

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/taskapi?schema=public"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-this"
JWT_EXPIRES_IN="7d"

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Start Database

```bash
# Using Docker
docker-compose up -d postgres

# Or install PostgreSQL locally
# brew install postgresql (macOS)
# sudo apt install postgresql (Linux)
```

### Run Migrations

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# Seed database (if seed file exists)
npx prisma db seed
```

## Step 4: Run Tests

### Run Test Suite

```bash
# Run all tests
npm test
```

**Expected output:**
```
 PASS  tests/unit/auth.service.test.ts
 PASS  tests/unit/task.service.test.ts
 PASS  tests/integration/auth.routes.test.ts
 PASS  tests/integration/task.routes.test.ts
 PASS  tests/e2e/complete-flow.test.ts

Test Suites: 5 passed, 5 total
Tests:       80 passed, 80 total
Snapshots:   0 total
Time:        8.234 s
Coverage:    87.3%

✓ All tests passed
```

### If Tests Fail

```bash
# Use ClaudeKit to fix
/fix:test
```

## Step 5: Start Development Server

```bash
# Start in development mode
npm run dev
```

**Output:**
```
🚀 Server running on http://localhost:3000
📊 Swagger docs: http://localhost:3000/api-docs
🗄️  Database connected
✅ Ready to accept requests
```

### Test API Manually

```bash
# Register a user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123!",
    "name": "John Doe"
  }'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123!"
  }'

# Save the JWT token from response

# Create a task
curl -X POST http://localhost:3000/api/tasks \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete project documentation",
    "description": "Write comprehensive README"
  }'

# Get all tasks
curl -X GET http://localhost:3000/api/tasks \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Step 6: Add Custom Features

### Add New Feature

```bash
# Plan the feature first
/plan [add task categories and tags]
```

**Review the plan:**
```bash
cat plans/add-task-categories-YYYYMMDD.md
```

**Implement:**
```bash
/cook [implement task categories and tags]
```

**What happens:**
```
1. Updates Prisma schema
   ✓ Added Category model
   ✓ Added Tag model
   ✓ Updated Task model with relations

2. Generates migration
   ✓ Created migration file

3. Updates API endpoints
   ✓ GET /api/categories
   ✓ POST /api/categories
   ✓ PUT /api/tasks/:id/tags

4. Generates tests
   ✓ 15 new tests added

5. Updates documentation
   ✓ API docs updated
   ✓ Schema documented

Run: npx prisma migrate dev
```

### Run Migration

```bash
npx prisma migrate dev --name add-categories-tags
```

### Test New Feature

```bash
npm test
```

## Step 7: Documentation

### Review Generated Docs

```bash
# API documentation
open http://localhost:3000/api-docs

# Project docs
cat docs/api/README.md
cat docs/architecture.md
```

### Update Documentation

```bash
/docs:update
```

## Step 8: Commit Changes

```bash
# Review changes
git status
git diff

# Commit with ClaudeKit
/git:cm
```

**Generated commit:**
```
feat: initialize task management API

- Set up Express + TypeScript server
- Implement user authentication with JWT
- Create task CRUD operations
- Add Prisma ORM with PostgreSQL
- Include rate limiting and validation
- Generate comprehensive test suite (87% coverage)
- Add Swagger API documentation
- Configure Docker for deployment

🤖 Generated with ClaudeKit
```

## Step 9: Set Up CI/CD

### Generate GitHub Actions Workflow

If not already created:

```bash
/cook [add GitHub Actions CI workflow]
```

**Generated workflow** (`.github/workflows/ci.yml`):

```yaml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:14
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run Prisma generate
        run: npx prisma generate

      - name: Run tests
        run: npm test
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test

      - name: Build
        run: npm run build
```

### Push and Verify CI

```bash
/git:cp

# Watch CI run
gh run watch
```

## Step 10: Deploy

### Option A: Deploy to Heroku

```bash
# Create Heroku app
heroku create task-api-prod

# Add PostgreSQL
heroku addons:create heroku-postgresql:mini

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=$(openssl rand -base64 32)

# Deploy
git push heroku main

# Run migrations
heroku run npx prisma migrate deploy
```

### Option B: Deploy with Docker

```bash
# Build image
docker build -t task-api:latest .

# Run locally
docker-compose up

# Deploy to cloud (AWS, GCP, etc.)
# Follow cloud provider's container deployment guide
```

### Verify Deployment

```bash
# Test production API
curl https://your-app.herokuapp.com/health

# Check logs
heroku logs --tail
```

## Complete Project Timeline

| Phase | Time | Activities |
|-------|------|------------|
| Bootstrap | 5-8 min | Requirements, research, generation |
| Setup | 5 min | Environment, database, dependencies |
| Testing | 2 min | Run test suite, verify |
| Development | 10-15 min | Review code, test manually |
| Custom Features | 10-15 min | Add categories, tags |
| Documentation | 5 min | Review, update docs |
| CI/CD Setup | 5 min | GitHub Actions |
| Deployment | 10-15 min | Deploy to production |
| **Total** | **52-75 min** | **Complete project ready** |

## What You've Built

A production-ready REST API with:

✅ User authentication (JWT)
✅ Task CRUD operations
✅ Categories and tags
✅ Input validation
✅ Rate limiting
✅ PostgreSQL database
✅ 87%+ test coverage
✅ API documentation
✅ Docker support
✅ CI/CD pipeline
✅ Production deployment

## Next Steps

### Add More Features

```bash
/plan [add task reminders and notifications]
/code @plans/reminders.md
/test
/git:cm
```

### Improve Testing

```bash
/cook [add E2E tests for complete user flows]
```

### Add Frontend

```bash
cd ..
/bootstrap [build a React frontend for the task API]
```

### Monitor Production

```bash
# Add logging
/cook [implement structured logging with Winston]

# Add monitoring
/cook [add health check endpoints]
```

## Troubleshooting

### Database Connection Issues

```bash
# Check DATABASE_URL
echo $DATABASE_URL

# Test connection
npx prisma db pull
```

### Port Already in Use

```bash
# Change PORT in .env
PORT=3001
```

### Migration Errors

```bash
# Reset database (development only!)
npx prisma migrate reset

# Or fix manually
/fix:hard [describe migration error]
```

## Key Takeaways

1. **Use `/bootstrap`** for new projects - saves hours of setup
2. **Review generated code** - understand before modifying
3. **Test immediately** - catch issues early
4. **Document as you go** - `/docs:update` regularly
5. **Use feature branches** - safer development
6. **Deploy early** - find production issues sooner

---

**Congratulations!** You've built a complete, production-ready REST API with ClaudeKit in under an hour. This same approach works for any type of project.
