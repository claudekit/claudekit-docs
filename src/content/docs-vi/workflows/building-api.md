---
title: Building a REST API
lang: vi
description: "Tài liệu hướng dẫn xây dựng REST API sẵn sàng cho production"
section: workflows
category: engineer
order: 6
published: true
---
# Xây dựng REST API

Tìm hiểu cách xây dựng REST API sẵn sàng cho production với ClaudeKit - từ thiết kế API đến triển khai, kiểm thử, tài liệu hóa và deployment.

## Tổng quan

**Mục tiêu**: Xây dựng REST API hoàn chỉnh với các thao tác CRUD, xác thực và tài liệu
**Thời gian**: 30-60 phút (so với 6-12 giờ thủ công)
**Agents sử dụng**: planner, researcher, tester, code-reviewer, docs-manager
**Commands**: /ck:bootstrap, /ck:plan, /ck:cook, /ck:test, /ck:docs:update

## Điều kiện tiên quyết

- Yêu cầu API rõ ràng
- Lựa chọn cơ sở dữ liệu (PostgreSQL, MySQL, MongoDB, v.v.)
- Đã cài Node.js 18+ hoặc Python 3.9+
- Có Postman hoặc công cụ kiểm thử API tương tự

## Các giai đoạn phát triển API

| Giai đoạn | Hoạt động | Thời gian | Commands |
|-----------|-----------|-----------|----------|
| Thiết kế | Lập kế hoạch endpoints, data models | 5-10 phút | /ck:plan |
| Thiết lập | Khởi tạo project, cơ sở dữ liệu | 5-10 phút | /ck:bootstrap |
| Triển khai | Xây dựng endpoints, logic | 15-25 phút | /ck:cook |
| Kiểm thử | Unit, integration, E2E tests | 5-10 phút | /ck:test |
| Tài liệu | API docs, ví dụ | 5 phút | /ck:docs:update |
| Deployment | Thiết lập production | 10-15 phút | /ck:cook |

## Quy trình từng bước

### Bước 1: Thiết kế cấu trúc API

Lập kế hoạch các API endpoints và data models:

```bash
/ck:plan [design REST API for task management with users, tasks, and projects]
```

**Kế hoạch được tạo bao gồm**:
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

### Bước 2: Bootstrap API

Tạo cấu trúc project ban đầu:

```bash
/ck:bootstrap [create REST API for task management with Node.js, Express, PostgreSQL, and JWT auth]
```

**Thiết lập tương tác**:
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

**Cấu trúc được tạo**:
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

### Bước 3: Cấu hình môi trường

Thiết lập cơ sở dữ liệu và biến môi trường:

```bash
# Copy environment template
cp .env.example .env

# Edit configuration
nano .env
```

**File .env**:
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

### Bước 4: Khởi tạo cơ sở dữ liệu

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

### Bước 5: Triển khai các endpoints tùy chỉnh

Thêm các endpoints đặc biệt chưa có trong bootstrap:

```bash
/ck:cook [add task filtering by status, priority, and due date]
```

**Triển khai**:
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

### Bước 6: Thêm tính năng tìm kiếm

```bash
/ck:cook [implement full-text search for tasks and projects]
```

**Triển khai**:
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

### Bước 7: Thêm phân trang

```bash
/ck:cook [add pagination to all list endpoints]
```

**Triển khai**:
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

### Bước 8: Triển khai các tính năng nâng cao

#### Rate Limiting

```bash
/ck:cook [add rate limiting per user with Redis]
```

#### Tải lên tệp

```bash
/ck:cook [add file attachment support for tasks using S3]
```

#### Cập nhật thời gian thực

```bash
/ck:cook [add WebSocket support for real-time task updates]
```

#### Thông báo email

```bash
/ck:cook [send email notifications for task assignments and due dates]
```

### Bước 9: Kiểm thử

Chạy bộ kiểm thử toàn diện:

```bash
/ck:test
```

**Kết quả kiểm thử**:
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

### Bước 10: Tài liệu API

Tạo tài liệu API toàn diện:

```bash
/ck:docs:update
```

**Tài liệu được tạo**:
```
✓ Swagger/OpenAPI specification
✓ Postman collection
✓ API reference guide
✓ Authentication guide
✓ Error codes reference
✓ Rate limiting docs
✓ Examples for each endpoint
```

**Truy cập tài liệu**:
```bash
npm run dev

# Open browser
http://localhost:3000/api-docs
```

### Bước 11: Kiểm thử API thủ công

Kiểm thử endpoints bằng curl hoặc Postman:

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

### Bước 12: Deploy API

Triển khai lên production:

