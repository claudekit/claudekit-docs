---
title: "ckm:sequential-thinking"
description: "Structured step-by-step analysis with built-in revision capability for complex reasoning, debugging, and multi-step decision-making."
section: marketing
kit: marketing
category: skills
order: 102
---

> Work through complex problems one step at a time with the ability to revise earlier reasoning as new information emerges.

## What This Skill Does

**The Challenge**: Complex problems require sequential reasoning where each step depends on previous conclusions. Unstructured thinking skips steps, makes leaps, and produces brittle analysis that breaks when assumptions are wrong.

**The Solution**: Sequential Thinking skill enforces explicit step-by-step reasoning with numbered thoughts, branching support, and revision loops. Each thought can reference, update, or branch from previous thoughts — creating an auditable reasoning chain.

## Activation

**Implicit**: Activates when analyzing multi-step problems, debugging complex issues, or reasoning through architectural decisions.

**Explicit**: Activate via prompt:
```
Activate sequential-thinking skill to debug why our webhook processing is inconsistent
```

## Capabilities

### 1. Numbered Thought Chains
Build explicit reasoning sequences with clear progression.

**Thought structure**:
```
Thought 1: Observe the symptom (webhook fails 20% of the time)
Thought 2: Hypothesize causes (timing? signature? payload size?)
Thought 3: Test hypothesis A (check timing patterns in logs)
Thought 4: Revise Thought 2 — timing is not the cause, eliminate
Thought 5: Test hypothesis B (signature verification code)
Thought 6: Found: signature check uses wrong encoding
Conclusion: Fix charset encoding in signature verification
```

### 2. Revision Loops
Mark thoughts as revised when new evidence contradicts earlier reasoning.

**Revision notation**:
- `Thought 4 (revises Thought 2)` — explicit revision
- `Branch from Thought 3` — explore alternative path
- `Confirmed by Thought 5` — reinforce earlier conclusion

### 3. Confidence Tracking
Label each thought with confidence level to surface uncertainty.

**Confidence levels**:
- High — Confirmed by data or evidence
- Medium — Reasonable assumption, needs verification
- Low — Speculation, flag as hypothesis

### 4. Summary Synthesis
Consolidate reasoning chain into actionable conclusions.

**Summary format**:
1. Problem statement
2. Key findings (numbered thoughts that led to conclusion)
3. Revised assumptions
4. Final conclusion
5. Next steps

## Prerequisites

- Clear problem statement
- Available data or context for reasoning
- User available to provide feedback on reasoning steps

## Configuration

No tools required. Works through conversational reasoning interface.

## Best Practices

**1. One thought per step**
Resist combining multiple insights into one thought. Granularity enables better revision.

**2. Label uncertainty explicitly**
"I'm not sure, but..." is valuable. It signals where to seek validation.

**3. Revise rather than contradict**
When evidence disproves a thought, mark it revised with reason. Don't delete — the revision path itself is informative.

## Common Use Cases

### Use Case 1: Production Bug Investigation
**Scenario**: API endpoint returns 500 errors intermittently, cause unknown.

**Workflow**:
1. Thought 1: Collect symptoms (frequency, pattern, affected endpoints)
2. Thought 2: Hypothesize (DB timeout? Memory leak? Race condition?)
3. Thought 3: Check DB connection pool metrics
4. Thought 4: Revise — DB pool is fine, eliminate
5. Thought 5: Check concurrent request handling
6. Thought 6: Found race condition in singleton initialization
7. Conclusion: Add mutex lock to initialization code

**Output**: Traced diagnosis with root cause identified.

### Use Case 2: Architecture Decision
**Scenario**: Choosing between microservices and modular monolith for new product.

**Workflow**:
1. Thought 1: Team size and operational capacity
2. Thought 2: Expected scale timeline (18-month projection)
3. Thought 3: Deployment complexity tolerance
4. Thought 4: Revise scale estimate — actual growth slower than projected
5. Thought 5: Microservices overhead not justified at current scale
6. Conclusion: Modular monolith with clean domain boundaries

**Output**: Architecture decision with reasoning chain documented.

## Troubleshooting

**Issue**: Reasoning chain becomes too long
**Solution**: Synthesize after every 5-7 thoughts. Create sub-conclusions to reduce cognitive load.

**Issue**: Stuck in circular reasoning
**Solution**: Identify the assumption being restated. Challenge it directly or seek external data to break the loop.

## Related Skills

- [Problem Solving](/docs/marketing/skills/problem-solving) - Root cause analysis frameworks
- [Brainstorming](/docs/marketing/skills/brainstorming) - Solution exploration
- [Research](/docs/marketing/skills/research) - Evidence gathering for reasoning

## Related Commands

- `/ckm:sequential-thinking` - Structured reasoning workflow
- `/ckm:problem-solving` - Problem decomposition
- `/ckm:debug` - Debugging with sequential analysis
