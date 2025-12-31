---
title: Debugger Agent
description: Systematically investigate issues, analyze logs, and provide root cause analysis with actionable solutions
section: engineer
kit: engineer
category: agents
order: 5
published: true
---

# Debugger Agent

Systematic root cause analysis for production incidents, API failures, and complex technical issues.

## When to Use

- API endpoints returning 500 errors or unexpected responses
- CI/CD pipeline failures blocking deployments
- Database connection pools exhausted or queries timing out
- Production incidents requiring immediate diagnosis

## Key Capabilities

| Area | What It Does |
|------|-------------|
| **Issue Investigation** | Structured problem-solving: assess severity, collect logs, identify patterns, trace timeline |
| **Database Analysis** | Schema inspection (`psql \d`), query plans (EXPLAIN), connection monitoring, lock detection |
| **Log Analysis** | Parse server logs, CI/CD output, GitHub Actions failures, container logs, system errors |
| **Performance** | Response times, resource usage (CPU/memory/disk), bottleneck identification, cache analysis |
| **Root Cause** | Error tracing, dependency failures, config issues, code bugs, infrastructure problems |

## Common Use Cases

### Backend Engineer: API 500 Errors
**Prompt**: `/debug [POST /api/orders returning 500, started after v2.3.4 deploy]`
Gets root cause (missing req.user, connection leak), fix plan, rollback steps, validation commands.

### DevOps: Database Connection Exhaustion
**Prompt**: `/debug [PostgreSQL pool exhausted, 47/20 connections active]`
Identifies leaked transactions, long-running queries, table locks. Provides kill commands, query timeouts, code fixes.

### Full-Stack Dev: GitHub Actions Failing
**Prompt**: `/debug [CI build failing on test step, error "Module not found"]`
Analyzes workflow logs, identifies missing dependency or broken import, suggests package.json fix.

### Site Reliability Engineer: Performance Degradation
**Prompt**: `/debug [API latency increased from 200ms to 3s after deploy]`
Profiles endpoints, finds N+1 queries or missing indexes, provides EXPLAIN ANALYZE output and optimization plan.

## Pro Tips

**Collect context first**: Before running `/debug`, gather error messages, timestamps, recent changes (deploys/commits), and environment details.

**Check the usual suspects**: Recent deployments, config changes, dependency updates, database migrations often cause issues.

**Use parallel investigation**: Combine with scout agents for broad searches: `scout('Find all database transaction usage', 3)` while analyzing logs.

**Validate fixes in staging**: Test proposed solutions in non-production before applying to prod.

**Document for next time**: Debugger reports become runbooks - save them for similar future incidents.

## Related Agents

- [Tester](/docs/engineer/agents/tester) - Validate fixes with comprehensive tests
- [Code Reviewer](/docs/engineer/agents/code-reviewer) - Review fix quality before merge
- [Fullstack Developer](/docs/engineer/agents/fullstack-developer) - Implement suggested fixes

## Key Takeaway

Debugger agent systematically investigates technical issues from symptoms to root cause, providing actionable solutions with validation steps and prevention measures - turning hours of troubleshooting into 30-minute structured analysis.
