---
title: "ck:frontend-design"
description: Tạo giao diện frontend độc đáo, sẵn sàng cho production từ đầu hoặc từ ảnh chụp màn hình với chất lượng thiết kế xuất sắc và định hướng sáng tạo
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

Chán với giao diện trông quá chung chung, như thể "AI đã làm cái này"? Skill này giúp bạn tạo ra các thiết kế frontend thực sự được chế tác, đáng nhớ và có chủ đích.

## Skill Này Làm Gì

Frontend Design hướng dẫn bạn tạo ra các giao diện độc đáo, sẵn sàng cho production, tránh những thẩm mỹ theo khuôn mẫu. Dù bạn đang xây dựng từ đầu hay sao chép thiết kế từ ảnh chụp màn hình, skill này đảm bảo bạn tạo ra thứ gì đó nổi bật.

Skill xử lý hai quy trình chính: trích xuất hướng dẫn thiết kế từ ảnh chụp màn hình và triển khai chúng với độ chính xác cao, hoặc tạo ra các thiết kế gốc với định hướng thẩm mỹ táo bạo. Nó nhấn mạnh các lựa chọn typography sáng tạo, hệ thống màu sắc nhất quán, thiết kế chuyển động có chủ đích, và bố cục không gian phá vỡ kỳ vọng.

Hãy coi nó như giám đốc sáng tạo và hướng dẫn triển khai của bạn kết hợp lại. Nó không để bạn mặc định dùng font Inter trên nền trắng với gradient tím. Thay vào đó, bạn sẽ học cách thực hiện những lựa chọn táo bạo phù hợp với bối cảnh cụ thể của mình, dù là chủ nghĩa tối giản brutalist, sự hỗn loạn tối đa, hay sự thanh lịch tinh tế.

## Yêu Cầu Trước

Trước khi sử dụng skill này hiệu quả, bạn cần có:

- Hiểu biết cơ bản về HTML, CSS và JavaScript
- Quen thuộc với React (cho các quy trình dựa trên component)
- Quyền truy cập vào skill `ai-multimodal` (để trích xuất thiết kế và tạo asset)
- Trình soạn thảo code và trình duyệt để kiểm thử

Skill tích hợp với AI Multimodal skill để phân tích ảnh chụp màn hình và tạo ra các asset trực quan phù hợp với định hướng thiết kế của bạn.

## Hai Quy Trình Chính

### Quy Trình 1: Triển Khai Từ Ảnh Chụp Màn Hình

Khi ai đó đưa cho bạn ảnh chụp màn hình, hình ảnh, hoặc tài liệu tham chiếu thiết kế để sao chép:

**Bước 1: Trích Xuất Hướng Dẫn Thiết Kế**

Đừng nhảy thẳng vào code. Phân tích ảnh chụp màn hình trước bằng skill `ai-multimodal`:

```bash
# Phân tích thiết kế với Gemini
python scripts/gemini_batch_process.py --files design-screenshot.png --task analyze --prompt "Extract design system: all colors as hex codes, typography (font families, sizes, weights, line heights), spacing scale, layout patterns, visual hierarchy, component styles"
```

Ghi lại kết quả trong `docs/design-guidelines/extracted-design.md` với các phần cho:

- Bảng màu (mã hex chính xác)
- Hệ thống typography (font, kích thước, trọng lượng, chiều cao dòng)
- Thang khoảng cách (margins, padding patterns)
- Cấu trúc layout (grid, flexbox, positioning)
- Các pattern component (buttons, cards, forms)
- Hệ thống phân cấp trực quan và tâm trạng

**Bước 2: Triển Khai Với Độ Chính Xác**

Bây giờ viết code tái tạo trung thực thiết kế đã trích xuất:

```css
/* Dùng màu chính xác từ quá trình trích xuất */
:root {
  --color-primary: #2D3748;
  --color-accent: #ED8936;
  --color-background: #F7FAFC;
}

/* Khớp thông số typography */
.heading {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
}

.body-text {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
```

**Bước 3: Xác Minh Chất Lượng**

So sánh triển khai của bạn với ảnh chụp màn hình gốc:

```bash
# Chụp ảnh màn hình triển khai của bạn
# Dùng chrome-devtools skill hoặc dev tools của trình duyệt

# So sánh với ai-multimodal
python scripts/gemini_batch_process.py --files original.png implementation.png --task analyze --prompt "Compare these two designs. Check color accuracy, spacing consistency, typography matching, and overall fidelity"
```

### Quy Trình 2: Xây Dựng Từ Đầu

Khi tạo thiết kế gốc không có tài liệu tham chiếu:

**Bước 1: Tư Duy Thiết Kế**

Trước khi viết bất kỳ code nào, trả lời các câu hỏi sau:

- **Mục đích**: Giao diện này giải quyết vấn đề gì? Ai sử dụng nó?
- **Tông điệu**: Định hướng thẩm mỹ nào phù hợp với mục đích? (Xem "Chọn Thẩm Mỹ" bên dưới)
- **Ràng buộc**: Yêu cầu framework? Mục tiêu hiệu suất? Nhu cầu accessibility?
- **Sự khác biệt**: Điều gì sẽ làm cho nó không thể quên?

**Bước 2: Chọn Định Hướng Táo Bạo**

Chọn một thẩm mỹ cực đoan và cam kết với nó. Một số ví dụ:

- **Tối giản brutally**: Font monospace, đen/trắng nghiêm khắc, khoảng trắng rộng rãi, không có trang trí
- **Tạp chí biên tập**: Font display lớn, layout nhiều cột, hình ảnh ấn tượng
- **Retro-Futuristic**: Gradient neon, hình học, màu synthwave
- **Hữu cơ tự nhiên**: Tone đất, hình dạng chảy, bóng mềm
- **Công nghiệp thực dụng**: Grid hiển thị, monospace, thẩm mỹ kỹ thuật

**Bước 3: Thực Thi Với Độ Chính Xác**

Triển khai định hướng đã chọn với sự chú ý tỉ mỉ đến từng chi tiết.

## Chọn Thẩm Mỹ Của Bạn

Skill cung cấp hướng dẫn chi tiết về tạo thiết kế độc đáo trên năm lĩnh vực chính:

### Typography: Phá Vỡ Mặc Định

Ngừng sử dụng Inter, Roboto, Arial và system fonts. Chọn fonts có cá tính:

- Ghép font display độc đáo với font body tinh tế
- Ví dụ: Playfair Display + Source Sans Pro, Syne + IBM Plex Sans, Fraunces + Work Sans
- Sử dụng lựa chọn font bất ngờ phù hợp với bối cảnh
- Cân nhắc variable fonts để kiểm soát weight và width linh hoạt

### Màu Sắc & Theme: Cam Kết Hoàn Toàn

Dùng CSS variables để nhất quán, nhưng chọn táo bạo:

```css
:root {
  /* Màu chủ đạo với điểm nhấn sắc nét */
  --color-primary: #1A202C;
  --color-accent: #F56565;
  --color-neutral: #E2E8F0;

  /* Không phải bảng màu phân phối đều nhút nhát */
}
```

Màu chủ đạo với điểm nhấn sắc nét vượt trội so với bảng màu phân phối đều nhút nhát.

### Chuyển Động: Khoảnh Khắc Tạo Ấn Tượng Mạnh

Tập trung vào một tải trang được dàn dựng tốt với các lần xuất hiện so le thay vì nhiều micro-interaction rải rác:

```css
/* Animation xuất hiện so le */
.hero-title {
  animation: fadeInUp 0.6s ease-out;
}

.hero-subtitle {
  animation: fadeInUp 0.6s ease-out 0.2s;
  animation-fill-mode: backwards;
}

.hero-cta {
  animation: fadeInUp 0.6s ease-out 0.4s;
  animation-fill-mode: backwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Với React components, dùng thư viện Motion. Với animations JavaScript nâng cao, skill bao gồm tài liệu tham chiếu `anime.js`.

### Bố Cục Không Gian: Phá Vỡ Grid

Tạo layout bất ngờ:

- Sắp xếp không đối xứng
- Các phần tử chồng lên nhau
- Luồng chéo thay vì dọc/ngang nghiêm ngặt
- Không gian âm rộng rãi HOẶC mật độ có kiểm soát (chọn một)

### Nền & Chi Tiết Trực Quan

Đừng bao giờ mặc định dùng màu đơn. Tạo bầu không khí:

- Gradient mesh với nhiều điểm dừng màu
- Texture noise cho hạt tinh tế
- Pattern hình học (SVG backgrounds)
- Độ trong suốt lớp cho chiều sâu
- Bóng ấn tượng (không chỉ `box-shadow: 0 2px 4px rgba(0,0,0,0.1)`)

## Làm Việc Với Asset Trực Quan

Skill tích hợp với `ai-multimodal` để tạo và phân tích asset trực quan:

### Tạo Assets

Khi bạn cần hình ảnh hero, background, hoặc các phần tử trang trí:

```bash
# Tạo texture background
python scripts/gemini_batch_process.py --task generate --prompt "Abstract geometric pattern, teal and navy, minimal style for website background"

