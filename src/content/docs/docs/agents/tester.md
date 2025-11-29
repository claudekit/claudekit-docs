---
title: Tester Agent
description: Execute tests, validate implementations, and ensure code quality with comprehensive coverage analysis
section: docs
category: agents
order: 4
published: true
---

# Tester Agent

The tester agent executes comprehensive test suites, validates implementations, and ensures code quality with 80%+ coverage targets across multiple testing frameworks.

## Purpose

Execute unit tests, integration tests, performance validation, and build verification to ensure code quality and prevent regressions.

## When Activated

The tester agent activates when:

- Using `/test` command
- Using `/fix:test [issues]` command
- After implementing new features
- When checking test coverage
- During bug fix validation
- Before creating pull requests
- When validating CI/CD pipelines

## Capabilities

### Test Execution

- **Unit Tests**: Individual function/component testing
- **Integration Tests**: Multi-component interaction testing
- **E2E Tests**: Full user workflow validation
- **Regression Tests**: Prevent previously fixed bugs
- **Performance Tests**: Validate speed and resource usage

### Framework Support

- **Flutter**: `flutter analyze`, `flutter test`, Dart test framework
- **Node.js/TypeScript**: Jest, Vitest, Mocha, AVA
- **Python**: pytest, unittest, doctest
- **Go**: `go test`, table-driven tests
- **Rust**: `cargo test`, doc tests, integration tests

### Coverage Analysis

- **Line Coverage**: Percentage of code lines executed
- **Branch Coverage**: Percentage of decision branches tested
- **Function Coverage**: Percentage of functions called
- **Statement Coverage**: Percentage of statements executed
- **Target**: 80%+ coverage for production code

### Error Scenario Testing

- **Edge Cases**: Boundary conditions and limits
- **Error Handling**: Exception and error paths
- **Invalid Input**: Malformed or unexpected data
- **Null Safety**: Null/undefined handling
- **Race Conditions**: Concurrent execution issues

### Build Verification

- **Compilation**: Code compiles without errors
- **Type Checking**: TypeScript strict mode, Dart analysis
- **Linting**: Code style and quality rules
- **Dependency Check**: Package compatibility
- **Bundle Size**: Production build optimization

## Example Usage

### Basic Test Execution

**Input:**
```bash
/test
```

**Process:**
```
1. Test Discovery (5s)
   Scanning: tests/ directory
   Scanning: __tests__/ directory
   Scanning: **/*.test.ts files
   Scanning: **/*.spec.ts files

   Found:
   - 47 test files
   - 312 test cases
   - 89 test suites

2. Test Execution (45s)
   Running: Unit tests (234 tests)
   Running: Integration tests (58 tests)
   Running: E2E tests (20 tests)

   Results:
   ✓ 304 passed
   ✗ 8 failed
   ⊘ 0 skipped

   Time: 43.2s

3. Coverage Analysis (10s)
   Generating coverage report...

   Coverage Summary:
   - Lines: 84.3% (2,847/3,376)
   - Branches: 76.2% (421/552)
   - Functions: 91.4% (234/256)
   - Statements: 83.8% (2,912/3,476)

4. Report Generation (5s)
   Saved: coverage/index.html
   Saved: coverage/coverage-summary.json
   Saved: tests/test-results.json
```

**Generated Report:**

```markdown
# Test Results Report

## Summary

| Metric | Value | Status |
|--------|-------|--------|
| Total Tests | 312 | ✓ |
| Passed | 304 | ✓ |
| Failed | 8 | ✗ |
| Skipped | 0 | - |
| Duration | 43.2s | ✓ |
| Coverage | 84.3% | ✓ |

## Failed Tests

### 1. User Authentication Flow

**File:** `tests/auth/login.test.ts:45`

**Test:** "should reject login with expired token"

**Error:**
```
Expected: 401 Unauthorized
Received: 500 Internal Server Error

Error: Cannot read property 'exp' of undefined
    at verifyToken (src/auth/jwt.ts:23)
    at authenticate (src/auth/middleware.ts:15)
```

**Root Cause:** Missing null check before accessing token payload.

**Fix:**
```typescript
// src/auth/jwt.ts
export const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, SECRET);
  if (!decoded || !decoded.exp) {
    throw new Error('Invalid token structure');
  }
  return decoded;
};
```

---

### 2. Order Processing

**File:** `tests/orders/process.test.ts:89`

**Test:** "should handle concurrent order updates"

**Error:**
```
Expected: Order status updated once
Received: Order status updated twice

