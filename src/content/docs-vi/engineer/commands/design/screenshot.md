---
lang: vi
title: /design:screenshot
description: Documentation for screenshot
section: engineer
kit: engineer
category: docs/commands/design
order: 44
published: true
---

# /design:screenshot

Convert any screenshot into a working implementation. Reverse-engineer existing designs, recreate inspirational interfaces, or implement design mockups with pixel-perfect accuracy. See it, build it.

## Syntax

```bash
/design:screenshot [screenshot file path]
```

## How It Works

The `/design:screenshot` command transforms visual references into code:

### 1. Visual Analysis

- Processes screenshot using AI vision
- Extracts layout structure and component hierarchy
- Identifies colors, fonts, spacing, and sizing
- Detects responsive behavior patterns
- Measures proportions and relationships

### 2. Component Decomposition

- Breaks design into reusable components
- Identifies component patterns (cards, buttons, forms)
- Maps component relationships and nesting
- Determines component props and variants
- Plans component file structure

### 3. Style Extraction

- Extracts exact color values (hex, RGB, HSL)
- Identifies font families, sizes, weights
- Measures spacing system and grid layout
- Detects border radius, shadows, gradients
- Captures animation and transition details

### 4. Code Generation

- Generates clean, typed React/Vue components
- Applies Tailwind CSS or CSS-in-JS
- Implements responsive breakpoints
- Adds interactive states (hover, focus, active)
- Includes accessibility attributes

### 5. Pixel-Perfect Refinement

- Matches exact spacing and sizing
- Replicates typography hierarchy
- Implements precise color matching
- Ensures alignment and proportions
- Tests across different screen sizes

## Examples

### Landing Page Hero

```bash
/design:screenshot [stripe-hero-section.png]
```

**Analysis Output:**
```
Screenshot Analysis: Stripe Hero Section
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Detected Layout:
├── Container: max-width 1280px, padding 80px (desktop) / 24px (mobile)
├── Grid: 2 columns (55% / 45%)
├── Left Column: Text content + CTAs
└── Right Column: Product visual with floating elements

Extracted Styles:
├── Background: #0A2540 (dark blue)
├── Headline Color: #FFFFFF
├── Description Color: #8898AA (light gray)
├── Primary Button: #635BFF (purple), hover: #4F46E5
└── Secondary Button: transparent, border: #635BFF

Typography:
├── Headline: "Söhne" font, 72px, 600 weight, -0.03em tracking
├── Description: "Söhne" font, 21px, 400 weight, 1.5 line-height
├── Button Text: "Söhne" font, 16px, 500 weight
└── Line height: Headline 1.1, Body 1.5

Spacing:
├── Headline → Description: 24px
├── Description → CTAs: 32px
├── Between buttons: 16px
└── Section padding: 120px top/bottom

Component Structure:
Hero
├── Container
│   ├── Grid
│   │   ├── ContentColumn
│   │   │   ├── Headline
│   │   │   ├── Description
│   │   │   └── CTAGroup
│   │   │       ├── PrimaryButton
│   │   │       └── SecondaryButton
│   │   └── VisualColumn
│   │       ├── ProductImage
│   │       └── FloatingCards (3)
```

**Generated Implementation:**
```typescript
// src/components/Hero.tsx
import { Button } from './Button';

export function Hero() {
  return (
    <section className="bg-[#0A2540] py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-semibold text-white leading-tight tracking-tight">
              Financial infrastructure for the internet
            </h1>

            <p className="text-xl lg:text-2xl text-[#8898AA] leading-relaxed">
              Millions of companies of all sizes use Stripe to accept payments,
              send payouts, and manage their businesses online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#635BFF] hover:bg-[#4F46E5]"
              >
                Start now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#635BFF] text-[#635BFF]"
              >
                Contact sales
              </Button>
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/product-screenshot.png"
                alt="Product interface"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-8 -left-8 z-20 animate-float">
              <div className="bg-white rounded-lg shadow-xl p-4 w-48">
                <div className="text-sm text-gray-600">Revenue</div>
                <div className="text-2xl font-semibold">$2,456,789</div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 z-20 animate-float-delayed">
              <div className="bg-white rounded-lg shadow-xl p-4 w-40">
                <div className="text-sm text-gray-600">Growth</div>
                <div className="text-2xl font-semibold text-green-600">
                  +34%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Generated animations
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 3s ease-in-out 0.5s infinite;
}
```

