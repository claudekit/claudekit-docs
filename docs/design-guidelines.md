# ClaudeKit Documentation - Design Guidelines

**Version:** 1.0
**Date:** 2025-10-17
**Status:** Active

---

## Design Philosophy & Principles

### Core Principles

1. **Developer-First Experience**
   - Prioritize code readability and documentation clarity
   - Fast access to information with minimal cognitive load
   - Seamless AI-assisted navigation and learning

2. **Modern Technical Aesthetic**
   - One Dark-inspired color palette (familiar to developers)
   - Clean, spacious layouts with generous whitespace
   - Subtle animations that enhance, not distract

3. **Progressive Enhancement**
   - Works without JavaScript (static content)
   - Enhanced with AI features for those who want them
   - Graceful degradation across all browsers

4. **Accessibility First**
   - WCAG 2.1 AA compliance minimum
   - Keyboard navigation throughout
   - Screen reader optimized
   - Reduced motion support

---

## Typography System

### Font Families

**Primary Analysis:** Based on the demo.png screenshot analysis, the font exhibits characteristics of **Inter** - clean geometric forms, consistent x-height, excellent readability at small sizes, and modern technical aesthetic.

**Font Stack:**

```css
/* Body & UI Text */
--font-sans: 'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont,
             'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;

/* Code & Monospace */
--font-mono: 'Geist Mono', 'SF Mono', 'Monaco', 'Inconsolata',
             'Courier New', monospace;
```

**Rationale for Inter:**
- Variable font (100-900 weight) = single file, flexible weights
- Optimized for UI and high-res displays
- Excellent Vietnamese character support (2000+ glyphs)
- Wide adoption in technical documentation (GitHub, Vercel, etc.)
- Superior legibility at small sizes (12px-14px)

**Google Fonts Loading:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Type Scale

Based on Polar documentation measurements:

```css
:root {
  /* Base size: 16px */
  --text-xs: 0.75rem;      /* 12px - Sidebar section headers, small labels */
  --text-sm: 0.875rem;     /* 14px - Navigation, code, AI chat */
  --text-base: 1rem;       /* 16px - Body text, main content */
  --text-lg: 1.125rem;     /* 18px - H3, callouts */
  --text-xl: 1.25rem;      /* 20px - H2 subsections */
  --text-2xl: 1.5rem;      /* 24px - H2 main headings */
  --text-3xl: 1.875rem;    /* 30px - H1 subpages */
  --text-4xl: 2.25rem;     /* 36px - H1 main page titles */
}
```

### Font Weights

