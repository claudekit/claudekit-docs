# Tech Stack

ClaudeKit Documentation Website - Technology Stack Decisions

**Version:** 1.0
**Date:** 2025-10-17
**Status:** Approved

---

## Overview

Full-stack documentation website with advanced AI features built on Astro framework, deployed on Kubernetes cluster at https://docs.claudekit.cc

---

## Core Framework

### Astro Build v5.0+

**Decision:** Custom Astro build (not Starlight) for maximum design flexibility

**Rationale:**
- Need custom 3-column layout matching demo.png design
- Requires unique AI features not in Starlight
- Full control over UI/UX
- Zero-JS by default, opt-in hydration for interactive components
- Excellent performance (SSG)

**Key Features:**
- Content Collections API for type-safe markdown management
- View Transitions for smooth navigation
- Image optimization (WebP/AVIF)
- SSR API routes for backend functionality
- Islands architecture for selective hydration

---

## AI Integration

### OpenRouter API

**Decision:** OpenRouter as unified LLM gateway

**Rationale:**
- Access to 400+ models (Claude, GPT-4, Gemini, etc.)
- OpenAI-compatible API (easy migration)
- Transparent pricing with automatic fallbacks
- Cost optimization via model routing
- User provides own API key (BYOK option)

**Implementation:**
- Server-side API routes (security)
- SSE streaming for real-time chat
- Rate limiting and error handling
- Cost tracking per feature

**Model Strategy:**
- **Quick queries:** GPT-4o Mini ($0.15/1M tokens)
- **Complex analysis:** Claude 3.5 Sonnet ($3/1M tokens)
- **Code generation:** Claude 3.5 Sonnet
- **Summarization:** GPT-4o Mini

**Estimated Cost:** ~$5-20/month for typical usage

---

## Content Management

### Markdown Processing

**Parser:** Astro's built-in remark/rehype pipeline

**Plugins:**
- `remark-math` - Math equations
- `remark-gfm` - GitHub Flavored Markdown
- `remark-emoji` - Emoji support
- `rehype-slug` - Auto-generate heading IDs
- `rehype-autolink-headings` - Heading anchor links
- `rehype-katex` - Render math equations
- `remark-toc` - Table of contents generation

**Syntax Highlighting:** Expressive Code v0.35+

**Rationale:**
- Built on Shiki (VS Code quality)
- Zero client-side JavaScript
- Copy buttons, line numbers, frames built-in
- Supports 100+ languages and themes
- Better than Prism (abandoned, security issues)

**Features:**
- Line highlighting
- Diff indicators
- File names in code blocks
- One Dark Pro theme (matches demo.png)

---

## Styling & Design

### CSS Architecture

**Strategy:** CSS Variables + Tailwind CSS v4.0

**Rationale:**
- CSS variables for theme system (light/dark)
- Tailwind for utility-first rapid development
- No CSS-in-JS overhead
- Excellent performance
- Easy theme customization

**Color Palette (One Dark-inspired):**

```css
:root[data-theme="dark"] {
  /* Backgrounds */
  --color-bg-primary: #1A1A1A;
  --color-bg-secondary: #242424;
  --color-bg-tertiary: #2A2A2A;
  --color-bg-code: #282C34;

  /* Text */
  --color-text-primary: #E6E6E6;
  --color-text-secondary: #9CA3AF;
  --color-text-muted: #6B7280;

  /* Accents */
  --color-accent-blue: #61AFEF;      /* Links */
  --color-accent-green: #98C379;     /* Strings */
  --color-accent-purple: #C678DD;    /* Keywords */
  --color-accent-cyan: #56B6C2;      /* AI sparkle */
  --color-accent-red: #E06C75;       /* Errors */
  --color-accent-yellow: #E5C07B;    /* Warnings */

  /* Borders */
  --color-border: #3A3A3A;
  --color-border-hover: #4A4A4A;
}
```

**WCAG Compliance:** All combinations meet AA standard (4.5:1 contrast minimum)

---

## Typography

### Fonts

**Body Text:** Inter Variable
- Google Fonts CDN
- Variable font (100-900 weight)
- 2000+ glyphs, excellent readability
- Fallback: system-ui, sans-serif

**Code/Monospace:** Geist Mono
- Vercel's optimized monospace font
- Superior ligatures and character clarity
- Fallback: 'Courier New', monospace

