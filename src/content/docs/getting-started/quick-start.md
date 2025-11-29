---
title: Quick Start
description: "Documentation for Quick Start
description:
section: getting-started
category: getting-started
order: 4
published: true"
section: getting-started
category: getting-started
order: 4
published: true
---

# Quick Start

Ship production feature in 15 minutes. No boilerplate, no setup hell.

## Prerequisites

- ClaudeKit CLI installed (`ck --version` works)
- Claude Code running
- Project initialized with ClaudeKit

**Don't have these?** See [Installation Guide](/docs/getting-started/installation)

## Your First Feature

Add user authentication to Next.js app in 15 minutes.

### Step 1: Bootstrap Project

```bash
ck init my-app --kit engineer
cd my-app
```

**Created**:
- `.claude/` - 14 AI agents, 30+ commands, 45 skills
- `docs/` - Auto-generated project docs
- `plans/` - Implementation plans storage

### Step 2: Plan Authentication

```bash
/plan add user authentication with email/password and OAuth
```

**What happens** (30 seconds):
1. `planner` agent spawns 3 `researcher` agents in parallel
2. Researches Next.js 15 + Better Auth best practices
3. Analyzes your codebase structure
4. Creates detailed implementation plan

**Output**:
```
✓ planner: Research complete (3 sources analyzed)
✓ planner: Plan created

📄 plans/251030-auth-implementation.md

Summary:
• Better Auth with credentials + OAuth (Google, GitHub)
• Session management with JWT
• Login/signup/reset pages
• Protected routes middleware
• Files to create: 8
• Files to modify: 4
• Tests: 12 test cases
• Estimated: 2 hours manually, 5 minutes with ClaudeKit

Next: /code plans/251030-auth-implementation.md
```

### Step 3: Review Plan

```bash
cat plans/251030-auth-implementation.md
```

Scan the plan. Architecture solid? Continue.

### Step 4: Implement

```bash
/code plans/251030-auth-implementation.md
```

**What happens** (5 minutes):

**Clarification** (15 sec):
```
code: Which OAuth providers?
You: Google and GitHub
```

**Implementation** (4 min):
1. Installs `better-auth` + dependencies
2. Creates auth config with providers
3. Generates login/signup/reset pages with shadcn/ui
4. Adds API routes
5. Implements middleware for protected routes
6. Writes 12 test cases
7. Updates documentation

**Real-time output**:
```
✓ Installing dependencies... (15s)
✓ Creating auth.ts config
✓ Generating UI components
  • app/login/page.tsx (Google OAuth button)
  • app/signup/page.tsx (Email + OAuth)
  • app/reset-password/page.tsx
✓ Creating API routes
  • app/api/auth/[...all]/route.ts
✓ Adding middleware.ts (protect /dashboard/*)
✓ Writing tests (12 cases)
✓ Updating docs/system-architecture.md

tester: Running test suite...
✓ Unit tests: 45 passed
✓ Auth tests: 12 passed
✓ Coverage: 89%

code-reviewer: Quality check...
✓ No security issues
✓ Type-safe (0 errors)
✓ Performance: Fast (< 100ms auth check)

✓ Implementation complete (4m 32s)
```

### Step 5: See It Work

```bash
npm run dev
```

Visit:
- `http://localhost:3000/login` - Login with email or OAuth
- `http://localhost:3000/signup` - Create account
- `http://localhost:3000/dashboard` - Protected route (redirects if not logged in)

**Try it**:
1. Sign up with email
2. Login redirects to dashboard
3. Logout, try OAuth with Google
4. Check session persistence

### Step 6: Commit

```bash
/git:cm
```

**Output**:
```
git-manager: Analyzing changes...
✓ Staged: 12 files
✓ Secret scan: Clean
✓ Commit message generated

feat(auth): add Better Auth with email and OAuth

- Add Better Auth configuration
- Implement login/signup/reset pages
- Add Google and GitHub OAuth
- Protect routes with middleware
- Add 12 auth test cases
- Update documentation

✓ Committed: abc1234
✓ Pushed to origin/main

Done!
```

