---
title: "/seo"
description: "Technical SEO audits, keyword research, content optimization, and schema markup generation powered by AI analysis"
section: marketing
category: commands
order: 4
published: true
---

> Optimize search visibility with AI-powered SEO audits and recommendations

## Quick Start

Audit any website in 60 seconds:

```bash
/seo audit https://example.com
```

**What happens**:
1. Fetches page content and metadata
2. Analyzes technical SEO factors
3. Checks backlinks, traffic, keywords (if MCP connected)
4. Generates prioritized recommendations with scores

**Output**: `assets/seo/audits/251229-example-com-audit.md`

## What It Does

### Before /seo
- Manual SEO audits (4-6 hours)
- Fragmented tools and reports
- No actionable priorities
- Missing technical issues
- Inconsistent keyword research

### After /seo
- AI-generated audit (60 seconds)
- Comprehensive analysis report
- Priority-ranked recommendations
- Technical issue detection
- Strategic keyword insights

## Syntax

```bash
/seo <action> [target]
```

### Arguments

| Argument | Type | Description | Required |
|----------|------|-------------|----------|
| `action` | string | SEO action to perform | Yes |
| `target` | string | URL, topic, or content | Yes |

### Actions

| Action | Description | Target | Output | Time Saved |
|--------|-------------|--------|--------|------------|
| `audit` | Technical SEO audit | URL | Audit report | 4-6 hours |
| `keywords` | Keyword research | Topic | Keyword strategy | 2-3 hours |
| `optimize` | Content optimization | URL/content | Optimization report | 1-2 hours |
| `schema` | Generate JSON+LD | Page type | Schema markup | 30-60 min |

## Examples

### Example 1: Technical SEO Audit

**Input**:
```bash
/seo audit https://example.com/pricing
```

**Expected Output**:
```markdown
✓ seo-specialist: Page fetched and analyzed
✓ ReviewWeb API: Backlinks and traffic data retrieved

---
# SEO Audit: example.com/pricing
Generated: 2025-01-29 14:30 UTC
Score: 74/100 (C+)

## OVERVIEW
URL: https://example.com/pricing
Status: 200 OK
Load Time: 2.4s (needs improvement)
Mobile-Friendly: Yes
HTTPS: Yes

## CRITICAL ISSUES (Fix Immediately)
🔴 Missing H1 tag (Priority: Critical)
   Impact: Search engines can't identify main topic
   Fix: Add H1 with primary keyword "SaaS Pricing Plans"

🔴 Meta description too short (Priority: Critical)
   Current: "Our pricing" (12 chars)
   Target: 150-160 chars
   Fix: "Compare SaaS pricing plans. Free trial, Pro, and Enterprise options. Transparent pricing with no hidden fees. Start free today."

🔴 No alt text on 4 images (Priority: High)
   Impact: Accessibility issues + lost image search traffic
   Fix: Add descriptive alt text to product screenshots

## HIGH PRIORITY (Fix This Week)
🟠 Title tag not optimized (Priority: High)
   Current: "Pricing - Example"
   Recommended: "SaaS Pricing Plans | Free Trial | Example.com"
   Improvement: Add keywords, value proposition

🟠 Page load time slow (Priority: High)
   Current: 2.4s
   Target: <1.5s
   Issues: Unoptimized images (3 files >500KB)
   Fix: Compress images, enable lazy loading

🟠 Missing schema markup (Priority: High)
   Recommended: Product schema with pricing
   Benefit: Rich snippets in search results

## MEDIUM PRIORITY (Fix This Month)
🟡 Heading structure issues
   Found: H2 → H4 (skipped H3)
   Fix: Proper hierarchy H1 → H2 → H3

🟡 Internal linking weak
   Only 2 internal links found
   Recommendation: Link to /features, /blog, /case-studies

🟡 URL structure not optimal
   Current: /pricing
   Better: /pricing or /plans (current is acceptable)

## STRENGTHS (Keep Doing This)
✅ Mobile responsive design
✅ HTTPS enabled
✅ Clean URL (no parameters)
✅ Proper use of semantic HTML
✅ Fast server response (180ms)

## KEYWORD ANALYSIS
Primary Keywords: "saas pricing", "pricing plans"
Search Volume: 8,100/month combined
Competition: Medium
Ranking: Position 14 (page 2)

Keyword Opportunities:
- "saas pricing comparison" (2,400/month, low competition)
- "saas pricing calculator" (1,900/month, medium competition)
- "best saas pricing model" (1,300/month, low competition)

## BACKLINK PROFILE (via ReviewWeb API)
Total Backlinks: 47
Referring Domains: 18
Domain Authority: 32/100 (needs improvement)

Top Backlinks:
1. techcrunch.com/saas-tools (DA: 93, dofollow)
2. producthunt.com/posts/example (DA: 90, nofollow)
3. saaslist.io/example (DA: 45, dofollow)

## TRAFFIC ESTIMATES (via ReviewWeb API)
Monthly Organic Traffic: ~1,200 visits
Top Keywords:
1. "example pricing" (480 visits)
2. "example plans" (290 visits)
3. "example cost" (185 visits)

## COMPETITOR COMPARISON
Your Score: 74/100
Competitor Avg: 81/100
Gap: -7 points

Areas to Match:
- Schema markup (competitors have it)
- Faster load times (competitor avg: 1.2s)
- More internal links (competitor avg: 8)

## ACTION PLAN (Prioritized)

Week 1 (Critical):
1. Add H1 tag: "SaaS Pricing Plans"
2. Rewrite meta description (150-160 chars)
3. Add alt text to all images
4. Compress large images

Week 2 (High Priority):
5. Optimize title tag
6. Add Product schema markup
7. Improve internal linking (add 6+ links)

Week 3-4 (Medium Priority):
8. Fix heading hierarchy
9. Add FAQ section with schema
10. Create pricing comparison table

## ESTIMATED IMPACT
After implementing all fixes:
- Score improvement: 74 → 88 (B+)
- Ranking improvement: Position 14 → 6-8 (estimated)
- Traffic increase: 1,200 → 2,800 visits/month (+133%)

## FILES GENERATED
- Full audit: assets/seo/audits/250129-example-com-pricing-audit.md
- Schema template: assets/seo/schemas/pricing-page-schema.json
- Keyword list: assets/seo/keywords/250129-saas-pricing-keywords.md

Next Steps:
/seo schema pricing  # Generate Product schema
/fix:fast Add H1 and meta description to pricing page
/content pricing-comparison  # Create comparison content
```

