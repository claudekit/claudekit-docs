---
title: UI/UX Designer Agent
description: Award-winning UI/UX design with Three.js, responsive layouts, and conversion optimization
section: docs
category: agents
order: 11
published: true
---

# UI/UX Designer Agent

The UI/UX designer agent creates award-winning interfaces with pure HTML/CSS/JS, Three.js 3D experiences, responsive design systems, and conversion-optimized layouts.

## Purpose

Research trending designs, create high-fidelity mockups, implement design systems, and optimize user experiences across all devices with focus on accessibility and conversion rates.

## When Activated

The UI/UX designer agent activates when:

- Using `/design:fast [description]` command
- Using `/design:good [description]` command
- Using `/design:3d [description]` command
- Using `/design:screenshot [path]` command
- Using `/design:video [path]` command
- Using `/design:describe [path]` command
- When design review is needed
- When implementing responsive layouts
- When creating design systems
- When optimizing conversion rates

## Capabilities

### Research & Inspiration

- **Trending Designs**: Analyze Dribbble, Behance, Awwwards top designs
- **Award-Winning Work**: Study TheFWA, Awwwards winners
- **UI Patterns**: Research Mobbin for mobile-first patterns
- **Market Analysis**: Review Envato Market for trending styles
- **Competitive Analysis**: Analyze competitor designs
- **Industry Benchmarks**: Study best-in-class examples

### Design Creation

- **Wireframing**: Low-fidelity sketches to high-fidelity mockups
- **Prototyping**: Interactive prototypes with pure HTML/CSS/JS
- **Visual Design**: Typography, color theory, layout composition
- **Micro-Animations**: CSS animations, transitions, and effects
- **Parallax Effects**: Scroll-based animations and interactions
- **3D Experiences**: Three.js, WebGL shaders, 3D modeling

### Design Systems

- **Tokenization**: Design tokens for colors, spacing, typography
- **Component Library**: Reusable UI components
- **Style Guides**: Documentation for design patterns
- **Accessibility Standards**: WCAG 2.1 AA compliance
- **Responsive Breakpoints**: Mobile-first design (320px+, 768px+, 1024px+)
- **Vietnamese Typography**: Google Fonts with Vietnamese character support

### UX Optimization

- **Conversion Rate Optimization**: A/B testing, user flow analysis
- **Customer Experience**: Journey mapping, pain point identification
- **Accessibility Audits**: Keyboard navigation, screen reader testing
- **Performance Optimization**: Core Web Vitals, image optimization
- **Touch Targets**: 44x44px minimum for mobile interactions
- **Loading States**: Skeleton screens, progress indicators

### Technical Implementation

- **Pure HTML/CSS/JS**: No framework dependencies
- **Three.js/WebGL**: Advanced 3D graphics and shaders
- **Responsive Design**: Mobile-first, fluid layouts
- **CSS Grid/Flexbox**: Modern layout techniques
- **CSS Variables**: Dynamic theming support
- **Image Optimization**: WebP, lazy loading, responsive images

## Example Usage

### Landing Page Design

**Input:**
```bash
/design:good [create a modern SaaS landing page for AI analytics platform]
```

