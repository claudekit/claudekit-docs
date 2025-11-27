# Project Roadmap

**Last Updated**: 2025-11-25
**Version**: 0.0.1
**Project**: claudekit-docs

## Current Status

**Phase**: MVP (Minimum Viable Product)
**Live**: Not yet deployed to production
**Development**: Active

### Completed Features ✅

**Content** (October 2025):
- 97 English documentation pages
- 97 Vietnamese translations
- 9 content categories
- 14 agent pages
- 25 command pages
- 15 skill pages
- 10 use case tutorials
- 6 troubleshooting guides

**Infrastructure**:
- Astro v5.14.6 setup
- TypeScript strict mode
- Tailwind CSS integration
- Docker containerization
- Kubernetes manifests (deployment, service, ingress, configmap)
- Multi-stage Docker build
- Bi-lingual i18n system (EN/VI)

**UI/UX**:
- Responsive 3-column layout
- Collapsible sidebar navigation
- One Dark Pro-inspired design
- AI chat UI (no backend)
- Language switcher
- Active page highlighting

**Documentation**:
- Codebase summary
- Code standards
- System architecture
- Design guidelines
- Deployment guide
- Project overview PDR

### In Progress 🔄

- Production deployment to docs.claudekit.cc
- Documentation updates (this file, README, CLAUDE.md optimization)

### Known Issues 🐛

1. **P0 - AI Chat Backend**: UI complete, OpenRouter integration pending
2. **P0 - Search**: Not implemented (Pagefind planned)
3. **P1 - Sidebar Hierarchy**: Commands show flat, need nested nav for `/commands/fix/*`, `/commands/design/*` etc.
4. **P1 - Missing Category**: `troubleshooting` defined in schema but not in SidebarNav.astro categories object
5. **P2 - Vietnamese Sync**: Some docs may be out of sync with English
6. **P2 - No Breadcrumbs**: Users can't see current location in hierarchy
7. **P2 - No Theme Toggle**: Dark mode only (no light theme)

## Roadmap

### Phase 1: Production Ready (Q4 2025)

**Goal**: Deploy to production, core functionality stable

**Priority 0** (Blocking deployment):
- [ ] Deploy to docs.claudekit.cc (K8s cluster)
- [ ] Configure TLS/SSL with cert-manager
- [ ] Setup monitoring (uptime, errors)
- [ ] Test all pages load correctly
- [ ] Verify mobile responsiveness

**Priority 1** (Critical):
- [ ] Implement Pagefind search
  - Index all 194 pages
  - Search UI in header
  - Filter by category
  - Keyboard shortcuts (Cmd+K)
- [ ] Fix missing `troubleshooting` category in SidebarNav
- [ ] Add breadcrumbs navigation
- [ ] Verify all internal links work
- [ ] Fix any broken images

**Priority 2** (Important):
- [ ] Add GitHub edit button (contribute workflow)
- [ ] Setup analytics (Plausible)
- [ ] Improve mobile navigation (hamburger menu)
- [ ] Add "Copy code" button to code blocks
- [ ] Table of contents (on-page navigation)

**Estimated Completion**: December 2025

### Phase 2: Enhanced Features (Q1 2026)

**Goal**: AI backend, improved navigation, better UX

**AI Integration**:
- [ ] OpenRouter API backend
  - Create `/api/chat` endpoint (Astro server route)
  - Stream responses via SSE
  - Context: Include current page + search results
  - Model: Claude Sonnet 4 default
- [ ] AI chat features
  - Message history persistence (localStorage)
  - Context awareness (page-specific)
  - Code example generation
  - Export conversation
- [ ] Rate limiting (prevent abuse)

**Navigation Improvements**:
- [ ] Hierarchical sidebar navigation
  - Nested categories (commands/fix/, commands/design/)
  - Expand/collapse sub-sections
  - Remember state per section
- [ ] Command palette (Cmd+K)
  - Quick page navigation
  - Search commands
  - Recent pages
- [ ] Related pages suggestions (bottom of each doc)

**Content Quality**:
- [ ] Sync Vietnamese translations with English
- [ ] Add missing skill documentation (42 remaining)
- [ ] Add missing command documentation (5 remaining)
- [ ] Interactive code examples (sandboxes)
- [ ] Video tutorials (embed YouTube)

**Estimated Completion**: March 2026

### Phase 3: Community & Polish (Q2 2026)

**Goal**: Community contributions, theme customization, analytics

**Community Features**:
- [ ] GitHub edit workflow
  - "Edit this page" button
  - Fork, edit, PR flow
  - Contributor guidelines
- [ ] Feedback widget (helpful/not helpful)
- [ ] Discussion integration (GitHub Discussions)
- [ ] Community showcase (user projects)

**Customization**:
- [ ] Light/dark theme toggle
  - System preference detection
  - Manual override
  - Smooth transition
- [ ] Font size adjustment
- [ ] Code theme selection (One Dark Pro, GitHub, Dracula)
- [ ] Sidebar width adjustment

**Performance**:
- [ ] Lazy load images (below fold)
- [ ] Prefetch visible links
- [ ] CDN integration (CloudFlare)
- [ ] Service worker (offline support)
- [ ] Performance monitoring (Core Web Vitals)

**Analytics & Monitoring**:
- [ ] Plausible analytics
  - Page views
  - Popular pages
  - Search queries
  - Referrers
- [ ] Error tracking (Sentry)
- [ ] User feedback collection
- [ ] A/B testing framework

**Estimated Completion**: June 2026

### Phase 4: Advanced Features (Q3 2026)

**Goal**: Versioned docs, multi-language, advanced search

**Versioned Documentation**:
- [ ] Multi-version support (v1, v2, latest)
- [ ] Version selector dropdown
- [ ] Archive old versions
- [ ] Migration guides between versions
- [ ] Version-specific search