### Example 2: Keyword Research

**Input**:
```bash
/seo keywords "project management software"
```

**Expected Output**:
```markdown
✓ attraction-specialist: Keyword research completed
✓ ReviewWeb API: Search volume data retrieved

---
# Keyword Research: Project Management Software
Generated: 2025-01-29 14:45 UTC

## PRIMARY KEYWORDS (High Intent)

### 1. project management software
- Volume: 49,500/month
- Difficulty: 72/100 (High)
- CPC: $18.50
- Intent: Commercial Investigation
- Opportunity: Medium (high volume, high competition)

### 2. best project management software
- Volume: 22,200/month
- Difficulty: 68/100 (High)
- CPC: $16.20
- Intent: Commercial Investigation
- Opportunity: High (buyers actively comparing)

### 3. project management tools
- Volume: 40,500/month
- Difficulty: 70/100 (High)
- CPC: $14.80
- Intent: Informational/Commercial
- Opportunity: Medium-High

## SECONDARY KEYWORDS (Medium Intent)

### 4. project management software for small business
- Volume: 3,600/month
- Difficulty: 48/100 (Medium)
- CPC: $12.40
- Intent: Commercial
- Opportunity: High (specific, lower competition) ⭐

### 5. free project management software
- Volume: 18,100/month
- Difficulty: 58/100 (Medium)
- CPC: $8.20
- Intent: Commercial
- Opportunity: Medium (high volume, lower intent)

### 6. project management app
- Volume: 8,100/month
- Difficulty: 52/100 (Medium)
- CPC: $11.30
- Intent: Commercial Investigation
- Opportunity: Medium-High

## LONG-TAIL KEYWORDS (Low Competition, High Intent) ⭐

### 7. simple project management software for teams
- Volume: 720/month
- Difficulty: 32/100 (Low)
- CPC: $9.80
- Intent: Transactional
- Opportunity: Very High (low competition, buyers ready)

### 8. project management software with time tracking
- Volume: 1,900/month
- Difficulty: 38/100 (Low-Medium)
- CPC: $13.50
- Intent: Commercial
- Opportunity: Very High (specific feature search)

### 9. project management software for remote teams
- Volume: 2,400/month
- Difficulty: 42/100 (Medium)
- CPC: $11.90
- Intent: Commercial
- Opportunity: High (growing trend)

### 10. affordable project management software
- Volume: 880/month
- Difficulty: 36/100 (Low)
- CPC: $10.20
- Intent: Transactional
- Opportunity: Very High (price-sensitive buyers)

## QUESTION KEYWORDS (Content Opportunities)

### FAQ Content:
- "what is project management software" (5,400/month, Difficulty: 28)
- "how to choose project management software" (1,300/month, Difficulty: 34)
- "why use project management software" (720/month, Difficulty: 26)

### Comparison Content:
- "asana vs monday" (14,800/month, Difficulty: 58)
- "clickup vs asana" (8,100/month, Difficulty: 54)
- "trello vs asana" (9,900/month, Difficulty: 56)

## COMPETITOR KEYWORDS (Steal Traffic)

Top Competitor: asana.com
- Ranking for: 2,847 keywords
- Top keywords they rank for that you don't:
  1. "project timeline software" (2,900/month)
  2. "team collaboration tools" (4,100/month)
  3. "project planning software" (6,700/month)

## CONTENT STRATEGY

### Immediate Wins (Create First):
1. "10 Best Project Management Software for Small Business 2025"
   - Target: "project management software for small business"
   - Volume: 3,600/month
   - Difficulty: 48/100
   - Format: Listicle + comparison table

2. "Project Management Software with Time Tracking: Top 7 Tools"
   - Target: "project management software with time tracking"
   - Volume: 1,900/month
   - Difficulty: 38/100
   - Format: Feature comparison

3. "Affordable Project Management Software: 12 Budget Options"
   - Target: "affordable project management software"
   - Volume: 880/month
   - Difficulty: 36/100
   - Format: Price comparison

### Long-term Authority Building:
4. "Complete Guide: How to Choose Project Management Software"
   - Target: "how to choose project management software"
   - Volume: 1,300/month
   - Difficulty: 34/100
   - Format: Ultimate guide (3,000+ words)

5. "Asana vs Monday vs ClickUp: Which is Best for Your Team?"
   - Target: comparison keywords
   - Combined volume: 32,800/month
   - Difficulty: 56/100
   - Format: Detailed comparison

## SEARCH INTENT ANALYSIS

**Informational (Early Stage)**:
- "what is project management"
- "project management basics"
→ Content: Educational blog posts

**Commercial Investigation (Mid Stage)**:
- "best project management software"
- "project management tools comparison"
→ Content: Comparison pages, reviews

**Transactional (Late Stage)**:
- "buy project management software"
- "project management software pricing"
→ Content: Pricing pages, demo signups

## KEYWORD PRIORITIZATION

### Priority 1 (Start This Month):
1. "project management software for small business" (medium difficulty, high intent)
2. "project management software with time tracking" (low difficulty, high intent)
3. "affordable project management software" (low difficulty, high intent)

### Priority 2 (Next Month):
4. "best project management software" (high volume, worth competing)
5. "free project management software" (high volume, lead generation)
6. "project management app" (medium volume, medium difficulty)

### Priority 3 (Long-term):
7. "project management software" (high volume, brand building)
8. Competitor comparison keywords (steal competitor traffic)
9. Question keywords (build authority)

## CONTENT CALENDAR

Month 1:
- Week 1: Small business guide
- Week 2: Time tracking comparison
- Week 3: Affordable options list
- Week 4: FAQ content

Month 2:
- Week 1: Best software comparison
- Week 2: Free tools roundup
- Week 3: Mobile app review
- Week 4: Case studies

## TRACKING & METRICS

Monitor these keywords weekly:
- project management software for small business
- project management software with time tracking
- affordable project management software

Target Rankings:
- Month 1: Position 50-30
- Month 3: Position 30-15
- Month 6: Position 15-5

Saved: assets/seo/keywords/250129-project-management-software-keywords.md

Next Actions:
/content blog "Best Project Management Software for Small Business 2025"
/seo audit https://yoursite.com/blog/project-management
```

