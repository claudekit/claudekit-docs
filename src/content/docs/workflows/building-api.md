---
title: Building a REST API
description: "Documentation for Building a REST API"
section: workflows
category: workflows
order: 6
published: true
---

# Building a REST API

Learn how to build production-ready REST APIs with ClaudeKit - from API design through implementation, testing, documentation, and deployment.

## Overview

**Goal**: Build a complete REST API with CRUD operations, auth, and docs
**Time**: 30-60 minutes (vs 6-12 hours manually)
**Agents Used**: planner, researcher, tester, code-reviewer, docs-manager
**Commands**: /bootstrap, /plan, /code, /test, /docs:update

## Prerequisites

- Clear API requirements
- Database choice (PostgreSQL, MySQL, MongoDB, etc.)
- Node.js 18+ or Python 3.9+ installed
- Postman or similar API testing tool

## API Development Phases

| Phase | Activities | Time | Commands |
|-------|-----------|------|----------|
| Design | Plan endpoints, data models | 5-10 min | /plan |
| Setup | Initialize project, database | 5-10 min | /bootstrap |
| Implementation | Build endpoints, logic | 15-25 min | /cook |
| Testing | Unit, integration, E2E tests | 5-10 min | /test |
| Documentation | API docs, examples | 5 min | /docs:update |
| Deployment | Production setup | 10-15 min | /cook |

## Step-by-Step Workflow

### Step 1: Design API Structure

Plan your API endpoints and data models:

```bash
/plan [design REST API for task management with users, tasks, and projects]
```

**Generated plan includes**:
```markdown
# Task Management API Design

## Data Models

### User
- id: UUID (primary key)
- email: String (unique)
- password: String (hashed)
- name: String
- createdAt: Timestamp
- updatedAt: Timestamp

### Project
- id: UUID (primary key)
- name: String
- description: Text
- ownerId: UUID (foreign key → User)
- createdAt: Timestamp
- updatedAt: Timestamp

### Task
- id: UUID (primary key)
- title: String
- description: Text
- status: Enum [todo, in_progress, done]
- priority: Enum [low, medium, high]
- projectId: UUID (foreign key → Project)
- assigneeId: UUID (foreign key → User)
- dueDate: Date
- createdAt: Timestamp
- updatedAt: Timestamp

## API Endpoints

### Authentication
- POST /api/auth/register - Create new user
- POST /api/auth/login - Login user
- POST /api/auth/logout - Logout user
- GET /api/auth/me - Get current user

### Users
- GET /api/users - List users (admin)
- GET /api/users/:id - Get user by ID
- PUT /api/users/:id - Update user
- DELETE /api/users/:id - Delete user

### Projects
- GET /api/projects - List user's projects
- POST /api/projects - Create project
- GET /api/projects/:id - Get project
- PUT /api/projects/:id - Update project
- DELETE /api/projects/:id - Delete project

### Tasks
- GET /api/tasks - List tasks (with filters)
- POST /api/tasks - Create task
- GET /api/tasks/:id - Get task
- PUT /api/tasks/:id - Update task
- DELETE /api/tasks/:id - Delete task
- GET /api/projects/:id/tasks - Get project tasks

## Technical Stack

### Backend
- Framework: Express.js (Node.js)
- Database: PostgreSQL
- ORM: Prisma
- Authentication: JWT
- Validation: Joi

### Features
- Input validation
- Error handling
- Rate limiting
- CORS configuration
- API documentation (Swagger)
- Request logging
- Health check endpoint

## Security
- Password hashing (bcrypt)
- JWT token authentication
- Role-based access control
- SQL injection prevention
- XSS protection
- Rate limiting
```

### Step 2: Bootstrap the API

Create the initial project structure:

```bash
/bootstrap [create REST API for task management with Node.js, Express, PostgreSQL, and JWT auth]
```