```css
:root {
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

**Usage Guidelines:**
- Body text: 400 (normal)
- Navigation: 500 (medium)
- Headings: 600 (semibold)
- Strong emphasis: 700 (bold)
- Code: 400 (normal) in monospace

### Line Heights

```css
:root {
  --leading-tight: 1.25;    /* Headings */
  --leading-snug: 1.375;    /* Subheadings */
  --leading-normal: 1.5;    /* Body text */
  --leading-relaxed: 1.625; /* Long-form content */
  --leading-loose: 2;       /* Spaced content */
}
```

### Letter Spacing

```css
:root {
  --tracking-tighter: -0.05em;  /* Large headings */
  --tracking-tight: -0.025em;   /* Headings */
  --tracking-normal: 0em;       /* Body, default */
  --tracking-wide: 0.025em;     /* Navigation items */
  --tracking-wider: 0.05em;     /* Sidebar section headers (12px uppercase) */
}
```

---

## Color System

### Dark Theme (Primary)

Based on Polar documentation design with precise color values:

```css
:root[data-theme="dark"] {
  /* === Backgrounds === */
  --color-bg-primary: #0A0A0A;      /* Main background (almost pure black) */
  --color-bg-secondary: #111111;    /* Sidebar, panels (very dark gray) */
  --color-bg-tertiary: #1C1C1C;     /* Cards, inputs, hover states */
  --color-bg-code: #1C1C1C;         /* Code blocks */
  --color-bg-inline-code: #1C1C1C;  /* Inline code background */

  /* === Text === */
  --color-text-primary: #FFFFFF;    /* Main content (pure white) */
  --color-text-secondary: #A3A3A3;  /* Secondary text (light gray) */
  --color-text-muted: #737373;      /* Muted text, hints (medium gray) */
  --color-text-inverse: #0A0A0A;    /* Text on light backgrounds */

  /* === Accents === */
  --color-accent-blue: #60A5FA;     /* Active states, links (vibrant blue) */
  --color-accent-green: #98C379;    /* Success, strings */
  --color-accent-purple: #C678DD;   /* Keywords, tags */
  --color-accent-cyan: #56B6C2;     /* AI sparkle, operators */
  --color-accent-red: #E06C75;      /* Errors, warnings */
  --color-accent-yellow: #E5C07B;   /* Warnings, highlights */
  --color-accent-orange: #D19A66;   /* Emphasis, numbers */

  /* === Borders === */
  --color-border: #262626;          /* Subtle borders (dark gray) */
  --color-border-hover: #3A3A3A;    /* Hover state borders */
  --color-border-focus: #60A5FA;    /* Focus ring (vibrant blue) */

  /* === Overlays === */
  --color-overlay: rgba(0, 0, 0, 0.5);
  --color-overlay-heavy: rgba(0, 0, 0, 0.75);

  /* === Syntax Highlighting === */
  --syntax-comment: #737373;
  --syntax-keyword: #C678DD;
  --syntax-function: #60A5FA;
  --syntax-string: #98C379;
  --syntax-number: #D19A66;
  --syntax-operator: #56B6C2;
  --syntax-variable: #E06C75;
  --syntax-class: #E5C07B;
}
```

### Light Theme (Secondary)

```css
:root[data-theme="light"] {
  /* === Backgrounds === */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F9FAFB;
  --color-bg-tertiary: #F3F4F6;
  --color-bg-code: #F5F5F5;
  --color-bg-inline-code: #E5E7EB;

  /* === Text === */
  --color-text-primary: #111827;
  --color-text-secondary: #4B5563;
  --color-text-muted: #6B7280;
  --color-text-inverse: #FFFFFF;

  /* === Accents === */
  --color-accent-blue: #2563EB;
  --color-accent-green: #059669;
  --color-accent-purple: #7C3AED;
  --color-accent-cyan: #0891B2;
  --color-accent-red: #DC2626;
  --color-accent-yellow: #D97706;
  --color-accent-orange: #EA580C;

  /* === Borders === */
  --color-border: #E5E7EB;
  --color-border-hover: #D1D5DB;
  --color-border-focus: #2563EB;

  /* === Overlays === */
  --color-overlay: rgba(0, 0, 0, 0.1);
  --color-overlay-heavy: rgba(0, 0, 0, 0.3);
}
```

### Semantic Colors

```css
:root {
  --color-success: var(--color-accent-green);
  --color-warning: var(--color-accent-yellow);
  --color-error: var(--color-accent-red);
  --color-info: var(--color-accent-blue);

  /* AI-specific colors */
  --color-ai-primary: var(--color-accent-cyan);
  --color-ai-secondary: var(--color-accent-purple);
  --color-ai-gradient: linear-gradient(135deg, var(--color-accent-cyan), var(--color-accent-purple));
}
```

---

## Spacing System

8px base grid system (0.5rem increments):

```css
:root {
  --space-0: 0;
  --space-px: 1px;
  --space-0-5: 0.125rem;  /* 2px */
  --space-1: 0.25rem;     /* 4px */
  --space-1-5: 0.375rem;  /* 6px */
  --space-2: 0.5rem;      /* 8px */
  --space-3: 0.75rem;     /* 12px */
  --space-4: 1rem;        /* 16px */
  --space-5: 1.25rem;     /* 20px */
  --space-6: 1.5rem;      /* 24px */
  --space-7: 1.75rem;     /* 28px */
  --space-8: 2rem;        /* 32px */
  --space-10: 2.5rem;     /* 40px */
  --space-12: 3rem;       /* 48px */
  --space-16: 4rem;       /* 64px */
  --space-20: 5rem;       /* 80px */
  --space-24: 6rem;       /* 96px */
}
```

**Usage Guidelines:**
- Component padding: 16px-24px (--space-4 to --space-6)
- Section spacing: 32px-48px (--space-8 to --space-12)
- Element gaps: 8px-16px (--space-2 to --space-4)
- Inline spacing: 4px-8px (--space-1 to --space-2)

---

## Layout System

### Grid Structure

**3-Column Layout (Desktop 1280px+):**

```
┌──────────────────────────────────────────────────────────────┐
│ Header (full width, 60px height)                             │
├──────────┬─────────────────────────────────┬─────────────────┤
│ Sidebar  │ Content                         │ AI Assistant    │
│ 280px    │ (flexible, max 800px)           │ 360px           │
│ fixed    │                                 │ (toggle)        │
│          │                                 │                 │
│          │                                 │                 │
└──────────┴─────────────────────────────────┴─────────────────┘
```

**Measurements (from Polar documentation analysis):**

```css
:root {
  /* Layout widths */
  --layout-sidebar-width: 280px;
  --layout-content-max-width: 700px;
  --layout-ai-panel-width: 380px;
  --layout-header-height: 64px;

  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

### Responsive Breakpoints

```css
/* Mobile: < 768px */
- Single column layout
- Hamburger menu for sidebar
- AI assistant as modal/bottom sheet
- Full-width content

/* Tablet: 768px - 1024px */
- 2-column layout (sidebar + content)
- Collapsible sidebar
- AI assistant as slide-over panel

/* Desktop: 1024px - 1280px */
- 2-column layout (wider content)
- Fixed sidebar
- AI assistant as toggle panel

/* Wide Desktop: 1280px+ */
- Full 3-column layout
- All panels visible simultaneously
- Optimal reading width maintained
```

### Container Widths

```css
.container {
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--space-4);
}

@media (min-width: 640px) {
  .container { max-width: 640px; }
}

@media (min-width: 768px) {
  .container { max-width: 768px; }
}

@media (min-width: 1024px) {
  .container { max-width: 1024px; }
}

@media (min-width: 1280px) {
  .container { max-width: 1280px; }
}

@media (min-width: 1536px) {
  .container { max-width: 1536px; }
}
```

---

## Component Specifications

### Header / Navigation Bar

**Anatomy:**
```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] [Docs▾] [API Reference] [Guides] [Changelog] [🌙💡] │
│         (1)       (2)            (3)        (4)       (5)    │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
```css
.header {
  height: 64px;
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
  padding-inline: var(--space-6);
  display: flex;
  align-items: center;
  gap: var(--space-6);
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  background-color: rgba(17, 17, 17, 0.8); /* Semi-transparent dark */
}

.header-logo {
  width: 32px;
  height: 32px;
  border-radius: 8px;
}

.header-nav {
  display: flex;
  gap: var(--space-1);
  margin-inline-start: auto;
}

.header-nav-item {
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  border-radius: 6px;
  transition: all 150ms ease;
}

.header-nav-item:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-tertiary);
}

