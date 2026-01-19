---
title: "Phase 03: Expanded Sidebar Panel (Stage 2)"
status: pending
effort: 2h
---

# Phase 03: Expanded Sidebar Panel (Stage 2)

## Context Links

- [Plan Overview](./plan.md)
- [Phase 02: Input Bar](./phase-02-floating-input-bar.md)
- [Existing AIPanel.astro](/home/kai/claudekit/claudekit-docs/src/components/AIPanel.astro)

## Overview

**Priority**: P1 - Core conversation experience
**Status**: Pending
**Description**: Build the expanded sidebar panel that appears after user submits first query.

## Key Insights

- Sidebar overlays content (no layout shift)
- Header includes: title, expand icon, reset icon, close button
- Shows context indicator (user's question)
- Markdown-formatted responses with code blocks
- Source citations as clickable links
- Input field at bottom for follow-up questions

## Requirements

### Functional
- Panel slides in from right on first submission
- Header with "Assistant" title and action buttons
- Scrollable message area
- Markdown rendering for assistant responses
- Source citations displayed below response
- Input field for follow-up questions
- Close button and Escape key close panel

### Non-Functional
- 380px width on desktop (matches `--layout-ai-panel-width`)
- Full viewport height minus header
- Smooth slide-in animation (300ms)
- Scrollbar styled to match theme

## Visual Design Specification

```
┌──────────────────────────────────────┐
│ [sparkle] Assistant     [⤢] [↻] [✕] │  <- Header
├──────────────────────────────────────┤
│                                      │
│  ┌────────────────────────────────┐  │
│  │ You asked about...             │  │  <- User message
│  └────────────────────────────────┘  │
│                                      │
│  ┌────────────────────────────────┐  │
│  │ Here's what I found:           │  │  <- Assistant message
│  │                                │  │
│  │ 1. First point                 │  │
│  │ 2. Second point                │  │
│  │                                │  │
│  │ ─────────────────              │  │
│  │ Sources:                       │  │
│  │ • Quick Start Guide            │  │  <- Sources
│  │ • Installation                 │  │
│  └────────────────────────────────┘  │
│                                      │
├──────────────────────────────────────┤
│ [sparkle] Ask a follow-up...  [→]   │  <- Input area
└──────────────────────────────────────┘
```

**Dimensions**:
- Width: 380px (`--layout-ai-panel-width`)
- Height: `calc(100vh - var(--layout-header-height))`
- Header height: 56px
- Input area height: 72px

**Colors** (Dark Theme):
- Background: `var(--color-bg-secondary)`
- Border: `var(--color-border-hover)`
- User message bg: `var(--color-accent-blue)`
- Assistant message bg: `var(--color-bg-tertiary)`

## Related Code Files

### Files to Create
- `src/components/assistant/AssistantSidebar.tsx`
- `src/components/assistant/AssistantMessage.tsx`
- `src/components/assistant/AssistantSources.tsx`

### Files to Modify
- `src/components/assistant/DocsAssistant.tsx`
- `src/styles/global.css`

## Implementation Steps

### Step 1: Create Message Component

```typescript
// src/components/assistant/AssistantMessage.tsx
import { AssistantSources } from './AssistantSources';
import type { Message } from './types';

interface AssistantMessageProps {
  message: Message;
}

export function AssistantMessage({ message }: AssistantMessageProps) {
  const isUser = message.role === 'user';
  const isSystem = message.role === 'system';

  return (
    <div className={`assistant-message assistant-message--${message.role}`}>
      <div className="assistant-message-content">
        {/* Simple text rendering - Phase 04 will add markdown */}
        <p>{message.content}</p>

        {/* Source citations for assistant messages */}
        {message.sources && message.sources.length > 0 && (
          <AssistantSources sources={message.sources} />
        )}
      </div>
    </div>
  );
}
```

### Step 2: Create Sources Component

```typescript
// src/components/assistant/AssistantSources.tsx
import type { Source } from './types';

interface AssistantSourcesProps {
  sources: Source[];
}

export function AssistantSources({ sources }: AssistantSourcesProps) {
  if (!sources.length) return null;

  // Convert API URL to docs page URL
  const formatUrl = (url: string) => {
    // Remove .md extension and ensure /docs prefix
    const cleanUrl = url.replace('.md', '');
    return cleanUrl.startsWith('/docs') ? cleanUrl : `/docs${cleanUrl}`;
  };

  return (
    <div className="assistant-sources">
      <span className="assistant-sources-label">Sources:</span>
      <ul className="assistant-sources-list">
        {sources.slice(0, 3).map((source, index) => (
          <li key={index}>
            <a
              href={formatUrl(source.url)}
              className="assistant-source-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {source.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Step 3: Create Sidebar Component

```typescript
// src/components/assistant/AssistantSidebar.tsx
import { useRef, useEffect } from 'react';
import { AssistantMessage } from './AssistantMessage';
import type { Message, AssistantStage } from './types';

interface AssistantSidebarProps {
  stage: AssistantStage;
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  inputValue: string;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  onClose: () => void;
  onReset: () => void;
}

export function AssistantSidebar({
  stage,
  messages,
  isLoading,
  error,
  inputValue,
  onInputChange,
  onSubmit,
  onClose,
  onReset,
}: AssistantSidebarProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when sidebar opens
  useEffect(() => {
    if (stage === 'expanded') {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [stage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSubmit();
    }
  };

  if (stage !== 'expanded') return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="assistant-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar Panel */}
      <aside
        className="assistant-sidebar"
        role="dialog"
        aria-modal="true"
        aria-labelledby="assistant-title"
      >
        {/* Header */}
        <header className="assistant-sidebar-header">
          <div className="assistant-sidebar-title" id="assistant-title">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
            <span>Assistant</span>
          </div>

          <div className="assistant-sidebar-actions">
            {/* Expand button (future: open in new panel) */}
            <button
              type="button"
              className="assistant-action-btn"
              aria-label="Expand assistant"
              title="Expand"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </button>

            {/* Reset button */}
            <button
              type="button"
              className="assistant-action-btn"
              onClick={onReset}
              aria-label="Reset conversation"
              title="Reset"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
            </button>

            {/* Close button */}
            <button
              type="button"
              className="assistant-action-btn"
              onClick={onClose}
              aria-label="Close assistant"
              title="Close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        {/* Messages */}
        <div className="assistant-messages">
          {messages.map((message) => (
            <AssistantMessage key={message.id} message={message} />
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="assistant-message assistant-message--assistant">
              <div className="assistant-message-content assistant-loading">
                <span className="assistant-loading-dot" />
                <span className="assistant-loading-dot" />
                <span className="assistant-loading-dot" />
              </div>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="assistant-error">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="assistant-sidebar-input">
          <form onSubmit={handleSubmit} className="assistant-sidebar-form">
            <svg
              className="assistant-sidebar-input-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>

            <input
              ref={inputRef}
              type="text"
              className="assistant-sidebar-input-field"
              placeholder="Ask a follow-up..."
              value={inputValue}
              onChange={(e) => onInputChange(e.target.value)}
              disabled={isLoading}
              maxLength={500}
            />

            <button
              type="submit"
              className="assistant-send-btn"
              disabled={isLoading || !inputValue.trim()}
              aria-label="Send message"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}
```

### Step 4: Add CSS Styles

Add to `src/styles/global.css`:

```css
/* ============================================
   AI ASSISTANT - SIDEBAR PANEL
   ============================================ */

/* Backdrop */
.assistant-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: var(--z-modal-backdrop);
  opacity: 1;
  transition: opacity var(--duration-slower) var(--ease-out);
}

/* Sidebar */
.assistant-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: var(--layout-ai-panel-width);
  height: 100vh;
  background-color: var(--color-bg-secondary);
  border-left: 1px solid var(--color-border-hover);
  display: flex;
  flex-direction: column;
  z-index: var(--z-modal);
  transform: translateX(0);
  transition: transform var(--duration-slower) var(--ease-in-out);
}

/* Header */
.assistant-sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-5);
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
  height: 56px;
}

.assistant-sidebar-title {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
}

.assistant-sidebar-title svg {
  color: var(--color-ai-primary);
}

.assistant-sidebar-actions {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.assistant-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.assistant-action-btn:hover {
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-primary);
}

.assistant-action-btn:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* Messages */
.assistant-messages {
  flex: 1;
  overflow-y: auto;
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

/* Message */
.assistant-message {
  display: flex;
  flex-direction: column;
}

.assistant-message-content {
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
}

.assistant-message--user .assistant-message-content {
  background-color: var(--color-accent-blue);
  color: white;
  margin-left: auto;
  max-width: 85%;
  border-bottom-right-radius: var(--radius-sm);
}

.assistant-message--assistant .assistant-message-content {
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  max-width: 90%;
  border-bottom-left-radius: var(--radius-sm);
}

.assistant-message--system .assistant-message-content {
  background-color: rgba(86, 182, 194, 0.1);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  text-align: center;
  font-size: var(--text-xs);
}

/* Loading */
.assistant-loading {
  display: flex;
  gap: var(--space-2);
  padding: var(--space-4) !important;
}

.assistant-loading-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-text-muted);
  animation: assistant-bounce 1.4s infinite ease-in-out both;
}

.assistant-loading-dot:nth-child(1) { animation-delay: -0.32s; }
.assistant-loading-dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes assistant-bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

/* Error */
.assistant-error {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3);
  background-color: rgba(224, 108, 117, 0.1);
  border: 1px solid var(--color-accent-red);
  border-radius: var(--radius-md);
  color: var(--color-accent-red);
  font-size: var(--text-sm);
}

