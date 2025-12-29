---
title: "/social"
description: "Generate platform-optimized social media content for Twitter, LinkedIn, Instagram, TikTok, and YouTube with AI-powered copywriting"
section: marketing
category: commands
order: 6
published: true
---

> Create scroll-stopping social content for every platform

## Quick Start

Generate a LinkedIn post in 30 seconds:

```bash
/social linkedin post
```

**What happens**:
1. AI asks for topic and message
2. Generates platform-optimized copy
3. Includes hashtag recommendations
4. Suggests posting time and format

**Output**: `assets/posts/linkedin/251229-{slug}.md`

## What It Does

### Before /social
- Manual copywriting (30-60 min per post)
- Inconsistent platform optimization
- Random hashtag selection
- No posting strategy
- Unclear engagement tactics

### After /social
- AI-generated social content (2 minutes)
- Platform-specific formatting
- Strategic hashtag research
- Optimal posting times
- Engagement hooks included

## Syntax

```bash
/social <platform> [type]
```

### Arguments

| Argument | Type | Description | Required |
|----------|------|-------------|----------|
| `platform` | string | Social platform | Yes |
| `type` | string | Content type | No (default: post) |

### Supported Platforms

| Platform | Aliases | Content Types | Best For |
|----------|---------|---------------|----------|
| `twitter` | `x` | post, thread | Real-time updates, news |
| `linkedin` | | post, article | B2B, thought leadership |
| `instagram` | `ig` | post, carousel, story, reel | Visual content, lifestyle |
| `tiktok` | | reel | Short-form video scripts |
| `youtube` | `yt` | shorts, community | Video scripts, updates |

### Content Types

| Type | Description | Length | Format |
|------|-------------|--------|--------|
| `post` | Single post | Platform-specific | Text + optional image |
| `thread` | Multi-post thread | 3-10 posts | Sequential posts |
| `carousel` | Image carousel | 2-10 slides | Slide-by-slide copy |
| `story` | Story content | 15-30 sec | Vertical format |
| `reel` | Short video script | 15-90 sec | Hook + script + CTA |

## Examples

### Example 1: LinkedIn Post

**Input**:
```bash
/social linkedin post
```

**AI Questions**:
```
social-media-manager: What's your topic?
You: Announcing new AI automation features

social-media-manager: Key message?
You: Save 10 hours/week with AI automation
```

**Expected Output**:
```markdown
✓ social-media-manager: Platform strategy defined
✓ content-creator: Copy written
✓ copywriter: Hook optimized

---
# LinkedIn Post: AI Automation Launch

## Post Copy

We just shipped something big.

AI Automation is live. And it's already saving teams 10 hours/week.

Here's what changed:

→ Manual lead scoring: 5 hours → 15 minutes
→ Email responses: 3 hours → automated
→ Report generation: 4 hours → instant

Real results from beta users:
• 76% faster workflows
• 3x more tasks completed
• 92% say "can't go back"

The best part? It works with your existing tools. No migration.

Try it free: [link]

---

What manual tasks are eating your time? Drop them below 👇

## Hashtags (Recommended: 3-5)
Primary: #AIAutomation #ProductivityTools #SaaS
Secondary: #WorkflowAutomation #AITools
Niche: #SaaSTech #B2BSaaS

## Posting Strategy
Best time: Tuesday or Thursday, 8-10 AM EST
Format: Text-only (LinkedIn favors native content)
Engagement tactic: Question in comments
Pin comment: "Here's how it works: [demo video link]"

## Image Recommendations
Option 1: Before/after screenshot (time saved)
Option 2: Results graphic (76%, 3x, 92% stats)
Option 3: Product screenshot with overlay text

Generate with:
/design LinkedIn post graphic, 1:1 aspect, stats overlay

## Performance Predictions
Expected reach: 2,500-3,500 impressions
Expected engagement: 80-120 interactions
Best performers: Posts with stats + questions

## Engagement Tactics
1. Reply to first 10 comments within 1 hour
2. Ask follow-up questions
3. Tag relevant connections
4. Share to relevant LinkedIn groups

Saved: assets/posts/linkedin/251229-ai-automation-launch.md
```

### Example 2: Twitter Thread

