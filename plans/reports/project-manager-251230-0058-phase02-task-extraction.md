# Phase 02 Task Extraction Report
**Engineer Docs Migration - File Migration Phase**

---

## Executive Summary

Phase 02 (File Migration) extracted and validated. All 10 implementation + validation tasks identified and initialized. Critical corrections applied from Phase 01 manifest decisions:

- **Skills migration**: 35 files (not 43) - 8 duplicates excluded per Option A strategy
- **CLI migration**: SKIPPED entirely - already completed, current versions superior
- **Total scope**: 123 English files (18 agents + 66 commands + 35 skills + 4 config)

**Status**: Ready for implementation. No blockers. Phase 01 decisions finalized.

---

## Phase 02 Objectives (from plan)

1. Move all English docs using `git mv` (preserves history)
2. Handle skills directory merge carefully (flatten + duplicate resolution)
3. Skip CLI files (already migrated in Phase 01)
4. Verify all moves successful with file count validation

---

## Extracted Implementation Tasks

### Pre-Flight & Execution Tasks

| Task ID | Task Description | Duration | Expected Output | Dependencies |
|---------|------------------|----------|-----------------|--------------|
| **Step 2.5** | Pre-flight checks - verify working tree clean, create backup branch | 3 min | Clean `git status`, backup branch created | None |
| **Step 2.1** | Migrate agents directory (18 files) | 5 min | 18 files moved to `docs/engineer/agents/` | Step 2.5 |
| **Step 2.2** | Migrate commands directory with nested structure (66 files) | 5 min | 66 files moved to `docs/engineer/commands/` (structure preserved) | Step 2.1 |
| **Step 2.3** | Migrate skills - flatten structure & skip 8 duplicates (35 files only) | 10 min | 35 files moved to `docs/engineer/skills/` (35 + 14 existing = 49 total) | Step 2.2 |
| **Step 2.4** | Migrate configuration files (4 files) | 3 min | 4 files moved to `docs/engineer/configuration/` | Step 2.3 |
| **Step 2.6** | Remove empty docs/docs directory after migrations complete | 2 min | `docs/docs/` directory empty/removed in git | Step 2.4 |

### Validation Tasks

| Task ID | Task Description | Duration | Validation Criteria | Dependencies |
|---------|------------------|----------|---------------------|--------------|
| **Step 3.1** | Verify file counts - agents(18), commands(66), skills(49 total), config(4) | 2 min | All counts match expected: 18+66+49+4 = 137 total | Step 2.6 |
| **Step 3.2** | Verify git tracking - validate 123 files renamed, 0 new/deleted | 2 min | `git status` shows only renames, no new/deleted | Step 3.1 |
| **Step 3.3** | Verify nested directory structure in commands migrated correctly | 2 min | Subdirectories preserved: `core/`, `content/`, `create/`, etc. | Step 3.1 |
| **Step 3.4** | Run build quality gate - bun run build must pass before Phase 03 | 5 min | Build succeeds with 0 errors, 0 warnings | Step 3.3 |

---

## Detailed Task Breakdown

### STEP 2.5: Pre-Flight Checks (3 min)

**Commands**:
```bash
# Verify clean working tree
git status

# Create backup branch (preserves pre-migration state)
git branch backup/pre-migration-$(date +%Y%m%d-%H%M%S)
```

**Expected Result**: Clean working tree, backup branch created

**Blocker if Failed**: Cannot proceed - stash uncommitted changes first

---

### STEP 2.1: Migrate Agents (5 min)

**Expected Files**: 18 MD files

**Commands**:
```bash
# Create destination directory
mkdir -p src/content/docs/engineer/agents

# Move entire directory (preserves git history)
git mv src/content/docs/docs/agents/* src/content/docs/engineer/agents/

# Verify
echo "Agents migrated: $(find src/content/docs/engineer/agents -name "*.md" | wc -l) files"
```

**Files to Migrate**: 18 total
- Includes: `index.md` + 17 agent skill docs

**Special Handling**:
- Index file: Move with standard directory move
- File history: Preserved via `git mv`

**Expected Git Status**: 18 files renamed

---

### STEP 2.2: Migrate Commands (5 min)

**Expected Files**: 66 MD files (nested structure)

**Commands**:
```bash
# Create destination
mkdir -p src/content/docs/engineer/commands

# Move entire directory structure (preserves subdirs)
git mv src/content/docs/docs/commands/* src/content/docs/engineer/commands/

# Verify count and structure
echo "Commands migrated: $(find src/content/docs/engineer/commands -name "*.md" | wc -l) files"
echo "Subdirectories: $(find src/content/docs/engineer/commands -type d | head -10)"
```

