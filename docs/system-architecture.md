# System Architecture

**Last Updated**: 2025-11-25
**Version**: 0.0.1
**Project**: claudekit-docs

## Overview

claudekit-docs implements static site generation architecture using Astro v5 islands pattern. Content managed via Zod-validated collections, bi-lingual routing through i18n system, minimal JavaScript hydration via React islands.

## Architectural Pattern

**Primary**: Static Site Generation (SSG) with Islands Architecture
**Secondary**: Content Collections, File-Based Routing, JAMstack

**Design Philosophy**:
- Static-first: Pre-render everything at build time
- Progressive Enhancement: JavaScript optional for core content
- Islands of Interactivity: Hydrate only interactive components
- Type-Safe Content: Zod validation for all markdown
- Minimal Client-Side JS: < 200KB total bundle

## System Components

### 1. Build-Time Layer

#### 1.1 Content Collections

**Location**: `src/content/`
**Responsibility**: Markdown content with type-safe frontmatter

**Collections**:
```typescript
// src/content/config.ts
docs: defineCollection({
  type: 'content',
  schema: docsSchema // Zod validation
})

docs-vi: defineCollection({
  type: 'content',
  schema: docsSchema // Same schema, different content
})
```

**Data Flow**:
```
Markdown Files (.md)
    ↓
Zod Validation (schema check)
    ↓
Content Collection API
    ↓
Astro Components
    ↓
Static HTML
```

#### 1.2 Routing System

**File-Based Routing**:
```
src/pages/
├── index.astro                  → /
├── docs/[...slug].astro         → /docs/**
└── vi/docs/[...slug].astro      → /vi/docs/**
```

**Dynamic Route Generation**:
```typescript
// [...slug].astro
export async function getStaticPaths() {
  const docs = await getCollection('docs');
  return docs.map(doc => ({
    params: { slug: doc.slug },
    props: { doc }
  }));
}
```

**URL Structure**:
- English: `/docs/<category>/<slug>`
- Vietnamese: `/vi/docs/<category>/<slug>`
- Homepage: `/`
- Docs index: `/docs/`

#### 1.3 i18n System

**Locale Detection** (`src/i18n/utils.ts`):
```typescript
function getLangFromUrl(url: URL): string {
  const path = url.pathname;
  return path.startsWith('/vi') ? 'vi' : 'en';
}
```

**Translation System**:
```
URL Path → Locale Detection → Load Translations → Render UI
```

**Components**:
- `locales.ts`: Supported locales configuration
- `ui.ts`: Translation strings (18 keys × 2 locales)
- `utils.ts`: Helper functions (getLangFromUrl, useTranslations, getLocalizedPath)

### 2. Runtime Layer

#### 2.1 Static HTML Serving

**Build Output** (`dist/`):
```
dist/
├── index.html
├── docs/
│   └── category/
│       └── slug/
│           └── index.html
└── vi/
    └── docs/
        └── category/
            └── slug/
                └── index.html
```

**Serving**:
- Docker container runs Node.js static server
- Kubernetes serves via nginx-ingress
- Alternative: Deploy to CDN (Vercel, Netlify, Cloudflare Pages)

#### 2.2 Client-Side Hydration

**Islands Architecture**:
```
Static HTML (100% content)
    ↓
Client JS loads (< 200KB)
    ↓
React islands hydrate (AIChat, LanguageSwitcher)
    ↓
Interactive components ready
```

**Hydration Strategies**:
- `client:load`: Immediate (critical interactions)
- `client:idle`: After page idle (non-critical)
- `client:visible`: When scrolled into view (below-fold)

**Current Islands**:
1. **AIChat.tsx** (`client:load`): Chat interface (backend pending)
2. **LanguageSwitcher.tsx** (`client:load`): EN/VI toggle
3. **SidebarNav** (inline script): Collapse/expand logic (no framework)

### 3. Layout System

#### 3.1 Layout Hierarchy

```
BaseLayout.astro (HTML shell)
    ↓
DocsLayout.astro (3-column grid)
    ↓
Page Content ([...slug].astro)
```

