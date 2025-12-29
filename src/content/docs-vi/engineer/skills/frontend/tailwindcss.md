---
title: Tailwind CSS Skill
description: Documentation for tailwindcss
section: engineer
kit: engineer
category: skills/frontend
order: 3
published: true
---

# Tailwind CSS Skill

A utility-first CSS framework that enables rapid UI development through composable classes, eliminating the need to write custom CSS.

## What Tailwind CSS Provides

- **Utility Classes**: Pre-designed classes for every CSS property
- **Responsive Design**: Mobile-first breakpoints with simple prefixes
- **Dark Mode**: Built-in dark mode support with class or media query strategy
- **Customization**: Fully customizable design system via config file
- **JIT Compiler**: Just-in-Time compilation for instant build times
- **No Build Step**: CDN option for quick prototyping
- **Tree Shaking**: Unused styles automatically removed in production
- **Component Composition**: Build complex components from utility classes

## Setup

### Prerequisites

- Node.js 16+ installed
- A build tool (Vite, Next.js, webpack, etc.)
- Basic CSS knowledge

### Installation with Next.js

```bash
# Next.js 13+ includes Tailwind by default
npx create-next-app@latest

# Select "Yes" when prompted for Tailwind CSS
```

### Installation with Vite

```bash
# Create Vite project
npm create vite@latest my-app

# Install Tailwind and dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind config
npx tailwindcss init -p
```

**Configure tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Add Tailwind directives to CSS (src/index.css):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### CDN Setup (for prototyping only)

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello Tailwind!
  </h1>
</body>
</html>
```

## Usage

### Basic Example: Simple Card Component

```tsx
export default function ProductCard() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image */}
      <img
        className="w-full h-48 object-cover"
        src="/product.jpg"
        alt="Product"
      />

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Premium Product
        </h2>
        <p className="text-gray-600 text-base mb-4">
          High-quality product with excellent features and customer reviews.
        </p>

        {/* Price and button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            $99.99
          </span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tags */}
      <div className="px-6 pb-4 flex gap-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #electronics
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #trending
        </span>
      </div>
    </div>
  );
}
```

### Advanced Example: Responsive Dashboard Layout

```tsx
export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              {/* Mobile menu button */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats cards */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Total Revenue
            </h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              $45,231
            </p>
            <p className="mt-2 text-sm text-green-600">
              <span className="font-medium">+12%</span> from last month
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              New Users
            </h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              1,234
            </p>
            <p className="mt-2 text-sm text-green-600">
              <span className="font-medium">+8%</span> from last month
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Active Sessions
            </h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              567
            </p>
            <p className="mt-2 text-sm text-red-600">
              <span className="font-medium">-3%</span> from last month
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}
```

### Responsive Design

Tailwind uses mobile-first breakpoints:

```tsx
<div className="
  w-full           /* Mobile: full width */
  sm:w-1/2         /* Small screens (640px+): half width */
  md:w-1/3         /* Medium screens (768px+): third width */
  lg:w-1/4         /* Large screens (1024px+): quarter width */
  xl:w-1/5         /* Extra large (1280px+): fifth width */
  2xl:w-1/6        /* 2X large (1536px+): sixth width */
  p-4              /* Padding on all sides */
  md:p-8           /* Larger padding on medium+ screens */
">
  Responsive content
</div>
```

**Breakpoint reference:**
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

### Dark Mode

**Configure dark mode (tailwind.config.js):**
```javascript
export default {
  darkMode: 'class', // or 'media' for system preference
  // ... rest of config
}
```

**Using dark mode classes:**
```tsx
<div className="
  bg-white dark:bg-gray-900
  text-gray-900 dark:text-white
  border border-gray-200 dark:border-gray-700
">
  <h1 className="text-xl font-bold">
    Title (adapts to dark mode)
  </h1>
  <p className="text-gray-600 dark:text-gray-400">
    Description text
  </p>
</div>
```

**Toggle dark mode:**
```tsx
'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check stored preference
    const stored = localStorage.getItem('theme');
    const isDarkMode = stored === 'dark';
    setIsDark(isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
}
```

### Custom Theme Configuration

**Extending the default theme (tailwind.config.js):**
```javascript
export default {
  theme: {
    extend: {
      // Custom colors
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
      },

      // Custom spacing
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      // Custom fonts
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },

      // Custom animations
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },

      // Custom box shadows
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.1)',
      },
    },
  },
}
```

**Using custom theme:**
```tsx
<div className="
  bg-brand-500
  font-sans
  shadow-inner-lg
  animate-spin-slow
  w-128
">
  Custom themed content
</div>
```

## Integration with ClaudeKit

ClaudeKit agents use the Tailwind CSS skill to:

### 1. Rapid UI Prototyping

```bash
/design:fast [landing page with hero section]
```

The UI/UX Designer agent will:
- Use Tailwind utility classes for rapid development
- Implement responsive breakpoints
- Apply consistent spacing and colors
- Create reusable component patterns

### 2. Design System Implementation

```bash
/design:good [component library with design tokens]
```

The agent will:
- Configure custom theme in tailwind.config.js
- Define brand colors, fonts, and spacing
- Create component variants with Tailwind
- Implement dark mode support

### 3. Responsive Layout Creation

```bash
/cook [responsive dashboard with sidebar]
```

The Developer agent will:
- Use Tailwind grid and flexbox utilities
- Implement mobile-first responsive design
- Add breakpoint-specific styling
- Optimize for all screen sizes

## Best Practices

### 1. Component Composition

**Extract repeated patterns:**
```tsx
// Instead of repeating classes
<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Button 1
</button>
<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Button 2
</button>

