---
title: Implementing Authentication
description: Complete authentication system implementation from JWT to OAuth2 with security best practices
category: use-cases
order: 7
published: true
---

# Implementing Authentication

Learn how to implement secure authentication systems with ClaudeKit - from basic JWT authentication to OAuth2, 2FA, and passwordless login.

## Overview

**Goal**: Implement secure, production-ready authentication
**Time**: 20-40 minutes (vs 4-8 hours manually)
**Agents Used**: planner, researcher, tester, code-reviewer
**Commands**: /plan, /cook, /test, /docs:update

## Prerequisites

- Existing API or web application
- Database configured (PostgreSQL, MongoDB, etc.)
- Email service for verification (optional)
- OAuth provider accounts (optional: Google, GitHub, etc.)

## Authentication Methods

| Method | Use Case | Security | Complexity | Time |
|--------|----------|----------|------------|------|
| JWT | API authentication | High | Low | 15-20 min |
| Session-based | Traditional web apps | High | Medium | 20-25 min |
| OAuth2 | Social login | Very High | Medium | 25-35 min |
| Passwordless | Magic links, OTP | High | Medium | 20-30 min |
| 2FA | Additional security | Very High | Medium | 15-20 min |
| Biometric | Mobile apps | Very High | High | 30-40 min |

## Step-by-Step Workflow

### Step 1: Plan Authentication Strategy

Choose authentication method and plan implementation:

```bash
/plan [implement JWT authentication with email/password and password reset]
```

**Generated plan**:
```markdown
# JWT Authentication Implementation Plan

## Components

### 1. User Model
- id (UUID)
- email (unique, indexed)
- password (hashed with bcrypt)
- emailVerified (boolean)
- resetToken (nullable)
- resetTokenExpiry (nullable)
- createdAt, updatedAt

### 2. Endpoints
- POST /api/auth/register - User registration
- POST /api/auth/login - User login
- POST /api/auth/logout - User logout
- GET /api/auth/me - Get current user
- POST /api/auth/verify-email - Email verification
- POST /api/auth/forgot-password - Request password reset
- POST /api/auth/reset-password - Reset password
- POST /api/auth/refresh-token - Refresh JWT token

### 3. Middleware
- authenticateJWT - Verify JWT token
- requireAuth - Protect routes
- checkEmailVerified - Require verified email

### 4. Security Features
- Password hashing (bcrypt, 12 rounds)
- JWT token (access + refresh)
- Token expiry (15 min access, 7 day refresh)
- Rate limiting on auth endpoints
- Email verification
- Password strength validation
- Account lockout after failed attempts

### 5. Testing
- Unit tests for auth service
- Integration tests for endpoints
- Security tests (brute force, token theft)
- E2E authentication flows
```

### Step 2: Implement Basic JWT Authentication

```bash
/cook [implement JWT authentication with registration and login]
```

**Implementation**:
```
[1/6] Setting up user model...
  ✓ Created User schema/model
  ✓ Added password hashing hooks
  ✓ Created database migration

[2/6] Implementing JWT service...
  ✓ Token generation (access + refresh)
  ✓ Token verification
  ✓ Token refresh logic
  ✓ Secure token storage

[3/6] Creating auth endpoints...
  ✓ POST /api/auth/register
  ✓ POST /api/auth/login
  ✓ POST /api/auth/logout
  ✓ GET /api/auth/me
  ✓ POST /api/auth/refresh-token

[4/6] Adding middleware...
  ✓ JWT authentication middleware
  ✓ Route protection
  ✓ Error handling

[5/6] Implementing validation...
  ✓ Email format validation
  ✓ Password strength (min 8 chars, uppercase, number, symbol)
  ✓ Input sanitization

[6/6] Testing...
  ✓ 32 tests generated
  ✓ All tests pass
  ✓ Coverage: 93%

✅ JWT authentication implemented

Files created:
- src/models/User.js
- src/services/auth.service.js
- src/middleware/auth.middleware.js
- src/routes/auth.routes.js
- src/utils/jwt.js
- tests/auth/auth.test.js
```

