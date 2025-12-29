---
title: "/email"
description: "Generate high-converting email content with AI-powered copywriting for newsletters, cold outreach, launch sequences, and nurture campaigns"
section: marketing
category: commands
order: 5
published: true
---

> Create email content that converts with AI-powered copywriting and deliverability optimization

## Quick Start

Generate a newsletter in 30 seconds:

```bash
/email newsletter
```

**What happens**:
1. AI asks for audience, message, and CTA
2. Generates 3-5 subject line variants
3. Creates email body with preview text
4. Includes deliverability and A/B test recommendations

**Output**: `assets/copy/emails/251229-newsletter-{slug}.md`

## What It Does

### Before /email
- Manual copywriting (2-4 hours per email)
- Inconsistent subject lines
- No A/B testing strategy
- Poor mobile formatting
- Guesswork on deliverability

### After /email
- AI-generated email content (2 minutes)
- Multiple subject line options
- Mobile-optimized formatting
- Deliverability checks included
- A/B test recommendations

## Syntax

```bash
/email <type> [context]
```

### Arguments

| Argument | Type | Description | Required |
|----------|------|-------------|----------|
| `type` | string | Email type | Yes |
| `context` | string | Additional context | No |

### Email Types

| Type | Description | Use Case | Time Saved |
|------|-------------|----------|------------|
| `newsletter` | Newsletter content | Regular updates | 2-3 hours |
| `cold` | Cold outreach | New prospects | 3-4 hours |
| `followup` | Follow-up sequence | Lead nurturing | 2-3 hours |
| `launch` | Product launch | New releases | 4-5 hours |
| `nurture` | Nurture sequence | Trial users | 3-4 hours |
| `welcome` | Welcome series | New subscribers | 2-3 hours |
| `winback` | Re-engagement | Inactive users | 2-3 hours |

## Examples

### Example 1: Newsletter Email

**Input**:
```bash
/email newsletter
```

**AI Questions**:
```
email-wizard: Target audience?
You: SaaS founders and product managers

email-wizard: Key message or announcement?
You: New AI automation features released

email-wizard: Desired action (CTA)?
You: Try new features
```

**Expected Output**:
```markdown
✓ email-wizard: Email strategy defined
✓ copywriter: Content written

---
# Newsletter: AI Automation Features Launch

## Subject Lines (A/B Test These)
1. "We just launched AI automation (and it's free)" ⭐ Recommended
2. "Your workflows just got 10x faster"
3. "New feature: AI does the boring stuff"
4. "AI automation is here (try it now)"
5. "Stop manual work. Start automation."

## Preview Text
"Automate repetitive tasks with AI. Available now in your dashboard."

## Email Body

Hey {{first_name}},

Remember spending hours on repetitive tasks? Not anymore.

**We just launched AI Automation** – and it's included in your plan.

### What You Can Automate:
- Lead scoring (saves 5 hours/week)
- Email responses (saves 3 hours/week)
- Report generation (saves 4 hours/week)

**Total time saved: 12 hours/week**

[Try AI Automation Now →]

### How It Works:
1. Pick a workflow
2. Turn on AI
3. Let it run

That's it. No setup. No coding.

**Early results from beta users:**
- 76% faster workflow completion
- 3x more tasks completed daily
- 92% say "couldn't go back"

[Get Started (2 min) →]

Questions? Hit reply. We read every email.

Best,
{{sender_name}}

P.S. AI automation works with your existing workflows. No migration needed.

---

## CTA Placement
- Primary: "Try AI Automation Now" (top)
- Secondary: "Get Started" (middle)
- Tertiary: "Hit reply" (bottom)

## Deliverability Checklist
✓ Subject line < 50 characters
✓ Preview text optimized
✓ Text-to-image ratio: 80:20
✓ Single clear CTA
✓ Unsubscribe link included
✓ Mobile-responsive formatting
✓ No spam trigger words

## A/B Test Recommendations
Test 1: Subject line 1 vs Subject line 2
Test 2: "Try Now" vs "Get Started" CTA
Test 3: Early results section vs Benefits list

## Performance Predictions
- Expected open rate: 24-28% (industry avg: 21%)
- Expected click rate: 3.5-4.5% (industry avg: 2.6%)
- Best send time: Tuesday 10 AM (user timezone)

Saved: assets/copy/emails/251229-newsletter-ai-automation-launch.md
```

