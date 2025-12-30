---
title: "/slide - Tạo Bài Thuyết Trình"
description: "Tạo pitch deck chuyên nghiệp, đề xuất chiến dịch và bài thuyết trình marketing với nội dung và thiết kế hỗ trợ AI ở định dạng .pptx"
section: marketing
category: commands
order: 5
published: true
---

# /slide:create - Tạo Bài Thuyết Trình Đẹp

Tạo bài thuyết trình chuyên nghiệp cho pitch deck, đề xuất chiến dịch, bài thuyết trình sáng tạo và báo cáo nội bộ. Tạo nội dung hỗ trợ AI với mẫu thiết kế đẹp, xuất file .pptx có thể chỉnh sửa.

## Lệnh

### /slide:create - Tạo Bài Thuyết Trình

Tạo bộ slide hoàn chỉnh từ prompt đơn giản hoặc brief chi tiết.

**Cú pháp:**
```bash
/slide:create "<chủ đề bài thuyết trình hoặc brief>"
```

**Chức năng:**
1. Phân tích mục tiêu bài thuyết trình và đối tượng mục tiêu
2. Tạo dàn ý có cấu trúc với thông điệp chính
3. Tạo nội dung hấp dẫn cho mỗi slide
4. Thiết kế slide với mẫu chuyên nghiệp và hình ảnh
5. Xuất file .pptx có thể chỉnh sửa sẵn sàng để tùy chỉnh

**Ví dụ:**
```bash
# Pitch deck cho nhà đầu tư
/slide:create "pitch deck Series A cho nền tảng tự động hóa marketing AI"

# Đề xuất chiến dịch
/slide:create "đề xuất chiến dịch ra mắt sản phẩm Q1 2025 với phân tích ngân sách"

# Bài thuyết trình demo sản phẩm
/slide:create "demo kỹ thuật về tính năng giới hạn tốc độ API cho khách hàng doanh nghiệp"

# Báo cáo nội bộ
/slide:create "đánh giá hiệu suất marketing Q4 với các chỉ số chính và chiến lược 2025"

# Sales enablement
/slide:create "phân tích đối thủ cạnh tranh so sánh nền tảng của chúng tôi vs. đối thủ cho đội bán hàng"
```

**Đầu ra:**
```
/assets/slides/YYYY-MM-DD-slug/
├── presentation.pptx          # File PowerPoint có thể chỉnh sửa
├── outline.md                 # Cấu trúc slide và thông điệp chính
├── script.md                  # Ghi chú diễn giả cho mỗi slide
├── images/
│   ├── slide-01-cover.png     # Hình ảnh xem trước
│   ├── slide-02-problem.png
│   ├── slide-03-solution.png
│   └── ...
└── metadata.json              # Theme, font, bảng màu
```

---

## Loại Bài Thuyết Trình & Mẫu

### 1. Pitch Deck (Bài Thuyết Trình Nhà Đầu Tư)

**Trường hợp sử dụng**: Gọi vốn, gặp nhà đầu tư, Demo Day

**Cấu Trúc Slide** (10-15 slide, 10-15 phút):
1. **Cover** - Tên công ty, tagline, thông tin diễn giả
2. **Vấn đề** - Điểm đau thị trường, tác động định lượng
3. **Giải pháp** - Sản phẩm/dịch vụ của bạn, lợi thế vượt trội
4. **Demo Sản Phẩm** - Ảnh chụp màn hình, tính năng chính (2-3 slide)
5. **Cơ Hội Thị Trường** - TAM/SAM/SOM, xu hướng thị trường
6. **Mô Hình Kinh Doanh** - Dòng doanh thu, giá
7. **Traction** - Chỉ số chính, quỹ đạo tăng trưởng
8. **Cạnh Tranh** - Cảnh quan cạnh tranh, sự khác biệt
9. **Đội Ngũ** - Người sáng lập, cố vấn, tuyển dụng chủ chốt
10. **Tài Chính** - Dự báo doanh thu, tốc độ đốt tiền
11. **Yêu Cầu Vốn** - Số tiền, sử dụng vốn, cột mốc
12. **Tầm Nhìn** - Mục tiêu dài hạn, chiến lược thoát

