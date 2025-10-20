# Codebase Summary

**Project:** ClaudeKit Documentation Website
**Version:** 0.0.1
**Last Updated:** 2025-10-18
**Generated from:** repomix-output.xml

---

## Overview

ClaudeKit Documentation is a modern, AI-powered documentation website built with Astro v5, React 18, and Tailwind CSS. It features a 3-column responsive layout with an integrated AI assistant powered by OpenRouter API, designed to provide an exceptional developer experience for the ClaudeKit ecosystem.

**Live Site:** https://docs.claudekit.cc

---

## Project Structure

```
claudekit-docs/
├── src/                    # Source code
│   ├── components/         # React and Astro components
│   │   ├── AIChat.tsx      # AI chat interface (React)
│   │   ├── AIPanel.astro   # AI assistant panel wrapper
│   │   ├── Header.astro    # Top navigation bar
│   │   ├── Sidebar.astro   # Left navigation sidebar
│   │   └── SidebarNav.astro # Sidebar navigation logic
│   ├── content/            # Markdown documentation
│   │   ├── docs/           # Documentation pages
│   │   │   ├── cli/        # CLI documentation
│   │   │   ├── core-concepts/ # Core concepts
│   │   │   └── getting-started/ # Getting started guides
│   │   └── config.ts       # Content collection schema
│   ├── layouts/            # Page layouts
│   │   ├── BaseLayout.astro # Base HTML layout
│   │   └── DocsLayout.astro # Documentation page layout
│   ├── lib/                # Utility libraries
│   │   └── openrouter.ts   # OpenRouter API client
│   ├── pages/              # Astro pages (routes)
│   │   ├── index.astro     # Homepage
│   │   └── docs/[...slug].astro # Dynamic doc pages
│   └── styles/             # Global CSS
│       └── global.css      # Design system variables & styles
├── public/                 # Static assets
│   ├── favicon.svg         # Site favicon
│   └── logo-*.png          # Logo variations
├── k8s/                    # Kubernetes deployment
│   ├── configmap.yaml      # Environment configuration
│   ├── deployment.yaml     # Pod deployment spec
│   ├── service.yaml        # Service definition
│   ├── ingress.yaml        # Ingress with TLS
│   └── README.md           # K8s deployment guide
├── docs/                   # Project documentation
│   ├── tech-stack.md       # Technology decisions
│   ├── design-guidelines.md # Design system spec
│   └── *.md                # Other project docs
├── Dockerfile              # Multi-stage Docker build
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind CSS config
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript config
```

---

## Technology Stack

### Core Framework
- **Astro v5.14.6**: Static site generator with islands architecture
- **React 18.3.1**: For interactive components (AI chat, navigation)
- **TypeScript 5.7.3**: Type-safe development

### Styling & Design
- **Tailwind CSS v3.4.17**: Utility-first CSS framework
- **Custom CSS Variables**: Design token system (Polar-inspired)
- **Font Stack**:
  - Body: Inter Variable (Google Fonts)
  - Code: Geist Mono

### AI Integration
- **OpenRouter API**: Multi-model LLM gateway
  - Client: OpenAI SDK v4.75.1
  - Supports: Claude 3.5 Sonnet, GPT-4, and 400+ models
  - Implementation: Server-side API routes (security)

### Content Management
- **Markdown Processing**:
  - Astro Content Collections (type-safe)
  - remark-gfm: GitHub Flavored Markdown
  - remark-math: Math equations
  - rehype-slug: Auto-generate heading IDs
  - rehype-autolink-headings: Clickable heading anchors
  - rehype-katex: Render LaTeX math
- **Syntax Highlighting**: One Dark Pro theme (Shiki)

### UI Components
- **Radix UI**: Headless accessible primitives
  - @radix-ui/react-collapsible
  - @radix-ui/react-dialog
  - @radix-ui/react-dropdown-menu
  - @radix-ui/react-scroll-area

