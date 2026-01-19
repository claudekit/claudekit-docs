---
title: "Phase 04: Animation & Transitions"
status: pending
effort: 1h
---

# Phase 04: Animation & Transitions

## Context Links

- [Plan Overview](./plan.md)
- [Phase 03: Sidebar](./phase-03-expanded-sidebar.md)
- [Design System Animation Tokens](/home/kai/claudekit/claudekit-docs/src/styles/global.css)

## Overview

**Priority**: P2 - Polish and UX refinement
**Status**: Pending
**Description**: Add smooth animations for Stage 1 → Stage 2 transition, entrance/exit effects, and micro-interactions.

## Key Insights

- Use CSS transforms for 60fps animations
- Hardware-accelerated properties: `transform`, `opacity`
- Respect `prefers-reduced-motion`
- Design system provides timing: `--duration-slower` (300ms), `--ease-in-out`

## Requirements

### Functional
- Input bar fades/morphs into sidebar on first submission
- Sidebar slides in from right edge
- Backdrop fades in
- Messages animate in sequentially
- Loading dots bounce animation

### Non-Functional
- 60fps performance target
- Reduced motion: instant transitions
- No JavaScript for core animations (CSS-only where possible)
- Staggered animations for message list

## Animation Specification

### Stage 1 → Stage 2 Transition

```
BEFORE (Idle):
┌─────────────────────────────────────────────┐
│                 Content                      │
│                                             │
│                                             │
├─────────────────────────────────────────────┤
│ [sparkle] Ask a question...       [Cmd+I]   │  <- Visible
└─────────────────────────────────────────────┘

AFTER (Expanded):
┌──────────────────────────┬──────────────────┐
│                          │    Sidebar       │
│        Content           │    Panel         │
│                          │                  │
│        (dimmed)          │   [messages]     │
│                          │                  │
│                          ├──────────────────┤
│                          │ [input field]    │
└──────────────────────────┴──────────────────┘
   Input bar: Hidden        Sidebar: Slide in
```

### Timing Sequence

1. **T+0ms**: User clicks submit
2. **T+0ms**: Input bar begins fade out (150ms)
3. **T+50ms**: Backdrop begins fade in (200ms)
4. **T+100ms**: Sidebar begins slide in (300ms)
5. **T+300ms**: User message appears (200ms)
6. **T+400ms**: Loading indicator appears

### CSS Keyframes

```css
/* Sidebar entrance */
@keyframes assistant-slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Sidebar exit */
@keyframes assistant-slide-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

/* Backdrop fade */
@keyframes assistant-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Message entrance (staggered) */
@keyframes assistant-message-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Input bar morph-out */
@keyframes assistant-input-out {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
  }
}
```

## Related Code Files

### Files to Modify
- `src/styles/global.css` - Add keyframes and animation classes
- `src/components/assistant/AssistantSidebar.tsx` - Add animation states
- `src/components/assistant/AssistantInputBar.tsx` - Add exit animation
- `src/components/assistant/AssistantMessage.tsx` - Add entrance animation

## Implementation Steps

### Step 1: Add Keyframes to global.css

```css
/* ============================================
   AI ASSISTANT - ANIMATIONS
   ============================================ */

/* Sidebar slide in/out */
@keyframes assistant-slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes assistant-slide-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

/* Backdrop fade */
@keyframes assistant-backdrop-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes assistant-backdrop-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

/* Message entrance */
@keyframes assistant-message-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Input bar exit */
@keyframes assistant-input-out {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
}

/* Apply animations */
.assistant-sidebar {
  animation: assistant-slide-in var(--duration-slower) var(--ease-out) forwards;
}

.assistant-sidebar.closing {
  animation: assistant-slide-out var(--duration-slower) var(--ease-in) forwards;
}

.assistant-backdrop {
  animation: assistant-backdrop-in var(--duration-slow) var(--ease-out) forwards;
}

.assistant-backdrop.closing {
  animation: assistant-backdrop-out var(--duration-slow) var(--ease-in) forwards;
}

.assistant-message {
  animation: assistant-message-in var(--duration-slow) var(--ease-out) forwards;
}

/* Staggered message entrance */
.assistant-message:nth-child(1) { animation-delay: 0ms; }
.assistant-message:nth-child(2) { animation-delay: 50ms; }
.assistant-message:nth-child(3) { animation-delay: 100ms; }
.assistant-message:nth-child(4) { animation-delay: 150ms; }
.assistant-message:nth-child(5) { animation-delay: 200ms; }

/* New messages (added dynamically) */
.assistant-message.new {
  animation: assistant-message-in var(--duration-slow) var(--ease-out) forwards;
}

/* Input bar exit animation */
.assistant-input-bar-container.exiting {
  animation: assistant-input-out var(--duration-normal) var(--ease-in) forwards;
  pointer-events: none;
}

/* Reduced motion - instant transitions */
@media (prefers-reduced-motion: reduce) {
  .assistant-sidebar,
  .assistant-backdrop,
  .assistant-message,
  .assistant-input-bar-container {
    animation: none !important;
    transition: none !important;
  }

  .assistant-sidebar {
    transform: translateX(0);
    opacity: 1;
  }

  .assistant-sidebar.closing {
    display: none;
  }

  .assistant-backdrop {
    opacity: 1;
  }

  .assistant-backdrop.closing {
    display: none;
  }
}
```