**Process:**
```
1. Research Phase (60s)
   Searching: Dribbble "AI SaaS landing page 2024"
   Searching: Awwwards "analytics dashboard design"
   Searching: Behance "data visualization UI"
   Searching: Mobbin "enterprise SaaS hero sections"

   Trends Found:
   - Glassmorphism with subtle gradients
   - 3D animated data visualizations
   - Dark mode with accent colors
   - Bento grid layouts
   - Interactive scroll animations
   - Isometric illustrations

2. Design Strategy (45s)
   Analyzing: Target audience (B2B decision makers)
   Analyzing: Conversion goals (trial signups)
   Analyzing: Brand positioning (enterprise-grade AI)

   Strategy:
   - Hero: Animated 3D graph with live data
   - Trust signals: Client logos, testimonials
   - Value props: Feature comparison table
   - CTA: Above fold + sticky bottom
   - Social proof: Usage statistics

3. Wireframing (30s)
   Creating: Information architecture
   Creating: User flow diagram
   Creating: Component hierarchy

   Structure:
   └─ Landing Page
      ├─ Hero Section (3D visualization)
      ├─ Value Proposition (3-column grid)
      ├─ Features Showcase (Bento grid)
      ├─ Social Proof (Carousel)
      ├─ Pricing Tiers (Comparison table)
      ├─ FAQ (Accordion)
      └─ CTA Section (Form + video)

4. Visual Design (120s)
   Designing: Color palette (dark theme)
   Designing: Typography system
   Designing: Component library
   Designing: 3D assets

   Design Tokens:
   Colors:
   - Primary: #3B82F6 (AI blue)
   - Secondary: #8B5CF6 (data purple)
   - Accent: #10B981 (success green)
   - Background: #0F172A (dark navy)
   - Surface: #1E293B (elevated)
   - Text: #F1F5F9 (light)

   Typography:
   - Headings: Inter (Vietnamese support)
   - Body: Inter Regular
   - Code: JetBrains Mono
   - Scale: 1.25 (Major Third)

5. Implementation (180s)
   Creating: index.html (semantic structure)
   Creating: styles.css (design system)
   Creating: main.js (interactions)
   Creating: scene.js (Three.js 3D graph)

   Files Created:
   - landing-page/index.html
   - landing-page/css/styles.css
   - landing-page/js/main.js
   - landing-page/js/scene.js
   - landing-page/assets/ (images, fonts)

6. Optimization (60s)
   Optimizing: Images (WebP conversion)
   Optimizing: Fonts (subsetting)
   Optimizing: CSS (minification)
   Optimizing: JS (tree shaking)

   Performance:
   - Lighthouse Score: 98/100
   - First Contentful Paint: 0.8s
   - Largest Contentful Paint: 1.2s
   - Total Bundle Size: 245KB (gzipped: 68KB)
```

**Generated Landing Page:**

