---
title: Skills Overview
description: ClaudeKit's 42 specialized skills for development, design, and tooling
section: engineer
kit: engineer
category: skills
order: 1
published: true
---

# Skills Overview

42 specialized skills that extend Claude's capabilities—loaded dynamically when you mention them.

## Quick Reference

### Frontend & Design

| Skill | Purpose |
|-------|---------|
| [frontend-design](/docs/skills/frontend/frontend-design) | Build memorable web interfaces with bold aesthetics |
| [frontend-design-pro](/docs/skills/frontend/frontend-design-pro) | Agency-grade interfaces with perfect imagery |
| [ui-ux-pro-max](/docs/skills/frontend/ui-ux-pro-max) | Production-ready UI with research-backed patterns |
| [aesthetic](/docs/skills/frontend/aesthetic) | Systematic aesthetic framework (BEAUTIFUL→RIGHT→SATISFYING→PEAK) |
| [ui-styling](/docs/skills/frontend/ui-styling) | Tailwind patterns, responsive layouts, dark mode |
| [frontend-development](/docs/skills/frontend/frontend-development) | React patterns, Suspense, state management |
| [nextjs](/docs/skills/frontend/nextjs) | App Router, Server Components, SSR/SSG |
| [web-frameworks](/docs/skills/frontend/web-frameworks) | Next.js + Turborepo + RemixIcon stack |
| [shadcn-ui](/docs/skills/frontend/shadcn-ui) | Accessible UI components with Radix + Tailwind |
| [tailwindcss](/docs/skills/frontend/tailwindcss) | Utility-first CSS, zero custom CSS |
| [threejs](/docs/skills/frontend/threejs) | 3D web experiences with WebGL/WebGPU |

### Backend & Infrastructure

| Skill | Purpose |
|-------|---------|
| [backend-development](/docs/skills/backend/backend-development) | Node.js, NestJS, security, testing patterns |
| [databases](/docs/skills/backend/databases) | Schema design, query optimization, migrations |
| [postgresql-psql](/docs/skills/backend/postgresql-psql) | PostgreSQL CLI, performance tuning, administration |
| [docker](/docs/skills/backend/docker) | Containerization, multi-stage builds, Compose |
| [devops](/docs/skills/backend/devops) | CI/CD, deployment, infrastructure automation |

### AI & Multimodal

| Skill | Purpose |
|-------|---------|
| [ai-multimodal](/docs/skills/ai/ai-multimodal) | Gemini vision, audio, document processing |
| [google-adk-python](/docs/skills/ai/google-adk-python) | Google AI Development Kit for Python agents |
| [canvas-design](/docs/skills/ai/canvas-design) | Visual art creation (PNG/PDF) with design philosophy |
| [gemini-vision](/docs/skills/ai/gemini-vision) | Image analysis (redirects to ai-multimodal) |

### Tools & Utilities

| Skill | Purpose |
|-------|---------|
| [mcp-builder](/docs/skills/tools/mcp-builder) | Create MCP servers (Python FastMCP / TypeScript) |
| [mcp-management](/docs/skills/tools/mcp-management) | Discover and execute MCP tools |
| [skill-creator](/docs/skills/tools/skill-creator) | Create custom skills for your projects |
| [repomix](/docs/skills/tools/repomix) | Pack repos into AI-friendly context files |
| [document-skills](/docs/skills/tools/document-skills) | PDF, DOCX, PPTX, XLSX processing |
| [docs-seeker](/docs/skills/tools/docs-seeker) | Find and retrieve external documentation |
| [chrome-devtools](/docs/skills/tools/chrome-devtools) | Browser automation, performance profiling |
| [ffmpeg](/docs/skills/tools/ffmpeg) | Video/audio processing and conversion |
| [imagemagick](/docs/skills/tools/imagemagick) | Image manipulation and batch processing |
| [claude-code-skill](/docs/skills/tools/claude-code-skill) | Meta-skill for Claude Code itself |

### Process & Methodology

| Skill | Purpose |
|-------|---------|
| [planning](/docs/skills/tools/planning) | Transform requirements into executable plans |
| [research](/docs/skills/tools/research) | Multi-source validation before implementation |
| [sequential-thinking](/docs/skills/tools/sequential-thinking) | Numbered thought sequences for complex problems |
| [problem-solving](/docs/skills/tools/problem-solving) | Systematic approaches when stuck |
| [debugging](/docs/skills/tools/debugging) | Root cause investigation framework |
| [systematic-debugging](/docs/skills/tools/systematic-debugging) | Four-phase debugging (95% fix rate) |
| [code-review](/docs/skills/tools/code-review) | Verification gates and technical rigor |

### Integrations

| Skill | Purpose |
|-------|---------|
| [better-auth](/docs/skills/auth/better-auth) | TypeScript auth (OAuth, 2FA, passkeys, multi-tenant) |
| [shopify](/docs/skills/ecommerce/shopify) | Shopify apps, GraphQL API, checkout extensions |
| [payment-integration](/docs/skills/payments/payment-integration) | Stripe, PayPal, LemonSqueezy integration |

### Mobile & Media

| Skill | Purpose |
|-------|---------|
| [mobile-development](/docs/skills/mobile/mobile-development) | React Native, Expo, cross-platform patterns |
| [media-processing](/docs/skills/multimedia/media-processing) | Audio/video manipulation workflows |

## How to Use

**Basic invocation:**
```
"Use [skill-name] to [task]"
```

**Examples:**
```
"Use better-auth to add GitHub OAuth with 2FA"
"Use docker to create production Dockerfile"
"Use systematic-debugging to investigate this test failure"
"Use frontend-design to build a SaaS landing page"
```

**Skill not activating?** Be explicit:
```
"Use the [skill-name] skill to..."
```

## Under the Hood

### How Skills Activate

Skills activate through **semantic matching** on your prompt:
1. Claude matches your request to skill descriptions
2. Relevant skill instructions load into context
3. Claude follows skill-specific patterns and best practices

**Activation triggers:**
- Mentioning the skill name explicitly
- Describing a task that matches skill description
- Using keywords from skill's domain

### Skill Structure

Every skill contains:
```
.claude/skills/[skill-name]/
├── SKILL.md          # Core instructions (<100 lines)
├── references/       # Detailed documentation
└── scripts/          # Automation scripts (optional)
```

**Progressive disclosure**: SKILL.md provides essentials, references/ has depth.

### Skills vs Commands vs Agents

| Aspect | Skills | Commands | Agents |
|--------|--------|----------|--------|
| **Purpose** | Specialized knowledge | Workflow orchestration | Task execution |
| **Invocation** | "Use [skill]..." | `/command` | Auto or explicit |
| **Scope** | Single focused capability | Multi-step processes | Autonomous work |
| **Example** | better-auth, docker | /cook, /plan | planner, tester |

### Creating Custom Skills

```
"Use skill-creator to create a skill for [your-domain]"
```

skill-creator will:
1. Ask clarifying questions
2. Design skill structure
3. Create SKILL.md with proper frontmatter
4. Add references if needed
5. Save to `.claude/skills/`

### Troubleshooting

**Skill not working?**
- Check skill name spelling
- Provide more context about your task
- Try explicit invocation: "Use the X skill to..."

**Need a skill that doesn't exist?**
- Use skill-creator to build it
- Request on [Discord](https://claudekit.cc/discord)

## Key Takeaway

42 skills provide instant expertise—just mention the skill and describe your task. No configuration needed.
