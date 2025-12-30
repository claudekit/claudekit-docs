---
title: "Quản Lý Tài Sản"
description: "Trung tâm nội dung để quản lý tất cả tài sản marketing - bản sao, storyboard, slide, infographic, hướng dẫn thương hiệu và bài đăng mạng xã hội."
section: "marketing"
category: "features"
order: 1
published: true
---

# Quản Lý Tài Sản

**Content Hub** là hệ thống quản lý tài sản trung tâm của ClaudeKit Marketing. Lưu trữ, tổ chức, xem trước và quản lý tất cả tài liệu marketing tại một nơi.

## Tổng Quan

Content Hub cung cấp giao diện thống nhất để quản lý các tài sản marketing đa dạng:

- **Nội Dung & Phong Cách Viết** - Bài blog, landing page, chuỗi email, hồ sơ giọng điệu tác giả
- **Storyboard** - Kịch bản hình ảnh cho sản xuất video và chiến dịch
- **Bài Thuyết Trình** - Pitch deck, đề xuất chiến dịch, demo sản phẩm
- **Infographic** - Trực quan hóa dữ liệu và kể chuyện bằng hình ảnh
- **Hướng Dẫn Thương Hiệu** - Logo, bảng màu, kiểu chữ, giọng điệu thương hiệu
- **Bài Đăng Mạng Xã Hội** - Nội dung đặc thù từng nền tảng với khả năng xem trước

Tất cả tài sản được lưu trữ trong thư mục `/assets/` với phân loại thông minh và metadata có thể tìm kiếm.

## Giao Diện

Truy cập Content Hub qua lệnh `/dashboard`:

```bash
/dashboard
```

### Giao Diện Hub Chính

![Asset Management Hub](/docs/screenshots/assets-management.png)

Hub hiển thị tất cả danh mục tài sản với:
- **Xem Trước Nhanh** - Thumbnail và metadata
- **Bộ Lọc Danh Mục** - Lọc theo loại tài sản
- **Tìm Kiếm** - Tìm kiếm toàn văn bản trong tất cả tài sản
- **Thao Tác Hàng Loạt** - Thao tác chọn nhiều

### Hướng Dẫn Thương Hiệu

![Branding Guidelines](/docs/screenshots/assets-branding-guideline.png)

Tài sản thương hiệu tập trung đảm bảo tính nhất quán xuyên suốt chiến dịch:
- Biến thể logo (chính, phụ, đơn sắc)
- Bảng màu với giá trị hex/RGB
- Đặc tả kiểu chữ (font, kích thước, độ đậm)
- Hướng dẫn giọng điệu và phong cách thương hiệu
- Quy tắc sử dụng và ví dụ

### Storyboard

**Chế Độ Xem Trước**:

![Storyboard Preview](/docs/screenshots/assets-storyboard-preview.png)