## What Just Happened?

**Traditional approach** (8-12 hours):
1. Research auth libraries (1h)
2. Read documentation (1h)
3. Setup configuration (1h)
4. Build UI components (3h)
5. Implement OAuth flows (2h)
6. Write tests (1h)
7. Debug issues (1h)
8. Documentation (30min)

**ClaudeKit approach** (6 minutes):
1. Plan: AI researches, analyzes, designs (30s)
2. Implement: AI codes, tests, documents (4m)
3. Review: AI validates security, performance (30s)
4. Commit: AI creates professional commit (30s)

**Time saved**: 8-12 hours → **~800% faster**

## Why It Works

### 14 Specialized Agents
- **planner**: Creates implementation plans
- **researcher**: Finds best practices (3 run in parallel)
- **tester**: Validates everything works
- **code-reviewer**: Security + performance checks
- **git-manager**: Professional commits
- **docs-manager**: Keeps docs current
- ...and 8 more

### 45 Built-in Skills
- **better-auth**: Auth implementation expertise
- **shadcn-ui**: Pre-configured UI components
- **nextjs**: Next.js 15 best practices
- **gemini-image-gen**: Generate logos, assets
- ...and 41 more

### Living System
- Updates with Claude improvements
- No tech stack lock-in
- Learns your patterns
- Gets smarter over time

## Next: Real Work

Try more complex features:

```bash
# Add payment processing (Stripe + webhooks)
/cook add Stripe payment with subscriptions and webhooks

# Build REST API with validation
/cook create REST API for blog posts with Zod validation

# Implement real-time chat
/cook add real-time chat using WebSockets

# Database migrations
/cook migrate from SQLite to PostgreSQL with zero downtime
```

Each takes 5-20 minutes instead of days.

## Learn Workflows

### Full Feature Cycle
```bash
/plan [feature]           # Research + plan
/code [plan]              # Implement
/test                     # Validate
/fix:fast [issue]         # Quick fixes
/git:cm                   # Commit
```

### Debug + Fix
```bash
/debug [issue]            # Root cause analysis
/fix:hard [complex-issue] # Multi-agent fix
/fix:ci [actions-url]     # Fix failing CI/CD
```

### Design + Content
```bash
/design:good [feature]    # UI/UX design
/content:good [page]      # Marketing copy
/brainstorm [idea]        # Explore solutions
```

## Common Questions

**Q: Does it work with my tech stack?**
A: Yes. Next.js, Django, Laravel, Go, Rust, Flutter - any stack. ClaudeKit adapts to your patterns.

**Q: What if AI makes mistakes?**
A: `code-reviewer` catches issues before commit. Plus, you review PRs as normal. AI augments, doesn't replace judgment.

**Q: Do I need API keys?**
A: For basic features, no. For advanced skills (Gemini, Search), yes. See [API Key Setup](/docs/support/troubleshooting/api-key-setup).

**Q: Can I customize agents?**
A: Yes. Edit `.claude/agents/*.md` to tune behavior. See [Custom Agents](/docs/hooks/custom-agents).

## Explore More

**Core Concepts**:
- [Architecture](/docs/docs/agents) - How ClaudeKit works
- [Agents Overview](/docs/agents/) - Meet your AI team
- [Commands Guide](/docs/commands/) - All 30+ commands

**Real-World Uses**:
- [Starting New Project](/docs/workflows/new-project)
- [Adding Features](/docs/workflows/adding-feature)
- [Fixing Bugs](/docs/workflows/fixing-bugs)

**Troubleshooting**:
- [Installation Issues](/docs/support/troubleshooting/installation-issues)
- [Command Errors](/docs/support/troubleshooting/command-errors)
- [Performance Issues](/docs/support/troubleshooting/performance-issues)

---

**You just shipped production auth in 6 minutes.** Boilerplates can't do that. AI chat assistants can't do that. Only ClaudeKit.

**Ready to ship?** Your AI dev team is waiting.
