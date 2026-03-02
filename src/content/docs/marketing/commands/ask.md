---
title: "/ckm:ask"
description: "Expert architectural consultation with 4 specialized advisors for technical decisions, system design, and scalability planning"
section: marketing
category: commands
order: 19
published: true
---
> Technical consultation, not implementation

## Quick Start

```bash
/ckm:ask How should we structure our email automation system?
```

**What happens**:
1. 4 expert advisors analyze your question
2. Systems Designer evaluates architecture
3. Technology Strategist recommends tech stack
4. Scalability Consultant assesses growth
5. Risk Analyst identifies trade-offs

**Output**: Architectural analysis (no implementation)

## Syntax

```bash
/ckm:ask [technical-question]
```

## Example

**Input**:
```bash
/ckm:ask Should we use microservices or monolith for our marketing automation platform?
```

**Expected Output**:
```markdown
✓ 4 architectural advisors consulted

---
# Architecture Analysis: Microservices vs Monolith

## SYSTEMS DESIGNER PERSPECTIVE

Current context:
- Team size: 3-5 developers
- Traffic: ~10K users
- Complexity: Medium (email, campaigns, analytics)

Monolith recommendation:
- Start with modular monolith
- Clear module boundaries (email/, campaigns/, analytics/)
- Easy to split later if needed

Why not microservices now:
- Operational overhead too high for team size
- Premature optimization
- Deployment complexity unnecessary at this scale

## TECHNOLOGY STRATEGIST PERSPECTIVE

Recommended stack (modular monolith):
- Next.js app with clear folder structure
- Shared database with logical separation
- Queue system (BullMQ) for async tasks
- Redis for caching and sessions

Migration path to microservices (if needed):
1. Ensure clean module boundaries now
2. Use dependency injection
3. When traffic > 100K users, consider splitting
4. Split email service first (highest load)

## SCALABILITY CONSULTANT PERSPECTIVE

Monolith can handle:
- 100K+ users
- 1M+ emails/month
- Real-time analytics

Scale vertically first:
- Add Redis caching (10x performance)
- Database indexing (5x query speed)
- Queue workers (async processing)

Microservices needed when:
- Different modules have vastly different scale needs
- Teams > 20 developers
- Independent deployment required

## RISK ANALYST PERSPECTIVE

Monolith risks:
⚠ Tightly coupled code (mitigate with modules)
⚠ Single point of failure (mitigate with redundancy)
✓ Lower risk for small teams

Microservices risks:
🔴 Operational complexity (monitoring, debugging)
🔴 Network latency between services
🔴 Data consistency challenges
🔴 Deployment coordination

## RECOMMENDATION

**Start with modular monolith.**

YAGNI principle applies: You don't need microservices yet.

Build with these principles:
1. Clear module boundaries
2. Dependency injection
3. Async processing via queues
4. Horizontal scaling readiness

When to reconsider:
- Traffic > 100K users
- Team > 15 developers
- Specific module needs independent scaling

---

Next steps:
/ckm:plan Design modular monolith architecture
/ckm:cook Implement email module with clear boundaries
```

## 4 Expert Advisors

### Systems Designer
Evaluates:
- System boundaries
- Component interactions
- Data flows
- Integration patterns

### Technology Strategist
Recommends:
- Tech stack
- Frameworks
- Architecture patterns
- Industry best practices

### Scalability Consultant
Assesses:
- Performance implications
- Growth considerations
- Scaling strategies
- Bottleneck identification

### Risk Analyst
Identifies:
- Trade-offs
- Potential issues
- Mitigation strategies
- Decision implications

## Principles

All recommendations honor:
- **YAGNI**: You Aren't Gonna Need It
- **KISS**: Keep It Simple, Stupid
- **DRY**: Don't Repeat Yourself

## When to Use

### Strategic Decisions
```bash
/ckm:ask Should we use SQL or NoSQL?
/ckm:ask REST vs GraphQL vs tRPC?
/ckm:ask Authentication strategy for multi-tenant SaaS?
```

### Architecture Questions
```bash
/ckm:ask How to structure campaign automation system?
/ckm:ask Best approach for real-time analytics?
/ckm:ask Caching strategy for high-traffic API?
```

### Technology Choices
```bash
/ckm:ask Which email service provider?
/ckm:ask Best state management for dashboard?
/ckm:ask Database choice for time-series data?
```

## NOT For

- Implementation (use /ckm:plan or /ckm:cook)
- Debugging (use /ckm:fix or /debug)
- Code review (use /ckm:review)

## Related Commands

- [/ckm:brainstorm](/docs/marketing/commands/brainstorm) - Interactive discussion
- [/ckm:plan](/docs/marketing/commands/plan) - Implementation planning
- [/research](/docs/marketing/commands) - Market/tech research

---

**Expert advice. No implementation.** Architectural guidance from 4 specialists.
