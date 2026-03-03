---
title: "ckm:paid-ads"
description: "Plan, create, and optimize paid advertising campaigns on Google Ads, Meta, LinkedIn, and TikTok with bid strategies and creative frameworks."
section: marketing
kit: marketing
category: skills
order: 94
---

# Paid Ads

> Build high-performing paid campaigns with platform-specific creative frameworks, bid strategies, and optimization workflows.

## What This Skill Does

**The Challenge**: Paid advertising across Google, Meta, LinkedIn, and TikTok requires platform-specific expertise, creative testing discipline, and bid strategy knowledge. Without structure, ad spend burns with poor returns.

**The Solution**: Paid Ads skill provides platform-specific campaign frameworks, creative brief templates, audience targeting strategies, bid optimization guidelines, and performance analysis workflows.

## Activation

**Implicit**: Activates automatically for Paid Ads Specialist, Campaign Manager, and Growth Specialist agents.

**Explicit**: Activate via prompt:
```
Activate paid-ads skill to set up a Google Search campaign for our B2B SaaS product
```

## Capabilities

### 1. Campaign Structure Frameworks
Platform-optimized campaign and ad group structures.

**Google Ads structure**:
- Campaign → Ad Group (by intent) → Ads (3 RSAs minimum) → Keywords
- Match types: Exact > Phrase for branded; Broad Match + Smart Bidding for discovery

**Meta Ads structure**:
- Campaign (objective) → Ad Set (audience) → Ads (creative variants)
- ABO (Ad Set Budget) for testing, CBO (Campaign Budget) for scaling

**LinkedIn Ads**:
- Campaign Group → Campaign (audience segment) → Ads
- Best for: Job title targeting, company size, industry

**TikTok Ads**:
- Campaign (objective) → Ad Group (targeting + placement) → Ads
- Creative: Hook in first 3 seconds, UGC-style performs best

### 2. Audience Targeting Strategies
Layered audience approaches by platform and funnel stage.

| Funnel Stage | Google | Meta | LinkedIn |
|---|---|---|---|
| Awareness | Display, YouTube | Broad interest | Lookalikes |
| Consideration | Non-branded search | Retargeting pools | Job title targeting |
| Conversion | Branded, competitor | Cart abandonment | Lead gen forms |

### 3. Creative Brief Templates
Structured briefs for ad copy, imagery, and video.

**Ad copy formula by platform**:
- **Google Search**: Headline (keyword intent) + Description (benefit + CTA)
- **Meta**: Hook → Benefit → Social proof → CTA
- **LinkedIn**: Professional problem → Solution → Company credibility → CTA

## Prerequisites

- Ad platform accounts with billing configured
- Conversion tracking implemented (Google Tag, Meta Pixel, LinkedIn Insight Tag)
- Landing pages with clear CTAs

## Configuration

**Tracking requirements**:
```bash
# Verify Google Tag installation
GTM_CONTAINER_ID=GTM-XXXXXX
GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXX

# Meta Pixel
META_PIXEL_ID=XXXXXXXXXXXXXXXXX
```

## Best Practices

**1. Test one variable at a time**
Separate creative tests from audience tests. Mixing variables obscures what's working.

**2. Give campaigns time to learn**
Smart Bidding needs 50+ conversions in 30 days before optimization. Avoid frequent bid changes during learning phase.

**3. Match landing page to ad message**
High Quality Score (Google) requires message match. Same headline in ad and landing page.

## Common Use Cases

### Use Case 1: Google Search Campaign Setup
**Scenario**: Launch search campaign for new SaaS product targeting SMB buyers.

**Workflow**:
1. Keyword research: branded, competitor, category, problem-aware terms
2. Structure: 1 campaign per intent tier (branded, competitor, category)
3. Ad copy: 3 RSAs per ad group with pinned headlines for testing
4. Bidding: Maximize conversions with target CPA after 50+ conversions
5. Negative keywords: Block irrelevant traffic from day one

**Output**: Campaign structure doc + ad copy variations.

### Use Case 2: Meta Retargeting Campaign
**Scenario**: Re-engage website visitors who didn't convert.

**Workflow**:
1. Audience: website visitors (7-day, 30-day, 60-day windows)
2. Creative: Product benefit reminder + social proof + limited offer
3. Frequency cap: 3x per week to avoid ad fatigue
4. CTA: "Start free trial" or offer-specific

**Output**: Retargeting campaign brief with creative specs.

## Troubleshooting

**Issue**: High CPCs eroding ROAS
**Solution**: Add negative keywords. Tighten match types. Improve Quality Score with better landing pages.

**Issue**: Meta ads stuck in learning phase
**Solution**: Consolidate ad sets. Reduce target audiences under 5 per campaign. Check conversion events firing.

## Related Skills

- [Analytics](/docs/marketing/skills/analytics) - Campaign performance measurement
- [Copywriting](/docs/marketing/skills/copywriting) - Ad copy formulas
- [Campaign](/docs/marketing/skills/campaign) - Campaign management and tracking

## Related Commands

- `/ckm:campaign` - Campaign planning and management
- `/ckm:analyze` - Performance analysis and reporting
- `/content/ads` - Generate ad copy variations
