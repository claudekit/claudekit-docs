---
title: "/brainstorm"
description: "Collaborative AI-powered brainstorming sessions for strategy, solutions, and decision-making with structured 5-phase process"
section: marketing
category: commands
order: 12
published: true
---

> Collaborative solution design without implementation

## Quick Start

```bash
/brainstorm how to improve email open rates
```

**What happens**:
1. AI asks clarifying questions (one at a time)
2. Explores 2-3 alternatives with trade-offs
3. Discusses pros/cons collaboratively
4. Reaches consensus
5. Creates summary report

**Output**: Brainstorm report (no implementation)

## What It Does

### Brainstorming ONLY
- This command does NOT implement anything
- It helps you think through problems
- Generates alternatives and trade-offs
- Creates summary for future reference

### Use Cases
- Strategic decisions
- Architecture choices
- Marketing campaigns
- Feature prioritization
- Problem-solving sessions

## Syntax

```bash
/brainstorm [question or topic]
```

## Example: Improve Email Open Rates

**Input**:
```bash
/brainstorm how can we improve email open rates
```

**AI Process**:
```
brainstorm: What's your current open rate?
You: 18%

brainstorm: What's your industry average?
You: 21%

brainstorm: What have you tried already?
You: A/B testing subject lines, send time optimization

brainstorm: Who is your target audience?
You: SaaS founders and product managers

---

I've identified 3 approaches. Let me share them:

**Option 1: Hyper-Personalization**
Pros:
- Proven to increase open rates 15-30%
- Works well for B2B audiences
- Builds stronger relationships

Cons:
- Requires data collection
- More complex to implement
- Takes time to set up

Trade-offs: Higher effort, higher reward

**Option 2: Value-First Subject Lines**
Pros:
- Quick to implement
- No technical changes needed
- Can test immediately

Cons:
- Limited upside (5-10% improvement)
- Requires copywriting skills
- May not differentiate from competitors

Trade-offs: Low effort, moderate reward

**Option 3: Segmentation + Timing**
Pros:
- Addresses two factors at once
- Sustainable long-term
- Improves overall engagement

Cons:
- Requires email platform features
- Need enough data for segments
- Ongoing maintenance

Trade-offs: Medium effort, high reward

---

brainstorm: Which direction resonates with you?
You: Option 3 looks promising

brainstorm: What segments make sense for your audience?
You: By company size (small/medium/large) and role (founder/PM/engineer)

brainstorm: Do you have data on optimal send times for each segment?
You: Not yet

[Discussion continues...]

---

CONSENSUS REACHED

**Recommended Approach:**
Implement Option 3 (Segmentation + Timing) with quick wins from Option 2

Phase 1 (This Week):
- Segment list by company size and role
- Test value-first subject lines
- A/B test send times per segment

Phase 2 (Next 2 Weeks):
- Analyze send time data
- Optimize timing per segment
- Refine segments based on engagement

Phase 3 (Month 2):
- Add behavioral segmentation
- Implement basic personalization
- Measure impact on open rates

Expected Results:
- Week 1: 18% → 20% (value-first subject lines)
- Week 4: 20% → 24% (segmentation + timing)
- Week 8: 24% → 27% (optimization)

---

Summary Report saved: plans/reports/brainstorm-251229-2145-email-open-rates.md

Next Actions:
- /plan implement email segmentation system
- /cook A/B test value-first subject lines
- /analyze engagement (track results)

Wait for your confirmation before proceeding.
```

## 5-Phase Process

### Phase 1: Context Gathering
AI asks clarifying questions (one at a time) to understand:
- Current situation
- Constraints
- Goals
- What's been tried

### Phase 2: Alternative Generation
AI presents 2-3 viable solutions with:
- Clear pros and cons
- Trade-off analysis
- Effort vs reward assessment

### Phase 3: Collaborative Discussion
Interactive Q&A to refine options:
- Ask follow-up questions
- Challenge assumptions
- Explore variations

### Phase 4: Consensus Building
Reach agreement on:
- Preferred approach
- Hybrid solutions
- Next steps

### Phase 5: Summary Report
Document the session:
- Context and problem
- Alternatives explored
- Chosen direction
- Action items

## Key Rules

### DO:
- Ask questions to clarify
- Challenge AI assumptions
- Request alternative approaches
- Take time to think

### DON'T:
- Expect implementation
- Skip discussion phases
- Rush to conclusion
- Accept first suggestion

## After Brainstorming

### Next Steps (Your Choice)
```bash
# Create implementation plan
/plan [chosen solution]

# Implement immediately
/cook [chosen solution]

# Fix specific issues
/fix [issues identified]

# Do nothing (just document ideas)
```

## Workflow Integration

### Strategy Sessions
```bash
# Marketing strategy
/brainstorm campaign strategy for Q1 launch

# Product decisions
/brainstorm should we build feature X or Y

# Technical architecture
/brainstorm microservices vs monolith for our scale
```

### Problem-Solving
```bash
# Performance issues
/brainstorm how to reduce page load time

# Conversion optimization
/brainstorm improve checkout conversion rate

# Growth challenges
/brainstorm customer acquisition strategies
```

## Related Commands

- [/ask](/docs/marketing/commands/ask) - Technical consultation (no discussion)
- [/plan](/docs/marketing/commands/plan) - Create implementation plan
- [/cook](/docs/marketing/commands/cook) - Implement solution

---

**Think better. Decide faster.** AI-powered brainstorming that explores alternatives.
