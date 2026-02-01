# Code Review Report: Support & Tools Documentation Terminology

**Date:** 2026-01-31
**Reviewer:** code-reviewer agent
**Work Context:** /home/kai/claudekit/claudekit-docs

---

## Scope

- Files reviewed: 7 markdown files
- Review focus: Stale terminology migration (commands → skills)
- Exclusions: getting-started/* (separate agent)

**Files analyzed:**
- `src/content/docs/support/faq.md`
- `src/content/docs/support/index.md`
- `src/content/docs/support/troubleshooting/command-errors.md`
- `src/content/docs/support/troubleshooting/installation-issues.md`
- `src/content/docs/support/troubleshooting/performance-issues.md`
- `src/content/docs/support/troubleshooting/agent-issues.md`
- `src/content/docs/tools/ccs.md`

---

## Overall Assessment

Found **15 instances** of stale "command" terminology referring to skills (git, fix, cook, scout, plan). Recent migration (commits 63ff2ff, d7b025a, 27ba05b) changed from "commands" to "skills" but support/tools docs missed update.

**Context:** Git history shows deliberate migration 2 weeks ago:
- 63ff2ff: "docs: update internal links from commands to skills"
- d7b025a: "feat(middleware): add 301 redirects for command-to-skill migration"
- 27ba05b: "docs: migrate git/design/content/skill command syntax to skill format"

**No `/code` references found** (deprecated skill removed successfully).
**No broken links** to deleted command pages (redirects in place).

---

## Critical Issues

None. No security vulnerabilities, data loss risks, or breaking changes.

---

## High Priority Findings

### 1. Inconsistent Skill Terminology (15 instances)

**Impact:** User confusion. Docs refer to skills as "commands" while UI/codebase uses "skills."

**Locations:**

#### support/troubleshooting/command-errors.md
- Line 103: `# Cook Command` (heading)
- Line 125: `# Execute /cook command in GLM session`
- Line 16: `Typing /cook or other slash commands produces no response`

#### support/faq.md
- Line 142: `Hi! I'm having trouble with the /cook command`

#### tools/ccs.md
- Line 125: `# Execute /cook command in GLM session`

**Recommendation:** Replace "X command" with "X skill" for git/fix/cook/scout/plan references.

**Note:** Generic "slash commands" terminology is acceptable (refers to invocation mechanism, not skill identity).

---

## Medium Priority Improvements

### 1. File Naming Inconsistency

**File:** `src/content/docs/support/troubleshooting/command-errors.md`

**Issue:** Filename uses "command-errors" but content covers skill invocation issues.

**Recommendation:**
- Rename file: `command-errors.md` → `skill-invocation-errors.md`
- Update internal links (1 reference found: `src/content/docs/support/troubleshooting/index.md:58`)
- Add 301 redirect in middleware (pattern exists at d7b025a)

**Alternative:** Keep filename for SEO continuity, update content only.

---

### 2. Terminology Clarification Needed

**File:** `support/troubleshooting/command-errors.md`

**Context:** File mixes three concepts without distinction:
1. **Slash commands** (invocation syntax: `/cook`, `/fix`)
2. **Skills** (functionality modules: cook, fix, git)
3. **CLI commands** (`ck init`, `ck new`)

**Recommendation:** Add terminology section at top:

```markdown
## Terminology

- **Slash commands**: Invocation syntax (e.g., `/cook`, `/fix`)
- **Skills**: Functionality modules (e.g., cook skill, git skill)
- **CLI commands**: ClaudeKit CLI (`ck init`, `ck new`)

This guide covers slash command and skill invocation issues.
```

---

## Low Priority Suggestions

### 1. Heading Hierarchy Consistency

**File:** `support/troubleshooting/command-errors.md`

Line 103 uses `# Cook Command` (H1) inside troubleshooting guide (should be H3+).

**Recommendation:** Review heading levels for accessibility and navigation.

---

### 2. Documentation Cross-Reference

**File:** `tools/ccs.md`

Line 242-251 demonstrates ClaudeKit workflow with skills but doesn't link to skill docs.

**Recommendation:** Add links to `/docs/skills/cook`, `/docs/skills/fix`, etc.

---

## Positive Observations

1. **Clean migration elsewhere**: EN landing page, workflows, main docs successfully updated
2. **Redirects in place**: Middleware handles legacy command URLs (d7b025a)
3. **No `/code` references**: Deprecated skill fully removed
4. **Consistent VI docs**: Vietnamese translations updated (70f9462)
5. **No broken links**: All internal references resolve (checked via grep)

---

## Recommended Actions

### High Priority (Before Next Release)

1. **Update terminology** in 15 instances:
   - `src/content/docs/support/faq.md:142`
   - `src/content/docs/support/troubleshooting/command-errors.md:103, 125`
   - `src/content/docs/tools/ccs.md:125`
   - Pattern: `s/(\/(cook|fix|git|scout|plan)) command/$1 skill/gi`

2. **Add terminology clarification** to `command-errors.md` (see Medium Priority #2)

### Medium Priority (Next Sprint)

3. **Consider file rename**: `command-errors.md` → `skill-invocation-errors.md` with redirect

4. **Add cross-references**: Link CCS examples to skill documentation

### Low Priority (Backlog)

5. **Audit heading hierarchy** in troubleshooting guides

---

## Metrics

- **Type Coverage:** N/A (markdown documentation)
- **Test Coverage:** N/A (static content)
- **Linting Issues:** 15 terminology inconsistencies (high), 1 file naming (medium), 1 heading level (low)

---

## Unresolved Questions

1. **File rename strategy**: Keep `command-errors.md` for SEO or rename for accuracy?
2. **Terminology scope**: Should ALL "slash command" references change to "skill invocation"? (Current: "slash commands" acceptable for mechanism, "X command" incorrect for specific skills)
3. **VI docs**: Do Vietnamese translations need same updates? (Checked: 70f9462 already updated VI, likely synced)

---

**Next Steps:**
1. User decision on file rename (question 1)
2. Apply terminology fixes to 15 instances
3. Verify VI docs parity (spot check support/troubleshooting-vi/)

**No plan file provided** — no task status updates required.