**Interactive setup**:
```
🤖 ClaudeKit: I'll bootstrap your REST API project.

Confirming requirements:
✓ Framework: Express.js
✓ Database: PostgreSQL
✓ ORM: Prisma
✓ Authentication: JWT
✓ Validation: Joi
✓ Documentation: Swagger

Additional features:
✓ Rate limiting
✓ CORS configuration
✓ Error handling middleware
✓ Request logging
✓ Docker support
✓ Test suite

Proceed? (y/n) > y

[1/6] Researching best practices...
  ✓ Express.js API patterns
  ✓ Prisma schema design
  ✓ JWT authentication
  ✓ Security best practices

[2/6] Creating project structure...
  ✓ Package initialization
  ✓ Directory structure
  ✓ Configuration files

[3/6] Setting up database...
  ✓ Prisma schema created
  ✓ Migration files
  ✓ Seed data script

[4/6] Implementing authentication...
  ✓ JWT middleware
  ✓ Password hashing
  ✓ Auth endpoints

[5/6] Implementing CRUD...
  ✓ User routes
  ✓ Project routes
  ✓ Task routes
  ✓ Controllers & services

[6/6] Setting up infrastructure...
  ✓ Docker configuration
  ✓ Environment setup
  ✓ Test framework
  ✓ API documentation

✅ API bootstrapped successfully!
```

**Generated structure**:
```
task-api/
├── src/
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── users.routes.js
│   │   ├── projects.routes.js
│   │   └── tasks.routes.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── users.controller.js
│   │   ├── projects.controller.js
│   │   └── tasks.controller.js
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── users.service.js
│   │   ├── projects.service.js
│   │   └── tasks.service.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── validate.middleware.js
│   │   ├── error.middleware.js
│   │   └── rate-limit.middleware.js
│   ├── validators/
│   │   ├── auth.validator.js
│   │   ├── project.validator.js
│   │   └── task.validator.js
│   ├── utils/
│   │   ├── jwt.js
│   │   ├── hash.js
│   │   └── logger.js
│   └── server.js
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.js
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
│   └── swagger.yaml
├── .env.example
├── Dockerfile
├── docker-compose.yml
└── package.json
```

### Step 3: Configure Environment

Set up database and environment variables:

```bash
# Copy environment template
cp .env.example .env

# Edit configuration
nano .env
```

**.env file**:
```bash
NODE_ENV=development
PORT=3000

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/taskapi"

# JWT
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# CORS
CORS_ORIGIN="http://localhost:3001"
```

### Step 4: Initialize Database

```bash
# Start PostgreSQL (Docker)
docker-compose up -d postgres

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# Seed database
npx prisma db seed
```

### Step 5: Implement Custom Endpoints

Add specialized endpoints not in bootstrap:

```bash
/cook [add task filtering by status, priority, and due date]
```

**Implementation**:
```
[1/4] Implementing filters...
  ✓ Added query parameter parsing
  ✓ Implemented filter logic in service
  ✓ Updated Prisma queries

[2/4] Adding validation...
  ✓ Query parameter validation
  ✓ Enum validation for status/priority
  ✓ Date validation

[3/4] Testing...
  ✓ Filter tests added (18 tests)
  ✓ All tests pass

[4/4] Documentation...
  ✓ Swagger docs updated
  ✓ Example queries added

✅ Filtering implemented

Example usage:
GET /api/tasks?status=in_progress&priority=high&dueBefore=2025-12-31
```

### Step 6: Add Search Functionality

```bash
/cook [implement full-text search for tasks and projects]
```

**Implementation**:
```
[1/5] Setting up search...
  ✓ Added search indexes to Prisma schema
  ✓ Generated migration

[2/5] Implementing search logic...
  ✓ Full-text search in PostgreSQL
  ✓ Search across title and description
  ✓ Relevance scoring

[3/5] Creating endpoint...
  ✓ GET /api/search?q=query
  ✓ Cross-model search (tasks + projects)
  ✓ Pagination support

[4/5] Testing...
  ✓ Search tests (12 tests)
  ✓ Edge case handling

[5/5] Documentation...
  ✓ Search API documented

✅ Search implemented
```

