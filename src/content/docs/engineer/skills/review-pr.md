---
title: "ck:review-pr"
description: "Review GitHub pull requests or GitLab merge requests and optionally fix findings"
section: engineer
kit: engineer
category: skills
order: 90
published: true
---

# Review PR

Use `/ck:review-pr` with a PR or MR number or URL. It detects GitHub versus GitLab, checks prior work and project standards, reviews correctness, security, breaking changes, and code quality, and can optionally fix or post findings.

```text
/ck:review-pr 42
/ck:review-pr https://github.com/example/project/pull/42 --fix
```

Use [Code Review](/docs/engineer/skills/ck-code-review) for local diffs, commits, or codebase-only review.
