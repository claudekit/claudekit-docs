import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const docs = await getCollection('docs', (entry) => entry.data.published);

  // Normalize slug: remove leading 'docs/' to avoid /docs/docs/... duplication
  return docs.map(doc => ({
    params: { slug: doc.slug.startsWith('docs/') ? doc.slug.slice(5) : doc.slug },
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