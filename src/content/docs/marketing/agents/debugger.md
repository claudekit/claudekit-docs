---
title: "Debugger"
description: "Investigate technical issues in marketing systems, analyze performance problems, and optimize infrastructure"
section: marketing
category: agents
order: 8
---

# Debugger

> Your technical detective for marketing infrastructure issues, system failures, and integration problems.

## What This Agent Does

**The Problem**: Your email platform stopped sending. Your landing page analytics aren't tracking. The CRM integration broke overnight. You're losing leads and have no idea why.

Marketing runs on complex technical infrastructure - APIs, databases, third-party tools, tracking systems. When something breaks, your team doesn't have the technical depth to diagnose it. You open support tickets and wait. Meanwhile, leads are lost.

**The Solution**: Debugger is your senior engineer who investigates marketing system issues, analyzes logs, examines database structures, diagnoses integration failures, and provides technical solutions. Think of it as having on-call technical support for your entire marketing stack.

No more waiting for engineering help. No more lost leads due to technical issues.

## Quick Start

30-second example - diagnose email sending failure:

```
You: "Email campaign scheduled for 10am didn't send"

debugger: Investigating email system failure...

INITIAL ASSESSMENT:
→ Issue: 5,000-recipient campaign failed to send
→ Impact: HIGH (time-sensitive launch announcement)
→ Status: Campaign marked "Failed" in dashboard

DATA COLLECTION:
→ Checking email platform logs...
→ Reviewing API responses...
→ Examining database records...
→ Testing email service connectivity...

ROOT CAUSE IDENTIFIED:

Issue: Email service API authentication failed
Error code: 401 Unauthorized
Error message: "API key expired"

Timeline:
→ 09:45 AM: Campaign scheduled
→ 10:00 AM: Send triggered
→ 10:00 AM: API authentication failed
→ 10:01 AM: Retry failed (3 attempts)
→ 10:02 AM: Campaign marked failed

Technical Analysis:
→ API key: Expired on March 15 (yesterday)
→ Notification: Expiry warning sent to old team email
→ Monitoring: No alert configured for auth failures

Evidence (API logs):
```
POST /v3/mail/send
Authorization: Bearer sk_live_abc...expired
Response: 401 Unauthorized
Body: {"error": "API key expired. Generate new key at dashboard.sendgrid.com"}
```

IMMEDIATE FIX (< 5 minutes):

1. Generate new API key:
   → Login to SendGrid dashboard
   → Settings → API Keys → Create API Key
   → Copy new key: sk_live_xyz...

2. Update environment variable:
   → Production: EMAIL_API_KEY=sk_live_xyz...
   → Restart email service (if needed)

3. Resend campaign:
   → Verify API key works (send test)
   → Trigger campaign resend
   → Monitor first 100 sends for success

LONG-TERM FIX:

1. Update team email address for API notifications
2. Set up monitoring alert for:
   → API authentication failures
   → API key expiration (30-day warning)
   → Email send failures >5% rate

3. Document API key rotation process
4. Add API key expiration to calendar (quarterly review)

PREVENTIVE MEASURES:

```javascript
// Add API health check to monitoring

async function checkEmailServiceHealth() {
  try {
    const response = await emailAPI.verify();
    if (!response.isValid) {
      alert('Email API authentication issue');
    }

    // Check key expiration
    const daysUntilExpiry = response.keyExpiresIn;
    if (daysUntilExpiry < 30) {
      warn(`Email API key expires in ${daysUntilExpiry} days`);
    }
  } catch (error) {
    alert('Email service unreachable', error);
  }
}

// Run health check every hour
setInterval(checkEmailServiceHealth, 60 * 60 * 1000);
```

IMPACT ASSESSMENT:

Current: 5,000 subscribers missed launch email (1-hour delay)
Expected recovery: Campaign sent by 10:30 AM
Revenue impact: Minimal if sent within 2 hours

ACTION REQUIRED:
1. Generate new API key immediately
2. Test with single send
3. Resend campaign to full list

Want me to guide you through API key generation?
```

## Capabilities

### 1. System Diagnostics

Investigate infrastructure and integration issues.

