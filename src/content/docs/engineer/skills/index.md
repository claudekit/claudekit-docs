---
title: Skills Overview
description: ClaudeKit's 48 specialized skills for development, design, and tooling
section: engineer
kit: engineer
category: skills
order: 1
published: true
---
# Skills Overview

48 specialized skills that extend Claude's capabilities—loaded dynamically when you mention them.

## Quick Reference

### Frontend & Design

| Skill | Purpose |
|-------|---------|
| [frontend-design](/docs/engineer/skills/frontend-design) | Build memorable web interfaces with bold aesthetics |
| [ui-ux-pro-max](/docs/engineer/skills/ui-ux-pro-max) | Production-ready UI with research-backed patterns |
| [ui-styling](/docs/engineer/skills/ui-styling) | Tailwind patterns, responsive layouts, dark mode |
| [frontend-development](/docs/engineer/skills/frontend-development) | React patterns, Suspense, state management |
| [web-frameworks](/docs/engineer/skills/web-frameworks) | Next.js + Turborepo + RemixIcon stack |
| [threejs](/docs/engineer/skills/threejs) | 3D web experiences with WebGL/WebGPU |
| [react-best-practices](/docs/engineer/skills/react-best-practices) | React and Next.js performance optimization from Vercel |
| [web-design-guidelines](/docs/engineer/skills/web-design-guidelines) | Web Interface Guidelines compliance |
| [web-testing](/docs/engineer/skills/web-testing) | Playwright, Vitest, k6 testing |
| [shader](/docs/engineer/skills/shader) | GLSL fragment shaders for procedural graphics |
| [remotion](/docs/engineer/skills/remotion) | Video creation in React |

### Backend & Infrastructure

| Skill | Purpose |
|-------|---------|
| [backend-development](/docs/engineer/skills/backend-development) | Node.js, NestJS, security, testing patterns |
| [databases](/docs/engineer/skills/databases) | Schema design, query optimization, migrations |
| [devops](/docs/engineer/skills/devops) | CI/CD, deployment, infrastructure automation |

### AI & Multimodal

| Skill | Purpose |
|-------|---------|
| [ai-multimodal](/docs/engineer/skills/ai-multimodal) | Gemini vision, audio, document processing |
| [google-adk-python](/docs/engineer/skills/google-adk-python) | Google AI Development Kit for Python agents |
| [ai-artist](/docs/engineer/skills/ai-artist) | Generate images via Nano Banana with curated prompts |

### Tools & Utilities

| Skill | Purpose |
|-------|---------|
| [mcp-builder](/docs/engineer/skills/mcp-builder) | Create MCP servers (Python FastMCP / TypeScript) |
| [mcp-management](/docs/engineer/skills/mcp-management) | Discover and execute MCP tools |
| [skill-creator](/docs/engineer/skills/skill-creator) | Create custom skills for your projects |
| [repomix](/docs/engineer/skills/repomix) | Pack repos into AI-friendly context files |
| [document-skills](/docs/engineer/skills/document-skills) | PDF, DOCX, PPTX, XLSX processing |
| [docs-seeker](/docs/engineer/skills/docs-seeker) | Find and retrieve external documentation |
| [chrome-devtools](/docs/engineer/skills/chrome-devtools) | Browser automation, performance profiling |
| [media-processing](/docs/engineer/skills/media-processing) | FFmpeg, ImageMagick, background removal |
| [agent-browser](/docs/engineer/skills/agent-browser) | AI-optimized browser automation |
| [markdown-novel-viewer](/docs/engineer/skills/markdown-novel-viewer) | Book-like markdown reading experience |
| [context-engineering](/docs/engineer/skills/context-engineering) | Monitor and optimize token consumption |
| [gkg](/docs/engineer/skills/gkg) | GitLab Knowledge Graph semantic analysis |

### Process & Methodology

| Skill | Purpose |
|-------|---------|
| [planning](/docs/engineer/skills/planning) | Transform requirements into executable plans |
| [research](/docs/engineer/skills/research) | Multi-source validation before implementation |
| [sequential-thinking](/docs/engineer/skills/sequential-thinking) | Numbered thought sequences for complex problems |
| [problem-solving](/docs/engineer/skills/problem-solving) | Systematic approaches when stuck |
| [debug](/docs/engineer/skills/debug) | Root cause investigation framework |
| [code-review](/docs/engineer/skills/code-review) | Verification gates and technical rigor |
| [brainstorm](/docs/engineer/skills/brainstorm) | Trade-off analysis with brutal honesty |
| [scout](/docs/engineer/skills/scout) | Fast parallel codebase scouting |
| [cook](/docs/engineer/skills/cook) | Feature implementation workflow |
| [fix](/docs/engineer/skills/fix) | Bug fixing with intelligent routing |
| [git](/docs/engineer/skills/git) | Git operations with conventional commits |
| [plans-kanban](/docs/engineer/skills/plans-kanban) | Visual plan progress tracking |

### Integrations & Specialized

| Skill | Purpose |
|-------|---------|
| [better-auth](/docs/engineer/skills/better-auth) | TypeScript auth (OAuth, 2FA, passkeys, multi-tenant) |
| [shopify](/docs/engineer/skills/shopify) | Shopify apps, GraphQL API, checkout extensions |
| [payment-integration](/docs/engineer/skills/payment-integration) | Stripe, PayPal, LemonSqueezy, SePay integration |
| [mobile-development](/docs/engineer/skills/mobile-development) | React Native, Flutter, Swift/SwiftUI, Kotlin |
| [copywriting](/docs/engineer/skills/copywriting) | Conversion copy formulas and templates |
| [mermaidjs-v11](/docs/engineer/skills/mermaidjs-v11) | Diagram creation with Mermaid.js |
| [find-skills](/docs/engineer/skills/find-skills) | Discover and install agent skills |

## How to Use

**Basic invocation:**
```
"Use [skill-name] to [task]"
```

**Examples:**
```
"Use better-auth to add GitHub OAuth with 2FA"
"Use devops to create production deployment"
"Use debug to investigate this test failure"
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
| **Example** | better-auth, devops | /plan, /test | planner, tester |

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

50 skills provide instant expertise—just mention the skill and describe your task. No configuration needed.
