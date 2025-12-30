---
title: Brainstormer Agent
description: Solution architect and technical advisor for exploring approaches, challenging assumptions, and debating decisions
section: engineer
kit: engineer
category: agents
order: 6
published: true
---

# Brainstormer Agent

Your technical advisor who challenges assumptions, debates approaches, and provides brutally honest assessments before code is written.

## When to Use

- Evaluating multiple architectural approaches with competing trade-offs
- Challenging assumptions about requirements and feasibility
- Debating technical decisions before committing resources
- Need a "second opinion" on complex problems requiring creative solutions

## Key Capabilities

| Capability | Description |
|-----------|-------------|
| Multi-approach analysis | Explores 3-5 valid solutions with detailed pros/cons |
| Assumption challenging | Questions requirements to ensure solving real problems |
| Trade-off evaluation | Assesses complexity, maintenance, performance, cost, technical debt |
| Brutal honesty | Unfiltered assessment: overengineering alerts, risk identification, simpler alternatives |
| YAGNI/KISS/DRY | Applies principles to prevent premature optimization |
| Contextual recommendations | Considers team skills, timeline, budget constraints |

## Common Use Cases

**Startup CTO**: Evaluating API architecture
```bash
/brainstorm [should we use REST API or GraphQL for our mobile app? Team has REST experience, need to ship MVP in 6 weeks]
```

**Tech Lead**: Debating caching strategies
```bash
/brainstorm [API responses are slow. Evaluating Redis cache vs database optimization vs CDN. Current p95 is 800ms, need <200ms]
```

**Product Engineer**: Challenging feature requests
```bash
/brainstorm [stakeholder wants real-time dashboard with WebSockets. Is this necessary or can we use polling?]
```

**Solo Developer**: Planning refactoring
```bash
/brainstorm [monolith is getting messy. Should I split into microservices or improve modular monolith structure first?]
```

**Team Lead**: Assessing feasibility
```bash
/brainstorm [client wants offline-first mobile app with sync. Team has 3 junior devs, 8-week timeline. Realistic?]
```

## Pro Tips

**Provide context upfront**: Team skills, timeline, budget, constraints. Better context = better recommendations.

**Be open to challenges**: Brainstormer will question your assumptions. That's the point. Saves costly mistakes.

**Focus on "Recommendation" section**: If overwhelmed by options, read the final recommendation first, then backtrack for details.

**Use success criteria**: Brainstormer defines measurable criteria (e.g., "p95 <200ms"). Use these to validate decisions later.

**Don't skip "Open Questions"**: Unresolved questions in the output need answers before proceeding.

**Trust YAGNI assessments**: If brainstormer says it's overengineering, it probably is. Build what you need now.

**Follow "Next Steps"**: Output includes actionable next steps. Usually involves `/plan` command for implementation.

## Related Agents

- [Planner Agent](/docs/engineer/agents/planner) - Creates implementation plans after approach is decided
- [Researcher Agent](/docs/engineer/agents/researcher) - Provides data for brainstorming decisions
- [Docs-Manager Agent](/docs/engineer/agents/docs-manager) - Documents architectural decision records

## Key Takeaway

Brainstormer doesn't write code. It saves you from writing the wrong code. Use it before committing to complex architectural decisions. 10 minutes of brainstorming prevents weeks of refactoring.
