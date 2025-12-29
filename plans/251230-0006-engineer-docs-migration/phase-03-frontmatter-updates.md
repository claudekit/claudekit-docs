# Phase 03: Frontmatter Updates

**Duration**: 20 minutes (actual: ~50 minutes including critical issue resolution)
**Status**: ✅ COMPLETED
**Completion Time**: 2025-12-30 01:31 UTC
**Dependencies**: Phase 02 complete

---

## Objectives

1. Update `section: docs` → `section: engineer` in all migrated files
2. Add `kit: engineer` field to frontmatter
3. Verify category values match EngineerNav expectations
4. Ensure build still passes after changes

---

## Frontmatter Transformation

### Before
```yaml
---
title: Planner Agent
description: Research, analyze, and create implementation plans
section: docs
category: agents
order: 3
published: true
---
```

### After
```yaml
---
title: Planner Agent
description: Research, analyze, and create implementation plans
section: engineer
kit: engineer
category: agents
order: 3
published: true
---
```

---

## Automated Update Script

### Method 1: sed (Linux/Mac/Git Bash)

```bash
# Update all files in engineer directory
find src/content/docs/engineer -name "*.md" -type f -exec sed -i 's/^section: docs$/section: engineer/' {} \;

# Add kit: engineer after section line
find src/content/docs/engineer -name "*.md" -type f -exec sed -i '/^section: engineer$/a kit: engineer' {} \;

# Verify changes
echo "Files updated: $(grep -r "section: engineer" src/content/docs/engineer --include="*.md" | wc -l)"
echo "Kit field added: $(grep -r "kit: engineer" src/content/docs/engineer --include="*.md" | wc -l)"
```

### Method 2: Node.js Script (Cross-platform)

Create `scripts/update-frontmatter.mjs`:

```javascript
import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

const files = await glob('src/content/docs/engineer/**/*.md');

console.log(`Processing ${files.length} files...`);

let updated = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf-8');
  let modified = false;

  // Replace section: docs with section: engineer
  if (content.includes('section: docs')) {
    content = content.replace(/^section: docs$/gm, 'section: engineer');
    modified = true;
  }

  // Add kit: engineer if not present and section: engineer exists
  if (content.includes('section: engineer') && !content.includes('kit: engineer')) {
    content = content.replace(
      /^(section: engineer)$/gm,
      '$1\nkit: engineer'
    );
    modified = true;
  }

  if (modified) {
    writeFileSync(file, content, 'utf-8');
    updated++;
  }
}

console.log(`✓ Updated ${updated} files`);
```

**Run script**:
```bash
node scripts/update-frontmatter.mjs
```

### Method 3: Python Script (Alternative)

Create `scripts/update_frontmatter.py`:

```python
import os
import re
from pathlib import Path

def update_frontmatter(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace section: docs
    content = re.sub(r'^section: docs$', 'section: engineer', content, flags=re.MULTILINE)

    # Add kit: engineer after section: engineer if not present
    if 'section: engineer' in content and 'kit: engineer' not in content:
        content = re.sub(
            r'^(section: engineer)$',
            r'\1\nkit: engineer',
            content,
            flags=re.MULTILINE
        )

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# Process all markdown files
files = list(Path('src/content/docs/engineer').rglob('*.md'))
print(f"Processing {len(files)} files...")

for file in files:
    update_frontmatter(file)

print(f"✓ Updated {len(files)} files")
```

**Run script**:
```bash
python scripts/update_frontmatter.py
```

---

## Manual Verification Sample

Check a few files manually to ensure correctness:

```bash
# Check first 3 agent files
head -20 src/content/docs/engineer/agents/planner.md
head -20 src/content/docs/engineer/agents/code-reviewer.md
head -20 src/content/docs/engineer/agents/tester.md

# Verify all have correct frontmatter
grep -A 10 "^---$" src/content/docs/engineer/agents/planner.md | grep -E "(section|kit)"
```

**Expected Output**:
```yaml
section: engineer
kit: engineer
```

---

## Category Validation

Verify category values match EngineerNav expectations:

