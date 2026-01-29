---
title: "Web Testing"
description: "Comprehensive web testing with Playwright, Vitest, k6 for E2E, unit, integration, load, security, visual, and accessibility testing"
section: engineer
kit: engineer
category: skills
order: 36
---

Comprehensive web testing covering unit, integration, E2E, load, security, visual regression, and accessibility testing with industry-standard tools.

## What This Skill Does

The Web Testing skill provides complete testing patterns and infrastructure for modern web applications. It covers the entire testing pyramid from unit tests to load testing, with specialized knowledge of Playwright, Vitest, k6, axe-core, and Lighthouse.

Think of it as your testing expert—knowing which testing strategy fits your architecture, how to prevent flakiness, optimize CI/CD pipelines, and ensure your app meets performance and accessibility standards.

## Core Capabilities

- **Unit/Integration Testing**: Vitest, browser mode, AAA pattern
- **E2E Testing**: Playwright fixtures, sharding, selectors
- **Component Testing**: React/Vue/Angular patterns (production-ready)
- **Load Testing**: k6 patterns and scenarios
- **Performance**: Core Web Vitals, Lighthouse CI
- **Visual Regression**: Screenshot comparison
- **Accessibility**: WCAG, axe-core integration
- **Security**: OWASP Top 10 checklists
- **Test Infrastructure**: Data management, CI/CD workflows

## Quick Start

```bash
npx vitest run                    # Unit tests
npx playwright test               # E2E tests
npx playwright test --ui          # E2E with UI
k6 run load-test.js               # Load tests
npx @axe-core/cli https://example.com  # Accessibility
npx lighthouse https://example.com     # Performance
```

## Testing Strategy (Choose Your Model)

| Model | Structure | Best For |
|-------|-----------|----------|
| Pyramid | Unit 70% > Integration 20% > E2E 10% | Monoliths |
| Trophy | Integration-heavy | Modern SPAs |
| Honeycomb | Contract-centric | Microservices |

## Usage

Activate when mentioning testing, E2E, Playwright, Vitest, flakiness, Core Web Vitals, mobile gestures, cross-browser, or accessibility testing.

## Example Prompts

- "Set up Playwright for E2E testing"
- "Write unit tests for this component with Vitest"
- "Create a load test scenario with k6"
- "Check accessibility with axe-core"
- "Fix flaky tests in the login flow"
- "Optimize Core Web Vitals in CI"
- "Test mobile gestures with Playwright"
- "Run cross-browser tests on Chrome, Firefox, Safari"

## Reference Documentation

### Core Testing
- Unit/Integration testing with Vitest
- E2E testing with Playwright
- Component testing patterns
- Playwright component testing (production-ready)

### Test Infrastructure
- Test data management (factories, fixtures, seeding)
- Database testing (Testcontainers, transactions)
- CI/CD workflows (GitHub Actions, sharding)
- Contract testing (Pact, MSW)

### Cross-Browser & Mobile
- Cross-browser checklist
- Mobile gesture testing (touch, swipe, orientation)

### Performance & Quality
- Core Web Vitals (LCP/CLS/INP, Lighthouse CI)
- Visual regression (screenshot comparison)
- Test flakiness mitigation

### Accessibility & Security
- Accessibility testing (WCAG, axe-core)
- Security testing (OWASP Top 10)
- Security checklists (auth, API, headers)

### API & Load
- API testing (Supertest, GraphQL)
- Load testing with k6

## Scripts

**Initialize Playwright Project:**
```bash
node ./scripts/init-playwright.js [--ct] [--dir <path>]
```
Creates best-practice Playwright setup: config, fixtures, example tests.

**Analyze Test Results:**
```bash
node ./scripts/analyze-test-results.js \
  --playwright test-results/results.json \
  --vitest coverage/vitest.json \
  --output markdown
```
Parses Playwright/Vitest/JUnit results into unified summary.

## CI/CD Integration

```yaml
jobs:
  test:
    steps:
      - run: npm run test:unit      # Gate 1: Fast fail
      - run: npm run test:e2e       # Gate 2: After unit pass
      - run: npm run test:a11y      # Accessibility
      - run: npx lhci autorun       # Performance
```

## What Makes This Different

Web Testing skill provides battle-tested patterns from production apps—solving real problems like test flakiness, slow CI pipelines, and cross-browser compatibility. Not theory, but proven infrastructure.

## Related Skills

- [Agent Browser](/docs/engineer/skills/agent-browser) - For AI-optimized browser automation
- [React Best Practices](/docs/engineer/skills/react-best-practices) - For performance optimization
- [Web Design Guidelines](/docs/engineer/skills/web-design-guidelines) - For accessibility standards
