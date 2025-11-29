---
title: Adding a New Feature
description: "Documentation for Adding a New Feature
description:
section: workflows
category: workflows
order: 3
published: true"
section: workflows
category: workflows
order: 3
published: true
---

# Adding a New Feature

Learn the complete workflow for adding new features to your project with ClaudeKit - from initial planning through production deployment with full testing and documentation.

## Overview

**Goal**: Add a complete feature with planning, implementation, tests, and docs
**Time**: 15-30 minutes (vs 2-4 hours manually)
**Agents Used**: planner, scout, tester, code-reviewer, docs-manager
**Commands**: /plan, /code, /test, /docs:update, /git:cm

## Prerequisites

- Existing project with ClaudeKit configured
- Clear feature requirements
- Development environment set up
- Git repository initialized

## Step-by-Step Workflow

### Step 1: Define Feature Requirements

Start by clearly defining what you want to build:

```bash
# Start Claude Code
claude

# Define your feature
# Example: Adding password reset functionality
```

**Good feature descriptions:**
- "Add password reset flow with email verification"
- "Implement product search with filters and pagination"
- "Create admin dashboard for user management"

**Poor descriptions:**
- "Add password stuff"
- "Make search better"
- "Admin panel"

### Step 2: Research and Plan

Use the planner agent to create a detailed implementation plan:

```bash
/plan [add password reset flow with email verification]
```

**What happens**:
```
[1/3] Spawning researcher agents...
  ✓ Researcher 1: Email service best practices
  ✓ Researcher 2: Token generation patterns
  ✓ Researcher 3: Security considerations

[2/3] Analyzing project structure...
  ✓ Located authentication module
  ✓ Found email service configuration
  ✓ Identified user model

[3/3] Creating implementation plan...
  ✓ Plan saved: plans/password-reset-20251030.md

Review plan at: plans/password-reset-20251030.md
```

### Step 3: Review the Plan

```bash
# Read the generated plan
cat plans/password-reset-20251030.md
```

**Plan structure**:
```markdown
# Password Reset Implementation Plan

## 1. Database Changes
- Add reset_token field to users table
- Add reset_token_expires timestamp
- Create migration script

## 2. Backend Implementation
- POST /api/auth/forgot-password endpoint
- POST /api/auth/reset-password endpoint
- Email service integration
- Token generation utility
- Token validation middleware

## 3. Security Considerations
- Token expiry (15 minutes)
- Rate limiting (5 requests/hour)
- HTTPS enforcement
- Token single-use enforcement

## 4. Testing Strategy
- Unit tests for token generation
- Integration tests for endpoints
- Email sending mocks
- Security tests for edge cases

## 5. Documentation
- API endpoint documentation
- User guide for reset flow
- Admin troubleshooting guide
```

**Review checklist**:
- ✅ All requirements covered
- ✅ Security considerations included
- ✅ Database changes documented
- ✅ Testing strategy defined

If plan needs adjustment, provide feedback:
```bash
"Please add SMS verification as an alternative to email"
```

### Step 4: Scout Existing Code (Optional)

For complex features, scout the codebase first:

```bash
/scout "Show me existing authentication code" 3
```

**Output**:
```
Found 8 relevant files:

Priority 1 (Core):
- src/auth/login.js (authentication logic)
- src/models/user.js (user model)
- src/middleware/auth.js (JWT middleware)

Priority 2 (Related):
- src/services/email.js (email service)
- src/routes/auth.routes.js (auth routes)

Priority 3 (Reference):
- tests/auth/login.test.js
- docs/api/authentication.md
- config/email.config.js
```

This helps understand existing patterns before implementing.

### Step 5: Implement the Feature

Use the cook command to implement based on the plan:

```bash
/cook [implement password reset with email verification]
```

**Implementation process**:
```
[1/6] Scouting relevant files...
  ✓ Located 8 files for modification
  ✓ Identified integration points

[2/6] Implementing database changes...
  ✓ Created migration: 20251030_add_reset_tokens.sql
  ✓ Updated user model

[3/6] Implementing endpoints...
  ✓ POST /api/auth/forgot-password
  ✓ POST /api/auth/reset-password
  ✓ Token validation middleware

[4/6] Implementing email service...
  ✓ Password reset email template
  ✓ Email sending logic
  ✓ Template variables

[5/6] Adding security measures...
  ✓ Rate limiting middleware
  ✓ Token expiry validation
  ✓ Single-use token enforcement

[6/6] Integration complete
  ✓ 5 files created
  ✓ 3 files modified

Files created:
- src/auth/password-reset.controller.js
- src/middleware/rate-limit.js
- src/templates/password-reset.html
- migrations/20251030_add_reset_tokens.sql
- tests/auth/password-reset.test.js

Files modified:
- src/routes/auth.routes.js
- src/models/user.js
- src/services/email.js
```

