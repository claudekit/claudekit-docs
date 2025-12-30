# Phase 03: Frontmatter Updates - Task Extraction Report

**Report Generated**: 2025-12-30 01:17 UTC
**Plan Reference**: `plans/251230-0006-engineer-docs-migration/phase-03-frontmatter-updates.md`
**Phase Duration**: 20 minutes
**Phase Status**: Pending
**Dependencies**: Phase 02 Complete (137 files migrated ✓)

---

## Executive Summary

Phase 03 requires frontmatter updates across 131 engineer documentation files (excluding CLI files). All tasks are automation-focused with clear validation checkpoints. Three implementation method options provided: sed, Node.js, or Python scripts.

---

## File Count Verification

**Phase 02 Migration Results**:
- Total files migrated: 137
- Distribution:
  - Agents: 18 files
  - Commands: 66 files (with nested subdirectories)
  - Skills: 49 files (35 legacy + 14 existing)
  - Configuration: 4 files
  - CLI: 11 files (moved to shared `/cli/` location - NOT engineer-specific)

**Phase 03 Scope**:
- **131 engineer files** to update (137 - 6 CLI files previously separated)
  - 18 agent files
  - 66 command files
  - 49 skill files
  - 4 configuration files

**CLI Files Exception**: 11 CLI files remain in `src/content/docs/cli/` (kit-agnostic, not updated in Phase 03)

---

## Implementation Tasks (Numbered)

### Task 1: Execute Frontmatter Update Script
**Status**: Pending
**Effort**: 10 minutes
**Files Affected**: 131

Execute one of three provided implementation methods to update all engineer files:

1. **Option A - sed (Linux/Mac/Git Bash)**
   - Replace: `section: docs` → `section: engineer`
   - Add: `kit: engineer` after section field
   - Command set includes 2 find+sed operations + 2 verification greps

2. **Option B - Node.js Script (Cross-platform)**
   - Create: `scripts/update-frontmatter.mjs`
   - Uses glob pattern: `src/content/docs/engineer/**/*.md`
   - Handles 2 transformations: section replacement + kit field addition
   - Includes safeguards against duplicate kit fields
   - Logs updated file count

3. **Option C - Python Script (Alternative)**
   - Create: `scripts/update_frontmatter.py`
   - Uses pathlib.Path for cross-platform compatibility
   - Regex-based transformations with multiline flags
   - Processes all markdown files recursively

**Validation Criteria**:
- All 131 files processed without errors
- No transformation rollback needed
- Script execution completes successfully

**Expected Output Indicators**:
- "✓ Updated 131 files" message
- No files skipped or failed

---

### Task 2: Manual Verification Sample
**Status**: Pending
**Effort**: 5 minutes
**Files Sampled**: 3 (spot check)

Verify correctness by inspecting sample files manually:

1. **Examine frontmatter headers** on 3 agent files:
   - `src/content/docs/engineer/agents/planner.md`
   - `src/content/docs/engineer/agents/code-reviewer.md`
   - `src/content/docs/engineer/agents/tester.md`

2. **Verify field presence**:
   - Contains `section: engineer` ✓
   - Contains `kit: engineer` ✓
   - Proper YAML formatting maintained ✓

**Validation Criteria**:
- First 20 lines show correct frontmatter
- Both section and kit fields present
- No malformed YAML syntax

**Expected Frontmatter Format**:
```yaml
---
title: [Title]
description: [Description]
section: engineer
kit: engineer
category: [category]
order: [number]
published: true
---
```

---

### Task 3: Category Validation
**Status**: Pending
**Effort**: 3 minutes
**Files Verified**: 131 (all engineer files)

Validate that all category values align with EngineerNav.astro expectations:

1. **Extract unique categories**:
   - Command: `grep -rh "^category:" src/content/docs/engineer --include="*.md" | sort -u`

2. **Cross-reference against valid set**:
   - `overview`
   - `agents`
   - `commands`
   - `skills`
   - `configuration`

3. **Decision protocol** if unexpected categories found:
   - Option A: Update EngineerNav.astro to include new categories
   - Option B: Rename files to match expected categories
   - Option C: Document as known issue for later resolution

**Validation Criteria**:
- All categories match EngineerNav expectations
- No unexpected category values
- Confirms configuration is consistent across 131 files

**Expected Results**:
- 5 unique categories total (no outliers)
- 100% alignment with navigation schema

---

### Task 4: Comprehensive Verification Checklist
**Status**: Pending
**Effort**: 3 minutes
**Verification Points**: 6

Execute multi-point verification script to confirm all transformations:

1. **Count files with `section: engineer`**:
   - Command: `grep -r "^section: engineer$" src/content/docs/engineer --include="*.md" | wc -l`
   - Expected: 131

2. **Count files with `kit: engineer`**:
   - Command: `grep -r "^kit: engineer$" src/content/docs/engineer --include="*.md" | wc -l`
   - Expected: 131

