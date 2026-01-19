// Main AI Assistant component with two-stage UX
import { useEffect } from 'react';
import { useAssistant } from './use-assistant';
import { AssistantInputBar } from './AssistantInputBar';
import { AssistantSidebar } from './AssistantSidebar';

export function DocsAssistant() {
  const { state, setInput, submit, submitQuery, toggle, close, reset } = useAssistant();

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + I: Toggle assistant
      if ((e.metaKey || e.ctrlKey) && e.key === 'i') {
        e.preventDefault();
        toggle();
      }
      // Escape: Close sidebar
      if (e.key === 'Escape' && state.stage === 'expanded') {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggle, close, state.stage]);

  // Lock body scroll when sidebar open (Mobile only)
  useEffect(() => {
    if (state.stage === 'expanded' && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [state.stage]);

  return (
    <>
      <AssistantInputBar
        value={state.inputValue}
        onChange={setInput}
        onSubmit={submit}
        isLoading={state.isLoading}
        isExpanded={state.stage === 'expanded'}
      />

      <AssistantSidebar
        stage={state.stage}
        messages={state.messages}
        isLoading={state.isLoading}
        error={state.error}
        inputValue={state.inputValue}
        onInputChange={setInput}
        onSubmit={submit}
        onSubmitQuery={submitQuery}
        onClose={close}
        onReset={reset}
      />
    </>
  );
}
