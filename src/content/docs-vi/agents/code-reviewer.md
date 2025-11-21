---
title: Code Reviewer Agent
description: Comprehensive code quality assessment with security audits, performance analysis, and actionable recommendations
category: agents
order: 7
published: true
---

# Code Reviewer Agent

The code reviewer agent performs comprehensive code quality assessments including security audits, performance analysis, type safety validation, and provides categorized recommendations with priority levels.

## Purpose

Assess code quality, identify security vulnerabilities, validate type safety, analyze performance, and ensure code meets project standards before merging.

## When Activated

The code reviewer agent activates when:

- Using `/review [scope]` command
- After implementing features
- Before creating pull requests
- When code quality issues detected
- During security assessment
- When performance bottlenecks suspected
- After refactoring
- Before production deployment

## Capabilities

### Code Quality Assessment

- **Architecture Review**: Design patterns, SOLID principles
- **Code Organization**: File structure, module boundaries
- **Naming Conventions**: Variables, functions, classes
- **Code Duplication**: DRY violations, refactoring opportunities
- **Complexity Analysis**: Cyclomatic complexity, cognitive load
- **Documentation**: Comments, JSDoc, README files

### Security Audit

- **OWASP Top 10**: Common security vulnerabilities
- **Authentication**: Token handling, session management
- **Authorization**: Access control, permission checks
- **Input Validation**: SQL injection, XSS, CSRF prevention
- **Secrets Management**: API keys, credentials exposure
- **Dependencies**: Known vulnerabilities in packages

### Performance Analysis

- **Algorithm Efficiency**: Big O complexity, optimization
- **Database Queries**: N+1 problems, missing indexes
- **Memory Usage**: Leaks, unnecessary allocations
- **Bundle Size**: Code splitting, tree shaking
- **Caching**: Opportunities for performance improvement
- **Async Operations**: Promise handling, race conditions

### Type Safety Validation

- **TypeScript**: Strict mode compliance, any usage
- **Dart**: Null safety, type annotations
- **Type Coverage**: Percentage of typed code
- **Type Assertions**: Unsafe casts, type guards
- **Generic Types**: Proper usage, constraints

### Build & Deployment

- **Compilation**: Zero errors in production build
- **Linting**: Code style consistency
- **Dead Code**: Unused imports, unreachable code
- **Dependencies**: Outdated packages, security patches
- **Configuration**: Environment variables, feature flags

## Review Categories

### Critical (Must Fix)

Issues that pose immediate risk:
- Security vulnerabilities
- Data loss potential
- Authentication bypass
- Production crash scenarios
- Breaking API changes

### High Priority (Should Fix)

Issues affecting reliability:
- Performance degradation
- Type safety violations
- Memory leaks
- Error handling gaps
- Test coverage gaps (<80%)

### Medium Priority (Recommended)

Issues affecting maintainability:
- Code smells
- Naming inconsistencies
- Missing documentation
- Code duplication
- Complex functions (>50 lines)

### Low Priority (Optional)

Minor improvements:
- Style inconsistencies
- Minor optimizations
- Comment improvements
- Variable naming tweaks

## Example Usage

### Feature Review

**Input:**
```bash
/review [user authentication module]
```

**Process:**
```
1. Scope Analysis (10s)
   Discovering files...

   Found:
   - src/auth/login.ts
   - src/auth/register.ts
   - src/auth/jwt.ts
   - src/auth/middleware.ts
   - src/auth/validators.ts
   - tests/auth/*.test.ts

   Total: 6 source files, 3 test files
   Lines: 1,247 (excluding tests)

2. Code Quality Analysis (45s)
   Running parallel scouts...

   Scout 1: Security patterns
   Scout 2: Type safety
   Scout 3: Performance issues
   Scout 4: Test coverage
   Scout 5: Documentation

3. Security Audit (30s)
   Checking OWASP Top 10...
   Analyzing authentication flow...
   Reviewing token handling...
   Checking input validation...

4. Report Generation (15s)
   Categorizing findings...
   Generating recommendations...
   Creating action items...

   Review complete: 12 issues found
   - Critical: 2
   - High: 3
   - Medium: 5
   - Low: 2
```