```html
<!-- landing-page/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Analytics Platform - Transform Data Into Insights</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Navigation -->
  <nav class="nav">
    <div class="container">
      <a href="/" class="logo">AI Analytics</a>
      <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="/login" class="btn-secondary">Login</a></li>
        <li><a href="/signup" class="btn-primary">Start Free Trial</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section with 3D Visualization -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          Transform Your Data Into
          <span class="gradient-text">Actionable Insights</span>
        </h1>
        <p class="hero-subtitle">
          AI-powered analytics platform that turns complex data into clear decisions.
          Trusted by 10,000+ companies worldwide.
        </p>
        <div class="hero-cta">
          <a href="/signup" class="btn-primary btn-large">
            Start Free Trial
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#demo" class="btn-secondary btn-large">
            Watch Demo
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-value">10,000+</span>
            <span class="stat-label">Active Users</span>
          </div>
          <div class="stat">
            <span class="stat-value">99.9%</span>
            <span class="stat-label">Uptime</span>
          </div>
          <div class="stat">
            <span class="stat-value">2.5M+</span>
            <span class="stat-label">Queries/Day</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <canvas id="scene" class="scene-canvas"></canvas>
        <div class="visual-overlay">
          <div class="metric-card">
            <span class="metric-label">Revenue Growth</span>
            <span class="metric-value">+234%</span>
            <div class="metric-chart"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Value Proposition -->
  <section class="value-props">
    <div class="container">
      <h2 class="section-title">Why Choose AI Analytics?</h2>
      <div class="props-grid">
        <div class="prop-card">
          <div class="prop-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <h3>Real-Time Processing</h3>
          <p>Process millions of data points in milliseconds with our distributed architecture.</p>
        </div>
        <div class="prop-card">
          <div class="prop-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/>
            </svg>
          </div>
          <h3>AI-Powered Insights</h3>
          <p>Automatic anomaly detection and predictive analytics powered by machine learning.</p>
        </div>
        <div class="prop-card">
          <div class="prop-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3>Enterprise Security</h3>
          <p>SOC 2 Type II certified with end-to-end encryption and role-based access control.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Bento Grid -->
  <section class="features">
    <div class="container">
      <h2 class="section-title">Everything You Need</h2>
      <div class="bento-grid">
        <div class="bento-item large">
          <h3>Interactive Dashboards</h3>
          <p>Drag-and-drop dashboard builder with 50+ widget types</p>
          <img src="assets/dashboard-preview.webp" alt="Dashboard Preview" loading="lazy">
        </div>
        <div class="bento-item">
          <h3>Custom Queries</h3>
          <p>SQL and natural language queries</p>
        </div>
        <div class="bento-item">
          <h3>API Access</h3>
          <p>RESTful and GraphQL APIs</p>
        </div>
        <div class="bento-item">
          <h3>Team Collaboration</h3>
          <p>Share insights, comments, alerts</p>
        </div>
        <div class="bento-item wide">
          <h3>50+ Data Sources</h3>
          <div class="integrations">
            <img src="assets/logos/postgres.svg" alt="PostgreSQL">
            <img src="assets/logos/mysql.svg" alt="MySQL">
            <img src="assets/logos/mongodb.svg" alt="MongoDB">
            <img src="assets/logos/redis.svg" alt="Redis">
            <img src="assets/logos/snowflake.svg" alt="Snowflake">
            <span class="more">+45 more</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Social Proof -->
  <section class="social-proof">
    <div class="container">
      <h2 class="section-title">Trusted by Industry Leaders</h2>
      <div class="testimonial-carousel">
        <div class="testimonial">
          <blockquote>
            "AI Analytics reduced our data analysis time by 85%. The real-time insights
            helped us make critical decisions during our Series B fundraising."
          </blockquote>
          <div class="testimonial-author">
            <img src="assets/avatars/john.webp" alt="John Smith">
            <div>
              <strong>John Smith</strong>
              <span>CTO, TechCorp Inc.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="client-logos">
        <img src="assets/clients/google.svg" alt="Google">
        <img src="assets/clients/microsoft.svg" alt="Microsoft">
        <img src="assets/clients/amazon.svg" alt="Amazon">
        <img src="assets/clients/netflix.svg" alt="Netflix">
        <img src="assets/clients/spotify.svg" alt="Spotify">
      </div>
    </div>
  </section>

  <!-- Pricing -->
  <section class="pricing">
    <div class="container">
      <h2 class="section-title">Simple, Transparent Pricing</h2>
      <div class="pricing-grid">
        <div class="pricing-card">
          <h3>Starter</h3>
          <div class="price">
            <span class="currency">$</span>
            <span class="amount">49</span>
            <span class="period">/month</span>
          </div>
          <ul class="features-list">
            <li>Up to 1M rows/month</li>
            <li>5 dashboards</li>
            <li>Email support</li>
            <li>7-day data retention</li>
          </ul>
          <a href="/signup?plan=starter" class="btn-secondary">Start Free Trial</a>
        </div>
        <div class="pricing-card featured">
          <div class="badge">Most Popular</div>
          <h3>Professional</h3>
          <div class="price">
            <span class="currency">$</span>
            <span class="amount">199</span>
            <span class="period">/month</span>
          </div>
          <ul class="features-list">
            <li>Up to 10M rows/month</li>
            <li>Unlimited dashboards</li>
            <li>Priority support</li>
            <li>90-day data retention</li>
            <li>Custom queries</li>
            <li>API access</li>
          </ul>
          <a href="/signup?plan=pro" class="btn-primary">Start Free Trial</a>
        </div>
        <div class="pricing-card">
          <h3>Enterprise</h3>
          <div class="price">
            <span class="amount">Custom</span>
          </div>
          <ul class="features-list">
            <li>Unlimited rows</li>
            <li>Unlimited everything</li>
            <li>Dedicated support</li>
            <li>Unlimited retention</li>
            <li>SSO & SAML</li>
            <li>SLA guarantee</li>
            <li>On-premise option</li>
          </ul>
          <a href="/contact" class="btn-secondary">Contact Sales</a>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="faq">
    <div class="container">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <div class="faq-accordion">
        <div class="faq-item">
          <button class="faq-question">
            How long does it take to set up?
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div class="faq-answer">
            Most customers are up and running in under 10 minutes. Connect your data source,
            and our AI will automatically generate initial dashboards.
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question">
            Do you support my data source?
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div class="faq-answer">
            We support 50+ data sources including PostgreSQL, MySQL, MongoDB, Snowflake,
            BigQuery, and all major databases. Custom connectors available for Enterprise.
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question">
            Is my data secure?
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div class="faq-answer">
            Yes. We're SOC 2 Type II certified with end-to-end encryption, role-based access
            control, and regular security audits. Your data never leaves your infrastructure
            with our on-premise option.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="final-cta">
    <div class="container">
      <h2>Ready to Transform Your Data?</h2>
      <p>Join 10,000+ companies making data-driven decisions</p>
      <a href="/signup" class="btn-primary btn-large">Start Free Trial</a>
      <p class="cta-note">No credit card required • 14-day free trial • Cancel anytime</p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Product</h4>
          <ul>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/integrations">Integrations</a></li>
            <li><a href="/changelog">Changelog</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="/docs">Documentation</a></li>
            <li><a href="/api">API Reference</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/status">Status</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="/security">Security</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 AI Analytics. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="js/scene.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

```css
/* landing-page/css/styles.css */
:root {
  /* Colors */
  --primary: #3B82F6;
  --secondary: #8B5CF6;
  --accent: #10B981;
  --background: #0F172A;
  --surface: #1E293B;
  --surface-hover: #334155;
  --text: #F1F5F9;
  --text-secondary: #94A3B8;
  --border: #334155;

  /* Typography */
  --font-body: 'Inter', sans-serif;
  --font-heading: 'Inter', sans-serif;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;

  /* Borders */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.4);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.5);

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text);
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--spacing-lg);
  }
}

