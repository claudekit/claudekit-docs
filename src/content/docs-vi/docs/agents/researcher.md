---
title: Researcher Agent
description: Multi-source technology research with comprehensive documentation analysis and best practices discovery
section: docs
category: agents
order: 2
published: true
---

# Researcher Agent

The researcher agent conducts comprehensive technology research across multiple sources to gather documentation, analyze best practices, and synthesize findings into actionable intelligence for feature implementation.

## What Researcher Does

- Explores multiple information sources in parallel using Query Fan-Out techniques
- Gathers documentation from Google Search, YouTube, websites, and GitHub
- Analyzes video content for technical tutorials and demonstrations
- Synthesizes findings into comprehensive, structured markdown reports
- Validates information accuracy across multiple sources
- Identifies security considerations and performance implications

## When to Use

Use researcher when:
- Investigating new technologies or frameworks before adoption
- Finding official documentation and setup guides
- Exploring best practices for specific implementations
- Researching plugins, packages, or libraries
- Understanding architectural patterns and design decisions
- Evaluating security implications of technical choices
- Comparing different technical approaches

## Quick Example

```bash
# Research a technology before implementing
/plan [add Stripe payment integration]
```

**What happens**:
1. Researcher spawns parallel searches across Google, YouTube, websites, and GitHub
2. Researcher gathers official documentation, tutorials, and community discussions
3. Researcher analyzes security best practices and common pitfalls
4. Result: Comprehensive report saved to `./plans/research/YYMMDD-stripe-integration.md`

## How It Works

### Step 1: Query Fan-Out

Researcher uses parallel search strategies to explore multiple sources simultaneously:

```
User Request: "Research WebSocket implementation"
    ↓
Parallel Searches:
├─ Google: "WebSocket best practices Node.js"
├─ YouTube: "WebSocket tutorial production"
├─ Website: socket.io documentation
└─ GitHub: "popular WebSocket libraries stars:>1000"
```

This approach ensures comprehensive coverage in minimal time.

### Step 2: Multi-Source Analysis

Researcher gathers and analyzes information from:

- **Google Search**: Technical articles, blog posts, Stack Overflow discussions
- **YouTube Videos**: Video tutorials, conference talks, live coding sessions
- **Official Websites**: Documentation, guides, API references
- **GitHub Repositories**: Popular libraries, example implementations, issue discussions

### Step 3: Synthesis & Report Generation

Researcher synthesizes all findings into a structured markdown report with:

- Executive summary with key takeaways
- Detailed findings organized by category
- Best practices and recommended approaches
- Security considerations and common vulnerabilities
- Performance optimization strategies
- Implementation recommendations with code examples
- Links to all sources for verification

## Tools & Capabilities

Researcher has access to:

- **SearchAPI MCP**: Google search integration with ranking and relevance scoring
- **search_youtube**: YouTube search with caption extraction and timestamp references
- **WebFetch**: Retrieves and processes content from documentation websites
- **VidCap MCP**: Extracts transcripts and timestamps from video tutorials
- **repomix**: Analyzes GitHub repositories for implementation patterns
- **WebSearch**: Fallback search tool for general queries
- **Gemini Vision**: Analyzes screenshots and diagrams from documentation

## Output Format

Researcher creates comprehensive markdown reports saved to `./plans/research/` directory.

**Example Output**:

```markdown
# Research Report: Stripe Payment Integration

**Date**: 2025-10-30
**Researcher**: researcher agent
**Sources**: 15 sources analyzed (5 docs, 4 videos, 6 GitHub repos)

## Executive Summary

Stripe is the recommended payment gateway for modern web applications with:
- Official SDKs for 15+ languages with TypeScript support
- PCI DSS compliance handled automatically
- Webhook system for real-time payment updates
- Test mode with comprehensive test card suite

**Recommendation**: Use Stripe Checkout for simplest implementation,
Stripe Elements for custom UI, Payment Intents API for advanced flows.

## Key Findings

### 1. Integration Approaches

#### Option A: Stripe Checkout (Recommended for MVP)
**Pros**:
- Hosted payment page, no PCI compliance needed
- 5-minute setup time
- Mobile-optimized UI
- Supports 135+ currencies

**Cons**:
- Less customization
- Redirects user away from site
- Limited branding options

**Best for**: Quick launches, minimal maintenance

#### Option B: Stripe Elements
**Pros**:
- Custom UI while maintaining PCI compliance
- Stays on your domain
- Full design control
- Better conversion rates

**Cons**:
- Requires frontend integration
- More complex implementation
- Longer setup time (30-60 min)

**Best for**: Branded checkout experiences

### 2. Security Best Practices

✅ **Critical Requirements**:
- Never store card details on your server
- Always use HTTPS in production
- Implement webhook signature verification
- Use environment variables for API keys
- Enable Stripe Radar for fraud detection

⚠ **Common Vulnerabilities**:
- Exposing secret keys in frontend code
- Missing webhook signature validation
- Insufficient error handling
- No idempotency key usage

### 3. Performance Considerations

**Load Times**:
- Stripe.js size: 89KB gzipped
- Initial load: ~200ms
- Payment processing: 2-5 seconds average

**Optimization Strategies**:
- Lazy-load Stripe.js when needed
- Pre-load on checkout page navigation
- Use Payment Intent API for faster confirmations
- Cache customer payment methods

### 4. Implementation Guide

**Minimal Working Example** (Node.js + Express):

```typescript
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create payment intent
app.post('/api/payment', async (req, res) => {
  const { amount } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // Convert to cents
    currency: 'usd',
    automatic_payment_methods: { enabled: true }
  });

  res.json({ clientSecret: paymentIntent.client_secret });
});

// Handle webhooks
app.post('/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const event = stripe.webhooks.constructEvent(
    req.body,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET
  );

  if (event.type === 'payment_intent.succeeded') {
    // Handle successful payment
    await fulfillOrder(event.data.object);
  }

  res.json({ received: true });
});
```

## Sources

### Documentation
1. [Stripe Official Docs](https://stripe.com/docs) - Comprehensive API reference
2. [Payment Intents API](https://stripe.com/docs/payments/payment-intents) - Modern payment flow
3. [Webhooks Guide](https://stripe.com/docs/webhooks) - Event handling

### Video Tutorials
4. [Stripe Payments Crash Course](https://youtube.com/watch?v=xyz) - 45 min comprehensive tutorial
5. [Advanced Stripe Integration](https://youtube.com/watch?v=abc) - Production best practices

### GitHub Repositories
6. [stripe-samples/accept-payment](https://github.com/stripe-samples) - Official examples
7. [vercel/nextjs-commerce](https://github.com/vercel/commerce) - Production implementation

## Next Steps

1. **Setup** (5 min): Create Stripe account, get API keys
2. **Install** (2 min): `npm install stripe @stripe/stripe-js`
3. **Implement** (30-60 min): Follow implementation guide
4. **Test** (15 min): Use test cards to verify flows
5. **Deploy** (10 min): Configure webhooks, enable production mode

## Open Questions

- Should we support subscription billing?
- Need to handle multiple currencies?
- Refund policy requirements?
- Want to use Stripe Connect for marketplace?

---

**Confidence Level**: High (15+ sources validated)
**Last Updated**: 2025-10-30
**Recommended Action**: Proceed with Stripe Checkout for MVP
```

## Best Practices

✅ **Do**:
- Let researcher explore multiple sources in parallel
- Review the full research report before implementation
- Check cited sources for the latest updates
- Use research findings to inform planner agent

❌ **Don't**:
- Skip the research phase for unfamiliar technologies
- Rely on a single source for critical decisions
- Ignore security and performance sections
- Start implementation without reviewing findings

## Common Issues

### Issue: Incomplete Research

**Problem**: Research report missing critical information

**Solution**:
- Be more specific in research request
- Mention specific concerns (security, performance, scaling)
- Request comparison with alternative solutions
- Ask for production-ready examples

### Issue: Outdated Information

**Problem**: Research found deprecated or old practices

**Solution**:
- Request latest documentation specifically
- Check GitHub issues for recent problems
- Review video publish dates
- Verify npm package last-updated dates

### Issue: Too Much Information

**Problem**: Report too long, hard to extract key points

**Solution**:
- Focus research request on specific aspect
- Review executive summary first
- Use "Next Steps" section for actionable items
- Share specific sections with planner agent

## Related

- [Planner Agent](/docs/agents/planner) - Uses research findings to create plans
- [Brainstormer Agent](/docs/agents/brainstormer) - Debates technical approaches
- [Scout Agent](/docs/agents/scout) - Locates files in existing codebase
- [/plan Command](/docs/commands/core/plan) - Triggers research and planning

---

**Next**: Learn how [planner agent](/docs/agents/planner) uses research to create implementation plans
