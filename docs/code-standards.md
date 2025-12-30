# Code Standards

**Last Updated**: 2025-12-30
**Version**: 0.1.0 (Kit-Agnostic Refactor)
**Applies To**: claudekit-docs codebase (20 components, 8 content categories)

## Overview

Coding standards for Astro v5 documentation site. Covers file organization, naming conventions, component patterns, content structure, and quality guidelines.

## Codebase Structure Overview

### Current Component Inventory (20 files)

**Layout Components**:
- `Header.astro` - Top navigation with logo and language switcher
- `Sidebar.astro` - Left sidebar container (responsive mobile/desktop)
- `SidebarNav.astro` - Navigation tree with kit-switching and section detection

**React Islands (Interactive)**:
- `AIChat.tsx` - Chat interface with OpenRouter integration (UI complete)
- `TableOfContents.tsx` - Dynamic heading extraction and navigation
- `CopyForLLMs.tsx` - Export content for LLM consumption
- `LanguageSwitcher.tsx` - EN/VI language switcher with i18n
- `KitSwitcher.tsx` - Switch between Engineer/Marketing/CLI kits
- `KitContext.tsx` - React context for kit state management

**Navigation Components** (Kit-specific):
- `DocsNav.astro` - General docs navigation
- `GettingStartedNav.astro` - Getting started section nav
- `CLINav.astro` - CLI kit section nav
- `EngineerNav.astro` - Engineer kit section nav
- `MarketingNav.astro` - Marketing kit section nav
- `WorkflowsNav.astro` - Workflows section nav
- `ToolsNav.astro` - Tools section nav
- `ChangelogNav.astro` - Changelog section nav
- `SupportNav.astro` - Support section nav

**UI Components**:
- `Search.astro` - Pagefind search interface (placeholder)
- `AIPanel.astro` - AI chat panel wrapper (disabled)

### Content Organization (451 pages)

**8 Main Categories**:
- `getting-started/` - 8+ pages (installation, quick-start, onboarding)
- `cli/` - CLI kit documentation
- `engineer/` - 138 pages (agents: 18, commands: 66, skills: 49, config: 4, index: 1)
- `marketing/` - 88 pages (agents, commands, skills, workflows, features)
- `workflows/` - 20+ cross-kit workflow guides
- `tools/` - Tools directory and references
- `support/` - FAQ, troubleshooting, community resources
- `changelog/` - Version history and release notes

**Vietnamese Coverage**: 176/275 pages (64% - targeting 100%)

### Key Files

- **Configuration**: `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`
- **Content Schema**: `src/content/config.ts` (Zod validation with 8 categories)
- **i18n**: `src/i18n/locales.ts`, `ui.ts` (18 keys × 2 locales), `utils.ts`
- **Deployment**: `Dockerfile` (multi-stage bun→node), `k8s/` manifests

## Core Principles

### YAGNI (You Aren't Gonna Need It)
- Build features when needed, not speculatively
- Avoid premature optimization
- Keep components simple and focused

### KISS (Keep It Simple, Stupid)
- Prefer simple solutions over complex
- Clear code over clever code
- Minimal dependencies

### DRY (Don't Repeat Yourself)
- Extract reusable components
- Use CSS variables for design tokens
- Centralize i18n strings

## File Organization

### Directory Structure

```
src/
├── components/        # UI components (Astro + React)
├── content/          # Markdown content (Zod validated)
│   ├── docs/         # English
│   └── docs-vi/      # Vietnamese
├── i18n/             # Internationalization
├── layouts/          # Page layouts
├── lib/              # Utilities
├── pages/            # File-based routing
└── styles/           # Global CSS
```

### File Naming Conventions

**Components**:
- Astro: PascalCase (e.g., `Header.astro`, `SidebarNav.astro`)
- React: PascalCase (e.g., `AIChat.tsx`, `LanguageSwitcher.tsx`)
- Use descriptive names indicating purpose

**Content**:
- Markdown: kebab-case (e.g., `quick-start.md`, `installation-issues.md`)
- Match URL structure
- Descriptive, lowercase, hyphen-separated

