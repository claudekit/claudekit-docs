# ClaudeKit Documentation

Official documentation website for ClaudeKit - AI-powered development toolkit with Claude.

🌐 **Live Site**: https://docs.claudekit.cc
📦 **Version**: 0.0.1 (MVP)
🚀 **Status**: Development

[![Code Hunt 2025](https://img.shields.io/badge/🎄_Code_Hunt_2025-FR0STYC0DE-brightgreen)](https://claudekit.cc)

---

## Overview

Modern documentation platform built with Astro v5, featuring bi-lingual content (EN/VI), AI assistant UI, collapsible navigation, and One Dark Pro-inspired design.

### Key Features

- ✨ **AI Assistant**: Interactive chat panel (UI complete, backend pending)
- 📝 **Type-Safe Content**: Zod-validated markdown, automatic routes
- 🎨 **Beautiful Design**: One Dark Pro theme, Polar docs aesthetics
- 📱 **Fully Responsive**: Mobile-first, adaptive 1/2/3-column layouts
- ⚡ **Blazing Fast**: Static generation, minimal JavaScript (< 200KB)
- 🌍 **Bi-Lingual**: English + Vietnamese, easy to add more locales
- ♿ **Accessible**: WCAG 2.1 AA compliant, keyboard navigation
- 🐳 **Production Ready**: Docker + Kubernetes with HA setup

---

## Technology Stack

**Core**: Astro v5.14.6, React 18.3.1, TypeScript 5.7.3, Node.js 20
**Styling**: Tailwind CSS 3.4, CSS Variables, Shiki (One Dark Pro)
**Content**: Astro Content Collections, Zod validation, GFM, Math equations
**UI**: Radix UI (Collapsible, Dialog, Dropdown, ScrollArea)
**Deployment**: Docker (multi-stage), Kubernetes (2 replicas), nginx-ingress, cert-manager

---

## Quick Start

### Prerequisites

- Node.js 20+
- npm 10+
- Git

### Local Development

```bash
# Clone repo
git clone https://github.com/claudekit/claudekit-docs.git
cd claudekit-docs

# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker Development

```bash
# Build image
docker build -t claudekit-docs:local .

# Run container
docker run -d --name claudekit-docs -p 3000:3000 claudekit-docs:local

# View logs
docker logs claudekit-docs -f
```

---

## Project Structure

```
claudekit-docs/
├── src/
│   ├── components/          # Astro + React components
│   ├── content/
│   │   ├── docs/            # English docs (97 pages)
│   │   ├── docs-vi/         # Vietnamese docs (97 pages)
│   │   └── config.ts        # Zod schema
│   ├── i18n/                # Locales, translations, utils
│   ├── layouts/             # BaseLayout, DocsLayout
│   ├── lib/                 # Utilities (OpenRouter client)
│   ├── pages/               # File-based routing
│   └── styles/              # Global CSS (design tokens)
├── public/                  # Static assets (logos, images)
├── k8s/                     # Kubernetes manifests
├── docs/                    # Project documentation
│   ├── codebase-summary.md
│   ├── code-standards.md
│   ├── system-architecture.md
│   └── project-roadmap.md
├── astro.config.mjs         # Astro config
├── CLAUDE.md                # AI assistant instructions
├── Dockerfile               # Multi-stage build
├── package.json             # Dependencies
└── README.md                # This file
```

---

## Adding Documentation

### Create New Page

1. **Add markdown file** in `src/content/docs/<category>/`

```markdown
---
title: "Your Page Title"
description: "SEO description (150-160 chars)"
category: "getting-started"
order: 1
published: true
---

# Your Page Title

Brief intro paragraph.

## Section

Content with [links](https://example.com) and **formatting**.

\```typescript
// Code blocks with syntax highlighting
const example: string = 'Hello';
\```
```

2. **Route auto-generated** from file path:
   - `src/content/docs/getting-started/intro.md` → `/docs/getting-started/intro`

3. **Add Vietnamese translation** (optional):
   - Mirror file in `src/content/docs-vi/<category>/<slug>.md`

### Valid Categories

- `getting-started` - Onboarding, installation, quick-start
- `cli` - CLI documentation
- `core-concepts` - Architecture, workflows
- `agents` - Agent documentation (14 agents)
- `commands` - Slash commands (25+ commands)
- `skills` - Built-in skills (15+ skills)
- `use-cases` - Real-world tutorials
- `troubleshooting` - Common issues
- `components` - (Future) UI components

---

## Content Statistics

- **Total Pages**: 561 documentation pages (357 EN + 204 VI)
  - **Engineer Kit**: 138 pages (18 agents + 66 commands + 49 skills + 4 configuration + 1 index + docs)
  - **Marketing Kit**: 156 pages (33 agents + 23 commands + 99 skills + 11 workflows + features)
    - All 99 marketing skills fully documented in English and Vietnamese
  - **CLI Kit**: 9 pages (commands, setup, reference)
  - **Getting Started**: Complete onboarding guides with quick-start tutorials
  - **Workflows**: Cross-kit workflow documentation with practical guides
  - **Tools & Support**: Troubleshooting, FAQ, and community support resources
  - **Changelog**: Version history and release notes
- **Vietnamese Coverage**: ~57% (204/357 pages translated, actively expanding)
- **Build Status**: PASSING - 561 pages generated, 0 errors

---

## Development

### Available Scripts

```bash
npm run dev       # Dev server (http://localhost:4321)
npm run build     # Production build → dist/
npm run preview   # Preview build
npm run astro     # Astro CLI
```

### Key Files

- `src/content/config.ts` - Content schema (Zod validation)
- `astro.config.mjs` - Astro config (integrations, markdown plugins)
- `tailwind.config.mjs` - Tailwind config (CSS variable mappings)
- `src/styles/global.css` - Design system (CSS variables)
- `src/i18n/ui.ts` - Translation strings

### Component Development

**Astro Components** (`.astro`):
- Static content and layouts
- Server-side rendering at build time
- Use for non-interactive UI

**React Islands** (`.tsx`):
- Interactive components only
- Client-side hydration
- Use `client:load`, `client:idle`, or `client:visible`

---

## Deployment

### Kubernetes (Production)

```bash
# Prerequisites: kubectl configured, nginx-ingress, cert-manager

# Create registry secret
kubectl create secret docker-registry github-registry \
  --docker-server=ghcr.io \
  --docker-username=YOUR_USERNAME \
  --docker-password=YOUR_TOKEN \
  --docker-email=YOUR_EMAIL

# Deploy
kubectl apply -f k8s/

# Verify
kubectl get pods -l app=claudekit-docs
kubectl get ingress claudekit-docs
```

See [Deployment Guide](./docs/deployment-guide.md) for details.

### Static Hosting

Deploy `dist/` to:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

No special config needed (pure static site).

---

## Configuration

### Astro Config

- **Integrations**: MDX, React, Tailwind
- **i18n**: EN (default), VI (prefix: `/vi/`)
- **Markdown**: GFM, math equations, auto-link headings
- **Syntax Highlighting**: Shiki (One Dark Pro)
- **Output**: Static (SSG)

### Tailwind Config

- **Content**: All files in `src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}`
- **Dark Mode**: Data attribute (`[data-theme="dark"]`)
- **Theme**: Colors, spacing mapped to CSS variables
- **Plugins**: None (vanilla Tailwind)

---

## Current Status

### Completed ✅

- 561 documentation pages (357 EN + 204 VI) across 3 kits
- Kit-agnostic content architecture with Engineer/Marketing/CLI sections
- Comprehensive 8 content categories (getting-started, cli, engineer, marketing, workflows, tools, support, changelog)
- All 99 marketing skills documented in English and Vietnamese
- Responsive 3-column layout with mobile adaptation
- Context-aware sidebar navigation with kit switcher
- AI chat UI with OpenRouter integration (UI complete, backend pending)
- Language switcher with full bilingual support
- Docker + Kubernetes HA setup with 2 replicas
- Complete project documentation (codebase summary, standards, architecture, roadmap)
- URL redirect system for legacy content
- Pagefind search integration
- Production-ready build system

### In Progress 🔄

- Production deployment to docs.claudekit.cc
- AI chat backend integration via OpenRouter
- Search optimization with Pagefind indexing
- Vietnamese translation gap closure (targeting 100% coverage)

### Known Issues 🐛

- AI chat backend connection pending OpenRouter setup
- Some marketing skills have ~40% translation gap in Vietnamese (actively being filled)
- Engineer Skills category has ~2% translation gap (1/49 pages)
- `troubleshooting` category exists in schema but missing from SidebarNav navigation

---

## Roadmap

**Phase 1** (Q4 2025): Production deployment, Pagefind search, fix known issues
**Phase 2** (Q1 2026): OpenRouter AI backend, hierarchical navigation, analytics
**Phase 3** (Q2 2026): Theme toggle, community contributions, performance tuning
**Phase 4** (Q3 2026): Versioned docs, additional locales (ES, FR, DE, ZH)
**Phase 5** (Q4 2026): Enterprise features, HA, advanced AI

See [Project Roadmap](./docs/project-roadmap.md) for details.

---

## Documentation

Comprehensive docs in `docs/` directory:

- **[Codebase Summary](./docs/codebase-summary.md)** - Complete overview, 194 pages, tech stack
- **[Code Standards](./docs/code-standards.md)** - Naming, file org, patterns, quality
- **[System Architecture](./docs/system-architecture.md)** - SSG + islands, build/runtime layers
- **[Project Roadmap](./docs/project-roadmap.md)** - Status, phases, goals, issues
- **[Design Guidelines](./docs/design-guidelines.md)** - Design system specs (49KB)
- **[Deployment Guide](./docs/deployment-guide.md)** - K8s deployment, Docker, static hosting
- **[Tech Stack](./docs/tech-stack.md)** - Technology decisions, comparisons

---

## Related Projects

- **[ClaudeKit CLI](https://github.com/mrgoonie/claudekit-cli)** - CLI setup tool
- **[ClaudeKit Engineer](https://github.com/claudekit/claudekit-engineer)** - Engineering toolkit
- **[ClaudeKit Marketing](https://github.com/claudekit/claudekit-marketing)** - Marketing toolkit
- **[ClaudeKit](https://github.com/mrgoonie/claudekit)** - Main website

---

## Contributing

Contributions welcome! Please:

1. Read [Code Standards](./docs/code-standards.md)
2. Create branch: `feat/your-feature` or `fix/your-fix`
3. Follow TypeScript strict mode, conventional commits
4. Test locally: `npm run dev` and `npm run build`
5. Submit PR with description

---

## License

MIT License - see LICENSE file for details

---

## Support

- **Documentation**: See `docs/` directory
- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions

---

**Last Updated**: 2026-03-03
**Maintainers**: ClaudeKit Team
**Build Status**: PASSING (561 pages, 0 errors)