### Step 7: Add Pagination

```bash
/cook [add pagination to all list endpoints]
```

**Implementation**:
```
Pagination added to:
✓ GET /api/users
✓ GET /api/projects
✓ GET /api/tasks
✓ GET /api/search

Query parameters:
- page: Page number (default: 1)
- limit: Items per page (default: 20, max: 100)

Response format:
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 156,
    "totalPages": 8,
    "hasNext": true,
    "hasPrev": false
  }
}
```

### Step 8: Implement Advanced Features

#### Rate Limiting

```bash
/cook [add rate limiting per user with Redis]
```

#### File Uploads

```bash
/cook [add file attachment support for tasks using S3]
```

#### Real-time Updates

```bash
/cook [add WebSocket support for real-time task updates]
```

#### Email Notifications

```bash
/cook [send email notifications for task assignments and due dates]
```

### Step 9: Testing

Run comprehensive test suite:

```bash
/test
```

**Test results**:
```
✓ Unit Tests (87 tests)
  ✓ Services (45 tests)
  ✓ Validators (23 tests)
  ✓ Utils (19 tests)

✓ Integration Tests (64 tests)
  ✓ Auth endpoints (18 tests)
  ✓ User endpoints (12 tests)
  ✓ Project endpoints (15 tests)
  ✓ Task endpoints (19 tests)

✓ E2E Tests (23 tests)
  ✓ Complete user flows (12 tests)
  ✓ Authentication flows (6 tests)
  ✓ Error scenarios (5 tests)

Test Suites: 3 passed, 3 total
Tests:       174 passed, 174 total
Time:        12.847 s
Coverage:    91.3%

✅ All tests passed
```

### Step 10: API Documentation

Generate comprehensive API documentation:

```bash
/docs:update
```

**Generated documentation**:
```
✓ Swagger/OpenAPI specification
✓ Postman collection
✓ API reference guide
✓ Authentication guide
✓ Error codes reference
✓ Rate limiting docs
✓ Examples for each endpoint
```

**Access documentation**:
```bash
npm run dev

# Open browser
http://localhost:3000/api-docs
```

### Step 11: Manual API Testing

Test endpoints with curl or Postman:

```bash
# Register user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "SecurePass123!",
    "name": "John Doe"
  }'

# Response:
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "uuid-here",
    "email": "john@example.com",
    "name": "John Doe"
  }
}

# Create project
curl -X POST http://localhost:3000/api/projects \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Website Redesign",
    "description": "Complete redesign of company website"
  }'

# Create task
curl -X POST http://localhost:3000/api/tasks \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Design homepage mockup",
    "description": "Create mockup in Figma",
    "status": "todo",
    "priority": "high",
    "projectId": "project-uuid",
    "dueDate": "2025-11-15"
  }'

# Get tasks with filters
curl -X GET "http://localhost:3000/api/tasks?status=todo&priority=high&page=1&limit=20" \
  -H "Authorization: Bearer YOUR_TOKEN"

# Search
curl -X GET "http://localhost:3000/api/search?q=homepage" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Step 12: Deploy API

Deploy to production:

```bash
# Option 1: Deploy with Docker
/cook [create production Docker setup with nginx reverse proxy]

docker build -t task-api:latest .
docker push your-registry/task-api:latest

# Option 2: Deploy to Heroku
heroku create task-api-prod
heroku addons:create heroku-postgresql:mini
git push heroku main

# Option 3: Deploy to AWS
/cook [create AWS deployment with ECS, RDS, and load balancer]
```

## Complete Example: Blog API

### Requirements

```
Build a REST API for a blogging platform with:
- User authentication
- Blog post CRUD
- Comments
- Categories and tags
- Search functionality
- Like/unlike posts
- Follow users
```

### Implementation

```bash
# Design API
/plan [design REST API for blogging platform with all features]

# Bootstrap project
/bootstrap [create blog API with Node.js, Express, MongoDB, and JWT]

