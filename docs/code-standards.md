# Code Standards & Structure

**Project:** ClaudeKit Documentation
**Version:** 1.0
**Last Updated:** 2025-10-18
**Status:** Active

---

## Overview

This document defines the coding standards, architectural patterns, and best practices for the ClaudeKit Documentation project. All code contributions must adhere to these guidelines to maintain consistency, quality, and maintainability.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [File Naming Conventions](#file-naming-conventions)
3. [TypeScript Standards](#typescript-standards)
4. [React Component Guidelines](#react-component-guidelines)
5. [Astro Component Standards](#astro-component-standards)
6. [CSS & Styling](#css--styling)
7. [Markdown Content](#markdown-content)
8. [Error Handling](#error-handling)
9. [Security Best Practices](#security-best-practices)
10. [Testing Requirements](#testing-requirements)
11. [Git Workflow](#git-workflow)

---

## Project Structure

### Directory Organization

```
claudekit-docs/
├── src/                          # Source code (never modify compiled output)
│   ├── components/               # Reusable UI components
│   │   ├── *.tsx                 # React components (interactive)
│   │   └── *.astro               # Astro components (static/hybrid)
│   ├── layouts/                  # Page layouts
│   │   ├── BaseLayout.astro      # HTML document wrapper
│   │   └── DocsLayout.astro      # 3-column docs layout
│   ├── pages/                    # File-based routing
│   │   ├── index.astro           # Homepage
│   │   └── docs/[...slug].astro  # Dynamic routes
│   ├── content/                  # Markdown content
│   │   ├── config.ts             # Content collection schemas
│   │   └── docs/                 # Documentation markdown
│   ├── lib/                      # Shared utilities
│   │   └── *.ts                  # Utility functions, API clients
│   └── styles/                   # Global CSS
│       └── global.css            # Design system variables
├── public/                       # Static assets (served as-is)
│   ├── favicon.svg               # Site icon
│   └── *.png                     # Images, logos
├── k8s/                          # Kubernetes manifests
├── docs/                         # Project documentation (not user-facing)
├── .claude/                      # Claude Code workflows
└── config files                  # Root-level configuration
```

### File Organization Principles

1. **Separation of Concerns** - Components, layouts, pages, content are isolated
2. **Colocation** - Related files stay close (e.g., component + styles)
3. **Convention Over Configuration** - Follow Astro file-based routing
4. **Public vs. Private** - Clearly separate user assets (`public/`) from source (`src/`)

---

## File Naming Conventions

### General Rules

- **Components:** PascalCase (e.g., `AIChat.tsx`, `Sidebar.astro`)
- **Pages:** lowercase, kebab-case for multi-word (e.g., `index.astro`, `quick-start.md`)
- **Utilities:** camelCase (e.g., `openrouter.ts`, `formatDate.ts`)
- **Config Files:** kebab-case with extension (e.g., `astro.config.mjs`, `tailwind.config.mjs`)
- **Directories:** lowercase, kebab-case (e.g., `getting-started`, `core-concepts`)

### Examples

✅ **Good:**
```
AIChat.tsx
DocsLayout.astro
openrouter.ts
getting-started/
quick-start.md
```

❌ **Bad:**
```
ai-chat.tsx (should be PascalCase)
docslayout.astro (missing PascalCase)
OpenRouter.ts (should be camelCase for non-component)
Getting-Started/ (should be lowercase)
QuickStart.md (should be kebab-case)
```

---

## TypeScript Standards

### Configuration

**Use strict mode** (`tsconfig.json` extends `astro/tsconfigs/strict`):

```json
{
  "extends": "astro/tsconfigs/strict"
}
```

### Type Definitions

**Always define explicit types for:**
- Function parameters
- Function return values
- Component props
- API responses
- State variables

✅ **Good:**
```typescript
interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

function formatMessage(message: Message): string {
  return `${message.role}: ${message.content}`;
}

const [messages, setMessages] = useState<Message[]>([]);
```

❌ **Bad:**
```typescript
function formatMessage(message) {  // Missing types
  return `${message.role}: ${message.content}`;
}

const [messages, setMessages] = useState([]);  // No type annotation
```

### Enums vs. Union Types

**Prefer union types** over enums for better tree-shaking:

✅ **Good:**
```typescript
type Category = 'getting-started' | 'cli' | 'core-concepts' | 'components' | 'api-reference';
```

❌ **Bad:**
```typescript
enum Category {
  GettingStarted = 'getting-started',
  CLI = 'cli',
  CoreConcepts = 'core-concepts'
}
```

### Async/Await

**Always use async/await** instead of Promise chains:

✅ **Good:**
```typescript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
```

❌ **Bad:**
```typescript
function fetchData() {
  return fetch('/api/data')
    .then(response => response.json())
    .catch(error => console.error(error));
}
```

### Nullish Coalescing

**Use `??` for default values** (not `||`):

✅ **Good:**
```typescript
const port = process.env.PORT ?? 3000;  // Only null/undefined trigger default
```

❌ **Bad:**
```typescript
const port = process.env.PORT || 3000;  // 0, false, '' also trigger default
```

---

## React Component Guidelines

### Component Structure

**Order of component elements:**

```typescript
// 1. Imports
import { useState, useEffect } from 'react';
import type { SomeType } from './types';

// 2. Type definitions
interface Props {
  title: string;
  count?: number;
}

// 3. Component function
export function MyComponent({ title, count = 0 }: Props) {
  // 4. Hooks (useState, useEffect, etc.)
  const [value, setValue] = useState<number>(count);

  // 5. Event handlers
  const handleClick = () => {
    setValue(prev => prev + 1);
  };

  // 6. Effects
  useEffect(() => {
    // Side effects
  }, [value]);

  // 7. Render
  return (
    <div className="component">
      <h2>{title}</h2>
      <button onClick={handleClick}>Count: {value}</button>
    </div>
  );
}
```

### Props Naming

- **Boolean props:** `is`, `has`, `should` prefix (e.g., `isLoading`, `hasError`)
- **Event handlers:** `on` prefix (e.g., `onClick`, `onSubmit`)
- **Render props:** `render` prefix (e.g., `renderHeader`)

✅ **Good:**
```typescript
interface Props {
  isLoading: boolean;
  hasError: boolean;
  onClick: () => void;
  renderFooter?: () => ReactNode;
}
```

❌ **Bad:**
```typescript
interface Props {
  loading: boolean;    // Should be isLoading
  error: boolean;      // Should be hasError
  click: () => void;   // Should be onClick
  footer?: () => ReactNode;  // Should be renderFooter
}
```

### State Management

**Use `useState` for local state**, not class components:

✅ **Good:**
```typescript
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
```

**Functional updates** when depending on previous state:

✅ **Good:**
```typescript
setCount(prev => prev + 1);
```

❌ **Bad:**
```typescript
setCount(count + 1);  // Stale closure risk
```

### Accessibility

**Always include:**
- `aria-label` for icon-only buttons
- `alt` text for images
- Semantic HTML (button, nav, header, etc.)

✅ **Good:**
```typescript
<button
  type="submit"
  className="ai-send-button"
  disabled={isLoading || !input.trim()}
  aria-label="Send message"
>
  <SendIcon />
</button>
```

---

## Astro Component Standards

### Component Scripts

**Use TypeScript in frontmatter:**

```astro
---
import Layout from '../layouts/BaseLayout.astro';

interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
const currentPath = Astro.url.pathname;
---

<Layout title={title} description={description}>
  <h1>{title}</h1>
</Layout>
```

### Client Directives

**Use specific client directives** for React components:

```astro
---
import AIChat from '../components/AIChat.tsx';
---

<!-- Load immediately -->
<AIChat client:load />

<!-- Load when visible -->
<AIChat client:visible />

<!-- Load when page is idle -->
<AIChat client:idle />

<!-- Only in browser (no SSR) -->
<AIChat client:only="react" />
```

**Rule:** Use `client:idle` for non-critical interactive components

### Slots

**Define named slots** for flexible layouts:

```astro
---
// DocsLayout.astro
---
<div class="docs-layout">
  <aside>
    <slot name="sidebar" />
  </aside>
  <main>
    <slot />  <!-- Default slot -->
  </main>
  <aside>
    <slot name="ai-panel" />
  </aside>
</div>
```

---

## CSS & Styling

### CSS Architecture

**Three-layer approach:**

1. **Global CSS** (`global.css`) - Design tokens, resets, utilities
2. **Tailwind Classes** - Component-level styling
3. **Scoped Styles** - Astro component `<style>` blocks (rare)

### CSS Variables

**All values use CSS custom properties:**

```css
/* Define in global.css */
:root {
  --color-bg-primary: #0A0A0A;
  --color-text-primary: #FFFFFF;
  --space-4: 1rem;
}

/* Reference in components */
.my-component {
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  padding: var(--space-4);
}
```

### Tailwind Usage

**Use Tailwind classes** for component styling:

✅ **Good:**
```astro
<div class="flex items-center gap-4 p-6 bg-bg-secondary rounded-lg">
  <h2 class="text-2xl font-bold text-text-primary">Title</h2>
</div>
```

**Custom classes** only when Tailwind is insufficient:

```astro
<div class="ai-chat-container">  <!-- Custom class -->
  <div class="flex flex-col gap-4">  <!-- Tailwind -->
    <!-- ... -->
  </div>
</div>

<style>
.ai-chat-container {
  /* Complex grid layout not easily done in Tailwind */
  display: grid;
  grid-template-rows: 1fr auto;
  height: calc(100vh - var(--layout-header-height));
}
</style>
```

### Naming Conventions

**BEM-style** for custom classes:

```
.block {}
.block__element {}
.block--modifier {}
```

Example:
```css
.ai-chat {}
.ai-chat__message {}
.ai-chat__message--user {}
.ai-chat__message--assistant {}
```

### Responsive Design

**Mobile-first breakpoints:**

```css
/* Mobile styles (default) */
.component { width: 100%; }

/* Tablet and up */
@media (min-width: 768px) {
  .component { width: 50%; }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .component { width: 33.333%; }
}
```

---

## Markdown Content

### Frontmatter Schema

**Required fields:**

```yaml
---
title: "Page Title"
description: "SEO-friendly description (150-160 chars)"
category: "getting-started"
order: 1
published: true
---
```

### Content Structure

**Hierarchy:**

```markdown
# Page Title (H1 - only one per page)

Brief introduction paragraph.

## Section Heading (H2)

Content...

### Subsection Heading (H3)

Content...

#### Minor Heading (H4)

Avoid H5 and H6 - restructure if needed.
```

### Code Blocks

**Always specify language:**

````markdown
```typescript
const greeting: string = "Hello, world!";
console.log(greeting);
```
````

**File names in code blocks:**

````markdown
```typescript title="src/lib/openrouter.ts"
export class OpenRouterClient {
  // ...
}
```
````

### Links

**Use descriptive text:**

✅ **Good:**
```markdown
Learn more about [Astro content collections](https://docs.astro.build/en/guides/content-collections/).
```

❌ **Bad:**
```markdown
Click [here](https://docs.astro.build/en/guides/content-collections/) to learn more.
```

### Callouts

**Use custom callouts:**

```markdown
:::info
This is informational content.
:::

:::warning
This is a warning.
:::

:::danger
This is critical information.
:::
```

---

## Error Handling

### Try-Catch Blocks

**Always handle errors gracefully:**

```typescript
try {
  const result = await riskyOperation();
  return result;
} catch (error) {
  console.error('Operation failed:', error);

  // Provide user-friendly error message
  if (error instanceof NetworkError) {
    throw new Error('Network connection failed. Please try again.');
  }

  // Re-throw for upstream handling
  throw error;
}
```

### Validation

**Validate input at boundaries:**

```typescript
// Zod schema validation
import { z } from 'astro:content';

const messageSchema = z.object({
  role: z.enum(['user', 'assistant', 'system']),
  content: z.string().min(1).max(5000)
});

function processMessage(input: unknown) {
  const message = messageSchema.parse(input);  // Throws on invalid
  // ... process validated message
}
```

### Error Messages

**Be specific and actionable:**

✅ **Good:**
```typescript
throw new Error('API key missing. Set OPENROUTER_API_KEY environment variable.');
```

❌ **Bad:**
```typescript
throw new Error('Configuration error');
```

---

## Security Best Practices

### Environment Variables

**Never commit secrets:**

```typescript
// ❌ Bad
const apiKey = 'sk-proj-abc123...';

// ✅ Good
const apiKey = process.env.OPENROUTER_API_KEY;
if (!apiKey) {
  throw new Error('OPENROUTER_API_KEY not configured');
}
```

### API Routes

**Server-side only:**

```typescript
// src/pages/api/chat.ts
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  // ✅ API key accessed server-side only
  const client = new OpenRouterClient(process.env.OPENROUTER_API_KEY);

  const body = await request.json();
  const response = await client.chat(body);

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' }
  });
};
```

### Input Sanitization

**Sanitize user input:**

```typescript
import DOMPurify from 'isomorphic-dompurify';

function sanitizeInput(input: string): string {
  return DOMPurify.sanitize(input.trim());
}
```

---

## Testing Requirements

### Unit Tests (Future)

**Vitest conventions:**

```typescript
import { describe, it, expect } from 'vitest';
import { formatMessage } from './utils';

describe('formatMessage', () => {
  it('should format user messages correctly', () => {
    const message = { role: 'user' as const, content: 'Hello' };
    expect(formatMessage(message)).toBe('user: Hello');
  });

  it('should handle empty content', () => {
    const message = { role: 'user' as const, content: '' };
    expect(formatMessage(message)).toBe('user: ');
  });
});
```

### E2E Tests (Future)

**Playwright conventions:**

```typescript
import { test, expect } from '@playwright/test';

test('AI chat sends messages', async ({ page }) => {
  await page.goto('/docs/getting-started/introduction');

  await page.fill('[placeholder="Ask about ClaudeKit..."]', 'What is ClaudeKit?');
  await page.click('[aria-label="Send message"]');

  await expect(page.locator('.ai-message.assistant')).toBeVisible();
});
```

---

## Git Workflow

### Commit Messages

**Conventional Commits format:**

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style (formatting, no logic change)
- `refactor`: Code refactor (no feature/fix)
- `test`: Test additions/changes
- `chore`: Build process, dependencies

**Examples:**

✅ **Good:**
```
feat(ai-chat): add streaming response support

Implement streaming chat completions using OpenRouter API.
Includes loading states and error handling.

Closes #42
```

```
fix(sidebar): correct active page highlighting

Active nav indicator now appears on current page.

Fixes #38
```

❌ **Bad:**
```
Update files
```

```
Fixed bug
```

### Branch Naming

**Convention:**

```
<type>/<short-description>
```

**Examples:**
- `feat/ai-search`
- `fix/sidebar-navigation`
- `docs/api-reference`
- `refactor/component-structure`

### Pull Request Guidelines

**Required:**
1. Descriptive title matching commit message style
2. Summary of changes
3. Testing performed
4. Screenshots (for UI changes)
5. Linked issues (Closes #X)

**Review Checklist:**
- [ ] TypeScript strict mode passes
- [ ] No console errors or warnings
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Accessibility verified (keyboard navigation, screen reader)
- [ ] Documentation updated (if applicable)

---

## Code Review Standards

### What to Review

1. **Functionality** - Does it work as intended?
2. **Code Quality** - Is it readable and maintainable?
3. **Performance** - Any obvious bottlenecks?
4. **Security** - Any vulnerabilities?
5. **Accessibility** - WCAG compliance?
6. **Testing** - Adequate test coverage?

### Review Comments

**Be constructive:**

✅ **Good:**
```
Consider extracting this logic into a separate function for reusability:

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

❌ **Bad:**
```
This is wrong.
```

---

## Performance Guidelines

### Bundle Size

**Monitor JavaScript payload:**

```bash
# Check bundle size after build
npm run build
du -sh dist/_astro/*.js
```

**Target:** <150KB initial JS

### Image Optimization

**Use Astro's Image component:**

```astro
---
import { Image } from 'astro:assets';
import logo from '../assets/logo.png';
---

<Image src={logo} alt="ClaudeKit Logo" width={200} height={200} />
```

**Formats:** WebP primary, PNG fallback

### Lazy Loading

**Defer non-critical components:**

```astro
---
import AIChat from '../components/AIChat.tsx';
---

<!-- Load when page is idle -->
<AIChat client:idle />
```

---

## Documentation Standards

### Code Comments

**When to comment:**
- Complex algorithms
- Non-obvious business logic
- Workarounds for bugs
- TODOs (with issue reference)

**When NOT to comment:**
- Self-explanatory code
- Redundant statements

✅ **Good:**
```typescript
// Calculate exponential backoff: 2^attempt * 100ms
const delay = Math.pow(2, attempt) * 100;
```

❌ **Bad:**
```typescript
// Increment counter by 1
count++;
```

### JSDoc (Optional)

**Use for public APIs:**

```typescript
/**
 * Sends a chat message to the AI assistant.
 *
 * @param messages - Array of previous messages for context
 * @param model - OpenRouter model ID (default: claude-3.5-sonnet)
 * @returns Promise resolving to AI response string
 * @throws {Error} If API key is missing or request fails
 */
export async function chat(
  messages: Message[],
  model?: string
): Promise<string> {
  // ...
}
```

---

## Editor Configuration

### VS Code Settings

**Recommended `.vscode/settings.json`:**

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "tailwindCSS.experimental.classRegex": [
    ["class:\\s*?[\"'`]([^\"'`]*).*?[\"'`]", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

### Recommended Extensions

1. **Astro** - Official Astro support
2. **Tailwind CSS IntelliSense** - Tailwind autocomplete
3. **ESLint** - Code linting
4. **Prettier** - Code formatting
5. **Error Lens** - Inline error display

---

## Conclusion

These standards ensure:
- **Consistency** - Code looks like it was written by one person
- **Quality** - High standards for maintainability
- **Security** - Best practices for sensitive data
- **Performance** - Optimized user experience
- **Accessibility** - Inclusive design for all users

**When in doubt:** Look at existing code for examples, or ask in code review.

---

*Last updated: 2025-10-18*
*Review this document quarterly and update as project evolves.*