**Size Scale:**
- H1: 36px (2.25rem)
- H2: 24px (1.5rem)
- H3: 18px (1.125rem)
- Body: 16px (1rem)
- Code: 14px (0.875rem)
- Small: 12px (0.75rem)

---

## UI Components

### Component Library: Radix UI + shadcn/ui

**Decision:** Headless Radix UI primitives styled with shadcn/ui patterns

**Rationale:**
- Fully accessible (ARIA compliant)
- Unstyled primitives (full design control)
- Tree-shakable
- TypeScript support
- Active maintenance

**Components Needed:**
- `@radix-ui/react-dropdown-menu` - Copy page dropdown
- `@radix-ui/react-collapsible` - Sidebar navigation
- `@radix-ui/react-dialog` - AI assistant panel
- `@radix-ui/react-scroll-area` - Custom scrollbars
- `@radix-ui/react-tooltip` - Contextual help

**Framework:** React 18+ (Astro islands for selective hydration)

### Icon Library: Lucide React

**Rationale:**
- 1000+ icons, tree-shakable
- Consistent design language
- Excellent React integration
- 0.5-1KB per icon

**Key Icons:**
- Search (magnifying glass)
- Moon/Sun (theme toggle)
- Sparkles (AI features)
- ChevronDown/Right (navigation)
- Copy (clipboard)
- ExternalLink

---

## Search

### Pagefind

**Decision:** Pagefind for static search

**Rationale:**
- Zero backend infrastructure
- Builds at deploy time
- ~1KB initial load, lazy loads indexes
- Works offline after first visit
- Free and open source
- Multi-language support

**Alternative (Future):** Algolia DocSearch (if scale requires)

**AI-Enhanced Search:**
- Primary: Pagefind keyword search
- Secondary: OpenRouter semantic search (user-triggered)
- Hybrid approach: keyword results + AI reranking

---

## Development Tools

### TypeScript v5.3+

**Configuration:**
- Strict mode enabled
- Path aliases (@/, @components/, @lib/)
- ESM module resolution
- JSX: React

### Build Tool

**Vite v5.0+** (bundled with Astro)
- Fast HMR (Hot Module Replacement)
- ESM-first
- Optimized production builds

### Testing

**Vitest v2.0+**
- Vite-native (same config)
- Jest-compatible API
- Fast parallel execution
- Coverage with c8

**Playwright v1.40+**
- E2E testing
- Cross-browser (Chromium, Firefox, WebKit)
- Visual regression testing
- AI feature interaction tests

### Linting & Formatting

**ESLint v9.0+**
- Astro plugin
- TypeScript support
- React hooks rules

**Prettier v3.0+**
- Astro plugin
- Tailwind plugin (class sorting)
- Consistent code style

---

## Deployment

### Container: Docker

**Base Image:** `node:20-alpine`

**Multi-stage Build:**
1. Build stage: Install deps, build Astro
2. Runtime stage: Serve static files with Node

**Size Target:** <100MB compressed

### Orchestration: Kubernetes

**Resources Required:**
- **CPU:** 0.5-1 core
- **Memory:** 512MB-1GB
- **Storage:** 5GB (images, build artifacts)

**Services:**
- **Deployment:** docs-claudekit (2 replicas)
- **Service:** ClusterIP, port 3000
- **Ingress:** nginx-ingress with TLS
- **ConfigMap:** Environment variables
- **Secret:** OpenRouter API key

**Domain:** docs.claudekit.cc
**TLS:** Let's Encrypt (cert-manager)

### CI/CD: GitHub Actions

**Workflow:**
1. Trigger: Push to `main` or `production` branch
2. Build: Docker image
3. Test: Vitest + Playwright
4. Push: GitHub Container Registry
5. Deploy: Kubernetes rolling update
6. Verify: Health checks

**Environments:**
- **Development:** Auto-deploy from `main`
- **Production:** Manual approval required

---

## Performance Targets

### Core Web Vitals

- **LCP (Largest Contentful Paint):** <1.5s
- **FID (First Input Delay):** <50ms
- **CLS (Cumulative Layout Shift):** <0.1

### Lighthouse Scores

- **Performance:** >95
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Page Size

- **Initial Load:** <150KB (HTML + critical CSS/JS)
- **Full Page:** <500KB (with images)
- **Code Blocks:** Inline styles (no external CSS)

