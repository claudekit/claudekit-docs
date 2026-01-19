// Individual message bubble component
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { AssistantSources } from './AssistantSources';
import type { Message } from './types';

interface AssistantMessageProps {
  message: Message;
}

export function AssistantMessage({ message }: AssistantMessageProps) {
  const [isNew, setIsNew] = useState(true);

  // Remove "new" class after animation
  useEffect(() => {
    const timer = setTimeout(() => setIsNew(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const isAssistant = message.role === 'assistant';

  return (
    <div className={`assistant-message assistant-message--${message.role} ${isNew ? 'new' : ''}`}>
      <div className="assistant-message-content">
        {isAssistant ? (
          <Markdown className="assistant-markdown">{message.content}</Markdown>
        ) : (
          <p>{message.content}</p>
        )}

        {/* Source citations for assistant messages */}
        {message.sources && message.sources.length > 0 && (
          <AssistantSources sources={message.sources} />
        )}
      </div>
    </div>
  );
}