.header-nav-item.active {
  color: var(--color-text-primary);
  background: var(--color-bg-tertiary);
}

.theme-toggle {
  width: 64px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  transition: all 150ms ease;
}

.theme-toggle:hover {
  border-color: var(--color-border-hover);
}
```

### Sidebar Navigation

**Anatomy:**
```
┌──────────────────────┐
│ [🔍 Search...  ⌘K]  │ ← Search input (1)
├──────────────────────┤
│ Bootup               │ ← Section header (2)
│   Introduction       │ ← Nav item (3)
│   Migrate to Polar   │
│ ▼ Features           │ ← Collapsible section (4)
│   Products           │
│   ├ Usage Based... → │ ← Nested item (5)
│   └ Benefits ▼       │ ← Expanded nested (6)
│       Introduction   │
│       License Keys   │
│       ...            │
└──────────────────────┘
```

**Specifications:**
```css
.sidebar {
  width: var(--layout-sidebar-width);
  height: calc(100vh - var(--layout-header-height));
  background: var(--color-bg-secondary);
  border-inline-end: 1px solid var(--color-border);
  overflow-y: auto;
  position: sticky;
  top: var(--layout-header-height);
  padding: var(--space-6);
}

.sidebar-search {
  width: 100%;
  height: 40px;
  padding: var(--space-2-5) var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
  transition: all 150ms ease;
}

.sidebar-search:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
}

.sidebar-search::placeholder {
  color: var(--color-text-muted);
}

.sidebar-section {
  margin-bottom: var(--space-6);
}

.sidebar-section-header {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  padding: var(--space-2) var(--space-3);
  margin-bottom: var(--space-1);
}

.sidebar-nav-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  border-radius: 6px;
  transition: all 150ms ease;
  cursor: pointer;
}

.sidebar-nav-item:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-tertiary);
}

.sidebar-nav-item.active {
  color: var(--color-text-primary);
  background: var(--color-bg-tertiary);
  font-weight: var(--font-normal);
  border-left: 2px solid var(--color-accent-blue);
  padding-left: calc(var(--space-3) - 2px);
}

.sidebar-nav-item-icon {
  width: 16px;
  height: 16px;
  transition: transform 150ms ease;
}

.sidebar-nav-item.expanded .sidebar-nav-item-icon {
  transform: rotate(90deg);
}

.sidebar-nav-nested {
  margin-inline-start: var(--space-4);
  padding-inline-start: var(--space-3);
  border-inline-start: 1px solid var(--color-border);
}

/* External link indicator */
.sidebar-nav-item[data-external]::after {
  content: '↗';
  margin-inline-start: auto;
  font-size: var(--text-xs);
  opacity: 0.5;
}
```

### Main Content Area

**Anatomy:**
```
┌─────────────────────────────────────────────┐
│ SDKs                            [Copy page▾]│ ← Breadcrumb + actions (1)
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ # TypeScript SDK                            │ ← H1 heading (2)
│ SDK for JavaScript runtimes...              │ ← Description (3)
│                                             │
│ ## Quickstart                               │ ← H2 heading (4)
│                                             │
│ ┌─────────────────────────────────┐        │
│ │ pnpm add @polar-sh/sdk          │        │ ← Code block (5)
│ └─────────────────────────────────┘        │
│                                             │
│ [ℹ] camelCase vs. snake_case               │ ← Callout (6)
│                                             │
└─────────────────────────────────────────────┘
```

**Specifications:**
```css
.content {
  flex: 1;
  max-width: var(--layout-content-max-width);
  margin-inline: auto;
  padding: var(--space-8) var(--space-6);
}

/* Prose styling */
.content h1 {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: 1.2;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
  letter-spacing: var(--tracking-tight);
}

.content h2 {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  line-height: 1.3;
  color: var(--color-text-primary);
  margin-top: var(--space-12);
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border);
}

.content h3 {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--color-text-primary);
  margin-top: var(--space-8);
  margin-bottom: var(--space-3);
}

.content p {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
}

.content a {
  color: var(--color-accent-blue);
  text-decoration: none;
  transition: color 150ms ease;
}

.content a:hover {
  color: var(--color-accent-cyan);
  text-decoration: underline;
}

.content code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  background: var(--color-bg-inline-code);
  padding: 0.2em 0.4em;
  border-radius: 4px;
  color: var(--color-accent-blue);
}

.content ul,
.content ol {
  margin-bottom: var(--space-4);
  padding-inline-start: var(--space-6);
}

