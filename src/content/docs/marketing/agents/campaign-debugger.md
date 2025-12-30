---
title: "Campaign Debugger"
description: "Investigate marketing issues, diagnose performance problems, and optimize campaign effectiveness"
section: marketing
category: agents
order: 6
---

# Campaign Debugger

> Your marketing diagnostics expert who finds why campaigns underperform and how to fix them.

## What This Agent Does

**The Problem**: Your Facebook ad campaign conversion rate just dropped 50%. Your email open rates have been declining for three weeks. Landing page traffic is up 40% but signups are flat. Something's broken, but you don't know what.

You try random fixes. Change the headline. Adjust the targeting. Tweak the CTA. Nothing works. You're burning budget on underperforming campaigns while trying to guess what's wrong.

**The Solution**: Campaign Debugger is your senior marketing analyst who systematically investigates performance issues, analyzes campaign behavior, identifies root causes, and develops data-backed solutions. No more guessing. No more random fixes.

Think of it as having a detective who speaks fluent marketing analytics.

## Quick Start

30-second example - diagnose conversion drop:

```
You: "Landing page conversion dropped from 5% to 2% overnight"

campaign-debugger: Investigating conversion drop...

INITIAL ASSESSMENT:
→ Severity: High (60% conversion loss)
→ Timing: Overnight drop suggests technical or deployment issue
→ Business impact: ~90 lost signups/day (based on traffic volume)

DATA COLLECTION:
→ Checking analytics for anomalies...
→ Reviewing recent code deployments...
→ Analyzing funnel drop-off points...
→ Examining device/browser breakdown...

ROOT CAUSE IDENTIFIED:

Issue: Form submission broken on mobile (Safari only)
Evidence:
→ Desktop conversion: 4.8% (stable) ✓
→ Mobile Chrome: 4.5% (stable) ✓
→ Mobile Safari: 0.3% (dropped from 4.7%) ✗
→ Mobile Safari = 65% of mobile traffic

Timeline Correlation:
→ Conversion drop: 10:34 AM yesterday
→ Code deployment: 10:30 AM yesterday
→ Deployment included: Form validation library update

Technical Analysis:
→ New validation library incompatible with iOS Safari 16.x
→ Form submit button appears clickable but doesn't fire
→ Console error: "Uncaught TypeError: Cannot read property..."
→ Affects iOS 16.0-16.4 (42% of Safari mobile users)

RECOMMENDED SOLUTION:

Immediate fix (< 1 hour):
1. Rollback form validation library to previous version
2. Test on iOS Safari 16.x device
3. Deploy hotfix

Long-term fix (this week):
1. Add iOS Safari 16.x to automated testing suite
2. Update validation library with compatibility patch
3. Implement error tracking on form submit failures

IMPACT PROJECTION:

Current state: 2% conversion (losing 90 signups/day)
After fix: 5% conversion (back to baseline)
Recovery time: Immediate (< 1 hour)

Revenue impact:
→ Daily loss: 90 signups × 10% conversion × $100 LTV = $900/day
→ Days affected: 1.5
→ Total impact: $1,350 in lost revenue

PREVENTIVE MEASURES:
1. Add cross-browser testing to deployment checklist
2. Implement form submit error monitoring (use Sentry)
3. Add analytics alerts for >20% conversion drops
4. Test on top 5 device/browser combinations before deploy

Next steps: Deploy rollback now, then investigate long-term fix?
```

## Capabilities

### 1. Performance Anomaly Detection

Identify unusual patterns and their causes.

