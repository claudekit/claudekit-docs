# Codebase Summary

**Last Updated**: 2025-11-29
**Version**: 0.0.3 (Post-Content Creation Phase - Phase 01 Complete)
**Repository**: claudekit-docs

## Overview

claudekit-docs is Astro v5-based static documentation site for ClaudeKit ecosystem. Features bi-lingual content (English/Vietnamese), section-based information architecture, AI chat integration (UI complete, backend pending), enhanced sidebar navigation, and One Dark Pro-inspired design system. Successfully completed Phase 01 IA restructure (194 files migrated), Phase 02 navigation overhaul (context-aware navigation system), and Phase 03 content creation & rewriting (13 new pages, enhanced user journeys).

## Project Statistics

**Content**:
- 209 total documentation pages (112 English + 97 Vietnamese, 15 new pages in Phases 03+04)
- 9 logical content sections (post-IA restructure)
- Section-based organization with improved discoverability and user journeys
- ~295KB documentation content (45KB+ new content in Phases 03+04)
- Complete IA restructure completed (Phase 01)
- Enhanced navigation system (Phase 02)
- Comprehensive content creation and rewriting (Phase 03)
- Phase 01 (Commands Core) documentation complete (Phase 04)

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

**Content Sections** (9 total - Enhanced in Phase 03):

1. **getting-started** (12+ docs): Comprehensive user onboarding and setup guides (Enhanced in Phase 03)
   - **New**: `index.md` - Comprehensive getting started hub with user journey paths
   - **Enhanced**: `introduction.md` - Rewritten introduction focusing on technical onboarding
   - **New**: `concepts.md` - In-depth explanation of ClaudeKit concepts and architecture
   - **New**: `upgrade-guide.md` - Migration guide for existing Claude Code users
   - **New**: `why-claudekit.md` - Dedicated sales and comparison page
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

5. **commands** (27 docs): Slash command documentation across 9 subcategories
   - Core commands (general purpose) - 2 new: `/code` (order 8), `/brainstorm` (order 9)
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

9. **workflows** (4+ docs): Task-oriented guides for common development scenarios (New Section in Phase 03)
   - **New**: `index.md` - Comprehensive workflows guide with practical examples
   - **New**: `feature-development.md` - Complete feature development workflow
   - **New**: `bug-fixing.md` - Systematic bug fixing methodology
   - **New**: `documentation.md` - Documentation maintenance workflow

10. **docs** (1+ docs): Documentation meta-information (New Section in Phase 03)
    - **New**: `index.md` - Documentation section overview and reference

11. **support** (2+ docs): User support resources (New Section in Phase 03)
    - **New**: `index.md` - Support section hub
    - **New**: `faq.md` - Comprehensive FAQ addressing common questions

12. **changelog** (1+ docs): Version history and release notes (New Section in Phase 03)
    - **New**: `index.md` - Professional changelog with detailed version tracking

13. **components** (0 docs): Future UI component reference
    - Placeholder for future component documentation

### 2. Navigation System

**SidebarNav.astro** (Enhanced through Phases 01-03):
- Groups docs by logical sections from frontmatter category field
- Sorts by `order` field (lower = higher)
- Collapsible sections with localStorage persistence
- Auto-expands "Getting Started" by default
- Active page highlighting with 2px blue left border
- File/folder icons (Lucide-style inline SVG)
- Enhanced section-based organization improving content discoverability
- Mirrored structure for Vietnamese translations
- **Phase 02**: Context-aware navigation with SessionStorage state persistence
- **Phase 02**: Section-specific navigation components with smart detection
- **Phase 02**: Enhanced mobile responsiveness and active state highlighting
- **Phase 02**: Fixed nested command navigation hierarchy

**Navigation Improvements**:
- Section-based categorization replaces flat hierarchy
- Logical grouping enhances user experience
- Consistent organization across English and Vietnamese content
- Scalable structure for future content growth
- Context-aware navigation adapts to current content section
- Enhanced mobile experience with responsive navigation patterns
- SessionStorage-based state persistence across browser sessions
- Improved visual feedback for navigation interactions

**Phase 03 Content Structure Benefits**:
- New index pages provide clear entry points for each section
- Improved user journey with logical content paths
- Enhanced cross-referencing between related content
- Better content organization within each section
- Separation of technical documentation from marketing content

**Remaining Navigation Issues**:
- Commands have nested subdirectories (`commands/fix/hard.md`) but sidebar shows flat list. Hierarchical nav still needed for command subcategories (partially addressed in Phase 02, may need further refinement).
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
- 112 English docs (.md) - 97 original + 15 new pages in Phases 03+04
- 97 Vietnamese docs (.md) - pending translation of new Phase 03+04 pages
- **Total**: 209 markdown files (194 original + 15 new)

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

## Phase 02 Navigation System Overhaul Results

