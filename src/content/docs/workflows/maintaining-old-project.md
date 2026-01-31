---
title: Maintaining an Old Project
description: "Documentation for Maintaining an Old Project
description:
section: workflows
category: workflows
order: 2
published: true"
section: workflows
category: workflows
order: 2
published: true
---

# Maintaining an Old Project

Learn how to integrate ClaudeKit into an existing project, understand legacy code, and systematically improve it. This guide walks through a real-world scenario of reviving a 2-year-old project.

## Scenario

**The Challenge:** Inherited a 2-year-old Node.js project
- No documentation
- Test coverage: 12%
- Last commit: 18 months ago
- Multiple deprecated dependencies
- No one remembers how it works
- Production deployment broken

**Goal:** Understand, document, fix, and improve the project

**Time:** 2-3 hours for initial setup, ongoing improvements

## Step 1: Initial Assessment

### Clone and Explore

```bash
# Clone the project
git clone https://github.com/company/legacy-project.git
cd legacy-project

# Check what's here
ls -la
cat package.json
cat README.md  # Usually outdated or missing
```

### Start Claude Code

```bash
claude
```

### Generate Documentation

This is the **most important first step**:

```bash
/docs:init
```

**What happens (5-8 minutes):**

```
Analyzing codebase...
[████████████████████████] 100%

Files scanned: 1,247
Lines of code: 45,829
Dependencies: 73 packages

Generating documentation...

✓ docs/codebase-summary.md
✓ docs/code-standards.md
✓ docs/system-architecture.md
✓ docs/project-overview-pdr.md
✓ docs/technical-debt.md (NEW!)
✓ docs/migration-recommendations.md (NEW!)

Documentation complete!

Key Findings:
⚠ 15 deprecated dependencies
⚠ No tests for 88% of code
⚠ 3 security vulnerabilities
⚠ Inconsistent code style
✓ Well-structured architecture
✓ Good separation of concerns
```

### Review Generated Documentation

```bash
# Read the overview
cat docs/codebase-summary.md
```

**Example output:**

```markdown
# Codebase Summary

## Project Type
E-commerce backend API

## Tech Stack
- **Backend**: Node.js 14 (outdated), Express 4
- **Database**: MongoDB 4.2 (needs upgrade)
- **Cache**: Redis 5
- **Queue**: Bull (job processing)

## Architecture
- Layered architecture (routes → controllers → services → models)
- Microservices attempted but incomplete
- Background jobs for email, payments

## Key Features
1. User authentication (Passport.js + JWT)
2. Product catalog with search
3. Shopping cart and checkout
4. Payment processing (Stripe)
5. Order management
6. Email notifications

## Critical Issues
1. **Security**: Using outdated crypto methods
2. **Performance**: N+1 queries in product listings
3. **Reliability**: No error handling in payment flow
4. **Maintainability**: Mixed ES5 and ES6 code

## Dependencies Status
- 15 packages have major updates available
- 3 packages have security vulnerabilities
- bcrypt, jsonwebtoken, mongoose need updates

## Test Coverage: 12%
- Unit tests: 8 files
- Integration tests: 2 files
- E2E tests: 0 files
```

## Step 2: Understand the System

### Ask Questions

Now that ClaudeKit has context, ask specific questions:

```bash
/ask [how does the payment processing work?]
```

**Response:**
```
Payment Processing Flow:

1. User submits order (POST /api/orders)
   File: src/controllers/order.controller.js:45

2. Order validated
   File: src/services/order.service.js:120

3. Stripe payment intent created
   File: src/services/payment.service.js:78

4. Webhook handles payment confirmation
   File: src/routes/webhooks/stripe.js:23

5. Order status updated to 'paid'
   Background job sends confirmation email

Critical Issues Found:
⚠ No retry logic if Stripe fails
⚠ Webhook not verified (security risk)
⚠ Race condition in order updates
⚠ Email failures block order completion

Recommendation: Use /fix to address these issues
```

