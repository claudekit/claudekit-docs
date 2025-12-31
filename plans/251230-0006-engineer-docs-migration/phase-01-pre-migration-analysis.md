# Phase 01: Pre-Migration Analysis

**Duration**: 10 minutes
**Status**: ✅ COMPLETED (2025-12-30)
**Dependencies**: None

---

## Objectives

1. Verify exact file counts and structure
2. Check for duplicate filenames in skills merge
3. Identify files with special migration needs
4. Generate migration manifest

---

## Steps

### 1. Verify File Counts (2 min)

```bash
# English docs
echo "=== English Files ==="
echo "Agents: $(find src/content/docs/docs/agents -name "*.md" | wc -l)"
echo "Commands: $(find src/content/docs/docs/commands -name "*.md" | wc -l)"
echo "Skills: $(find src/content/docs/docs/skills -name "*.md" | wc -l)"
echo "Configuration: $(find src/content/docs/docs/configuration -name "*.md" | wc -l)"
echo "CLI: $(find src/content/docs/docs/cli -name "*.md" | wc -l)"
echo "Total: $(find src/content/docs/docs -name "*.md" | wc -l)"

# Vietnamese docs
echo "=== Vietnamese Files ==="
echo "Total: $(find src/content/docs-vi/docs -name "*.md" 2>/dev/null | wc -l)"

# Existing engineer docs
echo "=== Existing Engineer Files ==="
echo "Skills: $(find src/content/docs/engineer/skills -name "*.md" 2>/dev/null | wc -l)"
```

**Expected Output**:
```
=== English Files ===
Agents: 18
Commands: 66
Skills: 43
Configuration: 4
CLI: 2
Total: 133

=== Vietnamese Files ===
Total: 86

=== Existing Engineer Files ===
Skills: 15
```

### 2. Check for Skills Duplicates (3 min)

```bash
# List legacy skills
echo "=== Legacy Skills ===" > /tmp/migration-analysis.txt
find src/content/docs/docs/skills -name "*.md" -exec basename {} \; | sort >> /tmp/migration-analysis.txt

# List existing engineer skills
echo "" >> /tmp/migration-analysis.txt
echo "=== Existing Engineer Skills ===" >> /tmp/migration-analysis.txt
find src/content/docs/engineer/skills -name "*.md" -exec basename {} \; | sort >> /tmp/migration-analysis.txt

# Check for duplicates
echo "" >> /tmp/migration-analysis.txt
echo "=== Potential Duplicates ===" >> /tmp/migration-analysis.txt
comm -12 <(find src/content/docs/docs/skills -name "*.md" -exec basename {} \; | sort) \
         <(find src/content/docs/engineer/skills -name "*.md" -exec basename {} \; | sort) \
         >> /tmp/migration-analysis.txt || echo "No duplicates found" >> /tmp/migration-analysis.txt

cat /tmp/migration-analysis.txt
```

**Action**: If duplicates found, review manually and decide:
- Keep legacy version (overwrite)
- Keep existing version (skip migration)
- Merge content manually

### 3. Analyze CLI Files (2 min)

```bash
# Check what's in docs/docs/cli/
echo "=== CLI Files in docs/docs/cli/ ==="
find src/content/docs/docs/cli -name "*.md" -exec echo {} \;

# Check what's in docs/cli/
echo "=== CLI Files in docs/cli/ ==="
find src/content/docs/cli -name "*.md" -exec echo {} \;
```

**Decision**: Determine if docs/docs/cli/* should:
- A) Move to `docs/cli/` (merge with existing)
- B) Move to `docs/engineer/cli/` (keep in engineer context)
- C) Review content and decide per-file

**Recommendation**: Move to `/docs/cli/` (shared CLI documentation)

### 4. Check for Special Files (2 min)

```bash
# Find index files
find src/content/docs/docs -name "index.md" -exec echo {} \;

# Find files with non-standard frontmatter
grep -l "section: docs" src/content/docs/docs/**/*.md | head -5

# Check for files with custom slugs
grep -l "slug:" src/content/docs/docs/**/*.md
```

**Note**: Index files may need special handling for navigation

### 5. Generate Migration Manifest (1 min)

```bash
# Create migration checklist
cat > /tmp/migration-manifest.txt << 'EOF'
# Migration Manifest - 251230-0006-engineer-docs-migration

## English Files (133 total)
- Agents: 18 files → docs/engineer/agents/
- Commands: 66 files → docs/engineer/commands/
- Skills: 43 files → docs/engineer/skills/ (merge with 15 existing)
- Configuration: 4 files → docs/engineer/configuration/
- CLI: 2 files → docs/cli/ (merge with 9 existing)

## Vietnamese Files (86 total)
- To migrate: 86 files → docs-vi/engineer/
- Missing: 47 files (document separately)

## Actions Required
- [ ] File moves (git mv)
- [ ] Skills duplicate resolution
- [ ] Frontmatter updates
- [ ] Vietnamese migration
- [ ] Redirect configuration
- [ ] Link updates
- [ ] Build validation
EOF

cat /tmp/migration-manifest.txt
```

---

## Deliverables

1. ✅ Verified file counts match expectations
2. ✅ Skills duplicate list (if any)
3. ✅ CLI files decision documented
4. ✅ Migration manifest created
5. ✅ Special cases identified

---

## Validation Results

- [x] Total English files = 133 (131 to migrate + 2 CLI excluded)
- [x] Total Vietnamese files = 86
- [x] Existing engineer/skills files = 15 (now 14 after duplicate resolution)
- [x] No blocking duplicate conflicts found (8 duplicates identified, strategy confirmed)
- [x] Migration manifest complete and reviewed
- [x] Skills merge strategy: Option A (merge legacy into existing, 49 total)

---

## Phase 01 Outcomes

**File Counts Verified**:
- English files: 133 total (agents: 18, commands: 66, skills: 43, configuration: 4, CLI: 2)
- Vietnamese files: 86 total
- Existing engineer skills: 15 files
- CLI files excluded from this migration: 2

**Skills Merge Analysis**:
- Legacy skills: 43 files
- Existing engineer skills: 15 files
- Duplicates found: 8 files
- Resolution strategy: Option A (keep legacy, merge into existing)
- Final count: 49 total skills

**Scope Adjustments**:
- Files to migrate: 131 English + 86 Vietnamese = 217 files
- CLI files: 2 (excluded - separate handling, already migrated)
- Frontmatter updates: 217 files (131 EN + 86 VI)
- URL redirects: 131 old paths

**Blockers**: None
**Risk Level**: Low
**Status**: Ready for Phase 02

---

## Next Steps

✅ **All checks passed** → **Proceed to Phase 02: File Migration**

---

**Phase Status**: ✅ COMPLETED
**Actual Duration**: 10 minutes
**Completion Date**: 2025-12-30
