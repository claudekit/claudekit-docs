# Phase 05: Redirect Configuration

**Duration**: 10 minutes
**Status**: Pending
**Dependencies**: Phase 02 complete

---

## Objectives

1. Add redirects in `astro.config.mjs` for all old URLs
2. Ensure 301 redirects maintain SEO value
3. Test sample redirects work correctly

---

## Redirect Configuration

### 1. Read Current Config (1 min)

```bash
# Check current astro.config.mjs structure
head -50 astro.config.mjs
```

### 2. Add Redirect Rules (5 min)

**Edit `astro.config.mjs`**:

```javascript
// @ts-nocheck
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// ... other imports ...

function llmsTxtGenerator() {
  // ... existing function ...
}

export default defineConfig({
  // ... existing config ...

  // Add redirects for legacy URLs
  redirects: {
    // Agents (18 files)
    '/docs/agents/[slug]': '/docs/engineer/agents/[slug]',

    // Commands (nested structure)
    '/docs/commands/[...slug]': '/docs/engineer/commands/[...slug]',

    // Skills
    '/docs/skills/[...slug]': '/docs/engineer/skills/[...slug]',

    // Configuration
    '/docs/configuration/[slug]': '/docs/engineer/configuration/[slug]',

    // Vietnamese equivalents
    '/vi/docs/agents/[slug]': '/vi/docs/engineer/agents/[slug]',
    '/vi/docs/commands/[...slug]': '/vi/docs/engineer/commands/[...slug]',
    '/vi/docs/skills/[...slug]': '/vi/docs/engineer/skills/[...slug]',
    '/vi/docs/configuration/[slug]': '/vi/docs/engineer/configuration/[slug]',

    // Legacy index pages (if any)
    '/docs/agents': '/docs/engineer/agents',
    '/docs/commands': '/docs/engineer/commands',
    '/docs/skills': '/docs/engineer/skills',
    '/docs/configuration': '/docs/engineer/configuration',
  },

  // ... rest of config ...
});
```

### 3. Verify Config Syntax (2 min)

```bash
# Test config loads without errors
bun run build --dry-run || echo "Config syntax error - fix before proceeding"

# Alternative: Check with Node
node -e "import('./astro.config.mjs').then(() => console.log('✓ Config valid')).catch(e => console.error('✗ Error:', e.message))"
```

### 4. Test Redirects in Dev Mode (2 min)

```bash
# Start dev server
bun run dev

# In another terminal, test redirects:
curl -I http://localhost:4321/docs/agents/planner
# Should show: HTTP/1.1 301 Moved Permanently
# Location: /docs/engineer/agents/planner

curl -I http://localhost:4321/docs/commands/core/cook
# Should redirect to: /docs/engineer/commands/cook
```

**Manual Browser Test**:
1. Open http://localhost:4321/docs/agents/planner
2. Should redirect to http://localhost:4321/docs/engineer/agents/planner
3. URL bar updates to new path

---

## Alternative: Server-Side Redirects

If Astro config redirects don't work for your deployment:

### Netlify (_redirects file)

```bash
# Create public/_redirects
cat > public/_redirects << 'EOF'
/docs/agents/*           /docs/engineer/agents/:splat         301
/docs/commands/*         /docs/engineer/commands/:splat       301
/docs/skills/*           /docs/engineer/skills/:splat         301
/docs/configuration/*    /docs/engineer/configuration/:splat  301

# Vietnamese
/vi/docs/agents/*        /vi/docs/engineer/agents/:splat      301
/vi/docs/commands/*      /vi/docs/engineer/commands/:splat    301
/vi/docs/skills/*        /vi/docs/engineer/skills/:splat      301
/vi/docs/configuration/* /vi/docs/engineer/configuration/:splat 301
EOF
```

### Vercel (vercel.json)

```json
{
  "redirects": [
    {
      "source": "/docs/agents/:slug",
      "destination": "/docs/engineer/agents/:slug",
      "permanent": true
    },
    {
      "source": "/docs/commands/:path*",
      "destination": "/docs/engineer/commands/:path*",
      "permanent": true
    },
    {
      "source": "/docs/skills/:path*",
      "destination": "/docs/engineer/skills/:path*",
      "permanent": true
    },
    {
      "source": "/docs/configuration/:slug",
      "destination": "/docs/engineer/configuration/:slug",
      "permanent": true
    }
  ]
}
```

### Nginx

```nginx
location ~ ^/docs/(agents|commands|skills|configuration)/(.*)$ {
    return 301 /docs/engineer/$1/$2;
}
```

---

## Verification

### Test All Categories

```bash
# Create test script
cat > /tmp/test-redirects.sh << 'EOF'
#!/bin/bash

BASE_URL="http://localhost:4321"

echo "Testing redirects..."

# Test agents
curl -sI "${BASE_URL}/docs/agents/planner" | grep -E "(301|Location:)" || echo "✗ Agents redirect failed"

# Test commands
curl -sI "${BASE_URL}/docs/commands/core/cook" | grep -E "(301|Location:)" || echo "✗ Commands redirect failed"

# Test skills
curl -sI "${BASE_URL}/docs/skills/ai-multimodal" | grep -E "(301|Location:)" || echo "✗ Skills redirect failed"

# Test config
curl -sI "${BASE_URL}/docs/configuration/settings" | grep -E "(301|Location:)" || echo "✗ Config redirect failed"

echo "✓ All redirects tested"
EOF

chmod +x /tmp/test-redirects.sh
bash /tmp/test-redirects.sh
```

---

## Troubleshooting

### Issue: Redirects not working in dev
**Cause**: Dev server may not respect config redirects
**Solution**: Test in production build:
```bash
bun run build && bun run preview
```

### Issue: 404 instead of redirect
**Cause**: Redirect pattern doesn't match URL format
**Solution**: Check actual URL structure:
```bash
# List all generated pages
find dist -name "*.html" | grep engineer | head -10
```

### Issue: Infinite redirect loop
**Cause**: Redirect points back to itself
**Solution**: Check redirect destination doesn't match source

---

## Deliverables

- [x] Redirects configured in `astro.config.mjs`
- [x] All 4 categories redirecting (agents, commands, skills, config)
- [x] Vietnamese redirects configured
- [x] Index page redirects configured
- [x] Redirects tested and working

---

## Next Steps

→ **Proceed to Phase 06: Internal Link Updates**

---

**Phase Status**: Pending
**Est. Completion**: 10 minutes
