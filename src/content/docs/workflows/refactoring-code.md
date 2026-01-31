---
title: Refactoring Code
description: "Documentation for Refactoring Code
description:
section: workflows
category: workflows
order: 5
published: true"
section: workflows
category: workflows
order: 5
published: true
---

# Refactoring Code

Learn how to safely refactor code with ClaudeKit - from identifying technical debt to implementing improvements with comprehensive testing and validation.

## Overview

**Goal**: Improve code quality and maintainability without breaking functionality
**Time**: 15-45 minutes (vs 3-8 hours manually)
**Agents Used**: code-reviewer, tester, docs-manager
**Commands**: /plan, /code, /test, /docs:update

## Prerequisites

- Existing codebase with areas needing improvement
- Test suite in place (or willing to add tests)
- Clear understanding of current functionality
- Version control for safe rollback

## Refactoring Scenarios

### When to Refactor

| Scenario | Priority | Risk Level |
|----------|----------|------------|
| Duplicate code (DRY violations) | High | Low |
| Large functions (100+ lines) | Medium | Medium |
| Complex conditionals (nested if/else) | Medium | Medium |
| Poor naming conventions | Low | Low |
| Tight coupling | High | High |
| Missing error handling | High | Medium |
| Performance bottlenecks | Medium | Medium |
| Security vulnerabilities | Critical | Low |

### Refactoring Types

1. **Code Organization** - Restructure files and modules
2. **Code Quality** - Improve readability and maintainability
3. **Performance** - Optimize slow code
4. **Security** - Fix vulnerabilities
5. **Architecture** - Improve design patterns
6. **Dependencies** - Update or remove libraries

## Step-by-Step Workflow

### Step 1: Identify Refactoring Needs

Use code review to identify issues:

```bash
# Automated code review
/review
```

**Review output**:
```
Code Review Report

⚠ Issues Found:

1. Duplicate Code (15 instances)
   - src/users/create.js and src/users/update.js
   - 67% code duplication in validation logic
   - Recommendation: Extract to shared validator

2. Large Functions (8 instances)
   - src/orders/process.js:processOrder() - 234 lines
   - Recommendation: Break into smaller functions

3. Complex Conditionals (12 instances)
   - src/auth/authorize.js - Nested 5 levels deep
   - Recommendation: Simplify with early returns

4. Magic Numbers (23 instances)
   - Hardcoded values without constants
   - Recommendation: Extract to configuration

5. Missing Error Handling (18 instances)
   - Unhandled promise rejections
   - Recommendation: Add try/catch blocks

Technical Debt Score: 6.8/10 (High)
Maintainability Index: 42/100 (Needs Improvement)
```

### Step 2: Prioritize Refactoring Tasks

Create a refactoring plan:

```bash
/plan [refactor user validation logic to eliminate duplication]
```

**Generated plan**:
```markdown
# Refactoring Plan: User Validation

## Current State
- Validation duplicated in create.js and update.js
- 156 lines of duplicate code
- Inconsistent error messages
- Hard to maintain

## Proposed Solution

### 1. Extract Shared Validator
- Create src/validators/user.validator.js
- Extract common validation rules
- Implement reusable validation functions

### 2. Consolidate Error Handling
- Standardize error messages
- Create error code constants
- Improve error response format

### 3. Update Controllers
- Import shared validator
- Remove duplicate code
- Add validation tests

## Testing Strategy
- Unit tests for validator
- Integration tests for endpoints
- Ensure no behavior changes

## Risk Assessment
- Risk Level: Low
- Breaking Changes: None
- Rollback Plan: Git revert

## Success Criteria
- 0% code duplication
- All tests pass
- Same functionality maintained
```

### Step 3: Add Tests (If Missing)

Before refactoring, ensure good test coverage:

```bash
# Check current coverage
npm run test:coverage

# Add tests if coverage low
/cook [add comprehensive tests for user validation before refactoring]
```

**Why test first?**
- Ensures refactoring doesn't break functionality
- Validates behavior is preserved
- Provides safety net for changes
- Documents expected behavior

### Step 4: Implement Refactoring

Execute the refactoring:

```bash
/cook [refactor user validation logic to eliminate duplication]
```

