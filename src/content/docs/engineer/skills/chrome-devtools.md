---
title: "Chrome DevTools"
description: "Automate browsers, take screenshots, analyze performance, and debug with Puppeteer CLI scripts for browser automation and testing"
section: engineer
category: skills
order: 21
---

Need to automate browser interactions, take screenshots of web pages, or debug JavaScript issues? That's exactly what Chrome DevTools skill does using Puppeteer.

## What This Skill Does

Chrome DevTools provides browser automation through Puppeteer CLI scripts with persistent sessions. All scripts output structured JSON for easy parsing. You can navigate to URLs, take screenshots with automatic compression, click elements, fill forms, execute JavaScript in page context, monitor console messages and errors, track network requests and responses, and measure Core Web Vitals.

The skill emphasizes persistent browser sessions: the browser stays running across script executions, preserving state like logged-in sessions and cookies. Scripts disconnect but leave the browser running for the next script to reuse, making multi-step automation workflows efficient.

Think of it as your programmable browser. When you need to test how your web app renders, automate form submissions, capture screenshots for documentation, debug console errors, or analyze network performance, these scripts handle it.

## Prerequisites

You need:

- Node.js 18 or higher
- The skill directory (either project-scope `.claude/skills/chrome-devtools/` or user-scope `~/.claude/skills/chrome-devtools/`)
- For Linux/WSL: Additional Chrome dependencies (the skill includes an installer script)

## Installation

Navigate to the scripts directory and install dependencies:

```bash
# Detect skill location (project-scope takes priority)
SKILL_DIR=""
if [ -d ".claude/skills/chrome-devtools/scripts" ]; then
  SKILL_DIR=".claude/skills/chrome-devtools/scripts"
elif [ -d "$HOME/.claude/skills/chrome-devtools/scripts" ]; then
  SKILL_DIR="$HOME/.claude/skills/chrome-devtools/scripts"
fi

# Install dependencies
cd "$SKILL_DIR"
npm install  # Installs puppeteer, sharp, debug, yargs

# Linux/WSL only: Install Chrome system libraries
./install-deps.sh
```

Test the installation:

```bash
node navigate.js --url https://example.com
# Output: {"success": true, "url": "...", "title": "..."}
```

## Browser Running Mode

The skill automatically detects your OS and launches the browser appropriately:

- **Linux, WSL, CI environments**: Headless mode (no visible window)
- **macOS, Windows**: Headed mode (visible browser window for debugging)

You can override with `--headless false` to see the browser window.

## Session Persistence

Browser state persists across script executions via a WebSocket endpoint file (`.browser-session.json`).

**Default behavior**: Scripts disconnect but keep the browser running for reuse.

```bash
# First script: launches browser, navigates, disconnects (browser stays running)
node navigate.js --url https://example.com/login

# Subsequent scripts: connect to existing browser, reuse page state
node fill.js --selector "#email" --value "user@example.com"
node fill.js --selector "#password" --value "secret"
node click.js --selector "button[type=submit]"

# Close browser when done
node navigate.js --url about:blank --close true
```

**Session management**:

- No flag: Keep browser running (default)
- `--close true`: Close browser and clear session

This persistence is powerful for multi-step workflows like logging in, navigating through a site, and taking screenshots.

## Available Scripts

All scripts are in `.claude/skills/chrome-devtools/scripts/`:

| Script | Purpose |
|--------|---------|
| `navigate.js` | Navigate to URLs |
| `screenshot.js` | Capture screenshots (auto-compress >5MB) |
| `click.js` | Click elements |
| `fill.js` | Fill form fields |
| `evaluate.js` | Execute JavaScript in page context |
| `snapshot.js` | Extract interactive elements (JSON) |
| `aria-snapshot.js` | Get ARIA accessibility tree (YAML with refs) |
| `select-ref.js` | Interact with elements by ref from ARIA snapshot |
| `console.js` | Monitor console messages/errors |
| `network.js` | Track HTTP requests/responses |
| `performance.js` | Measure Core Web Vitals |
| `ws-debug.js` | Debug WebSocket connections (basic) |
| `ws-full-debug.js` | Debug WebSocket with full events/frames |

