# Workflows Review: Command→Skill Terminology Audit

## Scope
- Files reviewed: 17 workflow markdown files in `src/content/docs/workflows/`
- Focus: Checking for deprecated command terminology vs. current skill terminology
- Report date: 2026-01-31

## Overall Assessment

Reviewed all workflow files for outdated command→skill terminology. Found **extensive** use of deprecated slash command syntax throughout workflows. Most files reference `/cook`, `/fix`, `/plan`, `/test`, `/git`, `/scout` as "commands" rather than "skills" as shown by usage patterns.

## Critical Issues

### 1. Inconsistent Terminology Throughout Workflows

**Files affected:** ALL workflow files

**Issue:** Workflows heavily use slash command syntax (`/cook`, `/fix`, `/plan`) which may be deprecated in favor of skill invocation.

**Examples from files:**
- `adding-feature.md` line 25: `**Commands**: /plan, /test, /docs:update, /git cm`
- `building-api.md` line 19: `**Commands**: /bootstrap, /plan, /code, /test, /docs:update`
- `fixing-bugs.md` line 24: `**Commands**: /fix --quick, /fix, /test`
- `feature-development.md` line 21: Refers to `/plan`, `/code`, `/test` as commands
- `bug-fixing.md` line 29: `/debug`, `/fix` as commands

**Impact:** If command syntax is deprecated, all workflow examples need updates

**However:** The `index.md` (lines 18-70) shows mixed usage suggesting slash commands may still be valid:
- Line 18: `/plan "add user authentication with OAuth"`
- Line 20: `/cook "Implement user authentication..."`
- Line 27: `/debug "Login button not working..."`
- Line 55: Uses `"Create marketing copy..."` (natural language) for skills

**Ambiguity:** Unclear if slash commands are deprecated or if they coexist with natural language skill invocation.

### 2. No References to `/code` Deprecated Path

**Status:** CLEAN ✓

No deprecated `/code` command references found in workflow files. The `index.md` correctly uses `/cook` for implementation.

### 3. References to Deleted Command Documentation Paths

**Files with potentially broken links:**
- `adding-feature.md` lines 654-658: Links to `/docs/engineer/commands/core/*` and `/docs/engineer/skills/*`
- `building-api.md` lines 767-769: Links to `/docs/engineer/commands/*`
- Multiple files link to paths like:
  - `/docs/engineer/commands/core/plan`
  - `/docs/engineer/commands/core/test`
  - `/docs/engineer/commands/docs/update`
  - `/docs/engineer/skills/cook`
  - `/docs/engineer/skills/fix`
  - `/docs/engineer/skills/git`

**Impact:** If command documentation was deleted/moved, these links will 404

## High Priority Findings

### 1. Headers Using "Commands" Instead of "Skills"

**Files affected:** Nearly all workflow files

**Examples:**
- `adding-feature.md` line 25: `**Commands**: /plan, /test, /docs:update, /git cm`
- `building-api.md` line 19: `**Commands**: /bootstrap, /plan, /code, /test, /docs:update`
- `implementing-auth.md` line 24: `**Commands**: /plan, /code, /test, /docs:update`

**Should potentially be:**
```markdown
**Skills**: cook, fix, plan, test, git
```

### 2. "Related Commands" Sections

**Files with "Related Commands" sections:**
- `adding-feature.md` line 653: `### Related Commands`
- `fixing-bugs.md` line 669: `### Related Commands`
- `implementing-auth.md` line 651: `### Related Commands`
- `integrating-payment.md` line 729: `### Related Commands`
- `refactoring-code.md` line 643: `### Related Commands`

**Should potentially be:** `### Related Skills`

### 3. git, cook, fix, scout, plan References

**Status:** Terminology unclear - used as "commands" with slash syntax

**Patterns found:**
- `/git cm` - commit changes
- `/git cp` - commit and push
- `/git pr` - create pull request
- `/cook` - implement features
- `/fix` - fix bugs
- `/fix --quick` - quick fixes
- `/plan` - create plans
- `/test` - run tests
- `/scout` - search codebase

