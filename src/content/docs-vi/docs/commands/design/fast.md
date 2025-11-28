---
title: /design:fast
description: "Documentation for /design:fast
description:
section: docs
category: docs/commands/design
order: 42
published: true"
section: docs
category: docs/commands/design
order: 42
published: true
---

# /design:fast

Rapidly prototype UI designs with fast turnaround. Perfect for quick iterations, MVP launches, internal tools, or when you need functional designs without the polish time. Speed over perfection - ship fast, iterate faster.

## Syntax

```bash
/design:fast [brief design description]
```

## How It Works

The `/design:fast` command prioritizes speed and functionality:

### 1. Quick Requirements Capture

- Parses essential requirements from brief description
- Skips lengthy research phase
- Uses proven patterns immediately
- Focuses on core functionality

### 2. Template-Based Design

- Leverages existing component libraries
- Uses standard design patterns
- Applies pre-built layouts
- Minimal custom styling

### 3. Rapid Implementation

- Uses utility-first CSS (Tailwind)
- Copies proven component structures
- Focuses on responsiveness basics
- Skips custom animations

### 4. Functional First

- Prioritizes working interactions
- Basic accessibility compliance
- Mobile-responsive by default
- Clean, readable code

### 5. Fast Delivery

- Generates complete components in minutes
- Includes only essential styles
- Documentation comments
- Ready to iterate

## Examples

### Dashboard MVP

```bash
/design:fast [admin dashboard with user table, stats cards, and sidebar navigation]
```

**What happens:**
```
⚡ Fast Design Mode: Speed priority

1. Component Selection
   ✓ Using: Tailwind CSS
   ✓ Pattern: Standard admin layout
   ✓ Components: Sidebar, Header, Table, Cards
   ✓ Time estimate: 15 minutes

2. Layout Implementation
   ✓ Three-column layout (sidebar + main + none)
   ✓ Responsive breakpoints (mobile stacks)
   ✓ Basic typography scale
   ✓ Standard spacing (4, 8, 16, 24px)

3. Components Generated
   ✓ Sidebar.tsx (navigation links, logo)
   ✓ StatsCards.tsx (4 metric cards)
   ✓ UserTable.tsx (sortable table)
   ✓ DashboardLayout.tsx (wrapper)

4. Styling Approach
   - Tailwind utility classes
   - No custom CSS
   - Basic hover states
   - Standard colors (gray, blue, green, red)

5. Result
   ✓ Fully functional dashboard
   ✓ Mobile responsive
   ✓ Clean, professional look
   ✓ Ready for data integration

Generated Files:
✓ src/components/DashboardLayout.tsx
✓ src/components/Sidebar.tsx
✓ src/components/StatsCards.tsx
✓ src/components/UserTable.tsx

Time: 12 minutes
Lines of Code: 450
```

### Landing Page Quick

```bash
/design:fast [SaaS landing page with hero, features, pricing, and contact form]
```

**What happens:**
```
⚡ Fast Design Mode: MVP landing page

1. Section Planning
   ✓ Hero: headline + subheading + CTA + image
   ✓ Features: 3-column grid, icons + text
   ✓ Pricing: 3 tiers, simple cards
   ✓ Contact: basic form (name, email, message)

2. Component Structure
   ✓ LandingPage.tsx (main container)
   ✓ Hero.tsx (centered content)
   ✓ Features.tsx (grid layout)
   ✓ Pricing.tsx (card grid)
   ✓ ContactForm.tsx (form fields)

3. Design Decisions
   - Single color scheme (blue-600)
   - Inter font (Google Fonts)
   - Standard button styles
   - Basic card shadows
   - No animations (static)

4. Responsive Behavior
   ✓ Desktop: 3-column grids
   ✓ Tablet: 2-column grids
   ✓ Mobile: stacked single column
   ✓ Readable font sizes all screens

5. Form Integration
   ✓ Basic validation (HTML5)
   ✓ Submit handler placeholder
   ✓ Error message states
   ✓ Success feedback

Generated Files:
✓ src/pages/LandingPage.tsx
✓ src/components/Hero.tsx
✓ src/components/Features.tsx
✓ src/components/Pricing.tsx
✓ src/components/ContactForm.tsx

Time: 18 minutes
Ready for: content + backend integration
```

### Login Flow Prototype

```bash
/design:fast [login page with email/password, social auth buttons, forgot password link]
```