3. **Verify no remaining `section: docs`**:
   - Command: `grep -r "^section: docs$" src/content/docs/engineer --include="*.md" | wc -l`
   - Expected: 0

4. **List unique categories**:
   - Command: `grep -rh "^category:" src/content/docs/engineer --include="*.md" | sort -u`
   - Expected: overview, agents, commands, skills, configuration

5. **Check for duplicate kit fields**:
   - Command: `grep -r "^kit: engineer$" src/content/docs/engineer --include="*.md" | wc -l`
   - Should equal count from step 2 (no duplicates)

6. **Verify YAML formatting integrity**:
   - Spot check: 5-10 random files for malformed frontmatter
   - No unexpected line breaks in frontmatter blocks

**Validation Criteria**:
- All 4 primary metrics match expected values
- 0 violations detected
- Build validation step passes (next task)

---

### Task 5: Build Validation
**Status**: Pending
**Effort**: 2 minutes
**Files Under Test**: All 476 pages

Execute production build to validate all frontmatter changes:

1. **Run build command**:
   - Command: `bun run build`
   - Location: Project root directory

2. **Inspect build output**:
   - Check for 0 errors
   - Check for 0 warnings related to frontmatter/schema

3. **Verify build artifacts**:
   - Output directory: `dist/`
   - Expected pages: 476+ (same as Phase 02)

**Error Recovery**:
- If build fails, check these in order:
  - Zod schema validation in `src/content/config.ts`
  - Malformed frontmatter in specific files
  - Missing required fields in frontmatter blocks
  - Typos in section/kit values

**Validation Criteria**:
- Build completes successfully
- 0 errors reported
- 0 frontmatter-related warnings
- Same page count as Phase 02 (476+)

---

## Task Summary Table

| Task | Action | Files | Time | Validation |
|------|--------|-------|------|-----------|
| 1 | Execute update script | 131 | 10m | Script completion message |
| 2 | Sample verification | 3 | 5m | Correct frontmatter format |
| 3 | Category validation | 131 | 3m | 5 categories, no outliers |
| 4 | Comprehensive verification | 131 | 3m | 6-point checklist all pass |
| 5 | Build validation | All | 2m | Build succeeds, 0 errors |
| **Total** | **5 tasks** | **131** | **20m** | **5 validation points** |

---

## Frontmatter Transformation Details

### Required Changes

**Field 1: section**
- **Old**: `section: docs`
- **New**: `section: engineer`
- **Affected**: 131 files
- **Action**: String replacement (exact match)

**Field 2: kit (NEW)**
- **Old**: (not present)
- **New**: `kit: engineer`
- **Affected**: 131 files
- **Position**: After `section: engineer` line
- **Action**: Add new field only if not present

### Fields Unchanged
- `title` - no change
- `description` - no change
- `category` - no change (validation only)
- `order` - no change
- `published` - no change

---

## Critical Validation Checkpoints

1. **Pre-execution**: Phase 02 completion verified ✓ (137 files confirmed)
2. **Mid-execution**: Script completes without errors
3. **Post-execution**: All 131 files have both fields
4. **Quality Gate**: Build passes with 0 errors
5. **Final Verification**: 6-point checklist all pass

---

## Troubleshooting Reference

### Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| "Invalid section value" | Typo in script (misspelled `engineer`) | Re-run script with correct value |
| "Duplicate kit field" | File already had `kit: engineer` | Script safeguard handles this (check before add) |
| Build fails: schema error | Malformed frontmatter | Manually fix offending file's YAML syntax |
| Counts don't match 131 | Incomplete script execution | Re-run entire script |
| Missing category values | New categories added in Phase 02 | Update EngineerNav.astro to include them |

---

## Next Phase Handoff

**Phase 04: Vietnamese Migration**

After Phase 03 completion:
- All 131 engineer files have consistent frontmatter
- Build validated at 476+ pages
- Ready to mirror structure to `src/content/docs-vi/engineer/`
- Phase 04 will replicate same frontmatter structure in Vietnamese translations

---

## Unresolved Questions

1. **Script Selection**: Which method preferred (sed/Node.js/Python)? Recommendation: Node.js for cross-platform reliability, sed if Linux/Mac only.
2. **Category Outliers**: If unexpected categories discovered during Task 3 validation, what's escalation path?
3. **Duplicate Kit Fields**: Will Task 1 script handle files that already have `kit: engineer` from previous operations?
4. **Build Artifact Inspection**: Should dist/ directory be committed to git or kept in .gitignore?

---

## Report Metadata

- **Report Type**: Task Extraction
- **Plan File**: `plans/251230-0006-engineer-docs-migration/phase-03-frontmatter-updates.md`
- **Total Tasks Extracted**: 5
- **Total Files in Scope**: 131 engineer files
- **Excluded Files**: 6 CLI files (kit-agnostic, managed separately)
- **Phase Dependency**: Phase 02 ✓ COMPLETED
- **Phase Effort**: 20 minutes (5 tasks)
- **Report Generated**: 2025-12-30 01:17 UTC