/* Navigation */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  padding: var(--spacing-md) 0;
}

.nav .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  list-style: none;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.nav-links a:hover {
  color: var(--text);
}

/* Buttons */
.btn-primary, .btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0.625rem 1.25rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  text-decoration: none;
  transition: all var(--transition-normal);
  cursor: pointer;
  border: none;
  font-size: 0.9375rem;
}

.btn-primary {
  background: var(--primary);
  color: white;
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background: #2563EB;
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  background: var(--surface-hover);
}

.btn-large {
  padding: 0.875rem 1.75rem;
  font-size: 1.0625rem;
}

/* Hero Section */
.hero {
  padding: var(--spacing-2xl) 0;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
}

@media (min-width: 1024px) {
  .hero .container {
    grid-template-columns: 1fr 1fr;
  }
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 4rem;
  }
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Hero Visual */
.hero-visual {
  position: relative;
  height: 600px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--surface);
  box-shadow: var(--shadow-xl);
}

.scene-canvas {
  width: 100%;
  height: 100%;
}

.visual-overlay {
  position: absolute;
  bottom: var(--spacing-lg);
  right: var(--spacing-lg);
}

.metric-card {
  background: rgba(30, 41, 59, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  min-width: 200px;
}

.metric-label {
  display: block;
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
}

.metric-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
}

/* Sections */
.value-props, .features, .social-proof, .pricing, .faq, .final-cta {
  padding: var(--spacing-2xl) 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

/* Value Props */
.props-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

@media (min-width: 768px) {
  .props-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.prop-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  transition: all var(--transition-normal);
}

.prop-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.prop-icon {
  width: 48px;
  height: 48px;
  margin-bottom: var(--spacing-md);
  color: var(--primary);
}

.prop-icon svg {
  width: 100%;
  height: 100%;
}

.prop-card h3 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
}

.prop-card p {
  color: var(--text-secondary);
}

/* Bento Grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-md);
}

.bento-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all var(--transition-normal);
}

.bento-item:hover {
  border-color: var(--primary);
}

.bento-item.large {
  grid-column: span 2;
  grid-row: span 2;
}

.bento-item.wide {
  grid-column: span 2;
}

.bento-item img {
  width: 100%;
  border-radius: var(--radius-md);
  margin-top: var(--spacing-md);
}

/* Pricing */
.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
  max-width: 1000px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pricing-card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  transition: all var(--transition-normal);
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.pricing-card.featured {
  border-color: var(--primary);
  box-shadow: 0 0 0 1px var(--primary);
}