More questions:

```bash
/ask [what's the authentication flow?]
/ask [how are background jobs processed?]
/ask [what's causing the slow product search?]
```

## Step 3: Update Dependencies

### Check for Updates

```bash
npm outdated
```

### Create Update Plan

```bash
/plan [update all dependencies to latest stable versions]
```

**Generated plan includes:**
- Breaking changes for each package
- Migration steps
- Test strategy
- Rollback plan

### Implement Updates

Implement the update plan:
```bash
/cook "Update dependencies following the plan"
```

**What happens:**
```
1. Updating package.json
   ✓ Node.js: 14 → 18 (update .nvmrc)
   ✓ Express: 4.17 → 4.18
   ✓ Mongoose: 5.13 → 7.6
   ✓ Jest: 26 → 29
   ... (updating all 73 packages)

2. Handling breaking changes
   ✓ Updated Mongoose queries (removed deprecated methods)
   ✓ Fixed Jest config for v29
   ✓ Updated bcrypt calls
   ✓ Modernized async/await patterns

3. Security fixes
   ✓ Updated jsonwebtoken (CVE-2022-23529)
   ✓ Updated minimist (CVE-2021-44906)
   ✓ Updated node-fetch (CVE-2022-0235)

4. Running tests
   ⚠ 23 tests failing due to breaking changes

5. Fixing test failures
   ✓ Updated test mocks for Mongoose 7
   ✓ Fixed async test patterns
   ✓ Updated snapshot tests

6. Final test run
   ✓ All 45 tests passing
   ✓ 0 vulnerabilities
   ✓ All dependencies up to date

Ready to commit!
```

### Verify Updates

```bash
# Run tests
npm test

# Check for vulnerabilities
npm audit

# Try running the app
npm run dev
```

## Step 4: Add Missing Tests

### Generate Test Suite

Generate tests:
```bash
/cook "Generate comprehensive test suite for critical paths"
```

**Priority areas:**
1. Authentication
2. Payment processing
3. Order management
4. Product search

**What happens:**
```
Analyzing critical paths...

Identified 8 critical paths:
1. User registration & login
2. Password reset flow
3. Product search & filtering
4. Add to cart
5. Checkout process
6. Payment processing
7. Order status tracking
8. Admin operations

Generating tests...

Created 127 new tests:
✓ Unit tests: 73 files
  - Authentication: 15 tests
  - Payment: 22 tests
  - Orders: 18 tests
  - Products: 18 tests

✓ Integration tests: 35 files
  - API endpoints: 35 tests

✓ E2E tests: 19 files
  - Complete user flows: 19 tests

Running test suite...
✓ 172/172 tests passed
✓ Coverage: 78% (up from 12%)

Tests generated in tests/ directory
```

## Step 5: Fix Critical Issues

### Security Vulnerabilities

```bash
/fix [Stripe webhook not verified - security risk]
```

**Fix applied:**
```
1. Added webhook signature verification
   File: src/routes/webhooks/stripe.js

2. Added replay attack prevention
   Using Stripe's timestamp validation

3. Added proper error handling
   Logs and alerts for verification failures

4. Generated tests
   ✓ Valid signature accepted
   ✓ Invalid signature rejected
   ✓ Old timestamp rejected
   ✓ Replay attack prevented

Security issue resolved!
```

### Performance Issues

```bash
/fix [N+1 queries in product listing causing slow response times]
```

**Fix applied:**
```
1. Located issue
   File: src/services/product.service.js:156

2. Root cause
   - Fetching products in loop
   - Separate query for each product's category
   - No database indexing

3. Implemented fixes
   ✓ Added Mongoose populate() for categories
   ✓ Created database indexes
   ✓ Implemented query result caching (Redis)
   ✓ Added pagination

4. Performance improvement
   Before: 3.2s for 50 products
   After: 180ms for 50 products
   Improvement: 94% faster

5. Added performance tests
   ✓ Tests response time < 300ms
   ✓ Tests pagination works
   ✓ Tests cache invalidation
```

