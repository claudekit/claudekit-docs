---
title: Kỹ Năng Tổng Quan
description: "Documentation for Kỹ Năng Tổng Quan
description:
section: docs
category: docs/skills
order: 1
published: true"
section: docs
category: docs/skills
order: 1
published: true
---

# Skills Overview

Skills are specialized capabilities that extend Claude Code's functionality. ClaudeKit includes 46+ pre-built skills covering everything from authentication to AI integration.

## What Are Skills?

Skills are folders of instructions, scripts, and resources that Claude loads dynamically to improve performance on specialized tasks. They teach Claude how to complete specific tasks in a repeatable way.

**Key Benefits:**
- Pre-built expertise for common frameworks
- Consistent implementation patterns
- Best practices baked in
- Immediate access to specialized knowledge
- No configuration needed

---

## Skill Categories

### Meta Skills

Skills for creating and managing other skills.

#### [skill-creator](/docs/skills/skill-creator)
Create new custom skills that extend Claude's capabilities with specialized knowledge, workflows, or tool integrations.

**Use when:** Building custom skills for your project-specific needs

**Example:**
```
"Use skill-creator to create a skill for GraphQL schema generation"
```

[→ Full skill-creator guide](/docs/skills/skill-creator)

---

#### template-skill
Basic template as starting point for new skills.

---

### Authentication & Security

#### [better-auth](/docs/skills/better-auth)
Framework-agnostic authentication framework for TypeScript with email/password, OAuth, 2FA, passkeys, and multi-tenancy.

**Use when:** Implementing authentication in TypeScript/JavaScript apps

**Features:**
- Email/password authentication
- Social OAuth (GitHub, Google, etc.)
- Two-factor authentication
- Passkeys (WebAuthn)
- Magic links
- Organization/multi-tenancy
- Works with any framework

**Example:**
```
"Use better-auth to implement GitHub OAuth with 2FA"
```

[→ Full better-auth guide](/docs/skills/better-auth)

---

### Design & Visual

#### canvas-design
Create beautiful visual art in PNG and PDF formats using design philosophy.

**Use when:** Creating posters, designs, or visual content

**Capabilities:**
- Original visual designs
- Design systems
- Brand guidelines
- Professional layouts
- No copyright violations

**Example:**
```
"Use canvas-design to create a landing page hero section"
```

---

### Document Processing

#### [document-skills](/docs/skills/document-skills)
Read, parse, and create various document formats.

**Supported Formats:**
- **PDF** - Extract text, tables, forms, create new PDFs
- **DOCX** - Word documents with formatting, tracked changes
- **PPTX** - PowerPoint presentations with layouts, charts
- **XLSX** - Excel spreadsheets with formulas, formatting

**Use when:** Working with office documents

**Example:**
```
"Use document-skills/pdf to extract form fields from contract.pdf"
```

[→ Full document-skills guide](/docs/skills/document-skills)

---

### Development Tools

#### [mcp-builder](/docs/skills/mcp-builder)
Create high-quality MCP (Model Context Protocol) servers for integrating external services.

**Use when:** Building MCP servers in Python (FastMCP) or Node/TypeScript

**What it creates:**
- MCP server boilerplate
- Tool definitions
- Resource handlers
- Authentication
- Documentation

**Example:**
```
"Use mcp-builder to create MCP server for Stripe API"
```

[→ Full mcp-builder guide](/docs/skills/mcp-builder)

---

#### repomix
Pack entire repository into single file for context sharing.

**Use when:** Sharing codebase context with AI or documentation

---

### Debugging & Problem Solving

#### [systematic-debugging](/docs/skills/systematic-debugging)
Four-phase debugging framework ensuring root cause investigation before fixes.

**Use when:** Any bug, test failure, or unexpected behavior

**Process:**
1. Root cause investigation
2. Pattern analysis
3. Hypothesis testing
4. Implementation

