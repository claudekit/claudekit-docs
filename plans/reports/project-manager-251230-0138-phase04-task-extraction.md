# Phase 04 Task Extraction Report
## Vietnamese Migration Implementation Tasks

**Report Generated**: 2025-12-30 01:38
**Plan Source**: `plans/251230-0006-engineer-docs-migration/phase-04-vietnamese-migration.md`
**Phase Status**: Pending
**Total Duration**: 15 minutes

---

## Executive Summary

Phase 04 focuses on migrating 86 Vietnamese documentation files from `docs-vi/docs/` to `docs-vi/engineer/` and applying consistent frontmatter updates. Expected deliverables: 86 migrated files, 47 missing translations documented.

---

## Implementation Tasks (Numbered)

### Task 01: Verify Vietnamese Structure
**Duration**: 2 minutes
**Effort**: Low
**Dependencies**: None (initial validation)

**Validation Criteria**:
- Confirm existence of `src/content/docs-vi/docs/` directory
- Verify expected directory structure exists (or identify actual structure)
- Count total Vietnamese files: expect 86 files

**Deliverables**:
- Baseline count of Vietnamese documentation files
- Directory structure inventory

**Success Metrics**:
- Output: "Vietnamese docs total: 86" (or actual count discovered)

---

### Task 02: Migrate Vietnamese Files (5 categories)
**Duration**: 5 minutes
**Effort**: Medium
**Dependencies**: Task 01 complete

**Sub-tasks**:

**2.1 Create Destination Directories**
- Create `src/content/docs-vi/engineer/agents/`
- Create `src/content/docs-vi/engineer/commands/`
- Create `src/content/docs-vi/engineer/skills/`
- Create `src/content/docs-vi/engineer/configuration/`

**2.2 Migrate Files by Category**
- Agents: move `docs-vi/docs/agents/*` → `docs-vi/engineer/agents/` (file count TBD)
- Commands: move `docs-vi/docs/commands/*` → `docs-vi/engineer/commands/` (file count TBD)
- Skills: move `docs-vi/docs/skills/*` → `docs-vi/engineer/skills/` (file count TBD)
- Configuration: move `docs-vi/docs/configuration/*` → `docs-vi/engineer/configuration/` (file count TBD)
- CLI (if exists): move `docs-vi/docs/cli/*` → `docs-vi/cli/` (file count TBD)

**Expected Results**:
- 86 total Vietnamese files migrated to new locations
- All files moved using `git mv` (preserves history)
- Old `docs-vi/docs/` directory becomes empty (to be removed)

**Validation Criteria**:
- Output: "Vietnamese files migrated: 86" (or actual count)
- Each category migration verified
- No files lost in transition
- Git history preserved for all files

**File Distribution** (estimated):
- Agents: TBD (verify during execution)
- Commands: TBD (verify during execution)
- Skills: TBD (verify during execution)
- Configuration: TBD (verify during execution)
- Total: 86 files

---

### Task 03: Update Vietnamese Frontmatter
**Duration**: 5 minutes
**Effort**: Medium
**Dependencies**: Task 02 complete

**Operations**:

**3.1 Update Section Field**
- Find all `*.md` files in `docs-vi/engineer/`
- Replace: `section: docs` → `section: engineer`
- Expected matches: 86 files

**3.2 Add Kit Field**
- Find all files with `section: engineer`
- Insert new line after section field: `kit: engineer`
- Expected additions: 86 files

**Validation Criteria**:
- Output: "Vietnamese files with section=engineer: 86"
- Output: "Vietnamese files with kit=engineer: 86"
- All files have matching section and kit values
- No broken frontmatter

**Frontmatter Template**:
```yaml
---
title: [Vietnamese title]
description: [Vietnamese description]
section: engineer
kit: engineer
category: [agents|commands|skills|configuration]
---
```

---

### Task 04: Identify & Document Missing Translations
**Duration**: 3 minutes
**Effort**: Low
**Dependencies**: Task 02 complete (English structure finalized), Task 03 complete

**Operations**:

**4.1 Compare File Inventories**
- Generate list of English files in `docs/engineer/`
- Generate list of Vietnamese files in `docs-vi/engineer/`
- Identify files in English NOT in Vietnamese

**4.2 Generate Missing Translations Report**
- Create report: `Missing Vietnamese Translations Report`
- Document all 47 missing files
- Include generation timestamp
- Categorize by section (agents/commands/skills/configuration)

**Expected Results**:
- Document 47 missing Vietnamese translations
- Breakdown by category
- Clear inventory for future translation work

**Validation Criteria**:
- Math check: 133 English - 86 Vietnamese = 47 missing
- All missing files identified and listed
- Report location and content verified

---

### Task 05: Comprehensive Verification
**Duration**: 2 minutes
**Effort**: Low
**Dependencies**: Tasks 02, 03, 04 complete

**Verification Checks**:

**5.1 File Count by Category**
- Engineer agents (VI): count files
- Engineer commands (VI): count files
- Engineer skills (VI): count files
- Engineer configuration (VI): count files
- Total Vietnamese engineer docs: expect 86

**5.2 Old Location Cleanup**
- Verify `docs-vi/docs/` is empty or contains no markdown files
- Expected: 0 files remaining
- Status: ready for directory removal

**5.3 Sample File Validation**
- Read frontmatter of sample Vietnamese file (e.g., `planner.md`)
- Verify structure:
  - Title in Vietnamese ✓
  - Description in Vietnamese ✓
  - `section: engineer` ✓
  - `kit: engineer` ✓
  - Correct category field ✓