**Example - Email Campaign Analysis:**
```
You: "Email open rates dropped from 28% to 14% over last 3 weeks"

campaign-debugger: Investigating email performance decline...

DATA COLLECTION:
→ Pulling email metrics (last 90 days)
→ Analyzing open rate trends
→ Checking deliverability metrics
→ Reviewing content changes

PATTERN ANALYSIS:

Week 1 (baseline): 28% open rate
Week 2: 24% open rate (-14%)
Week 3: 19% open rate (-32%)
Week 4: 14% open rate (-50%)

This is gradual decline, not sudden drop → Points to reputation/deliverability issue

DIAGNOSTIC TESTS:

1. Deliverability Check:
   → Inbox placement rate: 72% (was 94%) ✗
   → Spam folder rate: 28% (was 6%) ✗
   → Hard bounces: 2.3% (was 0.4%) ✗
   Verdict: Deliverability degradation

2. Subject Line Analysis:
   → Average subject line length: 8 words (same as baseline) ✓
   → Spam trigger words: None detected ✓
   → Personalization used: Yes ✓
   Verdict: Not the primary issue

3. Send Time Optimization:
   → Send time: 10 AM EST (same as baseline) ✓
   → Day of week: Tuesday (same as baseline) ✓
   Verdict: Not the issue

4. List Health:
   → Engagement rate (30d): 38% (was 65%) ✗
   → Inactive subscribers: 3,200 (was 800) ✗
   → Unsubscribe rate: 0.8% (was 0.3%) ✗
   Verdict: List hygiene degraded

ROOT CAUSE IDENTIFIED:

Primary issue: You've been sending to increasingly disengaged subscribers
Contributing factors:
→ No list cleaning in 6 months (inactive subscribers pile up)
→ Purchased email list added in Week 2 (2,500 low-quality contacts)
→ Increased send frequency from 2×/week to daily (subscriber fatigue)

Cascade effect:
1. Purchased list has low engagement
2. ISPs see poor engagement signals
3. Your sender reputation drops
4. Emails land in spam folders
5. Even engaged subscribers don't see emails
6. Open rates decline across entire list

EVIDENCE:

Purchased list (added Week 2):
→ Open rate: 4.2%
→ Click rate: 0.8%
→ Spam complaint rate: 2.1% (industry avg: 0.1%)

Original list performance:
→ Open rate: 31% (still healthy!)
→ Click rate: 8.3%
→ Spam complaints: 0.1%

Your engaged subscribers ARE opening when emails reach inbox.
Problem: ISPs aren't delivering because overall list health is poor.

RECOMMENDED SOLUTION:

Immediate (this week):
1. Segment out purchased list, stop sending to them
2. Remove 6-month inactive subscribers (3,200 contacts)
3. Reduce send frequency to 3×/week
4. Send re-engagement campaign to 6-12mo inactives before removing

Short-term (next 30 days):
5. Implement engagement-based segmentation
6. Send only to engaged subscribers (opened in last 60 days)
7. Monitor deliverability daily (use tools like Postmark, SendGrid analytics)

Long-term (ongoing):
8. Never purchase email lists again (destroys sender reputation)
9. Implement quarterly list cleaning
10. Set up auto-suppression for 12-month inactives
11. Monitor engagement metrics weekly

IMPACT PROJECTION:

Current: 14% open rate (28,000 list size)
After removing purchased + inactive: 29% open rate (22,800 list size)
Timeline: 2-4 weeks to rebuild reputation

You'll have smaller list, but healthier one that actually reaches inboxes.

Cost of purchased list:
→ Paid: $500
→ Reputation damage: 50% open rate loss on 25K subscribers
→ Lost email revenue: ~$8,000 (assuming $0.50 revenue per open)
→ True cost: $8,500

Never worth it.
```

### 2. Funnel Analysis

Identify where conversions are breaking down.