### Error Handling

```bash
/fix [payment flow has no error handling, orders get stuck]
```

**Fix applied:**
```
1. Added comprehensive error handling
   ✓ Try-catch blocks in payment service
   ✓ Transaction rollback on failure
   ✓ Retry logic with exponential backoff
   ✓ Dead letter queue for failed jobs

2. Added monitoring
   ✓ Error logging to Sentry
   ✓ Metrics for failed payments
   ✓ Alerts for stuck orders

3. Added recovery mechanisms
   ✓ Manual retry endpoint for admins
   ✓ Automatic cleanup of stale orders
   ✓ Customer notification on failure

4. Generated tests
   ✓ Payment success path
   ✓ Payment failure handling
   ✓ Retry logic
   ✓ Timeout handling
```

## Step 6: Improve Code Quality

### Modernize Code

Refactor the code:
```bash
/cook "Refactor mixed ES5/ES6 code to modern ES6+ with async/await"
```

**Improvements:**
- Convert callbacks to async/await
- Use const/let instead of var
- Use template literals
- Use destructuring
- Use arrow functions
- Remove unnecessary code

**Example transformation:**

```javascript
// Before (ES5 style)
var getUserOrders = function(userId, callback) {
  Order.find({userId: userId}, function(err, orders) {
    if (err) {
      return callback(err);
    }
    var orderIds = [];
    for (var i = 0; i < orders.length; i++) {
      orderIds.push(orders[i]._id);
    }
    callback(null, orderIds);
  });
};

// After (Modern ES6+)
const getUserOrders = async (userId) => {
  const orders = await Order.find({ userId });
  return orders.map(order => order._id);
};
```

### Add TypeScript (Optional)

```bash
/plan [migrate project to TypeScript]
/clear  # Free context before implementation
```

Review the plan, then implement:

```bash
/cook "Implement TypeScript migration following the plan"
```

### Improve Documentation

```bash
/docs:update
```

Adds:
- Inline code comments
- JSDoc annotations
- API documentation
- Usage examples

## Step 7: Fix Deployment

### Diagnose Deployment Issues

```bash
/ask [why is the production deployment broken?]
```

**Analysis:**
```
Deployment Issues Found:

1. Build script fails
   - Missing TypeScript compiler
   - Outdated build command

2. Environment variables
   - DATABASE_URL format changed in Mongoose 7
   - Missing STRIPE_WEBHOOK_SECRET

3. Database migrations
   - No migration system in place
   - Schema changes not versioned

4. Health check endpoint missing
   - Load balancer can't verify app health

Recommendation: Fix these issues before deployment
```

### Fix Deployment Issues

```bash
/fix [fix production deployment issues]
```

**Fixes applied:**
```
1. Updated build process
   ✓ Fixed package.json scripts
   ✓ Added TypeScript to dependencies
   ✓ Optimized build output

2. Added migration system
   ✓ Created migrate-mongo setup
   ✓ Generated migration for schema changes
   ✓ Added migration step to deployment

3. Updated environment config
   ✓ Fixed DATABASE_URL format
   ✓ Added missing env variables
   ✓ Created .env.example

4. Added health check
   ✓ GET /health endpoint
   ✓ Checks database connection
   ✓ Checks Redis connection
   ✓ Returns service status

5. Updated deployment docs
   ✓ docs/deployment-guide.md

Ready to deploy!
```

### Deploy

```bash
# Test build locally
npm run build
npm run start:prod

# Deploy to staging
git push staging main

# Verify staging
curl https://staging.example.com/health

# Deploy to production
git push production main

# Monitor
/fix  # Watch production logs
```

## Step 8: Set Up Maintenance

### Add CI/CD