### Step 6: Run Tests

Automatically generate and run comprehensive tests:

```bash
/test
```

**Test execution**:
```
Running test suite...

✓ Unit Tests (28 tests)
  ✓ Token generation (8 tests)
  ✓ Token validation (7 tests)
  ✓ Email template rendering (5 tests)
  ✓ Rate limiting logic (8 tests)

✓ Integration Tests (15 tests)
  ✓ Forgot password endpoint (8 tests)
  ✓ Reset password endpoint (7 tests)

✓ Security Tests (10 tests)
  ✓ Token expiry enforcement (3 tests)
  ✓ Rate limiting (3 tests)
  ✓ Single-use tokens (4 tests)

Test Suites: 3 passed, 3 total
Tests:       53 passed, 53 total
Time:        4.382 s
Coverage:    89.3%

✅ All tests passed
```

**If tests fail**:
```bash
/fix:test
```

### Step 7: Code Review

Review code quality automatically:

```bash
# Code reviewer runs automatically after /cook
# Or invoke manually
/review
```

**Review results**:
```
Code Review Complete

✓ Security
  ✓ Tokens hashed before storage
  ✓ Rate limiting implemented
  ✓ Input validation present
  ✓ HTTPS enforcement configured

✓ Performance
  ✓ Database queries optimized
  ✓ Indexes on lookup fields
  ✓ Email sending async

✓ Code Quality
  ✓ Error handling comprehensive
  ✓ Logging appropriate
  ✓ Code follows project standards

⚠ Recommendations
  - Consider adding SMS fallback
  - Add admin override capability
  - Implement audit logging

Overall: APPROVED ✓
```

### Step 8: Update Documentation

Sync documentation with new feature:

```bash
/docs:update
```

**Documentation updates**:
```
Updating documentation...

✓ API Documentation
  - Added /api/auth/forgot-password
  - Added /api/auth/reset-password
  - Updated authentication flow diagram

✓ User Guides
  - Created password-reset-guide.md
  - Updated authentication.md

✓ Architecture Docs
  - Updated system-architecture.md
  - Added security-controls.md section

✓ Code Documentation
  - JSDoc comments added
  - README.md updated

Documentation sync complete
```

### Step 9: Manual Testing (Optional)

Test the feature manually:

```bash
# Start development server
npm run dev

# Test forgot password
curl -X POST http://localhost:3000/api/auth/forgot-password \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com"}'

# Expected response:
# {
#   "message": "Password reset email sent",
#   "expiresIn": "15 minutes"
# }

# Check email (development)
# Open: http://localhost:8025 (mailhog/mailcatcher)

# Test reset with token from email
curl -X POST http://localhost:3000/api/auth/reset-password \
  -H "Content-Type: application/json" \
  -d '{
    "token": "abc123...",
    "newPassword": "NewSecure123!"
  }'

# Expected response:
# {
#   "message": "Password successfully reset"
# }
```

### Step 10: Commit Changes

Commit with conventional commit message:

```bash
/git:cm
```

**Generated commit**:
```
feat: implement password reset with email verification

- Add forgot-password endpoint with rate limiting
- Implement reset-password endpoint with token validation
- Create email template for reset notifications
- Add database migration for reset tokens
- Implement single-use token enforcement
- Add comprehensive test suite (53 tests, 89% coverage)
- Update API documentation

Security features:
- 15-minute token expiry
- Rate limiting (5 requests/hour per email)
- Single-use token enforcement
- Bcrypt token hashing
```

### Step 11: Create Pull Request (Optional)

If working with a team:

```bash
/git:pr main feature/password-reset
```

**Generated PR**:
```markdown
## Summary
Implements password reset functionality with email verification

- User can request password reset via email
- Token-based verification (15-min expiry)
- Rate limiting to prevent abuse
- Comprehensive test coverage (89%)

## Test Plan
- [x] All automated tests pass
- [x] Manual testing completed
- [x] Security review passed
- [x] Documentation updated

## Security Considerations
- Tokens expire after 15 minutes
- Single-use tokens enforced
- Rate limiting: 5 requests/hour
- Tokens hashed in database

## Screenshots
[Email template preview]
[API response examples]
```

## Complete Example

Real-world scenario: Adding search functionality to an e-commerce site.

### Initial Command

```bash
/plan [add product search with filters, sorting, and pagination]
```

### Plan Review

**Generated plan includes**:
- Elasticsearch integration
- Search endpoint design
- Filter implementation (category, price, rating)
- Sorting options (relevance, price, newest)
- Pagination strategy
- Search analytics
- Autocomplete suggestions

