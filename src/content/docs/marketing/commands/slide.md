---
title: "/slide - Create Presentations"
description: "Generate professional pitch decks, campaign proposals, and marketing presentations with AI-powered content and design in .pptx format"
section: marketing
category: commands
order: 5
published: true
---

# /slide:create - Create Beautiful Presentations

Generate professional presentations for pitch decks, campaign proposals, creative briefs, and internal reports. AI-powered content creation with beautiful design templates, export to editable .pptx files.

## Commands

### /slide:create - Create Presentation

Generate complete slide decks from simple prompts or detailed briefs.

**Syntax:**
```bash
/slide:create "<presentation topic or brief>"
```

**Features:**
1. Analyze presentation goals and target audience
2. Generate structured outline with key messages
3. Create compelling content for each slide
4. Design slides with professional templates and visuals
5. Export to editable .pptx file ready for customization

**Examples:**
```bash
# Investor pitch deck
/slide:create "Series A pitch deck for AI marketing automation platform"

# Campaign proposal
/slide:create "Q1 2025 product launch campaign proposal with budget breakdown"

# Product demo presentation
/slide:create "technical demo of API rate limiting feature for enterprise clients"

# Internal report
/slide:create "Q4 marketing performance review with key metrics and 2025 strategy"

# Sales enablement
/slide:create "competitive analysis comparing our platform vs. competitors for sales team"
```

**Output:**
```
/assets/slides/YYYY-MM-DD-slug/
├── presentation.pptx          # Editable PowerPoint file
├── outline.md                 # Slide structure and key messages
├── script.md                  # Speaker notes for each slide
├── images/
│   ├── slide-01-cover.png     # Preview images
│   ├── slide-02-problem.png
│   ├── slide-03-solution.png
│   └── ...
└── metadata.json              # Theme, fonts, color palette
```

---

## Presentation Types & Templates

### 1. Pitch Deck (Investor Presentation)

**Use Case**: Fundraising, investor meetings, Demo Day

**Slide Structure** (10-15 slides, 10-15 minutes):
1. **Cover** - Company name, tagline, presenter info
2. **Problem** - Market pain points, quantified impact
3. **Solution** - Your product/service, unique value proposition
4. **Product Demo** - Screenshots, key features (2-3 slides)
5. **Market Opportunity** - TAM/SAM/SOM, market trends
6. **Business Model** - Revenue streams, pricing
7. **Traction** - Key metrics, growth trajectory
8. **Competition** - Competitive landscape, differentiation
9. **Team** - Founders, advisors, key hires
10. **Financials** - Revenue projections, burn rate
11. **Ask** - Funding amount, use of funds, milestones
12. **Vision** - Long-term goals, exit strategy

**Design Elements**:
- Clean, professional layout (lots of white space)
- Minimal text (max 6 bullets per slide)
- High-quality product screenshots
- Data visualizations (charts, graphs)
- Consistent color palette (brand colors)

**Example Command**:
```bash
/slide:create "Series A pitch deck - AI marketing automation SaaS, raising $3M, 15x YoY growth, 500+ customers"
```

---

### 2. Campaign Proposal

**Use Case**: Client pitches, internal campaign approvals, agency presentations

**Slide Structure** (15-20 slides, 20-30 minutes):
1. **Cover** - Campaign name, client/brand, date
2. **Executive Summary** - Campaign goals, expected outcomes
3. **Situation Analysis** - Current state, challenges
4. **Target Audience** - Personas, demographics, psychographics
5. **Campaign Objectives** - SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound)
6. **Big Idea** - Core concept, creative direction
7. **Campaign Strategy** - Channels, tactics, timeline
8. **Creative Execution** - Mockups, copy, visuals (3-5 slides)
9. **Media Plan** - Channel mix, reach/frequency
10. **Budget Breakdown** - Cost allocation, ROI projections
11. **Success Metrics** - KPIs, measurement plan
12. **Timeline & Milestones** - Gantt chart, key dates
13. **Team & Responsibilities** - Roles, contacts
14. **Risks & Mitigation** - Potential issues, contingency plans
15. **Next Steps** - Approval process, launch checklist

**Design Elements**:
- Bold, creative visuals (campaign mockups)
- Client brand colors and fonts
- Campaign mood boards
- Budget and timeline tables
- Before/after comparisons

**Example Command**:
```bash
/slide:create "Q1 product launch campaign - new API feature, developer audience, $50K budget, 6-week timeline"
```

---

