---
title: "/cook"
description: "All-in-one feature implementation with planning, research, coding, testing, and documentation in a single command"
section: marketing
category: commands
order: 11
published: true
---

> Plan + code + test + review + commit in one command

## Quick Start

```bash
/cook add dark mode toggle to settings
```

**What happens** (5-15 minutes):
1. Questions you for requirements
2. Researches best practices (3 agents)
3. Scouts codebase for relevant files
4. Creates internal plan
5. Implements with /cook workflow
6. Tests (100% pass required)
7. Code review (0 critical issues)
8. Updates documentation
9. Commits to git

**Output**: Complete feature + git commit

## What It Does

### /cook vs /plan → /cook

| Aspect | /cook | /plan → /cook |
|--------|-------|---------------|
| Planning | Internal (hidden) | Explicit plan file |
| Best for | Small-medium features | Complex features |
| Steps | All-in-one | Two-step process |
| Plan file | Not created | `plans/{date}-{slug}/` |
| User review | Final only | Review plan + code |

### Before /cook
- Manual planning (1-2 hours)
- Manual research (1-2 hours)
- Manual coding (2-6 hours)
- Manual testing (1 hour)
- Manual docs (30 min)
- Manual commit (5 min)
**Total: 5-12 hours**

### After /cook
- One command
- AI handles everything
- User approves final result
**Total: 5-20 minutes**

## Syntax

```bash
/cook [tasks]
```

### Variants

| Variant | Speed | Complexity | Best For |
|---------|-------|------------|----------|
| `/cook` | Standard | Any | General features |
| `/cook --fast` | Quick | Simple | Bug fixes, small features |
| `/cook --hard` | Thorough | Complex | Architecture changes |
| `/cook --parallel` | Multi-track | Independent | Multiple features |

## Example: Add Dark Mode

**Input**:
```bash
/cook add dark mode toggle to settings page
```

**AI Questions**:
```
cook: System-wide dark mode or settings page only?
You: System-wide

cook: Persist preference where?
You: LocalStorage

cook: CSS variables or Tailwind dark: classes?
You: Tailwind dark: classes
```

**Expected Process**:
```markdown
✓ Step 1: Research (3 researchers in parallel)
   - Next.js 15 dark mode patterns
   - Tailwind dark mode setup
   - Preference persistence strategies

✓ Step 2: Scout codebase
   - Found: app/settings/page.tsx
   - Found: tailwind.config.ts
   - Found: components/ThemeToggle.tsx (doesn't exist, will create)

✓ Step 3: Internal planning
   - Phase 1: Tailwind config
   - Phase 2: Theme provider
   - Phase 3: Toggle component
   - Phase 4: Settings integration

✓ Step 4: Implementation
   [4 minutes of coding]
   - Modified tailwind.config.ts
   - Created providers/ThemeProvider.tsx
   - Created components/ThemeToggle.tsx
   - Modified app/settings/page.tsx
   - Modified app/layout.tsx (wrap with provider)

✓ Step 5: Testing
   tester: Running test suite...
   ✓ Theme toggle switches classes correctly
   ✓ Preference persists on reload
   ✓ All existing tests pass (89 passed)

✓ Step 6: Code Review
   code-reviewer: Quality check...
   ✓ No security issues
   ✓ No performance issues
   ✓ Type-safe (0 errors)
   ✓ Follows project patterns

✓ Step 7: Documentation
   docs-manager: Updated docs...
   ✓ Updated docs/design-guidelines.md
   ✓ Updated README.md (added dark mode section)

✓ Step 8: User Approval

Implementation complete!

Changes:
- 5 files modified
- 2 files created
- 3 tests added
- Documentation updated

Approve and commit? [Y/n]
```

**After approval**:
```markdown
✓ Step 9: Git Commit

git-manager: Committing changes...

feat(ui): add system-wide dark mode toggle

- Add Tailwind dark mode configuration
- Create ThemeProvider with localStorage persistence
- Implement ThemeToggle component
- Integrate toggle into settings page
- Add 3 test cases for theme switching

✓ Committed: abc1234
✓ Pushed to origin/main

Done! Dark mode live at /settings
```

## Workflow Integration

### Quick Features
```bash
/cook add newsletter signup form
/cook implement email validation
/cook add loading spinner to buttons
```

### vs Planning First
```bash
# For complex features, use /plan first
/plan implement payment integration  # Review plan
"Implement plan"  # Then implement

# For medium features, /cook is faster
/cook implement payment integration  # Does both
```

### Multiple Features
```bash
# Sequential (one at a time)
/cook add dark mode
/cook add export to CSV
/cook add user preferences

# Parallel (all at once)
/cook --parallel add dark mode, export CSV, user preferences
```

## Workflow Steps (Internal)

1. **Question Everything**: Clarify requirements
2. **Research**: 3+ researcher agents in parallel (≤150 lines each)
3. **Scout**: /scout ext or /scout for relevant files
4. **Plan**: Internal plan (progressive disclosure)
5. **Implement**: /cook workflow (6-step process)
6. **Test**: tester agent (100% pass required)
7. **Review**: code-reviewer agent (0 critical issues required)
8. **Docs**: docs-manager + project-manager agents
9. **Onboarding**: User configuration if needed
10. **Commit**: git-manager agent (after user approval)

## Agents Used

All agents from /plan and /cook:
- planner, researcher (3+), scout
- fullstack-developer, ui-ux-designer
- tester, debugger, code-reviewer
- project-manager, docs-manager, git-manager

## Skills Activated

All relevant skills auto-activated:
- planning, research, implementation
- testing, debugging, code-review
- documentation, git-operations
- Plus feature-specific skills

## Related Commands

- [/plan](/docs/marketing/commands/plan) - Planning only (review before coding)
- [/fix](/docs/marketing/commands/fix) - Fix issues after implementation

---

**One command. Full feature.** From idea to production in minutes.