**Output Format**:
```
=== Vietnamese Migration Verification ===
Engineer agents (VI): [count]
Engineer commands (VI): [count]
Engineer skills (VI): [count]
Engineer config (VI): [count]
Total Vietnamese engineer docs: [count] (expect 86)
Remaining in docs-vi/docs: 0 (expect 0)
```

---

### Task 06: Create Missing Translations Tracking Document
**Duration**: 2 minutes
**Effort**: Low
**Dependencies**: Task 04 complete

**Document Structure**:

Create new file (location TBD) containing:
- Header: Vietnamese Translation Gaps
- Metadata: Date, English total (133), Vietnamese total (86), Gap (47, 35%)
- Section: List all 47 missing files (with path references)
- Section: Recommendations for future work
  - Prioritize high-traffic pages first
  - Use copywriter agent for batch translation
  - Maintain 1:1 parity going forward
  - Schedule translation sprint
- Section: Translation Checklist (by category)

**Validation Criteria**:
- Document exists and is readable
- All 47 missing files listed with relative paths
- Recommendations are actionable
- Checklist covers all categories

---

## Validation Checkpoints

### Checkpoint 1: After Task 02 (File Migration)
- [ ] All 86 Vietnamese files moved to new locations
- [ ] `git mv` commands successful (history preserved)
- [ ] No orphaned files in old locations
- [ ] Directory structure matches English layout

### Checkpoint 2: After Task 03 (Frontmatter Update)
- [ ] 86 files have `section: engineer`
- [ ] 86 files have `kit: engineer`
- [ ] No files missing section or kit fields
- [ ] No broken YAML frontmatter

### Checkpoint 3: After Task 04 (Missing Translations)
- [ ] 47 files identified and documented
- [ ] Math verified: 133 - 86 = 47
- [ ] Files categorized by section
- [ ] Report generated and readable

### Checkpoint 4: After Task 05 (Comprehensive Verification)
- [ ] Total count matches: 86 files
- [ ] Category counts sum to 86
- [ ] Old location is empty (0 files)
- [ ] Sample file has correct frontmatter

### Checkpoint 5: After Task 06 (Documentation)
- [ ] Tracking document created
- [ ] All 47 missing files listed
- [ ] Recommendations documented
- [ ] Checklist includes all categories

---

## File Count Summary

**Current State**:
- English engineer docs: 133 files
- Vietnamese engineer docs (to migrate): 86 files
- Missing translations: 47 files (35% gap)

**Post-Migration State**:
- Vietnamese engineer docs: 86 files (migrated)
- Old location: 0 files (cleanup complete)
- Missing translations documented: 47 files

**Distribution by Category** (to be verified):
- Agents: TBD
- Commands: TBD
- Skills: TBD
- Configuration: TBD
- CLI (if included): TBD
- **Total**: 86 files

---

## Effort Estimation

| Task | Duration | Effort | Critical |
|------|----------|--------|----------|
| 01: Verify Structure | 2 min | Low | No |
| 02: Migrate Files | 5 min | Medium | Yes |
| 03: Update Frontmatter | 5 min | Medium | Yes |
| 04: Document Missing | 3 min | Low | Yes |
| 05: Verify Complete | 2 min | Low | Yes |
| 06: Create Tracking | 2 min | Low | No |
| **Total** | **19 min** | **Medium** | - |

**Planned Duration**: 15 minutes
**Estimated Actual**: 19 minutes (includes contingency for verification)

---

## Critical Dependencies

1. **Phase 02**: English migration must be complete
2. **Phase 03**: English frontmatter updates must be finalized
3. **Git repository**: Must be clean for safe `git mv` operations
4. **Directory structure**: Vietnamese structure must match English (or be mapped)

---

## Potential Blockers & Mitigations

| Blocker | Impact | Mitigation |
|---------|--------|-----------|
| Vietnamese structure doesn't match English | High | Manually map directories using `find` command |
| Character encoding issues (non-UTF-8) | High | Convert using `iconv` to UTF-8 |
| Missing Vietnamese frontmatter fields | Medium | Batch sed update or manual inspection |
| Files not moving cleanly | High | Verify git status; use `git mv` not shell mv |
| Count mismatch after migration | High | Re-verify with detailed category counts |

---

## Success Criteria

Phase 04 complete when:
- [x] Deliverable 1: 86 Vietnamese files migrated to `engineer/` paths
- [x] Deliverable 2: Frontmatter updated (section=engineer, kit=engineer)
- [x] Deliverable 3: 47 missing translations documented
- [x] Deliverable 4: Old `docs-vi/docs/` structure cleaned up
- [x] Deliverable 5: Vietnamese structure mirrors English
- [x] Checkpoint 1-5: All verification checks passed
- [x] Build: `bun run build` completes without errors

---

## Next Phase

**Phase 05: Redirect Configuration**
- Configure redirects from old documentation paths to new paths
- Ensure SEO preservation
- Update internal links

---

## Unresolved Questions

1. **Actual Vietnamese file distribution**: Task 02 assumes files are distributed across agents/commands/skills/configuration. Verify actual distribution during Task 01.

2. **Missing translations prioritization**: Task 06 mentions prioritizing high-traffic pages but doesn't specify which files are high-traffic. Need analytics or manual specification.

3. **Old directory removal timing**: Plan marks `docs-vi/docs/` removal as "done" but doesn't specify when to execute. Should this be part of cleanup or separate task?

4. **CLI structure handling**: Plan includes conditional logic for CLI migration but Vietnamese CLI structure is unknown. Verify if `docs-vi/docs/cli/` exists and how it maps.

5. **Build validation scope**: Plan doesn't specify if build must pass after each task or just at end. Recommend build validation after Task 03 and final verification after Task 05.

---

**Report Status**: Task extraction complete
**Ready for Implementation**: Yes