### Example 2: Cold Outreach Email

**Input**:
```bash
/email cold "SaaS founders"
```

**AI Questions**:
```
email-wizard: What problem do you solve?
You: Help reduce customer churn with predictive analytics

email-wizard: Unique value proposition?
You: AI predicts churn 30 days before it happens

email-wizard: Desired action?
You: Book demo call
```

**Expected Output**:
```markdown
✓ email-wizard: Cold outreach strategy created
✓ copywriter: Personalized copy written

---
# Cold Outreach: Churn Prediction for SaaS

## Subject Lines (Personalized)
1. "{{company_name}}: Losing {{churned_count}} customers/month?" ⭐
2. "I noticed {{company_name}}'s churn rate (solution inside)"
3. "{{first_name}}, what if you knew which customers would churn?"
4. "Quick question about {{company_name}}'s retention"

## Email Body (Short version)

Hi {{first_name}},

I saw {{company_name}} is growing fast (congrats on {{recent_milestone}}).

Growing companies face a problem: **churn blindsides you.**

You lose customers before you know they're unhappy.

**We solve this**: Our AI predicts churn 30 days early.

**Real result**: {{case_study_company}} reduced churn 43% in 60 days.

Worth a 15-min call?

[Book Demo →]

Best,
{{sender_name}}

---

## Personalization Tokens
Required:
- {{first_name}}: Prospect's first name
- {{company_name}}: Company name
- {{recent_milestone}}: Funding, launch, feature (research required)

Optional:
- {{churned_count}}: Estimated monthly churn (from data)
- {{case_study_company}}: Similar company case study

## Follow-up Sequence (Send if no reply)

**Day 3**: "{{first_name}}, did this miss your inbox?"
**Day 7**: "Quick question: is churn a priority for {{company_name}}?"
**Day 14**: "Last email: churn prediction tool ({{case_study_company}} case study)"

## Deliverability Notes
- Send volume: Max 50/day (cold outreach limits)
- Warm-up: 5 days before campaign
- Domain authentication: SPF, DKIM, DMARC required
- Reply rate target: >5% (indicates good targeting)

## Cold Email Checklist
✓ No images (text-only)
✓ Plain text formatting
✓ One clear CTA
✓ Short (< 100 words)
✓ Personalized (3+ tokens)
✓ Value-first (no hard sell)
✓ Easy opt-out

Saved: assets/copy/emails/251229-cold-churn-prediction-saas-founders.md
```

### Example 3: Product Launch Email

**Input**:
```bash
/email launch "New Mobile App"
```

**Expected Output**:
```markdown
✓ email-wizard: Launch sequence designed
✓ copywriter: Launch copy created

---
# Product Launch: Mobile App

## Subject Lines (Urgency + Benefit)
1. "You asked for mobile. We built it." ⭐
2. "New: {{product_name}} mobile app (iOS + Android)"
3. "Your workspace, now in your pocket"
4. "Mobile app launch (exclusive early access)"

## Email Body

Hi {{first_name}},

**Big news**: The mobile app is here.

You asked. We listened. Now you can:
- Manage tasks on the go
- Get real-time notifications
- Work offline (syncs automatically)

**Available now**: iOS and Android

[Download iOS App →]
[Download Android App →]

### What's Inside:
✓ Full desktop feature parity
✓ Biometric login (Face ID, fingerprint)
✓ Dark mode
✓ Offline mode
✓ Push notifications
✓ Widget support

**Bonus**: Early adopters get 3 months free Pro upgrade.

[Claim Early Adopter Bonus →]

### Built Based on Your Feedback:
"Need mobile access!" - 2,847 requests
"Offline mode critical" - 1,203 requests
"Push notifications missing" - 891 requests

All included. Day one.

[Download Now →]

Questions? Reply to this email or check the [Mobile App Guide →].

Best,
{{sender_name}}

P.S. Early adopter bonus expires Dec 31. Download before then.

---

## Launch Sequence (4 emails)

**Email 1 (Day 0)**: Announcement (this email)
**Email 2 (Day 3)**: How-to guide + tips
**Email 3 (Day 7)**: User success stories
**Email 4 (Day 14)**: Last chance for early adopter bonus

## A/B Tests
- Subject: "You asked for mobile" vs "Mobile app launch"
- CTA: "Download Now" vs "Get Mobile App"
- Bonus: 3 months vs 6 months free

## Success Metrics
- Open rate target: 35-40% (launch emails perform high)
- Click rate target: 8-12%
- Download rate target: 15-20% of clicks

Saved: assets/copy/emails/251229-launch-new-mobile-app.md
```