**What happens:**
```
⚡ Fast Design Mode: Authentication pages

1. Pages Created
   ✓ Login.tsx
   ✓ ForgotPassword.tsx
   ✓ ResetPassword.tsx

2. Login Page Components
   ✓ Centered card layout (max-width: 400px)
   ✓ Email input (with validation)
   ✓ Password input (with show/hide toggle)
   ✓ Remember me checkbox
   ✓ Submit button
   ✓ Social auth buttons (Google, GitHub)
   ✓ Links (forgot password, sign up)

3. Form Handling
   ✓ React Hook Form integration
   ✓ Zod validation schema
   ✓ Error message display
   ✓ Loading states
   ✓ Success redirects

4. Security Basics
   ✓ Password field type="password"
   ✓ Autocomplete attributes
   ✓ CSRF token placeholder
   ✓ Rate limiting note

Generated Files:
✓ src/pages/Login.tsx
✓ src/pages/ForgotPassword.tsx
✓ src/pages/ResetPassword.tsx
✓ src/schemas/authSchema.ts

Time: 10 minutes
Status: Ready for API integration
```

### Mobile App Screen

```bash
/design:fast [mobile profile screen with avatar, stats, action buttons, and content grid]
```

**What happens:**
```
⚡ Fast Design Mode: Mobile-first design

1. Screen Layout
   ✓ Header (back button + title + edit)
   ✓ Profile section (avatar + name + bio)
   ✓ Stats row (3 columns)
   ✓ Action buttons (2 buttons)
   ✓ Tab navigation
   ✓ Content grid (3 columns)

2. Component Structure
   ✓ ProfileScreen.tsx (main)
   ✓ ProfileHeader.tsx
   ✓ StatsRow.tsx
   ✓ ActionButtons.tsx
   ✓ ContentGrid.tsx

3. Mobile Optimizations
   ✓ Touch targets: minimum 44px
   ✓ Safe area insets
   ✓ No hover states (touch only)
   ✓ Swipe gestures placeholder
   ✓ Pull to refresh structure

4. Styling
   - Tailwind Mobile CSS
   - System font stack
   - Standard iOS/Android patterns
   - Minimal custom styles

Generated Files:
✓ src/screens/ProfileScreen.tsx
✓ src/components/ProfileHeader.tsx
✓ src/components/StatsRow.tsx
✓ src/components/ContentGrid.tsx

Time: 14 minutes
Platform: React Native / Expo compatible
```

## When to Use /design:fast

### ✅ Use /design:fast for:

- **MVPs**: Launch quickly, iterate later
- **Prototypes**: Test ideas with users
- **Internal Tools**: Admin dashboards, internal apps
- **Quick Iterations**: Rapid feature testing
- **Hackathons**: Ship working products fast
- **Proof of Concepts**: Validate ideas quickly
- **Learning Projects**: Focus on functionality
- **Time Constraints**: Tight deadlines

### ❌ Don't use /design:fast for:

- **Customer-Facing Products**: Use `/design:good` instead
- **Brand-Critical Pages**: Need polish and custom design
- **Marketing Materials**: Require high-quality visuals
- **Complex Animations**: Fast mode keeps it simple
- **Unique Design Requirements**: Need custom approach

## Speed Optimizations

### Template Library

Fast mode uses proven templates:

**Admin Layouts:**
- Sidebar navigation
- Top navigation
- Split navigation
- Mobile drawer

**Data Display:**
- Tables with sorting
- Card grids
- List views
- Detail pages

**Forms:**
- Login/signup
- Contact forms
- Multi-step wizards
- Settings pages

**Landing Pages:**
- Hero + features + pricing
- App showcase
- Product page
- Coming soon

### Component Libraries Used

```typescript
// Fast mode defaults
import { Button, Input, Card } from '@/components/ui';

// Pre-styled, ready to use
<Button variant="primary">Click me</Button>
<Input type="email" placeholder="Email" />
<Card className="p-6">Content here</Card>
```

### CSS Strategy

```jsx
// Tailwind utility classes only
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h3 className="text-lg font-semibold text-gray-900">Title</h3>
  <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
    Action
  </button>
</div>

// No custom CSS files needed
// No complex animations
// Fast to write, fast to modify
```

## Quality Standards

Even in fast mode, designs maintain:

### ✅ Included:

- **Responsive Design**: Mobile, tablet, desktop
- **Accessibility Basics**: Semantic HTML, ARIA when needed
- **Clean Code**: Readable, well-structured
- **Type Safety**: TypeScript with proper types
- **Basic Interactions**: Hover, focus, active states
- **Error States**: Form validation, loading states
- **Professional Look**: Clean, modern, functional

### ❌ Not Included:

- **Custom Animations**: Keep it static
- **Brand Customization**: Standard colors/fonts
- **Pixel-Perfect Design**: Good enough is good enough
- **Advanced Interactions**: Complex gestures, micro-interactions
- **Custom Illustrations**: Use placeholders or icons
- **Performance Optimization**: Works, but not optimized
- **Cross-Browser Testing**: Modern browsers only

