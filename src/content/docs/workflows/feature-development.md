---
title: "Feature Development Workflow"
description: "Complete guide to developing features from planning to deployment"
section: workflows
order: 1
published: true
---

# Feature Development Workflow

Complete feature lifecycle from planning to deployment using ClaudeKit's multi-agent workflows.

## Overview

The feature development workflow combines planning, research, implementation, testing, and deployment into a cohesive process.

## Step-by-Step Guide

### 1. Planning Phase
```bash
/plan "add user authentication with OAuth providers"
```

**What happens**:
- **Planner Agent** creates detailed implementation plan
- **Researcher Agent** analyzes best practices and security considerations
- **Code Reviewer Agent** reviews plan for architectural soundness
- Generates plan file with phases, tasks, and success criteria

**Output**: Detailed plan in `plans/YYYYMMDD-HHMM-feature-description/`

### 2. Implementation Phase
```bash
/code
```

**What happens**:
- Reads the latest plan
- **Fullstack Developer Agent** implements backend/frontend
- **UI/UX Designer Agent** creates interface designs
- **Database Admin Agent** handles database schema changes
- Skills auto-activate based on tech stack detection

**Output**: Working feature implementation with:
- Code following best practices
- Database migrations
- API endpoints
- Frontend components
- Configuration files

### 3. Testing Phase
```bash
/fix
```

**What happens**:
- **Tester Agent** writes comprehensive tests
- Runs unit tests, integration tests, E2E tests
- **Debugger Agent** investigates any failing tests
- **Code Reviewer Agent** reviews test coverage

**Output**: Complete test suite with:
- Unit tests (90%+ coverage)
- Integration tests
- E2E tests for critical paths
- Performance benchmarks

### 4. Code Review Phase
```bash
/code-review "review authentication implementation"
```

**What happens**:
- **Code Reviewer Agent** performs security and performance analysis
- **Debugger Agent** checks for potential bugs
- **Researcher Agent** validates architectural decisions
- Generates review report with recommendations

### 5. Deployment Preparation
```bash
/fix "prepare for production deployment"
```

**What happens**:
- **Debugger Agent** fixes any CI/CD issues
- **DevOps Agent** prepares deployment configurations
- **Tester Agent** validates deployment pipeline
- **Docs Manager Agent** updates deployment documentation

### 6. Commit & Deploy
```bash
/git cm
/git pr "feature/user-authentication"
```

**What happens**:
- **Git Manager Agent** stages and commits with conventional format
- Creates professional commit message
- Opens pull request with detailed description
- Handles merge conflicts if any

## Real Example

Let's walk through adding authentication to a Next.js app:

### Step 1: Plan
```bash
/plan "add user authentication with Better Auth including OAuth providers"
```

**Generated Plan**:
- Phase 1: Database setup (users table, sessions)
- Phase 2: Backend API (auth endpoints, middleware)
- Phase 3: Frontend components (login, signup, protected routes)
- Phase 4: OAuth integration (Google, GitHub)
- Phase 5: Testing and security review
- Phase 6: Documentation and deployment

### Step 2: Implement
```bash
/code
```

**Implementation Details**:
- Detects Next.js project → activates Next.js skill
- Detects Better Auth requirement → activates Better Auth skill
- Creates API routes: `/api/auth/signin`, `/api/auth/signout`
- Implements middleware for protected routes
- Builds login/signup forms with proper validation
- Sets up session management

### Step 3: Test
```bash
/fix
```

**Test Coverage**:
- Unit tests for auth functions
- Integration tests for API endpoints
- E2E tests for login/logout flow
- Security tests for OAuth flow
- Performance tests for session handling

### Step 4: Review & Deploy
```bash
/code-review "authentication implementation"
/fix
/git cm
/git pr "feature/user-authentication"
```

## Best Practices

### Before Starting
1. **Clear Requirements**: Have specific acceptance criteria
2. **Technical Stack**: Ensure required skills are available
3. **Dependencies**: Identify external services needed

### During Implementation
1. **Iterate**: Use `/fix` for complex issues
2. **Validate**: Test early and often with `/fix`
3. **Document**: Use `/docs:update` to keep docs current

### Before Deployment
1. **Security Review**: Always run `/code-review`
2. **Performance**: Test with `/debug "performance issues"`
3. **Documentation**: Ensure docs are updated

## Troubleshooting

### Common Issues
- **Plan Too Broad**: Break into smaller features
- **Missing Skills**: Create custom skills with `/skill:create`
- **Test Failures**: Use `/debug` to investigate root causes
- **CI Failures**: Use `/fix` for pipeline issues

### Getting Help
- [Troubleshooting Guide](/docs/support/troubleshooting)
- [FAQ](/docs/support/faq)
- [Discord Community](https://claudekit.cc/discord)

## Next Steps

After mastering feature development:
- Learn [Bug Fixing Workflow](/docs/workflows/bug-fixing)
- Explore [Documentation Workflow](/docs/workflows/documentation)
- Study [Commands Reference](/docs/commands)

## Related Workflows

- [Bug Fixing](/docs/workflows/bug-fixing) - For when things go wrong
- [Code Review](/docs/workflows/code-review) - Maintaining code quality
- [Documentation](/docs/workflows/documentation) - Keeping docs current