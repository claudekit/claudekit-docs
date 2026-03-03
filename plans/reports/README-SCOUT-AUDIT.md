# Scout Audit Report Index

Complete audit of marketing command prefix references in claudekit-docs.

## Reports Generated

### 1. SCOUT-SUMMARY.md (START HERE)
**Purpose:** Executive summary for quick overview  
**Read time:** 5 minutes  
**Contains:**
- Quick findings overview
- File breakdown by directory
- Priority action items
- Implementation recommendations
- Timeline estimate

**Best for:** Decision makers, project leads, quick understanding

---

### 2. scout-260302-0000-marketing-command-prefix-audit.md
**Purpose:** Comprehensive technical audit report  
**Read time:** 15 minutes  
**Contains:**
- Executive summary with detailed findings
- Complete file listing (82 files)
- Pattern examples and transformations
- Update priorities
- Statistical summary

**Best for:** Implementation team, detailed reference

---

### 3. scout-260302-detailed-reference-audit.md
**Purpose:** Line-by-line reference guide for critical files  
**Read time:** 10 minutes  
**Contains:**
- Priority 1 files with exact line numbers
- Sample changes for each critical file
- Patterns from agent files
- Patterns from skill files
- Regex patterns for batch updates
- QA checklist

**Best for:** Developers doing the actual updates

---

## Key Findings at a Glance

| Metric | Value |
|--------|-------|
| **Files Requiring Updates** | 82 (41 EN + 41 VI) |
| **Total Command References** | 292+ |
| **Missing Prefix Pattern** | `/cook`, `/plan`, `/brainstorm`, `/research`, `/ask`, `/scout`, `/test`, `/debug`, `/fix` |
| **Required Transformation** | `/{cmd}` → `/ckm:{cmd}` |
| **Old `mkt:` prefix found** | ✅ None (good!) |
| **Estimated Time to Fix** | ~30 minutes |
| **Complexity** | Low (regex find & replace) |
| **Risk Level** | Low (docs only, no code changes) |

---

## Quick Start for Implementation

### Step 1: Review Findings (5 min)
Read `SCOUT-SUMMARY.md` for overview

### Step 2: Understand Changes Needed (5 min)
Read the "What Needs to Change" section in any report

### Step 3: Implement Changes (10 min)
Use regex find & replace:
```
Find:    /(cook|plan|brainstorm|research|ask|scout|test|debug|fix)\b
Replace: /ckm:$1
```

Scope: All `.md` files in `src/content/docs/marketing/` and `src/content/docs-vi/marketing/`

### Step 4: Verify (10 min)
- [ ] Run grep to verify no bare commands remain
- [ ] Build documentation
- [ ] Spot-check critical files
- [ ] Test markdown links

### Step 5: Commit Changes
```bash
git add .
git commit -m "docs(marketing): update slash command prefixes to ckm: namespace"
```

---

## File List Summary

### English Marketing Docs (41 files)

**commands/ (14 files)**
```
ask.md, bootstrap.md, brainstorm.md, campaign.md, cook.md, 
email.md, fix.md, git.md, index.md, plan.md, review.md, 
seo.md, scout.md, test.md
```

**skills/ (11 files)**
```
ai-artist.md, affiliate-marketing.md, brainstorming.md, 
campaign-management.md, chrome-devtools.md, content-marketing.md, 
gamification-marketing.md, index.md, referral-program-building.md, 
research.md, seo-optimization.md
```

**agents/ (15 files)**
```
analytics-analyst.md, attraction-specialist.md, brainstormer.md, 
campaign-debugger.md, campaign-manager.md, continuity-specialist.md, 
content-creator.md, content-reviewer.md, copywriter.md, 
database-admin.md, debugger.md, docs-manager.md, email-wizard.md, 
fullstack-developer.md, funnel-architect.md, git-manager.md, 
journal-writer.md, lead-qualifier.md, mcp-manager.md, planner.md, 
project-manager.md, researcher.md, sale-enabler.md, scout.md, 
scout-external.md, seo-specialist.md, tester.md, upsell-maximizer.md
```

**workflows/ (1 file)**
```
marketing-workflow.md
```

### Vietnamese Marketing Docs (41 files)
Same structure under `docs-vi/marketing/`

---

## Pattern Examples

### Pattern 1: Direct Command References
**Before:**
```markdown
- `/plan` - Generate implementation plan
- `/cook` - Implement solution
```

**After:**
```markdown
- `/ckm:plan` - Generate implementation plan
- `/ckm:cook` - Implement solution
```

### Pattern 2: Markdown Links
**Before:**
```markdown
[/brainstorm](/docs/marketing/commands/brainstorm)
```

**After:**
```markdown
[/ckm:brainstorm](/docs/marketing/commands/brainstorm)
```

### Pattern 3: In-Text Usage
**Before:**
```markdown
Use `/scout` to find files, then `/plan` for implementation
```

**After:**
```markdown
Use `/ckm:scout` to find files, then `/ckm:plan` for implementation
```

---

## Verification Checklist

- [ ] All 82 files located and identified
- [ ] Regex pattern tested on sample file
- [ ] All `/cook` → `/ckm:cook`
- [ ] All `/plan` → `/ckm:plan`
- [ ] All `/brainstorm` → `/ckm:brainstorm`
- [ ] All `/research` → `/ckm:research`
- [ ] All `/scout` → `/ckm:scout`
- [ ] All `/ask` → `/ckm:ask`
- [ ] All `/test` → `/ckm:test`
- [ ] All `/debug` → `/ckm:debug`
- [ ] All `/fix` → `/ckm:fix`
- [ ] No duplicate prefixes (e.g., `/ckm:/ckm:`)
- [ ] Markdown links still work
- [ ] Documentation builds successfully
- [ ] English docs verified
- [ ] Vietnamese docs verified
- [ ] Spot-check critical files (index pages)
- [ ] Changes committed with proper message

---

## Questions & Contact

If you have questions about:
- **What needs to change:** See SCOUT-SUMMARY.md
- **Specific files/lines:** See scout-260302-detailed-reference-audit.md
- **How to implement:** See scout-260302-0000-marketing-command-prefix-audit.md

---

## Report Metadata

| Property | Value |
|----------|-------|
| **Report Date** | March 2, 2026 |
| **Scope** | `/Users/duynguyen/www/claudekit/claudekit-docs` |
| **Audit Type** | Code reference audit |
| **Scout Agent** | Codebase Scout |
| **Status** | Complete & Ready |

---

*Scout Report Complete - Ready for Implementation*
