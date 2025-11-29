---
title: /design:video
description: "Documentation for /design:video
description:
section: docs
category: docs/commands/design
order: 45
published: true"
section: docs
category: docs/commands/design
order: 45
published: true
---

# /design:video

Transform video demonstrations into working animated interfaces. Analyze screen recordings, interaction demos, or animation references to extract design patterns, motion principles, and timing specifications. See it move, build it move.

## Syntax

```bash
/design:video [video file path]
```

## How It Works

The `/design:video` command analyzes motion and interaction:

### 1. Video Processing

- Processes video frame by frame using AI vision
- Extracts key frames showing different states
- Identifies transition moments and timing
- Captures user interactions (clicks, hovers, swipes)
- Measures animation duration and easing

### 2. Motion Analysis

- Identifies animation types (fade, slide, scale, rotate)
- Measures transition durations (milliseconds)
- Detects easing functions (linear, ease-in-out, spring)
- Captures sequential timing (stagger delays)
- Identifies looping animations

### 3. Interaction Mapping

- Maps user actions to visual feedback
- Identifies hover states and effects
- Captures click/tap animations
- Documents scroll-based animations
- Extracts gesture patterns (swipe, pinch)

### 4. State Transitions

- Identifies all component states
- Maps transitions between states
- Documents loading states
- Captures error and success animations
- Extracts empty state treatments

### 5. Code Generation

- Implements animations with Framer Motion or CSS
- Generates exact timing specifications
- Creates responsive interaction handlers
- Adds gesture support for mobile
- Includes accessibility considerations

## Examples

### Onboarding Flow Animation

```bash
/design:video [app-onboarding-flow.mp4]
```

**Video Analysis:**
```
Video Analysis: Onboarding Flow
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Duration: 24 seconds
Screens: 4
Transitions: 3 (screen changes)

Frame-by-Frame Analysis:

Screen 1: Welcome (0:00 - 0:06)
├── 0.0s: Fade in from white (500ms)
├── 0.5s: Logo scale animation (1.0 → 1.2 → 1.0, 800ms, spring)
├── 1.0s: Headline slide up + fade (300ms, ease-out)
├── 1.3s: Description fade in (300ms)
├── 2.0s: Button fade in + pulse (400ms)
├── 2.4s: Button continues pulsing (2s loop, scale 1.0 ↔ 1.05)
└── 6.0s: User taps button

Transition 1→2 (6.0s - 6.4s)
├── Button press: scale down to 0.95 (100ms)
├── Screen 1: slide left + fade out (400ms, ease-in-out)
├── Screen 2: slide from right + fade in (400ms, ease-in-out)
└── Total transition: 400ms

Screen 2: Feature Explanation (6.4s - 12.0s)
├── 6.4s: Illustration slide up from bottom (500ms, ease-out)
├── 6.9s: Feature icons appear sequentially
│   ├── Icon 1: fade + scale (300ms)
│   ├── Icon 2: fade + scale (300ms, 100ms delay)
│   └── Icon 3: fade + scale (300ms, 200ms delay)
├── 7.5s: Feature text fade in with stagger (200ms each, 80ms stagger)
├── 8.0s: Progress dots animate (dot 2 fills, 200ms)
└── 12.0s: User swipes left

Transition 2→3 (12.0s - 12.4s)
├── Swipe gesture detected (velocity-based)
├── Screen follows finger, then snaps
├── Spring animation (stiffness: 300, damping: 30)
└── Duration: 400ms

Screen 3: Permissions (12.4s - 18.0s)
├── 12.4s: Icon bounces in (scale 0 → 1.1 → 1.0, 600ms)
├── 13.0s: Permission text typewriter effect
│   └── "We'd like to send you notifications"
│   └── Character delay: 30ms
├── 14.5s: Allow button slide up (300ms)
├── 15.0s: Skip button fade in (300ms)
└── 18.0s: User taps Allow

Transition 3→4 (18.0s - 18.4s)
├── Checkmark draw animation (300ms, path stroke)
├── Success ripple effect (500ms)
├── Screen transition (same as before)
└── Duration: 400ms

Screen 4: Complete (18.4s - 24.0s)
├── 18.4s: Confetti animation (2s, particles fall)
├── 19.0s: Success icon scale + rotate (600ms)
├── 19.6s: "You're all set!" fade in (300ms)
├── 20.0s: Get Started button slide up (400ms)
└── 24.0s: Video ends

Animation Specifications:
├── Primary Easing: cubic-bezier(0.4, 0.0, 0.2, 1)
├── Spring Config: { stiffness: 300, damping: 30 }
├── Fast Duration: 200ms
├── Standard Duration: 300-400ms
├── Slow Duration: 500-600ms
├── Stagger Delay: 80-100ms
└── Loop Duration: 2000ms

Interaction Patterns:
├── Button Press: scale(0.95), 100ms
├── Button Hover: scale(1.02), shadow increase
├── Swipe: Follow gesture + spring snap
├── Tap: Ripple effect from tap point
└── Success: Checkmark + confetti
```