**Example:**
```
"Use systematic-debugging to investigate test failure"
```

[→ Full systematic-debugging guide](/docs/skills/systematic-debugging)

---

#### root-cause-tracing
Backward tracing technique for finding error origins.

#### verification-before-completion
Verify implementation completeness before claiming done.

#### defense-in-depth
Layered validation and error handling.

---

### Problem Solving Strategies

#### collision-zone-thinking
Find where conflicting requirements meet.

#### inversion-exercise
Solve problems by inverting them.

#### meta-pattern-recognition
Identify patterns across different domains.

#### scale-game
Think at different scales to find solutions.

#### simplification-cascades
Break complex problems into simple parts.

#### when-stuck
Strategies for getting unstuck.

---

### Frontend Frameworks & UI

#### [nextjs](/docs/skills/nextjs)
Comprehensive Next.js implementation guide.

**Use when:** Building Next.js applications

**Covers:**
- App Router patterns
- Server Components
- Server Actions
- Routing
- Data fetching
- Optimization

[→ Full Next.js guide](/docs/skills/nextjs)

---

#### [shadcn-ui](/docs/skills/shadcn-ui)
Beautiful, accessible component library for React.

**Use when:** Building UI with Tailwind CSS

**Features:**
- Copy-paste components
- Customizable
- Accessible
- TypeScript support

[→ Full shadcn-ui guide](/docs/skills/shadcn-ui)

---

#### [tailwindcss](/docs/skills/tailwindcss)
Utility-first CSS framework.

**Use when:** Styling applications

[→ Full Tailwind CSS guide](/docs/skills/tailwindcss)

---

#### remix-icon
Open-source icon system.

---

### Backend & Databases

#### [postgresql-psql](/docs/skills/postgresql-psql)
PostgreSQL database administration and optimization.

**Use when:** Working with PostgreSQL databases

**Covers:**
- Query optimization
- Schema design
- Performance tuning
- Backup/restore
- Replication

[→ Full postgresql-psql guide](/docs/skills/postgresql-psql)

---

#### mongodb
MongoDB database operations and best practices.

---

### DevOps & Infrastructure

#### [docker](/docs/skills/docker)
Containerization platform for building, running, and deploying applications.

**Use when:** Containerizing apps, creating Dockerfiles, Docker Compose

**Covers:**
- Dockerfile best practices
- Multi-stage builds
- Docker Compose
- Security hardening
- CI/CD integration
- Production deployment

[→ Full docker guide](/docs/skills/docker)

---

#### gcloud
Google Cloud Platform tools and services.

**Use when:** Working with GCP infrastructure

#### turborepo
High-performance build system for JavaScript/TypeScript monorepos.

---

### Cloud Services

#### cloudflare
Cloudflare services and APIs.

#### cloudflare-workers
Serverless execution environment on Cloudflare's edge network.

#### cloudflare-r2
S3-compatible object storage without egress fees.

#### cloudflare-browser-rendering
Headless Chrome automation on Cloudflare.

---

### AI & Machine Learning

#### google-adk-python
Google AI Development Kit for Python applications.

#### gemini-vision
Google Gemini Vision API for image analysis.

**Use when:** Analyzing images, extracting text from images

**Capabilities:**
- Image understanding
- OCR
- Object detection
- Scene analysis

#### gemini-audio
Audio generation and processing with Gemini.

**Features:**
- Text-to-speech
- Audio analysis
- Voice generation

#### gemini-document-processing
Process documents with Gemini AI.

#### gemini-image-gen
Generate images using Gemini models.

#### gemini-video-understanding
Analyze and understand video content.

---

### Media Processing

#### ffmpeg
Process videos and audio with FFmpeg command-line tools.

**Use when:** Converting, editing, or manipulating media files

**Capabilities:**
- Format conversion
- Video editing
- Audio extraction
- Streaming
- Compression

#### imagemagick
Advanced image processing via command-line.

