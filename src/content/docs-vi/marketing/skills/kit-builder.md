---
lang: vi
title: "ckm:kit-builder"
description: "Xây dựng component ClaudeKit Marketing - skills, agents, workflows"
section: marketing
kit: marketing
category: skills
order: 82
---

> Tạo skills, agents và workflows tùy chỉnh để mở rộng ClaudeKit Marketing cho nhu cầu cụ thể của bạn.

## Skill Này Làm Gì

**Thách thức**: Mỗi marketing team có quy trình và tools riêng. Skills có sẵn trong ClaudeKit Marketing tốt cho use cases chung nhưng có thể chưa cover đặc thù của từng business.

**Giải pháp**: Skill kit-builder cung cấp framework để tạo custom skills, agents và workflows — từ simple slash commands đến complex multi-agent pipelines — và tích hợp vào ClaudeKit Marketing.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi cần xây dựng hoặc mở rộng skill mới.

**Tường minh**: Kích hoạt qua prompt:
```
Activate kit-builder skill to create [skill/agent/workflow] for [mục đích]
```

## Tính Năng

### 1. Anatomy Của Một Skill

**Cấu trúc skill folder**:
```
~/.claude/skills/marketing/skills/my-custom-skill/
├── SKILL.md           # Documentation và metadata
├── skill.ts           # Core logic
├── tools/             # Tool integrations
│   └── api-client.ts
└── prompts/           # Prompt templates
    └── system.md
```

**SKILL.md template**:
```markdown
# My Custom Skill

## Metadata
- **Name**: ckm:my-custom-skill
- **Category**: marketing
- **Trigger**: /ckm:my-custom-skill

## Purpose
[Skill làm gì và tại sao cần nó]

## Activation
Explicit: `/ckm:my-custom-skill [params]`
Implicit: Tự động khi [điều kiện]

## Tools Required
- [API/service cần thiết]

## Output Format
[Mô tả đầu ra]
```

### 2. Tạo Custom Skill

**Ví dụ: LinkedIn Content Generator skill**

```typescript
// skills/linkedin-content/skill.ts
import { Anthropic } from '@anthropic-ai/sdk';

interface LinkedInPostParams {
  topic: string;
  tone: 'thought-leadership' | 'educational' | 'personal-story';
  includeHashtags: boolean;
  targetAudience: string;
}

export async function generateLinkedInPost(params: LinkedInPostParams): Promise<string> {
  const client = new Anthropic();

  const systemPrompt = await readFile('./prompts/linkedin-system.md', 'utf-8');

  const message = await client.messages.create({
    model: 'claude-opus-4-5',
    max_tokens: 1024,
    system: systemPrompt,
    messages: [{
      role: 'user',
      content: `
        Topic: ${params.topic}
        Tone: ${params.tone}
        Target audience: ${params.targetAudience}
        Include hashtags: ${params.includeHashtags}

        Tạo LinkedIn post tối ưu theo thông số trên.
      `
    }]
  });

  return message.content[0].type === 'text' ? message.content[0].text : '';
}
```

### 3. Tạo Custom Agent

**Marketing Research Agent**:
```python
# agents/market-research-agent/agent.py
from google.adk.agents import Agent
from tools import (
    search_google_trends,
    analyze_reddit_discussions,
    scrape_competitor_blog,
    summarize_findings
)

market_research_agent = Agent(
    name="market_research_agent",
    model="gemini-2.0-flash",
    description="Nghiên cứu thị trường toàn diện cho marketing decisions.",
    instruction="""
    Bạn là market research specialist.
    Nhiệm vụ: Thu thập và phân tích thông tin thị trường để support marketing decisions.

    Luôn:
    1. Xác nhận phạm vi nghiên cứu trước
    2. Sử dụng nhiều sources khác nhau
    3. Cross-validate findings
    4. Provide actionable insights, không chỉ raw data
    5. Cite sources cho mọi claim
    """,
    tools=[
        search_google_trends,
        analyze_reddit_discussions,
        scrape_competitor_blog,
        summarize_findings
    ]
)
```

### 4. Tạo Custom Workflow

**Content Production Workflow**:
```yaml
# workflows/weekly-content.yml
name: weekly-content-production
description: Tạo toàn bộ content marketing cho tuần

steps:
  - name: research
    agent: market_researcher
    input: "Trend topics tuần này trong [industry]"
    output: research_report

  - name: content-planning
    agent: content_strategist
    input: research_report
    output: content_calendar

  - name: creation
    parallel: true
    steps:
      - agent: blog_writer
        input: content_calendar.blog_topics
        output: blog_drafts

      - agent: social_writer
        input: content_calendar.social_topics
        output: social_drafts

  - name: review
    agent: editor
    input:
      - blog_drafts
      - social_drafts
    output: final_content
```

### 5. Testing Skills

```typescript
// tests/linkedin-skill.test.ts
import { generateLinkedInPost } from '../skills/linkedin-content/skill';

describe('LinkedIn Content Generator', () => {
  test('generates post với correct tone', async () => {
    const post = await generateLinkedInPost({
      topic: 'AI trong marketing',
      tone: 'thought-leadership',
      includeHashtags: true,
      targetAudience: 'Marketing managers'
    });

    expect(post).toBeDefined();
    expect(post.length).toBeGreaterThan(100);
    expect(post.length).toBeLessThan(3000); // LinkedIn limit
    expect(post).toContain('#'); // Has hashtags
  });
});
```

## Điều Kiện Tiên Quyết

- ClaudeKit Marketing đã cài đặt
- Node.js 18+ hoặc Python 3.10+
- Anthropic API key hoặc Google Gemini API key

## Cấu Hình

**Đăng ký custom skill**:
```json
// ~/.claude/skills/marketing/registry.json
{
  "skills": [
    {
      "name": "ckm:linkedin-content",
      "path": "./skills/linkedin-content",
      "trigger": "/ckm:linkedin-content",
      "description": "Generate LinkedIn posts"
    }
  ]
}
```

## Thực Hành Tốt Nhất

**1. Single Responsibility**
Mỗi skill làm tốt một việc. Compose skills phức tạp từ các skills đơn giản.

**2. Fail Gracefully**
Handle errors và provide helpful messages. Skill kém là khi users không biết tại sao nó fail.

**3. Document Trước Khi Code**
Viết SKILL.md trước khi implement. Nếu khó mô tả, skill design có thể cần rethink.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Industry-Specific Content Skills
**Tình huống**: SaaS trong healthcare cần content skills hiểu terminology và compliance.

**Solution**: Custom skill với domain knowledge baked vào system prompt + tools kết nối với industry databases.

### Trường Hợp 2: Internal Tool Integration
**Tình huống**: Team dùng custom CRM, cần agents có thể read/write CRM data.

**Solution**: Custom tools wrapping CRM API, integrated vào existing agents.

## Xử Lý Sự Cố

**Vấn đề**: Skill không được kích hoạt
**Giải pháp**: Verify registration trong registry.json. Check trigger pattern match.

**Vấn đề**: Skill output không nhất quán
**Giải pháp**: Refine system prompt với more specific instructions và examples.

## Skill Liên Quan

- [Claude Code](/vi/docs/marketing/skills/claude-code) - Cài đặt và config environment
- [Context Engineering](/vi/docs/marketing/skills/context-engineering) - Design agent architecture
- [Google ADK Python](/vi/docs/marketing/skills/google-adk-python) - Python agent framework

## Lệnh Liên Quan

- `/ckm:kit-builder` - Tạo skill mới
- `/ckm:claude-code` - Setup Claude environment
- `/ckm:context-engineering` - Optimize agent design
