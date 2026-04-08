---
title: "ck:scenario"
description: "Generate comprehensive edge cases and test scenarios by decomposing features across 12 dimensions"
section: engineer
kit: engineer
category: skills
order: 64
---

# Scenario

Generate comprehensive edge cases and test scenarios by analyzing a feature across 12 decomposition dimensions. Use before implementation or testing to surface issues you would not think of manually.

## What This Skill Does

Scenario reads a file or feature description and systematically generates 3-5 scenarios per relevant dimension — user types, input extremes, timing, scale, error cascades, authorization, and more. Each scenario is categorized by severity so you can prioritize what to test first.

## When to Use

- Before writing tests for a new feature
- Before implementing a complex feature (catch issues early)
- During code review to validate coverage
- When building a QA test plan

## 12 Dimensions

| # | Dimension | Examples |
|---|-----------|----------|
| 1 | **User Types** | Admin, guest, banned, bot, power user |
| 2 | **Input Extremes** | Empty, null, max length, unicode, injection |
| 3 | **Timing** | Concurrent requests, race conditions, timeouts |
| 4 | **Scale** | 0 items, 1M items, pagination boundaries |
| 5 | **State Transitions** | First use, abort mid-flow, resume, partial completion |
| 6 | **Environment** | Mobile, low CPU, no JS, screen reader, timezone |
| 7 | **Error Cascades** | DB down, API timeout, disk full, network partition |
| 8 | **Authorization** | Expired token, wrong role, CORS, CSRF, privilege escalation |
| 9 | **Data Integrity** | Duplicates, orphans, encoding, concurrent writes |
| 10 | **Integration** | Webhook replay, API version mismatch, service outage |
| 11 | **Compliance** | GDPR deletion, audit gaps, PII exposure |
| 12 | **Business Logic** | Edge pricing, coupon stacking, refund edge cases |

Irrelevant dimensions are automatically skipped.

## Arguments

| Argument | Description |
|----------|-------------|
| `target` | File path or feature description |

## Example Usage

```
/ck:scenario src/api/payment.ts
/ck:scenario "User registration with OAuth providers"
/ck:scenario "Add multi-tenancy to the database layer"
```

## Workflow

1. **Read** — parse target file(s) or feature description
2. **Filter** — determine which of 12 dimensions apply
3. **Generate** — produce 3-5 scenarios per relevant dimension
4. **Categorize** — assign severity (Critical / High / Medium / Low)
5. **Output** — structured table with scenario details and severity summary

## Output Format

| # | Dimension | Scenario | Severity | Expected Behavior |
|---|-----------|----------|----------|-------------------|
| 1 | Input Extremes | Empty string in email field | High | Validation error, no DB write |
| 2 | Timing | Two concurrent signups with same email | Critical | One succeeds, one gets conflict error |

## Related Skills

- [Predict](/docs/engineer/skills/ck-predict) — debate the approach before generating scenarios
- [Test](/docs/engineer/skills/test) — write tests covering the generated scenarios
- [Plan](/docs/engineer/skills/ck-plan) — incorporate scenarios into implementation plan