## Core Capabilities

### Navigation

```bash
# Navigate to URL
node navigate.js --url https://example.com

# Navigate and close browser
node navigate.js --url https://example.com --close true

# Navigate with timeout
node navigate.js --url https://slow-site.com --timeout 60000

# Wait for specific load state
node navigate.js --url https://example.com --wait-until networkidle2
```

### Screenshots

```bash
# Basic screenshot
node screenshot.js --url https://example.com --output ./screenshot.png

# Full page screenshot
node screenshot.js --url https://example.com --output ./full.png --full-page true

# Screenshot specific element
node screenshot.js --url https://example.com --selector ".main-content" --output ./element.png

# Screenshot current page (without navigating)
node screenshot.js --output ./current.png
```

**Auto-Compression**: Screenshots over 5MB are automatically compressed using Sharp (4-5x faster than ImageMagick):

```bash
# Default: compress if >5MB
node screenshot.js --url https://example.com --output ./screenshot.png

# Custom threshold (3MB)
node screenshot.js --url https://example.com --output ./screenshot.png --max-size 3

# Disable compression
node screenshot.js --url https://example.com --output ./screenshot.png --no-compress
```

Store screenshots in `.claude/chrome-devtools/screenshots/` for organization.

### Element Discovery

When you don't know the page structure, use ARIA snapshot to discover elements:

```bash
# Get ARIA snapshot (YAML format with semantic roles)
node aria-snapshot.js --url https://example.com

# Save to file for analysis
node aria-snapshot.js --url https://example.com --output ./.claude/chrome-devtools/snapshots/page.yaml
```

**Example YAML output**:

```yaml
- banner:
  - link "Hacker News" [ref=e1]
    /url: https://news.ycombinator.com
  - navigation:
    - link "new" [ref=e2]
    - link "past" [ref=e3]
- main:
  - list:
    - listitem:
      - link "Show HN: My new project" [ref=e8]
      - text: "128 points by user 3 hours ago"
```

**Interpreting ARIA notation**:

- `[ref=eN]` - Stable identifier for interactive elements
- `[checked]` - Checkbox/radio is selected
- `[disabled]` - Element is inactive
- `[expanded]` - Accordion/dropdown is open
- `/url:` - Link destination
- `/placeholder:` - Input placeholder text

**Interact by ref**:

```bash
# Click element with ref e5
node select-ref.js --ref e5 --action click

# Fill input with ref e10
node select-ref.js --ref e10 --action fill --value "search query"

# Get text content
node select-ref.js --ref e8 --action text

# Screenshot specific element
node select-ref.js --ref e1 --action screenshot --output ./logo.png
```

### Form Automation

```bash
# Fill input field
node fill.js --selector "#email" --value "user@example.com"

# Click button
node click.js --selector "button[type=submit]"

# Complete form workflow
node navigate.js --url https://example.com/login
node fill.js --selector "#username" --value "testuser"
node fill.js --selector "#password" --value "secret"
node click.js --selector "button[type=submit]"
node screenshot.js --output ./logged-in.png
```

### JavaScript Execution

```bash
# Execute JavaScript in page context
node evaluate.js --url https://example.com --script "document.title"

# Extract data
node evaluate.js --url https://example.com --script "
  Array.from(document.querySelectorAll('.item')).map(el => ({
    title: el.querySelector('h2')?.textContent,
    link: el.querySelector('a')?.href
  }))
" | jq '.result'

# Wait for async operation
node evaluate.js --script "await new Promise(r => setTimeout(r, 2000))"
```

### Console Monitoring

```bash
# Capture all console messages for 10 seconds
node console.js --url https://example.com --duration 10000

# Filter by type
node console.js --url https://example.com --types error,warn --duration 5000

# Store for analysis
SESSION="$(date +%Y%m%d-%H%M%S)"
mkdir -p .claude/chrome-devtools/logs/$SESSION
node console.js --url https://example.com --duration 10000 > .claude/chrome-devtools/logs/$SESSION/console.json

# View errors
jq '.messages[] | select(.type=="error")' .claude/chrome-devtools/logs/$SESSION/console.json
```