### Deployment
- **Docker**: Multi-stage build (node:20-alpine)
- **Kubernetes**: Production orchestration
  - 2 replicas for high availability
  - nginx-ingress with TLS (Let's Encrypt)
  - cert-manager for certificate management
- **Hosting**: Kubernetes cluster at docs.claudekit.cc

---

## Key Components Analysis

### 1. Content Collection (`src/content/config.ts`)

Type-safe schema for markdown documentation:

```typescript
schema: z.object({
  title: string,
  description: string,
  category: 'getting-started' | 'core-concepts' | 'components' | 'api-reference' | 'cli',
  order: number (optional),
  published: boolean (default: true),
  lastUpdated: date (optional)
})
```

**Current categories:**
- getting-started: Introduction, installation, quick-start
- cli: CLI tool documentation (installation, new command)
- core-concepts: Architecture documentation
- components: (empty - future)
- api-reference: (empty - future)

### 2. OpenRouter Integration (`src/lib/openrouter.ts`)

AI client implementation with streaming support:

**Features:**
- OpenAI SDK compatibility
- Environment-based API key management
- Streaming chat completions
- Error handling and logging
- Default model: `anthropic/claude-3.5-sonnet`
- Configurable temperature (default: 0.7)
- Max tokens: 2048

**API Methods:**
- `chat()`: Non-streaming responses
- `streamChat()`: Async generator for streaming

**Configuration:**
```typescript
baseURL: 'https://openrouter.ai/api/v1'
defaultHeaders: {
  'HTTP-Referer': 'https://docs.claudekit.cc',
  'X-Title': 'ClaudeKit Documentation'
}
```

### 3. AI Chat Component (`src/components/AIChat.tsx`)

React component for AI assistant interface:

**State Management:**
- Messages array (user, assistant, system)
- Input text
- Loading state
- Auto-scroll to latest message

**Current Status:** UI-only implementation
- Shows placeholder responses
- Backend API integration pending
- Form validation working
- Accessible design (ARIA labels)

**UI Features:**
- Message history display
- Loading animation (3 dots)
- Auto-scroll behavior
- Disabled state during loading
- Send button with SVG icon

### 4. Page Layouts

**BaseLayout.astro:**
- HTML document structure
- Meta tags (SEO, Open Graph)
- Font loading (Inter, Geist Mono)
- Global CSS injection
- Theme initialization

**DocsLayout.astro:**
- 3-column responsive layout
- Header + Sidebar + Content + AI Panel
- Sticky header and sidebar
- Conditional AI panel rendering
- Breadcrumb navigation

### 5. Styling System (`src/styles/global.css`)

**Design Token Architecture:**
- CSS custom properties for all values
- Dark theme primary (One Dark-inspired)
- Light theme secondary
- Polar documentation design influence

**Token Categories:**
- Colors: bg, text, accent, border, AI
- Typography: sizes, weights, line heights
- Spacing: 8px base grid (2px - 96px)
- Layout: widths, heights, breakpoints
- Effects: shadows, border radius, transitions

**Key Measurements:**
- Header height: 64px
- Sidebar width: 280px
- AI panel width: 380px
- Content max-width: 700px

---

## Content Structure

### Documentation Pages

**Getting Started (3 pages):**
1. introduction.md - Overview of ClaudeKit
2. installation.md - Setup instructions
3. quick-start.md - Quick start guide

**CLI Documentation (3 pages):**
1. index.md - CLI overview and features
2. installation.md - CLI installation guide
3. new.md - `claudekit new` command reference

**Core Concepts (1 page):**
1. architecture.md - ClaudeKit architecture

**Empty Categories (future content):**
- components/ - Component documentation
- api-reference/ - API reference docs

---

## Kubernetes Deployment Architecture

### Resources

**Deployment:**
- Name: `claudekit-docs`
- Replicas: 2 (high availability)
- Image: `ghcr.io/claudekit/claudekit-docs:latest`
- Container port: 3000
- Pull policy: Always
- Image pull secret: `github-registry`

**Resource Limits:**
```yaml
requests:
  cpu: 100m
  memory: 128Mi
limits:
  cpu: 500m
  memory: 512Mi
```

**Health Checks:**
- Liveness probe: HTTP GET / every 30s (initial delay: 10s)
- Readiness probe: HTTP GET / every 10s (initial delay: 5s)
- Failure threshold: 3 retries

**Service:**
- Type: ClusterIP (internal)
- Port mapping: 80 → 3000
- Protocol: TCP

**Ingress:**
- Class: nginx
- Host: docs.claudekit.cc
- TLS: cert-manager with Let's Encrypt
- Force SSL redirect: enabled
- Certificate secret: `claudekit-docs-tls`

**ConfigMap:**
- SITE_URL: https://docs.claudekit.cc
- NODE_ENV: production

---

## Docker Build Strategy

### Multi-Stage Build

**Stage 1: Builder**
- Base: `node:20-alpine`
- Install dependencies with `npm ci`
- Build Astro static site
- Output: `/app/dist`

**Stage 2: Runner**
- Base: `node:20-alpine`
- Install `serve` globally
- Copy built files from builder
- Expose port: 3000
- Health check: HTTP GET localhost:3000 every 30s
- Command: `serve -s dist -l 3000`

**Size Target:** <100MB compressed

---

## File Statistics

**Total Files:** 34 files tracked by repomix
**Total Tokens:** 37,003 tokens
**Total Characters:** 134,911 characters

**Top Files by Token Count:**
1. global.css - 4,436 tokens (13,826 chars) - 12%
2. index.astro - 3,589 tokens (12,852 chars) - 9.7%
3. cli/new.md - 3,312 tokens (12,215 chars) - 9%
4. cli/installation.md - 2,660 tokens (9,973 chars) - 7.2%
5. cli/index.md - 2,638 tokens (10,773 chars) - 7.1%

---

## Dependencies Analysis

### Production Dependencies (13)

**Framework & Integrations:**
- astro: ^5.14.6
- @astrojs/mdx: ^4.3.7
- @astrojs/react: ^4.0.0
- @astrojs/tailwind: ^6.0.2

**UI Components:**
- @radix-ui/react-collapsible: ^1.1.2
- @radix-ui/react-dialog: ^1.1.4
- @radix-ui/react-dropdown-menu: ^2.1.4
- @radix-ui/react-scroll-area: ^1.2.2

**React:**
- react: ^18.3.1
- react-dom: ^18.3.1

**AI Integration:**
- openai: ^4.75.1 (OpenRouter client)

**Markdown Processing:**
- rehype-autolink-headings: ^7.1.0
- rehype-katex: ^7.0.1
- rehype-slug: ^6.0.0
- remark-gfm: ^4.0.0
- remark-math: ^6.0.0

**Styling:**
- tailwindcss: ^3.4.17

### Development Dependencies (3)

- @types/react: ^18.3.17
- @types/react-dom: ^18.3.5
- typescript: ^5.7.3

### Missing/Future Dependencies

**Recommended additions:**
- pagefind: Static search
- lucide-react: Icon library
- eslint: Code linting
- prettier: Code formatting
- vitest: Unit testing
- playwright: E2E testing

---

## Configuration Files

### Astro Config (`astro.config.mjs`)

**Integrations:**
- MDX: Markdown with JSX
- React: Component hydration
- Tailwind: No base styles (custom design system)

**Markdown Pipeline:**
- Remark: GFM, Math
- Rehype: Slug, Autolink headings, KaTeX
- Shiki theme: one-dark-pro
- Wrap: enabled

**Output:** static (SSG)

### Tailwind Config (`tailwind.config.mjs`)

**Content Sources:** All files in `src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`

**Dark Mode:** Class-based with `[data-theme="dark"]` attribute

**Custom Theme Extensions:**
- Colors: Mapped to CSS variables
- Fonts: Inter Variable, Geist Mono
- Spacing: 8px grid system
- Layout widths: sidebar, ai-panel, content
- Border radius: sm to full
- Shadows: xs to xl + colored
- Transitions: fast to slower with easing

**Plugins:** None (using vanilla Tailwind)

### TypeScript Config (`tsconfig.json`)

```json
{
  "extends": "astro/tsconfigs/strict"
}
```

**Strict mode enabled** via Astro's recommended config

---

## Code Quality & Standards

### Naming Conventions

**Files:**
- Components: PascalCase.tsx/astro
- Pages: kebab-case.astro
- Utilities: camelCase.ts
- Config: kebab-case.config.mjs

**CSS Classes:**
- Utility: Tailwind classes
- Custom: BEM-style (e.g., `ai-chat-container`, `ai-message`)
- Responsive: Mobile-first approach

**Variables:**
- CSS: `--kebab-case`
- TypeScript: camelCase
- Constants: UPPER_CASE (env vars)

### Accessibility

**Implemented:**
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Focus management (disabled states)
- Keyboard navigation support
- Screen reader considerations

**Missing (future):**
- Skip to content link
- Focus indicators visible
- WCAG AA color contrast verification
- Reduced motion support
- Comprehensive ARIA patterns

---

## Gaps & Future Enhancements

### Content Gaps
1. No API reference documentation yet
2. No component documentation yet
3. Limited core concepts (only architecture)
4. Missing guides for advanced features

### Technical Gaps
1. AI assistant backend not connected (placeholder responses)
2. No search functionality (Pagefind recommended)
3. No analytics integration
4. No error tracking (Sentry recommended)
5. No CI/CD pipeline configured

### Testing Gaps
1. No unit tests
2. No E2E tests
3. No visual regression tests
4. No accessibility tests

### Documentation Gaps
1. No API documentation generation
2. No changelog
3. No contributing guide
4. No code of conduct
5. Missing deployment guide for non-K8s environments

---

## Security Considerations

**Implemented:**
- Server-side API routes (no exposed keys)
- HTTPS enforcement via ingress
- Docker multi-stage builds (minimal attack surface)
- Health checks for reliability

**Recommended:**
- Rate limiting on AI endpoints
- Input validation and sanitization
- Content Security Policy headers
- CORS configuration
- Dependency vulnerability scanning (Dependabot)
- Environment variable management (secrets)

---

## Performance Characteristics

**Expected Performance:**
- Static site generation (SSG) = fast initial loads
- Minimal JavaScript hydration (islands architecture)
- Optimized images (WebP/AVIF support)
- Font loading: swap display strategy
- No client-side routing overhead

**Target Metrics:**
- LCP (Largest Contentful Paint): <1.5s
- FID (First Input Delay): <50ms
- CLS (Cumulative Layout Shift): <0.1
- Lighthouse Performance: >95
- Page size: <150KB initial, <500KB full

**Actual Metrics:** Not yet measured (monitoring needed)

---

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (port 4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker Development

```bash
# Build image
docker build -t claudekit-docs .

# Run container
docker run -p 3000:3000 claudekit-docs
```

### Kubernetes Deployment

```bash
# Deploy all resources
kubectl apply -f k8s/

# Check status
kubectl get pods -l app=claudekit-docs
kubectl logs -l app=claudekit-docs --follow

# Update deployment
kubectl set image deployment/claudekit-docs \
  claudekit-docs=ghcr.io/claudekit/claudekit-docs:v1.0.0
```

---

## Related Projects

1. **ClaudeKit Website** - Main site
   - Repository: github.com/mrgoonie/claudekit

2. **ClaudeKit Engineer** - Engineering kit
   - Repository: github.com/claudekit/claudekit-engineer

3. **ClaudeKit Marketing** - Marketing kit
   - Repository: github.com/claudekit/claudekit-marketing

4. **ClaudeKit CLI** - Command-line tool
   - Repository: github.com/mrgoonie/claudekit-cli

---

## Unresolved Questions

1. What is the OpenRouter API key management strategy for production?
2. Should the AI assistant support streaming responses in the UI?
3. Will there be user authentication for tracking AI usage?
4. Is there a content contribution workflow (PRs, CMS, or both)?
5. What analytics platform should be used (privacy-compliant)?
6. Should the site support multiple languages (i18n)?
7. What is the long-term content organization strategy as docs grow?
8. Should there be a playground/sandbox for ClaudeKit features?

---

## Maintenance Notes

**Last Repomix Run:** 2025-10-18
**Security Check:** No suspicious files detected
**Next Review:** When significant changes occur to codebase structure

**Update Triggers:**
- Major dependency updates
- New feature additions
- Architectural changes
- Content structure modifications
- Deployment infrastructure changes

---

*This summary is auto-generated from the codebase using repomix. Review and update when the codebase structure changes significantly.*