**Use when:** Batch image manipulation, format conversion

**Operations:**
- Resize, crop, rotate
- Format conversion
- Effects and filters
- Batch processing

---

### Testing & Browser Automation

#### chrome-devtools
Automate Chrome browser for testing and debugging.

**Use when:** Web scraping, automated testing, performance analysis

**Features:**
- Puppeteer integration
- Chrome DevTools Protocol
- Performance profiling
- Network monitoring

---

### Documentation & Code Analysis

#### docs-seeker
Find and retrieve documentation from various sources.

**Use when:** Need to look up API docs, framework guides

#### claude-code
Meta-skill for understanding Claude Code itself.

---

### E-commerce

#### shopify
Shopify app development and API integration.

**Use when:** Building Shopify apps or integrations

**Covers:**
- Shopify CLI
- GraphQL Admin API
- UI Extensions
- App development

---

## How to Use Skills

Skills are invoked by mentioning them in conversation with Claude Code.

### Basic Invocation

```
"Use [skill-name] to [task description]"
```

### Real Examples

**Authentication:**
```
"Use better-auth to add GitHub OAuth to my Next.js app"
```

**Document Processing:**
```
"Use document-skills/pdf to extract all tables from quarterly-report.pdf"
```

**Containerization:**
```
"Use docker to create production Dockerfile for my Node.js app"
```

**Debugging:**
```
"Use systematic-debugging to investigate why tests are failing"
```

**AI Integration:**
```
"Use gemini-vision to analyze this product image and extract text"
```

---

## Skills vs Commands

| **Aspect** | **Skills** | **Commands** |
|------------|-----------|--------------|
| **Invocation** | "Use [skill]..." | `/command` |
| **Purpose** | Specialized knowledge | Workflow orchestration |
| **Scope** | Single focused task | Multi-step processes |
| **Examples** | better-auth, docker | /cook, /debug, /plan |

**When to use Skills:** Need specific technical expertise

**When to use Commands:** Need complete workflow with multiple agents

---

## Common Use Cases

### Authentication Setup

```
"Use better-auth to implement authentication with:
- Email/password signup
- GitHub OAuth
- 2FA with TOTP
- Session management"
```

### Containerization

```
"Use docker to:
1. Create optimized multi-stage Dockerfile
2. Set up Docker Compose with PostgreSQL
3. Add health checks
4. Configure for production"
```

### Document Analysis

```
"Use document-skills/docx to:
- Extract all comments and tracked changes
- Preserve formatting
- Export to markdown"
```

### AI-Powered Features

```
"Use gemini-vision to build feature that:
- Analyzes product photos
- Extracts product details
- Validates image quality
- Returns structured data"
```

### Database Work

```
"Use postgresql-psql to:
- Analyze slow queries
- Optimize schema
- Add proper indexes
- Set up replication"
```

### Problem Solving

```
"I'm stuck on this architecture issue. Use collision-zone-thinking to find where requirements conflict"
```

---

## Creating Custom Skills

### Using skill-creator

```
"Use skill-creator to create a skill called 'stripe-integration' that:
- Handles Stripe webhooks
- Manages subscriptions
- Processes payments
- Follows best practices"
```

**The skill-creator will:**
1. Ask clarifying questions
2. Design skill structure
3. Create SKILL.md file
4. Add bundled resources if needed
5. Save to `.claude/skills/`

### Skill Anatomy

Every skill has:

```markdown
---
name: skill-name
description: Clear description of what skill does and when to use it
---

# Skill Name

Instructions that Claude follows when skill is active.

## When to Use
List specific scenarios

## Examples
Real usage examples

## Best Practices
Guidelines to follow
```

---

## Best Practices

### Be Specific

✅ **Good:**
```
"Use docker to create production Dockerfile for Next.js 14 app with:
- Multi-stage build
- Node 20 Alpine
- Non-root user
- Health checks"
```

❌ **Vague:**
```
"Use docker to containerize this"
```