**Example - Landing Page to Checkout:**
```
You: "Landing page traffic up 40% but signups flat"

campaign-debugger: Analyzing conversion funnel...

FUNNEL STAGES:

Stage 1: Landing page view → CTA click
→ Current: 12% click rate (was 18%) ✗
→ Traffic increased 40%, but engagement dropped 33%
→ Diagnosis: Traffic quality decreased

Stage 2: CTA click → Signup form start
→ Current: 88% form start rate (was 85%) ✓
→ Actually improved
→ Diagnosis: Not the bottleneck

Stage 3: Signup form start → Signup complete
→ Current: 45% completion rate (was 82%) ✗
→ Major drop-off point identified
→ Diagnosis: Form friction increased

Stage 4: Signup complete → Email verification
→ Current: 94% verification rate (was 92%) ✓
→ Stable
→ Diagnosis: Not the issue

CONVERSION MATH:

Before (1,000 visitors):
→ 180 CTA clicks (18%)
→ 153 form starts (85%)
→ 125 signups (82% completion)
→ 115 verified (92%)
Overall conversion: 11.5%

After (1,400 visitors):
→ 168 CTA clicks (12%)
→ 148 form starts (88%)
→ 67 signups (45% completion)
→ 63 verified (94%)
Overall conversion: 4.5%

BOTTLENECK IDENTIFIED:

Primary issue: Signup form completion dropped from 82% to 45%

What changed:
→ Checked deployment history
→ Found: Added "Company size" required field 2 weeks ago
→ Added: Phone number verification step
→ Result: Form went from 3 fields to 5 fields + SMS verification

Industry data:
→ Each additional required field = ~10% drop in completion
→ SMS verification = ~20% drop (friction + cost concerns)

Your data:
→ 3 fields: 82% completion ✓
→ 5 fields + SMS: 45% completion ✗
→ Math checks out: 82% × 0.9 × 0.9 × 0.8 = 53% (expected 53%, actual 45%)

RECOMMENDED SOLUTION:

Option A: Remove new fields (High Impact)
→ Remove "Company size" and "Phone" from signup
→ Collect post-signup in onboarding flow
→ Remove SMS verification (use email only)
Expected result: 82% completion restored = 115 signups/day

Option B: Make fields optional (Medium Impact)
→ Keep fields but mark optional
→ A/B test to measure impact
Expected result: ~65% completion = 85 signups/day

Option C: Progressive profiling (Best Long-term)
→ Minimal signup form (email + password only)
→ Collect additional data over time in product
→ Only require phone for sensitive actions
Expected result: 85%+ completion = 125+ signups/day

My recommendation: Option C
→ Lowest friction at critical moment
→ Better user experience
→ Can still collect data needed (just later)

TRAFFIC QUALITY ANALYSIS:

Secondary issue: CTA click rate dropped 18% → 12%

Traffic sources breakdown:
→ Organic search: 35% of traffic, 22% click rate (good quality) ✓
→ Paid social: 45% of traffic, 6% click rate (poor quality) ✗
→ Display ads: 20% of traffic, 4% click rate (very poor quality) ✗

New traffic (40% increase) sources:
→ Display ad campaign launched 2 weeks ago
→ Drove 15K visitors at low CPM
→ But: Wrong audience (broad targeting)

Display ad issues:
→ Targeting: "Interest in technology" (too broad)
→ Creative: Generic "Learn more" CTA
→ Landing: Direct to homepage (not relevant landing page)
→ Result: High bounce rate, low engagement

COMPLETE RECOMMENDATION:

Immediate fixes:
1. Simplify signup form (Option C: email + password only)
2. Pause or retarget display ad campaign

Expected impact:
→ Signup form: 45% → 85% completion
→ Better traffic: 12% → 16% CTA click rate
→ Overall conversion: 4.5% → 11.8%

At 1,400 daily visitors:
→ Current: 63 signups/day
→ After fix: 165 signups/day (+162% improvement)
→ Monthly: 5,000 additional signups
```

### 3. Attribution Analysis

Understand which channels actually drive results.

