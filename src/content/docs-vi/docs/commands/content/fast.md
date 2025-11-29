---
title: /content:fast
description: "Documentation for /content:fast
description:
section: docs
category: docs/commands/content
order: 52
published: true"
section: docs
category: docs/commands/content
order: 52
published: true
---

# /content:fast

Generate creative and effective copy quickly. This command produces multiple variations optimized for different platforms and use cases, perfect when you need quality content fast.

## Syntax

```bash
/content:fast [content request]
```

## How It Works

The `/content:fast` command follows a rapid content generation workflow:

### 1. Request Analysis

- Understands content type needed
- Identifies target audience
- Determines tone and style
- Recognizes platform requirements

### 2. Quick Research (optional)

- Reviews similar successful content (if reference provided)
- Checks platform best practices
- No deep competitive analysis (use `/content:good` for that)

### 3. Rapid Generation

Invokes **copywriter** agent to create:
- Multiple variations (3-5)
- Platform-optimized formatting
- Different angles/approaches
- Appropriate length for platform

### 4. Quick Delivery

Delivers content within seconds:
- Ready-to-use copy
- Multiple options to choose from
- Basic formatting applied
- Character counts included

## Examples

### Social Media Posts

```bash
/content:fast [write LinkedIn post announcing new AI feature launch]
```

**What happens:**
```
Agent: copywriter
Platform: LinkedIn
Type: Product announcement

Generating 3 variations...

VARIATION 1 (Professional + Stats):
---
🚀 Big news: We just launched AI Code Review

After 6 months of development, ClaudeKit now
reviews your PRs automatically.

Results from beta:
• 87% faster code reviews
• 92% of bugs caught before production
• 50,000+ PRs reviewed

Try it free: link.claudekit.cc/code-review

#AI #Development #CodeReview
---
(253 characters, under LinkedIn optimal 300)

VARIATION 2 (Story-driven):
---
Remember spending hours in code review meetings?

We built something better.

ClaudeKit's new AI Code Review analyzes your PRs
in seconds, catching bugs, security issues, and
style problems automatically.

Beta users shipped 2x faster.

Try it free → link.claudekit.cc/code-review
---
(272 characters)

VARIATION 3 (Question hook):
---
What if code reviews took 30 seconds instead
of 30 minutes?

ClaudeKit's AI Code Review just made it possible:
✓ Automatic bug detection
✓ Security analysis
✓ Best practices enforcement
✓ Instant feedback

Free trial → link.claudekit.cc/code-review

Tired of slow reviews? This changes everything.
---
(291 characters)

✓ Content generated (8 seconds)
```

### Email Subject Lines

```bash
/content:fast [create email subject lines for product launch announcement]
```

**What happens:**
```
Agent: copywriter
Type: Email subject lines
Goal: High open rate

Generating 10 variations...

URGENCY:
1. "Your AI assistant launches in 24 hours 🚀"
2. "Limited beta access closing tonight"
3. "Last chance: Get 50% off at launch"

CURIOSITY:
4. "The tool we've been hiding for 6 months..."
5. "This is why we went dark for 2 months"
6. "Something big just landed in your dashboard"

BENEFIT-FOCUSED:
7. "Ship features 10x faster starting today"
8. "Your new secret weapon for development"
9. "Cut your coding time by 70% (no joke)"

PERSONAL:
10. "I built this for you (and 50,000 others)"

Best performers historically:
- Urgency + specificity (#1, #2)
- Curiosity with specificity (#4)
- Concrete benefits (#9)

✓ Subject lines generated (6 seconds)
```

### Landing Page Headlines

```bash
/content:fast [write headlines for AI development tool landing page]
```

**What happens:**
```
Agent: copywriter
Target: Developer audience
Goal: Signups

Generating 5 headline variations...

BENEFIT-FOCUSED:
1. "Ship Features 10x Faster With AI Agents"
   Subheadline: "Write, test, and review code
   automatically. Trusted by 50,000+ developers."

NUMBER-DRIVEN:
2. "Cut Your Development Time by 70%"
   Subheadline: "AI agents that actually work.
   No prompt engineering required."

SOCIAL PROOF:
3. "Join 50,000+ Developers Building Faster"
   Subheadline: "The AI toolkit teams at Google,
   Meta, and Amazon use daily."

OUTCOME-FOCUSED:
4. "Build Better Software in Half the Time"
   Subheadline: "AI-powered development that
   feels like magic. Set up in 5 minutes."

PAIN-POINT:
5. "Stop Wasting 20 Hours a Week on Repetitive Tasks"
   Subheadline: "AI agents handle the boring stuff.
   You focus on building great products."

Recommended: #1 or #3
(Best combine clear benefit + social proof)

✓ Headlines generated (7 seconds)
```

### Ad Copy

```bash
/content:fast [create Google Ads copy for AI coding tool, target: "AI development tools"]
```