**Example - CRM Integration Failure:**
```
You: "Leads from landing page stopped syncing to HubSpot"

debugger: Investigating CRM sync failure...

DIAGNOSTIC PROCESS:

1. Check recent lead submissions:
   → Last successful sync: 2 days ago
   → Failed syncs: 47 leads in past 48 hours
   → Error pattern: All failing with same error code

2. Analyze error logs:
   ```
   [ERROR] HubSpot API: 429 Too Many Requests
   Rate limit: 100 requests per 10 seconds
   Retry-After: 8 seconds
   ```

3. Review API usage:
   → Current rate: 150 requests per 10 seconds
   → HubSpot limit: 100 requests per 10 seconds
   → Cause: Landing page traffic increased 60% (Black Friday)

ROOT CAUSE:
→ Traffic spike exceeded API rate limits
→ No retry logic implemented
→ Failed leads not queued for retry

SOLUTION:

Immediate fix (retry failed leads):
```javascript
// Retry queue for failed syncs
const failedLeads = await getFailedLeads(48); // hours

for (const lead of failedLeads) {
  await retryWithBackoff(async () => {
    await hubspot.createContact(lead);
  }, { maxRetries: 3, baseDelay: 2000 });
}
```

Long-term fix (implement rate limiting):
```javascript
// Rate limiter implementation
const rateLimiter = new RateLimiter({
  tokensPerInterval: 90, // Under limit for safety margin
  interval: 10000, // 10 seconds
  fireImmediately: true
});

async function syncToHubSpot(lead) {
  await rateLimiter.removeTokens(1); // Wait for rate limit slot
  try {
    await hubspot.createContact(lead);
  } catch (error) {
    if (error.statusCode === 429) {
      // Queue for retry instead of failing
      await queueForRetry(lead);
    }
    throw error;
  }
}
```

EXPECTED RESULTS:
→ 47 failed leads synced within 30 minutes
→ Future leads sync with rate limit compliance
→ No more 429 errors
```

### 2. Database Analysis

Query databases for insights and troubleshooting.

**Example:**
```
You: "Why are email open rates in dashboard different from SendGrid?"

debugger: Investigating data discrepancy...

QUERY DATABASE:

```sql
-- Check email tracking data
SELECT
  campaign_id,
  total_sent,
  opened,
  opened * 100.0 / total_sent AS open_rate_db
FROM email_campaigns
WHERE sent_at > NOW() - INTERVAL '7 days';
```

Results (Our database):
→ Campaign: Product Launch
→ Total sent: 10,000
→ Opened: 2,800
→ Open rate: 28%

SendGrid dashboard:
→ Total sent: 10,000
→ Opened: 1,200
→ Open rate: 12%

DISCREPANCY FOUND: 16% difference

ROOT CAUSE ANALYSIS:

Query tracking pixel logs:
```sql
-- Check tracking pixel fires
SELECT
  campaign_id,
  COUNT(DISTINCT email_address) AS unique_opens,
  COUNT(*) AS total_opens
FROM email_tracking_pixels
WHERE campaign_id = 'product-launch'
GROUP BY campaign_id;
```

Results:
→ Unique opens: 2,800 ✓ (matches database)
→ Total opens: 8,400 (multiple opens per user)

SendGrid API query:
```javascript
const stats = await sendgrid.campaigns.get('product-launch').stats();
console.log(stats.unique_opens); // 1,200
```

IDENTIFIED ISSUE:

Two tracking systems running:
1. SendGrid native tracking (1,200 opens)
2. Custom tracking pixel (2,800 opens)

Custom pixel is double-counting:
→ Email client pre-fetch (Apple Mail Privacy Protection)
→ Bot/scanner opens (security scanners)
→ Image proxy services (Gmail, Outlook)

SendGrid filters these, custom pixel doesn't.

SOLUTION:

Trust SendGrid data (correct):
→ Open rate: 12% (accurate)
→ Your dashboard: 28% (inflated)

Fix dashboard to use SendGrid as source of truth:
```javascript
// Sync from SendGrid instead of custom tracking
async function updateCampaignStats(campaignId) {
  const stats = await sendgrid.campaigns.get(campaignId).stats();

  await db.execute(`
    UPDATE email_campaigns
    SET
      opened = ?,
      clicked = ?,
      bounced = ?,
      updated_at = NOW()
    WHERE campaign_id = ?
  `, [stats.unique_opens, stats.unique_clicks, stats.bounces, campaignId]);
}
```

RECOMMENDATION: Remove custom tracking pixel, use SendGrid webhook events instead.
```