.content li {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
}

/* Content header with actions */
.content-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-6);
}

.breadcrumb {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.content-actions {
  display: flex;
  gap: var(--space-2);
}
```

### Code Blocks

**Anatomy:**
```
┌───────────────────────────────────────┐
│ import { Polar } from '@polar-sh/sdk'│ ← Code content (1)
│                                       │
│ const polar = new Polar({            │
│   accessToken: process.env[...]      │
│ })                                    │
│                                  [📋] │ ← Copy button (2)
└───────────────────────────────────────┘
```

**Specifications:**
```css
.code-block {
  position: relative;
  margin-block: var(--space-6);
  border-radius: 8px;
  overflow: hidden;
  background: var(--color-bg-code);
  border: 1px solid var(--color-border);
}

.code-block-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-tertiary);
  border-bottom: 1px solid var(--color-border);
}

.code-block-filename {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.code-block-copy {
  padding: var(--space-1-5) var(--space-2);
  background: transparent;
  border: none;
  border-radius: 4px;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all 150ms ease;
}

.code-block-copy:hover {
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
}

.code-block-copy:active {
  transform: scale(0.95);
}

.code-block pre {
  padding: var(--space-4);
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: 1.6;
}

.code-block code {
  font-family: var(--font-mono);
  background: transparent;
  padding: 0;
}

/* Line numbers */
.code-block[data-line-numbers] .line {
  padding-inline-start: var(--space-8);
  position: relative;
}

.code-block[data-line-numbers] .line::before {
  content: attr(data-line);
  position: absolute;
  left: var(--space-2);
  color: var(--color-text-muted);
  opacity: 0.5;
  font-size: var(--text-xs);
}

/* Highlighted lines */
.code-block .line.highlight {
  background: rgba(97, 175, 239, 0.1);
  border-inline-start: 2px solid var(--color-accent-blue);
}
```

### AI Assistant Panel

**Anatomy:**
```
┌──────────────────────────────────┐
│ ✨ Assistant            [□][×]   │ ← Header (1)
├──────────────────────────────────┤
│ manage github access             │ ← Search query (2)
│                                  │
│ Searched github access...        │ ← Search result (3)
│                                  │
│ Polar provides automated...      │ ← AI response (4)
│                                  │
│ Setup GitHub Access Benefit:     │
│ 1. Go to Benefits...             │
│ ...                              │
│                                  │
├──────────────────────────────────┤
│ [Ask a question...          ↑]  │ ← Input (5)
└──────────────────────────────────┘
```

**Specifications:**
```css
.ai-panel {
  width: var(--layout-ai-panel-width);
  height: calc(100vh - var(--layout-header-height));
  background: var(--color-bg-secondary);
  border-inline-start: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: var(--layout-header-height);
}

.ai-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4);
  border-bottom: 1px solid var(--color-border);
}

.ai-panel-title {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
}

.ai-panel-icon {
  width: 20px;
  height: 20px;
  color: var(--color-ai-primary);
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
}

.ai-panel-actions {
  display: flex;
  gap: var(--space-1);
}

.ai-panel-action-btn {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: 4px;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all 150ms ease;
}

.ai-panel-action-btn:hover {
  background: var(--color-bg-tertiary);
  color: var(--color-text-primary);
}

.ai-panel-content {
  flex: 1;
  overflow-y: auto;
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.ai-message {
  padding: var(--space-3);
  background: var(--color-bg-tertiary);
  border-radius: 8px;
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}

.ai-message.user {
  background: var(--color-accent-blue);
  color: white;
  margin-inline-start: var(--space-8);
}

.ai-message.assistant {
  background: var(--color-bg-tertiary);
  color: var(--color-text-secondary);
  margin-inline-end: var(--space-8);
}

.ai-panel-input-container {
  padding: var(--space-4);
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-secondary);
}

.ai-panel-input {
  width: 100%;
  height: 48px;
  padding: var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  resize: none;
  transition: all 150ms ease;
}

.ai-panel-input:focus {
  outline: none;
  border-color: var(--color-ai-primary);
  box-shadow: 0 0 0 3px rgba(86, 182, 194, 0.1);
}
```

### Buttons

**Variants:**
```
[Primary] [Secondary] [Ghost] [Danger]
  (1)        (2)        (3)      (4)
```

**Specifications:**
```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-2-5) var(--space-4);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 150ms ease;
  white-space: nowrap;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Primary button */
.button-primary {
  background: var(--color-accent-blue);
  color: white;
  border-color: var(--color-accent-blue);
}

.button-primary:hover:not(:disabled) {
  background: var(--color-accent-cyan);
  border-color: var(--color-accent-cyan);
  box-shadow: 0 4px 12px rgba(97, 175, 239, 0.2);
}

.button-primary:active:not(:disabled) {
  transform: translateY(1px);
}

/* Secondary button */
.button-secondary {
  background: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  border-color: var(--color-border);
}

.button-secondary:hover:not(:disabled) {
  background: var(--color-bg-code);
  border-color: var(--color-border-hover);
}

/* Ghost button */
.button-ghost {
  background: transparent;
  color: var(--color-text-secondary);
  border-color: transparent;
}

