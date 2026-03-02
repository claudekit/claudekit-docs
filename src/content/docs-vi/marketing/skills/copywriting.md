---
lang: vi
title: "ckm:copywriting"
description: "Nội dung tập trung chuyển đổi với các công thức đã kiểm chứng (AIDA, PAS, BAB), mẫu tiêu đề, tối ưu CTA và trích xuất phong cách viết tùy chỉnh."
section: marketing
category: skills
order: 8
---

> Viết nội dung chuyển đổi cao bằng các công thức đã kiểm chứng, mẫu tiêu đề và phong cách viết tùy chỉnh được trích xuất từ nội dung tốt nhất của bạn.

## Skill Này Làm Gì

**Thách thức**: Copywriting hiệu quả đòi hỏi nắm vững các công thức chuyển đổi, hiểu các yếu tố tâm lý và duy trì giọng nói thương hiệu nhất quán. Hầu hết các nhóm thiếu khung có cấu trúc cho kết quả lặp lại.

**Giải pháp**: Skill Copywriting cung cấp các công thức đã được kiểm chứng trên thực tế (AIDA, PAS, BAB, 4Ps), mẫu tiêu đề, mẫu CTA và trích xuất phong cách viết từ tài liệu người dùng. Hỗ trợ nhiều định dạng (PDF, DOCX, ảnh, video) để phân tích phong cách.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt cho agent Copywriter, Content Creator và Email Wizard.

**Tường minh**: Kích hoạt qua prompt:
```
Activate copywriting skill to write compelling ad copy and landing page content
```

## Tính Năng

### 1. Công Thức Nội Dung Cho Mọi Định Dạng
Các cấu trúc đã kiểm chứng cho trang đích, email, quảng cáo và mô tả sản phẩm.

**Các công thức cốt lõi**:
| Công thức | Cấu trúc | Phù hợp nhất |
|-----------|----------|--------------|
| **AIDA** | Chú ý → Quan tâm → Mong muốn → Hành động | Trang đích, quảng cáo |
| **PAS** | Vấn đề → Khuếch đại → Giải pháp | Email, trang bán hàng |
| **BAB** | Trước → Sau → Cầu nối | Lời chứng thực, case study |
| **4Ps** | Hứa hẹn → Hình ảnh → Bằng chứng → Thúc đẩy | Bán hàng dạng dài |
| **4Us** | Khẩn cấp + Độc đáo + Hữu ích + Cực kỳ cụ thể | Tiêu đề |
| **FAB** | Tính năng → Lợi thế → Lợi ích | Mô tả sản phẩm |

**Hướng dẫn công thức**: `references/copy-formulas.md`

### 2. Mẫu Tiêu Đề
Hơn 90 mẫu đã được kiểm chứng cho tiêu đề, dòng chủ đề và hook.

**Hiệu suất cao nhất**:
- "Cách [X] mà không cần [Y]" (loại bỏ phản đối)
- "[Số] cách để [lợi ích]" (cam kết danh sách)
- "Bí quyết để [kết quả]" (khoảng cách tò mò)
- "Tại sao [niềm tin phổ biến] là sai" (phản truyền thống)

**Thư viện mẫu**: `references/headline-templates.md`

### 3. Trích Xuất Phong Cách Viết
Trích xuất tông điệu, giọng nói và các mẫu phong cách từ nội dung hoạt động tốt nhất.

**Trích xuất từ nhiều định dạng**:
```bash
# Liệt kê file có sẵn
python scripts/extract-writing-styles.py --list

# Trích xuất phong cách từ nội dung cụ thể
python scripts/extract-writing-styles.py --style founder-emails
```

**Định dạng được hỗ trợ**: `.md`, `.txt`, `.pdf`, `.docx`, `.xlsx`, `.pptx`, `.jpg`, `.png`, `.mp4`

**Yêu cầu**: `GEMINI_API_KEY` để phân tích tài liệu/phương tiện

**Danh mục phong cách**: `assets/writing-styles/` (50 phong cách được định nghĩa sẵn)

## Điều Kiện Tiên Quyết

**Để trích xuất phong cách**:
- `GEMINI_API_KEY` trong `.env` để phân tích PDF/media
- Python 3.8+ với gói `google-genai`