**Yếu Tố Thiết Kế**:
- Bố cục sạch, chuyên nghiệp (nhiều khoảng trắng)
- Văn bản tối thiểu (tối đa 6 điểm mỗi slide)
- Ảnh chụp màn hình sản phẩm chất lượng cao
- Trực quan hóa dữ liệu (biểu đồ, đồ thị)
- Bảng màu nhất quán (màu thương hiệu)

**Ví dụ lệnh**:
```bash
/slide:create "pitch deck Series A - SaaS tự động hóa marketing AI, gọi vốn $3M, tăng trưởng 15x YoY, 500+ khách hàng"
```

---

### 2. Đề Xuất Chiến Dịch

**Trường hợp sử dụng**: Pitch khách hàng, phê duyệt chiến dịch nội bộ, bài thuyết trình agency

**Cấu Trúc Slide** (15-20 slide, 20-30 phút):
1. **Cover** - Tên chiến dịch, khách hàng/thương hiệu, ngày
2. **Tóm Tắt Điều Hành** - Mục tiêu chiến dịch, kết quả mong đợi
3. **Phân Tích Tình Hình** - Trạng thái hiện tại, thách thức
4. **Đối Tượng Mục Tiêu** - Persona, nhân khẩu học, tâm lý học
5. **Mục Tiêu Chiến Dịch** - Mục tiêu SMART (Cụ thể, Đo lường được, Đạt được, Liên quan, Có thời hạn)
6. **Ý Tưởng Lớn** - Khái niệm cốt lõi, hướng sáng tạo
7. **Chiến Lược Chiến Dịch** - Kênh, chiến thuật, timeline
8. **Thực Hiện Sáng Tạo** - Mockup, copy, hình ảnh (3-5 slide)
9. **Kế Hoạch Truyền Thông** - Kết hợp kênh, reach/frequency
10. **Phân Tích Ngân Sách** - Phân bổ chi phí, dự báo ROI
11. **Chỉ Số Thành Công** - KPI, kế hoạch đo lường
12. **Timeline & Cột Mốc** - Biểu đồ Gantt, ngày quan trọng
13. **Đội Ngũ & Trách Nhiệm** - Vai trò, liên hệ
14. **Rủi Ro & Giảm Thiểu** - Vấn đề tiềm ẩn, kế hoạch dự phòng
15. **Bước Tiếp Theo** - Quy trình phê duyệt, danh sách kiểm tra ra mắt

**Yếu Tố Thiết Kế**:
- Hình ảnh đậm, sáng tạo (mockup chiến dịch)
- Màu và font thương hiệu khách hàng
- Bảng concept chiến dịch (mood board)
- Bảng ngân sách và timeline
- So sánh trước/sau

**Ví dụ lệnh**:
```bash
/slide:create "chiến dịch ra mắt sản phẩm Q1 - tính năng API mới, đối tượng developer, ngân sách $50K, timeline 6 tuần"
```

---

### 3. Bài Thuyết Trình Demo Sản Phẩm

**Trường hợp sử dụng**: Bài thuyết trình bán hàng, webinar, bài nói hội nghị

**Cấu Trúc Slide** (8-12 slide, 15-20 phút):
1. **Cover** - Tên sản phẩm, trọng tâm demo
2. **Agenda** - Sẽ trình bày gì, kết quả mong đợi
3. **Vấn Đề** - Điểm đau của khách hàng
4. **Tổng Quan** - Giới thiệu sản phẩm, lợi ích chính (1 slide)
5. **Demo Tính Năng** - Demo trực tiếp với chú thích (4-6 slide)
   - Tính năng 1: Ảnh chụp màn hình + giải thích
   - Tính năng 2: Ảnh chụp màn hình + use case
   - Tính năng 3: Ảnh chụp màn hình + lợi ích
   - Tích hợp: Cách phù hợp với quy trình làm việc