---

## Security

### API Security

- Server-side API routes only (no client-side API keys)
- Rate limiting: 20 requests/minute per IP
- Input validation and sanitization
- CORS: Restrict to docs.claudekit.cc
- Content Security Policy headers

### Authentication

**Phase 1:** None (public docs)
**Phase 2:** OAuth2 PKCE for user-controlled billing (future)

### Dependencies

- Automated security scanning (Dependabot)
- Regular updates (monthly review)
- Vulnerability monitoring

---

## Monitoring & Analytics

### Performance Monitoring

**Vercel Analytics** (if deployed on Vercel) OR **Self-hosted Plausible**

**Metrics:**
- Page views
- Unique visitors
- Bounce rate
- Popular pages
- Search queries

**Privacy:** GDPR-compliant, no cookies, no PII

### Error Tracking

**Sentry** (optional)
- Frontend errors
- API route errors
- AI integration failures

---

## Browser Support

### Minimum Versions

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: 15+
- Mobile Safari: iOS 15+
- Chrome Android: Last 2 versions

**Polyfills:** None required (modern browsers only)

---

## Internationalization

**Phase 1:** English only
**Phase 2:** Multi-language support

**Strategy (future):**
- Astro i18n routing
- Translation files (JSON)
- Right-to-left (RTL) support
- Localized search

---

## Accessibility Standards

**Target:** WCAG 2.1 Level AA

**Requirements:**
- Semantic HTML5
- Keyboard navigation (tab order, focus management)
- Screen reader support (ARIA labels, live regions)
- Color contrast ratios ≥4.5:1
- Responsive text sizing
- No motion without user preference
- Form validation errors

---

## Development Environment

### Required

- Node.js 20+
- npm 10+ or pnpm 8+
- Git
- Docker Desktop (optional, for local K8s)

### Recommended

- VS Code with extensions:
  - Astro
  - Tailwind CSS IntelliSense
  - ESLint
  - Prettier
  - Error Lens
- Chrome DevTools
- React DevTools

---

## Alternatives Considered

### Why Not Starlight?

**Pros:**
- Production-ready, 1-hour setup
- Built-in search, i18n, navigation
- Maintained by Astro core team

**Cons:**
- Limited design customization (need exact demo.png match)
- Can't add custom AI sidebar easily
- Opinionated structure

**Decision:** Custom Astro for design requirements, borrow Starlight patterns

### Why Not Next.js?

**Pros:**
- Popular, large ecosystem
- Built-in API routes
- Vercel integration

**Cons:**
- Heavier runtime (React hydration)
- More complex than needed
- User specified Astro

### Why Not VitePress?

**Pros:**
- Vue-based, fast
- Good for Vue-centric projects

**Cons:**
- Vue ecosystem only
- Less flexible than Astro
- User specified Astro

---

## Migration Path (if needed)

**From:** Any markdown-based docs (Docusaurus, VitePress, etc.)
**To:** This stack

**Steps:**
1. Export markdown files
2. Convert frontmatter to Astro format
3. Update image paths
4. Configure Content Collections
5. Build and test
6. Deploy

**Estimated Effort:** 2-5 days for 100+ pages

---

## Cost Breakdown

### Monthly Operational Costs

| Item | Cost | Notes |
|------|------|-------|
| Kubernetes Hosting | $10-30 | DigitalOcean/Linode/AWS |
| Domain (docs.claudekit.cc) | $1-2/month | Amortized annual |
| OpenRouter API | $5-20 | Usage-based |
| SSL Certificate | Free | Let's Encrypt |
| GitHub Actions | Free | Public repo |
| **Total** | **$16-52/month** | |

### One-Time Costs

- Initial development: Included in project
- Domain registration: $12-15/year

---

## Unresolved Questions

1. Should we implement user authentication for tracking AI usage per user?
2. Do we need analytics beyond basic page views?
3. Should AI features work offline (cached responses)?
4. Internationalization timeline? Which languages first?
5. Content contribution workflow (GitHub PRs, CMS, both)?

---

## Approval

- **Tech Lead:** [To be confirmed]
- **Project Manager:** [To be confirmed]
- **Date:** 2025-10-17

---

## References

- Research Reports: `./plans/research/`
- Design Analysis: `./docs/demo.png`
- Related Projects: See README.md