/* Sources */
.assistant-sources {
  margin-top: var(--space-3);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);
}

.assistant-sources-label {
  display: block;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
}

.assistant-sources-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.assistant-source-link {
  font-size: var(--text-xs);
  color: var(--color-accent-blue);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.assistant-source-link::before {
  content: '\u2022';
  color: var(--color-text-muted);
}

.assistant-source-link:hover {
  text-decoration: underline;
  color: var(--color-accent-cyan);
}

/* Input Area */
.assistant-sidebar-input {
  padding: var(--space-4);
  border-top: 1px solid var(--color-border);
  background-color: var(--color-bg-secondary);
  flex-shrink: 0;
}

.assistant-sidebar-form {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color var(--duration-normal) var(--ease-out);
}

.assistant-sidebar-form:focus-within {
  border-color: var(--color-ai-primary);
}

.assistant-sidebar-input-icon {
  flex-shrink: 0;
  color: var(--color-ai-primary);
  opacity: 0.7;
}

.assistant-sidebar-input-field {
  flex: 1;
  padding: var(--space-1) 0;
  background: transparent;
  border: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-text-primary);
}

.assistant-sidebar-input-field::placeholder {
  color: var(--color-text-muted);
}

.assistant-send-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  background-color: var(--color-accent-blue);
  border: none;
  border-radius: var(--radius-md);
  color: white;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-out);
  flex-shrink: 0;
}