**Generated Implementation:**
```typescript
// src/components/Onboarding.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Confetti from 'react-confetti';

const screens = ['welcome', 'features', 'permissions', 'complete'];

export function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const nextScreen = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
      if (currentScreen === screens.length - 2) {
        setShowConfetti(true);
      }
    }
  };

  return (
    <div className="relative h-screen bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

      <AnimatePresence mode="wait">
        {currentScreen === 0 && <WelcomeScreen key="welcome" onNext={nextScreen} />}
        {currentScreen === 1 && <FeaturesScreen key="features" onNext={nextScreen} />}
        {currentScreen === 2 && <PermissionsScreen key="permissions" onNext={nextScreen} />}
        {currentScreen === 3 && <CompleteScreen key="complete" />}
      </AnimatePresence>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {screens.map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full"
            animate={{
              backgroundColor: index === currentScreen ? '#6366F1' : '#CBD5E1',
              scale: index === currentScreen ? 1.2 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}

function WelcomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 0.8,
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        className="mb-8"
      >
        <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center">
          <span className="text-4xl">🚀</span>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.3 }}
        className="text-4xl font-bold text-gray-900 mb-4 text-center"
      >
        Welcome to AppName
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.3 }}
        className="text-lg text-gray-600 text-center mb-8 max-w-md"
      >
        Discover amazing features that will transform your workflow
      </motion.p>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.05, 1],
        }}
        transition={{
          opacity: { delay: 2.0, duration: 0.4 },
          scale: {
            delay: 2.4,
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}

function FeaturesScreen({ onNext }: { onNext: () => void }) {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', description: 'Blazing performance' },
    { icon: '🎨', title: 'Beautiful UI', description: 'Pixel perfect design' },
    { icon: '🔒', title: 'Secure', description: 'End-to-end encryption' },
  ];

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full px-8"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={(e, { offset, velocity }) => {
        if (offset.x < -100 || velocity.x < -500) {
          onNext();
        }
      }}
    >
      {/* Illustration */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-blue-400 rounded-3xl" />
      </motion.div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5 + index * 0.1,
              duration: 0.3,
            }}
            className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-md"
          >
            <div className="text-3xl">{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-gray-500">Swipe left to continue →</p>
    </motion.div>
  );
}

function PermissionsScreen({ onNext }: { onNext: () => void }) {
  const [showCheckmark, setShowCheckmark] = useState(false);

  const handleAllow = () => {
    setShowCheckmark(true);
    setTimeout(onNext, 800);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full px-8"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.1, 1] }}
        transition={{ duration: 0.6, times: [0, 0.6, 1] }}
        className="mb-6"
      >
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-5xl">🔔</span>
        </div>
      </motion.div>

      {/* Typewriter Text */}
      <TypewriterText
        text="We'd like to send you notifications"
        className="text-2xl font-semibold text-gray-900 mb-2 text-center"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.3 }}
        className="text-gray-600 text-center mb-8 max-w-sm"
      >
        Stay updated with important information
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.3 }}
        className="flex flex-col gap-3 w-full max-w-xs"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleAllow}
          className="w-full py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg"
        >
          Allow
        </motion.button>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.3 }}
          className="text-gray-500"
        >
          Not now
        </motion.button>
      </motion.div>

      {/* Checkmark Animation */}
      <AnimatePresence>
        {showCheckmark && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center bg-white/90"
          >
            <svg className="w-32 h-32 text-green-500" viewBox="0 0 52 52">
              <motion.path
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                d="M14 27l8 8 16-16"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CompleteScreen() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="mb-6"
      >
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
          <span className="text-5xl">✅</span>
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="text-3xl font-bold text-gray-900 mb-4"
      >
        You're all set!
      </motion.h2>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.4 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg"
      >
        Start Exploring
      </motion.button>
    </motion.div>
  );
}

function TypewriterText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.h2
      className={className}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.03, duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
}
```

