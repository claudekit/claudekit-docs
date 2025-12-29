# ClaudeKit Docs

Astro v5 static docs site for ClaudeKit. Live: https://docs.claudekit.cc

## CRITICAL: Quality Gate

**MUST pass before ANY commit/PR. No exceptions.**

```bash
bun run build
```

**Build must pass before commit/PR. No exceptions.**

## Quick Commands

```bash
# Development
bun install           # Install deps
bun run dev           # Dev server → http://localhost:4321
bun run build         # Production build → dist/
bun run preview       # Preview build
```

## Key Locations

- **Content**: `src/content/docs/` (EN), `src/content/docs-vi/` (VI)
- **Components**: `src/components/` (Astro + React islands)
- **Layouts**: `src/layouts/` (BaseLayout, DocsLayout)
- **i18n**: `src/i18n/` (locales, translations, utils)
- **Config**: `src/content/config.ts` (Zod schema)
- **Docs**: `docs/` (codebase-summary, code-standards, system-architecture, project-roadmap)

## Related Projects

- **[ClaudeKit CLI](https://github.com/mrgoonie/claudekit-cli)** - CLI setup tool
  Location: `../claudekit-cli`
- **[ClaudeKit Engineer](https://github.com/claudekit/claudekit-engineer)** - Engineering toolkit
  Location: `../claudekit-engineer`
- **[ClaudeKit Marketing](https://github.com/claudekit/claudekit-marketing)** - Marketing toolkit
  Location: `../claudekit-marketing`
- **[ClaudeKit](https://github.com/mrgoonie/claudekit)** - Main website
  Location: `../claudekit`

## Adding Documentation

1. Create markdown file: `src/content/docs/<category>/<slug>.md`
2. Add frontmatter:
```yaml
---
title: "Page Title"
description: "SEO description (150-160 chars)"
category: "getting-started"  # See valid categories below
order: 1                      # Lower = higher in nav
published: true
---
```
3. Dev server auto-reloads
4. Optionally add Vietnamese: `src/content/docs-vi/<category>/<slug>.md`

## Valid Categories

From `src/content/config.ts`:
- `getting-started`, `cli`, `core-concepts`, `agents`, `commands`, `skills`, `use-cases`, `troubleshooting`, `components`

**Note**: `troubleshooting` category exists in schema but missing from SidebarNav.astro (known issue).

## File Routes

- `src/content/docs/getting-started/intro.md` → `/docs/getting-started/intro`
- `src/content/docs-vi/getting-started/intro.md` → `/vi/docs/getting-started/intro`

## CRITICAL: Link Guidelines

**ALWAYS use absolute paths for internal links. NEVER use relative paths.**

```markdown
# ✅ CORRECT - Absolute paths
[Quick Start](/docs/getting-started/quick-start)
[Commands](/docs/commands)

# ❌ WRONG - Relative paths (WILL BREAK)
[Quick Start](./quick-start)
[Commands](../docs/engineer/commands/)
```

**Why:** Relative links resolve differently based on trailing slash in URL:
- `/docs/getting-started` + `./quick-start` → `/docs/quick-start` (404!)
- `/docs/getting-started/` + `./quick-start` → `/docs/getting-started/quick-start` (works)

Since Astro serves URLs without trailing slashes by default, relative links break.

**When moving docs:** Search for the old path and update all references:
```bash
grep -r "/docs/old/path" src/content/docs/
```

## Tech Stack

- **Astro v5.14.6**: SSG with islands architecture
- **React 18.3.1**: Interactive components (AIChat, LanguageSwitcher)
- **TypeScript 5.7.3**: Strict mode
- **Tailwind CSS 3.4**: Utility-first + CSS variables
- **Radix UI**: Accessible components
- **Bun**: Package manager & runtime

## Design System

- **Theme**: One Dark Pro (dark mode only)
- **CSS Variables**: `src/styles/global.css` (--color-*, --space-*, --text-*)
- **Fonts**: Inter (body), Geist Mono (code)
- **Inspiration**: Polar docs aesthetics

## i18n

- **Default**: `en` (no prefix)
- **Vietnamese**: `vi` (prefix: `/vi/`)
- **UI Strings**: `src/i18n/ui.ts` (18 keys × 2 locales)
- **Workflow**: Create EN first, mirror structure in `docs-vi/`, translate

## Git Workflow

```bash
# Feature branch from dev
git checkout dev && git pull origin dev
git checkout -b kai/<feature>

# After work complete
bun run build
git push origin kai/<feature>
# Create PR to dev branch
```

## Commit Convention

- `feat:` → minor version bump
- `fix:` → patch version bump
- `docs:`, `refactor:`, `test:`, `chore:` → no version bump

## Known Issues / TODOs

- [ ] AI chat backend not connected (UI only)
- [ ] Search not implemented (Pagefind planned)
- [ ] Sidebar flat nav (commands nested but shown flat)
- [ ] `troubleshooting` category missing from SidebarNav

## Deployment

- **Docker**: Multi-stage build, node:20-alpine
- **K8s**: `k8s/` manifests (deployment, service, ingress, configmap)
- **Static**: Can deploy to Vercel, Netlify, Cloudflare Pages

## Documentation

See `docs/` directory:
- `codebase-summary.md`: Complete overview, 194 pages, 9 categories
- `code-standards.md`: Naming conventions, file org, component patterns
- `system-architecture.md`: SSG + islands architecture, build/runtime layers
- `project-roadmap.md`: Status, phases, known issues, goals
- `design-guidelines.md`: Design system specs (49KB)
- `deployment-guide.md`: Production deployment
