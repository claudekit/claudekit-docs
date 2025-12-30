---
title: "/video - Lệnh Sản Xuất Video"
description: "Tạo video marketing chuyên nghiệp với tạo script bằng AI, storyboard trực quan và đầu ra sẵn sàng sản xuất sử dụng Gemini Veo 3.1 và Imagen 4"
lang: vi
section: marketing
category: commands
order: 4
published: true
---

# /video - Lệnh Sản Xuất Video

Quy trình sản xuất video từ đầu đến cuối được hỗ trợ bởi Google Gemini Veo 3.1 (tạo video) và Imagen 4 (tạo hình ảnh). Từ script đến storyboard đến video cuối cùng, tạo nội dung marketing chuyên nghiệp mà không cần chi phí sản xuất video truyền thống.

## Các Lệnh

### /video:create - Quy Trình Video Hoàn Chỉnh

Tạo video marketing hoàn chỉnh từ ý tưởng đến đầu ra sẵn sàng sản xuất.

**Cú pháp:**
```bash
/video:create "<ý tưởng video hoặc brief>"
```

**Chức năng:**
1. Tạo script hấp dẫn được tối ưu cho định dạng video
2. Tạo storyboard trực quan chi tiết với mô tả cảnh
3. Tạo các đoạn video sử dụng Gemini Veo 3.1
4. Tổng hợp lồng tiếng và nhạc nền
5. Lắp ráp video cuối cùng với hiệu ứng chuyển cảnh
6. Xuất file sản xuất ra `/assets/videos/`

**Ví dụ:**
```bash
# Video demo sản phẩm
/video:create "demo 30 giây dashboard giới hạn tốc độ API"

# Video giải thích
/video:create "giải thích cách hoạt động authentication flow trong 60 giây"

# Quảng cáo mạng xã hội
/video:create "Instagram Reel thông báo gói giá mới"

# Loạt hướng dẫn
/video:create "loạt video 5 phần về bắt đầu với nền tảng của chúng tôi"
```

**Đầu ra:**
```
/assets/videos/YYYY-MM-DD-slug/
├── script.md                  # Script đầy đủ với timestamp
├── storyboard.md             # Phân tích cảnh trực quan
├── scenes/
│   ├── scene-01-intro.mp4
│   ├── scene-02-problem.mp4
│   ├── scene-03-solution.mp4
│   └── scene-04-cta.mp4
├── audio/
│   ├── voice-over.mp3
│   └── background-music.mp3
├── final/
│   ├── video-master.mp4      # Độ phân giải đầy đủ (1080p)
│   ├── video-social-16x9.mp4 # Mạng xã hội (ngang)
│   ├── video-social-9x16.mp4 # Mạng xã hội (dọc)
│   └── video-social-1x1.mp4  # Mạng xã hội (vuông)
└── metadata.json             # Thông số video, cài đặt render
```

**Các Giai Đoạn Quy Trình:**

**Giai Đoạn 1: Tạo Script** (2-3 phút)
```
✓ Đang phân tích ý tưởng video...
✓ Đang nghiên cứu chi tiết sản phẩm/tính năng từ codebase
✓ Đang tạo hook, nội dung và call-to-action
✓ Đang tối ưu cho định dạng [30/60/90] giây
✓ Script đã lưu: /assets/videos/2024-12-30-api-demo/script.md
```

**Giai Đoạn 2: Tạo Storyboard** (3-5 phút)
```
✓ Đang chia script thành cảnh trực quan (4 cảnh)
✓ Đang tạo mô tả cảnh và tham chiếu trực quan
✓ Đang tạo danh sách shot với góc máy và chuyển cảnh
✓ Storyboard đã lưu: /assets/videos/2024-12-30-api-demo/storyboard.md
```