```bash
# List all unique category values
grep -rh "^category:" src/content/docs/engineer --include="*.md" | sort -u

# Expected categories (from EngineerNav.astro):
# - overview
# - agents
# - commands
# - skills
# - configuration
```

**Valid Categories**:
- `overview`
- `agents`
- `commands`
- `skills`
- `configuration`

**Action**: If unexpected categories found, decide whether to:
- Update EngineerNav to include them
- Change file category to match expected values

---

## Build Validation

```bash
# Test build after frontmatter updates
bun run build

# Expected: 0 errors
# If errors occur, check:
# - Zod schema validation (config.ts)
# - Malformed frontmatter
# - Missing required fields
```

---

## Troubleshooting

### Issue: "Invalid section value"
**Cause**: Typo in sed/script (e.g., `engineer` misspelled)
**Solution**: Re-run script with correct value

### Issue: "Duplicate kit field"
**Cause**: File already had `kit: engineer`
**Solution**: Modify script to check before adding:
```javascript
if (!content.includes('kit: engineer')) {
  // Add kit field
}
```

### Issue: Build fails with schema error
**Cause**: Invalid frontmatter format
**Solution**: Check `src/content/config.ts` for valid enum values:
```typescript
section: z.enum([
  'getting-started',
  'docs',
  'engineer',  // ← Should be here
  'marketing',
  // ...
])
```

---

## Verification Checklist

```bash
# Comprehensive verification
echo "=== Frontmatter Verification ==="

# Count files with section: engineer
echo "Files with section=engineer: $(grep -r "^section: engineer$" src/content/docs/engineer --include="*.md" | wc -l)"

# Count files with kit: engineer
echo "Files with kit=engineer: $(grep -r "^kit: engineer$" src/content/docs/engineer --include="*.md" | wc -l)"

# Check for any remaining section: docs
echo "Files still with section=docs: $(grep -r "^section: docs$" src/content/docs/engineer --include="*.md" | wc -l)"

# List unique categories
echo "Unique categories:"
grep -rh "^category:" src/content/docs/engineer --include="*.md" | sort -u
```

**Expected Results**:
- Files with `section=engineer`: 131 (all except CLI)
- Files with `kit=engineer`: 131
- Files still with `section=docs`: 0
- Unique categories: overview, agents, commands, skills, configuration

---

## Deliverables

- [x] All 138 engineer files updated with `section: engineer`
- [x] All 138 engineer files have `kit: engineer` field
- [x] No files remain with `section: docs` in engineer directory
- [x] Categories validated against EngineerNav
- [x] Build passes with 0 errors

---

## Critical Issues Resolved

### Issue #1: YAML Frontmatter Corruption (138 files)
**Severity**: CRITICAL | **Status**: ✅ FIXED
- Discovered during build validation
- All 138 files had malformed YAML structure
- Resolved using fix-frontmatter-corruption-v2.mjs script
- Result: 100% files now valid, build passes with 0 errors

### Issue #2: Migration Scripts Not Committed
**Severity**: MEDIUM | **Status**: ✅ FIXED
- Scripts staged for git commit
- Included: fix-frontmatter-corruption-v2.mjs, verify-engineer-frontmatter.mjs
- Ensures audit trail and reproducibility for future reference

---

## Outcomes Summary

| Metric | Result |
|--------|--------|
| Files Successfully Updated | 138/138 (100%) |
| Frontmatter Corruption Fixed | 138/138 (100%) |
| Build Status | ✅ PASSED (466 pages, 0 errors) |
| Critical Blockers | 0 |
| Quality Gates Met | ✅ All |
| Downstream Phase Readiness | ✅ Unblocked |

**Overall Result**: Phase completed successfully with critical issues identified and resolved, ensuring clean state for Phase 04.

---

## Next Steps

→ **Proceed to Phase 04: Vietnamese Migration** (UNBLOCKED)

Completion Report: [project-manager-251230-0131-phase03-completion.md](../reports/project-manager-251230-0131-phase03-completion.md)

---

**Phase Status**: ✅ COMPLETED
**Completion Time**: 2025-12-30 01:31 UTC
**Duration**: ~50 minutes (20 min planned + 30 min critical issue resolution)
