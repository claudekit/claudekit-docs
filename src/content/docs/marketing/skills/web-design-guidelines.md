---
title: "ckm:web-design-guidelines"
description: "Review UI implementations for Web Interface Guidelines compliance — accessibility, typography, spacing, color contrast, and interaction patterns."
section: marketing
kit: marketing
category: skills
order: 110
---

# Web Design Guidelines

> Audit web interfaces against established design guidelines to surface accessibility issues, visual inconsistencies, and UX anti-patterns before they ship.

## What This Skill Does

**The Challenge**: UI implementations often drift from design intent and violate accessibility standards. Manual design QA is slow, and issues like insufficient color contrast, inconsistent spacing, and broken keyboard navigation slip through to production.

**The Solution**: Web Design Guidelines skill performs structured UI audits against WCAG 2.1 accessibility standards, visual design principles, and Web Interface Guidelines — producing prioritized fix lists with specific recommendations.

## Activation

**Implicit**: Activates automatically when reviewing UI implementations for design QA.

**Explicit**: Activate via prompt:
```
Activate web-design-guidelines skill to audit our checkout page for compliance issues
```

## Capabilities

### 1. Accessibility Audit (WCAG 2.1)
Check compliance with Web Content Accessibility Guidelines.

**Checklist categories**:
| Category | Key Checks |
|----------|------------|
| Color contrast | Text ≥4.5:1 (AA), large text ≥3:1 |
| Keyboard navigation | Tab order logical, focus visible, no keyboard traps |
| ARIA labels | Images have alt text, form fields have labels |
| Touch targets | Minimum 44x44px tap targets on mobile |
| Motion | Respects `prefers-reduced-motion` |

### 2. Typography Review
Audit type hierarchy, readability, and consistency.

**Typography standards**:
- Body text: 16px minimum, 1.5 line height
- Heading hierarchy: H1 > H2 > H3 (never skip levels)
- Maximum line length: 65-75 characters for body text
- Contrast: Minimum 4.5:1 for body, 3:1 for large text

### 3. Spacing and Layout Consistency
Verify design token usage and layout alignment.

**Spacing audit**:
- Consistent spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- Adequate white space around interactive elements
- Content width constraints for readability
- Responsive breakpoint behavior

### 4. Interaction Pattern Review
Check usability of interactive elements.

**Interaction standards**:
- Button states: default, hover, active, disabled, loading
- Form validation: inline errors, success states
- Loading states: skeleton screens or spinners
- Empty states: helpful, action-oriented messaging

## Prerequisites

- UI component code or screenshots for review
- Design system or style guide to validate against (optional)
- Target accessibility level (AA is standard, AAA for high-accessibility products)

## Configuration

No external tools required. Audit works from code review and screenshots.

**Optional integrations**:
- axe DevTools browser extension for automated WCAG checks
- Lighthouse for automated accessibility scoring

## Best Practices

**1. Audit in context, not isolation**
Review components in their actual page context. Contrast issues often appear only with real backgrounds.

**2. Prioritize by user impact**
Fix WCAG Level A failures first (blocking issues), then AA (standard compliance), then AA (enhanced).

**3. Test with keyboard only**
Navigate the entire interface using only Tab, Enter, Escape, and arrow keys. Every action must be reachable.

## Common Use Cases

### Use Case 1: Pre-Launch Design QA
**Scenario**: New feature UI ready for design review before release.

**Audit workflow**:
1. Color contrast check on all text elements
2. Keyboard navigation walkthrough
3. Mobile touch target size verification
4. Form field label and error state review
5. Responsive layout check at 375px, 768px, 1280px

**Output**: Prioritized issue list with WCAG violation level and fix recommendation.

### Use Case 2: Accessibility Remediation
**Scenario**: Accessibility audit failed, need systematic fix plan.

**Audit workflow**:
1. Categorize issues by WCAG criterion
2. Prioritize by severity (blocking vs advisory)
3. Group by component type for efficient fixing
4. Create acceptance criteria for each fix
5. Define re-test process

**Output**: Remediation plan with specific code fixes per issue.

## Troubleshooting

**Issue**: Color contrast passes tool check but fails visually
**Solution**: Tools check against solid backgrounds. Check contrast with actual background gradient or image.

**Issue**: Keyboard navigation works in Chrome but not Safari
**Solution**: Safari requires `tabindex="0"` on non-interactive elements. Check browser-specific focus behavior.

## Related Skills

- [UI/UX Pro Max](/docs/marketing/skills/ui-ux-pro-max) - Design system creation
- [UI Styling](/docs/marketing/skills/ui-styling) - Implementation with accessible components
- [Chrome DevTools](/docs/marketing/skills/chrome-devtools) - Browser-based accessibility testing

## Related Commands

- `/ckm:web-design-guidelines` - UI compliance review
- `/ckm:ui-ux-pro-max` - Design system with built-in accessibility