### Step 3: Add Email Verification

```bash
/cook [add email verification to registration process]
```

**Implementation**:
```
[1/4] Email verification setup...
  ✓ Add verificationToken to User model
  ✓ Generate verification tokens
  ✓ Create verification endpoint

[2/4] Email service integration...
  ✓ Email template for verification
  ✓ Send verification email on registration
  ✓ Resend verification email endpoint

[3/4] Middleware...
  ✓ requireEmailVerified middleware
  ✓ Apply to protected routes

[4/4] Testing...
  ✓ Verification flow tests (8 tests)
  ✓ Email sending mocked

✅ Email verification added

Usage:
1. User registers → receives verification email
2. User clicks link → account verified
3. Only verified users access protected routes
```

### Step 4: Implement Password Reset

```bash
/cook [implement password reset with email verification]
```

**Implementation**:
```
[1/5] Database changes...
  ✓ Add resetToken field
  ✓ Add resetTokenExpiry field
  ✓ Migration created

[2/5] Reset flow endpoints...
  ✓ POST /api/auth/forgot-password
  ✓ POST /api/auth/reset-password
  ✓ Token validation logic

[3/5] Email templates...
  ✓ Password reset email
  ✓ Password changed confirmation

[4/5] Security measures...
  ✓ Token expiry (15 minutes)
  ✓ Single-use tokens
  ✓ Rate limiting (5 requests/hour)

[5/5] Testing...
  ✓ Reset flow tests (12 tests)
  ✓ Security tests (token expiry, reuse)

✅ Password reset implemented
```

### Step 5: Add OAuth2 (Social Login)

```bash
/cook [add OAuth2 login with Google and GitHub]
```

**Implementation**:
```
[1/6] OAuth setup...
  ✓ Installed passport.js
  ✓ Configured Google strategy
  ✓ Configured GitHub strategy

[2/6] OAuth endpoints...
  ✓ GET /api/auth/google
  ✓ GET /api/auth/google/callback
  ✓ GET /api/auth/github
  ✓ GET /api/auth/github/callback

[3/6] User model updates...
  ✓ Add oauthProvider field
  ✓ Add oauthId field
  ✓ Link OAuth accounts to existing users

[4/6] Account linking...
  ✓ Link OAuth to email if exists
  ✓ Create new user if doesn't exist
  ✓ Merge accounts logic

[5/6] Frontend integration...
  ✓ OAuth buttons
  ✓ Redirect handling
  ✓ Token extraction

[6/6] Testing...
  ✓ OAuth flow tests (16 tests)
  ✓ Account linking tests

✅ OAuth2 implemented

Configuration needed (.env):
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-secret
GITHUB_CLIENT_ID=your-client-id
GITHUB_CLIENT_SECRET=your-secret
```

### Step 6: Add Two-Factor Authentication (2FA)

```bash
/cook [implement TOTP-based 2FA with QR code setup]
```

**Implementation**:
```
[1/5] 2FA setup...
  ✓ Installed speakeasy (TOTP library)
  ✓ Installed qrcode (QR generation)
  ✓ Add twoFactorSecret to User model
  ✓ Add twoFactorEnabled field

[2/5] 2FA endpoints...
  ✓ POST /api/auth/2fa/setup - Generate QR code
  ✓ POST /api/auth/2fa/verify - Verify and enable
  ✓ POST /api/auth/2fa/disable - Disable 2FA
  ✓ POST /api/auth/login/2fa - Login with 2FA code

[3/5] Modified login flow...
  ✓ Check if 2FA enabled
  ✓ Require 2FA code
  ✓ Validate TOTP token

[4/5] Backup codes...
  ✓ Generate 10 backup codes
  ✓ Store hashed backup codes
  ✓ Use backup code endpoint

[5/5] Testing...
  ✓ 2FA flow tests (14 tests)
  ✓ Backup code tests

✅ 2FA implemented

Flow:
1. User enables 2FA → scans QR code
2. User enters 6-digit code → 2FA activated
3. Future logins require 2FA code
4. Backup codes for emergencies
```

