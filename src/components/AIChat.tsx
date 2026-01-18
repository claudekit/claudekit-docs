import { useState, useRef, useEffect } from 'react';

const API_URL = import.meta.env.PROD
  ? 'https://ck-api.kaitran.ca/api/public/ask'
  : 'http://localhost:7319/api/public/ask';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  sources?: Array<{ title: string; url: string; snippet: string }>;
}

interface ApiResponse {
  answer: string;
  sources: Array<{ title: string; url: string; snippet: string }>;
  cached: boolean;
  error?: string;
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'system',
      content: "Hello! I'm your AI documentation assistant. Ask me anything about ClaudeKit.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const message = input.trim();
    if (!message) return;

    // Add user message
    const userMessage: Message = { role: 'user', content: message };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: message }),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Error: ${response.status}`);
      }

      const aiResponse: Message = {
        role: 'assistant',
        content: data.answer,
        sources: data.sources,
      };

      setMessages((prev) => [...prev, aiResponse]);
    } catch (err) {
      console.error('Error sending message:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to get response';
      setError(errorMessage);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, I encountered an error: ${errorMessage}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-chat-container">
      <div className="ai-messages">
        {messages.map((message, index) => (
          <div key={index} className={`ai-message ${message.role}`}>
            <div className="message-content">
              <p>{message.content}</p>
              {message.sources && message.sources.length > 0 && (
                <div className="message-sources">
                  <span className="sources-label">Sources:</span>
                  <ul>
                    {message.sources.slice(0, 3).map((source, i) => (
                      <li key={i}>
                        <a href={`/docs${source.url.replace('.md', '')}`} target="_blank" rel="noopener noreferrer">
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="ai-message assistant">
            <div className="message-content loading">
              <span className="loading-dot"></span>
              <span className="loading-dot"></span>
              <span className="loading-dot"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="ai-input-container">
        {error && <div className="ai-error">{error}</div>}
        <form className="ai-input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="ai-input"
            placeholder="Ask about ClaudeKit..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            maxLength={500}
          />
          <button
            type="submit"
            className="ai-send-button"
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z"></path>
              <path d="M22 2 11 13"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