**Để dùng công thức nội dung**:
- Không cần gì thêm (hoạt động ngay)

## Cấu Hình

**Thư mục phong cách viết**: `assets/writing-styles/`
```
assets/writing-styles/
├── default.md           # 50 phong cách định nghĩa sẵn
├── founder-emails.md    # Được trích xuất từ nội dung người dùng
└── product-launch.md    # Phong cách theo chiến dịch
```

**Tham chiếu phong cách**: `references/writing-styles.md`

## Thực Hành Tốt Nhất

**1. Dẫn Đầu Bằng Lợi Ích, Không Phải Tính Năng**
"Tiết kiệm 5 giờ/tuần" (lợi ích) tốt hơn "Báo cáo tự động" (tính năng).

**2. Một CTA Cho Mỗi Nội Dung**
Nhiều lời kêu gọi hành động làm loãng sự tập trung. Chọn một hành động chính.

**3. Cụ Thể Thắng Tuyên Bố Mơ Hồ**
"Tăng chuyển đổi 47%" vượt trội hơn "Kết quả tốt hơn nhiều".

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Nội Dung Trang Đích Với AIDA
**Tình huống**: Viết phần hero trang chủ cho SaaS quản lý dự án.

**Quy trình**:
1. **Chú ý** (Tiêu đề): "Ngừng mất dự án trong hỗn loạn email"
2. **Quan tâm** (Phụ tiêu đề): "Một nền tảng cho nhiệm vụ, lịch trình và cộng tác nhóm"
3. **Mong muốn** (Lợi ích): "Xem tất cả trong một góc nhìn. Không cần săn lùng qua các luồng."
4. **Hành động** (CTA): "Bắt đầu dùng thử miễn phí 14 ngày"

**Công thức dùng**: AIDA (tải từ `references/copy-formulas.md`)

### Trường Hợp 2: Chuỗi Email Với PAS
**Tình huống**: Email tái tương tác cho người dùng dùng thử không hoạt động.

**Quy trình**:
1. **Vấn đề**: "Hầu hết các nhóm lãng phí 30% thời gian tìm kiếm thông tin"
2. **Khuếch đại**: "Đó là 12 giờ/tuần bị mất. Hãy tưởng tượng những gì bạn có thể xây dựng thay thế."
3. **Giải pháp**: "Tìm kiếm của chúng tôi tìm thấy bất kỳ file, tin nhắn hoặc nhiệm vụ nào trong <2 giây"

**Lời kêu gọi hành động**: "Kích hoạt lại dùng thử của bạn"

**Công thức dùng**: PAS (tải từ `references/email-copy.md`)

## Xử Lý Sự Cố

**Vấn đề**: Nội dung cảm thấy chung chung, thiếu giọng nói thương hiệu
**Giải pháp**: Dùng trích xuất phong cách viết trên nội dung tốt nhất. Áp dụng các mẫu đã trích xuất nhất quán.

**Vấn đề**: Tiêu đề không được nhấp
**Giải pháp**: A/B test 5 biến thể với các mẫu khác nhau. Theo dõi CTR trong 48 giờ.

**Vấn đề**: Nút CTA không chuyển đổi
**Giải pháp**: Tải hướng dẫn mẫu CTA (`references/cta-patterns.md`). Kiểm thử CTA hướng lợi ích so với hướng hành động.

## Skill Liên Quan

- [Content Marketing](/vi/docs/marketing/skills/content-marketing) - Lập kế hoạch và chiến lược nội dung
- [Email Marketing](/vi/docs/marketing/skills/email-marketing) - Mẫu nội dung email
- [Brand Guidelines](/vi/docs/marketing/skills/brand-guidelines) - Nhất quán giọng nói
- [Social Media](/vi/docs/marketing/skills/social-media) - Nội dung theo nền tảng

## Lệnh Liên Quan

- `/content/good` - Tạo nội dung chất lượng cao
- `/content/cro` - Nội dung tối ưu chuyển đổi
- `/content/enhance` - Cải thiện nội dung hiện có
- `/email/create` - Nội dung chiến dịch email