.pricing-card .badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 600;
}

.price {
  display: flex;
  align-items: baseline;
  margin: var(--spacing-md) 0;
}

.currency {
  font-size: 1.5rem;
  color: var(--text-secondary);
}

.amount {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0.25rem;
}

.period {
  font-size: 1rem;
  color: var(--text-secondary);
}

.features-list {
  list-style: none;
  margin: var(--spacing-lg) 0;
}

.features-list li {
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--border);
  color: var(--text-secondary);
}

.features-list li:last-child {
  border-bottom: none;
}

/* FAQ */
.faq-accordion {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid var(--border);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) 0;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.125rem;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: color var(--transition-fast);
}

.faq-question:hover {
  color: var(--primary);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-normal);
  color: var(--text-secondary);
  padding: 0;
}

.faq-item.active .faq-answer {
  max-height: 200px;
  padding-bottom: var(--spacing-md);
}

/* Footer */
.footer {
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding: var(--spacing-2xl) 0 var(--spacing-lg);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer-col h4 {
  margin-bottom: var(--spacing-md);
}

.footer-col ul {
  list-style: none;
}

.footer-col a {
  display: block;
  padding: var(--spacing-xs) 0;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-col a:hover {
  color: var(--text);
}

.footer-bottom {
  text-align: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border);
  color: var(--text-secondary);
}

/* Icons */
.icon {
  width: 20px;
  height: 20px;
  stroke-width: 2;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .pricing-card {
    padding: var(--spacing-lg);
  }
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content > * {
  animation: fadeIn 0.6s ease-out backwards;
}

.hero-title {
  animation-delay: 0.1s;
}

.hero-subtitle {
  animation-delay: 0.2s;
}

.hero-cta {
  animation-delay: 0.3s;
}

.hero-stats {
  animation-delay: 0.4s;
}
```

```javascript
// landing-page/js/scene.js
// Three.js 3D animated graph
(() => {
  const canvas = document.getElementById('scene');
  if (!canvas) return;

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
  });

  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  camera.position.z = 5;

  // Create animated data points
  const geometry = new THREE.SphereGeometry(0.05, 16, 16);
  const material = new THREE.MeshBasicMaterial({
    color: 0x3B82F6,
    transparent: true,
    opacity: 0.8
  });

  const dataPoints = [];
  const numPoints = 50;

  for (let i = 0; i < numPoints; i++) {
    const point = new THREE.Mesh(geometry, material.clone());
    point.position.set(
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8
    );
    scene.add(point);
    dataPoints.push(point);
  }

  // Create connecting lines
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x8B5CF6,
    transparent: true,
    opacity: 0.3
  });

  const lineGeometry = new THREE.BufferGeometry();
  const linePositions = [];

  for (let i = 0; i < numPoints; i++) {
    for (let j = i + 1; j < numPoints; j++) {
      const distance = dataPoints[i].position.distanceTo(dataPoints[j].position);
      if (distance < 2) {
        linePositions.push(
          dataPoints[i].position.x,
          dataPoints[i].position.y,
          dataPoints[i].position.z,
          dataPoints[j].position.x,
          dataPoints[j].position.y,
          dataPoints[j].position.z
        );
      }
    }
  }

  lineGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(linePositions, 3)
  );

  const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lines);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Rotate scene
    scene.rotation.x += 0.001;
    scene.rotation.y += 0.002;

    // Animate data points
    dataPoints.forEach((point, i) => {
      point.position.y += Math.sin(Date.now() * 0.001 + i) * 0.001;
      point.material.opacity = 0.5 + Math.sin(Date.now() * 0.002 + i) * 0.3;
    });

    renderer.render(scene, camera);
  }

  animate();

  // Handle resize
  window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  });
})();
```

```javascript
// landing-page/js/main.js
// FAQ accordion
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('active');
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.prop-card, .bento-item, .pricing-card').forEach(el => {
  observer.observe(el);
});

