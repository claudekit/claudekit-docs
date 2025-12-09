---
title: Chrome DevTools Skill
description: Browser automation, debugging, and performance analysis using Puppeteer CLI scripts
section: docs
category: skills/tools
order: 7
published: true
---

# Chrome DevTools

Browser automation via executable Puppeteer scripts with JSON output for screenshots, performance analysis, web scraping, and debugging.

## When to Use

- Automate browser interactions (clicking, filling forms, navigation)
- Capture screenshots (full page or specific elements)
- Analyze performance and Core Web Vitals
- Monitor network traffic and console errors
- Web scraping with JavaScript execution
- Debug frontend issues in real browser environments

## Key Capabilities

| Capability | Description |
|------------|-------------|
| **Core Automation** | Navigate, screenshot, click, fill forms, execute JavaScript |
| **Analysis Tools** | Snapshot elements, monitor console/network, measure performance |
| **Smart Compression** | Auto-compress screenshots >5MB for AI compatibility |
| **Browser Chaining** | Reuse browser instance across multiple commands |
| **JSON Output** | All scripts output parseable JSON for easy integration |

## Common Use Cases

### Visual Regression Testing
"Take screenshots of https://example.com homepage and compare with baseline"
```bash
node screenshot.js --url https://example.com --output ./docs/screenshots/homepage.png
```

### Performance Audits
"Measure Core Web Vitals for production site and check if LCP < 2.5s"
```bash
node performance.js --url https://example.com | jq '.vitals.LCP'
```

### Form Automation
"Fill out the contact form on https://example.com with test data"
```bash
node fill.js --url https://example.com --selector "#email" --value "test@example.com" --close false
node fill.js --selector "#message" --value "Test message" --close false
node click.js --selector "button[type=submit]"
```

### Web Scraping
"Extract all product titles and prices from the catalog page"
```bash
node evaluate.js --url https://example.com/products --script "
  Array.from(document.querySelectorAll('.product')).map(el => ({
    title: el.querySelector('.title')?.textContent,
    price: el.querySelector('.price')?.textContent
  }))
" | jq '.result'
```

### Error Monitoring
"Monitor console errors on https://example.com for 10 seconds"
```bash
node console.js --url https://example.com --types error,warn --duration 10000
```

## Quick Reference

### Available Scripts
All located in `.claude/skills/chrome-devtools/scripts/`:

**Automation**: `navigate.js`, `screenshot.js`, `click.js`, `fill.js`, `evaluate.js`
**Analysis**: `snapshot.js`, `console.js`, `network.js`, `performance.js`

### Common Options
```bash
--headless false      # Show browser window
--close false         # Keep browser open for chaining
--timeout 30000       # Set timeout (milliseconds)
--wait-until networkidle2  # Wait strategy
```

### Setup
```bash
cd .claude/skills/chrome-devtools/scripts
npm install                    # Install dependencies
./install-deps.sh              # Linux/WSL only: system libs
brew install imagemagick       # Optional: screenshot compression
```

## Pro Tips

- **Always verify `pwd`** before running scripts to ensure correct output paths
- **Use `snapshot.js`** to discover correct selectors before clicking/filling elements
- **Chain commands** with `--close false` to reuse browser and speed up workflows
- **Install ImageMagick** for automatic screenshot compression (keeps files under 5MB for AI tools)
- **Parse with jq** to extract specific fields from JSON output
- **Not activating?** Say: "Use chrome-devtools skill to take a screenshot of..."

## Related Skills

- [AI Multimodal](/docs/skills/ai/ai-multimodal) - Analyze captured screenshots with vision models
- [Debugging](/docs/skills/tools/debugging) - Systematic debugging workflows
- [Research](/docs/skills/tools/research) - Investigate issues across multiple sources

---

## Key Takeaway

 Chrome DevTools skill provides production-ready browser automation through CLI scripts with automatic screenshot compression, JSON output, and comprehensive tooling for testing, scraping, and performance analysis.
