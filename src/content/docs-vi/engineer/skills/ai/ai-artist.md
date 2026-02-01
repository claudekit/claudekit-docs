---
title: AI Artist - Prompt Engineering
description: Viết và tối ưu hóa prompts cho kết quả AI-generated qua các mô hình text và image cho LLMs, image generators và video generators
section: engineer
kit: engineer
category: skills
order: 1
published: true
lang: vi
---

# AI Artist - Prompt Engineering

> Tạo prompts hiệu quả cho các mô hình AI text và image generation với các patterns và techniques đã được chứng minh.

## Skill Này Làm Gì

AI Artist cung cấp hướng dẫn prompt engineering toàn diện cho cả các LLMs text-based (Claude, GPT, Gemini) và các mô hình generative media (Midjourney, DALL-E, Stable Diffusion, Imagen, Flux, Veo). Skill này giúp bạn cấu trúc prompts tạo ra outputs nhất quán, chất lượng cao bằng cách áp dụng các patterns đã được chứng minh về clarity, context và iteration.

Dù bạn đang tạo marketing copy, tạo images cho product design, hay xây dựng các AI workflows phức tạp nhiều bước, AI Artist cung cấp các templates battle-tested và model-specific syntax để tối đa hóa chất lượng kết quả và giảm thời gian iteration.

## Prerequisites

- Truy cập ít nhất một AI model (LLM hoặc image generator)
- Hiểu biết cơ bản về task bạn muốn AI thực hiện
- Tùy chọn: API keys cho programmatic access (nếu tự động hóa prompts)

## Activation

Skill này kích hoạt tự động khi:
- User yêu cầu trợ giúp về viết hoặc tối ưu hóa prompt
- User đề cập đến các AI models như Claude, GPT, Midjourney, DALL-E, Stable Diffusion
- User cần generate images, text hoặc các AI outputs khác
- User tham chiếu prompt engineering, few-shot examples, hoặc chain-of-thought

Kích hoạt thủ công:
```bash
/ai-artist
```

## Nguyên Tắc Cốt Lõi

### 1. Clarity
Cụ thể và tránh mơ hồ. Thay vì "làm cho nó tốt hơn," hãy chỉ định tiêu chí đo lường được như "tăng contrast 20%" hoặc "đơn giản hóa xuống dưới 100 từ."

### 2. Context
Thiết lập bối cảnh ngay từ đầu. Định nghĩa vai trò, constraints, audience và thông tin background trước khi nêu task.

### 3. Structure
Sử dụng định dạng nhất quán với markdown headers, XML tags hoặc delimiters rõ ràng để phân tách các phần của prompt.

### 4. Iteration
Tinh chỉnh dựa trên outputs. A/B test các biến thể và theo dõi patterns nào tạo ra kết quả tốt nhất cho use case của bạn.

## Khả Năng

### LLM Prompt Structuring

Cấu trúc prompts cho các AI models text-based sử dụng pattern role-context-task-format:

```markdown
[Role] Bạn là một senior technical writer chuyên về API documentation.
[Context] REST API của chúng tôi phục vụ 10,000+ developers. Docs hiện tại có tỷ lệ bounce 30%.
[Task] Viết lại docs endpoint authentication để cải thiện clarity và thêm code examples.
[Format] Output dưới dạng markdown với ví dụ curl, Python và JavaScript cho mỗi endpoint.
[Examples]
Tốt: GET /users trả về danh sách user phân trang với 'next' cursor
Xấu: GET /users trả về users
```

**Khi nào dùng**: Các tasks phức tạp yêu cầu domain expertise, output formats cụ thể, hoặc khi few-shot examples cải thiện accuracy.

### Image Generation Prompts

Tạo prompts cho các AI models visual với cấu trúc subject-style-composition-quality:

```
Portrait of a cyberpunk hacker, neon purple and blue lighting, cinematic close-up shot, detailed facial features with glowing neural implants, volumetric fog, 8k render, artstation quality --ar 16:9 --style raw
```

**Phân tích cấu trúc**:
- **Subject**: cyberpunk hacker portrait
- **Style**: neon purple/blue lighting, cinematic
- **Composition**: close-up shot, volumetric fog
- **Quality**: 8k, artstation quality
- **Parameters**: aspect ratio 16:9, raw style (Midjourney-specific)

**Khi nào dùng**: Product mockups, marketing visuals, concept art, UI design exploration.

### Domain-Specific Patterns

Skill bao gồm các reference files chuyên biệt cho:

| Domain | File | Use Cases |
|--------|------|-----------|
| Marketing | `references/domain-marketing.md` | Headlines, product copy, email campaigns, ad creative |
| Code | `references/domain-code.md` | Function generation, code review, refactoring, debugging |
| Writing | `references/domain-writing.md` | Stories, character development, dialogue, content editing |
| Data | `references/domain-data.md` | Data extraction, analysis, comparison, transformation |

### Advanced Techniques

