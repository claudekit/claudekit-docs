---
title: /ask
description: "Documentation for /ask
description:
section: docs
category: commands/core
order: 3
published: true"
section: docs
category: commands/core
order: 3
published: true
---

# /ask

Strategic architectural consultation command. Provides expert guidance on technical decisions, system design, and architectural challenges without implementation.

## Syntax

```bash
/ask [technical-question]
```

## When to Use

- **Architecture Decisions**: Choosing between design patterns or system architectures
- **Technology Selection**: Evaluating frameworks, databases, or infrastructure choices
- **Design Challenges**: Solving complex technical problems with multiple trade-offs
- **Scalability Planning**: Assessing performance and growth considerations
- **Risk Assessment**: Identifying potential issues before implementation

## Quick Example

```bash
/ask [should we use microservices or monolithic architecture for a SaaS platform with 10k users?]
```

**Output**:
```
Architecture Analysis:
- Current scale: 10k users suggests moderate complexity
- Team size and expertise matter for microservices
- Deployment and monitoring overhead considerations

Design Recommendations:
1. Start with Modular Monolith
   - Faster development velocity
   - Lower operational complexity
   - Clear module boundaries for future extraction

Technology Guidance:
- Use domain-driven design principles
- Implement API-first architecture
- Plan for horizontal scaling

Implementation Strategy:
Phase 1: Modular monolith with clear boundaries
Phase 2: Extract high-traffic modules if needed
Phase 3: Evaluate microservices at 50k+ users

Next Actions:
- Define module boundaries in code
- Implement monitoring early
- Plan database schema for future separation
```

**Result**: Strategic guidance received, no code changed, ready to implement with confidence.

## Arguments

- `[technical-question]`: Your architecture question, design challenge, or technical decision requiring expert consultation

## What Happens

When you run this command:

1. **Problem Analysis**: System analyzes your question and gathers architectural context from project docs
2. **Expert Consultation**: Four specialized advisors provide perspectives:
   - **Systems Designer**: Evaluates system boundaries, interfaces, component interactions
   - **Technology Strategist**: Recommends stacks, frameworks, architectural patterns
   - **Scalability Consultant**: Assesses performance, reliability, growth considerations
   - **Risk Analyst**: Identifies issues, trade-offs, mitigation strategies
3. **Architecture Synthesis**: Combines insights into comprehensive architectural guidance
4. **Strategic Validation**: Ensures recommendations align with business goals and constraints

**Agents Invoked**: Systems Designer, Technology Strategist, Scalability Consultant, Risk Analyst

**Context Used**: Automatically references `./docs` project documentation including:
- `project-overview-pdr.md` - Product requirements and goals
- `code-standards.md` - Development standards
- `system-architecture.md` - Current architecture
- `deployment-guide.md` - Infrastructure constraints

## Complete Example

### Scenario: Database Choice for Analytics Feature

```bash
/ask [we need to add analytics tracking for user behavior. Should we use PostgreSQL with TimescaleDB, ClickHouse, or a separate analytics service like Mixpanel?]
```

**Response Breakdown**:

**1. Architecture Analysis**
```
Current Context:
- Existing PostgreSQL database for transactional data
- ~10k daily active users with growth to 100k projected
- Team familiar with SQL, limited DevOps resources
- Real-time dashboard requirements

Key Considerations:
- Data volume: ~1M events/day currently, 10M projected
- Query patterns: Time-series aggregations, user funnels
- Budget: Prefer self-hosted to control costs
- Compliance: GDPR requires data residency control
```

**2. Design Recommendations**
```
Option A: PostgreSQL + TimescaleDB (Recommended)
Pros:
- Leverage existing PostgreSQL expertise
- Single database reduces operational complexity
- Native SQL support for analytics queries
- GDPR compliance through self-hosting

Cons:
- May require tuning for high-volume writes
- Complex queries impact transactional performance

Option B: ClickHouse
Pros:
- Superior performance for analytical queries
- Handles 10M+ events/day easily

Cons:
- New technology to learn and maintain
- Separate infrastructure increases complexity
- SQL dialect differences

Option C: Mixpanel
Pros:
- Zero operational overhead
- Rich analytics UI out of box

Cons:
- Monthly cost: $999+ at 100k users
- Limited GDPR control
- Vendor lock-in
```

**3. Technology Guidance**
```
Recommended Approach: TimescaleDB Extension
1. Add TimescaleDB to existing PostgreSQL
2. Create separate schema for analytics
3. Use connection pooling (PgBouncer)
4. Implement write buffering via Redis

Architecture Pattern:
[App] → [Redis Buffer] → [PostgreSQL/TimescaleDB]
                              ↓
                        [Analytics Dashboard]
```