**Refactoring process**:
```
[1/6] Analyzing current code...
  ✓ Identified 156 lines of duplicate code
  ✓ Mapped dependencies
  ✓ Checked test coverage: 78%

[2/6] Creating shared validator...
  ✓ Created src/validators/user.validator.js
  ✓ Extracted validation functions:
    - validateEmail()
    - validatePassword()
    - validateName()
    - validateAge()

[3/6] Updating controllers...
  ✓ Updated src/users/create.js
  ✓ Updated src/users/update.js
  ✓ Removed duplicate code (156 lines)
  ✓ Added imports for shared validator

[4/6] Running tests...
  ✓ All existing tests pass (142/142)
  ✓ New validator tests added (24 tests)
  ✓ Coverage increased: 78% → 85%

[5/6] Code review...
  ✓ No duplication detected
  ✓ Consistent error handling
  ✓ Improved maintainability

[6/6] Documentation updated...
  ✓ Updated architecture docs
  ✓ Added validator documentation

✅ Refactoring complete

Code Metrics:
- Lines removed: 156
- Lines added: 89
- Net reduction: 67 lines
- Duplication: 67% → 0%
- Maintainability: +18 points

Files modified:
- src/validators/user.validator.js (new)
- src/users/create.js (refactored)
- src/users/update.js (refactored)
- tests/validators/user.test.js (new)
```

### Step 5: Verify Functionality

Thoroughly test refactored code:

```bash
# Run full test suite
/test

# Manual testing
npm run dev

# Test all affected endpoints
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "pass123"}'

curl -X PUT http://localhost:3000/api/users/123 \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe"}'
```

### Step 6: Review and Document

```bash
# Update documentation
/docs:update [document the validator refactoring]

# Review changes
git diff

# Check metrics improvement
/review
```

### Step 7: Commit Refactoring

```bash
/git cm
```

**Generated commit**:
```
refactor: extract shared user validation logic

- Create reusable user.validator.js module
- Remove 156 lines of duplicate validation code
- Standardize error messages across create/update
- Add comprehensive validator tests (24 tests)
- Increase test coverage from 78% to 85%

Code metrics:
- Duplication: 67% → 0%
- Maintainability: +18 points
- Lines of code: -67 (net reduction)

No functional changes - all tests pass
```

## Complete Examples

### Example 1: Simplify Complex Function

**Before** (234 lines):
```javascript
// src/orders/process.js
async function processOrder(orderId) {
  const order = await getOrder(orderId);
  if (!order) {
    throw new Error('Order not found');
  }
  if (order.status === 'cancelled') {
    throw new Error('Order cancelled');
  }
  if (order.items.length === 0) {
    throw new Error('No items');
  }

  // ... 220+ more lines of mixed concerns
  // - Inventory checks
  // - Payment processing
  // - Email notifications
  // - Shipping calculations
  // - Tax calculations
  // - Database updates
}
```

**Refactoring command**:
```bash
/cook [refactor processOrder function to follow single responsibility principle]
```

**After** (clean architecture):
```javascript
// src/orders/process.js
async function processOrder(orderId) {
  const order = await validateOrder(orderId);

  await checkInventory(order);
  const payment = await processPayment(order);
  await updateInventory(order);
  await sendConfirmationEmail(order, payment);
  await createShipment(order);

  return order;
}

// Each function extracted to separate file
// src/orders/validate.js - Order validation
// src/inventory/check.js - Inventory checks
// src/payments/process.js - Payment logic
// src/emails/confirmation.js - Email sending
// src/shipping/create.js - Shipment creation
```

**Results**:
- Main function: 234 lines → 9 lines
- 5 new focused modules created
- Each function < 50 lines
- Test coverage: 65% → 92%
- Maintainability: +34 points

### Example 2: Remove Tight Coupling

**Before** (tightly coupled):
```javascript
// src/users/service.js
class UserService {
  async createUser(data) {
    // Direct database access
    const db = require('../database');
    const user = await db.users.create(data);

    // Direct email service
    const emailer = require('../email');
    await emailer.send(user.email, 'Welcome!');

    // Direct logger
    const logger = require('../logger');
    logger.info('User created', user.id);

    return user;
  }
}
```

**Refactoring command**:
```bash
/cook [refactor UserService to use dependency injection]
```

**After** (loosely coupled):
```javascript
// src/users/service.js
class UserService {
  constructor(database, emailService, logger) {
    this.db = database;
    this.email = emailService;
    this.logger = logger;
  }

  async createUser(data) {
    const user = await this.db.users.create(data);
    await this.email.sendWelcome(user.email);
    this.logger.info('User created', user.id);
    return user;
  }
}

// Easily mockable for testing
// Can swap implementations
// Clear dependencies
```

### Example 3: Improve Error Handling

**Before** (poor error handling):
```javascript
async function fetchUserData(userId) {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  return data.user;
}
```

**Refactoring command**:
```bash
/cook [add comprehensive error handling to fetchUserData]
```

