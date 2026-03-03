---
title: "ckm:slides"
description: "Create strategic presentation slides"
section: marketing
kit: marketing
category: skills
order: 44
---

# `ckm:slides`

> Transform marketing strategy, campaign results, and proposals into polished presentation slides.

## What This Skill Does

The Slides skill converts marketing documents, data, and strategies into structured slide presentations. It handles the narrative architecture — deciding what goes on each slide, how to sequence the story, and what visuals to use — so marketers can focus on the message rather than the mechanics.

The skill is optimized for high-stakes presentations: executive briefings, campaign results reviews, agency pitches, and investor updates. It applies proven presentation structures (Problem-Solution, Before-After, STAR) and communication principles (one idea per slide, visual > text) to produce decks that are clear and persuasive.

Output is Markdown-based and compatible with tools like Marp, Slidev, and Reveal.js — giving teams professional slides without PowerPoint overhead.

## Quick Start

```
/ckm:slides --topic "Q1 Campaign Results" --audience "Executive Team" --slides 12
```

## Key Features

- Narrative structure selection (Problem-Solution, STAR, Before-After, Data Story)
- One-idea-per-slide discipline enforced automatically
- Data visualization recommendations for charts and graphs
- Speaker notes generated alongside slide content
- Audience-calibrated depth (exec summary vs. team deep-dive)
- Marp/Slidev/Reveal.js compatible Markdown output
- Campaign results decks with auto-generated data slides

## Usage Examples

**Campaign results presentation**:
```
/ckm:slides Create a 10-slide Q1 campaign results deck for the executive team.
Include: goals vs. actual, channel breakdown, key learnings, Q2 recommendations.
Data: [paste metrics]
```

**Strategy proposal deck**:
```
/ckm:slides Create a proposal deck for our new SEO content program.
Audience: CMO and Head of Product. Cover: opportunity size, strategy, timeline, budget ask
```

**Agency pitch**:
```
/ckm:slides Create a 15-slide agency capabilities deck for a B2B SaaS prospect.
Highlight: relevant case studies, our process, team, and pricing structure
```

## Related

- [ckm:analyze](/docs/marketing/skills/analyze) - Pull data for results slides
- [ckm:preview](/docs/marketing/skills/preview) - Preview slides before presenting
- [ckm:write](/docs/marketing/skills/write) - Long-form content that feeds into decks
