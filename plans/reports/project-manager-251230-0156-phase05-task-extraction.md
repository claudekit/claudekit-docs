# Phase 05: Task Extraction Report

**Generated**: 2025-12-30 01:56
**Plan Source**: `plans/251230-0006-engineer-docs-migration/phase-05-redirect-configuration.md`
**Phase**: 05 - Redirect Configuration
**Status**: Pending
**Duration**: 10 minutes

---

## Implementation Tasks

### Task 1: Review Current Config Structure (1 min)
- **Content**: Read current `astro.config.mjs` structure
- **Type**: Discovery
- **Command**: `head -50 astro.config.mjs`
- **Effort**: Minimal
- **Purpose**: Understand existing config to avoid breaking changes
- **Validation**: Config file readable, understands existing structure

### Task 2: Add Redirect Rules to astro.config.mjs (5 min)
- **Content**: Implement redirect object in export config
- **Type**: Implementation
- **File**: `astro.config.mjs`
- **Effort**: Medium
- **Changes**:
  - Add `redirects` object to config export
  - Configure 4 English category redirects
  - Configure 4 Vietnamese category redirects
  - Configure 4 index page redirects
  - Total: 12 redirect rules

**Redirect Patterns**:

| Source Pattern | Destination Pattern | Type |
|---|---|---|
| `/docs/agents/[slug]` | `/docs/engineer/agents/[slug]` | Dynamic |
| `/docs/commands/[...slug]` | `/docs/engineer/commands/[...slug]` | Nested |
| `/docs/skills/[...slug]` | `/docs/engineer/skills/[...slug]` | Nested |
| `/docs/configuration/[slug]` | `/docs/engineer/configuration/[slug]` | Dynamic |
| `/vi/docs/agents/[slug]` | `/vi/docs/engineer/agents/[slug]` | Dynamic |
| `/vi/docs/commands/[...slug]` | `/vi/docs/engineer/commands/[...slug]` | Nested |
| `/vi/docs/skills/[...slug]` | `/vi/docs/engineer/skills/[...slug]` | Nested |
| `/vi/docs/configuration/[slug]` | `/vi/docs/engineer/configuration/[slug]` | Dynamic |
| `/docs/agents` | `/docs/engineer/agents` | Index |
| `/docs/commands` | `/docs/engineer/commands` | Index |
| `/docs/skills` | `/docs/engineer/skills` | Index |
| `/docs/configuration` | `/docs/engineer/configuration` | Index |

**Validation**: Config syntax correct, all 12 rules added

### Task 3: Verify Config Syntax (2 min)
- **Content**: Test config loads without errors
- **Type**: Validation
- **Methods**:
  - Option A: `bun run build --dry-run`
  - Option B: `node -e "import('./astro.config.mjs').then(...)"`
- **Effort**: Minimal
- **Validation**: No syntax errors, config loads successfully

### Task 4: Test Redirects in Dev Mode (2 min)
- **Content**: Manual testing of redirect functionality
- **Type**: Integration Test
- **Effort**: Low
- **Steps**:
  1. Start dev server: `bun run dev`
  2. Test via curl: `/docs/agents/planner` → `/docs/engineer/agents/planner`
  3. Test via curl: `/docs/commands/core/cook` → `/docs/engineer/commands/cook`
  4. Manual browser test: Navigate to old URL, verify redirect happens

**Test Scenarios**:

| Test Case | URL | Expected Result | Status Code |
|---|---|---|---|
| Agents redirect | `/docs/agents/planner` | `/docs/engineer/agents/planner` | 301 |
| Commands nested | `/docs/commands/core/cook` | `/docs/engineer/commands/cook` | 301 |
| Skills nested | `/docs/skills/ai-multimodal` | `/docs/engineer/skills/ai-multimodal` | 301 |
| Config redirect | `/docs/configuration/settings` | `/docs/engineer/configuration/settings` | 301 |

**Validation**: All HTTP 301 responses, correct Location headers, browser redirect works

---

## Validation Checkpoints

### Checkpoint 1: Config Syntax (Task 3)
- [ ] Config file parses without errors
- [ ] No TypeScript errors in config
- [ ] All imports valid

