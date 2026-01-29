---
title: "Agent Browser"
description: "AI-optimized browser automation with context-efficient snapshots for autonomous testing and cloud browser support"
section: engineer
kit: engineer
category: skills
order: 20
---

Browser automation designed specifically for AI agents. Uses a "snapshot + refs" paradigm for 93% less context than traditional tools.

## What This Skill Does

Agent Browser gives you headless browser automation with extreme token efficiency. Instead of dumping massive HTML trees into your context, it provides clean snapshots with @ref handles to interactive elements. Think of it as Playwright reimagined for AI workflows—you get the full power of browser automation without drowning in verbose output.

This skill excels at long autonomous sessions where context conservation matters. It supports video recording for debugging, cloud browser testing via Browserbase, and self-verifying build loops where you need to confirm visual changes actually worked.

## Core Capabilities

- Navigate pages and interact with elements using @ref handles
- Capture snapshots with only interactive elements (~280 chars vs 8K+ for Playwright MCP)
- Record video of automation sessions for debugging
- Run tests on cloud browsers (Browserbase) for CI/CD
- Handle multi-tab workflows and frame switching
- Save/load browser state for authenticated sessions
- Mock network requests and responses
- Emulate devices, geolocation, offline mode

## When to Use This vs Chrome DevTools

Use agent-browser for: Long autonomous AI sessions, context-constrained workflows, video recording, cloud browsers, multi-tab handling, self-verifying build loops

Use chrome-devtools for: Quick screenshots, custom Puppeteer scripts, WebSocket debugging, existing workflow integration, auth injection

## Usage

Activate by mentioning browser automation tasks. ClaudeKit automatically activates this skill for web testing, scraping, and UI verification tasks.

## Example Prompts

- "Test the login flow at example.com and verify the dashboard loads"
- "Navigate to the pricing page and take a screenshot of the comparison table"
- "Fill out the contact form and confirm the success message appears"
- "Record a video of the checkout process from cart to confirmation"
- "Run this test suite on Browserbase for CI"

## Quick Workflow

The standard 4-step pattern:

1. Navigate: `agent-browser open https://example.com`
2. Snapshot: `agent-browser snapshot -i` (get @refs for buttons, inputs)
3. Interact: `agent-browser fill @e2 "text"`, `agent-browser click @e1`
4. Re-snapshot: `agent-browser snapshot -i` (after page changes)

## Related Skills

- [Web Testing](/docs/engineer/skills/web-testing) - Comprehensive testing with Playwright, Vitest, k6