// Stats counter animation
const animateValue = (element, start, end, duration) => {
  const startTime = Date.now();
  const animate = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(start + (end - start) * progress);

    element.textContent = current.toLocaleString() + (element.dataset.suffix || '');

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  animate();
};

// Observe stats section
const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-value').forEach(stat => {
        const value = stat.textContent.replace(/[^0-9.]/g, '');
        const suffix = stat.textContent.replace(/[0-9.]/g, '');
        stat.dataset.suffix = suffix;
        animateValue(stat, 0, parseFloat(value), 2000);
      });
      statsObserver.unobserve(entry.target);
    }
  });
});

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
  statsObserver.observe(statsSection);
}
```

**Documentation Saved:**

```markdown
# Landing Page Design - AI Analytics Platform

## Design System

### Colors
- Primary: #3B82F6 (AI Blue)
- Secondary: #8B5CF6 (Data Purple)
- Accent: #10B981 (Success Green)
- Background: #0F172A (Dark Navy)
- Surface: #1E293B (Elevated)
- Text: #F1F5F9 (Light)

### Typography
- Font Family: Inter (Vietnamese support)
- Headings: 700 weight
- Body: 400 weight
- Scale: 1.25 (Major Third)

### Spacing
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2rem
- xl: 3rem
- 2xl: 4rem

### Breakpoints
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

## Components

### Navigation
- Sticky header with blur effect
- Logo + navigation links
- CTA buttons (Login + Start Trial)

### Hero Section
- Split layout (content + 3D visual)
- Animated 3D data graph (Three.js)
- Two CTAs (primary + secondary)
- Social proof stats

### Value Proposition
- 3-column grid
- Icon + heading + description
- Hover effects

### Features Bento Grid
- Flexible grid layout
- Mixed size cards
- Image previews
- Integration logos

### Social Proof
- Customer testimonials
- Client logos
- Carousel navigation

### Pricing
- 3-tier comparison
- Feature lists
- Badge for popular plan
- CTA buttons

### FAQ
- Accordion interface
- Question/answer pairs
- Smooth expand/collapse

### Footer
- 4-column grid
- Product/Company/Resources/Legal links
- Copyright notice

## Performance

- Bundle Size: 245KB (68KB gzipped)
- Lighthouse Score: 98/100
- FCP: 0.8s
- LCP: 1.2s

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader friendly
- 44x44px touch targets
- Sufficient color contrast

## Conversion Optimization

- Above-fold CTA
- Multiple CTAs throughout
- Social proof placement
- Trust signals
- Clear value proposition
- Risk reversal (free trial, no CC)

