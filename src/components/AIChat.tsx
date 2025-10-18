import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
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

    try {
      // TODO: Replace with actual API call when backend is available
      // For now, show placeholder response
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const aiResponse: Message = {
        role: 'assistant',
        content:
          'AI responses will be available once the OpenRouter integration is complete with a backend API. This is a placeholder response showing the UI functionality.',
      };

      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
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
        <form className="ai-input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="ai-input"
            placeholder="Ask about ClaudeKit..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
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
