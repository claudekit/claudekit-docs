---
title: "Code Reviewer"
description: "Comprehensive code quality assessment for marketing automation, tracking, and campaign tooling"
section: marketing
category: agents
order: 7
---

# Code Reviewer

> Your technical quality gatekeeper for marketing code, scripts, and automation.

## What This Agent Does

**The Problem**: Your marketing team needs custom tracking scripts. Or email automation code. Or landing page integrations. Someone on the team writes it. It works (sort of). Then it breaks in production. Or leaks data. Or slows down your site by 3 seconds.

Bad code in marketing tools costs you conversions, leaks customer data, and creates technical debt your eng team has to fix later.

**The Solution**: Code Reviewer is your senior engineer who audits marketing-related code for quality, security, performance, and best practices before it ships. Think of it as having a code quality gate that catches issues before customers see them.

Landing page scripts, tracking pixels, email templates with code, automation workflows - all reviewed for production readiness.

## Quick Start

30-second example - review tracking script:

```
You: "Review this Facebook Pixel tracking code before we deploy"

code-reviewer: Analyzing tracking implementation...

[Reads: scripts/facebook-pixel.js]

CODE REVIEW SUMMARY

Scope:
- Files reviewed: facebook-pixel.js (47 lines)
- Review focus: Security, performance, best practices
- Target: Production landing page

CRITICAL ISSUES:

1. API Key Exposed in Client-Side Code [SECURITY VIOLATION]
   Line 12: const apiKey = 'sk_live_abc123...'
   Issue: Secret API key hardcoded in client JavaScript
   Risk: Anyone can view source and steal your API key
   Impact: Unauthorized access to your Facebook Ad account
   Fix: Remove API key, use server-side Facebook Conversions API
   Status: MUST FIX before deploy (P0 blocker)

2. No Error Handling [PRODUCTION RISK]
   Line 23: fbq('track', 'Purchase', purchaseData);
   Issue: If Facebook Pixel fails to load, script crashes
   Impact: User checkout flow breaks, lost revenue
   Fix: Wrap in try-catch, fail gracefully
   Status: MUST FIX before deploy (P0 blocker)

HIGH PRIORITY FINDINGS:

3. Blocking Script Load [PERFORMANCE]
   Line 1: <script src="https://connect.facebook.net/en_US/fbevents.js">
   Issue: Synchronous load blocks page rendering
   Impact: +800ms page load time, 10-15% bounce rate increase
   Fix: Add 'async' or 'defer' attribute
   Expected improvement: -800ms load time

4. Missing GDPR Consent Check [COMPLIANCE]
   Line 15: fbq('init', 'YOUR_PIXEL_ID');
   Issue: Fires pixel before user consents to cookies
   Risk: GDPR violation, up to €20M fine
   Fix: Check consent before initializing:

   ```javascript
   if (hasUserConsent()) {
     fbq('init', 'YOUR_PIXEL_ID');
   }
   ```

5. Hardcoded Pixel ID [MAINTAINABILITY]
   Line 15: fbq('init', '1234567890');
   Issue: Pixel ID will differ between dev/staging/prod
   Fix: Use environment variable or config file

MEDIUM PRIORITY IMPROVEMENTS:

6. Missing TypeScript Types
   → No type safety on purchaseData object
   → Could send wrong data shape to Facebook
   → Add interface definition for tracking events

7. No Retry Logic
   → If Facebook API is temporarily down, events lost
   → Add exponential backoff retry (max 3 attempts)

8. Console Logging in Production
   Line 28: console.log('Pixel fired:', eventName);
   → Remove or gate behind debug flag
   → Exposes internal tracking to users

LOW PRIORITY SUGGESTIONS:

9. Could use modern async/await syntax
10. Missing JSDoc comments for functions
11. Variable naming could be more descriptive

POSITIVE OBSERVATIONS:

✓ Event names follow Facebook standard convention
✓ Data structure matches Facebook Pixel spec
✓ Code is relatively clean and readable

SECURITY SCAN:

✓ No SQL injection vectors (client-side only)
✓ No XSS vulnerabilities detected
✗ API key exposure (critical, see issue #1)
✓ No eval() or dangerous functions used
✗ Missing Content Security Policy (CSP) compliance

RECOMMENDED ACTIONS:

BEFORE DEPLOY (Blockers):
1. Remove hardcoded API key → Use server-side API (30 min)
2. Add error handling with try-catch (10 min)
3. Implement GDPR consent check (15 min)
4. Add async attribute to script tag (2 min)

BEFORE NEXT SPRINT:
5. Add TypeScript types (20 min)
6. Implement retry logic (30 min)
7. Remove production console.log statements (5 min)

CORRECTED CODE:

```javascript
// facebook-pixel.js (fixed version)