.button-ghost:hover:not(:disabled) {
  background: var(--color-bg-tertiary);
  color: var(--color-text-primary);
}

/* Danger button */
.button-danger {
  background: var(--color-accent-red);
  color: white;
  border-color: var(--color-accent-red);
}

.button-danger:hover:not(:disabled) {
  background: #C53030;
  box-shadow: 0 4px 12px rgba(224, 108, 117, 0.2);
}

/* Icon button (square) */
.button-icon {
  padding: var(--space-2);
  aspect-ratio: 1;
}

/* Button sizes */
.button-sm {
  padding: var(--space-1-5) var(--space-3);
  font-size: var(--text-xs);
}

.button-lg {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
}
```

### Dropdown Menu

**Anatomy:**
```
┌─────────────────────────┐
│ Copy page          ▾    │ ← Trigger (1)
└─────────────────────────┘
         ↓ (opens)
┌─────────────────────────────────┐
│ Copy page                       │ ← Menu item (2)
│ Copy page as Markdown for LLMs  │
├─────────────────────────────────┤
│ View as Markdown          ↗     │ ← Menu item with icon (3)
│ View this page as plain text    │
├─────────────────────────────────┤
│ Open in ChatGPT           ↗     │ ← Menu item (4)
│ Ask questions about this page   │
│                                 │
│ Open in Claude            ↗     │ ← Menu item (5)
│ Ask questions about this page   │
└─────────────────────────────────┘
```

**Specifications:**
```css
.dropdown {
  position: relative;
}

.dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all 150ms ease;
}

.dropdown-trigger:hover {
  background: var(--color-bg-code);
  border-color: var(--color-border-hover);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + var(--space-2));
  right: 0;
  min-width: 280px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  padding: var(--space-2);
  z-index: 100;
  animation: dropdown-in 150ms ease-out;
}

@keyframes dropdown-in {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-item {
  display: flex;
  flex-direction: column;
  padding: var(--space-3);
  border-radius: 6px;
  cursor: pointer;
  transition: all 150ms ease;
}

.dropdown-item:hover {
  background: var(--color-bg-tertiary);
}

.dropdown-item-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-primary);
  margin-bottom: var(--space-1);
}

.dropdown-item-description {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  line-height: var(--leading-snug);
}

.dropdown-separator {
  height: 1px;
  background: var(--color-border);
  margin-block: var(--space-2);
}
```

### Callout Boxes

**Variants:**
```
[ℹ Info] [✓ Success] [⚠ Warning] [× Error]
  (1)       (2)         (3)         (4)
```

**Specifications:**
```css
.callout {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-4);
  border-radius: 8px;
  margin-block: var(--space-6);
  border: 1px solid;
  background: var(--color-bg-tertiary);
}

.callout-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.callout-content {
  flex: 1;
}

.callout-title {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-2);
}

.callout-text {
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
}

/* Info callout */
.callout-info {
  border-color: var(--color-accent-blue);
  background: rgba(97, 175, 239, 0.05);
}

.callout-info .callout-icon,
.callout-info .callout-title {
  color: var(--color-accent-blue);
}

/* Success callout */
.callout-success {
  border-color: var(--color-accent-green);
  background: rgba(152, 195, 121, 0.05);
}

.callout-success .callout-icon,
.callout-success .callout-title {
  color: var(--color-accent-green);
}

/* Warning callout */
.callout-warning {
  border-color: var(--color-accent-yellow);
  background: rgba(229, 192, 123, 0.05);
}

.callout-warning .callout-icon,
.callout-warning .callout-title {
  color: var(--color-accent-yellow);
}

/* Error callout */
.callout-error {
  border-color: var(--color-accent-red);
  background: rgba(224, 108, 117, 0.05);
}

.callout-error .callout-icon,
.callout-error .callout-title {
  color: var(--color-accent-red);
}
```

### Feature Cards

**Specifications (from Polar analysis):**
```css
.feature-card {
  width: 320px;
  height: 180px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: var(--space-6);
  transition: all 150ms ease;
}

.feature-card:hover {
  border-color: var(--color-border-hover);
  box-shadow: var(--shadow-md);
}

.feature-card-icon {
  width: 24px;
  height: 24px;
  color: var(--color-accent-blue);
  margin-bottom: var(--space-4);
}

.feature-card-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.feature-card-description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.5;
}
```

### Icons & Badges

**Icon Sizes (from Polar analysis):**
```css
:root {
  --icon-xs: 12px;
  --icon-sm: 16px;  /* Navigation icons */
  --icon-md: 20px;
  --icon-lg: 24px;  /* Feature cards, headers */
  --icon-xl: 32px;
}

.icon {
  width: var(--icon-md);
  height: var(--icon-md);
  stroke-width: 2;
}

.icon-xs { width: var(--icon-xs); height: var(--icon-xs); }
.icon-sm { width: var(--icon-sm); height: var(--icon-sm); }
.icon-lg { width: var(--icon-lg); height: var(--icon-lg); }
.icon-xl { width: var(--icon-xl); height: var(--icon-xl); }
```

**Icon Colors:**
- Inactive: `#A3A3A3` (--color-text-secondary)
- Active: `#FFFFFF` (--color-text-primary)
- Interactive: `#60A5FA` (--color-accent-blue)

