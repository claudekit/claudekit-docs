---
title: "AI Artist"
description: "Prompt engineering for AI text and image generation: LLM prompts, image generation syntax, style keywords, and iterative refinement."
section: marketing
category: skills
order: 18
---

> Craft effective prompts for AI models (Claude, GPT, Gemini, Midjourney, DALL-E, Stable Diffusion, Imagen, Flux) using proven patterns.

## What This Skill Does

**The Challenge**: Getting quality outputs from AI models requires understanding model-specific syntax, prompt structure, and iterative refinement techniques. Generic prompts produce generic results.

**The Solution**: AI Artist skill provides prompt engineering patterns for LLMs (Claude, GPT, Gemini), image generators (Midjourney, DALL-E, Stable Diffusion, Imagen, Flux), and video generators (Veo, Runway). Includes style keywords, negative prompts, few-shot examples, and domain-specific patterns.

## Activation

**Implicit**: Activates when agents craft prompts for AI generation tasks.

**Explicit**: `/skill:add ai-artist`

## Capabilities

### 1. LLM Prompt Structure
Consistent formatting for text generation models.

**Universal pattern**:
```markdown
[Role] You are a {expert type} specializing in {domain}.
[Context] {Background information and constraints}
[Task] {Specific action to perform}
[Format] {Output structure - JSON, markdown, list}
[Examples] {1-3 few-shot examples if needed}
```

**Example - Marketing copy**:
```markdown
[Role] You are a conversion copywriter specializing in SaaS landing pages.
[Context] Target audience: B2B project managers frustrated with email-based task tracking.
[Task] Write above-the-fold hero section (headline + subheadline + CTA).
[Format] Markdown with labeled sections.
```

**Guide**: `references/llm-prompting.md`

### 2. Image Generation Prompts
Model-specific syntax for visual generation.

**Universal structure**:
```
[Subject] {main subject with details}
[Style] {artistic style, medium, artist reference}
[Composition] {framing, angle, lighting}
[Quality] {resolution modifiers, rendering quality}
[Negative] {what to avoid - if supported}
```

**Example - Product mockup**:
```
Modern SaaS dashboard interface, clean minimalist design, blue and white color scheme, soft shadows, centered composition, professional photography, 4k resolution --ar 16:9 --style raw
```

**Model syntax guide**: `references/image-prompting.md`

### 3. Model-Specific Optimization
Leverage each model's strengths and syntax.

**Model comparison**:
| Model | Key Syntax | Strengths |
|-------|------------|-----------|
| **Midjourney** | `--ar`, `--style`, `--chaos`, `--v 6.1` | Artistic, stylized images |
| **DALL-E 3** | Natural language, no parameters | Photorealistic, follows prompts closely |
| **Stable Diffusion** | `(word:1.2)` weights, LoRA | Fine control, community models |
| **Flux** | Natural prompts, `--guidance` | Style mixing, creative flexibility |
| **Imagen 4** | Descriptive text, aspect ratios | Marketing visuals, product shots |

**Syntax guide**: `references/image-prompting.md`

## Prerequisites

- Access to target AI model (API keys or platform accounts)
- Clear creative direction or brand guidelines

## Configuration

No configuration needed. Skill provides prompt patterns and examples.

## Best Practices

**1. Clarity over cleverness**
"A blue button" beats "An azure rectangular interactive element". Be specific and direct.

**2. Iterate in small steps**
Change one variable at a time (subject, style, composition). Big rewrites make it hard to identify what worked.

**3. Use references when available**
"In the style of Apple product photography" is clearer than describing the style manually.

## Common Use Cases

### Use Case 1: Product Hero Image Generation
**Scenario**: Generate hero image for SaaS landing page.

**Workflow**:
1. Define core elements: Dashboard UI, professional setting, clean aesthetic
2. Draft prompt:
   ```
   Modern SaaS dashboard interface displayed on MacBook Pro,
   sitting on white desk with coffee cup, soft natural lighting from window,
   minimalist office background, professional photography,
   depth of field, 8k resolution --ar 16:9
   ```
3. Generate with Imagen 4 or Midjourney
4. Refine if needed (adjust lighting, composition)

**Iterations**: Typically 2-3 generations to find winner.

### Use Case 2: Email Campaign Copywriting
**Scenario**: Write re-engagement email for inactive trial users.

**Workflow**:
1. Structure prompt:
   ```markdown
   [Role] Conversion copywriter for B2B SaaS
   [Context] Trial users inactive 14+ days, testing project management tool
   [Task] Write re-engagement email using PAS formula
   [Format] Subject line + 3-paragraph body + CTA
   [Examples]
   Subject: We miss you [Name]
   Body: Problem → Agitate → Solution structure
   ```
2. Generate with Claude or GPT
3. A/B test 3 variations

**Output**: High-converting email copy following proven formula.

## Troubleshooting

**Issue**: Generated images don't match brand
**Solution**: Add specific brand colors, style keywords, and reference existing assets. Load `brand-guidelines` skill for brand context.

**Issue**: LLM outputs too verbose or generic
**Solution**: Add format constraints ("Max 50 words", "Use bullet points"). Include few-shot examples of desired output.

**Issue**: Image generation keeps failing safety filters
**Solution**: Review model's content policy. Avoid ambiguous terms that trigger filters. Use alternative phrasing.

## Related Skills

- [AI Multimodal](/docs/marketing/skills/ai-multimodal) - Execute image/video generation
- [Copywriting](/docs/marketing/skills/copywriting) - Copy formulas for LLM prompts
- [Creativity](/docs/marketing/skills/creativity) - Creative direction and style selection
- [Brand Guidelines](/docs/marketing/skills/brand-guidelines) - Brand-aligned prompts

## Related Commands

- `/design/good` - Generate visuals with optimized prompts
- `/content/good` - Generate high-quality copy
- `/ask` - Get prompt optimization advice