```bash
# Option 1: Deploy with Docker
/ck:cook [create production Docker setup with nginx reverse proxy]

docker build -t task-api:latest .
docker push your-registry/task-api:latest

# Option 2: Deploy to Heroku
heroku create task-api-prod
heroku addons:create heroku-postgresql:mini
git push heroku main

# Option 3: Deploy to AWS
/ck:cook [create AWS deployment with ECS, RDS, and load balancer]
```

## Ví dụ hoàn chỉnh: Blog API

### Yêu cầu

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

### Triển khai

```bash
# Design API
/ck:plan [design REST API for blogging platform with all features]

# Bootstrap project
/ck:bootstrap [create blog API with Node.js, Express, MongoDB, and JWT]

# Implement features
/ck:cook [implement blog post CRUD with draft/publish status]
/ck:cook [add commenting system with nested replies]
/ck:cook [implement category and tag management]
/ck:cook [add full-text search for posts]
/ck:cook [implement like/unlike functionality]
/ck:cook [add user following system]
/ck:cook [implement feed generation for followed users]

# Test everything
/ck:test

# Document API
/ck:docs:update

# Deploy
/ck:cook [set up production deployment to DigitalOcean]
```

### Phân tích thời gian

**Phát triển thủ công**: 10-16 giờ
- Thiết kế API: 1-2 giờ
- Thiết lập: 1-2 giờ
- Xác thực: 2-3 giờ
- Thao tác CRUD: 3-4 giờ
- Tính năng nâng cao: 2-3 giờ
- Kiểm thử: 1-2 giờ

**Với ClaudeKit**: 65 phút
- Thiết kế: 8 phút
- Bootstrap: 12 phút
- Tính năng: 35 phút
- Kiểm thử: 7 phút
- Tài liệu: 3 phút

**Thời gian tiết kiệm**: 9-15 giờ (nhanh hơn 90%)

## Các mẫu API nâng cao

### 1. Versioning

```bash
/ck:cook [implement API versioning with v1 and v2 routes]
```

### 2. GraphQL thay thế

```bash
/ck:cook [add GraphQL endpoint alongside REST API]
```

### 3. Webhooks

```bash
/ck:cook [implement webhook system for task events]
```

### 4. API Analytics

```bash
/ck:cook [add API usage analytics and metrics]
```

### 5. Tầng cache

```bash
/ck:cook [implement Redis caching for frequently accessed data]
```

## Thực hành tốt nhất

### 1. Thiết kế RESTful

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

### 2. Định dạng phản hồi nhất quán

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

### 3. Status codes phù hợp

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

### 4. Validation đầu vào

```bash
/ck:cook [add comprehensive input validation to all endpoints]
```

### 5. Xử lý lỗi

```bash
/ck:cook [implement centralized error handling middleware]
```

## Xử lý sự cố

### Vấn đề: Kết nối cơ sở dữ liệu thất bại

**Giải pháp**:
```bash
# Check DATABASE_URL
echo $DATABASE_URL

# Test connection
npx prisma db pull

# Or fix with ClaudeKit
/ck:fix --quick [database connection failing]
```

### Vấn đề: Xác thực không hoạt động

**Giải pháp**:
```bash
/ck:fix --quick [JWT authentication returning 401 for valid tokens]
```

### Vấn đề: Hiệu suất truy vấn chậm

**Giải pháp**:
```bash
/ck:cook [add database indexes for frequently queried fields]
```

### Vấn đề: Rate limiting API quá nghiêm ngặt

**Giải pháp**:
```bash
/ck:cook [adjust rate limiting to 200 requests per 15 minutes]
```

## Bước tiếp theo

### Các trường hợp sử dụng liên quan
- [Implementing Authentication](/vi/docs/workflows/implementing-auth) - Đào sâu về xác thực
- [Integrating Payments](/vi/docs/workflows/integrating-payment) - Thêm thanh toán
- [Optimizing Performance](/vi/docs/workflows/optimizing-performance) - Tăng tốc API

### Commands liên quan
- [/ck:bootstrap](/docs/engineer/skills/bootstrap) - Khởi tạo projects
- [/ck:cook](/docs/engineer/skills/cook) - Triển khai tính năng
- [/ck:test](/docs/engineer/skills/test) - Bộ kiểm thử

### Đọc thêm
- [API Best Practices](https://restfulapi.net/)
- [Swagger/OpenAPI](https://swagger.io/specification/)
- [JWT Authentication](https://jwt.io/)

---

**Điểm mấu chốt**: ClaudeKit cho phép phát triển REST API nhanh chóng với các thực hành tốt nhất được tích hợp sẵn - từ thiết kế đến deployment trong chưa đầy một giờ với code production-ready, kiểm thử và tài liệu đầy đủ.
