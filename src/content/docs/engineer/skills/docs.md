---
title: "ck:docs"
description: "Manage project documentation — initialize, update, and summarize docs with AI assistance"
section: engineer
kit: engineer
category: skills
order: 11
---

# `ck:docs`

Manage project documentation with AI-powered analysis. Initialize docs for new projects, update after changes, or generate summaries.

## Usage

```
/ck:docs init          # Initialize documentation for a project
/ck:docs update        # Update docs after code changes
/ck:docs summarize     # Generate a documentation summary
```

## Subcommands

| Subcommand | Description |
|-----------|-------------|
| `init` | Analyze codebase and create initial documentation suite |
| `update` | Scan for changes and update existing docs |
| `summarize` | Generate a concise project summary |

## What It Creates

```
docs/
├── project-overview-pdr.md
├── codebase-summary.md
├── system-architecture.md
├── code-standards.md
└── project-roadmap.md
```
