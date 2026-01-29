---
title: "Web Design Guidelines"
description: "Review UI code for Web Interface Guidelines compliance and accessibility standards"
section: engineer
kit: engineer
category: skills
order: 35
---

Review files for compliance with Web Interface Guidelines—checking accessibility, UX best practices, and design standards.

## What This Skill Does

The Web Design Guidelines skill audits your UI code against the latest Web Interface Guidelines maintained by Vercel. It fetches fresh rules before each review, checks your code against all guidelines, and outputs findings in a terse, actionable format.

Think of it as your automated design review—catching accessibility issues, UX problems, and guideline violations before they reach production.

## When to Use

Activate when asked to:
- "Review my UI"
- "Check accessibility"
- "Audit design"
- "Review UX"
- "Check my site against best practices"

## How It Works

1. Fetch the latest guidelines from source URL
2. Read the specified files (or prompt user for files/pattern)
3. Check against all rules in the fetched guidelines
4. Output findings in terse `file:line` format

## Guidelines Source

```
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

The skill fetches fresh guidelines before each review to ensure you're checking against the latest standards.

## Usage

Activate by mentioning UI review, design audit, accessibility check, or UX best practices.

## Example Prompts

- "Review the landing page for accessibility issues"
- "Check this component against Web Interface Guidelines"
- "Audit the dashboard UI for UX problems"
- "Review all .tsx files in the components directory"
- "Check if this form follows best practices"

## What It Checks

The Web Interface Guidelines cover:
- Accessibility (WCAG compliance, semantic HTML, ARIA)
- UX patterns (navigation, forms, feedback, loading states)
- Visual design (typography, spacing, color contrast)
- Interaction design (hover states, focus indicators, touch targets)
- Performance (image optimization, lazy loading)

## Output Format

Findings in terse `file:line` format for easy navigation:
```
components/Header.tsx:42: Missing alt text on <img>
pages/signup.tsx:78: Form missing <label> elements
components/Button.tsx:23: Insufficient color contrast (3.2:1)
```

## What Makes This Different

This skill doesn't use static rules—it fetches the latest guidelines from Vercel before each review. As guidelines evolve, your reviews automatically use the newest standards without updating the skill.

## Related Skills

- [React Best Practices](/docs/engineer/skills/react-best-practices) - For React/Next.js performance patterns
- [Web Testing](/docs/engineer/skills/web-testing) - For accessibility testing with axe-core