**Multi-Language Expansion**:
- [ ] Spanish (ES) translation
- [ ] French (FR) translation
- [ ] German (DE) translation
- [ ] Chinese (ZH) translation
- [ ] Translation management system
- [ ] Auto-sync detection (flag outdated translations)

**Advanced Search**:
- [ ] Filters (category, type, date)
- [ ] Faceted search
- [ ] Search suggestions (autocomplete)
- [ ] Search analytics (improve content)
- [ ] Semantic search (AI-powered)

**Content Enhancements**:
- [ ] Interactive tutorials (step-by-step)
- [ ] Code playground (live execution)
- [ ] Diagram generation (mermaid)
- [ ] API reference (auto-generated)
- [ ] Changelog integration

**Estimated Completion**: September 2026

### Phase 5: Enterprise & Scale (Q4 2026)

**Goal**: Enterprise features, high availability, advanced AI

**Enterprise Features**:
- [ ] Custom domains (white-label)
- [ ] SSO integration
- [ ] Private documentation sections
- [ ] Team collaboration features
- [ ] Usage analytics dashboard

**High Availability**:
- [ ] Multi-region deployment
- [ ] Auto-scaling (10+ replicas)
- [ ] CDN edge caching
- [ ] 99.9% uptime SLA
- [ ] Disaster recovery plan

**Advanced AI**:
- [ ] Personalized recommendations
- [ ] Auto-generated summaries
- [ ] Code review assistance
- [ ] Smart content suggestions
- [ ] Multi-model support (GPT-4, Gemini)

**Performance at Scale**:
- [ ] Incremental builds (< 1min for single page)
- [ ] Edge rendering (SSR at edge)
- [ ] Progressive Web App (PWA)
- [ ] Offline mode (full docs cached)

**Estimated Completion**: December 2026

## Future Considerations

**Beyond 2026**:
- Mobile app (iOS/Android)
- Voice search/navigation
- AR/VR documentation experience
- AI-powered content generation
- Real-time collaboration (multi-user editing)

## Metrics & Goals

### Traffic Goals

**Q4 2025**:
- 1,000 unique visitors/month
- 10,000 page views/month
- Avg session: 3 min
- Bounce rate: < 60%

**Q1 2026**:
- 5,000 unique visitors/month
- 50,000 page views/month
- Avg session: 5 min
- Bounce rate: < 50%

**Q2 2026**:
- 10,000 unique visitors/month
- 100,000 page views/month
- Avg session: 6 min
- Bounce rate: < 45%

### Content Goals

**Q4 2025**:
- 100 pages (97 done ✅)
- 2 locales (EN, VI) ✅
- Complete all skill docs (15/42 done)

**Q1 2026**:
- 150 pages
- 2 locales
- Complete all command docs (25/30 done)

**Q2 2026**:
- 200 pages
- 3 locales (add ES)
- Interactive tutorials (10+)

**Q3 2026**:
- 300 pages
- 5 locales (add FR, DE, ZH)
- Video tutorials (20+)

### Performance Goals

**All Phases**:
- Lighthouse score: 95+ (all categories)
- FCP: < 1.5s
- LCP: < 2.5s
- TTI: < 3.0s
- CLS: < 0.1

## Dependencies

**External**:
- OpenRouter API availability
- Pagefind compatibility with Astro v5
- K8s cluster access for deployment
- Domain configuration (docs.claudekit.cc)

**Internal**:
- ClaudeKit CLI development (content references)
- ClaudeKit Engineer updates (agent/command docs)
- Design system finalization

## Resources Required

**Phase 1** (Q4 2025):
- 1 developer (20 hours)
- K8s cluster resources (minimal)
- Domain + SSL cert (Let's Encrypt)

**Phase 2** (Q1 2026):
- 1 developer (40 hours)
- OpenRouter API credits ($50/month est.)
- Analytics tool (Plausible: $9/month)

**Phase 3** (Q2 2026):
- 1-2 developers (60 hours)
- CDN costs (Cloudflare: free tier)
- Error tracking (Sentry: $26/month)

**Phase 4+** (Q3-Q4 2026):
- 2 developers (80+ hours)
- Translation services ($0.10/word × 50K words = $5K)
- Infrastructure scaling (est. $100/month)

## Risk Assessment

**Technical Risks**:
- Astro v5 breaking changes (medium)
- OpenRouter API rate limits (medium)
- Pagefind indexing performance with 1000+ pages (low)
- Build time increases with content growth (medium)

**Business Risks**:
- Low traffic/adoption (medium)
- Competition from existing doc sites (low)
- Maintenance burden with multi-language (high)

**Mitigation Strategies**:
- Pin Astro version, test upgrades carefully
- Implement caching, rate limiting for OpenRouter
- Monitor build times, optimize if needed
- Prioritize EN content, translate incrementally
- Focus on unique AI features to differentiate

## Success Criteria

**Phase 1**:
- Site live at docs.claudekit.cc ✅
- All 194 pages accessible ✅
- Search functional ✅
- < 3s page load (95th percentile) ✅
- Zero critical bugs ✅

**Phase 2**:
- AI chat 90% positive feedback
- 50+ daily active users
- 5+ community contributions/month
- < 2s page load

**Phase 3**:
- 100+ daily active users
- 10+ community contributions/month
- 4.5+ star rating (if applicable)
- 99.5% uptime

## Changelog

### 2025-11-25
- Initial roadmap created
- Defined phases 1-5
- Set metrics and goals
- Identified known issues

## See Also

- [Codebase Summary](./codebase-summary.md)
- [System Architecture](./system-architecture.md)
- [Project Overview PDR](./project-overview-pdr.md)
