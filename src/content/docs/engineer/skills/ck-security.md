---
title: "ck:security"
description: "STRIDE and OWASP-based security audit with severity categorization and optional iterative auto-fix"
section: engineer
kit: engineer
category: skills
order: 65
---

# Security

STRIDE + OWASP-based security audit that scans code for vulnerabilities, categorizes findings by severity, and optionally fixes them iteratively using the autoresearch guard pattern.

## What This Skill Does

Security runs a multi-layer analysis: STRIDE threat modeling, OWASP Top 10 mapping, dependency auditing (npm audit, pip-audit, etc.), and secret detection. Findings are categorized from Critical to Info. With `--fix`, it enters an iterative loop that applies targeted fixes and validates each one against your test suite.

## When to Use

- Before a production release
- After adding authentication or payment features
- During periodic security reviews
- When onboarding a new codebase
- After a dependency update with known CVEs

## Analysis Layers

| Layer | What It Checks |
|-------|----------------|
| **STRIDE** | Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation of Privilege |
| **OWASP Top 10** | A01 Broken Access Control through A10 SSRF |
| **Dependency Audit** | npm audit, pip-audit, govulncheck, bundle audit (auto-detected) |
| **Secret Detection** | Hardcoded API keys, passwords, tokens, private keys |

## Arguments

| Argument | Description |
|----------|-------------|
| `scope` | Glob pattern or `full` for entire codebase |
| `--fix` | Apply fixes iteratively with guard validation |
| `--iterations N` | Cap total fix iterations (default: 10) |

## Example Usage

```
/ck:security src/api/**/*.ts
/ck:security src/ --fix --iterations 15
/ck:security full
```

## Severity Levels

| Level | Meaning |
|-------|---------|
| **Critical** | Exploitable now, data loss or unauthorized access |
| **High** | Significant risk, should fix before release |
| **Medium** | Limited exploitability or impact, fix next sprint |
| **Low** | Minor concern, fix when convenient |
| **Info** | Best practice suggestion |

## Workflow

1. **Scope Resolution** — expand glob or `full` into file list
2. **STRIDE Analysis** — evaluate all 6 threat categories
3. **OWASP Check** — map findings to A01-A10
4. **Dependency Audit** — run stack-specific audit tools
5. **Secret Detection** — scan for hardcoded credentials
6. **Categorize** — assign severity to each finding

### Fix Mode (`--fix`)

1. Sort findings by severity (Critical first)
2. For each finding: apply targeted fix → run guard (tests/lint) → commit with `security(fix-N): <description>`
3. If guard fails: stop early and report the failure (no partial fixes left uncommitted)

## Output

- **Summary**: files scanned, count per severity
- **Findings table**: #, Severity, Category, File:Line, Description, Fix Recommendation

## Related Skills

- [Autoresearch](/docs/engineer/skills/ck-autoresearch) — underlying guard pattern used by `--fix` mode
- [Code Review](/docs/engineer/skills/code-review) — broader code quality review including security
- [Security Scan](/docs/engineer/skills/security-scan) — lighter-weight secret and dependency scanning
