---
title: Problem-Solving Skill
description: Systematic techniques cho complexity spirals, innovation blocks, recurring patterns và scale uncertainty
section: engineer
kit: engineer
category: skills/tools
order: 14
published: true
lang: vi
---

# Problem-Solving Skill

Systematic approaches cho different types của stuck-ness. Mỗi technique targets specific problem patterns.

## Khi Nào Sử Dụng

- **Complexity spiraling**: Multiple implementations, growing special cases
- **Innovation blocks**: Conventional solutions inadequate
- **Recurring patterns**: Same issue across domains
- **Assumption constraints**: "Only way" thinking
- **Scale uncertainty**: Production readiness unclear
- **General stuck-ness**: Unsure technique nào applies

## Quick Dispatch

| Stuck Symptom | Technique |
|---------------|-----------|
| Same thing implemented 5+ ways | Simplification Cascades |
| Conventional solutions inadequate | Collision-Zone Thinking |
| Same issue ở different places | Meta-Pattern Recognition |
| Solution feels forced | Inversion Exercise |
| Liệu sẽ work ở production? | Scale Game |
| Unsure technique nào | When Stuck flowchart |

## Core Techniques

### 1. Simplification Cascades

Tìm một insight loại bỏ multiple components. "If this is true, we don't need X, Y, Z."

**Key insight**: Everything là special case của một general pattern.

**Red flag**: "Just need to add one more case..." (lặp forever)

### 2. Collision-Zone Thinking

Force unrelated concepts together để discover emergent properties. "What if we treated X like Y?"

**Key insight**: Revolutionary ideas từ deliberate metaphor-mixing.

**Red flag**: "I've tried everything in this domain"

### 3. Meta-Pattern Recognition

Spot patterns xuất hiện trong 3+ domains để tìm universal principles.

**Key insight**: Patterns trong how patterns emerge reveal reusable abstractions.

**Red flag**: "This problem is unique" (probably not)

### 4. Inversion Exercise

Flip core assumptions để reveal hidden constraints. "What if the opposite were true?"

**Key insight**: Valid inversions reveal context-dependence của "rules."

**Red flag**: "There's only one way to do this"

### 5. Scale Game

Test ở extremes (1000x bigger/smaller, instant/year-long) để expose fundamental truths.

**Key insight**: What works ở one scale fails ở another.

**Red flag**: "Should scale fine" (without testing)

## Application Process

1. **Identify stuck-type**: Match symptom tới technique
2. **Load detailed reference**: Đọc specific technique
3. **Apply systematically**: Follow technique's process
4. **Document insights**: Record what worked/failed
5. **Combine nếu cần**: Some problems cần multiple techniques

## Powerful Combinations

- **Simplification + Meta-pattern**: Tìm pattern, simplify tất cả instances
- **Collision + Inversion**: Force metaphor, invert assumptions
- **Scale + Simplification**: Extremes reveal what to eliminate
- **Meta-pattern + Scale**: Universal patterns tested ở extremes

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

## Integration với ClaudeKit

Làm việc với:

- **sequential-thinking**: Structured problem decomposition
- **debugging**: Root cause investigation
- **planning**: Solution design

---

## Key Takeaway

Match stuck symptoms tới specific techniques: Simplification Cascades cho complexity, Collision-Zone cho innovation blocks, Meta-Pattern cho recurring issues, Inversion cho assumptions, Scale Game cho production readiness.