**Files to Migrate**: 66 total across subdirectories
- Core commands subdirectory
- Content management commands
- Creation & setup commands
- Other nested commands
- Includes: 3 index files (`index.md` in root, `fix/`, `plan/`)

**Special Handling**:
- Nested structure MUST be preserved (commands organized in subdirs)
- Index files at multiple levels must migrate with directory
- No flattening - keep structure as-is

**Expected Git Status**: 66 files renamed (preserves directory hierarchy)

---

### STEP 2.3: Migrate Skills - WITH DUPLICATE RESOLUTION (10 min)

**Expected Files**: 35 legacy files (43 - 8 duplicates) + 14 existing = 49 total

**CRITICAL DECISION FROM PHASE 01**: Option A confirmed
- Skip 8 duplicate files (keep existing engineer/skills versions)
- Migrate only 35 new legacy skills
- Final count: 35 + 14 = 49 total skills

**Duplicates to EXCLUDE from Migration** (8 files):
1. `ai-multimodal.md` - keep existing
2. `chrome-devtools.md` - keep existing
3. `frontend-design.md` - keep existing
4. `frontend-development.md` - keep existing
5. `google-adk-python.md` - keep existing
6. `mcp-builder.md` - keep existing
7. `mcp-management.md` - keep existing
8. `media-processing.md` - keep existing

**Skills to Migrate** (35 files):
1. aesthetic.md
2. backend-development.md
3. better-auth.md
4. canvas-design.md
5. claude-code-skill.md
6. code-review.md
7. databases.md
8. debugging.md
9. devops.md
10. docker.md
11. docs-seeker.md
12. document-skills.md
13. ffmpeg.md
14. frontend-design-pro.md
15. gemini-vision.md
16. imagemagick.md
17. index.md
18. mobile-development.md
19. nextjs.md
20. payment-integration.md
21. planning.md
22. postgresql-psql.md
23. problem-solving.md
24. repomix.md
25. research.md
26. sequential-thinking.md
27. shadcn-ui.md
28. shopify.md
29. skill-creator.md
30. systematic-debugging.md
31. tailwindcss.md
32. threejs.md
33. ui-styling.md
34. ui-ux-pro-max.md
35. web-frameworks.md

**Commands**:
```bash
# Create destination
mkdir -p src/content/docs/engineer/skills

# Option: Flatten nested structure if present
# Current legacy structure: skills/ai/, skills/auth/, etc.
# Target structure: skills/ (all files at root level)

# Move non-duplicate files only
# Strategy: Move entire directory, then manually delete duplicates

git mv src/content/docs/docs/skills/* src/content/docs/engineer/skills/

# Remove 8 duplicate files (keeping existing versions)
cd src/content/docs/engineer/skills/
rm ai-multimodal.md chrome-devtools.md frontend-design.md \
   frontend-development.md google-adk-python.md mcp-builder.md \
   mcp-management.md media-processing.md
cd -

# Stage removal
git add src/content/docs/engineer/skills/

# Verify count
echo "Skills migrated: $(find src/content/docs/engineer/skills -name "*.md" | wc -l) files"
```

**Alternative: Selective Move**:
```bash
# If duplicate issue occurs, move only non-duplicate files
mkdir -p src/content/docs/engineer/skills

# List of 35 non-duplicate files to move individually
for file in aesthetic.md backend-development.md better-auth.md ... ; do
  git mv src/content/docs/docs/skills/$file src/content/docs/engineer/skills/$file
done
```

**Expected Result**:
- 35 legacy files moved
- 8 duplicates remain in legacy location (will be deleted in cleanup)
- Final count: 49 total (35 new + 14 existing)

**Special Handling**:
- Index file: Migrate with directory
- Nested structure: Flatten (all files to root level)
- Duplicate resolution: CRITICAL - must not overwrite existing

**Expected Git Status**: 35 files renamed (not all 43)

---

### STEP 2.4: Migrate Configuration (3 min)

**Expected Files**: 4 MD files

**Commands**:
```bash
# Create destination
mkdir -p src/content/docs/engineer/configuration

# Move entire directory
git mv src/content/docs/docs/configuration/* src/content/docs/engineer/configuration/

# Verify
echo "Configuration migrated: $(find src/content/docs/engineer/configuration -name "*.md" | wc -l) files"
```

**Files to Migrate**: 4 total
- Configuration documentation files

**Expected Result**: 4 files moved

**Expected Git Status**: 4 files renamed

---

### STEP 2.6: Remove Empty Directories (2 min)