### Step 7: Add Passwordless Authentication

```bash
/cook [implement passwordless login with magic links]
```

**Implementation**:
```
[1/4] Magic link setup...
  ✓ Generate secure login tokens
  ✓ Store tokens with expiry (10 min)
  ✓ Email template for magic link

[2/4] Endpoints...
  ✓ POST /api/auth/magic-link/request
  ✓ GET /api/auth/magic-link/verify
  ✓ Token validation and cleanup

[3/4] Security...
  ✓ Single-use tokens
  ✓ Short expiry (10 minutes)
  ✓ Rate limiting

[4/4] Testing...
  ✓ Magic link flow tests (10 tests)

✅ Passwordless authentication added

Usage:
1. User enters email
2. Receives magic link email
3. Clicks link → automatically logged in
```

### Step 8: Add Security Features

#### Account Lockout

```bash
/cook [add account lockout after 5 failed login attempts]
```

#### Session Management

```bash
/cook [implement session management with active session tracking]
```

#### IP Whitelisting

```bash
/cook [add IP whitelisting option for high-security accounts]
```

### Step 9: Testing Authentication

```bash
/test
```

**Test results**:
```
✓ Unit Tests (48 tests)
  ✓ Password hashing (8 tests)
  ✓ JWT generation/verification (12 tests)
  ✓ Token refresh (6 tests)
  ✓ 2FA TOTP (10 tests)
  ✓ Magic link generation (6 tests)
  ✓ OAuth account linking (6 tests)

✓ Integration Tests (56 tests)
  ✓ Registration (10 tests)
  ✓ Login (12 tests)
  ✓ Password reset (12 tests)
  ✓ OAuth flows (14 tests)
  ✓ 2FA flows (8 tests)

✓ Security Tests (24 tests)
  ✓ Brute force protection (6 tests)
  ✓ Token theft scenarios (8 tests)
  ✓ SQL injection attempts (4 tests)
  ✓ XSS attempts (6 tests)

Test Suites: 3 passed, 3 total
Tests:       128 passed, 128 total
Coverage:    94.7%

✅ All tests passed
```

### Step 10: Security Review

```bash
/review
```

**Security checklist**:
```
✓ Passwords hashed with bcrypt (12 rounds)
✓ JWT tokens properly signed
✓ Refresh tokens securely stored
✓ Rate limiting on auth endpoints
✓ SQL injection protection
✓ XSS protection
✓ CSRF protection
✓ Secure password requirements
✓ Email verification implemented
✓ Account lockout after failed attempts
✓ 2FA option available
✓ Session timeout configured
✓ Secure token storage
✓ HTTPS enforcement
✓ Audit logging enabled

Security Score: 9.4/10 (Excellent)
```

### Step 11: Documentation

```bash
/docs:update
```

**Generated documentation**:
```
✓ Authentication guide
✓ API endpoint documentation
✓ Security best practices
✓ OAuth setup guide
✓ 2FA setup guide
✓ Testing guide
✓ Troubleshooting guide
```

## Complete Example: E-Commerce Authentication

### Requirements

```
Implement authentication for e-commerce site with:
- User registration/login
- Email verification
- Password reset
- Social login (Google, Facebook)
- Guest checkout
- Remember me option
- Account deletion
- GDPR compliance
```

### Implementation

```bash
# Plan authentication
/plan [design authentication system for e-commerce with all requirements]

# Implement base auth
/cook [implement JWT authentication with email verification]

# Add OAuth
/cook [add Google and Facebook OAuth login]

# Guest checkout
/cook [implement guest checkout with optional account creation]

# Remember me
/cook [add remember me functionality with long-lived tokens]

# Account management
/cook [implement account deletion with data export (GDPR)]

# Test everything
/test

# Document
/docs:update
```

### Time Comparison

**Manual implementation**: 6-10 hours
- JWT setup: 1-2 hours
- Email verification: 1 hour
- Password reset: 1 hour
- OAuth setup: 2-3 hours
- Testing: 1-2 hours
- Security review: 1-2 hours

