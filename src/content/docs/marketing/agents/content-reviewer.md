---
title: "Content Reviewer"
description: "Comprehensive content quality assessment and marketing best practices enforcement before launch"
section: marketing
category: agents
order: 5
---

# Content Reviewer

> Your quality gatekeeper who catches issues before your audience does.

## What This Agent Does

**The Problem**: You've just finished writing your landing page copy. Or email campaign. Or product announcement. It feels good. You're ready to ship.

But here's what you might have missed: The headline doesn't pass the 5-second clarity test. Your CTA is buried in paragraph three. The brand voice shifts halfway through. Your SEO keywords are nowhere to be found. And that claim in the second section? You can't actually back it up.

You ship anyway. The campaign underperforms. You don't know why.

**The Solution**: Content Reviewer is your senior content strategist who audits marketing deliverables against brand standards, SEO best practices, conversion principles, and compliance requirements. Think of it as your pre-flight checklist before content goes live.

Catch weak copy, unclear messaging, brand inconsistencies, and conversion killers before your audience sees them.

## Quick Start

30-second example - review landing page copy:

```
You: "Review the new feature landing page"

content-reviewer: Analyzing landing page copy...

[Reads: plans/251229-feature-launch/landing-page.md]
[Checks: docs/brand-guidelines.md, docs/design-guidelines.md]

CONTENT REVIEW SUMMARY

Scope:
- Content reviewed: Feature landing page (1,247 words)
- Sections: Hero, benefits, how it works, pricing, FAQ, CTA
- Review focus: Conversion optimization, brand alignment, SEO

CRITICAL ISSUES: None ✓

HIGH PRIORITY FINDINGS:

1. Weak Hero Headline [CONVERSION IMPACT]
   Current: "Introducing Our New AI Assistant"
   Issue: Generic, feature-focused, no clear benefit
   Rewrite: "Ship Features 10x Faster With Your AI Dev Team"
   Why: Leads with outcome, quantifies benefit, action-oriented

2. CTA Placement [CONVERSION IMPACT]
   Current: First CTA at 40% scroll depth
   Issue: Losing high-intent visitors before CTA appears
   Fix: Add hero CTA above fold, repeat every 2 sections
   Expected lift: +15-25% conversion rate

3. Missing SEO Keywords [VISIBILITY]
   Issue: Target keyword "AI code assistant" appears 1x
   Fix: Add to H1, first paragraph, 2-3 subheadings
   Competitor benchmark: 8-12 mentions in top-ranking pages

MEDIUM PRIORITY IMPROVEMENTS:

1. Voice Inconsistency
   → Section 1-3: Professional, peer-to-peer (on brand ✓)
   → Section 4-5: Corporate, formal (off brand ✗)
   Suggestion: Rewrite pricing section in conversational tone

2. Vague Benefits
   Current: "Save time on development"
   Better: "Ship auth systems in 6 minutes instead of 6 hours"
   Apply specificity to all 5 benefit statements

3. FAQ Could Address Objections Better
   Missing: "Does it work with my existing codebase?"
   Missing: "What if the AI makes mistakes?"
   Add: 3 objection-handling questions

LOW PRIORITY SUGGESTIONS:

1. Testimonial placement could be earlier (move before pricing)
2. Add 1-2 power words to subheadlines ("effortlessly", "instantly")
3. Consider shorter paragraphs for scanability (current avg: 4.2 sentences)

POSITIVE OBSERVATIONS:

✓ Clear value proposition in subheadline
✓ Benefit statements are outcome-focused
✓ Code examples build credibility
✓ Social proof section is well-structured
✓ Mobile-responsive formatting maintained

RECOMMENDED ACTIONS:

Priority 1 (Ship blocker):
1. Rewrite hero headline (5 min)
2. Add hero CTA above fold (2 min)

Priority 2 (Launch this week):
3. Add SEO keyword mentions (10 min)
4. Rewrite pricing section for brand voice (15 min)
5. Specify benefit statements with numbers (20 min)

Priority 3 (Post-launch):
6. Add 3 FAQ questions for objections (30 min)
7. Adjust testimonial placement (5 min)
8. Tighten paragraph length (15 min)

METRICS ASSESSMENT:
- Readability: Flesch score 68 (Good) ✓
- SEO: Needs improvement (keyword density low)
- Brand voice alignment: 85% (pricing section needs work)
- Conversion elements: 7/10 (missing hero CTA, weak headline)

NEXT STEPS:
→ Address Priority 1 issues before launch
→ Update plan file with revision status
→ Re-submit for final review after changes

Questions:
→ What's your target keyword for SEO?
→ Do you have A/B test capacity for headline variations?
```