Reference files bao gồm:
- **Chain-of-thought prompting**: Chia nhỏ tasks phức tạp thành các bước reasoning
- **Few-shot examples**: Cung cấp 1-3 ví dụ để hướng dẫn output format
- **Meta-prompting**: Prompts tạo ra prompts khác
- **Negative prompts**: Chỉ định những gì cần tránh (cho Stable Diffusion, Midjourney)
- **A/B testing**: So sánh có hệ thống các biến thể prompt

## Model-Specific Syntax

Các models khác nhau có parameter syntax riêng:

| Model | Key Parameters | Example |
|-------|---------------|---------|
| Midjourney | `--ar`, `--style`, `--chaos`, `--weird`, `--v 6.1` | `portrait --ar 16:9 --style raw --v 6.1` |
| DALL-E 3 | Natural language, HD quality option | `high quality HD portrait in natural lighting` |
| Stable Diffusion | Weighted tokens `(word:1.2)`, negative prompts | `(cyberpunk:1.3), neon, Negative: blurry, low quality` |
| Flux | Natural prompts, style mixing, `--guidance` | `cinematic portrait --guidance 7.5` |
| Imagen/Veo | Descriptive text, aspect ratio, style references | `16:9 cinematic portrait with dramatic lighting` |

## Ví Dụ

### Ví Dụ 1: Marketing Copy Generation

**Task**: Tạo product description cho tai nghe noise-cancelling.

**Prompt**:
```markdown
[Role] Bạn là một copywriter thuyết phục chuyên về consumer electronics.
[Context] Đối tượng mục tiêu: remote workers tuổi 25-45, ngân sách $200-$400.
[Task] Viết product description 100 từ cho tai nghe ProSound X500 noise-cancelling.
[Format] Cấu trúc: Hook sentence, 3 key benefits với emotional triggers, call-to-action.
[Example]
Tốt: "Silence the chaos. ProSound X500 delivers studio-grade quiet so you focus on what matters."
Xấu: "These headphones have good noise cancellation features."
```

### Ví Dụ 2: Image Generation cho Product Mockup

**Task**: Tạo hero image cho productivity app landing page.

**Prompt**:
```
Clean, modern workspace with MacBook Pro displaying productivity dashboard, warm morning light streaming through window, minimalist desk with coffee mug and succulent plant, shallow depth of field, professional product photography, soft shadows, Scandinavian aesthetic, 4k quality --ar 16:9 --style raw
```

**Kết quả**: Hero image chất lượng cao theo xu hướng thiết kế SaaS hiện đại.

## Best Practices

**Bắt đầu rộng, tinh chỉnh hẹp**: Bắt đầu với prompts đơn giản, sau đó thêm constraints dựa trên initial outputs.

**Dùng examples thay vì descriptions**: "Như docs của Stripe" rõ ràng hơn "documentation clean và minimalist."

**Chỉ định output format rõ ràng**: Markdown, JSON, CSV, bullet points, etc. Tránh format ambiguity.

**Bao gồm success criteria**: "Dưới 150 từ," "p95 latency <200ms," "phù hợp cho độ tuổi 12+."

**Version prompts của bạn**: Theo dõi prompts nào tạo ra kết quả tốt nhất để tái sử dụng sau.

**Test edge cases**: Điều gì xảy ra với unusual inputs? Empty data? Maximum length?

**Tránh conflicting constraints**: "Detailed but concise" mâu thuẫn. Chọn một.

## Anti-Patterns

- **Hướng dẫn mơ hồ**: "Làm cho nó tốt hơn" không cung cấp tiêu chí đo lường
- **Conflicting constraints**: "Professional but casual tone" tạo confusion
- **Thiếu context**: Yêu cầu code mà không chỉ định language, framework, hoặc use case
- **Over-prompting**: Chi tiết dư thừa làm loãng core requirements
- **Bỏ qua điểm mạnh của model**: Dùng Midjourney cho photorealism khi DALL-E xuất sắc ở đó

## Troubleshooting

**Problem**: Outputs không nhất quán qua các lần chạy.

**Solution**: Thêm explicit constraints, few-shot examples, hoặc tăng temperature/randomness settings nếu được hỗ trợ.

---

**Problem**: Image generation bỏ qua chi tiết quan trọng.

**Solution**: Dùng weighted tokens `(keyword:1.3)` trong Stable Diffusion hoặc đặt chi tiết quan trọng ở đầu prompt cho Midjourney.

---

**Problem**: LLM responses quá dài dòng.

**Solution**: Thêm explicit length constraint: "Giới hạn response ở 3 câu" hoặc "Tối đa 200 từ."

---

**Problem**: AI hiểu sai creative direction.

**Solution**: Cung cấp visual hoặc textual references: "Theo style của Apple's product pages" hoặc đính kèm reference images.

## Các Skills Liên Quan

- [AI Multimodal](/vi/docs/engineer/skills/ai/ai-multimodal) - Xử lý và phân tích images, audio, video, PDFs với Gemini
- [Frontend Design](/vi/docs/engineer/skills/frontend/frontend-design) - Implement designs từ AI-generated mockups
- [Creativity](/vi/docs/engineer/skills/creativity) - Creative content generation workflows

## Các Commands Liên Quan

- Không có direct commands - Skill này hướng dẫn prompt crafting qua tất cả AI interactions
