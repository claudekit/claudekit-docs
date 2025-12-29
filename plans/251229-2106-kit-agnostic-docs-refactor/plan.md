---
title: "Kit-Agnostic Documentation Refactor"
description: "Restructure docs site to support Engineer + Marketing kits with parallel content creation"
status: in-progress
priority: P1
effort: 42h
completion: 85%
branch: feat/marketing-docs
tags: [docs, refactor, multi-kit, marketing, parallelization]
created: 2025-12-29
updated: 2025-12-29
last-status-check: 2025-12-29 23:41 UTC
---

# Kit-Agnostic Documentation Refactor

**Plan ID**: 251229-2106-kit-agnostic-docs-refactor
**Created**: 2025-12-29
**Estimated Effort**: 40h (8-10 copywriters in parallel)
**Branch**: feat/marketing-docs

---

## Executive Summary

Refactor docs.claudekit.cc from single-kit (Engineer) to multi-kit architecture supporting both Engineer and Marketing kits. Maximize parallelization with 8 copywriters working simultaneously on independent content batches.

### Key Decisions (CONFIRMED)

| Decision | Choice |
|----------|--------|
| Architecture | Kit-Agnostic (Option B) |
| URL Changes | Accept breaking changes + redirects |
| Priority | Marketing docs first, then engineer gaps |
| Translations | Vietnamese for ALL content |
| Search | Global (all kits) |
| Content Style | Storytelling, beginner-friendly |
| Visuals | ai-artist + ai-multimodal skills |

---

## Content Scope

### Marketing Kit (NEW - 72 files)

| Category | Count | Priority |
|----------|-------|----------|
| Overview | 1 | P1 |
| Agents | 27 | P1 |
| Commands | 20 (main) | P1 |
| Skills | 20 (top) | P2 |
| Workflows | 10 | P1 |
| Dashboard | 3 | P2 |

### CLI (EXTRACT - 8 files)

| Category | Count | Priority |
|----------|-------|----------|
| Overview | 1 | P1 |
| Commands | 6 | P1 |
| Config | 1 | P2 |

### Engineer Gaps (UPDATE - 14 files)

| Category | Count | Priority |
|----------|-------|----------|
| Missing Skills | 14 | P2 |

### Visual Assets (NEW - 15+ files)

| Category | Count | Priority |
|----------|-------|----------|
| Architecture diagrams | 5 | P1 |
| Workflow flowcharts | 5 | P1 |
| Infographics | 5 | P2 |

---

## Dependency Graph

```
Phase 1: Infrastructure (SEQUENTIAL - Blocks All)
    |
    v
+---+---+---+---+---+---+---+
|   |   |   |   |   |   |   |
v   v   v   v   v   v   v   v
P2  P3  P4  P5  P6  P7  P8  (PARALLEL - 7 copywriters + 1 artist)
Marketing Agents | Marketing Commands | Marketing Skills | Marketing Workflows | CLI | Engineer Gaps | Visual Assets
    |   |   |   |   |   |   |
    +---+---+---+---+---+---+
                |
                v
          Phase 9: Vietnamese Translations (SEQUENTIAL)
                |
                v
          Phase 10: Integration & Testing (SEQUENTIAL)
```

---

## File Ownership Matrix

### CRITICAL: No Overlap Rule

Each phase owns exclusive files. NO file appears in multiple phases.

| Phase | Exclusive File Ownership | Copywriter |
|-------|-------------------------|------------|
| P1 | `config.ts`, `SidebarNav.astro`, `KitSwitcher.tsx`, `*Nav.astro` | Infrastructure |
| P2 | `docs/marketing/agents/*.md` (27 files) | Copywriter-1 |
| P3 | `docs/marketing/commands/*.md` (20 files) | Copywriter-2 |
| P4 | `docs/marketing/skills/*.md` (20 files) | Copywriter-3 |
| P5 | `docs/marketing/workflows/*.md` (10 files) | Copywriter-4 |
| P6 | `docs/cli/*.md` (8 files) | Copywriter-5 |
| P7 | `docs/skills/{missing}/*.md` (14 files) | Copywriter-6 |
| P8 | `public/assets/diagrams/*.{svg,png}` | AI-Artist |
| P9 | `docs-vi/**/*.md` (all translations) | VI-Team |
| P10 | `astro.config.mjs` (redirects), tests | Integrator |

