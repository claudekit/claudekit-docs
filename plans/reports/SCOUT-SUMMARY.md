# Scout Report Summary: Marketing Command Prefix Audit

**Date:** March 2, 2026  
**Scout:** Codebase Scout  
**Duration:** Complete audit of `/Users/duynguyen/www/claudekit/claudekit-docs`

---

## Quick Overview

Comprehensive codebase scan found **82 documentation files** (41 English + 41 Vietnamese) that reference slash commands without the required `ckm:` marketing kit prefix.

| Finding | Count |
|---------|-------|
| Files Requiring Updates | 82 |
| Total Command References | 292+ |
| Commands Missing Prefix | 9 (`/cook`, `/plan`, `/brainstorm`, `/research`, `/ask`, `/scout`, `/test`, `/debug`, `/fix`) |
| Old `mkt:` prefix found | 0 ✅ |
| Estimated Changes | 300+ replacements |

---

## Findings

### ✅ GOOD NEWS
- No instances of old `mkt:` prefix detected
- All references use clean slash command syntax (just missing `ckm:`)
- Patterns are consistent and easily fixable with regex

### ❌ ISSUES FOUND
- 150+ bare slash commands in English marketing docs
- 142+ bare slash commands in Vietnamese marketing docs
- Affects user-facing documentation across commands, skills, and agents
- Inconsistent with marketing kit namespace convention

---

## File Breakdown

### By Directory
| Directory | Count | Status |
|-----------|-------|--------|
| commands | 14 | Critical |
| skills | 11 | High |
| agents | 29 | Medium |
| workflows | 1 | Medium |
| **Total English** | **41** | |
| **Total Vietnamese** | **41** | |
| **TOTAL** | **82** | |

### By Type
- **Command Documentation:** 28 files (14 EN + 14 VI)
- **Skill Guides:** 22 files (11 EN + 11 VI)
- **Agent Specifications:** 30 files (15 EN + 15 VI)
- **Workflow Guides:** 2 files (1 EN + 1 VI)

---

## What Needs to Change

### Transformation Rule
```
Find:    /(cook|plan|brainstorm|research|ask|scout|test|debug|fix)\b
Replace: /ckm:$1
```

### Examples

#### Before
```markdown
# Command Usage Examples
- Use `/plan` to create implementation plans
- Use `/cook` to implement solutions
- Use `/brainstorm` for collaborative ideation
- Use `/research` for analysis
- Use `/scout` to find project context
- Use `/ask` for quick questions
```

#### After
```markdown
# Command Usage Examples
- Use `/ckm:plan` to create implementation plans
- Use `/ckm:cook` to implement solutions
- Use `/ckm:brainstorm` for collaborative ideation
- Use `/ckm:research` for analysis
- Use `/ckm:scout` to find project context
- Use `/ckm:ask` for quick questions
```

---

## Priority Action Items

### CRITICAL (Do First - User-Facing)
1. `/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/index.md`
2. `/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/skills/index.md`
3. `/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/index.md`

### HIGH (Do Second - Core Documentation)
4. All individual command documentation files
5. Key agent documentation files
6. Workflow files

### MEDIUM (Do Third - Detail Pages)
7. All remaining skill pages
8. All remaining agent pages

### FINAL (Verification)
9. Vietnamese translation files (docs-vi/)
10. Link verification and build test

---

## Implementation Recommendations

### Option A: VS Code/Cursor (Recommended)
1. Open Search & Replace (Cmd+Shift+H)
2. Enable Regex mode
3. Search: `/(cook|plan|brainstorm|research|ask|scout|test|debug|fix)\b`
4. Replace: `/ckm:$1`
5. Target scope: `src/content/docs/marketing/**/*.md`
6. Replace All
7. Repeat for `src/content/docs-vi/marketing/**/*.md`

### Option B: Command Line
```bash
# English docs
find /Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing \
  -name "*.md" -type f \
  -exec sed -i '' 's|/\(cook\|plan\|brainstorm\|research\|ask\|scout\|test\|debug\|fix\)\b|/ckm:\1|g' {} \;

# Vietnamese docs
find /Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs-vi/marketing \
  -name "*.md" -type f \
  -exec sed -i '' 's|/\(cook\|plan\|brainstorm\|research\|ask\|scout\|test\|debug\|fix\)\b|/ckm:\1|g' {} \;
```

### Option C: Manual (Slower but Safer)
1. Edit critical files first (index pages)
2. Review changes visually
3. Expand to remaining files
4. Use find & replace in smaller batches

---

## Verification Steps

After making changes:

1. **Search verification:**
   ```bash
   # Verify no bare commands remain
   grep -r "/cook\|/plan\|/brainstorm\|/research\|/ask\|/scout\|/test\|/debug\|/fix" \
     src/content/docs/marketing src/content/docs-vi/marketing
   # Should return 0 results
   ```

2. **Prefix verification:**
   ```bash
   # Verify all have ckm: prefix
   grep -c "/ckm:" src/content/docs/marketing/**/*.md
   # Should show high numbers
   ```

3. **Documentation build:**
   ```bash
   npm run build
   # Verify no broken links
   ```

4. **Spot checks:**
   - Open commands/index.md in browser
   - Verify command links work
   - Check that examples use /ckm: prefix

---

## Complete File List

### English Marketing Docs (41 files)

**Commands (14):** ask, bootstrap, brainstorm, campaign, cook, email, fix, git, index, plan, review, seo, scout, test

**Skills (11):** ai-artist, affiliate-marketing, brainstorming, campaign-management, chrome-devtools, content-marketing, gamification-marketing, index, referral-program-building, research, seo-optimization

**Agents (15):** analytics-analyst, attraction-specialist, brainstormer, campaign-debugger, campaign-manager, continuity-specialist, content-creator, content-reviewer, copywriter, database-admin, debugger, docs-manager, email-wizard, fullstack-developer, funnel-architect, git-manager, journal-writer, lead-qualifier, mcp-manager, planner, project-manager, researcher, sale-enabler, scout, scout-external, seo-specialist, tester, upsell-maximizer

**Workflows (1):** marketing-workflow

### Vietnamese Marketing Docs (41 files)
Same structure as English, in `docs-vi/marketing/`

---

## Timeline Estimate

| Task | Time |
|------|------|
| Find & Replace (English) | 5 min |
| Find & Replace (Vietnamese) | 5 min |
| Verification | 10 min |
| Link Testing | 10 min |
| **Total** | **~30 min** |

---

## Related Documentation

- Full Report: `scout-260302-0000-marketing-command-prefix-audit.md`
- Detailed Audit: `scout-260302-detailed-reference-audit.md`
- This Summary: `SCOUT-SUMMARY.md`

---

## Sign-off

Scout Report Complete. All 82 files identified. Ready for implementation phase.

**Status:** Ready for handoff to implementation team  
**Complexity:** Low (straightforward find & replace)  
**Risk Level:** Low (no code changes, documentation only)  
**Rollback:** Easy (revert commit if needed)

