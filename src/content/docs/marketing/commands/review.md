---
title: "/review"
description: "Code quality analysis and review with security, performance, and architecture checks before commits"
section: marketing
category: commands
order: 17
published: true
---

> Quality assurance before you commit

## Quick Start

```bash
/review
```

**What happens**:
1. code-reviewer agent analyzes recent changes
2. Checks security vulnerabilities
3. Evaluates performance
4. Validates architecture patterns
5. Verifies YAGNI/KISS/DRY principles

**Output**: Review report with severity-ranked issues

## Syntax

```bash
/review [files or scope]
```

## Example Output

```markdown
✓ code-reviewer: Analyzing changes...

Files reviewed: 8
Lines changed: +247, -89

CRITICAL ISSUES (Fix Immediately): 0
HIGH PRIORITY (Fix Before Commit): 1
MEDIUM PRIORITY (Fix This Week): 3
LOW PRIORITY (Consider): 2

---

HIGH PRIORITY:
🟠 Potential SQL injection in campaign query
   File: lib/campaign/manager.ts:45
   Fix: Use parameterized queries
   Impact: Security vulnerability

MEDIUM PRIORITY:
🟡 Missing error handling in API route
   File: app/api/campaigns/route.ts:23
   Fix: Add try/catch block

🟡 Large component file (450 lines)
   File: components/CampaignBuilder.tsx
   Fix: Split into smaller components

🟡 Unused import in 3 files
   Fix: Remove unused imports

LOW PRIORITY:
⚪ Consider memoization for expensive calculation
   File: lib/analytics/metrics.ts:67

⚪ Magic number should be constant
   File: lib/email/scheduler.ts:12

---

STRENGTHS:
✅ Good test coverage (87%)
✅ Type-safe throughout
✅ Clear naming conventions
✅ Proper error messages

Summary: Fix 1 high-priority issue before commit

Next: /fix SQL injection in campaign query
```

## When to Use

### Before Commits
```bash
/review  # Check code quality
# Fix issues
/git cm  # Commit
```

### After Implementation
```bash
/cook plans/feature.md
/review  # Quality check
```

### Periodic Reviews
```bash
/review lib/  # Review specific directory
/review components/CampaignBuilder.tsx  # Single file
```

## Review Criteria

- **Security**: SQL injection, XSS, auth issues
- **Performance**: N+1 queries, memory leaks
- **Architecture**: SOLID principles, patterns
- **Code quality**: Naming, structure, duplication
- **Testing**: Coverage, test quality
- **Principles**: YAGNI, KISS, DRY

## Related Commands

- [/cook](/docs/engineer/skills/cook) - Includes review automatically
- [/fix](/docs/marketing/commands/fix) - Fix issues found
- [/test](/docs/marketing/commands/test) - Run tests

---

**Quality gates.** Catch issues before they reach production.