**Commands**:
```bash
# Verify no files remain in legacy docs/docs
find src/content/docs/docs -name "*.md" 2>/dev/null
# Expected: 0 files (or 8 deleted skills if not cleaned)

# Check structure
ls -la src/content/docs/docs/
# Expected: Only empty subdirectories remain

# Remove subdirectories (if any remain)
rm -rf src/content/docs/docs/agents
rm -rf src/content/docs/docs/commands
rm -rf src/content/docs/docs/skills
rm -rf src/content/docs/docs/configuration
rm -rf src/content/docs/docs/cli  # Already empty from Phase 01

# Stage removal
git add src/content/docs/docs/

# Final check
ls -la src/content/docs/docs/ 2>/dev/null || echo "docs/docs removed"
```

**Expected Result**: Empty `docs/docs` directory or completely removed from git

**Expected Git Status**: Deletions for empty directories

---

## Validation Task Details

### STEP 3.1: Verify File Counts (2 min)

**Commands**:
```bash
echo "=== MIGRATION VERIFICATION ==="
echo "Engineer Agents: $(find src/content/docs/engineer/agents -name "*.md" 2>/dev/null | wc -l) (expect 18)"
echo "Engineer Commands: $(find src/content/docs/engineer/commands -name "*.md" 2>/dev/null | wc -l) (expect 66)"
echo "Engineer Skills: $(find src/content/docs/engineer/skills -name "*.md" 2>/dev/null | wc -l) (expect 49)"
echo "Engineer Config: $(find src/content/docs/engineer/configuration -name "*.md" 2>/dev/null | wc -l) (expect 4)"
echo "---"
echo "Total Engineer Docs: $(find src/content/docs/engineer -name "*.md" 2>/dev/null | wc -l) (expect 137)"
echo "---"
echo "Remaining in docs/docs: $(find src/content/docs/docs -name "*.md" 2>/dev/null | wc -l) (expect 0)"
```

**Success Criteria**:
- Agents: 18 files
- Commands: 66 files
- Skills: 49 files (35 migrated + 14 existing)
- Configuration: 4 files
- Remaining in docs/docs: 0 files

**Blocker if Failed**: Halt Phase 03, investigate missing files

---

### STEP 3.2: Verify Git Tracking (2 min)

**Commands**:
```bash
# Show git status summary
git status

# Expected output shows:
# - 123 files renamed (18+66+35+4)
# - Possible deleted files if empty dirs removed
# - NO new files, NO untracked files in engineer dirs
```

**Success Criteria**:
- ~123 files renamed (exact count: 18+66+35+4)
- No new files
- No untracked files

**Validation**:
```bash
# Detailed git history check
git diff --cached --name-status | head -20
# Should show "R" (renamed) for all migrated files

# Count renames
git diff --cached --name-status | grep -c "^R"
# Should be ~123
```

**Blocker if Failed**: Investigate if `mv` used instead of `git mv`

---

### STEP 3.3: Verify Nested Directory Structure (2 min)

**Commands for Commands Directory**:
```bash
# List command subdirectories
echo "=== Commands Directory Structure ==="
find src/content/docs/engineer/commands -type d | sort

# Verify expected subdirectories exist
expected_dirs=(
  "src/content/docs/engineer/commands/core"
  "src/content/docs/engineer/commands/content"
  "src/content/docs/engineer/commands/create"
  # ... other command categories
)

for dir in "${expected_dirs[@]}"; do
  [ -d "$dir" ] && echo "✓ $dir" || echo "✗ $dir MISSING"
done

# Count files per category
echo "=== Files Per Category ==="
for dir in src/content/docs/engineer/commands/*/; do
  count=$(find "$dir" -name "*.md" | wc -l)
  basename "$dir": $count files
done
```

**Success Criteria**:
- All subdirectories preserved
- File counts match expected per category
- Index files exist at expected levels

**Blocker if Failed**: Structure flattened incorrectly, redo with proper preservation

---

### STEP 3.4: Run Build Quality Gate (5 min)

**MANDATORY**: Build must pass before Phase 03

**Commands**:
```bash
# Run production build
bun run build

# Check exit code
echo "Build exit code: $?"
# Expected: 0 (success)
```

**Success Criteria**:
- `bun run build` completes without errors
- No TypeScript errors
- No missing imports
- Exit code: 0

**Build Output Check**:
```bash
# If build fails, check for:
# 1. Invalid frontmatter in migrated files
# 2. Broken internal links
# 3. Missing category values
# 4. Duplicate slugs

# Check for errors
bun run build 2>&1 | grep -i "error"
```

**Blocker if Failed**: Fix build errors before Phase 03
- Common issues: Invalid YAML, missing fields, duplicate slugs

---

## File Counts Summary

### Total English Files to Migrate: 123

