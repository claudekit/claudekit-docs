---
title: "Marketing Skills Overview"
description: "Comprehensive guide to Marketing Kit's 20+ specialized skills for content creation, SEO, analytics, and AI-powered marketing automation."
section: marketing
category: skills
order: 1
---

Marketing Kit includes 20+ specialized skills that power agents with domain expertise, automation workflows, and AI capabilities. Skills activate implicitly based on context or explicitly via natural language prompts.

## Skill Categories

### Core Marketing (7 skills)
Production-ready marketing operations and content workflows.

| Skill | Purpose | Key Features |
|-------|---------|--------------|
| [Content Marketing](/docs/marketing/skills/content-marketing) | Content strategy and editorial planning | Editorial calendars, content pillars, blog templates, audit workflows |
| [SEO Optimization](/docs/marketing/skills/seo-optimization) | Technical SEO and keyword research | Google Search Console API, ReviewWeb.site API, Core Web Vitals, programmatic SEO |
| [Analytics](/docs/marketing/skills/analytics) | Marketing metrics and reporting | GA4 API, KPI tracking, attribution models, ROI analysis |
| [Email Marketing](/docs/marketing/skills/email-marketing) | Email campaigns and automation | Campaign templates, drip sequences, automation flows, deliverability |
| [Social Media](/docs/marketing/skills/social-media) | Social content and engagement | Platform-specific content, threads, cross-posting, scheduling |
| [Campaign Management](/docs/marketing/skills/campaign-management) | Multi-channel campaign execution | Campaign briefs, budget allocation, launch checklists, post-mortems |
| [Copywriting](/docs/marketing/skills/copywriting) | Conversion-focused copy | Copy formulas (AIDA, PAS, BAB), headline templates, CTA optimization |

### Specialized Marketing (8 skills)
Advanced tactics and growth strategies.

| Skill | Purpose | Key Features |
|-------|---------|--------------|
| [Brainstorming](/docs/marketing/skills/brainstorming) | Collaborative ideation and validation | Structured dialogue, approach evaluation, decision documentation |
| [Ads Management](/docs/marketing/skills/ads-management) | Paid advertising campaigns | Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads optimization |
| [Affiliate Marketing](/docs/marketing/skills/affiliate-marketing) | SaaS affiliate program design | Commission structures, platform selection, fraud prevention |
| [Gamification Marketing](/docs/marketing/skills/gamification-marketing) | Behavioral psychology campaigns | Points, badges, leaderboards, streaks, challenges |
| [Referral Program Building](/docs/marketing/skills/referral-program-building) | Viral referral mechanics | Two-sided rewards, attribution tracking, platform integration |
| [Brand Guidelines](/docs/marketing/skills/brand-guidelines) | Brand consistency and asset management | Brand voice, visual identity, asset organization, color systems |
| [Creativity](/docs/marketing/skills/creativity) | Creative direction and visual strategy | 55 creative styles, color psychology, voiceover guidance |
| [Content Hub](/docs/marketing/skills/content-hub) | Visual asset gallery and management | Browser-based gallery, brand context, R2-ready manifest |

### AI & Technical (5 skills)
Multimodal AI and browser automation.

| Skill | Purpose | Key Features |
|-------|---------|--------------|
| [AI Multimodal](/docs/marketing/skills/ai-multimodal) | Gemini API for audio/video/image/docs | Transcription, image analysis, Imagen 4, Veo 3 video generation |
| [AI Artist](/docs/marketing/skills/ai-artist) | Prompt engineering for AI generation | LLM prompts, image generation, style keywords, iterative refinement |
| [Media Processing](/docs/marketing/skills/media-processing) | FFmpeg/ImageMagick/RMBG workflows | Video encoding, image manipulation, background removal |
| [Chrome DevTools](/docs/marketing/skills/chrome-devtools) | Browser automation with Puppeteer | Screenshots, ARIA snapshots, performance analysis, form automation |
| [Research](/docs/marketing/skills/research) | Technical research and analysis | Multi-source research, cross-validation, comprehensive reports |

## Skill Activation

### Implicit Activation
Skills activate automatically based on agent context and task type. No explicit command needed.

**Example**: Content Creator agent implicitly loads `content-marketing`, `copywriting`, `brand-guidelines` skills.

### Explicit Activation
Activate skills via natural language prompts when needed.

**Examples**:
```
Activate seo-optimization skill to audit site performance and identify keyword opportunities
```

```
Activate analytics, email-marketing, and social-media skills to analyze campaign performance
```

Skills automatically activate based on task context - no explicit command needed in most cases.

## Common Skill Combinations

### Content Production Pipeline
- `content-marketing` - Strategy and planning
- `copywriting` - Writing and optimization
- `brand-guidelines` - Consistency enforcement
- `seo-optimization` - Search optimization

### Campaign Launch Stack
- `campaign-management` - Orchestration and tracking
- `email-marketing` - Email sequences
- `social-media` - Social promotion
- `analytics` - Performance monitoring

### Growth Marketing Combo
- `affiliate-marketing` - Partner programs
- `referral-program-building` - Viral mechanics
- `gamification-marketing` - Engagement loops
- `ads-management` - Paid acquisition

### AI Content Creation
- `ai-multimodal` - Asset generation (images/videos)
- `creativity` - Creative direction
- `ai-artist` - Prompt optimization
- `brand-guidelines` - Brand alignment

## Configuration

Skills store configuration in user's project directory:

```
.claude/skills/{skill-name}/
├── SKILL.md              # Skill definition
├── references/           # Knowledge base
├── scripts/              # Automation scripts
└── templates/            # Reusable templates
```

### API Keys & Secrets

Some skills require API keys stored in `.env` or `.claude/secrets/`:

| Skill | Required Keys |
|-------|---------------|
| SEO Optimization | `REVIEWWEB_API_KEY`, Google OAuth credentials |
| Analytics | GA4 service account or OAuth credentials |
| AI Multimodal | `GEMINI_API_KEY` |
| Media Processing | None (uses FFmpeg/ImageMagick) |

## Best Practices

**1. Progressive Loading**
Start with core skills, add specialized skills as needed. Avoid loading all skills upfront.

**2. Skill Dependencies**
Some skills work better together. Check "Related Skills" section in each skill doc.

**3. Report Organization**
Use `assets-organizing` skill pattern for consistent file naming and directory structure.

**4. Brand Consistency**
Always load `brand-guidelines` skill when creating customer-facing content.

**5. API Rate Limits**
Skills with external APIs (SEO, Analytics) respect rate limits. Check reference docs for quotas.

## Related Docs

- [Marketing Agents](/docs/marketing/agents) - Agents that use these skills
- [Marketing Commands](/docs/marketing/commands) - Slash commands by skill
- [Marketing Workflows](/docs/marketing/workflows) - End-to-end processes
- [Marketing Dashboard](/docs/marketing/dashboard) - Web UI integration

## Troubleshooting

**Skill not activating?**
Use natural language to explicitly activate: "Activate {skill-name} skill for this task"

**Missing API credentials?**
Check skill doc's "Prerequisites" section for required keys.

**Script not found?**
Verify skill installed: `ls .claude/skills/{skill-name}/scripts/`

**Reference not loading?**
Skills use progressive disclosure. Load references manually when needed: `Read .claude/skills/{skill-name}/references/{file}.md`