Race condition detected in optimistic locking
```

**Root Cause:** Missing transaction isolation level.

**Fix:**
```typescript
// src/services/order.service.ts
await prisma.$transaction(
  async (tx) => {
    const order = await tx.order.findUnique({
      where: { id: orderId }
    });

    if (order.version !== expectedVersion) {
      throw new Error('Concurrent modification detected');
    }

    return tx.order.update({
      where: { id: orderId },
      data: {
        status: newStatus,
        version: { increment: 1 }
      }
    });
  },
  { isolationLevel: 'Serializable' }
);
```

---

### 3-8. Similar detailed reports...

## Coverage Gaps

### Low Coverage Areas

1. **Error Handlers** (42% coverage)
   - File: `src/errors/handler.ts`
   - Lines: 45-89 (44 lines uncovered)
   - Recommendation: Add error scenario tests

2. **Edge Cases** (58% coverage)
   - File: `src/utils/validation.ts`
   - Lines: 23-34, 67-78
   - Recommendation: Test boundary conditions

3. **Async Operations** (65% coverage)
   - File: `src/services/payment.service.ts`
   - Lines: 123-156
   - Recommendation: Add timeout and failure tests

## Performance Metrics

| Test Suite | Duration | Status | Notes |
|------------|----------|--------|-------|
| Unit Tests | 12.3s | ✓ | Good |
| Integration Tests | 28.7s | ⚠ | Slow (target: <20s) |
| E2E Tests | 2.2s | ✓ | Excellent |

**Slow Tests:**
1. `tests/integration/database.test.ts` - 8.4s
2. `tests/integration/api.test.ts` - 7.3s
3. `tests/integration/cache.test.ts` - 6.1s

**Recommendations:**
- Use test database with smaller dataset
- Mock external API calls
- Implement parallel test execution

## Build Verification

### TypeScript Compilation
```
✓ No type errors
✓ Strict mode enabled
✓ All imports resolved
```

### Linting
```
✗ 3 warnings found

src/components/Header.tsx:45
  Warning: Unused variable 'theme'

src/utils/format.ts:23
  Warning: Prefer const over let

src/services/api.ts:89
  Warning: Missing return type annotation
```

### Bundle Analysis
```
Production bundle size: 234.5 KB (gzipped: 67.8 KB)
Target: <250 KB
Status: ✓ Pass

Largest chunks:
- vendor.js: 145.2 KB
- main.js: 67.3 KB
- components.js: 22.0 KB
```

## Recommendations

### High Priority
1. **Fix Failed Tests** - 8 tests failing
2. **Improve Error Handler Coverage** - Currently 42%
3. **Optimize Integration Tests** - Reduce from 28s to <20s

### Medium Priority
4. **Add Edge Case Tests** - Validation module
5. **Fix Linting Warnings** - 3 warnings
6. **Add Performance Benchmarks** - Critical paths

### Low Priority
7. **Increase Branch Coverage** - From 76% to 80%
8. **Document Test Patterns** - Onboarding guide
9. **Setup Mutation Testing** - Validate test quality

## Next Steps

1. Run: `/fix:test [fix authentication token validation]`
2. Run: `/fix:test [fix order race condition]`
3. Verify: Coverage increases to 85%+
4. Commit: Changes with passing tests
```

## Test Execution Output

### Flutter Projects

```bash
# Analysis
flutter analyze

Analyzing project...
No issues found!

# Tests with coverage
flutter test --coverage

Running tests...
00:03 +234: All tests passed!

Coverage report:
- Overall: 87.4%
- lib/: 89.2%
- lib/models/: 94.1%
- lib/services/: 82.3%
- lib/widgets/: 91.7%

Coverage file: coverage/lcov.info
```

### Node.js/TypeScript Projects

```bash
# Jest
npm test -- --coverage

PASS  tests/auth/login.test.ts
PASS  tests/users/profile.test.ts
PASS  tests/orders/checkout.test.ts

Test Suites: 47 passed, 47 total
Tests:       312 passed, 312 total
Snapshots:   0 total
Time:        43.218s

Coverage summary:
Statements   : 84.3% ( 2912/3476 )
Branches     : 76.2% ( 421/552 )
Functions    : 91.4% ( 234/256 )
Lines        : 84.3% ( 2847/3376 )

# Vitest (faster alternative)
npm run test:coverage

✓ tests/utils.test.ts (12 tests) 234ms
✓ tests/api.test.ts (45 tests) 1.2s
✓ tests/components.test.ts (67 tests) 2.1s

Test Files  47 passed (47)
Tests       312 passed (312)
Duration    8.45s
```

### Python Projects

