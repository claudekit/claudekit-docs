---
title: Problem-Solving Skill
description: Systematic techniques for complexity spirals, innovation blocks, recurring patterns, and scale uncertainty
section: engineer
kit: engineer
category: skills/tools
order: 14
published: true
---

# Problem-Solving Skill

Systematic approaches for different types of stuck-ness. Each technique targets specific problem patterns.

## When to Use

- **Complexity spiraling**: Multiple implementations, growing special cases
- **Innovation blocks**: Conventional solutions inadequate
- **Recurring patterns**: Same issue across domains
- **Assumption constraints**: "Only way" thinking
- **Scale uncertainty**: Production readiness unclear
- **General stuck-ness**: Unsure which technique applies

## Quick Dispatch

| Stuck Symptom | Technique |
|---------------|-----------|
| Same thing implemented 5+ ways | Simplification Cascades |
| Conventional solutions inadequate | Collision-Zone Thinking |
| Same issue in different places | Meta-Pattern Recognition |
| Solution feels forced | Inversion Exercise |
| Will this work at production? | Scale Game |
| Unsure which technique | When Stuck flowchart |

## Core Techniques

### 1. Simplification Cascades

Find one insight eliminating multiple components. "If this is true, we don't need X, Y, Z."

**Key insight**: Everything is a special case of one general pattern.

**Red flag**: "Just need to add one more case..." (repeating forever)

### 2. Collision-Zone Thinking

Force unrelated concepts together to discover emergent properties. "What if we treated X like Y?"

**Key insight**: Revolutionary ideas from deliberate metaphor-mixing.

**Red flag**: "I've tried everything in this domain"

### 3. Meta-Pattern Recognition

Spot patterns appearing in 3+ domains to find universal principles.

**Key insight**: Patterns in how patterns emerge reveal reusable abstractions.

**Red flag**: "This problem is unique" (probably not)

### 4. Inversion Exercise

Flip core assumptions to reveal hidden constraints. "What if the opposite were true?"

**Key insight**: Valid inversions reveal context-dependence of "rules."

**Red flag**: "There's only one way to do this"

### 5. Scale Game

Test at extremes (1000x bigger/smaller, instant/year-long) to expose fundamental truths.

**Key insight**: What works at one scale fails at another.

**Red flag**: "Should scale fine" (without testing)

## Application Process

1. **Identify stuck-type**: Match symptom to technique
2. **Load detailed reference**: Read specific technique
3. **Apply systematically**: Follow technique's process
4. **Document insights**: Record what worked/failed
5. **Combine if needed**: Some problems need multiple techniques

## Powerful Combinations

- **Simplification + Meta-pattern**: Find pattern, simplify all instances
- **Collision + Inversion**: Force metaphor, invert assumptions
- **Scale + Simplification**: Extremes reveal what to eliminate
- **Meta-pattern + Scale**: Universal patterns tested at extremes

## Reference Navigation

| Topic | Reference |
|-------|-----------|
| Dispatch Flowchart | `references/when-stuck.md` |
| Simplification | `references/simplification-cascades.md` |
| Collision-Zone | `references/collision-zone-thinking.md` |
| Meta-Pattern | `references/meta-pattern-recognition.md` |
| Inversion | `references/inversion-exercise.md` |
| Scale Game | `references/scale-game.md` |
| Attribution | `references/attribution.md` |

## Integration with ClaudeKit

Works with:

- **sequential-thinking**: Structured problem decomposition
- **debugging**: Root cause investigation
- **planning**: Solution design

---

## Key Takeaway

 Match stuck symptoms to specific techniques: Simplification Cascades for complexity, Collision-Zone for innovation blocks, Meta-Pattern for recurring issues, Inversion for assumptions, Scale Game for production readiness.