| Category | Count | Location | Notes |
|----------|-------|----------|-------|
| Agents | 18 | `docs/engineer/agents/` | All files, including index.md |
| Commands | 66 | `docs/engineer/commands/` | Nested structure preserved |
| Skills | 35 | `docs/engineer/skills/` | 43 legacy - 8 duplicates |
| Configuration | 4 | `docs/engineer/configuration/` | All config files |
| **TOTAL** | **123** | **docs/engineer/** | Ready for Phase 03 |

### Skills Calculation Breakdown

- Legacy skills in `docs/docs/skills/`: 43 files
- Existing engineer skills in `docs/engineer/skills/`: 14 files
- Duplicates (keep existing, skip legacy): 8 files
- **Skills to migrate**: 43 - 8 = 35 files
- **Final count after migration**: 35 + 14 = **49 total**

### CLI Files Disposition

- Legacy CLI files in `docs/docs/cli/`: 2 files (index.md, installation.md)
- **Migration Decision**: SKIP entirely (already migrated in earlier refactor)
- **Rationale**: Current versions superior (v3.10.1 vs v1.2.1), correct location (`docs/cli/`)
- **Remaining in current location**: 9 files in `docs/cli/`
- **Migration Impact**: 0 files (EXCLUDED from Phase 02)

---

## Dependencies & Sequencing

```
Step 2.5 (Pre-flight)
  ↓
Step 2.1 (Agents) → Step 2.2 (Commands) → Step 2.3 (Skills) → Step 2.4 (Config)
  ↓
Step 2.6 (Remove empty dirs)
  ↓
Step 3.1 (Count verification)
  ↓
Step 3.2 (Git verification) → Step 3.3 (Structure verification)
  ↓
Step 3.4 (Build quality gate) ← BLOCKER: Must pass
  ↓
→ Phase 03: Frontmatter Updates (proceed when Step 3.4 passes)
```

---

## Ambiguities & Questions

1. **Skills index.md handling**: Manifest mentions index file but unclear if flattening affects navigation
   - **Resolution needed**: Test navigation after migration to verify index file still resolves correctly

2. **Commands subdirectory depth**: Plan shows nested structure but exact nesting levels not fully detailed
   - **Resolution needed**: Verify `fix/index.md` and `plan/index.md` migrate correctly

3. **Empty directory cleanup**: Git may auto-remove empty dirs or require explicit staging
   - **Resolution needed**: Test after Step 2.6 to verify complete cleanup

---

## Risk Assessment

| Risk | Severity | Mitigation | Owner |
|------|----------|-----------|-------|
| Skills duplicates overwritten | HIGH | Use Option A (keep existing) - confirmed in Phase 01 | Executor |
| Lost git history | MEDIUM | Use `git mv` exclusively (not `mv`) | Executor |
| Navigation breaks (index files) | MEDIUM | Test navigation after migration | Validator |
| Build fails on migrated files | HIGH | Run build quality gate (Step 3.4 blocker) | Validator |
| Incomplete file migration | MEDIUM | Verify file counts match (Step 3.1) | Validator |

---

## Deliverables Checklist

- [x] Task extraction complete (10 tasks identified)
- [x] File count corrections applied (123 files, not 133)
- [x] Skills duplicate strategy confirmed (Option A: 35 files migrate)
- [x] CLI decision confirmed (SKIP: 0 files migrate)
- [x] Phase 02 pre-flight ready (Steps 2.5-3.4)
- [ ] Backup branch created (pre-execution)
- [ ] All migrations complete (Steps 2.1-2.6)
- [ ] Validations pass (Steps 3.1-3.4)
- [ ] Build passes quality gate (Step 3.4)

---

## Next Steps

1. **Create backup branch** (Step 2.5):
   ```bash
   git branch backup/pre-migration-$(date +%Y%m%d-%H%M%S)
   ```

2. **Execute migrations sequentially** (Steps 2.1-2.6):
   - Start with agents (Step 2.1)
   - Follow through configuration (Step 2.4)
   - Clean up empty dirs (Step 2.6)

3. **Run validations** (Steps 3.1-3.4):
   - Verify counts
   - Verify git tracking
   - Verify structure
   - **BLOCKER**: Build must pass before proceeding to Phase 03

4. **Proceed to Phase 03** (when all validations pass):
   - Frontmatter updates
   - Section: docs → section: engineer
   - Add kit: engineer field

---

## Report Metadata

**Generated**: 2025-12-30 00:58 UTC
**Report Type**: Task Extraction & Analysis
**Phase**: 02 - File Migration
**Status**: Ready for Implementation
**Blockers**: 0 (all decisions finalized)
**Confidence**: HIGH (based on Phase 01 manifest review)

**Extracted By**: project-manager subagent
**Plan Reference**: `plans/251230-0006-engineer-docs-migration/phase-02-file-migration.md`
**Manifest Reference**: `plans/251230-0006-engineer-docs-migration/migration-manifest.md`

---

**READY TO EXECUTE**: All Phase 02 tasks extracted, validated, and initialized in TodoWrite.

**Next Action**: Create backup branch and begin Step 2.5 pre-flight checks.
