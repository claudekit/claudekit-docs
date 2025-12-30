---
title: "Xử lý phương tiện"
description: "Xử lý các tệp đa phương tiện với FFmpeg, ImageMagick và RMBG: mã hóa video, thao tác hình ảnh và loại bỏ nền AI."
lang: vi
section: marketing
category: skills
order: 19
---

> Chuyển đổi, thay đổi kích thước, tối ưu hóa và thao tác các tệp phương tiện bằng các công cụ tiêu chuẩn ngành cho video, âm thanh và hình ảnh.

## Kỹ năng này làm gì

**Thách thức**: Tiếp thị yêu cầu xử lý các định dạng phương tiện đa dạng—mã hóa video cho các nền tảng xã hội, thay đổi kích thước hình ảnh cho web, loại bỏ nền, trích xuất âm thanh. Sử dụng các công cụ riêng biệt cho mỗi tác vụ không hiệu quả.

**Giải pháp**: Kỹ năng Xử lý phương tiện tích hợp FFmpeg (video/audio), ImageMagick (hình ảnh) và RMBG (loại bỏ nền AI). Hỗ trợ 100+ định dạng, tăng tốc phần cứng, xử lý batch và tạo manifest phát trực tuyến.

## Kích hoạt

**Ngầm**: Kích hoạt khi agents cần thao tác với các tệp phương tiện (chuyển đổi, thay đổi kích thước, nén, trích xuất).

**Rõ ràng**: Kích hoạt qua prompt:
```
Kích hoạt skill media-processing để [mô tả task]
```

## Khả năng

### 1. Xử lý Video với FFmpeg
Mã hóa, chuyển đổi, trích xuất âm thanh, tạo hình ảnh thu nhỏ và tối ưu hóa cho web/xã hội.

**Hoạt động phổ biến**:
```bash
# Convert format (copy streams, no re-encode)
ffmpeg -i input.mkv -c copy output.mp4

# Re-encode for web (H.264, quality 22)
ffmpeg -i input.avi -c:v libx264 -crf 22 -c:a aac output.mp4

# Extract audio
ffmpeg -i video.mp4 -vn -c:a copy audio.m4a

# Generate thumbnail
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 thumbnail.jpg

# Resize video
ffmpeg -i input.mp4 -vf scale=1280:720 output.mp4
```

**Tham số chính**:
- `-c:v libx264` - Codec video H.264 (tương thích phổ quát)
- `-crf 22` - Chất lượng (0-51, thấp hơn=tốt hơn, 18-28 điển hình)
- `-preset slow` - Mô cân bằng tốc độ mã hóa vs nén
- `-c:a aac` - Codec âm thanh AAC

**Hướng dẫn**: `references/ffmpeg-encoding.md`

### 2. Xử lý hình ảnh với ImageMagick
Thay đổi kích thước, chuyển đổi định dạng, áp dụng hiệu ứng và xử lý batch các hình ảnh.

**Hoạt động phổ biến**:
```bash
# Convert format
magick input.png output.jpg

# Resize (maintain aspect ratio)
magick input.jpg -resize 800x600 output.jpg

# Batch resize all JPEGs in directory
mogrify -resize 800x -quality 85 *.jpg

# Add watermark
magick input.jpg -pointsize 48 -fill white -gravity southeast -annotate +10+10 '© Brand' output.jpg
```

**Cú pháp thay đổi kích thước**:
- `800x600` - Khớp với (duy trì khía cạnh)
- `800x600^` - Điền (có thể cắt)
- `800x600!` - Buộc kích thước chính xác (méo)

**Hướng dẫn**: `references/imagemagick-editing.md`

### 3. Loại bỏ nền với RMBG
Loại bỏ nền do AI hỗ trợ cho ảnh sản phẩm và chân dung.

```bash
# Basic removal (modnet model)
rmbg input.jpg

# High quality (briaai model)
rmbg input.jpg -m briaai -o output.png

# Fast processing (u2netp model)
rmbg input.jpg -m u2netp -o output.png

# High resolution (up to 4096px)
rmbg input.jpg -r 4096 -o output.png
```

