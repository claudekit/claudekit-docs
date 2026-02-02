---
title: "Fullstack Developer Agent"
description: "Execute backend, frontend, and infrastructure implementations with clean, production-ready code."
section: marketing
category: agents
order: 12
---
# Fullstack Developer Agent

> **Your implementation specialist** - Turns plans into production-ready code

## What This Agent Does

You have a detailed implementation plan for your email campaign system. Database schema designed, API endpoints specified, frontend components outlined. But now someone needs to actually write the code.

**The Problem**: Implementation takes time. Writing backend APIs, frontend components, database migrations, tests, and documentation is tedious. Keeping code quality high while moving fast is challenging. You need code that works in production, not just works in development.

**The Solution**: The Fullstack Developer Agent executes implementation plans with production-ready code. It builds backend APIs, frontend components, database integrations, and infrastructure—following your project's standards and best practices. You get working features, not proof-of-concepts.

## Quick Start

Execute an implementation phase:

```bash
# After planner creates phases
/dev "Implement phase 1: database schema and migrations"
```

The agent reads the phase file, implements exactly what's specified, runs tests, and reports completion.

## Capabilities

### Backend Development
Builds robust backend systems:
- **APIs**: RESTful endpoints, GraphQL resolvers
- **Services**: Business logic, data processing
- **Database**: Queries, migrations, ORM integration
- **Authentication**: JWT, OAuth, session management
- **Webhooks**: Signature verification, event handling
- **Background Jobs**: Queue processing, scheduled tasks

### Frontend Development
Creates modern UI components:
- **React/Next.js**: Components, pages, layouts
- **TypeScript**: Type-safe, maintainable code
- **Forms**: Validation, submission, error handling
- **State Management**: React Query, Zustand, Context
- **Styling**: Tailwind CSS, responsive design
- **Accessibility**: WCAG AA compliance

### Database Integration
Handles data layer properly:
- **Schema Design**: Tables, relationships, constraints
- **Migrations**: Up/down scripts with rollback
- **Queries**: Optimized, indexed, tested
- **Transactions**: Data integrity guarantees
- **Seeding**: Development and test data
- **Connection Pooling**: Resource management

### Testing Implementation
Ensures code quality:
- **Unit Tests**: Component and function testing
- **Integration Tests**: API and database testing
- **E2E Tests**: Full user flow validation
- **Test Coverage**: Meets project requirements
- **Error Scenarios**: Validates failure handling

### Infrastructure & DevOps
Sets up supporting systems:
- **Docker**: Containerization and composition
- **CI/CD**: GitHub Actions, deployment pipelines
- **Environment Config**: `.env` files, secrets management
- **Monitoring**: Logging, error tracking
- **Performance**: Caching, optimization

## When to Use

Use the Fullstack Developer Agent when you need to:
- Execute implementation phases from plans
- Build new features end-to-end
- Refactor existing code to improve quality
- Add tests to untested code
- Implement database migrations
- Set up infrastructure or CI/CD
- Fix bugs with comprehensive solutions

## Example Workflows

### Executing a Phase from Plan

```bash
# Planner created phase files in plans/251229-email-campaign/
/dev "Execute phase-01-database-schema.md"
```

**The developer will**:
1. Read phase file from plan directory
2. Verify file ownership (only touch assigned files)
3. Check dependencies from previous phases
4. Implement each task sequentially:
   - Create database schema files
   - Write migration scripts (up and down)
   - Add database models and types
   - Create seed data for development
5. Run type checks and tests
6. Fix any errors encountered
7. Verify success criteria met
8. Generate implementation report

**You'll get**:
```markdown
## Phase Implementation Report

### Executed Phase
- Phase: phase-01-database-schema
- Plan: plans/251229-email-campaign
- Status: completed ✅

### Files Modified
- db/schema/campaigns.ts (128 lines added)
- db/migrations/001_create_campaigns.sql (45 lines added)
- db/models/Campaign.ts (87 lines added)
- db/seed/campaigns.ts (34 lines added)

### Tasks Completed
✅ Design campaigns table schema
✅ Create migration scripts (up/down)
✅ Add TypeScript types and models
✅ Create seed data for development
✅ Add indexes for performance

### Tests Status
- Type check: ✅ Pass
- Unit tests: ✅ 12/12 pass (100% coverage)
- Integration tests: ✅ 5/5 pass
- Migration test: ✅ Up/down verified

### Issues Encountered
None - implementation completed successfully

### Next Steps
- Phase 2 can proceed (dependencies satisfied)
- Schema is ready for API implementation
- Seed data available for development
```