```bash
# pytest with coverage
pytest --cov=src --cov-report=html --cov-report=term

============================= test session starts ==============================
platform linux -- Python 3.11.0, pytest-7.4.0
collected 234 items

tests/test_auth.py::test_login PASSED                                    [  1%]
tests/test_auth.py::test_logout PASSED                                   [  2%]
tests/test_users.py::test_create_user PASSED                             [  3%]
...

============================== 234 passed in 12.34s =============================

Coverage report:
Name                      Stmts   Miss  Cover
---------------------------------------------
src/__init__.py               4      0   100%
src/auth.py                  89      8    91%
src/models.py               156     12    92%
src/services.py             234     45    81%
---------------------------------------------
TOTAL                       483     65    87%

HTML report: htmlcov/index.html
```

### Go Projects

```bash
# Test with coverage
go test ./... -cover -coverprofile=coverage.out

?       github.com/user/project/cmd         [no test files]
ok      github.com/user/project/internal    2.456s  coverage: 84.2%
ok      github.com/user/project/pkg         1.234s  coverage: 91.3%
ok      github.com/user/project/api         3.789s  coverage: 78.9%

# Generate HTML report
go tool cover -html=coverage.out -o coverage.html

# View coverage by function
go tool cover -func=coverage.out

github.com/user/project/internal/auth.go:23:    Login           87.5%
github.com/user/project/internal/auth.go:45:    Logout          100.0%
github.com/user/project/internal/users.go:12:   Create          92.3%
total:                                          (statements)    84.2%
```

### Rust Projects

```bash
# Run tests
cargo test

running 89 tests
test auth::test_login ... ok
test auth::test_logout ... ok
test users::test_create ... ok
test orders::test_checkout ... ok

test result: ok. 89 passed; 0 failed; 0 ignored; 0 measured

# With coverage (using tarpaulin)
cargo tarpaulin --out Html --out Lcov

Running tests...
89 tests, 0 failures

Coverage: 86.4% of lines (2,456 / 2,843)

Report: tarpaulin-report.html
LCOV file: lcov.info
```

## Test Patterns

### Unit Test Example

```typescript
// tests/utils/format.test.ts
import { describe, it, expect } from 'vitest';
import { formatCurrency } from '@/utils/format';

describe('formatCurrency', () => {
  it('formats positive numbers', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });

  it('formats negative numbers', () => {
    expect(formatCurrency(-1234.56)).toBe('-$1,234.56');
  });

  it('handles zero', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });

  it('rounds to 2 decimals', () => {
    expect(formatCurrency(1234.567)).toBe('$1,234.57');
  });

  it('throws on invalid input', () => {
    expect(() => formatCurrency(NaN)).toThrow('Invalid amount');
    expect(() => formatCurrency(Infinity)).toThrow('Invalid amount');
  });
});
```

### Integration Test Example

```typescript
// tests/integration/api.test.ts
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { setupTestDatabase, cleanupTestDatabase } from './helpers/db';
import { createTestServer } from './helpers/server';

describe('User API', () => {
  let server;
  let db;

  beforeAll(async () => {
    db = await setupTestDatabase();
    server = await createTestServer(db);
  });

  afterAll(async () => {
    await cleanupTestDatabase(db);
    await server.close();
  });

  it('creates user with valid data', async () => {
    const response = await server.inject({
      method: 'POST',
      url: '/api/users',
      payload: {
        email: 'test@example.com',
        password: 'SecurePass123!'
      }
    });

    expect(response.statusCode).toBe(201);
    expect(response.json()).toMatchObject({
      id: expect.any(String),
      email: 'test@example.com'
    });
  });

  it('rejects duplicate email', async () => {
    // First user
    await server.inject({
      method: 'POST',
      url: '/api/users',
      payload: { email: 'dupe@example.com', password: 'Pass123!' }
    });

    // Duplicate attempt
    const response = await server.inject({
      method: 'POST',
      url: '/api/users',
      payload: { email: 'dupe@example.com', password: 'Pass456!' }
    });

    expect(response.statusCode).toBe(409);
    expect(response.json().error).toBe('Email already exists');
  });
});
```

### E2E Test Example

```typescript
// tests/e2e/checkout.test.ts
import { test, expect } from '@playwright/test';

test.describe('Checkout Flow', () => {
  test('completes purchase successfully', async ({ page }) => {
    // Login
    await page.goto('/login');
    await page.fill('[name=email]', 'user@example.com');
    await page.fill('[name=password]', 'Password123!');
    await page.click('button[type=submit]');

    // Add item to cart
    await page.goto('/products/123');
    await page.click('button:has-text("Add to Cart")');
    await expect(page.locator('.cart-badge')).toHaveText('1');

    // Checkout
    await page.goto('/cart');
    await page.click('button:has-text("Checkout")');

    // Fill payment info
    await page.fill('[name=cardNumber]', '4242424242424242');
    await page.fill('[name=expiry]', '12/25');
    await page.fill('[name=cvc]', '123');

    // Submit order
    await page.click('button:has-text("Place Order")');

    // Verify success
    await expect(page.locator('.success-message')).toBeVisible();
    await expect(page.locator('.order-number')).toContainText('ORD-');
  });

  test('handles payment failure gracefully', async ({ page }) => {
    // ... navigation steps ...

    // Use declined card
    await page.fill('[name=cardNumber]', '4000000000000002');
    await page.click('button:has-text("Place Order")');

    // Verify error handling
    await expect(page.locator('.error-message')).toBeVisible();
    await expect(page.locator('.error-message')).toContainText('declined');

    // Verify cart still has items
    await expect(page.locator('.cart-badge')).toHaveText('1');
  });
});
```

