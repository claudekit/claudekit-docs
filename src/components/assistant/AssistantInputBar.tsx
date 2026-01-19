// Floating input bar component (Stage 1)
import { useRef, useEffect, useState } from 'react';

interface AssistantInputBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  isExpanded: boolean;
}

export function AssistantInputBar({
  value,
  onChange,
  onSubmit,
  isLoading,
  isExpanded,
}: AssistantInputBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [isMac, setIsMac] = useState(false);

  // Detect platform for keyboard hint
  useEffect(() => {
    setIsMac(navigator.platform.includes('Mac'));
  }, []);

  // Exit animation when expanding
  useEffect(() => {
    if (isExpanded && !isExiting) {
      setIsExiting(true);
    }
    if (!isExpanded) {
      setIsExiting(false);
    }
  }, [isExpanded, isExiting]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !isLoading) {
      onSubmit();
    }
  };

  // Don't render when expanded (after exit animation)
  if (isExpanded) return null;

  return (
    <div className={`assistant-input-bar-container ${isExiting ? 'exiting' : ''}`}>
      <form
        className="assistant-input-bar"
        onSubmit={handleSubmit}
        role="search"
        aria-label="Ask AI Assistant"
      >
        {/* Sparkle Icon */}
        <svg
          className="assistant-sparkle-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          className="assistant-input"
          placeholder="Ask a question..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={isLoading}
          maxLength={500}
          aria-label="Ask a question about ClaudeKit documentation"
        />

        {/* Keyboard Hint */}
        <kbd className="assistant-kbd">
          <span className="assistant-kbd-symbol">{isMac ? '\u2318' : 'Ctrl'}</span>
          <span>I</span>
        </kbd>
      </form>
    </div>
  );
}
