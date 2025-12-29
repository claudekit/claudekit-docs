---
title: "/content"
description: "Create SEO-optimized blog posts, landing pages, and marketing content with AI-powered research, writing, and optimization"
section: marketing
category: commands
order: 3
published: true
---

> Generate SEO-optimized content that ranks and converts

## Quick Start

```bash
/content blog "best marketing automation tools"
```

**What happens**:
1. SEO keyword research
2. Content outline creation
3. Blog post writing (1,500-3,000 words)
4. SEO optimization (meta, schema, alt text)
5. Quality audit (target score ≥8.0)

**Output**: `assets/articles/251229-{slug}/{slug}.md` + images

## Syntax

```bash
/content <type> [topic]
```

### Content Types

| Type | Description | Length | SEO Optimized |
|------|-------------|--------|---------------|
| `blog` | Blog post | 1,500-3,000 words | Yes |
| `landing` | Landing page | 800-1,200 words | Yes |
| `case-study` | Customer story | 1,000-1,500 words | Yes |
| `guide` | Ultimate guide | 3,000+ words | Yes |

## Example: SEO Blog Post

**Input**:
```bash
/content blog "AI marketing automation guide"
```

**Expected Output**:
```markdown
✓ seo-specialist: Keyword research complete
✓ planner: Content outline created
✓ content-creator: Article written
✓ seo-specialist: SEO optimization applied

---
# AI Marketing Automation: Complete 2025 Guide

SEO Title: "AI Marketing Automation: The Complete 2025 Guide (With Examples)"
Meta Description: "Discover how AI marketing automation saves 15+ hours/week. Complete guide with tools, strategies, and real examples. Free templates included."
Focus Keyword: "AI marketing automation"
Word Count: 2,847

## Outline
1. Introduction (What is AI Marketing Automation)
2. Benefits (Time Savings, ROI, Personalization)
3. Top Tools (Reviews + Comparisons)
4. Implementation Guide (Step-by-step)
5. Case Studies (Real Examples)
6. FAQs
7. Conclusion + CTA

## Article Content
[Full 2,847-word article with H2-H4 structure]

## SEO Optimization
- Schema markup: Article + FAQ schema added
- Alt text: All images optimized
- Internal links: 8 relevant links added
- External links: 5 authoritative sources cited
- Readability: Flesch score 68 (Good)

## Images Generated
1. Featured image: AI automation concept
2. Infographic: Time savings breakdown
3. Comparison table: Top 5 tools
4. Process diagram: Implementation steps

## Quality Score: 8.7/10
✓ SEO optimized
✓ Engaging copy
✓ Well-structured
✓ Visual elements
✓ Actionable insights

Saved: assets/articles/250129-ai-marketing-automation-guide/

Next: /seo audit [published URL]
```

## Workflow Integration

```bash
# Complete content workflow
/seo keywords "your topic"  # Research first
/content blog "your topic"  # Create content
/design featured image for blog  # Visual assets
/seo audit https://yoursite.com/blog/post  # Verify SEO
```

## Agents Used

- **content-creator**: Content writing
- **seo-specialist**: SEO optimization
- **copywriter**: Engaging copy
- **planner**: Content structure

## Skills Activated

- **content-marketing**: Content frameworks
- **seo-optimization**: SEO best practices
- **creativity**: Visual content direction

## Related Commands

- [/seo](/docs/marketing/commands/seo) - Keyword research and audits
- [/design](/docs/marketing/commands/design) - Visual assets
- [/social](/docs/marketing/commands/social) - Promote content

---

**Rank higher. Convert better.** AI-powered content that delivers results.