### Building a Complete Feature

```bash
/dev "Implement webhook signature verification for Stripe and SePay"
```

**Implementation includes**:
- Backend: Webhook handler endpoints
- Utilities: Signature verification logic
- Database: Webhook log schema
- Tests: Unit and integration tests
- Documentation: API docs updated
- Error Handling: Comprehensive failure scenarios

## File Ownership Rules

**CRITICAL**: The developer respects phase boundaries:
- **Only modifies files listed in "File Ownership"** section of phase file
- **Never touches files owned by parallel phases**
- **Reports conflict if file ownership violation detected**
- **Stops immediately if file ownership unclear**

This prevents merge conflicts when multiple phases execute in parallel.

## Execution Process

**1. Phase Analysis**:
- Read assigned phase file
- Verify file ownership list
- Check parallelization info
- Understand conflict prevention strategies

**2. Pre-Implementation Validation**:
- Confirm no file overlap with other phases
- Read project docs (`codebase-summary.md`, `code-standards.md`)
- Verify dependencies from previous phases complete
- Check if files exist or need creation

**3. Implementation**:
- Execute steps sequentially from phase file
- Modify ONLY files in "File Ownership"
- Follow architecture and requirements exactly
- Write clean, maintainable, documented code
- Add tests for all new functionality

**4. Quality Assurance**:
- Run type checks (`npm run typecheck`)
- Run tests (`npm test`)
- Fix type errors or test failures
- Verify success criteria from phase file

**5. Completion Report**:
- List files modified
- Document tasks completed
- Report test status
- Note any remaining issues
- Update phase file with status

## Code Quality Standards

The developer follows:
- **YAGNI, KISS, DRY principles**
- **Project code standards** (from `docs/code-standards.md`)
- **Type safety** (TypeScript strict mode)
- **Error handling** (try-catch, proper logging)
- **Testing** (unit + integration tests)
- **Documentation** (JSDoc comments, README updates)
- **Accessibility** (WCAG AA when applicable)

## Parallel Execution Safety

When working on parallel phases:
- **Works independently** without checking other phases
- **Trusts dependencies** listed in phase file are satisfied
- **Uses well-defined interfaces** only (no direct coupling)
- **Reports completion** to enable dependent phases
- **Never modifies shared files** without explicit ownership

## Technology Stack

The developer is proficient in:

**Backend**:
- Node.js, TypeScript
- NestJS, Fastify, Express
- PostgreSQL, MongoDB, Redis
- Prisma, TypeORM, Mongoose

**Frontend**:
- React, Next.js 14+
- TypeScript, TSX
- Tailwind CSS, shadcn/ui
- React Query, Zustand

**Testing**:
- Jest, Vitest
- React Testing Library
- Playwright, Cypress

**DevOps**:
- Docker, Docker Compose
- GitHub Actions
- Cloudflare, Vercel

## Related Agents

- [Planner](/docs/marketing/agents/planner) - Creates implementation phases
- [Tester](/docs/marketing/agents/tester) - Validates implementation quality
- [Database Admin](/docs/marketing/agents/database-admin) - Optimizes database code
- [Git Manager](/docs/marketing/agents/git-manager) - Commits implemented code

## Related Commands

- [`/dev`](/docs/marketing/commands) - Execute development task
- [`/implement`](/docs/marketing/commands) - Implement feature

## Tips

**Follow the Plan**: Phase files specify exactly what to build. Don't add extra features or deviate from the spec. YAGNI (You Aren't Gonna Need It).

**Test Everything**: Write tests as you code, not after. If a test would be hard to write, the code probably needs refactoring.

**Respect File Ownership**: In parallel phase execution, touching files outside your ownership breaks everything. When in doubt, ask.

**Check Dependencies**: Before starting a phase, verify all previous phases it depends on are actually complete.

**Report Honestly**: If you hit a blocker or couldn't complete something, say so in the report. Don't mark tasks complete when they're not.

The Fullstack Developer Agent is your execution engine. It doesn't debate or redesign—it takes clear specifications and produces working, tested, production-ready code.