**Giai Đoạn 3: Tạo Video** (10-15 phút)
```
✓ Đang tạo Cảnh 1: Hook mở đầu với logo sản phẩm (Gemini Veo 3.1)
✓ Đang tạo Cảnh 2: Trực quan hóa vấn đề (Imagen 4 + Veo 3.1)
✓ Đang tạo Cảnh 3: Hướng dẫn dashboard demo (Quay màn hình + Veo 3.1)
✓ Đang tạo Cảnh 4: Call-to-action với URL đăng ký
```

**Giai Đoạn 4: Lắp Ráp & Xuất** (2-3 phút)
```
✓ Đang tổng hợp lồng tiếng (ElevenLabs / Google TTS)
✓ Đang thêm nhạc nền (thư viện miễn phí bản quyền)
✓ Đang áp dụng hiệu ứng chuyển cảnh
✓ Đang render 4 tỷ lệ khung hình (16:9, 9:16, 1:1, master)
✓ Đang nén cho phân phối web (H.265, mục tiêu 5MB)
```

**Mẹo:**
- Giữ video 30-90 giây để tương tác tối đa
- Tham chiếu ảnh chụp màn hình sản phẩm hiện có để nhất quán trực quan
- Xem xét storyboard trước khi tạo video (tiết kiệm thời gian render)
- Sử dụng cờ `--fast` cho bản xem trước chất lượng nháp

---

### /video:script - Tạo Script

Tạo script video được tối ưu cho thông điệp marketing và yêu cầu nền tảng.

**Cú pháp:**
```bash
/video:script "<ý tưởng video>" [--duration=<giây>] [--platform=<nền-tảng>]
```

**Nền tảng:**
- `youtube` - Video YouTube (tối ưu cho thời gian xem)
- `instagram` - Instagram Reel/Story (15-60s, dọc)
- `tiktok` - Video TikTok (15-60s, hook đầu tiên)
- `linkedin` - Video LinkedIn (30-120s, tông chuyên nghiệp)
- `twitter` - Video Twitter/X (30-45s, yêu cầu phụ đề)
- `web` - Nhúng website (bất kỳ thời lượng, chất lượng cao)

**Chức năng:**
1. Phân tích yêu cầu và thực hành tốt nhất của nền tảng mục tiêu
2. Cấu trúc script với công thức đã được chứng minh (Hook → Value → CTA)
3. Tối ưu nhịp độ cho khoảng chú ý của người xem
4. Bao gồm gợi ý văn bản trên màn hình và tín hiệu trực quan
5. Tạo phiên bản thay thế cho kiểm tra A/B

**Ví dụ:**
```bash
# Giải thích YouTube
/video:script "cách API của chúng tôi xử lý giới hạn tốc độ" --duration=90 --platform=youtube

# Instagram Reel
/video:script "3 mẹo để bảo mật API tốt hơn" --duration=30 --platform=instagram

# Thông báo sản phẩm LinkedIn
/video:script "giới thiệu tính năng gói doanh nghiệp" --platform=linkedin
```

**Định Dạng Đầu Ra Script:**