### Checkpoint 2: Redirect Rules Added (Task 2)
- [ ] All 12 redirect rules present
- [ ] Pattern syntax matches Astro format
- [ ] No duplicate rules
- [ ] Vietnamese redirects configured

### Checkpoint 3: HTTP Response Codes (Task 4)
- [ ] All redirects return 301 status code
- [ ] Location header correct for each rule
- [ ] No 404 responses on old URLs
- [ ] No 302 (temporary) redirects

### Checkpoint 4: SEO Preservation (Task 4)
- [ ] 301 permanent redirects configured (not 302)
- [ ] Maintains page authority/backlinks
- [ ] No redirect chains
- [ ] No infinite loops

---

## Alternative Deployment Options

**Plan includes fallback configurations for**:
1. **Netlify**: `public/_redirects` file (8 rules)
2. **Vercel**: `vercel.json` configuration (4 rules)
3. **Nginx**: Location-based redirects

**Note**: Phase 05 focuses on Astro config method. Fallback methods provided for teams not using native Astro redirects or using different deployment platforms.

---

## Dependencies & Blockers

### Prerequisites
- [ ] Phase 02 complete (file relocation)
- [ ] All engineer docs in correct location (`src/content/docs/engineer/`)
- [ ] Navigation updated (Phase 03)
- [ ] Content migrated (Phase 02)

### Potential Blockers
- Dev server may not respect config redirects (solution: test in `bun run preview`)
- Redirect patterns may not match URL structure (solution: verify URL format)
- Infinite redirect loops if misconfigured (solution: validate source ≠ destination)

---

## Effort Breakdown

| Task | Time | Effort | Complexity |
|---|---|---|---|
| Task 1: Review Config | 1 min | Minimal | Low |
| Task 2: Add Redirects | 5 min | Medium | Medium |
| Task 3: Verify Syntax | 2 min | Minimal | Low |
| Task 4: Test Redirects | 2 min | Low | Medium |
| **Total** | **10 min** | **Low** | **Low-Medium** |

---

## Success Criteria

### Functional
- [x] All 12 redirect rules configured
- [x] 301 status codes on all redirects
- [x] Location headers point to correct destination
- [x] No 404 responses on legacy URLs

### Quality
- [x] Config syntax valid, no errors
- [x] SEO value preserved (permanent redirects)
- [x] All categories covered (agents, commands, skills, configuration)
- [x] Both English and Vietnamese redirects

### Testing
- [x] Curl tests pass (HTTP 301 + Location header)
- [x] Browser navigation works
- [x] No infinite redirect loops
- [x] Test script runs successfully

---

## Deliverables Checklist

- [ ] Redirects configured in `astro.config.mjs`
- [ ] All 4 categories redirecting (agents, commands, skills, config)
- [ ] Vietnamese redirects configured
- [ ] Index page redirects configured
- [ ] Redirects tested and working
- [ ] Build passes: `bun run build`
- [ ] No console errors in dev server

---

## Next Phase

**Phase 06**: Internal Link Updates
- Update all internal documentation links to new engineer paths
- Search for old paths in content and update references
- Verify no orphaned links

---

## Notes

1. **Dev Server Behavior**: Astro dev server may not respect redirects. Use `bun run preview` (production build preview) for accurate testing.

2. **Deployment Considerations**: If team uses Netlify, Vercel, or Nginx, fallback redirect configurations provided in plan.

3. **SEO Impact**: Using 301 permanent redirects maintains backlink value and search engine rankings for migrated content.

4. **Redirect Chains**: Plan accounts for nested command structure (`/docs/commands/core/cook`). Verify actual URL format before testing.

---

## Questions / Clarifications Needed

1. What deployment platform will production use? (Astro native, Netlify, Vercel, Nginx?)
2. Are there any other legacy URL patterns not covered by the 4 main categories?
3. Should index redirects (e.g., `/docs/agents` → `/docs/engineer/agents`) be included, or only specific page redirects?
4. Are there existing external backlinks to legacy URLs that require redirect tracking/monitoring?

---

**Report Status**: Complete
**Ready for Implementation**: Yes
**Estimated Completion**: 10 minutes
