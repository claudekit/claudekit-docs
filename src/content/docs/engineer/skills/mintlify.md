---
title: "Mintlify"
description: "Build and deploy modern documentation sites with Mintlify, supporting MDX components, OpenAPI integration, and AI features"
section: engineer
kit: engineer
category: skills
order: 42
published: true
---

v2.0.0 — Mintlify documentation builder. Covers setup, configuration, MDX components, API docs, AI features, and deployment.

## What This Skill Does

Activates when building or updating Mintlify documentation sites. Handles `docs.json` configuration, MDX component usage, OpenAPI integration, navigation structure, and deployment to Mintlify's hosting platform.

## Quick Start

```bash
npm i -g mintlify       # Install CLI
mint new                 # Scaffold new docs project
mint dev                 # Local dev server → http://localhost:3000
mint validate            # Validate docs.json + content
```

## Core Concepts

### Configuration (`docs.json`)

Central config controls all site structure and metadata:

```json
{
  "name": "My Docs",
  "theme": "mint",
  "navigation": [...],
  "colors": { "primary": "#0D9373" },
  "favicon": "/favicon.png"
}
```

**7 built-in themes**: `mint`, `maple`, `palm`, `willow`, `linden`, `almond`, `aspen`

### Navigation Structure

Mintlify supports layered navigation:

| Type | Use Case |
|------|----------|
| **Tabs** | Top-level product areas |
| **Anchors** | Fixed sidebar links (changelog, blog) |
| **Groups** | Sections within a tab |
| **Dropdowns** | Nested group collections |
| **Products** | Multi-product nav (enterprise) |
| **Versions** | v1/v2 content switching |
| **Languages** | i18n content switching |

### MDX + React Components

Pages are MDX—full React component support alongside markdown.

## MDX Components

26+ built-in components available:

| Component | Purpose |
|-----------|---------|
| `<Card>`, `<CardGroup>` | Link cards in grid layouts |
| `<Steps>` | Numbered step sequences |
| `<Tabs>`, `<Tab>` | Tabbed content |
| `<Accordion>`, `<AccordionGroup>` | Collapsible sections |
| `<CodeGroup>` | Multi-language code examples |
| `<Note>`, `<Warning>`, `<Tip>`, `<Info>` | Callout boxes |
| `<Frame>` | Image/video container with caption |
| `<Tooltip>` | Inline hover text |
| `<Icon>` | Inline icons (1000+ available) |
| `<ResponseField>` | API response field documentation |
| `<ParamField>` | API parameter documentation |
| Mermaid | Diagrams via fenced code blocks |

## CLI Commands

| Command | Purpose |
|---------|---------|
| `mint dev` | Start local dev server |
| `mint new` | Scaffold new project |
| `mint update` | Update Mintlify CLI |
| `mint broken-links` | Find broken internal links |
| `mint a11y` | Accessibility audit |
| `mint validate` | Validate config + frontmatter |
| `mint openapi-check` | Validate OpenAPI spec |
| `mint rename <old> <new>` | Rename file and update references |
| `mint migrate-mdx` | Migrate mint.json to docs.json |

## API Documentation

Auto-generate reference pages from OpenAPI 3.x or AsyncAPI specs:

```json
// docs.json
{
  "openapi": "openapi.yaml"
}
```

Each endpoint gets an interactive playground with:
- Request builder (headers, params, body)
- Live API calls from the browser
- Response schema viewer
- Code snippets in 10+ languages

Supports: REST (OpenAPI), async APIs (AsyncAPI), webhooks.

## AI Features

| Feature | Purpose |
|---------|---------|
| `llms.txt` | Expose docs to LLM crawlers |
| `skill.md` | Claude Code skill definition for your docs |
| MCP support | Connect docs site as MCP server for AI assistants |

## Deployment

**Primary:** Connect GitHub or GitLab repo — auto-deploys on push to main.

**Preview deployments:** Auto-generated URL for every PR.

**Custom domains:** Configure in Mintlify dashboard, automatic SSL.

**Self-hosting / CDN:**

| Platform | Method |
|----------|--------|
| Vercel | `@mintlify/vercel` adapter |
| Cloudflare Pages | Static export |
| AWS S3 + CloudFront | Static export |

**Analytics integrations:** GA4, PostHog, Amplitude, Mixpanel, Segment, Plausible, Fathom, and 5+ more.

## Related Skills

- [Docs Seeker](/docs/engineer/skills/docs-seeker) — look up Mintlify documentation
- [MCP Builder](/docs/engineer/skills/mcp-builder) — build MCP server for your docs site
