# Phase 5: Public Ingestion Script

## Context Links
- Parent: [plan.md](./plan.md)
- Depends on: Phase 1-4 (all prior phases)

## Parallelization Info
- **Group:** D (runs after C)
- **Depends on:** Phase 1 (table exists), Phase 2 (multi-table support)
- **Can run with:** Nothing (final implementation phase)
- **Blocks:** Deployment

---

## Overview

| Field | Value |
|-------|-------|
| Priority | P1 - Critical (required for deployment) |
| Status | NEEDS_FIX |
| Review | BLOCKED - Hardcoded path issue |

Create `ingest-public.ts` script to populate `chunks_public` table exclusively from `docs.claudekit.cc` public documentation. Store canonical URLs during ingestion.

---

## Key Insights

1. Existing indexer reads from local markdown files
2. Need to modify to store canonical URLs (not file paths)
3. Source: `claudekit-docs/src/content/docs/` directory
4. URL pattern: `https://docs.claudekit.cc/docs/{category}/{slug}`

---

## Requirements

### Functional
- [ ] Create `ingest-public.ts` script in `packages/scripts/src/`
- [ ] Read markdown from `claudekit-docs/src/content/docs/` only (no internal docs)
- [ ] Generate canonical URLs: `https://docs.claudekit.cc/docs/{category}/{slug}`
- [ ] Store in `chunks_public` table (not `chunks`)
- [ ] Skip non-published docs (`published: false` in frontmatter)

### Non-functional
- [ ] Idempotent (safe to run multiple times)
- [ ] Clear console output showing progress
- [ ] Complete in < 5 minutes

---

## Architecture

```
ingest-public.ts
├── Read markdown files from claudekit-docs/src/content/docs/
├── Parse frontmatter (skip if published: false)
├── Generate canonical URL: https://docs.claudekit.cc/docs/{category}/{slug}
├── Chunk documents
├── Generate embeddings
└── Upsert to chunks_public table
```

---

## File Ownership

| File | Action | Exclusive |
|------|--------|-----------|
| `packages/scripts/src/ingest-public.ts` | CREATE | Yes |
| `packages/scripts/package.json` | MODIFY (add script) | Yes |

---

## Implementation Steps

1. **Create `ingest-public.ts`**
   - Import existing chunker, embedder, pipeline utilities
   - Create `PgVectorStore('chunks_public')` instance
   - Load markdown from `../../../claudekit-docs/src/content/docs/`

2. **URL Generation**
   ```typescript
   function buildCanonicalUrl(filePath: string): string {
     // filePath: getting-started/intro.md
     // returns: https://docs.claudekit.cc/docs/getting-started/intro
     const slug = filePath.replace('.md', '');
     return `https://docs.claudekit.cc/docs/${slug}`;
   }
   ```

3. **Frontmatter Filtering**
   ```typescript
   // Skip unpublished docs
   if (frontmatter.published === false) {
     console.log(`Skipping unpublished: ${filePath}`);
     continue;
   }
   ```

4. **Store metadata with canonical URL**
   ```typescript
   const metadata = {
     source: 'docs.claudekit.cc',
     title: frontmatter.title,
     url: buildCanonicalUrl(relativePath),  // CANONICAL URL
     breadcrumbs: [frontmatter.category, frontmatter.title],
   };
   ```

5. **Add npm script**
   ```json
   "scripts": {
     "ingest:public": "bun run src/ingest-public.ts"
   }
   ```

---

## Code Outline

```typescript
// packages/scripts/src/ingest-public.ts
import { readdir, readFile } from 'fs/promises';
import { join, relative } from 'path';
import matter from 'gray-matter';
import { PgVectorStore, indexDocuments, Document } from '@claudekit/assistant-core';

const DOCS_PATH = join(__dirname, '../../../claudekit-docs/src/content/docs');
const BASE_URL = 'https://docs.claudekit.cc/docs';

async function getMarkdownFiles(dir: string): Promise<string[]> {
  // Recursively find all .md files
}

function buildCanonicalUrl(relativePath: string): string {
  return `${BASE_URL}/${relativePath.replace('.md', '')}`;
}

async function main() {
  console.log('Starting public docs ingestion...');

  const store = new PgVectorStore('chunks_public');
  await store.initialize();

  const files = await getMarkdownFiles(DOCS_PATH);
  const documents: Document[] = [];

  for (const file of files) {
    const content = await readFile(file, 'utf-8');
    const { data: fm, content: body } = matter(content);

    if (fm.published === false) {
      console.log(`Skipping unpublished: ${file}`);
      continue;
    }

    const relativePath = relative(DOCS_PATH, file);

    documents.push({
      id: `docs-${relativePath.replace(/[\/\.]/g, '-')}`,
      source: 'docs.claudekit.cc',
      sourceType: 'markdown',
      title: fm.title || relativePath,
      content: body,
      metadata: {
        url: buildCanonicalUrl(relativePath),
        category: fm.category,
        description: fm.description,
      },
    });
  }

  console.log(`Found ${documents.length} published docs`);

  const result = await indexDocuments(documents, store, {
    onProgress: (current, total) => {
      console.log(`Progress: ${current}/${total} chunks`);
    },
  });

  console.log(`Done! Indexed ${result.indexed} docs, ${result.chunks} chunks`);
  await store.close();
}

main().catch(console.error);
```

---

## Todo List

- [ ] Create ingest-public.ts script
- [ ] Implement recursive markdown file discovery
- [ ] Implement canonical URL generation
- [ ] Filter unpublished docs
- [ ] Add npm script to package.json
- [ ] Test locally
- [ ] Verify chunks_public has content

---

## Success Criteria

1. Script runs without errors
2. `chunks_public` table populated with docs
3. All stored URLs are canonical (`https://docs.claudekit.cc/docs/...`)
4. Unpublished docs excluded
5. Idempotent (re-run updates, doesn't duplicate)

---

## Conflict Prevention

- Creates new file only
- Does not modify existing indexing scripts
- Uses `chunks_public` table (Phase 1 creates it)

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Missing docs directory | Low | High | Validate path exists before starting |
| Malformed frontmatter | Medium | Low | Catch parse errors, skip file |
| Large doc count | Low | Low | Batch processing already implemented |

---

## Security Considerations

- Only reads from trusted local directory
- No external network requests (except Gemini for embeddings)
- Same database credentials as existing scripts

---

## Deployment Gate

**This phase MUST complete successfully before deployment.** The public endpoint will return empty/poor results if `chunks_public` is not populated.

---

## Next Steps

After Phase 5:
1. Run full test suite
2. Manual testing on dev environment
3. Deploy to staging
4. Verify on production
