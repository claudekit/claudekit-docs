// Suggested questions component (Polar.sh pattern)
interface AssistantSuggestionsProps {
  onSelect: (question: string) => void;
}

const SUGGESTED_QUESTIONS = [
  'How do I get started with ClaudeKit?',
  'What are Claude Code skills?',
  'How do I configure hooks?',
];

export function AssistantSuggestions({ onSelect }: AssistantSuggestionsProps) {
  return (
    <div className="assistant-suggestions">
      <span className="assistant-suggestions-label">Try asking:</span>
      <div className="assistant-suggestions-list">
        {SUGGESTED_QUESTIONS.map((question) => (
          <button
            key={question}
            type="button"
            className="assistant-suggestion-chip"
            onClick={() => onSelect(question)}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}
