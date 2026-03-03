---
title: "ckm:better-auth"
description: "Authentication with Better Auth TypeScript framework — email/password, OAuth, magic links, sessions, and role-based access control."
section: marketing
category: skills
order: 64
---

# `ckm:better-auth`

> Implement production-ready authentication with Better Auth — the type-safe, extensible auth framework for TypeScript applications.

## What This Skill Does

**The Challenge**: Authentication is security-critical yet repetitive. Rolling custom auth leads to vulnerabilities. Heavy solutions like Auth0 add cost and vendor lock-in. Teams need a flexible, self-hosted option that stays within their stack.

**The Solution**: Better Auth skill provides complete authentication implementation using the Better Auth TypeScript framework. Covers email/password, OAuth providers, magic links, session management, and RBAC — all with full type safety and zero vendor lock-in.

## Activation

**Implicit**: Activates when user requests authentication, login flows, session management, or user access control.

**Explicit**: Activate via prompt:
```
Activate better-auth skill to implement authentication for [describe app]
```

## Capabilities

### 1. Core Authentication Methods
**Supported providers**:
- Email/password with bcrypt hashing
- OAuth 2.0 (Google, GitHub, Discord, custom)
- Magic links (passwordless via email)
- Passkeys (WebAuthn)
- Phone/SMS OTP

### 2. Installation and Setup
```bash
npm install better-auth
npx better-auth generate
```

**Server setup**:
```typescript
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: { enabled: true },
  socialProviders: {
    google: { clientId: process.env.GOOGLE_CLIENT_ID!, clientSecret: process.env.GOOGLE_CLIENT_SECRET! },
  },
});
```

### 3. Session Management
Cookie-based sessions with automatic refresh and CSRF protection.

**Client usage**:
```typescript
import { createAuthClient } from "better-auth/client";

const client = createAuthClient({ baseURL: "http://localhost:3000" });

await client.signIn.email({ email, password });
const session = await client.getSession();
await client.signOut();
```

### 4. Role-Based Access Control (RBAC)
Define roles and permissions with plugin system.

**RBAC plugin**:
```typescript
import { rbac } from "better-auth/plugins";

export const auth = betterAuth({
  plugins: [rbac({ roles: ["admin", "editor", "viewer"] })],
});
```

## Prerequisites

- Node.js 18+ TypeScript project
- PostgreSQL, MySQL, or SQLite database
- ORM: Prisma, Drizzle, or Kysely

## Best Practices

**1. Always verify sessions server-side**
Never trust client-sent user IDs. Use `auth.api.getSession({ headers })` in every protected route.

**2. Store secrets in environment variables**
`BETTER_AUTH_SECRET` must be a strong random string (32+ chars). Rotate on breach.

**3. Enable email verification for sensitive flows**
Require verified email before accessing paid features or billing.

## Common Use Cases

### Use Case 1: SaaS App with Google OAuth + Email
**Scenario**: Marketing tool with social login and email fallback.

**Workflow**:
1. Install Better Auth, configure Google OAuth credentials
2. Add auth API route: `app/api/auth/[...all]/route.ts`
3. Create client with `createAuthClient`
4. Build sign-in page with Google button + email form
5. Protect routes with server-side session check

### Use Case 2: Multi-Tenant Marketing Platform
**Scenario**: Agency tool where each client has isolated data.

**Workflow**:
1. Add `organization` plugin for multi-tenancy
2. Associate data with `organizationId` from session
3. Implement invite flow for adding team members
4. Apply RBAC: admin, member, viewer roles

## Troubleshooting

**Issue**: Session returns null on protected routes
**Solution**: Verify `BETTER_AUTH_URL` matches your deployment URL. Check cookie `sameSite` settings for cross-domain setups.

**Issue**: OAuth callback fails with CSRF error
**Solution**: Ensure `BETTER_AUTH_SECRET` is set and consistent. Check redirect URI matches exactly in provider console.

## Related Skills

- [Backend Development](/docs/marketing/skills/backend-development) - Server integration
- [Frontend Development](/docs/marketing/skills/frontend-development) - Auth UI components
- [Databases](/docs/marketing/skills/databases) - User and session schema
- [DevOps](/docs/marketing/skills/devops) - Secure environment variable management

## Related Commands

- `/ckm:brainstorm` - Design auth architecture
- `/ckm:plan` - Plan implementation phases
