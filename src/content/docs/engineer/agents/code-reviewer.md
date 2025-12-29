---
title: Code Reviewer Agent
description: Comprehensive code quality assessment with security audits, performance analysis, and actionable recommendations
section: engineer
kit: engineer
category: agents
order: 7
published: true
---

# Code Reviewer Agent

Production-grade security and quality audits with categorized findings before merge.

## When to Use

- Pre-merge quality gates
- Security vulnerability detection
- Type safety validation
- Performance bottleneck analysis

## Key Capabilities

| Category | Checks |
|----------|--------|
| **Security** | OWASP Top 10, SQL injection, XSS, CSRF, secrets exposure |
| **Type Safety** | TypeScript strict mode, `any` usage, null checks |
| **Performance** | N+1 queries, memory leaks, bundle size |
| **Quality** | Test coverage (80%+ target), error handling, code duplication |
| **Standards** | Linting, naming conventions, documentation |

## Common Use Cases

**1. Pre-Merge Review**
- **Who**: Any developer before PR
- **Prompt**: `/review [feature-name]`
- **Output**: Categorized issues (Critical/High/Medium/Low) with fix recommendations

**2. Security Audit**
- **Who**: Security-conscious teams
- **Prompt**: `/review [security audit of auth module]`
- **Output**: OWASP compliance report, vulnerability list, remediation steps

**3. Refactoring Assessment**
- **Who**: Teams improving legacy code
- **Prompt**: `/review [type safety improvements in src/]`
- **Output**: `any` type locations, strict mode violations, migration plan

**4. Performance Analysis**
- **Who**: Teams optimizing slow endpoints
- **Prompt**: `/review [database query performance]`
- **Output**: N+1 problems, missing indexes, caching opportunities

**5. Standards Compliance**
- **Who**: Teams enforcing code standards
- **Prompt**: `/review [compare auth module against code-standards.md]`
- **Output**: Standards checklist with pass/fail status

## Pro Tips

**Scope Reviews Strategically**
```bash
/review [src/auth/]              # Directory
/review [user authentication]    # Feature
/review [PR-123]                 # Pull request
```

**Combine with Fix Workflow**
```bash
/review [feature-x]
/fix:fast [fix critical security issues from review]
/test
/review [feature-x]  # Verify fixes
```

**Use Review Categories**
- **Critical**: Must fix before merge (security, data loss)
- **High**: Should fix (performance, type safety, reliability)
- **Medium**: Recommended (maintainability, code smells)
- **Low**: Optional (style, minor improvements)

**Check Task Status Updates**
Reviews automatically update plan files with found issues and blocking status.

**Set Quality Gates**
Enforce 80%+ test coverage, zero `any` types, security scan pass before production.

## Related Agents

- [Planner](/docs/engineer/agents/planner) - Creates fix plans from review findings
- [Tester](/docs/engineer/agents/tester) - Validates fixes with comprehensive tests
- [Scout External](/docs/engineer/agents/scout-external) - Researches best practices for fixes

## Key Takeaway

The code reviewer agent prevents production incidents by catching security vulnerabilities, type safety violations, and performance issues before merge. Use it as a quality gate in every PR workflow.