**Generated Report:**

```markdown
# Code Review Report: User Authentication Module

## Summary

| Category | Count | Status |
|----------|-------|--------|
| Critical | 2 | ✗ Must fix |
| High | 3 | ⚠ Should fix |
| Medium | 5 | ℹ Recommended |
| Low | 2 | ○ Optional |
| **Total** | **12** | |

**Overall Assessment**: Not ready for production - critical security issues must be addressed.

---

## Critical Issues (Must Fix Before Merge)

### 1. JWT Secret Stored in Source Code

**Severity**: Critical - Security Vulnerability
**Category**: Secrets Management / OWASP A07:2021 - Identification and Authentication Failures

**Location:** `src/auth/jwt.ts:5`

**Issue:**
```typescript
// src/auth/jwt.ts
const JWT_SECRET = 'super-secret-key-123'; // ✗ CRITICAL

export const signToken = (payload: any) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
};
```

**Why This is Critical:**
- Secret is committed to version control (visible in git history)
- Anyone with repository access can forge valid tokens
- Changing secret invalidates all existing user sessions
- Attackers can authenticate as any user

**Impact:**
- Complete authentication bypass
- Unauthorized access to all user accounts
- Data breach potential

**Fix:**
```typescript
// src/auth/jwt.ts
const JWT_SECRET = process.env.JWT_SECRET; // ✓ Load from environment

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required');
}

export const signToken = (payload: any) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
};
```

**Required Actions:**
1. Remove secret from source code
2. Generate new cryptographically secure secret:
   ```bash
   openssl rand -base64 64
   ```
3. Store in environment variables:
   ```bash
   # .env (not committed)
   JWT_SECRET=<generated-secret>
   ```
4. Add to CI/CD secrets
5. Update all environments (dev, staging, prod)
6. Rotate secret in production (invalidates existing sessions)
7. Add pre-commit hook to prevent secrets:
   ```bash
   npm install --save-dev @commitlint/cli detect-secrets
   ```

**Validation:**
- [ ] Secret removed from all git history
- [ ] Environment variables configured
- [ ] Application starts without errors
- [ ] Token signing/verification works
- [ ] Pre-commit hook prevents future issues

---

### 2. SQL Injection Vulnerability

**Severity**: Critical - Security Vulnerability
**Category**: OWASP A03:2021 - Injection

**Location:** `src/auth/login.ts:23`

**Issue:**
```typescript
// src/auth/login.ts
export const loginUser = async (email: string, password: string) => {
  // ✗ CRITICAL: SQL Injection vulnerability
  const query = `SELECT * FROM users WHERE email = '${email}'`;
  const result = await db.raw(query);

  if (!result.rows[0]) {
    throw new Error('User not found');
  }

  // ... password verification
};
```

**Why This is Critical:**
- Attacker can bypass authentication with: `' OR '1'='1`
- Can extract entire database: `' UNION SELECT * FROM users --`
- Can delete data: `'; DROP TABLE users; --`
- No input sanitization

**Example Attack:**
```bash
# Bypass authentication
POST /api/auth/login
{
  "email": "admin@example.com' OR '1'='1' --",
  "password": "anything"
}

# Extract all users
POST /api/auth/login
{
  "email": "' UNION SELECT id, email, password, null FROM users --",
  "password": ""
}
```

**Impact:**
- Complete database compromise
- Authentication bypass
- Data exfiltration
- Data destruction

**Fix:**
```typescript
// src/auth/login.ts
export const loginUser = async (email: string, password: string) => {
  // ✓ Use parameterized queries
  const result = await db('users')
    .where({ email })
    .first();

  if (!result) {
    throw new Error('User not found');
  }

  // Verify password
  const isValid = await bcrypt.compare(password, result.password);

  if (!isValid) {
    throw new Error('Invalid password');
  }

  return result;
};
```

**Alternative (with raw queries):**
```typescript
// If raw SQL is necessary, use parameterized queries
const result = await db.raw(
  'SELECT * FROM users WHERE email = ?',
  [email] // ✓ Parameters are escaped
);
```

