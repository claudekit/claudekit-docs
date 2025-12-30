---
title: "/write - Content Writing Commands"
description: "Generate blog posts, audit content quality, and manage publishing workflows with AI-powered writing assistance that matches your brand voice"
section: marketing
category: commands
order: 3
published: true
---

# /write - Content Writing Commands

AI-powered content creation with automatic writing style extraction. Generate blog posts that match your brand voice, audit existing content for quality and SEO, and streamline your publishing workflow.

## Commands

### /write:blog - Blog Post Generation

Generate complete blog posts with automatic style matching from your existing content.

**Syntax:**
```bash
/write:blog "<topic or title>"
```

**What It Does:**
1. Extracts your writing style from `/assets/writing-styles/` directory
2. Analyzes your brand voice, tone, and content patterns
3. Generates blog post with matching style and structure
4. Optimizes for SEO and readability
5. Saves draft to `/assets/blog-posts/` for review

**Examples:**
```bash
# Blog post on product feature
/write:blog "introducing our new API rate limiting system"

# Tutorial-style content
/write:blog "how to integrate Claude Code with your CI/CD pipeline"

# Thought leadership piece
/write:blog "the future of AI-assisted software development"
```

**Output:**
- **Draft file**: `/assets/blog-posts/YYYY-MM-DD-slug.md`
- **Metadata**: SEO title, description, tags, category
- **Structure**: H2/H3 headings, intro/body/conclusion
- **Assets**: Suggested images, code snippets, call-to-actions

**Writing Style Extraction:**

The system learns from example content in `/assets/writing-styles/`:

```
/assets/writing-styles/
├── author-samples/
│   ├── jane-ceo-posts.md        # Executive perspective
│   ├── john-engineer-blogs.md   # Technical deep-dives
│   └── sarah-marketing-copy.md  # Marketing voice
├── brand-voice.md                # Company style guide
└── content-templates/
    ├── tutorial-template.md
    ├── announcement-template.md
    └── case-study-template.md
```

**Style Parameters Extracted:**
- **Tone**: Formal, casual, technical, conversational
- **Voice**: First-person, third-person, we-focused
- **Sentence length**: Short punchy vs. detailed explanatory
- **Technical depth**: Beginner, intermediate, expert
- **Formatting patterns**: Lists, code blocks, quotes, callouts

**Tips:**
- Add 2-3 example posts to `/assets/writing-styles/author-samples/` for best results
- Include variety: announcements, tutorials, thought leadership
- Update style samples when brand voice evolves
- Review AI drafts for factual accuracy before publishing

---

### /write:audit - Content Quality Audit

Analyze existing content for quality, SEO, readability, and brand alignment.

**Syntax:**
```bash
/write:audit <file-path or URL>
```

**What It Does:**
1. Analyzes content structure and readability
2. Checks SEO optimization (keywords, meta, headings)
3. Evaluates brand voice consistency
4. Identifies content gaps and improvement opportunities
5. Generates actionable recommendations

**Examples:**
```bash
# Audit local markdown file
/write:audit /assets/blog-posts/2024-12-15-api-launch.md

# Audit published blog post
/write:audit https://example.com/blog/api-launch

# Audit multiple files
/write:audit "/assets/blog-posts/*.md"
```

**Audit Criteria:**

| Category | Checks | Scoring |
|----------|--------|---------|
| **SEO** | Title tag, meta description, H1/H2 structure, keyword density, internal links | 0-100 |
| **Readability** | Flesch-Kincaid grade level, sentence complexity, paragraph length, transitions | 0-100 |
| **Structure** | Intro hook, section flow, conclusion/CTA, formatting consistency | 0-100 |
| **Brand Voice** | Tone alignment, terminology usage, style guide compliance | 0-100 |
| **Engagement** | Multimedia elements, actionable takeaways, social shareability | 0-100 |

**Output Report:**
```markdown
# Content Audit: API Launch Announcement

**Overall Score: 82/100** ✅ Good

## Strengths
- ✅ Strong SEO optimization (title, meta, keywords)
- ✅ Clear structure with logical flow
- ✅ Engaging introduction with problem/solution hook

## Issues Found
- ⚠️ **Readability (Grade 14)**: Reduce sentence complexity for broader audience
- ⚠️ **Brand Voice**: Use "we" instead of "our team" (style guide preference)
- ❌ **Missing CTA**: No call-to-action at end of post

## Recommendations
1. **SEO**: Add internal link to related API documentation
2. **Readability**: Split 3 long paragraphs (200+ words) into shorter sections
3. **Engagement**: Add code example demonstrating rate limiting
4. **CTA**: Include "Try our API" button linking to signup

## Quick Fixes
- Line 42: "The implementation, which was complex..." → "The implementation was complex..."
- Line 68: Add H3 heading "How It Works" before technical explanation
- Line 105: Add code snippet showing rate limit headers
```

**Tips:**
- Run audits before publishing new content
- Use for existing content refresh cycles
- Batch audit all blog posts quarterly
- Track audit scores over time to measure improvement

---

### /write:publish - Publishing Workflow

Streamline content publishing from draft to live with automated checks and deployment.

**Syntax:**
```bash
/write:publish <draft-file> [--platform=<platform>]
```

**Platforms:**
- `wordpress` - WordPress site via REST API
- `markdown` - Static site (Astro, Next.js, Hugo)
- `notion` - Notion workspace
- `medium` - Medium publication
- `dev` - DEV Community
- `hashnode` - Hashnode blog