// Load script asynchronously
(function() {
  const script = document.createElement('script');
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  script.async = true; // Non-blocking load
  document.head.appendChild(script);

  script.onload = function() {
    try {
      // Check GDPR consent before initializing
      if (window.hasUserConsent && window.hasUserConsent()) {
        const pixelId = window.FB_PIXEL_ID || '1234567890';
        fbq('init', pixelId);
        fbq('track', 'PageView');
      }
    } catch (error) {
      // Fail gracefully, don't break page
      if (window.debug) {
        console.error('Facebook Pixel error:', error);
      }
      // Optional: Send error to monitoring service
      logError('FB_PIXEL_INIT_FAILED', error);
    }
  };

  script.onerror = function() {
    // Script failed to load (ad blocker, network issue)
    if (window.debug) {
      console.warn('Facebook Pixel failed to load');
    }
  };
})();

// Track purchase event (called from checkout page)
function trackPurchase(purchaseData) {
  try {
    if (typeof fbq !== 'function') {
      throw new Error('Facebook Pixel not loaded');
    }

    // Validate data before sending
    if (!purchaseData.value || !purchaseData.currency) {
      throw new Error('Invalid purchase data');
    }

    fbq('track', 'Purchase', {
      value: purchaseData.value,
      currency: purchaseData.currency,
      content_ids: purchaseData.productIds,
      content_type: 'product'
    });
  } catch (error) {
    // Don't block checkout on tracking failure
    if (window.debug) {
      console.error('Purchase tracking error:', error);
    }
    logError('FB_PIXEL_TRACK_FAILED', error);
  }
}
```

DEPLOYMENT CHECKLIST:

Before deploying to production:
□ API key removed from client code
□ Error handling added
□ GDPR consent check implemented
□ Async script loading enabled
□ Tested in staging environment
□ Verified with ad blockers enabled
□ Confirmed no console errors
□ Performance tested (Lighthouse score)

Next steps: Fix P0 blockers, then re-submit for final review?
```

## Capabilities

### 1. Marketing Code Quality Assessment

Review tracking scripts, landing page code, email templates.

