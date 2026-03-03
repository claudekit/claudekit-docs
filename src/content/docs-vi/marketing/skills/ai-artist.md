---
lang: vi
title: "ckm:ai-artist"
description: "Kỹ năng viết prompt cho AI tạo văn bản và hình ảnh: cấu trúc prompt LLM, cú pháp tạo ảnh, từ khóa phong cách và kỹ thuật tinh chỉnh."
section: marketing
category: skills
order: 18
---

# AI Artist

> Tạo prompt hiệu quả cho các mô hình AI (Claude, GPT, Gemini, Midjourney, DALL-E, Stable Diffusion, Imagen, Flux) bằng các mẫu đã được kiểm chứng.

## Skill Này Làm Gì

**Thách thức**: Để nhận được kết quả chất lượng cao từ các mô hình AI đòi hỏi phải hiểu cú pháp đặc thù của từng mô hình, cấu trúc prompt và kỹ thuật tinh chỉnh lặp đi lặp lại. Prompt chung chung tạo ra kết quả chung chung.

**Giải pháp**: Skill AI Artist cung cấp các mẫu viết prompt cho LLM (Claude, GPT, Gemini), trình tạo ảnh (Midjourney, DALL-E, Stable Diffusion, Imagen, Flux) và trình tạo video (Veo, Runway). Bao gồm từ khóa phong cách, negative prompt, few-shot examples và các mẫu theo lĩnh vực.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi agent tạo prompt cho các tác vụ tạo nội dung AI.

**Tường minh**: Dùng ngôn ngữ tự nhiên để kích hoạt: "Activate ai-artist skill for prompt optimization"

## Tính Năng

### 1. Cấu Trúc Prompt LLM
Định dạng nhất quán cho các mô hình tạo văn bản.

**Mẫu chung**:
```markdown
[Role] You are a {expert type} specializing in {domain}.
[Context] {Background information and constraints}
[Task] {Specific action to perform}
[Format] {Output structure - JSON, markdown, list}
[Examples] {1-3 few-shot examples if needed}
```

**Ví dụ - Nội Dung Marketing**:
```markdown
[Role] You are a conversion copywriter specializing in SaaS landing pages.
[Context] Target audience: B2B project managers frustrated with email-based tracking.
[Task] Write above-the-fold hero section (headline + subheadline + CTA).
[Format] Markdown with labeled sections.
```

**Hướng dẫn**: `references/llm-prompting.md`

### 2. Prompt Tạo Ảnh
Cú pháp đặc thù từng mô hình cho tạo ảnh.

**Cấu trúc chung**:
```
[Subject] {chủ thể chính với chi tiết}
[Style] {phong cách nghệ thuật, chất liệu, tham chiếu nghệ sĩ}
[Composition] {khung cảnh, góc độ, ánh sáng}
[Quality] {độ phân giải, bộ điều chỉnh chất lượng}
[Negative] {những gì cần tránh - nếu được hỗ trợ}
```

**Ví dụ - Mockup Sản Phẩm**:
```
Modern SaaS dashboard interface, clean minimalist design, blue and white color scheme, soft shadows, centered composition, professional photography, 4k resolution --ar 16:9 --style raw
```

**Hướng dẫn cú pháp từng mô hình**: `references/image-prompting.md`

### 3. Tối Ưu Theo Từng Mô Hình
Tận dụng điểm mạnh và cú pháp của từng mô hình.

**So sánh mô hình**:
| Mô hình | Cú pháp chính | Điểm mạnh |
|---------|--------------|-----------|
| **Midjourney** | `--ar`, `--style`, `--chaos`, `--v 6.1` | Hình ảnh nghệ thuật, phong cách hóa |
| **DALL-E 3** | Ngôn ngữ tự nhiên, không tham số | Thực tế ảo, tuân theo prompt chặt chẽ |
| **Stable Diffusion** | Trọng số `(word:1.2)`, LoRA | Kiểm soát chi tiết, mô hình cộng đồng |
| **Flux** | Prompt tự nhiên, `--guidance` | Pha trộn phong cách, linh hoạt sáng tạo |
| **Imagen 4** | Văn bản mô tả, tỷ lệ khung hình | Hình ảnh marketing, ảnh sản phẩm |

