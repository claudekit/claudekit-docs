---
title: /bootstrap
description: Documentation for bootstrap
section: engineer
kit: engineer
category: commands/core
order: 1
published: true
---

# /bootstrap

Initialize new projects with spec-driven and test-driven development. This command guides you through requirements gathering, research, planning, and implementation.

## Syntax

```bash
/bootstrap [project description]
```

## How It Works

The `/bootstrap` command follows a comprehensive workflow:

### 1. Requirements Gathering (Interactive)

Asks you questions one by one to fully understand requirements:

```
What type of application are you building?
→ REST API / Web App / Mobile App / CLI Tool

What's your primary tech stack preference?
→ Node.js / Python / Go / Rust

Do you need a database?
→ PostgreSQL / MySQL / MongoDB / None

What authentication method?
→ JWT / OAuth2 / Session-based / None
```

### 2. Research Phase

Invokes **researcher** agents to:
- Find best practices for chosen stack
- Research recommended libraries
- Review security considerations
- Identify common patterns

### 3. Planning Phase

Invokes **planner** agent to:
- Create detailed architecture
- Define file structure
- Plan implementation steps
- Design test strategy
- Document tech decisions

### 4. Implementation Phase

Automatically:
- Generates project structure
- Implements core features
- Creates configuration files
- Sets up build system
- Generates comprehensive tests

### 5. Validation Phase

Runs tests to ensure:
- All features work correctly
- Tests pass
- Code follows standards
- Documentation is complete

## Examples

### Basic Usage

```bash
/bootstrap [build a REST API for task management]
```

**What happens:**
1. Interactive Q&A about requirements
2. Research best practices for REST APIs
3. Create implementation plan
4. Generate project structure
5. Implement endpoints (CRUD operations)
6. Generate tests
7. Create API documentation

### With Tech Stack Specified

```bash
/bootstrap [create a blog platform with Next.js and PostgreSQL]
```

**What happens:**
1. Confirms tech choices (Next.js, PostgreSQL)
2. Asks about additional requirements (auth, comments, etc.)
3. Researches Next.js 14 + PostgreSQL best practices
4. Plans database schema
5. Implements blog features
6. Sets up Prisma ORM
7. Generates E2E tests

### CLI Tool

```bash
/bootstrap [build a CLI tool for managing environment variables]
```

**What happens:**
1. Asks about CLI framework preference
2. Researches CLI best practices
3. Plans command structure
4. Implements commands
5. Adds help documentation
6. Generates unit tests

## Automated Mode

For fully automatic bootstrapping without Q&A:

```bash
/bootstrap:auto [detailed project description with all requirements]
```

**Example:**

```bash
/bootstrap:auto [
  Build a REST API for a todo application with:
  - Node.js + Express.js
  - PostgreSQL database with Prisma ORM
  - JWT authentication
  - CRUD operations for tasks
  - User management
  - Input validation with Joi
  - Rate limiting
  - Comprehensive test suite with Jest
  - Swagger/OpenAPI documentation
]
```

**Important:** Automated mode requires a very detailed description including:
- Tech stack specifics
- Feature requirements
- Authentication method
- Database choice
- Testing preferences
- Any special considerations

## Generated Structure

After running `/bootstrap`, you'll have:

```
my-project/
├── .claude/              # ClaudeKit configuration
│   ├── commands/         # Custom slash commands
│   ├── agents/           # Agent definitions
│   └── workflows/        # Development workflows
├── src/                  # Source code
│   ├── routes/          # API routes (for APIs)
│   ├── models/          # Data models
│   ├── middleware/      # Express middleware
│   ├── utils/           # Utilities
│   └── server.js        # Entry point
├── tests/               # Test suite
│   ├── unit/           # Unit tests
│   ├── integration/    # Integration tests
│   └── e2e/            # E2E tests
├── docs/                # Documentation
│   ├── api/            # API documentation
│   ├── code-standards.md
│   ├── system-architecture.md
│   └── codebase-summary.md
├── plans/               # Implementation plans
├── .env.example         # Environment template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
└── README.md           # Project readme
```

## Features

### Spec-Driven Development

Creates detailed specifications before coding:
- Architecture decisions documented
- API contracts defined
- Database schema planned
- Test cases outlined

### Test-Driven Development

Generates tests alongside implementation:
- Unit tests for functions
- Integration tests for APIs
- E2E tests for workflows
- Test coverage >80%

### Best Practices Built-In

Follows industry standards:
- Error handling
- Input validation
- Security measures
- Rate limiting
- Logging
- Environment configuration

## Configuration Options

Customize bootstrapping through Q&A:

### Application Type
- REST API
- GraphQL API
- Web Application
- Mobile App
- CLI Tool
- Microservice

### Tech Stack
- Node.js (Express, Fastify, NestJS)
- Python (FastAPI, Django, Flask)
- Go (Gin, Echo)
- TypeScript
- Rust (Actix, Rocket)

### Database
- PostgreSQL
- MySQL
- MongoDB
- SQLite
- None (stateless)

### Authentication
- JWT
- OAuth2 (Google, GitHub)
- Session-based
- API Keys
- None

### Additional Features
- Real-time (WebSockets)
- Caching (Redis)
- File uploads
- Email sending
- Scheduled jobs

## Best Practices

### Provide Clear Description

✅ **Good:**
```bash
/bootstrap [build a REST API for managing inventory with user authentication and real-time stock updates]
```

❌ **Vague:**
```bash
/bootstrap [make an app]
```

### Answer Questions Thoughtfully

During Q&A:
- ✅ Think about scalability needs
- ✅ Consider security requirements
- ✅ Plan for testing
- ✅ Be specific about features

### Review Generated Plan

Before implementation starts:
1. Check `plans/` directory
2. Review architecture decisions
3. Verify feature list matches expectations
4. Provide feedback if needed

### Iterate on Requirements

If initial result isn't perfect:
```bash
# Review what was generated
ls src/

# Provide feedback
"The user model needs role-based access control"

# System will adjust accordingly
```

## Common Use Cases

### Microservice

```bash
/bootstrap [create a payment processing microservice with Stripe integration]
```

### Full-Stack App

```bash
/bootstrap [build a social media platform with posts, comments, and likes]
```

### API Gateway

```bash
/bootstrap [implement an API gateway with authentication and rate limiting]
```

### Background Worker

```bash
/bootstrap [create a background job processor for email sending]
```

## Troubleshooting

### Too Many Questions

**Problem:** Q&A taking too long

**Solution:** Use `/bootstrap:auto` with detailed description

### Wrong Tech Stack Chosen

**Problem:** System chose technology you don't want

**Solution:** Be explicit in initial description or during Q&A

### Missing Features

**Problem:** Some features not implemented

**Solution:** Add features after bootstrapping using `/cook`

### Tests Failing

**Problem:** Generated tests don't pass

**Solution:** Use `/fix` to diagnose and fix

## After Bootstrapping

Once project is initialized:

```bash
# 1. Review generated code
cat src/server.js

# 2. Check tests pass
npm test

# 3. Update documentation
/docs:update

# 4. Add additional features
/cook [add password reset functionality]

# 5. Commit initial structure
/git cm
```

## Next Steps

- [/cook](/docs/engineer/commands/core/cook) - Add new features
- [/plan](/docs/engineer/commands/core/plan) - Plan additions
- [/test](/docs/engineer/commands/core/test) - Run test suite
- [/docs:update](/docs/engineer/commands/docs/update) - Update docs

---

**Key Takeaway**: `/bootstrap` handles the entire project initialization process, from requirements gathering to tested, documented code, following industry best practices.
