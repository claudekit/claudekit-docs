---
title: Docs Manager Agent
description: Senior technical documentation specialist for creating, maintaining, and organizing developer documentation
section: docs
category: agents
order: 9
published: true
---

# Docs Manager Agent

**Keep your docs synced with your codebase.** Creates, updates, and maintains technical documentation automatically after code changes.

## When to Use

- After implementing new features requiring documentation updates
- Setting up initial project documentation with `/docs:init`
- Generating codebase summaries with Repomix integration
- Syncing docs with code changes using `/docs:update`

## Key Capabilities

| Feature | What It Does |
|---------|-------------|
| **Auto Documentation** | Analyzes code changes → updates relevant docs |
| **Repomix Integration** | Generates codebase summaries from compacted XML |
| **Scout Orchestration** | Runs parallel file searches to gather context |
| **Standards Enforcement** | Validates case conventions, links, code examples |
| **Doc Structure** | Maintains PDRs, architecture, code standards, guides |

## Common Use Cases

### New Project Setup
**Who**: Team leads starting new projects
**Prompt**: `/docs:init`
**Result**: Creates full documentation suite in `./docs/` directory

### Post-Feature Documentation
**Who**: Developers who just shipped a feature
**Prompt**: `/docs:update`
**Result**: Scans git diff → updates system architecture, API docs, standards

### Architecture Documentation
**Who**: Tech leads documenting system design
**Prompt**: "Update system-architecture.md with the new microservices setup"
**Result**: ASCII diagrams, component docs, integration flows

### Codebase Summary
**Who**: Onboarding new team members
**Prompt**: `/docs:summarize`
**Result**: Runs Repomix → generates `codebase-summary.md` with stats and structure

### API Reference Generation
**Who**: Backend devs exposing new endpoints
**Prompt**: "Document the /api/auth endpoints with request/response examples"
**Result**: Complete API docs with schemas, errors, curl examples

## Pro Tips

**1. Run After Every Feature**
```bash
# Standard workflow
git commit -m "feat: add auth"
/docs:update
git add docs/ && git commit -m "docs: update for auth"
```

**2. Use Scout for Deep Context**
```bash
# docs-manager auto-runs these behind the scenes
/scout "authentication files" 5
/scout "API endpoints" 5
# Aggregates results for accurate documentation
```

**3. Maintain This Structure**
```
./docs/
├── project-overview-pdr.md    # Requirements, roadmap
├── code-standards.md           # Conventions, patterns
├── codebase-summary.md         # Repomix-generated overview
├── system-architecture.md      # Technical design
├── deployment-guide.md         # Production setup
└── design-guidelines.md        # UI/UX specs
```

**4. Validate Everything**
- Tests code examples before committing
- Checks link integrity across all docs
- Enforces case conventions (camelCase, PascalCase, snake_case)
- Verifies formatting consistency

**5. Weekly Maintenance**
```bash
# Keep docs fresh
/docs:update      # Scan for outdated content
/docs:summarize   # Regenerate summary (monthly)
```

**6. Document the "Why"**
```markdown
# ❌ Bad
"Configure the database"

# ✅ Good
"Set DATABASE_URL in .env to enable connection pooling.
Using pooling reduces latency by 60% under high load."
```

**7. API Documentation Template**
```markdown
### POST /api/auth/login
Authenticate user and return JWT token.

**Request Body:**
{
  email: string;      // Valid email
  password: string;   // Min 8 chars
}

**Response (200):**
{
  token: string;      // JWT access token
  expiresIn: number;  // Seconds
}

**Errors:**
- 400: Invalid format
- 401: Invalid credentials
- 429: Rate limited
```

**8. Use Absolute Paths**
```markdown
✅ [Authentication](/docs/agents/docs-manager)
❌ [Authentication](./docs-manager)
```

## Related Agents

- [Planner Agent](/docs/agents/planner) - Creates implementation plans → docs-manager documents them
- [Scout Agent](/docs/agents/scout) - Locates files → docs-manager uses for context
- [Project Manager](/docs/agents/project-manager) - Coordinates tasks → docs-manager provides status

## Key Takeaway

**Docs-manager keeps documentation synchronized with code automatically.** Run `/docs:init` for initial setup, `/docs:update` after features, `/docs:summarize` for overview. Integrates with Repomix and Scout for comprehensive analysis. Part of ClaudeKit $99 toolkit.
