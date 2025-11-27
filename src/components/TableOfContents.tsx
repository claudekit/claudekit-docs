import { useState, useEffect, useCallback } from 'react';

interface Heading {
  depth: number;
  text: string;
  slug: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Filter to only h2/h3 headings
  const tocHeadings = headings.filter((h) => h.depth === 2 || h.depth === 3);

  // Handle click navigation with smooth scroll
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
      e.preventDefault();
      const element = document.getElementById(slug);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `#${slug}`);
        setActiveId(slug);
      }
    },
    []
  );

  // Scroll-spy with IntersectionObserver
  useEffect(() => {
    if (tocHeadings.length === 0) return;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-80px 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the first intersecting entry
      const intersecting = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (intersecting.length > 0) {
        setActiveId(intersecting[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all heading elements
    tocHeadings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      if (element) observer.observe(element);
    });

    // Set initial active heading (first one) if at top of page
    if (window.scrollY < 100 && tocHeadings.length > 0) {
      setActiveId(tocHeadings[0].slug);
    }

    return () => observer.disconnect();
  }, [tocHeadings]);

  // Don't render if no headings
  if (tocHeadings.length === 0) {
    return null;
  }

  return (
    <aside className="table-of-contents" aria-label="Table of contents">
      <nav className="toc-nav">
        <h2 className="toc-title">On this page</h2>
        <ul className="toc-list">
          {tocHeadings.map((heading) => (
            <li
              key={heading.slug}
              className={`toc-item ${heading.depth === 3 ? 'toc-h3' : 'toc-h2'}`}
            >
              <a
                href={`#${heading.slug}`}
                className={`toc-link ${activeId === heading.slug ? 'active' : ''}`}
                onClick={(e) => handleClick(e, heading.slug)}
                aria-current={activeId === heading.slug ? 'true' : undefined}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <style>{`
        /* TOC as flex item with sticky positioning */
        .table-of-contents {
          width: 280px;
          flex-shrink: 0;
          align-self: flex-start;
          position: sticky;
          top: var(--layout-header-height, 56px);
          max-height: calc(100vh - var(--layout-header-height, 56px));
          overflow-y: auto;
        }

        .toc-nav {
          padding: var(--space-6, 1.5rem) var(--space-4, 1rem);
        }

        .toc-title {
          display: flex;
          align-items: center;
          gap: var(--space-2, 0.5rem);
          font-size: var(--text-xs, 0.75rem);
          font-weight: var(--font-semibold, 600);
          color: var(--color-text-secondary, #a3a3a3);
          text-transform: uppercase;
          letter-spacing: var(--tracking-wider, 0.05em);
          margin-bottom: var(--space-4, 1rem);
          padding: 0;
          border: none;
          background: none;
        }

        .toc-title::before {
          content: '≡';
          font-size: var(--text-sm, 0.875rem);
          opacity: 0.7;
        }

        .toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .toc-item {
          margin-bottom: var(--space-0-5, 0.125rem);
        }

        .toc-link {
          display: block;
          font-size: var(--text-sm, 0.875rem);
          color: var(--color-text-secondary, #a3a3a3);
          text-decoration: none;
          padding: var(--space-1-5, 0.375rem) var(--space-3, 0.75rem);
          border-radius: var(--radius-sm, 4px);
          border-left: 2px solid transparent;
          transition: all var(--duration-normal, 150ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
          line-height: 1.4;
        }

        .toc-link:hover {
          color: var(--color-text-primary, #fff);
          background: var(--color-bg-tertiary, #1c1c1c);
          text-decoration: none;
        }

        .toc-link.active {
          color: var(--color-text-primary, #fff);
          border-left-color: var(--color-accent-blue, #60a5fa);
          font-weight: var(--font-medium, 500);
        }

        .toc-h2 .toc-link {
          font-weight: var(--font-medium, 500);
        }

        .toc-h3 {
          padding-left: var(--space-3, 0.75rem);
        }

        .toc-h3 .toc-link {
          font-size: var(--text-xs, 0.75rem);
          color: var(--color-text-muted, #737373);
        }

        .toc-h3 .toc-link:hover,
        .toc-h3 .toc-link.active {
          color: var(--color-text-secondary, #a3a3a3);
        }

        /* Hide on screens where AI panel is hidden (< 1280px) */
        @media (max-width: 1279px) {
          .table-of-contents {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
}