**Result:**
```
✓ Pixel-perfect match to screenshot
✓ Responsive across all breakpoints
✓ Smooth animations included
✓ Accessible (WCAG AA)
✓ Production-ready code
```

### Dashboard Card

```bash
/design:screenshot [analytics-card.png]
```

**Generated Implementation:**
```typescript
// src/components/AnalyticsCard.tsx
import { TrendingUp, TrendingDown } from 'lucide-react';

interface AnalyticsCardProps {
  title: string;
  value: string;
  change: number;
  timeframe: string;
}

export function AnalyticsCard({
  title,
  value,
  change,
  timeframe
}: AnalyticsCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <span className="text-xs text-gray-400">{timeframe}</span>
      </div>

      {/* Value */}
      <div className="mb-3">
        <div className="text-3xl font-bold text-gray-900">{value}</div>
      </div>

      {/* Change Indicator */}
      <div className="flex items-center gap-2">
        {isPositive ? (
          <TrendingUp className="w-4 h-4 text-green-600" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-600" />
        )}
        <span
          className={`text-sm font-medium ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {isPositive ? '+' : ''}{change}%
        </span>
        <span className="text-sm text-gray-500">vs last period</span>
      </div>
    </div>
  );
}

// Usage example
<AnalyticsCard
  title="Total Revenue"
  value="$45,231"
  change={12.5}
  timeframe="Last 30 days"
/>
```

### Mobile App Screen

```bash
/design:screenshot [instagram-profile-mobile.png]
```

**Generated Implementation:**
```typescript
// src/screens/ProfileScreen.tsx
import { ArrowLeft, Settings, Grid, List } from 'lucide-react';

