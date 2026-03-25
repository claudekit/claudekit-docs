## Cross-Reference and Link Integrity Review

**Scope:** 40 changed files from HEAD~1 (engineer skills, agents, workflows, CLI, changelog)
**Build:** PASSES (1 warning only)

---

### CRITICAL: Broken Links (will 404)

**None found in English docs.** All internal links in changed EN files resolve to existing pages.

---

### MEDIUM: Vietnamese Docs — Stale `/debug` and `/plan` References

The EN pages were renamed `debug.md` -> `ck-debug.md` and `plan.md` -> `ck-plan.md`, but the **Vietnamese counterparts were NOT renamed**. VI files still exist at old paths (`debug.md`, `plan.md`), so links currently resolve. However, this creates naming inconsistency.

**Engineer VI files with stale `/vi/docs/engineer/skills/debug` links (7 files, 11 occurrences):**

| File | Line |
|------|------|
| `docs-vi/engineer/skills/repomix.md` | 134 |
| `docs-vi/engineer/skills/fix.md` | 128 |
| `docs-vi/engineer/skills/sequential-thinking.md` | 116 |
| `docs-vi/engineer/skills/index.md` | 154, 170 |
| `docs-vi/engineer/skills/test.md` | 105 |
| `docs-vi/engineer/skills/code-review.md` | 170 |

**Engineer VI files with stale `/vi/docs/engineer/skills/plan` links (9 files, 9 occurrences):**

| File | Line |
|------|------|
| `docs-vi/engineer/skills/skill-creator.md` | 97 |
| `docs-vi/engineer/skills/docs-seeker.md` | 106 |
| `docs-vi/engineer/skills/team.md` | 111 |
| `docs-vi/engineer/skills/cook.md` | 84 |
| `docs-vi/engineer/skills/research.md` | 152 |
| `docs-vi/engineer/skills/code-review.md` | 172 |
| `docs-vi/engineer/skills/plans-kanban.md` | 311 |
| `docs-vi/engineer/skills/project-management.md` | 112 |
| `docs-vi/engineer/skills/bootstrap.md` | 78 |

**Note:** Marketing VI refs to `/vi/docs/marketing/skills/plan` and `/vi/docs/marketing/skills/debugging` are VALID -- those are separate marketing pages that exist.

**Recommended fix:** Rename VI files to `ck-debug.md` / `ck-plan.md` and update all 20 link references. Or if intentionally keeping VI names, document the divergence.

---

### MEDIUM: Broken Frontmatter in `optimizing-performance.md`

**File:** `src/content/docs/workflows/optimizing-performance.md`

Frontmatter is malformed -- description field is not closed, causing duplicate `section`/`category`/`order`/`published` fields:

```yaml
---
title: Optimizing Performance
description: "Documentation for Optimizing Performance
description:
section: workflows
category: engineer
order: 9
published: true"        # <-- quote closes here, swallowing fields
section: workflows      # <-- duplicate
category: engineer      # <-- duplicate
order: 9                # <-- duplicate
published: true         # <-- duplicate
---
```

**Fix:** Remove the duplicate fields and fix the description quoting.

---

### LOW: Build Warning — Duplicate ID

```
[WARN] [glob-loader] Duplicate id "engineer/skills" found in
src/content/docs/engineer/skills/index.md
```

Pre-existing issue (not introduced by this diff). Likely caused by an `index.md` in the skills directory conflicting with a parent route. Non-blocking.

---

### LOW: Category Inconsistency in Changed Files

Most skills use `category: skills`, but some use subcategories:
- `code-review.md`: `category: skills/tools`
- `docs-seeker.md`: `category: skills/tools`
- `repomix.md`: `category: skills/tools`
- `research.md`: `category: skills/tools`
- `sequential-thinking.md`: `category: skills/tools`
- `skill-creator.md`: `category: skills/tools`

This appears intentional (subcategory grouping per CLAUDE.md docs) but worth verifying the `skills/tools` subcategory renders correctly in nav.

---

### Positive Observations

1. **EN debug/plan rename is complete** -- zero stale references to old paths in English docs
2. **All 40 changed files** have correct `section: engineer` and `kit: engineer` frontmatter
3. **Build passes** cleanly with no errors
4. **CLI cross-references** are all valid (13 CLI pages cross-link correctly)
5. **Workflow cross-references** are all valid

---

### Verdict: CONDITIONAL PASS

- **English docs:** PASS -- all links valid, rename complete
- **Vietnamese docs:** NEEDS ATTENTION -- 20 stale engineer skill references (not blocking since old VI files still exist, but inconsistent)
- **Frontmatter:** NEEDS FIX -- `optimizing-performance.md` has malformed YAML

**Blocking issues:** 0
**Should-fix before merge:** 1 (frontmatter)
**Should-fix soon:** 1 (VI naming consistency)
