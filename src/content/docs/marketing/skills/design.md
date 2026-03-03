---
title: "ckm:design"
description: "Entry point for design tasks — routes to brand strategy, design-system tokens, or ui-styling based on design context."
section: marketing
category: skills
order: 72
---

# Design

> The universal design entry point — routes your task to the right specialist skill automatically.

## What This Skill Does

**The Challenge**: Design encompasses brand strategy, design systems, UI implementation, logo creation, banners, and more. Teams waste time figuring out which tool or skill to use for each design task.

**The Solution**: Design skill acts as an intelligent router — it understands the nature of your design task and activates the appropriate specialist skill. One entry point for all design work, with automatic routing to brand, design-system, ui-styling, logo, banner, or CIP skills.

## Activation

**Implicit**: Activates whenever user mentions "design", "UI", "brand", "visual", "style", or "look and feel".

**Explicit**: Activate via prompt:
```
Activate design skill for [describe design task]
```

## Routing Logic

### Task-to-Skill Mapping

| Task Type | Routes To | Examples |
|-----------|-----------|---------|
| Brand identity | [Brand](/docs/marketing/skills/brand) | "Define our brand personality", "Create brand guidelines" |
| Design tokens, component specs | [Design System](/docs/marketing/skills/design-system) | "Set up our design system", "Create color tokens" |
| UI implementation, styling | [Frontend Design](/docs/marketing/skills/frontend-design) | "Style this component", "Build this UI from mockup" |
| Logo creation | [Logo Design](/docs/marketing/skills/logo-design) | "Design a logo", "Create an icon" |
| Banners and ad creatives | [Banner Design](/docs/marketing/skills/banner-design) | "Make social media banners", "Create ad creatives" |
| Full corporate identity | [CIP Design](/docs/marketing/skills/cip-design) | "Build complete brand system", "50 brand deliverables" |
| AI image generation | [AI Artist](/docs/marketing/skills/ai-artist) | "Generate images for", "Create AI visuals" |

## Capabilities

### 1. Scope Clarification
When task scope is ambiguous, asks one clarifying question before routing.

**Clarification questions**:
- "Is this for digital use only or print as well?"
- "Are you starting from scratch or updating existing brand?"
- "Do you need implementation (code) or visual specs (guidelines)?"

### 2. Design Brief Generation
Before any design work, structures a design brief.

**Brief components**:
- Purpose and goal
- Target audience
- Platforms and formats needed
- Brand constraints (existing colors, fonts)
- Reference inspirations
- Timeline and deliverables

### 3. Cross-Skill Orchestration
For complex design projects spanning multiple skills, coordinates sequencing.

**Example flow for product launch visuals**:
1. Brand skill → confirm voice and positioning
2. Design System skill → confirm tokens
3. Banner Design skill → create ad creatives
4. AI Artist skill → generate supporting visuals
5. Assets Organizing skill → structure outputs

## Prerequisites

- Clear description of design goal or task
- Access to brand guidelines if existing brand

## Best Practices

**1. Brief before designing**
Always capture purpose, audience, and constraints before generating. Iteration is expensive without clarity.

**2. Design for your audience, not your taste**
B2B enterprise looks different from B2C consumer. Route through brand discovery if audience is unclear.

**3. Deliver system, not just assets**
Individual assets become inconsistent over time. Pair any asset creation with guidelines.

## Common Use Cases

### Use Case 1: New Product Visual Identity
**Scenario**: Launching a new feature — need consistent visuals across website, ads, and social.

**Routing path**:
1. Design → Brand (positioning and personality)
2. Design → Design System (tokens for new feature section)
3. Design → Banner Design (ad creatives)
4. Design → AI Artist (hero illustration)

### Use Case 2: Website UI Redesign
**Scenario**: Redesigning the pricing page for better conversion.

**Routing path**:
1. Design → Design System (confirm existing tokens)
2. Design → Frontend Design (implement new layout)
3. Design → Banner Design (hero section graphic)

## Troubleshooting

**Issue**: Not sure which type of design work is needed
**Solution**: Describe the end deliverable ("I need a PNG banner" vs "I need React component styling"). Design skill routes from deliverable, not process.

**Issue**: Design task spans multiple skills
**Solution**: Use this skill to create a design plan first. It will sequence the sub-skills correctly.

## Related Skills

- [Brand](/docs/marketing/skills/brand) - Brand strategy and guidelines
- [Design System](/docs/marketing/skills/design-system) - Token and component architecture
- [Frontend Design](/docs/marketing/skills/frontend-design) - UI implementation
- [Logo Design](/docs/marketing/skills/logo-design) - Logo creation workflow
- [Banner Design](/docs/marketing/skills/banner-design) - Ad and social banners
- [CIP Design](/docs/marketing/skills/cip-design) - Full corporate identity

## Related Commands

- `/ckm:design` - Activate design workflow
- `/ai-artist` - AI visual generation
