---
title: "ck:preview"
description: "View files/directories or generate visual explanations, slides, and diagrams"
section: engineer
kit: engineer
category: skills
order: 56
---

# Preview

View files and directories, or generate visual explanations with ASCII art, Mermaid diagrams, and slide presentations.

## Usage

```
/ck:preview [file or directory]         # View content
/ck:preview --explain [topic]           # Visual explanation
/ck:preview --diagram [topic]           # Architecture diagram
/ck:preview --slides [topic]            # Step-by-step slides
/ck:preview --ascii [topic]             # Terminal-friendly diagram
```

## Modes

| Flag | Output |
|------|--------|
| *(none)* | File/directory viewer |
| `--explain` | Visual explanation with ASCII + Mermaid |
| `--diagram` | Architecture and data flow diagrams |
| `--slides` | Step-by-step walkthrough presentation |
| `--ascii` | Terminal-only ASCII diagrams |

## HTML Mode

Add `--html` to any visual mode to generate a self-contained HTML file that opens directly in the browser — no markdown viewer required.

```
/ck:preview --html --explain [topic]      # Visual explanation as HTML
/ck:preview --html --diagram [topic]      # Architecture diagram as HTML
/ck:preview --html --slides [topic]       # Slide presentation as HTML
/ck:preview --html --ascii [topic]        # ASCII diagram as HTML
```

HTML-only modes (no Mermaid equivalent):

```
/ck:preview --html --diff [file-a] [file-b]   # Side-by-side diff view
/ck:preview --html --plan-review [plan-dir]   # Plan review with phase navigation
/ck:preview --html --recap [topic]            # Session recap summary
```

### HTML Mode Details

| Flag | Description |
|------|-------------|
| `--diff` | Side-by-side file diff, color-coded changes |
| `--plan-review` | Renders plan directory with phase navigation and status |
| `--recap` | Session or topic recap formatted for sharing |

**Output:** Single `.html` file saved to the active plan's `visuals/` directory (fallback: `plans/visuals/`). Opens automatically in the default browser.

**Reference loading per mode:**

| Mode | References loaded |
|------|------------------|
| `--explain` | Codebase context, relevant files |
| `--diagram` | Architecture docs, system design files |
| `--slides` | Topic files, step-by-step context |
| `--diff` | Both input files only |
| `--plan-review` | All phase files in plan directory |
| `--recap` | Session history, recent changes |

**Style strategy:** HTML output uses anti-slop rules (no filler content, no padding prose). The `--slides` mode additionally applies `ui-ux-pro-max` style for polished presentation layout.