**Example - Email Template Review:**
```
code-reviewer: Reviewing HTML email template...

File: email-templates/product-launch.html (342 lines)

CODE QUALITY ASSESSMENT:

EMAIL CLIENT COMPATIBILITY:

✗ Using CSS Grid (not supported in Outlook)
  Line 45: display: grid;
  Issue: Outlook 2007-2019 uses Word rendering engine
  Fix: Use table-based layout for email

✗ External CSS file linked
  Line 8: <link rel="stylesheet" href="styles.css">
  Issue: Most email clients strip <link> tags
  Fix: Inline all CSS using tool like Juice

✗ Background images on <div>
  Line 102: background-image: url('hero.jpg');
  Issue: Outlook doesn't support background images
  Fix: Use VML fallback or remove

✓ Alt text on all images (good for accessibility)
✓ Using system fonts (good for compatibility)

TRACKING & ANALYTICS:

✓ UTM parameters on all links
✗ Open tracking pixel missing
  Fix: Add 1×1 transparent pixel at bottom

✗ Click tracking not implemented
  Fix: Wrap links with tracking redirects

PERFORMANCE:

Image optimization:
→ hero.jpg: 2.3 MB (too large)
  Fix: Compress to < 200 KB, use CDN
→ logo.png: 850 KB (too large)
  Fix: Compress to < 50 KB

Total email size: 3.8 MB
→ Gmail clips emails > 102 KB
→ Your email will be clipped (bottom cut off)
→ Fix: Reduce image sizes, inline CSS < 102 KB

ACCESSIBILITY:

✓ Semantic HTML structure
✗ Missing role="article" on main container
✗ Links lack descriptive text ("click here" instead of "View pricing")
✓ Color contrast meets WCAG AA

PERSONALIZATION:

Merge tags found:
→ {{first_name}}: Line 23 ✓
→ {{company_name}}: Line 67 ✓

Security check:
✓ No user-generated content (XSS safe)
✓ All merge tags properly escaped

RECOMMENDED FIXES:

Priority 1 (Email won't render correctly):
1. Convert CSS Grid to table layout
2. Inline all CSS
3. Add VML background image fallback for Outlook
4. Compress images to reduce size < 100 KB total

Priority 2 (Functionality):
5. Add open tracking pixel
6. Implement click tracking on links
7. Add missing UTM parameters to 2 links

Priority 3 (Best practices):
8. Improve link descriptive text
9. Add preheader text (first 100 chars)
10. Test in Litmus/Email on Acid

CORRECTED TEMPLATE: (abbreviated)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Launch</title>
  <style>
    /* Inlined CSS - works in all email clients */
    body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
    table { border-collapse: collapse; }
    /* ... more inlined styles ... */
  </style>
</head>
<body>
  <!-- Preheader text (hidden) -->
  <div style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    Ship features 10x faster with your AI dev team →
  </div>

  <!-- Use tables instead of grid -->
  <table role="article" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="background-color: #f4f4f4; padding: 20px 0;">
        <!-- Content table -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff;">
          <!-- Hero section with VML fallback for Outlook -->
          <tr>
            <td align="center" style="padding: 40px 20px;">
              <!--[if gte mso 9]>
              <v:rect style="width:600px;height:300px;" fillcolor="#0066CC">
              <v:textbox inset="0,0,0,0"><div>
              <![endif]-->
              <h1 style="color: #333333; font-size: 32px; margin: 0;">
                Hey {{first_name}}, we just launched something big
              </h1>
              <!--[if gte mso 9]>
              </div></v:textbox></v:rect>
              <![endif]-->
            </td>
          </tr>

          <!-- CTA with tracking -->
          <tr>
            <td align="center" style="padding: 20px;">
              <a href="https://example.com/landing?utm_source=email&utm_medium=product-launch&utm_campaign=2025-q1&user_id={{user_id}}"
                 style="background-color: #0066CC; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
                View new features
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Open tracking pixel -->
  <img src="https://track.example.com/open/{{email_id}}" width="1" height="1" alt="" style="display:none;" />
</body>
</html>
```

Test in: Gmail, Outlook, Apple Mail, Yahoo Mail before sending.
```

### 2. Security Vulnerability Assessment

Catch security issues before they leak data.

**Example - Form Security Audit:**
```
code-reviewer: Auditing contact form security...

File: forms/contact-form.js (156 lines)

SECURITY AUDIT REPORT:

CRITICAL VULNERABILITIES:

1. SQL Injection Risk [CVE-LIKE]
   Line 67:
   ```javascript
   const query = `INSERT INTO contacts VALUES ('${name}', '${email}')`;
   ```
   Issue: User input directly interpolated into SQL
   Attack vector: name = "'); DROP TABLE contacts;--"
   Impact: Database compromise, data loss
   Fix: Use parameterized queries:
   ```javascript
   const query = 'INSERT INTO contacts VALUES (?, ?)';
   db.execute(query, [name, email]);
   ```

2. Cross-Site Scripting (XSS) [HIGH SEVERITY]
   Line 89:
   ```javascript
   document.getElementById('success').innerHTML = `Thanks, ${name}!`;
   ```
   Issue: Unescaped user input inserted into DOM
   Attack vector: name = "<script>steal_cookies()</script>"
   Impact: Session hijacking, account takeover
   Fix: Use textContent or escape HTML:
   ```javascript
   document.getElementById('success').textContent = `Thanks, ${name}!`;
   ```

3. CSRF Token Missing [HIGH SEVERITY]
   Issue: Form submissions don't include CSRF protection
   Attack vector: Attacker creates malicious page that submits form
   Impact: Unauthorized actions on behalf of users
   Fix: Add CSRF token to form:
   ```html
   <input type="hidden" name="csrf_token" value="{{csrf_token}}" />
   ```

HIGH PRIORITY SECURITY ISSUES:

4. No Rate Limiting
   → Attacker can submit unlimited forms (spam, DOS)
   → Fix: Implement rate limiting (max 5 submissions per IP per hour)

5. Email Validation Insufficient
   Line 34: if (email.includes('@'))
   → Weak validation, accepts malformed emails
   → Fix: Use proper regex or validator library

6. No Input Sanitization
   → User can submit 10MB text field
   → Fix: Limit field lengths (name: 100 chars, message: 2000 chars)