```markdown
# Script Video: Demo Giới Hạn Tốc Độ API

**Nền tảng**: YouTube
**Thời lượng**: 90 giây
**Định dạng**: Giải thích / Demo Sản phẩm
**Tông giọng**: Kỹ thuật nhưng dễ hiểu
**Đối tượng mục tiêu**: Developer, kỹ sư DevOps

---

## Hook (0:00-0:07, 7 giây)

**Hình ảnh**: Dashboard hiển thị tăng đột biến traffic API, sau đó điều chỉnh mượt mà
**Lồng tiếng**: "API của bạn vừa nhận 10.000 yêu cầu trong 10 giây. Điều gì xảy ra tiếp theo?"
**Văn bản trên màn hình**: "API Quá tải → Giải pháp của bạn"

---

## Vấn đề (0:08-0:25, 17 giây)

**Hình ảnh**: Màn hình chia đôi hiển thị server bị crash vs. server có giới hạn tốc độ
**Lồng tiếng**: "Không có giới hạn tốc độ, hạ tầng của bạn sụp đổ. Có nó, dịch vụ của bạn vẫn online ngay cả khi traffic tăng đột biến."
**B-Roll**: Cắt nhanh trang lỗi, loading spinner, người dùng thất vọng

---

## Giải pháp (0:26-0:70, 44 giây)

**Cảnh 1 (0:26-0:40)**: Hướng dẫn dashboard
**Lồng tiếng**: "Dashboard giới hạn tốc độ của chúng tôi cho bạn kiểm soát thời gian thực. Đặt giới hạn theo người dùng, theo endpoint hoặc toàn cục."
**Trên màn hình**: Con trỏ click qua cài đặt, đồ thị cập nhật

**Cảnh 2 (0:41-0:55)**: Ví dụ code
**Lồng tiếng**: "Tích hợp trong 3 dòng code. Cấu hình trong vài giây."
**Trên màn hình**: Đoạn code với làm nổi bật cú pháp

**Cảnh 3 (0:56-0:70)**: Trực quan hóa kết quả
**Lồng tiếng**: "Xem tác động ngay lập tức. Giám sát yêu cầu bị điều tiết, điều chỉnh nhanh chóng và giữ API khỏe mạnh."
**Trên màn hình**: Đồ thị hiển thị dòng traffic được kiểm soát

---

## Call-to-Action (0:71-0:90, 19 giây)

**Hình ảnh**: Logo sản phẩm, URL đăng ký hiển thị nổi bật
**Lồng tiếng**: "Dùng thử miễn phí 14 ngày. Không yêu cầu thẻ tín dụng. Link trong mô tả."
**Văn bản trên màn hình**: "Bắt đầu dùng thử miễn phí → example.com/signup"
**Nhạc nền**: Fade out, kết thúc sôi động

---

## Ghi Chú Sản Xuất

- **Nhịp độ**: Cắt nhanh (cảnh 4-6 giây) để duy trì chú ý
- **Phụ đề**: Yêu cầu để xem không có âm thanh (80% xem tắt tiếng)
- **Thumbnail**: Ảnh chụp màn hình dashboard với overlay chữ "Rate Limiting"
- **Tiêu đề SEO**: "Giới Hạn Tốc Độ API Được Giải Thích Trong 90 Giây | Demo Sản Phẩm"
- **Mô tả**: Bao gồm timestamp, liên kết và tóm tắt giàu từ khóa
```

**Công Thức Script Theo Nền Tảng:**

| Nền tảng | Công thức | Yếu tố chính |
|----------|---------|--------------|
| **YouTube** | Hook (5s) → Vấn đề (15s) → Giải pháp (60s) → CTA (10s) | Dài hơn, giáo dục, tối ưu SEO |
| **Instagram** | Hook (3s) → Giá trị (20s) → CTA (7s) | Dọc, phụ đề, âm thanh trending |
| **TikTok** | Hook (2s) → Deliver (25s) → CTA (3s) | Nhịp cực nhanh, giải trí > giáo dục |
| **LinkedIn** | Bối cảnh (10s) → Insight (40s) → CTA (10s) | Tông chuyên nghiệp, tập trung B2B |
| **Twitter/X** | Hook (3s) → Điểm (35s) → CTA (7s) | Yêu cầu phụ đề, news-jacking |

**Mẹo:**
- Bắt đầu với hook trực quan (không chỉ giới thiệu văn bản)
- Giữ câu ngắn để lồng tiếng rõ ràng
- Bao gồm văn bản trên màn hình cho khả năng truy cập và xem tắt tiếng
- Kết thúc với CTA mạnh (không phải "tìm hiểu thêm" yếu)

---

### /video:storyboard - Storyboard Trực Quan

Tạo storyboard trực quan chi tiết từ script cho lập kế hoạch tiền sản xuất.

**Cú pháp:**
```bash
/video:storyboard <file-script>
```