### Example 3: Generate Schema Markup

**Input**:
```bash
/seo schema pricing
```

**Expected Output**:
```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Example SaaS Platform",
  "description": "Complete SaaS platform for team collaboration and project management",
  "image": "https://example.com/assets/product-image.png",
  "brand": {
    "@type": "Brand",
    "name": "Example"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Free Plan",
      "price": "0",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://example.com/pricing",
      "description": "Free forever plan with basic features"
    },
    {
      "@type": "Offer",
      "name": "Pro Plan",
      "price": "29",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://example.com/pricing",
      "description": "Professional plan with advanced features",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": "1",
        "unitText": "monthly subscription"
      }
    },
    {
      "@type": "Offer",
      "name": "Enterprise Plan",
      "price": "99",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://example.com/pricing",
      "description": "Enterprise plan with custom features"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "847"
  }
}

Saved: assets/seo/schemas/pricing-page-schema.json

Implementation:
Add this script tag to your <head> or before </body>:
<script type="application/ld+json">
{...schema content...}
</script>

Benefits:
✓ Rich snippets in search results
✓ Price display in Google Shopping
✓ Star ratings visible
✓ Enhanced click-through rate (+15-30%)

Validate:
https://search.google.com/test/rich-results
```

## Workflow Integration

### Complete SEO Optimization
```bash
# Step 1: Initial audit
/seo audit https://example.com

# Step 2: Keyword research
/seo keywords "your main topic"

# Step 3: Create optimized content
/content blog "keyword-focused article"

# Step 4: Add schema
/seo schema article

# Step 5: Re-audit
/seo audit https://example.com/new-article

# Step 6: Track performance
/analyze traffic
```

## Related Commands

- [/content](/docs/marketing/commands/content) - SEO-optimized content
- [/analyze](/docs/marketing/commands/analyze) - Traffic analysis
- [/campaign](/docs/marketing/commands/campaign) - SEO campaigns

## Related Agents

- [seo-specialist](/docs/marketing/agents/seo-specialist) - Technical SEO
- [attraction-specialist](/docs/marketing/agents/attraction-specialist) - Keyword research

## Skills Activated

- **seo-optimization**: SEO frameworks and best practices
- **assets-organizing**: File management

---

**Rank higher. Drive more traffic.** AI-powered SEO that actually works.
