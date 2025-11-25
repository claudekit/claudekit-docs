# CLAUDE.md - ClaudeKit Docs

Astro v5 static docs site for ClaudeKit. Live: https://docs.claudekit.cc

## Quick Commands

```bash
npm run dev      # Dev server → http://localhost:4321
npm run build    # Production build → dist/
npm run preview  # Preview build
```

## Key Locations

- **Content**: `src/content/docs/` (EN), `src/content/docs-vi/` (VI)
- **Components**: `src/components/` (Astro + React islands)
- **Layouts**: `src/layouts/` (BaseLayout, DocsLayout)
- **i18n**: `src/i18n/` (locales, translations, utils)
- **Config**: `src/content/config.ts` (Zod schema)
- **Docs**: `docs/` (codebase-summary, code-standards, system-architecture, project-roadmap)

## Adding Documentation

1. Create markdown file: `src/content/docs/<category>/<slug>.md`
2. Add frontmatter:
```yaml
---
title: "Page Title"
description: "SEO description (150-160 chars)"
category: "getting-started"  # See valid categories below
order: 1                      # Lower = higher in nav
published: true
---
```
3. Dev server auto-reloads
4. Optionally add Vietnamese: `src/content/docs-vi/<category>/<slug>.md`

## Valid Categories

From `src/content/config.ts`:
- `getting-started`, `cli`, `core-concepts`, `agents`, `commands`, `skills`, `use-cases`, `troubleshooting`, `components`

**Note**: `troubleshooting` category exists in schema but missing from SidebarNav.astro (known issue).

## File Routes

- `src/content/docs/getting-started/intro.md` → `/docs/getting-started/intro`
- `src/content/docs-vi/getting-started/intro.md` → `/vi/docs/getting-started/intro`

## Tech Stack

- **Astro v5.14.6**: SSG with islands architecture
- **React 18.3.1**: Interactive components (AIChat, LanguageSwitcher)
- **TypeScript 5.7.3**: Strict mode
- **Tailwind CSS 3.4**: Utility-first + CSS variables
- **Radix UI**: Accessible components
- **Node.js 20**: Runtime

## Design System

- **Theme**: One Dark Pro (dark mode only)
- **CSS Variables**: `src/styles/global.css` (--color-*, --space-*, --text-*)
- **Fonts**: Inter (body), Geist Mono (code)
- **Inspiration**: Polar docs aesthetics

## i18n

- **Default**: `en` (no prefix)
- **Vietnamese**: `vi` (prefix: `/vi/`)
- **UI Strings**: `src/i18n/ui.ts` (18 keys × 2 locales)
- **Workflow**: Create EN first, mirror structure in `docs-vi/`, translate

## Known Issues / TODOs

- [ ] AI chat backend not connected (UI only)
- [ ] Search not implemented (Pagefind planned)
- [ ] Sidebar flat nav (commands nested but shown flat)
- [ ] `troubleshooting` category missing from SidebarNav

## Deployment

- **Docker**: Multi-stage build, node:20-alpine
- **K8s**: `k8s/` manifests (deployment, service, ingress, configmap)
- **Static**: Can deploy to Vercel, Netlify, Cloudflare Pages

## Documentation

See `docs/` directory:
- `codebase-summary.md`: Complete overview, 194 pages, 9 categories
- `code-standards.md`: Naming conventions, file org, component patterns
- `system-architecture.md`: SSG + islands architecture, build/runtime layers
- `project-roadmap.md`: Status, phases, known issues, goals
- `design-guidelines.md`: Design system specs (49KB)
- `deployment-guide.md`: Production deployment
