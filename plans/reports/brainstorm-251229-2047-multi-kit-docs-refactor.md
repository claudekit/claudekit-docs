# Brainstorm: Multi-Kit Documentation Refactor

**Date:** 2025-12-29
**Session:** 2047
**Branch:** feat/marketing-docs

---

## Problem Statement

Current docs site (docs.claudekit.cc) only documents **ClaudeKit Engineer**. Need to refactor to support **both Engineer + Marketing kits** while keeping docs accurate and up-to-date.

---

## Requirements

1. Document both kits comprehensively
2. No outdated documentation
3. Clear kit distinction/navigation
4. Shared CLI documentation
5. Scalable architecture for future kits

---

## Evaluated Approaches

### Option A: Minimal - Add Marketing Section

**Description:** Add marketing-specific section alongside existing engineer docs.

**Implementation:**
- Update `config.ts` section enum: add `'marketing'`
- Create `MarketingSidebarNav.astro`
- Add marketing docs to `src/content/docs/marketing/`
- Keep existing engineer docs at current paths

**Pros:**
- Fast (3-5 days)
- Minimal breaking changes
- Existing URLs preserved

**Cons:**
- Tight coupling remains
- Shared content duplication (skills, agents overlap)
- Hard to scale to more kits
- Confusing: some pages engineer-only, some shared

**Verdict:** Not recommended - tech debt

---

### Option B: Kit-Agnostic Architecture (RECOMMENDED)

**Description:** Restructure docs with kit-aware organization and switcher.

**Implementation:**
```
src/content/docs/
├── getting-started/          # Shared
│   ├── intro.md
│   ├── installation.md       # CLI install (shared)
│   └── quick-start.md
├── cli/                      # Shared - ClaudeKit CLI
│   ├── commands.md
│   ├── init.md
│   ├── doctor.md
│   └── configuration.md
├── engineer/                 # Engineer Kit specific
│   ├── overview.md
│   ├── agents/
│   ├── commands/
│   ├── skills/
│   └── workflows/
├── marketing/                # Marketing Kit specific
│   ├── overview.md
│   ├── agents/
│   ├── commands/
│   ├── skills/
│   ├── workflows/
│   └── dashboard/
├── shared/                   # Shared concepts
│   ├── hooks.md
│   ├── mcp-setup.md
│   └── configuration.md
└── support/                  # Shared
    ├── faq.md
    └── troubleshooting.md
```

**Schema Update:**
```typescript
section: z.enum([
  'getting-started',
  'cli',
  'engineer',
  'marketing',
  'shared',
  'support',
  'changelog'
]),
kit: z.enum(['engineer', 'marketing', 'shared']).optional()
```

**Pros:**
- Clean separation
- Scalable (add more kits easily)
- Kit switcher UX possible
- Shared content not duplicated
- Clear mental model

**Cons:**
- More work (1-2 weeks)
- URL changes (redirects needed)
- Navigation rework

**Verdict:** RECOMMENDED - future-proof

---

### Option C: Separate Sites

**Description:** Different subdomains per kit.

- `engineer.claudekit.cc`
- `marketing.claudekit.cc`

**Verdict:** Over-engineered, maintenance nightmare. REJECTED.

---

## Final Recommended Solution

### Architecture: Option B (Kit-Agnostic)

### Phase 1: Schema & Navigation Update

1. **Update `config.ts`:**
   - Add `kit` field to schema
   - Update section enum

2. **Create Kit Switcher Component:**
   - Global kit context
   - Visual indicator (pill/tab)
   - URL-aware switching

3. **Update Navigation:**
   - Kit-aware sidebar
   - Show relevant sections per kit
   - Shared sections always visible

### Phase 2: Content Migration

**Engineer Kit (Existing → Reorganize):**
- Move 18 agents docs → `engineer/agents/`
- Move 91 commands docs → `engineer/commands/`
- Move 28 skills docs → `engineer/skills/`
- Move workflows → `engineer/workflows/`

**Marketing Kit (NEW):**
- 27 agents → `marketing/agents/`
- 119 commands → `marketing/commands/`
- 58 skills → `marketing/skills/`
- 10 workflows → `marketing/workflows/`
- Dashboard docs → `marketing/dashboard/`

**CLI (Extract from Engineer):**
- `ck new`, `ck init`, `ck doctor`, `ck versions`, `ck uninstall`
- Configuration guide
- Authentication setup

**Shared Content:**
- Hooks system
- MCP setup
- CLAUDE.md configuration

### Phase 3: Content Creation Priority

**High Priority (Marketing - NEW):**

| Category | Count | Notes |
|----------|-------|-------|
| Overview | 1 | Kit introduction |
| Agents | 27 | TOFU, MOFU, BOFU, Core, Community |
| Commands | 20 main | /campaign, /seo, /email, /social, etc. |
| Skills | 15 core | content-marketing, seo, analytics, etc. |
| Workflows | 6 | marketing, campaign, content, sales, seo, analytics |
| Dashboard | 3 | Setup, features, API |

**Medium Priority (CLI - Extract):**