**Input**:
```bash
/social twitter thread
```

**AI Questions**:
```
social-media-manager: Thread topic?
You: How we reduced churn by 43% in 60 days

social-media-manager: Key lessons to share?
You: Predictive analytics, early intervention, customer success automation
```

**Expected Output**:
```markdown
✓ social-media-manager: Thread strategy created
✓ content-creator: Thread written

---
# Twitter Thread: Churn Reduction Case Study

## Thread (10 tweets)

**Tweet 1 (Hook)**
We reduced churn 43% in 60 days.

Here's the exact playbook we used (and you can copy):

🧵 Thread 👇

**Tweet 2**
First, we stopped guessing who would churn.

We built a predictive model that scores every customer daily.

Green (0-30): Happy
Yellow (31-60): At risk
Red (61-100): Churning soon

Focused all effort on yellow and red.

**Tweet 3**
We learned: customers don't leave in one day.

They leave slowly, then suddenly.

Signs we tracked:
→ Login frequency drops
→ Feature usage declines
→ Support tickets increase
→ Team size shrinks

The model caught these 30 days early.

**Tweet 4**
Early intervention = game changer.

When someone hits "yellow":
1. Auto-email from CSM (personalized)
2. Check-in call scheduled
3. Usage tips sent
4. Success stories shared

Don't wait for red. Act on yellow.

**Tweet 5**
We automated customer success.

Built workflows for:
→ Onboarding (days 1, 3, 7, 14, 30)
→ Feature adoption nudges
→ Win celebrations
→ Renewal reminders

Automation freed up CSM time for high-touch accounts.

**Tweet 6**
Surprising finding: price wasn't the issue.

91% of churned customers said "wasn't using it enough."

Value perceived = features used × outcomes achieved

We shifted from "sell more features" to "increase usage."

**Tweet 7**
Specific tactics that worked:

✓ Weekly usage report emails
✓ In-app feature discovery
✓ Monthly "wins" summary
✓ Peer comparison ("teams like yours use this")
✓ Live onboarding sessions

Small nudges, big impact.

**Tweet 8**
We measured everything.

Key metrics:
• Churn risk score (daily)
• Feature adoption rate (weekly)
• Support ticket sentiment (daily)
• Login streak (daily)
• Team expansion rate (monthly)

What you measure, you can improve.

**Tweet 9**
Results after 60 days:

Before:
→ 6.8% monthly churn
→ $47k MRR lost/month
→ Reactive customer success

After:
→ 3.9% monthly churn (-43%)
→ $27k MRR lost/month (-$20k)
→ Proactive intervention

ROI: 8.4x in year 1

**Tweet 10 (CTA)**
Want the churn prediction model template?

We open-sourced it: [link]

Includes:
→ Churn scoring algorithm
→ Automation workflows
→ Email templates
→ Metric dashboard

Retweet this and I'll send you the link 🔁

---

## Thread Formatting Tips
- Use line breaks for readability
- Emojis for visual breaks (don't overuse)
- Stats with → bullets for scannability
- Number each tweet if > 5 tweets
- Strong hook (tweet 1) and CTA (last tweet)

## Hashtags (1-2 max on Twitter)
#ChurnReduction #SaaS

## Posting Strategy
Best time: Tuesday-Thursday, 10 AM - 2 PM EST
Engagement: Reply to comments with insights
Retweet with comment: Add context after 4 hours
Pin thread: Keep on profile for 48 hours

## Engagement Tactics
1. Reply to every comment in first hour
2. Quote-tweet best replies
3. DM high-value commenters
4. Thread to long-form blog (drive traffic)

## Performance Predictions
Expected impressions: 15,000-25,000
Expected engagement: 300-500 interactions
Expected profile visits: 800-1,200

Saved: assets/posts/twitter/251229-churn-reduction-thread.md
```

### Example 3: Instagram Carousel

**Input**:
```bash
/social instagram carousel
```

