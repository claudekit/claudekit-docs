---
title: "Marketing Commands"
description: "Complete reference for ClaudeKit Marketing Kit's 21 AI-powered marketing commands - from campaign management to content generation"
section: marketing
category: commands
order: 1
published: true
---

# Marketing Commands

19 specialized commands for marketing automation, content creation, and campaign management. Each command activates specialized AI agents with deep marketing expertise.

## Quick Reference Matrix

### Core Marketing (6 commands)

| Command | Purpose | Output | Agents Used |
|---------|---------|--------|-------------|
| [/campaign](/docs/marketing/commands/campaign) | Create and manage campaigns | Campaign briefs + reports | campaign-manager, funnel-architect |
| [/content](/docs/marketing/commands/content) | Generate marketing content | Blog posts, landing pages | content-creator, seo-specialist |
| [/seo](/docs/marketing/commands/seo) | SEO audit and optimization | SEO reports + recommendations | seo-specialist |
| [/email](/docs/marketing/commands/email) | Email content generation | Email sequences | email-wizard, copywriter |
| [/social](/docs/marketing/commands/social) | Social media content | Platform-specific posts | social-media-manager |
| [/analyze](/docs/marketing/commands/analyze) | Analytics and performance | Data-driven insights | analytics-analyst |

### Content Creation Commands (6 commands)

| Command | Purpose | Best For | Time Saved |
|---------|---------|----------|------------|
| [/write](/docs/marketing/commands/write) | Blog posts, content audit, publishing | Long-form content | 2-4 hours |
| [/video](/docs/marketing/commands/video) | Video scripts, storyboards, production | Video marketing | 4-8 hours |
| [/slide](/docs/marketing/commands/slide) | Presentation decks, pitch decks | Sales & proposals | 2-3 hours |
| [/brainstorm](/docs/marketing/commands/brainstorm) | Collaborative ideation | Strategy sessions | 1-2 hours |
| [/design](/docs/marketing/commands/design) | AI image generation | Visual assets | 30-60 min |

### Utility Commands (8 commands)

| Command | Purpose | When to Use |
|---------|---------|-------------|
| [/scout](/docs/marketing/commands/scout) | Fast codebase search | Finding relevant files |
| [/review](/docs/marketing/commands/review) | Code quality analysis | Before commits |
| [/ask](/docs/marketing/commands/ask) | Architectural consultation | Technical decisions |
| [/bootstrap](/docs/marketing/commands/bootstrap) | Project initialization | New projects |
| [/git](/docs/marketing/commands/git) | Git operations | PR creation, commits |
| [/dashboard](/docs/marketing/commands/dashboard) | Marketing dashboard UI | Visual management |
| [/use-mcp](/docs/marketing/commands/use-mcp) | MCP server operations | External integrations |
| [/persona](/docs/marketing/commands/persona) | Customer persona management | Audience research |

## Command Categories

### Planning & Strategy

Start here for new campaigns or creative briefs:

```bash
# Brainstorm solutions collaboratively
/brainstorm how to improve conversion rates

# Get architectural guidance
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

# Generate video with script and storyboard
/video:create "30-second product demo for social media"

# Create presentation deck
/slide:create "Q1 campaign proposal with budget breakdown"

# Generate email sequences
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

### Visual Management

Use the dashboard for visual oversight:

```bash
# Launch marketing dashboard
/dashboard

# Manage campaigns visually
# Access asset library
# View analytics reports
# Run automation workflows
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

# Step 4: Monitor performance
/analyze campaigns
```

**Time**: 30 minutes vs 2-3 days manually

### 2. Create SEO Blog Post

```bash
# Step 1: Keyword research
/seo keywords "best marketing automation tools"

# Step 2: Generate content with brand voice
/write:blog "Marketing automation tools comparison 2025"

# Step 3: Audit content quality
/write:audit /assets/blog-posts/2025-01-01-marketing-automation.md

# Step 4: Generate featured image
/design featured image for blog post

# Step 5: Optimize and publish
/write:publish /assets/blog-posts/2025-01-01-marketing-automation.md --platform=wordpress

# Step 6: Commit
/git:cm
```

**Time**: 25 minutes vs 4-6 hours manually

### 3. Create Video Marketing Content

```bash
# Step 1: Generate video script
/video:script "explain our API features in 60 seconds" --platform=youtube

# Step 2: Create visual storyboard
/video:storyboard /assets/videos/2025-01-01-api-features/script.md

# Step 3: Generate complete video
/video:create "API features demo with dashboard walkthrough"

# Step 4: Review in dashboard
/dashboard
# Navigate to Asset Management → Videos

# Step 5: Commit and share
/git:cm
```

**Time**: 30 minutes vs 8-12 hours manually

### 4. Build Sales Presentation

```bash
# Step 1: Create pitch deck
/slide:create "Series A pitch deck - AI marketing automation, $3M raise"