### 3. Performance Debugging

Identify bottlenecks and optimization opportunities.

**Example - Slow Landing Page Load:**
```
You: "Landing page takes 12 seconds to load"

debugger: Analyzing performance bottleneck...

PERFORMANCE PROFILING:

Using Chrome DevTools + Lighthouse:

1. Network waterfall analysis:
   → HTML: 200ms ✓
   → CSS: 1.2s (blocking) ✗
   → JavaScript: 8.4s (blocking) ✗
   → Images: 3.8s ✗
   → Third-party scripts: 4.2s ✗

2. Blocking resources identified:
   ```
   <script src="analytics.js"> (1.2s)
   <script src="chatbot.js"> (3.8s)
   <script src="heatmap.js"> (1.6s)
   <link rel="stylesheet" href="styles.css"> (1.2s)
   ```

3. Database query performance:
   → Page load triggers 8 database queries
   → Query 1: 200ms (testimonials) ✗
   → Query 2: 150ms (features) ✗
   → Queries 3-8: <10ms each ✓

ROOT CAUSE:

Multiple blocking issues:
1. Synchronous scripts in <head> (6.6s total)
2. Unoptimized images (3.8s)
3. N+1 database queries (testimonials loading)
4. No caching enabled

OPTIMIZATIONS:

1. Defer non-critical scripts:
```html
<!-- Before -->
<script src="chatbot.js"></script>

<!-- After -->
<script defer src="chatbot.js"></script>
```

2. Implement caching:
```javascript
// Cache testimonials (changes rarely)
const testimonials = await cache.get('testimonials', async () => {
  return await db.query('SELECT * FROM testimonials LIMIT 5');
}, { ttl: 3600 }); // Cache 1 hour
```

3. Optimize images:
```html
<!-- Use WebP, lazy loading, responsive sizes -->
<picture>
  <source srcset="hero-800w.webp 800w, hero-1200w.webp 1200w" type="image/webp">
  <img src="hero-800w.jpg" loading="lazy" alt="Hero">
</picture>
```

4. Preconnect to third-party domains:
```html
<link rel="preconnect" href="https://analytics.example.com">
<link rel="preconnect" href="https://chatbot.example.com">
```

EXPECTED IMPROVEMENT:

Before: 12s load time
After optimizations: 2.1s load time (-82%)

Lighthouse score:
→ Before: 28/100
→ After: 92/100

Conversion impact:
→ Every 1s delay = ~7% conversion loss
→ Current: 12s → ~60% conversion loss
→ After: 2s → ~7% conversion loss
→ Expected conversion lift: +53%
```

### 4. Integration Testing

Verify third-party tool connections work correctly.

**Example:**
```
You: "Test if all our marketing integrations are working"

debugger: Running integration health checks...

INTEGRATION TEST RESULTS:

1. SendGrid (Email):
   ✓ API authentication successful
   ✓ Test email delivered
   ✓ Webhook endpoint responding
   ⚠ Sender domain not verified (affects deliverability)

2. HubSpot (CRM):
   ✓ API connection successful
   ✓ Contact sync working
   ✗ Custom properties missing (last_campaign_clicked)

3. Google Analytics 4:
   ✓ Tracking code installed
   ✗ Events not firing (conversion tracking broken)
   Error: GA4 measurement ID mismatch

4. Facebook Pixel:
   ✓ Pixel installed
   ✓ PageView event firing
   ⚠ Purchase event missing parameters

5. Stripe (Payments):
   ✓ API keys valid
   ✓ Webhook receiving events
   ✓ All tests passing

6. Intercom (Chat):
   ✗ Widget not loading (CSP policy blocking)

RECOMMENDATIONS:

High Priority:
1. Fix GA4 measurement ID (analytics not tracking)
2. Unblock Intercom widget (customer support unavailable)
3. Add HubSpot custom properties (reporting incomplete)

Medium Priority:
4. Verify SendGrid sender domain
5. Add Facebook Pixel purchase parameters

Would you like me to help fix these issues one by one?
```

### 5. Log Analysis

Collect and analyze logs from various systems.

