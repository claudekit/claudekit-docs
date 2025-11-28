# Codebase Summary

**Last Updated**: 2025-11-28
**Version**: 0.0.1 (Post-IA Restructure)
**Repository**: claudekit-docs

## Overview

claudekit-docs is Astro v5-based static documentation site for ClaudeKit ecosystem. Features bi-lingual content (English/Vietnamese), section-based information architecture, AI chat integration (UI complete, backend pending), enhanced sidebar navigation, and One Dark Pro-inspired design system. Successfully completed Phase 01 IA restructure with 194 files migrated to logical section organization.

## Project Statistics

**Content**:
- 194 total documentation pages (97 English + 97 Vietnamese)
- 9 logical content sections (post-IA restructure)
- Section-based organization with improved discoverability
- ~250KB documentation content
- Complete IA restructure completed (Phase 01)

**Source Code**:
- 18 source files (Astro, TypeScript, React)
- 6 components (3 Astro, 3 React islands)
- 2 layouts (BaseLayout, DocsLayout)
- 3 i18n files (locales, ui, utils)

**Infrastructure**:
- 5 K8s manifests (deployment, service, ingress, configmap)
- 1 Dockerfile (multi-stage Node 20 Alpine)
- 14+ docs files in `docs/` directory

## Directory Structure

```
/home/kai/claudekit/claudekit-docs/
├── src/                          # Source code
│   ├── components/              # UI components
│   │   ├── AIChat.tsx           # React: Chat interface (backend pending)
│   │   ├── AIPanel.astro        # Astro: AI panel wrapper
│   │   ├── Header.astro         # Astro: Top navigation
│   │   ├── LanguageSwitcher.tsx # React: EN/VI switcher
│   │   ├── Sidebar.astro        # Astro: Left sidebar container
│   │   └── SidebarNav.astro     # Astro: Nav tree with section-based logic
│   ├── content/                 # Content collections (Zod validated)
│   │   ├── docs/                # English docs (section-based organization)
│   │   │   ├── getting-started/ # 8 onboarding docs (installation, quick-start, project types)
│   │   │   ├── cli/             # 2 CLI documentation files
│   │   │   ├── core-concepts/   # 2 architecture and workflow documentation files
│   │   │   ├── agents/          # 15 agent docs (14 agents + index)
│   │   │   ├── commands/        # 25 command docs across 9 subcategories
│   │   │   ├── skills/          # 15 built-in skill documentation files
│   │   │   ├── use-cases/       # 10 tutorial and example files
│   │   │   ├── troubleshooting/ # 6 troubleshooting guides
│   │   │   └── components/      # Future UI component reference (placeholder)
│   │   ├── docs-vi/             # Vietnamese translations (mirrored section structure)
│   │   └── config.ts            # Zod schema for frontmatter validation (updated for sections)
│   ├── i18n/                    # Internationalization
│   │   ├── locales.ts           # Locale definitions (en, vi)
│   │   ├── ui.ts                # Translation strings
│   │   └── utils.ts             # getLangFromUrl, useTranslations, getLocalizedPath
│   ├── layouts/                 # Page layouts
│   │   ├── BaseLayout.astro     # HTML shell (meta, fonts, theme)
│   │   └── DocsLayout.astro     # 3-column: sidebar | content | AI panel
│   ├── lib/                     # Utilities
│   │   └── openrouter.ts        # OpenRouter API client (future)
│   ├── pages/                   # File-based routing
│   │   ├── index.astro          # Homepage
│   │   ├── docs/[...slug].astro # English doc pages
│   │   └── vi/docs/[...slug].astro # Vietnamese doc pages
│   └── styles/                  # Global CSS
│       └── global.css           # Design tokens, One Dark Pro theme
├── public/                      # Static assets
│   ├── assets/                  # Images (screenshots)
│   ├── docs/                    # Legacy docs (93+ mirrored pages)
│   ├── favicon.svg              # Site icon
│   ├── llms.txt                 # LLM context file
│   ├── logo-*.png               # Logo variants (dark, light, transparent)
│   └── og-image.png             # Open Graph image
├── k8s/                         # Kubernetes deployment
│   ├── configmap.yaml           # Environment variables
│   ├── deployment.yaml          # 2 replicas, resource limits
│   ├── ingress.yaml             # nginx-ingress with TLS
│   ├── service.yaml             # ClusterIP service
│   └── README.md                # Deployment instructions
├── docs/                        # Project documentation
│   ├── project-changelog.md     # Comprehensive project changelog (NEW)
│   ├── codebase-summary.md      # This file (updated)
│   ├── project-roadmap.md       # Development phases and timeline (updated)
│   ├── code-standards.md        # Coding conventions
│   ├── design-guidelines.md     # Design system specs (49KB)
│   ├── deployment-guide.md      # Production deployment
│   ├── project-overview-pdr.md  # Product requirements
│   ├── system-architecture.md   # Technical architecture
│   └── tech-stack.md            # Technology decisions
├── .claude/                     # Claude Code workflows
├── astro.config.mjs             # Astro config (MDX, React, Tailwind, i18n)
├── CLAUDE.md                    # Claude-specific instructions (171 lines)
├── Dockerfile                   # Multi-stage build (node:20-alpine)
├── package.json                 # Dependencies (18 total: 15 prod, 3 dev)
├── README.md                    # User-facing docs (413 lines)
├── repomix-output.xml           # Codebase compaction (1M+ tokens)
├── tailwind.config.mjs          # Tailwind config (CSS var mappings)
└── tsconfig.json                # TypeScript strict mode
```

