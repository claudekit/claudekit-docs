---
title: "ckm:docs-seeker"
description: "Search technical documentation via llms.txt sources and context7 for accurate, up-to-date implementation references."
section: marketing
category: skills
order: 75
---

> Find authoritative, up-to-date technical documentation for any library or framework before implementing.

## What This Skill Does

**The Challenge**: AI models have training cutoffs. APIs change, libraries release breaking updates, and deprecated patterns persist in training data. Implementing based on stale knowledge produces code that doesn't work with current versions.

**The Solution**: Docs Seeker skill queries live documentation sources via `llms.txt` endpoints and the Context7 MCP server. Returns current API references, migration guides, and code examples from official sources — always reflecting the latest stable release.

## Activation

**Implicit**: Activates when user asks "how do I use X", "what's the API for Y", or requests implementation guidance for a specific library.

**Explicit**: Activate via prompt:
```
Activate docs-seeker skill to find docs for [library/framework/version]
```

## Capabilities

### 1. llms.txt Documentation Sources
Query official machine-readable documentation.

**Supported format**: Sites exposing `/llms.txt` or `/llms-full.txt` provide structured docs optimized for LLM consumption.

**Query pattern**:
```
Use docs-seeker to find the latest [library] documentation for [specific API/feature]
```

**Popular sources available**:
- Next.js, Astro, Nuxt (frontend frameworks)
- Prisma, Drizzle (ORMs)
- Better Auth, Clerk (authentication)
- Tailwind CSS, Radix UI (styling/components)
- Cloudflare Workers, Vercel (deployment)

### 2. Context7 MCP Integration
Fetch library documentation programmatically via MCP server.

**Context7 usage**:
```
Use context7 to get docs for:
- Library: react-query
- Version: v5
- Topic: useQuery hook options
```

**Returns**: Current API signatures, parameter descriptions, return types, and official examples.

### 3. Version-Specific Lookup
Retrieve docs for a specific library version.

**Example queries**:
- "Next.js 15 App Router route handlers"
- "Prisma v6 migration workflow"
- "Better Auth v1 OAuth configuration"

### 4. Cross-Reference Validation
Compare official docs against implementation to catch outdated patterns.

**Validation workflow**:
1. Fetch current official example for the pattern in question
2. Compare with implementation
3. Flag deprecated APIs or changed method signatures

## Prerequisites

**For Context7 MCP**:
- MCP server configured in `.claude/mcp.json`
- Internet access from Claude Code session

**For llms.txt**:
- Library must expose `/llms.txt` endpoint
- No additional setup required

## Best Practices

**1. Always check docs before implementing unfamiliar APIs**
A 30-second doc lookup prevents hours of debugging deprecated patterns.

**2. Note the library version**
Specify exact version when searching. "Prisma" and "Prisma v6" return different answers.

**3. Cross-reference with changelog**
For major version jumps, also check the migration guide.

## Common Use Cases

### Use Case 1: Implementing New Auth Library
**Scenario**: Setting up Better Auth for the first time.

**Workflow**:
1. Activate docs-seeker for "Better Auth latest"
2. Fetch installation, server setup, client setup sections
3. Look up specific provider (Google OAuth) configuration
4. Implement following official examples, not training data

### Use Case 2: Upgrading Framework Version
**Scenario**: Upgrading Next.js from 14 to 15.

**Workflow**:
1. Fetch Next.js 15 migration guide
2. Identify breaking changes relevant to current codebase
3. Fetch new App Router APIs replaced old patterns
4. Plan upgrade phase by phase

## Troubleshooting

**Issue**: Library not found in llms.txt sources
**Solution**: Use Context7 MCP for broader coverage. Fall back to WebFetch from official docs URL.

**Issue**: Docs returned are for wrong version
**Solution**: Specify version explicitly in query. Check if docs URL includes version in path.

## Related Skills

- [Claude Code](/docs/marketing/skills/claude-code) - MCP server configuration
- [Backend Development](/docs/marketing/skills/backend-development) - Uses docs for implementation
- [Frontend Development](/docs/marketing/skills/frontend-development) - Uses docs for UI patterns
- [Debugging](/docs/marketing/skills/debugging) - Verify API usage against docs

## Related Commands

- `/ckm:ask` - General technical questions
- `/ckm:brainstorm` - Evaluate library options