6. **Giá** - Gói, package, máy tính ROI
7. **Social Proof** - Logo khách hàng, testimonial
8. **Bước Tiếp Theo** - Đăng ký dùng thử, đặt lịch gặp, thông tin liên hệ

**Yếu Tố Thiết Kế**:
- Ảnh chụp màn hình sản phẩm lớn (toàn màn hình)
- Chú thích và gọi chú ý trên ảnh chụp màn hình
- Hướng dẫn từng bước
- So sánh trước/sau
- Logo và trích dẫn khách hàng

**Ví dụ lệnh**:
```bash
/slide:create "demo giới hạn tốc độ API cho khách hàng doanh nghiệp - hướng dẫn dashboard, cấu hình, giám sát"
```

---

### 4. Báo Cáo / Đánh Giá Nội Bộ

**Trường hợp sử dụng**: Đánh giá theo quý, cập nhật đội, gặp hội đồng

**Cấu Trúc Slide** (10-15 slide, 15-20 phút):
1. **Cover** - Tiêu đề báo cáo, khoảng thời gian, phòng ban
2. **Tóm Tắt Điều Hành** - Điểm nổi bật chính, chỉ số tiêu đề
3. **Tổng Quan Hiệu Suất** - Chỉ số kiểu dashboard
4. **Thành Công Chính** - Thành tựu lớn (với hình ảnh)
5. **Thách Thức** - Vấn đề gặp phải, bài học rút ra
6. **Phân Tích Sâu Chỉ Số** - 3-5 slide về chỉ số chính
   - Traffic/Tương tác
   - Chuyển đổi/Doanh thu
   - Chi phí Thu hút Khách hàng
   - Giữ chân/Churn
7. **Hiệu Suất Chiến Dịch** - Kết quả chiến dịch riêng lẻ
8. **Insight & Bài Học** - Takeaway dựa trên dữ liệu
9. **Khuyến Nghị** - Hành động cho quý tiếp theo
10. **Q&A** - Slide thảo luận mở

**Yếu Tố Thiết Kế**:
- Slide nhiều dữ liệu (biểu đồ, đồ thị, bảng)
- Chỉ số mã màu (xanh lá/đỏ cho hiệu suất)
- Đường xu hướng và so sánh (YoY, QoQ)
- Văn bản tối thiểu, để dữ liệu nói
- Phong cách chuyên nghiệp, doanh nghiệp

**Ví dụ lệnh**:
```bash
/slide:create "đánh giá hiệu suất marketing Q4 2024 - kết quả chiến dịch, tác động pipeline, khuyến nghị 2025"
```

---

## Tùy Chỉnh Thiết Kế

### Tùy Chọn Theme

**Theme được xây dựng sẵn** (chỉ định với cờ `--theme`):

| Theme | Phong cách | Tốt nhất cho | Màu |
|-------|-------|----------|--------|
| **Modern** | Sạch, tối giản, nhiều khoảng trắng | Công ty công nghệ, SaaS | Xanh dương, xám, trắng |
| **Bold** | Tương phản cao, màu sống động | Agency sáng tạo, chiến dịch | Đỏ, đen, vàng |
| **Professional** | Doanh nghiệp, truyền thống | Doanh nghiệp, tài chính, pháp lý | Navy, xám, trắng |
| **Startup** | Vui tươi, nhiều gradient | Giai đoạn đầu, tiêu dùng | Tím, hồng, xanh lơ |
| **Dark** | Nền tối, accent neon | Công cụ developer, game | Đen, cyan, magenta |
| **Minimalist** | Cực đơn giản, tập trung typography | Xa xỉ, thiết kế, tư vấn | Đen, trắng, một accent |

**Ví dụ với theme**:
```bash
/slide:create "pitch deck cho startup công cụ developer" --theme=dark
```

### Branding Tùy Chỉnh

**Cung cấp hướng dẫn thương hiệu** trong `/assets/brand-guidelines.md`:

```markdown
# Hướng Dẫn Thương Hiệu

## Màu
- Chính: #4F46E5 (Indigo)
- Phụ: #06B6D4 (Cyan)
- Accent: #F59E0B (Amber)
- Văn bản: #1F2937 (Xám tối)
- Nền: #FFFFFF (Trắng)

## Typography
- Tiêu đề: Inter Bold
- Nội dung: Inter Regular
- Monospace: JetBrains Mono (ví dụ code)

## Logo
- File: /assets/brand/logo.png
- Sử dụng: Góc trên bên trái, slide 1 cover
- Kích thước: 120x40px

## Phong Cách Hình Ảnh
- Ảnh chụp màn hình sản phẩm: Sạch, độ phân giải cao, với bóng đổ tinh tế
- Icon: Phong cách outline, nét 2px
- Biểu đồ: Dùng màu thương hiệu, đường lưới tối thiểu
```

Lệnh `/slide:create` sẽ tự động áp dụng branding của bạn.

---

## Tùy Chọn Nâng Cao

### Dàn Ý Tùy Chỉnh

**Cung cấp dàn ý tùy chỉnh** thay vì tự động tạo:

```bash
/slide:create @outline.md
```

**Ví dụ `outline.md`**:
```markdown
# Dàn Ý Bài Thuyết Trình

## Slide 1: Cover
Tiêu đề: "Giới Hạn Tốc Độ API Đơn Giản"
Phụ đề: "Bảo Vệ Cấp Doanh Nghiệp Trong 3 Dòng Code"

## Slide 2: Vấn Đề
Tiêu đề: "Thách Thức Bảo Mật API"
Điểm:
- API đối mặt với tăng đột biến traffic không thể đoán trước
- Không có bảo vệ, hạ tầng thất bại
- Giải pháp truyền thống phức tạp và đắt đỏ

## Slide 3: Giải Pháp
Tiêu đề: "Giới Hạn Tốc Độ Thông Minh"
Nội dung: Tổng quan sản phẩm với ảnh chụp màn hình dashboard
Tính năng: Giám sát thời gian thực, giới hạn linh hoạt, zero downtime

[... Tiếp tục cho tất cả slide ...]
```

### Ghi Chú Diễn Giả

**Tự động tạo ghi chú diễn giả** cho mỗi slide:

```bash
/slide:create "pitch deck" --speaker-notes
```

**Đầu ra** (`script.md`):
```markdown
# Ghi Chú Diễn Giả

## Slide 1: Cover (30 giây)
Giới thiệu: "Chào buổi sáng mọi người. Tôi là [Tên], CEO của [Công ty]. Chúng tôi đang xây dựng tương lai bảo mật API."
Điểm chính: Hook khán giả với vấn đề chúng tôi giải quyết
Chuyển tiếp: "Để tôi bắt đầu với một câu hỏi..."

## Slide 2: Vấn Đề (1 phút)
Script: "Có bao nhiêu bạn đã trải qua sự cố API do tăng đột biến traffic? [Tạm dừng để giơ tay]
Điều này phổ biến hơn bạn nghĩ. Năm ngoái, 67% công ty báo cáo sự cố liên quan đến API..."
Điểm dữ liệu để nhấn mạnh: Thống kê 67%
Chuyển tiếp: "Đây là vấn đề chúng tôi đang giải quyết."

[... Tiếp tục cho mỗi slide ...]
```

---

## Thông Số Kỹ Thuật

### Định Dạng Đầu Ra

**Thông số PowerPoint (.pptx)**:
- Định dạng: Office Open XML (.pptx)
- Tương thích: PowerPoint 2016+, Google Slides, Keynote
- Kích thước Slide: 16:9 (1920x1080px) hoặc 4:3 (1024x768px)
- Font: Nhúng (không cần cài đặt font)
- Hình ảnh: PNG/JPEG độ phân giải cao, nhúng trong file
- Kích thước File: Thường 5-15 MB (tùy hình ảnh)

**Yếu Tố Có Thể Chỉnh Sửa**:
- Tất cả hộp văn bản (có thể chỉnh sửa đầy đủ)
- Hình ảnh (có thể thay thế)
- Màu (màu theme, dễ thay đổi)
- Layout (sắp xếp lại, thêm/xóa slide)
- Biểu đồ (liên kết với dữ liệu Excel nhúng)