### Step 2: Update Sidebar with Close Animation

```typescript
// src/components/assistant/AssistantSidebar.tsx
import { useState, useRef, useEffect } from 'react';
// ... other imports

export function AssistantSidebar({
  stage,
  // ... other props
  onClose,
}: AssistantSidebarProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to complete
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Match --duration-slower
  };

  const handleBackdropClick = () => {
    handleClose();
  };

  // Reset closing state when stage changes
  useEffect(() => {
    if (stage !== 'expanded') {
      setIsClosing(false);
    }
  }, [stage]);

  if (stage !== 'expanded' && !isClosing) return null;

  return (
    <>
      <div
        className={`assistant-backdrop ${isClosing ? 'closing' : ''}`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      <aside
        className={`assistant-sidebar ${isClosing ? 'closing' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="assistant-title"
      >
        {/* ... header with handleClose */}
        <header className="assistant-sidebar-header">
          {/* ... */}
          <button
            type="button"
            className="assistant-action-btn"
            onClick={handleClose}
            aria-label="Close assistant"
          >
            {/* X icon */}
          </button>
        </header>

        {/* ... rest of component */}
      </aside>
    </>
  );
}
```

### Step 3: Update Input Bar with Exit Animation

```typescript
// src/components/assistant/AssistantInputBar.tsx
import { useState, useEffect } from 'react';

export function AssistantInputBar({
  // ... props
  isExpanded,
}: AssistantInputBarProps) {
  const [isExiting, setIsExiting] = useState(false);

  // Trigger exit animation when expanding
  useEffect(() => {
    if (isExpanded && !isExiting) {
      setIsExiting(true);
    }
    if (!isExpanded) {
      setIsExiting(false);
    }
  }, [isExpanded]);

  // Don't render after exit animation completes
  if (isExpanded && !isExiting) return null;

  return (
    <div className={`assistant-input-bar-container ${isExiting ? 'exiting' : ''}`}>
      {/* ... form content */}
    </div>
  );
}
```

### Step 4: Add Message Animation Class

```typescript
// src/components/assistant/AssistantMessage.tsx
import { useEffect, useState } from 'react';

export function AssistantMessage({ message }: AssistantMessageProps) {
  const [isNew, setIsNew] = useState(true);

  // Remove "new" class after animation
  useEffect(() => {
    const timer = setTimeout(() => setIsNew(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`assistant-message assistant-message--${message.role} ${isNew ? 'new' : ''}`}>
      {/* ... content */}
    </div>
  );
}
```

### Step 5: Add Micro-interactions

```css
/* Sparkle icon pulse on hover */
.assistant-sparkle-icon {
  transition: transform var(--duration-normal) var(--ease-out);
}

.assistant-input-bar:hover .assistant-sparkle-icon {
  transform: scale(1.1);
}

.assistant-input-bar:focus-within .assistant-sparkle-icon {
  animation: sparkle-pulse 1.5s ease-in-out infinite;
}

@keyframes sparkle-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

/* Send button hover effect */
.assistant-send-btn {
  transition:
    background-color var(--duration-normal) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.assistant-send-btn:hover:not(:disabled) {
  transform: scale(1.05);
}

.assistant-send-btn:active:not(:disabled) {
  transform: scale(0.95);
}

/* Action button hover lift */
.assistant-action-btn {
  transition:
    background-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.assistant-action-btn:hover {
  transform: translateY(-1px);
}

.assistant-action-btn:active {
  transform: translateY(0);
}

/* Message hover subtle lift */
.assistant-message-content {
  transition: transform var(--duration-fast) var(--ease-out);
}

.assistant-message:hover .assistant-message-content {
  transform: translateY(-1px);
}
```

## Todo List

- [ ] Add keyframes to `global.css`
- [ ] Update `AssistantSidebar.tsx` with closing animation state
- [ ] Update `AssistantInputBar.tsx` with exit animation
- [ ] Update `AssistantMessage.tsx` with entrance animation
- [ ] Add micro-interactions (hover, focus states)
- [ ] Test animation timing and easing
- [ ] Test reduced-motion media query
- [ ] Performance test (60fps target)
- [ ] Test animation on different devices/browsers

## Success Criteria

- [ ] Input bar fades out when sidebar opens
- [ ] Sidebar slides in from right (300ms)
- [ ] Backdrop fades in smoothly
- [ ] Messages stagger on initial load
- [ ] New messages animate in
- [ ] Close animation plays before sidebar disappears
- [ ] Reduced motion: all animations instant
- [ ] No jank or dropped frames

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Animation performance issues | Low | Medium | Use hardware-accelerated properties only |
| Animation state desync | Medium | Low | Reset state on stage changes |
| Browser inconsistencies | Low | Low | Test in Chrome, Firefox, Safari |

## Security Considerations

- No security implications for animation code

## Next Steps

- Phase 05: Mobile responsive design (drawer/sheet)
