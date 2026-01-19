---
title: "AI Assistant Two-Stage UX Pattern"
description: "Polar.sh/Mintlify-style floating input bar that expands to sidebar panel"
status: pending
priority: P1
effort: 6h
branch: dev
tags: [ai-assistant, ux, react, animation]
created: 2026-01-18
---

# AI Assistant Two-Stage UX Implementation

## Overview

Replace existing FloatingChat FAB modal pattern with Polar.sh/Mintlify-inspired two-stage UX:
1. **Stage 1**: Floating input bar at bottom of content area
2. **Stage 2**: Expanded sidebar panel after user submits query

## Current State Analysis

**Existing Components**:
- `FloatingChat.astro` - FAB button + modal overlay (to be replaced)
- `AIChat.tsx` - React component with API integration (to be preserved/refactored)
- `AIPanel.astro` - Sticky sidebar panel (currently hidden on mobile, partially used)
- `DocsLayout.astro` - 3-column layout with FloatingChat embedded

**API Endpoint**: `https://ck-api.kaitran.ca/api/public/ask`
- Method: POST
- Body: `{ query: string }`
- Response: `{ answer: string, sources: [{ title, url, snippet }], cached: boolean }`

**Design System Variables** (from global.css):
- Colors: `--color-bg-secondary`, `--color-bg-tertiary`, `--color-border`, `--color-ai-primary`
- Spacing: `--space-*` scale
- Radius: `--radius-md` (6px), `--radius-lg` (8px)
- Animation: `--duration-slower` (300ms), `--ease-in-out`
- Z-index: `--z-modal` (500), `--z-modal-backdrop` (400)

## Architecture Decision

**Approach**: Single React component with internal state machine

**Why React over Astro**:
- Complex state management (stage, loading, messages, error)
- Smooth animations require JavaScript control
- Event listeners (keyboard shortcuts, form submit)
- API calls with streaming potential

**State Machine**:
```
IDLE -> (user types) -> TYPING -> (submit) -> LOADING -> EXPANDED
                                                        ^
                                    (follow-up submit) -|
```

## File Changes Summary

| Action | File | Purpose |
|--------|------|---------|
| CREATE | `src/components/DocsAssistant.tsx` | Main two-stage component |
| CREATE | `src/components/DocsAssistantMarkdown.tsx` | Markdown renderer for responses |
| MODIFY | `src/layouts/DocsLayout.astro` | Replace FloatingChat import |
| MODIFY | `src/styles/global.css` | Add assistant-specific styles |
| DELETE | `src/components/FloatingChat.astro` | Remove old FAB pattern |
| KEEP | `src/components/AIChat.tsx` | May reuse for message state logic |
| KEEP | `src/components/AIPanel.astro` | Archive or remove after migration |

## Phases

| Phase | Description | Effort |
|-------|-------------|--------|
| [Phase 01](./phase-01-component-architecture.md) | Component architecture & state management | 1.5h |
| [Phase 02](./phase-02-floating-input-bar.md) | Floating input bar (Stage 1) | 1h |
| [Phase 03](./phase-03-expanded-sidebar.md) | Expanded sidebar panel (Stage 2) | 2h |
| [Phase 04](./phase-04-animation-transitions.md) | Animation & transitions | 1h |
| [Phase 05](./phase-05-mobile-responsive.md) | Mobile responsive (drawer/sheet) | 1.5h |

**Total Effort:** 7 hours (updated after UI/UX validation)

## UI/UX Validation Report

See [UI/UX Validation Report](./reports/ui-ux-validation-report.md) for detailed improvements.

**Key Additions from Validation:**
- Focus trap for accessibility compliance
- Suggested questions for discoverability (Polar.sh pattern)
- 44px touch targets on mobile
- Swipe-to-close gesture on mobile
- Cursor pointer on all clickable elements

## Success Criteria

- [x] Floating input bar visible at bottom of content area on page load
- [x] Input bar animates smoothly to sidebar on first query submission
- [~] Sidebar shows user question, AI response ⚠️ markdown rendering pending
- [x] Source citations displayed as clickable links to docs pages
- [x] Follow-up questions work from sidebar input
- [x] Cmd+I toggles assistant visibility
- [x] Mobile: Full-width drawer instead of sidebar
- [x] Respects prefers-reduced-motion
- [x] Build passes with no TypeScript errors

## Code Review Status

**Reviewed**: 2026-01-18 by code-reviewer
**Report**: [Code Review Report](./reports/code-reviewer-260118-1708-ai-assistant-implementation.md)
**Overall Score**: 8/10 - High quality implementation

**Status**:
- ✅ Build: PASSING (440 pages, 0 errors)
- ✅ TypeScript: No type errors in assistant code
- ✅ Security: No injection/XSS vulnerabilities
- ✅ Accessibility: WCAG 2.1 AA compliant with focus traps, ARIA labels
- ✅ Performance: 60fps animations, responsive design, 44px mobile targets
- ⚠️ Markdown: Missing markdown rendering for responses (HIGH priority)
- ⚠️ DRY: Duplicate API submission logic (refactor recommended)
- ⚠️ Error Handling: sessionStorage parse errors silently ignored

**Blocking Issues**: None - all success criteria met except markdown rendering

**Next Actions**:
1. Implement markdown rendering in responses (HIGH)
2. Refactor duplicate API logic into shared helper (HIGH)
3. Add error logging for sessionStorage failures (HIGH)
4. Add focus-visible styling to inputs (MEDIUM)
5. Validate API response structure with Zod (MEDIUM)

## Technical Notes

### Content Position (NOT Viewport)

The floating bar must be positioned relative to the **content area**, not viewport:
- Desktop: Inside `.content-wrapper` at bottom
- Must scroll with content on very long pages
- Not `position: fixed` but `position: sticky` or absolute within container

### Animation Strategy

Use CSS `transform` and `opacity` for 60fps animations:
```css
/* Stage 1 -> Stage 2 transition */
.assistant-container {
  transform: translateX(0);
  transition: transform 300ms var(--ease-in-out),
              width 300ms var(--ease-in-out);
}
.assistant-container.expanded {
  transform: translateX(100%); /* Slide into sidebar position */
}
```

### Keyboard Shortcuts

- `Cmd/Ctrl + I`: Toggle assistant (open/close)
- `Escape`: Close sidebar (when expanded)
- `Enter`: Submit query (when input focused)

## Unresolved Questions

1. Should the sidebar push content or overlay it?
   - Recommendation: Overlay with backdrop (simpler, no layout shift)

2. Should conversation history persist across page navigations?
   - Recommendation: Session storage for current session, clear on new session

3. Maximum conversation length before truncation?
   - Recommendation: Keep last 10 messages to manage context

---

**Next Step**: Begin with Phase 01 - Component Architecture
