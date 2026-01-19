// AI Assistant state management hook
import { useReducer, useCallback, useEffect } from 'react';
import type { AssistantState, Message, ApiResponse } from './types';

const API_URL = import.meta.env.PROD
  ? 'https://ck-api.kaitran.ca/api/public/ask'
  : 'http://localhost:7319/api/public/ask';

const STORAGE_KEY = 'docs-assistant-messages';
const MAX_MESSAGES = 10;

type Action =
  | { type: 'SET_INPUT'; payload: string }
  | { type: 'SUBMIT_START' }
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SUBMIT_ERROR'; payload: string }
  | { type: 'SUBMIT_COMPLETE' }
  | { type: 'TOGGLE' }
  | { type: 'CLOSE' }
  | { type: 'RESET' }
  | { type: 'RESTORE'; payload: Message[] };

const initialState: AssistantState = {
  stage: 'idle',
  messages: [],
  isLoading: false,
  error: null,
  inputValue: '',
};

function reducer(state: AssistantState, action: Action): AssistantState {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, inputValue: action.payload, error: null };

    case 'SUBMIT_START':
      return { ...state, isLoading: true, error: null, stage: 'expanded' };

    case 'ADD_MESSAGE':
      const newMessages = [...state.messages, action.payload].slice(-MAX_MESSAGES);
      return { ...state, messages: newMessages, inputValue: '' };

    case 'SUBMIT_COMPLETE':
      return { ...state, isLoading: false };

    case 'SUBMIT_ERROR':
      return { ...state, isLoading: false, error: action.payload };

    case 'TOGGLE':
      return { ...state, stage: state.stage === 'idle' ? 'expanded' : 'idle' };

    case 'CLOSE':
      return { ...state, stage: 'idle' };

    case 'RESET':
      return { ...initialState };

    case 'RESTORE':
      return {
        ...state,
        messages: action.payload,
        stage: action.payload.length > 0 ? 'expanded' : 'idle',
      };

    default:
      return state;
  }
}

export function useAssistant() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Restore messages from sessionStorage
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        const messages = JSON.parse(stored) as Message[];
        dispatch({ type: 'RESTORE', payload: messages });
      }
    } catch (err) {
      console.error('[Assistant] Failed to restore messages:', err);
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  // Persist messages to sessionStorage
  useEffect(() => {
    if (state.messages.length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state.messages));
    }
  }, [state.messages]);

  const setInput = useCallback((value: string) => {
    dispatch({ type: 'SET_INPUT', payload: value });
  }, []);

  // Shared API submission logic (DRY)
  const submitMessage = useCallback(async (query: string) => {
    if (!query.trim() || state.isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query.trim(),
      timestamp: Date.now(),
    };

    dispatch({ type: 'SUBMIT_START' });
    dispatch({ type: 'ADD_MESSAGE', payload: userMessage });

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query.trim() }),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Error: ${response.status}`);
      }

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.answer,
        sources: data.sources,
        timestamp: Date.now(),
      };

      dispatch({ type: 'ADD_MESSAGE', payload: assistantMessage });
      dispatch({ type: 'SUBMIT_COMPLETE' });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get response';
      dispatch({ type: 'SUBMIT_ERROR', payload: errorMessage });
    }
  }, [state.isLoading]);

  // Submit current input value
  const submit = useCallback(() => {
    submitMessage(state.inputValue);
  }, [submitMessage, state.inputValue]);

  // Submit with custom query (for suggested questions)
  const submitQuery = useCallback((query: string) => {
    dispatch({ type: 'SET_INPUT', payload: query });
    submitMessage(query);
  }, [submitMessage]);

  const toggle = useCallback(() => dispatch({ type: 'TOGGLE' }), []);
  const close = useCallback(() => dispatch({ type: 'CLOSE' }), []);
  const reset = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY);
    dispatch({ type: 'RESET' });
  }, []);

  return {
    state,
    setInput,
    submit,
    submitQuery,
    toggle,
    close,
    reset,
  };
}
