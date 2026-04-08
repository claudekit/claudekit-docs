---
title: "ck:show-off"
description: "Generate stunning self-contained HTML showcase pages with hero sections, parallax effects, and multi-section layouts"
section: engineer
kit: engineer
category: skills
order: 68
---

# Show Off

Generate a stunning self-contained HTML page to showcase a product, project, feature, or idea. Produces a multi-section presentation with hero, parallax effects, theme toggle, and automatic screenshot capture.

## What This Skill Does

Show Off takes a prompt or markdown content and produces a polished HTML showcase page with a hero section and 4-6 topic sections. It coordinates research for supporting evidence, creates the HTML with the frontend-design skill, and captures section screenshots at multiple ratios for social media use.

## When to Use

- Showcasing a product or feature to stakeholders
- Creating visual presentations for social media
- Building a quick landing page for a side project
- Generating shareable visual summaries

## Core Features

- Hero section with eye-catching design
- 4-6 topic sections with parallax effects
- Theme toggle (system, light, dark)
- Responsive layout that works on all screen sizes
- Multi-language support (English and Vietnamese)
- Automatic section screenshot capture (horizontal, vertical, square ratios)

## Arguments

| Argument | Description |
|----------|-------------|
| `content` | Markdown content or natural language prompt |

## Example Usage

```
/ck:show-off "Create a product showcase for our new authentication system"
/ck:show-off "Visualize the key metrics from Q4 sprint retrospective"
```

## Workflow

1. **Analyze** — split request into 2-6 topics/sections (including hero)
2. **Research** — search for supporting evidence and fact-checking
3. **Write** — create showcase content as markdown
4. **Build** — activate frontend-design skill to create HTML with:
   - Visual diagrams and illustrations
   - Decorative elements and micro-animations
   - Citation URLs in footnotes
5. **Capture** — screenshot each section at multiple ratios (horizontal, vertical, square)
6. **Deliver** — open the resulting HTML page

## Output

- Self-contained HTML file with inline styles and scripts
- Section screenshots in `assets/showoff/<name>/images/` at three ratios
- Content markdown at `assets/showoff/<name>/content.md`

## Related Skills

- [Frontend Design](/docs/engineer/skills/frontend-design) — polished UI implementation (used internally)
- [Preview](/docs/engineer/skills/preview) — lighter-weight visual explanations
- [Design](/docs/engineer/skills/design) — brand and design asset generation