**Required Actions:**
1. Replace all string concatenation queries
2. Use ORM query builders or parameterized queries
3. Add input validation:
   ```typescript
   import { z } from 'zod';

   const loginSchema = z.object({
     email: z.string().email().max(255),
     password: z.string().min(8).max(100)
   });
   ```
4. Add security scanning to CI/CD:
   ```bash
   npm install --save-dev eslint-plugin-security
   ```
5. Audit all database queries in codebase
6. Add prepared statement enforcement

**Validation:**
- [ ] No string concatenation in queries
- [ ] Input validation on all endpoints
- [ ] Security linting passes
- [ ] Penetration testing shows no injection

---

## High Priority Issues (Should Fix)

### 3. Missing Password Complexity Requirements

**Severity**: High - Security
**Category**: OWASP A07:2021 - Identification and Authentication Failures

**Location:** `src/auth/register.ts:15`

**Issue:**
```typescript
// src/auth/register.ts
export const registerUser = async (data: RegisterDTO) => {
  // ✗ No password validation
  const hashedPassword = await bcrypt.hash(data.password, 10);

  return db('users').insert({
    email: data.email,
    password: hashedPassword
  });
};
```

**Why This Matters:**
- Users can set weak passwords: "123456", "password"
- No minimum length enforcement
- No complexity requirements
- Vulnerable to brute force attacks

**Impact:**
- Account takeover via brute force
- Credential stuffing attacks
- Password guessing

**Fix:**
```typescript
// src/auth/validators.ts
import { z } from 'zod';

export const passwordSchema = z.string()
  .min(12, 'Password must be at least 12 characters')
  .max(128, 'Password must be less than 128 characters')
  .regex(/[a-z]/, 'Password must contain lowercase letter')
  .regex(/[A-Z]/, 'Password must contain uppercase letter')
  .regex(/[0-9]/, 'Password must contain number')
  .regex(/[^a-zA-Z0-9]/, 'Password must contain special character');

// src/auth/register.ts
export const registerUser = async (data: RegisterDTO) => {
  // ✓ Validate password
  const validatedPassword = passwordSchema.parse(data.password);

  // ✓ Check against common passwords
  const isCommon = await checkCommonPassword(validatedPassword);
  if (isCommon) {
    throw new Error('Password is too common');
  }

  const hashedPassword = await bcrypt.hash(validatedPassword, 10);

  return db('users').insert({
    email: data.email,
    password: hashedPassword
  });
};
```

**Additional Improvements:**
```typescript
// Check against Have I Been Pwned API
import { pwnedPassword } from 'hibp';

const isPwned = await pwnedPassword(password);
if (isPwned > 0) {
  throw new Error('Password has been exposed in data breaches');
}
```

**Required Actions:**
1. Implement password complexity rules
2. Add common password blacklist
3. Consider HIBP integration
4. Add password strength indicator in UI
5. Enforce password policy on registration

**Validation:**
- [ ] Weak passwords rejected
- [ ] Common passwords blocked
- [ ] Password policy documented
- [ ] Tests cover edge cases

---

### 4. No Rate Limiting on Login Endpoint

**Severity**: High - Security
**Category**: OWASP A07:2021 - Identification and Authentication Failures

**Location:** `src/routes/auth.routes.ts:10`

**Issue:**
```typescript
// src/routes/auth.routes.ts
router.post('/login', loginController); // ✗ No rate limiting
```

**Why This Matters:**
- Allows unlimited login attempts
- Vulnerable to brute force attacks
- No protection against credential stuffing
- No IP-based throttling

**Attack Scenario:**
```bash
# Attacker can try thousands of passwords
for password in wordlist.txt; do
  curl -X POST https://api.example.com/auth/login \
    -d "{\"email\":\"victim@example.com\",\"password\":\"$password\"}"
done
```

**Impact:**
- Account takeover via brute force
- Service degradation (DDoS)
- Resource exhaustion

**Fix:**
```typescript
// src/middleware/rate-limit.ts
import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export const loginRateLimit = rateLimit({
  store: new RedisStore({
    client: redis,
    prefix: 'rl:login:'
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many login attempts, please try again later',
  skipSuccessfulRequests: true // Only count failed attempts
});

// src/routes/auth.routes.ts
import { loginRateLimit } from '@/middleware/rate-limit';

router.post('/login', loginRateLimit, loginController); // ✓ Rate limited
```