**Hướng dẫn cú pháp**: `references/image-prompting.md`

## Điều Kiện Tiên Quyết

- Quyền truy cập vào mô hình AI mục tiêu (API key hoặc tài khoản nền tảng)
- Brief sáng tạo rõ ràng hoặc hướng dẫn thương hiệu

## Cấu Hình

Không cần cấu hình. Skill cung cấp mẫu prompt và ví dụ.

## Thực Hành Tốt Nhất

**1. Rõ Ràng Hơn Thông Minh**
"A blue button" vẫn tốt hơn "A rectangular azure interactive element". Hãy cụ thể và trực tiếp.

**2. Tinh Chỉnh Từng Bước Nhỏ**
Thay đổi một biến tại một lúc (chủ thể, phong cách, bố cục). Viết lại nhiều cùng lúc khiến khó xác định điều gì hiệu quả.

**3. Sử Dụng Tham Chiếu Khi Có Thể**
"In the style of Apple product photography" rõ ràng hơn mô tả thủ công phong cách đó.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Tạo Ảnh Hero Sản Phẩm
**Tình huống**: Tạo ảnh hero cho trang đích SaaS.

**Quy trình**:
1. Xác định các yếu tố cốt lõi: Giao diện Dashboard UI, môi trường chuyên nghiệp, thẩm mỹ sạch sẽ
2. Soạn prompt:
   ```
   Modern SaaS dashboard interface displayed on MacBook Pro,
   sitting on white desk with coffee cup, soft natural light from window,
   minimalist office background, professional photography,
   depth of field, 8k resolution --ar 16:9
   ```
3. Tạo với Imagen 4 hoặc Midjourney
4. Tinh chỉnh nếu cần (điều chỉnh ánh sáng, bố cục)

**Tinh chỉnh**: Thông thường cần 2-3 lần tạo để tìm được kết quả tốt nhất.

### Trường Hợp 2: Viết Nội Dung Chiến Dịch Email
**Tình huống**: Viết email tái tương tác cho người dùng dùng thử không hoạt động.

**Quy trình**:
1. Cấu trúc prompt:
   ```markdown
   [Role] Conversion copywriter for B2B SaaS
   [Context] Inactive trial users 14+ days, tried project management tool
   [Task] Write re-engagement email using PAS formula
   [Format] Subject line + 3-paragraph body + CTA
   [Examples]
   Subject: We miss you [Name]
   Body: Problem → Agitate → Solution structure
   ```
2. Tạo với Claude hoặc GPT
3. A/B test 3 biến thể

**Kết quả**: Nội dung email có tỷ lệ chuyển đổi cao theo công thức đã được kiểm chứng.

## Xử Lý Sự Cố

**Vấn đề**: Ảnh tạo ra không khớp với thương hiệu
**Giải pháp**: Thêm màu sắc thương hiệu cụ thể, từ khóa phong cách và tham chiếu tài sản hiện có. Tải skill `brand` để có ngữ cảnh thương hiệu.

**Vấn đề**: Kết quả LLM quá dài dòng hoặc chung chung
**Giải pháp**: Thêm ràng buộc định dạng ("Tối đa 50 từ", "Dùng gạch đầu dòng"). Bao gồm few-shot examples của kết quả mong muốn.

**Vấn đề**: Tạo ảnh liên tục bị lọc an toàn
**Giải pháp**: Xem xét chính sách nội dung của mô hình. Tránh các thuật ngữ mơ hồ kích hoạt bộ lọc. Dùng cách diễn đạt thay thế.

## Skill Liên Quan

- [AI Multimodal](/vi/docs/marketing/skills/ai-multimodal) - Thực thi tạo ảnh/video
- [Copywriting](/vi/docs/marketing/skills/copywriting) - Công thức nội dung cho prompt LLM
- [Creativity](/vi/docs/marketing/skills/creativity) - Định hướng sáng tạo và lựa chọn phong cách
- [Brand Guidelines](/vi/docs/marketing/skills/brand) - Prompt phù hợp thương hiệu

## Lệnh Liên Quan

- `/design/good` - Tạo ảnh với prompt tối ưu
- `/content/good` - Tạo nội dung chất lượng cao
- `/ckm:ask` - Nhận tư vấn tối ưu prompt
