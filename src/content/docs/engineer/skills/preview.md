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
