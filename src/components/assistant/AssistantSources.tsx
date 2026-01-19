// Source citations component
import type { Source } from './types';

interface AssistantSourcesProps {
  sources: Source[];
}

function isValidSourceUrl(url: string | undefined | null): boolean {
  if (!url || typeof url !== 'string') return false;
  if (url.startsWith('/docs/')) return true;
  if (url.startsWith('https://docs.claudekit.cc/docs/')) return true;
  return false;
}

function normalizeUrl(url: string): string {
  if (!url) return '';
  // Strip query params and fragments for clean URLs
  const cleanUrl = url.split('?')[0].split('#')[0];
  if (cleanUrl.startsWith('https://docs.claudekit.cc')) {
    return cleanUrl.replace('https://docs.claudekit.cc', '');
  }
  return cleanUrl;
}

export function AssistantSources({ sources }: AssistantSourcesProps) {
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