**BaseLayout** (Foundation):
- `<html>`, `<head>`, `<body>` structure
- Meta tags (title, description, OG)
- Font preloading (Inter, Geist Mono)
- Global CSS injection
- Theme initialization script

**DocsLayout** (Structure):
- Responsive 3-column grid
- Left: Sidebar (250px desktop, hidden mobile)
- Center: Content (max-width 900px)
- Right: AI Panel (350px desktop, slide-in mobile)
- Breakpoints: 768px (tablet), 1024px (desktop)

**Responsive Behavior**:
```
Mobile (< 768px):
[Content (full width)]
[Sidebar: hamburger menu]
[AI Panel: slide-in overlay]

Desktop (>= 1024px):
[Sidebar] [Content] [AI Panel]
  250px     900px      350px
```

#### 3.2 Component Architecture

**Astro Components** (Static):
- Header.astro: Top navigation bar
- Sidebar.astro: Container with scroll area
- SidebarNav.astro: Navigation tree logic
- AIPanel.astro: Dialog wrapper for chat

**React Islands** (Interactive):
- AIChat.tsx: Message history, send input
- LanguageSwitcher.tsx: Locale toggle

**Shared Patterns**:
- Props interface for type safety
- CSS variable usage (no hardcoded colors)
- Tailwind utility classes
- Semantic HTML

### 4. Navigation System

#### 4.1 Sidebar Navigation

**Data Flow**:
```
Content Collection (all docs)
    ↓
Filter by category
    ↓
Sort by order field
    ↓
Group into sections
    ↓
Render collapsible tree
    ↓
localStorage persistence
```

**Categories**:
```typescript
categories = {
  'getting-started': { title: t('nav.getting-started'), docs: [...] },
  'cli': { title: t('nav.cli'), docs: [...] },
  'core-concepts': { title: t('nav.core-concepts'), docs: [...] },
  'agents': { title: t('nav.agents'), docs: [...] },
  'commands': { title: t('nav.commands'), docs: [...] },
  'skills': { title: t('nav.skills'), docs: [...] },
  'use-cases': { title: t('nav.use-cases'), docs: [...] },
  // 'troubleshooting': MISSING (known issue)
}
```

**State Management**:
- Collapse state stored in `localStorage`
- Key format: `sidebar-section-${sectionName}`
- Values: `'collapsed'` | `'expanded'`
- Default: "Getting Started" expanded, others collapsed

**Active Page Highlighting**:
```typescript
const currentPath = Astro.url.pathname;
const isActive = docPath === currentPath;
```
- Active class adds 2px blue left border
- Matches Polar documentation aesthetics

#### 4.2 Known Issues

1. **Flat Navigation**: Commands have nested structure (`commands/fix/hard.md`) but sidebar shows flat list
2. **Missing Category**: `troubleshooting` in schema but not in SidebarNav
3. **No Breadcrumbs**: Users can't see path hierarchy

### 5. AI Integration System (Planned)

#### 5.1 Current State (UI Only)

**AIChat.tsx**:
- Message display with markdown rendering
- Input field with send button
- Placeholder responses (no backend)
- State: `useState<Message[]>`

**AIPanel.astro**:
- Radix Dialog wrapper
- Slide-in animation from right
- Close button and backdrop
- Responsive sizing

#### 5.2 Planned Backend Architecture

**OpenRouter Integration** (`src/lib/openrouter.ts`):
```
User Message
    ↓
POST /api/chat (Astro server endpoint)
    ↓
OpenRouter API (with streaming)
    ↓
SSE stream to client
    ↓
Update AIChat state
```

**API Design**:
```typescript
// POST /api/chat
{
  messages: Message[],
  model: 'anthropic/claude-sonnet-4',
  stream: true
}

// Response (SSE)
data: {"content": "chunk", "done": false}
data: {"content": "", "done": true}
```

**Context Enhancement**:
- Include current page content
- Search recent user interactions
- Provide doc snippets for grounding
- Limit context to ~8K tokens

### 6. Design System

