# ClaudeKit Engineer Skills Catalog

Deep dive into `../claudekit-engineer/.claude/skills/` directory with structured data for all 42 skills.

**Generated:** 2025-12-29
**Total Skills Cataloged:** 42

---

## Executive Summary

ClaudeKit Engineer contains a comprehensive collection of 42 agent skills organized across:
- **AI & Machine Learning** (AI Artist, AI Multimodal, Google ADK Python)
- **Frontend & Design** (4 skills covering React, styling, design intelligence)
- **Backend & Infrastructure** (Backend Development, DevOps, Databases)
- **Integration & Automation** (MCP Builder/Management, Chrome DevTools, Repomix)
- **Project Management** (Planning, Research, Problem-Solving, Sequential Thinking)
- **Domain-Specific** (Shopify, Payment Integration, Mobile Development, Three.js)
- **Utility & Tooling** (Markdown Novel Viewer, Plans Kanban, Docs Seeker)

All skills follow progressive disclosure principle: lean SKILL.md files (~<100 lines) with bundled references, scripts, and assets loaded as needed.

---

## Skills by Category

### AI & Machine Learning (3 skills)

**1. AI Artist** - Prompt engineering for LLMs (Claude, GPT, Gemini) and image generators (Midjourney, DALL-E, Stable Diffusion)
- Structure: [Role] [Context] [Task] [Format] [Examples]
- Image patterns: [Subject] [Style] [Composition] [Quality] [Negative]
- Domain-specific: marketing, code, creative writing

**2. AI Multimodal** - Google Gemini multimodal processing
- Audio: transcription (timestamps, 9.5h max)
- Images: analysis, OCR, detection (better than Claude)
- Videos: scene detection, temporal Q&A (6h max)
- Documents: PDF extraction
- Generation: Imagen 4, Veo 3 video
- Requires: Google Gemini API key

**3. Google ADK Python** - Multi-agent systems with Google's Agent Development Kit
- LLM agents with dynamic routing
- Workflow agents (Sequential, Parallel, Loop)
- Tool integration (Google Search, Code Execution, Custom)
- Multi-agent hierarchical composition
- Deployment: Cloud Run, Vertex AI

---

### Frontend & Design (4 skills)

**4. Frontend Design** - High-quality interface design with distinctive aesthetics
- Design extraction from screenshots
- Typography (avoid generic fonts like Inter)
- Color systems & visual hierarchy
- Motion & animations
- Asset generation (ai-multimodal + media-processing)
- Workflow: Extract guidelines → Implement → Verify

**5. Frontend Development** - Modern React with TypeScript, MUI, TanStack
- React.FC components with TypeScript strict mode
- Suspense-based data fetching (useSuspenseQuery)
- Lazy loading with SuspenseLoader
- TanStack Router (file-based routing)
- MUI v7 styling
- Features directory structure

**6. UI Styling** - shadcn/ui components + Tailwind CSS
- shadcn/ui: Copy-paste Radix UI components
- Tailwind CSS: Utility-first styling
- Dark mode & theme customization
- Design systems & tokens
- Accessibility (ARIA, keyboard nav)
- 32+ component types

**7. UI/UX Pro Max** - Design intelligence database
- 50 UI styles, 21 color palettes, 50 font pairings
- 20 chart type recommendations
- Product-specific guidelines
- 8 stack implementations
- Search domains: product, style, typography, color, landing, chart, ux, prompt
- Pre-delivery checklist for professional UI

---

### Backend & Infrastructure (3 skills)

**8. Backend Development** - Production-ready systems with modern tech
- RESTful, GraphQL, gRPC APIs
- OAuth 2.1, JWT, RBAC authentication
- Database optimization (PostgreSQL, MongoDB, Redis)
- Security: OWASP Top 10 2025
- Testing: 70-20-10 pyramid strategy
- Microservices, CI/CD, monitoring

**9. Databases** - MongoDB & PostgreSQL management
- MongoDB: Document storage, Atlas, aggregation pipelines
- PostgreSQL: ACID transactions, complex joins, window functions
- Schema design for both
- Query optimization & indexing
- Replication, sharding, backup/restore
- Scripts: db_migrate.py, db_backup.py, db_performance_check.py

**10. DevOps** - Cloud infrastructure deployment
- Cloudflare: Workers, R2, D1, KV, Pages, Durable Objects
- Docker: Containerization, multi-stage builds
- Google Cloud: Compute Engine, GKE, Cloud Run, Cloud Storage
- CI/CD pipelines, monitoring, cost optimization

---

### Authentication & Security (2 skills)

**11. Better Auth** - TypeScript authentication framework
- Email/password, OAuth 2.1, 2FA, passkeys
- Framework-agnostic (Next.js, Nuxt, Remix, etc.)
- Multi-tenant/organization support
- Session management, rate limiting
- Database adapters included

