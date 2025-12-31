# ClaudeKit Marketing Commands - Complete Reference

## Command Summary (119 Commands Total)

### Core Workflow Commands

#### 1. `/analyze` - Analytics & Performance Reports
**Description:** Generate analytics and performance reports  
**Arguments:** `[type]` - Analysis type  
**Analysis Types:**
- `traffic` - Traffic analysis report
- `campaigns` - Campaign performance overview
- `conversions` - Conversion funnel analysis
- `funnel` - Sales funnel metrics
- `content` - Content performance analysis
- `engagement` - Engagement metrics

**Output:** `reports/analytics/{date}-{type}.md`  
**Agents:** analytics-analyst, funnel-architect  
**Skills:** analytics  
**Example:**
```bash
/analyze traffic
/analyze campaigns
/analyze conversions
```

---

#### 2. `/ask` - Technical & Architectural Consultation
**Description:** Answer technical and architectural questions  
**Arguments:** `[technical-question]`  
**Features:**
- Expert consultation from 4 specialized advisors:
  - Systems Designer
  - Technology Strategist
  - Scalability Consultant
  - Risk Analyst
- Honors YAGNI, KISS, DRY principles
- High-level architectural guidance (NOT implementation)

**Output:** Comprehensive architectural analysis  
**Example:**
```bash
/ask How should we structure our microservices?
/ask What's the best approach for real-time notifications?
```

---

#### 3. `/bootstrap` - Project Initialization
**Description:** Bootstrap a new project step by step  
**Arguments:** `[user-requirements]`  
**Workflow:**
1. Question Everything - clarify requirements
2. Research - explore solutions with researchers
3. Tech Stack - recommend & validate tech choices
4. Planning - create detailed implementation plan
5. Design - create wireframes & design guidelines (optional)
6. Implementation - code the plan with subagents
7. Testing - comprehensive test coverage
8. Code Review - quality assurance
9. Documentation - update all docs
10. Onboarding - guide user setup
11. Final Report - summarize & commit

**Output:** Complete project skeleton with docs, tests, CI/CD  
**Key Features:** Progressive disclosure, phase-based structure  
**Example:**
```bash
/bootstrap Create an AI-powered content management system
```

---

#### 4. `/brainstorm` - Collaborative Solution Design
**Description:** Brainstorm a solution collaboratively  
**Arguments:** `[question or topic]`  
**Features:**
- 5-phase brainstorming process
- 2-3 alternatives with trade-offs
- Interactive questioning (1 question at a time)
- Consensus-based summary report
- **BRAINSTORMING ONLY** - no implementation

**Next Actions:**
- `/plan` - Create detailed implementation plan
- `/cook` - Start implementation
- `/fix` - Address specific issues

**Example:**
```bash
/brainstorm How can we improve customer onboarding flow?
```

---

#### 5. `/campaign` - Campaign Management
**Description:** Create and manage marketing campaigns  
**Arguments:** `[action] [name]`  
**Actions:**
- `create [name]` - Create new campaign
- `status [name]` - Get campaign status
- `analyze [name]` - Analyze campaign performance

**Output Paths:**
- Campaign briefs → `assets/campaigns/{date}-{slug}/briefs/`
- Campaign creatives → `assets/campaigns/{date}-{slug}/creatives/`
- Campaign reports → `assets/campaigns/{date}-{slug}/reports/`
- Analysis reports → `assets/diagnostics/campaign-audits/{date}-{name}.md`

**Agents:** campaign-manager, funnel-architect, analytics-analyst, campaign-debugger  
**Skills:** campaign-management, creativity, assets-organizing  
**Example:**
```bash
/campaign create "Q1 Product Launch"
/campaign status "Q1 Product Launch"
/campaign analyze "Q1 Product Launch"
```

---

#### 6. `/code` - Implementation Execution
**Description:** Start coding & testing an existing plan  
**Arguments:** `[plan]` or empty (auto-detects latest)  
**Workflow (6-Step Process):**
1. **Plan Detection** - Find latest or specified plan
2. **Analysis & Task Extraction** - Parse plan, identify blockers
3. **Implementation** - Code step-by-step with subagents
4. **Testing** - 100% test pass requirement
5. **Code Review** - Zero critical issues gate
6. **User Approval** - Blocking gate before finalization
7. **Finalize** - Update docs, auto-commit

**Critical Rules:**
- Tests must be 100% passing
- Zero critical issues after review
- User must approve before finalization
- Auto-commits with phase name on approval