**Utilities**:
- TypeScript: kebab-case (e.g., `openrouter.ts`)
- Config: kebab-case (e.g., `astro.config.mjs`)

**Directories**:
- kebab-case for all directories
- Singular for utilities (e.g., `lib/`, `i18n/`)
- Plural for collections (e.g., `components/`, `layouts/`)

## File Size Limits

**Hard Limits**:
- Astro components: < 300 lines
- React components: < 250 lines
- TypeScript files: < 200 lines
- Markdown docs: < 500 lines (content only, code examples excluded)

**Refactoring Strategy**:
- Extract reusable logic to `lib/`
- Split large components into sub-components
- Create shared hooks for React components
- Use Astro slots for composition

## Naming Conventions

### Variables & Functions

**TypeScript/JavaScript**:
```typescript
// Variables: camelCase
const pageTitle = 'Introduction';
const isPublished = true;

// Functions: camelCase
function generateSlug(title: string) { }
const getLocalizedPath = (path, locale) => { };

// Constants: UPPER_SNAKE_CASE
const MAX_SIDEBAR_DEPTH = 3;
const DEFAULT_LOCALE = 'en';

// Types/Interfaces: PascalCase
interface DocsFrontmatter {
  title: string;
  category: string;
}

type LocaleCode = 'en' | 'vi';
```

**Astro Components**:
```astro
---
// Props: camelCase
interface Props {
  pageTitle: string;
  currentLocale: string;
}
const { pageTitle, currentLocale } = Astro.props;
---
```

### CSS

**Class Names**:
- Use Tailwind utility classes primarily
- Custom classes: kebab-case (e.g., `.sidebar-nav`, `.nav-item`)
- BEM-style for complex components (e.g., `.nav-section__title`)

**CSS Variables**:
```css
/* Design tokens: kebab-case with semantic names */
--color-bg-primary
--color-text-secondary
--space-4
--text-lg
--radius-md
```

### Content Frontmatter

```yaml
---
title: "Page Title"              # Human-readable
description: "SEO description"   # 150-160 chars
category: "getting-started"      # kebab-case enum
order: 1                         # Number for sorting
published: true                  # Boolean
---
```

**Valid Categories** (from `src/content/config.ts`):

**Main Kit-Agnostic Categories**:
- `getting-started` - Installation, quick-start, onboarding
- `cli` - CLI-specific documentation
- `engineer` - Engineer kit docs (agents, commands, skills, config)
- `marketing` - Marketing kit docs (agents, commands, skills, workflows, features)
- `workflows` - Cross-kit workflow guides
- `tools` - Tools directory and references
- `support` - FAQ, troubleshooting, community resources
- `changelog` - Version history and release notes

**Legacy Categories** (kept for backward compatibility):
- `core-concepts` - Architecture and concepts
- `components` - UI component reference (placeholder)

## Component Patterns

### Astro Components

**Structure**:
```astro
---
// 1. Imports
import Layout from '../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';

// 2. Props interface
interface Props {
  title: string;
}

// 3. Props extraction
const { title } = Astro.props;

// 4. Data fetching
const docs = await getCollection('docs');

// 5. Logic
const sortedDocs = docs.sort((a, b) => a.data.order - b.data.order);
---

<!-- 6. Template -->
<Layout title={title}>
  <div class="container">
    <!-- Content -->
  </div>
</Layout>

<!-- 7. Scoped styles (if needed) -->
<style>
  .container {
    /* Prefer Tailwind, use scoped CSS for complex cases */
  }
</style>
```

**Best Practices**:
- Use Astro for static content and layout
- Frontmatter for data fetching and processing
- Minimal client-side JavaScript
- Prefer CSS variables over hardcoded values

### React Components (Islands)

**Structure**:
```tsx
import { useState } from 'react';

interface AIChat Props {
  initialMessages?: Message[];
}

export default function AIChat({ initialMessages = [] }: AIChatProps) {
  const [messages, setMessages] = useState(initialMessages);

  // Logic

  return (
    <div className="ai-chat">
      {/* JSX */}
    </div>
  );
}
```