### 3. Product Demo Presentation

**Use Case**: Sales presentations, webinars, conference talks

**Slide Structure** (8-12 slides, 15-20 minutes):
1. **Cover** - Product name, demo focus
2. **Agenda** - What you'll cover, expected outcomes
3. **Problem** - Customer pain points
4. **Overview** - Product introduction, key benefits (1 slide)
5. **Feature Demo** - Live demo with annotations (4-6 slides)
   - Feature 1: Screenshot + explanation
   - Feature 2: Screenshot + use case
   - Feature 3: Screenshot + benefits
   - Integrations: How it fits into workflow
6. **Pricing** - Tiers, packages, ROI calculator
7. **Social Proof** - Customer logos, testimonials
8. **Next Steps** - Trial signup, schedule meeting, contact info

**Design Elements**:
- Large product screenshots (full-screen)
- Annotations and callouts on screenshots
- Step-by-step walkthroughs
- Before/after comparisons
- Customer logos and quotes

**Example Command**:
```bash
/slide:create "API rate limiting demo for enterprise customers - dashboard walkthrough, configuration, monitoring"
```

---

### 4. Internal Report / Review

**Use Case**: Quarterly reviews, team updates, board meetings

**Slide Structure** (10-15 slides, 15-20 minutes):
1. **Cover** - Report title, time period, department
2. **Executive Summary** - Key highlights, headline metrics
3. **Performance Overview** - Dashboard-style metrics
4. **Key Wins** - Major achievements (with visuals)
5. **Challenges** - Issues faced, lessons learned
6. **Metric Deep Dives** - 3-5 slides on key metrics
   - Traffic/Engagement
   - Conversions/Revenue
   - Customer Acquisition Cost
   - Retention/Churn
7. **Campaign Performance** - Individual campaign results
8. **Insights & Learnings** - Data-driven takeaways
9. **Recommendations** - Action items for next quarter
10. **Q&A** - Discussion slide

**Design Elements**:
- Data-heavy slides (charts, graphs, tables)
- Color-coded metrics (green/red for performance)
- Trend lines and comparisons (YoY, QoQ)
- Minimal text, let data speak
- Professional, corporate style

**Example Command**:
```bash
/slide:create "Q4 2024 marketing performance review - campaign results, pipeline impact, 2025 recommendations"
```

---

## Design Customization

### Theme Options

**Pre-built Themes** (specify with `--theme` flag):

| Theme | Style | Best For | Colors |
|-------|-------|----------|--------|
| **Modern** | Clean, minimalist, lots of white space | Tech companies, SaaS | Blue, gray, white |
| **Bold** | High contrast, vibrant colors | Creative agencies, campaigns | Red, black, yellow |
| **Professional** | Corporate, traditional | Enterprise, finance, legal | Navy, gray, white |
| **Startup** | Playful, lots of gradients | Early-stage, consumer | Purple, pink, cyan |
| **Dark** | Dark background, neon accents | Developer tools, gaming | Black, cyan, magenta |
| **Minimalist** | Ultra-simple, typography-focused | Luxury, design, consulting | Black, white, one accent |

**Example with Theme**:
```bash
/slide:create "pitch deck for developer tools startup" --theme=dark
```

### Custom Branding

**Provide brand guidelines** in `/assets/brand-guidelines.md`:

```markdown
# Brand Guidelines

## Colors
- Primary: #4F46E5 (Indigo)
- Secondary: #06B6D4 (Cyan)
- Accent: #F59E0B (Amber)
- Text: #1F2937 (Dark Gray)
- Background: #FFFFFF (White)

## Typography
- Headings: Inter Bold
- Body: Inter Regular
- Monospace: JetBrains Mono (code examples)

## Logo
- File: /assets/brand/logo.png
- Usage: Top-left corner, slide 1 cover
- Size: 120x40px

## Imagery Style
- Product screenshots: Clean, high-res, with subtle shadows
- Icons: Outline style, 2px stroke
- Charts: Use brand colors, minimal gridlines
```

The `/slide:create` command will automatically apply your branding.

---

## Advanced Options

### Custom Outline

**Provide custom outline** instead of auto-generating:

```bash
/slide:create @outline.md
```

