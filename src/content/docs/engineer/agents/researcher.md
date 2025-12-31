---
title: Researcher Agent
description: Multi-source technology research with comprehensive documentation analysis and best practices discovery
section: engineer
kit: engineer
category: agents
order: 2
published: true
---

# Researcher Agent

Multi-source technology intelligence that explores docs, videos, GitHub repos, and articles in parallel to deliver production-ready implementation insights.

## When to Use

- **New tech evaluation** - Before adopting frameworks, libraries, or tools
- **Pre-implementation research** - Finding official docs, security concerns, best practices
- **Technical comparison** - Evaluating multiple approaches with pros/cons analysis
- **Deep dive validation** - Cross-checking implementation patterns across 10+ sources

## Key Capabilities

| Capability | Description | Tools Used |
|-----------|-------------|-----------|
| **Parallel Search** | Query fan-out across Google, YouTube, websites, GitHub simultaneously | SearchAPI MCP, search_youtube, WebFetch |
| **Video Analysis** | Extract technical insights from tutorials with timestamps | VidCap MCP, Gemini Vision |
| **Repo Analysis** | Find implementation patterns in popular libraries | repomix, GitHub search |
| **Doc Synthesis** | Structured markdown reports with security/performance sections | Multi-source validation |

## Common Use Cases

**Who**: Product teams choosing payment gateway
**Prompt**: `/plan research Stripe vs PayPal integration for SaaS billing`
**Output**: 15-page comparison report with security audit, pricing, code examples

**Who**: DevOps engineer evaluating container orchestration
**Prompt**: `/plan investigate Kubernetes vs Docker Swarm for microservices`
**Output**: Architecture analysis, scaling patterns, operational complexity breakdown

**Who**: Frontend dev implementing real-time features
**Prompt**: `/plan research WebSocket best practices for chat app`
**Output**: Library comparison, connection handling patterns, production configs

**Who**: Security-focused startup
**Prompt**: `/plan research OAuth2 implementation vulnerabilities and mitigations`
**Output**: Security audit, common pitfalls, hardening checklist with sources

**Who**: Tech lead architecting data pipeline
**Prompt**: `/plan compare Apache Kafka vs RabbitMQ for event streaming`
**Output**: Performance benchmarks, use case fit, operational considerations

## How It Works

```bash
# Trigger research via planning command
/plan [add Stripe payment integration]
```

**What happens**:

1. **Query Fan-Out** - Spawns parallel searches:
   - Google: "Stripe Node.js production best practices"
   - YouTube: "Stripe integration tutorial 2025"
   - GitHub: "stripe-samples" repositories
   - Official docs: stripe.com/docs

2. **Multi-Source Analysis** - Researcher validates findings across:
   - 5+ documentation sites
   - 4+ video tutorials with transcripts
   - 6+ GitHub repos (popular implementations)
   - 10+ articles/discussions

3. **Synthesis** - Generates structured markdown report:
   - Executive summary with recommendation
   - Security considerations (CRITICAL section)
   - Performance implications
   - Implementation guide with code
   - 15+ cited sources for verification

**Output**: `./plans/research/YYMMDD-stripe-integration.md`

## Report Structure

```markdown
# Research Report: [Technology]

## Executive Summary
- Key recommendation with confidence level
- 3-5 critical takeaways

## Integration Approaches
- Option A vs B vs C comparison
- Pros/cons table
- "Best for" recommendations

## Security Best Practices
✅ Critical requirements
⚠ Common vulnerabilities

## Performance Considerations
- Metrics: load time, processing speed
- Optimization strategies

## Implementation Guide
- Minimal working example (TypeScript)
- Step-by-step setup

## Sources (15+)
- Docs, videos, repos, articles

## Next Steps
- 5-step action plan with time estimates
```

## Pro Tips

**Be specific in research requests** - "Stripe with Next.js App Router" beats "payment integration"

**Leverage security sections** - Researcher surfaces CVEs and common vulnerabilities automatically

**Check source dates** - Report includes "Last Updated" for each source; flag outdated info

**Use for architecture decisions** - Research 2-3 alternatives before committing to stack

**Share with planner** - Feed research reports directly to planner agent for implementation plans

## Related Agents

- [Planner Agent](/docs/engineer/agents/planner) - Converts research findings into step-by-step implementation plans
- [Brainstormer Agent](/docs/engineer/agents/brainstormer) - Debates technical trade-offs discovered in research
- [Scout Agent](/docs/engineer/agents/scout) - Locates existing implementations in your codebase

## Key Takeaway

Researcher eliminates "tutorial hell" by validating 15+ sources in parallel, surfacing security risks, and delivering production-ready intelligence before you write a single line of code. Part of ClaudeKit $99 toolkit.
