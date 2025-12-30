import { useState, useEffect } from 'react';

type Kit = 'engineer' | 'marketing';

const STORAGE_KEY = 'claudekit-selected-kit';

const KITS = [
  {
    id: 'engineer' as Kit,
    label: 'Engineer',
    icon: '{}',
    description: 'Development & automation toolkit'
  },
  {
    id: 'marketing' as Kit,
    label: 'Marketing',
    icon: 'M',
    description: 'Marketing & content automation'
  },
] as const;

export function KitSwitcher() {
  const [currentKit, setCurrentKit] = useState<Kit | null>(null);

  useEffect(() => {
    // Get saved preference
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && ['engineer', 'marketing'].includes(saved)) {
      setCurrentKit(saved as Kit);
      return;
    }

    // Detect from URL
    const path = window.location.pathname;
    if (path.includes('/marketing/')) {
      setCurrentKit('marketing');
    } else {
      setCurrentKit('engineer');
    }
  }, []);

  const handleKitChange = (kit: Kit) => {
    setCurrentKit(kit);
    localStorage.setItem(STORAGE_KEY, kit);

    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent('kit-changed', { detail: { kit } }));

    // Navigate to the kit's landing page
    const targetPath = kit === 'marketing'
      ? '/docs/marketing/'
      : '/docs/engineer/';
    window.location.href = targetPath;
  };

  if (!currentKit) return null;

  return (
    <div className="kit-switcher">
      {KITS.map((kit) => (
        <button
          key={kit.id}
          onClick={() => handleKitChange(kit.id)}
          className={`kit-button ${currentKit === kit.id ? 'active' : ''}`}
          title={kit.description}
        >
          <span className="kit-icon">{kit.icon}</span>
          <span className="kit-label">{kit.label}</span>
        </button>
      ))}

      <style>{`
        .kit-switcher {
          display: flex;
          gap: 4px;
          padding: 4px;
          background: var(--color-bg-tertiary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
        }

        .kit-button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border: none;
          border-radius: var(--radius-md);
          background: transparent;
          color: var(--color-text-secondary);
          font-size: var(--text-sm);
          font-weight: var(--font-medium);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .kit-button:hover {
          background: var(--color-bg-secondary);
          color: var(--color-text-primary);
        }

        .kit-button.active {
          background: var(--color-accent-coral);
          color: white;
        }

        .kit-icon {
          font-family: var(--font-mono);
          font-size: 12px;
          opacity: 0.8;
        }

        .kit-label {
          font-family: var(--font-sans);
        }

        @media (max-width: 640px) {
          .kit-label {
            display: none;
          }
          .kit-button {
            padding: 8px 10px;
          }
        }
      `}</style>
    </div>
  );
}
