---
title: "Preview"
description: "View files/directories or generate visual explanations, slides, and diagrams"
section: engineer
kit: engineer
category: skills
order: 56
---

View files and directories, or generate visual explanations with ASCII art, Mermaid diagrams, and slide presentations.

## Usage

```
/preview [file or directory]         # View content
/preview --explain [topic]           # Visual explanation
/preview --diagram [topic]           # Architecture diagram
/preview --slides [topic]            # Step-by-step slides
/preview --ascii [topic]             # Terminal-friendly diagram
```

## Modes

| Flag | Output |
|------|--------|
| *(none)* | File/directory viewer |
| `--explain` | Visual explanation with ASCII + Mermaid |
| `--diagram` | Architecture and data flow diagrams |
| `--slides` | Step-by-step walkthrough presentation |
| `--ascii` | Terminal-only ASCII diagrams |