**Additional Security:**
```typescript
// Account lockout after failed attempts
// src/auth/login.ts
export const loginUser = async (email: string, password: string) => {
  const user = await db('users').where({ email }).first();

  if (!user) {
    // Increment failed attempts for non-existent users too (prevent enumeration)
    await redis.incr(`login:failed:${email}`);
    throw new Error('Invalid credentials');
  }

  // Check if account is locked
  const failedAttempts = await redis.get(`login:failed:${email}`);
  if (parseInt(failedAttempts || '0') >= 5) {
    const lockoutExpiry = await redis.ttl(`login:failed:${email}`);
    throw new Error(`Account locked. Try again in ${lockoutExpiry} seconds`);
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    // Increment failed attempts
    await redis.incr(`login:failed:${email}`);
    await redis.expire(`login:failed:${email}`, 900); // 15 min expiry
    throw new Error('Invalid credentials');
  }

  // Reset failed attempts on successful login
  await redis.del(`login:failed:${email}`);

  return user;
};
```

**Required Actions:**
1. Implement rate limiting on login endpoint
2. Add account lockout mechanism
3. Add CAPTCHA after 3 failed attempts
4. Monitor for brute force patterns
5. Alert on suspicious activity

**Validation:**
- [ ] Rate limiting enforced
- [ ] Account lockout works
- [ ] Monitoring alerts configured
- [ ] Load testing shows no bypass

---

### 5. TypeScript `any` Type Overuse

**Severity**: High - Type Safety
**Category**: Code Quality

**Issue:**
Found 23 instances of `any` type across authentication module:

```typescript
// src/auth/jwt.ts:7
export const signToken = (payload: any) => { // ✗
  return jwt.sign(payload, JWT_SECRET);
};

// src/auth/middleware.ts:12
export const authenticate = async (req: any, res: any, next: any) => { // ✗
  // ...
};

// src/auth/validators.ts:5
export const validateInput = (schema: any, data: any) => { // ✗
  // ...
};
```

**Why This Matters:**
- Loses all type checking benefits
- Errors only caught at runtime
- Difficult to refactor safely
- Poor IDE autocomplete
- Reduces code confidence

**Impact:**
- Runtime errors in production
- Increased debugging time
- Harder to maintain

**Fix:**
```typescript
// src/auth/types.ts
export interface JWTPayload {
  userId: string;
  email: string;
  role: 'user' | 'admin';
  iat: number;
  exp: number;
}

export interface AuthRequest extends Request {
  user?: JWTPayload;
}

// src/auth/jwt.ts
import { JWTPayload } from './types';

export const signToken = (payload: Omit<JWTPayload, 'iat' | 'exp'>): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
};

export const verifyToken = (token: string): JWTPayload => {
  return jwt.verify(token, JWT_SECRET) as JWTPayload;
};

// src/auth/middleware.ts
import { Response, NextFunction } from 'express';
import { AuthRequest } from './types';

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ error: 'No token provided' });
    return;
  }

  try {
    const payload = verifyToken(token);
    req.user = payload; // ✓ Type-safe
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
```

**Required Actions:**
1. Define explicit types for all functions
2. Enable TypeScript strict mode:
   ```json
   {
     "compilerOptions": {
       "strict": true,
       "noImplicitAny": true,
       "strictNullChecks": true,
       "strictFunctionTypes": true
     }
   }
   ```
3. Add ESLint rule:
   ```json
   {
     "rules": {
       "@typescript-eslint/no-explicit-any": "error"
     }
   }
   ```
4. Fix all `any` usages (23 instances)

**Validation:**
- [ ] Zero `any` types remain
- [ ] TypeScript strict mode passes
- [ ] ESLint passes with no-explicit-any rule
- [ ] Tests pass with strict types

---

## Medium Priority Issues (Recommended)

### 6. Missing Error Handling in Async Functions

**Severity**: Medium - Reliability
**Files**: 8 functions across 4 files