7. API Endpoint Lacks Authentication
   POST /api/contact is public, no API key required
   → Attackers can spam your endpoint directly
   → Fix: Require API key or implement honeypot field

8. Password Storage (if login form)
   → Check if passwords are hashed with bcrypt/argon2
   → Never store plaintext passwords

GDPR/PRIVACY COMPLIANCE:

✗ No privacy policy link near form
  → Required by GDPR Article 13
  → Fix: Add "By submitting, you agree to our Privacy Policy"

✗ No opt-in checkbox for marketing emails
  → Sending marketing emails without consent violates CASL/GDPR
  → Fix: Add explicit opt-in checkbox

✓ HTTPS enforced (good)
✓ No unnecessary data collected

SECURE CODE REWRITE:

```javascript
// Secure contact form implementation

// Client-side validation & sanitization
function validateForm(formData) {
  const errors = [];

  // Sanitize inputs
  const name = sanitizeHTML(formData.name).slice(0, 100);
  const email = formData.email.trim().toLowerCase().slice(0, 254);
  const message = sanitizeHTML(formData.message).slice(0, 2000);

  // Validate
  if (name.length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  if (!isValidEmail(email)) {
    errors.push('Invalid email address');
  }

  if (message.length < 10) {
    errors.push('Message must be at least 10 characters');
  }

  return { isValid: errors.length === 0, errors, data: { name, email, message } };
}

// Server-side submission (Node.js example)
app.post('/api/contact',
  rateLimit({ max: 5, windowMs: 60 * 60 * 1000 }), // 5 per hour
  csrfProtection, // CSRF middleware
  async (req, res) => {
    try {
      // Server-side validation (never trust client)
      const { isValid, errors, data } = validateForm(req.body);

      if (!isValid) {
        return res.status(400).json({ errors });
      }

      // Honeypot check (invisible field)
      if (req.body.website) {
        // Bot filled out honeypot field
        return res.status(200).json({ success: true }); // Fake success
      }

      // Parameterized query (prevents SQL injection)
      await db.execute(
        'INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, NOW())',
        [data.name, data.email, data.message]
      );

      // Safely display success message (XSS prevention)
      res.json({
        success: true,
        message: `Thanks, ${escapeHTML(data.name)}!`
      });

    } catch (error) {
      // Don't expose internal errors to client
      console.error('Form submission error:', error);
      res.status(500).json({ error: 'Submission failed, please try again' });
    }
});

// Helper functions
function sanitizeHTML(str) {
  return str.replace(/[<>\"']/g, char => ({
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
```

DEPLOYMENT SECURITY CHECKLIST:

□ SQL injection prevention (parameterized queries)
□ XSS prevention (escape all user input)
□ CSRF protection enabled
□ Rate limiting implemented
□ Input validation (client + server)
□ Input sanitization (length limits)
□ HTTPS enforced
□ GDPR consent obtained
□ Error messages don't leak info
□ Security headers set (CSP, X-Frame-Options)
□ Dependencies scanned for vulnerabilities
□ Honeypot field added (bot prevention)

OWASP Top 10 CHECK:

✗ A03:2021 – Injection (SQL injection found)
✗ A07:2021 – XSS (XSS vulnerability found)
✗ A08:2021 – CSRF (no CSRF protection)
✓ A02:2021 – Broken Authentication (N/A)
✓ A01:2021 – Broken Access Control (N/A)

DO NOT DEPLOY until critical vulnerabilities fixed.
```

### 3. Performance Optimization

Identify code that slows down marketing pages.

**Example - Landing Page Performance:**
```
code-reviewer: Analyzing landing page performance...

PERFORMANCE AUDIT:

Lighthouse Score: 42/100 (Poor)
Time to Interactive: 8.2s (Target: < 3s)

BLOCKING ISSUES:

1. Render-Blocking Scripts [HIGH IMPACT]
   Found 8 synchronous <script> tags in <head>
   → Google Analytics: +600ms
   → Facebook Pixel: +450ms
   → Hotjar: +800ms
   → Custom tracking: +300ms
   → Total: +2.15s blocking time

   Fix: Add 'defer' or move to <body> bottom
   ```html
   <script defer src="analytics.js"></script>
   ```