**Example `outline.md`**:
```markdown
# Presentation Outline

## Slide 1: Cover
Title: "API Rate Limiting Made Simple"
Subtitle: "Enterprise-Grade Protection In 3 Lines Of Code"

## Slide 2: Problem
Title: "API Security Challenges"
Points:
- APIs face unpredictable traffic spikes
- Without protection, infrastructure fails
- Traditional solutions are complex and expensive

## Slide 3: Solution
Title: "Intelligent Rate Limiting"
Content: Product overview with dashboard screenshot
Features: Real-time monitoring, flexible limits, zero downtime

[... Continue for all slides ...]
```

### Speaker Notes

**Auto-generate speaker notes** for each slide:

```bash
/slide:create "pitch deck" --speaker-notes
```

**Output** (`script.md`):
```markdown
# Speaker Notes

## Slide 1: Cover (30 seconds)
Introduction: "Good morning everyone. I'm [Name], CEO of [Company]. We're building the future of API security."
Key Point: Hook audience with the problem we solve
Transition: "Let me start with a question..."

## Slide 2: Problem (1 minute)
Script: "How many of you have experienced API downtime due to traffic spikes? [Pause for hands]
This is more common than you think. Last year, 67% of companies reported API-related outages..."
Data Point to Emphasize: 67% statistic
Transition: "This is the problem we're solving."

[... Continue for each slide ...]
```

---

## Technical Specs

### Output Format

**PowerPoint (.pptx) Specifications**:
- Format: Office Open XML (.pptx)
- Compatible: PowerPoint 2016+, Google Slides, Keynote
- Slide Size: 16:9 (1920x1080px) or 4:3 (1024x768px)
- Fonts: Embedded (no font installation needed)
- Images: High-res PNG/JPEG, embedded in file
- File Size: Typically 5-15 MB (depends on images)

**Editable Elements**:
- All text boxes (fully editable)
- Images (replaceable)
- Colors (theme colors, easy to change)
- Layouts (rearrange, add/delete slides)
- Charts (linked to embedded Excel data)

### Export Options

**Multiple Formats** (specify with `--export` flag):

```bash
# Export to PDF (for printing/sharing)
/slide:create "pitch deck" --export=pdf

# Export slide images (for embedding in docs)
/slide:create "campaign proposal" --export=png

# Export to Google Slides (upload to Drive)
/slide:create "demo presentation" --export=google-slides
```

---

## Related Skills

The `/slide:create` command automatically activates these skills:

- **[copywriting](/docs/marketing/skills/copywriting)** - Compelling slide content
- **[content-marketing](/docs/marketing/skills/content-marketing)** - Presentation strategy
- **[ai-artist](/docs/marketing/skills/ai-artist)** - Visual design generation

## Related Agents

These agents collaborate in the `/slide:create` workflow:

- **[copywriter](/docs/marketing/agents/copywriter)** - Write persuasive slide content
- **[ui-ux-designer](/docs/marketing/agents/ui-ux-designer)** - Design beautiful layouts

## Workflows

See full workflow guides:

- [Campaign Workflow](/docs/marketing/workflows/campaign-workflow) - Campaign proposal presentations

---

## Troubleshooting

### Slides Missing Product Screenshots

**Issue**: Generated slides use placeholder images instead of actual product screenshots.

**Solution**:
1. Add product screenshots to `/assets/screenshots/product/`
2. Reference specific features in prompt: "include dashboard screenshot showing rate limiting configuration"
3. Use `--screenshots=/path/to/screenshots/` flag to specify custom directory
4. Manually replace placeholders in .pptx file after generation

### Content Too Long

**Issue**: Slides have too much text, violating "max 6 bullets" rule.

**Solution**:
1. Add `--concise` flag for shorter bullet points
2. Specify in prompt: "keep slides minimal, max 5 words per bullet"
3. Edit .pptx file to condense text after generation
4. Use `--speaker-notes` to move details to notes section

### Design Doesn't Match Brand

**Issue**: Generated slides don't use company brand colors/fonts.

**Solution**:
1. Create `/assets/brand-guidelines.md` with colors, fonts, logo
2. Use `--theme=custom` flag to apply brand guidelines
3. Provide brand kit files in `/assets/brand/` (logo.png, colors.json)
4. Manually apply company PowerPoint template after generation

### Charts/Graphs Not Generated

**Issue**: Data visualization slides missing charts.

**Solution**:
1. Provide data in prompt: "Q4 revenue $500K, Q1 $750K, Q2 $1.2M"
2. Attach CSV data file: `/slide:create @outline.md --data=metrics.csv`
3. Use simpler chart types (bar, line instead of complex sankey/sunburst)
4. Manually add charts to .pptx using embedded Excel data table