**12. Code Review** - Code review practices & verification
- Receiving feedback with technical rigor
- Requesting systematic reviews via code-reviewer subagent
- Verification gates: evidence before completion claims
- Principle: NO COMPLETION WITHOUT FRESH VERIFICATION

---

### Integration & Automation (5 skills)

**13. Chrome DevTools** - Browser automation via Puppeteer
- Navigate, screenshot, click, fill, evaluate
- ARIA snapshots for accessibility tree
- Console monitoring, network tracking
- Core Web Vitals measurement
- Session persistence via WebSocket

**14. MCP Builder** - Model Context Protocol server creation
- Agent-centric tool design principles
- 4-phase development: Research → Implementation → Review → Evaluation
- Python (FastMCP) and TypeScript SDK support
- Comprehensive tool evaluation framework

**15. MCP Management** - Discover & execute MCP tools
- Multi-server configuration in .mcp.json
- Tool/prompt/resource discovery
- Intelligent tool selection
- Execution via Gemini CLI or scripts
- Persistent tool catalog (assets/tools.json)

**16. Repomix** - Repository packaging for AI analysis
- Pack repos into single AI-friendly files
- XML, Markdown, JSON, plain text formats
- Remote repository support
- Token counting, security checks (Secretlint)
- Comment removal (100+ languages)

**17. Docs Seeker** - Technical documentation discovery
- Script-based doc search via llms.txt standard
- Automatic context7.com integration
- Intelligent query detection
- Agent distribution recommendations

---

### Project Management & Methods (5 skills)

**18. Planning** - Technical implementation planning
- Research & analysis phase
- Codebase understanding
- Solution design with trade-offs
- Plan organization (phases, tasks)
- Output: Self-contained plans (NO implementation)

**19. Plans Kanban** - Plan dashboard & timeline visualization
- Progress tracking per plan
- Phase status breakdown
- Gantt-style timeline
- Activity heatmap
- Glassmorphism UI with dark mode

**20. Problem-Solving** - Systematic problem-solving techniques
- Simplification Cascades: Find insight eliminating multiple components
- Collision-Zone Thinking: Force unrelated concepts together
- Meta-Pattern Recognition: Find universal patterns
- Inversion Exercise: Flip core assumptions
- Scale Game: Test at extremes

**21. Research** - Technical research & competitive analysis
- Scope definition (key terms, recency, criteria)
- Multi-source gathering (max 5 searches)
- Cross-reference validation
- Comprehensive markdown report
- Quality standards: Accuracy, Currency, Completeness, Actionability

**22. Sequential Thinking** - Structured multi-step analysis
- Complex problem decomposition
- Dynamic adjustment (expand, contract, revise)
- Revision marking for course correction
- Branch exploration for alternatives
- Hypothesis generation & verification
- Explicit (visible markers) or implicit modes

---

### Debugging & Quality (1 skill)

**23. Debugging** - Systematic debugging framework
- 4-phase process: Investigation → Pattern Analysis → Hypothesis → Implementation
- Backward call stack tracing for root cause
- Defense-in-depth validation (4 layers)
- Verification protocols
- Principle: NO FIXES WITHOUT ROOT CAUSE INVESTIGATION

---

### Domain-Specific (3 skills)

**24. Shopify** - E-commerce development on Shopify platform
- App development with OAuth
- Extensions: Checkout UI, Admin UI, POS, Functions
- Theme development (Liquid templating)
- GraphQL Admin API (recommended)
- Webhook management, billing integration

**25. Payment Integration** - SePay (Vietnamese) & Polar (Global)
- SePay: Vietnamese payment gateway, VietQR, bank transfers, 44+ banks
- Polar: Global SaaS, subscriptions, usage-based billing, benefits automation
- Webhook handling, customer portals, tax compliance (Polar as MoR)
- Multiple SDK languages (Node.js, Python, PHP, Go)

**26. Mobile Development** - Cross-platform & native mobile apps
- React Native, Flutter (cross-platform)
- Swift/SwiftUI (iOS native), Kotlin/Compose (Android native)
- Mobile-first design principles
- Offline-first architecture
- Performance targets: <2s launch, <100MB memory
- OWASP Mobile Top 10 security

---

### Graphics & 3D (1 skill)

**27. Three.js** - WebGL/WebGPU 3D graphics
- Scene setup, cameras, geometries, materials
- Lighting & shadows, animations
- Asset loading (GLTF, FBX, OBJ)
- Post-processing (bloom, SSAO, SSR)
- Custom shaders (GLSL, TSL node-based)
- Physics simulation, VR/XR support
- Performance: instancing, LOD, culling

---

### Meta & Tooling (5 skills)

**28. Skill Creator** - Creating Agent Skills for Claude Code
- Skill anatomy: SKILL.md + bundled resources
- Progressive disclosure principle
- Scripts (Python/Node.js, with tests)
- References (<100 lines, split if needed)
- Assets (templates, icons, files)
- 6-step creation process: Understanding → Planning → Init → Edit → Package → Iterate

