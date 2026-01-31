---
title: "Marketing Commands"
description: "Complete documentation for ClaudeKit Marketing Kit's 21 AI-powered marketing commands - from campaign management to content creation"
section: marketing
category: commands
order: 1
published: true
---

# Marketing Commands

19 specialized commands for marketing automation, content creation, and campaign management. Each command activates AI agents with deep marketing expertise.

## Quick Reference Matrix

### Core Marketing Commands (6 commands)

| Command | Purpose | Output | Agents Used |
|---------|---------|--------|-------------|
| [/campaign](/docs/marketing/commands/campaign) | Create and manage campaigns | Campaign briefs + reports | campaign-manager, funnel-architect |
| [/content](/docs/marketing/commands/content) | Generate marketing content | Blog posts, landing pages | content-creator, seo-specialist |
| [/seo](/docs/marketing/commands/seo) | SEO audit and optimization | SEO reports + recommendations | seo-specialist |
| [/email](/docs/marketing/commands/email) | Create email content | Email sequences | email-wizard, copywriter |
| [/social](/docs/marketing/commands/social) | Social media content | Platform-specific posts | social-media-manager |
| [/analyze](/docs/marketing/commands/analyze) | Analytics and performance | Data-driven insights | analytics-analyst |

### Content Creation Commands (6 commands)

| Command | Purpose | Best For | Time Saved |
|---------|---------|----------|------------|
| [/write](/docs/marketing/commands/write) | Blog posts, content audit, publishing | Long-form content | 2-4 hours |
| [/video](/docs/marketing/commands/video) | Video scripts, storyboards, production | Marketing videos | 4-8 hours |
| [/slide](/docs/marketing/commands/slide) | Presentations, pitch decks | Sales & proposals | 2-3 hours |
| [/brainstorm](/docs/marketing/commands/brainstorm) | Collaborative idea generation | Strategy sessions | 1-2 hours |
| [/design](/docs/marketing/commands/design) | AI image generation | Visual assets | 30-60 minutes |

### Utility Commands (8 commands)

| Command | Purpose | When to Use |
|---------|---------|-------------|
| [/scout](/docs/marketing/commands/scout) | Quick codebase search | Find relevant files |
| [/review](/docs/marketing/commands/review) | Code quality analysis | Before committing |
| [/ask](/docs/marketing/commands/ask) | Architecture consultation | Technical decisions |
| [/bootstrap](/docs/marketing/commands/bootstrap) | Project initialization | New projects |
| [/git](/docs/marketing/commands/git) | Git operations | Create PRs, commits |
| [/dashboard](/docs/marketing/commands/dashboard) | Marketing dashboard UI | Visual management |
| [/use-mcp](/docs/marketing/commands/use-mcp) | MCP server operations | External integrations |
| [/persona](/docs/marketing/commands/persona) | Customer persona management | Audience research |

## Command Catalog

### Planning & Strategy

Start here for new campaigns or creative briefs:

```bash
# Brainstorm solutions together
/brainstorm how to improve conversion rates

# Get architecture guidance
/ask what's the best way to structure our marketing automation?

# Create customer personas
/persona create "enterprise software buyers"
```

### Content Creation

Generate marketing assets:

```bash
# Create blog content with brand voice matching
/write:blog "AI marketing automation guide"

# Audit existing content quality
/write:audit /assets/blog-posts/latest-post.md

# Create video with script and storyboard
/video:create "30-second product demo for social media"

# Create pitch deck
/slide:create "Series A investor pitch deck"

# Create email sequences
/email nurture "SaaS trial users"

# Social media posts
/social linkedin post "product launch announcement"

# Visual assets
/design hero banner for landing page
```

### Campaign Management

Orchestrate marketing campaigns:

```bash
# Create new campaign
/campaign create "Q1 Product Launch"

# Check campaign status
/campaign status "Q1 Product Launch"

# Analyze performance
/campaign analyze "Q1 Product Launch"
```

### SEO & Analytics

Optimize and measure:

```bash
# Technical SEO audit
/seo audit https://example.com

# Keyword research
/seo keywords "project management software"

# Analytics reports
/analyze traffic
/analyze conversions
```

## Common Workflows

### 1. Launch Marketing Campaign

```bash
# Step 1: Define audience
/persona create

# Step 2: Plan campaign
/campaign create "Summer Sale 2025"

# Step 3: Create content
/email launch "Summer Sale"
/social twitter thread "Summer Sale announcement"
/design social graphic for Twitter

# Step 4: Track performance
/analyze campaigns
```

**Time**: 30 minutes vs. 2-3 days manual

### 2. Create SEO Blog Post

```bash
# Step 1: Keyword research
/seo keywords "best marketing automation tools"

# Step 2: Create content
/content blog "Marketing automation tools comparison 2025"

# Step 3: Create images
/design featured image for blog post

# Step 4: Optimize
/seo audit https://yourblog.com/marketing-automation

# Step 5: Commit
/git cm
```

**Time**: 20 minutes vs. 4-6 hours manual

### 3. Create Marketing Video

```bash
# Step 1: Create script
/video:script "Product feature demo" --duration=60 --platform=youtube

# Step 2: Create storyboard
/video:storyboard /assets/videos/latest-script.md

# Step 3: Create complete video
/video:create "Product demo video for homepage"
```

**Time**: 30 minutes vs. 2-3 days manual

### 4. Prepare Pitch Deck

```bash
# Step 1: Create presentation
/slide:create "Series A investor pitch deck"

# Step 2: View dashboard to manage assets
/dashboard

# Step 3: Export and share
# .pptx file ready for editing at /assets/slides/
```