**Examples:**
```typescript
// src/auth/register.ts:23
export const registerUser = async (data: RegisterDTO) => {
  // ✗ No try-catch, errors bubble up unhandled
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return db('users').insert({ email: data.email, password: hashedPassword });
};

// src/auth/jwt.ts:15
export const verifyToken = async (token: string) => {
  // ✗ jwt.verify can throw, not caught
  return jwt.verify(token, JWT_SECRET);
};
```

**Fix:**
```typescript
// Create centralized error handler
// src/errors/auth-errors.ts
export class AuthError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number
  ) {
    super(message);
    this.name = 'AuthError';
  }
}

export class InvalidTokenError extends AuthError {
  constructor(message = 'Invalid token') {
    super(message, 'INVALID_TOKEN', 401);
  }
}

export class UserExistsError extends AuthError {
  constructor(message = 'User already exists') {
    super(message, 'USER_EXISTS', 409);
  }
}

// src/auth/register.ts
import { UserExistsError } from '@/errors/auth-errors';

export const registerUser = async (data: RegisterDTO) => {
  try {
    // Check if user exists
    const existingUser = await db('users').where({ email: data.email }).first();
    if (existingUser) {
      throw new UserExistsError();
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await db('users').insert({
      email: data.email,
      password: hashedPassword
    });
  } catch (error) {
    if (error instanceof UserExistsError) {
      throw error;
    }

    // Log unexpected errors
    logger.error('Registration failed', { error, email: data.email });
    throw new AuthError('Registration failed', 'REGISTRATION_ERROR', 500);
  }
};

// src/auth/jwt.ts
import { InvalidTokenError } from '@/errors/auth-errors';

export const verifyToken = (token: string): JWTPayload => {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new InvalidTokenError('Token expired');
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new InvalidTokenError('Malformed token');
    }
    throw new InvalidTokenError();
  }
};
```

**Required Actions:**
1. Add error classes for all scenarios
2. Wrap async operations in try-catch
3. Log errors with context
4. Return appropriate HTTP status codes
5. Add error monitoring (Sentry)

---

### 7. Test Coverage Below Target (67%)

**Severity**: Medium - Quality
**Target**: 80%+

**Coverage Report:**
```
File                     | Stmts | Branch | Funcs | Lines | Uncovered Lines
-------------------------|-------|--------|-------|-------|------------------
src/auth/login.ts        |  84.2 |   75.0 |  100  |  84.2 | 45-48, 67-71
src/auth/register.ts     |  56.3 |   50.0 |   80  |  56.3 | 23-34, 56-67, 89
src/auth/jwt.ts          |  91.7 |   83.3 |  100  |  91.7 | 34-36
src/auth/middleware.ts   |  45.8 |   33.3 |   50  |  45.8 | 12-23, 45-78
src/auth/validators.ts   |  62.5 |   50.0 |   75  |  62.5 | 15-19, 34-45
-------------------------|-------|--------|-------|-------|------------------
Total                    |  67.1 |   58.3 |   81  |  67.1 |
```

**Missing Tests:**
1. Error scenarios (invalid input, network failures)
2. Edge cases (expired tokens, concurrent logins)
3. Security scenarios (SQL injection attempts, XSS)
4. Integration tests (full auth flow)