---

## URL Migration Strategy

### Old URLs (Engineer-Implicit)

```
/docs/agents/planner
/docs/commands/core/cook
/docs/skills/ai/ai-multimodal
```

### New URLs (Kit-Explicit)

```
/docs/engineer/agents/planner
/docs/engineer/commands/cook
/docs/engineer/skills/ai-multimodal
/docs/marketing/agents/copywriter
/docs/marketing/commands/campaign
/docs/cli/init
```

### Redirect Map (Phase 10)

~100 redirects from old paths to new `/engineer/` paths.

---

## Phase Summary

| # | Phase | Type | Duration | Parallel |
|---|-------|------|----------|----------|
| 1 | Infrastructure Setup | Sequential | 4h | No |
| 2 | Marketing Agents | Parallel | 6h | Yes |
| 3 | Marketing Commands | Parallel | 4h | Yes |
| 4 | Marketing Skills | Parallel | 4h | Yes |
| 5 | Marketing Workflows | Parallel | 3h | Yes |
| 6 | CLI Documentation | Parallel | 3h | Yes |
| 7 | Engineer Gaps | Parallel | 3h | Yes |
| 8 | Visual Assets | Parallel | 4h | Yes |
| 9 | Vietnamese Translations | Sequential | 8h | No |
| 10 | Integration & Testing | Sequential | 3h | No |

**Total**: ~42h work, ~16h wall-clock (with parallelization)

---

## Content Guidelines

### Storytelling Approach

All documentation must follow the storytelling pattern:

1. **Hook**: Open with relatable problem or quick win
2. **Journey**: Progressive steps with micro-celebrations
3. **Resolution**: User achieves goal with confidence
4. **Next Steps**: Clear path forward

### Writing Style

- **Voice**: Second person ("You'll learn...", "Your workflow...")
- **Tone**: Friendly, encouraging, professional
- **Complexity**: Accessible to "vibe coders" and low-tech users
- **Structure**: Chunked, scannable, progressive disclosure

### Visual Requirements

- Diagrams for all architecture concepts
- Flowcharts for multi-step processes
- Screenshots with annotations for UI features
- Icons for concept reinforcement
- Alt-text for accessibility

---

## Quality Gates

### Per-Phase Gates

- [ ] Content matches source (no hallucinations)
- [ ] Frontmatter valid (Zod schema passes)
- [ ] Links use absolute paths (no relative)
- [ ] Storytelling structure applied
- [ ] No emoji unless explicit request

### Final Gates (Phase 10)

- [ ] `bun run build` passes
- [ ] All redirects work (no 404s)
- [ ] Navigation renders correctly
- [ ] Kit switcher functional
- [ ] Search indexes all kits
- [ ] Vietnamese parity check

---

## Risk Mitigation

### Risk 1: Content Conflicts

**Mitigation**: File ownership matrix prevents overlapping edits. Each copywriter has exclusive file list.

### Risk 2: Navigation Breakage

**Mitigation**: Phase 1 must complete with working nav before content phases start.

### Risk 3: Build Failures

**Mitigation**: Each phase validates `bun run build` before merging.

### Risk 4: Stale Source Data

**Mitigation**: Scout reports from 2025-12-29 provide current state. Re-scout if source kits updated.

### Risk 5: Vietnamese Sync

**Mitigation**: Phase 9 waits for ALL content phases. Batch translation prevents drift.

---

## Phase Files