**What happens:**
```
Agent: copywriter
Platform: Google Ads
Keyword: "AI development tools"
Constraints: 30 char headlines, 90 char descriptions

Generating 3 ad variations...

AD VARIATION 1:
Headline 1: "Ship Code 10x Faster" (22 chars)
Headline 2: "AI That Actually Works" (22 chars)
Headline 3: "Try Free for 14 Days" (20 chars)
Description 1: "AI agents write, test & review
code automatically. Join 50,000+ developers
building faster." (90 chars)
Description 2: "No prompt engineering. No setup
hassle. Just AI that works. Start free trial
now." (85 chars)

AD VARIATION 2:
Headline 1: "AI Development Toolkit" (23 chars)
Headline 2: "50,000+ Devs Trust Us" (22 chars)
Headline 3: "Free Trial - No Card" (20 chars)
Description 1: "Build features faster with AI
that writes, tests, and reviews your code.
Setup in minutes." (89 chars)
Description 2: "Used by teams at Google, Meta,
Amazon. Get started free. Cancel anytime.
Zero risk." (87 chars)

AD VARIATION 3:
Headline 1: "Cut Coding Time by 70%" (23 chars)
Headline 2: "Try ClaudeKit Free" (19 chars)
Headline 3: "Trusted by 50K Devs" (20 chars)
Description 1: "AI agents handle boring tasks.
You build great products. Free 14-day trial,
no credit card." (90 chars)
Description 2: "Automatic code generation,
testing & review. Start free trial. Join teams
shipping faster." (89 chars)

✓ Ad copy generated (9 seconds)
```

### Product Description

```bash
/content:fast [write short product description for GitHub README]
```

**What happens:**
```
Agent: copywriter
Platform: GitHub README
Audience: Developers
Length: Short (100-150 words)

Generated description:

---
# ClaudeKit

AI-powered development toolkit that helps you ship faster.

## What It Does

ClaudeKit provides AI agents that write, test, and review code
automatically. No prompt engineering required—just describe what
you want to build.

**Key Features:**
- 🤖 AI code generation with full context awareness
- ✅ Automatic test generation (unit, integration, E2E)
- 👀 Intelligent code review (security, performance, style)
- 🔧 Works with your existing tools and workflows

**Who It's For:**
Developers and teams who want to:
- Ship features 10x faster
- Spend less time on repetitive tasks
- Maintain code quality automatically

Trusted by 50,000+ developers at companies like Google, Meta,
and Amazon.

[Try Free →](https://claudekit.cc)
---

(147 words)

✓ Description generated (5 seconds)
```

## When to Use

### ✅ Use /content:fast for:

**Social Media Posts**
```bash
/content:fast [write Twitter thread about new feature]
```

**Email Content**
```bash
/content:fast [write welcome email for new users]
```

**Ad Copy**
```bash
/content:fast [create Facebook ad copy for developers]
```

**Headlines & CTAs**
```bash
/content:fast [write CTA variations for pricing page]
```

**Quick Announcements**
```bash
/content:fast [write changelog entry for v2.0 release]
```

**Short Descriptions**
```bash
/content:fast [write app store description]
```

### ❌ Don't use for:

**Long-Form Content**
- Use `/content:good` for blog posts, whitepapers

**Strategic Content**
- Use `/content:good` for content requiring research

**Conversion-Critical Pages**
- Use `/content:cro` for landing pages needing optimization

## Platform-Specific Formats

### Twitter/X

```
Character limits:
- Standard: 280 characters
- Optimal: 71-100 characters (higher engagement)
- Thread: 250 chars per tweet (leave room for "1/")

Best practices:
✓ Hook in first 100 characters
✓ Use line breaks for readability
✓ Include CTA in last tweet
✓ Add relevant hashtags (1-2 max)
```

### LinkedIn

```
Character limits:
- Max: 3,000 characters
- Optimal: 150-300 characters (highest engagement)
- With "see more": Can go longer

Best practices:
✓ Professional but conversational
✓ Add line breaks (avoid walls of text)
✓ Use relevant hashtags (3-5)
✓ Tag people/companies when appropriate
✓ Include call to action
```

### Email Subject Lines

```
Best practices:
- Length: 40-50 characters (mobile)
- Avoid spam triggers: "Free", "Act now", "!!!"
- Personalization: Use names when possible
- A/B test: Test 2-3 variations

High performers:
✓ Numbers: "10 ways to..."
✓ Questions: "Ready to ship faster?"
✓ Urgency: "Last chance for..."
✓ Curiosity: "The secret to..."
```

### Google Ads

```
Character limits:
- Headlines: 30 characters (3 required)
- Descriptions: 90 characters (2 required)

Best practices:
✓ Include keyword in headline 1
✓ Clear benefit in headline 2
✓ CTA in headline 3
✓ Description 1: Expand on benefit
✓ Description 2: Social proof or offer
```

