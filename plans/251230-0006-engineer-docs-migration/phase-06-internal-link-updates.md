# Phase 06: Internal Link Updates

**Duration**: 10 minutes
**Status**: Pending
**Dependencies**: Phase 02 complete

---

## Objectives

1. Find all internal links pointing to old `/docs/agents/`, etc. paths
2. Update to new `/docs/engineer/` paths
3. Verify no broken links remain

---

## Link Update Strategy

### 1. Scan for Old Links (2 min)

```bash
# Find all files with old-style links
echo "=== Files with old-style links ==="

# Agents links
grep -r "/docs/agents/" src/content/docs/engineer --include="*.md" | wc -l

# Commands links
grep -r "/docs/commands/" src/content/docs/engineer --include="*.md" | wc -l

# Skills links
grep -r "/docs/skills/" src/content/docs/engineer --include="*.md" | wc -l

# Configuration links
grep -r "/docs/configuration/" src/content/docs/engineer --include="*.md" | wc -l

# Total old links
grep -rE "/docs/(agents|commands|skills|configuration)/" src/content/docs/engineer --include="*.md" | wc -l
```

### 2. Update Links Automatically (5 min)

**Method 1: sed (Batch Update)**

```bash
# Update agents links
find src/content/docs/engineer -name "*.md" -type f -exec sed -i 's|/docs/agents/|/docs/engineer/agents/|g' {} \;

# Update commands links
find src/content/docs/engineer -name "*.md" -type f -exec sed -i 's|/docs/commands/|/docs/engineer/commands/|g' {} \;

# Update skills links
find src/content/docs/engineer -name "*.md" -type f -exec sed -i 's|/docs/skills/|/docs/engineer/skills/|g' {} \;

# Update configuration links
find src/content/docs/engineer -name "*.md" -type f -exec sed -i 's|/docs/configuration/|/docs/engineer/configuration/|g' {} \;

echo "✓ Links updated"
```

**Method 2: Node.js Script**

Create `scripts/update-links.mjs`:

```javascript
import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

const files = await glob('src/content/docs/engineer/**/*.md');

const replacements = [
  { old: /\/docs\/agents\//g, new: '/docs/engineer/agents/' },
  { old: /\/docs\/commands\//g, new: '/docs/engineer/commands/' },
  { old: /\/docs\/skills\//g, new: '/docs/engineer/skills/' },
  { old: /\/docs\/configuration\//g, new: '/docs/engineer/configuration/' },
];

let totalUpdates = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf-8');
  let modified = false;

  for (const { old, new: newPath } of replacements) {
    if (old.test(content)) {
      content = content.replace(old, newPath);
      modified = true;
    }
  }

  if (modified) {
    writeFileSync(file, content, 'utf-8');
    totalUpdates++;
  }
}

console.log(`✓ Updated links in ${totalUpdates} files`);
```

**Run**:
```bash
node scripts/update-links.mjs
```

### 3. Update Links in Other Sections (3 min)

```bash
# Update links in marketing docs (if they reference engineer docs)
find src/content/docs/marketing -name "*.md" -type f -exec sed -i 's|/docs/agents/|/docs/engineer/agents/|g' {} \;
find src/content/docs/marketing -name "*.md" -type f -exec sed -i 's|/docs/commands/|/docs/engineer/commands/|g' {} \;
find src/content/docs/marketing -name "*.md" -type f -exec sed -i 's|/docs/skills/|/docs/engineer/skills/|g' {} \;

# Update links in CLI docs
find src/content/docs/cli -name "*.md" -type f -exec sed -i 's|/docs/agents/|/docs/engineer/agents/|g' {} \;
find src/content/docs/cli -name "*.md" -type f -exec sed -i 's|/docs/commands/|/docs/engineer/commands/|g' {} \;

# Update links in getting-started
find src/content/docs/getting-started -name "*.md" -type f -exec sed -i 's|/docs/agents/|/docs/engineer/agents/|g' {} \;
```

