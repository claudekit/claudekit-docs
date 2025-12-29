---
title: Better Auth Skill
description: Framework-agnostic TypeScript authentication with email/password, OAuth, 2FA, passkeys, and multi-tenancy
section: docs
category: skills/auth
order: 10
published: true
---

# Better Auth Skill

Production-ready authentication for any TypeScript framework—Next.js, Nuxt, SvelteKit, Remix, Astro, Hono, Express.

## When to Use

- Adding authentication to TypeScript/JavaScript apps
- Email/password or social OAuth login
- 2FA, passkeys, magic links
- Multi-tenant apps with organizations
- Session management and protected routes

## Key Capabilities

| Feature | Built-in | Plugin |
|---------|----------|--------|
| Email/Password | ✓ | - |
| OAuth (GitHub, Google, etc.) | ✓ | - |
| Email Verification | ✓ | - |
| Password Reset | ✓ | - |
| Rate Limiting | ✓ | - |
| Two-Factor (TOTP) | - | `twoFactor` |
| Passkeys/WebAuthn | - | `passkey` |
| Magic Links | - | `magicLink` |
| Organizations | - | `organization` |

**Frameworks**: Next.js, Nuxt, SvelteKit, Remix, Astro, Hono, Express

**Databases**: PostgreSQL, MySQL, SQLite, MongoDB (via Drizzle, Prisma, Kysely)

## Common Use Cases

### SaaS MVP Authentication
**Who**: Solo founder building first product
```
"Add authentication to my Next.js app with email/password signup,
GitHub OAuth, and PostgreSQL with Drizzle. Include email verification."
```

### Multi-Tenant Platform
**Who**: Team building B2B SaaS
```
"Set up Better Auth with organization support for multi-tenant app.
Need team invitations, role-based permissions, and admin dashboard."
```

### Secure Enterprise App
**Who**: Developer at security-conscious company
```
"Implement Better Auth with 2FA requirement, passkey support,
rate limiting, and audit logging. PostgreSQL backend."
```

### Passwordless Experience
**Who**: UX-focused startup
```
"Add magic link authentication to my SvelteKit app.
No passwords, just email-based login with session management."
```

### Quick Prototype
**Who**: Developer testing an idea
```
"Set up basic Better Auth with SQLite for local development.
Just email/password, minimal config."
```

## Quick Start

```bash
npm install better-auth
```

```bash
BETTER_AUTH_SECRET=your-32-char-secret
BETTER_AUTH_URL=http://localhost:3000
```

```bash
npx @better-auth/cli generate  # Generate schema
npx @better-auth/cli migrate   # Apply migrations
```

## Auth Method Selection

| Method | Best For |
|--------|----------|
| Email/Password | Traditional web apps, full credential control |
| OAuth | Quick signup, social profile access |
| Passkeys | Passwordless, security-first apps |
| Magic Links | Email-first users, temporary access |

## Pro Tips

- **Run migrations after adding plugins**: `npx @better-auth/cli generate && migrate`
- **Use environment variables** for secrets and OAuth credentials
- **Enable rate limiting** in production to prevent abuse
- **Combine methods** for user flexibility (OAuth + email as backup)
- **Not activating?** Say: "Use the better-auth skill to..."

## Related Skills

- [Databases](/docs/skills/backend/databases) - PostgreSQL/MongoDB setup
- [Next.js](/docs/skills/frontend/nextjs) - Framework integration
- [Backend Development](/docs/skills/backend/backend-development) - API patterns

---

## Key Takeaway

 Use Better Auth for production-ready authentication in any TypeScript framework with built-in email/password, OAuth, and extensible plugin system for 2FA, passkeys, and organizations.
