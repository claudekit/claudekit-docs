---
title: "ckm:problem-solving"
description: "Systematic problem-solving for complexity blocks, innovation challenges, and cross-functional issues using structured decomposition frameworks."
section: marketing
kit: marketing
category: skills
order: 98
---

> Break through complex problems with structured decomposition, root cause analysis, and systematic solution generation.

## What This Skill Does

**The Challenge**: Complex problems resist simple solutions. Teams get stuck in surface-level fixes, miss root causes, or debate symptoms instead of diagnosing systems. Unstructured problem-solving wastes time and produces low-quality decisions.

**The Solution**: Problem Solving skill applies structured frameworks (5 Whys, MECE decomposition, fishbone analysis, decision matrices) to diagnose root causes, generate solution spaces, and evaluate options systematically.

## Activation

**Implicit**: Activates when user signals being blocked, stuck, or needing a systematic approach to a complex challenge.

**Explicit**: Activate via prompt:
```
Activate problem-solving skill to diagnose why our user retention dropped 15% last month
```

## Capabilities

### 1. Root Cause Analysis
Systematically trace symptoms to underlying causes.

**5 Whys template**:
```
Problem: User retention dropped 15%
Why 1: Users aren't returning after onboarding
Why 2: They didn't reach the activation milestone
Why 3: The activation step has a UX blocker
Why 4: We changed the UI without user testing
Why 5: No process for UI change validation
Root cause: Missing change management process
```

### 2. MECE Decomposition
Break complex problems into mutually exclusive, collectively exhaustive parts.

**Decomposition structure**:
```
Retention problem
├── Acquisition quality (wrong users?)
├── Onboarding experience (too much friction?)
├── Product value (promise not delivered?)
└── External factors (competitor launched feature?)
```

### 3. Solution Matrix Evaluation
Score solutions against impact and feasibility criteria.

**Scoring matrix**:
| Solution | Impact (1-5) | Feasibility (1-5) | Score |
|----------|-------------|-------------------|-------|
| Fix UX blocker | 5 | 4 | 20 |
| Add tooltips | 3 | 5 | 15 |
| Redesign onboarding | 5 | 2 | 10 |

### 4. Decision Documentation
Document problem diagnosis, solution rationale, and next steps.

**Decision doc format**: Problem → Root cause → Options considered → Decision → Success metrics

## Prerequisites

- Clear problem statement with measurable symptoms
- Relevant data or context about the situation
- Stakeholders identified who own the problem

## Configuration

No tools required. Works through structured conversational analysis.

## Best Practices

**1. Define the problem before solving it**
Resist jumping to solutions. Spend 30% of time on diagnosis, 70% on solution design.

**2. Separate symptoms from causes**
Retention drop is a symptom. Use 5 Whys to find the actual cause before picking a solution.

**3. Generate 3+ solutions before evaluating**
Premature solution narrowing leads to suboptimal choices. Always compare alternatives.

## Common Use Cases

### Use Case 1: Marketing Metric Decline
**Scenario**: Conversion rate dropped unexpectedly, unclear why.

**Workflow**:
1. Define symptom with data (CVR was 3.2%, now 2.1%)
2. MECE decomposition: traffic quality, landing page, offer, pricing
3. Hypothesis generation for each branch
4. Data check to validate/eliminate hypotheses
5. Root cause identified, solution matrix built

**Output**: Root cause report with prioritized fix list.

### Use Case 2: Team Productivity Block
**Scenario**: Engineering and marketing misaligned on feature priorities.

**Workflow**:
1. Define the conflict precisely (feature requests vs roadmap capacity)
2. Fishbone: Identify process, communication, and incentive misalignments
3. Generate process solutions (shared OKRs, weekly sync, prioritization framework)
4. Score by ease of adoption and impact
5. Recommend minimum viable process change

**Output**: Alignment process proposal with quick win and long-term fix.

## Troubleshooting

**Issue**: Root cause analysis goes circular
**Solution**: Each "why" must produce a different answer. If repeating, you've found the root cause or hit a constraint boundary.

**Issue**: Team disagrees on root cause
**Solution**: Data-validate each hypothesis. Disagreements on root cause are often disagreements on data interpretation.

## Related Skills

- [Sequential Thinking](/docs/marketing/skills/sequential-thinking) - Structured step-by-step analysis
- [Brainstorming](/docs/marketing/skills/brainstorming) - Solution ideation and exploration
- [Analytics](/docs/marketing/skills/analytics) - Data-driven diagnosis

## Related Commands

- `/ckm:problem-solving` - Systematic problem analysis
- `/ckm:sequential-thinking` - Step-by-step reasoning
- `/ckm:brainstorm` - Explore solution space
