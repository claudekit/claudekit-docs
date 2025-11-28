---
title: "Greenfield Projects"
description: "Documentation for Greenfield Projects"
section: workflows
category: workflows
order: 6
published: true
lastUpdated: 2025-11-07
---

# Greenfield Projects

Create new projects from scratch with ClaudeKit's AI-powered development workflow. Transform ideas into production-ready applications quickly with intelligent agents.

## Installation

### 1. Install ClaudeKit CLI

```bash
npm i -g claudekit-cli@latest
```

## Quick Start

### Method 1: Bootstrap New Project

```bash
# Initialize project with ClaudeKit Engineer kit
ck init --kit engineer --dir /path/to/project
```

**Options:**
- `--kit engineer`: Installs ClaudeKit Engineer configuration
- `--dir`: Target directory for the project

### Method 2: Manual Setup

```bash
# Create directory
mkdir my-awesome-project
cd my-awesome-project

# Initialize git (optional but recommended)
git init

# Start Claude Code
claude
```

## Bootstrap Your Idea

### The Bootstrap Command

```bash
/bootstrap <description-of-your-idea>
```

This is the **most powerful command** for greenfield projects. It:
1. Asks clarifying questions for context
2. **Provides detailed implementation plan** (review carefully!)
3. After approval, starts implementing
4. Writes tests automatically
5. Performs code reviews
6. Creates initial specs and roadmap
7. Provides summary report

**No need to run `/docs:init`** - specs are created automatically during bootstrap.

### Example: Simple Project

```bash
/bootstrap A CLI tool that converts markdown files to PDF with custom styling
```

**CC will ask:**
- Target platforms? (Node.js, Deno, Bun?)
- PDF library preference? (pdfkit, puppeteer, weasyprint?)
- Custom styling method? (CSS, theme files?)
- Distribution method? (npm, binary, both?)

### Example: Web Application

```bash
/bootstrap A real-time collaborative todo app with team workspaces and permissions
```

**CC will ask:**
- Frontend framework? (React, Vue, Svelte?)
- Backend? (Node.js, Python, Go?)
- Database? (PostgreSQL, MongoDB, Supabase?)
- Real-time solution? (WebSocket, Server-Sent Events?)
- Authentication? (OAuth, email/password, magic link?)

### Example: Discord Bot

```bash
/bootstrap A Discord Bot that researches, analyzes and sends report of DJI stock market at 7am every day
```

**CC will ask:**
- Stock data source? (API preference?)
- Analysis type? (Technical, fundamental, both?)
- Report format? (Embed, text, charts?)
- Time zone for scheduling?
- Storage for historical data?

### Autonomous Mode (Use with Caution!)

```bash
/bootstrap:auto <your-idea>
```

Runs full autonomous mode without plan review. CC will:
- Make all technical decisions
- Implement entire project
- Run tests and fix issues
- Generate documentation

**Recommendation:** Only use for:
- Simple, well-defined projects
- Prototypes and experiments
- Non-critical applications

**Always review generated code** before production use.

## After Bootstrap

### Project Structure

ClaudeKit creates standard project structure:

```
my-project/
├── .claude/           # ClaudeKit configuration
├── docs/              # Generated documentation
│   ├── project-overview-pdr.md
│   ├── system-architecture.md
│   └── roadmap.md
├── src/               # Source code
├── tests/             # Test files
├── package.json       # Dependencies
└── README.md          # Project readme
```

### Continue Development

Use all ClaudeKit commands for further development:

#### Add New Features
```bash
/cook Add user authentication with email verification
```

#### Fix Issues
```bash
/fix:fast Button click handler not responding on mobile
/fix:hard Complex state management bug in checkout flow
```

#### Plan Enhancements
```bash
/plan Add payment processing with Stripe
```

#### Run Tests
```bash
/test
```

## Common Project Types

### Web API Server

```bash
/bootstrap REST API for e-commerce platform with products, cart, orders, and payments
```

**Typical questions:**
- Framework: Express, Fastify, Nest.js?
- Database: PostgreSQL, MySQL, MongoDB?
- Authentication: JWT, session-based?
- Payment provider: Stripe, PayPal?
- Hosting: Vercel, AWS, Railway?

### Full-Stack Application

```bash
/bootstrap Full-stack task management app with kanban boards, time tracking, and team collaboration
```

**Typical questions:**
- Frontend: Next.js, React + Vite, Remix?
- State management: Redux, Zustand, Context?
- Database: Supabase, PlanetScale, MongoDB?
- Real-time: Socket.io, Supabase Realtime?
- File storage: S3, Cloudflare R2?

### Chrome Extension

```bash
/bootstrap Chrome extension that summarizes web articles and saves highlights to Notion
```

**Typical questions:**
- Manifest version: V2 or V3?
- AI service: OpenAI, Anthropic, local?
- Notion integration: Official API?
- Storage: Chrome storage, cloud sync?

### Mobile App Backend

```bash
/bootstrap Backend API for mobile fitness app with workout tracking, social features, and achievements
```