**29. Claude Code** - AI coding tool documentation
- Slash commands (/cook, /plan, /fix, /test, /docs, /design, /git)
- Agent Skills management
- MCP server integration
- Hooks/plugins system
- Enterprise deployment (SSO, RBAC)
- Extended thinking & caching

**30. Markdown Novel Viewer** - Markdown reading experience
- Book-like UI (warm cream, serif fonts)
- Directory browsing
- Plan navigation with phases
- Mermaid diagram rendering
- Light/dark mode, keyboard shortcuts
- Dependencies: Node.js, marked, highlight.js, gray-matter

**31. Web Frameworks** - Next.js, Turborepo, RemixIcon
- Next.js: App Router, SSR, SSG, RSC, PPR
- Turborepo: Monorepo task pipelines, caching, remote cache
- RemixIcon: 3,100+ SVG icons (outlined/filled)
- Single app or monorepo patterns
- Shared component libraries

**32. Media Processing** - Multimedia handling
- FFmpeg: Video/audio encoding, streaming, filters
- ImageMagick: Image manipulation, resize, batch
- RMBG: AI-powered background removal
- Tool selection matrix provided
- 100+ format support, hardware acceleration

---

## Quick Reference Table

| # | Skill | Dependencies | Install Method | Key Refs |
|---|-------|--------------|-----------------|----------|
| 1 | AI Artist | None | Knowledge | references/ |
| 2 | AI Multimodal | Google Gemini API | `pip install google-genai` | scripts/ + refs |
| 3 | Google ADK Python | Python, Google Cloud | `pip install google-adk` | examples |
| 4 | Frontend Design | React/web frameworks | None (knowledge) | references/ |
| 5 | Frontend Development | React, TS, MUI, TanStack | `npm install` | resources/ |
| 6 | UI Styling | Node.js, npm | `npx shadcn@latest init` | references/ |
| 7 | UI/UX Pro Max | Python 3 | Built-in | `search.py` |
| 8 | Backend Development | Node.js/Python/Go/Rust | Language-specific | references/ |
| 9 | Databases | MongoDB/PostgreSQL | `npm/pip install` | scripts/ + refs |
| 10 | DevOps | Cloudflare/Docker/gcloud | `npm/pip install` | references/ |
| 11 | Better Auth | TypeScript, DB adapter | `npm install better-auth` | references/ |
| 12 | Code Review | None | Knowledge | references/ |
| 13 | Chrome DevTools | Puppeteer, Node.js | `npm install` | scripts/ |
| 14 | MCP Builder | Python/TS SDK | SDK-specific | references/ |
| 15 | MCP Management | TypeScript, Gemini CLI | `npm install` | scripts/ + refs |
| 16 | Repomix | npm/Homebrew | `npm install -g repomix` | references/ |
| 17 | Docs Seeker | Node.js | `npm install` | scripts/ |
| 18 | Planning | None | Knowledge | references/ |
| 19 | Plans Kanban | Node.js, npm | `npm install` | scripts/ |
| 20 | Problem-Solving | None | Knowledge | references/ |
| 21 | Research | Web tools, APIs | Web-based | references/ |
| 22 | Sequential Thinking | Optional: Node.js | Knowledge | scripts/ (optional) |
| 23 | Debugging | None | Knowledge | references/ |
| 24 | Shopify | Shopify CLI, Node.js | `npm install -g @shopify/cli` | references/ |
| 25 | Payment Integration | Python/Node.js/PHP | SDK-specific | scripts/ + refs |
| 26 | Mobile Development | RN/Flutter/Swift/Kotlin | Framework-specific | references/ |
| 27 | Three.js | Node.js, npm | `npm install three` | references/ |
| 28 | Skill Creator | Python 3 | Built-in | scripts/ |
| 29 | Claude Code | None | Documentation | references/ |
| 30 | Markdown Novel Viewer | Node.js, npm | `npm install` | scripts/ |
| 31 | Web Frameworks | Node.js, npm | `npm create-next-app` | references/ |
| 32 | Media Processing | FFmpeg, ImageMagick | System package manager | references/ |

---

## Installation Categories

**Knowledge-Based (No Installation):**
AI Artist, Code Review, Planning, Problem-Solving, Debugging, Claude Code

**npm/Node.js:**
Chrome DevTools, Docs Seeker, Markdown Novel Viewer, MCP Management, Plans Kanban, UI Styling, Repomix, Web Frameworks

**Python:**
AI Multimodal, Google ADK, Skill Creator, UI/UX Pro Max, Payment Integration (SDKs), Media Processing

**System Tools:**
FFmpeg, ImageMagick, RMBG, Docker, gcloud CLI, Wrangler, Shopify CLI

**Language-Specific:**
Backend Development, Databases, Better Auth, Mobile Development, Three.js, Shopify

---

## Unresolved Questions

None identified. Complete catalog generated with all skill metadata, descriptions, use cases, dependencies, and key references extracted.