Create the workflow:
```bash
/cook "Create GitHub Actions workflow for CI/CD"
```

**Generated workflow:**
- Run tests on PR
- Check code quality
- Deploy to staging on merge to develop
- Deploy to production on merge to main

### Add Monitoring

Add monitoring:
```bash
/cook "Add monitoring and alerting"
```

**Added:**
- Error tracking (Sentry)
- Performance monitoring (New Relic)
- Uptime monitoring (UptimeRobot)
- Log aggregation (Datadog)

### Create Runbook

```bash
/docs:update
```

Creates `docs/runbook.md` with:
- Common issues and solutions
- Deployment procedures
- Rollback procedures
- Emergency contacts

## Progress Tracking

| Phase | Time | Before | After |
|-------|------|--------|-------|
| Documentation | 10 min | None | Complete |
| Dependencies | 30 min | 15 outdated | All updated |
| Tests | 45 min | 12% coverage | 78% coverage |
| Security | 20 min | 3 vulnerabilities | 0 vulnerabilities |
| Performance | 30 min | 3.2s response | 180ms response |
| Code Quality | 40 min | Mixed ES5/ES6 | Modern ES6+ |
| Deployment | 25 min | Broken | Working |
| **Total** | **3h 20min** | **Unmaintainable** | **Production-ready** |

## Key Improvements

✅ **Documentation**: From 0% to 100%
✅ **Tests**: From 12% to 78% coverage
✅ **Dependencies**: All updated, 0 vulnerabilities
✅ **Performance**: 94% faster
✅ **Code Quality**: Modern, consistent code
✅ **Deployment**: Fixed and automated
✅ **Monitoring**: Full observability
✅ **Security**: All issues resolved

## Ongoing Maintenance

### Weekly Tasks

```bash
# Check for updates
npm outdated

# Run security audit
npm audit

# Review test coverage
npm run test:coverage

# Update docs if needed
/docs:update
```

### Monthly Tasks

```bash
# Review technical debt
cat docs/technical-debt.md

# Plan improvements
/plan [next month's improvements]
/clear

# Update dependencies
/cook "Update dependencies as planned"
```

### When Adding Features

```bash
# 1. Plan feature
/plan [new feature description]
/clear  # Free context

# 2. Implement
/cook "Implement [new feature description] as planned"

# 3. Test
/test

# 4. Update docs
/docs:update

# 5. Commit
/git cm

# 6. Deploy
git push
```

## Common Challenges

### "I don't understand the code"

```bash
/ask [explain how X works]
/ask [what does this function do?]
/ask [why is this pattern used here?]
```

### "Too many issues to fix"

Prioritize:
1. Security issues (/fix)
2. Production blockers (/fix)
3. Performance problems (/fix)
4. Test coverage (/cook [add tests])
5. Code quality (/cook [refactor])
6. Documentation (/docs:update)

### "Breaking changes in dependencies"

```bash
/plan [migrate from package X v1 to v2]
/clear  # Review plan carefully, then free context
/cook "Migrate from package X v1 to v2 as planned"
/test  # Comprehensive testing
```

## Next Steps

### Improve Further

Implement improvements:
```bash
# Add feature flags
/cook "Implement feature flag system"

# Add A/B testing
/cook "Add A/B testing framework"

# Improve observability
/cook "Add distributed tracing"
```

### Train Team

1. Document everything (`/docs:update`)
2. Create onboarding guide
3. Share architecture docs
4. Set up development environment guide

## Key Takeaways

1. **Start with `/docs:init`** - Critical for understanding legacy code
2. **Fix security first** - Protect users and business
3. **Add tests gradually** - Focus on critical paths
4. **Update incrementally** - Don't break everything at once
5. **Document as you go** - Future you will thank you
6. **Automate maintenance** - CI/CD and monitoring

---

**Success!** You've transformed an unmaintainable legacy project into a modern, well-tested, documented codebase that's easy to maintain and extend.