**Expected Output**:
```markdown
✓ social-media-manager: Carousel strategy created
✓ content-creator: Slide copy written

---
# Instagram Carousel: 5 Productivity Hacks

## Carousel (7 Slides)

**Slide 1 (Cover)**
Title: "5 Productivity Hacks That Actually Work"
Subtitle: "Save 10+ hours every week"
Visual: Bold text on gradient background
CTA: "Swipe to see them all →"

**Slide 2**
Hack #1: Time Blocking

🕐 Schedule deep work
🕑 No meetings before 11 AM
🕒 90-min focused blocks

Result: 4 hours of uninterrupted work daily

**Slide 3**
Hack #2: The 2-Minute Rule

If it takes < 2 minutes, do it now.

Don't add it to your todo list.
Don't schedule it.
Just do it.

Saves 45 min/day of task management.

**Slide 4**
Hack #3: Batch Similar Tasks

Monday: Meetings only
Tuesday: Deep work only
Wednesday: Content creation
Thursday: Admin + email
Friday: Planning + review

Context switching kills productivity.

**Slide 5**
Hack #4: Automate Repetitive Work

What we automated:
→ Email responses (templates)
→ Social media scheduling
→ Report generation
→ Data entry

Saved: 12 hours/week

**Slide 6**
Hack #5: Single-Task, Don't Multitask

Multitasking = doing 3 things badly.

Focus on 1 thing at a time.
Complete it.
Move to the next.

40% more productive.

**Slide 7 (CTA)**
Which hack will you try first?

Comment below! 👇

Want more productivity tips?
→ Follow @yourhandle
→ Save this post
→ Share with your team

---

## Caption

5 productivity hacks that saved me 10+ hours/week 💡

I used to work 60-hour weeks and still felt behind.

Then I discovered these 5 hacks.

Now I work 40 hours and get 2x more done.

Swipe to see all 5 →

Which one resonates with you? Drop a number (1-5) below 👇

---

#ProductivityHacks #TimeManagement #WorkSmart #ProductivityTips #WorkLifeBalance #EntrepreneurLife #SmallBusinessTips #RemoteWork

---

## Posting Strategy
Best time: Monday or Wednesday, 11 AM - 1 PM or 7 PM - 9 PM EST
Format: 1080x1080 px (square)
Font: Bold, high contrast
Colors: Brand colors with high readability

## Engagement Tactics
1. Reply to comments asking for specific hack details
2. Save replies as highlights ("Productivity")
3. Repost as Reels with voiceover
4. Create downloadable PDF version (link in bio)

## Visual Design
Generate slides with:
/design Instagram carousel slides, productivity theme, 7 slides

Style: Minimalist, bold text, consistent color scheme
Template: Title + 1-2 bullets per slide
Branding: Logo on every slide

## Performance Predictions
Expected reach: 3,500-5,500 accounts
Expected saves: 200-350 (highly saveable content)
Expected shares: 80-120
Engagement rate: 8-12%

Saved: assets/posts/instagram/251229-productivity-hacks-carousel.md
```

## Workflow Integration

### Multi-Platform Campaign
```bash
# Create content for all platforms
/social twitter thread "Product launch announcement"
/social linkedin post "Product launch announcement"
/social instagram carousel "Product features breakdown"

# Generate visuals
/design Twitter post graphic
/design LinkedIn post graphic
/design Instagram carousel slides

# Track performance
/analyze engagement
```

### Content Repurposing
```bash
# Start with long-form
/content blog "Complete productivity guide"

# Repurpose to social
/social twitter thread "Key takeaways from productivity guide"
/social linkedin article "Productivity guide summary"
/social instagram carousel "Top 7 productivity tips"
```

## Related Commands

- [/content](/docs/marketing/commands/content) - Long-form content
- [/design](/docs/marketing/commands/design) - Social graphics
- [/campaign](/docs/marketing/commands/campaign) - Social campaigns
- [/analyze](/docs/marketing/commands/analyze) - Social analytics

## Related Agents

- [social-media-manager](/docs/marketing/agents/social-media-manager) - Platform strategy
- [content-creator](/docs/marketing/agents/content-creator) - Content generation
- [copywriter](/docs/marketing/agents/copywriter) - Engaging hooks

## Skills Activated

- **social-media**: Platform best practices
- **creativity**: Platform-specific visual styles
- **assets-organizing**: File management

---

**Stop scrolling. Start posting.** AI-powered social content that engages.
