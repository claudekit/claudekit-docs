---
title: "/write - Content Writing Commands"
description: "Create blog posts, audit content quality, and manage publishing workflows with AI writing assistant that matches your brand voice"
section: marketing
category: commands
order: 3
published: true
---

# /write - Content Writing Commands

AI-powered content creation with automatic writing style extraction. Generate blog posts that match your brand voice, audit existing content for quality and SEO, and streamline publishing workflows.

## Commands

### /write:blog - Create Blog Posts

Generate complete blog posts with automatic style matching from your existing content.

**Syntax:**
```bash
/write:blog "<topic or title>"
```

**Features:**
1. Extract writing style from `/assets/writing-styles/` directory
2. Analyze brand voice, tone, and content patterns
3. Generate blog post with matching style and structure
4. Optimize for SEO and readability
5. Save draft to `/assets/blog-posts/` for review

**Examples:**
```bash
# Product feature blog
/write:blog "introducing new API rate limiting system"

# Tutorial content
/write:blog "how to integrate Claude Code with CI/CD pipelines"

# Thought leadership
/write:blog "the future of AI-assisted software development"
```

**Output:**
- **Draft file**: `/assets/blog-posts/YYYY-MM-DD-slug.md`
- **Metadata**: SEO title, description, tags, category
- **Structure**: H2/H3 headings, intro/body/conclusion sections
- **Assets**: Suggested images, code blocks, call-to-actions

**Writing Style Extraction:**

System learns from sample content in `/assets/writing-styles/`:

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

**Extracted Style Parameters:**
- **Tone**: Formal, friendly, technical, conversational
- **Voice**: First-person, third-person, "we"-focused
- **Sentence Length**: Concise vs. detailed explanations
- **Technical Depth**: Beginner, intermediate, expert
- **Formatting Patterns**: Lists, code blocks, quotes, callouts

**Tips:**
- Add 2-3 sample posts to `/assets/writing-styles/author-samples/` for best results
- Include variety: announcements, tutorials, thought leadership
- Update style samples as brand voice evolves
- Review AI drafts for factual accuracy before publishing

---

### /write:audit - Content Quality Audit

Analyze existing content for quality, SEO, readability, and brand alignment.

**Syntax:**
```bash
/write:audit <file-path or URL>
```

**Features:**
1. Analyze content structure and readability
2. Check SEO optimization (keywords, meta, headings)
3. Evaluate brand voice consistency
4. Identify content gaps and improvement opportunities
5. Generate specific actionable recommendations

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

| Category | Checks | Score |
|----------|--------|-------|
| **SEO** | Title tag, meta description, H1/H2 structure, keyword density, internal links | 0-100 |
| **Readability** | Flesch-Kincaid grade, sentence complexity, paragraph length, transitions | 0-100 |
| **Structure** | Compelling intro, section flow, conclusion/CTA, formatting consistency | 0-100 |
| **Brand Voice** | Tone alignment, terminology usage, style guide compliance | 0-100 |
| **Engagement** | Multimedia elements, actionable takeaways, social shareability | 0-100 |

**Audit Report Output:**
```markdown
# Content Audit: API Launch Announcement

**Overall Score: 82/100** ✅ Good

## Strengths
- ✅ Strong SEO optimization (title, meta, keywords)
- ✅ Clear structure with logical flow
- ✅ Compelling intro with problem/solution hook

## Issues Found
- ⚠️ **Readability (Grade 14)**: Reduce sentence complexity for broader audience
- ⚠️ **Brand Voice**: Use "we" instead of "our team" (style guide preference)
- ❌ **Missing CTA**: No call-to-action at end of post

## Recommendations
1. **SEO**: Add internal links to related API documentation
2. **Readability**: Break 3 long paragraphs (200+ words) into shorter sections
3. **Engagement**: Add code example demonstrating rate limiting
4. **CTA**: Include "Try Our API" button linking to signup

## Quick Fixes
- Line 42: "The implementation, which was complex..." → "The implementation was complex..."
- Line 68: Add H3 heading "How It Works" before technical explanation
- Line 105: Add code snippet showing rate limiting headers
```

**Tips:**
- Run audits before publishing new content
- Use for refresh cycles of existing content
- Batch audit all blog posts quarterly
- Track audit scores over time to measure improvement

---

### /write:publish - Publishing Workflow

Streamline content publishing workflow from draft to release with automated checks and deployment.

**Syntax:**
```bash
/write:publish <draft-file> [--platform=<platform>]
```

