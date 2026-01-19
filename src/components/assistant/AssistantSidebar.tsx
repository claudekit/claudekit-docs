// Expanded sidebar panel component (Stage 2)
import { useState, useRef, useEffect, useCallback } from 'react';
import { AssistantMessage } from './AssistantMessage';
import { AssistantSuggestions } from './AssistantSuggestions';
import type { Message, AssistantStage } from './types';

interface AssistantSidebarProps {
  stage: AssistantStage;
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  inputValue: string;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  onSubmitQuery: (query: string) => void;
  onClose: () => void;
  onReset: () => void;
}

export function AssistantSidebar({
  stage,
  messages,
  isLoading,
  error,
  inputValue,
  onInputChange,
  onSubmit,
  onSubmitQuery,
  onClose,
  onReset,
}: AssistantSidebarProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const dragStartY = useRef<number | null>(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus trap implementation
  useEffect(() => {
    if (stage !== 'expanded') return;

    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const focusableSelector = 'button, input, [tabindex]:not([tabindex="-1"])';
    const focusableElements = sidebar.querySelectorAll(focusableSelector);

    if (!focusableElements.length) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    setTimeout(() => inputRef.current?.focus(), 100);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [stage]);

  // Touch handlers for swipe-to-close (mobile)
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!isMobile) return;
      dragStartY.current = e.touches[0].clientY;
    },
    [isMobile]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isMobile || dragStartY.current === null) return;

      const currentY = e.touches[0].clientY;
      const deltaY = currentY - dragStartY.current;

      if (deltaY > 0 && sidebarRef.current) {
        sidebarRef.current.style.transform = `translateY(${Math.min(deltaY, 200)}px)`;
      }
    },
    [isMobile]
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!isMobile || dragStartY.current === null || !sidebarRef.current) return;

      const currentY = e.changedTouches[0].clientY;
      const deltaY = currentY - dragStartY.current;

      sidebarRef.current.style.transform = '';

      if (deltaY > 100) {
        handleClose();
      }

      dragStartY.current = null;
    },
    [isMobile]
  );

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSubmit();
    }
  };

  // Reset closing state when stage changes
  useEffect(() => {
    if (stage !== 'expanded') {
      setIsClosing(false);
    }
  }, [stage]);

  if (stage !== 'expanded' && !isClosing) return null;

  const showSuggestions = messages.length === 0;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`assistant-backdrop ${isClosing ? 'closing' : ''}`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Sidebar Panel */}
      <aside
        ref={sidebarRef}
        className={`assistant-sidebar ${isClosing ? 'closing' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="assistant-title"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Drag handle (mobile only) */}
        {isMobile && (
          <div
            className="assistant-drag-handle"
            aria-label="Drag to close"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleClose()}
          />
        )}

        {/* Header */}
        <header className="assistant-sidebar-header">
          <div className="assistant-sidebar-title" id="assistant-title">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
            <span>Assistant</span>
          </div>

          <div className="assistant-sidebar-actions">
            {/* Reset button */}
            <button
              type="button"
              className="assistant-action-btn"
              onClick={onReset}
              aria-label="Reset conversation"
              title="Reset"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
            </button>

            {/* Close button */}
            <button
              type="button"
              className="assistant-action-btn"
              onClick={handleClose}
              aria-label="Close assistant"
              title="Close"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        {/* Messages */}
        <div className="assistant-messages">
          {showSuggestions && <AssistantSuggestions onSelect={onSubmitQuery} />}

          {messages.map((message) => (
            <AssistantMessage key={message.id} message={message} />
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="assistant-message assistant-message--assistant">
              <div className="assistant-message-content assistant-loading">
                <span className="assistant-loading-dot" />
                <span className="assistant-loading-dot" />
                <span className="assistant-loading-dot" />
              </div>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="assistant-error">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="assistant-sidebar-input">
          <form onSubmit={handleSubmit} className="assistant-sidebar-form">
            <svg
              className="assistant-sidebar-input-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>

            <input
              ref={inputRef}
              type="text"
              className="assistant-sidebar-input-field"
              placeholder="Ask a follow-up..."
              value={inputValue}
              onChange={(e) => onInputChange(e.target.value)}
              disabled={isLoading}
              maxLength={500}
            />

            <button
              type="submit"
              className="assistant-send-btn"
              disabled={isLoading || !inputValue.trim()}
              aria-label="Send message"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}