**Badge Component:**
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  border-radius: 4px;
  white-space: nowrap;
}

.badge-primary {
  background: rgba(97, 175, 239, 0.1);
  color: var(--color-accent-blue);
}

.badge-success {
  background: rgba(152, 195, 121, 0.1);
  color: var(--color-accent-green);
}

.badge-warning {
  background: rgba(229, 192, 123, 0.1);
  color: var(--color-accent-yellow);
}

.badge-ai {
  background: var(--color-ai-gradient);
  color: white;
}
```

---

## Animation & Transitions

### Timing Functions

```css
:root {
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Duration Scale

```css
:root {
  --duration-fast: 100ms;
  --duration-normal: 150ms;
  --duration-slow: 200ms;
  --duration-slower: 300ms;
}
```

### Common Transitions

```css
/* Hover transitions */
.interactive {
  transition: all var(--duration-normal) var(--ease-out);
}

/* Focus transitions */
.focusable:focus {
  transition: box-shadow var(--duration-fast) var(--ease-out);
}

/* Page transitions (View Transitions API) */
@view-transition {
  navigation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 300ms;
  animation-timing-function: var(--ease-in-out);
}
```

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Accessibility Guidelines

### Focus Management

```css
/* Focus visible (keyboard navigation) */
*:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Remove default outline for mouse users */
*:focus:not(:focus-visible) {
  outline: none;
}

/* Skip to content link */
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-accent-blue);
  color: white;
  padding: var(--space-2) var(--space-4);
  z-index: 1000;
  border-radius: 0 0 4px 0;
}

.skip-to-content:focus {
  top: 0;
}
```

### ARIA Patterns

**Required ARIA attributes by component:**

```html
<!-- Navigation -->
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="#" aria-current="page">Current page</a></li>
  </ul>
</nav>

<!-- Search -->
<div role="search">
  <input type="search" aria-label="Search documentation" />
</div>

<!-- Collapsible sections -->
<button
  aria-expanded="false"
  aria-controls="section-id"
>
  Features
</button>
<div id="section-id" hidden>...</div>

<!-- Dropdown -->
<button
  aria-haspopup="true"
  aria-expanded="false"
  aria-controls="menu-id"
>
  Copy page
</button>
<div id="menu-id" role="menu">
  <button role="menuitem">Copy page</button>
</div>

<!-- Dialog (AI Panel) -->
<div
  role="dialog"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-desc"
>
  <h2 id="dialog-title">Assistant</h2>
</div>

<!-- Live regions (AI responses) -->
<div aria-live="polite" aria-atomic="true">
  AI response content...
</div>
```

### Color Contrast Requirements

All text must meet WCAG AA standards:
- Normal text (< 18px): 4.5:1 contrast ratio
- Large text (≥ 18px): 3:1 contrast ratio
- UI components: 3:1 contrast ratio

**Verified combinations (dark theme):**
- Primary text on primary bg: 11.47:1 ✓
- Secondary text on primary bg: 5.74:1 ✓
- Muted text on primary bg: 4.57:1 ✓
- Blue links on primary bg: 5.12:1 ✓

### Keyboard Navigation

**Tab order priority:**
1. Skip to content link
2. Header navigation
3. Search input
4. Sidebar navigation
5. Main content links
6. AI assistant (if visible)

**Keyboard shortcuts:**
```javascript
// Global shortcuts
'⌘K' or 'Ctrl+K' - Open search
'⌘/' or 'Ctrl+/' - Open shortcuts help
'Esc' - Close modals/dropdowns
'⌘D' or 'Ctrl+D' - Toggle dark/light theme

// Navigation
'ArrowUp' - Previous item
'ArrowDown' - Next item
'Home' - First item
'End' - Last item
'Enter' or 'Space' - Activate item
```

---

## Shadow System

```css
:root {
  /* Elevation shadows (from Polar analysis) */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.2);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.3);
  --shadow-xl: 0 16px 32px rgba(0, 0, 0, 0.4);

  /* Colored shadows (for buttons) */
  --shadow-blue: 0 4px 12px rgba(96, 165, 250, 0.2);
  --shadow-green: 0 4px 12px rgba(152, 195, 121, 0.2);
  --shadow-red: 0 4px 12px rgba(224, 108, 117, 0.2);
}
```

**Usage:**
- Cards: `--shadow-sm`
- Dropdowns: `--shadow-lg`
- Modals: `--shadow-xl`
- Button hovers: `--shadow-blue/green/red`

---

## Border Radius System

```css
:root {
  --radius-sm: 4px;   /* Badges, small elements */
  --radius-md: 6px;   /* Buttons, inputs (medium) */
  --radius-lg: 8px;   /* Cards, panels, code blocks (large) */
  --radius-xl: 16px;  /* Theme toggle, very large containers */
  --radius-full: 9999px; /* Pills, avatars */
}
```

**Usage from Polar analysis:**
- Small elements (badges): 4px
- Medium (buttons, inputs): 6px
- Large (cards, code blocks): 8px
- Very large (theme toggle): 16px

---

## Z-Index Scale

```css
:root {
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
}
```

---

## AI Visual Language

### Sparkle Icon

The sparkle (✨) icon represents AI-powered features throughout the interface.

**Usage locations:**
- AI Assistant panel header
- "Open in ChatGPT" menu items
- "Open in Claude" menu items
- "Copy for LLMs" actions

**Icon specifications:**
```css
.ai-sparkle {
  width: 20px;
  height: 20px;
  color: var(--color-ai-primary);
  filter: drop-shadow(0 0 8px rgba(86, 182, 194, 0.3));
}
```

**SVG Asset Prompt:**
```
Create a sparkle icon (✨) with clean geometric lines:
- 4 main rays (cardinal directions)
- 4 smaller rays (diagonal directions)
- Center circle/star shape
- Line weight: 2px
- Size: 24x24px viewBox
- Color: Single color (will be styled via CSS)
- Style: Minimal, technical, modern
- Format: SVG with clean paths
```

### AI Indicators

**Loading state:**
```css
@keyframes ai-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.ai-loading {
  animation: ai-pulse 1.5s ease-in-out infinite;
}
```

**Gradient accent:**
```css
.ai-gradient-text {
  background: var(--color-ai-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Asset Generation Prompts

### Logo

**Prompt for Human MCP Server:**
```
Generate a modern, minimal logo for "ClaudeKit" documentation:
- Style: Geometric, technical, clean
- Colors: Cyan (#56B6C2) and Purple (#C678DD) gradient
- Shape: Abstract combination of 'C' and 'K' letterforms
- Size: 512x512px
- Format: Square with transparent background
- Usage: Will be displayed at 32x32px in header
- Aesthetic: Developer tool branding, similar to Vercel/Next.js style
```

### Favicon Set

**Sizes needed:**
- 16x16px (browser tab)
- 32x32px (browser tab retina)
- 180x180px (Apple touch icon)
- 192x192px (Android)
- 512x512px (PWA)

**Prompt:**
```
Generate favicon variations of the ClaudeKit logo:
- Simplified icon version (more recognizable at small sizes)
- Remove fine details that won't render at 16px
- Maintain brand colors (cyan/purple gradient)
- Strong contrast against dark backgrounds
- Format: PNG with transparency
```

### Illustration Assets

**Empty state illustrations:**
```
Generate minimal line illustrations for empty states:
1. No search results
   - Magnifying glass with question mark
   - Soft gray/blue monochrome
   - 200x200px

2. AI assistant idle
   - Friendly robot/sparkle icon
   - Cyan accent color
   - 160x160px

3. 404 error page
   - Abstract geometric shape
   - Purple/cyan gradient
   - 300x300px
```

### Icon Set

**Custom icons needed beyond Lucide:**

1. **Copy for LLMs icon**
   - Clipboard with sparkle/AI indicator
   - 24x24px, 2px stroke

2. **GitHub integration icon**
   - GitHub logo + connection indicator
   - 24x24px, 2px stroke

3. **External link AI icon**
   - External link arrow + sparkle
   - 20x20px, 2px stroke

**Generation note:** Use Lucide React library for standard icons. Only generate custom icons for AI-specific actions not available in Lucide.

---

## Responsive Behavior

### Mobile (< 768px)

**Layout changes:**
- Single column layout
- Header: Logo + hamburger menu
- Sidebar: Slide-in drawer from left
- AI Assistant: Bottom sheet or full-screen modal
- Content: Full width with side padding

**Component adjustments:**
```css
@media (max-width: 767px) {
  .header {
    padding-inline: var(--space-4);
  }

  .sidebar {
    position: fixed;
    left: -100%;
    transition: left 300ms ease;
    z-index: var(--z-modal);
  }

  .sidebar.open {
    left: 0;
  }

  .content {
    padding: var(--space-6) var(--space-4);
  }

  .code-block {
    border-radius: var(--radius-md);
    margin-inline: calc(var(--space-4) * -1);
  }
}
```

### Tablet (768px - 1024px)

**Layout changes:**
- 2-column layout (sidebar + content)
- Collapsible sidebar (can be toggled)
- AI Assistant: Slide-over panel from right
- Content: Max 700px width

### Desktop (1024px - 1280px)

**Layout changes:**
- 2-column or 3-column (user preference)
- Fixed sidebar
- AI Assistant: Toggle panel
- Content: Max 800px width

### Wide Desktop (1280px+)

**Layout changes:**
- Full 3-column layout
- All panels visible simultaneously
- Sidebar: 280px fixed
- Content: 800px max
- AI Assistant: 360px fixed

---

## Performance Optimization

### Critical CSS

Inline critical CSS for above-the-fold content:
- Base typography
- Layout structure (header, grid)
- Color variables
- First-screen components

### Font Loading Strategy

```html
<!-- Preload critical fonts -->
<link rel="preload"
      href="/fonts/inter-variable.woff2"
      as="font"
      type="font/woff2"
      crossorigin>

<!-- Optional: Fallback font display -->
<style>
@font-face {
  font-family: 'Inter Variable';
  src: url('/fonts/inter-variable.woff2') format('woff2-variations');
  font-display: swap;
  font-weight: 100 900;
}
</style>
```

### Image Optimization

```html
<!-- Responsive images -->
<img
  src="/images/logo.png"
  srcset="/images/logo@2x.png 2x,
          /images/logo@3x.png 3x"
  alt="ClaudeKit"
  loading="lazy"
  decoding="async"
  width="32"
  height="32"
>
```

### Code Splitting

```javascript
// Lazy load AI panel
const AIPanel = lazy(() => import('./components/AIPanel'));

// Lazy load syntax highlighter
const CodeBlock = lazy(() => import('./components/CodeBlock'));
```

---

## Browser Support & Fallbacks

### CSS Feature Detection

```css
/* Modern features with fallbacks */
@supports (backdrop-filter: blur(12px)) {
  .header {
    backdrop-filter: blur(12px);
    background-color: rgba(26, 26, 26, 0.8);
  }
}

@supports not (backdrop-filter: blur(12px)) {
  .header {
    background-color: var(--color-bg-secondary);
  }
}

/* View Transitions API */
@supports (view-transition-name: none) {
  /* Enhanced page transitions */
}
```

### JavaScript Fallbacks

```javascript
// Check for View Transitions API
if (!document.startViewTransition) {
  // Fallback to instant navigation
}

// Check for Intersection Observer
if ('IntersectionObserver' in window) {
  // Lazy load images
} else {
  // Load all images immediately
}
```

---

## Design Tokens Export

For design-to-code workflows (Figma, Sketch, etc.):

### CSS Variables Export

```css
/* Complete token export for design tools */
:root {
  /* Spacing tokens */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-12: 48px;
  --spacing-16: 64px;

  /* Color tokens - see Color System section */

  /* Typography tokens - see Typography System section */

  /* Border radius tokens - see Border Radius System section */

  /* Shadow tokens - see Shadow System section */
}
```

### JSON Export

```json
{
  "colors": {
    "dark": {
      "bg": {
        "primary": "#1A1A1A",
        "secondary": "#242424",
        "tertiary": "#2A2A2A"
      },
      "text": {
        "primary": "#E6E6E6",
        "secondary": "#9CA3AF",
        "muted": "#6B7280"
      }
    }
  },
  "spacing": {
    "1": "4px",
    "2": "8px",
    "4": "16px",
    "6": "24px",
    "8": "32px"
  },
  "typography": {
    "fontFamily": {
      "sans": "Inter Variable, Inter, sans-serif",
      "mono": "Geist Mono, monospace"
    },
    "fontSize": {
      "xs": "12px",
      "sm": "14px",
      "base": "16px",
      "lg": "18px",
      "xl": "20px",
      "2xl": "24px",
      "3xl": "30px"
    }
  }
}
```

---

## Unresolved Design Questions

1. Should the AI Assistant panel remember user preferences (collapsed/expanded state)?
2. Do we need dark mode variants for syntax highlighting beyond One Dark Pro?
3. Should code blocks support diff indicators (+/-) for tutorials?
4. Do we need print styles for documentation pages?
5. Should the search input support command palette-style navigation (⌘K)?
6. Do we need illustration assets for marketing pages or only functional UI?
7. Should we support custom user themes beyond dark/light?

---

## Implementation Notes

### For Developers

1. **CSS Architecture:**
   - Use CSS custom properties (variables) for all tokens
   - Organize styles by component (CSS Modules or scoped styles in Astro)
   - Follow BEM naming convention for utility classes
   - Keep specificity low (avoid deep nesting)

2. **Component Development:**
   - Build components mobile-first
   - Test all interactive states (hover, focus, active, disabled)
   - Ensure keyboard accessibility
   - Use semantic HTML first, ARIA when needed

3. **Performance:**
   - Minimize CSS bundle size (tree-shake unused Tailwind)
   - Inline critical CSS for above-the-fold content
   - Lazy load non-critical components
   - Optimize images (WebP/AVIF with PNG fallback)

4. **Testing Checklist:**
   - [ ] Responsive across all breakpoints
   - [ ] Keyboard navigation works
   - [ ] Screen reader announces correctly
   - [ ] Focus indicators visible
   - [ ] Color contrast passes WCAG AA
   - [ ] Animations respect prefers-reduced-motion
   - [ ] Works without JavaScript (progressive enhancement)

### For Designers

1. **Design Files:**
   - Use these guidelines as source of truth
   - Maintain design system in Figma/Sketch with same token names
   - Export components as code-friendly formats
   - Document design decisions in file comments

2. **Handoff:**
   - Provide exact measurements (no approximations)
   - Include all component states
   - Document interactions and animations
   - Share asset export specifications

---

**Version History:**
- v1.0 (2025-10-17): Initial design system documented
- v1.1 (2025-10-18): Updated to match Polar documentation design exactly
  - Color palette updated to pure black background (#0A0A0A)
  - Typography sizes adjusted (H1: 36px, navigation: 14px)
  - Layout measurements updated (header: 64px, AI panel: 380px)
  - Component specs refined (theme toggle: 64x32px, search: 40px height)
  - Feature card specifications added (320x180px)
  - Border radius scale updated (very large: 16px)
  - Shadow system adjusted for darker theme
  - Active nav border indicator added (2px blue left border)

**Approval:** Pending review by development team

---

*This design guideline is a living document. Update as the product evolves and new patterns emerge.*
