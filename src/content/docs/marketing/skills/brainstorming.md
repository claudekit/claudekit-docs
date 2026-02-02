---
title: "Brainstorming"
description: "Collaborative solution exploration and technical decision-making through structured dialogue and approach validation."
section: marketing
category: skills
order: 9
---
> Transform ideas into validated designs through structured dialogue before any implementation.

## What This Skill Does

**Challenge**: Teams jump into implementation without exploring alternatives, validating assumptions, or documenting decisions. This leads to technical debt and misaligned solutions.

**Solution**: The Brainstorming skill enforces structured ideation sessions with YAGNI/KISS/DRY principles, approach comparisons, and decision documentation. DO NOT implement until explicit user confirmation.

## Activation

**Implicit**: Activates when user signals brainstorming mode ("let's explore", "what are our options", "brainstorm with me").

**Explicit**: Activate by name when needed: "Activate brainstorming skill" or use /brainstorm command

## Capabilities

### 1. Structured Discovery
Sequential questions to understand real requirements vs stated requests.

**Discovery Includes**:
- Purpose and success criteria
- Constraints (technical, time, resources)
- Hidden assumptions and edge cases
- Non-functional requirements (scale, security, performance)

### 2. Approach Comparison
Present 2-3 viable solutions with tradeoffs, pros/cons, and complexity assessment.

**Example Comparison**:
```markdown
## Approach A: Serverless with Cloudflare Workers
**Pros**: Global edge deployment, auto-scaling, $0 at low volume
**Cons**: 50ms CPU limit, vendor lock-in, debugging complexity
**Complexity**: Low (2-3 days)

## Approach B: Traditional Node.js with Docker
**Pros**: Full control, easy debugging, portable
**Cons**: Requires server management, fixed costs
**Complexity**: Medium (4-5 days)

**Recommendation**: Approach A for MVP (test market fit), migrate to B if usage scales.
```

### 3. Validation Gates
Break design into segments, await user approval before continuing. Prevents overly long conversations.

**Segment Topics**:
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

**1. One Question At A Time**
Avoid overwhelming user with 10 questions upfront. Ask sequentially based on answers.

**2. Multiple Choice Preferred**
"Should we use A, B, or C?" is easier to answer than open-ended questions.

**3. Challenge Assumptions Constructively**
"Have you considered X?" beats "That won't work because Y".

## Common Use Cases

### Use Case 1: Feature Design Session
**Scenario**: User wants to add "user authentication" to app.

**Workflow**:
1. **Discovery**: Which auth methods? (email/password, OAuth, SSO?)
2. **Constraints**: Security requirements? Compliance needs?
3. **Compare Approaches**:
   - Auth0 (turnkey, $25/month, vendor dependency)
   - Better Auth (open source, self-hosted, more control)
   - Custom JWT (full control, higher maintenance)
4. **Validation**: Review architecture of chosen approach
5. **Summary**: Document decision with rationale

**Outcome**: Markdown design doc ready for implementation planning.

### Use Case 2: Technical Debt Assessment
**Scenario**: Monolith performance degrading, considering microservices.

**Workflow**:
1. **Discovery**: What specific bottlenecks? Scale requirements?
2. **Alternatives**:
   - Optimize monolith (vertical scaling, caching)
   - Extract critical services (hybrid)
   - Full microservices migration (3-6 month effort)
3. **Risk Assessment**: What could go wrong with each?
4. **Recommendation**: Start with optimization + extract 1 service as proof of concept

**Outcome**: Decision matrix with recommendation and next steps.

## Troubleshooting

**Issue**: Session stuck, no progress
**Solution**: Ask user to clarify core problem. Reset to Phase 1 (Discovery).

**Issue**: User keeps adding requirements
**Solution**: Acknowledge additions, but focus on MVP first. Document nice-to-have features separately.

**Issue**: Conversation becomes too technical
**Solution**: Use analogies and examples. Avoid jargon unless user shows familiarity.

## Related Skills

- [Planning](/docs/marketing/skills) - Convert brainstorm output to implementation plan
- [Research](/docs/marketing/skills/research) - Deep technical research
- [Problem Solving](/docs/marketing/skills) - Advanced decision-making frameworks

## Related Commands

- `/brainstorm` - Start brainstorming session
- `/plan` - Create plan from brainstorm output
- `/ask` - General questions and advice