**Example:**
```
You: "Find why checkout conversions dropped yesterday"

debugger: Analyzing system logs...

LOG COLLECTION:

1. Application logs (last 48 hours):
```
grep "checkout" /var/log/app.log | grep "error"
```

Found 847 errors in past 24 hours (normal: 12/day)

2. Sample errors:
```
[ERROR] Stripe API: card_declined (code: generic_decline) - 412 occurrences
[ERROR] Timeout connecting to payment-gateway.com - 287 occurrences
[ERROR] Database connection pool exhausted - 148 occurrences
```

3. Timeline correlation:
→ 15:00: Normal error rate (1-2 per hour)
→ 16:00: Error spike begins (+800%)
→ 16:05: Database pool exhausted
→ 16:30: Stripe timeouts increase
→ 17:00: Conversion rate drops 60%

ROOT CAUSE:

Database connection leak:
→ Checkout process opens DB connection
→ If payment fails, connection not released
→ Pool exhausted after 150 failed transactions
→ New checkouts can't get DB connection
→ Stripe API calls timeout waiting for DB

CODE ISSUE:
```javascript
// Bug: Connection not released on error
async function processCheckout(order) {
  const conn = await db.getConnection();
  try {
    await conn.query('INSERT INTO orders ...');
    await stripe.charge(order);
  } catch (error) {
    // BUG: conn.release() never called if stripe.charge fails!
    throw error;
  }
  conn.release();
}
```

FIX:
```javascript
async function processCheckout(order) {
  const conn = await db.getConnection();
  try {
    await conn.query('INSERT INTO orders ...');
    await stripe.charge(order);
  } catch (error) {
    throw error;
  } finally {
    conn.release(); // Always release, even on error
  }
}
```

RECOVERY PLAN:
1. Deploy fix immediately
2. Restart app servers (clear stuck connections)
3. Monitor connection pool usage
4. Add alerting for pool exhaustion

IMPACT:
→ Lost conversions: ~200 (estimated)
→ Lost revenue: $24,000 (avg order $120)
→ Time to fix: 30 minutes
```

## When to Use Debugger

**Perfect for:**
- Email/CRM integration failures
- Landing page technical issues
- Analytics tracking problems
- Database query optimization
- System performance degradation
- Third-party API debugging

**Not needed for:**
- Campaign performance issues (use Campaign Debugger)
- Content quality problems (use Content Reviewer)
- Strategic questions (use Brainstormer)

## Example Workflows

### Workflow 1: Email System Down

```
1. You: "Emails aren't sending"

2. debugger: Emergency diagnostics
   - Checks email service status
   - Tests API authentication
   - Reviews error logs
   - Identifies expired API key

3. Output:
   ROOT CAUSE: API key expired
   FIX: Generate new key (5 min)
   IMPACT: 5,000 unsent emails

4. You generate new API key

5. debugger: Validates fix, resends campaign
```

### Workflow 2: Landing Page Slow

```
1. You: "Landing page takes 12 seconds to load"

2. debugger: Performance analysis
   - Profiles page load
   - Identifies blocking scripts
   - Finds unoptimized images
   - Detects database N+1 queries

3. Output:
   BOTTLENECKS:
   → Scripts: 6.6s (defer them)
   → Images: 3.8s (optimize/lazy load)
   → DB: 350ms (cache testimonials)

   Expected: 12s → 2s (-82%)

4. You implement optimizations

5. Conversion improves +53%
```

## Best Practices

### 1. Check Logs First

**Bad:** Guess what's wrong
**Good:** Read logs, find evidence

Logs tell you exactly what failed and when.

### 2. Reproduce the Issue

**Bad:** "It's broken for some users"
**Good:** "Steps to reproduce: 1. Visit /checkout 2. Enter invalid card..."

Reproducible issues are debuggable.

### 3. Monitor After Fixes

**Bad:** Deploy fix, move on
**Good:** Deploy fix, watch metrics for 1 hour

Verify your fix actually worked.

## Related Agents

- [Campaign Debugger](/docs/marketing/agents/campaign-debugger) - Marketing-specific performance issues
- [Code Reviewer](/docs/marketing/agents/code-reviewer) - Pre-deploy code quality checks
- [Campaign Manager](/docs/marketing/agents/campaign-manager) - Execute campaigns after systems verified

## Related Commands

- `/debug` - Investigate system issues
- `/logs` - Analyze application logs
- `/test` - Run integration health checks

---

**Marketing infrastructure breaks. When it does, you need someone who can fix it fast.**

Ready to diagnose and solve technical issues? Start debugging.