// Create a component
function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
      {children}
    </button>
  );
}
```

### 2. Use @apply for Complex Components

**When component classes get too long:**
```css
/* src/styles/components.css */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg;
    @apply hover:bg-blue-600 active:bg-blue-700;
    @apply focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2;
    @apply disabled:opacity-50 disabled:cursor-not-allowed;
    @apply transition-all duration-200;
  }

  .card {
    @apply bg-white rounded-lg shadow-md p-6;
    @apply dark:bg-gray-800 dark:shadow-lg;
  }
}
```

**Usage:**
```tsx
<button className="btn-primary">
  Click Me
</button>

<div className="card">
  Card content
</div>
```

### 3. Consistent Spacing

**Use spacing scale consistently:**
```tsx
// Good: Using Tailwind's spacing scale
<div className="space-y-4">  {/* 1rem gap */}
  <div className="p-4">Content 1</div>
  <div className="p-4">Content 2</div>
  <div className="p-4">Content 3</div>
</div>

// Bad: Arbitrary values for common spacing
<div className="space-y-[17px]">
  <div className="p-[15px]">Content 1</div>
</div>
```

### 4. Organize Long Class Names

```tsx
// Use template literals for readability
const cardClasses = `
  max-w-sm rounded-lg overflow-hidden shadow-lg
  bg-white dark:bg-gray-800
  hover:shadow-xl transition-shadow duration-300
  border border-gray-200 dark:border-gray-700
`;

<div className={cardClasses}>
  Card content
</div>

// Or use a utility function
import { cn } from '@/lib/utils'; // classnames merger

<div className={cn(
  "max-w-sm rounded-lg overflow-hidden shadow-lg",
  "bg-white dark:bg-gray-800",
  "hover:shadow-xl transition-shadow duration-300",
  isActive && "ring-2 ring-blue-500"
)}>
  Card content
</div>
```

### 5. Performance Optimization

**Purge unused styles:**
```javascript
// tailwind.config.js
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  // Tailwind will only include classes used in these files
}
```

**Use JIT mode (enabled by default in v3+):**
- Generates styles on-demand
- Instant build times
- All variants available without config

## Common Patterns

### Form Styling

```tsx
export function LoginForm() {
  return (
    <form className="max-w-md mx-auto space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Sign In
      </button>
    </form>
  );
}
```

### Grid Layouts

```tsx
// Responsive grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {items.map(item => (
    <div key={item.id} className="bg-white rounded-lg p-4 shadow">
      {item.content}
    </div>
  ))}
</div>

// Auto-fit grid (fills available space)
<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
  {/* Cards will automatically wrap */}
</div>
```

### Flexbox Layouts

```tsx
// Centered content
<div className="flex items-center justify-center min-h-screen">
  <div className="text-center">
    <h1>Centered Content</h1>
  </div>
</div>

// Space between items
<div className="flex items-center justify-between">
  <span>Left</span>
  <span>Right</span>
</div>

// Vertical stack with gaps
<div className="flex flex-col space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Transitions and Animations

```tsx
// Hover effects
<button className="
  bg-blue-500 hover:bg-blue-600
  transform hover:scale-105
  transition-all duration-200 ease-in-out
">
  Hover Me
</button>

// Loading spinner
<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />

// Fade in
<div className="opacity-0 animate-fade-in">
  Content fades in
</div>

// Custom animation (add to config)
// tailwind.config.js
keyframes: {
  'fade-in': {
    '0%': { opacity: '0', transform: 'translateY(10px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  }
}
animation: {
  'fade-in': 'fade-in 0.5s ease-out',
}
```

## Plugins

**Install popular plugins:**
```bash
npm install -D @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
```

**Configure (tailwind.config.js):**
```javascript
export default {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

**Usage:**
```tsx
// @tailwindcss/typography
<article className="prose prose-lg dark:prose-invert max-w-none">
  <h1>Article Title</h1>
  <p>Beautiful typography with no custom CSS.</p>
</article>

// @tailwindcss/forms
<input type="email" className="form-input rounded-lg" />
<select className="form-select rounded-lg">
  <option>Option 1</option>
</select>

// @tailwindcss/aspect-ratio
<div className="aspect-w-16 aspect-h-9">
  <iframe src="video-url" />
</div>
```

## Related Skills

- [Next.js](/docs/engineer/skills/nextjs) - React framework integration
- [shadcn/ui](/docs/engineer/skills/shadcn-ui) - Pre-built components
- [React](/docs/engineer/skills/react) - Component development
- [TypeScript](/docs/engineer/skills/typescript) - Type-safe styling

## Reference

- **Official Docs**: https://tailwindcss.com/docs
- **Tailwind UI**: https://tailwindui.com (premium components)
- **Playground**: https://play.tailwindcss.com
- **Cheat Sheet**: https://nerdcave.com/tailwind-cheat-sheet
- **Color Palette**: https://tailwindcss.com/docs/customizing-colors

---

**Key Takeaway**: Tailwind CSS accelerates UI development by providing a comprehensive set of utility classes, eliminating the need for custom CSS while maintaining full design flexibility. ClaudeKit agents leverage Tailwind to rapidly prototype and build production-ready interfaces.