**Chức năng:**
1. Phân tích script thành các cảnh riêng lẻ
2. Tạo mô tả trực quan cho mỗi cảnh
3. Tạo hình ảnh tham chiếu sử dụng Imagen 4
4. Chỉ định góc máy, chuyển cảnh và hiệu ứng
5. Xuất bản xem trước storyboard HTML tương tác

**Ví dụ:**
```bash
# Storyboard từ script được tạo
/video:storyboard /assets/videos/2024-12-30-api-demo/script.md

# Storyboard từ script tùy chỉnh
/video:storyboard /projects/marketing/scripts/product-launch.md
```

**Đầu Ra Storyboard:**

**Phiên Bản Markdown** (`storyboard.md`):
```markdown
# Storyboard: Demo Giới Hạn Tốc Độ API

## Cảnh 1: Hook Mở Đầu (0:00-0:07)

**Loại Shot**: Cận cảnh cực gần → Góc rộng
**Thời lượng**: 7 giây
**Di chuyển máy**: Zoom out ấn tượng

**Mô Tả Trực Quan**:
Giao diện dashboard lấp đầy màn hình, hiển thị bộ đếm yêu cầu API tăng nhanh (10.000 trong 10 giây). Chỉ báo cảnh báo đỏ nhấp nháy. Máy zoom out để hiển thị đồ thị được kiểm soát với đường điều chỉnh mượt mà.

**Yếu Tố Trên Màn Hình**:
- Bộ đếm yêu cầu (số động)
- Biểu tượng cảnh báo (đỏ nhấp nháy)
- Overlay chữ: "API Quá tải"
- Chuyển tiếp mượt mà sang chữ "Giải pháp của bạn"

**Bảng Màu**: UI tối (#1a1a1a) với accent đỏ (#FF4444) và xanh lá (#44FF44)

**Âm thanh**:
- Lồng tiếng: "API của bạn vừa nhận 10.000 yêu cầu trong 10 giây. Điều gì xảy ra tiếp theo?"
- Hiệu ứng âm thanh: Click nhanh, tiếng bíp cảnh báo
- Nền: Nhạc xây dựng căng thẳng tinh tế

**Ghi Chú Kỹ Thuật**:
- Độ phân giải màn hình: 1920x1080
- Frame rate: 60fps cho hoạt ảnh bộ đếm mượt mà
- Xuất hình ảnh tham chiếu: scene-01-reference.png

---

## Cảnh 2: Trực Quan Hóa Vấn Đề (0:08-0:25)

**Loại Shot**: Màn hình chia đôi
**Thời lượng**: 17 giây
**Di chuyển máy**: Tĩnh, cắt giữa các bên

**Mô Tả Trực Quan**:
Bên trái: Sơ đồ hạ tầng server với chỉ báo lỗi đỏ, biểu tượng server bị crash, trang lỗi 503.
Bên phải: Cùng hạ tầng nhưng với chỉ báo thành công xanh lá, biểu tượng rate limiter bảo vệ server.

**Yếu Tố Trên Màn Hình**:
- Đường chia (dọc)
- Nhãn trái: "Không có Giới Hạn Tốc Độ"
- Nhãn phải: "Có Giới Hạn Tốc Độ"
- Biểu tượng: Rack server, ký hiệu lỗi, dấu kiểm

**Footage B-Roll**:
- Cắt nhanh (2 giây mỗi cái): Loading spinner, trang lỗi, người dùng thất vọng, dashboard hoạt động

**Âm thanh**:
- Lồng tiếng: "Không có giới hạn tốc độ, hạ tầng của bạn sụp đổ..."
- Hiệu ứng âm thanh: Âm thanh crash (bên trái), tiếng ổn định (bên phải)
- Nền: Duy trì căng thẳng, giải quyết nhẹ ở bên phải

**Ghi Chú Kỹ Thuật**:
- Tạo hình ảnh với Imagen 4: so sánh trước/sau
- Sử dụng mã màu đỏ/xanh để rõ ràng
- Xuất tham chiếu: scene-02-split-screen.png

[... Các cảnh 3-4 bổ sung ...]
```