export function ProfileScreen() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <button className="p-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">username</h1>
        <button className="p-2">
          <Settings className="w-6 h-6" />
        </button>
      </header>

      {/* Profile Section */}
      <div className="p-4">
        {/* Avatar and Stats Row */}
        <div className="flex items-center gap-4 mb-4">
          {/* Avatar */}
          <div className="relative">
            <img
              src="/avatar.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover ring-2 ring-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 ring-offset-2"
            />
          </div>

          {/* Stats */}
          <div className="flex-1 flex justify-around">
            <div className="text-center">
              <div className="text-xl font-bold">1,234</div>
              <div className="text-sm text-gray-500">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">5.6K</div>
              <div className="text-sm text-gray-500">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">432</div>
              <div className="text-sm text-gray-500">Following</div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-4">
          <h2 className="font-semibold text-base mb-1">Full Name</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Bio description goes here 🎨
            <br />
            <a href="#" className="text-blue-600">
              link.com
            </a>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg font-semibold">
            Follow
          </button>
          <button className="flex-1 py-2 px-4 bg-gray-100 text-black rounded-lg font-semibold">
            Message
          </button>
          <button className="py-2 px-4 bg-gray-100 rounded-lg">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button className="flex-1 py-3 border-b-2 border-black">
          <Grid className="w-6 h-6 mx-auto" />
        </button>
        <button className="flex-1 py-3 border-b-2 border-transparent">
          <List className="w-6 h-6 mx-auto text-gray-400" />
        </button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-3 gap-1 p-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-gray-200"
          >
            <img
              src={`/post-${i}.jpg`}
              alt={`Post ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Complex Form

```bash
/design:screenshot [checkout-form.png]
```

**Generated Implementation:**
```typescript
// src/components/CheckoutForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CreditCard, Lock } from 'lucide-react';

const checkoutSchema = z.object({
  email: z.string().email('Invalid email'),
  cardNumber: z.string().regex(/^\d{16}$/, 'Invalid card number'),
  expiry: z.string().regex(/^\d{2}\/\d{2}$/, 'Format: MM/YY'),
  cvc: z.string().regex(/^\d{3,4}$/, 'Invalid CVC'),
  name: z.string().min(2, 'Name required'),
  address: z.string().min(5, 'Address required'),
  city: z.string().min(2, 'City required'),
  postalCode: z.string().min(5, 'Postal code required'),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutFormData) => {
    // Process payment
    console.log('Checkout data:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Payment Details
        </h2>
        <p className="text-gray-600">
          Complete your purchase securely
        </p>
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Card Information */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Card Information
        </label>

        {/* Card Number */}
        <div className="relative mb-3">
          <CreditCard className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          <input
            {...register('cardNumber')}
            type="text"
            placeholder="1234 5678 9012 3456"
            maxLength={16}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-t-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Expiry and CVC */}
        <div className="grid grid-cols-2 gap-3">
          <input
            {...register('expiry')}
            type="text"
            placeholder="MM / YY"
            maxLength={5}
            className="px-4 py-3 border border-gray-300 rounded-bl-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="relative">
            <input
              {...register('cvc')}
              type="text"
              placeholder="CVC"
              maxLength={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-br-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Lock className="absolute right-4 top-3.5 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {errors.cardNumber && (
          <p className="mt-1 text-sm text-red-600">{errors.cardNumber.message}</p>
        )}
      </div>

      {/* Cardholder Name */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cardholder Name
        </label>
        <input
          {...register('name')}
          type="text"
          placeholder="Full name on card"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Billing Address */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Billing Address
        </label>

        <input
          {...register('address')}
          type="text"
          placeholder="Street address"
          className="w-full px-4 py-3 border border-gray-300 rounded-t-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
        />

        <div className="grid grid-cols-2 gap-3">
          <input
            {...register('city')}
            type="text"
            placeholder="City"
            className="px-4 py-3 border border-gray-300 rounded-bl-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            {...register('postalCode')}
            type="text"
            placeholder="Postal code"
            className="px-4 py-3 border border-gray-300 rounded-br-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="animate-spin">⏳</span>
            Processing...
          </span>
        ) : (
          'Complete Payment'
        )}
      </button>

      {/* Security Notice */}
      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
        <Lock className="w-4 h-4" />
        <span>Secured by 256-bit SSL encryption</span>
      </div>
    </form>
  );
}
```

## When to Use /design:screenshot

### ✅ Use /design:screenshot for:

- **Design Inspiration**: Implement designs you admire
- **Design Mockups**: Convert Figma/Sketch exports to code
- **Competitive Analysis**: Recreate competitor interfaces
- **Design Handoff**: Designer sends screenshot, you build it
- **Legacy Redesign**: Modernize old interfaces
- **Rapid Prototyping**: Convert sketches to working code
- **Learning**: Study and replicate great designs
- **Client References**: "Make it look like this"

### ❌ Don't use /design:screenshot for:

- **New Designs**: Use `/design:fast` or `/design:good`
- **Just Analysis**: Use `/design:describe` to understand first
- **Complex Interactions**: Video might be better (see `/design:video`)
- **Copyright Concerns**: Don't copy protected designs exactly

## Best Practices

### Provide High-Quality Screenshots

✅ **Good:**
```bash
# High resolution (2x or higher)
/design:screenshot [figma-export@2x.png]

# Full context (not cropped)
/design:screenshot [complete-page-view.png]

# Clear, sharp images
/design:screenshot [no-blur-screenshot.png]
```

❌ **Bad:**
```bash
# Low resolution, pixelated
/design:screenshot [tiny-image.png]

# Partial view, missing context
/design:screenshot [just-corner.png]

# Blurry, out of focus
/design:screenshot [unclear.png]
```

### Include Multiple Views

For responsive designs:
```bash
# Desktop view
/design:screenshot [desktop-view.png]

# Then specify mobile
/design:screenshot [mobile-view.png] - mobile version of previous design

# Tablet if different
/design:screenshot [tablet-view.png] - tablet variant
```

### Specify Adaptations

```bash
# Use exact colors
/design:screenshot [design.png] - use exact colors from screenshot

# Adapt for brand
/design:screenshot [design.png] - adapt to our brand colors: primary #3B82F6, secondary #10B981