## Iteration Workflow

Fast design is meant for rapid iteration:

```bash
# 1. Create initial version
/design:fast [user dashboard]

# 2. Test with users
# ... gather feedback ...

# 3. Quick iteration
/design:fast [update dashboard - add search bar and filters]

# 4. Keep iterating
/design:fast [dashboard refinement - improve mobile layout]

# 5. Once stable, upgrade
/design:good [polish dashboard design with custom brand styling]
```

## Best Practices

### Be Specific But Brief

✅ **Good:**
```bash
/design:fast [e-commerce checkout with 3 steps: cart, shipping, payment]
/design:fast [blog post page with author card, related posts, comments]
/design:fast [settings page with tabs: profile, security, notifications]
```

❌ **Too Vague:**
```bash
/design:fast [make a website]
/design:fast [design something cool]
```

❌ **Too Detailed (use /design:good):**
```bash
/design:fast [luxury brand homepage with custom animations, parallax scrolling, video backgrounds, micro-interactions...]
```

### Accept Good Enough

Fast mode is about **progress over perfection**:

✅ **Good mindset:**
- "Good enough to test with users"
- "Functional and clean"
- "Ship now, polish later"

❌ **Wrong mindset:**
- "This must be pixel-perfect"
- "I need custom animations"
- "Every detail must be unique"

### Use for Learning

Fast mode is great for learning:

```bash
# Learn React patterns
/design:fast [React todo app with CRUD operations]

# Learn form handling
/design:fast [multi-step registration form]

# Learn data display
/design:fast [data table with sorting, filtering, pagination]
```

## Generated Code Quality

### Example: Button Component

```typescript
// Generated by /design:fast
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false
}: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded font-medium transition-colors";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  );
}
```

Clean, typed, reusable, simple.

### Example: Form Component

```typescript
// Generated by /design:fast
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('Login data:', data);
    // TODO: Implement login API call
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="mt-1 block w-full rounded border-gray-300 shadow-sm"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          {...register('password')}
          type="password"
          id="password"
          className="mt-1 block w-full rounded border-gray-300 shadow-sm"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Log In
      </button>
    </form>
  );
}
```

Functional, validated, ready to integrate.

## Time Estimates

Typical delivery times:

| Design Type | Fast Mode | Good Mode | Time Saved |
|-------------|-----------|-----------|------------|
| Login Page | 8-12 min | 2-4 hours | 95% faster |
| Dashboard | 15-20 min | 8-12 hours | 96% faster |
| Landing Page | 15-25 min | 6-10 hours | 95% faster |
| Form Wizard | 20-30 min | 4-6 hours | 92% faster |
| Profile Screen | 10-15 min | 3-5 hours | 95% faster |
| Data Table | 15-20 min | 4-6 hours | 94% faster |

## Upgrade Path

Start fast, upgrade when ready:

```bash
# Phase 1: MVP (Week 1)
/design:fast [all core pages]

# Phase 2: User Testing (Week 2-3)
# Test with real users, gather feedback

# Phase 3: Polish (Week 4)
/design:good [upgrade landing page with brand styling]
/design:good [polish dashboard with custom charts]

# Phase 4: Optimize
/fix:ui [optimize performance]
```

## Troubleshooting

### Design Too Basic

**Problem:** Generated design too simple

**Solution:**
```bash
# Add specific requirements
/design:fast [dashboard with advanced filtering and export functionality]

# Or upgrade to good mode
/design:good [polished version of the dashboard]
```

### Missing Features

**Problem:** Some features not included

**Solution:**
```bash
# Iterate quickly
/design:fast [add missing feature: notifications dropdown]
```

### Need Customization

**Problem:** Need brand colors/fonts

**Solution:**
```bash
# Manually update CSS variables
:root {
  --primary: #your-brand-color;
  --font-sans: 'Your Font', sans-serif;
}

# Or use good mode with brand requirements
/design:good [dashboard with brand guidelines: colors #..., font ...]
```

## Next Steps

- [/design:good](/docs/commands/design/good) - Upgrade to polished design
- [/design:screenshot](/docs/commands/design/screenshot) - Implement from mockup
- [/cook](/docs/commands/core/cook) - Add backend functionality
- [/fix:ui](/docs/commands/fix/ui) - Fix any UI issues

---

**Key Takeaway**: `/design:fast` delivers functional, professional designs in minutes not hours. Perfect for MVPs, prototypes, and rapid iteration. Ship fast, learn faster, polish later. Speed is a feature.