**Example:**
```
You: "We're spending $20K/mo on ads but ROI is unclear"

campaign-debugger: Analyzing marketing attribution...

CURRENT SPEND ALLOCATION:
→ Google Ads: $8,000/mo
→ Facebook Ads: $7,000/mo
→ LinkedIn Ads: $3,000/mo
→ Display Ads: $2,000/mo

ATTRIBUTION MODELS COMPARISON:

Last-Click Attribution (what you're using):
→ Google Ads: 120 customers attributed
→ Facebook Ads: 80 customers attributed
→ LinkedIn Ads: 40 customers attributed
→ Display Ads: 10 customers attributed

First-Click Attribution:
→ Google Ads: 80 customers
→ Facebook Ads: 110 customers
→ LinkedIn Ads: 45 customers
→ Display Ads: 15 customers

Multi-Touch Attribution (reality):
→ Google Ads: 95 customers (assisted 140 more)
→ Facebook Ads: 105 customers (assisted 180 more)
→ LinkedIn Ads: 42 customers (assisted 85 more)
→ Display Ads: 8 customers (assisted 45 more)

INSIGHTS:

1. Facebook is undervalued in last-click model
   → Actually drives 105 customers, credited for only 80
   → Assists 180 additional conversions
   → Primarily top-of-funnel awareness

2. Google is overvalued in last-click model
   → Credited for 120, actually drives 95
   → Gets last-click credit because users search before buying
   → Good bottom-funnel, but not creating demand

3. Display ads aren't working
   → Only 8 direct customers for $2K spend
   → $250 CAC for display vs $80 avg across other channels
   → Assisted conversions don't justify cost

CUSTOMER JOURNEY ANALYSIS:

Typical conversion path (multi-touch):
1. Display ad → Facebook ad → [Drop off]
2. Facebook ad → [Drop off]
3. Facebook ad → Google search → [Drop off]
4. Google search → Landing page → Signup

Average touches before conversion: 4.2
Average days to conversion: 12 days

This means:
→ Facebook creates awareness (touches 1-2)
→ Users research, see more ads
→ Google Search happens when ready to evaluate (touch 3-4)
→ Conversion happens (attributed to Google in last-click)

BUDGET REALLOCATION RECOMMENDATION:

Current ROI by channel:
→ Google Ads: 3.1x ROI ($8K spend → $24.8K return)
→ Facebook Ads: 4.2x ROI ($7K spend → $29.4K return)
→ LinkedIn Ads: 2.8x ROI ($3K spend → $8.4K return)
→ Display Ads: 0.8x ROI ($2K spend → $1.6K return)

Recommended allocation:
→ Facebook Ads: $10K (+$3K) - underinvested, best ROI
→ Google Ads: $7K (-$1K) - maintain, slightly reduce
→ LinkedIn Ads: $3K (hold) - acceptable ROI
→ Display Ads: $0 (-$2K) - cut, negative ROI

Expected impact:
→ Current total return: $64.2K on $20K spend (3.2x ROI)
→ After reallocation: $76.8K on $20K spend (3.8x ROI)
→ Improvement: +$12.6K/mo = +$151K/year

TRACKING IMPROVEMENTS NEEDED:

1. Implement UTM parameters consistently
   → 40% of traffic missing source tracking
   → Can't properly attribute these conversions

2. Set up multi-touch attribution model
   → Use Google Analytics 4 data-driven attribution
   → Or implement Segment + Amplitude for better tracking

3. Track assisted conversions
   → Google Ads conversion tracking set to last-click only
   → Change to include assisted conversions

4. Implement customer surveys
   → Ask: "How did you first hear about us?"
   → Reveals top-of-funnel channels not captured in analytics
```

### 4. A/B Test Analysis

Diagnose why tests aren't delivering results.

**Example:**
```
You: "We've run 5 A/B tests and none reached statistical significance"

campaign-debugger: Analyzing test methodology...

TEST HISTORY REVIEW:

Test 1: Headline variation
→ Sample size: 400 visitors (200 per variant)
→ Duration: 3 days
→ Result: 4.2% vs 4.5% (not significant)
→ Issue: Sample size too small (needed 3,800 per variant)

Test 2: CTA button color
→ Sample size: 1,200 visitors (600 per variant)
→ Duration: 5 days
→ Result: 5.1% vs 5.3% (not significant)
→ Issue: Change too minor to detect with this sample

Test 3: Page layout
→ Sample size: 2,800 visitors (1,400 per variant)
→ Duration: 7 days
→ Result: 4.8% vs 6.1% (significant!)
→ But: Not detected because wrong success metric tracked

Test 4: Email subject line
→ Sample size: 10,000 sends (5,000 per variant)
→ Duration: 1 day
→ Result: 18% vs 19% (not significant)
→ Issue: Changed 2 variables at once (subject + send time)

Test 5: Pricing page copy
→ Sample size: 800 visitors (400 per variant)
→ Duration: 14 days
→ Result: 8.2% vs 8.1% (not significant)
→ Issue: Tested on low-traffic page, sample too small

METHODOLOGY ISSUES IDENTIFIED:

1. Underpowered Tests (Tests 1, 2, 5)
   Problem: Not enough sample size for expected effect
   Your test: 400-1,200 visitors
   Needed: 3,000-5,000 visitors for 20% lift detection

   Sample size calculator:
   → Baseline: 5% conversion
   → Detect: 20% relative lift (5% → 6%)
   → Confidence: 95%
   → Power: 80%
   → Needed: 3,783 per variant (7,566 total)

2. Changes Too Small (Test 2)
   Problem: Button color unlikely to move conversion >5%
   Reality: Need 15-30% lift for meaningful impact
   Better tests: Core value prop, offer, page structure

3. Wrong Metrics Tracked (Test 3)
   Problem: Tracked "signups" but forgot to track "qualified signups"
   Result: Variant B actually won (6.1% vs 4.8%) but you missed it
   Fix: Define primary metric before test starts

4. Multiple Variables (Test 4)
   Problem: Changed subject + send time together
   Result: Can't isolate what caused difference
   Fix: Test one variable at a time

5. Impatience (Multiple tests)
   Problem: Stopped tests before reaching significance
   Result: False negatives (missed real winners)
   Fix: Calculate required duration before starting

TESTING FRAMEWORK RECOMMENDATIONS:

1. Prioritization (Test high-impact elements):
   High impact: Value prop, headline, offer, page structure
   Medium impact: CTA copy, form length, trust signals
   Low impact: Button colors, fonts, minor copy tweaks

2. Sample Size Planning:
   Before each test, calculate:
   → Minimum detectable effect (target 20%+ lift)
   → Required sample size (use calculator)
   → Test duration needed (traffic / sample size)
   → Don't start test if can't reach sample size in 4 weeks

3. Hypothesis-Driven:
   Bad: "Let's test button color"
   Good: "Changing button color from blue to orange will increase visibility and lift conversion 15% because current button blends with background"

4. Statistical Rigor:
   → 95% confidence minimum
   → 80% statistical power
   → Run to completion (don't peek and stop early)
   → Account for multiple comparisons if testing 3+ variants

5. Success Metrics:
   → Define primary metric before test starts
   → Track secondary metrics (make sure not harming other goals)
   → Set success criteria (what result triggers implementation?)

IMMEDIATE FIXES:

1. Stop Test 5 (pricing page)
   → Redirect 100% traffic to better-performing variant
   → Page has too little traffic for testing

2. Implement Test 3 winner (page layout)
   → You actually had a winner (6.1% vs 4.8%, +27% lift)
   → Lost revenue: 14 days × 200 visitors/day × 1.3% lift = 36 lost signups

3. Rerun Test 1 (headline) with proper sample size
   → Wait until 3,800 visitors per variant
   → Should take ~19 days at current traffic

4. Focus future tests on high-impact elements only
   → Next test: Value proposition rewrite (expect 20-40% lift)
   → After that: Form simplification (expect 30-50% lift)

Your testing program can work - you just need proper methodology.
```