Storyboard hình ảnh được tạo bởi lệnh [`/video:storyboard`](/docs/marketing/commands/video#videostoryboard):
- Phân tích từng cảnh
- Khung hình trực quan (tạo bởi Imagen 4)
- Văn bản đối thoại và lồng tiếng
- Góc máy và chuyển cảnh

**Tùy Chọn Tạo**:

![Storyboard Options](/docs/screenshots/assets-storyboard-options.png)

Tùy chỉnh tạo storyboard:
- Chọn nền tảng (YouTube, TikTok, Instagram Reels, LinkedIn)
- Thời lượng (15s, 30s, 60s, 90s)
- Phong cách (Documentary, Commercial, Tutorial, Testimonial)
- Tone (Professional, Casual, Inspirational, Humorous)

### Bài Thuyết Trình

![Slides Preview](/docs/screenshots/assets-slides-preview.png)

Bài thuyết trình được tạo bằng [`/slide:create`](/docs/marketing/commands/slide):
- Pitch deck cho nhà đầu tư
- Đề xuất chiến dịch cho khách hàng
- Demo sản phẩm cho bán hàng
- Báo cáo nội bộ cho các bên liên quan

Định dạng hỗ trợ: `.pptx` (có thể chỉnh sửa), PDF, PNG, Google Slides

### Infographic

![Infographic Preview](/docs/screenshots/assets-infographic-preview.png)

Trực quan hóa dữ liệu và kể chuyện bằng hình ảnh:
- Sơ đồ quy trình
- Biểu đồ so sánh
- Infographic dòng thời gian
- Trực quan hóa thống kê
- Giải thích dựa trên biểu tượng

### Bài Đăng Mạng Xã Hội

![Social Post Preview](/docs/screenshots/assets-social-post-preview.png)

Nội dung mạng xã hội đặc thù từng nền tảng:
- Xem trước với mô phỏng giao diện nền tảng
- Xác thực số ký tự
- Gợi ý hashtag
- Đính kèm hình ảnh/video
- Metadata lập lịch

## Cấu Trúc Thư Mục

```
/assets/
├── writing-styles/          # Hồ sơ giọng điệu tác giả
│   ├── blog-author-1.md
│   ├── email-copywriter.md
│   └── landing-page-style.md
├── copy/                    # Nội dung văn bản
│   ├── blog-posts/
│   ├── landing-pages/
│   ├── email-sequences/
│   └── ad-copy/
├── storyboards/             # Kịch bản video
│   ├── product-launch-video.md
│   ├── testimonial-series/
│   └── social-ads/
├── slides/                  # Bài thuyết trình
│   ├── pitch-deck-v2.pptx
│   ├── q4-campaign.pdf
│   └── product-demo.pptx
├── infographics/            # Dữ liệu hình ảnh
│   ├── customer-journey.png
│   ├── feature-comparison.svg
│   └── metrics-dashboard.png
├── branding/                # Tài sản thương hiệu
│   ├── logo-pack/
│   ├── color-palette.md
│   ├── typography.md
│   └── brand-voice.md
└── social/                  # Nội dung mạng xã hội
    ├── linkedin/
    ├── twitter/
    ├── instagram/
    └── tiktok/
```

## Tính Năng Hub

### 1. Chế Độ Xem Trước

Nhấp vào bất kỳ tài sản nào để mở xem trước đầy đủ:
- **Markdown** - Hiển thị với làm nổi bật cú pháp
- **Hình Ảnh** - Xem lightbox độ phân giải cao
- **Video** - Trình phát nhúng với điều khiển
- **PDF** - Trình xem tài liệu trong trình duyệt
- **Bài Thuyết Trình** - Điều hướng từng slide

### 2. Thao Tác Nhanh

Di chuột qua tài sản để có thao tác tức thì:
- **Chỉnh Sửa** - Mở trong trình chỉnh sửa mặc định
- **Nhân Bản** - Tạo bản sao với hậu tố
- **Di Chuyển** - Chuyển đến danh mục khác
- **Xóa** - Xóa với xác nhận
- **Chia Sẻ** - Tạo liên kết có thể chia sẻ

### 3. Tìm Kiếm & Lọc

**Tìm Kiếm**:
- Tìm kiếm toàn văn bản trong tên file và nội dung
- Khớp mờ cho lỗi đánh máy
- Kết quả theo thời gian thực khi bạn nhập

**Bộ Lọc**:
- Theo danh mục (Copy, Storyboards, Slides, v.v.)
- Theo ngày (7 ngày qua, 30 ngày qua, Tất cả)
- Theo trạng thái (Draft, Published, Archived)
- Theo tag (nhãn tùy chỉnh)

### 4. Thao Tác Hàng Loạt

Chọn nhiều tài sản cho thao tác hàng loạt:
- **Xuất** - Tải về dưới dạng file ZIP
- **Gắn Tag** - Áp dụng nhãn cho nhiều mục
- **Di Chuyển** - Chuyển danh mục hàng loạt
- **Xóa** - Xóa nhiều mục

### 5. Lịch Sử Phiên Bản

Theo dõi thay đổi theo thời gian:
- Quản lý phiên bản dựa trên Git (nếu đã khởi tạo repo)
- Xem diff cho tài sản dạng văn bản
- Khôi phục phiên bản trước
- So sánh phiên bản song song

## Tích Hợp Với Lệnh

Content Hub tích hợp liền mạch với các lệnh marketing:

### Lệnh `/write`

```bash
# Bài blog tự động lưu vào /assets/copy/blog-posts/
/write:blog "10 SaaS Pricing Strategies"

# Sử dụng phong cách viết từ /assets/writing-styles/
/write:blog --style "casual-founder-voice"
```

Xem [Lệnh Write](/docs/marketing/commands/write) để biết chi tiết.

### Lệnh `/video`

```bash
# Storyboard lưu vào /assets/storyboards/
/video:storyboard "Product demo for homepage"

# Workflow video hoàn chỉnh sử dụng tài sản storyboard
/video:create --storyboard "/assets/storyboards/product-demo.md"
```

Xem [Lệnh Video](/docs/marketing/commands/video) để biết chi tiết.

### Lệnh `/slide`

```bash
# Bài thuyết trình lưu vào /assets/slides/
/slide:create "Q4 Campaign Proposal"

# Output: /assets/slides/q4-campaign-proposal.pptx
```

Xem [Lệnh Slide](/docs/marketing/commands/slide) để biết chi tiết.

### Lệnh `/dashboard`

```bash
# Mở Content Hub trong trình duyệt
/dashboard

# Mở danh mục cụ thể
/dashboard --category storyboards

# Mở với truy vấn tìm kiếm
/dashboard --search "pricing strategy"
```

Xem [Lệnh Dashboard](/docs/marketing/commands/dashboard) để biết chi tiết.

## Ví Dụ Workflow

### Ví Dụ 1: Tạo Tài Sản Chiến Dịch

```bash
# 1. Tạo storyboard chiến dịch
/video:storyboard "SaaS product launch - 60s YouTube ad"

# 2. Tạo bài thuyết trình để phê duyệt của các bên liên quan
/slide:create "Product Launch Campaign Proposal"

# 3. Viết bài blog kèm theo ra mắt
/write:blog "Introducing Our Revolutionary SaaS Platform"

# 4. Xem lại tất cả tài sản trong Content Hub
/dashboard --category recent
```

Tất cả tài sản được tự động tổ chức trong `/assets/` với phân loại phù hợp.

### Ví Dụ 2: Kiểm Tra Tính Nhất Quán Thương Hiệu

```bash
# 1. Mở hướng dẫn thương hiệu
/dashboard --category branding

# 2. Xem lại giọng điệu thương hiệu và bảng màu
# 3. Kiểm tra nội dung hiện có với hướng dẫn
/write:audit /assets/copy/blog-posts/recent-post.md

# 4. Cập nhật nội dung để khớp giọng điệu thương hiệu
# 5. Xác minh tính nhất quán trong xem trước Content Hub
```

### Ví Dụ 3: Tái Sử Dụng Nội Dung

```bash
# 1. Tìm bài blog hiện có trong Content Hub
/dashboard --search "pricing strategies"

# 2. Tái sử dụng thành slide deck
/slide:create "Pricing Strategies Webinar" --source /assets/copy/blog-posts/pricing-guide.md

# 3. Tạo storyboard video từ slide
/video:storyboard --based-on /assets/slides/pricing-webinar.pptx

# 4. Tạo bài đăng mạng xã hội từ các điểm chính
/social:post --platform linkedin --source /assets/slides/pricing-webinar.pptx
```

## Lợi Thế Vượt Trội

Content Hub tận dụng **ngữ cảnh codebase** của ClaudeKit để tạo tài sản nhận biết sản phẩm:

- **Screenshot Sản Phẩm** - Tự động trích xuất từ codebase của bạn
- **Mô Tả Tính Năng** - Tạo từ code và tài liệu thực tế
- **Độ Chính Xác Kỹ Thuật** - Tuyên bố marketing được xác minh với triển khai
- **Đồng Bộ Phiên Bản** - Tài sản được cập nhật khi tính năng sản phẩm thay đổi

Ví dụ:

```bash
# Tạo storyboard với screenshot sản phẩm thực tế
/video:storyboard "Feature demo: AI-powered analytics dashboard"

# ClaudeKit:
# 1. Quét /src/components/Analytics/ để tìm UI thực tế
# 2. Chụp screenshot trực tiếp của dashboard
# 3. Tạo storyboard với hình ảnh sản phẩm thực
# 4. Đảm bảo mô tả tính năng khớp với triển khai
```

Xem [Marketing Index](/docs/marketing/) để biết thêm về lợi thế ngữ cảnh codebase.

## Thực Hành Tốt Nhất

**1. Quy Ước Đặt Tên**:
- Sử dụng kebab-case cho tên file: `product-launch-video.md`
- Bao gồm ngày cho nội dung có phiên bản: `pitch-deck-2025-01.pptx`
- Tiền tố bản nháp: `draft-campaign-proposal.md`

**2. Tổ Chức**:
- Nhóm các tài sản liên quan trong thư mục con
- Sử dụng cấu trúc danh mục nhất quán
- Gắn tag tài sản để khám phá xuyên danh mục

**3. Quản Lý Phiên Bản**:
- Khởi tạo Git trong thư mục `/assets/`
- Commit sau khi tạo tài sản quan trọng
- Sử dụng thông điệp commit mô tả rõ ràng

**4. Metadata**:
- Thêm frontmatter vào tài sản markdown
- Bao gồm ngày tạo, tác giả, trạng thái
- Gắn tag với từ khóa liên quan

**5. Dọn Dẹp**:
- Lưu trữ chiến dịch lỗi thời
- Xóa bản nháp không sử dụng thường xuyên
- Xuất chiến dịch đã hoàn thành để sao lưu

## Chi Tiết Kỹ Thuật

**Loại File Được Hỗ Trợ**:
- **Văn Bản**: `.md`, `.txt`, `.html`
- **Hình Ảnh**: `.png`, `.jpg`, `.svg`, `.webp`
- **Video**: `.mp4`, `.webm`, `.mov`
- **Tài Liệu**: `.pdf`, `.pptx`, `.docx`
- **Dữ Liệu**: `.json`, `.csv`, `.yaml`

**Hiệu Năng**:
- Lazy loading cho thư viện tài sản lớn
- Bộ nhớ đệm thumbnail cho hình ảnh/video
- Tìm kiếm được đánh chỉ mục cho kết quả tức thì

**Bảo Mật**:
- Lưu trữ chỉ cục bộ (không đồng bộ đám mây)
- Quản lý phiên bản dựa trên Git (tùy chọn)
- Không phụ thuộc bên ngoài

## Tài Liệu Liên Quan

- [Lệnh Dashboard](/docs/marketing/commands/dashboard) - Tham chiếu lệnh đầy đủ
- [Lệnh Write](/docs/marketing/commands/write) - Tạo nội dung
- [Lệnh Video](/docs/marketing/commands/video) - Sản xuất video
- [Lệnh Slide](/docs/marketing/commands/slide) - Tạo bài thuyết trình
- [Marketing Workflows](/docs/marketing/workflows/) - Workflow đầu-cuối

## Khắc Phục Sự Cố

**Tài sản không xuất hiện trong dashboard?**
- Xác minh file nằm trong thư mục `/assets/`
- Kiểm tra quyền file (phải có thể đọc)
- Làm mới cửa sổ trình duyệt dashboard

**Xem trước không hiển thị?**
- Đảm bảo loại file được hỗ trợ
- Kiểm tra file có bị hỏng không
- Cập nhật ClaudeKit lên phiên bản mới nhất

**Tìm kiếm không tìm thấy tài sản?**
- Xây dựng lại chỉ mục tìm kiếm: `/dashboard --reindex`
- Kiểm tra chính tả tên file và nội dung
- Xác minh file không nằm trong thư mục bị bỏ qua

---

**Bước Tiếp Theo**:
1. Chạy `/dashboard` để khám phá tài sản hiện có
2. Tạo tài sản đầu tiên với `/write:blog`, `/video:storyboard`, hoặc `/slide:create`
3. Xem lại [Marketing Workflows](/docs/marketing/workflows/) để có ví dụ đầu-cuối