### Facebook/Instagram Ads

```
Best practices:
- Length: 125 characters or less (mobile)
- First 3 words crucial (attention grabber)
- Clear CTA
- Speak to pain point
- Avoid link text (link added separately)
```

## Content Types Supported

### Short-Form (Fast generation)

- Social media posts (all platforms)
- Email subject lines
- Headlines and CTAs
- Ad copy (all platforms)
- Product descriptions (short)
- Push notifications
- SMS messages
- Taglines and slogans

### Medium-Form (Still fast)

- Email body copy
- Product pages
- About Us sections
- Landing page copy
- Changelog entries
- README descriptions
- Press releases (short)

## Output Files

After `/content:fast` completes:

### Generated Content

```
content/fast/[type]-[timestamp].md
```

Contains all variations ready to use

### Platform Specs

```
content/fast/[type]-specs.txt
```

Character counts and platform constraints

## Best Practices

### Provide Context

✅ **Good:**
```bash
/content:fast [write LinkedIn post announcing AI code review feature
launch, target audience: senior developers and engineering managers,
tone: professional but excited]
```

❌ **Vague:**
```bash
/content:fast [write LinkedIn post]
```

### Specify Platform

```bash
# Platform affects format, length, tone
/content:fast [write Twitter announcement] # vs
/content:fast [write LinkedIn announcement] # Different format!
```

### Request Multiple Variations

```bash
/content:fast [write 5 email subject line variations for product launch]
```

### Include Constraints

```bash
/content:fast [write Facebook ad copy under 125 characters]
```

## Quality vs Speed Trade-off

### /content:fast (This command)

```
Speed: ⚡⚡⚡⚡⚡ 5-15 seconds
Quality: ⭐⭐⭐⭐☆ Very good
Research: Minimal
Variations: 3-5 options
Use case: Quick content needs
```

### /content:good

```
Speed: ⚡⚡⚡☆☆ 2-5 minutes
Quality: ⭐⭐⭐⭐⭐ Excellent
Research: Comprehensive
Variations: Multiple with rationale
Use case: Strategic content
```

## Common Patterns

### Product Announcement

```
Structure:
1. Hook (what's new)
2. Key benefit
3. Supporting details (2-3 bullets)
4. Social proof (if available)
5. Clear CTA
```

### Feature Highlight

```
Structure:
1. Pain point identified
2. How feature solves it
3. Specific benefit/outcome
4. Quick example
5. Try it CTA
```

### Company Milestone

```
Structure:
1. The milestone (users, funding, etc.)
2. What it means
3. Thank supporters
4. What's next
5. Join us CTA
```

## Troubleshooting

### Content Not Right Tone

**Problem:** Generated content doesn't match brand voice

**Solution:**
```bash
/content:fast [same request, but use professional and technical tone
like our brand voice in ./docs/brand-voice.md]
```

### Too Long for Platform

**Problem:** Generated content exceeds character limit

**Solution:**
```bash
/content:fast [same request, but keep under 280 characters for Twitter]
```

### Need More Variations

**Problem:** Want more options to choose from

**Solution:**
```bash
/content:fast [generate 10 variations instead of 5]
```

### Content Too Generic

**Problem:** Needs more specificity

**Solution:**
```bash
# Add specific details to request
/content:fast [same request but include that we have 50,000 users
and reduced coding time by 70% in beta testing]
```

## After Generation

Standard workflow:

```bash
# 1. Generate content
/content:fast [content request]

# 2. Review variations
cat content/fast/[type]-[timestamp].md

# 3. Pick favorite (or combine elements)

# 4. Customize if needed

# 5. Use in platform

# 6. Track performance
# (Engagement, clicks, conversions)
```

## Iteration

If first attempt isn't perfect:

```bash
# Original
/content:fast [write LinkedIn post about feature]

# Review output
# "Too formal, need more excitement"

# Iterate
/content:fast [write LinkedIn post about feature, but more excited
and use emojis, target developers not managers]
```

## Time Savings

Typical time to write manually vs `/content:fast`:

```
Social media post:    10 min → 8 sec   (75x faster)
Email subject lines:  20 min → 6 sec   (200x faster)
Ad copy variations:   30 min → 9 sec   (200x faster)
Product description:  15 min → 5 sec   (180x faster)
Headlines:           25 min → 7 sec   (214x faster)
```

## Next Steps

- [/content:good](/docs/commands/content/good) - For strategic content with research
- [/content:enhance](/docs/commands/content/enhance) - Improve generated content
- [/content:cro](/docs/commands/content/cro) - Optimize for conversion

---

**Key Takeaway**: `/content:fast` generates quality copy in seconds with multiple variations optimized for different platforms, perfect when you need effective content quickly without compromising quality.
