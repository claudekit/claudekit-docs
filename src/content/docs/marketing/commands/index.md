---
title: "Marketing Commands"
description: "Complete reference for ClaudeKit Marketing Kit's 21 AI-powered marketing commands - from campaign management to content generation"
section: marketing
category: commands
order: 1
published: true
---

# Marketing Commands

21 specialized commands for marketing automation, content creation, and campaign management. Each command activates specialized AI agents with deep marketing expertise.

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

### Workflow Commands (4 commands)

| Command | Purpose | Best For | Time Saved |
|---------|---------|----------|------------|
| [/plan](/docs/marketing/commands/plan) | Create implementation plans | Complex features | 2-4 hours |
| [/cook](/docs/marketing/commands/cook) | All-in-one implementation | Complete features | 4-8 hours |
| [/brainstorm](/docs/marketing/commands/brainstorm) | Collaborative ideation | Strategy sessions | 1-2 hours |
| [/design](/docs/marketing/commands/design) | AI image generation | Visual assets | 30-60 min |

### Utility Commands (11 commands)

| Command | Purpose | When to Use |
|---------|---------|-------------|
| [/fix](/docs/marketing/commands/fix) | Intelligent issue routing | Bugs, errors, failures |
| [/code](/docs/marketing/commands/code) | Execute existing plans | After planning phase |
| [/scout](/docs/marketing/commands/scout) | Fast codebase search | Finding relevant files |
| [/review](/docs/marketing/commands/review) | Code quality analysis | Before commits |
| [/test](/docs/marketing/commands/test) | Run test suites | Validation checks |
| [/ask](/docs/marketing/commands/ask) | Architectural consultation | Technical decisions |
| [/bootstrap](/docs/marketing/commands/bootstrap) | Project initialization | New projects |
| [/git](/docs/marketing/commands/git) | Git operations | PR creation, commits |
| [/dashboard](/docs/marketing/commands/dashboard) | Marketing dashboard UI | Visual management |
| [/use-mcp](/docs/marketing/commands/use-mcp) | MCP server operations | External integrations |
| [/persona](/docs/marketing/commands/persona) | Customer persona management | Audience research |

## Command Categories

### Planning & Strategy

Start here for new features or campaigns:

```bash
# Research and plan a feature
/plan implement email drip campaign with analytics

# Brainstorm solutions collaboratively
/brainstorm how to improve conversion rates

# Get architectural guidance
/ask what's the best way to structure our marketing automation?
```

### Implementation

Execute your plans:

```bash
# Implement existing plan
/code plans/251229-email-campaign.md

# Plan + implement in one command
/cook add blog post SEO optimization workflow
```

### Content Creation

Generate marketing assets:

```bash
# Create blog content
/content blog "AI marketing automation guide"

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

### Issue Resolution

Fix problems intelligently:

```bash
# Type errors
/fix TypeScript compilation errors in campaign module

# UI issues
/fix Button not responsive on mobile

# CI/CD failures
/fix GitHub Actions build failing

# Complex issues
/fix:hard Refactor campaign architecture
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

# Step 2: Generate content
/content blog "Marketing automation tools comparison 2025"

# Step 3: Generate images
/design featured image for blog post

# Step 4: Optimize
/seo audit https://yourblog.com/marketing-automation

# Step 5: Commit
/git:cm
```

**Time**: 20 minutes vs 4-6 hours manually

### 3. Build Marketing Dashboard

```bash
# Step 1: Plan architecture
/plan build marketing dashboard with campaign tracking

# Step 2: Implement
/code

# Step 3: Launch dashboard
/dashboard dev

# Step 4: Test
/test

# Step 5: Review and commit
/review
/git:cm
```

**Time**: 2 hours vs 2-3 days manually

### 4. Fix Campaign Issues

```bash
# Quick diagnosis
/debug email open rates dropping

# Intelligent routing
/fix campaign analytics not tracking conversions

# For complex issues
/fix:hard Refactor entire email delivery system
```

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

Many commands support variants for specialized behavior:

### Speed Variants
```bash
/plan:fast    # Quick planning (simple features)
/cook:fast    # Fast implementation
/fix:fast     # Quick fixes
```

### Complexity Variants
```bash
/plan:hard    # Complex planning (multi-phase)
/cook:hard    # Complex implementation
/fix:hard     # Deep architectural fixes
```

### Parallelization Variants
```bash
/plan:parallel    # Parallel phase execution
/cook:parallel    # Parallel feature development
/fix:parallel     # Fix multiple issues simultaneously
```

### Automation Variants
```bash
/plan:auto        # Automated planning
/cook:auto        # Full automation
/bootstrap:auto   # Automated bootstrap
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

### 1. Start Small
```bash
# Good: Specific, focused
/plan add email open rate tracking

# Avoid: Vague, too broad
/plan improve marketing
```

### 2. Use Variants Wisely
```bash
# Simple feature → fast variant
/cook:fast add newsletter signup form

# Complex feature → standard variant
/cook implement multi-channel campaign automation
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
# Research → Plan → Implement → Test → Commit
/brainstorm email automation strategy
# (review brainstorm output)
/plan implement email automation
# (review plan)
/code
# (tests run automatically)
/git:cm
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

### Parallel Execution
Use parallel variants for independent tasks:
```bash
# Fix multiple unrelated issues
/fix:parallel type errors + UI bugs + test failures
```

### Scout Before Coding
Find relevant files first:
```bash
# Search codebase efficiently
/scout find campaign-related components

# Then implement
/code
```

### Use Dashboard for Visibility
```bash
# Launch visual interface
/dashboard

# Manage campaigns, content, assets visually
# Access at http://localhost:5173
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
- [Marketing Skills](/docs/marketing/skills) - Specialized expertise modules
- [Marketing Workflows](/docs/marketing/workflows) - Common workflows
- [Marketing Dashboard](/docs/marketing/dashboard) - Visual management interface

---

**21 commands. Infinite marketing possibilities.** Your AI marketing team is ready.