### Tùy Chọn Xuất

**Nhiều định dạng** (chỉ định với cờ `--export`):

```bash
# Xuất PDF (để in/chia sẻ)
/slide:create "pitch deck" --export=pdf

# Xuất hình ảnh slide (để nhúng trong tài liệu)
/slide:create "đề xuất chiến dịch" --export=png

# Xuất Google Slides (tải lên Drive)
/slide:create "bài thuyết trình demo" --export=google-slides
```

---

## Kỹ Năng Liên Quan

Lệnh `/slide:create` tự động kích hoạt các kỹ năng này:

- **[copywriting](/docs/marketing/skills/copywriting)** - Nội dung slide hấp dẫn
- **[content-marketing](/docs/marketing/skills/content-marketing)** - Chiến lược bài thuyết trình
- **[ai-artist](/docs/marketing/skills/ai-artist)** - Tạo thiết kế trực quan

## Agent Liên Quan

Các agent này cộng tác trong quy trình `/slide:create`:

- **[copywriter](/docs/marketing/agents/copywriter)** - Viết nội dung slide thuyết phục
- **[ui-ux-designer](/docs/marketing/agents/ui-ux-designer)** - Thiết kế layout đẹp

## Quy Trình Làm Việc

Xem hướng dẫn quy trình đầy đủ:

- [Quy Trình Chiến Dịch](/docs/marketing/workflows/campaign-workflow) - Bài thuyết trình đề xuất chiến dịch

---

## Khắc Phục Sự Cố

### Slide Thiếu Ảnh Chụp Màn Hình Sản Phẩm

**Vấn đề**: Slide được tạo sử dụng hình ảnh placeholder thay vì ảnh chụp màn hình sản phẩm thực tế.

**Giải pháp**:
1. Thêm ảnh chụp màn hình sản phẩm vào `/assets/screenshots/product/`
2. Tham chiếu tính năng cụ thể trong prompt: "bao gồm ảnh chụp màn hình dashboard hiển thị cấu hình giới hạn tốc độ"
3. Sử dụng cờ `--screenshots=/path/to/screenshots/` để chỉ định thư mục tùy chỉnh
4. Thay thế placeholder thủ công trong file .pptx sau khi tạo

### Nội Dung Quá Dài

**Vấn đề**: Slide có quá nhiều văn bản, vi phạm quy tắc "tối đa 6 điểm".

**Giải pháp**:
1. Thêm cờ `--concise` cho điểm ngắn hơn
2. Chỉ định trong prompt: "giữ slide tối thiểu, tối đa 5 từ mỗi điểm"
3. Chỉnh sửa file .pptx để rút gọn văn bản sau khi tạo
4. Sử dụng `--speaker-notes` để chuyển chi tiết sang phần ghi chú

### Thiết Kế Không Khớp Thương Hiệu

**Vấn đề**: Slide được tạo không sử dụng màu/font thương hiệu công ty.

**Giải pháp**:
1. Tạo `/assets/brand-guidelines.md` với màu, font, logo
2. Sử dụng cờ `--theme=custom` để áp dụng hướng dẫn thương hiệu
3. Cung cấp file brand kit trong `/assets/brand/` (logo.png, colors.json)
4. Áp dụng mẫu PowerPoint công ty thủ công sau khi tạo

### Biểu Đồ/Đồ Thị Không Tạo

**Vấn đề**: Slide trực quan hóa dữ liệu thiếu biểu đồ.

**Giải pháp**:
1. Cung cấp dữ liệu trong prompt: "doanh thu Q4 $500K, Q1 $750K, Q2 $1.2M"
2. Đính kèm file dữ liệu CSV: `/slide:create @outline.md --data=metrics.csv`
3. Sử dụng loại biểu đồ đơn giản hơn (bar, line thay vì sankey/sunburst phức tạp)
4. Thêm biểu đồ thủ công vào .pptx sử dụng bảng dữ liệu Excel nhúng