## Workflow Integration

### Complete Email Campaign
```bash
# Step 1: Define audience
/persona create

# Step 2: Create campaign
/campaign create "Email Marketing Campaign"

# Step 3: Generate email sequence
/email welcome "New subscribers"
/email nurture "Trial users day 3"
/email nurture "Trial users day 7"
/email winback "Inactive users"

# Step 4: Visual assets
/design email header for welcome series

# Step 5: Track performance
/analyze engagement
```

### Email + Multi-Channel
```bash
# Coordinate email with other channels
/email launch "Product Launch"
/social twitter "Launch announcement"
/content blog "Product launch post"
/campaign analyze "Product Launch"
```

## Agents Used

### email-wizard
- Role: Email strategy and optimization
- Responsibilities:
  - Email type selection
  - Funnel positioning
  - Send timing recommendations
  - Sequence design
- Skills: email-marketing, conversion-optimization

### copywriter
- Role: Email copywriting
- Responsibilities:
  - Subject line generation
  - Email body writing
  - CTA creation
  - Tone matching
- Skills: creativity, persuasion

## Output Structure

```
assets/copy/emails/{date}-{type}-{slug}.md

Content:
- Subject line variants (3-5)
- Preview text
- Email body (HTML + plain text)
- CTA recommendations
- Deliverability checklist
- A/B test suggestions
- Follow-up sequence (if applicable)
```

## Deliverability Best Practices

Auto-included in every email:

**Technical**:
- SPF/DKIM/DMARC authentication
- Text-to-image ratio optimization
- Mobile-responsive formatting
- Spam filter checks

**Content**:
- Subject line length validation
- Spam trigger word avoidance
- Unsubscribe link placement
- Plain text alternative

**Sending**:
- Send time optimization
- Volume limits (cold vs warm)
- Engagement tracking
- Bounce rate monitoring

## Related Commands

### Before /email
- [/persona](/docs/marketing/commands/persona) - Define audience
- [/campaign](/docs/marketing/commands/campaign) - Plan campaign
- [/brainstorm](/docs/marketing/commands/brainstorm) - Strategy ideation

### After /email
- [/social](/docs/marketing/commands/social) - Cross-channel content
- [/analyze](/docs/marketing/commands/analyze) - Email performance
- [/use-mcp](/docs/marketing/commands/use-mcp) - Send via ESP

### Enhancement
- [/design](/docs/marketing/commands/design) - Email headers/graphics
- [/seo](/docs/marketing/commands/seo) - Landing page optimization

## Related Agents

- [email-wizard](/docs/marketing/agents/email-wizard) - Email strategy
- [copywriter](/docs/marketing/agents/copywriter) - Persuasive copy
- [analytics-analyst](/docs/marketing/agents/analytics-analyst) - Performance tracking

## Skills Activated

- **email-marketing**: Email best practices and templates
- **creativity**: Copywriting and creative direction
- **assets-organizing**: File structure management

---

**Stop guessing. Start converting.** AI-powered email content that delivers results.
