---
title: Skills Overview
description: ClaudeKit Engineer's 89 shipped skills for development, design, documents, and tooling
section: engineer
kit: engineer
category: skills
order: 1
published: true
---

# Skills Overview

ClaudeKit Engineer ships **89 skills**. The `ck` plugin namespace exposes them as `/ck:<skill>` in both Claude Code and Codex.

:::note[Provider support]
Both providers load the skills below. Claude Code also loads the [Engineer agents](/docs/engineer/agents); Codex currently exposes the Engineer skills only.
:::

The document capabilities are stored as a supported nested group in the shipped payload but appear as four individual skills: `/ck:docx`, `/ck:pdf`, `/ck:pptx`, and `/ck:xlsx`.

## Complete Catalog

| Skill | Skill | Skill |
|---|---|---|
| [agent-browser](/docs/engineer/skills/agent-browser) | [agentize](/docs/engineer/skills/agentize) | [ai-artist](/docs/engineer/skills/ai-artist) |
| [ai-multimodal](/docs/engineer/skills/ai-multimodal) | [ask](/docs/engineer/skills/ask) | [backend-development](/docs/engineer/skills/backend-development) |
| [better-auth](/docs/engineer/skills/better-auth) | [bootstrap](/docs/engineer/skills/bootstrap) | [brainstorm](/docs/engineer/skills/brainstorm) |
| [chrome-profile](/docs/engineer/skills/chrome-profile) | [autoresearch](/docs/engineer/skills/ck-autoresearch) | [code-review](/docs/engineer/skills/ck-code-review) |
| [debug](/docs/engineer/skills/ck-debug) | [graphify](/docs/engineer/skills/ck-graphify) | [loop](/docs/engineer/skills/ck-loop) |
| [plan](/docs/engineer/skills/ck-plan) | [predict](/docs/engineer/skills/ck-predict) | [scenario](/docs/engineer/skills/ck-scenario) |
| [security](/docs/engineer/skills/ck-security) | [coding-agent-orchestration](/docs/engineer/skills/coding-agent-orchestration) | [coding-level](/docs/engineer/skills/coding-level) |
| [context-engineering](/docs/engineer/skills/context-engineering) | [cook](/docs/engineer/skills/cook) | [copywriting](/docs/engineer/skills/copywriting) |
| [cti-expert](/docs/engineer/skills/cti-expert) | [databases](/docs/engineer/skills/databases) | [deploy](/docs/engineer/skills/deploy) |
| [design](/docs/engineer/skills/design) | [devops](/docs/engineer/skills/devops) | [docs](/docs/engineer/skills/docs) |
| [docs-seeker](/docs/engineer/skills/docs-seeker) | [docx](/docs/engineer/skills/docx) | [excalidraw](/docs/engineer/skills/excalidraw) |
| [find-skills](/docs/engineer/skills/find-skills) | [fix](/docs/engineer/skills/fix) | [frontend-design](/docs/engineer/skills/frontend-design) |
| [frontend-development](/docs/engineer/skills/frontend-development) | [ghpm](/docs/engineer/skills/ghpm) | [git](/docs/engineer/skills/git) |
| [gkg](/docs/engineer/skills/gkg) | [google-adk-python](/docs/engineer/skills/google-adk-python) | [html-video](/docs/engineer/skills/html-video) |
| [journal](/docs/engineer/skills/journal) | [llms](/docs/engineer/skills/llms) | [markdown-novel-viewer](/docs/engineer/skills/markdown-novel-viewer) |
| [mcp-builder](/docs/engineer/skills/mcp-builder) | [media-processing](/docs/engineer/skills/media-processing) | [mermaidjs-v11](/docs/engineer/skills/mermaidjs-v11) |
| [mintlify](/docs/engineer/skills/mintlify) | [mobile-development](/docs/engineer/skills/mobile-development) | [payment-integration](/docs/engineer/skills/payment-integration) |
| [pdf](/docs/engineer/skills/pdf) | [plans-kanban](/docs/engineer/skills/plans-kanban) | [pptx](/docs/engineer/skills/pptx) |
| [preview](/docs/engineer/skills/preview) | [problem-solving](/docs/engineer/skills/problem-solving) | [project-management](/docs/engineer/skills/project-management) |
| [project-organization](/docs/engineer/skills/project-organization) | [react-best-practices](/docs/engineer/skills/react-best-practices) | [remotion](/docs/engineer/skills/remotion) |
| [repomix](/docs/engineer/skills/repomix) | [research](/docs/engineer/skills/research) | [retro](/docs/engineer/skills/retro) |
| [review-pr](/docs/engineer/skills/review-pr) | [scout](/docs/engineer/skills/scout) | [security-scan](/docs/engineer/skills/security-scan) |
| [sequential-thinking](/docs/engineer/skills/sequential-thinking) | [shader](/docs/engineer/skills/shader) | [ship](/docs/engineer/skills/ship) |
| [shopify](/docs/engineer/skills/shopify) | [show-off](/docs/engineer/skills/show-off) | [skill-creator](/docs/engineer/skills/skill-creator) |
| [stitch](/docs/engineer/skills/stitch) | [tanstack](/docs/engineer/skills/tanstack) | [team](/docs/engineer/skills/team) |
| [tech-graph](/docs/engineer/skills/tech-graph) | [test](/docs/engineer/skills/test) | [threejs](/docs/engineer/skills/threejs) |
| [ui-styling](/docs/engineer/skills/ui-styling) | [ui-ux-pro-max](/docs/engineer/skills/ui-ux-pro-max) | [use-mcp](/docs/engineer/skills/use-mcp) |
| [vibe](/docs/engineer/skills/vibe) | [watzup](/docs/engineer/skills/watzup) | [web-design-guidelines](/docs/engineer/skills/web-design-guidelines) |
| [web-frameworks](/docs/engineer/skills/web-frameworks) | [web-testing](/docs/engineer/skills/web-testing) | [worktree](/docs/engineer/skills/worktree) |
| [xia](/docs/engineer/skills/xia) | [xlsx](/docs/engineer/skills/xlsx) | |

## Using Skills

Invoke a skill directly or describe a matching task:

```text
/ck:plan design a subscription billing system
Use the PDF skill to extract every table from report.pdf.
```

For project-local custom skills, create `.claude/skills/<name>/SKILL.md`. Use `ck doctor` to inspect the active global Engineer plugin and skill catalog.
