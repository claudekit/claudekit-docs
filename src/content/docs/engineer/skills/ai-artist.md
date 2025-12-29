---
title: AI Artist - Prompt Engineering
description: Write and optimize prompts for AI-generated outcomes across text and image models for LLMs, image generators, and video generators
section: engineer
category: skills
order: 1
published: true
---

# AI Artist - Prompt Engineering

> Craft effective prompts for AI text and image generation models with proven patterns and techniques.

## What This Skill Does

AI Artist provides comprehensive prompt engineering guidance for both text-based LLMs (Claude, GPT, Gemini) and generative media models (Midjourney, DALL-E, Stable Diffusion, Imagen, Flux, Veo). This skill helps you structure prompts that produce consistent, high-quality outputs by applying proven patterns for clarity, context, and iteration.

Whether you're generating marketing copy, creating images for product design, or building complex multi-step AI workflows, AI Artist gives you battle-tested templates and model-specific syntax to maximize result quality and reduce iteration time.

## Prerequisites

- Access to at least one AI model (LLM or image generator)
- Basic understanding of the task you want the AI to perform
- Optional: API keys for programmatic access (if automating prompts)

## Activation

This skill activates automatically when:
- User requests help with prompt writing or optimization
- User mentions AI models like Claude, GPT, Midjourney, DALL-E, Stable Diffusion
- User needs to generate images, text, or other AI outputs
- User references prompt engineering, few-shot examples, or chain-of-thought

Manual activation:
```bash
/ai-artist
```

## Core Principles

### 1. Clarity
Be specific and avoid ambiguity. Instead of "make it better," specify measurable criteria like "increase contrast by 20%" or "simplify to under 100 words."

### 2. Context
Set the scene upfront. Define roles, constraints, audience, and background information before stating the task.

### 3. Structure
Use consistent formatting with markdown headers, XML tags, or clear delimiters to separate prompt sections.

### 4. Iteration
Refine based on outputs. A/B test variations and track which patterns produce the best results for your use case.

## Capabilities

### LLM Prompt Structuring

Structure prompts for text-based AI models using role-context-task-format pattern:

```markdown
[Role] You are a senior technical writer specializing in API documentation.
[Context] Our REST API serves 10,000+ developers. Current docs have 30% bounce rate.
[Task] Rewrite the authentication endpoint docs to improve clarity and add code examples.
[Format] Output as markdown with curl, Python, and JavaScript examples for each endpoint.
[Examples]
Good: GET /users returns paginated user list with 'next' cursor
Bad: GET /users returns users
```

**When to use**: Complex tasks requiring domain expertise, specific output formats, or where few-shot examples improve accuracy.

### Image Generation Prompts

Craft prompts for visual AI models with subject-style-composition-quality structure:

```
Portrait of a cyberpunk hacker, neon purple and blue lighting, cinematic close-up shot, detailed facial features with glowing neural implants, volumetric fog, 8k render, artstation quality --ar 16:9 --style raw
```

**Structure breakdown**:
- **Subject**: cyberpunk hacker portrait
- **Style**: neon purple/blue lighting, cinematic
- **Composition**: close-up shot, volumetric fog
- **Quality**: 8k, artstation quality
- **Parameters**: aspect ratio 16:9, raw style (Midjourney-specific)

**When to use**: Product mockups, marketing visuals, concept art, UI design exploration.

### Domain-Specific Patterns

The skill includes specialized reference files for:

| Domain | File | Use Cases |
|--------|------|-----------|
| Marketing | `references/domain-marketing.md` | Headlines, product copy, email campaigns, ad creative |
| Code | `references/domain-code.md` | Function generation, code review, refactoring, debugging |
| Writing | `references/domain-writing.md` | Stories, character development, dialogue, content editing |
| Data | `references/domain-data.md` | Data extraction, analysis, comparison, transformation |

### Advanced Techniques

Reference files cover:
- **Chain-of-thought prompting**: Breaking complex tasks into reasoning steps
- **Few-shot examples**: Providing 1-3 examples to guide output format
- **Meta-prompting**: Prompts that generate other prompts
- **Negative prompts**: Specifying what to avoid (for Stable Diffusion, Midjourney)
- **A/B testing**: Systematic comparison of prompt variations