**Mô hình**:
- `modnet` - Mặc định, chất lượng cân bằng/tốc độ
- `briaai` - Chất lượng cao nhất, chậm hơn
- `u2netp` - Nhanh nhất, tốt cho xử lý batch

**Hướng dẫn**: `references/rmbg-background-removal.md`

## Yêu cầu trước

**Cài đặt**:
```bash
# macOS
brew install ffmpeg imagemagick
npm install -g rmbg-cli

# Ubuntu/Debian
sudo apt-get install ffmpeg imagemagick
npm install -g rmbg-cli

# Verify
ffmpeg -version && magick -version && rmbg --version
```

## Cấu hình

Không cần cấu hình. Công cụ hoạt động thông qua dòng lệnh.

**Mẹo**: Lưu hoạt động phổ biến dưới dạng tập lệnh shell trong `scripts/media/`.

## Thực hành tốt nhất

**1. Bảo tồn bản gốc**
Luôn làm việc trên các bản sao. Sử dụng các tệp đầu ra, không bao giờ ghi đè các tệp nguồn.

**2. Chọn công cụ phù hợp cho tác vụ**
- **Video/audio**: FFmpeg
- **Hình ảnh tĩnh**: ImageMagick
- **Loại bỏ nền**: RMBG
- **Batch images**: ImageMagick's `mogrify`

**3. Tối ưu hóa cho nền tảng**
- YouTube: 1080p, H.264, 8Mbps bitrate
- Instagram: 1080x1080, H.264, 5Mbps
- TikTok: 1080x1920 (9:16), H.264, 8Mbps

## Use cases phổ biến

### Use Case 1: Tối ưu hóa Video Mạng xã hội
**Kịch bản**: Chuyển đổi video tiếp thị cho Instagram Reels (9:16, 1080x1920, <100MB).

**Quy trình**:
```bash
# 1. Resize and crop to 9:16
ffmpeg -i promo.mp4 -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920" temp.mp4

# 2. Re-encode with size target
ffmpeg -i temp.mp4 -c:v libx264 -crf 23 -maxrate 5M -bufsize 10M -c:a aac -b:a 128k reel.mp4

# 3. Verify size
ls -lh reel.mp4
```

**Kết quả**: Tệp video sẵn sàng Instagram.

### Use Case 2: Xử lý Batch Hình ảnh Sản phẩm
**Kịch bản**: Chuẩn bị 50 ảnh sản phẩm cho trang web thương mại điện tử (800x800, nền trắng, được tối ưu hóa).

**Quy trình**:
```bash
# 1. Remove backgrounds (batch)
for img in *.jpg; do
  rmbg "$img" -m briaai -o "nobg-$img"
done

# 2. Resize to 800x800 (batch with mogrify)
mogrify -resize 800x800^ -gravity center -extent 800x800 -quality 85 nobg-*.jpg

# 3. Verify output
ls -lh nobg-*.jpg
```

**Kết quả**: 50 hình ảnh sản phẩm được tối ưu hóa sẵn sàng tải lên.

## Xử lý sự cố

**Vấn đề**: FFmpeg "codec not found"
**Giải pháp**: Xác minh FFmpeg được xây dựng với hỗ trợ codec: `ffmpeg -codecs | grep h264`

**Vấn đề**: ImageMagick "not authorized" error
**Giải pháp**: Chỉnh sửa `/etc/ImageMagick-7/policy.xml`, thay đổi chính sách PDF từ "none" thành "read|write"

**Vấn đề**: RMBG tạo ra kết quả kém
**Giải pháp**: Thử mô hình khác (`-m briaai` để chất lượng, `-m u2netp` để tốc độ). Đảm bảo đầu vào có độ phân giải cao.

## Kỹ năng liên quan

- [AI Multimodal](/vi/docs/marketing/skills/ai-multimodal) - Xử lý phương tiện dựa trên Gemini (thay thế)
- [Creativity](/vi/docs/marketing/skills/creativity) - Định hướng sáng tạo cho phương tiện được xử lý
- [Social Media](/vi/docs/marketing/skills/social-media) - Yêu cầu định dạng dành riêng cho nền tảng

## Lệnh liên quan

- `/design/video` - Lập kế hoạch nội dung video và chỉnh sửa
- `/content/enhance` - Tối ưu hóa các tài sản phương tiện hiện có
