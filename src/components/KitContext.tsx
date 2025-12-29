import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Kit = 'engineer' | 'marketing';

interface KitContextType {
  currentKit: Kit | null;
  setKit: (kit: Kit) => void;
  showPicker: boolean;
  setShowPicker: (show: boolean) => void;
}

const KitContext = createContext<KitContextType | null>(null);

const STORAGE_KEY = 'claudekit-selected-kit';

export function KitProvider({ children }: { children: ReactNode }) {
  const [currentKit, setCurrentKit] = useState<Kit | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check for saved preference first
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && ['engineer', 'marketing'].includes(saved)) {
      setCurrentKit(saved as Kit);
      setIsInitialized(true);
      return;
    }

    // Detect kit from URL path
    const path = window.location.pathname;
    if (path.includes('/marketing/')) {
      setCurrentKit('marketing');
      localStorage.setItem(STORAGE_KEY, 'marketing');
    } else if (path.includes('/engineer/') || path.includes('/cli/')) {
      setCurrentKit('engineer');
      localStorage.setItem(STORAGE_KEY, 'engineer');
    } else if (path === '/docs' || path === '/docs/') {
      // On docs landing, show picker if no saved preference
      setShowPicker(true);
    } else {
      // Default to engineer for existing docs
      setCurrentKit('engineer');
    }
    setIsInitialized(true);
  }, []);

  const setKit = (kit: Kit) => {
    setCurrentKit(kit);
    localStorage.setItem(STORAGE_KEY, kit);
    setShowPicker(false);
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <KitContext.Provider value={{ currentKit, setKit, showPicker, setShowPicker }}>
      {children}
    </KitContext.Provider>
  );
}

export function useKit() {
  const context = useContext(KitContext);
  if (!context) {
    throw new Error('useKit must be used within KitProvider');
  }
  return context;
}
