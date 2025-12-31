# Multi-Product Documentation Architecture Research
**Date**: 2025-12-29 | **Status**: Complete | **Tokens**: 5 calls max

---

## 1. Kit/Product Switching Patterns

**Stripe Model (3-tier)**: Use-case-first entry → Product categories (Payments, Revenue, Money Management, Prebuilt) → Individual product docs. Hierarchical grouping by business function, not tech similarity.

**Vercel/Supabase Pattern**: Horizontal top bar + vertical sidebar dual navigation. Primary nav handles broad categories; sidebar shows nested product docs. Separation of concerns: what you're doing (top nav) vs where you are (sidebar).

**Key Principle**: Product switching requires *context preservation*—users shouldn't lose their position when switching kits. Sidebar reflects current kit, breadcrumbs show path, top-level nav for switching.

---

## 2. URL Structure Best Practices

**Option A (Canonical)**: `/docs/<kit>/<category>/<page>`
- Pros: SEO-friendly, URL mirrors navigation, clear kit boundaries
- Cons: Longer URLs, kit context always required

**Option B (Category-First)**: `/docs/<category>/<page>` + kit as query param/metadata
- Pros: Shorter URLs, shared categories work at single path
- Cons: Ambiguous without context, harder to enforce kit-specific content

**Critical Finding** (per SEO research): URL structure *doesn't* impact site understanding—**internal link structure matters 100x more**. Relative links break when trailing-slash behavior differs. **Always use absolute paths**.

**Stripe Approach**: Flat routing within each category, product context from navigation state, not URL.

---

## 3. Navigation Patterns

**Sidebar Organization**:
- Automatic generation from file structure (platformOS, Starlight, MkDocs)
- Slug-based frontmatter for custom ordering (DocsKit model)
- Ability to disable branch filtering to show all topics (improves cross-kit discovery)

**Product Switcher** (Recommended):
- Horizontal menu above sidebar showing available kits
- Remembers last visited kit (localStorage)
- Smooth transition without page reload (spa-style)

**Breadcrumbs**: Show full path including kit name, helps users understand context depth.

**Multi-Level Navigation**: Top bar for products/kits → Sidebar for current kit topics → Nested items for subtopics.

---

## 4. Content Reuse Strategy

**No Duplication Approach**:
- Shared content in `/content/docs/shared/` (concepts, fundamentals, setup)
- Kit-specific overlays: `/content/docs/kit-a/`, `/content/docs/kit-b/`
- Use frontmatter includes or component-level content composition

**Link Strategy** (Critical):
- Links to shared content: absolute paths to `/docs/shared/<topic>`
- Links to kit-specific content: `/docs/<kit>/<topic>`
- Generate redirect/alias pages if moving content between kits

**Content Management** (Sanity, Pimcore model):
- Document-level translations (one doc, multiple languages)
- Field-level overrides (kit A uses different description than kit B)
- Fallback language system (if kit-B-VI missing, use kit-B-EN)

**Headless CMS Pattern**: Store structured content separately, render across multiple kit variants without duplication.

---

## 5. i18n with Multi-Kit Strategy

**Architecture**: **Language-first, then kit-second** routing:
- `/docs/<topic>` (EN default, no prefix)
- `/vi/docs/<topic>` (Vietnamese, with prefix)
- Each language mirrors full kit structure

**Implementation (Astro Model)**:
- Routing API generates all locale variants automatically
- File structure: `docs/` (EN) + `docs-vi/` (VI)
- UI strings in centralized locale files (`ui.ts` with 2+ locales)
- Build-time generation of all language+kit combinations

**Shared Content in i18n**:
- Shared content lives in language-specific folders but single source
- Kit-specific variations: `/docs-vi/kit-a/` overrides `/docs-vi/shared/`
- Translation fallbacks: if `/docs-vi/page` missing, don't fall back to `/docs/page` (wrong language), fail gracefully

**Library Recommendations** (per research):
- **Astro i18n Routing API** (built-in, perfect for static docs)
- **next-intl** (Next.js-specific, excellent TypeScript support)
- **react-i18next** (most popular, works with any React framework)
- Plan early—retrofit i18n later 2-3x more costly

---

## 6. Implementation Recommendations for ClaudeKit

**Phase 1**: Adopt kit-aware sidebar nav (CLI, Engineer, Marketing as separate products)
- URL: `/docs/cli/`, `/docs/engineer/`, `/docs/marketing/`
- Single shared content pool for reusable topics
- Product switcher in top nav

**Phase 2**: Extend i18n to multi-kit (currently only `/vi/docs` supported)
- Build `/docs/cli/`, `/vi/docs/cli/` structure
- Share UI strings across all kits

**Phase 3**: Implement smart content includes to eliminate duplication
- Use Astro components or frontmatter includes
- Document canonical source for each topic

**Tech Stack Fit**: Astro v5 + routing API perfectly suited for this—no additional dependencies needed beyond current i18n setup.

---

## Key Patterns Summary

| Pattern | Stripe | Vercel | Starlight/Astro |
|---------|--------|--------|-----------------|
| Product Nav | Category grouping | Sidebar per product | Automatic from FS |
| URL Structure | Flat per category | Product prefix | Kit prefix |
| Switcher | Top-level browse | Dropdown/breadcrumb | Manual or automatic |
| i18n Strategy | Language prefix + product | Per-product i18n | Language prefix + auto routing |
| Content Reuse | Minimal (product-specific) | Shared content repos | File-level composition |

---

## Unresolved Questions

1. **Should breadcrumbs show kit name?** (UX: yes, helps context; SEO: neutral)
2. **Preferred kit switcher placement?** (Top-right dropdown vs sticky sidebar header)
3. **Fallback for missing kit-specific i18n content?** (Fail gracefully? English default? Kit-only content?)
4. **Search scope** (search all kits or current kit only by default?)

---

## Sources

- [Stripe Documentation Organization](https://docs.stripe.com/)
- [Astro Internationalization Guide](https://docs.astro.build/en/guides/internationalization/)
- [platformOS DocsKit Navigation](https://docskit.platformos.com/documentation/navigation/)
- [Starlight Sidebar Documentation](https://starlight.astro.build/guides/sidebar/)
- [Material for MkDocs Navigation Setup](https://squidfunk.github.io/mkdocs-material/setup/setting-up-navigation/)
- [I'd Rather Be Writing: Doc Navigation Best Practices](https://idratherbewriting.com/files/doc-navigation-wtd/design-principles-for-doc-navigation/)
- [next-intl Documentation](https://next-intl.dev/)
- [Redocly Sidebar Navigation](https://redocly.com/docs/developer-portal/configuration/sidebar-nav/)
- [Complete Guide to Multilingual Support in React i18n](https://www.zignuts.com/blog/complete-guide-multilingual-support-react-i18n)
- [Intlayer Internationalization Definition](https://intlayer.org/blog/what-is-internationalization)