Saved: docs/design-guidelines.md
```

## Output Format

All designs are saved to `landing-page/` directory:
```
landing-page/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── scene.js
├── assets/
│   ├── images/
│   ├── fonts/
│   └── logos/
└── README.md
```

## Design Quality Standards

Good designs include:

✅ **Research-backed** - Based on industry trends
✅ **Responsive** - Mobile-first approach
✅ **Accessible** - WCAG 2.1 AA compliant
✅ **Performant** - Optimized assets
✅ **Semantic HTML** - Proper structure
✅ **Modern CSS** - Design tokens, custom properties
✅ **Interactive** - Micro-animations, effects
✅ **Conversion-optimized** - Clear CTAs, value props

## Design Commands

### Quick Design
```bash
/design:fast [description]
```
Generates basic design in 60-120 seconds.

### High-Quality Design
```bash
/design:good [description]
```
Generates comprehensive design with research, 3-5 minutes.

### 3D Interactive Design
```bash
/design:3d [description]
```
Generates Three.js 3D experiences with shaders.

### Design from Screenshot
```bash
/design:screenshot [path/to/screenshot.png]
```
Analyzes and recreates design from screenshot.

### Design from Video
```bash
/design:video [path/to/demo.mp4]
```
Analyzes video and creates responsive design.

### Describe Design
```bash
/design:describe [path/to/screenshot.png]
```
Analyzes and describes design patterns, colors, typography.

## Design Workflow

### Research Phase
1. Search design platforms (Dribbble, Behance, Awwwards)
2. Analyze trending patterns and styles
3. Study award-winning work
4. Review competitor designs
5. Identify target audience preferences

### Design Phase
1. Create information architecture
2. Develop wireframes
3. Design visual system (colors, typography, spacing)
4. Create component library
5. Design responsive breakpoints

### Implementation Phase
1. Write semantic HTML structure
2. Implement CSS design system
3. Add interactive JavaScript
4. Optimize Three.js 3D scenes
5. Test across devices and browsers

### Optimization Phase
1. Optimize images (WebP, lazy loading)
2. Minify CSS and JavaScript
3. Implement performance budgets
4. Test Core Web Vitals
5. Validate accessibility

## Advanced Features

### Three.js 3D Experiences

```bash
/design:3d [create interactive 3D product showcase]
```

Creates immersive 3D experiences with:
- Custom shaders and materials
- Interactive camera controls
- Physics simulations
- Particle systems
- Post-processing effects

### Responsive Design System

Automatically generates:
- CSS custom properties
- Typography scale
- Spacing system
- Color palette
- Component tokens
- Breakpoint system

### Vietnamese Typography

Ensures proper support for:
- Vietnamese diacritics
- Google Fonts selection
- Character spacing
- Line height adjustments
- Font fallbacks

### Conversion Rate Optimization

Implements:
- Above-fold CTAs
- Social proof placement
- Trust signals
- Risk reversal
- Value proposition hierarchy
- Urgency elements

## Design Tools Integration

### Image Generation
```bash
# Uses gemini-image-gen skill for custom illustrations
"Create hero illustration: AI data visualization, blue gradient, modern style"
```

### Image Optimization
```bash
# Uses ImageMagick for optimization
convert input.png -quality 85 -define webp:method=6 output.webp
```

### Screenshot Analysis
```bash
# Uses gemini-vision skill for design analysis
/design:describe [screenshot.png]
```

## Success Metrics

A successful design achieves:

- ✅ Lighthouse Performance: 90+
- ✅ Lighthouse Accessibility: 100
- ✅ WCAG 2.1 AA compliant
- ✅ Responsive across all devices
- ✅ Core Web Vitals: Green
- ✅ Bundle size: <250KB gzipped
- ✅ Clear conversion path

## Quality Checklist

Before delivery, verify:

- [ ] Semantic HTML structure
- [ ] Responsive design (320px+, 768px+, 1024px+)
- [ ] Accessibility (keyboard nav, ARIA, contrast)
- [ ] Performance (Core Web Vitals, bundle size)
- [ ] Cross-browser compatibility
- [ ] Touch targets (44x44px minimum)
- [ ] Vietnamese character support
- [ ] Optimized images (WebP, lazy loading)
- [ ] Micro-animations and transitions
- [ ] Clear CTAs and conversion path

## Documentation Output

Designs include comprehensive documentation:

```markdown
# Design Documentation

## Overview
Purpose, target audience, design goals

## Design System
Colors, typography, spacing, components

## Components
Detailed component specifications

## Responsive Behavior
Breakpoint behaviors, mobile adaptations

## Accessibility
WCAG compliance, keyboard navigation, ARIA

## Performance
Bundle size, optimization strategies, metrics

## Implementation Notes
Technical details, browser support, dependencies
```

Saved to: `docs/design-guidelines.md`

## Workflow Integration

### With Planner Agent
```bash
# Planner creates requirements
/plan [feature design]

# Designer implements design
/design:good [implement feature from plan]
```

### With Code Reviewer
```bash
# Designer creates UI
/design:good [dashboard UI]

# Reviewer validates design quality
/review [check design implementation]
```

### With Copywriter
```bash
# Designer creates layout
/design:good [landing page]

# Copywriter creates copy
"Create compelling copy for hero section"
```

## Next Steps

- [Copywriter](/docs/agents/copywriter) - Create compelling copy
- [Code Reviewer](/docs/agents/code-reviewer) - Validate implementation
- [Implementation](/docs/commands/core/cook) - Build the design

---

**Key Takeaway**: The UI/UX designer agent creates award-winning, conversion-optimized designs with comprehensive research, modern technologies, and accessibility-first approach.