### 5. Competitive Analysis

Understand how your performance compares.

**Example:**
```
You: "Is our 3.8% landing page conversion rate good?"

campaign-debugger: Analyzing competitive benchmark...

YOUR PERFORMANCE:
→ Landing page conversion: 3.8%
→ Industry: B2B SaaS
→ Traffic source: Paid + organic mix
→ Average order value: $1,200/year

INDUSTRY BENCHMARKS (B2B SaaS):

Landing page conversion rates:
→ Top quartile: 8-12%
→ Median: 4-6%
→ Bottom quartile: 1-3%

Your position: Slightly below median (3.8% vs 4-6%)

But context matters...

SEGMENTED BENCHMARKS:

By traffic source:
→ Organic search: 5-8% (yours: 6.2%) ✓ Above average
→ Paid search: 3-5% (yours: 3.1%) ⚠ Below average
→ Paid social: 1-3% (yours: 2.8%) ✓ Above average
→ Direct: 8-12% (yours: 11.3%) ✓ Well above average

By price point:
→ $0-$500/yr: 6-10%
→ $500-$2,000/yr: 3-5% (your tier)
→ $2,000-$10,000/yr: 1-3%

Your 3.8% is actually in line for $1,200/yr product.

COMPETITOR COMPARISON:

Direct competitors (analyzed):

Competitor A:
→ Conversion: ~5.2% (estimated via SimilarWeb)
→ Traffic: 45K/mo (3× yours)
→ Advantage: More social proof, video demo
→ Your gap: Video on landing page

Competitor B:
→ Conversion: ~3.1% (estimated)
→ Traffic: 18K/mo (1.2× yours)
→ Advantage: Free trial (yours requires credit card)
→ Your gap: Trial friction

Competitor C:
→ Conversion: ~7.8% (estimated)
→ Traffic: 12K/mo (0.8× yours)
→ Advantage: Freemium model, no friction
→ Different model: Not apples-to-apples

OPPORTUNITY ANALYSIS:

Gap to median (4-6%):
If you hit 5% conversion (median):
→ Current: 3.8% × 15,000 visits = 570 signups/mo
→ At 5%: 5.0% × 15,000 visits = 750 signups/mo
→ Gain: +180 signups/mo = +2,160/year

Gap to top quartile (8-12%):
If you hit 8% conversion (achievable with optimization):
→ At 8%: 8.0% × 15,000 visits = 1,200 signups/mo
→ Gain: +630 signups/mo = +7,560/year
→ Revenue impact: ~$908K additional ARR (at 10% trial-to-paid)

RECOMMENDATIONS TO CLOSE GAP:

1. Add demo video (like Competitor A)
   → Expected lift: +0.8-1.2% conversion
   → Cost: $2-5K one-time
   → ROI: 6-12 months payback

2. Remove credit card requirement (like Competitor B)
   → Expected lift: +1.0-1.5% conversion
   → Trade-off: More trial signups, but lower trial-to-paid rate
   → Net effect: Likely positive (+20-30% paid customers)

3. Optimize paid search landing pages
   → Your paid search: 3.1% (below 3-5% benchmark)
   → Competitor pages: More specific to search keywords
   → Action: Create keyword-specific landing pages

4. Improve social proof
   → Competitors show: Customer logos, testimonials, case studies
   → You show: Generic "1,200+ developers" text
   → Action: Add recognizable company logos, specific results

5. Simplify value proposition
   → Your headline: 12 words (confusing)
   → Competitor A: 6 words (clear)
   → Action: Rewrite for instant clarity

CONCLUSION:

Your 3.8% isn't terrible, but there's meaningful opportunity to reach 5-8% with proven tactics. Focus on video demo, trial friction, and paid search optimization first.
```

