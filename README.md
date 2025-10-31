# ClaudeKit Documentation

Official documentation website for ClaudeKit - A comprehensive toolkit for building AI-powered applications with Claude.

🌐 **Live Site**: https://docs.claudekit.cc
📦 **Version**: 0.0.1 (MVP)
🚀 **Status**: Development

---

## Overview

Modern, AI-powered documentation platform built with Astro v5, featuring a 3-column responsive layout, type-safe content management, and integrated AI assistance powered by OpenRouter.

### Key Features

- ✨ **AI Assistant**: Interactive chat panel with context-aware responses (UI complete, backend pending)
- 📝 **Type-Safe Content**: Zod-validated markdown with automatic route generation
- 🎨 **Beautiful Design**: One Dark Pro-inspired theme with Polar documentation aesthetics
- 📱 **Fully Responsive**: Mobile-first design with adaptive 1/2/3-column layouts
- ⚡ **Blazing Fast**: Static site generation with minimal JavaScript hydration
- ♿ **Accessible**: WCAG 2.1 AA compliant with keyboard navigation
- 🐳 **Production Ready**: Docker + Kubernetes deployment with high availability

---

## Technology Stack

### Core Framework
- **Astro v5.14.6** - Static site generator with islands architecture
- **React 18.3.1** - Interactive UI components (islands)
- **TypeScript 5.7.3** - Type-safe development
- **Node.js 20** - Runtime environment

### Styling
- **Tailwind CSS v3.4.17** - Utility-first CSS framework
- **CSS Variables** - Design token system (colors, spacing, typography)
- **Inter Variable** - Body font (Google Fonts)
- **Geist Mono** - Code font (Vercel)

### Content Management
- **Astro Content Collections** - Type-safe markdown with Zod validation
- **remark-gfm** - GitHub Flavored Markdown support
- **remark-math** - LaTeX math equations
- **rehype-slug** - Auto-generate heading anchors
- **rehype-katex** - Render math notation
- **Shiki** - Syntax highlighting (One Dark Pro theme)

### UI Components
- **Radix UI** - Accessible headless components
  - Collapsible (sidebar navigation)
  - Dialog (AI assistant panel)
  - Dropdown Menu (copy page actions)
  - Scroll Area (custom scrollbars)

### AI Integration
- **OpenRouter API** - Multi-model LLM gateway (Claude, GPT-4, 400+ models)
- **OpenAI SDK v4.75.1** - API client library
- **Server-Side Routes** - Secure API key management (future)