# Simplify
/design:screenshot [complex-design.png] - simplify animations, focus on layout
```

## Advanced Usage

### Component Extraction

```bash
# Extract single component
/design:screenshot [full-page.png] - only implement the navigation bar component

# Specific element
/design:screenshot [dashboard.png] - extract the stats cards pattern as reusable component
```

### Style Guide Generation

```bash
# Multiple screenshots
/design:screenshot [page1.png, page2.png, page3.png] - extract consistent design system across all pages
```

### Responsive Reconstruction

```bash
# Create responsive version
/design:screenshot [desktop-only.png] - implement and extrapolate mobile/tablet responsive versions
```

## Accuracy Level

### Pixel-Perfect Mode (Default)

```
Matches:
✓ Exact spacing and sizing
✓ Precise color values
✓ Font sizes and weights
✓ Border radius and shadows
✓ Layout proportions

May vary:
- Exact fonts (uses similar web-safe alternatives)
- Images (uses placeholders unless provided)
- Complex animations (simplified)
```

### Adaptive Mode

```bash
/design:screenshot [design.png] - adapt loosely, prioritize responsiveness over exact match
```

More flexible implementation:
- Adapts spacing to grid system
- Uses standard component library
- Focuses on overall feel, not pixels

## Troubleshooting

### Colors Don't Match

**Problem:** Generated colors slightly off

**Solution:**
```bash
# Specify exact colors
/design:screenshot [design.png] - use these exact colors: primary #3B82F6, accent #F59E0B
```

### Layout Not Exact

**Problem:** Spacing or proportions different

**Solution:**
```bash
/fix [compare screenshot to implementation] - adjust spacing to match exactly
```

### Missing Interactions

**Problem:** Hover states or animations not included

**Solution:**
```bash
# Provide video showing interactions
/design:video [interaction-demo.mp4]

# Or describe explicitly
/design:screenshot [design.png] - add hover effects: buttons scale slightly, cards lift with shadow
```

### Font Not Available

**Problem:** Screenshot uses custom font

**Solution:**
```typescript
// ClaudeKit suggests similar fonts
// Original: "Custom Font Pro"
// Suggested: "Inter" (similar characteristics)

// Or specify font
/design:screenshot [design.png] - use "Your Font Name" font from Google Fonts
```

## Integration Workflow

### Designer → Developer Handoff

```bash
# 1. Designer exports screen
# (Figma export at 2x)

# 2. Developer implements
/design:screenshot [figma-export.png]

# 3. Review and adjust
/fix [compare side by side] - adjust button padding and card shadows

# 4. Iterate
/design:screenshot [updated-design.png] - implement changes from v2
```

### Competitive Analysis Workflow

```bash
# 1. Screenshot competitor
# (Take high-res screenshots)

# 2. Analyze first
/design:describe [competitor-page.png]

# 3. Implement adapted version
/design:screenshot [competitor-page.png] - implement similar layout but with our brand and unique twist

# 4. Ensure differentiation
# (Don't copy exactly, adapt and improve)
```

## Legal & Ethical Considerations

### ✅ Appropriate Use:

- **Learning**: Study and understand design patterns
- **Internal Tools**: Recreate layouts for internal use
- **Inspiration**: Use as reference, create unique version
- **Design Handoff**: Implement your own mockups
- **Pattern Libraries**: Recreate common UI patterns

### ❌ Avoid:

- **Direct Copying**: Exact replicas of copyrighted designs
- **Competitor Cloning**: Identical copies without differentiation
- **Brand Theft**: Using exact brand assets and styling
- **Trademark Violation**: Copying logos and branded elements

**Best Practice:** Use as inspiration, implement your unique version.

## Next Steps

- [/design:describe](/docs/engineer/commands/design/describe) - Analyze screenshot first
- [/design:video](/docs/engineer/commands/design/video) - For animated interfaces
- [/design:good](/docs/engineer/commands/design/good) - Polish the implementation
- [/fix](/docs/engineer/commands/fix/ui) - Fine-tune the result

---

**Key Takeaway**: `/design:screenshot` transforms any visual reference into working code with pixel-perfect accuracy. See great design, implement it. Perfect for design handoffs, competitive inspiration, and rapid prototyping from visual references.