# Implement features
/cook [implement blog post CRUD with draft/publish status]
/cook [add commenting system with nested replies]
/cook [implement category and tag management]
/cook [add full-text search for posts]
/cook [implement like/unlike functionality]
/cook [add user following system]
/cook [implement feed generation for followed users]

# Test everything
/test

# Document API
/docs:update

# Deploy
/cook [set up production deployment to DigitalOcean]
```

### Time Breakdown

**Manual development**: 10-16 hours
- API design: 1-2 hours
- Setup: 1-2 hours
- Authentication: 2-3 hours
- CRUD operations: 3-4 hours
- Advanced features: 2-3 hours
- Testing: 1-2 hours

**With ClaudeKit**: 65 minutes
- Design: 8 minutes
- Bootstrap: 12 minutes
- Features: 35 minutes
- Testing: 7 minutes
- Documentation: 3 minutes

**Time saved**: 9-15 hours (90% faster)

## Advanced API Patterns

### 1. Versioning

```bash
/cook [implement API versioning with v1 and v2 routes]
```

### 2. GraphQL Alternative

```bash
/cook [add GraphQL endpoint alongside REST API]
```

### 3. Webhooks

```bash
/cook [implement webhook system for task events]
```

### 4. API Analytics

```bash
/cook [add API usage analytics and metrics]
```

### 5. Caching Layer

```bash
/cook [implement Redis caching for frequently accessed data]
```

## Best Practices

### 1. RESTful Design

```bash
✅ Good:
GET    /api/users          # List users
POST   /api/users          # Create user
GET    /api/users/:id      # Get user
PUT    /api/users/:id      # Update user
DELETE /api/users/:id      # Delete user

❌ Bad:
GET    /api/getUsers
POST   /api/createUser
GET    /api/user/:id
POST   /api/updateUser/:id
POST   /api/deleteUser/:id
```

### 2. Consistent Response Format

```javascript
// Success response
{
  "success": true,
  "data": {...},
  "message": "User created successfully"
}

// Error response
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": [...]
  }
}
```

### 3. Proper Status Codes

```
200 OK - Successful GET, PUT
201 Created - Successful POST
204 No Content - Successful DELETE
400 Bad Request - Validation error
401 Unauthorized - Missing/invalid auth
403 Forbidden - No permission
404 Not Found - Resource not found
500 Internal Server Error - Server error
```

### 4. Input Validation

```bash
/cook [add comprehensive input validation to all endpoints]
```

### 5. Error Handling

```bash
/cook [implement centralized error handling middleware]
```

## Troubleshooting

### Issue: Database Connection Fails

**Solution**:
```bash
# Check DATABASE_URL
echo $DATABASE_URL

# Test connection
npx prisma db pull

# Or fix with ClaudeKit
/fix --quick [database connection failing]
```

### Issue: Authentication Not Working

**Solution**:
```bash
/fix --quick [JWT authentication returning 401 for valid tokens]
```

### Issue: Slow Query Performance

**Solution**:
```bash
/cook [add database indexes for frequently queried fields]
```

### Issue: API Rate Limiting Too Strict

**Solution**:
```bash
/cook [adjust rate limiting to 200 requests per 15 minutes]
```

## Next Steps

### Related Use Cases
- [Implementing Authentication](/docs/use-cases/implementing-auth) - Auth deep dive
- [Integrating Payments](/docs/use-cases/integrating-payment) - Add payments
- [Optimizing Performance](/docs/use-cases/optimizing-performance) - Speed up API

### Related Commands
- [/bootstrap](/docs/engineer/commands/core/bootstrap) - Initialize projects
- [/cook](/docs/engineer/commands/core/cook) - Implement features
- [/test](/docs/engineer/commands/core/test) - Test suite

### Further Reading
- [API Best Practices](https://restfulapi.net/)
- [Swagger/OpenAPI](https://swagger.io/specification/)
- [JWT Authentication](https://jwt.io/)

---

**Key Takeaway**: ClaudeKit enables rapid REST API development with best practices built-in - from design to deployment in under an hour with production-ready code, tests, and documentation.
