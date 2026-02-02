---
title: Planner Agent
description: Research, analyze, and create comprehensive implementation plans before coding
section: engineer
kit: engineer
category: agents
order: 3
published: true
---
# Planner Agent

Researches best practices, analyzes your codebase, and generates step-by-step implementation plans with code examples, timelines, and rollback procedures.

## When to Use

- **Before major features** - Break down complex work into clear steps
- **Technical decisions** - Evaluate multiple approaches with pros/cons
- **Large refactors** - Map dependencies and impact before touching code
- **CI/CD failures** - Analyze logs and create systematic fix plans

## Key Capabilities

| Capability | What It Does |
|-----------|--------------|
| **Research** | Searches industry standards, official docs, proven solutions |
| **Analysis** | Reads codebase, evaluates dependencies, identifies integration points |
| **Planning** | Breaks work into tasks, lists file changes, estimates timeline |
| **Risk Management** | Includes rollback plans, security checks, performance considerations |

## Common Use Cases

**Feature Planning**
- **Who**: Backend dev adding real-time notifications
- **Prompt**: `/plan [add WebSocket notifications with Socket.io and Redis]`
- **Output**: Plan with setup steps, auth integration, database schema, test strategy

**Architecture Review**
- **Who**: Tech lead evaluating database migration
- **Prompt**: `/plan [migrate from MongoDB to PostgreSQL]`
- **Output**: Migration strategy, data transformation steps, zero-downtime approach

**Bug Investigation**
- **Who**: Developer fixing complex race condition
- **Prompt**: `/plan:hard [fix checkout race condition causing double charges]`
- **Output**: Root cause analysis, reproduction steps, fix plan with test cases

**Optimization Planning**
- **Who**: DevOps engineer improving performance
- **Prompt**: `/plan [optimize API response time from 2s to 200ms]`
- **Output**: Profiling strategy, bottleneck analysis, optimization steps with benchmarks

**CRO Implementation**
- **Who**: Growth engineer improving conversion
- **Prompt**: `/plan:cro [improve checkout abandonment rate]`
- **Output**: A/B test plan, UX improvements, tracking implementation

## What You Get

Every plan includes:

```markdown
# Implementation Plan: [Feature Name]

## Approach
Why this solution + alternatives considered

## Steps
1. Install Dependencies (5 min)
   - Commands to run

2. Core Implementation (20 min)
   - Files to create: src/feature/service.ts
   - Files to modify: src/server.ts
   - Code snippets showing structure

3. Integration (15 min)
   - Where to hook into existing code

4. Testing (20 min)
   - Test files to create
   - Coverage requirements

## Timeline
Total: 1 hour

## Rollback Plan
Step-by-step recovery if issues occur

## Security Checklist
- Auth validation
- Input sanitization
- Rate limiting

## Next Steps
Ready to implement? Run: /cook @plans/your-plan.md
```

Plans saved to: `plans/[feature-name]-YYYYMMDD-HHMMSS.md`

## Pro Tips

**Review before coding**: Plans catch design flaws before you write code. Check the approach section first.

**Use plans as specs**: Reference the plan during code review. "Did we implement step 3?" ensures nothing is missed.

**Multiple approaches**: Use `/plan:two [description]` to generate two different solutions with trade-off comparison.

**Link from issues**: Save plans to git, link from GitHub issues. Future devs understand *why* decisions were made.

**Update after implementation**: Mark completed steps, note deviations. Plans become living documentation.

## Example Commands

```bash
# Basic planning
/plan [add OAuth2 authentication]

# Compare approaches
/plan:two [use Redis vs PostgreSQL for caching]

# Fix planning
/plan:hard [memory leak in job processor]

# CRO planning
/plan:cro [improve signup conversion]

# CI/CD fix
/plan:ci [github-actions-url]

# Execute plan
/cook @plans/oauth2-auth-20241020.md
```

## Integration with Commands

| Phase | Command | Purpose |
|-------|---------|---------|
| Research | `/plan` | Generate implementation plan |
| Review | `cat plans/latest.md` | Review plan before coding |
| Execute | `/cook @plans/plan.md` | Implement following plan |
| Test | `/test` | Validate implementation |
| Document | Update plan with actuals | Create decision record |

## Related Agents

- [Fullstack Developer](/docs/engineer/agents/fullstack-developer) - Executes implementation plans
- [Researcher Agent](/docs/engineer/agents/researcher) - Deep dives on specific topics
- [Scout](/docs/engineer/skills/scout) - Explores codebase for context

## Key Takeaway

Planning prevents waste. 10 minutes of research and analysis saves hours of refactoring when you discover you picked the wrong approach halfway through implementation.
