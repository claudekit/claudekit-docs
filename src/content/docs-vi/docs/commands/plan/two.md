---
title: /plan:two
description: "Documentation for /plan:two
description:
section: docs
category: commands/plan
order: 11
published: true"
section: docs
category: commands/plan
order: 11
published: true
---

# /plan:two

Research a task and create two distinct implementation approaches with detailed pros/cons analysis and a clear recommendation. Perfect when you want to evaluate multiple strategies before committing to one.

## Syntax

```bash
/plan:two [task description]
```

## How It Works

The `/plan:two` command follows a comparative planning workflow:

### 1. Requirements Analysis

- Parses task description
- Identifies key objectives
- Determines success criteria
- Recognizes constraints

### 2. Research Phase

Invokes **researcher** agent to:
- Study best practices
- Review similar implementations
- Analyze different architectural patterns
- Research relevant technologies

### 3. Approach Brainstorming

Invokes **planner** agent to:
- Generate multiple possible approaches
- Select two most promising strategies
- Ensure approaches are genuinely different
- Consider trade-offs for each

### 4. Detailed Planning

For each approach creates:
- Architecture/design overview
- Implementation steps
- Technology stack choices
- File structure
- Estimated complexity
- Timeline estimation

### 5. Comparative Analysis

Provides comprehensive comparison:
- Pros and cons for each
- Performance implications
- Maintainability considerations
- Scalability potential
- Development time
- Learning curve
- Cost implications

### 6. Recommendation

Based on analysis provides:
- Recommended approach with clear reasoning
- When to choose alternative approach
- Hybrid possibilities

## Examples

### Authentication System

```bash
/plan:two [implement user authentication system]
```

