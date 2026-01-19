---
title: "Phase 02: Floating Input Bar (Stage 1)"
status: pending
effort: 1h
---

# Phase 02: Floating Input Bar (Stage 1)

## Context Links

- [Plan Overview](./plan.md)
- [Phase 01: Architecture](./phase-01-component-architecture.md)
- [DocsLayout.astro](/home/kai/claudekit/claudekit-docs/src/layouts/DocsLayout.astro)

## Overview

**Priority**: P1 - User's first touchpoint with assistant
**Status**: Pending
**Description**: Build the floating input bar that appears at the bottom of the content area in idle state.

## Key Insights

- Position must be relative to content area, NOT viewport
- Use `position: sticky` with `bottom: 0` inside content wrapper
- Design matches Polar.sh aesthetics: subtle, professional, dark theme
- Keyboard hint (Cmd+I) provides discoverability

## Requirements

### Functional
- Input bar fixed at bottom of content area
- Sparkle icon on left, input field in center, keyboard hint on right
- Placeholder: "Ask a question..."
- Submit on Enter key
- Transitions to Stage 2 (sidebar) on submit

### Non-Functional
- 60fps animations
- Touch-friendly (min 44px height)
- Accessible (ARIA labels, focus states)
- Respects prefers-reduced-motion

## Visual Design Specification

```
┌─────────────────────────────────────────────────────────────────────┐
│  [sparkle-icon]  Ask a question...                      [Cmd+I]    │
└─────────────────────────────────────────────────────────────────────┘
```

**Dimensions**:
- Height: 48px
- Max width: 600px (centered)
- Border radius: 12px (`--radius-lg`)
- Margin from content bottom: 24px (`--space-6`)