**Client Directives**:
```astro
<!-- Load immediately -->
<AIChat client:load />

<!-- Load when visible -->
<AIChat client:visible />

<!-- Load when idle -->
<AIChat client:idle />

<!-- Only hydrate on interaction -->
<AIChat client:only="react" />
```

**Best Practices**:
- Use islands for interactive components only
- Keep state management simple (useState, useReducer)
- Prefer `client:visible` or `client:idle` for non-critical components
- TypeScript strict mode

**Cross-Component Communication** (Phase 1 - KitSwitcher):
- Use custom DOM events for component-to-component messaging
- Dispatch from React islands, listen in Astro/vanilla JS
- localStorage for persistent state shared across tabs
- Example: `window.dispatchEvent(new CustomEvent('kit-changed', { detail: { kit } }))`

**localStorage Conventions**:
- Use kebab-case keys: `claudekit-selected-kit`, `sidebar-section-${name}`
- Store simple values: strings, booleans, JSON-serialized objects
- Document key format and default values in component comments

### Layout Patterns

**BaseLayout.astro**:
- HTML document structure
- Meta tags, fonts, global scripts
- Theme initialization
- No layout-specific styles

**DocsLayout.astro**:
- Uses BaseLayout
- Defines page structure (sidebar, content, panel)
- Responsive breakpoints
- Grid/Flexbox layout

**Nested Layouts**:
```astro
---
import BaseLayout from './BaseLayout.astro';
---

<BaseLayout {...props}>
  <div class="docs-wrapper">
    <slot />
  </div>
</BaseLayout>
```

## Content Standards

### Markdown Structure

```markdown
---
title: "Clear, Descriptive Title"
description: "SEO-optimized description (150-160 chars)"
category: "appropriate-category"
order: 10
published: true
---

# Page Title (H1 - only one per page)

Brief introduction paragraph (1-3 sentences).

## First Section (H2)

Content with [links](https://example.com) and **formatting**.

### Subsection (H3)

More detailed content.

#### Detail Level (H4)

Avoid H5 and H6.

## Code Examples

\```typescript
// Always specify language
const example: string = 'Hello';
\```

## Lists

- Unordered lists for related items
- Start with dash, space, lowercase
- Parallel structure

1. Ordered lists for sequences
2. Start with number, period, space
3. Complete sentences or fragments (consistent)

## Tables

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value A  | Value B  | Value C  |

## Links

Internal: [Getting Started](./getting-started/introduction)
External: [Astro Docs](https://docs.astro.build)

## Notes

> **Note**: Use blockquotes for notes, warnings, tips.

## See Also

- [Related Doc 1](./related-1)
- [Related Doc 2](./related-2)
```

### Content Guidelines

**Tone**:
- Professional but friendly
- Active voice preferred
- Second person ("you") for instructions
- Present tense

**Formatting**:
- One sentence per line in source (easier diffs)
- Max 80-100 characters per line
- Two spaces after H1, one space after H2-H4
- Consistent list formatting

**Code Blocks**:
- Always specify language
- Include comments for clarity
- Show complete, runnable examples
- Syntax: \```language

**Links**:
- Descriptive anchor text (not "click here")
- Internal links relative (e.g., `./introduction`)
- External links absolute with https://
- Open external links in same tab (users decide)

**Images**:
- Store in `public/` directory
- Reference with `/image-name.png`
- Alt text required
- Optimize for web (<200KB)

## Styling Standards

### Tailwind CSS

**Utility-First Approach**:
```astro
<div class="flex items-center gap-4 p-6 bg-[var(--color-bg-secondary)]">
  <!-- Content -->
