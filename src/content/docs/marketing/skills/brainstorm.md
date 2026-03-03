---
title: "ckm:brainstorm"
description: "Solution brainstorming with trade-off analysis, approach comparison, and structured decision-making before implementation."
section: marketing
kit: marketing
category: skills
order: 112
---

# `ckm:brainstorm`

> Explore solutions through structured dialogue, compare approaches with trade-offs, and validate decisions before writing a single line of code.

## What This Skill Does

**The Challenge**: Jumping straight into implementation without exploring alternatives creates technical debt, misaligned solutions, and costly rewrites. Teams need a structured way to think through options before committing.

**The Solution**: Brainstorm skill guides structured solution exploration sessions — asking discovery questions, comparing 2-3 approaches with pros/cons, validating assumptions, and producing a documented decision ready for planning. Distinct from `/ckm:brainstorming` (which handles collaborative ideation), this skill focuses on technical decision-making and approach selection.

## Activation

**Implicit**: Activates when user signals readiness for solution exploration before implementation.

**Explicit**: Activate via prompt:
```
Activate brainstorm to explore options for building our notification system
```

Or use slash command:
```
/brainstorm how should we handle file uploads at scale?
```

## Capabilities

### 1. Approach Comparison
Present 2-3 viable solutions with structured trade-off analysis.

**Comparison format**:
```markdown
## Option A: Direct S3 Upload
**Pros**: Simple, no server load, cheap at scale
**Cons**: Presigned URL expiry complexity, CORS setup required
**Effort**: Low (1-2 days)
**Best for**: Files > 5MB, high upload volume

## Option B: Server-side Upload Proxy
**Pros**: Full control, easy auth, virus scanning possible
**Cons**: Server bandwidth cost, potential bottleneck
**Effort**: Medium (2-3 days)
**Best for**: Compliance requirements, file validation needed

**Recommendation**: Option A for current scale, migrate to B if compliance required.
```

### 2. Discovery Questions
Surface hidden requirements before committing to an approach.

**Standard discovery areas**:
- Scale requirements (users, data volume, frequency)
- Security and compliance constraints
- Integration requirements
- Maintenance capacity
- Timeline pressure

### 3. Assumption Validation
Challenge implicit assumptions that affect the chosen approach.

**Common assumption checks**:
- "Will this still work if load 10x?"
- "Does this approach work across all target browsers/platforms?"
- "What happens when this dependency goes down?"

### 4. Decision Documentation
Produce a structured decision record for future reference.

**ADR (Architecture Decision Record) format**:
- Context: What problem are we solving?
- Decision: What approach did we choose?
- Rationale: Why this approach over alternatives?
- Consequences: What trade-offs are we accepting?

## Prerequisites

- Problem statement or feature request to explore
- User available for interactive dialogue
- Constraints known (timeline, budget, tech stack)

## Configuration

No configuration required. Operates through conversational interface.

## Best Practices

**1. Define the problem before exploring solutions**
One sentence problem statement prevents scope creep during exploration.

**2. Compare real alternatives, not strawmen**
Present genuinely viable options. Weak alternatives don't improve decision quality.

**3. Document the rejected options**
Future team members need to understand why option B was rejected, not just why A was chosen.

## Common Use Cases

### Use Case 1: Architecture Decision
**Scenario**: Team debating between REST and GraphQL for new API.

**Workflow**:
1. Discovery: Number of clients? Query complexity? Team expertise?
2. Compare: REST (simple, cacheable, widely understood) vs GraphQL (flexible, over-fetching prevention, learning curve)
3. Validate: "Do we have complex, nested queries?" — If no, REST likely sufficient
4. Document decision with rationale

**Output**: ADR with decision and trade-off rationale.

### Use Case 2: Technology Selection
**Scenario**: Choosing state management library for React app.

**Workflow**:
1. Discovery: App complexity? Team experience? SSR requirements?
2. Compare: Zustand (minimal), Redux Toolkit (structured), TanStack Query (server state)
3. Recommendation: TanStack Query for server state + Zustand for UI state
4. Document approach for team alignment

**Output**: Technology selection document with justification.

## Troubleshooting

**Issue**: Brainstorm session goes in circles
**Solution**: Anchor to constraints. "Given our 2-week timeline and no DevOps support, which option is realistic?"

**Issue**: Too many options to compare
**Solution**: Apply first filter: eliminate options that violate hard constraints. Compare remaining 2-3.

## Related Skills

- [Brainstorming](/docs/marketing/skills/brainstorming) - Collaborative idea exploration
- [Plan](/docs/marketing/skills/plan) - Convert decision to implementation plan
- [Sequential Thinking](/docs/marketing/skills/sequential-thinking) - Step-by-step analysis
- [Problem Solving](/docs/marketing/skills/problem-solving) - Root cause and solution frameworks

## Related Commands

- `/brainstorm` - Start solution exploration
- `/ckm:plan` - Create implementation plan from decision
- `/ckm:sequential-thinking` - Deep single-path analysis
