---
title: "/bootstrap"
description: "Complete project initialization with research, tech stack selection, planning, design, implementation, testing, and documentation in one command"
section: marketing
category: commands
order: 20
published: true
---

> Zero to production in one command

## Quick Start

```bash
/bootstrap Create AI-powered marketing automation platform
```

**What happens** (1-2 hours):
1. Questions you for requirements
2. Researches solutions (3+ researchers)
3. Recommends tech stack (or uses yours)
4. Creates implementation plan
5. Generates designs (optional)
6. Implements features
7. Writes tests
8. Reviews code
9. Creates documentation
10. Onboards user
11. Commits to git

**Output**: Complete project ready for development

## 11-Phase Process

### Phase 1: Requirements Clarification
AI asks questions to understand:
- Project goals
- Target audience
- Key features
- Constraints
- Timeline

### Phase 2: Research
3+ researcher agents in parallel:
- Solution validation
- Best practices
- Technical challenges
- Similar products

### Phase 3: Tech Stack
Recommends or validates:
- Frontend framework
- Backend framework
- Database
- Hosting
- Third-party services

### Phase 4: Planning
Creates detailed plan:
- Progressive disclosure structure
- Phase-by-phase breakdown
- Parallelization opportunities
- Dependencies mapped

### Phase 5: Design (Optional)
If requested:
- Wireframes (HTML)
- Design guidelines
- Brand assets
- Logo generation

### Phase 6: Implementation
Executes plan:
- Code generation
- Component creation
- API endpoints
- Database schema

### Phase 7: Testing
Comprehensive tests:
- Unit tests
- Integration tests
- E2E tests
- 100% pass required

### Phase 8: Code Review
Quality gates:
- Security check
- Performance analysis
- Architecture validation
- 0 critical issues required

### Phase 9: Documentation
Auto-generates:
- README.md
- docs/codebase-summary.md
- docs/system-architecture.md
- docs/code-standards.md
- docs/project-roadmap.md

### Phase 10: Onboarding
User setup:
- Environment variables
- API keys
- Database setup
- Development server

### Phase 11: Finalization
Wraps up:
- Summary report
- Next steps
- Git commit (if approved)

## Example: Marketing Platform

**Input**:
```bash
/bootstrap Create marketing automation platform with email campaigns and analytics
```

**Process** (condensed):
```markdown
[Phase 1: Requirements]
bootstrap: Target audience?
You: Small businesses, 1-50 employees

bootstrap: Key features?
You: Email campaigns, landing pages, analytics

bootstrap: Budget for third-party services?
You: $50-100/month

[Phase 2: Research]
✓ Researcher 1: Email service providers (3 options analyzed)
✓ Researcher 2: Analytics platforms (compared 4 solutions)
✓ Researcher 3: Landing page builders (best practices)

[Phase 3: Tech Stack]
Recommended:
- Frontend: Next.js 15 + Tailwind
- Backend: Next.js API routes + tRPC
- Database: PostgreSQL + Prisma
- Email: Resend (within budget)
- Analytics: Plausible (privacy-focused)
- Hosting: Vercel

bootstrap: Approve tech stack?
You: Yes

[Phase 4: Planning]
✓ Created 6-phase plan:
  - Phase 1: Database + auth
  - Phase 2: Email system
  - Phase 3: Landing page builder
  - Phase 4: Analytics
  - Phase 5: Dashboard
  - Phase 6: Deployment

[Phase 5: Design]
bootstrap: Create design?
You: Yes

✓ Generated wireframes (5 pages)
✓ Created design guidelines
✓ Generated logo
✓ Captured wireframe screenshots

[Phase 6-8: Implementation + Testing + Review]
[45 minutes of automated work]
✓ 47 files created
✓ 89 tests written (all passing)
✓ Code reviewed (0 critical issues)

[Phase 9: Documentation]
✓ README.md
✓ Complete documentation in docs/

[Phase 10: Onboarding]
bootstrap: Set up environment variables...
[Interactive setup process]

[Phase 11: Finalization]
Project complete!

Structure:
/
├── app/              # Next.js pages
├── components/       # React components
├── lib/             # Business logic
├── prisma/          # Database schema
├── docs/            # Documentation
└── tests/           # Test suites

Next steps:
1. npm run dev (start development)
2. Visit http://localhost:3000
3. Create your first campaign

Commit to git? [Y/n]
```

## When to Use

### New Projects
```bash
/bootstrap Create SaaS analytics platform
/bootstrap Build e-commerce store with headless CMS
/bootstrap Marketing site with blog
```

### Experiments
```bash
/bootstrap MVP for customer feedback tool
/bootstrap Prototype for AI chat interface
```

### Templates
```bash
/bootstrap Next.js SaaS starter with auth and billing
```

## Time Estimates

- Simple (landing page): 30-45 min
- Medium (SaaS MVP): 1-2 hours
- Complex (full platform): 2-4 hours

vs Manual: 1-2 weeks

## Related Commands

- [/plan](/docs/marketing/commands/plan) - Planning only
- [/cook](/docs/engineer/skills/cook) - Implementation only
- [/design](/docs/marketing/commands/design) - Design only

---

**One command. Complete project.** From idea to production-ready code.
