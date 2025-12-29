---
title: "Phase 04: Marketing Skills Content"
status: pending
effort: 4h
type: parallel
depends_on: [phase-01]
copywriter: copywriter-3
---

# Phase 04: Marketing Skills Content

**Type**: PARALLEL (can run with Phases 2-3, 5-8)
**Effort**: 4h
**Owner**: Copywriter-3
**Depends On**: Phase 1 (Infrastructure)

---

## Overview

Create documentation for the top 20 Marketing Kit skills. Focus on activation, capabilities, and practical examples.

---

## Exclusive File Ownership

This phase exclusively owns:

```
src/content/docs/marketing/skills/index.md
src/content/docs/marketing/skills/content-marketing.md
src/content/docs/marketing/skills/seo-optimization.md
src/content/docs/marketing/skills/analytics.md
src/content/docs/marketing/skills/email-marketing.md
src/content/docs/marketing/skills/social-media.md
src/content/docs/marketing/skills/campaign-management.md
src/content/docs/marketing/skills/copywriting.md
src/content/docs/marketing/skills/brainstorming.md
src/content/docs/marketing/skills/ads-management.md
src/content/docs/marketing/skills/affiliate-marketing.md
src/content/docs/marketing/skills/gamification-marketing.md
src/content/docs/marketing/skills/referral-program-building.md
src/content/docs/marketing/skills/brand-guidelines.md
src/content/docs/marketing/skills/creativity.md
src/content/docs/marketing/skills/content-hub.md
src/content/docs/marketing/skills/ai-multimodal.md
src/content/docs/marketing/skills/ai-artist.md
src/content/docs/marketing/skills/media-processing.md
src/content/docs/marketing/skills/chrome-devtools.md
src/content/docs/marketing/skills/research.md
```

**Total**: 21 files (1 index + 20 skills)

---

## Skills Priority Matrix

### Tier 1 - Core Marketing Skills (Document First)

| Skill | Purpose | Status |
|-------|---------|--------|
| content-marketing | Content strategy & creation | P1 |
| seo-optimization | Search engine optimization | P1 |
| analytics | Data analysis & reporting | P1 |
| email-marketing | Email campaigns | P1 |
| social-media | Social media management | P1 |
| campaign-management | Campaign orchestration | P1 |
| copywriting | Marketing copy | P1 |

### Tier 2 - Specialized Marketing Skills

| Skill | Purpose | Status |
|-------|---------|--------|
| brainstorming | Creative ideation | P2 |
| ads-management | Paid advertising | P2 |
| affiliate-marketing | Affiliate programs | P2 |
| gamification-marketing | Gamification tactics | P2 |
| referral-program-building | Referral systems | P2 |
| brand-guidelines | Brand consistency | P2 |
| creativity | Creative content | P2 |
| content-hub | Content management | P2 |

### Tier 3 - AI & Technical Skills

| Skill | Purpose | Status |
|-------|---------|--------|
| ai-multimodal | Audio/video/image processing | P2 |
| ai-artist | Image generation | P2 |
| media-processing | Media manipulation | P3 |
| chrome-devtools | Browser automation | P3 |
| research | Web research | P2 |

---

## Content Template

Each skill doc must follow this structure:

```markdown
---
title: "{Skill Name}"
description: "{One-line description for SEO, 80-150 chars}"
section: marketing
category: skills
order: {number}
---

# {Skill Name}

> **{Tagline}** - {What this skill enables}

## What This Skill Does

{2-3 paragraphs explaining the skill in storytelling format}

**The Challenge**: {Without this skill}
**The Solution**: {With this skill activated}

## Activation

This skill activates automatically when needed, or you can invoke it directly:

```bash
# Implicit activation (recommended)
/{related-command} {task}

# Explicit activation
/skill:add {skill-name}
```

## Capabilities

### {Capability 1}

{Description with example}

```bash
# Example usage
/{command}
```

### {Capability 2}

{Description with example}

### {Capability 3}

{Description with example}

## Prerequisites

{List any requirements}

- **API Key**: {if needed}
- **Dependencies**: {if any}
- **Configuration**: {if needed}

## Configuration

{If configurable}

```yaml
# .claude/skills/{skill-name}/config.yaml
setting1: value1
setting2: value2
```

## Best Practices

1. **{Practice 1}**: {Explanation}
2. **{Practice 2}**: {Explanation}
3. **{Practice 3}**: {Explanation}

## Common Use Cases

### Use Case 1: {Name}

{Scenario and solution}

### Use Case 2: {Name}

{Scenario and solution}

## Troubleshooting

### {Issue 1}

**Symptom**: {What you see}
**Solution**: {How to fix}

### {Issue 2}

**Symptom**: {What you see}
**Solution**: {How to fix}

## Related Skills

- [{Related Skill 1}](/docs/marketing/skills/{slug})
- [{Related Skill 2}](/docs/marketing/skills/{slug})

## Related Commands

- [`/{command}`](/docs/marketing/commands/{slug})
```