**Fix:** See [Testing Guide](#testing-recommendations) below

---

### 8. Code Duplication (3 instances)

**Severity**: Medium - Maintainability

**Example:**
```typescript
// Duplicated validation logic
// src/auth/register.ts:15
if (!data.email || !isValidEmail(data.email)) {
  throw new Error('Invalid email');
}

// src/auth/login.ts:12
if (!credentials.email || !isValidEmail(credentials.email)) {
  throw new Error('Invalid email');
}

// src/auth/reset-password.ts:8
if (!email || !isValidEmail(email)) {
  throw new Error('Invalid email');
}
```

**Fix:** Centralize validation with Zod schemas (see issue #5 fix)

---

### 9-10. Additional medium priority issues...

---

## Low Priority Issues (Optional)

### 11. Inconsistent Function Naming

**Severity**: Low - Style

**Issue:**
```typescript
// Mixing conventions
export const registerUser = async () => {}  // camelCase
export const LoginUser = async () => {}     // PascalCase (wrong)
export const verify_token = async () => {}  // snake_case (wrong)
```

**Fix:** Use camelCase consistently for functions

---

### 12. Missing JSDoc Comments

**Severity**: Low - Documentation

**Fix:**
```typescript
/**
 * Authenticates user with email and password
 * @param email - User email address
 * @param password - Plain text password
 * @returns User object with JWT token
 * @throws {AuthError} If credentials are invalid
 */
export const loginUser = async (
  email: string,
  password: string
): Promise<UserWithToken> => {
  // ...
};
```

---

## Task Status Update

**Plan File:** `plans/auth-module-implementation-20241020.md`

### Update Task Status:
```markdown
## Implementation Tasks

- [x] 1. User registration endpoint
- [x] 2. User login endpoint
- [x] 3. JWT token generation
- [x] 4. Auth middleware
- [x] 5. Input validation
- [ ] 6. Security hardening (IN PROGRESS - 5 issues found)
  - [ ] Fix JWT secret storage (Critical)
  - [ ] Fix SQL injection (Critical)
  - [ ] Add password complexity (High)
  - [ ] Add rate limiting (High)
  - [ ] Remove any types (High)
- [ ] 7. Error handling (NOT STARTED - 8 missing handlers)
- [ ] 8. Integration tests (NOT STARTED - coverage 67%, target 80%)
- [ ] 9. Documentation (NOT STARTED)
```

### Next Steps:
1. **DO NOT MERGE** - Critical issues must be fixed
2. Run: `/fix:fast [fix critical security issues]`
3. Run: `/test [verify security fixes]`
4. Run: `/review [re-review after fixes]`
5. Update documentation
6. Request final review

---

## Testing Recommendations

### Add Missing Tests

```typescript
// tests/auth/login.test.ts
describe('loginUser', () => {
  // Happy path (exists but minimal)
  it('logs in with valid credentials', async () => {
    const result = await loginUser('user@example.com', 'Password123!');
    expect(result).toHaveProperty('token');
  });

  // Error scenarios (MISSING)
  it('rejects invalid email format', async () => {
    await expect(loginUser('invalid', 'password'))
      .rejects.toThrow('Invalid email');
  });

  it('rejects non-existent user', async () => {
    await expect(loginUser('notfound@example.com', 'password'))
      .rejects.toThrow('User not found');
  });

  it('rejects incorrect password', async () => {
    await expect(loginUser('user@example.com', 'wrongpassword'))
      .rejects.toThrow('Invalid password');
  });

  it('handles database connection failure', async () => {
    jest.spyOn(db, 'query').mockRejectedValue(new Error('DB error'));
    await expect(loginUser('user@example.com', 'password'))
      .rejects.toThrow();
  });

  // Security scenarios (MISSING)
  it('prevents SQL injection in email field', async () => {
    const maliciousEmail = "' OR '1'='1' --";
    await expect(loginUser(maliciousEmail, 'password'))
      .rejects.toThrow();
  });

  it('rate limits after 5 failed attempts', async () => {
    for (let i = 0; i < 5; i++) {
      await loginUser('user@example.com', 'wrong').catch(() => {});
    }

    await expect(loginUser('user@example.com', 'Password123!'))
      .rejects.toThrow('Too many attempts');
  });

  // Edge cases (MISSING)
  it('handles expired token gracefully', async () => {
    const expiredToken = generateExpiredToken();
    await expect(verifyToken(expiredToken))
      .rejects.toThrow('Token expired');
  });
});
```

---

## Performance Recommendations

### Database Query Optimization

```typescript
// Current (N+1 problem)
const users = await db('users').select('*');
for (const user of users) {
  user.posts = await db('posts').where({ userId: user.id }); // ✗ N queries
}

// Optimized
const users = await db('users')
  .select('users.*')
  .leftJoin('posts', 'users.id', 'posts.userId')
  .groupBy('users.id'); // ✓ 1 query
```

### Add Database Indexes

```sql
-- Missing indexes identified
CREATE INDEX idx_users_email ON users(email); -- Login queries
CREATE INDEX idx_tokens_user_id ON tokens(user_id); -- Token lookups
CREATE INDEX idx_sessions_expires_at ON sessions(expires_at); -- Cleanup job
```

---

## Security Checklist

- [ ] No secrets in source code
- [ ] All inputs validated
- [ ] SQL injection prevented
- [ ] XSS prevention in place
- [ ] CSRF tokens implemented
- [ ] Rate limiting configured
- [ ] Account lockout enabled
- [ ] Password complexity enforced
- [ ] Tokens securely generated
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] Dependencies scanned for vulnerabilities

---

## Deployment Blockers

**Cannot deploy to production until:**

1. ✗ Critical security issues fixed (2)
2. ✗ High priority issues addressed (3)
3. ⚠ Test coverage above 80% (currently 67%)
4. ✓ TypeScript compilation passes
5. ✓ Linting passes (with warnings)

**Estimated Time to Production-Ready:** 6-8 hours

---

## Tools Used

- **Parallel Scouts**: 5 agents analyzing different aspects
- **Repomix**: Generated codebase summary for analysis
- **Security Scanners**: ESLint security plugin, npm audit
- **Type Checker**: TypeScript compiler strict mode
- **Test Coverage**: Jest/Vitest coverage reports

---

## Comparison with Codebase Standards

**Reference:** `docs/code-standards.md`

| Standard | Required | Current | Status |
|----------|----------|---------|--------|
| Test Coverage | 80%+ | 67% | ✗ |
| TypeScript Strict | Yes | Partial | ✗ |
| No `any` Types | Yes | 23 found | ✗ |
| Error Handling | All async | Missing 8 | ✗ |
| Security Scan | Pass | 5 issues | ✗ |
| Documentation | JSDoc | Missing | ⚠ |
| Linting | Pass | 3 warnings | ⚠ |

**Assessment:** Does not meet codebase standards

---

## Next Review

After fixes are applied:
```bash
# Re-run review to verify fixes
/review [user authentication module]

# Expected result:
# - 0 critical issues
# - 0-1 high priority issues
# - <5 medium priority issues
# - Test coverage 80%+
# - Production ready ✓
```

---

**Review Completed**: 2024-10-20 15:45:00 UTC
**Reviewer**: ClaudeKit Code Reviewer Agent v1.0
**Total Review Time**: 90 seconds
**Files Analyzed**: 9 files (1,247 lines)
**Issues Found**: 12 (2 critical, 3 high, 5 medium, 2 low)
**Recommendation**: **Do not merge** - Fix critical issues first
```

## Best Practices

### Review Workflow

```bash
# 1. Implement feature
/cook [implement user authentication]

# 2. Run tests
/test

# 3. Code review
/review [user authentication module]

# 4. Fix issues
/fix:fast [fix critical security issues found in review]

# 5. Re-test
/test

# 6. Re-review
/review [user authentication module]

# 7. If approved, create PR
/pr [add user authentication]
```

### Review Scope

**Focused Review:**
```bash
/review [src/auth/] # Specific directory
/review [user authentication] # Feature description
/review [PR-123] # Pull request
```

**Full Codebase Review:**
```bash
/review [entire codebase security audit]
/review [performance analysis]
/review [type safety improvements]
```

## Success Metrics

A successful code review:

- ✅ Identifies all critical security issues
- ✅ Validates type safety compliance
- ✅ Ensures test coverage meets target
- ✅ Provides actionable recommendations
- ✅ Categorizes issues by priority
- ✅ Prevents production incidents
- ✅ Improves code quality over time

## Integration with Development

### Pre-Merge Checklist

```markdown
## Code Review Checklist

- [ ] Run `/review` and address all critical issues
- [ ] Run `/test` and ensure coverage >80%
- [ ] Fix all TypeScript strict mode errors
- [ ] Address security vulnerabilities
- [ ] Update documentation
- [ ] Verify performance is acceptable
- [ ] Ensure backward compatibility
```

## Next Steps

- [Planner](/docs/agents/planner) - Plan fixes for issues
- [Fix Commands](/docs/commands/fix) - Apply fixes
- [Testing](/docs/agents/tester) - Validate fixes

---

**Key Takeaway**: The code reviewer agent provides comprehensive quality assessment with security focus, categorized findings, and clear action items to ensure production-ready code.