**With ClaudeKit**: 38 minutes
- Planning: 5 minutes
- JWT + email: 10 minutes
- Password reset: 5 minutes
- OAuth: 12 minutes
- Testing: 6 minutes

**Time saved**: 5.5-9.5 hours (88% faster)

## Authentication Patterns

### Pattern 1: API-First Authentication

```bash
/cook [implement JWT authentication optimized for mobile apps]
```

### Pattern 2: SSO (Single Sign-On)

```bash
/cook [implement SSO with SAML for enterprise integration]
```

### Pattern 3: Multi-Tenant Authentication

```bash
/cook [implement multi-tenant authentication with organization isolation]
```

### Pattern 4: Role-Based Access Control (RBAC)

```bash
/cook [add role-based permissions with admin, user, and guest roles]
```

## Best Practices

### 1. Secure Password Storage

```javascript
✅ Good:
- bcrypt with 12+ rounds
- Async password hashing
- Never store plain text

❌ Bad:
- MD5/SHA1 hashing
- No salt
- Plain text passwords
```

### 2. JWT Token Security

```javascript
✅ Good:
- Short access token expiry (15 min)
- Refresh token rotation
- Secure token storage (httpOnly cookies)
- Token blacklisting on logout

❌ Bad:
- Long-lived tokens
- Tokens in localStorage
- No token refresh
- No logout mechanism
```

### 3. Input Validation

```bash
/cook [add comprehensive input validation to all auth endpoints]
```

### 4. Rate Limiting

```javascript
Auth endpoints rate limits:
- Login: 5 attempts per 15 minutes
- Registration: 3 per hour
- Password reset: 3 per hour
- Email verification: 5 per hour
```

### 5. Audit Logging

```bash
/cook [add audit logging for all authentication events]
```

## Troubleshooting

### Issue: Tokens Expiring Too Fast

**Solution**:
```bash
/cook [increase JWT access token expiry to 30 minutes]
```

### Issue: OAuth Callback Failing

**Solution**:
```bash
/fix:fast [OAuth callback returning 400 error]
```

### Issue: Password Reset Not Working

**Solution**:
```bash
/fix:fast [password reset emails not being sent]
```

### Issue: 2FA QR Code Not Displaying

**Solution**:
```bash
/fix:ui [2FA QR code not rendering in mobile view]
```

## Security Checklist

Before production deployment:

```bash
✓ All passwords hashed with bcrypt
✓ JWT tokens use strong secret
✓ Refresh token rotation enabled
✓ Rate limiting configured
✓ HTTPS enforced
✓ CORS properly configured
✓ Input validation on all endpoints
✓ SQL injection protection
✓ XSS protection
✓ CSRF protection
✓ Email verification working
✓ Password reset tested
✓ OAuth redirect URIs whitelisted
✓ 2FA tested with multiple apps
✓ Account lockout working
✓ Audit logging enabled
✓ Error messages don't leak info
✓ Session timeout configured
✓ Secure cookies (httpOnly, secure)
✓ Token blacklist on logout
```

## Next Steps

### Related Use Cases
- [Building a REST API](/docs/use-cases/building-api) - Create APIs
- [Integrating Payments](/docs/use-cases/integrating-payment) - Add payments
- [Adding a New Feature](/docs/use-cases/adding-feature) - Build features

### Related Commands
- [/cook](/docs/commands/core/cook) - Implement features
- [/test](/docs/commands/core/test) - Test suite
- [/fix:fast](/docs/commands/fix/fast) - Quick fixes

### Integration Guides
- [/integrate:polar](/docs/commands/integrate/polar) - Polar payments
- [Better Auth Skill](/docs/skills) - Better Auth framework

### Further Reading
- [JWT Best Practices](https://jwt.io/introduction)
- [OAuth 2.0 Specification](https://oauth.net/2/)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

---

**Key Takeaway**: ClaudeKit enables rapid implementation of secure, production-ready authentication with industry best practices built-in - from basic JWT to OAuth2 and 2FA in under an hour.