**Output:** Completed phase implementation + commit  
**Example:**
```bash
/code
/code phase-2-payment-integration
```

---

#### 7. `/cook` - All-in-One Feature Implementation
**Description:** Implement a feature step by step  
**Arguments:** `[tasks]`  
**Workflow:**
1. Clarify requirements
2. Research solutions
3. Use `/scout` to find relevant code
4. Create implementation plan
5. Execute plan with `/code`
6. Test & code review
7. Update docs
8. Commit & push

**vs `/plan` → `/code`:** `/cook` plans internally, no separate plan needed  
**Example:**
```bash
/cook Add dark mode toggle to settings
```

---

#### 8. `/plan` - Intelligent Planning
**Description:** Create detailed implementation plan with prompt enhancement  
**Arguments:** `[task]`  
**Features:**
- Auto-detects active vs suggested plans
- Intelligent complexity assessment
- Routes to `/plan:fast` or `/plan:hard`
- Progressive disclosure structure
- Phase-based planning

**Output:** `plans/{date}-{slug}/plan.md` + phase files  
**Example:**
```bash
/plan Implement real-time collaboration feature
```

---

#### 9. `/fix` - Issue Routing & Resolution
**Description:** Analyze and fix issues with intelligent routing  
**Arguments:** `[issues]`  
**Routing Decision Tree:**
- **Type Errors** → `/fix:types`
- **UI/UX Issues** → `/fix:ui`
- **CI/CD Issues** → `/fix:ci`
- **Test Failures** → `/fix:test`
- **Log Analysis** → `/fix:logs`
- **Multiple Issues** → `/fix:parallel`
- **Complex Issues** → `/fix:hard`
- **Simple Fixes** → `/fix:fast`

**Example:**
```bash
/fix TypeScript compilation errors in auth module
/fix Button styling not responsive on mobile
/fix GitHub Actions deployment pipeline failing
```

---

#### 10. `/scout` - Codebase Search Agent
**Description:** Scout directories to find relevant files  
**Arguments:** `[user-prompt] [scale]`  
**Features:**
- Fast, token-efficient codebase search
- Parallel agent spawning (default scale: 3)
- Intelligent directory division
- 3-minute timeout per agent

**Output:** Report to `plans/reports/`  
**Example:**
```bash
/scout Find all payment-related files
/scout Authentication middleware implementation 5
```

---

### Content & Copy Commands

#### 11. `/design/generate` - AI Image Generation
**Description:** Generate images with enhanced prompt & brand context  
**Arguments:** `[description]`  
**Workflow:**
1. Extract brand context dynamically
2. Enhance prompt using brand guidelines
3. Generate image with Imagen API
4. Verify against brand palette
5. Output with metadata

**Output Paths:**
- Banners → `assets/banners/`
- Social graphics → `assets/banners/social-media/`
- Email headers → `assets/banners/email-headers/`
- Landing pages → `assets/banners/landing-pages/`
- Campaign assets → `assets/designs/campaigns/`
- Infographics → `assets/infographics/`

**Skills:** ai-multimodal, brand-guidelines  
**Example:**
```bash
/design:generate "hero banner for landing page"
/design:generate "LinkedIn post graphic, 1:1 aspect"
/design:generate "email header for welcome sequence"
```

---

#### 12. `/email` - Email Content Generation
**Description:** Generate email content for marketing purposes  
**Arguments:** `[type]`  
**Email Types:**
- `newsletter` - Newsletter content
- `cold` - Cold outreach email
- `followup` - Follow-up sequence
- `launch` - Product launch email
- `nurture` - Nurture sequence email
- `welcome` - Welcome email series
- `winback` - Re-engagement email

**Output:** `assets/copy/emails/{date}-{type}-{slug}.md`  
**Agents:** email-wizard, copywriter  
**Skills:** email-marketing, creativity  
**Example:**
```bash
/email newsletter
/email cold "SaaS founders"
/email launch "New Feature"
/email nurture
```

---

#### 13. `/seo/audit` - Technical SEO Audit
**Description:** Perform comprehensive technical SEO audit  
**Arguments:** `[url]`  
**Features:**
- Page data fetching (WebFetch or local)
- ReviewWeb API integration (backlinks, traffic, keywords)
- Technical analysis (meta, headings, schema, speed)
- Priority-based recommendations
- Score (0-100) with letter grade