**Typical questions:**
- Framework: Express, FastAPI, Rails?
- Database: PostgreSQL, MongoDB?
- File uploads: S3, Cloudflare R2?
- Push notifications: FCM, OneSignal?
- Analytics: Mixpanel, PostHog?

## Advanced Workflows

### Iterative Development

```bash
# 1. Start with MVP
/bootstrap Minimal viable product for habit tracking app

# 2. After MVP completion, add features
/cook Add social sharing features
/cook Add streak tracking and notifications
/cook Add analytics dashboard

# 3. Optimize and refine
/fix:hard Performance issues with large datasets
/plan Add premium features with subscription
```

### Multi-Service Architecture

```bash
# 1. Bootstrap main API
/bootstrap Main API service for social media platform

# 2. Plan microservices
/plan Add separate auth service
/plan Add media processing service
/plan Add notification service

# 3. Implement services separately
/code auth-service-plan.md
/code media-service-plan.md
/code notification-service-plan.md
```

### Documentation-Driven Development

```bash
# 1. Create detailed plan first
/plan Complete SaaS platform with multi-tenancy, billing, and admin dashboard

# 2. Review and refine plan
# Edit the generated plan markdown

# 3. Implement in phases
/code plan.md --phase 1
/test
/code plan.md --phase 2
/test
```

## Project Configuration

### Environment Setup

After bootstrap, configure environments:

```bash
# Development
/config Create development environment configuration

# Production
/config Create production environment configuration

# Testing
/config Create testing environment configuration
```

### Deployment

```bash
# Plan deployment
/plan Deploy to Vercel with CI/CD

# Implement deployment
/code deployment-plan.md

# Or use specific integration
/integrate vercel
/integrate railway
/integrate fly.io
```

## Best Practices

### 1. Clear Description

**Good:**
```bash
/bootstrap Real-time chat application with rooms, direct messages, file sharing, and presence indicators. Target 1000 concurrent users.
```

**Bad:**
```bash
/bootstrap Chat app
```

### 2. Answer Questions Thoroughly

Provide detailed answers to CC's questions. Better context = better implementation.

### 3. Review Plans Carefully

**IMPORTANT:** Always review implementation plans before approval. Check:
- Architecture decisions
- Technology choices
- Security considerations
- Scalability approach
- Testing strategy

### 4. Start Small, Iterate

Begin with core functionality, then expand:
```bash
# Phase 1: Core MVP
/bootstrap Basic blogging platform with posts and comments

# Phase 2: Enhancements
/cook Add rich text editor
/cook Add image uploads
/cook Add user profiles

# Phase 3: Advanced Features
/cook Add search functionality
/cook Add social sharing
```

### 5. Use Version Control

```bash
# After bootstrap
git add .
git commit -m "Initial project setup via ClaudeKit bootstrap"

# After each feature
/git:cp
```

## Troubleshooting

### Bootstrap Stalls or Fails

```bash
# Stop and restart with more specific description
/bootstrap [more detailed description with tech stack preferences]
```

### Generated Code Has Issues

```bash
# Fix specific issues
/fix:hard [describe the issue]

# Or run full test suite and auto-fix
/fix:test
```

### Need to Change Approach

```bash
# Create new plan
/plan Refactor to use different architecture

# Implement changes
/code new-approach-plan.md
```

## Examples from Real Projects

### E-commerce Platform

```bash
/bootstrap E-commerce platform with:
- Product catalog with categories and search
- Shopping cart with session persistence
- Checkout with Stripe integration
- Order management for customers and admin
- Email notifications for orders
- Admin dashboard for inventory management
```

### SaaS Analytics Tool

```bash
/bootstrap SaaS analytics dashboard with:
- Multi-tenant architecture with workspaces
- Real-time data ingestion API
- Custom dashboard builder with drag-and-drop
- SQL query builder for custom reports
- Role-based access control
- Subscription billing with Stripe
```

### Content Management System

```bash
/bootstrap Headless CMS with:
- Flexible content modeling with custom types
- Rich text editor with markdown support
- Media library with image optimization
- GraphQL and REST APIs
- Webhook support for publishing events
- Multi-environment content staging
```

## Next Steps

After bootstrapping your project:

1. **Continuous Development**: Use `/cook` for new features
2. **Testing**: Regular `/test` runs
3. **Documentation**: Keep `/docs:update` current
4. **Deployment**: Set up CI/CD with `/plan ci`
5. **Team Collaboration**: Share `.claude/` configuration

## Resources

- [All Commands](/docs/commands/) - Complete command reference
- [AI Agents](/docs/agents/) - Understanding specialized agents
- [Workflows](/docs/docs/configuration/workflows) - Development workflows
- [Use Cases](/docs/workflows/) - Real-world examples

---

**Ready to build?** Start with `/bootstrap` and let AI agents handle the heavy lifting. Remember to **review plans carefully** before approval!

**Need help?** Visit [GitHub Discussions](https://github.com/mrgoonie/claudekit-cli/discussions)
