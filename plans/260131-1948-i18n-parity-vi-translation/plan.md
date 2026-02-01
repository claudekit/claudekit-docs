---
title: "i18n Parity - VI Translation of Getting Started + Engineer Skills"
description: "Translate missing VI pages to achieve full i18n parity"
status: pending
priority: P1
effort: 8h
branch: dev
tags: [docs, i18n, vi, translation]
created: 2026-01-31
---

# i18n Parity - VI Translation Plan

## Problem

Current i18n parity is 56% (135/239 pages). Critical sections missing VI translations.

## Scope

**Priority 1: getting-started/** (5 pages)
- introduction.md
- installation.md
- concepts.md
- why-claudekit.md
- upgrade-guide.md

**Priority 2: engineer/skills/** (48 pages)
- See full list in Phase 2

## Phases Overview

| Phase | Description | Pages | Status |
|-------|-------------|-------|--------|
| 1 | Translate getting-started | 5 | pending |
| 2 | Translate engineer/skills | 48 | pending |
| 3 | Validation | - | pending |

**Total:** 53 pages

## Success Criteria

- All 53 pages translated with `lang: vi`
- All use `/vi/docs/...` internal links
- Build passes
- Parity increases to 78%+

## Implementation Notes

- Use AI translation + review workflow
- Follow existing VI structure (categorized for skills)
- Check existing VI skill pages for style reference

## Missing Pages List

### Phase 1: getting-started (5)
```
getting-started/concepts.md
getting-started/installation.md
getting-started/introduction.md
getting-started/upgrade-guide.md
getting-started/why-claudekit.md
```

### Phase 2: engineer/skills (48)
```
engineer/skills/agent-browser.md
engineer/skills/ai-artist.md
engineer/skills/ai-multimodal.md
engineer/skills/backend-development.md
engineer/skills/better-auth.md
engineer/skills/brainstorm.md
engineer/skills/chrome-devtools.md
engineer/skills/code-review.md
engineer/skills/context-engineering.md
engineer/skills/cook.md
engineer/skills/copywriting.md
engineer/skills/databases.md
engineer/skills/debug.md
engineer/skills/devops.md
engineer/skills/docs-seeker.md
engineer/skills/document-skills.md
engineer/skills/find-skills.md
engineer/skills/fix.md
engineer/skills/frontend-design.md
engineer/skills/frontend-development.md
engineer/skills/git.md
engineer/skills/gkg.md
engineer/skills/google-adk-python.md
engineer/skills/markdown-novel-viewer.md
engineer/skills/mcp-builder.md
engineer/skills/mcp-management.md
engineer/skills/media-processing.md
engineer/skills/mermaidjs-v11.md
engineer/skills/mobile-development.md
engineer/skills/payment-integration.md
engineer/skills/planning.md
engineer/skills/plans-kanban.md
engineer/skills/problem-solving.md
engineer/skills/react-best-practices.md
engineer/skills/remotion.md
engineer/skills/repomix.md
engineer/skills/research.md
engineer/skills/scout.md
engineer/skills/sequential-thinking.md
engineer/skills/shader.md
engineer/skills/shopify.md
engineer/skills/skill-creator.md
engineer/skills/template-skill.md
engineer/skills/threejs.md
engineer/skills/ui-styling.md
engineer/skills/ui-ux-pro-max.md
engineer/skills/web-design-guidelines.md
engineer/skills/web-frameworks.md
engineer/skills/web-testing.md
```

## VI Skill Structure Mapping

EN uses flat structure, VI uses categorized:

| EN Path | VI Path |
|---------|---------|
| skills/git.md | skills/tools/git.md |
| skills/fix.md | skills/tools/fix.md |
| skills/cook.md | skills/tools/cook.md |
| skills/ai-artist.md | skills/ai/ai-artist.md |
| skills/better-auth.md | skills/auth/better-auth.md |
| skills/backend-development.md | skills/backend/backend-development.md |
| skills/frontend-development.md | skills/frontend/frontend-development.md |
| skills/shopify.md | skills/ecommerce/shopify.md |

## Next Steps

Execute with `/cook --parallel` after approval.