## Performance Testing

### Load Testing Example

```typescript
// tests/performance/api-load.test.ts
import { describe, it } from 'vitest';
import autocannon from 'autocannon';

describe('API Performance', () => {
  it('handles 1000 requests/second', async () => {
    const result = await autocannon({
      url: 'http://localhost:3000/api/products',
      connections: 100,
      duration: 10,
      pipelining: 1
    });

    expect(result.requests.average).toBeGreaterThan(1000);
    expect(result.latency.p99).toBeLessThan(100); // 99th percentile < 100ms
    expect(result.errors).toBe(0);
  }, 30000);

  it('maintains response time under load', async () => {
    const result = await autocannon({
      url: 'http://localhost:3000/api/checkout',
      connections: 50,
      duration: 30,
      method: 'POST',
      body: JSON.stringify({ productId: '123', quantity: 1 })
    });

    expect(result.latency.mean).toBeLessThan(50);
    expect(result.latency.p95).toBeLessThan(200);
    expect(result.statusCodeStats['2xx'].count).toBeGreaterThan(0);
  }, 60000);
});
```

## Docker-Based Testing

```yaml
# docker-compose.test.yml
version: '3.8'

services:
  test-runner:
    build:
      context: .
      target: test
    environment:
      NODE_ENV: test
      DATABASE_URL: postgresql://test:test@test-db:5432/test
      REDIS_URL: redis://test-redis:6379
    depends_on:
      - test-db
      - test-redis
    volumes:
      - ./coverage:/app/coverage
    command: npm test -- --coverage

  test-db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: test
      POSTGRES_PASSWORD: test
      POSTGRES_DB: test
    tmpfs:
      - /var/lib/postgresql/data

  test-redis:
    image: redis:7-alpine
    tmpfs:
      - /data
```

```bash
# Run tests in Docker
docker-compose -f docker-compose.test.yml up --abort-on-container-exit

# View coverage report
open coverage/index.html
```

## Test Quality Metrics

### Coverage Targets

| Category | Target | Current | Status |
|----------|--------|---------|--------|
| Overall | 80% | 84.3% | ✓ |
| Critical Paths | 95% | 97.2% | ✓ |
| Business Logic | 90% | 92.1% | ✓ |
| Error Handlers | 80% | 76.4% | ⚠ |
| UI Components | 75% | 81.3% | ✓ |

### Test Reliability

- **Flaky Tests**: 0 (target: 0)
- **Test Duration**: 43.2s (target: <60s)
- **Deterministic**: 100% (no random failures)
- **Isolated**: 100% (no inter-test dependencies)

## Success Metrics

A successful test run achieves:

- ✅ All tests pass (100%)
- ✅ Coverage meets target (80%+)
- ✅ No flaky tests
- ✅ Build succeeds
- ✅ Linting passes
- ✅ Performance within limits

## Workflow Integration

### Pre-Commit Testing

```bash
# Run quick tests before commit
npm run test:quick

# If tests pass
git add .
git commit -m "feat: add user profile feature"
```

### Pre-Push Testing

```bash
# Run full test suite before push
npm test

# If coverage meets target
git push origin feature/user-profile
```

### CI/CD Integration

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20

      - run: npm ci
      - run: npm test -- --coverage

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info
```

## Troubleshooting

### Tests Timeout

```bash
# Increase timeout for slow tests
npm test -- --testTimeout=10000

# Run specific test suite
npm test -- tests/integration/api.test.ts
```

### Coverage Not Generated

```bash
# Clean cache and regenerate
rm -rf coverage/
npm test -- --coverage --no-cache
```

### Flaky Tests

```bash
# Run test multiple times to identify flakiness
npm test -- --repeat=10 tests/flaky.test.ts

# Run tests in band (sequential)
npm test -- --runInBand
```

## Next Steps

- [Debugging](/docs/agents/debugger) - Investigate test failures
- [Code Review](/docs/agents/code-reviewer) - Validate code quality
- [Fix Tests](/docs/commands/fix/test) - Repair failing tests

---

**Key Takeaway**: The tester agent ensures code quality through comprehensive test execution, coverage analysis, and continuous validation across all testing frameworks.