#### 6.1 CSS Architecture

**Global Styles** (`src/styles/global.css`):
```css
:root {
  /* Colors (One Dark Pro inspired) */
  --color-bg-primary: #1e1e1e;
  --color-text-primary: #abb2bf;
  --color-accent-blue: #61afef;

  /* Spacing (4px base unit) */
  --space-1: 0.25rem;
  --space-4: 1rem;
  --space-12: 3rem;

  /* Typography */
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-xl: 1.25rem;
}
```

**Tailwind Integration**:
```javascript
// tailwind.config.mjs
theme: {
  extend: {
    colors: {
      'bg-primary': 'var(--color-bg-primary)',
      'text-primary': 'var(--color-text-primary)',
    },
    spacing: {
      '1': 'var(--space-1)',
      '4': 'var(--space-4)',
    }
  }
}
```

**Usage Pattern**:
```astro
<div class="p-4 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]">
  <!-- Tailwind utilities + CSS variables -->
</div>
```

#### 6.2 Theme System

**Current**: Dark mode only (One Dark Pro)
**Future**: Light/dark toggle

**Implementation**:
```html
<html data-theme="dark">
  <!-- CSS variables scoped to data-theme -->
</html>
```

### 7. Build & Deployment

#### 7.1 Build Process

**Steps**:
```bash
npm run build
    ↓
Astro build (src/ → dist/)
    ↓
Static HTML generation (194 pages)
    ↓
JavaScript bundling (< 200KB)
    ↓
CSS extraction and purging
    ↓
Asset optimization
    ↓
Output: dist/ directory
```

**Build Time**: ~15-30 seconds
**Output Size**: ~50MB (includes all pages, images)

#### 7.2 Docker Containerization

**Multi-Stage Build**:
```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "server.js"]
```

**Image Size**: ~150MB (node:20-alpine + built files)

#### 7.3 Kubernetes Deployment

**Architecture**:
```
Internet
    ↓
nginx-ingress (TLS termination)
    ↓
Service (ClusterIP)
    ↓
Deployment (2 replicas)
    ↓
Pods (claudekit-docs containers)
```

**Manifests**:
- `deployment.yaml`: 2 replicas, resource limits (200m CPU, 256Mi RAM)
- `service.yaml`: ClusterIP on port 80
- `ingress.yaml`: HTTPS with cert-manager
- `configmap.yaml`: Environment variables

**Scalability**:
- Horizontal: HPA based on CPU (target: 70%)
- Vertical: Increase resource limits
- Static site: Highly cacheable, minimal compute

### 8. Data Flow Diagrams

#### 8.1 Build-Time Flow

```
Markdown Files
    ↓
Content Collections API
    ↓
[...slug].astro (getStaticPaths)
    ↓
DocsLayout.astro
    ↓
BaseLayout.astro
    ↓
Static HTML
    ↓
dist/ directory
```

#### 8.2 Request-Response Flow

```
User Browser
    ↓
HTTP GET /docs/getting-started/introduction
    ↓
nginx-ingress (K8s)
    ↓
Service
    ↓
Pod (Node.js static server)
    ↓
Serve dist/docs/getting-started/introduction/index.html
    ↓
Browser receives HTML
    ↓
Load CSS, fonts
    ↓
Hydrate React islands (< 200KB JS)
    ↓
Interactive
```

#### 8.3 i18n Flow

```
URL: /vi/docs/engineer/agents/planner
    ↓
getLangFromUrl(url) → 'vi'
    ↓
Load 'docs-vi' collection
    ↓
useTranslations('vi')
    ↓
Render with Vietnamese content + UI strings
```

### 9. Security Architecture

#### 9.1 Static Site Security

**Advantages**:
- No server-side execution (no RCE risk)
- No database (no SQL injection)
- No user input (no XSS from users)
- No sessions (no session hijacking)

**Considerations**:
- CSP headers (add to nginx config)
- TLS termination at ingress
- HSTS enforcement
- X-Frame-Options, X-Content-Type-Options

#### 9.2 Future API Security (OpenRouter)

