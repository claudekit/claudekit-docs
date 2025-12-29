---
title: /content:enhance
description: Documentation for enhance
section: engineer
kit: engineer
category: commands/content
order: 51
published: true
---

# /content:enhance

Analyze and enhance existing copy to improve clarity, impact, SEO optimization, and readability. This command refines your content while maintaining your brand voice and core message.

## Syntax

```bash
/content:enhance [content description or file path]
```

## How It Works

The `/content:enhance` command follows a comprehensive enhancement workflow:

### 1. Content Analysis

- Reads existing content (file, URL, or description)
- Identifies content type (blog, docs, marketing, etc.)
- Analyzes current quality and effectiveness
- Detects brand voice and tone

### 2. Multi-Dimensional Audit

Invokes **copywriter** agent to audit:
- **Clarity**: Is message clear and easy to understand?
- **Impact**: Does it engage and persuade?
- **SEO**: Is it optimized for search engines?
- **Readability**: Is it easy to read and scan?
- **Grammar**: Are there errors or awkward phrasing?
- **Structure**: Is information well-organized?

### 3. Enhancement Recommendations

Provides specific improvements:
- Clearer headlines and subheadings
- Stronger opening and closing
- Improved transitions
- Better word choices
- SEO keyword integration
- Readability improvements

### 4. Revised Content

Delivers enhanced version:
- Original structure preserved (or improved)
- Brand voice maintained
- All improvements applied
- Before/after comparison

## Examples

### Blog Post Enhancement

```bash
/content:enhance [improve blog post at ./blog/ai-development.md]
```

**What happens:**
```
1. Content Analysis
   Agent: copywriter

   Reading: ./blog/ai-development.md
   Type: Technical blog post
   Length: 1,200 words
   Target audience: Developers

   Current state:
   - Headline: Generic
   - Opening: Slow, buried lede
   - Structure: Wall of text, few subheadings
   - Readability: Grade 14 (college level)
   - SEO: No keywords, weak meta

2. Issues Identified

   CLARITY (Score: 6/10):
   - Jargon not explained
   - Complex sentences
   - Vague pronouns

   IMPACT (Score: 5/10):
   - Weak opening hook
   - No compelling examples
   - Passive voice throughout

   SEO (Score: 3/10):
   - No primary keyword
   - Missing meta description
   - No internal links
   - Headers not optimized

   READABILITY (Score: 4/10):
   - Flesch score: 32 (difficult)
   - Long paragraphs (8-10 lines)
   - Few bullet points
   - No visual breaks

3. Enhancement Applied

   HEADLINE:
   Before: "AI Development Tools"
   After: "How AI Development Tools Cut Coding Time by 70%"
   (+Specific, benefit-focused, includes number)

   OPENING:
   Before: "AI tools are becoming popular..."
   After: "Spent 3 hours debugging yesterday? AI tools
   now catch those bugs in seconds. Here's how..."
   (+Hook with specific scenario, immediate value)

   STRUCTURE:
   - Added 6 descriptive subheadings
   - Broke long paragraphs into 2-3 lines
   - Added bullet lists (3 places)
   - Inserted code examples
   - Added "Key Takeaway" boxes

   READABILITY:
   - Flesch score: 32 → 58 (easier)
   - Grade level: 14 → 9
   - Avg sentence: 25 words → 16 words
   - Passive voice: 15% → 3%

   SEO OPTIMIZATION:
   - Primary keyword: "AI development tools"
   - Added meta description (155 chars)
   - Optimized H2s with keywords
   - Added 3 internal links
   - Image alt text added

   WORD IMPROVEMENTS:
   - "utilize" → "use" (6 places)
   - "in order to" → "to" (4 places)
   - Removed filler words (23 instances)
   - Simplified jargon

4. Before/After Metrics

   Readability:        4/10 → 8/10
   SEO Score:          3/10 → 9/10
   Clarity:            6/10 → 9/10
   Impact:             5/10 → 8/10
   Estimated read time: 8 min → 5 min

✓ Enhancement complete (2 minutes)

Files created:
- blog/ai-development-enhanced.md
- blog/ai-development-changes.diff
```

### Marketing Page Copy

```bash
/content:enhance [improve About Us page copy]
```

