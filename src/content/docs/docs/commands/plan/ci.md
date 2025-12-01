---
title: /plan:ci
description: "Documentation for /plan:ci
description:
section: docs
category: commands/plan
order: 10
published: true"
section: docs
category: commands/plan
order: 10
published: true
---

# /plan:ci

Analyze GitHub Actions workflow logs and create a detailed implementation plan to fix CI/CD issues. This command identifies problems, root causes, and provides actionable steps but does NOT implement fixes automatically.

## Syntax

```bash
/plan:ci [github-actions-url]
```

## How It Works

The `/plan:ci` command follows an analytical workflow:

### 1. Log Retrieval

- Fetches GitHub Actions workflow logs via URL or `gh` CLI
- Identifies failed steps and error messages
- Extracts relevant context (job names, timestamps, commands)
- Collects environment information

### 2. Error Analysis

Invokes **debugger** agent to:
- Parse error messages and stack traces
- Identify root causes (not just symptoms)
- Categorize issues (build, test, deploy, env, etc.)
- Map dependencies between failures

### 3. Codebase Context

Invokes **scout** agent to:
- Locate relevant workflow files (`.github/workflows/`)
- Find related configuration (package.json, tsconfig.json, etc.)
- Identify affected source files
- Check recent changes (git log)

### 4. Research Solutions

Invokes **researcher** agent to:
- Search for similar CI issues
- Review GitHub Actions documentation
- Check action marketplace for fixes
- Find best practices

### 5. Plan Creation

Creates comprehensive plan including:
- Root cause explanation
- Step-by-step fix instructions
- Files to modify
- Commands to run
- Testing strategy
- Prevention measures

## Examples

### Build Failure Analysis

```bash
/plan:ci https://github.com/user/repo/actions/runs/12345
```

**What happens:**
```
Phase 1: Fetching Logs (10 seconds)
---
Agent: debugger

Using GitHub CLI to fetch logs...
gh run view 12345 --log

Workflow: CI/CD Pipeline
Job: build
Status: Failed
Duration: 2m 15s

Failed step: Build application
Exit code: 1

Error log:
---
Run npm run build
> build
> tsc && vite build

src/components/Dashboard.tsx:45:12 - error TS2339:
Property 'userName' does not exist on type 'User'.

45     return user.userName
              ~~~~~~~~

Found 1 error in src/components/Dashboard.tsx:45

Error: Process completed with exit code 1.
---

Phase 2: Error Analysis (15 seconds)
---
Agent: debugger

Analyzing error...

Error type: TypeScript compilation error
Root cause: Property 'userName' does not exist on type 'User'
Location: src/components/Dashboard.tsx:45:12

Possible causes:
1. Property renamed from 'userName' to 'username'
2. Type definition outdated
3. Property removed from User type
4. Merge conflict introduced incorrect property name

Checking recent changes...
git log --oneline -10 -- src/types/user.ts

Found: commit abc123 "refactor: rename userName to username"

Root cause confirmed:
User type was refactored but Dashboard.tsx not updated

Phase 3: Codebase Scout (10 seconds)
---
Agent: scout

Locating affected files...

Files with 'userName' references:
✓ src/components/Dashboard.tsx (1 occurrence)
✓ src/components/Profile.tsx (2 occurrences)
✓ src/utils/user-helper.ts (1 occurrence)

Files with 'username' (correct):
✓ src/types/user.ts (type definition)
✓ src/api/auth.ts (API calls)
✓ 15 other files

Inconsistency found:
- 3 files still use old 'userName'
- All should use 'username'

Phase 4: Research (5 seconds)
---
Agent: researcher

Best practices found:
✓ Use automated rename refactoring tools
✓ Add ESLint rule to enforce consistent naming
✓ Run type check before committing

Prevention strategies:
✓ Pre-commit hook with type checking
✓ IDE configuration for consistent naming
✓ Code review checklist item

Phase 5: Plan Created (5 seconds)
---
Agent: planner

Plan saved to: plans/fix-ci-build-12345.md

IMPLEMENTATION PLAN
---

## Root Cause
Property 'userName' was renamed to 'username' in User type
but 3 files were not updated in commit abc123.

## Files to Fix

1. src/components/Dashboard.tsx
   Line 45: user.userName → user.username

2. src/components/Profile.tsx
   Line 23: user.userName → user.username
   Line 67: user.userName → user.username

3. src/utils/user-helper.ts
   Line 12: data.userName → data.username

## Step-by-Step Fix

### Step 1: Fix Property References
```bash
# Update Dashboard.tsx
# Change line 45: return user.userName
# To:             return user.username