</div>
```

**Responsive Design**:
```astro
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Mobile-first, breakpoints: md (768px), lg (1024px) -->
</div>
```

**Dark Mode**:
```css
/* Use CSS variables, not Tailwind dark: variant */
.element {
  color: var(--color-text-primary);
  background: var(--color-bg-secondary);
}
```

### CSS Variables

**Usage**:
```css
/* Defined in src/styles/global.css */
.custom-component {
  /* Colors */
  color: var(--color-text-primary);
  background: var(--color-bg-secondary);
  border-color: var(--color-border);

  /* Spacing */
  padding: var(--space-4);
  margin-bottom: var(--space-6);
  gap: var(--space-2);

  /* Typography */
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  font-weight: var(--font-medium);

  /* Effects */
  border-radius: var(--radius-md);
  transition: all var(--duration-normal) var(--ease-out);
}
```

**Never Hardcode**:
```css
/* ❌ Bad */
.element {
  color: #abb2bf;
  padding: 16px;
  font-size: 14px;
}

/* ✅ Good */
.element {
  color: var(--color-text-primary);
  padding: var(--space-4);
  font-size: var(--text-sm);
}
```

## i18n Standards

### Translation Keys

**Naming** (`src/i18n/ui.ts`):
```typescript
export const ui = {
  en: {
    'nav.getting-started': 'Getting Started',  // Dot notation
    'search.placeholder': 'Search docs...',
    'button.submit': 'Submit',
  },
  vi: {
    'nav.getting-started': 'Bắt Đầu',
    'search.placeholder': 'Tìm kiếm...',
    'button.submit': 'Gửi',
  }
};
```

**Usage in Components**:
```astro
---
import { useTranslations } from '../i18n/utils';
const t = useTranslations(currentLocale);
---

<button>{t('button.submit')}</button>
```

### Content Localization

**File Structure**:
```
src/content/
├── docs/              # English
│   └── category/
│       └── page.md
└── docs-vi/           # Vietnamese (mirror structure)
    └── category/
        └── page.md
```

**Translation Workflow**:
1. Create English content first
2. Mirror file structure in `docs-vi/`
3. Translate all frontmatter and content
4. Ensure code examples remain consistent
5. Test both locales

## TypeScript Standards

### Type Safety

**Strict Mode** (tsconfig.json):
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

**Interface Definitions**:
```typescript
// Prefer interfaces for objects
interface DocsFrontmatter {
  title: string;
  description: string;
  category?: Category;
  order?: number;
  published: boolean;
}

// Use type for unions, primitives
type Category =
  | 'getting-started'
  | 'core-concepts'
  | 'agents';

type LocaleCode = 'en' | 'vi';
```

**Type Annotations**:
```typescript
// Explicit return types
function getSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-');
}

// Inferred types (simple cases)
const locale = 'en'; // Type: string

// Explicit when needed
const locale: LocaleCode = 'en'; // Type: LocaleCode
```

## Quality Standards

### Code Review Checklist

**Functionality**:
- [ ] Features work as specified
- [ ] Edge cases handled
- [ ] Error states covered
- [ ] Responsive on mobile/desktop

**Code Quality**:
- [ ] Follows naming conventions
- [ ] Under file size limits
- [ ] No code duplication
- [ ] TypeScript strict mode passes
- [ ] No unused imports/variables

**Performance**:
- [ ] Minimal client-side JavaScript
- [ ] Images optimized
- [ ] No unnecessary re-renders
- [ ] Efficient data fetching

**Accessibility**:
- [ ] Semantic HTML
- [ ] Alt text for images
- [ ] Keyboard navigation works
- [ ] Color contrast sufficient (WCAG AA)

**i18n**:
- [ ] All UI strings in i18n files
- [ ] Vietnamese translation provided (or issue created)
- [ ] Locale-specific formatting correct

**Documentation**:
- [ ] Complex logic commented
- [ ] Props documented (JSDoc)
- [ ] README updated if needed

### Testing

**Manual Testing**:
- Dev server: `npm run dev`
- Build test: `npm run build && npm run preview`
- Test both locales: `/docs/...` and `/vi/docs/...`
- Test responsive breakpoints
- Check navigation, links, search

**Content Validation**:
- Frontmatter validates against schema
- No broken internal links
- Images load correctly
- Code blocks have language specified

## Git Standards

### Commit Messages

**Format**: Conventional Commits
```
type(scope): description

[optional body]

