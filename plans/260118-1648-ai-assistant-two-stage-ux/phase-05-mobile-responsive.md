---
title: "Phase 05: Mobile Responsive (Drawer/Sheet)"
status: pending
effort: 1.5h
---

# Phase 05: Mobile Responsive (Drawer/Sheet)

## Context Links

- [Plan Overview](./plan.md)
- [Phase 04: Animations](./phase-04-animation-transitions.md)
- [DocsLayout.astro Breakpoints](/home/kai/claudekit/claudekit-docs/src/layouts/DocsLayout.astro)

## Overview

**Priority**: P1 - Required for mobile users
**Status**: Pending
**Description**: Transform sidebar panel to full-width bottom drawer/sheet on mobile devices.

## Key Insights

- Breakpoint: 768px (`--breakpoint-md`)
- Mobile pattern: Bottom sheet sliding up (like iOS/Android)
- Touch gestures: Swipe down to close
- Input bar visible on mobile (no change needed)
- Safe area insets for notched devices

## Requirements

### Functional
- Below 768px: Sidebar becomes full-width bottom sheet
- Sheet slides up from bottom instead of right
- Swipe down gesture to close
- Full height on mobile (with safe areas)
- Backdrop covers entire screen

### Non-Functional
- Touch-friendly (44px tap targets) - **CRITICAL from UI/UX validation**
- Safe area padding for notched phones
- Smooth 60fps animations
- No horizontal scroll
- Test breakpoints: 375px, 768px, 1024px, 1440px

## Visual Design Specification

### Desktop (>768px)
```
┌──────────────────────────┬──────────────────┐
│                          │    Sidebar       │
│        Content           │    380px         │
│                          │                  │
└──────────────────────────┴──────────────────┘
```

### Mobile (<768px)
```
┌────────────────────────────────────────────┐
│                                            │
│              Content (dimmed)              │
│                                            │
├────────────────────────────────────────────┤
│  ═══  (drag handle)                        │
│ [sparkle] Assistant        [↻] [✕]        │
├────────────────────────────────────────────┤
│                                            │
│              Messages                       │
│                                            │
├────────────────────────────────────────────┤
│ [sparkle] Ask a follow-up...         [→]  │
│            (safe-area-bottom)              │
└────────────────────────────────────────────┘
```

**Dimensions (Mobile)**:
- Width: 100%
- Height: 85vh (with drag handle)
- Header height: 48px
- Drag handle: 32px wide, 4px tall, centered
- Safe area bottom: `env(safe-area-inset-bottom)`

## Related Code Files

### Files to Modify
- `src/styles/global.css` - Mobile responsive styles
- `src/components/assistant/AssistantSidebar.tsx` - Add drag handle, touch events
- `src/components/assistant/AssistantInputBar.tsx` - Mobile adjustments

## Implementation Steps

### Step 1: Add Mobile Styles to global.css

