---
title: better-auth
description: "Documentation for better-auth
description:
section: docs
category: skills/auth
order: 10
published: true"
section: docs
category: skills/auth
order: 10
published: true
---

# better-auth Skill

Framework-agnostic authentication and authorization framework for TypeScript. Works with any framework - Next.js, Nuxt, SvelteKit, Remix, Astro, Hono, Express.

## When to Use

Use better-auth when you need:
- Email/password authentication
- Social OAuth (GitHub, Google, etc.)
- Two-factor authentication (2FA)
- Passkeys (WebAuthn)
- Magic links
- Multi-tenancy / Organizations
- Framework flexibility

## Quick Start

### Invoke the Skill

```
"Use better-auth to add authentication to my Next.js app with:
- Email/password signup
- GitHub OAuth
- PostgreSQL with Drizzle"
```

### What You Get

The skill will help you:
1. Install and configure better-auth
2. Set up database schema
3. Create auth server instance
4. Mount API routes
5. Create client instance
6. Implement sign-up/sign-in UI
7. Add session management
8. Protect routes

## Common Use Cases

### Basic Email/Password Auth

```
"Use better-auth to implement email/password authentication with:
- Auto sign-in after signup
- Email verification
- Password reset flow"
```

### Social OAuth

```
"Use better-auth to add GitHub and Google OAuth to my app"
```

### Two-Factor Authentication

```
"Use better-auth to add 2FA with TOTP codes and trusted devices"
```

### Multi-Tenant Application

```
"Use better-auth to build multi-tenant app with:
- Organizations
- Team member invitations
- Role-based permissions"
```

## Key Features

### Authentication Methods

- **Email/Password** - Traditional signup/signin
- **Social OAuth** - GitHub, Google, Apple, Discord, Facebook, etc.
- **Magic Links** - Passwordless email authentication
- **Passkeys** - WebAuthn biometric authentication
- **2FA/TOTP** - Two-factor authentication
- **Email OTP** - One-time password codes

### Framework Support

- Next.js (App Router & Pages Router)
- Nuxt
- SvelteKit
- Remix
- Astro
- Hono
- Express
- Any Node.js framework

### Database Support

- PostgreSQL
- MySQL
- SQLite
- MongoDB

### ORM Adapters

- Drizzle
- Prisma
- Kysely
- MongoDB native

## Example Implementations

### Next.js App Router

```
"Use better-auth to set up authentication for Next.js 14 App Router with:
- Email/password
- GitHub OAuth
- PostgreSQL + Drizzle
- Protected routes middleware
- Server actions for auth"
```

### SvelteKit

```
"Use better-auth to implement auth in SvelteKit with:
- Magic link authentication
- Session management
- Protected routes"
```

### Multi-Framework

```
"Use better-auth to create auth system that works with both:
- Next.js frontend
- Hono API backend
- Shared PostgreSQL database"
```

## Advanced Features

### Session Management

```
"Use better-auth to implement:
- Server-side session validation
- Client-side session hooks
- Custom session expiration
- Remember me functionality"
```

### Rate Limiting

```
"Use better-auth to add rate limiting to prevent:
- Brute force attacks
- Signup spam
- API abuse"
```

### Email Verification

```
"Use better-auth to require email verification:
- Send verification emails
- Handle verification tokens
- Block unverified users"
```

## Best Practices

### Environment Variables

Always use environment variables for:
- `BETTER_AUTH_SECRET` - Secret key (min 32 chars)
- `BETTER_AUTH_URL` - Application URL
- OAuth client IDs and secrets

### Security

The skill ensures:
- HTTPS in production
- Secure cookie settings
- CORS configuration
- Password requirements
- Session security

### Database Migrations

After adding plugins:
```bash
npx @better-auth/cli generate
npx @better-auth/cli migrate
```

## Plugins

### Available Plugins

- **twoFactor** - TOTP 2FA
- **username** - Username authentication
- **magicLink** - Passwordless email
- **passkey** - WebAuthn biometric
- **organization** - Multi-tenancy
- **emailOTP** - One-time passwords
- **anonymous** - Guest users

### Adding Plugins

```
"Use better-auth to add these plugins:
- Two-factor authentication
- Organization support
- Magic link signin"
```

## Troubleshooting

### Common Issues

**"Unable to find auth instance"**
- Check auth.ts location (root, lib/, utils/)
- Verify export name

**Database connection errors**
- Verify credentials
- Check database is running
- Ensure correct adapter

**CORS errors**
- Configure corsOptions
- Match client/server URLs

## Resources

- [Official Docs](https://www.better-auth.com/docs)
- [GitHub](https://github.com/better-auth/better-auth)
- [Plugins](https://www.better-auth.com/docs/plugins)
- [Examples](https://www.better-auth.com/docs/examples)

## Quick Examples

**Minimal Setup:**
```
"Use better-auth for basic email/password auth with SQLite"
```

**Production Setup:**
```
"Use better-auth for production with:
- GitHub + Google OAuth
- Email verification
- 2FA support
- PostgreSQL
- Rate limiting
- Proper error handling"
```

**Enterprise Setup:**
```
"Use better-auth for enterprise app with:
- Multi-tenancy
- SSO integration
- Role-based access control
- Audit logging
- Custom session management"
```

## Next Steps

- [Authentication Examples](/docs/use-cases/)
- [Database Skills](/docs/skills/postgresql-psql)
- [Next.js Integration](/docs/skills/nextjs)

---

**Bottom Line:** better-auth provides production-ready authentication that works with any TypeScript framework. Just invoke the skill and describe your auth requirements.
