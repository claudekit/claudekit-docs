---
title: "Scout Agent"
description: "Rapidly locate relevant files across large codebases using intelligent search strategies."
section: marketing
category: agents
order: 6
---
# Scout Agent

> **Your codebase explorer** - Finds exactly what you need in seconds, not hours

## What This Agent Does

You need to add a new payment provider. But where's the payment code? Is it in `lib/payments`? `app/api/checkout`? `services/billing`? You spend 20 minutes clicking through directories, using ctrl+F, getting nowhere.

**The Problem**: Large codebases are mazes. Finding all files related to a feature requires knowing project structure intimately. New developers waste hours searching. Even experienced developers forget where specific functionality lives.

**The Solution**: The Scout Agent rapidly locates relevant files using intelligent search patterns. It understands project structure, searches multiple directories in parallel, and returns organized file lists. You start working immediately instead of hunting for files.

## Quick Start

Find files for any task:

```bash
# Starting a feature
/scout "Find all email sending and template files"
```

You'll get a categorized list of relevant files:
- Core utilities: `lib/email.ts`
- API routes: `app/api/send-email/route.ts`
- Templates: `templates/welcome-email.tsx`
- Tests: `__tests__/email.test.ts`

## Capabilities

### Intelligent File Discovery
Uses multiple search strategies:
- Pattern matching with glob (`**/*.{ts,tsx}`)
- Content search with grep (function names, imports)
- Directory structure analysis
- File naming conventions
- Recent modification timestamps

### Multi-Directory Parallel Search
Searches logically divided sections:
- Backend code (`lib/`, `app/api/`, `services/`)
- Frontend components (`components/`, `app/`)
- Database schemas (`db/`, `prisma/`)
- Configuration (`config/`, `.env.*`)
- Tests (`__tests__/`, `*.test.ts`)

### Context-Aware Search
Understands what you're looking for:
- Payment features → `checkout/`, `billing/`, `webhooks/`
- Authentication → `auth/`, `middleware/`, `session/`
- Database → `schema/`, `migrations/`, `queries/`
- Email → `email/`, `templates/`, `notifications/`

### Organized Results
Presents findings clearly:
- Groups by category (API, utilities, components, tests)
- Sorts by relevance and recency
- Removes duplicates
- Provides file paths (not just names)
- Includes brief file purpose when available

## When to Use

Use the Scout Agent when you need to:
- Start work on a feature spanning multiple directories
- Debug an issue and find all related files
- Understand project structure or where functionality lives
- Refactor code across multiple files
- Add tests for existing features
- Integrate with existing systems

## Example Workflows

### Finding Payment Integration Files

```bash
/scout "Locate all payment processing files for Stripe and SePay"
```

**Scout will find**:
- Payment utilities: `lib/payment/stripe.ts`, `lib/payment/sepay.ts`
- API routes: `app/api/webhooks/stripe/route.ts`, `app/api/webhooks/sepay/route.ts`
- Database schemas: `db/schema/payments.ts`, `db/schema/transactions.ts`
- Config files: `.env.example` (payment API keys)
- Tests: `__tests__/payment/stripe.test.ts`

### Debugging Authentication Flow

```bash
/scout "Find all authentication and session management files"
```

**You'll get**:
- Auth utilities: `lib/auth.ts`, `lib/session.ts`
- Middleware: `middleware/auth.ts`, `middleware/session.ts`
- API routes: `app/api/auth/[...nextauth]/route.ts`
- Components: `components/LoginForm.tsx`, `components/ProtectedRoute.tsx`
- Database: `db/schema/users.ts`, `db/schema/sessions.ts`

### Understanding Database Structure

```bash
/scout "Show me all database schema and migration files"
```

**Scout returns**:
- Schema definitions: `db/schema/*.ts`
- Migrations: `db/migrations/*.sql`
- Database config: `db/config.ts`, `.env.database`
- ORM queries: `db/queries/*.ts`

## Search Strategies

The Scout uses these techniques:

**1. Glob Pattern Matching**
```bash
# Find all TypeScript API files
**​/api/**​/*.{ts,tsx}

# Find all test files
**​/*.{test,spec}.{ts,tsx}
```

**2. Content Search (Grep)**
```bash
# Find files importing payment library
grep "import.*stripe" --files-with-matches

# Find function definitions
grep "function sendEmail" --files-with-matches
```

**3. Directory Intelligence**
Knows where to look based on task:
- Payment features → `lib/payment/`, `app/api/checkout/`
- Email → `lib/email/`, `templates/`
- Auth → `middleware/`, `lib/auth/`

## Search Scope

Default search locations:
```
Project Root
├── app/          # Next.js app directory (routes, layouts)
├── lib/          # Utility functions and core logic
├── components/   # React components
├── db/           # Database schemas and migrations
├── public/       # Static assets
├── __tests__/    # Test files
└── config/       # Configuration files
```

## Performance

Optimized for speed:
- Parallel directory searches
- Efficient glob patterns
- Minimal file reading (paths only unless needed)
- Completes in 3-5 seconds for large codebases
- Uses caching when available

## Related Agents

- [Scout External](/docs/marketing/agents/scout-external) - Uses AI tools for complex searches
- [Planner](/docs/marketing/agents/planner) - Uses scout results for planning
- [Docs Manager](/docs/marketing/agents/docs-manager) - Uses scout to map codebase

## Related Commands

- [`/scout`](/docs/marketing/commands/scout) - Search for files
- [`/explore`](/docs/marketing/commands) - Interactive code exploration

## Tips

**Be Specific**: "Find payment files" is vague. "Find Stripe webhook handling and signature verification files" gets targeted results.

**Use for Onboarding**: New to a codebase? Scout the main features to understand structure. "Find all API routes" gives you a project map.

**Combine with Grep**: Scout finds files, grep finds specific code within them. Use together for deep searches.

**Trust the Categories**: Scout groups results logically. If you need tests, look at the "Tests" section—don't hunt through all results.

## Example Scout Output

```
Found 12 files related to email functionality:

Core Utilities:
- lib/email/mailer.ts - Email sending service
- lib/email/templates.ts - Template rendering

API Routes:
- app/api/send-email/route.ts - Email sending endpoint
- app/api/webhooks/sendgrid/route.ts - SendGrid webhook handler

Email Templates:
- templates/welcome-email.tsx - Welcome email template
- templates/campaign-email.tsx - Campaign email template
- templates/notification-email.tsx - Notification template

Configuration:
- config/email.ts - Email service configuration
- .env.example - Email API keys

Tests:
- __tests__/email/mailer.test.ts - Email service tests
- __tests__/api/send-email.test.ts - API endpoint tests

Database:
- db/schema/email-logs.ts - Email delivery tracking
```

## Advanced Usage

**Exclude Patterns**:
```bash
# Find TypeScript files excluding tests
/scout "TypeScript files but skip test files"
```

**Recent Changes**:
```bash
# Files modified recently
/scout "Files changed in last commit related to authentication"
```

**Cross-Feature Search**:
```bash
# Multiple features
/scout "All webhook handlers for payment providers"
```

The Scout Agent eliminates the "Where is this file?" problem. You describe what you need, it finds it. Simple.