**Time**: 20 minutes vs. 1-2 days manual

## Output Conventions

All commands follow consistent output patterns:

### Campaign Assets
```
assets/campaigns/{date}-{slug}/
├── briefs/
├── creatives/
└── reports/
```

### Content Assets
```
assets/
├── copy/emails/{date}-{type}-{slug}.md
├── posts/{platform}/{date}-{slug}.md
├── articles/{date}-{slug}/{date}-{slug}.md
└── banners/
```

### Reports
```
reports/analytics/{date}-{type}.md
assets/diagnostics/campaign-audits/{date}-{name}.md
assets/seo/audits/{date}-{domain}-audit.md
```

### Plans
```
plans/{date}-{slug}/
├── plan.md
├── phase-01-{name}.md
├── phase-02-{name}.md
└── reports/
```

## Agent Ecosystem

Commands activate specialized AI agents:

### Content Agents
- **content-creator**: Blog posts, landing pages
- **copywriter**: Sales copy, CTAs
- **email-wizard**: Email sequences
- **social-media-manager**: Social content

### Strategy Agents
- **campaign-manager**: Campaign orchestration
- **funnel-architect**: Conversion funnels
- **seo-specialist**: SEO optimization
- **analytics-analyst**: Performance analysis

### Development Agents
- **planner**: Implementation planning
- **tester**: Quality assurance
- **code-reviewer**: Code quality
- **debugger**: Root cause analysis

### Support Agents
- **researcher**: Market research
- **lead-qualifier**: Audience analysis
- **project-manager**: Progress tracking
- **docs-manager**: Documentation

See [Marketing Agents](/docs/marketing/agents) for complete details.

## Skill Activation

Commands automatically activate relevant skills:

- **campaign-management**: Campaign templates and workflows
- **email-marketing**: Email best practices
- **seo-optimization**: SEO frameworks
- **social-media**: Platform strategies
- **creativity**: Design and copywriting
- **analytics**: Performance tracking
- **ai-multimodal**: Image generation and analysis
- **brand-guidelines**: Brand consistency

See [Marketing Skills](/docs/marketing/skills) for full catalog.

## MCP Integrations

Commands support Model Context Protocol servers:

- **Google Analytics 4**: Traffic and behavior data
- **Search Console**: Search performance
- **Discord**: Community management
- **Slack**: Team collaboration

Use `/use-mcp` to interact with connected MCP servers.

## Best Practices

### 1. Start Specific
```bash
# Good: Specific, focused
/write:blog "10 SaaS pricing strategies for 2025"

# Avoid: Vague, too broad
/write:blog "marketing tips"
```

### 2. Use Right Command for Job
```bash
# Blog post → /write
/write:blog "Complete guide to email marketing"

# Video content → /video
/video:create "30-second product demo"

# Presentations → /slide
/slide:create "Q1 campaign proposal"
```

### 3. Let AI Clarify
Commands will ask questions when needed:
```bash
/email newsletter

# AI asks:
# - Target audience?
# - Key message?
# - Desired action?
```

### 4. Review Before Publishing
```bash
# Always audit content
/write:audit /assets/blog-posts/latest.md

# Review quality scores
# Then publish
/write:publish /assets/blog-posts/latest.md
```

### 5. Use Dashboard for Management
```bash
# View all marketing assets
/dashboard

# Manage:
# - Copy & Writing Styles
# - Video Storyboards
# - Presentations
# - Branding Guidelines
# - Social Posts
```

## Get Help

### Command-Specific Help
```bash
# Get detailed command usage
/ck-help campaign
/ck-help plan
/ck-help fix
```

### Search Documentation
```bash
# Find relevant commands
/ck-help search email marketing
/ck-help search SEO
```

### Task Suggestions
```bash
# Get command suggestions
/ck-help How do I create a blog post?
/ck-help What command analyzes campaigns?
```

## Performance Tips

### Use Dashboard for Visual Management
```bash
# Launch visual interface
/dashboard

# Manage campaigns, content, assets visually
# Access at http://localhost:5173
```

### Leverage Asset Management
```bash
# Organize assets by category
# - Copy & Writing Styles
# - Video Storyboards
# - Presentations
# - Infographics
# - Branding Guidelines
# - Social Posts
```

### Audit Content Before Publishing
```bash
# Check quality before publishing
/write:audit /assets/blog-posts/article.md

# Ensure score ≥75/100 for SEO, readability, brand voice
```

## Next Steps

**New to ClaudeKit Marketing?**
1. [Quick Start Guide](/docs/marketing/quick-start)
2. [Installation](/docs/getting-started/installation)
3. [Marketing Concepts](/docs/marketing/core-concepts)

**Ready to Create?**
- [Campaign Management](/docs/marketing/commands/campaign)
- [Content Creation](/docs/marketing/commands/content)
- [SEO Optimization](/docs/marketing/commands/seo)

**Advanced Topics**:
- [Custom Marketing Agents](/docs/marketing/agents/custom)
- [Marketing Workflows](/docs/marketing/workflows)
- [Dashboard Features](/docs/marketing/commands/dashboard)

## Related Resources

- [Marketing Agents](/docs/marketing/agents) - Meet your AI marketing team
- [Marketing Skills](/docs/marketing/skills) - Specialized modules
- [Marketing Workflows](/docs/marketing/workflows) - Common workflows
- [Marketing Dashboard](/docs/marketing/dashboard) - Visual management interface

---

**19 commands. Infinite marketing possibilities.** Your AI marketing team is ready.