**Bản Xem Trước HTML Tương Tác** (`storyboard.html`):

Tính năng:
- Thanh scrub timeline với thumbnail cảnh
- Click cảnh để xem hình ảnh tham chiếu đầy đủ
- Nút xem trước âm thanh cho lồng tiếng
- Chú thích loại shot và di chuyển máy
- Xuất sang PDF để khách hàng xem xét

**Hình Ảnh Tham Chiếu Được Tạo:**

Sử dụng Imagen 4 để tạo tham chiếu trực quan cho mỗi cảnh:

```
/assets/videos/2024-12-30-api-demo/storyboard/
├── scene-01-opening-hook.png
├── scene-02-problem-viz.png
├── scene-03-solution-demo.png
├── scene-04-cta.png
└── storyboard-overview.png (tất cả cảnh trong lưới)
```

**Mẫu Storyboard:**

Mẫu được xây dựng sẵn cho các loại video phổ biến:

- **Demo Sản Phẩm**: Hook → Tính năng (3-4 cảnh) → Giá → CTA
- **Giải Thích**: Vấn đề → Giải pháp → Cách hoạt động → Lợi ích → CTA
- **Testimonial**: Giới thiệu khách hàng → Trước → Sau → Trích dẫn → CTA
- **Hướng dẫn**: Giới thiệu → Bước 1-3 → Tóm tắt → CTA
- **Social Proof**: Hook → Thống kê → Case study → Bằng chứng xã hội → CTA

**Mẹo:**
- Xem xét storyboard với stakeholder trước khi tạo video đắt đỏ
- Sử dụng hình ảnh tham chiếu để thống nhất phong cách trực quan sớm
- Lặp lại trên storyboard (nhanh) trước khi tạo video (chậm)
- Xuất storyboard PDF để khách hàng xem xét offline

---

## Yêu Cầu Kỹ Thuật

### Thiết Lập Google Gemini API

**API Yêu Cầu:**
- **Gemini Veo 3.1** - Tạo video
- **Imagen 4** - Tạo hình ảnh cho storyboard và B-roll
- **Google Text-to-Speech** - Tổng hợp lồng tiếng (tùy chọn, có thể dùng ElevenLabs)

**Biến Môi Trường:**
```bash
# Google Cloud Project
GOOGLE_CLOUD_PROJECT=your-project-id
GEMINI_API_KEY=your-gemini-api-key

# Cài đặt tạo video
GEMINI_VEO_MODEL=veo-3.1-preview
IMAGEN_MODEL=imagen-4

# Tổng hợp giọng nói (tùy chọn)
ELEVENLABS_API_KEY=your-elevenlabs-key  # Thay thế cho Google TTS
```

**Hạn Ngạch API:**

| Tài nguyên | Gói miễn phí | Gói trả phí | Ghi chú |
|----------|-----------|-----------|-------|
| Gemini Veo 3.1 | 10 video/tháng | Không giới hạn | Tối đa 90s mỗi video |
| Imagen 4 | 100 hình/tháng | Không giới hạn | Tham chiếu storyboard |
| Google TTS | 1M ký tự/tháng | Trả theo sử dụng | Tổng hợp lồng tiếng |

### Thông Số Video

**Định Dạng Video Được Tạo:**

| Đầu ra | Độ phân giải | Tỷ lệ khung hình | Bitrate | Kích thước file (60s) |
|--------|-----------|--------------|---------|-----------------|
| Master | 1920x1080 | 16:9 | 8 Mbps | ~60 MB |
| Social (Ngang) | 1920x1080 | 16:9 | 4 Mbps | ~30 MB |
| Social (Dọc) | 1080x1920 | 9:16 | 4 Mbps | ~30 MB |
| Social (Vuông) | 1080x1080 | 1:1 | 3 Mbps | ~22 MB |
| Tối ưu Web | 1280x720 | 16:9 | 2 Mbps | ~15 MB |