### Implementation

```bash
/cook [implement product search as planned]
```

**Results after 8 minutes**:
- Elasticsearch service integration
- Search indexing service
- GET /api/products/search endpoint
- Filter query builder
- Sort and pagination logic
- Search result ranking
- Autocomplete API
- 67 tests (91% coverage)
- Complete API documentation

### Time Comparison

**Manual implementation**: 6-8 hours
- Research: 1-2 hours
- Implementation: 3-4 hours
- Testing: 1-2 hours
- Documentation: 1 hour

**With ClaudeKit**: 25 minutes
- Planning: 5 minutes
- Implementation: 12 minutes
- Testing: 5 minutes
- Documentation: 3 minutes

**Time saved**: 5.5-7.5 hours (93% faster)

## Common Variations

### Variation 1: API Endpoint Only

```bash
# Skip planning for simple endpoints
/cook [add GET /api/users/:id/profile endpoint]
```

### Variation 2: Database-Heavy Feature

```bash
# Plan complex database changes first
/plan [implement multi-tenant architecture with tenant isolation]
/cook [implement multi-tenant architecture]
```

### Variation 3: UI + Backend Feature

```bash
# Split into separate features
/cook [implement backend API for notifications]
/cook [implement frontend notification panel]
```

### Variation 4: Third-Party Integration

```bash
# Research included automatically
/plan [integrate Twilio SMS notifications]
/cook [integrate Twilio SMS as planned]
```

## Troubleshooting

### Issue: Feature Too Large

**Problem**: Implementation taking too long or changing too many files

**Solution**:
```bash
# Break into smaller features
/plan [add user management - phase 1: user CRUD]
/cook [implement user CRUD]

/plan [add user management - phase 2: roles and permissions]
/cook [implement roles and permissions]
```

### Issue: Tests Failing

**Problem**: Generated tests don't pass

**Solution**:
```bash
/fix:test

# Debugger analyzes failures and fixes
# Re-runs tests automatically
```

### Issue: Missing Edge Cases

**Problem**: Implementation doesn't cover all scenarios

**Solution**:
```bash
# Add specific requirements
/cook [add error handling for network failures in password reset]
```

### Issue: Performance Concerns

**Problem**: Feature works but too slow

**Solution**:
```bash
# Add optimization
/cook [optimize search queries with database indexes and caching]
```

### Issue: Documentation Unclear

**Problem**: Generated docs don't explain feature well

**Solution**:
```bash
# Regenerate with focus
/docs:update [focus on password reset flow with diagrams]
```

## Best Practices

### 1. Plan Complex Features

For features requiring multiple components:
```bash
# Always plan first
/plan [feature description]
# Review plan
# Then implement
/cook [feature description]
```

### 2. Small, Focused Features

Break large features into smaller pieces:
```bash
✅ Good:
/cook [add user profile picture upload]
/cook [add image thumbnail generation]

❌ Too large:
/cook [add complete media management system]
```

### 3. Test Immediately

Don't skip testing:
```bash
/cook [feature]
/test           # Always run tests
/fix:test       # Fix failures immediately
```

### 4. Document as You Go

Keep docs current:
```bash
/cook [feature]
/docs:update    # Update docs immediately
```

### 5. Review Before Committing

Always review generated code:
```bash
# Review all changes
git status
git diff

# Understand what changed
# Only then commit
/git:cm
```

### 6. Use Feature Branches

Work safely:
```bash
# Create feature branch
git checkout -b feature/password-reset

# Implement
/cook [feature]

# Commit
/git:cm

# Create PR
/git:pr main feature/password-reset
```

## Next Steps

### Related Use Cases
- [Fixing Bugs](/docs/use-cases/fixing-bugs) - Debug and fix issues
- [Refactoring Code](/docs/use-cases/refactoring-code) - Improve code quality
- [Building an API](/docs/use-cases/building-api) - Create REST APIs

### Related Commands
- [/plan](/docs/commands/core/plan) - Create implementation plans
- [/cook](/docs/commands/core/cook) - Implement features
- [/test](/docs/commands/core/test) - Run test suites
- [/docs:update](/docs/commands/docs/update) - Update documentation
- [/git:cm](/docs/commands/git/commit) - Commit changes

### Further Reading
- [Command Reference](/docs/commands) - All available commands
- [Agent Guide](/docs/agents) - Understanding agents
- [Workflows](/docs/core-concepts/workflows) - Development patterns

---

**Key Takeaway**: Use ClaudeKit's systematic workflow (plan → implement → test → document → commit) to add production-ready features 10x faster than manual development.