```css
/* ============================================
   AI ASSISTANT - MOBILE RESPONSIVE
   ============================================ */

@media (max-width: 767px) {
  /* Sidebar becomes bottom sheet */
  .assistant-sidebar {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 85vh;
    max-height: calc(100vh - 60px);
    border-left: none;
    border-top: 1px solid var(--color-border-hover);
    border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    animation: assistant-slide-up var(--duration-slower) var(--ease-out) forwards;
  }

  .assistant-sidebar.closing {
    animation: assistant-slide-down var(--duration-slower) var(--ease-in) forwards;
  }

  /* Mobile slide animations */
  @keyframes assistant-slide-up {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes assistant-slide-down {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  }

  /* Drag handle */
  .assistant-drag-handle {
    display: flex;
    justify-content: center;
    padding: var(--space-3) 0;
    cursor: grab;
    touch-action: none;
  }

  .assistant-drag-handle::before {
    content: '';
    width: 32px;
    height: 4px;
    background-color: var(--color-border-hover);
    border-radius: var(--radius-full);
    transition: background-color var(--duration-fast) var(--ease-out);
  }

  .assistant-drag-handle:active::before {
    background-color: var(--color-text-muted);
  }

  /* Mobile header */
  .assistant-sidebar-header {
    padding: var(--space-2) var(--space-4);
    height: 48px;
  }

  .assistant-sidebar-title {
    font-size: var(--text-sm);
  }

  /* Mobile messages */
  .assistant-messages {
    padding: var(--space-3);
    gap: var(--space-2);
  }

  .assistant-message-content {
    padding: var(--space-2) var(--space-3);
    font-size: var(--text-sm);
  }

  /* Mobile input */
  .assistant-sidebar-input {
    padding: var(--space-3);
    padding-bottom: calc(var(--space-3) + env(safe-area-inset-bottom, 0px));
  }

  /* Mobile input bar (Stage 1) */
  .assistant-input-bar-container {
    bottom: var(--space-4);
    padding: 0 var(--space-3);
  }

  .assistant-input-bar {
    height: 44px;
    padding: 0 var(--space-3);
  }

  .assistant-kbd {
    display: none;
  }

  /* Hide expand button on mobile */
  .assistant-action-btn[aria-label="Expand assistant"] {
    display: none;
  }

  /* CRITICAL: 44px touch targets on mobile (UI/UX validation) */
  .assistant-action-btn {
    width: 44px;
    height: 44px;
    min-width: 44px;
    min-height: 44px;
  }

  .assistant-send-btn {
    width: 44px;
    height: 44px;
    min-width: 44px;
    min-height: 44px;
  }

  .assistant-suggestion-chip {
    min-height: 44px;
    padding: var(--space-3) var(--space-4);
  }

  /* Full backdrop */
  .assistant-backdrop {
    backdrop-filter: blur(2px);
  }
}

/* Extra small screens */
@media (max-width: 400px) {
  .assistant-sidebar {
    height: 90vh;
  }

  .assistant-sidebar-header {
    padding: var(--space-2) var(--space-3);
  }

  .assistant-messages {
    padding: var(--space-2);
  }

  .assistant-sidebar-input {
    padding: var(--space-2);
    padding-bottom: calc(var(--space-2) + env(safe-area-inset-bottom, 0px));
  }
}

/* Landscape mobile */
@media (max-width: 767px) and (orientation: landscape) {
  .assistant-sidebar {
    height: 80vh;
    max-height: calc(100vh - 40px);
  }
}

/* Safe area for notched devices */
@supports (padding-bottom: env(safe-area-inset-bottom)) {
  @media (max-width: 767px) {
    .assistant-sidebar-input {
      padding-bottom: calc(var(--space-3) + env(safe-area-inset-bottom));
    }
  }
}
```

### Step 2: Add Drag Handle to Sidebar

```typescript
// src/components/assistant/AssistantSidebar.tsx
import { useState, useRef, useEffect, useCallback } from 'react';

export function AssistantSidebar({
  stage,
  // ... props
  onClose,
}: AssistantSidebarProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dragStartY = useRef<number | null>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Touch handlers for swipe-to-close
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!isMobile) return;
    dragStartY.current = e.touches[0].clientY;
  }, [isMobile]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isMobile || dragStartY.current === null) return;

    const currentY = e.touches[0].clientY;
    const deltaY = currentY - dragStartY.current;

    // Only track downward swipes
    if (deltaY > 0 && sidebarRef.current) {
      // Apply transform for visual feedback
      sidebarRef.current.style.transform = `translateY(${Math.min(deltaY, 200)}px)`;
    }
  }, [isMobile]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!isMobile || dragStartY.current === null || !sidebarRef.current) return;

    const currentY = e.changedTouches[0].clientY;
    const deltaY = currentY - dragStartY.current;

    // Reset transform
    sidebarRef.current.style.transform = '';

    // If swiped down more than 100px, close
    if (deltaY > 100) {
      handleClose();
    }

    dragStartY.current = null;
  }, [isMobile]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  if (stage !== 'expanded' && !isClosing) return null;

  return (
    <>
      <div
        className={`assistant-backdrop ${isClosing ? 'closing' : ''}`}
        onClick={handleClose}
        aria-hidden="true"
      />

      <aside
        ref={sidebarRef}
        className={`assistant-sidebar ${isClosing ? 'closing' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="assistant-title"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Drag handle (mobile only) */}
        {isMobile && (
          <div
            className="assistant-drag-handle"
            aria-label="Drag to close"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleClose()}
          />
        )}

        {/* Header */}
        <header className="assistant-sidebar-header">
          {/* ... existing header content */}
        </header>

        {/* ... rest of component */}
      </aside>
    </>
  );
}
```

### Step 3: Hide Drag Handle on Desktop (CSS already handles this)

The CSS above includes `.assistant-drag-handle` which only appears on mobile via the media query. Desktop simply doesn't show the element.

### Step 4: Test Viewport Meta Tag

Ensure `BaseLayout.astro` has proper viewport meta:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

The `viewport-fit=cover` is important for safe area insets on notched devices.

### Step 5: Add Touch Event Handling Utilities

```typescript
// src/components/assistant/use-swipe-dismiss.ts
import { useRef, useCallback } from 'react';

