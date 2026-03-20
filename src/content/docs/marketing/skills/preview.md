---
title: "ckm:preview"
description: "Preview markdown files, plan directories, or collections"
section: marketing
kit: marketing
category: skills
order: 43
---

# Preview

> Render and preview marketing documents, plans, and content collections in a readable format.

## What This Skill Does

The Preview skill renders Markdown files, plan directories, and content collections into a clean, readable browser view. It's used to review campaign plans before execution, proof content before publishing, and share formatted documents with stakeholders who don't work in code editors.

The skill supports single file preview, directory-level plan rendering (showing all phases in sequence), and collection preview (multiple content pieces side by side). It uses the markdown-novel-viewer for clean rendering with full Mermaid diagram support.

Preview is especially useful when reviewing AI-generated plans and content — rendered output reveals formatting issues, broken links, and structural problems that are hard to spot in raw Markdown.

## Quick Start

```
/ckm:preview plans/260301-1200-email-campaign/
```

Or for a single file:
```
/ckm:preview docs/brand-guidelines.md
```

## Key Features

- Single file Markdown rendering with syntax highlighting
- Plan directory rendering (all phase files in sequence)
- Collection preview for comparing multiple content pieces
- Mermaid diagram rendering (flowcharts, sequence diagrams)
- Diagram export for use in presentations
- Auto-opens in browser with live reload on file changes
- Print-to-PDF for stakeholder sharing

## Usage Examples

**Preview a campaign plan**:
```
/ckm:preview plans/260301-email-campaign/
# Renders all phase files in order with navigation
```

**Preview content for proofing**:
```
/ckm:preview content/blog/ai-marketing-trends.md
# Clean rendered view for proofing before publish
```

**Preview with diagram explanation**:
```
/ckm:preview --explain "How does our email automation flow work?"
# Generates visual explanation with Mermaid diagram, opens in browser
```

## HTML Mode

Add `--html` to generate a self-contained HTML file that opens directly in the browser — no external viewer required.

```
/ckm:preview --html --explain "How does our email automation flow work?"
# Generates a standalone HTML file, opens in browser immediately
```

HTML-only modes for marketing workflows:

```
/ckm:preview --html --diff content/v1.md content/v2.md
# Side-by-side diff of two content versions

/ckm:preview --html --plan-review plans/260301-email-campaign/
# Plan review with phase navigation and status indicators

/ckm:preview --html --recap "Q1 campaign performance"
# Recap summary formatted for stakeholder sharing
```

### HTML Mode Reference

| Flag | Use case |
|------|----------|
| `--diff` | Compare content drafts, review copy changes |
| `--plan-review` | Share campaign plan status with stakeholders |
| `--recap` | Generate shareable session or campaign summaries |

**Output:** Single `.html` file saved to the active plan's `visuals/` directory. Opens automatically in the default browser. No dependencies — share the file directly.

**Style strategy:** HTML output uses anti-slop rules (no filler content, no padding prose). The `--slides` mode additionally applies `ui-ux-pro-max` style for polished presentation layout.

## Related

- [ckm:plan](/docs/marketing/skills/plan) - Create plans to preview
- [ckm:slides](/docs/marketing/skills/slides) - Convert content to presentation slides
- [ckm:hub](/docs/marketing/skills/hub) - Full content workspace