**What It Does:**
1. Runs final content audit (SEO, readability, quality)
2. Validates frontmatter metadata
3. Optimizes images (compression, alt text, responsive)
4. Generates social media snippets
5. Publishes to target platform
6. Creates archive copy with timestamp

**Examples:**
```bash
# Publish to WordPress
/write:publish /assets/blog-posts/api-launch.md --platform=wordpress

# Publish to static site (commit to repo)
/write:publish /assets/blog-posts/tutorial.md --platform=markdown

# Publish to multiple platforms
/write:publish /assets/blog-posts/announcement.md --platform=medium,dev,hashnode
```

**Pre-Publish Checklist:**

Automated validation before publishing:

- ✅ **Content Audit Score**: Minimum 75/100 required
- ✅ **Frontmatter Complete**: Title, description, date, author, tags
- ✅ **SEO Meta**: Title 50-60 chars, description 150-160 chars
- ✅ **Images Optimized**: < 200KB per image, alt text present
- ✅ **Links Valid**: All internal/external links return 200
- ✅ **Code Blocks**: Syntax highlighting specified
- ✅ **Call-to-Action**: At least one CTA present

**Workflow Steps:**

1. **Audit Phase** (30s)
   ```
   ✓ Running content audit...
   ✓ SEO score: 88/100
   ✓ Readability: Grade 10 (target audience: general)
   ✓ Brand voice: 92% match
   ```

2. **Preparation Phase** (60s)
   ```
   ✓ Compressing images (3 files, 2.1MB → 487KB)
   ✓ Generating social snippets (Twitter, LinkedIn, Facebook)
   ✓ Validating links (12 internal, 5 external)
   ✓ Creating backup: /assets/published/2024-12-30-api-launch.md
   ```

3. **Publishing Phase** (30s)
   ```
   ✓ Uploading to WordPress...
   ✓ Post published: https://example.com/blog/api-launch
   ✓ Sharing to social media (scheduled for 9:00 AM EST)
   ```

**Social Media Snippets Generated:**

```markdown
## Twitter/X (280 chars)
🚀 Introducing API rate limiting! Protect your infrastructure with configurable limits, real-time monitoring, and graceful degradation. Learn more: [link]

## LinkedIn (1300 chars)
We're excited to announce intelligent API rate limiting in our latest release...
[Full professional post with key points, benefits, link]

## Facebook
[Conversational post with emoji, question hook, link preview]
```

**Environment Setup:**

Configure publishing credentials in `.env`:

```bash
# WordPress
WORDPRESS_URL=https://example.com
WORDPRESS_USERNAME=admin
WORDPRESS_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx

# Medium
MEDIUM_INTEGRATION_TOKEN=xxxxxxxxxxxxx

# DEV Community
DEV_API_KEY=xxxxxxxxxxxxx

# Hashnode
HASHNODE_API_KEY=xxxxxxxxxxxxx
HASHNODE_PUBLICATION_ID=xxxxxxxxxxxxx
```

**Tips:**
- Test publishing workflow on staging site first
- Schedule posts for optimal engagement times
- Review generated social snippets before auto-posting
- Archive published content for future reference
- Use `--dry-run` flag to preview without publishing

---

## Related Skills

The `/write` commands activate these skills automatically:

- **[copywriting](/docs/marketing/skills/copywriting)** - Writing techniques and persuasion
- **[content-marketing](/docs/marketing/skills/content-marketing)** - Content strategy and distribution
- **[seo-optimization](/docs/marketing/skills/seo-optimization)** - SEO best practices
- **[analytics](/docs/marketing/skills/analytics)** - Content performance tracking

## Related Agents

These agents collaborate during `/write` workflows:

- **[copywriter](/docs/marketing/agents/copywriter)** - Drafts compelling content
- **[content-reviewer](/docs/marketing/agents/content-reviewer)** - Audits quality
- **[seo-specialist](/docs/marketing/agents/seo-specialist)** - Optimizes for search

## Workflows

See complete workflow guides:

- [Content Creation Workflow](/docs/marketing/workflows/content-workflow) - End-to-end content production
- [SEO Workflow](/docs/marketing/workflows/seo-workflow) - SEO optimization process

## Troubleshooting

### Writing Style Not Detected

**Problem**: Generated content doesn't match your brand voice.

**Solutions**:
1. Add 3+ example posts to `/assets/writing-styles/author-samples/`
2. Include diverse content types (announcements, tutorials, thought leadership)
3. Create `/assets/writing-styles/brand-voice.md` with explicit style guide
4. Specify tone in prompt: `/write:blog "topic" --tone=technical`

### Publish Failing

**Problem**: `/write:publish` errors during deployment.

**Solutions**:
1. Verify platform credentials in `.env` file
2. Test API connection: `curl -H "Authorization: Bearer $TOKEN" $API_URL`
3. Check content audit score (must be ≥75/100)
4. Validate frontmatter schema matches platform requirements
5. Use `--dry-run` to see what would be published without actually publishing

### Audit Score Low

**Problem**: Content audit consistently scores below 75/100.

**Solutions**:
1. Check readability: Target Flesch-Kincaid grade 8-12 for general audience
2. Add internal links: Link to 2-3 related posts or docs
3. Include multimedia: Add at least 1 image, diagram, or code example
4. Improve structure: Use H2/H3 headings to break up long sections
5. Add CTA: Include call-to-action at end of post