interface SwipeDismissConfig {
  threshold?: number;
  onDismiss: () => void;
}

export function useSwipeDismiss({ threshold = 100, onDismiss }: SwipeDismissConfig) {
  const startY = useRef<number | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (startY.current === null || !elementRef.current) return;

    const deltaY = e.touches[0].clientY - startY.current;
    if (deltaY > 0) {
      elementRef.current.style.transform = `translateY(${Math.min(deltaY, 200)}px)`;
      elementRef.current.style.opacity = String(1 - deltaY / 400);
    }
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (startY.current === null || !elementRef.current) return;

    const deltaY = e.changedTouches[0].clientY - startY.current;
    elementRef.current.style.transform = '';
    elementRef.current.style.opacity = '';

    if (deltaY > threshold) {
      onDismiss();
    }

    startY.current = null;
  }, [threshold, onDismiss]);

  return {
    ref: elementRef,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
  };
}
```

## Todo List

- [ ] Add mobile responsive styles to `global.css`
- [ ] Add drag handle element to `AssistantSidebar.tsx`
- [ ] Implement swipe-to-close touch handlers
- [ ] Verify safe area insets work on iOS
- [ ] Test on real mobile devices (iOS Safari, Android Chrome)
- [ ] Test landscape orientation
- [ ] Test input focus and keyboard (virtual keyboard)
- [ ] Verify no horizontal overflow
- [ ] Test with screen readers on mobile

## Success Criteria

- [ ] Sidebar appears as bottom sheet on mobile (<768px)
- [ ] Drag handle visible on mobile
- [ ] Swipe down closes sheet (>100px threshold)
- [ ] Safe area padding applied on notched devices
- [ ] Virtual keyboard doesn't break layout
- [ ] Animations remain smooth (60fps)
- [ ] Input bar works correctly on mobile (Stage 1)
- [ ] Landscape mode has appropriate height

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Virtual keyboard overlap | Medium | High | Use visual viewport API or fixed positioning |
| Touch event conflicts | Low | Medium | Use passive event listeners, prevent default carefully |
| iOS Safari quirks | Medium | Medium | Test on real devices, use -webkit- prefixes |
| Safe area not supported | Low | Low | Fallback padding values |

## Security Considerations

- Touch events don't expose sensitive data
- No security implications for responsive design

## Testing Checklist

### Devices to Test
- [ ] iPhone SE (small screen)
- [ ] iPhone 14/15 Pro (notch)
- [ ] iPad (tablet breakpoint)
- [ ] Android phone (Chrome)
- [ ] Android tablet

### Scenarios
- [ ] Portrait orientation
- [ ] Landscape orientation
- [ ] With keyboard open
- [ ] With slow network
- [ ] With reduced motion enabled

## Next Steps

After Phase 05 completion:
1. Run full build: `bun run build`
2. Test on staging environment
3. Code review
4. Documentation updates
5. Merge to dev branch