**Result:**
```
✓ Exact animation timing matched
✓ All transitions implemented
✓ Gesture support added
✓ Progress tracking included
✓ Accessibility maintained
✓ 60 FPS smooth animations

Generated Files:
✓ src/components/Onboarding.tsx
✓ src/components/TypewriterText.tsx
✓ src/hooks/useSwipeGesture.ts
✓ package.json (framer-motion, react-confetti added)

Time: 45 minutes
Quality: Production-ready with exact timing
```

### Dropdown Menu Interaction

```bash
/design:video [dropdown-animation.mp4]
```

**Implementation:**
```typescript
// Extracted: Smooth dropdown with stagger animation
import { motion } from 'framer-motion';

const menuItems = [
  { icon: '👤', label: 'Profile', href: '/profile' },
  { icon: '⚙️', label: 'Settings', href: '/settings' },
  { icon: '❓', label: 'Help', href: '/help' },
  { icon: '🚪', label: 'Logout', href: '/logout' },
];

export function Dropdown({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 overflow-hidden"
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.2,
              }}
              whileHover={{ backgroundColor: '#F3F4F6', x: 4 }}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 transition-colors"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

### Loading Animation

```bash
/design:video [loading-spinner.mp4]
```

**Implementation:**
```typescript
// Extracted: Custom loading animation
import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}

export function SkeletonLoader() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="h-20 bg-gray-200 rounded-lg"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
```

## When to Use /design:video

### ✅ Use /design:video for:

- **Animated Interfaces**: Onboarding flows, transitions
- **Micro-Interactions**: Button animations, hover effects
- **Gesture Patterns**: Swipe, pinch, drag interactions
- **Loading States**: Spinners, skeleton screens, progress
- **Transitions**: Page changes, modal animations
- **Scroll Effects**: Parallax, scroll-triggered animations
- **Data Viz**: Animated charts and graphs
- **Game UI**: Interactive game interfaces

### ❌ Don't use /design:video for:

- **Static Designs**: Use `/design:screenshot` instead
- **Just Layout**: Use screenshot if no animation
- **Simple Hover**: Basic CSS hover states don't need video
- **Very Long Videos**: Keep under 2 minutes

## Best Practices

### Record Quality Videos

✅ **Good:**
```bash
# High resolution (1080p or higher)
/design:video [screen-recording-1080p.mp4]

# Smooth frame rate (60 FPS preferred)
/design:video [60fps-recording.mp4]

# Clear interactions (show cursor, taps)
/design:video [with-cursor-visible.mp4]

# Appropriate length (10-60 seconds)
/design:video [concise-demo.mp4]
```

❌ **Bad:**
```bash
# Low resolution, pixelated
/design:video [blurry-video.mp4]

# Choppy frame rate
/design:video [low-fps.mp4]

# Too long, unfocused
/design:video [5-minute-rambling.mp4]
```

### Focus on Specific Interactions

```bash
# Single interaction
/design:video [button-hover-animation.mp4] - focus on button hover effect only

# Flow
/design:video [checkout-flow.mp4] - implement the 3-step checkout animation

# Gesture
/design:video [card-swipe.mp4] - extract swipe gesture pattern
```

### Provide Timing Notes

```bash
# Specify if timing should be adjusted
/design:video [animation.mp4] - speed up transitions by 30%

