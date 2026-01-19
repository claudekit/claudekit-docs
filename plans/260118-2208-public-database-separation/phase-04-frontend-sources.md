# Phase 4: Frontend Source Validation

## Context Links
- Parent: [plan.md](./plan.md)
- Depends on: [Phase 2](./phase-02-rag-multi-table.md), [Phase 3](./phase-03-public-prompt.md)
- Work context: `/home/kai/claudekit/claudekit-docs`

## Parallelization Info
- **Group:** C (runs after B)
- **Depends on:** Phase 2, Phase 3 (API must return correct URLs first)
- **Can run with:** Nothing (final phase)
- **Blocks:** Nothing

---

## Overview

| Field | Value |
|-------|-------|
| Priority | P2 - High |
| Status | DONE |
| Review | PASSED (2026-01-18) |

Validate source URLs in frontend before rendering. Only display sources with valid `/docs/*` paths.

---

## Key Insights

1. Current `formatUrl()` assumes all URLs can be fixed with simple transformation
2. API currently returns file paths like `/system-architecture.md` - not valid docs URLs
3. After Phase 2+3, API will return canonical URLs from `chunks_public`
4. Frontend should still validate as defense-in-depth

---

## Requirements

### Functional
- [ ] Validate source URLs match `/docs/*` pattern
- [ ] Filter out invalid sources before rendering
- [ ] Hide entire Sources section if no valid sources
- [ ] Log filtered sources for debugging (console.warn)

### Non-functional
- [ ] No visible error if sources invalid (graceful degradation)
- [ ] No performance impact

---

## Architecture

```typescript
// AssistantSources.tsx
1. Receive sources from API
2. Filter: only sources where url starts with '/docs/' or 'https://docs.claudekit.cc/'
3. If no valid sources, return null
4. Render only valid sources
```

---

## File Ownership

| File | Action | Exclusive |
|------|--------|-----------|
| `src/components/assistant/AssistantSources.tsx` | MODIFY | Yes |

---

## Implementation Steps

1. **AssistantSources.tsx**
   - Add `isValidSourceUrl(url)` helper
   - Filter sources before rendering
   - Remove `formatUrl()` transformation (API returns canonical URLs)
   - Add console.warn for filtered sources

---

## Code Changes

### AssistantSources.tsx (full rewrite)

```typescript
// Source citations component
import type { Source } from './types';

interface AssistantSourcesProps {
  sources: Source[];
}

// Validate source URL is a valid docs page
function isValidSourceUrl(url: string): boolean {
  // Accept relative /docs/* paths or full docs.claudekit.cc URLs
  if (url.startsWith('/docs/')) return true;
  if (url.startsWith('https://docs.claudekit.cc/docs/')) return true;
  return false;
}

// Normalize URL for display
function normalizeUrl(url: string): string {
  // If full URL, convert to relative for consistency
  if (url.startsWith('https://docs.claudekit.cc')) {
    return url.replace('https://docs.claudekit.cc', '');
  }
  return url;
}

export function AssistantSources({ sources }: AssistantSourcesProps) {
  // Filter to only valid docs sources
  const validSources = sources.filter(source => {
    const isValid = isValidSourceUrl(source.url);
    if (!isValid) {
      console.warn('[Assistant] Filtered invalid source URL:', source.url);
    }
    return isValid;
  });

  if (!validSources.length) return null;

  return (
    <div className="assistant-sources">
      <span className="assistant-sources-label">Sources:</span>
      <ul className="assistant-sources-list">
        {validSources.slice(0, 3).map((source, index) => (
          <li key={index}>
            <a
              href={normalizeUrl(source.url)}
              className="assistant-source-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {source.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Todo List

- [ ] Add isValidSourceUrl() helper function
- [ ] Add normalizeUrl() helper function
- [ ] Filter sources before rendering
- [ ] Add console.warn for filtered sources
- [ ] Test with valid and invalid source URLs
- [ ] Verify Sources section hides when all invalid

---

## Success Criteria

1. Only `/docs/*` URLs rendered as source links
2. Invalid URLs logged to console (dev debugging)
3. Sources section hidden if no valid sources
4. Valid source links work when clicked

---

## Conflict Prevention

- Only modifies frontend file in claudekit-docs repo
- Backend changes (Phase 2, 3) are in claudekit-assistant repo
- No overlap possible

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| All sources filtered | Medium | Low | After Phase 3, API returns valid URLs |
| Regex too strict | Low | Low | Simple startsWith check, easy to adjust |

---

## Security Considerations

- Prevents rendering arbitrary URLs from API
- Defense-in-depth against API data issues
- No XSS risk (URLs rendered in href attribute)

---

## Testing Plan

```typescript
// Test cases
const testSources = [
  { url: '/docs/getting-started/intro', title: 'Intro' },        // Valid
  { url: 'https://docs.claudekit.cc/docs/cli/install', title: 'Install' }, // Valid
  { url: '/system-architecture.md', title: 'Arch' },             // Invalid
  { url: 'https://example.com/hack', title: 'Hack' },            // Invalid
];
// Expected: Only first 2 rendered
```

---

## Next Steps

After Phase 4, proceed to:
1. Run full test suite
2. Manual testing on dev environment
3. Deploy to staging
4. Verify on production