# Update Profile.tsx
# Change line 23 and 67 similarly

# Update user-helper.ts
# Change line 12 similarly
```

### Step 2: Verify Type Checking Locally
```bash
npm run type-check
# Should pass with no errors
```

### Step 3: Run Build Locally
```bash
npm run build
# Should complete successfully
```

### Step 4: Run Tests
```bash
npm test
# Ensure no tests broken by changes
```

### Step 5: Commit and Push
```bash
git add src/components/Dashboard.tsx src/components/Profile.tsx src/utils/user-helper.ts
git commit -m "fix: update userName to username in remaining files"
git push
```

### Step 6: Verify CI Passes
Wait for GitHub Actions to run and verify build succeeds.

## Prevention Measures

### 1. Add Pre-commit Hook
```bash
# .husky/pre-commit
npm run type-check
```

### 2. Add GitHub Actions Type Check Step
```yaml
# .github/workflows/ci.yml
- name: Type check
  run: npm run type-check
```

### 3. Configure VS Code
```json
// .vscode/settings.json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

## Estimated Time
- Fix implementation: 5 minutes
- Testing: 5 minutes
- Total: 10 minutes

## Risk Level: Low
- Straightforward property rename
- Type system catches all instances
- No runtime logic changes

---

✓ Plan complete (45 seconds total)

Next step: Review plan and implement fixes
Use: /cook [implement plan from plans/fix-ci-build-12345.md]
```

### Test Failure Analysis

```bash
/plan:ci https://github.com/user/repo/actions/runs/67890
```

**What happens:**
```
Phase 1: Fetching Logs
---
Workflow: Test Suite
Job: test
Status: Failed
Duration: 4m 32s

Failed tests:
---
FAIL src/auth/login.test.ts
  ✓ should validate email format (25ms)
  ✓ should require password (18ms)
  ✗ should authenticate valid credentials (2503ms)

Error: Timeout - Async callback was not invoked within
the 2000ms timeout specified by jest.setTimeout.

FAIL src/api/users.test.ts
  ✗ should fetch user list (5002ms)

Error: connect ECONNREFUSED 127.0.0.1:5432

---

Phase 2: Error Analysis
---
Two types of errors identified:

ERROR 1: Test Timeout
- Tests taking > 2 seconds
- Async callback not invoked
- Likely cause: API not mocking properly

ERROR 2: Database Connection Refused
- PostgreSQL not running in CI
- Port 5432 connection refused
- Missing service configuration

Root causes:
1. GitHub Actions workflow missing PostgreSQL service
2. Tests not properly mocked (hitting real API)
3. Test timeout too short for integration tests

Phase 3: Plan Created
---

## Root Cause Analysis

### Issue 1: Missing PostgreSQL Service
CI workflow doesn't define PostgreSQL service container.
Integration tests fail with connection refused.

### Issue 2: Unmocked API Calls
Login test making real HTTP request instead of using mocks.
Exceeds 2-second timeout.

## Solution Plan

### Fix 1: Add PostgreSQL Service to CI

Update `.github/workflows/ci.yml`:

```yaml
jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_USER: testuser
          POSTGRES_PASSWORD: testpass
          POSTGRES_DB: testdb
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432

    env:
      DATABASE_URL: postgresql://testuser:testpass@localhost:5432/testdb

    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run migrate:test
      - run: npm test
```

### Fix 2: Mock API Calls in Login Test

Update `src/auth/login.test.ts`:

```typescript
// Before:
it('should authenticate valid credentials', async () => {
  const result = await login(email, password);
  expect(result).toBeDefined();
});

// After:
import { mockApiClient } from '../test-utils/mocks';

it('should authenticate valid credentials', async () => {
  mockApiClient.post.mockResolvedValueOnce({
    data: { token: 'mock-token', user: { id: 1 } }
  });

  const result = await login(email, password);
  expect(result.token).toBe('mock-token');
});
```