## Technology Stack

### Core Framework
- **Astro v5.14.6**: Static site generator with islands architecture
- **React 18.3.1**: Interactive components (AIChat, LanguageSwitcher)
- **TypeScript 5.7.3**: Strict type checking
- **Node.js 20**: Runtime

### Styling
- **Tailwind CSS v3.4.17**: Utility-first CSS
- **CSS Variables**: Design token system (`--color-*`, `--space-*`, `--text-*`)
- **Shiki**: Syntax highlighting (One Dark Pro theme)
- **Inter Variable**: Body font (Google Fonts)
- **Geist Mono**: Code font (Vercel)

### Content Management
- **Astro Content Collections**: Type-safe markdown with Zod validation
- **remark-gfm**: GitHub Flavored Markdown
- **remark-math**: LaTeX math equations
- **rehype-slug**: Auto-generate heading anchors
- **rehype-autolink-headings**: Link headings
- **rehype-katex**: Render math notation

### UI Components
- **Radix UI**: Accessible headless components
  - `@radix-ui/react-collapsible`: Sidebar navigation
  - `@radix-ui/react-dialog`: AI assistant panel
  - `@radix-ui/react-dropdown-menu`: Copy page actions
  - `@radix-ui/react-scroll-area`: Custom scrollbars

### AI Integration (Future)
- **OpenRouter API**: Multi-model LLM gateway
- **OpenAI SDK v4.75.1**: API client library