**Checks:**
- Title tag (length, keywords)
- Meta description
- Heading structure (H1-H6)
- URL structure
- Internal/external links
- Image alt tags
- Schema markup
- Mobile responsiveness
- Page speed indicators

**Output:** `assets/seo/audits/{date}-{domain}-audit.md`  
**Agent:** seo-specialist  
**Skills:** seo-optimization  
**Example:**
```bash
/seo/audit https://example.com
/seo/audit https://example.com/pricing
```

---

#### 14. `/write/blog` - SEO-Optimized Blog Content
**Description:** Create SEO-optimized blog content  
**Arguments:** `[topic]`  
**Workflow:**
1. SEO Research - keyword research & intent
2. Content Planning - outline with H2-H4 structure
3. Content Creation - write engaging post
4. SEO Optimization - add schema markup, alt text
5. Quality Gate - `/write/audit` (target ≥8.0)

**Output:**
- Blog post → `assets/articles/{date}-{slug}/{date}-{slug}.md`
- Images → `assets/articles/{date}-{slug}/images/`

**Metadata included:** SEO title, description, keywords, schema  
**Agents:** seo-specialist, content-creator, copywriter, planner  
**Skills:** seo-optimization, content-marketing, creativity  
**Example:**
```bash
/write/blog "best project management tools for startups"
/write/blog "AI marketing automation guide"
/write/blog "remote team productivity tips"
```

---

### Development Commands

#### 15. `/skill/create` - Create Custom Skill
**Description:** Create a new agent skill  
**Arguments:** `[prompt-or-llms-or-github-url]`  
**Skill Rules:**
- Token consumption efficient (progressive disclosure)
- Short, concise `SKILL.md` reference guides
- Project-scope: `.claude/skills/` (not home scope)
- Skills teach HOW to use tools, not WHAT tools do

**Inputs Supported:**
- Plain prompt describing skill
- Documentation URLs (explores all internal links)
- GitHub URLs (uses repomix for analysis)
- Multiple files/URLs (parallel exploration)

**Scopes:**
- Project-scope: `.claude/skills/` (ALWAYS)
- User-scope: `~/.claude/skills/` (rarely)

**Example:**
```bash
/skill/create "Create an email validation skill"
/skill/create https://docs.example.com/email-validation
/skill/create https://github.com/user/email-lib
```

---

#### 16. `/git/pr` - Create Pull Request
**Description:** Create a pull request  
**Arguments:** `[branch] [from-branch]`  
**Features:**
- Compares REMOTE branches (critical!)
- Analyzes actual PR content
- Auto-merges base branch if needed
- Generates conventional commit title
- Uses `gh` CLI (GitHub CLI)

**Default Branches:**
- TO_BRANCH: `main`
- FROM_BRANCH: current branch

**Process:**
1. Ensure remote synced (`git fetch`, `git push -u`)
2. Analyze remote diff (not local)
3. Generate PR title & body from remote diff
4. Create PR via `gh`

**Example:**
```bash
/git/pr
/git/pr main feature/auth
/git/pr dev
```

---

#### 17. `/test` - Run Tests
**Description:** Run tests locally and analyze summary report  
**Arguments:** None  
**Features:**
- Activates `tester` subagent
- Runs full test suite
- Analyzes results
- Reports summary

**Important:** Do NOT implement, only test & analyze  
**Example:**
```bash
/test
```

---

### Project Management Commands

#### 18. `/dashboard` - Marketing Dashboard
**Description:** Launch the Marketing Dashboard web application  
**Arguments:** `[mode]` (optional)  
**Modes:**
- `dev` (default) - Development with HMR
- `prod` - Production mode
- `build` - Build for production
- `stop` - Stop servers

**Features:**
- Campaign Board (Kanban drag-drop)
- Content Library (grid view, filters)
- Asset Gallery (link to campaigns)
- Automation Panel (recipes)
- AI-powered helpers

**URLs (Dev):**
- Frontend: http://localhost:5173
- API: http://localhost:3457
- Health: http://localhost:3457/health

**Tech Stack:** Vue 3, Vite, Pinia, Hono, SQLite  
**Example:**
```bash
/dashboard
/dashboard dev
/dashboard build
/dashboard prod
/dashboard stop
```

---

#### 19. `/persona` - Customer Persona Management
**Description:** Create and manage customer personas  
**Arguments:** `[action]`  
**Actions:**
- `create` - Create new persona
- `analyze` - Analyze audience data
- `update [name]` - Update existing persona
- `list` - List all personas