[optional footer]
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, white-space
- `refactor`: Code restructuring
- `perf`: Performance improvement
- `test`: Add/update tests
- `chore`: Build, configs

**Examples**:
```
feat(content): add troubleshooting guide for installation issues

docs(readme): update quick start instructions

fix(sidebar): add missing troubleshooting category

style(global): adjust heading spacing for better readability

refactor(i18n): extract translation utilities to separate file
```

**Rules**:
- Subject: imperative mood, lowercase, no period
- Max 72 characters
- Body: explain WHY, not WHAT
- Footer: reference issues (`Closes #123`)

### Branch Naming

**Format**: `type/description`

**Examples**:
```
feat/add-search-functionality
fix/sidebar-collapse-bug
docs/update-installation-guide
refactor/simplify-i18n-utils
```

### Pre-Commit Checklist

- [ ] No secrets, API keys, credentials
- [ ] No console.log or debug code
- [ ] TypeScript compiles without errors
- [ ] Build succeeds (`npm run build`)
- [ ] No linting errors
- [ ] Files under size limits
- [ ] Conventional commit message

## Security Standards

### Secrets Management

**Never Commit**:
- API keys
- Credentials
- .env files (except .env.example)
- Personal access tokens

**Environment Variables**:
```bash
# .env (gitignored)
OPENROUTER_API_KEY=sk-...

# .env.example (committed)
OPENROUTER_API_KEY=your_api_key_here
```

**Usage**:
```typescript
// Server-side only
const apiKey = import.meta.env.OPENROUTER_API_KEY;

// Never expose in client-side code
```

### Content Security

**User Input**: No user-generated content (static site)
**External Links**: Open in same tab (let users decide)
**Images**: Only from trusted sources
**Scripts**: Minimal client-side JS, no eval()

## Performance Standards

### Build Optimization

**Static Generation**:
- All pages pre-rendered at build time
- No server-side rendering (SSR)
- Minimal JavaScript hydration

**Asset Optimization**:
- Images: WebP format, < 200KB
- Fonts: Variable fonts, preload
- CSS: Purged unused Tailwind classes
- JS: Tree-shaking, code splitting

### Runtime Performance

**Target Metrics**:
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.0s
- Total Blocking Time (TBT): < 200ms

**Optimization Strategies**:
- Islands architecture (partial hydration)
- Lazy load images
- Defer non-critical JavaScript
- Use `client:visible` for below-fold components

## Documentation Standards

### Component Documentation

**Astro Components**:
```astro
---
/**
 * SidebarNav - Collapsible navigation tree
 *
 * Groups documentation by category from frontmatter.
 * Sorts by order field, persists collapse state in localStorage.
 *
 * @component
 */

interface Props {
  /** Current page path for active highlighting */
  currentPath: string;
}
---
```

**React Components**:
```tsx
/**
 * AI chat interface with message history
 *
 * Renders chat messages with markdown support and syntax highlighting.
 * Backend integration pending (OpenRouter API).
 *
 * @param props - Component props
 * @param props.initialMessages - Pre-populated messages
 */
export default function AIChat({ initialMessages = [] }: AIChatProps) {
  // ...
}
```

### README Updates

**When to Update**:
- New feature added
- Breaking changes
- Installation process changes
- New scripts added to package.json
- Architecture changes

**Keep Under 300 Lines**: Focus on essentials, link to detailed docs

## Exceptions

**When to Deviate**:
- Performance-critical code (document reason)
- Third-party library constraints
- Generated code (mark clearly)
- Temporary workarounds (add TODO with date)

**Documentation Required**:
```typescript
/**
 * EXCEPTION: File exceeds 300 lines
 * REASON: Complex navigation logic requires unified state management
 * TODO: Refactor into smaller components when time permits
 * DATE: 2025-11-25
 */
```

## References

### Internal
- [Codebase Summary](./codebase-summary.md)
- [System Architecture](./system-architecture.md)
- [Project Overview PDR](./project-overview-pdr.md)

### External
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Conventional Commits](https://conventionalcommits.org/)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)

## Unresolved Questions

None. All standards are clear and documented.