**4. Implementation Strategy**
```
Phase 1 (Week 1-2): Proof of Concept
- Install TimescaleDB extension
- Create hypertables for event tracking
- Test write performance with sample data
- Benchmark query performance

Phase 2 (Week 3-4): Production Integration
- Implement Redis write buffer
- Create analytics API layer
- Add monitoring (query performance, disk usage)
- Set up automated retention policies

Phase 3 (Month 2): Dashboard Development
- Build real-time dashboards
- Implement user funnel queries
- Add export capabilities

Migration Path if Needed:
- ClickHouse migration feasible if volume exceeds 50M events/day
- Data export for compliance always available
```

**5. Next Actions**
```
1. Run benchmark: Load 1M sample events, test query performance
2. Review team capacity: Confirm PostgreSQL tuning expertise
3. Cost analysis: Compare TimescaleDB self-hosting vs Mixpanel at scale
4. Proof of concept: Build simple event tracking in dev environment
5. Decision checkpoint: Validate performance meets requirements before full build
```

**Additional Considerations**:
```
- If you need /scout to find existing database configs, I can call it
- Consider data retention policies (GDPR 2-year limit)
- Plan for gradual rollout to validate write performance
```

## Common Use Cases

### Technology Stack Selection

```bash
/ask [choosing between Next.js, Remix, and Astro for documentation site with AI chat]
```

Gets guidance on framework selection based on SSR, static generation, and interactive component needs.

### Scaling Strategy

```bash
/ask [our API response time increased to 2s under load. Should we add caching, scale horizontally, or optimize queries?]
```

Receives analysis of bottlenecks and prioritized optimization strategy.

### Integration Architecture

```bash
/ask [how should we integrate payment processing: direct Stripe integration or payment gateway abstraction layer?]
```

Gets trade-off analysis between simplicity and vendor flexibility.

### Security Design

```bash
/ask [what's the best approach for API authentication: JWT, session-based, or API keys?]
```

Receives security assessment and recommendations based on use case.

## Best Practices

### Ask Strategic Questions

✅ **Good:**
```bash
/ask [should we use WebSockets or Server-Sent Events for real-time notifications?]
/ask [how to structure microservices boundaries for e-commerce domain?]
/ask [what database architecture for multi-tenant SaaS with data isolation?]
```

❌ **Too Implementation-Focused:**
```bash
/ask [how to write a function that connects to Redis?]
/ask [what's the syntax for PostgreSQL indexes?]
/ask [debug this error message]
```

### Provide Context

Include relevant constraints:
```bash
/ask [
  Need caching solution for:
  - 100k daily users
  - Budget: $200/month
  - Team knows Redis basics
  - Must support complex invalidation
  Should we use Redis, Memcached, or in-memory cache?
]
```

### Review Project Docs First

The `/ask` command automatically reads `./docs` but you can help by:
1. Keeping `system-architecture.md` updated
2. Documenting constraints in `project-overview-pdr.md`
3. Updating `code-standards.md` with preferences

## What /ask DOES NOT Do

- ❌ Write implementation code
- ❌ Fix bugs (use `/debug` or `/fix:*` instead)
- ❌ Deploy infrastructure
- ❌ Make final decisions (you decide, it advises)

## Integration with Workflow

### Before Planning

```bash
# 1. Get architectural guidance
/ask [best approach for background job processing?]

# 2. Review recommendations
# [Advisor output received]

# 3. Create implementation plan
/plan [implement background jobs using Bull + Redis]

# 4. Implement
/cook [add background job processing]
```

### During Code Review

```bash
# 1. Review PR
git diff main

# 2. Question design choice
/ask [is this service layer abstraction over-engineered for CRUD operations?]

# 3. Adjust based on guidance
# [Make changes if recommended]
```

### Can Call /scout Automatically

If `/ask` needs more context about your codebase:

```
Architecture Analysis:
Need to understand current database setup...

Invoking /scout to find database configurations...
[Scout results integrated into analysis]
```

You can also call it explicitly:
```bash
# First scout the codebase
/scout [find all API authentication implementations] 3

# Then ask architectural question
/ask [should we consolidate these auth patterns or keep them separate?]
```

## Common Issues

### Too Vague Questions

**Problem**: "How should I build this feature?"

**Solution**: Be specific about the challenge
```bash
/ask [what's the best way to handle file uploads over 100MB with progress tracking and resume capability?]
```

### Missing Context

**Problem**: Advice doesn't fit your constraints

**Solution**: Include constraints in question
```bash
/ask [authentication approach for mobile app with requirement: offline-first, sync when online]
```

### Implementation Questions

**Problem**: Asking about syntax or debugging

**Solution**: Use appropriate commands
- Code syntax: Just ask directly
- Bugs: `/debug [issue]`
- Implementation: `/plan` then `/code`

## Related Commands

- [/scout](/docs/commands/core/scout) - Search codebase before asking architectural questions
- [/plan](/docs/commands/core/plan) - Create implementation plan after receiving guidance
- [/debug](/docs/commands/core/debug) - Investigate technical issues (not architecture)

---

**Key Takeaway**: `/ask` provides strategic architectural consultation from expert advisors, helping you make informed technical decisions before implementation begins.
