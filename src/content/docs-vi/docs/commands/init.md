---
title: /docs:init
description: "Documentation for /docs:init
description:
section: docs
category: docs/commands
order: 60
published: true"
section: docs
category: docs/commands
order: 60
published: true
---

# /docs:init

Initialize comprehensive project documentation by analyzing the entire codebase. This is the essential first command when integrating ClaudeKit into an existing project.

## Syntax

```bash
/docs:init
```

## How It Works

The `/docs:init` command performs a thorough codebase analysis:

### 1. Codebase Scanning

- Analyzes all source files
- Maps project structure
- Identifies patterns and conventions
- Detects frameworks and libraries
- Examines database schemas
- Reviews API endpoints

### 2. Architecture Analysis

- Identifies architectural patterns (MVC, Clean Architecture, etc.)
- Maps dependencies and relationships
- Analyzes data flow
- Documents integration points
- Identifies external services

### 3. Code Standards Detection

- Identifies naming conventions
- Detects code style patterns
- Finds linting/formatting rules
- Documents testing approaches
- Identifies error handling patterns

### 4. Documentation Generation

Creates comprehensive documentation files in `docs/`:

- **codebase-summary.md** - High-level overview
- **project-overview-pdr.md** - Product requirements
- **code-standards.md** - Coding conventions
- **system-architecture.md** - Architecture documentation
- **design-guidelines.md** - UI/UX patterns
- **deployment-guide.md** - Deployment procedures
- **project-roadmap.md** - Future plans and TODOs

## When to Use

### ✅ Perfect Scenarios

**Joining Existing Project**
```bash
# First day on new codebase
cd existing-project
/docs:init

# Now you understand the entire project!
```

**Integrating ClaudeKit**
```bash
# Adding ClaudeKit to existing project
ck init --kit engineer
/docs:init

# ClaudeKit now understands your codebase
```

**Project Audit**
```bash
# Haven't looked at project in months
cd old-project
/docs:init

# Get refreshed on everything
```

**Before Major Refactoring**
```bash
# Document current state first
/docs:init

# Now safely refactor
```

## Generated Documentation

### codebase-summary.md

High-level project overview:

```markdown
# Codebase Summary

## Project Type
Full-stack web application with REST API backend and React frontend

## Tech Stack
- **Backend**: Node.js, Express.js, PostgreSQL
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Infrastructure**: Docker, AWS (EC2, RDS, S3)

## Project Structure
- `/src/api` - REST API endpoints
- `/src/services` - Business logic
- `/src/models` - Database models
- `/client` - React frontend
- `/tests` - Test suite

## Key Features
1. User authentication (JWT-based)
2. Real-time notifications (WebSockets)
3. File uploads (S3 integration)
4. Payment processing (Stripe)
5. Admin dashboard

## Statistics
- Total files: 247
- Lines of code: 45,829
- Test coverage: 78%
- Last updated: 2024-01-15
```

### code-standards.md

Coding conventions and patterns:

```markdown
# Code Standards

## Naming Conventions
- **Files**: kebab-case (user-service.ts)
- **Classes**: PascalCase (UserService)
- **Functions**: camelCase (getUserById)
- **Constants**: UPPER_SNAKE_CASE (API_BASE_URL)

## Code Style
- **Formatter**: Prettier
- **Linter**: ESLint with Airbnb config
- **Indentation**: 2 spaces
- **Quotes**: Single quotes
- **Semicolons**: Required

## Architecture Patterns
- **Backend**: Layered architecture (routes → controllers → services → models)
- **Frontend**: Feature-based organization with custom hooks
- **State Management**: React Context + useReducer

## Error Handling
- Custom error classes extending Error
- Centralized error middleware
- Consistent error response format
- Detailed error logging

## Testing
- **Unit**: Jest for business logic
- **Integration**: Supertest for API endpoints
- **E2E**: Playwright for critical user flows
- **Target coverage**: 80%+
```

### system-architecture.md

Technical architecture documentation:

```markdown
# System Architecture

## High-Level Overview
[Diagram generated showing components and data flow]

## Components

### API Server
- Framework: Express.js
- Authentication: JWT with refresh tokens
- Rate limiting: Redis-based token bucket
- Validation: Joi schemas

### Database
- Type: PostgreSQL 14
- ORM: Prisma
- Migrations: Automatic via Prisma Migrate
- Backup: Daily snapshots to S3

### Frontend
- Framework: React 18 with TypeScript
- State: Context API + useReducer
- Routing: React Router v6
- API Client: Axios with interceptors

### External Services
- **Stripe**: Payment processing
- **AWS S3**: File storage
- **SendGrid**: Email delivery
- **Redis**: Caching and rate limiting

## Data Flow
1. Client sends request to API
2. Auth middleware validates JWT
3. Controller receives request
4. Service layer processes business logic
5. Model layer interacts with database
6. Response sent back to client

## Security
- HTTPS enforced
- CORS configured
- Helmet.js security headers
- Input validation and sanitization
- SQL injection prevention (parameterized queries)
- XSS protection
```

### deployment-guide.md

Deployment procedures:

```markdown
# Deployment Guide

## Environments
- **Development**: localhost:3000
- **Staging**: staging.example.com
- **Production**: app.example.com

## Prerequisites
- Node.js 18+
- PostgreSQL 14
- Redis 6
- AWS CLI configured
- Docker

## Local Setup
```bash
# Clone repository
git clone https://github.com/org/project.git

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your values

# Run database migrations
npm run migrate

