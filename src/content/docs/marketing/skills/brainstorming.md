---
title: "Brainstorming"
description: "Collaborative solution exploration and technical decision-making through structured dialogue and approach validation."
section: marketing
category: skills
order: 9
---

> Transform ideas into validated designs through structured dialogue before any implementation.

## What This Skill Does

**The Challenge**: Teams jump to implementation without exploring alternatives, validating assumptions, or documenting decisions. This leads to technical debt and misaligned solutions.

**The Solution**: Brainstorming skill enforces structured ideation sessions with YAGNI/KISS/DRY principles, approach comparison, and decision documentation. NO implementation until explicit user confirmation.

## Activation

**Implicit**: Activates when user signals ideation mode ("let's explore", "what are our options", "brainstorm with me").

**Explicit**: `/skill:add brainstorming` or `/brainstorm`

## Capabilities

### 1. Structured Discovery
Sequential questioning to understand true requirements vs initial request.

**Discovery covers**:
- Purpose and success criteria
- Constraints (technical, time, resources)
- Hidden assumptions and edge cases
- Non-functional requirements (scale, security, performance)

### 2. Approach Comparison
Present 2-3 viable solutions with trade-offs, pros/cons, and complexity assessment.

**Example comparison**:
```markdown
## Approach A: Serverless with Cloudflare Workers
**Pros**: Global edge deployment, auto-scaling, $0 at low volume
**Cons**: 50ms CPU limit, vendor lock-in, debugging complexity
**Complexity**: Low (2-3 days)

## Approach B: Traditional Node.js with Docker
**Pros**: Full control, easier debugging, portable
**Cons**: Requires server management, fixed costs
**Complexity**: Medium (4-5 days)

**Recommendation**: Approach A for MVP (test market fit), migrate to B if usage scales.
```

### 3. Validation Gates
Break design into segments, wait for user approval before continuing. Prevents runaway conversations.

**Segment topics**:
- Architecture and data flow
- Component breakdown
- Error handling strategy
- Security and performance considerations

## Prerequisites

- Clear problem statement or goal
- User available for interactive dialogue

## Configuration

No configuration needed. Skill operates through conversational interface.

## Best Practices

**1. One question at a time**
Avoid overwhelming users with 10 questions upfront. Ask sequentially based on answers.

**2. Multiple-choice preferred**
"Should we use A, B, or C?" is easier to answer than open-ended questions.

**3. Challenge assumptions constructively**
"Have you considered X?" beats "That won't work because Y".

## Common Use Cases

### Use Case 1: Feature Design Session
**Scenario**: User wants to add "user authentication" to app.

**Workflow**:
1. **Discovery**: What authentication methods? (email/password, OAuth, SSO?)
2. **Constraints**: Security requirements? Compliance needs?
3. **Approach comparison**:
   - Auth0 (turnkey, $25/mo, vendor dependency)
   - Better Auth (open-source, self-hosted, more control)
   - Custom JWT (full control, higher maintenance)
4. **Validation**: Review chosen approach's architecture
5. **Summary**: Document decision with rationale

**Output**: Markdown design doc ready for implementation planning.

### Use Case 2: Technical Debt Evaluation
**Scenario**: Monolith performance degrading, considering microservices.

**Workflow**:
1. **Discovery**: What specific bottlenecks? Scale requirements?
2. **Alternative approaches**:
   - Optimize monolith (vertical scaling, caching)
   - Extract critical services only (hybrid)
   - Full microservices migration (3-6 month effort)
3. **Risk assessment**: What could go wrong with each?
4. **Recommendation**: Start with optimization + extract 1 service as proof of concept

**Output**: Decision matrix with recommendation and next steps.

## Troubleshooting

**Issue**: Session feels stuck, no progress
**Solution**: Ask user to clarify the core problem. Reset to Phase 1 (Discovery).

**Issue**: User keeps adding requirements
**Solution**: Acknowledge additions, but focus on MVP first. Document nice-to-haves separately.

**Issue**: Conversation becoming too technical
**Solution**: Use analogies and examples. Avoid jargon unless user demonstrates familiarity.

## Related Skills

- [Planning](/docs/marketing/skills/planning) - Convert brainstorming output to implementation plan
- [Research](/docs/marketing/skills/research) - Deep-dive technical research
- [Problem Solving](/docs/marketing/skills/problem-solving) - Advanced decision frameworks

## Related Commands

- `/brainstorm` - Start brainstorming session
- `/plan` - Create plan from brainstorm output
- `/ask` - General questions and advice
