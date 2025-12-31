---
title: "Lead Qualifier"
description: "Your lead scoring expert for intent detection, behavioral analysis, and sales readiness prediction"
section: marketing
category: agents
order: 3
---

# Lead Qualifier

> **Your pipeline intelligence system** - Score, prioritize, and route leads based on real buying signals

## What This Agent Does

Your sales team wastes time on leads that aren't ready to buy. You have 1,000 leads in your CRM but no idea which 50 to focus on first. Some leads go cold while hot prospects slip through the cracks. Your conversion rate is low because you're treating all leads the same.

**The Problem**: Without proper lead scoring, sales teams waste 50% of their time on unqualified leads. Marketing sends everything over the fence and hopes sales can figure it out. The result? Low conversion rates, frustrated sales reps, and revenue left on the table.

**The Solution**: The Lead Qualifier is your behavioral analysis specialist who identifies which leads are actually ready to buy. This agent tracks engagement patterns, identifies buying signals, scores lead quality with demographic and behavioral factors, predicts conversion likelihood, determines sales readiness, and recommends next-best actions for each segment.

This agent uses proven lead scoring frameworks from high-performing B2B companies, combining fit data (demographics) with intent data (behavior) to create accurate predictive models.

## Quick Start

Build your first lead scoring model in 30 seconds:

```bash
# Create a lead scoring framework
/ask "Design a lead scoring model for [your business type]"

# The agent creates demographic + behavioral scoring with MQL/SQL thresholds
```

## Capabilities

### Behavioral Signal Analysis

Track the engagement patterns that predict conversion. The agent monitors content consumption (what they read, watch, download), interaction frequency (how often they return), buying signals (pricing page views, demo requests), and intent indicators (problem-aware vs. solution-aware content). You'll see exactly which behaviors correlate with closed deals.

**Example**: The agent identifies that leads who visit pricing + case studies + integrations page within 7 days convert at 34%, while average conversion is 12%.

### Engagement Pattern Recognition

Map the customer journeys of your best customers. The agent analyzes conversion paths from first touch to close, identifies common touchpoints before conversion, recognizes drop-off points where leads get stuck, tracks multi-touch attribution patterns, and analyzes session behavior (time on site, pages per session, return frequency).

### Sales Readiness Prediction

Know which leads to call right now. The agent scores lead quality on a 0-100 scale, predicts conversion likelihood with statistical modeling, identifies hand-raise moments (demo requests, pricing inquiries), assesses urgency signals (timeline questions, competitive research), and determines fit vs. interest (do they match ICP and are they engaged?).

### Next-Best-Action Recommendations

Tell your team exactly what to do with each lead. The agent suggests follow-up actions by segment, recommends content offers to move leads forward, plans nurture pathways for not-yet-ready leads, prioritizes outreach by score and signals, and designs routing rules (when does marketing hand off to sales?).

### Lead Scoring Rules

Build sophisticated multi-factor scoring models. The agent defines scoring criteria across demographics and behavior, weights factors appropriately (job title = 15 pts, attended webinar = 25 pts), sets threshold levels for MQL/SQL/Hot Lead classifications, creates decay rules (recent activity scores higher), and builds predictive score models based on historical data.

### Qualification Criteria Definition

Document your ideal customer profile and qualification process. The agent defines BANT criteria (Budget, Authority, Need, Timeline), creates detailed ICP profiles by persona, sets MQL to SQL conversion thresholds, designs qualification flows and questions, and documents handoff rules between marketing and sales.

## When to Use

Use the Lead Qualifier when you need to:
- Build a lead scoring model that predicts conversion
- Identify which leads are sales-ready right now
- Design qualification criteria and handoff processes
- Analyze behavioral patterns of your best customers
- Prioritize your pipeline by conversion likelihood
- Improve marketing-to-sales alignment with data

## Example Workflows

### Workflow 1: Build Lead Scoring Model

Create a predictive scoring system:

```bash
# Step 1: Define your ICP
/ask "What are the characteristics of our best customers?"

# Step 2: Request scoring model
/ask "Create a lead scoring model with demographic and behavioral factors"

# The agent will:
# - Define demographic scoring (company size, industry, job title)
# - Define behavioral scoring (content views, email engagement, site visits)
# - Weight each factor by importance
# - Set MQL/SQL thresholds
# - Create decay rules for aging activity
# - Provide implementation guidance
```

**Output**: Complete scoring model with point values, thresholds, and implementation notes.

### Workflow 2: Identify Hot Leads

Find who to call right now:

```bash
# Analyze your lead database
/ask "Which leads in our database show the strongest buying signals?"

# The agent looks for:
# - Recent high-value activities (pricing, demo, case studies)
# - Multiple touchpoints in short time window
# - Authority level (decision-maker titles)
# - Company fit (size, industry, revenue)
# - Urgency signals (timeline content, competitor research)
```

**Output**: Prioritized list of hot leads with specific reasons why they're ready.

### Workflow 3: Design Qualification Flow

Create your MQL to SQL process:

```bash
# Define qualification criteria
/ask "Design our lead qualification process from MQL to SQL"

# The agent creates:
# - MQL definition and criteria
# - SQL definition and criteria
# - Qualification questions by stage
# - Scoring thresholds for each stage
# - Routing rules (when to hand off)
# - SLA recommendations (response times)
```

**Output**: Complete qualification framework with stage definitions and processes.

### Workflow 4: Segment Analysis

Understand your lead segments:

```bash
# Analyze lead segments
/ask "Segment our leads by behavior and recommend actions for each segment"

# The agent will:
# - Identify distinct behavioral clusters
# - Calculate average score per segment
# - Recommend specific actions per segment
# - Suggest content offers
# - Design nurture paths
```

**Output**: Segment breakdown with recommended actions for each group.

## Best Practices

1. **Use Both Fit and Intent**: Score leads on who they are (demographics) and what they do (behavior). A great fit who isn't engaged shouldn't be high priority.

2. **Weight Behavior Heavily**: In most B2B models, behavioral scoring should be 60% of total score. Recent activity is the best predictor of conversion intent.

3. **Implement Score Decay**: Old activity shouldn't count as much as recent activity. Use decay rules (e.g., activity loses 50% of points after 30 days).

4. **Set Clear Thresholds**: Define specific score thresholds for MQL (e.g., 50+ points), SQL (e.g., 75+ points), and Hot Lead (e.g., 90+ points). This aligns marketing and sales.

5. **Review and Adjust**: Check scoring accuracy monthly. If low-scored leads are closing or high-scored leads aren't converting, adjust your weights.

6. **Track Leading Indicators**: Don't just track conversion. Track which behaviors happen before conversion and optimize for those.

## Output Assets

The agent organizes outputs in standardized locations:

- **Scoring Models**: `assets/leads/scoring-models/{date}-{model-name}.md`
- **Segments**: `assets/leads/segments/{segment-name}.md`
- **ICP Profiles**: `assets/leads/icp-profiles/{persona}.md`
- **Reports**: `reports/leads/lead-qualifier-{date}-{analysis-slug}.md`

## Related Agents

- [Attraction Specialist](/docs/marketing/agents/attraction-specialist) - TOFU lead generation
- [Email Wizard](/docs/marketing/agents/email-wizard) - Lead nurture sequences
- [Sales Enabler](/docs/marketing/agents/sale-enabler) - Sales collateral for qualified leads

## Related Commands

- `/ask` - Query the agent for analysis
- `/scout` - Find lead data and context
- `/plan` - Create comprehensive lead strategy
