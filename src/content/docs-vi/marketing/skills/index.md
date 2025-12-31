---
title: "Marketing Skills Overview"
description: "Hướng dẫn toàn diện về 20+ kỹ năng chuyên môn của Marketing Kit cho tạo nội dung, SEO, phân tích và tự động hóa marketing bằng AI."
section: marketing
category: skills
order: 1
---

Marketing Kit bao gồm hơn 20 kỹ năng chuyên môn cung cấp cho agents kiến thức chuyên sâu, quy trình tự động hóa và khả năng AI. Kỹ năng được kích hoạt ngầm dựa trên ngữ cảnh hoặc rõ ràng qua lệnh `/skill:add`.

## Phân loại kỹ năng

### Core Marketing (7 kỹ năng)
Hoạt động marketing chuyên nghiệp và quy trình làm việc nội dung.

| Kỹ năng | Mục đích | Tính năng chính |
|---------|----------|-----------------|
| [Content Marketing](/vi/docs/marketing/skills/content-marketing) | Chiến lược nội dung và lập kế hoạch biên tập | Lịch biên tập, trụ cột nội dung, mẫu blog, quy trình kiểm toán |
| [SEO Optimization](/vi/docs/marketing/skills/seo-optimization) | SEO kỹ thuật và nghiên cứu từ khóa | Google Search Console API, ReviewWeb.site API, Core Web Vitals, SEO lập trình |
| [Analytics](/vi/docs/marketing/skills/analytics) | Chỉ số marketing và báo cáo | GA4 API, theo dõi KPI, mô hình attribution, phân tích ROI |
| [Email Marketing](/vi/docs/marketing/skills/email-marketing) | Chiến dịch email và tự động hóa | Mẫu chiến dịch, chuỗi drip, quy trình tự động, khả năng gửi đến |
| [Social Media](/vi/docs/marketing/skills/social-media) | Nội dung và tương tác mạng xã hội | Nội dung theo nền tảng, threads, đăng chéo, lên lịch |
| [Campaign Management](/vi/docs/marketing/skills/campaign-management) | Thực thi chiến dịch đa kênh | Campaign briefs, phân bổ ngân sách, danh sách kiểm tra ra mắt, tổng kết |
| [Copywriting](/vi/docs/marketing/skills/copywriting) | Copy tập trung chuyển đổi | Công thức copy (AIDA, PAS, BAB), mẫu tiêu đề, tối ưu CTA |

### Specialized Marketing (8 kỹ năng)
Chiến thuật nâng cao và chiến lược tăng trưởng.

| Kỹ năng | Mục đích | Tính năng chính |
|---------|----------|-----------------|
| [Brainstorming](/vi/docs/marketing/skills/brainstorming) | Ý tưởng cộng tác và xác thực | Đối thoại có cấu trúc, đánh giá phương pháp, lưu quyết định |
| [Ads Management](/vi/docs/marketing/skills/ads-management) | Chiến dịch quảng cáo trả tiền | Tối ưu Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads |
| [Affiliate Marketing](/vi/docs/marketing/skills/affiliate-marketing) | Thiết kế chương trình affiliate SaaS | Cấu trúc hoa hồng, lựa chọn nền tảng, phòng chống gian lận |
| [Gamification Marketing](/vi/docs/marketing/skills/gamification-marketing) | Chiến dịch tâm lý hành vi | Điểm, huy hiệu, bảng xếp hạng, chuỗi, thử thách |
| [Referral Program Building](/vi/docs/marketing/skills/referral-program-building) | Cơ chế giới thiệu viral | Phần thưởng hai chiều, theo dõi attribution, tích hợp nền tảng |
| [Brand Guidelines](/vi/docs/marketing/skills/brand-guidelines) | Tính nhất quán thương hiệu và quản lý tài sản | Giọng điệu thương hiệu, nhận diện thị giác, tổ chức tài sản, hệ thống màu |
| [Creativity](/vi/docs/marketing/skills/creativity) | Định hướng sáng tạo và chiến lược thị giác | 55 phong cách sáng tạo, tâm lý màu sắc, hướng dẫn lồng tiếng |
| [Content Hub](/vi/docs/marketing/skills/content-hub) | Thư viện tài sản hình ảnh và quản lý | Thư viện trên trình duyệt, ngữ cảnh thương hiệu, manifest sẵn sàng R2 |

### AI & Technical (5 kỹ năng)
AI đa phương thức và tự động hóa trình duyệt.

| Kỹ năng | Mục đích | Tính năng chính |
|---------|----------|-----------------|
| [AI Multimodal](/vi/docs/marketing/skills/ai-multimodal) | Gemini API cho audio/video/hình ảnh/tài liệu | Phiên âm, phân tích hình ảnh, Imagen 4, tạo video Veo 3 |
| [AI Artist](/vi/docs/marketing/skills/ai-artist) | Kỹ thuật prompt cho tạo AI | Prompt LLM, tạo hình ảnh, từ khóa phong cách, tinh chỉnh lặp |
| [Media Processing](/vi/docs/marketing/skills/media-processing) | Quy trình FFmpeg/ImageMagick/RMBG | Mã hóa video, xử lý hình ảnh, xóa nền |
| [Chrome DevTools](/vi/docs/marketing/skills/chrome-devtools) | Tự động hóa trình duyệt với Puppeteer | Screenshots, ARIA snapshots, phân tích hiệu suất, tự động hóa form |
| [Research](/vi/docs/marketing/skills/research) | Nghiên cứu và phân tích kỹ thuật | Nghiên cứu đa nguồn, xác thực chéo, báo cáo toàn diện |