---

## Verification

### 1. Check for Remaining Old Links

```bash
echo "=== Verification: Old Links Remaining ==="

# Should return 0 results
echo "Agents links: $(grep -r "/docs/agents/" src/content/docs --include="*.md" | wc -l) (expect 0)"
echo "Commands links: $(grep -r "/docs/commands/" src/content/docs --include="*.md" | wc -l) (expect 0)"
echo "Skills links: $(grep -r "/docs/skills/" src/content/docs --include="*.md" | wc -l) (expect 0)"
echo "Config links: $(grep -r "/docs/configuration/" src/content/docs --include="*.md" | wc -l) (expect 0)"

# List files still containing old links (if any)
grep -rl "/docs/agents/" src/content/docs --include="*.md"
grep -rl "/docs/commands/" src/content/docs --include="*.md"
grep -rl "/docs/skills/" src/content/docs --include="*.md"
grep -rl "/docs/configuration/" src/content/docs --include="*.md"
```

### 2. Verify New Links Format

```bash
# Sample check - should find new-style links
grep "/docs/engineer/agents/" src/content/docs/engineer/**/*.md | head -3
grep "/docs/engineer/commands/" src/content/docs/engineer/**/*.md | head -3
```

### 3. Check for Broken Links

```bash
# Build will fail if links are broken
bun run build

# If build succeeds, links are valid
```

---

## Edge Cases to Handle

### Relative Links

If any relative links exist (e.g., `./agents/planner`):

```bash
# Find relative links
grep -rE "\\.{1,2}/agents/" src/content/docs --include="*.md"
grep -rE "\\.{1,2}/commands/" src/content/docs --include="*.md"

# Convert to absolute paths
# Manual review required - relative links depend on current page location
```

**Recommendation**: All links should be absolute (`/docs/engineer/...`)

### External References

Links in:
- `README.md`
- `CLAUDE.md`
- `docs/` directory files
- Component files (`.astro`, `.tsx`)

```bash
# Check README
grep -E "/docs/(agents|commands|skills|configuration)/" README.md

# Check CLAUDE.md
grep -E "/docs/(agents|commands|skills|configuration)/" CLAUDE.md

# Check docs directory
grep -rE "/docs/(agents|commands|skills|configuration)/" docs/ --include="*.md"

# Check components
grep -rE "/docs/(agents|commands|skills|configuration)/" src/components --include="*.astro" --include="*.tsx"
```

**Action**: Update these files manually if old links found

---

## Troubleshooting

### Issue: sed changes too much
**Cause**: Pattern matches unintended text
**Solution**: Use more specific pattern:
```bash
# Instead of: /docs/agents/
# Use: href="/docs/agents/"
sed -i 's|href="/docs/agents/|href="/docs/engineer/agents/|g'
```

### Issue: Links in code blocks changed
**Cause**: sed doesn't differentiate code blocks
**Solution**: Manual review of code blocks:
```bash
grep -A 3 -B 3 '```' file.md | grep "/docs/engineer/"
# If found in code block, revert that section
```

---

## Manual Review Checklist

High-traffic pages to manually verify:

- [ ] `docs/engineer/agents/planner.md`
- [ ] `docs/engineer/commands/cook.md`
- [ ] `docs/engineer/skills/ai-multimodal.md`
- [ ] `docs/getting-started/introduction.md`
- [ ] `docs/getting-started/quick-start.md`
- [ ] `README.md`
- [ ] `CLAUDE.md`

---

## Deliverables

- [x] All old-style links updated to new paths
- [x] Links in all sections updated (engineer, marketing, CLI, getting-started)
- [x] No remaining `/docs/agents/`, `/docs/commands/`, etc. links
- [x] External references (README, CLAUDE.md) updated
- [x] Build passes with no broken link errors

---

## Next Steps

→ **Proceed to Phase 07: Validation & Testing**

---

**Phase Status**: Pending
**Est. Completion**: 10 minutes