**What happens:**
```
1. Analysis
   Content: About Us page
   Current length: 500 words
   Issues: Generic, corporate jargon, no personality

2. Enhancement Strategy

   TONE SHIFT:
   Before: Corporate, formal, distant
   After: Professional but approachable, human

   BEFORE:
   "Our company was founded in 2020 with the mission
   to provide innovative solutions to businesses
   worldwide. We leverage cutting-edge technology..."

   AFTER:
   "In 2020, we got frustrated watching developers
   waste hours on repetitive tasks. So we built
   ClaudeKit—AI agents that actually work."

   (+Specific, relatable, conversational)

3. Improvements Applied

   STORY STRUCTURE:
   - Problem we saw
   - Why we started
   - What makes us different
   - Who we help today
   - Where we're going

   REMOVE JARGON:
   ❌ "Leverage cutting-edge technology"
   ✓ "Use AI that actually works"

   ❌ "Synergistic solutions"
   ✓ "Tools that work together"

   ❌ "Best-in-class offerings"
   ✓ "The best tools we could build"

   ADD PERSONALITY:
   - Specific founding story
   - Real customer examples
   - Team member quotes
   - Behind-the-scenes details

   STRENGTHEN CREDIBILITY:
   - Concrete metrics (50,000+ users)
   - Customer logos
   - Specific achievements
   - Team credentials (where relevant)

✓ Enhanced copy delivered
```

### Documentation Page

```bash
/content:enhance [improve API documentation for authentication]
```

**What happens:**
```
1. Analysis
   Type: Technical documentation
   Audience: Developers integrating API

   Issues found:
   - Assumes too much knowledge
   - Missing practical examples
   - Unclear error messages
   - No troubleshooting section

2. Enhancements

   ADD QUICK START:
   - Minimal working example first
   - Then explain details
   - Progressive disclosure

   BEFORE:
   "The authentication endpoint accepts POST requests
   with JSON payload containing username and password
   fields which must be validated..."

   AFTER:
   "Quick Start:

   ```bash
   curl -X POST https://api.example.com/auth \
     -H "Content-Type: application/json" \
     -d '{"email": "user@example.com", "password": "secret"}'
   ```

   This returns your API token. Use it in subsequent requests..."

   IMPROVE STRUCTURE:
   1. Quick start (working code first)
   2. Authentication flow explained
   3. Request/response details
   4. Error handling
   5. Troubleshooting
   6. Security best practices

   ADD EXAMPLES:
   - cURL examples
   - JavaScript/Node.js
   - Python
   - Common use cases

   CLARIFY ERRORS:
   Before: "401 Unauthorized"
   After:
   "401 Unauthorized
   - Missing API key in header
   - API key expired (renew in dashboard)
   - Invalid API key format"

✓ Documentation enhanced
```

## When to Use

### ✅ Use /content:enhance for:

**Existing Blog Posts**
```bash
/content:enhance [improve old blog posts for SEO]
```

**Marketing Copy**
```bash
/content:enhance [refine homepage copy]
```

**Documentation**
```bash
/content:enhance [make API docs clearer]
```

**Email Content**
```bash
/content:enhance [improve newsletter readability]
```

**Product Descriptions**
```bash
/content:enhance [enhance product page copy]
```

### ❌ Don't use for:

**Creating New Content**
- Use `/content:fast` or `/content:good` instead

**Conversion Optimization**
- Use `/content:cro` for CRO-focused improvements

**Quick Grammar Fixes**
- Just fix directly or use grammar tool

## Enhancement Dimensions

### 1. Clarity

**Before:**
```
"Our platform enables users to leverage advanced
AI capabilities to optimize their development
workflow efficiency."
```

**After:**
```
"Build features 10x faster with AI that writes,
tests, and reviews your code."
```

### 2. Impact

**Before:**
```
"We offer various features for developers."
```

**After:**
```
"Ship your next feature in hours, not weeks.
50,000+ developers already do."
```

### 3. SEO

**Optimization techniques:**
- Primary keyword in H1
- Secondary keywords in H2s
- Natural keyword density (1-2%)
- Meta description (150-160 chars)
- Internal linking
- Image alt text
- URL slug optimization

### 4. Readability

**Improvements:**
- Shorter sentences (15-20 words avg)
- Shorter paragraphs (2-4 lines)
- Bullet points for lists
- Subheadings every 300 words
- Active voice (minimize passive)
- Simple words (avoid jargon)
- Visual breaks (images, code blocks)

## Readability Metrics

### Flesch Reading Ease

```
90-100: Very easy (5th grade)
60-70:  Easy (8th-9th grade) ← Target for most content
30-50:  Difficult (college)
0-30:   Very difficult
```

### Target by Content Type

```
Blog posts:        60-70 (Easy)
Marketing copy:    70-80 (Fairly easy)
Documentation:     50-60 (Standard)
Technical papers:  30-50 (Difficult) - OK
```

## SEO Best Practices

### Keyword Usage

```
Title tag:         Include primary keyword
H1:               Primary keyword
H2s:              Secondary keywords (1-2)
First paragraph:   Primary keyword naturally
Throughout:        1-2% keyword density
Meta description:  Primary keyword
```