## Capabilities

### 1. Content Quality Assessment

Review adherence to brand standards and best practices.

**Example - Brand Voice Check:**
```
content-reviewer: Analyzing brand voice consistency...

Document: Email campaign sequence (5 emails)

BRAND VOICE ANALYSIS:

Brand Guidelines (from docs/brand-guidelines.md):
✓ Voice: Professional but approachable
✓ Tone: Peer-to-peer (developer to developer)
✓ Avoid: Hype, exaggeration, corporate jargon
✓ Use: Specific results, honest claims, technical credibility

Email 1: ✓ On brand (8/10)
"Your AI teammate just got smarter. Here's what changed:"
→ Good: Conversational, specific
→ Issue: "Just got smarter" slightly hype-y

Email 2: ✗ Off brand (4/10)
"Revolutionize your development workflow with cutting-edge AI"
→ Issue: "Revolutionize" and "cutting-edge" are corporate jargon
→ Issue: No specific outcome mentioned
→ Rewrite: "Ship features 10x faster. Here's how your AI teammate helps:"

Email 3: ✓ On brand (9/10)
"1,200 developers shipped code yesterday. Zero P0 bugs."
→ Excellent: Specific numbers, peer social proof, outcome-focused

Email 4: ⚠ Mostly on brand (7/10)
"We're excited to announce our latest feature..."
→ Issue: "We're excited" is brand-centric (not user-centric)
→ Rewrite: "You asked for better code review. We built it."

Email 5: ✓ On brand (9/10)
"Your trial ends in 3 days. Here's what you'll lose:"
→ Good: Direct, benefit-focused, urgency without hype

RECOMMENDATION:
Rewrite Email 2 completely, adjust Email 4 opening line.
Overall voice consistency: 74% → Target: 90%+
```

### 2. SEO and Conversion Analysis

Identify optimization opportunities.

**Example - SEO Audit:**
```
content-reviewer: Performing SEO analysis...

Target page: Blog post "How to Build Authentication in 6 Minutes"
Target keyword: "build authentication system"

SEO SCORE: 62/100 (Needs Improvement)

KEYWORD OPTIMIZATION:

Primary keyword "build authentication system":
→ Title: Missing (0 mentions) ✗
→ H1: Present (1 mention) ✓
→ First paragraph: Missing ✗
→ Subheadings: 1 of 6 ✗
→ Body: 3 mentions (need 5-8) ⚠
→ Meta description: Missing ✗
→ URL: Present ✓

Secondary keywords:
→ "authentication setup": 0 mentions (add 2-3)
→ "user authentication": 2 mentions ✓
→ "auth implementation": 0 mentions (add 1-2)

CONTENT STRUCTURE:

✓ H1 present and unique
✗ H2s not optimized for keywords
✓ Paragraph length appropriate (2-4 sentences avg)
✗ No internal links to related content
✗ No external authority links
✓ Images present (3)
✗ Images missing alt text

TECHNICAL SEO:

✓ Mobile-responsive
✓ Fast loading (< 3s)
✗ Meta description missing (search preview will be auto-generated)
✗ Open Graph tags incomplete
⚠ Readability: Grade 10 (target: Grade 8 for SEO)

RECOMMENDATIONS:

High Impact (Do first):
1. Add meta description with primary keyword (155 chars)
   Suggestion: "Learn to build authentication systems in 6 minutes with AI. Email, OAuth, 2FA - production-ready code that ships today."

2. Update title to include primary keyword
   Current: "Authentication in 6 Minutes"
   Better: "How to Build Authentication System in 6 Minutes (With AI)"

3. Rewrite first paragraph with keyword density
   Current: Opens with story (good for engagement, bad for SEO)
   Fix: Add keyword-rich second sentence after hook

4. Add 2-3 internal links
   → Link to "OAuth setup guide"
   → Link to "Security best practices"
   → Link to "API authentication tutorial"

Medium Impact:
5. Add alt text to all 3 images with keywords
6. Optimize 2-3 H2 subheadings for secondary keywords
7. Add 1-2 authority external links (Auth0 docs, OWASP guide)

Low Impact:
8. Simplify vocabulary in 3 sections (lower reading grade)
9. Add FAQ schema markup
10. Create internal link from homepage to this post

COMPETITIVE ANALYSIS:

Top 3 ranking competitors for "build authentication system":
→ Avg word count: 2,400 (yours: 1,800) - add 600 words
→ Avg keyword density: 1.8% (yours: 0.9%) - double mentions
→ All have video embeds - consider adding demo video
→ All have code examples - you have this ✓

Expected improvement: Current rank #18 → Target rank #8-12 after fixes
```

