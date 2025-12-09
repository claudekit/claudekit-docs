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
    </aside>
  );
}