**What happens:**
```
Phase 1: Requirements Analysis (20 seconds)
---
Agent: planner

Task: Implement user authentication
Key requirements:
✓ User registration and login
✓ Password security
✓ Session management
✓ Token-based auth likely needed
✓ Social auth consideration
✓ Security best practices

Constraints identified:
- Must be secure (top priority)
- Needs to scale
- Should support multiple clients (web, mobile)

Phase 2: Research (45 seconds)
---
Agent: researcher

Authentication patterns analyzed:
✓ Session-based authentication
✓ Token-based (JWT)
✓ OAuth2 / OpenID Connect
✓ Passwordless authentication
✓ Multi-factor authentication

Industry standards reviewed:
✓ OWASP authentication guidelines
✓ OAuth 2.0 specification
✓ JWT best practices
✓ Password hashing (bcrypt, argon2)

Phase 3: Approach Generation (30 seconds)
---
Agent: planner

Generated 4 possible approaches:
1. Traditional session-based with cookies
2. JWT tokens with refresh token rotation
3. OAuth2 with third-party providers only
4. Hybrid: JWT + OAuth2

Selected for detailed planning:
→ Approach 1: JWT Token-Based
→ Approach 2: Session-Based with Redis

(Most applicable to typical use cases)

Phase 4: Detailed Plans Created (60 seconds)
---

APPROACH 1: JWT Token-Based Authentication
==========================================

## Architecture Overview

Client → API → JWT Verification → Route Handler
         ↓
    Database (users, refresh_tokens)

Access token: Short-lived (15 minutes)
Refresh token: Long-lived (7 days)
Storage: Refresh tokens in database
Stateless: No session storage needed

## Technology Stack

- JWT library: jsonwebtoken
- Password hashing: bcrypt or argon2
- Token storage: PostgreSQL (refresh tokens only)
- Middleware: Custom JWT verification
- Security: httpOnly cookies for tokens

## File Structure

src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── jwt.service.ts
│   ├── password.service.ts
│   └── auth.middleware.ts
├── models/
│   ├── user.model.ts
│   └── refresh-token.model.ts
└── routes/
    └── auth.routes.ts

Database tables:
- users (id, email, password_hash, created_at)
- refresh_tokens (id, user_id, token, expires_at)

## Implementation Steps

1. Set up JWT configuration
   - Generate secret keys (access + refresh)
   - Configure expiry times
   - Set up token signing/verification

2. Create User model
   - Email validation
   - Password hashing on save
   - Password comparison method

3. Implement Registration
   - POST /auth/register
   - Validate input
   - Hash password
   - Create user
   - Return tokens

4. Implement Login
   - POST /auth/login
   - Validate credentials
   - Generate access token
   - Generate refresh token
   - Store refresh token in DB
   - Return tokens in httpOnly cookies

5. Implement Token Refresh
   - POST /auth/refresh
   - Verify refresh token
   - Check if valid in DB
   - Generate new access token
   - Rotate refresh token
   - Return new tokens

6. Create Auth Middleware
   - Extract access token from cookie
   - Verify signature
   - Decode payload
   - Attach user to request
   - Handle token expiry

7. Implement Logout
   - POST /auth/logout
   - Invalidate refresh token in DB
   - Clear cookies

## Pros

✅ Stateless - No server session storage needed
✅ Scalable - Works across multiple servers
✅ Mobile-friendly - Tokens easy to store
✅ CORS-friendly - No session cookie issues
✅ Microservices-ready - Token can be verified independently
✅ Fast - No DB lookup for every request (just verify token)
✅ Modern - Industry standard for APIs

## Cons

❌ Token size - JWT tokens are larger than session IDs
❌ Can't invalidate - Access tokens valid until expiry
❌ Security concerns - If stolen, valid until expiry
❌ Refresh token management - Need DB for refresh tokens
❌ More complex - Token rotation, expiry handling
❌ Client responsibility - Client must handle token refresh

## Estimated Complexity
Medium - Standard pattern but requires careful implementation

## Timeline
- Implementation: 2 days
- Testing: 1 day
- Security audit: 0.5 days
- Total: 3.5 days

---

APPROACH 2: Session-Based with Redis
====================================

## Architecture Overview

Client → API → Session Check → Route Handler
         ↓           ↓
    Redis         Database
  (sessions)      (users)

Session cookie: httpOnly, secure
Session storage: Redis (fast lookup)
Session data: User ID, role, metadata
Expiry: 7 days (sliding window)

## Technology Stack

- Session management: express-session
- Session store: connect-redis
- Redis client: ioredis
- Password hashing: bcrypt
- Cookie parser: cookie-parser

## File Structure

src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── password.service.ts
│   └── session.middleware.ts
├── config/
│   ├── redis.config.ts
│   └── session.config.ts
├── models/
│   └── user.model.ts
└── routes/
    └── auth.routes.ts

External:
- Redis server (session storage)

Database tables:
- users (id, email, password_hash, created_at)

## Implementation Steps

1. Set up Redis
   - Install Redis server
   - Configure connection
   - Set up session store

2. Configure Express Session
   - Session secret
   - Cookie options (httpOnly, secure, sameSite)
   - Redis store integration
   - Session duration

3. Create User model
   - Email validation
   - Password hashing
   - Password comparison

4. Implement Registration
   - POST /auth/register
   - Validate input
   - Hash password
   - Create user
   - Create session
   - Return success

5. Implement Login
   - POST /auth/login
   - Validate credentials
   - Create session in Redis
   - Set session cookie
   - Return success

6. Create Auth Middleware
   - Check session exists
   - Verify session not expired
   - Load user data from session
   - Attach user to request
   - Update session expiry (sliding window)

7. Implement Logout
   - POST /auth/logout
   - Destroy session in Redis
   - Clear session cookie
   - Return success

## Pros

✅ Simple - Well-understood pattern
✅ Immediate invalidation - Logout kills session instantly
✅ Server control - Full control over sessions
✅ Smaller cookies - Just session ID
✅ Less client complexity - Client just sends cookie
✅ Mature ecosystem - Many battle-tested libraries
✅ Sliding expiry - Session extends with activity

## Cons

❌ Stateful - Requires session storage (Redis)
❌ Redis dependency - Another service to manage
❌ Scaling complexity - Need shared Redis for multiple servers
❌ Memory cost - Session data stored in Redis
❌ CORS complexity - Cookie-based, requires proper CORS setup
❌ Mobile apps - Cookies less natural on mobile
❌ Microservices - Each service needs Redis access

## Estimated Complexity
Low-Medium - Simpler implementation, but requires Redis

## Timeline
- Implementation: 1.5 days
- Redis setup: 0.5 days
- Testing: 1 day
- Total: 3 days

---

Phase 5: Comparative Analysis
---

COMPARISON MATRIX
=================

| Aspect              | JWT (Approach 1)    | Sessions (Approach 2) |
|---------------------|---------------------|-----------------------|
| Scalability         | ⭐⭐⭐⭐⭐ Excellent  | ⭐⭐⭐⭐☆ Good        |
| Security            | ⭐⭐⭐⭐☆ Good       | ⭐⭐⭐⭐⭐ Excellent   |
| Simplicity          | ⭐⭐⭐☆☆ Moderate   | ⭐⭐⭐⭐☆ Simple       |
| Mobile Support      | ⭐⭐⭐⭐⭐ Excellent  | ⭐⭐⭐☆☆ Moderate     |
| Logout Control      | ⭐⭐⭐☆☆ Limited    | ⭐⭐⭐⭐⭐ Immediate    |
| Performance         | ⭐⭐⭐⭐⭐ Fast      | ⭐⭐⭐⭐☆ Good        |
| Microservices Fit   | ⭐⭐⭐⭐⭐ Perfect   | ⭐⭐⭐☆☆ Challenging  |
| Infrastructure      | ⭐⭐⭐⭐⭐ Minimal   | ⭐⭐⭐☆☆ Needs Redis  |
| CORS Complexity     | ⭐⭐⭐⭐☆ Simple     | ⭐⭐⭐☆☆ Complex      |
| Token Revocation    | ⭐⭐⭐☆☆ Complex    | ⭐⭐⭐⭐⭐ Simple      |

## Performance Considerations

JWT:
- Auth check: ~0.5ms (token verification only)
- No DB/Redis lookup per request
- Scales horizontally easily

Sessions:
- Auth check: ~2-5ms (Redis lookup)
- Network call to Redis per request
- Redis becomes bottleneck at scale

## Security Considerations

JWT:
- Risk: If access token stolen, valid until expiry
- Mitigation: Short expiry (15 min), refresh rotation
- Best for: Public APIs, mobile apps

Sessions:
- Risk: Session fixation attacks
- Mitigation: Regenerate session ID on login
- Best for: Web apps, admin panels

## Scalability

JWT:
- Horizontal scaling: ✅ Perfect
- Load balancing: ✅ No sticky sessions needed
- Microservices: ✅ Each service can verify

Sessions:
- Horizontal scaling: ⚠️ Needs shared Redis
- Load balancing: ⚠️ Redis must be accessible
- Microservices: ⚠️ Centralized session store

Phase 6: Recommendation
---

RECOMMENDED: Approach 1 (JWT Token-Based)
=========================================

## Why JWT?

For most modern applications, JWT is recommended because:

1. **Scalability**: No shared session storage needed
2. **Mobile-first**: Works naturally with mobile apps
3. **Microservices**: Easy to verify tokens independently
4. **API-friendly**: Standard pattern for REST APIs
5. **Modern stack**: Aligns with industry trends

## When to Choose Sessions Instead

Use Approach 2 (Sessions) if:

1. **Web-only application**: No mobile app needed
2. **High security requirements**: Need immediate logout
3. **Small scale**: Single server or small cluster
4. **Simple infrastructure**: Don't want token complexity
5. **Admin dashboard**: Internal tools with tight control

## Hybrid Approach

For maximum flexibility:

1. Use JWT for mobile app and public API
2. Use sessions for admin web dashboard
3. Separate auth flows for different clients

## Implementation Priority

Phase 1: Basic JWT authentication (Week 1)
Phase 2: Refresh token rotation (Week 1)
Phase 3: Security hardening (Week 2)
Phase 4: Multi-factor auth (Future)
Phase 5: Social OAuth (Future)

✓ Planning complete (2 minutes 35 seconds)

Plans saved:
- plans/auth-approach-1-jwt.md
- plans/auth-approach-2-sessions.md
- plans/auth-comparison.md
```