## When to Use Campaign Debugger

**Perfect for:**
- Diagnosing sudden performance drops
- Investigating gradual decline trends
- Analyzing underperforming campaigns
- Funnel conversion troubleshooting
- A/B test methodology issues
- Attribution analysis

**Not needed for:**
- Campaign setup (use Campaign Manager)
- Content creation (use Copywriter)
- Strategy brainstorming (use Brainstormer)
- Ongoing optimization (use Content Reviewer first)

## Example Workflows

### Workflow 1: Emergency Conversion Drop

```
1. You: "Conversion rate dropped 60% overnight"

2. campaign-debugger: Rapid diagnosis
   - Checks analytics for anomalies
   - Reviews recent changes (code, content, campaigns)
   - Analyzes device/browser breakdown
   - Identifies technical issues

3. Output:
   ROOT CAUSE: Form broken on mobile Safari
   EVIDENCE: Desktop stable, mobile Safari dropped to 0.3%
   FIX: Rollback form validation library
   TIMELINE: 1 hour to fix
   IMPACT: $900/day revenue loss

4. You deploy fix immediately

5. campaign-debugger: Validates fix worked
   ✓ Conversion back to baseline
   ✓ Preventive measures recommended
```

### Workflow 2: Attribution Mystery

```
1. You: "We're spending $20K/mo but ROI is unclear"

2. campaign-debugger: Multi-touch attribution analysis
   - Pulls data from all ad platforms
   - Analyzes customer journey paths
   - Calculates multi-touch attribution
   - Compares to last-click model

3. Output:
   FINDING: Facebook undervalued, Display overvalued
   RECOMMENDATION: Reallocate budget
   → Facebook: $7K → $10K
   → Display: $2K → $0
   IMPACT: +$12.6K/mo revenue improvement

4. You adjust budget allocation

5. Results tracked over 30 days
```

## Best Practices

### 1. Investigate Before Fixing

**Bad:** "Conversion dropped, let's change the headline"
**Good:** "Conversion dropped, let me analyze what actually changed"

Random fixes waste time. Diagnose first.

### 2. Look for Recent Changes

Most issues correlate with recent changes:
- Code deployments
- Content updates
- Campaign launches
- Tool/vendor changes

### 3. Use Data, Not Gut Feelings

**Bad:** "I think the traffic quality is worse"
**Good:** "Paid social CTR dropped from 3.2% to 1.1%, indicating audience mismatch"

Evidence beats intuition.

## Related Agents

- [Campaign Manager](/docs/marketing/agents/campaign-manager) - Execute campaigns that Campaign Debugger helps optimize
- [Content Reviewer](/docs/marketing/agents/content-reviewer) - Pre-launch quality checks to prevent issues
- [Brainstormer](/docs/marketing/agents/brainstormer) - Strategy validation before campaigns launch

## Related Commands

- `/debug` - Investigate marketing performance issues
- `/analyze` - Deep-dive analytics analysis
- `/diagnose` - Troubleshoot campaign problems

---

**Great campaigns don't just perform well - they perform consistently. When they don't, you need to know why.**

Ready to find what's broken and fix it? Start debugging.
