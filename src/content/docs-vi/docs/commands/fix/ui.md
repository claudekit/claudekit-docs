---
title: /fix:ui
description: "Documentation for /fix:ui
description:
section: docs
category: docs/commands/fix
order: 24
published: true"
section: docs
category: docs/commands/fix
order: 24
published: true
---

# /fix:ui

Fix UI/UX issues by analyzing screenshots, videos, or descriptions. This command combines visual analysis with code debugging to resolve interface problems quickly.

## Syntax

```bash
/fix:ui [screenshot/video] [description]
```

## How It Works

### 1. Visual Analysis (if media provided)

- Analyzes screenshots using AI vision
- Extracts layout, colors, spacing
- Identifies visual inconsistencies
- Compares to design intent

### 2. Code Location

- Finds relevant component files
- Identifies CSS/styling files
- Locates responsive breakpoints
- Maps state management

### 3. Root Cause Identification

- Analyzes CSS rules
- Checks responsive design
- Reviews component logic
- Identifies conflicts

### 4. Fix Implementation

- Updates styles
- Adjusts layouts
- Fixes responsive issues
- Updates component logic

### 5. Visual Validation

- Suggests manual testing steps
- Provides preview commands
- Recommends browser testing

## Examples

### With Screenshot

```bash
/fix:ui [screenshot.png] - Button is misaligned on mobile, text overflows
```

**Visual Analysis:**
```
Analyzing screenshot...

Detected Issues:
1. Button positioned 20px from right edge (should be centered)
2. Text "Continue to Payment" truncated to "Continue to Pay..."
3. Padding inconsistent (top: 12px, bottom: 8px)
4. Button width: 150px (should be responsive)

Device: iPhone 12 Pro (390px width)
Viewport: Mobile portrait
```

**What happens:**
```
1. Located component
   File: src/components/CheckoutButton.tsx
   Styles: src/styles/checkout.css

2. Root Cause:
   - Fixed width instead of responsive
   - Text using px instead of rem
   - Missing mobile breakpoint
   - Absolute positioning

3. Fixes Applied:
   ✓ Changed width: 150px → width: 100%
   ✓ Added max-width: 320px
   ✓ Changed font-size: 16px → font-size: 1rem
   ✓ Fixed positioning: absolute → relative
   ✓ Added padding: 12px (consistent)
   ✓ Added text-overflow: ellipsis with tooltip

4. Added responsive styles:
   @media (max-width: 768px) {
     .checkout-button {
       width: calc(100% - 32px);
       margin: 0 16px;
     }
   }

Test on mobile device to verify fix.
```

### With Description Only

```bash
/fix:ui Modal dialog doesn't close when clicking backdrop on mobile Safari
```

**What happens:**
```
1. Located modal component
   File: src/components/Modal.tsx

2. Root Cause:
   - Click event not registering on iOS
   - Missing touch event handler
   - Z-index issue with backdrop

3. Fixes Applied:
   ✓ Added touchEnd event listener
   ✓ Increased backdrop z-index
   ✓ Added -webkit-tap-highlight-color
   ✓ Fixed event propagation

4. Browser-specific fixes:
   /* iOS Safari fix */
   .modal-backdrop {
     cursor: pointer;
     -webkit-tap-highlight-color: transparent;
   }

Test on iOS Safari to confirm.
```

### With Video

```bash
/fix:ui [screen-recording.mp4] - Animation is janky, dropdown flickers
```

**Video Analysis:**
```
Analyzing video frames...

Detected Issues:
- Frame rate drops during animation (60fps → 15fps)
- Dropdown flickers 3 times before stabilizing
- Repaints occurring on every frame
- CSS transitions triggering layout recalculation

Timeline:
0:00 - User clicks dropdown
0:01 - Flicker #1
0:02 - Flicker #2
0:03 - Flicker #3
0:04 - Stabilizes
```

**What happens:**
```
1. Located components
   - src/components/Dropdown.tsx
   - src/animations/slide-down.css

2. Performance Issues:
   - Using height animation (causes reflow)
   - No will-change property
   - Box-shadow animating (expensive)
   - Multiple re-renders

3. Optimizations Applied:
   ✓ Changed height → transform: scaleY()
   ✓ Added will-change: transform
   ✓ Removed box-shadow animation
   ✓ Added GPU acceleration
   ✓ Implemented React.memo for dropdown items
   ✓ Debounced position calculations

4. Performance Improvement:
   Before: 15 FPS, 150ms animation time
   After: 60 FPS, 200ms animation time (smoother)

Test with DevTools Performance tab.
```

## Common UI Issues

### Layout Issues

```bash
# Misalignment
/fix:ui [screenshot] - Elements not aligned vertically

# Overflow
/fix:ui Content overflowing container on small screens

# Spacing
/fix:ui Inconsistent padding between sections
```

### Responsive Issues

