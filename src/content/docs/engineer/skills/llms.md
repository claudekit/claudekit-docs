---
title: "ck:llms"
description: "Generate llms.txt and llms-full.txt indexes following the llmstxt.org spec for LLM-friendly documentation"
section: engineer
kit: engineer
category: skills
order: 55
---

# LLMs

Generates `llms.txt` and `llms-full.txt` indexes following the [llmstxt.org](https://llmstxt.org) spec—a standard for making websites and codebases navigable by LLMs.

## What This Skill Does

LLMs creates machine-readable indexes of your documentation or codebase. `llms.txt` is a concise table of contents with links. `llms-full.txt` expands each link with full inline content so LLMs can consume the entire site in one context load.

## When to Use

- Publishing a docs site that should be AI-accessible
- Creating a codebase overview for LLM context injection
- Building an API or SDK that developers use with AI tools
- Improving AI assistant accuracy when working with your project

## Core Capabilities

- Crawl local path or remote URL
- Generate `llms.txt` (compact index) and `llms-full.txt` (expanded inline content)
- Follow llmstxt.org spec exactly
- Custom output path

## Arguments

| Argument | Description |
|----------|-------------|
| `[path\|url]` | Local directory or remote URL to index (default: current dir) |
| `--full` | Also generate `llms-full.txt` with expanded inline content |
| `--output path` | Output directory (default: project root) |

## Example Usage

```
/ck:llms
/ck:llms ./docs --full
/ck:llms https://docs.mysite.com --full --output ./public
/ck:llms src/content/docs --output ./public
```

## Output Format

`llms.txt` follows the llmstxt.org spec:

```markdown
# Project Name

> One-line description of the project

## Docs

- [Quick Start](/docs/getting-started/quick-start): Get up and running in 5 minutes
- [API Reference](/docs/api): Complete API documentation

## Optional

- [Changelog](/docs/changelog): Version history
```

`llms-full.txt` includes the same structure but with full page content inlined under each link.

## Related Skills

- [Docs](/docs/engineer/skills/docs) — manages documentation this skill indexes
- [Repomix](/docs/engineer/skills/repomix) — alternative for packing repos into AI-friendly context
- [Docs Seeker](/docs/engineer/skills/docs-seeker) — retrieves docs for consumption