**Platforms:**
- `wordpress` - WordPress sites via REST API
- `markdown` - Static sites (Astro, Next.js, Hugo)
- `notion` - Notion workspaces
- `medium` - Medium publishing
- `dev` - DEV Community
- `hashnode` - Hashnode blogs

**Features:**
1. Run final content audit (SEO, readability, quality)
2. Validate frontmatter metadata
3. Optimize images (compress, alt text, responsive)
4. Generate social media snippets
5. Publish to target platform
6. Create timestamped archive backup

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

- ✅ **Content Audit Score**: Requires minimum 75/100
- ✅ **Complete Frontmatter**: Title, description, date, author, tags
- ✅ **SEO Meta**: Title 50-60 chars, description 150-160 chars
- ✅ **Optimized Images**: < 200KB each, has alt text
- ✅ **Valid Links**: All internal/external links return 200
- ✅ **Code Blocks**: Syntax highlighting specified
- ✅ **Call-to-Action**: At least one CTA present

**Workflow Steps:**

1. **Audit Stage** (30s)
   ```
   ✓ Running content audit...
   ✓ SEO score: 88/100
   ✓ Readability: Grade 10 (target audience: general)
   ✓ Brand voice: 92% match
   ```

2. **Preparation Stage** (60s)
   ```
   ✓ Compressing images (3 files, 2.1MB → 487KB)
   ✓ Generating social snippets (Twitter, LinkedIn, Facebook)
   ✓ Validating links (12 internal, 5 external)
   ✓ Creating backup: /assets/published/2024-12-30-api-launch.md
   ```

3. **Publishing Stage** (30s)
   ```
   ✓ Uploading to WordPress...
   ✓ Post published: https://example.com/blog/api-launch
   ✓ Sharing to social (scheduled 9:00 AM EST)
   ```

**Generated Social Snippets:**

```markdown
## Twitter/X (280 characters)
🚀 Introducing API rate limiting! Protect infrastructure with configurable limits, real-time monitoring, and graceful degradation. Learn more: [link]

## LinkedIn (1300 characters)
We're excited to announce intelligent API rate limiting in our latest release...
[Full professional post with bullet points, benefits, link]

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
- Archive published content for later reference
- Use `--dry-run` flag to preview without publishing

---

## Related Skills

The `/write` commands automatically activate these skills:

- **[copywriting](/docs/marketing/skills/copywriting)** - Writing and persuasion techniques
- **[content-marketing](/docs/marketing/skills/content-marketing)** - Content strategy and distribution
- **[seo-optimization](/docs/marketing/skills/seo-optimization)** - SEO best practices
- **[analytics](/docs/marketing/skills/analytics)** - Content performance tracking

## Related Agents

These agents collaborate in the `/write` workflow:

- **[copywriter](/docs/marketing/agents/copywriter)** - Craft compelling content
- **[content-reviewer](/docs/marketing/agents/content-reviewer)** - Quality auditing
- **[seo-specialist](/docs/marketing/agents/seo-specialist)** - Search optimization

## Workflows

See full workflow guides:

- [Content Creation Workflow](/docs/marketing/workflows/content-workflow) - End-to-end content production
- [SEO Workflow](/docs/marketing/workflows/seo-workflow) - SEO optimization process

## Troubleshooting

### Writing Style Not Detected

**Issue**: Generated content doesn't match brand voice.

**Solution**:
1. Add 3+ sample posts to `/assets/writing-styles/author-samples/`
2. Include variety of content types (announcements, tutorials, thought leadership)
3. Create `/assets/writing-styles/brand-voice.md` with clear style guidelines
4. Specify tone in prompt: `/write:blog "topic" --tone=technical`

### Publishing Fails

**Issue**: `/write:publish` reports error during deployment.

**Solution**:
1. Verify platform credentials in `.env` file
2. Test API connection: `curl -H "Authorization: Bearer $TOKEN" $API_URL`
3. Check content audit score (must be ≥75/100)
4. Validate frontmatter schema matches platform requirements
5. Use `--dry-run` to see what would be published without actually publishing

### Low Audit Scores

**Issue**: Content audit consistently scores below 75/100.

**Solution**:
1. Check readability: Target Flesch-Kincaid grade 8-12 for general audience
2. Add internal links: Link to 2-3 related posts or documentation
3. Include multimedia: Add at least 1 image, diagram, or code example
4. Improve structure: Use H2/H3 headings to break long sections
5. Add CTA: Include call-to-action at end of post