**After** (robust error handling):
```javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);

    if (!response.ok) {
      throw new ApiError(
        `Failed to fetch user: ${response.status}`,
        response.status
      );
    }

    const data = await response.json();

    if (!data || !data.user) {
      throw new DataError('Invalid user data received');
    }

    return data.user;

  } catch (error) {
    if (error instanceof ApiError) {
      logger.error('API error fetching user', { userId, error });
    } else if (error instanceof DataError) {
      logger.error('Data validation error', { userId, error });
    } else {
      logger.error('Unexpected error', { userId, error });
    }
    throw error;
  }
}
```

## Common Refactoring Patterns

### 1. Extract Method

```bash
/cook [extract password validation into separate function]
```

### 2. Extract Class

```bash
/cook [extract payment processing into PaymentService class]
```

### 3. Rename

```bash
/cook [rename all instances of 'data' variable to descriptive names]
```

### 4. Introduce Parameter Object

```bash
/cook [replace multiple parameters with configuration object]
```

### 5. Replace Conditional with Polymorphism

```bash
/cook [replace user type conditionals with strategy pattern]
```

### 6. Move Method

```bash
/cook [move authentication logic from controller to service layer]
```

## Refactoring Best Practices

### 1. Test Before and After

```bash
# Before refactoring
/test
# Take note of test results

# After refactoring
/test
# Verify same results
```

### 2. Small, Incremental Changes

```bash
✅ Good approach:
/cook [extract validation to separate function]
/test
/git cm

/cook [add error handling to validation]
/test
/git cm

❌ Bad approach:
/cook [refactor entire authentication system]
# Too many changes at once
# Hard to debug if issues arise
```

### 3. Maintain Functionality

```bash
# Refactoring should NOT change behavior
# Only change structure and implementation
# All tests should still pass
```

### 4. Update Tests Alongside Code

```bash
/cook [refactor user service and update tests accordingly]
```

### 5. Document Architectural Changes

```bash
/docs:update [document the new validation architecture]
```

## Common Variations

### Variation 1: Performance Refactoring

```bash
/cook [optimize database queries in user service]
```

### Variation 2: Security Refactoring

```bash
/cook [refactor to use parameterized queries instead of string concatenation]
```

### Variation 3: Modernize Code

```bash
/cook [convert callbacks to async/await throughout the codebase]
```

### Variation 4: Simplify Architecture

```bash
/cook [simplify three-layer architecture to two layers]
```

## Troubleshooting

### Issue: Tests Fail After Refactoring

**Problem**: Refactoring broke existing functionality

**Solution**:
```bash
# Revert changes
git reset --hard HEAD

# Refactor in smaller steps
/cook [extract just the email validation function]
/test
# Ensure tests pass before continuing
```

### Issue: Unclear What to Refactor

**Problem**: Don't know where to start

**Solution**:
```bash
# Get code review suggestions
/review

# Or ask for analysis
/ask [analyze the codebase and suggest refactoring priorities]
```

### Issue: Breaking API Compatibility

**Problem**: Refactoring changes public API

**Solution**:
```bash
# Maintain backward compatibility
/cook [refactor internal implementation without changing public API]

# Or version the API
/cook [create v2 API with refactored structure]
```

## Measuring Success

### Before Refactoring

```bash
# Collect metrics
Code Duplication: 45%
Average Function Length: 87 lines
Cyclomatic Complexity: 23
Test Coverage: 65%
Maintainability Index: 42/100
```

### After Refactoring

```bash
# Measure improvement
Code Duplication: 5%
Average Function Length: 28 lines
Cyclomatic Complexity: 8
Test Coverage: 89%
Maintainability Index: 78/100

Improvement: +36 points maintainability
```

## Next Steps

### Related Use Cases
- [Adding a New Feature](/docs/workflows/adding-feature) - Build features
- [Fixing Bugs](/docs/workflows/fixing-bugs) - Debug issues
- [Optimizing Performance](/docs/workflows/optimizing-performance) - Speed improvements

### Related Commands
- [/cook](/docs/engineer/commands/core/cook) - Implement refactoring
- [/test](/docs/engineer/commands/core/test) - Verify changes
- [/docs:update](/docs/engineer/commands/docs/update) - Update docs

### Related Agents
- [Code Reviewer](/docs/engineer/agents/code-reviewer) - Code quality analysis
- [Tester](/docs/engineer/agents/tester) - Testing coverage
- [Docs Manager](/docs/engineer/agents/docs-manager) - Documentation

---

**Key Takeaway**: ClaudeKit enables safe, incremental refactoring with automated testing and validation - improving code quality without breaking functionality, turning days of risky refactoring into hours of confident improvement.