### 3. Compliance and Quality Audit

Catch legal and ethical issues.

**Example - Compliance Check:**
```
content-reviewer: Running compliance audit...

Document: Landing page for SaaS product
Target regions: US, EU (GDPR), Canada (CASL)

COMPLIANCE REPORT:

CRITICAL - LEGAL ISSUES:

1. Unsubstantiated Claim [FTC VIOLATION RISK]
   Found: "Guaranteed to 10x your productivity"
   Issue: "Guaranteed" is absolute claim without proof
   Risk: FTC requires substantiation for performance claims
   Fix: "Helps developers ship 10x faster (based on 1,200 user study)"
   Add: Link to case study or disclaimer

2. Missing Privacy Policy Link [GDPR VIOLATION]
   Issue: Email signup form has no privacy policy link
   Risk: GDPR Article 13 requires privacy notice at collection
   Fix: Add "By signing up, you agree to our Privacy Policy" with link
   Status: MUST FIX before accepting EU traffic

3. Cookie Consent Missing [GDPR VIOLATION]
   Issue: Site uses analytics cookies without consent banner
   Risk: GDPR requires opt-in consent for non-essential cookies
   Fix: Implement cookie consent banner (recommend CookieBot or OneTrust)
   Status: MUST FIX before accepting EU traffic

HIGH PRIORITY:

4. Testimonial Attribution Incomplete
   Found: "This changed how we build" - John D.
   Issue: FTC requires full disclosure if testimonials are incentivized
   Fix: Add context: "John D., CTO at TechCorp (user since 2024)"
   Better: Add "Unpaid testimonial" if applicable

5. Free Trial Terms Unclear
   Found: "Start free trial"
   Issue: User doesn't know if credit card required, when charged
   Fix: "Start 14-day free trial - no credit card required"
   Better: Add link to full trial terms

6. Competitor Comparison Lacks Attribution
   Found: Feature comparison table with "Competitor A"
   Issue: Could be seen as misleading if not specific
   Risk: Lanham Act (false advertising) if claims are incorrect
   Fix: Name competitors or remove comparison
   Alternative: Use "Typical solution" instead of "Competitor A"

MEDIUM PRIORITY:

7. Accessibility Issues (WCAG 2.1)
   → 3 images missing alt text (screen reader issue)
   → Color contrast: 4.2:1 on CTA button (need 4.5:1)
   → Form labels not properly associated with inputs
   Fix: Address for ADA compliance

8. Email Marketing (CAN-SPAM / CASL)
   If collecting emails, you must:
   ✓ Have unsubscribe link (check email template)
   ✓ Include physical address (add to footer)
   ✓ Honor opt-outs within 10 days (verify email tool does this)

RECOMMENDATIONS:

Pre-launch blockers (MUST FIX):
1. Fix "guaranteed" claim or add substantiation
2. Add GDPR-compliant privacy notice to forms
3. Implement cookie consent for EU users
4. Clarify free trial terms

Post-launch (fix within 30 days):
5. Improve testimonial attribution
6. Fix accessibility issues
7. Review competitor comparison for accuracy

Legal Disclaimer:
This is content review, not legal advice. Consult attorney for:
→ Multi-jurisdiction compliance
→ Industry-specific regulations (healthcare, finance)
→ Terms of Service / Privacy Policy drafting
```

### 4. Performance Optimization

Suggest improvements for engagement and conversion.

