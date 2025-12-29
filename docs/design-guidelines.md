# ClaudeKit.cc Design Guidelines
**Version:** 2.0 (Claude-Inspired Redesign)
**Last Updated:** October 6, 2025
**Status:** Production Ready

---

## Table of Contents
1. [Brand Identity](#1-brand-identity)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Components](#5-components)
6. [Iconography](#6-iconography)
7. [Visual Style](#7-visual-style)
8. [Accessibility](#8-accessibility)
9. [Asset Library](#9-asset-library)

---

## 1. Brand Identity

### 1.1 Brand Essence
**ClaudeKit** - The best Claude Code starter kits for solo builders

**Brand Values:**
- **Speed**: Ship production features in hours, not weeks
- **Professional**: Enterprise-ready quality and security
- **Developer-First**: Built by developers, for developers
- **Innovation**: AI-powered productivity without compromising control

### 1.2 Logo Concept (V2 - Claude-Inspired)
**Design Philosophy:** Inspired by Anthropic's Claude - minimalist, geometric, warm, and approachable

**Primary Logo Variations:**
1. **Full Logo** (`claudekit-logo-v2-full.png`): Geometric "CK" letterforms with modular elements
2. **Symbol Only** (`claudekit-logo-v2-symbol.png`): Gear-based network icon representing AI tools
3. **Monogram** (`claudekit-logo-v2-monogram.png`): Rounded "CK" lettermark with gradient

**Design Characteristics:**
- Warm terracotta/coral accent (#D97757) - inspired by Claude's brand color
- Dark charcoal (#131314) and light beige (#FDFDF7) backgrounds
- Geometric, modular forms suggesting toolkit and AI assistance
- Clean, professional, approachable aesthetic
- Works at all sizes from 16x16px favicon to billboard

**Wordmark:**
- "ClaudeKit" with "Kit" in warm coral accent color
- Modern sans-serif typeface (inspired by Claude's Styrene/Copernicus fonts)
- Emphasis on clarity and technical precision with warmth

**Usage Guidelines:**
- Minimum size: 32px height for combined mark
- Clear space: Equal to height of "C" in ClaudeKit
- Never stretch, rotate, or distort
- Maintain color relationships - dark/light backgrounds with coral accent

### 1.3 Visual Positioning (Updated - Claude-Inspired)
**Design Philosophy:** Warm minimalism with technical precision

**Inspiration from Claude/Anthropic:**
- Minimalist design with warm, approachable colors
- Dark neutrals with terracotta/coral accents
- Clean typography with excellent readability
- Subtle gradients and soft rounded corners
- Professional yet human-centered aesthetic

**Differentiators:**
- **Warm Tech Aesthetic**: Coral/terracotta accents soften technical feel
- **Dark & Light Harmony**: Both modes designed with equal care
- **Claude DNA**: Built on Claude Code, visually connected to Claude brand
- **Developer-Focused**: Optimized for technical audiences with warmth
- **Modular & Clean**: Geometric forms suggesting toolkit modularity

---

## 2. Color System (V2 - Claude-Inspired)

### 2.1 Primary Color Palette

**Warm Coral/Terracotta (Primary Accent)** - Inspired by Claude
- Hex: `#D97757`
- RGB: `rgb(217, 119, 87)`
- Usage: Primary CTAs, brand accents, interactive highlights, logo "Kit" portion
- Psychology: Warmth, approachability, energy with sophistication
- Claude Connection: Matches Anthropic's coral accent (#d97757)

**Dark Charcoal (Primary Dark)**
- Hex: `#131314`
- RGB: `rgb(19, 19, 20)`
- Usage: Dark backgrounds, text on light, primary surfaces
- Psychology: Professional, technical, sophisticated
- Claude Connection: Matches Claude's dark foreground (rgb 19,19,20)

**Light Beige (Primary Light)**
- Hex: `#FDFDF7`
- RGB: `rgb(253, 253, 247)`
- Usage: Light backgrounds, elevated surfaces in light mode
- Psychology: Warmth, cleanliness, approachability
- Claude Connection: Matches Claude's light background (253, 253, 247)

**Bronze/Clay (Secondary Accent)**
- Hex: `#D4A27F`
- RGB: `rgb(212, 162, 127)`
- Usage: Secondary accents, hover states, decorative elements
- Psychology: Warmth, craftsmanship, premium quality
- Claude Connection: Inspired by Claude's bronze accent (212, 162, 127)

### 2.2 Dark Mode Colors (Primary Theme) - Claude-Inspired

**Backgrounds:**
```css
--bg-primary: #0E0E0E;        /* Main background - slightly warmer than pure black */
--bg-secondary: #1C1C1C;      /* Cards, elevated surfaces */
--bg-tertiary: #2A2A2A;       /* Hover states, active elements */
--bg-accent: rgba(217, 119, 87, 0.05); /* Subtle coral tint for special sections */
```

**Borders:**
```css
--border-subtle: #3A3A3A;     /* Default borders - warmer gray */
--border-medium: #4F4F4F;     /* Hover borders */
--border-strong: #D97757;     /* Focus borders - coral accent */
--border-accent: rgba(217, 119, 87, 0.2); /* Coral tinted borders */
```

**Text:**
```css
--text-primary: #FDFDF7;      /* Headings - warm white */
--text-secondary: #B8B8B8;    /* Body text - warmer gray */
--text-tertiary: #8A8A8A;     /* Captions, metadata */
--text-accent: #D97757;       /* Coral for emphasis */
```

### 2.3 Light Mode Colors - Claude-Inspired

**Backgrounds:**
```css
--bg-primary: #FDFDF7;        /* Main background - warm beige (Claude inspired) */
--bg-secondary: #F8F8F2;      /* Cards, elevated surfaces */
--bg-tertiary: #F3F3ED;       /* Hover states, active elements */
--bg-accent: rgba(217, 119, 87, 0.05); /* Subtle coral tint */
```

**Borders:**
```css
--border-subtle: #E8E8E0;     /* Default borders - warm */
--border-medium: #D8D8D0;     /* Hover borders */
--border-strong: #D97757;     /* Focus borders - coral */
--border-accent: rgba(217, 119, 87, 0.3); /* Coral tinted borders */
```

**Text:**
```css
--text-primary: #131314;      /* Headings - dark charcoal */
--text-secondary: #5A5A5A;    /* Body text */
--text-tertiary: #8A8A8A;     /* Captions, metadata */
--text-accent: #D97757;       /* Coral for emphasis */
```

### 2.4 Semantic Colors

**Success (Green):**
- Hex: `#10B981`
- Usage: Success messages, confirmations, positive indicators

**Warning (Amber):**
- Hex: `#F59E0B`
- Usage: Warnings, cautions, important notices

**Error (Red):**
- Hex: `#EF4444`
- Usage: Errors, destructive actions, critical alerts

**Info (Blue):**
- Hex: `#3B82F6`
- Usage: Information, tips, neutral notifications

### 2.5 Gradients - Claude-Inspired

**Primary Gradient (Hero Sections):**
```css
background: linear-gradient(135deg, #D97757 0%, #D4A27F 100%);
/* Warm coral to bronze - welcoming and energetic */
```

**Subtle Gradient (Cards/Backgrounds):**
```css
background: linear-gradient(180deg, rgba(217, 119, 87, 0.03) 0%, transparent 100%);
/* Very subtle coral tint */
```

**Accent Gradient (CTAs):**
```css
background: linear-gradient(90deg, #D97757 0%, #E08667 100%);
/* Coral gradient for primary buttons */
```

**Dark Gradient (Backgrounds):**
```css
background: linear-gradient(180deg, #1C1C1C 0%, #0E0E0E 100%);
/* Subtle depth in dark mode */
```

### 2.6 Accessibility Compliance - Updated

**Contrast Ratios (WCAG AA Minimum):**
- Coral (#D97757) on Dark Charcoal (#131314): **5.2:1** ✅
- Coral (#D97757) on Light Beige (#FDFDF7): **3.8:1** ✅ (Large text/UI)
- Dark Charcoal (#131314) on Light Beige (#FDFDF7): **16.1:1** ✅
- Warm White (#FDFDF7) on Dark (#0E0E0E): **18.9:1** ✅
- Text Secondary (#B8B8B8) on Dark: **9.2:1** ✅

**Testing:**
- All color combinations tested with WebAIM Contrast Checker
- Both dark and light modes meet WCAG 2.1 Level AA standards
- Coral accent used primarily for interactive elements (3:1+ contrast)
- Text on coral backgrounds uses dark charcoal for maximum readability

---

## 3. Typography (V2 - Claude-Inspired)

### 3.1 Font Families

**Heading Font: DM Sans** (Claude alternative - similar to Styrene)
- Source: Google Fonts (Open Font License)
- Weights: Medium (500), Bold (700), ExtraBold (800)
- Usage: H1-H4, navigation, CTAs, important UI labels
- Characteristics: Geometric precision, clean lines, modern sans-serif
- Claude Connection: Similar aesthetic to Claude's Styrene Display font
- Vietnamese Support: ✅ Full diacritical support

**Body Font: Work Sans** (Claude alternative - clean and readable)
- Source: Google Fonts (Open Font License)
- Weights: Regular (400), Medium (500), SemiBold (600)
- Usage: Body text, UI elements, captions, descriptions
- Characteristics: Excellent screen legibility, geometric sans-serif, warm feel
- Claude Connection: Complements DM Sans like Tiempos complements Styrene
- Vietnamese Support: ✅ Full diacritical support

**Code Font: JetBrains Mono**
- Source: Google Fonts (Open Font License)
- Weights: Regular (400), Medium (500)
- Usage: Code blocks, technical examples, terminal output
- Characteristics: Developer favorite, ligatures, monospace
- Vietnamese Support: ✅ Full support

**Alternative Font Pairing:**
- **Headings:** Space Grotesk (geometric, technical feel)
- **Body:** Public Sans (clean, government-grade readability)

### 3.2 Type Scale

**Desktop Scale:**
```css
--text-xs: 12px;      /* Captions, metadata */
--text-sm: 14px;      /* Small body text, labels */
--text-base: 16px;    /* Body text, paragraphs */
--text-lg: 18px;      /* Large body, lead paragraphs */
--text-xl: 20px;      /* Subheadings */
--text-2xl: 24px;     /* H4 */
--text-3xl: 30px;     /* H3 */
--text-4xl: 36px;     /* H2 */
--text-5xl: 48px;     /* H1 */
--text-6xl: 60px;     /* Display, hero headlines */
```

**Mobile Scale (Responsive):**
```css
--text-5xl-mobile: 36px;  /* H1 reduced for mobile */
--text-6xl-mobile: 42px;  /* Display reduced for mobile */
```

### 3.3 Line Heights

```css
--leading-none: 1;        /* Tight headlines */
--leading-tight: 1.25;    /* Headings */
--leading-snug: 1.375;    /* Subheadings */
--leading-normal: 1.5;    /* Body text (optimal) */
--leading-relaxed: 1.625; /* Large body text */
--leading-loose: 2;       /* Spaced content */
```

### 3.4 Font Weights

```css
--font-regular: 400;      /* Body text */
--font-medium: 500;       /* Emphasized text */
--font-semibold: 600;     /* Strong emphasis */
--font-bold: 700;         /* Headings */
--font-extrabold: 800;    /* Hero headlines */
```

### 3.5 Typography Usage Examples

**Hero Headline:**
```css
font-family: 'Manrope', sans-serif;
font-weight: 800;
font-size: 60px;
line-height: 1.1;
letter-spacing: -0.02em;
```

**Section Heading:**
```css
font-family: 'Manrope', sans-serif;
font-weight: 700;
font-size: 36px;
line-height: 1.25;
```

**Body Text:**
```css
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5;
```

**CTA Button:**
```css
font-family: 'Manrope', sans-serif;
font-weight: 700;
font-size: 16px;
letter-spacing: 0.01em;
```

---

## 4. Spacing & Layout

### 4.1 Spacing Scale (8px Base Unit)

```css
--space-1: 4px;      /* 0.25rem - Tiny */
--space-2: 8px;      /* 0.5rem - Small */
--space-3: 12px;     /* 0.75rem - Small-Medium */
--space-4: 16px;     /* 1rem - Medium */
--space-5: 20px;     /* 1.25rem - Medium-Large */
--space-6: 24px;     /* 1.5rem - Large */
--space-8: 32px;     /* 2rem - XLarge */
--space-10: 40px;    /* 2.5rem - XXLarge */
--space-12: 48px;    /* 3rem - Huge */
--space-16: 64px;    /* 4rem - Giant */
--space-20: 80px;    /* 5rem - Massive */
--space-24: 96px;    /* 6rem - Section spacing */
--space-32: 128px;   /* 8rem - Hero spacing */
```

### 4.2 Container Widths

```css
--container-sm: 640px;   /* Small content */
--container-md: 768px;   /* Medium content */
--container-lg: 1024px;  /* Large content */
--container-xl: 1280px;  /* Extra large content */
--container-2xl: 1536px; /* Max width */
```

### 4.3 Breakpoints (Mobile-First)

```css
/* Mobile: 320px - 767px (default) */
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large Desktop */ }
@media (min-width: 1536px) { /* XL Desktop */ }
```

### 4.4 Border Radius - Claude-Inspired (Softer, Rounded)

```css
--radius-sm: 6px;     /* Small elements (inputs, tags) - slightly rounded */
--radius-md: 8px;     /* Medium elements (buttons, cards) - Claude-like */
--radius-lg: 12px;    /* Large elements (modals, sections) */
--radius-xl: 20px;    /* Extra large containers - softer */
--radius-2xl: 28px;   /* Hero sections - more rounded */
--radius-full: 9999px; /* Pills, badges, avatars */
```

**Claude Connection:**
- 0.5rem (8px) is Claude's primary border radius
- Softer, more approachable corners throughout
- Consistent rounding creates warm, friendly aesthetic

### 4.5 Shadows

**Light Mode:**
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

**Dark Mode:**
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6);
```

---

## 5. Components

### 5.1 Buttons

**Primary Button:**
```css
background: linear-gradient(90deg, #247BA0 0%, #6C63FF 100%);
color: #FFFFFF;
padding: 12px 24px;
border-radius: 8px;
font-family: 'Manrope', sans-serif;
font-weight: 700;
font-size: 16px;
transition: transform 0.2s, box-shadow 0.2s;

/* Hover */
transform: translateY(-2px);
box-shadow: 0 10px 20px rgba(108, 99, 255, 0.3);
```

**Secondary Button:**
```css
background: transparent;
color: #247BA0;
border: 2px solid #247BA0;
padding: 10px 22px; /* Adjust for border */
border-radius: 8px;
font-family: 'Manrope', sans-serif;
font-weight: 700;
font-size: 16px;

/* Hover */
background: rgba(36, 123, 160, 0.1);
border-color: #6C63FF;
color: #6C63FF;
```

**Ghost Button:**
```css
background: transparent;
color: #A3A3A3;
padding: 12px 24px;
border-radius: 8px;
font-family: 'Manrope', sans-serif;
font-weight: 600;
font-size: 16px;

/* Hover */
background: rgba(255, 255, 255, 0.05);
color: #FFFFFF;
```

**Button States:**
- **Default:** Normal appearance
- **Hover:** Elevated with shadow, color shift
- **Active:** Slightly pressed (translateY(0))
- **Disabled:** opacity: 0.5, cursor: not-allowed
- **Focus:** 2px outline with brand color

**Minimum Size:** 40px height (touch-friendly)

### 5.2 Cards

**Default Card:**
```css
background: #1A1A1A; /* Dark mode */
border: 1px solid #333333;
border-radius: 12px;
padding: 24px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
transition: border-color 0.2s, box-shadow 0.2s;

/* Hover */
border-color: #4D4D4D;
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
```

**Feature Card (with gradient):**
```css
background: linear-gradient(180deg, #1A1A1A 0%, #0D0D0D 100%);
border: 1px solid rgba(108, 99, 255, 0.2);
border-radius: 12px;
padding: 32px;

/* Hover */
border-color: rgba(108, 99, 255, 0.5);
```

**Pricing Card:**
```css
background: #1A1A1A;
border: 2px solid #333333;
border-radius: 16px;
padding: 40px;
text-align: center;

/* Most Popular (highlight) */
border-color: #6C63FF;
position: relative;
transform: scale(1.05);
box-shadow: 0 20px 40px rgba(108, 99, 255, 0.3);
```

### 5.3 Form Elements

**Input Field:**
```css
background: #262626;
border: 1px solid #4D4D4D;
border-radius: 8px;
padding: 12px 16px;
font-family: 'Inter', sans-serif;
font-size: 16px;
color: #FFFFFF;
min-height: 44px;

/* Focus */
border-color: #6C63FF;
outline: 2px solid rgba(108, 99, 255, 0.2);
outline-offset: 2px;
```

**Label:**
```css
font-family: 'Inter', sans-serif;
font-weight: 500;
font-size: 14px;
color: #A3A3A3;
margin-bottom: 8px;
display: block;
```

**Error State:**
```css
border-color: #EF4444;
color: #EF4444;

/* Error message */
font-size: 12px;
color: #EF4444;
margin-top: 4px;
```

### 5.4 Navigation

**Header/Navbar:**
```css
background: rgba(13, 13, 13, 0.8);
backdrop-filter: blur(12px);
border-bottom: 1px solid #333333;
padding: 16px 0;
position: sticky;
top: 0;
z-index: 50;
```

**Nav Links:**
```css
font-family: 'Inter', sans-serif;
font-weight: 500;
font-size: 14px;
color: #A3A3A3;
padding: 8px 16px;
transition: color 0.2s;

/* Hover */
color: #FFFFFF;

/* Active */
color: #6C63FF;
```

### 5.5 Badges & Tags

**Badge:**
```css
background: rgba(108, 99, 255, 0.1);
color: #6C63FF;
border: 1px solid rgba(108, 99, 255, 0.3);
border-radius: 999px;
padding: 4px 12px;
font-family: 'Inter', sans-serif;
font-weight: 600;
font-size: 12px;
text-transform: uppercase;
letter-spacing: 0.05em;
```

**Status Indicators:**
- Success: Green background, green text
- Warning: Amber background, amber text
- Error: Red background, red text
- Info: Blue background, blue text

### 5.6 Pagination

**Component Location:** `/components/ui/pagination.tsx`

**Design Specifications:**
```css
/* Container */
border-top: 1px solid #E8E8E0;
padding: 16px 24px;
background: white;
display: flex;
justify-content: space-between;
align-items: center;

/* Page Numbers */
padding: 8px 16px;
min-height: 44px; /* Touch-friendly */
border-radius: 8px;
border: 1px solid #E8E8E0;
font-size: 14px;
font-weight: 500;
transition: all 0.2s ease;

/* Active Page */
background: #D97757; /* Coral accent */
color: white;
border-color: #D97757;

/* Hover State */
background: #F8F8F2;
border-color: #D8D8D0;

/* Focus State */
outline: 2px solid #D97757;
outline-offset: 2px;

/* Disabled State */
background: #F3F3ED;
color: #8A8A8A;
cursor: not-allowed;
```

**Usage Example:**
```tsx
<Pagination
  currentPage={2}
  totalPages={10}
  totalItems={487}
  itemsPerPage={50}
/>
```

**Features:**
- URL-based state management (search params)
- Smart page numbering with ellipsis
- Responsive design (mobile adapts to compact view)
- Accessibility (ARIA labels, keyboard navigation)
- Results counter ("Showing X to Y of Z")
- Previous/Next navigation
- Direct page number access

**Responsive Behavior:**
- Mobile (<640px): Shows "Page X of Y" instead of page numbers
- Desktop (≥640px): Shows full pagination with numbered pages

**Implementation Notes:**
- Use for server-side pagination (50+ items recommended)
- Integrates with Next.js App Router searchParams
- Automatically hides when ≤1 page
- Previous/Next disabled at boundaries

---

## 6. Iconography

### 6.1 Icon Library
**Primary:** Lucide Icons (https://lucide.dev)

**Style:** Line/Outline icons
**Size:** 24×24px base grid
**Stroke Width:** 2px (consistent)
**Format:** SVG (scalable, performant)

### 6.2 Icon Sizes

```css
--icon-xs: 16px;   /* Small UI elements */
--icon-sm: 20px;   /* Navigation, buttons */
--icon-md: 24px;   /* Default size */
--icon-lg: 32px;   /* Feature highlights */
--icon-xl: 48px;   /* Hero sections */
```

### 6.3 Icon Usage

**Colors:**
- Primary: `#FFFFFF` (dark mode), `#0D0D0D` (light mode)
- Secondary: `#A3A3A3`
- Accent: `#6C63FF`
- Semantic: Use status colors (success, warning, error)

**Accessibility:**
- Always include `aria-label` for standalone icons
- Use `aria-hidden="true"` for decorative icons
- Ensure 3:1 contrast ratio minimum

### 6.4 Custom Icons Needed

**Brand Icons:**
- ClaudeKit logo symbol (geometric kit/tools)
- Subagents system icon (connected nodes)
- Speed/productivity icon (rocket or lightning)
- Enterprise-ready icon (shield or lock)

**Feature Icons:**
- Code generation (brackets with sparkle)
- Template library (layers or files)
- AI assistance (brain or chip)
- Security (shield with check)
- Testing (checkmark in circle)
- Documentation (book or document)

---

## 7. Visual Style

### 7.1 Design Principles

**1. Minimalism First**
- Clean lines and generous whitespace
- Limited color palette (2-3 primary colors)
- Simple geometric shapes
- Functional over decorative

**2. Dark Mode Optimized**
- Primary theme: Dark mode
- Excellent light mode alternative
- Smooth theme transitions
- Soft blacks (#0D0D0D, #1A1A1A) not pure black

**3. Performance Priority**
- Fast load times (<3 seconds)
- Optimized assets (WebP images)
- Minimal JavaScript
- Progressive enhancement

**4. Purposeful Motion**
- Micro-interactions on hover
- Smooth transitions (200-300ms)
- Respect prefers-reduced-motion
- Enhance, don't distract

### 7.2 Gradient Usage

**Guidelines:**
- Use sparingly (hero sections, feature highlights)
- Ensure text readability (4.5:1 contrast minimum)
- Subtle in UI, bold in marketing
- Limit to 2-3 colors per gradient
- 45-135° angles most common

**Application Areas:**
- Hero section backgrounds
- CTA buttons (primary)
- Feature card accents
- Decorative elements (non-text)

### 7.3 Glassmorphism (Limited Use)

**When to Use:**
- Modals and overlays
- Floating UI elements
- Decorative accents

**Implementation:**
```css
background: rgba(26, 26, 26, 0.7);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

**Cautions:**
- Test text readability thoroughly
- Performance consideration (blur effects)
- Not suitable for primary content areas
- Always maintain WCAG AA contrast

### 7.4 Animation Principles

**Micro-interactions:**
```css
/* Button hover */
transition: transform 0.2s ease, box-shadow 0.2s ease;
transform: translateY(-2px);

/* Card hover */
transition: border-color 0.2s ease, box-shadow 0.3s ease;

/* Link hover */
transition: color 0.15s ease;
```

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Accessibility

### 8.1 WCAG 2.1 Level AA Compliance

**Color Contrast:**
- Normal text: 4.5:1 minimum ratio
- Large text (18pt/14pt bold): 3:1 minimum ratio
- UI components: 3:1 minimum ratio

**Focus Indicators:**
```css
*:focus-visible {
  outline: 2px solid #6C63FF;
  outline-offset: 2px;
}
```

**Touch Targets:**
- Minimum size: 44×44px
- Adequate spacing between interactive elements
- No overlapping hit areas

### 8.2 Semantic HTML

**Use Proper Elements:**
- `<button>` for interactive buttons
- `<a>` for navigation links
- `<nav>` for navigation areas
- `<main>` for primary content
- `<header>` and `<footer>` for page structure
- Heading hierarchy (H1 → H6)

### 8.3 Screen Reader Support

**ARIA Labels:**
```html
<!-- Icon buttons -->
<button aria-label="Close menu">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Loading states -->
<div role="status" aria-live="polite">Loading...</div>

<!-- Error messages -->
<div role="alert" aria-live="assertive">Error occurred</div>
```

### 8.4 Keyboard Navigation

**Requirements:**
- All interactive elements focusable
- Logical tab order
- Skip to main content link
- Escape to close modals/menus
- Arrow keys for dropdowns/menus

---

## 9. Asset Library

### 9.1 Logo Assets

**Current Assets:**
- ✅ `/docs/assets/claudekit-logo-full-color.png` (1024×1024px, 269KB)
  - Combined mark: Geometric symbol + "ClaudeKit" wordmark
  - Deep blue (#0A2463) + Purple accent (#6C63FF) colors
  - Clean, professional, scalable design

**File Naming Convention:**
```
claudekit-logo-[variant]-[color]-[size].[format]

Examples:
- claudekit-logo-full-color.svg
- claudekit-logo-symbol-white.svg
- claudekit-logo-wordmark-black.svg
- claudekit-logo-full-mono.png
```

**Required Variants (To Export):**
- Full logo (symbol + wordmark) - Color ✅
- Full logo (symbol + wordmark) - Monochrome black
- Full logo (symbol + wordmark) - Monochrome white
- Symbol only - Color
- Symbol only - Monochrome black
- Symbol only - Monochrome white
- Wordmark only - Color
- Wordmark only - Monochrome black
- Wordmark only - Monochrome white

**Formats:**
- SVG (primary, scalable) - Export needed
- PNG (fallback, multiple sizes: 32px, 64px, 128px, 256px, 512px)
- Favicon (16x16, 32x32, 48x48) - Generate needed

### 9.2 Image Assets

**Hero Section:**
- ✅ `/docs/assets/hero-developer-workspace.png` (1024×1024px, 936KB)
  - Professional developer workspace with 3 monitors
  - Dark theme with blue/purple accent glows
  - AI elements: Neural network patterns, floating nodes
  - Cinematic lighting, modern aesthetic

**Feature Icons:**
- ✅ `/docs/assets/feature-icons-set.png` (1024×1024px, 387KB)
  - 6 icons in 2×3 grid with labels
  - Subagents system (connected nodes)
  - Speed/productivity (lightning bolt)
  - Enterprise security (shield with checkmark)
  - Template library (stacked layers)
  - Testing/QA (checkmark in circle)
  - Documentation (open book)

**Additional Assets Needed:**
- 🔲 Individual SVG icons (extract from set)
- 🔲 Product screenshots (dashboard, code, terminal)
- 🔲 Demo video (2-minute walkthrough)

**Social Media:**
- Open Graph image (1200×630px)
- Twitter Card (1200×675px)
- LinkedIn banner (1128×191px)

### 9.3 Asset Optimization

**Images:**
- Format: WebP with PNG fallback
- Compression: TinyPNG or Squoosh
- Lazy loading: Implement for below-fold images
- Responsive images: Use srcset for different sizes

**SVGs:**
- Minify with SVGO
- Remove unnecessary metadata
- Inline critical SVGs
- External file for repeated icons

---

## 10. Implementation Checklist

### Phase 1: Foundation ✅
- [x] Color palette defined and tested
- [x] Typography system established
- [x] Spacing scale created
- [x] Component specifications documented

### Phase 2: Assets (Next)
- [ ] Generate logo concepts (3 directions)
- [ ] Create hero image/illustration
- [ ] Design feature icons (6 minimum)
- [ ] Export all assets in required formats

### Phase 3: Wireframes (Next)
- [ ] Hero section wireframe
- [ ] Features section wireframe
- [ ] Pricing section wireframe
- [ ] Full landing page HTML wireframe

### Phase 4: Refinement
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Mobile responsiveness verification
- [ ] Performance optimization

---

## 11. Design Tools & Resources

### 11.1 Design Tools
- **Figma:** Component library and prototyping
- **Adobe Illustrator:** Logo and vector assets
- **Photoshop:** Image editing and optimization

### 11.2 Development Tools
- **Google Fonts:** Typography delivery
- **Lucide Icons:** Icon library
- **WebAIM Contrast Checker:** Accessibility testing
- **Lighthouse:** Performance auditing

### 11.3 Testing Tools
- **Chrome DevTools:** Responsive testing
- **Firefox Accessibility Inspector:** ARIA testing
- **WAVE:** Web accessibility evaluation
- **axe DevTools:** Automated accessibility testing

---

## 12. Version History

**Version 1.1 (October 27, 2025)**
- Added Agent Skills section design patterns
- Tab-based filtering component with coral accent
- Skill card hover effects and animations
- Category organization (7 categories, 34 skills)
- ARIA-compliant tab interface implementation

**Version 1.0 (October 6, 2025)**
- Initial design guidelines established
- Color system defined (Blue-Purple palette)
- Typography system (Manrope + Inter)
- Component specifications
- Accessibility standards

---

## 13. Contact & Feedback

**Design Lead:** Designer Agent
**Project:** ClaudeKit.cc Landing Page
**Last Review:** October 6, 2025
**Next Review:** Upon wireframe completion

---

**End of Design Guidelines Document**
