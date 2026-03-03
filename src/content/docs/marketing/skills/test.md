---
title: "ckm:test"
description: "Run UI tests and workflow validation tests"
section: marketing
kit: marketing
category: skills
order: 47
---

# Test

> Validate marketing workflows, landing pages, and automation sequences with automated testing.

## What This Skill Does

The Test skill runs automated tests across marketing workflows and UI implementations. It validates that landing pages render correctly, forms submit properly, email sequences trigger as configured, and tracking pixels fire on the right events — catching issues before they cost real ad spend or damage campaign performance.

The skill covers two testing domains: UI tests (visual regression, form validation, mobile responsiveness, CTA functionality) and workflow tests (automation trigger validation, UTM parameter tracking, conversion event firing, email deliverability checks).

Tests run in CI/CD or on-demand before campaign launches, acting as a quality gate that prevents broken experiences from reaching live audiences.

## Quick Start

```
/ckm:test --target landing-page --url https://yoursite.com/launch
```

## Key Features

- Landing page UI testing: layout, forms, mobile responsiveness, load speed
- Form submission validation: required fields, error states, success redirects
- Email automation trigger testing: sequence entry, timing, branching logic
- UTM parameter capture validation
- Conversion event firing checks (pixel, analytics goals)
- Visual regression testing for design consistency
- CI/CD integration with pass/fail exit codes

## Usage Examples

**Pre-launch landing page test**:
```
/ckm:test --target landing-page --url https://yoursite.com/product-launch
# Tests: form submission, CTA buttons, mobile layout, load time, pixel firing
```

**Email automation workflow test**:
```
/ckm:test --target email-workflow --sequence onboarding-trial
# Validates: trigger conditions, email timing, conditional branches, unsubscribe handling
```

**Full campaign QA before launch**:
```
/ckm:test --target campaign --id q2-product-launch
# Runs all tests: landing page, ads tracking, email sequence, conversion goals
```

## Related

- [ckm:campaign](/docs/marketing/skills/campaign) - Launch checklist includes test validation
- [ckm:funnel](/docs/marketing/skills/funnel) - Funnel testing for conversion optimization
- [Chrome DevTools](/docs/marketing/skills/chrome-devtools) - Manual browser debugging
