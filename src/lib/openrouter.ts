import OpenAI from 'openai';

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatOptions {
  messages: ChatMessage[];
  model?: string;
  temperature?: number;
  max_tokens?: number;
}

export class OpenRouterClient {
  private client: OpenAI;

  constructor(apiKey?: string) {
    this.client = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: apiKey || process.env.OPENROUTER_API_KEY,
      defaultHeaders: {
        'HTTP-Referer': 'https://docs.claudekit.cc',
        'X-Title': 'ClaudeKit Documentation',
      },
    });
  }

  async chat(options: ChatOptions): Promise<string> {
    const {
      messages,
      model = 'anthropic/claude-3.5-sonnet',
      temperature = 0.7,
      max_tokens = 2048,
    } = options;

    try {
      const response = await this.client.chat.completions.create({
        model,
        messages,
        temperature,
        max_tokens,
      });

      return response.choices[0]?.message?.content || 'No response generated.';
    } catch (error) {
      console.error('OpenRouter API error:', error);
      throw new Error('Failed to get AI response');
    }
  }

  async *streamChat(options: ChatOptions): AsyncGenerator<string> {
    const {
      messages,
      model = 'anthropic/claude-3.5-sonnet',
      temperature = 0.7,
      max_tokens = 2048,
    } = options;

    try {
      const stream = await this.client.chat.completions.create({
        model,
        messages,
        temperature,
        max_tokens,
        stream: true,
      });

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) {
          yield content;
        }
      }
    } catch (error) {
      console.error('OpenRouter streaming error:', error);
      throw new Error('Failed to stream AI response');
    }
  }
}