### Provide Context

✅ **Good:**
```
"Use better-auth to add authentication to my Next.js app. I need:
- GitHub and Google OAuth
- Email/password backup
- Role-based permissions
- PostgreSQL with Drizzle"
```

❌ **Minimal:**
```
"Use better-auth"
```

### Specify Output

✅ **Good:**
```
"Use document-skills/pdf to extract tables from contract.pdf and save as CSV in ./exports/"
```

❌ **Unclear:**
```
"Use document-skills to read this PDF"
```

---

## Skill Combinations

Skills work together seamlessly:

**Document + AI:**
```
"First use document-skills/pdf to extract text from spec.pdf,
then use gemini-document-processing to summarize key requirements"
```

**Auth + Database:**
```
"Use better-auth for authentication, then use postgresql-psql to optimize the auth schema"
```

**Debug + Test:**
```
"Use systematic-debugging to find root cause, then use chrome-devtools to verify fix in browser"
```

---

## Quick Reference

### Most Used Skills

| **Task** | **Skill** | **Example** |
|----------|-----------|-------------|
| Authentication | `better-auth` | "Use better-auth for OAuth" |
| Containers | `docker` | "Use docker to create Dockerfile" |
| Documents | `document-skills` | "Use document-skills/pdf..." |
| Debugging | `systematic-debugging` | "Use systematic-debugging..." |
| Next.js | `nextjs` | "Use nextjs for App Router" |
| Database | `postgresql-psql` | "Use postgresql-psql..." |
| AI Vision | `gemini-vision` | "Use gemini-vision to analyze" |
| UI Components | `shadcn-ui` | "Use shadcn-ui for form" |
| MCP Server | `mcp-builder` | "Use mcp-builder..." |
| Custom Skill | `skill-creator` | "Use skill-creator to make..." |

---

## Troubleshooting

### Skill Not Working

**Check:**
1. Skill name spelled correctly
2. Clear description of task
3. Sufficient context provided
4. Expected output specified

### Need Different Skill

**Options:**
1. Check if similar skill exists
2. Use `skill-creator` to build it
3. Request on Discord/GitHub

### Want More Details

**For comprehensive guides, see:**
- [Next.js](/docs/skills/nextjs)
- [Tailwind CSS](/docs/skills/tailwindcss)
- [shadcn/ui](/docs/skills/shadcn-ui)

---

## All 46+ Skills Summary

**Meta:** skill-creator, template-skill

**Auth/Security:** better-auth

**Design:** canvas-design

**Documents:** pdf, docx, pptx, xlsx

**Development:** mcp-builder, repomix, claude-code, docs-seeker

**Debugging:** systematic-debugging, root-cause-tracing, verification-before-completion, defense-in-depth

**Problem Solving:** collision-zone-thinking, inversion-exercise, meta-pattern-recognition, scale-game, simplification-cascades, when-stuck

**Frontend:** nextjs, shadcn-ui, tailwindcss, remix-icon

**Backend:** postgresql-psql, mongodb

**DevOps:** docker, gcloud, turborepo

**Cloud:** cloudflare, cloudflare-workers, cloudflare-r2, cloudflare-browser-rendering

**AI/ML:** google-adk-python, gemini-vision, gemini-audio, gemini-document-processing, gemini-image-gen, gemini-video-understanding

**Media:** ffmpeg, imagemagick

**Testing:** chrome-devtools

**E-commerce:** shopify

---

## Get Started

**Try it now:**
```
"Use better-auth to add authentication to my app"
"Use docker to containerize my application"
"Use systematic-debugging to investigate this error"
```

**Need help?**
- Join [Discord](https://discord.gg/x7SwTSf3wc)
- Check [Commands](/docs/commands/) for workflows
- Read [Agents](/docs/agents/) for orchestration

---

**Bottom Line:** Skills provide instant expertise. Just mention the skill and describe what you need.