### Fix 3: Increase Timeout for Integration Tests

Update `jest.config.js`:

```javascript
module.exports = {
  testTimeout: 10000, // 10 seconds for integration tests
  testMatch: [
    '**/__tests__/**/*.test.ts',
    '**/*.integration.test.ts'
  ],
};
```

## Implementation Steps

1. Update GitHub Actions workflow (1 file)
2. Add API mocks to login test (1 file)
3. Update Jest config (1 file)
4. Run tests locally to verify
5. Commit and push
6. Verify CI passes

## Estimated Time: 15 minutes

## Risk Level: Medium
- Database service config requires careful setup
- Must ensure test environment variables correct
- Migration must run before tests

---

✓ Plan complete

Next: /cook [implement CI fixes from plan]
```

### Deployment Failure

```bash
/plan:ci https://github.com/user/repo/actions/runs/11111
```

**What happens:**
```
Phase 1: Fetching Logs
---
Workflow: Deploy to Production
Job: deploy
Status: Failed
Duration: 1m 8s

Error:
---
Run docker build -t myapp:latest .
ERROR [build 5/8] RUN npm ci --only=production
npm ERR! code ENOTFOUND
npm ERR! errno ENOTFOUND
npm ERR! network request to https://registry.npmjs.org/...
npm ERR! network This is a problem related to network connectivity.

Error: Process completed with exit code 1.
---

Phase 2: Analysis
---
Error type: Network error during npm install
Root cause: npm registry unreachable OR rate limited

Contributing factors:
- No npm cache in CI
- Rebuilding dependencies every time
- Potential npm registry rate limiting

Phase 3: Plan Created
---

## Root Cause
npm registry connection failed during Docker build.
No caching strategy = slow builds + rate limit risk.

## Solution Plan

### Fix 1: Add Dependency Caching

Update `.github/workflows/deploy.yml`:

```yaml
- name: Cache node modules
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-

- name: Install dependencies
  run: npm ci --prefer-offline
```

### Fix 2: Add Retry Logic

```yaml
- name: Install dependencies with retry
  uses: nick-invision/retry@v2
  with:
    timeout_minutes: 10
    max_attempts: 3
    command: npm ci
```

### Fix 3: Use BuildKit Cache

Update Dockerfile:

```dockerfile
# syntax=docker/dockerfile:1

FROM node:20-alpine AS builder

# Enable BuildKit cache mount
RUN --mount=type=cache,target=/root/.npm \
    npm ci --only=production

COPY . .
RUN npm run build

FROM node:20-alpine
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
CMD ["node", "dist/index.js"]
```

### Fix 4: Consider Private Registry Mirror

For enterprise: Set up Verdaccio or Artifactory as cache.

```yaml
env:
  NPM_CONFIG_REGISTRY: https://npm-cache.company.com
```

## Implementation Steps

1. Add caching to workflow
2. Add retry action
3. Update Dockerfile with BuildKit
4. Test build locally
5. Deploy to staging first
6. Verify production deployment

## Estimated Time: 25 minutes

## Prevention
- Monitor npm registry status
- Consider npm Enterprise
- Set up internal registry mirror
- Use lock files (already using package-lock.json ✓)

---

✓ Plan complete
```

## When to Use

### ✅ Use /plan:ci for:

**Build Failures**
```bash
/plan:ci https://github.com/user/repo/actions/runs/12345
```

**Test Failures**
```bash
/plan:ci https://github.com/user/repo/actions/runs/67890
```

**Deployment Issues**
```bash
/plan:ci https://github.com/user/repo/actions/runs/11111
```

**Linting/Type Errors**
```bash
/plan:ci https://github.com/user/repo/actions/runs/22222
```

**Environment Issues**
```bash
/plan:ci https://github.com/user/repo/actions/runs/33333
```

### ❌ Don't use for:

**Local Issues**
- Debug locally first
- Only use for actual CI failures

**Minor Failures Already Fixed**
- If you know the fix, just implement it

## Plan-Only Approach

`/plan:ci` creates a plan but does NOT implement:

**Why plan-only?**
- CI issues need careful review
- Multiple possible solutions
- Environment-specific considerations
- You decide which approach to take

**After getting plan:**
```bash
# Option 1: Implement manually
cat plans/fix-ci-*.md
# Follow steps yourself