# Emphasize specific timing
/design:video [onboarding.mp4] - match the exact timing, especially the stagger effect
```

## Animation Principles

### Duration Guidelines

Extracted from videos, applied to code:

```
Micro-interactions:    100-200ms  (fast, immediate)
UI Transitions:        200-400ms  (standard)
Page Transitions:      400-600ms  (noticeable)
Complex Animations:    600-1000ms (deliberate)
Looping Animations:    2000-4000ms (ambient)
```

### Easing Functions

```typescript
// Common easing from analyzed videos
const easing = {
  // Quick entry, slow exit (most UI)
  easeOut: [0.0, 0.0, 0.2, 1.0],

  // Slow entry, quick exit (exits, dismissals)
  easeIn: [0.4, 0.0, 1.0, 1.0],

  // Balanced (general purpose)
  easeInOut: [0.4, 0.0, 0.2, 1.0],

  // Spring physics (organic, playful)
  spring: { stiffness: 300, damping: 30 },

  // Sharp (attention-grabbing)
  sharp: [0.4, 0.0, 0.6, 1.0],
};
```

### Stagger Patterns

```typescript
// Sequential reveals (list items, cards)
const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1, // 100ms between each
    },
  },
};

// Wave effect (domino)
const staggerWave = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};
```

## Advanced Features

### Scroll-Based Animations

```bash
/design:video [scroll-parallax.mp4]
```

```typescript
// Generated scroll animation
import { useScroll, useTransform, motion } from 'framer-motion';

export function ParallaxSection() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <motion.div style={{ y, opacity }}>
      {/* Content */}
    </motion.div>
  );
}
```

### Gesture Recognition

```bash
/design:video [swipe-cards.mp4]
```

```typescript
// Generated swipe pattern
import { motion, PanInfo } from 'framer-motion';

export function SwipeCard() {
  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 100;
    const swipeVelocity = 500;

    if (
      info.offset.x < -swipeThreshold ||
      info.velocity.x < -swipeVelocity
    ) {
      // Swiped left
      onSwipeLeft();
    } else if (
      info.offset.x > swipeThreshold ||
      info.velocity.x > swipeVelocity
    ) {
      // Swiped right
      onSwipeRight();
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.05 }}
    >
      {/* Card content */}
    </motion.div>
  );
}
```

### Complex Sequences

```bash
/design:video [multi-step-animation.mp4]
```

```typescript
// Generated sequence
const sequence = {
  initial: { opacity: 0, scale: 0.8, y: 50 },
  animate: {
    opacity: [0, 1, 1, 1],
    scale: [0.8, 1.1, 1, 1],
    y: [50, -10, 0, 0],
  },
  transition: {
    duration: 1.2,
    times: [0, 0.3, 0.6, 1],
    ease: 'easeOut',
  },
};
```

## Performance Optimization

### GPU Acceleration

```css
/* Applied automatically for smooth animations */
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0);
}
```

### Reduced Motion

```typescript
// Respects user preferences
import { useReducedMotion } from 'framer-motion';

export function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return <motion.div variants={variants} />;
}
```

## Troubleshooting

### Animation Too Fast/Slow

**Problem:** Timing doesn't feel right

**Solution:**
```bash
# Adjust timing explicitly
/design:video [animation.mp4] - slow down all animations by 50%

# Or specify exact durations
/design:video [animation.mp4] - set transition duration to 400ms instead of detected 200ms
```

### Choppy Animation

**Problem:** Animation not smooth

**Solution:**
```typescript
// Use GPU-accelerated properties
// ✅ Good (GPU)
transform: 'translateX(100px)'
opacity: 0.5

// ❌ Bad (CPU)
left: '100px'
width: '200px'
```

### Can't Extract Exact Timing

**Problem:** Video unclear about timing

**Solution:**
- Record at higher frame rate (60 FPS)
- Slow down video playback when recording
- Use screen recording software with cursor visible
- Provide supplementary notes

## Next Steps

- [/design:screenshot](/docs/commands/design/screenshot) - For static views
- [/design:3d](/docs/commands/design/3d) - For 3D animations
- [/design:describe](/docs/commands/design/describe) - Analyze video first
- [/fix:ui](/docs/commands/fix/ui) - Adjust animation feel

---

**Key Takeaway**: `/design:video` extracts motion and interaction patterns from video demonstrations to implement perfectly-timed animated interfaces. See it move, build it move, with exact timing specifications and gesture support.
