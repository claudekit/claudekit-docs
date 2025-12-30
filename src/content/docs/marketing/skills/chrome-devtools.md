---
title: "Chrome DevTools"
description: "Browser automation with Puppeteer: screenshots, ARIA snapshots, performance analysis, form automation, and debugging."
section: marketing
category: skills
order: 20
---

> Automate browser tasks, capture screenshots, analyze web performance, and debug web applications with Puppeteer scripts.

## What This Skill Does

**The Challenge**: Marketing teams need to take screenshots of web pages, test form flows, monitor site performance, and debug web applications. Manual browser testing is time-consuming and inconsistent.

**The Solution**: Chrome DevTools skill provides Puppeteer-based automation scripts for screenshots (with auto-compression), ARIA accessibility snapshots for element discovery, performance metrics (Core Web Vitals), form automation, and console/network logging.

## Activation

**Implicit**: Activates when agents need browser automation, screenshots, or performance analysis.

**Explicit**: Activate via prompt:
```
Activate chrome-devtools skill to capture screenshots and analyze performance
```

## Capabilities

### 1. Screenshot Capture
Take full-page or element-specific screenshots with automatic compression for large files.

```bash
# Navigate and screenshot
node scripts/navigate.js --url https://example.com
node scripts/screenshot.js --output page.png

# Full-page screenshot
node scripts/screenshot.js --url https://example.com --output full.png --full-page true

# Specific element
node scripts/screenshot.js --selector ".hero" --output hero.png
```

**Auto-compression**: Screenshots >5MB compressed with Sharp (4-5x faster than ImageMagick).

**Storage**: Save to `.claude/chrome-devtools/screenshots/` for analysis.

### 2. ARIA Snapshot for Element Discovery
Get semantic accessibility tree to find elements without inspecting HTML.

```bash
# Get ARIA snapshot
node scripts/aria-snapshot.js --url https://example.com

# Save to file
node scripts/aria-snapshot.js --url https://example.com --output snapshot.yaml
```

**Example output**:
```yaml
- banner:
  - link "Home" [ref=e1]
  - navigation:
    - link "Products" [ref=e2]
    - link "Pricing" [ref=e3]
- main:
  - heading "Welcome" [level=1]
  - button "Get Started" [ref=e5]
```

**Interact by ref**:
```bash
# Click element with ref e5
node scripts/select-ref.js --ref e5 --action click
```

**Guide**: Full ARIA notation in skill README

### 3. Performance Measurement
Track Core Web Vitals (LCP, FID, CLS) for page speed optimization.

```bash
# Measure performance
node scripts/performance.js --url https://example.com

# Output includes:
# - LCP (Largest Contentful Paint)
# - FID (First Input Delay)
# - CLS (Cumulative Layout Shift)
```

### 4. Session Persistence
Browser stays running across scripts for multi-step workflows.

```bash
# Step 1: Login (browser stays running)
node scripts/navigate.js --url https://example.com/login
node scripts/fill.js --selector "#email" --value "user@example.com"
node scripts/fill.js --selector "#password" --value "secret"
node scripts/click.js --selector "button[type=submit]"

# Step 2: Navigate to dashboard (reuses session)
node scripts/navigate.js --url https://example.com/dashboard
node scripts/screenshot.js --output dashboard.png

# Close when done
node scripts/navigate.js --url about:blank --close true
```

## Prerequisites

**Installation**:
```bash
cd .claude/skills/chrome-devtools/scripts
npm install  # Installs puppeteer, sharp, debug, yargs
```

**Linux/WSL only**: Run `./install-deps.sh` for Chrome system libraries.

## Configuration

**Browser mode**:
- Linux/WSL: Headless (no window)
- macOS/Windows: Headed (visible window for debugging)

**Session storage**: `.browser-session.json` (WebSocket endpoint)

**Skill location priority**:
1. Project-scope: `.claude/skills/chrome-devtools/`
2. User-scope: `~/.claude/skills/chrome-devtools/`

## Best Practices

**1. Use ARIA snapshots for unknown pages**
Don't guess selectors. Get ARIA snapshot first, identify elements by semantic role and ref.

**2. Never use file:// protocol**
Serve local HTML via `npx serve` or `python -m http.server`. `file://` protocol blocks many browser features.

**3. Store session artifacts**
Create timestamped directories for each test session:
```bash
SESSION="$(date +%Y%m%d-%H%M%S)"
mkdir -p .claude/chrome-devtools/logs/$SESSION
```

## Common Use Cases

### Use Case 1: Landing Page Screenshot for Review
**Scenario**: Capture full-page screenshot of new landing page for stakeholder review.

**Workflow**:
```bash
# Serve local build
npx serve ./dist -p 3000 &

# Capture screenshot
node scripts/screenshot.js --url http://localhost:3000 --output landing-full.png --full-page true

# Check file size (auto-compresses if >5MB)
ls -lh landing-full.png
```

**Output**: Full-page screenshot ready for review.

### Use Case 2: Form Flow Testing
**Scenario**: Test multi-step signup flow and capture each step.

**Workflow**:
```bash
# Step 1: Navigate to signup
node scripts/navigate.js --url https://app.example.com/signup

# Step 2: Fill form fields
node scripts/fill.js --selector "#name" --value "Test User"
node scripts/fill.js --selector "#email" --value "test@example.com"
node scripts/screenshot.js --output step1.png

# Step 3: Submit and verify
node scripts/click.js --selector "button[type=submit]"
node scripts/screenshot.js --output step2-confirmation.png

# Close session
node scripts/navigate.js --url about:blank --close true
```

**Output**: Screenshots of each step for validation.

## Troubleshooting

**Issue**: Script hangs or times out
**Solution**: Use `--timeout 60000` flag or `--wait-until load` strategy. Some pages have long-running scripts.

**Issue**: Element not found
**Solution**: Use `aria-snapshot.js` to discover correct selector or ref. Don't guess CSS selectors.

**Issue**: Screenshot missing images
**Solution**: Images may be waiting for scroll-triggered animations. Scroll page first:
```bash
node scripts/evaluate.js --script "window.scrollTo(0, document.body.scrollHeight)"
# Wait, then screenshot
```

**Issue**: Session stale error
**Solution**: Delete `.browser-session.json` and retry. Browser connection expired.

## Related Skills

- [SEO Optimization](/docs/marketing/skills/seo-optimization) - Core Web Vitals measurement
- [Analytics](/docs/marketing/skills/analytics) - Performance tracking
- [Media Processing](/docs/marketing/skills/media-processing) - Screenshot post-processing

## Related Commands

- `/design/screenshot` - Analyze design screenshots
- `/test` - Web application testing