---

## Source References

**Primary Source**: `../claudekit-marketing/.claude/skills/{skill-name}/SKILL.md`

**Scout Report**: `plans/reports/scout-251229-2047-marketing-analysis.md` (Section 4: Skills)

---

## Index Page Structure

`src/content/docs/marketing/skills/index.md`:

```markdown
---
title: "Marketing Skills"
description: "60+ specialized skills for marketing automation and content creation"
section: marketing
category: skills
order: 1
---

# Marketing Skills

The Marketing Kit includes **60+ specialized skills** that enhance your marketing capabilities.

## Skill Categories

### Content & Marketing

Core skills for content creation and marketing operations:

| Skill | Description |
|-------|-------------|
| [Content Marketing](/docs/marketing/skills/content-marketing) | Strategy & creation |
| [SEO Optimization](/docs/marketing/skills/seo-optimization) | Search optimization |
| [Email Marketing](/docs/marketing/skills/email-marketing) | Email campaigns |
| [Social Media](/docs/marketing/skills/social-media) | Social management |
| [Copywriting](/docs/marketing/skills/copywriting) | Marketing copy |
| [Campaign Management](/docs/marketing/skills/campaign-management) | Orchestration |

### Analytics & Research

Data-driven marketing skills:

| Skill | Description |
|-------|-------------|
| [Analytics](/docs/marketing/skills/analytics) | Data analysis |
| [Research](/docs/marketing/skills/research) | Market research |

### Growth & Conversion

Skills for scaling and optimization:

| Skill | Description |
|-------|-------------|
| [Ads Management](/docs/marketing/skills/ads-management) | Paid advertising |
| [Affiliate Marketing](/docs/marketing/skills/affiliate-marketing) | Affiliate programs |
| [Gamification](/docs/marketing/skills/gamification-marketing) | Gamification |
| [Referral Programs](/docs/marketing/skills/referral-program-building) | Referrals |

### Brand & Creative

Branding and creative skills:

| Skill | Description |
|-------|-------------|
| [Brand Guidelines](/docs/marketing/skills/brand-guidelines) | Brand consistency |
| [Creativity](/docs/marketing/skills/creativity) | Creative content |
| [Brainstorming](/docs/marketing/skills/brainstorming) | Ideation |
| [Content Hub](/docs/marketing/skills/content-hub) | Content management |

### AI & Media

AI-powered content creation:

| Skill | Description |
|-------|-------------|
| [AI Multimodal](/docs/marketing/skills/ai-multimodal) | Audio/video/image |
| [AI Artist](/docs/marketing/skills/ai-artist) | Image generation |
| [Media Processing](/docs/marketing/skills/media-processing) | Media manipulation |
| [Chrome DevTools](/docs/marketing/skills/chrome-devtools) | Browser automation |

## How Skills Work

Skills are **automatically activated** based on the task at hand:

1. You invoke a command (e.g., `/content:good`)
2. The system detects required capabilities
3. Relevant skills activate in the background
4. Enhanced capabilities become available

## Manual Activation

You can also activate skills manually:

```bash
/skill:add content-marketing
/skill:add seo-optimization
```

## Creating Custom Skills

See [Skill Creator](/docs/marketing/skills/skill-creator) for building custom skills.

## Next Steps

- [Marketing Commands](/docs/marketing/commands) - Commands using these skills
- [Marketing Workflows](/docs/marketing/workflows) - Common workflow patterns
```

---

## Quality Checklist

For each skill doc:

- [ ] Title matches skill name
- [ ] Description is 80-150 chars, SEO-optimized
- [ ] Section is `marketing`
- [ ] Category is `skills`
- [ ] Order number assigned (1-25)
- [ ] Activation section complete
- [ ] At least 3 capabilities documented
- [ ] Prerequisites listed
- [ ] Related skills/commands linked
- [ ] No hallucinated features (matches source)

---

## Writing Tips

### For Beginners

- Explain what the skill enables, not how it works internally
- Focus on outcomes, not implementation
- Use concrete marketing scenarios

### For Activation

- Emphasize automatic activation (primary path)
- Show manual activation as secondary
- Note any prerequisites

### For Capabilities

- Each capability = one clear thing it can do
- Include at least one example per capability
- Link to commands that use this capability

---

## Validation

Before marking Phase 4 complete:

- [ ] All 21 files created
- [ ] All frontmatter validates
- [ ] `bun run build` passes
- [ ] Navigation shows all skills
- [ ] No broken internal links
- [ ] Prerequisites accurate

---

## Completion Criteria

Phase 4 is COMPLETE when:

1. All 21 files exist with valid content
2. Each file passes quality checklist
3. Index page lists all skills with links
4. Build succeeds without errors
