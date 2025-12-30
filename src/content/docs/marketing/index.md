---
title: "Marketing Kit"
description: "AI-powered marketing automation toolkit for content, campaigns, and growth"
section: marketing
category: overview
order: 1
---

# Marketing Kit

Welcome to the ClaudeKit Marketing Kit documentation. This toolkit provides AI-powered automation for your entire marketing workflow.

## What's Inside

The Marketing Kit includes:

- **27 Specialized Agents** - From campaign management to content creation
- **73+ Slash Commands** - Quick access to marketing automation tasks
- **60+ Skills** - Specialized capabilities for every marketing need
- **10 Workflows** - Step-by-step guides for common marketing tasks
- **Real-time Dashboard** - Monitor campaigns and analytics

## Quick Start

Get started with the Marketing Kit in just a few commands:

```bash
# Install ClaudeKit CLI
npm install -g claudekit-cli

# Create a new marketing project
ck new --kit marketing

# Start your first campaign
/campaign create "Q1 Product Launch"
```

## Unfair Advantage

Unlike traditional marketing tools, ClaudeKit Marketing has **full access to your codebase**:

- **Product Screenshots** - Automatically extracted from actual UI code
- **Feature Descriptions** - Generated from implementation, not imagination
- **Technical Accuracy** - Marketing claims verified against real code
- **Version Sync** - Content updates when features change

This means your marketing materials are always accurate, technically precise, and impossible for competitors to replicate without your codebase.

## Core Features

### Asset Management (Content Hub)

Centralized hub for all marketing assets with intelligent organization:

```bash
# Open visual dashboard
/dashboard

# Manages 6 asset categories:
# - Copy & Writing Styles
# - Storyboards (video narratives)
# - Presentations (pitch decks, proposals)
# - Infographics (data visualizations)
# - Branding Guidelines (logos, colors, voice)
# - Social Posts (platform-specific content)
```

**Screenshots**:

![Asset Management Hub](/docs/screenshots/assets-management.png)
![Branding Guidelines](/docs/screenshots/assets-branding-guideline.png)
![Storyboard Preview](/docs/screenshots/assets-storyboard-preview.png)

See [Asset Management](/docs/marketing/features/asset-management) for full details.

### Content Creation

Generate high-quality marketing content with author voice extraction:

```bash
# Blog posts with style matching
/write:blog "10 SaaS Pricing Strategies" --style casual-founder

# Content quality audit
/write:audit /assets/copy/blog-posts/pricing-guide.md

# Publishing workflow
/write:publish /assets/copy/blog-posts/pricing-guide.md
```

See [Write Commands](/docs/marketing/commands/write) for details.

### Video Production

Professional video workflows with Gemini Veo 3.1 + Imagen 4:

```bash
# Complete video creation
/video:create "Product demo for homepage"

# Platform-specific scripts
/video:script --platform youtube --duration 60s

# Visual storyboarding
/video:storyboard "SaaS product launch campaign"
```

See [Video Commands](/docs/marketing/commands/video) for details.

### Presentations

Beautiful slide decks for every occasion:

```bash
# Pitch deck generation
/slide:create "Series A Fundraising Deck"

# Campaign proposals
/slide:create "Q1 Marketing Campaign Proposal"

# Product demos
/slide:create "Feature Launch Demo" --theme Modern
```

See [Slide Commands](/docs/marketing/commands/slide) for details.

### Campaign Management

Create, manage, and optimize marketing campaigns with AI assistance:

```bash
/campaign create "Summer Sale 2025"
/campaign status
/campaign analyze
```

### SEO Optimization

Boost your search rankings with AI-powered SEO tools:

```bash
/seo keywords "competitor analysis"
/seo optimize "landing page"
/seo audit
```

### Analytics & Insights

Track performance and get actionable insights:

```bash
/analyze traffic
/analyze campaigns
/analyze conversions
```

## Next Steps

- [Marketing Agents](/docs/marketing/agents) - Meet your AI marketing team
- [Marketing Commands](/docs/marketing/commands) - All available commands
- [Marketing Workflows](/docs/marketing/workflows) - Step-by-step guides