**When backend added**:
- API keys in environment variables only
- Server-side API calls only (never client-side)
- Rate limiting (per IP, per user)
- Input validation and sanitization
- Output sanitization (prevent prompt injection)

### 10. Performance Optimization

#### 10.1 Current Optimizations

**Build Time**:
- Parallel page generation (Astro default)
- Asset hashing for cache busting
- CSS purging (unused Tailwind removed)
- JavaScript tree-shaking

**Runtime**:
- Static HTML (instant first paint)
- Islands architecture (minimal hydration)
- Font preloading (reduce CLS)
- Image optimization (WebP, lazy loading planned)

#### 10.2 Performance Metrics

**Target**:
- FCP: < 1.5s
- LCP: < 2.5s
- TTI: < 3.0s
- TBT: < 200ms
- CLS: < 0.1

**Current** (estimated):
- FCP: ~1.0s
- LCP: ~1.5s
- TTI: ~2.0s
- TBT: ~100ms
- CLS: ~0.05

### 11. Scalability Considerations

#### 11.1 Content Scalability

**Current**: 194 markdown files (97 × 2 locales)
**Capacity**: 10,000+ files without performance degradation

**Strategies for Growth**:
- Pagination for large categories
- Search indexing (Pagefind)
- Incremental builds (Astro 3.0+)
- CDN caching

#### 11.2 Traffic Scalability

**Static Site Advantages**:
- Highly cacheable (CDN-friendly)
- No compute per request
- Horizontal scaling trivial (just add pods)

**Kubernetes Autoscaling**:
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
spec:
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

### 12. Future Architecture Evolution

#### 12.1 Planned Enhancements

**Phase 1** (Q1 2026):
- OpenRouter API backend for AI chat
- Pagefind search integration
- Hierarchical sidebar navigation
- Add `troubleshooting` category to sidebar

**Phase 2** (Q2 2026):
- Light/dark theme toggle
- Interactive code playground
- Analytics integration (Plausible)
- Error tracking (Sentry)

**Phase 3** (Q3 2026):
- Versioned documentation
- Multi-version support (v1, v2, latest)
- Community contributions workflow
- GitHub edit button

**Phase 4** (Q4 2026):
- Additional locales (ES, FR, DE, ZH)
- Video tutorials integration
- Advanced search (filters, facets)
- Personalized recommendations

#### 12.2 Technical Debt

**Current Issues**:
1. Sidebar flat navigation (need hierarchical)
2. Missing troubleshooting category
3. AI backend not connected
4. Search not implemented
5. Vietnamese translations may lag behind English

**Prioritization**:
- P0: AI backend, search
- P1: Hierarchical nav, troubleshooting category
- P2: Theme toggle, analytics
- P3: Versioning, additional locales

## Technology Stack

**Core**:
- Astro v5.14.6 (SSG framework)
- React 18.3.1 (islands)
- TypeScript 5.7.3 (strict mode)
- Node.js 20 (runtime)

**Styling**:
- Tailwind CSS v3.4.17
- CSS Variables (design tokens)
- Shiki (syntax highlighting)

**Content**:
- Zod (validation)
- remark/rehype plugins
- GitHub Flavored Markdown

**Deployment**:
- Docker (multi-stage)
- Kubernetes (2 replicas)
- nginx-ingress (TLS)
- cert-manager (auto SSL)

## References

### Internal
- [Codebase Summary](./codebase-summary.md)
- [Code Standards](./code-standards.md)
- [Project Overview PDR](./project-overview-pdr.md)

### External
- [Astro Docs](https://docs.astro.build)
- [Islands Architecture](https://jasonformat.com/islands-architecture/)
- [JAMstack](https://jamstack.org/)

## Unresolved Questions

1. Should we implement full-text search client-side (Pagefind) or server-side (Algolia)?
2. How to handle versioned docs without duplicating content?
3. What's the best approach for hierarchical navigation (nested categories)?
4. Should AI chat context include full doc or summaries only?
5. Is 2-replica deployment sufficient for prod traffic?