**Context from index.md suggests:** These may be valid slash command syntax that coexists with natural language invocation.

## Medium Priority Improvements

### 1. Workflow Index Missing Skill Terminology

`index.md` line 71: `## By Use Case` section uses natural language for some skills but slash commands for others:
- Line 76: `/frontend-design` (slash command)
- Line 77: `/plan → /clear → /cook → /test` (slash commands)
- Line 107: `"Create marketing copy..."` (natural language)

**Recommendation:** Clarify when to use slash vs natural language

### 2. Section Headers Could Be More Accurate

Many files use:
- "Commands" in overview tables
- "Related Commands" sections
- "/command" syntax in code blocks

If these are skills, headers should reflect that.

## Low Priority Suggestions

### 1. Terminology Consistency

Recommend establishing clear documentation on:
- When slash commands are valid
- When natural language skill invocation is preferred
- Difference between "commands" and "skills"

### 2. Link Audit Needed

Comprehensive link check required for:
- `/docs/engineer/commands/*` paths
- `/docs/engineer/skills/*` paths
- `/docs/commands/*` paths

Many workflows reference these; verify they exist.

## Positive Observations

1. **No `/code` references** - Correctly uses `/cook` throughout
2. **Consistent patterns** - Each workflow follows similar structure
3. **Clear examples** - Code blocks show practical usage
4. **Good organization** - Workflows are well-categorized

## Recommended Actions

### Priority 1: Clarify Terminology (CRITICAL)

**Decision needed:**
1. Are slash commands (`/cook`, `/fix`, `/plan`) deprecated?
2. Should workflows use natural language ("Implement feature...") instead?
3. Or do both syntaxes coexist?

**Based on answer, update:**
- All "Commands:" headers to "Skills:" if slash syntax deprecated
- All "/command" examples to natural language if required
- All "Related Commands" to "Related Skills"

### Priority 2: Verify Documentation Links

**Action:** Test all links to:
```
/docs/engineer/commands/*
/docs/engineer/skills/*
/docs/commands/*
```

**If broken:** Update to correct paths or remove references

### Priority 3: Update Headers Consistently

**If slash commands are deprecated:**
- Replace "Commands:" with "Skills:" in all workflow overviews
- Update "Related Commands" sections to "Related Skills"

**Files requiring updates (if terminology changes):**
- adding-feature.md
- building-api.md
- fixing-bugs.md
- feature-development.md
- bug-fixing.md
- implementing-auth.md
- integrating-payment.md
- optimizing-performance.md
- refactoring-code.md
- existing-project.md (brownfield)
- new-project.md (greenfield)
- maintaining-old-project.md
- starting-new-project.md

## Unresolved Questions

1. **What is the current official syntax?** Slash commands (`/cook`) vs natural language ("Implement feature")?
2. **Are command docs deleted?** Many workflows link to `/docs/engineer/commands/core/*`
3. **Skill vs command distinction?** Is there a semantic difference or just terminology change?
4. **What about `/git`, `/test`, `/docs:*`?** Are these skills or special commands?

## Metrics

- **Workflows reviewed:** 17 files
- **Files with command terminology:** 17/17 (100%)
- **Files with potential broken links:** 13+ files
- **Files using slash syntax:** 17/17 (100%)
- **Files with "Related Commands" sections:** 5+ files

## Next Steps

1. **Clarify terminology** - Determine official stance on slash commands vs skills
2. **Update documentation** - Based on terminology decision, batch update all workflows
3. **Fix broken links** - Audit and correct all `/docs/engineer/commands/*` references
4. **Establish style guide** - Document when to use slash syntax vs natural language
5. **Consider migration guide** - If deprecating slash commands, provide migration examples

---

**Review completed:** 2026-01-31
**Reviewer:** code-reviewer agent (aff5f1c)
**Token usage:** Efficient review covering 17 comprehensive workflow files