### Network Monitoring

```bash
# Track HTTP requests
node network.js --url https://example.com

# Find failed requests
node network.js --url https://example.com | jq '.requests[] | select(.response.status >= 400)'

# Analyze API calls
node network.js --url https://app.example.com | jq '.requests[] | select(.url | contains("/api/"))'
```

### Performance Analysis

```bash
# Measure Core Web Vitals
node performance.js --url https://example.com | jq '.vitals'

# Output includes:
# - FCP (First Contentful Paint)
# - LCP (Largest Contentful Paint)
# - CLS (Cumulative Layout Shift)
# - TTFB (Time to First Byte)
```

## Real-World Examples

### Test Local HTML Files

**Important**: Never use `file://` protocol. Always serve via local server.

```bash
# Option 1: npx serve (recommended)
npx serve ./dist -p 3000 &
node navigate.js --url http://localhost:3000
node screenshot.js --output ./test.png

# Option 2: Python http.server
python -m http.server 3000 --directory ./dist &
node navigate.js --url http://localhost:3000
```

**Why**: `file://` protocol blocks many browser features (CORS, ES modules, fetch API, service workers).

### Automated Login Flow

```bash
# Navigate to login page
node navigate.js --url https://app.example.com/login

# Fill credentials
node fill.js --selector "#email" --value "test@example.com"
node fill.js --selector "#password" --value "testpass123"

# Submit form
node click.js --selector "button[type=submit]"

# Wait for navigation (implicit in next script)
# Take screenshot of dashboard
node screenshot.js --output ./dashboard.png

# Close browser
node navigate.js --url about:blank --close true
```

### Debug Unknown Page Structure

```bash
# Get ARIA snapshot to discover elements
node aria-snapshot.js --url https://example.com

# Identify target (e.g., [ref=e5] for a button)

# Interact by ref
node select-ref.js --ref e5 --action click

# Verify result
node screenshot.js --output ./result.png
```

### Capture Error Logs

```bash
# Create session directory
SESSION="$(date +%Y%m%d-%H%M%S)"
mkdir -p .claude/chrome-devtools/logs/$SESSION

# Capture console errors
node console.js --url https://broken-site.com --types error,pageerror --duration 5000 > .claude/chrome-devtools/logs/$SESSION/console.json

# Capture network failures
node network.js --url https://broken-site.com > .claude/chrome-devtools/logs/$SESSION/network.json

# Analyze
jq '.messages[] | select(.type=="error") | .text' .claude/chrome-devtools/logs/$SESSION/console.json
```

### Performance Audit

```bash
# Measure performance
node performance.js --url https://example.com | jq '.vitals'

# Expected output:
# {
#   "FCP": 1200,
#   "LCP": 2400,
#   "CLS": 0.05,
#   "TTFB": 300
# }
```

### Web Scraping

```bash
# Navigate to page
node navigate.js --url https://news.ycombinator.com

# Extract data
node evaluate.js --script "
  Array.from(document.querySelectorAll('.athing')).slice(0, 10).map(el => ({
    title: el.querySelector('.titleline a')?.textContent,
    link: el.querySelector('.titleline a')?.href,
    score: el.nextElementSibling?.querySelector('.score')?.textContent
  }))
" | jq '.result'
```

## Writing Custom Test Scripts

For complex automation, write custom scripts to `.claude/chrome-devtools/tmp/`:

```bash
# Create tmp directory
mkdir -p .claude/chrome-devtools/tmp

# Write test script
cat > .claude/chrome-devtools/tmp/login-test.js << 'EOF'
import { getBrowser, getPage, disconnectBrowser, outputJSON } from '../scripts/lib/browser.js';

async function loginTest() {
  const browser = await getBrowser();
  const page = await getPage(browser);

  await page.goto('https://example.com/login');
  await page.type('#email', 'user@example.com');
  await page.type('#password', 'secret');
  await page.click('button[type=submit]');
  await page.waitForNavigation();

  outputJSON({
    success: true,
    url: page.url(),
    title: await page.title()
  });

  await disconnectBrowser();
}

loginTest();
EOF

# Run test
node .claude/chrome-devtools/tmp/login-test.js
```

