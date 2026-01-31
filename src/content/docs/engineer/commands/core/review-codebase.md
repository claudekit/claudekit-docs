---
title: /review:codebase
description: Comprehensive codebase analysis with researcher, scout, and code-reviewer agents for quality assessment
section: engineer
kit: engineer
category: commands/core
order: 72
published: true
---

# /review:codebase

Multi-agent codebase analysis command. Scans your entire codebase using researcher, scout, and code-reviewer agents to assess quality, identify technical debt, and create an improvement roadmap.

## Syntax

```bash
/review:codebase [tasks-or-prompt]
```

## When to Use

- **Onboarding**: Understanding a new codebase
- **Pre-Refactoring**: Assessing before major changes
- **Technical Debt Audit**: Identifying debt inventory
- **Architecture Review**: Evaluating current patterns
- **Quality Check**: Comprehensive code quality assessment

## Quick Example

```bash
/review:codebase
```

**Output**:
```
Starting codebase review...

Phase 1: Structure Scan
Analyzing directory structure...
Found: 234 files, 18 directories

Phase 2: Multi-Agent Exploration
Dispatching 5 scout agents...
[████████████████████] Complete

Phase 3: Pattern Analysis
Researcher analyzing architecture...
[████████████████████] Complete

Phase 4: Quality Review
Code-reviewer checking standards...
[████████████████████] Complete

Phase 5: Improvement Planning
Creating roadmap...
[████████████████████] Complete

Report: plans/reports/codebase-review-251129.md
```

## Arguments

- `[tasks-or-prompt]`: Optional focus area. If empty, reviews entire codebase.

## What It Does

### Agents Invoked

| Agent | Role | Focus |
|-------|------|-------|
| scout (x5) | Explore | Directory-parallel exploration |
| researcher | Analyze | Architecture patterns, best practices |
| code-reviewer | Review | Code quality, standards compliance |
| planner | Plan | Improvement roadmap creation |

### Workflow

**Step 1: Scan Directory Structure**

```
Scanning codebase...

src/
├── components/ (42 files)
├── hooks/ (12 files)
├── services/ (18 files)
├── utils/ (8 files)
└── pages/ (24 files)

Total: 234 files across 18 directories
```

**Step 2: Dispatch Scout Agents**

Five parallel scouts explore different areas:

```
Scout 1: src/components/**
Scout 2: src/hooks/** + src/utils/**
Scout 3: src/services/**
Scout 4: src/pages/**
Scout 5: tests/** + config files
```

**Step 3: Researcher Analyzes Patterns**

```
Analyzing architecture patterns...

Detected:
- Pattern: Feature-based organization
- State: Zustand stores per feature
- API: REST with React Query
- Styling: Tailwind CSS + CSS modules
```

**Step 4: Code-Reviewer Checks Quality**

```
Quality assessment...

Code Quality Metrics:
- Complexity: Medium (avg cyclomatic: 8)
- Duplication: Low (2.3%)
- Test Coverage: 67%
- Type Safety: High (strict mode)

Issues Found:
- 3 potential security issues
- 12 code style violations
- 5 performance concerns
```

**Step 5: Planner Creates Roadmap**

```
Creating improvement roadmap...

Priority 1 (Critical):
- Fix security issues in auth module
- Add input validation to API endpoints

Priority 2 (High):
- Increase test coverage to 80%
- Refactor complex components

Priority 3 (Medium):
- Address code style violations
- Optimize bundle size
```

**Step 6: Generate Report**

Comprehensive markdown report created.

## Analysis Areas

### Code Organization

- File structure patterns
- Naming conventions
- Module boundaries
- Import/export patterns

### Architecture Patterns

- Monolith vs microservices
- State management approach
- API design patterns
- Component architecture

### Code Quality Metrics

- Cyclomatic complexity
- Code duplication percentage
- Test coverage
- Type safety level
- Documentation coverage

### Security Issues