| Phase | File |
|-------|------|
| 1 | `phase-01-infrastructure-setup.md` |
| 2 | `phase-02-marketing-agents-content.md` |
| 3 | `phase-03-marketing-commands-content.md` |
| 4 | `phase-04-marketing-skills-content.md` |
| 5 | `phase-05-marketing-workflows-content.md` |
| 6 | `phase-06-cli-documentation.md` |
| 7 | `phase-07-engineer-gaps.md` |
| 8 | `phase-08-visual-assets.md` |
| 9 | `phase-09-vietnamese-translations.md` |
| 10 | `phase-10-integration-testing.md` |

---

## Source References

| Report | Path |
|--------|------|
| Brainstorm | `plans/reports/brainstorm-251229-2047-multi-kit-docs-refactor.md` |
| Marketing Analysis | `plans/reports/scout-251229-2047-marketing-analysis.md` |
| Engineer Analysis | `plans/reports/scout-251229-2047-claudekit-engineer-analysis.md` |
| Marketing Commands | `plans/reports/scout-251229-2047-marketing-commands.md` |
| Docs Inventory | `plans/reports/scout-251229-2047-docs-inventory.md` |
| Research: Architecture | `research/researcher-01-multi-kit-architecture.md` |
| Research: Storytelling | `research/researcher-02-storytelling-docs.md` |

---

## Success Metrics

1. **Coverage**: 100% of Marketing agents/commands/workflows documented
2. **Build**: Site builds in <2 minutes
3. **Navigation**: User finds any feature in <3 clicks
4. **SEO**: Zero 404s from old URLs
5. **Parity**: Vietnamese mirrors English 1:1
6. **Quality**: All content passes storytelling checklist

---

## Unresolved Questions

1. **Kit Default**: Should landing page default to Engineer or show kit picker?
2. **Search UI**: Kit filter dropdown or scope indicator?
3. **Version Sync**: Automation for docs updates when kits release?
4. **Dashboard Docs**: Full component reference or overview only?
5. **MCP Docs**: Shared section or per-kit examples?

---

## Validation Summary

**Validated**: 2025-12-29
**Questions Asked**: 5

### Confirmed Decisions

| Question | User Choice |
|----------|-------------|
| Kit Default Behavior | **Show Kit Picker first** - Force users to choose Engineer or Marketing before seeing content |
| Visual Assets Scope | **Full scope (15 assets)** - 10 SVG diagrams + 5 PNG infographics as planned |
| Engineer Docs Migration | **Move + redirect** - Move files to /engineer/ paths and add redirects from old URLs |
| Dashboard Documentation | **Overview + setup only** - 3-page coverage (Overview, Setup Guide, API Reference) |
| Overlapping Features | **Kit-specific examples** - Each kit gets its own page with kit-relevant examples |

### Action Items

- [ ] **Phase 1**: Implement Kit Picker as landing experience (not auto-default to Engineer)
- [ ] **Phase 1**: Update KitSwitcher to force selection on first visit
- [ ] **Phase 10**: Add full redirect map for migrated Engineer docs (~100 redirects)
- [ ] **Phase 5**: Keep Dashboard docs to 3 pages max (Overview, Setup, API)
- [ ] **All content phases**: Use kit-specific examples for shared features, link to /shared/ for concepts

### Questions Resolved

1. ~~Kit Default~~ → Kit Picker first (no auto-default)
2. ~~Visual Scope~~ → Full 15 assets
3. ~~Migration Strategy~~ → Move + redirect
4. ~~Dashboard Docs~~ → Overview only (3 pages)
5. ~~Shared Content~~ → Kit-specific examples with shared concept links

---

## Next Steps

1. **Run Phase 1** (Infrastructure) - BLOCKING
2. **Spawn 7 parallel copywriters** for Phases 2-8
3. **Run Phase 9** after Phases 2-8 complete
4. **Run Phase 10** for final integration
5. **Create PR** to `dev` branch
