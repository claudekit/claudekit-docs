---
title: "Docs: ClaudeKit Plugin Migration Guide"
description: "User-facing migration guide for EngineerKit legacy→plugin install; ck update is silent; verify via /ck:plan slash menu."
status: pending
priority: P2
effort: 6h
branch: kai/docs/plugin-migration-guide
tags: [docs, plugin-migration, engineer, astro]
created: 2026-05-17
---

# Plan: ClaudeKit Plugin Migration Guide

**Source issue:** https://github.com/claudekit/claudekit-engineer/issues/694
**Shared context:** `/Users/kaitran/claudekit/plans/260516-1400-plugin-migration-epic-shared/SHARED-CONTEXT.md`
**Scope target repo:** `claudekit-docs` (Astro v5 Starlight-style site)
**Branch pairing:** docs branch MUST match source PR target (dev↔dev, main↔main) per `~/.claude/rules/claudekit/docs-sync-workflow.md`

## Goal

Ship `engineer/configuration/plugin-migration.mdx` + cross-links + changelog entry + Discord announcement draft. Emphasize: users do nothing special — `ck update` migrates silently. Verify by typing `/ck:plan` in CC and seeing the description hint.

## Phases

| # | Phase | Priority | Effort | Status | File |
|---|-------|----------|--------|--------|------|
| 1 | Asset & screenshot prep | P2 | 1h | pending | `phase-01-asset-and-screenshot-prep.md` |
| 2 | Author MDX migration guide | P1 | 2h | pending | `phase-02-author-migration-mdx.md` |
| 3 | Cross-link integration | P2 | 1h | pending | `phase-03-cross-link-integration.md` |
| 4 | Changelog + Discord announcement | P2 | 1h | pending | `phase-04-changelog-and-announcement.md` |
| 5 | Build verification & PR | P1 | 1h | pending | `phase-05-build-verify-and-pr.md` |

## Dependency Graph

```
#687-#693 merged + @beta published ──┐
                                     ▼
[phase-1 assets] ──> [phase-2 mdx] ──> [phase-3 cross-link] ──> [phase-5 verify+PR]
                          └──────────> [phase-4 changelog+discord] ──┘
```

## Cross-issue dependencies

- BLOCKED until all CLI sibling issues #687–#693 merged AND released to npm `@beta` tag
- BLOCKED until engineer #683–#686 merged AND plugin.json reachable on `main`
- After ship: triggers #695 deprecation timer (1 release cycle)

## Site placement decision

`src/content/docs/engineer/configuration/plugin-migration.mdx`
- Section: `engineer` (categorized: overview | agents | skills | configuration)
- Category: `configuration` (install-time concept, sits next to install/setup material)
- Slug routes to `/docs/engineer/configuration/plugin-migration`

## Cross-link surface

| Page (path) | Link form |
|-------------|-----------|
| `getting-started/installation.md` | callout: "Engineer Kit now ships as a Claude Code plugin → see migration guide" |
| `getting-started/upgrade-guide.md` | section addition under "Upgrading ClaudeKit" |
| `cli/update.md` | note: silent legacy→plugin migration on first `ck update` post-N.N.N |
| `cli/doctor.md` | reference: install-mode reporting (legacy/plugin/mixed/fresh) |
| `support/troubleshooting/index.md` | new troubleshooting subsection link |
| `support/faq.md` | new FAQ entries |
| `changelog/index.md` | release entry referencing migration |

## Unresolved Questions

1. Screenshots dir `/Users/kaitran/.claude/image-cache/df199c90-4fe0-4c8c-9855-6a714331e25b/` MISSING — must re-capture 7 PNGs from a real CC session post-plugin install. Confirm with user where to source.
2. Versioning approach: single MDX page with version-aware callouts (RECOMMENDED — KISS, matches existing precedent like `migration-from-commands-to-skills.md`) vs version-switcher component (no such component exists in repo). Default to single MDX unless user objects.
3. Discord announcement venue: separate `claudekit-docs/announcements/` directory does NOT exist in repo. Recommend file at `claudekit-docs/announcements/2026-XX-XX-plugin-migration.md` (NEW dir) OR tracker issue in `claudekit/claudekit-discord-bot` repo. Defaulting to tracker issue for delivery; archive copy in announcements dir.
4. Cross-org issue linking (epic-level Q from SHARED-CONTEXT.md #3): confirm Discord-bot release announcement gets its own tracking issue. Recommend YES.
5. Changelog auto-gen: `changelog/index.md` is hand-maintained (no semantic-release output found in docs repo). Confirm manual append is correct route.
6. VI translation: `docs-vi/` mirror — ship EN-only first PR, file follow-up for VI (per repo precedent).