**Cài Đặt Codec Video:**
- Codec: H.265 (HEVC) để nén tốt hơn
- Frame Rate: 30fps (mạng xã hội) / 60fps (demo sản phẩm)
- Âm thanh: AAC 128kbps stereo
- Không gian màu: sRGB (web) / Rec.709 (phát sóng)

---

## Kỹ Năng Liên Quan

Các lệnh `/video` tự động kích hoạt các kỹ năng này:

- **[ai-multimodal](/docs/marketing/skills/ai-multimodal)** - Tích hợp Gemini Veo 3.1 và Imagen 4
- **[media-processing](/docs/marketing/skills/media-processing)** - FFmpeg để chỉnh sửa và transcode video
- **[copywriting](/docs/marketing/skills/copywriting)** - Viết script và storytelling
- **[content-marketing](/docs/marketing/skills/content-marketing)** - Chiến lược marketing video

## Agent Liên Quan

Các agent này cộng tác trong quy trình `/video`:

- **[copywriter](/docs/marketing/agents/copywriter)** - Viết script video hấp dẫn
- **[ui-ux-designer](/docs/marketing/agents/ui-ux-designer)** - Tạo storyboard trực quan

## Quy Trình Làm Việc

Xem hướng dẫn quy trình đầy đủ:

- [Quy Trình Sản Xuất Video](/docs/marketing/workflows/dashboard-workflow) - Quy trình tạo video từ đầu đến cuối

## Khắc Phục Sự Cố

### Tạo Video Thất Bại

**Vấn đề**: Gemini Veo 3.1 trả về lỗi trong quá trình tạo video.

**Giải pháp**:
1. **Kiểm tra hạn ngạch API**: Xác minh bạn chưa vượt quá giới hạn gói miễn phí (10 video/tháng)
2. **Xác thực API key**: `curl -H "Authorization: Bearer $GEMINI_API_KEY" https://generativelanguage.googleapis.com/v1/models`
3. **Giảm thời lượng video**: Thử 30s thay vì 90s
4. **Đơn giản hóa mô tả cảnh**: Loại bỏ hiệu ứng hoặc chuyển cảnh phức tạp
5. **Kiểm tra chính sách nội dung**: Đảm bảo cảnh không vi phạm chính sách nội dung của Google

### Chất Lượng Video Kém

**Vấn đề**: Video được tạo trông bị pixelated hoặc có artifacts.

**Giải pháp**:
1. **Sử dụng chất lượng master**: Không dùng cờ `--fast` cho render cuối cùng
2. **Tăng bitrate**: Thêm `--bitrate=10M` để chất lượng cao hơn
3. **Đơn giản hóa độ phức tạp trực quan**: Giảm số lượng yếu tố chuyển động mỗi cảnh
4. **Sử dụng hình ảnh tham chiếu**: Cung cấp ví dụ trực quan trong storyboard
5. **Lặp lại prompt**: Tinh chỉnh mô tả cảnh để AI hiểu tốt hơn

### Hình Ảnh Storyboard Không Tạo

**Vấn đề**: Imagen 4 không tạo được hình ảnh tham chiếu.

**Giải pháp**:
1. **Kiểm tra hạn ngạch**: Xác minh hạn ngạch API Imagen 4 (100 hình/tháng gói miễn phí)
2. **Xác thực project ID**: Đảm bảo `GOOGLE_CLOUD_PROJECT` đúng
3. **Đơn giản hóa mô tả**: Làm mô tả cảnh ngắn gọn và cụ thể hơn
4. **Sử dụng ví dụ**: Tham chiếu ảnh chụp màn hình sản phẩm hiện có thay vì tạo
5. **Tải lên thủ công**: Tạo hình ảnh tham chiếu thủ công và thêm vào thư mục `/storyboard/`