| Page | Notes |
|------|-------|
| Installation | npm, bun, yarn, pnpm |
| Commands | new, init, doctor, versions, uninstall |
| Configuration | .claudekit/config, env vars |
| Authentication | GitHub CLI setup |
| Troubleshooting | Common issues |

**Low Priority (Engineer - Review/Update):**
- Verify commands match v2.2.0-beta.5
- Update any outdated skill references
- Add missing commands (if any)

---

## Documentation Gap Analysis

### Engineer Kit - Current vs Source

| Category | Docs Site | Source | Gap |
|----------|-----------|--------|-----|
| Agents | 18 | 17 | ✅ Complete (+copywriter extra?) |
| Commands | 91 | 77 | ⚠️ Over-documented or variants? |
| Skills | 28 | 42 | ⚠️ Missing 14 skills |
| Workflows | 8 | 4 | ✅ Extra workflow guides |

**Missing Skills (14):**
- ai-artist
- google-adk-python
- kit-builder
- assets-organizing
- plans-kanban
- storage
- test-orchestrator
- video-production
- youtube-handling
- And others...

### Marketing Kit - Needed

| Category | Source Count | Priority |
|----------|--------------|----------|
| Agents | 27 | High |
| Commands | 119 (20 main) | High |
| Skills | 58 | Medium (top 20 first) |
| Workflows | 10 | High |
| Dashboard | 32 components | Medium |

### CLI - Needed (Extract)

| Item | Status |
|------|--------|
| Installation guide | Needs extraction |
| `ck new` | Needs full docs |
| `ck init` | Needs full docs |
| `ck doctor` | Needs full docs |
| `ck versions` | Needs docs |
| `ck uninstall` | Needs docs |
| `ck update` | Needs docs |
| Config reference | Needs docs |

---

## Implementation Considerations

### Risks

1. **URL Breaking Changes**
   - Mitigation: Add redirects in Astro config
   - Keep old URLs working during transition

2. **Navigation Complexity**
   - Mitigation: Clear visual kit indicator
   - Default to "shared" context when ambiguous

3. **Content Overlap**
   - Some skills/agents exist in both kits
   - Mitigation: Link to shared page OR duplicate with kit-specific examples

4. **Build Time**
   - ~170 existing + ~100 new pages
   - Mitigation: Incremental builds, lazy loading

### Technical Decisions

1. **Kit Detection:** URL path (`/engineer/...`, `/marketing/...`)
2. **Default Kit:** Engineer (most users)
3. **Switcher Location:** Header, sticky
4. **Search:** Kit-scoped option needed

---

## Success Metrics

1. **Coverage:** 100% of agents, commands, workflows documented
2. **Accuracy:** Docs match source code versions
3. **Navigation:** User can find any feature in <3 clicks
4. **Build:** Site builds in <2 minutes
5. **SEO:** No 404s from old URLs

---

## Next Steps

1. **Approve architecture (Option B)**
2. **Create implementation plan with phases**
3. **Update schema + navigation components**
4. **Migrate existing engineer docs**
5. **Create marketing docs (prioritized)**
6. **Extract CLI docs**
7. **Add kit switcher**
8. **Set up redirects**
9. **Test + deploy**

---

## Dependencies

- Marketing kit source: `../claudekit-marketing/` ✅ Analyzed
- Engineer kit source: `../claudekit-engineer/` ✅ Analyzed
- CLI source: `../claudekit-cli/` ✅ Analyzed

---

## Unresolved Questions

1. **Version sync:** How to keep docs in sync when kits update?
2. **Changelog:** Separate per kit or combined?
3. **Vietnamese translations:** Translate marketing docs too?
4. **Search:** Algolia, Pagefind, or custom?
5. **Kit badges:** Show kit compatibility on shared pages?
6. **Dashboard docs:** Include full component reference?
7. **MCP integrations:** Shared section or per-kit?
8. **Release cadence:** Docs deploy with kit releases?

---

## Scout Reports Generated

All comprehensive reports saved to `plans/reports/`:

| Report | Size | Content |
|--------|------|---------|
| `scout-251229-2047-claudekit-engineer-analysis.md` | 22KB | Full engineer analysis |
| `scout-251229-2047-marketing-analysis.md` | 11KB | Full marketing analysis |
| `scout-251229-2047-claude-engineer-commands.md` | 35KB | 77 commands catalog |
| `scout-251229-2047-marketing-commands.md` | 17KB | 119 commands catalog |
| `skills_catalog_251229.md` | - | 42 engineer skills |
| `scout-251229-2047-skills-inventory.md` | - | 58 marketing skills |
| `scout-251229-2047-workflows-catalog.md` | 14KB | Engineer workflows |
| `scout-251229-2047-docs-inventory.md` | 15KB | Current docs analysis |

---

## Summary

**Recommended:** Kit-Agnostic Architecture (Option B)

**Effort:** 1-2 weeks full implementation

**Key Actions:**
1. Restructure docs with `/engineer/`, `/marketing/`, `/cli/`, `/shared/` paths
2. Add kit switcher component
3. Create 50+ new marketing pages (prioritized)
4. Extract CLI documentation
5. Update 14 missing engineer skills
6. Set up URL redirects

**Outcome:** Scalable docs architecture supporting current kits + future expansion, with clear navigation and no outdated content.