## Kích hoạt kỹ năng

### Kích hoạt ngầm
Kỹ năng tự động kích hoạt dựa trên ngữ cảnh agent và loại tác vụ. Không cần lệnh rõ ràng.

**Ví dụ**: Agent Content Creator tự động tải kỹ năng `content-marketing`, `copywriting`, `brand-guidelines`.

### Kích hoạt rõ ràng
Thêm kỹ năng vào phiên hiện tại khi cần.

```bash
/skill:add seo-optimization  # Thêm một kỹ năng
/skill:add analytics email-marketing  # Thêm nhiều kỹ năng
```

## Kết hợp kỹ năng phổ biến

### Quy trình sản xuất nội dung
- `content-marketing` - Chiến lược và lập kế hoạch
- `copywriting` - Viết và tối ưu hóa
- `brand-guidelines` - Đảm bảo nhất quán
- `seo-optimization` - Tối ưu tìm kiếm

### Bộ ra mắt chiến dịch
- `campaign-management` - Điều phối và theo dõi
- `email-marketing` - Chuỗi email
- `social-media` - Quảng bá trên mạng xã hội
- `analytics` - Giám sát hiệu suất

### Kết hợp growth marketing
- `affiliate-marketing` - Chương trình đối tác
- `referral-program-building` - Cơ chế viral
- `gamification-marketing` - Vòng lặp tương tác
- `ads-management` - Thu hút trả tiền

### Tạo nội dung AI
- `ai-multimodal` - Tạo tài sản (hình ảnh/video)
- `creativity` - Định hướng sáng tạo
- `ai-artist` - Tối ưu prompt
- `brand-guidelines` - Căn chỉnh thương hiệu

## Cấu hình

Kỹ năng lưu cấu hình trong thư mục dự án của người dùng:

```
.claude/skills/{skill-name}/
├── SKILL.md              # Định nghĩa kỹ năng
├── references/           # Cơ sở kiến thức
├── scripts/              # Scripts tự động hóa
└── templates/            # Mẫu tái sử dụng
```

### API Keys & Secrets

Một số kỹ năng yêu cầu API keys lưu trong `.env` hoặc `.claude/secrets/`:

| Kỹ năng | Khóa yêu cầu |
|---------|---------------|
| SEO Optimization | `REVIEWWEB_API_KEY`, thông tin xác thực Google OAuth |
| Analytics | Tài khoản dịch vụ GA4 hoặc thông tin xác thực OAuth |
| AI Multimodal | `GEMINI_API_KEY` |
| Media Processing | Không (sử dụng FFmpeg/ImageMagick) |

## Thực hành tốt nhất

**1. Tải tiến bộ**
Bắt đầu với kỹ năng cốt lõi, thêm kỹ năng chuyên môn khi cần. Tránh tải tất cả kỹ năng ngay từ đầu.

**2. Phụ thuộc kỹ năng**
Một số kỹ năng hoạt động tốt hơn cùng nhau. Kiểm tra mục "Related Skills" trong tài liệu mỗi kỹ năng.

**3. Tổ chức báo cáo**
Sử dụng pattern kỹ năng `assets-organizing` cho đặt tên file và cấu trúc thư mục nhất quán.

**4. Nhất quán thương hiệu**
Luôn tải kỹ năng `brand-guidelines` khi tạo nội dung hướng đến khách hàng.

**5. Giới hạn tốc độ API**
Kỹ năng với API bên ngoài (SEO, Analytics) tôn trọng giới hạn tốc độ. Kiểm tra tài liệu tham khảo về quota.

## Tài liệu liên quan

- [Marketing Agents](/vi/docs/marketing/agents) - Agents sử dụng các kỹ năng này
- [Marketing Commands](/vi/docs/marketing/commands) - Lệnh slash theo kỹ năng
- [Marketing Workflows](/vi/docs/marketing/workflows) - Quy trình đầu cuối
- [Marketing Dashboard](/vi/docs/marketing/dashboard) - Tích hợp giao diện web

## Xử lý sự cố

**Kỹ năng không kích hoạt?**
Sử dụng `/skill:add {skill-name}` để tải rõ ràng.

**Thiếu thông tin API?**
Kiểm tra phần "Prerequisites" trong tài liệu kỹ năng về các khóa cần thiết.

**Không tìm thấy script?**
Xác minh kỹ năng đã cài: `ls .claude/skills/{skill-name}/scripts/`

**Reference không tải?**
Kỹ năng sử dụng tiết lộ tiến bộ. Tải references thủ công khi cần: `Read .claude/skills/{skill-name}/references/{file}.md`