**Colors** (Dark Theme):
- Background: `var(--color-bg-secondary)` (#111111)
- Border: `var(--color-border)` (#262626)
- Text: `var(--color-text-secondary)` (#A3A3A3)
- Icon: `var(--color-ai-primary)` (#56B6C2)

**States**:
- Default: Subtle shadow, 1px border
- Hover: Border brightens to `--color-border-hover`
- Focus: Blue ring (`--color-border-focus`), elevated shadow
- Disabled: Reduced opacity during loading

## Related Code Files

### Files to Create
- `src/components/assistant/AssistantInputBar.tsx`

### Files to Modify
- `src/components/assistant/DocsAssistant.tsx` - Integrate input bar
- `src/layouts/DocsLayout.astro` - Add container positioning

## Implementation Steps

### Step 1: Create Input Bar Component

```typescript
// src/components/assistant/AssistantInputBar.tsx
import { useRef, useEffect } from 'react';

interface AssistantInputBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  isExpanded: boolean;
}

export function AssistantInputBar({
  value,
  onChange,
  onSubmit,
  isLoading,
  isExpanded,
}: AssistantInputBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !isLoading) {
      onSubmit();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Hide when expanded (sidebar takes over)
  if (isExpanded) return null;

  return (
    <div className="assistant-input-bar-container">
      <form
        className="assistant-input-bar"
        onSubmit={handleSubmit}
        role="search"
        aria-label="Ask AI Assistant"
      >
        {/* Sparkle Icon */}
        <svg
          className="assistant-sparkle-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          className="assistant-input"
          placeholder="Ask a question..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          maxLength={500}
          aria-label="Ask a question about ClaudeKit documentation"
        />

        {/* Keyboard Hint */}
        <kbd className="assistant-kbd">
          <span className="assistant-kbd-symbol">
            {navigator.platform.includes('Mac') ? '\u2318' : 'Ctrl'}
          </span>
          <span>I</span>
        </kbd>
      </form>
    </div>
  );
}
```

### Step 2: Add CSS Styles

Add to `src/styles/global.css`:

```css
/* ============================================
   AI ASSISTANT - FLOATING INPUT BAR
   ============================================ */

.assistant-input-bar-container {
  position: sticky;
  bottom: var(--space-6);
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 0 var(--space-4);
  z-index: var(--z-sticky);
  pointer-events: none;
}

.assistant-input-bar {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  max-width: 600px;
  height: 48px;
  padding: 0 var(--space-4);
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  transition:
    border-color var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
  pointer-events: auto;
}

.assistant-input-bar:hover {
  border-color: var(--color-border-hover);
}

.assistant-input-bar:focus-within {
  border-color: var(--color-border-focus);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1),
    0 0 0 3px rgba(96, 165, 250, 0.1);
}

.assistant-sparkle-icon {
  flex-shrink: 0;
  color: var(--color-ai-primary);
  filter: drop-shadow(0 0 4px rgba(86, 182, 194, 0.3));
}

.assistant-input {
  flex: 1;
  height: 100%;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-text-primary);
}

.assistant-input::placeholder {
  color: var(--color-text-muted);
}

.assistant-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.assistant-kbd {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: var(--space-1) var(--space-2);
  background-color: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  white-space: nowrap;
}

.assistant-kbd-symbol {
  font-size: 11px;
}

/* Responsive - Mobile */
@media (max-width: 640px) {
  .assistant-input-bar-container {
    padding: 0 var(--space-3);
    bottom: var(--space-4);
  }

  .assistant-input-bar {
    height: 44px;
    padding: 0 var(--space-3);
  }

  .assistant-kbd {
    display: none;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .assistant-input-bar {
    transition: none;
  }
}
```

### Step 3: Update DocsAssistant to Include Input Bar

```typescript
// src/components/assistant/DocsAssistant.tsx
import { useEffect } from 'react';
import { useAssistant } from './use-assistant';
import { AssistantInputBar } from './AssistantInputBar';

export function DocsAssistant() {
  const { state, setInput, submit, toggle, close, reset } = useAssistant();

  // Keyboard shortcut: Cmd/Ctrl + I
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'i') {
        e.preventDefault();
        toggle();
      }
      if (e.key === 'Escape' && state.stage === 'expanded') {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggle, close, state.stage]);

  return (
    <>
      <AssistantInputBar
        value={state.inputValue}
        onChange={setInput}
        onSubmit={submit}
        isLoading={state.isLoading}
        isExpanded={state.stage === 'expanded'}
      />
      {/* Phase 03: Sidebar component will be added here */}
    </>
  );
}
```

### Step 4: Update DocsLayout.astro

```astro
---
import BaseLayout from './BaseLayout.astro';
import Header from '../components/Header.astro';
import Sidebar from '../components/Sidebar.astro';
import Search from '../components/Search.astro';
import { DocsAssistant } from '../components/assistant/DocsAssistant';
import TableOfContents from '../components/TableOfContents';
import CopyForLLMs from '../components/CopyForLLMs.tsx';
import type { Locale } from '../i18n/locales';

// ... rest of props and frontmatter
---

<BaseLayout title={title} description={description} locale={locale} slug={slug}>
  <div class="docs-layout">
    <Sidebar currentPath={currentPath} />

    <div class="main-wrapper">
      <Header />

      <div class="content-wrapper">
        <main class="content-area" data-pagefind-body>
          {/* ... existing content ... */}
          <article class="prose" data-pagefind-meta={`title:${title}`}>
            <slot />
          </article>

          {/* Assistant floating input bar - inside content area */}
          <DocsAssistant client:load />
        </main>

        {headings.length > 0 && (
          <TableOfContents headings={headings} client:load />
        )}
      </div>
    </div>
  </div>

  <Search />
</BaseLayout>
```

## Todo List

- [ ] Create `AssistantInputBar.tsx` component
- [ ] Add CSS styles to `global.css`
- [ ] Update `DocsAssistant.tsx` to render input bar
- [ ] Update `DocsLayout.astro` to use new component
- [ ] Remove old `FloatingChat` import from layout
- [ ] Test positioning at bottom of content
- [ ] Test keyboard shortcut (Cmd+I)
- [ ] Test form submission
- [ ] Test mobile responsive behavior
- [ ] Verify accessibility (screen reader, keyboard nav)

## Success Criteria

- [ ] Input bar appears at bottom of content area
- [ ] Sparkle icon, input field, and kbd hint visible
- [ ] Hover state changes border color
- [ ] Focus state shows blue ring
- [ ] Enter key submits form
- [ ] Mobile: kbd hint hidden, smaller padding
- [ ] No layout shift when input bar appears

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Sticky positioning conflicts | Medium | Medium | Test across all page lengths |
| Z-index layering issues | Low | Low | Use design system z-index scale |
| Mobile keyboard overlap | Medium | Medium | Test on real devices |

## Security Considerations

- Input has maxLength (500) to prevent abuse
- Form prevents default to control submission
- No direct DOM manipulation

## Next Steps

- Phase 03: Build the expanded sidebar panel