**Example - Conversion Optimization:**
```
content-reviewer: Analyzing conversion elements...

Page: Product landing page
Current conversion rate: 2.8% (visitors to signups)
Industry benchmark: 4-6%

CONVERSION ANALYSIS:

FRICTION POINTS (Reducing conversions):

1. Hero Section [HIGH IMPACT]
   Issue: Value proposition takes 8 seconds to understand
   Heatmap insight: 45% bounce before scrolling
   Fix: Rewrite headline for instant clarity
   Current: "The next generation of development tools"
   Better: "Build & deploy features in 6 minutes, not 6 hours"
   Expected lift: +1.2% conversion (+43% relative improvement)

2. CTA Clarity [HIGH IMPACT]
   Issue: Primary CTA says "Get Started"
   Problem: Vague, doesn't indicate next step
   Better alternatives:
   → "Start free trial" (specific, no commitment)
   → "See it in action" (lower commitment for cold traffic)
   → "Build your first feature" (outcome-focused)
   Expected lift: +0.4% conversion (+14% relative improvement)

3. Trust Signals Too Low [MEDIUM IMPACT]
   Issue: Social proof appears at 70% scroll depth
   Problem: Users need trust before converting
   Fix: Move "1,200+ developers trust ClaudeKit" to hero section
   Add: Logo bar of known companies (if available)
   Expected lift: +0.3% conversion (+11% relative improvement)

4. Form Friction [MEDIUM IMPACT]
   Issue: Signup requires 5 fields (name, email, company, role, phone)
   Problem: Each field reduces conversion ~10%
   Industry data: 3 fields = baseline, 5 fields = -20% conversion
   Fix: Reduce to email only, collect rest post-signup
   Expected lift: +0.6% conversion (+21% relative improvement)

ENGAGEMENT BOTTLENECKS:

1. Content Scanability
   Issue: Paragraphs average 5.3 sentences (too dense)
   Fix: Break into 2-3 sentence blocks
   Add: More bullet points, whitespace

2. Cognitive Load
   Issue: 7 benefit statements (too many to process)
   Fix: Show top 3, hide rest behind "See all features" toggle
   Psychology: Rule of 3 for memory retention

3. Video Placement
   Issue: Demo video at 60% scroll depth
   Problem: Most visitors don't scroll that far
   Fix: Embed in hero section (auto-play muted)
   Data: Video in hero increases engagement 80%

RECOMMENDED A/B TESTS:

Test 1: Hero Headline (Highest Impact)
Control: Current headline
Variant A: Outcome-focused headline
Variant B: Time-saving headline
Variant C: Question-based headline
Run: 2 weeks, 95% confidence
Expected winner: Variant A or B

Test 2: CTA Copy
Control: "Get Started"
Variant: "Start Free Trial"
Run: 1 week, 95% confidence
Expected lift: 10-15%

Test 3: Form Length
Control: 5 fields
Variant: Email only
Run: 1 week, 95% confidence
Expected lift: 15-25%

Test 4: Trust Signal Placement
Control: Social proof at 70% scroll
Variant: Social proof in hero
Run: 2 weeks, 90% confidence
Expected lift: 8-12%

PROJECTED IMPROVEMENT:

Current: 2.8% conversion
After fixes: 4.2-4.8% conversion (+50-71% improvement)

Monthly impact (assuming 10,000 visitors):
→ Current: 280 signups
→ Optimized: 420-480 signups
→ Gain: +140-200 signups/month

At 10% signup-to-customer rate and $100 LTV:
→ Additional revenue: $1,400-2,000/month
→ Annual: $16,800-24,000
```

### 5. Task Completeness Verification

Ensure all planned content is delivered.

