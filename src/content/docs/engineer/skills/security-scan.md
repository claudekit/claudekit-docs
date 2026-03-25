---
title: "ck:security-scan"
description: "Scan for secrets, vulnerable dependencies, and OWASP code patterns using Claude reasoning and shell tools"
section: engineer
kit: engineer
category: skills
order: 56
---

# Security Scan

Zero-dependency security scanner using Claude reasoning and standard shell tools. Detects secrets, vulnerable dependencies, and OWASP code patterns without external services.

## What This Skill Does

Security Scan runs three categories of checks against your codebase: secret patterns in tracked files, dependency vulnerabilities via native audit tools, and OWASP Top 10 code patterns. Auto-detects project type to run the right checks.

## When to Use

- Before merging a PR that adds new dependencies
- Pre-deployment security review
- Auditing a newly cloned codebase
- Responding to a security incident

## Core Capabilities

- No external service dependencies—Claude reasoning + standard shell tools only
- Auto-detects project type (Node.js, Python, Go, Rust)
- Three scan categories with configurable scope
- Severity classification (critical / high / medium / low)

## Arguments

| Argument | Description |
|----------|-------------|
| `[scope]` | Path to scan (default: entire project) |
| `--secrets-only` | Run only secret detection |
| `--deps-only` | Run only dependency audit |
| `--full` | All checks including deep code pattern analysis |

## Example Usage

```
/ck:security-scan
/ck:security-scan src/ --secrets-only
/ck:security-scan --deps-only
/ck:security-scan --full
```

## Scan Categories

### 1. Secrets Detection
Grep patterns for common secret formats:
- API keys, tokens, passwords in source files
- `.env` files accidentally committed
- Private keys and certificates
- Hardcoded credentials in config files

### 2. Dependency Audit
Run native audit tools by detected project type:

| Stack | Tool |
|-------|------|
| Node.js | `npm audit` / `bun audit` |
| Python | `pip-audit` or `safety check` |
| Go | `govulncheck` |
| Rust | `cargo audit` |

### 3. Code Patterns (OWASP)
Static analysis for:
- SQL injection patterns
- XSS-prone string concatenation
- Insecure deserialization
- Path traversal vulnerabilities
- Missing authentication checks

## Report Format

```
Security Scan Report — {date}

CRITICAL (0) | HIGH (2) | MEDIUM (5) | LOW (8)

[HIGH] Hardcoded API key in src/config.ts:42
[HIGH] lodash@4.17.4 — CVE-2021-23337 (prototype pollution)
...
```

## Related Skills

- [Code Review](/docs/engineer/skills/code-review) — broader code quality review including security
- [DevOps](/docs/engineer/skills/devops) — CI/CD integration for automated scanning
- [Fix](/docs/engineer/skills/fix) — remediate issues found by security scan