# Step 2: Generate speaker notes
/slide:create "pitch deck" --speaker-notes

# Step 3: Review and customize
# Open /assets/slides/presentation.pptx in PowerPoint

# Step 4: Commit final version
/git:cm
```

**Time**: 20 minutes vs 3-4 hours manually

### 5. Bootstrap New Marketing Project

```bash
# Complete project setup
/bootstrap Create AI-powered marketing automation platform

# What it does:
# - Research best practices
# - Recommend tech stack
# - Create implementation plan
# - Generate designs
# - Implement features
# - Write tests
# - Create documentation
# - Onboard user
```

**Time**: 1 hour vs 1-2 weeks manually

## Command Variants

Some commands support variants for specialized behavior:

### Content Variants
```bash
/write:blog      # Blog post generation
/write:audit     # Content quality audit
/write:publish   # Publishing workflow

/video:create    # Complete video workflow
/video:script    # Script generation only
/video:storyboard # Visual storyboarding only
```

### Platform Variants
```bash
/social:linkedin    # LinkedIn-specific content
/social:twitter     # Twitter/X content
/social:instagram   # Instagram content

/video:script "topic" --platform=youtube
/video:script "topic" --platform=tiktok
```

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

See [Marketing Skills](/docs/marketing/skills) for complete catalog.

## MCP Integrations

Commands support Model Context Protocol servers:

- **Google Analytics 4**: Traffic and behavior data
- **Search Console**: Search performance
- **Discord**: Community management
- **Slack**: Team collaboration

Use `/use-mcp` to interact with connected MCP servers.

## Best Practices

### 1. Be Specific
```bash
# Good: Specific, focused
/write:blog "how to improve API response times with caching strategies"

# Avoid: Vague, too broad
/write:blog "make APIs better"
```

### 2. Use Appropriate Commands
```bash
# Blog content → /write
/write:blog "marketing automation guide"

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

### 4. Review Before Commit
```bash
# Always review changes
/code plans/feature.md

# Let code-reviewer validate
# Then commit
/git:cm
```

### 5. Chain Commands
```bash
# Research → Create → Audit → Publish
/brainstorm content ideas for Q1 campaign
# (review brainstorm output)
/write:blog "top content idea from brainstorm"
# (review draft)
/write:audit /assets/blog-posts/latest-draft.md
# (improve based on audit)
/write:publish /assets/blog-posts/latest-draft.md --platform=wordpress
```

## Getting Help

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

### Task Recommendations
```bash
# Get command suggestions
/ck-help How do I create a blog post?
/ck-help What command analyzes campaigns?
```

## Performance Tips

### Batch Content Creation
Create multiple assets in one session:
```bash
# Generate blog series
/write:blog "Part 1: Introduction to marketing automation"
/write:blog "Part 2: Email automation workflows"
/write:blog "Part 3: Analytics and optimization"

# Create social promotion
/social linkedin "announce blog series"
/social twitter "thread about blog series"
```

### Audit Before Publishing
Always audit content quality:
```bash
# Create draft
/write:blog "topic"

# Audit quality (get actionable feedback)
/write:audit /assets/blog-posts/draft.md

# Fix issues, then publish
/write:publish /assets/blog-posts/draft.md
```

### Use Dashboard for Asset Management
```bash
# Launch visual interface
/dashboard

# Navigate to Asset Management
# Browse all generated content
# Preview videos, slides, images
# Organize into collections
# Access at http://localhost:5173
```

## Next Steps

**New to ClaudeKit Marketing?**
1. [Quick Start Guide](/docs/marketing/quick-start)
2. [Installation](/docs/getting-started/installation)
3. [Marketing Concepts](/docs/marketing/core-concepts)

**Ready to Create?**
- [Blog Writing](/docs/marketing/commands/write) - `/write:blog`, audit, publish
- [Video Production](/docs/marketing/commands/video) - Scripts, storyboards, generation
- [Presentations](/docs/marketing/commands/slide) - Pitch decks, proposals
- [Campaign Management](/docs/marketing/commands/campaign) - Campaign orchestration
- [SEO Optimization](/docs/marketing/commands/seo) - Audits, keywords

**Advanced Topics**:
- [Custom Marketing Agents](/docs/marketing/agents/custom)
- [Marketing Workflows](/docs/marketing/workflows)
- [Dashboard & Asset Management](/docs/marketing/commands/dashboard)

## Related Resources

- [Marketing Agents](/docs/marketing/agents) - Meet your AI marketing team
- [Marketing Skills](/docs/marketing/skills) - Specialized expertise modules
- [Marketing Workflows](/docs/marketing/workflows) - Common workflows
- [Marketing Dashboard](/docs/marketing/dashboard) - Visual management interface

---

**19 commands. Infinite marketing possibilities.** Your AI marketing team is ready.
