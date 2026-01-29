---
title: /test:ui
description: Comprehensive UI testing with screenshots and detailed analysis
section: engineer
kit: engineer
category: commands/test
order: 1
published: true
---

# /test:ui

Run comprehensive UI tests on websites with automated browser testing and visual analysis.

## Syntax

```bash
/test:ui [url] [options]
```

## Arguments

- `url` - Website URL to test
- `options` - Optional flags (e.g., `--headless`, `--mobile`, `--auth`)

## What It Tests

- **Pages & Components** - All discoverable pages and UI elements
- **Forms & Navigation** - User flows and interactions
- **Accessibility** - A11y compliance
- **Functionality** - Features and user workflows
- **Usability** - User experience patterns
- **Responsive Layouts** - Mobile/tablet/desktop breakpoints
- **Cross-browser** - Browser compatibility
- **Performance** - Load times, Core Web Vitals
- **Security** - Basic security checks
- **SEO** - Meta tags, structure, best practices

## Testing Protected Routes

For authenticated areas:

### Step 1: Manual Login
User logs in manually in browser, then extracts:
- Cookies (name, value, domain)
- Access tokens (JWT/Bearer from localStorage)
- Session storage keys

### Step 2: Inject Auth

```bash
# Via cookies
node inject-auth.js --url https://example.com \
  --cookies '[{"name":"session","value":"abc123","domain":".example.com"}]'

# Via Bearer token
node inject-auth.js --url https://example.com \
  --token "Bearer eyJhbG..." \
  --header Authorization

# Via localStorage
node inject-auth.js --url https://example.com \
  --local-storage '{"auth_token":"xyz","user_id":"123"}'
```

### Step 3: Run Tests

Auth session persists until `--close true` used:

```bash
node navigate.js --url https://example.com/dashboard
node screenshot.js --url https://example.com/profile --output profile.png
node screenshot.js --url https://example.com/settings --close true
```

## Output

Generates comprehensive markdown report with:
- Test results summary
- Key findings and recommendations
- Embedded screenshots
- Pass/fail breakdowns per category
- Priority-ranked issues

All screenshots saved in report directory.

## Examples

```bash
/test:ui https://example.com
# Full public site testing

/test:ui https://app.example.com --auth
# Protected routes with auth workflow

/test:ui https://example.com --mobile
# Mobile-specific testing
```

## Report Preview

After completion, prompts to preview report with `/preview` command.

## Related Commands

- [/test](/docs/engineer/commands/core/test) - Run code tests
- [/preview](/docs/engineer/commands/core/preview) - View test reports