### State Management

```bash
/plan:two [implement global state management for React app]
```

**What happens:**
```
Phase 1-2: Analysis & Research (60 seconds)
---
Task: Global state management for React app

Research findings:
✓ Redux - Most popular, mature
✓ Zustand - Modern, simple
✓ Context API - Built-in
✓ Jotai - Atomic state
✓ MobX - Observable-based

Phase 3-4: Two Approaches Selected
---

APPROACH 1: Zustand (Modern & Simple)
======================================

## Overview
Lightweight state management with hooks-based API.
No boilerplate, minimal concepts, easy to learn.

## Why Zustand?
- Bundle size: 1.2KB (vs Redux 12KB)
- No providers/context needed
- TypeScript-friendly
- DevTools support
- Middleware support

## Implementation

```typescript
// stores/user.store.ts
import create from 'zustand';

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

// Usage in component
function Profile() {
  const { user, logout } = useUserStore();
  return <div>{user?.name}</div>;
}
```

## File Structure
```
src/
├── stores/
│   ├── user.store.ts
│   ├── cart.store.ts
│   └── ui.store.ts
└── hooks/
    └── useStore.ts  (optional helpers)
```

## Pros
✅ Minimal boilerplate
✅ Small bundle size
✅ Easy to learn (<1 hour)
✅ Great TypeScript support
✅ No provider hell
✅ Can split stores by domain

## Cons
❌ Less ecosystem than Redux
❌ No time-travel debugging
❌ Smaller community
❌ Less opinionated (can be pro or con)

Timeline: 0.5 days setup + learning

---

APPROACH 2: Redux Toolkit (Industry Standard)
=============================================

## Overview
Redux with modern API, less boilerplate.
Battle-tested, huge ecosystem, opinionated.

## Why Redux Toolkit?
- Industry standard (most jobs use it)
- Massive ecosystem
- Redux DevTools (time-travel debugging)
- Middleware (thunks, sagas, etc.)
- Immer for immutable updates

## Implementation

```typescript
// store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: User | null;
}

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null } as UserState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Usage
import { useSelector, useDispatch } from 'react-redux';