# Start development server
npm run dev
```

## Staging Deployment
```bash
# Push to staging branch
git push origin staging

# CI/CD automatically:
# 1. Runs tests
# 2. Builds Docker image
# 3. Deploys to staging ECS
# 4. Runs smoke tests
```

## Production Deployment
```bash
# Tag release
git tag v1.2.3
git push origin v1.2.3

# Create release PR
/git:pr main staging

# After approval:
# 1. Merge to main
# 2. CI/CD deploys to production
# 3. Health checks verify deployment
# 4. Rollback if issues detected
```
```

## Examples

### New Team Member Onboarding

```bash
# Day 1: Clone project
git clone https://github.com/company/project.git
cd project

# Generate documentation
/docs:init

Reading codebase...
[████████████████████████] 100%

Documentation generated:
✓ docs/codebase-summary.md
✓ docs/code-standards.md
✓ docs/system-architecture.md
✓ docs/deployment-guide.md
✓ docs/project-overview-pdr.md

# Now read the docs
cat docs/codebase-summary.md

# Ask questions
/ask [how does authentication work?]

# Start contributing!
```

### Legacy Project Revival

```bash
# Haven't touched project in 2 years
cd legacy-project

# Generate current state documentation
/docs:init

Analyzing codebase...
- Framework: Express.js (old version)
- Database: MongoDB
- No tests found
- 15,000 lines of code
- 3 external APIs integrated

Documentation created with:
- Current architecture
- Identified technical debt
- Migration recommendations
- Security concerns

# Now you understand what you're working with
```

## Time Estimates

| Codebase Size | Time to Complete |
|---------------|------------------|
| Small (< 5k lines) | 30-60 seconds |
| Medium (5k-20k lines) | 1-2 minutes |
| Large (20k-50k lines) | 2-5 minutes |
| Very Large (50k+ lines) | 5-10 minutes |

## What Gets Documented

### Automatically Detected

✅ **Tech Stack**
- Frameworks and libraries
- Programming languages
- Build tools
- Testing frameworks

✅ **Architecture**
- Project structure
- Design patterns
- Dependency graph
- Data flow

✅ **Conventions**
- Naming patterns
- File organization
- Code style
- Testing approach

✅ **APIs**
- REST endpoints
- GraphQL schemas
- WebSocket events
- External integrations

✅ **Database**
- Schema structure
- Relationships
- Migrations
- Indexes

✅ **Infrastructure**
- Deployment setup
- Environment configuration
- CI/CD pipelines
- Cloud services

## Benefits

### Prevents Hallucinations

With documentation, ClaudeKit:
- Understands existing patterns
- Follows project conventions
- Avoids creating duplicate code
- Respects architectural decisions

**Before `/docs:init`:**
```
User: "Add user authentication"
Claude: Creates new auth system (duplicate!)
```

**After `/docs:init`:**
```
User: "Add user authentication"
Claude: Extends existing auth system properly
```

### Faster Development

Documentation helps ClaudeKit:
- Generate code matching your style
- Reuse existing utilities
- Follow established patterns
- Avoid reinventing the wheel

### Better Code Quality

ClaudeKit produces code that:
- Matches your standards
- Fits your architecture
- Uses your conventions
- Follows your patterns

## Updating Documentation

Documentation should be updated when:
- Major refactoring occurs
- Architecture changes
- New patterns introduced
- Tech stack inits

```bash
# After major changes
/docs:update

# Or regenerate completely
rm -rf docs/
/docs:init
```

## Customization

### Exclude Specific Directories

Create `.claudeignore`:

```
node_modules/
dist/
build/
.git/
vendor/
```

### Focus on Specific Areas

```bash
# Document only backend
/docs:init --focus=src/api,src/services

# Document only frontend
/docs:init --focus=client/
```

## Best Practices

### Run Immediately

When joining a project or integrating ClaudeKit:

```bash
# First thing to do
cd project
/docs:init
```

### Review Generated Docs

```bash
# After generation, review accuracy
cat docs/codebase-summary.md
cat docs/code-standards.md

# Provide corrections if needed
"The authentication actually uses OAuth2, not JWT"
```

### Keep Updated

```bash
# Update docs regularly
/docs:update

# Or after major changes
/docs:init  # Regenerate
```

### Share with Team

```bash
# Commit documentation
git add docs/
/git:cm  # "docs: initialize project documentation"

# Push to team
git push

# Now everyone benefits!
```

## Troubleshooting

### Incomplete Documentation

**Problem:** Generated docs missing information

**Solution:**
```bash
# Provide additional context
"The project also uses Redis for caching, located in src/cache/"

# Regenerate
/docs:init
```

### Incorrect Information

**Problem:** Documentation has wrong details

**Solution:**
```bash
# Correct specific errors
"The database is actually PostgreSQL, not MySQL"

# Update
/docs:update
```

### Very Large Codebase

**Problem:** Taking too long to analyze

**Solution:**
```bash
# Focus on important directories
/docs:init --focus=src/

# Or split into chunks
/docs:init --dir=src/api
/docs:init --dir=src/services
```

## Next Steps

After running `/docs:init`:

- [/docs:update](/docs/commands/docs/update) - Update documentation
- [/docs:summarize](/docs/commands/docs/summarize) - Create summary
- [/ask](/docs/commands/core/ask) - Ask about codebase
- [/watzup](/docs/commands/core/watzup) - Get project status

---

**Key Takeaway**: `/docs:init` is essential when starting with ClaudeKit on existing projects. It creates comprehensive documentation that helps ClaudeKit understand your codebase and prevents hallucinations.