**Example:**
```
content-reviewer: Verifying task completion...

Plan file: plans/251220-product-launch/plan.md

TODO STATUS CHECK:

Completed ✓ (8/10 tasks):
✓ Hero section copy
✓ Feature descriptions
✓ Pricing table
✓ FAQ section
✓ Email announcement draft
✓ Social media posts (Twitter, LinkedIn)
✓ Blog post announcement
✓ Press release

Incomplete ✗ (2/10 tasks):
✗ Demo video script (assigned, not delivered)
✗ Partner email template (not started)

CONTENT GAPS IDENTIFIED:

1. Missing: Demo video script
   Impact: Video production blocked
   Blocker: Yes (launch asset)
   Action: Prioritize immediately

2. Missing: Partner email template
   Impact: Can't coordinate co-marketing
   Blocker: Partial (launch can proceed, co-marketing delayed)
   Action: Complete before partner outreach

3. Not in plan but needed: Meta descriptions
   Found: 5 new pages lack meta descriptions
   Impact: SEO sub-optimal
   Action: Add to plan, complete before publish

PLAN FILE UPDATE:

Updated: plans/251220-product-launch/plan.md
Changes:
→ Marked 8 tasks complete
→ Added Priority 1 flag to demo video script
→ Added new task: Meta descriptions
→ Updated timeline: Launch ready except demo video

NEXT STEPS:
1. Complete demo video script (unblocks production)
2. Create partner email template
3. Write meta descriptions for 5 pages
4. Final review after all tasks complete

RECOMMENDATION:
Content is 80% complete. Demo video is blocking launch.
Recommend: Delay launch 3 days OR proceed with static screenshots instead of video.
```

## When to Use Content Reviewer

**Perfect for:**
- Pre-launch quality checks
- Campaign asset review before distribution
- Landing page optimization
- Email campaign audits
- Content compliance verification
- SEO content assessment

**Not needed for:**
- Draft/brainstorm stage content
- Internal documents
- Quick social media posts
- Technical documentation

## Example Workflows

### Workflow 1: Pre-Launch Landing Page Review

```
1. You: "Review landing page before launch tomorrow"

2. content-reviewer: Comprehensive audit
   - Reads landing page content
   - Checks brand guidelines and design standards
   - Analyzes conversion elements
   - Tests SEO optimization
   - Validates compliance requirements

3. Output (Report):
   ✓ Critical issues (must fix): 2 found
   ✓ High priority improvements: 5 found
   ✓ Medium priority: 8 suggestions
   ✓ Positive observations: 12 elements working well
   ✓ Prioritized action plan
   ✓ Expected conversion impact: +40% after fixes

4. You fix critical issues

5. content-reviewer: Re-review after changes
   ✓ All blockers resolved
   ✓ Ready for launch
```

### Workflow 2: Campaign Performance Improvement

```
1. You: "Our email campaign has 8% open rate, benchmark is 22%"

2. content-reviewer: Diagnostic review
   - Analyzes subject lines
   - Reviews email body content
   - Checks CTA placement and clarity
   - Identifies friction points

3. Output:
   Issues found:
   → Subject line: Generic, no curiosity hook
   → Preview text: Wasted space
   → CTA: Buried in paragraph 3
   → Content: Too long (850 words, should be <300)

   Recommendations:
   → Rewrite subject line (5 test variations provided)
   → Optimize preview text for intrigue
   → Add hero CTA above fold
   → Cut content by 60%, focus on single message

4. You implement changes

5. Expected improvement: 8% → 18-24% open rate
```

## Best Practices

### 1. Review Before Launch, Not After

**Bad:** Ship content, then review performance data
**Good:** Review content quality before anyone sees it

Catch issues when they're cheap to fix.

### 2. Prioritize by Impact

Not all issues are equal. Fix:
1. Blockers first (compliance, broken claims)
2. High-impact improvements (conversion killers)
3. Nice-to-haves last (minor style issues)

### 3. Use Data, Not Opinions

**Bad:** "This headline doesn't feel right"
**Good:** "This headline tested 40% worse in A/B test"

Base recommendations on evidence, not taste.

## Related Agents

- [Copywriter](/docs/marketing/agents/copywriter) - Create high-converting copy reviewed by Content Reviewer
- [Campaign Manager](/docs/marketing/agents/campaign-manager) - Execute campaigns after content approval
- [Campaign Debugger](/docs/marketing/agents/campaign-debugger) - Diagnose performance issues post-launch

## Related Commands

- `/review` - Comprehensive content quality assessment
- `/audit` - SEO and compliance audit
- `/optimize` - Conversion rate optimization suggestions

---

**Quality control isn't optional. It's the difference between campaigns that perform and campaigns that flop.**

Ready to catch issues before your audience does? Start reviewing.
