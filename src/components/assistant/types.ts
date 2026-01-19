// AI Assistant TypeScript interfaces
export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  sources?: Source[];
  timestamp: number;
}

export interface Source {
  title: string;
  url: string;
  snippet: string;
}

export interface ApiResponse {
  answer: string;
  sources: Source[];
  cached: boolean;
  error?: string;
}

export type AssistantStage = 'idle' | 'expanded';

export interface AssistantState {
  stage: AssistantStage;
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  inputValue: string;
}