2. Unoptimized Images [HIGH IMPACT]
   → hero.jpg: 3.2 MB (should be < 200 KB)
   → feature-1.png: 1.8 MB (should be < 150 KB)
   → Total: 8.4 MB images

   Fix:
   - Compress with TinyPNG (lossless)
   - Use WebP format (30% smaller)
   - Implement lazy loading
   - Use responsive images (srcset)

3. No Code Splitting [MEDIUM IMPACT]
   → Loading entire React bundle (340 KB) for simple landing page
   → Most code never executes
   → Fix: Code split by route, lazy load components

RECOMMENDED OPTIMIZATIONS:

```javascript
// Before: Blocking analytics
<script src="https://www.google-analytics.com/analytics.js"></script>

// After: Async analytics
<script>
  window.ga = function() { (ga.q = ga.q || []).push(arguments) };
  ga.l = +new Date;
  ga('create', 'UA-XXXXX-Y', 'auto');
  ga('send', 'pageview');
</script>
<script async src="https://www.google-analytics.com/analytics.js"></script>

// Lazy load images
<img
  src="placeholder.jpg"
  data-src="hero.jpg"
  loading="lazy"
  alt="Hero image"
/>

// Code splitting with React.lazy
const FeatureSection = React.lazy(() => import('./FeatureSection'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <FeatureSection />
    </Suspense>
  );
}
```

EXPECTED IMPROVEMENTS:

After optimization:
→ Lighthouse Score: 42 → 88/100 (+110%)
→ Time to Interactive: 8.2s → 2.1s (-74%)
→ First Contentful Paint: 3.4s → 0.9s (-74%)
→ Total page size: 9.8 MB → 1.2 MB (-88%)

Conversion impact:
→ Every 1s delay = ~7% conversion loss
→ Current: 8.2s → Losing ~51% conversions
→ Optimized: 2.1s → Losing ~7% conversions
→ Expected lift: +47% conversion rate
```

## When to Use Code Reviewer

**Perfect for:**
- Tracking script review before deployment
- Email template code validation
- Landing page performance audits
- Form security checks
- Marketing automation code
- Third-party integration review

**Not needed for:**
- Backend engineering code (use Engineer Kit)
- Content review (use Content Reviewer)
- Strategy questions (use Brainstormer)
- Non-code assets (images, copy, design)

## Example Workflows

### Workflow 1: Pre-Deploy Tracking Script Review

```
1. You: "Review Facebook Pixel code before we deploy"

2. code-reviewer: Security & performance audit
   - Scans for hardcoded secrets
   - Checks error handling
   - Validates GDPR compliance
   - Tests performance impact

3. Output:
   CRITICAL: API key exposed in client code
   HIGH: No error handling (breaks checkout)
   HIGH: Missing GDPR consent check
   FIX: Async script loading

4. You fix critical issues

5. code-reviewer: Re-review confirms ready for deploy
```

### Workflow 2: Email Template Compatibility Check

```
1. You: "Check if this email renders in Outlook"

2. code-reviewer: Email client compatibility audit
   - Checks CSS support across clients
   - Validates HTML structure
   - Tests image fallbacks
   - Reviews tracking implementation

3. Output:
   ✗ CSS Grid not supported in Outlook
   ✗ External CSS won't load
   ✗ Email size > 102 KB (Gmail clips)
   ✓ Alt text present

   Corrected template provided

4. You implement fixes and test in Litmus
```

## Best Practices

### 1. Never Trust Client-Side Input

**Bad:** Use user input directly
**Good:** Validate + sanitize all inputs

Client-side validation is UX. Server-side validation is security.

### 2. Performance is a Feature

**Bad:** "It works, ship it"
**Good:** "It works and loads in < 2s"

Every 1s delay costs ~7% conversion.

### 3. Security by Default

**Bad:** Add security if time permits
**Good:** Build security from the start

Fixing security issues post-launch is 10x more expensive.

## Related Agents

- [Campaign Debugger](/docs/marketing/agents/campaign-debugger) - Debug runtime issues after code deploys
- [Content Reviewer](/docs/marketing/agents/content-reviewer) - Review non-code marketing assets
- [Campaign Manager](/docs/marketing/agents/campaign-manager) - Execute campaigns with reviewed code

## Related Commands

- `/review code` - Comprehensive code quality assessment
- `/security audit` - Security vulnerability scan
- `/performance check` - Page speed and optimization analysis

---

**Code quality in marketing isn't optional. It's the difference between campaigns that convert and campaigns that crash.**

Ready to ship secure, fast, reliable marketing code? Start reviewing.