### Deployment
- **Docker** - Containerization (multi-stage build, node:20-alpine)
- **Kubernetes** - Orchestration (2 replicas, HPA-ready)
- **nginx-ingress** - Load balancing and TLS termination
- **cert-manager** - Automatic SSL certificates (Let's Encrypt)
- **GitHub Container Registry** - Docker image hosting

---

## Project Structure

```
claudekit-docs/
├── src/                           # Source code
│   ├── components/                # React & Astro components
│   │   ├── AIChat.tsx             # AI chat interface (React)
│   │   ├── AIPanel.astro          # AI assistant panel wrapper
│   │   ├── Header.astro           # Top navigation bar
│   │   ├── Sidebar.astro          # Left sidebar container
│   │   └── SidebarNav.astro       # Navigation tree logic
│   ├── content/                   # Documentation content
│   │   ├── docs/                  # Markdown documentation
│   │   │   ├── getting-started/   # Introduction, installation, quick-start
│   │   │   ├── cli/               # CLI documentation (3 pages)
│   │   │   ├── core-concepts/     # Architecture documentation
│   │   │   ├── components/        # (Empty - future)
│   │   │   └── api-reference/     # (Empty - future)
│   │   └── config.ts              # Content collection schema (Zod)
│   ├── layouts/                   # Page layouts
│   │   ├── BaseLayout.astro       # HTML document structure
│   │   └── DocsLayout.astro       # 3-column docs layout
│   ├── lib/                       # Utilities & API clients
│   │   └── openrouter.ts          # OpenRouter API client
│   ├── pages/                     # File-based routing
│   │   ├── index.astro            # Homepage
│   │   └── docs/[...slug].astro   # Dynamic doc pages
│   └── styles/                    # Global styles
│       └── global.css             # Design system (CSS variables)
├── public/                        # Static assets
│   ├── favicon.svg                # Site icon
│   └── *.png                      # Logos (dark, light, transparent)
├── k8s/                           # Kubernetes deployment
│   ├── configmap.yaml             # Environment config
│   ├── deployment.yaml            # Pod specification (2 replicas)
│   ├── service.yaml               # ClusterIP service
│   ├── ingress.yaml               # HTTPS ingress + TLS
│   └── README.md                  # Deployment guide
├── docs/                          # Project documentation
│   ├── codebase-summary.md        # Complete codebase overview
│   ├── project-overview-pdr.md    # Product requirements & roadmap
│   ├── code-standards.md          # Coding standards & conventions
│   ├── system-architecture.md     # Technical architecture
│   ├── deployment-guide.md        # Production deployment guide
│   ├── tech-stack.md              # Technology decisions
│   └── design-guidelines.md       # Design system specification
├── .claude/                       # Claude Code workflows
├── Dockerfile                     # Multi-stage Docker build
├── astro.config.mjs               # Astro configuration
├── tailwind.config.mjs            # Tailwind CSS config
├── package.json                   # Dependencies (13 prod, 3 dev)
├── tsconfig.json                  # TypeScript config (strict mode)
└── README.md                      # This file
```

---

## Quick Start

### Prerequisites

- **Node.js 20+** - JavaScript runtime
- **npm 10+** - Package manager
- **Git** - Version control

### Local Development

```bash
# Clone repository
git clone https://github.com/claudekit/claudekit-docs.git
cd claudekit-docs

# Install dependencies
npm install

# Start development server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker Development

```bash
# Build Docker image
docker build -t claudekit-docs:local .

# Run container
docker run -d --name claudekit-docs -p 3000:3000 claudekit-docs:local

# View logs
docker logs claudekit-docs -f

# Stop and remove
docker stop claudekit-docs && docker rm claudekit-docs
```

### Kubernetes Deployment

```bash
# Prerequisites: kubectl configured, nginx-ingress, cert-manager installed

# Create GitHub Container Registry secret
kubectl create secret docker-registry github-registry \
  --docker-server=ghcr.io \
  --docker-username=YOUR_GITHUB_USERNAME \
  --docker-password=YOUR_GITHUB_TOKEN \
  --docker-email=YOUR_EMAIL

# Deploy all resources
kubectl apply -f k8s/

# Verify deployment
kubectl get pods -l app=claudekit-docs
kubectl get svc claudekit-docs
kubectl get ingress claudekit-docs

# View logs
kubectl logs -l app=claudekit-docs --follow
```

See [Deployment Guide](./docs/deployment-guide.md) for detailed instructions.

---

## Adding Documentation

### Create New Documentation Page

1. **Add markdown file** in `src/content/docs/<category>/`

```markdown
---
title: "Your Page Title"
description: "SEO-friendly description (150-160 chars)"
category: "getting-started"  # or cli, core-concepts, components, api-reference
order: 1                      # Optional: order in navigation
published: true               # Default: true
---

# Your Page Title

Brief introduction paragraph.

## Section Heading

Content with [links](https://example.com) and **formatting**.

```typescript
// Code blocks with syntax highlighting
const greeting: string = "Hello, world!";
console.log(greeting);
\```
```

2. **Route auto-generated** from file path:
   - `src/content/docs/getting-started/introduction.md` → `/docs/getting-started/introduction`

3. **Validate frontmatter** (build will fail if invalid):
   - All required fields must be present
   - Category must be one of: `getting-started`, `cli`, `core-concepts`, `components`, `api-reference`

### Content Guidelines

- **H1**: Page title only (one per page)
- **H2-H4**: Section headings (avoid H5-H6)
- **Code blocks**: Always specify language (```typescript, ```bash, etc.)
- **Links**: Use descriptive text, not "click here"
- **Images**: Store in `public/` directory, reference with `/image.png`

---

## Available Scripts

```bash
npm run dev       # Start dev server (http://localhost:4321)
npm run build     # Build for production (output: dist/)
npm run preview   # Preview production build
npm run astro     # Run Astro CLI commands
```

---

## Configuration Files

### Astro Config (`astro.config.mjs`)

- **Integrations**: MDX, React, Tailwind
- **Markdown**: remark-gfm, remark-math, rehype-slug, rehype-autolink-headings, rehype-katex
- **Syntax Highlighting**: Shiki (One Dark Pro theme)
- **Output**: Static site generation (SSG)

### Tailwind Config (`tailwind.config.mjs`)

- **Content**: All files in `src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}`
- **Dark Mode**: Class-based (`[data-theme="dark"]`)
- **Custom Theme**: Colors, fonts, spacing mapped to CSS variables
- **No Plugins**: Vanilla Tailwind only

### TypeScript Config (`tsconfig.json`)

- **Extends**: `astro/tsconfigs/strict`
- **Strict Mode**: Enabled for type safety

---

## Documentation

### Project Documentation

Comprehensive project documentation for both ClaudeKit Docs site and ClaudeKit Engineer located in `docs/`:

#### Core Documentation

1. **[Project Overview & PDR](./docs/project-overview-pdr.md)**
   - Product vision, goals, and value proposition
   - Functional and non-functional requirements
   - Success metrics and roadmap (4 phases)
   - Pricing strategy and competitive analysis
   - Risk assessment and mitigation strategies

2. **[Codebase Summary](./docs/codebase-summary.md)**
   - Complete overview of ClaudeKit Engineer structure
   - 49 source files, 44K+ tokens analyzed
   - AI agents (12), slash commands (30+), MCP servers (6)
   - Technology stack and dependencies
   - File statistics and distribution

3. **[Code Standards](./docs/code-standards.md)**
   - Core principles: YAGNI, KISS, DRY
   - File organization and naming conventions
   - Agent and command development standards
   - Documentation, testing, and security standards
   - Git workflow and commit message format

4. **[System Architecture](./docs/system-architecture.md)**
   - High-level architecture overview
   - Agent architecture and lifecycle
   - Command orchestration patterns (sequential, parallel, conditional)
   - Data flow and communication protocols
   - Integration, security, and scalability architecture

### Kubernetes Documentation

Detailed K8s deployment guide: **[k8s/README.md](./k8s/README.md)**

---

## Current Status

### Completed (Phase 1-4) ✅
- ✅ Project setup and configuration
- ✅ Base layouts (BaseLayout, DocsLayout)
- ✅ Navigation components (Header, Sidebar)
- ✅ AI chat UI (placeholder responses)
- ✅ Content collections with Zod validation
- ✅ Docker containerization
- ✅ Kubernetes manifests
- ✅ Comprehensive project documentation

### Completed (Content Update - Oct 2025) ✅
- ✅ **79 documentation pages** (259% increase from 22 pages)
- ✅ **14 agent pages** (100% coverage)
- ✅ **25 command pages** across 9 categories (83% coverage)
- ✅ **3 essential skill pages** (Next.js, Tailwind CSS, shadcn/ui)
- ✅ **7 use case pages** (features, bugs, refactoring, API, auth, payments, performance)
- ✅ **6 troubleshooting pages** (installation, commands, agents, API keys, performance)
- ✅ **Quick Start Guide** (complete 15-min workflow)
- ✅ **Introduction revision** (20% more concise with comparison table)
- ✅ **~250KB of quality documentation** added

### In Progress
- 🔄 Production deployment to docs.claudekit.cc
- 🔄 AI assistant backend connection (OpenRouter API)
- 🔄 Search functionality (Pagefind)
- 🔄 Remaining content: 42 skills, 5 commands

### Planned (Phase 2)
- 📋 Complete skill documentation (42 remaining)
- 📋 Complete command documentation (5 remaining)
- 📋 Interactive code examples
- 📋 Analytics integration (Plausible)
- 📋 Error tracking (Sentry)
- 📋 CI/CD pipeline (GitHub Actions)
- 📋 Automated testing (Vitest, Playwright)

### Future (Phase 3+)
- 🚀 Multi-language support (i18n)
- 🚀 Interactive code playground
- 🚀 Video tutorials
- 🚀 Community contributions workflow
- 🚀 Versioned documentation

---

## Related Projects

ClaudeKit ecosystem projects:

1. **[ClaudeKit Website](https://github.com/mrgoonie/claudekit)** - Main marketing site
  - Source code: `../claudekit-web/`
2. **[ClaudeKit Engineer](https://github.com/claudekit/claudekit-engineer)** - Engineering toolkit
  - Source code: `../claudekit-engineer/`
3. **[ClaudeKit Marketing](https://github.com/claudekit/claudekit-marketing)** - Marketing toolkit
  - Source code: `../claudekit-marketing/`
4. **[ClaudeKit CLI](https://github.com/mrgoonie/claudekit-cli)** - Command-line tool
  - Source code: `../claudekit-cli/`

---

## Contributing

We welcome contributions! Please follow these guidelines:

1. **Read documentation**: Review [Code Standards](./docs/code-standards.md)
2. **Create branch**: `feat/your-feature` or `fix/your-fix`
3. **Follow conventions**: TypeScript strict mode, conventional commits
4. **Test locally**: `npm run dev` and `npm run build`
5. **Submit PR**: Include description, screenshots for UI changes

---

## License

MIT License - see LICENSE file for details

---

## Support

- **Documentation**: See `docs/` directory for comprehensive guides
- **Issues**: Report bugs or request features via GitHub Issues
- **Discussions**: Join conversations in GitHub Discussions

---

**Last Updated**: 2025-10-18
**Maintainers**: ClaudeKit Team

