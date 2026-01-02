---
title: "Content Marketing"
description: "Strategic content planning, editorial workflow, and content optimization framework to build sustainable content programs."
section: marketing
category: skills
order: 2
---

> Build content programs that attract, engage, and convert through strategic planning and systematic execution.

## What This Skill Does

**Challenge**: Creating content without strategy leads to inconsistent publishing, lack of themes, and wasted resources. Teams struggle with editorial calendars, content audits, and repurposing workflows.

**Solution**: Content Marketing skill provides strategic framework for content planning, editorial workflow, and content optimization. Includes content strategy templates, editorial calendar, blog post frameworks, and audit checklists.

## Activation

**Implicit**: Auto-activated for Content Creator, Campaign Manager, and Attraction Specialist agents.

**Explicit**: Activate via prompt:
```
Activate content-marketing skill to [describe task]
```

## Capabilities

### 1. Content Strategy Development
Define 3-5 content pillars aligned with business goals and map topic clusters.

```markdown
# Example Content Pillar
Pillar: "Developer Productivity Tools"
├── Cluster 1: Code editor and IDE features
├── Cluster 2: Version control workflows
├── Cluster 3: CI/CD automation
└── Cluster 4: Testing frameworks
```

**Framework loaded**: `references/content-strategy-framework.md`

### 2. Editorial Calendar Planning
Create publishing schedule with content types, assignees, and distribution channels.

```markdown
| Week | Content Type | Topic | Assignee | Channels |
|------|--------------|-------|----------|----------|
| W1   | Blog post    | How to automate deployments | Sarah | Blog, LinkedIn |
| W2   | Video        | CI/CD pipeline tutorial | Mike | YouTube, Twitter |
| W3   | Podcast      | Developer workflow interview | Team | Spotify, Blog |
```

**Template loaded**: `references/editorial-calendar-template.md`

### 3. Blog Post Framework Selection
Choose from proven blog structures based on content intent.

**Available Templates**:
- **How-to guide**: Step-by-step instructional content
- **Listicle**: "X ways to achieve Y" format
- **Case Study**: Problem-solution-results storytelling
- **Opinion/Commentary**: Thought leadership content
- **Comparison**: "X vs Y" evaluation framework
- **Beginner's Guide**: Comprehensive introductory content

**Templates loaded**: `references/blog-post-templates.md`

## Prerequisites

- User's brand guidelines (optional but recommended)
- Target audience personas
- Business goals and KPIs

## Configuration

No configuration needed. Skill works with user's existing project structure.

**Optional**: Define content pillars in `docs/content-strategy.md` for consistent reference.

## Best Practices

**1. Lead with value, not promotion**
Focus 80% on educational content, 20% on product promotion.

**2. Align content with buyer journey stage**
- **Top of funnel**: Educational, awareness content
- **Middle of funnel**: Comparisons, use cases
- **Bottom of funnel**: Product-specific, conversion content

**3. Maintain consistent publishing schedule**
Consistency matters more than frequency. Weekly schedule beats erratic bursts.

## Common Use Cases

### Use Case 1: Quarterly Content Planning
**Scenario**: Plan next quarter's content across blog, video, and social channels.

**Workflow**:
1. Audit current content performance
2. Identify gaps in content coverage
3. Map topics to 3-5 content pillars
4. Create editorial calendar with publish dates
5. Assign owners and distribution channels

**Result**: 13-week editorial calendar with 40+ content ideas mapped to pillars.

### Use Case 2: Content Audit and Optimization
**Scenario**: Evaluate existing blog content and prioritize updates.

**Workflow**:
1. Load content audit checklist
2. Analyze traffic, engagement, conversion per post
3. Categorize: Keep, Update, Merge, Redirect, Delete
4. Prioritize updates by potential impact
5. Create update schedule

**Result**: Audit report with actionable items and prioritized update queue.

## Troubleshooting

**Issue**: Content calendar feels overwhelming
**Solution**: Start with 1 pillar, 1 content type, weekly cadence. Expand after 4-6 weeks of consistency.

**Issue**: Running out of topic ideas
**Solution**: Use seo-optimization skill for keyword research and search intent analysis. Check competitor content gaps.

**Issue**: Content not performing
**Solution**: Activate analytics skill to identify well-performing topics. Double down on what works, cut what doesn't.

## Related Skills

- [SEO Optimization](/docs/marketing/skills/seo-optimization) - Keyword research and search optimization
- [Copywriting](/docs/marketing/skills/copywriting) - Writing frameworks and headline templates
- [Brand Guidelines](/docs/marketing/skills/brand-guidelines) - Voice consistency and messaging
- [Analytics](/docs/marketing/skills/analytics) - Track content performance

## Related Commands

- `/content/blog` - Create blog post from outline
- `/content/enhance` - Improve existing content
- `/seo/keywords` - Research content topics
- `/plan` - Create content production plan