.assistant-send-btn:hover:not(:disabled) {
  background-color: var(--color-accent-cyan);
}

.assistant-send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .assistant-sidebar,
  .assistant-backdrop {
    transition: none;
  }

  .assistant-loading-dot {
    animation: none;
    opacity: 0.5;
  }
}
```

### Step 5: Create Suggested Questions Component (UI/UX Validation)

```typescript
// src/components/assistant/AssistantSuggestions.tsx
interface AssistantSuggestionsProps {
  onSelect: (question: string) => void;
}

const SUGGESTED_QUESTIONS = [
  "How do I get started with ClaudeKit?",
  "What are Claude Code skills?",
  "How do I configure hooks?",
];

export function AssistantSuggestions({ onSelect }: AssistantSuggestionsProps) {
  return (
    <div className="assistant-suggestions">
      <span className="assistant-suggestions-label">Try asking:</span>
      <div className="assistant-suggestions-list">
        {SUGGESTED_QUESTIONS.map((question) => (
          <button
            key={question}
            type="button"
            className="assistant-suggestion-chip"
            onClick={() => onSelect(question)}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}
```

**CSS for Suggestions** (add to global.css):
```css
/* Suggested Questions */
.assistant-suggestions {
  padding: var(--space-4);
}

.assistant-suggestions-label {
  display: block;
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}

.assistant-suggestions-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.assistant-suggestion-chip {
  padding: var(--space-2) var(--space-3);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  text-align: left;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.assistant-suggestion-chip:hover {
  background: var(--color-bg-secondary);
  border-color: var(--color-ai-primary);
  color: var(--color-text-primary);
}

.assistant-suggestion-chip:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
```

### Step 6: Add Focus Trap (Accessibility Critical)

```typescript
// Add to AssistantSidebar.tsx
import { useRef, useEffect } from 'react';

export function AssistantSidebar({ stage, ...props }: AssistantSidebarProps) {
  const sidebarRef = useRef<HTMLElement>(null);

  // Focus trap implementation
  useEffect(() => {
    if (stage !== 'expanded') return;

    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const focusableSelector = 'button, input, [tabindex]:not([tabindex="-1"])';
    const focusableElements = sidebar.querySelectorAll(focusableSelector);

    if (!focusableElements.length) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift+Tab: if on first element, go to last
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab: if on last element, go to first
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Focus first element on open
    setTimeout(() => firstElement.focus(), 100);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [stage]);

  // Add ref to aside element
  return (
    <aside
      ref={sidebarRef}
      className="assistant-sidebar"
      // ...rest
    >
  );
}
```

### Step 7: Update DocsAssistant

```typescript
// src/components/assistant/DocsAssistant.tsx
import { useEffect } from 'react';
import { useAssistant } from './use-assistant';
import { AssistantInputBar } from './AssistantInputBar';
import { AssistantSidebar } from './AssistantSidebar';

export function DocsAssistant() {
  const { state, setInput, submit, toggle, close, reset } = useAssistant();

  // Keyboard shortcuts
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

  // Lock body scroll when sidebar open
  useEffect(() => {
    if (state.stage === 'expanded') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [state.stage]);

  return (
    <>
      <AssistantInputBar
        value={state.inputValue}
        onChange={setInput}
        onSubmit={submit}
        isLoading={state.isLoading}
        isExpanded={state.stage === 'expanded'}
      />

      <AssistantSidebar
        stage={state.stage}
        messages={state.messages}
        isLoading={state.isLoading}
        error={state.error}
        inputValue={state.inputValue}
        onInputChange={setInput}
        onSubmit={submit}
        onClose={close}
        onReset={reset}
      />
    </>
  );
}
```

## Todo List

- [ ] Create `AssistantMessage.tsx` component
- [ ] Create `AssistantSources.tsx` component
- [ ] Create `AssistantSidebar.tsx` component
- [ ] Create `AssistantSuggestions.tsx` component (NEW - UI/UX validation)
- [ ] Add sidebar CSS styles to `global.css`
- [ ] Add focus trap implementation (CRITICAL - accessibility)
- [ ] Add cursor-pointer to all clickable elements
- [ ] Update `DocsAssistant.tsx` to render sidebar
- [ ] Test sidebar opens on form submission
- [ ] Test messages display correctly
- [ ] Test sources render as clickable links
- [ ] Test suggested questions trigger queries
- [ ] Test reset button clears conversation
- [ ] Test close button and Escape key
- [ ] Test Tab key navigation (focus trap)
- [ ] Test body scroll lock when sidebar open
- [ ] Verify accessibility (focus trap, ARIA)

## Success Criteria

- [ ] Sidebar appears when user submits first query
- [ ] Messages display with correct styling (user right, assistant left)
- [ ] Loading dots animate while waiting for response
- [ ] Error messages display with red styling
- [ ] Sources appear as clickable links below response
- [ ] Reset button clears conversation and storage
- [ ] Close button and Escape key close sidebar
- [ ] Backdrop click closes sidebar

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Focus trap missing | Medium | Medium | Add focus-trap library or manual implementation |
| Scroll position lost | Low | Low | Restore scroll on close |
| Memory leak from event listeners | Low | High | Cleanup in useEffect return |

## Security Considerations

- Links use `rel="noopener noreferrer"` for external links
- Source URLs are sanitized before rendering
- User input is trimmed and length-limited

## Next Steps

- Phase 04: Add smooth animations for stage transitions