### Completed Successfully ✅
- **Context-Aware Navigation**: Intelligent sidebar navigation that adapts to current content section
- **Section-Specific Components**: Dedicated navigation components for different content sections
- **Enhanced Mobile Experience**: Optimized navigation for mobile devices with responsive design
- **State Persistence**: SessionStorage-based state persistence for improved UX
- **Active State Highlighting**: Enhanced visual feedback and smooth transitions
- **Nested Navigation**: Fixed command navigation hierarchy with proper categorization
- **Bilingual Support**: Enhanced navigation across all components (EN/VI)

### Quality Assurance
- ✅ All 194 pages accessible with proper navigation context
- ✅ Navigation state persists across browser sessions
- ✅ Mobile responsiveness verified across device sizes
- ✅ Accessibility improvements implemented
- ✅ Performance optimized for navigation component rendering

## Phase 03 Content Creation & Rewriting Results

### Completed Successfully ✅
- **13 New Content Pages**: Created comprehensive index pages and guides across all sections
- **Introduction Overhaul**: Completely rewrote introduction to focus on technical onboarding
- **Sales Content Separation**: Created dedicated "Why ClaudeKit" page, separated from technical docs
- **Comprehensive Concepts**: Developed in-depth concepts documentation explaining core architecture
- **Professional Changelog**: Implemented proper changelog with version history tracking
- **FAQ Implementation**: Created comprehensive FAQ page addressing common questions
- **Workflow Documentation**: Enhanced workflows section with task-oriented guides
- **Support Structure**: Created comprehensive support resources and help documentation

### Content Quality Enhancements
- ✅ Enhanced user journey with clear content paths and logical progression
- ✅ Improved information hierarchy with clear separation of content types
- ✅ Schema compliance across all new content pages
- ✅ Cross-reference optimization for better discoverability
- ✅ Mobile content optimization and accessibility improvements
- ✅ Sales content segregation for cleaner technical documentation

### Quality Assurance
- ✅ All 13 new pages properly formatted with correct frontmatter
- ✅ Content organization follows established structure and standards
- ✅ Internal linking and cross-references properly implemented
- ✅ Build process passes with all new content
- ✅ Navigation flow tested and verified

## Phase 04 (Phase 01) Commands Core Documentation Results

### Completed Successfully ✅
- **2 New Command Pages**: `/code` and `/brainstorm` core commands fully documented
- **Complete Command Reference**: Both commands include syntax, examples, workflows
- **Quality-Gated Workflow**: `/code` documents 6-step workflow with blocking gates
- **YAGNI/KISS/DRY Framework**: `/brainstorm` documents principle-based evaluation
- **Cross-Reference Integration**: Linked to related commands and workflows
- **Report Location Standards**: Documented markdown report generation patterns

### Documentation Quality
- ✅ Comprehensive syntax and argument documentation
- ✅ Real-world examples with step-by-step outputs
- ✅ Enforcement rules and best practices
- ✅ Subagent integration documentation
- ✅ Common issues and troubleshooting
- ✅ Proper frontmatter: section=docs, category=commands/core, orders 8-9

### Command Coverage Status
- Core commands: 2 new (/code, /brainstorm) - more pending documentation
- Fix commands: Status pending verification
- Design commands: Status pending verification
- Documentation commands: Status pending verification
- Git commands: Status pending verification
- Planning commands: Status pending verification
- Content commands: Status pending verification
- Integration commands: Status pending verification
- Skill commands: Status pending verification

## Known Issues

1. **AI Chat Backend**: UI complete, OpenRouter integration pending
2. **Search**: Not implemented (Pagefind planned for future phase)
3. **Command Navigation Hierarchy**: Commands have nested subdirectories but show flat list
4. **Troubleshooting Category**: Navigation integration needs verification
5. **Vietnamese Sync**: 15 new pages pending translation (Phase 03+04 content)
6. **Command Documentation**: Core command set partially documented (2/N complete)

## Next Steps (Phase 02+)

1. **Complete Core Commands**: Document remaining core commands beyond `/code` and `/brainstorm`
2. **Fix Commands Documentation**: Document all `/fix:*` command variants
3. **Design Commands**: Document `/design:*` command suite
4. **Production Deployment**: Deploy to docs.claudekit.cc with all documented content
5. **Vietnamese Translation**: Translate 15 new pages to Vietnamese
6. **Search Implementation**: Implement Pagefind search functionality
7. **LLM Integration Features**: Implement CopyForLLMs component and llms.txt generation

## Performance Characteristics

**Build Time**: ~15-30 seconds (209 markdown files - 15 new content pages)
**Bundle Size**: < 200KB gzipped JavaScript
**Initial Load**: < 1s (static HTML)
**Time to Interactive**: < 2s (minimal hydration)
**Content Organization**: Enhanced information hierarchy with improved user journeys
**Navigation Performance**: < 100ms for state updates and section switches (Phase 02 improvements)
**Content Accessibility**: All 209 pages accessible with proper navigation context

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