**Key principles**:

- Single-purpose: one script, one task
- Always call `disconnectBrowser()` at the end (keeps browser running)
- Use `closeBrowser()` only when ending session completely
- Output JSON for easy parsing
- Plain JavaScript only in `page.evaluate()` callbacks

## Workflow Loop

Browser automation follows an iterative loop:

1. **Execute** focused script for single task
2. **Observe** JSON output
3. **Assess** completion status
4. **Decide** next action
5. **Repeat** until done

This incremental approach is more reliable than trying to do everything in one script.

## Troubleshooting

### Missing Images in Screenshots

If images don't appear in screenshots, they may be waiting for animation triggers:

```bash
# Scroll element into view
node evaluate.js --script "document.querySelector('.lazy-image').scrollIntoView()"

# Wait for animation
node evaluate.js --script "await new Promise(r => setTimeout(r, 1000))"

# Take screenshot
node screenshot.js --output ./result.png
```

For Intersection Observer animations, scroll through the page:

```bash
# Scroll to bottom
node evaluate.js --script "window.scrollTo(0, document.body.scrollHeight)"

# Wait
node evaluate.js --script "await new Promise(r => setTimeout(r, 1500))"

# Scroll to top
node evaluate.js --script "window.scrollTo(0, 0)"

# Full page screenshot
node screenshot.js --output ./full-loaded.png --full-page true
```

### Common Errors

| Error | Solution |
|-------|----------|
| `Cannot find package 'puppeteer'` | Run `npm install` in scripts directory |
| `libnss3.so` missing (Linux) | Run `./install-deps.sh` |
| Element not found | Use `aria-snapshot.js` to find correct selector/ref |
| Script hangs | Use `--timeout 60000` or `--wait-until load` |
| Screenshot >5MB | Auto-compressed; use `--max-size 3` for lower |
| Session stale | Delete `.browser-session.json` and retry |

## Best Practices

**Use Session Persistence**: Let the browser stay running across scripts for multi-step workflows.

**Close Browser When Done**: Use `--close true` on the final script to clean up.

**Discover Elements First**: Use `aria-snapshot.js` for unknown page structures instead of guessing selectors.

**Store Outputs Organized**: Use timestamped session directories for screenshots, logs, and snapshots.

**Serve Local Files**: Never use `file://` protocol. Always use a local server.

**Test Incrementally**: Execute one script at a time, verify output, then proceed.

## Script Options

All scripts support common options:

- `--headless false` - Show browser window (useful for debugging)
- `--close true` - Close browser completely (default: stay running)
- `--timeout 30000` - Set timeout in milliseconds
- `--wait-until networkidle2` - Wait strategy (load, domcontentloaded, networkidle0, networkidle2)

## Reference Documentation

The skill includes detailed reference files at `../claudekit-engineer/.claude/skills/chrome-devtools/references/`:

- `cdp-domains.md` - Chrome DevTools Protocol domains
- `puppeteer-reference.md` - Puppeteer API patterns
- `performance-guide.md` - Core Web Vitals optimization
- `scripts/README.md` - Detailed script options

## Related Skills and Commands

Combine Chrome DevTools with:

- [Frontend Design](/docs/engineer/skills/frontend-design) - Take screenshots of implementations for comparison
- [Frontend Development](/docs/engineer/skills/frontend-development) - Test your React applications
- [Media Processing](/docs/engineer/skills/media-processing) - Optimize captured screenshots with ImageMagick

## Key Principle

Browser automation is about incremental, focused scripts that output structured JSON. Use session persistence to maintain state across executions. Discover elements with ARIA snapshots before interacting. Test locally with proper servers. Store outputs organized by session.

Automate browsers the reliable way: one script, one task, structured output, iterate until done.