### On-Page SEO

```
✓ Descriptive URLs (/ai-development-tools)
✓ Internal links (3-5 per post)
✓ External links (1-2 authoritative)
✓ Image optimization (alt text, compression)
✓ Mobile-friendly formatting
✓ Fast load time (remove bloat)
```

## Enhancement Patterns

### Blog Post Structure

```
1. Compelling headline (with number or benefit)
2. Hook (problem or surprising fact)
3. Quick value preview
4. Main content (subheadings every 300 words)
5. Practical examples
6. Key takeaways
7. Clear CTA
```

### Marketing Copy Structure

```
1. Attention-grabbing headline
2. Subheadline (elaborate benefit)
3. Problem identification
4. Solution presentation
5. Social proof
6. Features as benefits
7. Objection handling
8. Strong CTA
```

### Documentation Structure

```
1. Quick start (minimal working example)
2. Overview (what it does)
3. Detailed usage
4. Parameters/options
5. Examples (multiple languages)
6. Error handling
7. Troubleshooting
8. Best practices
```

## Output Files

After `/content:enhance` completes:

### Enhanced Content

```
content/enhanced/[original-name]-enhanced.md
```

Full enhanced version ready to use

### Change Report

```
content/enhanced/[original-name]-changes.diff
```

Shows all changes made

### Analysis Report

```
plans/content-enhance-[name]-YYYYMMDD.md
```

Contains:
- Original analysis scores
- Issues identified
- Enhancements applied
- Before/after metrics

## Best Practices

### Preserve Brand Voice

```
Original tone: Professional, helpful
✓ Keep: Professional, helpful
✗ Change to: Casual, quirky (unless requested)
```

### Maintain Accuracy

```
✓ Improve clarity of technical details
✗ Simplify so much that it's inaccurate
```

### Don't Over-Optimize

```
✗ Keyword stuffing for SEO
✗ Dumbing down for readability
✓ Balance clarity, accuracy, optimization
```

## Common Improvements

### Remove Filler Words

```
❌ "In order to" → ✓ "To"
❌ "Due to the fact that" → ✓ "Because"
❌ "At this point in time" → ✓ "Now"
❌ "In the event that" → ✓ "If"
❌ "For the purpose of" → ✓ "For" or "To"
```

### Strengthen Verbs

```
❌ "Is able to" → ✓ "Can"
❌ "Make use of" → ✓ "Use"
❌ "Take action" → ✓ "Act"
❌ "Provide assistance" → ✓ "Help"
```

### Active Voice

```
❌ "The code is written by developers"
✓ "Developers write the code"

❌ "Bugs are caught by tests"
✓ "Tests catch bugs"
```

## Troubleshooting

### Enhancement Changed Meaning

**Problem:** Enhanced version says something different

**Solution:**
```bash
# Review change report
cat content/enhanced/[name]-changes.diff

# Specify what to preserve
/content:enhance [same content, but preserve technical accuracy of X section]
```

### Too Much Changed

**Problem:** Enhancement too aggressive

**Solution:**
```bash
# Request lighter touch
/content:enhance [same content, but make minimal changes for readability only]
```

### Lost Brand Voice

**Problem:** Doesn't sound like us anymore

**Solution:**
```bash
# Specify tone
/content:enhance [same content, maintain formal professional tone]
```

## After Enhancement

Standard workflow:

```bash
# 1. Enhance content
/content:enhance [content description]

# 2. Review changes
cat content/enhanced/[name]-changes.diff

# 3. Review enhanced version
cat content/enhanced/[name]-enhanced.md

# 4. Check metrics improvement
cat plans/content-enhance-*.md

# 5. If satisfied, replace original
mv content/enhanced/[name]-enhanced.md [original-location]

# 6. Commit changes
/git:cm
```

## Metrics to Track

After publishing enhanced content:

### Engagement Metrics

- Time on page (should increase)
- Bounce rate (should decrease)
- Scroll depth (should increase)
- Social shares (may increase)

### SEO Metrics

- Search rankings (track target keywords)
- Organic traffic (monitor over 30-60 days)
- Click-through rate from search
- Featured snippet appearances

### Conversion Metrics

- Goal completions (signups, downloads, etc.)
- CTA click rate
- Next page navigation

## Next Steps

- [/content:cro](/docs/commands/content/cro) - Optimize for conversion
- [/content:good](/docs/commands/content/good) - Write new quality content
- [/docs:update](/docs/commands/docs/update) - Update documentation

---

**Key Takeaway**: `/content:enhance` improves existing content across multiple dimensions (clarity, impact, SEO, readability) while preserving your core message and brand voice, making your content more effective and discoverable.
