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
| [/ckm:campaign](/docs/marketing/commands/campaign) | Create and manage campaigns | Campaign briefs + reports | campaign-manager, funnel-architect |
| [/ckm:content](/docs/marketing/commands/content) | Generate marketing content | Blog posts, landing pages | content-creator, seo-specialist |
| [/ckm:seo](/docs/marketing/commands/seo) | SEO audit and optimization | SEO reports + recommendations | seo-specialist |
| [/ckm:email](/docs/marketing/commands/email) | Create email content | Email sequences | email-wizard, copywriter |
| [/ckm:social](/docs/marketing/commands/social) | Social media content | Platform-specific posts | social-media-manager |
| [/ckm:analyze](/docs/marketing/commands/analyze) | Analytics and performance | Data-driven insights | analytics-analyst |

### Content Creation Commands (6 commands)

| Command | Purpose | Best For | Time Saved |
|---------|---------|----------|------------|
| [/ckm:write](/docs/marketing/commands/write) | Blog posts, content audit, publishing | Long-form content | 2-4 hours |
| [/ckm:video](/docs/marketing/commands/video) | Video scripts, storyboards, production | Marketing videos | 4-8 hours |
| [/ckm:slide](/docs/marketing/commands/slide) | Presentations, pitch decks | Sales & proposals | 2-3 hours |
| [/ckm:brainstorm](/docs/marketing/commands/brainstorm) | Collaborative idea generation | Strategy sessions | 1-2 hours |
| [/ckm:design](/docs/marketing/commands/design) | AI image generation | Visual assets | 30-60 minutes |

### Utility Commands (8 commands)

| Command | Purpose | When to Use |
|---------|---------|-------------|
| [/ckm:scout](/docs/marketing/commands/scout) | Quick codebase search | Find relevant files |
| [/ckm:review](/docs/marketing/commands/review) | Code quality analysis | Before committing |
| [/ckm:ask](/docs/marketing/commands/ask) | Architecture consultation | Technical decisions |
| [/ckm:bootstrap](/docs/marketing/commands/bootstrap) | Project initialization | New projects |
| [/ckm:git](/docs/marketing/commands/git) | Git operations | Create PRs, commits |
| [/ckm:dashboard](/docs/marketing/commands/dashboard) | Marketing dashboard UI | Visual management |
| [/ckm:use-mcp](/docs/marketing/commands/use-mcp) | MCP server operations | External integrations |
| [/ckm:persona](/docs/marketing/commands/persona) | Customer persona management | Audience research |

## Command Catalog

### Planning & Strategy

Start here for new campaigns or creative briefs:

```bash
# Brainstorm solutions together
/ckm:brainstorm how to improve conversion rates

# Get architecture guidance
/ckm:ask what's the best way to structure our marketing automation?

# Create customer personas
/ckm:persona create "enterprise software buyers"
```

### Content Creation

Generate marketing assets:

```bash
# Create blog content with brand voice matching
/ckm:write:blog "AI marketing automation guide"

# Audit existing content quality
/ckm:write:audit /assets/blog-posts/latest-post.md

# Create video with script and storyboard
/ckm:video:create "30-second product demo for social media"

# Create pitch deck
/ckm:slide:create "Series A investor pitch deck"

# Create email sequences
/ckm:email nurture "SaaS trial users"

# Social media posts
/ckm:social linkedin post "product launch announcement"

# Visual assets
/ckm:design hero banner for landing page
```

### Campaign Management

Orchestrate marketing campaigns:

```bash
# Create new campaign
/ckm:campaign create "Q1 Product Launch"

# Check campaign status
/ckm:campaign status "Q1 Product Launch"

# Analyze performance
/ckm:campaign analyze "Q1 Product Launch"
```

### SEO & Analytics

Optimize and measure:

```bash
# Technical SEO audit
/ckm:seo audit https://example.com

# Keyword research
/ckm:seo keywords "project management software"

# Analytics reports
/ckm:analyze traffic
/ckm:analyze conversions
```

## Common Workflows

### 1. Launch Marketing Campaign

