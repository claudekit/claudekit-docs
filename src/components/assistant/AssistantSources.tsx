// Source citations component
import type { Source } from './types';

interface AssistantSourcesProps {
  sources: Source[];
}

export function AssistantSources({ sources }: AssistantSourcesProps) {
  if (!sources.length) return null;

  // Convert API URL to docs page URL
  const formatUrl = (url: string) => {
    const cleanUrl = url.replace('.md', '');
    return cleanUrl.startsWith('/docs') ? cleanUrl : `/docs${cleanUrl}`;
  };

  return (
    <div className="assistant-sources">
      <span className="assistant-sources-label">Sources:</span>
      <ul className="assistant-sources-list">
        {sources.slice(0, 3).map((source, index) => (
          <li key={index}>
            <a
              href={formatUrl(source.url)}
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
