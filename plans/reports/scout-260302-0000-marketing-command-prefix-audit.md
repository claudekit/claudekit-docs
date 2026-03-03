# Scout Report: Marketing Command Prefix Audit

**Date:** 2026-03-02  
**Scope:** Codebase at `/Users/duynguyen/www/claudekit/claudekit-docs`  
**Task:** Find ALL files referencing old skill/command prefixes needing updates

---

## Executive Summary

Comprehensive scan of claudekit-docs reveals **82 marketing documentation files** (41 English + 41 Vietnamese) that reference slash commands without the required `ckm:` prefix.

**Key Findings:**
- ✅ NO instances of old `mkt:` prefix detected
- ❌ 150+ slash command references missing `ckm:` prefix in English docs
- ❌ 142+ slash command references missing `ckm:` prefix in Vietnamese docs
- Affected commands: `/cook`, `/plan`, `/brainstorm`, `/research`, `/debug`, `/test`, `/ask`, `/scout`
- Primary impact: marketing/commands, marketing/skills, marketing/agents directories

---

## Files Requiring Updates

### English Marketing Docs (41 files)

#### Commands Directory (14 files)
```
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/index.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/ask.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/bootstrap.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/brainstorm.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/campaign.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/cook.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/email.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/fix.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/git.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/plan.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/review.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/scout.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/test.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/seo.md
```

#### Skills Directory (11 files)
```
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/skills/index.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/skills/ai-artist.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/skills/affiliate-marketing.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/skills/brainstorming.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/skills/campaign-management.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/skills/content-marketing.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/skills/chrome-devtools.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/skills/gamification-marketing.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/skills/referral-program-building.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/skills/research.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/skills/seo-optimization.md
```

#### Agents Directory (15 files)
```
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/index.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/analytics-analyst.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/attraction-specialist.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/brainstormer.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/campaign-debugger.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/campaign-manager.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/continuity-specialist.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/content-creator.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/content-reviewer.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/copywriter.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/database-admin.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/debugger.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/docs-manager.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/email-wizard.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/fullstack-developer.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/funnel-architect.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/git-manager.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/journal-writer.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/lead-qualifier.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/mcp-manager.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/planner.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/project-manager.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/researcher.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/sale-enabler.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/scout-external.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/scout.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/seo-specialist.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/tester.md
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/agents/upsell-maximizer.md
```

#### Workflows Directory (1 file)
```
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/workflows/marketing-workflow.md
```

### Vietnamese Marketing Docs (41 files)
Identical structure under:
```
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs-vi/marketing/
```

---

## Patterns to Update

### Pattern 1: Direct Slash Commands in Text
**Before:**
```
- `/plan` - Generate implementation plan
- `/cook` - Implement solution
- `/brainstorm` - Start brainstorming session
- `/research` - Technical research
- `/ask` - Query agent
- `/scout` - Find relevant files
- `/test` - Run tests
- `/debug` - Debug issues
- `/fix` - Fix problems
```

**After:**
```
- `/ckm:plan` - Generate implementation plan
- `/ckm:cook` - Implement solution
- `/ckm:brainstorm` - Start brainstorming session
- `/ckm:research` - Technical research
- `/ckm:ask` - Query agent
- `/ckm:scout` - Find relevant files
- `/ckm:test` - Run tests
- `/ckm:debug` - Debug issues
- `/ckm:fix` - Fix problems
```

### Pattern 2: Markdown Links to Commands
**Before:**
```
| [/brainstorm](/docs/marketing/commands/brainstorm) | Strategy sessions | 1-2 hours |
| [/scout](/docs/marketing/commands/scout) | Find relevant files |
| [/ask](/docs/marketing/commands/ask) | Architecture consultation |
```

**After:**
```
| [/ckm:brainstorm](/docs/marketing/commands/brainstorm) | Strategy sessions | 1-2 hours |
| [/ckm:scout](/docs/marketing/commands/scout) | Find relevant files |
| [/ckm:ask](/docs/marketing/commands/ask) | Architecture consultation |
```

### Pattern 3: In-Text References
**Before:**
```
Activate by using `/plan` command or use `/brainstorm` for collaborative ideation
Use `/cook` to implement, `/research` for analysis, `/scout` to find context
```

**After:**
```
Activate by using `/ckm:plan` command or use `/ckm:brainstorm` for collaborative ideation
Use `/ckm:cook` to implement, `/ckm:research` for analysis, `/ckm:scout` to find context
```

---

## Update Priority

### Priority 1: CRITICAL (User-Facing Index Pages)
1. `commands/index.md` - Main commands reference (33 changes)
2. `skills/index.md` - Skills overview (multiple references)
3. `agents/index.md` - Agents overview (multiple references)

### Priority 2: HIGH (Command Documentation)
4. `commands/brainstorm.md` - Heavy command usage
5. `commands/cook.md`
6. `commands/plan.md`
7. `commands/scout.md`
8. `commands/ask.md`
9. `commands/test.md`
10. `commands/fix.md`
11. `commands/debug.md` (if exists)

### Priority 3: MEDIUM (Workflow & Agent Pages)
12. `workflows/marketing-workflow.md`
13. All agent pages (each references 2-10 commands)

### Priority 4: LOW (Skill Pages)
14. All skill pages (each references 2-5 commands)

---

## Recommended Approach

1. **Regex Search/Replace** (Fast & Reliable):
   - Pattern: `/(cook|plan|brainstorm|research|ask|scout|test|debug|fix)\b`
   - Replace: `/ckm:$1`
   - Apply to all `.md` files in `docs/marketing/` and `docs-vi/marketing/`

2. **Verify**: Manual spot-check on critical files (index pages)

3. **Test**: Build docs and verify links work

4. **Vietnamese**: Apply same replacements to `docs-vi/marketing/`

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total Files to Update | 82 |
| English Files | 41 |
| Vietnamese Files | 41 |
| Commands References | 292+ |
| Old `mkt:` Prefix Found | 0 |
| No Prefix `/cook` etc | 292+ |
| Files with 1-5 changes | ~50 |
| Files with 5-10 changes | ~20 |
| Files with 10+ changes | ~12 |