## Model-Specific Syntax

Different models have unique parameter syntax:

| Model | Key Parameters | Example |
|-------|---------------|---------|
| Midjourney | `--ar`, `--style`, `--chaos`, `--weird`, `--v 6.1` | `portrait --ar 16:9 --style raw --v 6.1` |
| DALL-E 3 | Natural language, HD quality option | `high quality HD portrait in natural lighting` |
| Stable Diffusion | Weighted tokens `(word:1.2)`, negative prompts | `(cyberpunk:1.3), neon, Negative: blurry, low quality` |
| Flux | Natural prompts, style mixing, `--guidance` | `cinematic portrait --guidance 7.5` |
| Imagen/Veo | Descriptive text, aspect ratio, style references | `16:9 cinematic portrait with dramatic lighting` |

## Examples

### Example 1: Marketing Copy Generation

**Task**: Generate product description for noise-cancelling headphones.

**Prompt**:
```markdown
[Role] You are a persuasive copywriter specializing in consumer electronics.
[Context] Target audience: remote workers aged 25-45, budget $200-$400.
[Task] Write a 100-word product description for ProSound X500 noise-cancelling headphones.
[Format] Structure: Hook sentence, 3 key benefits with emotional triggers, call-to-action.
[Example]
Good: "Silence the chaos. ProSound X500 delivers studio-grade quiet so you focus on what matters."
Bad: "These headphones have good noise cancellation features."
```

### Example 2: Image Generation for Product Mockup

**Task**: Create hero image for productivity app landing page.

**Prompt**:
```
Clean, modern workspace with MacBook Pro displaying productivity dashboard, warm morning light streaming through window, minimalist desk with coffee mug and succulent plant, shallow depth of field, professional product photography, soft shadows, Scandinavian aesthetic, 4k quality --ar 16:9 --style raw
```

**Result**: High-quality hero image following contemporary SaaS design trends.

## Best Practices

**Start broad, refine narrow**: Begin with simple prompts, then add constraints based on initial outputs.

**Use examples over descriptions**: "Like Stripe's docs" is clearer than "clean and minimalist documentation."

**Specify output format explicitly**: Markdown, JSON, CSV, bullet points, etc. Prevents format ambiguity.

**Include success criteria**: "Under 150 words," "p95 latency <200ms," "suitable for age 12+."

**Version your prompts**: Track which prompts produce best results for future reuse.

**Test edge cases**: What happens with unusual inputs? Empty data? Maximum length?

**Avoid conflicting constraints**: "Detailed but concise" is contradictory. Choose one.

## Anti-Patterns

- **Vague instructions**: "Make it better" provides no measurable criteria
- **Conflicting constraints**: "Professional but casual tone" creates confusion
- **Missing context**: Asking for code without specifying language, framework, or use case
- **Over-prompting**: Redundant details that dilute core requirements
- **Ignoring model strengths**: Using Midjourney for photorealism when DALL-E excels at it

## Troubleshooting

**Problem**: Outputs are inconsistent across runs.

**Solution**: Add explicit constraints, few-shot examples, or increase temperature/randomness settings if supported.

---

**Problem**: Image generation ignores key details.

**Solution**: Use weighted tokens `(keyword:1.3)` in Stable Diffusion or place critical details at prompt start for Midjourney.

---

**Problem**: LLM responses are too verbose.

**Solution**: Add explicit length constraint: "Limit response to 3 sentences" or "Maximum 200 words."

---

**Problem**: AI misunderstands creative direction.

**Solution**: Provide visual or textual references: "In the style of Apple's product pages" or attach reference images.

## Related Skills

- [AI Multimodal](/docs/engineer/skills/ai-multimodal) - Process and analyze images, audio, video, PDFs with Gemini
- [Frontend Design](/docs/engineer/skills/frontend-design) - Implement designs from AI-generated mockups
- [Creativity](/docs/engineer/skills/creativity) - Creative content generation workflows

## Related Commands

- No direct commands - This skill informs prompt crafting across all AI interactions
