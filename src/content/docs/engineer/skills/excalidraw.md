---
title: "ck:excalidraw"
description: "Create Excalidraw diagrams for architecture, data flow, workflows, and system design with auto-diagramming support"
section: engineer
kit: engineer
category: skills
order: 67
---

# Excalidraw

Create Excalidraw diagrams — architecture, data flow, workflows, system design. Supports live MCP canvas editing, file-based JSON generation with Playwright rendering, and zero-config codebase auto-diagramming.

## What This Skill Does

Excalidraw generates hand-drawn-style diagrams that communicate system design clearly. It maps concepts to visual patterns (fan-out, convergence, tree, timeline), applies semantic color coding, and iterates through a self-critique loop to ensure quality. Can also auto-analyze your codebase and produce architecture diagrams without manual input.

## When to Use

- Visualizing system architecture
- Documenting data flow between services
- Creating workflow diagrams
- Explaining component relationships to teammates
- Auto-generating architecture diagrams from a codebase

## Modes

| Mode | When Used | How It Works |
|------|-----------|--------------|
| **MCP Canvas** | MCP tools available | Real-time editing on a live canvas |
| **File-based** | No MCP available | Generate `.excalidraw` JSON + render via Playwright |
| **Auto-diagram** | `"diagram this repo"` | Zero-config: detect → discover → map → generate |

## Visual Patterns

| Pattern | Use For |
|---------|---------|
| **Fan-out** | One component spawns multiple outputs |
| **Convergence** | Multiple inputs combine into one |
| **Tree** | Hierarchy or nesting |
| **Timeline** | Sequence of steps |
| **Spiral/Cycle** | Loops, continuous improvement |
| **Assembly Line** | Input transforms through stages |
| **Side-by-side** | Comparing two approaches |
| **Phases** | Separated stages with gaps |

## Color Palette

| Role | Background | Stroke |
|------|-----------|--------|
| Frontend/UI | `#a5d8ff` | `#1971c2` |
| Backend/API | `#d0bfff` | `#7048e8` |
| Database | `#b2f2bb` | `#2f9e44` |
| Storage | `#ffec99` | `#f08c00` |
| AI/ML | `#e599f7` | `#9c36b5` |
| External API | `#ffc9c9` | `#e03131` |
| Queue/Event | `#fff3bf` | `#fab005` |
| Cache | `#ffe8cc` | `#fd7e14` |
| Decision | `#ffd8a8` | `#e8590c` |

## Example Usage

```
/ck:excalidraw "Architecture diagram of the auth system"
/ck:excalidraw "Data flow from user signup to email verification"
/ck:excalidraw  # (auto-diagram: analyze codebase and generate)
```

## Workflow

1. **Mode detection** — test for MCP tools, select backend
2. **Design phase** — assess depth, map concepts to visual patterns, plan layout
3. **Generate** — create diagram elements with semantic colors and sizing
4. **Self-critique** — render → audit → fix defects → re-render (2-4 iterations)

### Auto-Diagram Pipeline

1. Detect project type and framework
2. Discover components (max 15 tool calls)
3. Map connections (max 10 tool calls)
4. Verify with user before drawing
5. Select layout pattern and generate

## Design Rules

- Box width: 200-240px, height: 120-160px
- Gap between labeled arrows: 150-200px
- Row spacing: 280-350px
- Font labels: 16px, titles: 20-24px
- `roughness: 0`, `opacity: 100`, `fontFamily: 3` (monospace)

## Related Skills

- [Preview](/docs/engineer/skills/preview) — visual explanations with ASCII + Mermaid
- [Mermaid.js](/docs/engineer/skills/mermaidjs-v11) — code-based diagrams (v11 syntax)
