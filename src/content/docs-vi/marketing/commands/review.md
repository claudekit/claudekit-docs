---
lang: vi
title: "/ckm:review"
description: "Code quality analysis and review với security, performance, và architecture checks trước commits"
section: marketing
category: commands
order: 17
published: true
---

> Quality assurance trước khi commit

## Bắt Đầu Nhanh

```bash
/ckm:review
```

**Điều gì sẽ xảy ra**:
1. code-reviewer agent phân tích recent changes
2. Kiểm tra security vulnerabilities
3. Đánh giá performance
4. Xác thực architecture patterns
5. Verify YAGNI/KISS/DRY principles

**Kết Quả**: Review report with severity-ranked issues

## Cú Pháp

```bash
/ckm:review [files or scope]
```

## Ví Dụ Output

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

Next: /ckm:fix SQL injection in campaign query
```

## Khi Nào Sử Dụng

### Trước Commits

```bash
/ckm:review  # Check code quality
# Fix issues
/ckm:git cm  # Commit
```

### Sau Implementation

```bash
/ckm:cook plans/feature.md
/ckm:review  # Quality check
```

### Periodic Reviews

```bash
/ckm:review lib/  # Review specific directory
/ckm:review components/CampaignBuilder.tsx  # Single file
```

## Tiêu Chí Review

- **Security**: SQL injection, XSS, auth issues
- **Performance**: N+1 queries, memory leaks
- **Architecture**: SOLID principles, patterns
- **Code quality**: Naming, structure, duplication
- **Testing**: Coverage, test quality
- **Principles**: YAGNI, KISS, DRY

## Lệnh Liên Quan

- [/ckm:cook](/docs/marketing/commands/cook) - Includes review automatically
- [/ckm:fix](/docs/marketing/commands/fix) - Fix issues found
- [/ckm:test](/docs/marketing/commands/test) - Run tests

---

**Quality gates.** Bắt vấn đề trước khi chúng vào production.
