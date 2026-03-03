---
lang: vi
title: "ckm:media-processing"
description: "Xử lý file đa phương tiện với FFmpeg, ImageMagick và RMBG: mã hóa video, thao tác ảnh và xóa nền bằng AI."
section: marketing
category: skills
order: 19
---

> Chuyển đổi, thay đổi kích thước, tối ưu hóa và thao tác file media bằng các công cụ tiêu chuẩn ngành cho video, audio và ảnh.

## Skill Này Làm Gì

**Thách thức**: Marketing đòi hỏi xử lý nhiều định dạng media—mã hóa video cho nền tảng mạng xã hội, thay đổi kích thước ảnh cho web, xóa nền, trích xuất audio. Sử dụng các công cụ riêng cho mỗi tác vụ không hiệu quả.

**Giải pháp**: Skill Media Processing tích hợp FFmpeg (video/audio), ImageMagick (ảnh) và RMBG (xóa nền bằng AI). Hỗ trợ 100+ định dạng, tăng tốc phần cứng, xử lý hàng loạt và tạo manifest streaming.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi agent cần thao tác file media (chuyển đổi, thay đổi kích thước, nén, trích xuất).

**Tường minh**: Kích hoạt qua prompt:
```
Activate media-processing skill to [mô tả tác vụ]
```

## Tính Năng

### 1. Xử Lý Video Với FFmpeg
Mã hóa, chuyển đổi, trích xuất audio, tạo thumbnail và tối ưu cho web/mạng xã hội.

**Các thao tác phổ biến**:
```bash
# Chuyển đổi định dạng (sao chép stream, không mã hóa lại)
ffmpeg -i input.mkv -c copy output.mp4

# Mã hóa lại cho web (H.264, chất lượng 22)
ffmpeg -i input.avi -c:v libx264 -crf 22 -c:a aac output.mp4

# Trích xuất audio
ffmpeg -i video.mp4 -vn -c:a copy audio.m4a

# Tạo thumbnail
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 thumbnail.jpg

# Thay đổi kích thước video
ffmpeg -i input.mp4 -vf scale=1280:720 output.mp4
```

**Thông số chính**:
- `-c:v libx264` - Codec video H.264 (tương thích phổ quát)
- `-crf 22` - Chất lượng (0-51, thấp hơn=tốt hơn, thông thường 18-28)
- `-preset slow` - Chế độ cân bằng tốc độ vs nén
- `-c:a aac` - Codec audio AAC

**Hướng dẫn**: `references/ffmpeg-encoding.md`

### 2. Xử Lý Ảnh Với ImageMagick
Thay đổi kích thước, chuyển đổi định dạng, áp dụng hiệu ứng và xử lý ảnh hàng loạt.

**Các thao tác phổ biến**:
```bash
# Chuyển đổi định dạng
magick input.png output.jpg

# Thay đổi kích thước (giữ tỷ lệ)
magick input.jpg -resize 800x600 output.jpg

# Thay đổi kích thước hàng loạt tất cả JPEG trong thư mục
mogrify -resize 800x -quality 85 *.jpg

# Thêm watermark
magick input.jpg -pointsize 48 -fill white -gravity southeast -annotate +10+10 '© Brand' output.jpg
```

**Cú pháp thay đổi kích thước**:
- `800x600` - Vừa vặn trong (giữ tỷ lệ)
- `800x600^` - Lấp đầy (có thể cắt)
- `800x600!` - Kích thước chính xác bắt buộc (biến dạng)

**Hướng dẫn**: `references/imagemagick-editing.md`

### 3. Xóa Nền Với RMBG
Xóa nền bằng AI cho ảnh sản phẩm và chân dung.

```bash
# Xóa cơ bản (mô hình modnet)
rmbg input.jpg

# Chất lượng cao (mô hình briaai)
rmbg input.jpg -m briaai -o output.png

# Xử lý nhanh (mô hình u2netp)
rmbg input.jpg -m u2netp -o output.png

# Độ phân giải cao (tối đa 4096px)
rmbg input.jpg -r 4096 -o output.png
```

**Mô hình**:
- `modnet` - Mặc định, cân bằng chất lượng/tốc độ
- `briaai` - Chất lượng cao nhất, chậm hơn
- `u2netp` - Nhanh nhất, tốt cho xử lý hàng loạt