# Option 2: Use /cook to implement
/cook [implement CI fix plan]

# Option 3: Use /fix:ci to auto-implement
/fix:ci https://github.com/user/repo/actions/runs/12345
```

## Plan Structure

Every plan includes:

### 1. Root Cause Analysis

```markdown
## Root Cause
Clear explanation of why CI failed.
Not just symptoms, but underlying issue.
```

### 2. Solution Options

```markdown
## Solution Options

### Option A: Quick Fix
- Pros: Fast, minimal changes
- Cons: May not prevent recurrence

### Option B: Proper Fix
- Pros: Addresses root cause
- Cons: More time, more changes

Recommendation: Option B
```

### 3. Files to Modify

```markdown
## Files to Change

1. .github/workflows/ci.yml
   - Add PostgreSQL service
   - Configure environment variables

2. jest.config.js
   - Increase timeout to 10s

3. src/auth/login.test.ts
   - Add API mocks
```

### 4. Step-by-Step Instructions

```markdown
## Implementation Steps

### Step 1: Update Workflow
```yaml
# Exact YAML to add
```

### Step 2: Update Tests
```typescript
// Exact code changes
```

### Step 3: Verify Locally
```bash
npm test
```
```

### 5. Prevention Measures

```markdown
## Prevention

To prevent this issue in future:
- Add pre-commit type checking
- Update CI to run on all branches
- Add test coverage requirements
```

### 6. Risk Assessment

```markdown
## Risk Level: Low/Medium/High

Risks:
- Risk 1: Description
- Risk 2: Description

Mitigation:
- Deploy to staging first
- Run full test suite
```

## Output Files

After `/plan:ci` completes:

### Implementation Plan

```
plans/fix-ci-[run-id]-[date].md
```

Complete plan with all details

### Error Analysis

```
plans/ci-error-analysis-[run-id].md
```

Detailed error breakdown

## Common CI Issues Detected

### Build Errors

- TypeScript compilation errors
- Missing dependencies
- Build script failures
- Environment variable issues

### Test Failures

- Flaky tests
- Missing test dependencies
- Database connection issues
- Timeout errors
- Mock/stub issues

### Deployment Issues

- Docker build failures
- Registry connection issues
- Missing secrets/credentials
- Permission errors

### Environment Issues

- Node version mismatches
- Missing system dependencies
- Service configuration missing
- Port conflicts

## Best Practices

### Provide Full URL

✅ **Good:**
```bash
/plan:ci https://github.com/user/repo/actions/runs/12345
```

❌ **Bad:**
```bash
/plan:ci 12345  # Missing repo context
```

### Review Plan Before Implementing

```bash
# 1. Get plan
/plan:ci [url]

# 2. READ the plan
cat plans/fix-ci-*.md

# 3. Understand the root cause

# 4. Then implement
/cook [implement from plan]
```

### Test Locally First

```bash
# Before implementing in CI:
npm run build   # Test build
npm test        # Test tests
npm run lint    # Test linting

# If local works but CI fails:
# Issue is environment-specific
```

## After Getting Plan

Standard workflow:

```bash
# 1. Get analysis and plan
/plan:ci https://github.com/user/repo/actions/runs/12345

# 2. Review plan
cat plans/fix-ci-12345.md

# 3. Choose implementation approach

# Option A: Implement manually
# Follow steps in plan

# Option B: Use /code (recommended - uses existing plan)
/code @plans/fix-ci-12345.md

# Option C: Use /fix:ci (auto-implements)
/fix:ci https://github.com/user/repo/actions/runs/12345

# 4. Test locally first
npm test
npm run build

# 5. Commit and push
/git:cm

# 6. Verify CI passes
# Check GitHub Actions
```

## Next Steps

- [/fix:ci](/docs/commands/fix/ci) - Auto-implement CI fix
- [/code](/docs/commands/core/code) - Implement existing plan
- [/debug](/docs/commands/core/debug) - Debug complex issues

---

**Key Takeaway**: `/plan:ci` analyzes GitHub Actions failures, identifies root causes, and creates detailed implementation plans with step-by-step instructions—giving you full control over how to fix CI/CD issues without automatic implementation.