### Deployment
- **Docker**: Multi-stage build (node:20-alpine)
- **Kubernetes**: 2 replicas, HPA-ready
- **nginx-ingress**: Load balancing, TLS termination
- **cert-manager**: Automatic SSL (Let's Encrypt)

## Key Components

### 1. Content System

**Schema Definition** (`src/content/config.ts`):
```typescript
docsSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.enum([
    'getting-started',
    'core-concepts',
    'agents',
    'commands',
    'skills',
    'use-cases',
    'components',
    'cli',
    'troubleshooting'
  ]).optional(),
  order: z.number().optional(),
  published: z.boolean().default(true),
  lastUpdated: z.date().optional(),
})
```

**Content Sections** (9 total - Post-IA Restructure):

1. **getting-started** (8 docs): User onboarding and setup guides
   - Installation and configuration
   - Quick-start tutorials (15-minute setup)
   - Greenfield and brownfield project setups
   - Gemini AI configuration
   - MCP (Model Context Protocol) setup
   - Developer cheatsheet and reference

2. **cli** (2 docs): Command-line interface documentation
   - CLI overview and features
   - Installation and setup instructions

3. **core-concepts** (2 docs): Architecture and workflow documentation
   - CLAUDE.md configuration and explanation
   - Development workflows and best practices

4. **agents** (15 docs): AI agent documentation
   - 14 specialized agents (planner, researcher, tester, debugger, code-reviewer, docs-manager, git-manager, project-manager, database-admin, ui-ux-designer, copywriter, scout, journal-writer, brainstormer)
   - Agent overview and coordination

5. **commands** (25 docs): Slash command documentation across 9 subcategories
   - Core commands (general purpose)
   - Fix commands (debugging and troubleshooting)
   - Design commands (UI/UX development)
   - Documentation commands
   - Git commands
   - Planning commands
   - Content commands
   - Integration commands
   - Skill commands

6. **skills** (15 docs): Built-in agent skills documentation
   - Development skills (Next.js, Tailwind, shadcn/ui)
   - Authentication skills (Better Auth)
   - Infrastructure skills (Docker, FFmpeg, ImageMagick)
   - Specialized tools and integrations

7. **use-cases** (10 docs): Real-world tutorials and examples
   - Feature development workflows
   - Bug fixing methodologies
   - API building patterns
   - Authentication implementation
   - Payment integration
   - Performance optimization
   - Code refactoring techniques
   - Legacy project maintenance
   - New project initialization
   - Codebase understanding with GKG

8. **troubleshooting** (6 docs): Problem-solving guides
   - Installation and setup issues
   - Command execution errors
   - Agent configuration problems
   - API key and authentication setup
   - Performance optimization
   - Common development issues

9. **components** (0 docs): Future UI component reference
   - Placeholder for future component documentation

### 2. Navigation System

**SidebarNav.astro** (Post-IA Restructure):
- Groups docs by logical sections from frontmatter category field
- Sorts by `order` field (lower = higher)
- Collapsible sections with localStorage persistence
- Auto-expands "Getting Started" by default
- Active page highlighting with 2px blue left border
- File/folder icons (Lucide-style inline SVG)
- Enhanced section-based organization improving content discoverability
- Mirrored structure for Vietnamese translations

**Navigation Improvements**:
- Section-based categorization replaces flat hierarchy
- Logical grouping enhances user experience
- Consistent organization across English and Vietnamese content
- Scalable structure for future content growth

**Remaining Navigation Issues**:
- Commands have nested subdirectories (`commands/fix/hard.md`) but sidebar shows flat list. Hierarchical nav still needed for command subcategories.
- `troubleshooting` category navigation integration needs verification.

### 3. Internationalization (i18n)

**Supported Locales** (`src/i18n/locales.ts`):
- `en` (English, default, no prefix)
- `vi` (Vietnamese, `/vi/` prefix)

**Translation System** (`src/i18n/ui.ts`):
```typescript
ui = {
  en: {
    'nav.getting-started': 'Getting Started',
    'nav.agents': 'Agents',
    // ... 18 translation keys
  },
  vi: {
    'nav.getting-started': 'Bắt Đầu',
    'nav.agents': 'Agents',
    // ... Vietnamese translations
  }
}
```

**Routing**:
- English: `/docs/getting-started/introduction`
- Vietnamese: `/vi/docs/getting-started/introduction`

### 4. AI Chat System (UI Only)

**AIChat.tsx** (React):
- Chat interface with message history
- Markdown rendering with syntax highlighting
- Send message functionality (no backend)
- Responsive design with collapsible panel

**AIPanel.astro** (Astro):
- Radix Dialog wrapper
- Slide-in panel from right
- Close button and backdrop
- Future: Connect to OpenRouter API

**Planned Backend** (`src/lib/openrouter.ts`):
- OpenRouter API integration
- Multi-model support (Claude, GPT-4, 400+ models)
- Streaming responses
- Context-aware assistance

### 5. Design System

**CSS Variables** (`src/styles/global.css`):
```css
/* Colors */
--color-bg-primary: #1e1e1e
--color-bg-secondary: #252525
--color-bg-tertiary: #2d2d2d
--color-text-primary: #abb2bf
--color-text-secondary: #848b98
--color-accent-blue: #61afef

/* Spacing */
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-3: 0.75rem (12px)
--space-4: 1rem (16px)
/* ... up to --space-12 */

/* Typography */
--text-xs: 0.75rem (12px)
--text-sm: 0.875rem (14px)
--text-base: 1rem (16px)
--text-lg: 1.125rem (18px)
/* ... up to --text-6xl */
```

**Inspiration**: Polar documentation aesthetics, One Dark Pro color scheme

### 6. Layouts

**BaseLayout.astro**:
- HTML document structure
- Meta tags (title, description, OG)
- Font loading (Inter, Geist Mono)
- Theme initialization (`[data-theme="dark"]`)
- Global CSS injection

**DocsLayout.astro**:
- 3-column responsive layout
- Left sidebar (250px desktop, hidden mobile)
- Center content (max-width 900px)
- Right AI panel (350px desktop, slide-in mobile)
- Breakpoints: 768px (mobile), 1024px (desktop)

## File Statistics

**Source Files**:
- 6 components (.astro + .tsx)
- 2 layouts (.astro)
- 5 pages (.astro)
- 3 i18n files (.ts)
- 1 lib file (.ts)
- 1 config file (.ts)
- 1 global CSS (.css)
- **Total**: 19 source files

**Content Files**:
- 97 English docs (.md)
- 97 Vietnamese docs (.md)
- **Total**: 194 markdown files

**Configuration Files**:
- astro.config.mjs
- tailwind.config.mjs
- tsconfig.json
- package.json
- Dockerfile
- 5 K8s manifests

**Documentation Files**:
- 14 files in `docs/` directory
- ~150KB total size

## Entry Points

### For Users
- `/` - Homepage (landing page)
- `/docs/getting-started/introduction` - First doc page
- `/docs/getting-started/quick-start` - 15-minute quickstart guide

### For Developers
- `package.json` - Dependencies and scripts
- `astro.config.mjs` - Astro configuration
- `src/content/config.ts` - Content schema
- `CLAUDE.md` - AI assistant instructions

### For Content Contributors
- `src/content/docs/` - English markdown
- `src/content/docs-vi/` - Vietnamese markdown
- Frontmatter schema in `src/content/config.ts`

## Development Workflow

**Local Development**:
```bash
npm install          # Install dependencies
npm run dev          # Dev server → http://localhost:4321
npm run build        # Production build → dist/
npm run preview      # Preview build
```

**Content Updates**:
1. Add/edit markdown in `src/content/docs/<category>/`
2. Add frontmatter (title, description, category, order)
3. Dev server auto-reloads
4. Optionally add Vietnamese translation in `src/content/docs-vi/`

**Component Development**:
- Astro components: `.astro` files
- React islands: `.tsx` files (use client directives)
- Styling: Tailwind classes + CSS variables
- Hot module reloading in dev mode

## Dependencies

**Production** (15):
- `@astrojs/mdx` v4.3.7
- `@astrojs/react` v4.0.0
- `@astrojs/tailwind` v6.0.2
- `@radix-ui/react-collapsible` v1.1.2
- `@radix-ui/react-dialog` v1.1.4
- `@radix-ui/react-dropdown-menu` v2.1.4
- `@radix-ui/react-scroll-area` v1.2.2
- `astro` v5.14.6
- `openai` v4.75.1
- `react` v18.3.1
- `react-dom` v18.3.1
- `rehype-autolink-headings` v7.1.0
- `rehype-katex` v7.0.1
- `rehype-slug` v6.0.0
- `remark-gfm` v4.0.0
- `remark-math` v6.0.0
- `tailwindcss` v3.4.17

**Development** (3):
- `@types/react` v18.3.17
- `@types/react-dom` v18.3.5
- `typescript` v5.7.3

## Build Process

**Multi-Stage Docker Build**:
1. **Stage 1**: Build (node:20-alpine)
   - Copy package files, install deps
   - Copy source, run `npm run build`
   - Output: `dist/` directory
2. **Stage 2**: Runtime (node:20-alpine)
   - Copy built files from stage 1
   - Expose port 3000
   - Serve with `node` (static file server)

**Static Output**:
- All pages pre-rendered at build time
- No server-side rendering (SSR)
- Minimal JavaScript (islands architecture)
- Optimized for CDN deployment

## Deployment

**Kubernetes** (Production):
- 2 replicas (default)
- Resource limits: 200m CPU, 256Mi RAM
- Liveness/readiness probes on port 3000
- nginx-ingress with TLS (cert-manager)
- ConfigMap for environment variables

**Docker** (Local/Testing):
- Build: `docker build -t claudekit-docs:local .`
- Run: `docker run -p 3000:3000 claudekit-docs:local`

**Static Hosts** (Alternative):
- Vercel, Netlify, Cloudflare Pages
- Deploy `dist/` directory
- No special config needed

## Phase 01 IA Restructure Results

### Completed Successfully ✅
- **Information Architecture**: Complete overhaul from flat to section-based organization
- **Content Migration**: All 194 files migrated without data loss (97 EN + 97 VI)
- **Navigation Enhancement**: Section-based navigation with improved categorization
- **Directory Structure**: Reorganized into 9 logical sections
- **Bilingual Support**: Preserved and maintained throughout restructuring
- **Schema Updates**: Frontmatter validation updated for new categories
- **Documentation**: Comprehensive updates to project documentation

### Quality Assurance
- ✅ All 194 files successfully migrated
- ✅ Build process passes with new structure
- ✅ Internal links updated correctly
- ✅ Frontmatter validation working
- ✅ Navigation functioning properly
- ✅ Mobile and desktop responsive

## Known Issues

1. **AI Chat Backend**: UI complete, OpenRouter integration pending
2. **Search**: Not implemented (Pagefind planned for Phase 02)
3. **Command Navigation Hierarchy**: Commands have nested subdirectories but show flat list
4. **Troubleshooting Category**: Navigation integration needs verification
5. **Vietnamese Sync**: Some docs may be out of sync with English

## Next Steps (Phase 02)

1. **Production Deployment**: Deploy to docs.claudekit.cc
2. **Search Implementation**: Implement Pagefind search functionality
3. **Navigation Fixes**: Fix remaining hierarchy issues
4. **Quality Assurance**: Complete testing and validation

## Performance Characteristics

**Build Time**: ~15-30 seconds (194 markdown files)
**Bundle Size**: < 200KB gzipped JavaScript
**Initial Load**: < 1s (static HTML)
**Time to Interactive**: < 2s (minimal hydration)

## Security Considerations

- No secrets in repo (.env.example only)
- Static site (minimal attack surface)
- TLS termination at ingress
- CSP headers recommended (add to nginx config)

## Related Projects

- **claudekit-cli**: CLI setup tool (`../claudekit-cli`)
- **claudekit-engineer**: Engineering toolkit (`../claudekit-engineer`)
- **claudekit-marketing**: Marketing toolkit (`../claudekit-marketing`)
- **claudekit** (main): Website (`../claudekit`)

## Unresolved Questions

1. Should `troubleshooting` category be added to SidebarNav or removed from schema?
2. How to implement hierarchical navigation for nested command categories?
3. What's the timeline for OpenRouter API backend integration?
4. Should Vietnamese translations be auto-synced or manually maintained?
5. What search solution to use (Pagefind, Algolia, custom)?