**Hướng dẫn**: `references/rmbg-background-removal.md`

## Điều Kiện Tiên Quyết

**Cài đặt**:
```bash
# macOS
brew install ffmpeg imagemagick
npm install -g rmbg-cli

# Ubuntu/Debian
sudo apt-get install ffmpeg imagemagick
npm install -g rmbg-cli

# Xác minh
ffmpeg -version && magick -version && rmbg --version
```

## Cấu Hình

Không cần cấu hình. Công cụ hoạt động qua dòng lệnh.

**Mẹo**: Lưu các thao tác phổ biến thành shell script trong `scripts/media/`.

## Thực Hành Tốt Nhất

**1. Bảo Tồn Bản Gốc**
Luôn làm việc trên bản sao. Dùng file đầu ra, không bao giờ ghi đè file nguồn.

**2. Chọn Công Cụ Phù Hợp Với Tác Vụ**
- **Video/audio**: FFmpeg
- **Ảnh tĩnh**: ImageMagick
- **Xóa nền**: RMBG
- **Ảnh hàng loạt**: `mogrify` của ImageMagick

**3. Tối Ưu Cho Nền Tảng**
- YouTube: 1080p, H.264, bitrate 8Mbps
- Instagram: 1080x1080, H.264, 5Mbps
- TikTok: 1080x1920 (9:16), H.264, 8Mbps

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Tối Ưu Video Mạng Xã Hội
**Tình huống**: Chuyển đổi video marketing cho Instagram Reels (9:16, 1080x1920, <100MB).

**Quy trình**:
```bash
# 1. Thay đổi kích thước và cắt thành 9:16
ffmpeg -i promo.mp4 -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920" temp.mp4

# 2. Mã hóa lại với mục tiêu kích thước
ffmpeg -i temp.mp4 -c:v libx264 -crf 23 -maxrate 5M -bufsize 10M -c:a aac -b:a 128k reel.mp4

# 3. Xác minh kích thước
ls -lh reel.mp4
```

**Kết quả**: File video sẵn sàng cho Instagram.

### Trường Hợp 2: Xử Lý Hàng Loạt Ảnh Sản Phẩm
**Tình huống**: Chuẩn bị 50 ảnh sản phẩm cho trang thương mại điện tử (800x800, nền trắng, đã tối ưu).

**Quy trình**:
```bash
# 1. Xóa nền (hàng loạt)
for img in *.jpg; do
  rmbg "$img" -m briaai -o "nobg-$img"
done

# 2. Thay đổi kích thước thành 800x800 (hàng loạt với mogrify)
mogrify -resize 800x800^ -gravity center -extent 800x800 -quality 85 nobg-*.jpg

# 3. Xác minh đầu ra
ls -lh nobg-*.jpg
```

**Kết quả**: 50 ảnh sản phẩm được tối ưu sẵn sàng để tải lên.

## Xử Lý Sự Cố

**Vấn đề**: FFmpeg "codec not found"
**Giải pháp**: Xác minh FFmpeg được xây dựng với hỗ trợ codec: `ffmpeg -codecs | grep h264`

**Vấn đề**: ImageMagick lỗi "not authorized"
**Giải pháp**: Chỉnh sửa `/etc/ImageMagick-7/policy.xml`, thay đổi chính sách PDF từ "none" sang "read|write"

**Vấn đề**: RMBG cho kết quả kém
**Giải pháp**: Thử mô hình khác (`-m briaai` cho chất lượng, `-m u2netp` cho tốc độ). Đảm bảo đầu vào độ phân giải cao.

## Skill Liên Quan

- [AI Multimodal](/vi/docs/marketing/skills/ai-multimodal) - Xử lý media dựa trên Gemini (thay thế)
- [Creativity](/vi/docs/marketing/skills/creativity) - Định hướng sáng tạo cho media đã xử lý
- [Social Media](/vi/docs/marketing/skills/social-media) - Yêu cầu định dạng theo nền tảng

## Lệnh Liên Quan

- `/design/video` - Lên kế hoạch nội dung video và chỉnh sửa
- `/content/enhance` - Tối ưu tài sản media hiện có
