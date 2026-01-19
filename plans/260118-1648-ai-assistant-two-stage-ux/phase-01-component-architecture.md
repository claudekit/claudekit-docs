---
title: "Phase 01: Component Architecture & State Management"
status: pending
effort: 1.5h
---

# Phase 01: Component Architecture & State Management

## Context Links

- [Plan Overview](./plan.md)
- [Existing AIChat.tsx](/home/kai/claudekit/claudekit-docs/src/components/AIChat.tsx)
- [Design System](/home/kai/claudekit/claudekit-docs/src/styles/global.css)

## Overview

**Priority**: P1 - Foundation for all subsequent phases
**Status**: Pending
**Description**: Create the core component structure, TypeScript interfaces, state management, and API integration layer.

## Key Insights

- Existing `AIChat.tsx` has working API integration - extract and reuse
- State machine pattern cleanest for multi-stage UX
- React 18 with hooks sufficient - no external state lib needed
- Design tokens already defined in global.css

## Requirements

### Functional
- Component must manage: stage (idle/expanded), messages, loading, error states
- API calls to `https://ck-api.kaitran.ca/api/public/ask`
- Message history with user/assistant roles
- Source citations from API response

### Non-Functional
- TypeScript strict mode compliance
- No external state management libraries
- < 200 lines per file (modularize if needed)
- All CSS via Tailwind + CSS variables

## Architecture

### Component Structure

```
DocsAssistant/
├── DocsAssistant.tsx          # Main container, state machine
├── AssistantInputBar.tsx      # Floating input bar (Stage 1)
├── AssistantSidebar.tsx       # Expanded sidebar (Stage 2)
├── AssistantMessage.tsx       # Individual message bubble
├── AssistantSources.tsx       # Source citations list
└── types.ts                   # Shared interfaces
```

### State Machine

```typescript
type AssistantStage = 'idle' | 'expanded';

interface AssistantState {
  stage: AssistantStage;
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  inputValue: string;
}

type AssistantAction =
  | { type: 'SET_INPUT'; payload: string }
  | { type: 'SUBMIT' }
  | { type: 'RECEIVE_RESPONSE'; payload: Message }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'TOGGLE' }
  | { type: 'CLOSE' }
  | { type: 'RESET' };
```

### TypeScript Interfaces

```typescript
// types.ts
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

export interface DocsAssistantProps {
  initialMessage?: string;
  maxMessages?: number;
}
```

## Related Code Files

### Files to Create
- `src/components/assistant/DocsAssistant.tsx`
- `src/components/assistant/types.ts`
- `src/components/assistant/use-assistant.ts` (custom hook)

### Files to Modify
- None in this phase

### Files to Reference
- `src/components/AIChat.tsx` - Extract API logic
- `src/styles/global.css` - Design tokens

## Implementation Steps

### Step 1: Create Types File
```typescript
// src/components/assistant/types.ts
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
```

### Step 2: Create Custom Hook
```typescript
// src/components/assistant/use-assistant.ts
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
  | { type: 'SUBMIT_SUCCESS'; payload: Message }
  | { type: 'SUBMIT_ERROR'; payload: string }
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

    case 'SUBMIT_SUCCESS':
      const newMessages = [...state.messages, action.payload].slice(-MAX_MESSAGES);
      return {
        ...state,
        isLoading: false,
        messages: newMessages,
        inputValue: ''
      };

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
        stage: action.payload.length > 0 ? 'expanded' : 'idle'
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
    } catch {
      // Ignore parse errors
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

  const submit = useCallback(async () => {
    const query = state.inputValue.trim();
    if (!query || state.isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: Date.now(),
    };
    dispatch({ type: 'SUBMIT_START' });
    dispatch({ type: 'SUBMIT_SUCCESS', payload: userMessage });

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
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
      dispatch({ type: 'SUBMIT_SUCCESS', payload: assistantMessage });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get response';
      dispatch({ type: 'SUBMIT_ERROR', payload: errorMessage });
    }
  }, [state.inputValue, state.isLoading]);

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
    toggle,
    close,
    reset,
  };
}
```

### Step 3: Create Main Component Shell
```typescript
// src/components/assistant/DocsAssistant.tsx
import { useAssistant } from './use-assistant';

export function DocsAssistant() {
  const { state, setInput, submit, toggle, close, reset } = useAssistant();

  // Keyboard shortcut: Cmd/Ctrl + I
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'i') {
        e.preventDefault();
        toggle();
      }
      if (e.key === 'Escape' && state.stage === 'expanded') {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggle, close, state.stage]);

  return (
    <div className={`assistant-container ${state.stage}`}>
      {/* Phase 02: Input bar component */}
      {/* Phase 03: Sidebar component */}
    </div>
  );
}
```

## Todo List

- [ ] Create `src/components/assistant/` directory
- [ ] Create `types.ts` with all TypeScript interfaces
- [ ] Create `use-assistant.ts` custom hook with reducer
- [ ] Create `DocsAssistant.tsx` shell component
- [ ] Test API integration works (can reuse from AIChat.tsx)
- [ ] Verify TypeScript strict mode passes
- [ ] Test sessionStorage persistence

## Success Criteria

- [ ] All TypeScript interfaces defined and exported
- [ ] Custom hook manages state correctly
- [ ] API calls work (test manually)
- [ ] Keyboard shortcut (Cmd+I) toggles state
- [ ] SessionStorage persists/restores messages
- [ ] No TypeScript errors

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| API endpoint unavailable | Low | High | Graceful error handling, retry logic |
| SessionStorage quota exceeded | Low | Medium | Limit to 10 messages, catch errors |
| TypeScript strict mode issues | Medium | Low | Fix incrementally during development |

## Security Considerations

- API calls only to known endpoint
- No user credentials stored
- Input sanitized before API call (trim, length limit)
- XSS prevention via React's default escaping

## Next Steps

- Phase 02: Build the floating input bar UI
