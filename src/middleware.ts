import { defineMiddleware } from 'astro:middleware';

// URL redirect mapping for old paths → new paths
const exactRedirects: Record<string, string> = {
  // Getting Started moves
  '/docs/getting-started/greenfield-projects': '/docs/workflows/new-project',
  '/docs/getting-started/brownfield-projects': '/docs/workflows/existing-project',
  '/docs/getting-started/mcp-setup': '/docs/configuration/mcp-setup',
  '/docs/getting-started/gemini': '/docs/skills/ai/gemini-vision',

  // Core Concepts → Configuration/Docs
  '/docs/core-concepts/claude-md': '/docs/configuration/claude-md',
  '/docs/core-concepts/workflows': '/docs/configuration/workflows',
  '/docs/core-concepts/architecture': '/docs/agents',
  '/docs/core-concepts/code-standards': '/docs/configuration/claude-md',
  '/docs/core-concepts/system-architecture': '/docs/agents',

  // CLI → Docs (no /docs/docs prefix needed - pages now at /docs/cli)
  // '/docs/cli': '/docs/cli', // Same path, no redirect needed
  // '/docs/cli/installation': '/docs/cli/installation', // Same path, no redirect needed

  // Use Cases → Workflows
  '/docs/use-cases': '/docs/workflows',
  '/docs/use-cases/': '/docs/workflows',
  '/docs/use-cases/adding-feature': '/docs/workflows/adding-feature',
  '/docs/use-cases/fixing-bugs': '/docs/workflows/fixing-bugs',
  '/docs/use-cases/building-api': '/docs/workflows/building-api',
  '/docs/use-cases/implementing-auth': '/docs/workflows/implementing-auth',
  '/docs/use-cases/integrating-payment': '/docs/workflows/integrating-payment',
  '/docs/use-cases/optimizing-performance': '/docs/workflows/optimizing-performance',
  '/docs/use-cases/refactoring-code': '/docs/workflows/refactoring-code',
  '/docs/use-cases/understanding-codebases-with-gkg': '/docs/workflows/understanding-codebases',
  '/docs/use-cases/starting-new-project': '/docs/workflows/new-project',
};

export const onRequest = defineMiddleware((context, next) => {
  const { url, redirect } = context;
  const pathname = url.pathname;

  // Check exact matches first
  const exactMatch = exactRedirects[pathname];
  if (exactMatch) {
    return redirect(exactMatch, 301);
  }

  // Handle wildcard: /docs/troubleshooting/* → /docs/support/troubleshooting/*
  if (pathname.startsWith('/docs/troubleshooting')) {
    if (pathname === '/docs/troubleshooting' || pathname === '/docs/troubleshooting/') {
      return redirect('/docs/support/troubleshooting', 301);
    }
    const slug = pathname.replace('/docs/troubleshooting/', '');
    return redirect(`/docs/support/troubleshooting/${slug}`, 301);
  }

  // Handle wildcard: /docs/use-cases/* → /docs/workflows/*
  if (pathname.startsWith('/docs/use-cases/')) {
    const slug = pathname.replace('/docs/use-cases/', '');
    // Try to map to known workflow
    const workflowMap: Record<string, string> = {
      'adding-feature': 'adding-feature',
      'fixing-bugs': 'fixing-bugs',
      'building-api': 'building-api',
      'implementing-auth': 'implementing-auth',
      'integrating-payment': 'integrating-payment',
      'optimizing-performance': 'optimizing-performance',
      'refactoring-code': 'refactoring-code',
    };
    const mappedSlug = workflowMap[slug] || slug;
    return redirect(`/docs/workflows/${mappedSlug}`, 301);
  }

  return next();
});