```bash
# Mobile layout
/fix:ui [mobile-screenshot] - Layout breaks on iPhone SE

# Tablet view
/fix:ui Navigation menu overlaps content on iPad

# Desktop scaling
/fix:ui Text too small on 4K monitors
```

### Visual Bugs

```bash
# Z-index
/fix:ui Modal appearing behind header

# Colors
/fix:ui Button color too light, hard to read text

# Animations
/fix:ui Loading spinner stuttering on slow devices
```

### Interaction Issues

```bash
# Click/Touch
/fix:ui Button not responding to clicks on mobile

# Hover states
/fix:ui Hover effect staying active after click

# Focus states
/fix:ui Can't see keyboard focus indicator
```

## Best Practices

### Provide Visual Context

✅ **With Screenshot:**
```bash
/fix:ui [screenshot.png] - Clear description of issue
```

✅ **With Video:**
```bash
/fix:ui [recording.mp4] - Shows the interaction problem
```

❌ **Text Only (when visual issue):**
```bash
/fix:ui Something looks wrong
```

### Specify Device/Browser

```bash
/fix:ui [screenshot] - Button misaligned on mobile Safari, iPhone 12 Pro
```

### Include Expected Behavior

```bash
/fix:ui [screenshot] - Modal should be centered on screen, currently offset to left by ~50px
```

### Describe Interaction

```bash
/fix:ui When hovering over dropdown, items flicker. Should smoothly expand without flicker.
```

## Testing Recommendations

After fix is applied:

### Manual Testing

```bash
# Desktop browsers
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

# Mobile devices
- iOS Safari (iPhone)
- Chrome (Android)
- Samsung Internet

# Screen sizes
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1920px, 2560px
```

### Automated Testing

```bash
# Visual regression
npm run test:visual

# Cross-browser
npm run test:browsers

# Responsive
npm run test:responsive
```

## Integration with Design Tools

### Figma Integration

```bash
# Compare with Figma design
/fix:ui [screenshot] compare with [figma-url]
```

### Storybook Integration

```bash
# Test component in isolation
npm run storybook

# Check component states
```

## Advanced Scenarios

### Dark Mode Issues

```bash
/fix:ui [dark-mode-screenshot] - Text not visible in dark mode
```

**Fixes:**
- Color contrast adjustments
- Missing dark mode styles
- Theme variable issues

### RTL (Right-to-Left) Layout

```bash
/fix:ui [rtl-screenshot] - Arabic text layout broken
```

**Fixes:**
- Add RTL-specific styles
- Fix logical properties
- Mirror layout elements

### Accessibility Issues

```bash
/fix:ui [screenshot] - Focus indicator not visible for keyboard users
```

**Fixes:**
- Enhanced focus styles
- ARIA attributes
- Keyboard navigation

## Common Solutions

### Flexbox Alignment

```css
/* Before */
.container {
  display: flex;
}

/* After */
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

### Responsive Width

```css
/* Before */
.button {
  width: 200px;
}

/* After */
.button {
  width: 100%;
  max-width: 200px;
}
```

### Z-index Stacking

```css
/* Before */
.modal {
  z-index: 100;
}

/* After */
.modal {
  z-index: 1000;
  position: fixed;
}
```

### Text Overflow

```css
/* Before */
.text {
  width: 150px;
}

/* After */
.text {
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## Performance Optimization

### Animation Performance

```css
/* Avoid (causes reflow) */
.element {
  transition: height 0.3s;
}

/* Use (GPU accelerated) */
.element {
  transition: transform 0.3s;
  will-change: transform;
}
```

### Reduce Repaints

```css
/* Avoid */
.hover:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Use */
.hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  opacity: 0;
  transition: opacity 0.3s;
}
.hover:hover {
  opacity: 1;
}
```

## Troubleshooting

### Can't Reproduce Issue

**Problem:** Issue visible in screenshot but not in code

**Solution:**
```bash
# Check specific browser/device
/fix:ui [screenshot] - Happens only on Safari iOS

# Check user's environment
# - Browser version
# - Screen size
# - Zoom level
```

### Fix Works Locally But Not in Production

**Problem:** Fix works in development

**Solution:**
```bash
# Check build process
npm run build
npm run preview

# Check for CSS purging issues
# Check for minification problems
```

### Multiple Related Issues

**Problem:** Several UI issues in same area

**Solution:**
```bash
# Fix all at once
/fix:ui [screenshots] - List all issues: 1) alignment, 2) color contrast, 3) spacing
```

## Next Steps

- [/design:screenshot](/docs/commands/design/screenshot) - Convert design to code
- [/fix:fast](/docs/commands/fix/fast) - Quick CSS fixes
- [/test](/docs/commands/core/test) - Visual regression tests

---

**Key Takeaway**: `/fix:ui` combines visual analysis with code debugging to quickly resolve UI/UX issues across devices and browsers, with support for screenshots and videos.