# Tạo hình ảnh hero
python scripts/gemini_batch_process.py --task generate --prompt "Isometric illustration of a modern workspace, soft shadows, pastel color palette" --model imagen-4.0-ultra-generate-001
```

Đảm bảo các asset được tạo ra phù hợp với định hướng thẩm mỹ đã chọn.

### Phân Tích Tài Liệu Tham Chiếu Thiết Kế

Khi bạn tìm thấy nguồn cảm hứng nhưng cần hiểu cách nó hoạt động:

```bash
# Trích xuất design system
python scripts/gemini_batch_process.py --files inspiration.png --task analyze --prompt "Analyze this design: identify the aesthetic direction, extract color palette, describe typography choices, explain spatial composition, note distinctive elements"
```

## Ví Dụ Thực Tế

### Sao Chép Trang Landing Từ Ảnh Chụp Màn Hình

Bạn nhận được ảnh chụp màn hình trang landing của đối thủ để sao chép:

```bash
# Trích xuất design system
python scripts/gemini_batch_process.py --files competitor.png --task analyze --prompt "Full design system extraction: colors (hex), fonts (names, sizes, weights), spacing (margins, padding), layout structure, component styles"

# Ghi lại kết quả trong docs/design-guidelines/extracted-design.md

# Triển khai components theo thông số chính xác

# Xác minh bằng so sánh cạnh nhau
```

### Tạo Portfolio Site Gốc

Bạn đang xây dựng portfolio từ đầu:

**Tư Duy Thiết Kế**: Thương hiệu cá nhân, chuyên gia sáng tạo, cần nổi bật.

**Định Hướng Thẩm Mỹ**: Phong cách tạp chí biên tập với typography lớn, layout nhiều cột, ảnh đen trắng ấn tượng.

**Triển Khai**:

```css
:root {
  --color-bg: #FAFAF9;
  --color-text: #1C1917;
  --color-accent: #DC2626;
  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'Inter', sans-serif;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(48px, 8vw, 120px);
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: -0.02em;
}

.layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  max-width: 1440px;
  margin: 0 auto;
}

.content-main {
  grid-column: 1 / 9;
}

.content-aside {
  grid-column: 9 / 13;
}
```

## Thực Hành Tốt Nhất

**Đừng Bao Giờ Mặc Định Với Lựa Chọn Chung**: Mỗi dự án có một định hướng thẩm mỹ độc đáo. Đừng hội tụ về Space Grotesk, Inter, hoặc system fonts trên tất cả dự án.

**Khớp Độ Phức Tạp Với Tầm Nhìn**: Thiết kế tối đa cần code phức tạp với animations phong phú. Thiết kế tối giản cần độ chính xác, kiềm chế, và chú ý đến chi tiết khoảng cách và typography.

**Thiết Kế Trước Khi Code**: Dù trích xuất từ ảnh chụp màn hình hay xây dựng từ đầu, hãy hiểu design system trước khi viết code triển khai.

**Dùng CSS Variables**: Định nghĩa các design token (màu, khoảng cách, typography) làm CSS custom properties để nhất quán.

**Kiểm Thử Responsive**: Đảm bảo thiết kế hoạt động trên các kích thước viewport. Dùng `clamp()` cho typography fluid, CSS Grid cho layout linh hoạt.

## Tài Liệu Tham Chiếu

Skill bao gồm các file tham chiếu toàn diện trong Engineer Kit:

- `references/design-extraction-overview.md` - Quy trình phân tích ảnh chụp màn hình
- `references/extraction-prompts.md` - Prompts để phân tích thiết kế toàn diện
- `references/visual-analysis-overview.md` - Xác minh chất lượng triển khai
- `references/asset-generation.md` - Tạo asset trực quan phù hợp thiết kế
- `references/technical-overview.md` - Tối ưu hóa và thực hành hiệu suất tốt nhất
- `references/animejs.md` - Animations JavaScript nâng cao

Chúng nằm tại `../claudekit-engineer/.claude/skills/frontend-design/references/`.

## Skills và Lệnh Liên Quan

Kết hợp Frontend Design với các skill khác để có quy trình hoàn chỉnh:

- [AI Multimodal](/vi/docs/engineer/skills/ai-multimodal) - Trích xuất thiết kế từ ảnh chụp màn hình, tạo asset trực quan
- [Frontend Development](/vi/docs/engineer/skills/frontend-development) - Triển khai với React/TypeScript best practices
- [Media Processing](/vi/docs/engineer/skills/media-processing) - Tối ưu hóa hình ảnh đã tạo, xóa nền
- [Chrome DevTools](/vi/docs/engineer/skills/chrome-devtools) - Chụp ảnh màn hình triển khai để so sánh

## Nguyên Tắc Cốt Lõi

Skill tồn tại để giúp bạn tránh thẩm mỹ "AI slop". Mỗi thiết kế nên cảm thấy có chủ đích, phù hợp với bối cảnh và đáng nhớ. Dù bạn đang sao chép ảnh chụp màn hình với độ chính xác pixel hay tạo thiết kế gốc với lựa chọn táo bạo, mục tiêu đều như nhau: tạo ra thứ gì đó độc đáo mà mọi người thực sự nhớ đến.