**Workflow:**
- Gather demographics, pain points, goals, behavior
- Market validation via researcher
- Segment analysis & pattern identification
- Persona profile generation

**Output:** `assets/leads/icp-profiles/{persona}.md`  
**Agents:** lead-qualifier, researcher  
**Skills:** content-marketing, assets-organizing  
**Example:**
```bash
/persona create
/persona analyze
/persona update "Tech Startup Founder"
/persona list
```

---

#### 20. `/ck-help` - ClaudeKit Usage Guide
**Description:** All-in-one ClaudeKit guide  
**Arguments:** `[category|command|task description]`  
**Features:**
- Comprehensive documentation
- Category guides (fix, plan, cook, etc.)
- Single command details
- Search results
- Task-based recommendations

**Output Types:**
- `@CK_OUTPUT_TYPE:comprehensive-docs`
- `@CK_OUTPUT_TYPE:category-guide`
- `@CK_OUTPUT_TYPE:command-details`
- `@CK_OUTPUT_TYPE:search-results`
- `@CK_OUTPUT_TYPE:task-recommendations`

**Important:** Translates non-English to English  
**Example:**
```bash
/ck-help fix
/ck-help plan
/ck-help How do I create a blog post?
/ck-help search authentication
```

---

## Command Category Breakdown

### Planning & Strategy (5)
- `/ask` - Architectural consultation
- `/bootstrap` - Project initialization
- `/brainstorm` - Collaborative design
- `/plan` - Plan creation
- `/cook` - All-in-one implementation

### Implementation (4)
- `/code` - Execute plan
- `/fix` - Fix issues (intelligent routing)
- `/scout` - Codebase search
- `/test` - Run tests

### Analytics & Reporting (2)
- `/analyze` - Analytics reports
- `/seo/audit` - SEO audit

### Content & Copy (4)
- `/write/blog` - Blog posts
- `/email` - Email content
- `/design/generate` - Image generation
- `/campaign` - Campaign management

### Management & Tools (3)
- `/dashboard` - Dashboard UI
- `/persona` - Persona management
- `/ck-help` - Help & guidance

### Development (2)
- `/skill/create` - Create skills
- `/git/pr` - Create PR

---

## Total Commands: 119

**Breakdown:**
- Main commands: 20 (sampled above)
- Subcommands: 99 (bootstrap/auto, campaign/analyze, fix/types, etc.)

**Directory Structure:**
```
.claude/commands/
├── analyze.md (+ analyze/report.md)
├── ask.md
├── bootstrap.md (+ bootstrap/auto/, bootstrap/auto/fast, parallel)
├── brainstorm.md
├── brand/update.md
├── campaign.md (+ campaign/analyze, create, email, status)
├── ck-help.md
├── code.md (+ code/auto, no-test, parallel)
├── coding-level.md
├── command/create.md
├── competitor.md
├── cook.md (+ cook/auto/, fast, parallel)
├── copy/formula.md
├── dashboard/ (+ check.md)
├── debug.md
├── design/ (7 subcommands: 3d, describe, fast, generate, good, screenshot, video)
├── docs/ (4 subcommands: init, meta/init, meta/update, summarize, update)
├── email.md (+ email/flow, sequence)
├── fix.md (+ fix/ci, fast, hard, logs, parallel, test, types, ui)
├── funnel.md
├── git/ (5 subcommands: ck, cm, cp, merge, pr)
├── integrate/ (polar, sepay)
├── journal.md
├── kanban.md
├── marketing/init.md
├── persona.md
├── plan.md (+ plan/archive, ci, cro, fast, hard, parallel, two, validate)
├── preview.md
├── review/codebase.md
├── scout.md (+ scout/ext)
├── seo.md (+ seo/audit, keywords, pseo)
├── skill/ (6 subcommands: add, create, fix-logs, optimize, optimize/auto, plan, update)
├── slides/create.md
├── social.md (+ social/schedule)
├── storage-* (4 commands: list, sync, upload, url)
├── test.md (+ test/ui, workflow)
├── use-mcp.md
├── video/ (3 subcommands: create, script/create, storyboard/create)
├── watzup.md
├── worktree.md
├── write/ (8 subcommands: audit, blog, blog/youtube, cro, enhance, fast, good, hub, publish)
└── youtube/ (3 subcommands: blog, infographic, social)
```

