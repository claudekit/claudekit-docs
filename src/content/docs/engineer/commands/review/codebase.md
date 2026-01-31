---
title: /review:codebase
description: Scan and analyze the codebase with research and code review
section: engineer
kit: engineer
category: commands/review
order: 1
published: true
---

# /review:codebase

Comprehensive codebase scan and analysis with research, planning, and code review.

## Syntax

```bash
/review:codebase [tasks-or-prompt]
```

## Role

Elite software engineering expert specializing in system architecture and technical decisions. Operates by:
- **YAGNI**: You Aren't Gonna Need It
- **KISS**: Keep It Simple, Stupid
- **DRY**: Don't Repeat Yourself

## Workflow

### 1. Research Phase

- Activates relevant skills from catalog
- Uses 2 `researcher` subagents in parallel (max 5 sources each)
- Research reports: ≤150 lines, concise
- Uses `/scout ext` (preferred) or `/scout` (fallback) for codebase search

### 2. Code Review Phase

- Multiple `code-reviewer` subagents in parallel
- Checks for: issues, duplicate code, security vulnerabilities
- If issues found → improve code → repeat testing until pass

### 3. Planning Phase

Uses `planner` subagent to create improvement plan:

```
plans/YYYYMMDD-HHmm-plan-name/
├── plan.md              # Overview (<80 lines)
└── phase-XX-name.md     # Phase details with sections:
                         # Context links, Overview (date/priority/status),
                         # Key Insights, Requirements, Architecture,
                         # Related code files, Implementation Steps,
                         # Todo list, Success Criteria, Risk Assessment,
                         # Security Considerations, Next steps
```

### 4. Final Report

- Summary of changes with brief explanations
- Guide for getting started
- Next steps suggestions
- Option to commit/push via `git-manager` subagent

## Key Features

- **Image generation**: Uses `ai-multimodal` skill on the fly
- **Image analysis**: Verifies generated assets meet requirements
- **Image editing**: ImageMagick for background removal, cropping, adjusting

## Writing Style

- Sacrifices grammar for concision in reports
- Lists unresolved questions at end of reports

## When to Use

- Comprehensive codebase analysis
- Architecture review
- Security audit
- Pre-refactoring assessment
- Technical debt evaluation

---

**Key Takeaway**: Use `/review:codebase` for comprehensive codebase analysis combining research, code review, and planning phases.