function Profile() {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return <div>{user?.name}</div>;
}
```

## File Structure
```
src/
├── store/
│   ├── index.ts
│   ├── userSlice.ts
│   ├── cartSlice.ts
│   └── uiSlice.ts
└── App.tsx (wrap with Provider)
```

## Pros
✅ Industry standard
✅ Huge ecosystem
✅ Amazing DevTools
✅ Time-travel debugging
✅ Opinionated (clear patterns)
✅ Great for large teams

## Cons
❌ Larger bundle (~12KB)
❌ More boilerplate
❌ Steeper learning curve
❌ Provider required
❌ Overkill for small apps

Timeline: 1-2 days setup + learning

---

COMPARISON
==========

| Aspect           | Zustand           | Redux Toolkit     |
|------------------|-------------------|-------------------|
| Learning Curve   | 1 hour            | 1-2 days          |
| Bundle Size      | 1.2KB             | 12KB              |
| Boilerplate      | Minimal           | Moderate          |
| DevTools         | Basic             | Advanced          |
| Ecosystem        | Small             | Huge              |
| Job Market       | Growing           | Standard          |
| Team Size        | Small/Medium      | Any size          |
| App Complexity   | Simple/Medium     | Any complexity    |

RECOMMENDATION: Zustand
=======================

For most new React apps, choose Zustand because:

1. Faster to implement (save days of dev time)
2. Easier to maintain (less code)
3. Better performance (smaller bundle)
4. Sufficient for 80% of apps

Choose Redux Toolkit if:

1. Team already knows Redux
2. Need Redux ecosystem (sagas, etc.)
3. Very large app (100+ components)
4. Need advanced debugging
5. Want industry standard for resume

✓ Plans complete
```

## When to Use

### ✅ Use /plan:two for:

**Architecture Decisions**
```bash
/plan:two [choose database: SQL vs NoSQL]
```

**Technology Selection**
```bash
/plan:two [implement caching: Redis vs Memcached]
```

**Design Patterns**
```bash
/plan:two [API design: REST vs GraphQL]
```

**Implementation Strategies**
```bash
/plan:two [file uploads: direct S3 vs presigned URLs]
```

### ❌ Don't use when:

**Only One Obvious Way**
- If one approach clearly superior, just plan that

**Already Decided**
- Use `/plan` if you know which approach to use

**Need More Than Two Options**
- /plan:two specifically compares two approaches

## Comparison Aspects

Every comparison includes:

### 1. Technical Comparison

- Performance implications
- Scalability considerations
- Security aspects
- Maintainability

### 2. Development Comparison

- Implementation complexity
- Development time
- Testing difficulty
- Learning curve

### 3. Operational Comparison

- Infrastructure requirements
- Operating costs
- Monitoring needs
- Deployment complexity

### 4. Team Comparison

- Skill requirements
- Onboarding time
- Documentation needs
- Support availability

## Output Files

After `/plan:two` completes:

### Approach 1 Plan

```
plans/[task]-approach-1-[name].md
```

Complete implementation plan for first approach

### Approach 2 Plan

```
plans/[task]-approach-2-[name].md
```

Complete implementation plan for second approach

### Comparison Document

```
plans/[task]-comparison.md
```

Side-by-side comparison with recommendation

## Best Practices

### Provide Clear Context

✅ **Good:**
```bash
/plan:two [implement real-time features for chat app with 10k concurrent users]
```

❌ **Vague:**
```bash
/plan:two [add real-time]
```

### Specify Constraints

```bash
/plan:two [implement search: full-text search vs vector search, max budget $100/month, need sub-100ms response]
```

## After Getting Plans

Standard workflow:

```bash
# 1. Get two approaches
/plan:two [task]

# 2. Review both plans
cat plans/[task]-approach-1-*.md
cat plans/[task]-approach-2-*.md

# 3. Review comparison
cat plans/[task]-comparison.md

# 4. Make decision
# Consider: team skills, timeline, budget, requirements

# 5. Implement chosen approach (use /code since plan exists)
/code @plans/[task]-approach-1-*.md
# OR
/code @plans/[task]-approach-2-*.md

# 6. Optionally: Hybrid
/code @plans/[task]-approach-1-*.md  # then manually integrate from approach 2
```

## Next Steps

- [/plan](/docs/commands/core/plan) - Single approach planning
- [/code](/docs/commands/core/code) - Implement chosen plan
- [/plan:cro](/docs/commands/plan/cro) - CRO-specific planning

---

**Key Takeaway**: `/plan:two` creates two distinct implementation approaches with detailed pros/cons analysis and clear recommendation, helping you make informed architectural and technical decisions before committing to implementation.