```bash
# Step 1: Define audience
/ckm:persona create

# Step 2: Plan campaign
/ckm:campaign create "Summer Sale 2025"

# Step 3: Create content
/ckm:email launch "Summer Sale"
/ckm:social twitter thread "Summer Sale announcement"
/ckm:design social graphic for Twitter

# Step 4: Track performance
/ckm:analyze campaigns
```

**Time**: 30 minutes vs. 2-3 days manual

### 2. Create SEO Blog Post

```bash
# Step 1: Keyword research
/ckm:seo keywords "best marketing automation tools"

# Step 2: Create content
/ckm:content blog "Marketing automation tools comparison 2025"

# Step 3: Create images
/ckm:design featured image for blog post

# Step 4: Optimize
/ckm:seo audit https://yourblog.com/marketing-automation

# Step 5: Commit
/ckm:git cm
```

**Time**: 20 minutes vs. 4-6 hours manual

### 3. Create Marketing Video

```bash
# Step 1: Create script
/ckm:video:script "Product feature demo" --duration=60 --platform=youtube

# Step 2: Create storyboard
/ckm:video:storyboard /assets/videos/latest-script.md

# Step 3: Create complete video
/ckm:video:create "Product demo video for homepage"
```

**Time**: 30 minutes vs. 2-3 days manual

### 4. Prepare Pitch Deck

```bash
# Step 1: Create presentation
/ckm:slide:create "Series A investor pitch deck"

# Step 2: View dashboard to manage assets
/ckm:dashboard

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

Use `/ckm:use-mcp` to interact with connected MCP servers.

## Best Practices

### 1. Start Specific
```bash
# Good: Specific, focused
/ckm:write:blog "10 SaaS pricing strategies for 2025"

# Avoid: Vague, too broad
/ckm:write:blog "marketing tips"
```

### 2. Use Right Command for Job
```bash
# Blog post → /ckm:write
/ckm:write:blog "Complete guide to email marketing"

# Video content → /ckm:video
/ckm:video:create "30-second product demo"

# Presentations → /ckm:slide
/ckm:slide:create "Q1 campaign proposal"
```

### 3. Let AI Clarify
Commands will ask questions when needed:
```bash
/ckm:email newsletter

# AI asks:
# - Target audience?
# - Key message?
# - Desired action?
```

### 4. Review Before Publishing
```bash
# Always audit content
/ckm:write:audit /assets/blog-posts/latest.md

# Review quality scores
# Then publish
/ckm:write:publish /assets/blog-posts/latest.md
```

### 5. Use Dashboard for Management
```bash
# View all marketing assets
/ckm:dashboard

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
/ckm:ck-help campaign
/ckm:ck-help plan
/ckm:ck-help fix
```

### Search Documentation
```bash
# Find relevant commands
/ckm:ck-help search email marketing
/ckm:ck-help search SEO
```

### Task Suggestions
```bash
# Get command suggestions
/ckm:ck-help How do I create a blog post?
/ckm:ck-help What command analyzes campaigns?
```

## Performance Tips

### Use Dashboard for Visual Management
```bash
# Launch visual interface
/ckm:dashboard

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
/ckm:write:audit /assets/blog-posts/article.md

# Ensure score ≥75/100 for SEO, readability, brand voice
```

## Next Steps

**New to ClaudeKit Marketing?**
1. [Quick Start Guide](/docs/marketing)
2. [Installation](/docs/getting-started/installation)
3. [Marketing Concepts](/docs/marketing)

**Ready to Create?**
- [Campaign Management](/docs/marketing/commands/campaign)
- [Content Creation](/docs/marketing/commands/content)
- [SEO Optimization](/docs/marketing/commands/seo)

**Advanced Topics**:
- [Custom Marketing Agents](/docs/marketing/agents)
- [Marketing Workflows](/docs/marketing/workflows)
- [Dashboard Features](/docs/marketing/commands/dashboard)

## Related Resources

- [Marketing Agents](/docs/marketing/agents) - Meet your AI marketing team
- [Marketing Skills](/docs/marketing/skills) - Specialized modules
- [Marketing Workflows](/docs/marketing/workflows) - Common workflows
- [Marketing Dashboard](/docs/marketing/commands/dashboard) - Visual management interface

---

**19 commands. Infinite marketing possibilities.** Your AI marketing team is ready.