- Input validation gaps
- Authentication vulnerabilities
- Authorization flaws
- Dependency vulnerabilities

### Performance Bottlenecks

- Bundle size concerns
- Render performance issues
- API response times
- Memory leaks potential

### Technical Debt Inventory

- Legacy code sections
- Outdated dependencies
- Missing tests
- TODO/FIXME comments
- Deprecated patterns

## Output

### Report Location

```
plans/reports/codebase-review-YYMMDD.md
```

### Report Sections

```markdown
# Codebase Review Report

## Executive Summary
- Overall health score
- Key findings
- Critical issues

## Structure Analysis
- Directory organization
- File distribution
- Naming patterns

## Architecture Overview
- Patterns detected
- Component relationships
- Data flow

## Quality Metrics
- Complexity scores
- Duplication analysis
- Coverage statistics

## Issues Inventory
### Critical
### High
### Medium
### Low

## Technical Debt
- Debt items
- Estimated effort
- Impact assessment

## Recommendations
### Immediate Actions
### Short-term Improvements
### Long-term Refactoring

## Improvement Roadmap
- Phase 1: Critical fixes
- Phase 2: Quality improvements
- Phase 3: Architecture evolution
```

## Complete Example

### Scenario: Pre-Refactoring Assessment

```bash
/review:codebase [assess readiness for React 19 migration]
```

**Execution**:

```
Starting focused codebase review...
Focus: React 19 migration readiness

Phase 1: Structure Scan
Found: 156 React components, 24 hooks, 12 context providers

Phase 2: Scout Analysis
[Scout 1] Analyzing component patterns...
[Scout 2] Checking hook implementations...
[Scout 3] Reviewing state management...
[Scout 4] Examining data fetching...
[Scout 5] Checking build configuration...

Phase 3: Research
Comparing current patterns against React 19 requirements...

Phase 4: Quality Review
Checking for deprecated patterns...

Phase 5: Migration Planning
Creating migration roadmap...

═══════════════════════════════════════
        REVIEW SUMMARY
═══════════════════════════════════════

React 19 Migration Readiness: 72%

Blockers (Must Fix):
- 8 components using deprecated lifecycle methods
- 3 class components need conversion
- Legacy context API in 2 providers

Warnings (Should Fix):
- 12 components with potential Suspense issues
- 5 effects without cleanup
- Outdated React Query patterns

Ready (No Changes):
- 134 functional components
- 19 custom hooks
- Modern state management

Estimated Migration Effort:
- Critical fixes: 2 days
- Refactoring: 5 days
- Testing: 3 days
- Total: ~2 weeks

Report: plans/reports/codebase-review-251129.md
═══════════════════════════════════════
```

## Focused Review

Specify an area for targeted analysis:

```bash
# Security focus
/review:codebase [security audit of authentication system]

# Performance focus
/review:codebase [identify performance bottlenecks]

# Testing focus
/review:codebase [assess test coverage gaps]

# Architecture focus
/review:codebase [evaluate microservices boundaries]
```

## Best Practices

### Run Before Major Changes

```bash
# Before refactoring
/review:codebase

# Review report
cat plans/reports/codebase-review-*.md

# Then plan
/plan [refactor based on review findings]
```

### Regular Health Checks

Run periodically for ongoing projects:

```bash
# Monthly health check
/review:codebase [monthly quality assessment]
```

### Focus When Needed

```bash
# Full review for new projects
/review:codebase

# Focused review for specific concerns
/review:codebase [API security]
```

## Related Commands

- [/scout](/docs/engineer/commands/core/scout) - Quick codebase exploration
- [/scout ext](/docs/engineer/commands/core/scout-ext) - External tool exploration
- [/ask](/docs/engineer/commands/core/ask) - Architectural questions
- [/plan](/docs/engineer/commands/plan) - Create improvement plans

---

**Key Takeaway**: `/review:codebase` provides comprehensive multi-agent analysis of your codebase, identifying quality issues, technical debt, and creating actionable improvement roadmaps.
