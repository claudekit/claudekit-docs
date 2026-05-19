import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const docs = await getCollection('docs', (entry) => entry.data.published);

  // Same normalization as /docs/[...slug].astro — strip 'docs/' prefix and
  // trailing '/index' so raw markdown endpoints mirror the HTML routes.
  function normalizeSlug(raw: string): string {
    let slug = raw.startsWith('docs/') ? raw.slice(5) : raw;
    if (slug === 'index') slug = '';
    else if (slug.endsWith('/index')) slug = slug.slice(0, -6);
    return slug;
  }

  return docs.map(doc => ({
    params: { slug: normalizeSlug(doc.slug) || undefined },
    props: { doc },
  }));
}

export async function GET({ props }: { props: { doc: any } }) {
  const { doc } = props;

  const markdown = `---
title: ${doc.data.title}
description: ${doc.data.description}
section: ${doc.data.section}
category: ${doc.data.category || 'N/A'}
---

# ${doc.data.title}

${doc.body}`;

  return new Response(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}