---
title: "ck:media-processing"
description: Xử lý video, audio và hình ảnh với FFmpeg, ImageMagick và RMBG để mã hóa, chuyển đổi, hiệu ứng, tối ưu hóa và xóa nền
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

# `ck:media-processing`

Bạn từng cần chuyển đổi định dạng video, thay đổi kích thước 500 ảnh, hoặc xóa nền khỏi ảnh sản phẩm? Đây chính xác là những vấn đề mà FFmpeg, ImageMagick và RMBG giải quyết.

## Skill Này Làm Gì

Media Processing cung cấp cho bạn quyền truy cập vào ba công cụ dòng lệnh mạnh mẽ để làm việc với các file đa phương tiện: FFmpeg để xử lý video và audio, ImageMagick để thao tác hình ảnh, và RMBG để xóa nền bằng AI.

FFmpeg xử lý mã hóa và chuyển đổi video với hỗ trợ 100+ định dạng, trích xuất và chuyển đổi audio, tạo streaming manifests cho HLS/DASH, áp dụng filters và effects, và tăng tốc phần cứng để mã hóa nhanh hơn. ImageMagick chuyên về các thao tác hình ảnh như chuyển đổi định dạng, thay đổi kích thước và cắt xén, xử lý hàng loạt hàng trăm ảnh, áp dụng effects và compositions, và tối ưu hóa kích thước file. RMBG cung cấp xóa nền bằng AI với nhiều model chất lượng, xử lý cục bộ (không cần API), hỗ trợ độ phân giải cao đến 4096px và các thao tác batch nhanh.

Hãy nghĩ về skill này như con dao quân đội Thụy Sĩ đa phương tiện của bạn. Khi bạn cần chuẩn bị video cho web streaming, tạo thumbnails từ video, tạo bộ ảnh responsive, xóa nền khỏi ảnh sản phẩm, hoặc tối ưu hóa media cho các ràng buộc kích thước cụ thể, các công cụ này đáp ứng bạn.

## Yêu Cầu Trước

Bạn cần các công cụ này được cài đặt trên hệ thống:

**macOS**:
```bash
brew install ffmpeg imagemagick
npm install -g rmbg-cli
```

**Ubuntu/Debian**:
```bash
sudo apt-get install ffmpeg imagemagick
npm install -g rmbg-cli
```

**Xác Minh Cài Đặt**:
```bash
ffmpeg -version
magick -version
rmbg --version
```

## Hướng Dẫn Chọn Công Cụ

Chọn công cụ phù hợp cho nhiệm vụ của bạn:

| Nhiệm vụ | Công cụ | Lý do |
|---------|---------|-------|
| Mã hóa/chuyển đổi video | FFmpeg | Hỗ trợ codec gốc, streaming |
| Trích xuất/chuyển đổi audio | FFmpeg | Thao tác stream trực tiếp |
| Thay đổi kích thước/effects ảnh | ImageMagick | Tối ưu cho ảnh tĩnh |
| Xóa nền | RMBG | AI-powered, xử lý cục bộ |
| Ảnh hàng loạt | ImageMagick | `mogrify` để chỉnh sửa tại chỗ |
| Thumbnails video | FFmpeg | Trích xuất frame tích hợp |
| Tạo GIF | FFmpeg/ImageMagick | FFmpeg cho video, ImageMagick cho ảnh |

## Các Lệnh FFmpeg Cần Thiết

### Chuyển Đổi và Mã Hóa Video

```bash
# Sao chép streams mà không re-encode (nhanh)
ffmpeg -i input.mkv -c copy output.mp4

# Re-encode với codec H.264 (tương thích phổ biến)
ffmpeg -i input.avi -c:v libx264 -crf 22 -c:a aac output.mp4

# H.265 chất lượng cao (kích thước file nhỏ hơn)
ffmpeg -i input.mp4 -c:v libx265 -crf 24 -c:a aac output.mp4

# MP4 tối ưu cho web (fast start để streaming)
ffmpeg -i input.mov -c:v libx264 -crf 22 -c:a aac -movflags +faststart output.mp4
```

**Tham số chính**:

- `-c:v libx264` - Codec video H.264 (tương thích nhất)
- `-crf 22` - Constant Rate Factor cho chất lượng (0-51, thấp hơn=tốt hơn, 18-28 thông thường)
- `-preset slow` - Cân bằng tốc độ mã hóa/nén (ultrafast, fast, medium, slow, veryslow)
- `-c:a aac` - Codec audio AAC (tương thích phổ biến)
- `-movflags +faststart` - Di chuyển metadata lên đầu cho web streaming

### Trích Xuất Audio

```bash
# Trích xuất audio mà không re-encode (giữ nguyên chất lượng)
ffmpeg -i video.mp4 -vn -c:a copy audio.m4a

# Chuyển đổi sang MP3
ffmpeg -i video.mp4 -vn -c:a libmp3lame -q:a 2 audio.mp3

# Trích xuất khoảng thời gian cụ thể
ffmpeg -i video.mp4 -vn -ss 00:01:30 -t 00:02:00 -c:a copy audio.m4a
```

### Thumbnails Video

```bash
# Trích xuất frame đơn tại 5 giây
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 thumbnail.jpg

# Tạo thumbnails mỗi 10 giây
ffmpeg -i video.mp4 -vf fps=1/10 thumbnail_%03d.jpg

# Thumbnail chất lượng cao
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 -q:v 2 thumbnail.jpg
```

## Các Lệnh ImageMagick Cần Thiết

### Chuyển Đổi và Thay Đổi Kích Thước Ảnh

```bash
# Chuyển đổi định dạng
magick input.png output.jpg

# Thay đổi kích thước để vừa trong kích thước (duy trì tỷ lệ)
magick input.jpg -resize 800x600 output.jpg

# Thay đổi kích thước chính xác (có thể bóp méo)
magick input.jpg -resize 800x600! output.jpg

# Thay đổi kích thước để lấp đầy (cắt phần thừa)
magick input.jpg -resize 800x600^ -gravity center -extent 800x600 output.jpg

# Thay đổi kích thước theo phần trăm
magick input.jpg -resize 50% output.jpg
```

**Tham số resize chính**:

- `800x600` - Vừa trong kích thước (duy trì tỷ lệ)
- `800x600!` - Buộc kích thước chính xác (có thể bóp méo)
- `800x600^` - Lấp đầy kích thước (duy trì tỷ lệ, có thể cắt)
- `800x` - Thay đổi chiều rộng, chiều cao tự động
- `x600` - Thay đổi chiều cao, chiều rộng tự động

### Xử Lý Ảnh Hàng Loạt

```bash
# Thay đổi kích thước tất cả JPGs trong thư mục (ghi đè originals)
mogrify -resize 800x -quality 85 *.jpg

# Chuyển đổi tất cả PNGs sang JPGs
mogrify -format jpg *.png

# Thêm watermark vào tất cả ảnh
mogrify -gravity southeast -draw "image over 10,10 0,0 'watermark.png'" *.jpg

# Tạo thumbnails (giữ nguyên originals)
mkdir thumbnails
mogrify -path thumbnails -resize 200x200 -quality 80 *.jpg
```

**Quan Trọng**: `mogrify` chỉnh sửa files tại chỗ. Luôn backup originals trước hoặc dùng `-path` để chỉ định thư mục đầu ra.

### Tối Ưu Hóa Ảnh

```bash
# Tối ưu hóa JPEG (giảm kích thước file)
magick input.jpg -quality 85 -strip output.jpg

# Tối ưu hóa PNG (nén không mất dữ liệu)
magick input.png -strip -define png:compression-level=9 output.png

# Xóa metadata (EXIF, color profiles)
magick input.jpg -strip output.jpg
```

**Hướng dẫn chất lượng**:

- `-quality 85` - Cân bằng tốt cho web (60-85 thông thường)
- `-quality 95` - Chất lượng cao, file lớn hơn
- `-strip` - Xóa metadata (giảm kích thước file)

## Các Lệnh RMBG Cần Thiết

### Xóa Nền

```bash
# Xóa cơ bản (model modnet)
rmbg input.jpg

# Chất lượng cao (model briaai)
rmbg input.jpg -m briaai -o output.png

# Xử lý nhanh (model u2netp)
rmbg input.jpg -m u2netp -o output.png

# Hỗ trợ độ phân giải cao
rmbg input.jpg -m briaai -r 4096 -o output.png

# Xử lý hàng loạt
for file in *.jpg; do
  rmbg "$file" -m briaai -o "${file%.jpg}_nobg.png"
done
```

**So sánh model**:

- `modnet` - Mặc định, cân bằng chất lượng/tốc độ
- `briaai` - Chất lượng cao nhất, chậm hơn
- `u2netp` - Nhanh nhất, tốt cho nền đơn giản
- `u2net` - Chất lượng tốt, tốc độ vừa phải

**Tham số**:

- `-m <model>` - Chọn AI model
- `-o <output>` - Đường dẫn file đầu ra
- `-r <pixels>` - Độ phân giải tối đa (mặc định: 2048, tối đa: 4096)

## Ví Dụ Thực Tế

### Chuẩn Bị Video Cho Web Streaming

Bạn có file MOV lớn và cần MP4 tối ưu cho web:

```bash
# Chuyển đổi sang H.264 với fast start để streaming
ffmpeg -i raw-video.mov \
  -c:v libx264 \
  -crf 22 \
  -preset slow \
  -c:a aac \
  -movflags +faststart \
  web-video.mp4

# Tạo thumbnail
ffmpeg -i web-video.mp4 -ss 00:00:03 -vframes 1 -q:v 2 thumbnail.jpg
```

### Tạo Bộ Ảnh Responsive

Bạn cần nhiều kích thước của ảnh cho thiết kế web responsive:

```bash
# Tạo thư mục đầu ra
mkdir -p responsive

# Tạo các kích thước: 320w, 640w, 1024w, 1920w
magick original.jpg -resize 320x -quality 85 responsive/image-320w.jpg
magick original.jpg -resize 640x -quality 85 responsive/image-640w.jpg
magick original.jpg -resize 1024x -quality 85 responsive/image-1024w.jpg
magick original.jpg -resize 1920x -quality 85 responsive/image-1920w.jpg

# Hoặc xử lý hàng loạt với mogrify
for width in 320 640 1024 1920; do
  magick original.jpg -resize ${width}x -quality 85 responsive/image-${width}w.jpg
done
```

### Xóa Nền Khỏi Ảnh Sản Phẩm

Bạn có 50 ảnh sản phẩm cần xóa nền:

```bash
# Tạo thư mục đầu ra
mkdir -p products-nobg

# Xử lý hàng loạt với model chất lượng cao
for file in products/*.jpg; do
  filename=$(basename "$file" .jpg)
  rmbg "$file" -m briaai -o "products-nobg/${filename}.png"
done
```

### Trích Xuất Clip Audio Từ Phỏng Vấn

Bạn cần chia một buổi phỏng vấn 2 giờ thành các đoạn:

```bash
# Trích xuất audio từ video
ffmpeg -i interview.mp4 -vn -c:a copy interview-audio.m4a

# Chia thành các đoạn 15 phút
ffmpeg -i interview-audio.m4a -f segment -segment_time 900 -c copy segment_%03d.m4a

# Hoặc trích xuất các clip cụ thể
ffmpeg -i interview-audio.m4a -ss 00:05:30 -t 00:10:00 -c copy clip1.m4a
ffmpeg -i interview-audio.m4a -ss 00:25:15 -t 00:08:30 -c copy clip2.m4a
```

### Tạo GIF Từ Video

Bạn muốn preview GIF của một video:

```bash
# GIF chất lượng cao với tối ưu hóa palette
ffmpeg -i video.mp4 -vf "fps=10,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 output.gif

# GIF đơn giản (chất lượng thấp hơn)
ffmpeg -i video.mp4 -vf "fps=10,scale=320:-1" -loop 0 output.gif

# GIF từ khoảng thời gian cụ thể
ffmpeg -i video.mp4 -ss 00:00:05 -t 00:00:03 -vf "fps=10,scale=480:-1" output.gif
```

### Tối Ưu Hóa Ảnh Cho Email

Bạn cần giảm kích thước file cho đính kèm email:

```bash
# Thay đổi kích thước tối đa 800px chiều rộng và giảm chất lượng
mogrify -resize 800x -quality 75 -strip *.jpg

# Kiểm tra kích thước file
ls -lh *.jpg
```

## Kỹ Thuật Nâng Cao

### Ghép Video

Kết hợp nhiều video:

```bash
# Tạo danh sách file
cat > list.txt << EOF
file 'video1.mp4'
file 'video2.mp4'
file 'video3.mp4'
EOF

# Ghép (cùng codec, độ phân giải)
ffmpeg -f concat -safe 0 -i list.txt -c copy output.mp4
```

### Kết Hợp Ảnh

Tạo ảnh composite:

```bash
# Chèn watermark
magick base.jpg watermark.png -gravity southeast -geometry +10+10 -composite output.jpg

# Tạo collage (lưới 2x2)
magick montage img1.jpg img2.jpg img3.jpg img4.jpg -tile 2x2 -geometry +5+5 collage.jpg

# So sánh cạnh nhau
magick +append before.jpg after.jpg comparison.jpg
```

### Tăng Tốc Phần Cứng (FFmpeg)

Tăng tốc mã hóa với GPU acceleration:

```bash
# NVIDIA NVENC (yêu cầu NVIDIA GPU)
ffmpeg -i input.mp4 -c:v h264_nvenc -preset fast -crf 22 output.mp4

# Intel Quick Sync (yêu cầu Intel GPU)
ffmpeg -i input.mp4 -c:v h264_qsv -preset fast -global_quality 22 output.mp4
```

## Thực Hành Tốt Nhất

**Luôn Backup Originals**: Đặc biệt khi dùng `mogrify` vì nó chỉnh sửa files tại chỗ.

**Dùng Cài Đặt Chất Lượng Phù Hợp**: CRF 18-28 cho video (22 là cân bằng), quality 75-85 cho JPEG (85 là cân bằng).

**Tối Ưu Cho Web**: Dùng `-movflags +faststart` cho video MP4, `-strip` để xóa metadata khỏi ảnh.

**Chọn Codec Phù Hợp**: H.264 để tương thích tối đa, H.265 để nén tốt hơn, VP9 để ưu tiên mã nguồn mở.

**Kiểm Thử Trên Files Nhỏ Trước**: Trước khi xử lý hàng loạt hàng trăm files, kiểm thử lệnh trên một file.

**Theo Dõi Kích Thước File**: Kiểm tra kích thước file đầu ra để đảm bảo tối ưu hóa hoạt động như mong đợi.

## Tài Liệu Tham Chiếu

Skill bao gồm các file tham chiếu toàn diện trong Engineer Kit tại `../claudekit-engineer/.claude/skills/media-processing/references/`:

- `ffmpeg-encoding.md` - Codecs, cài đặt chất lượng, tăng tốc phần cứng
- `ffmpeg-streaming.md` - HLS/DASH manifests, live streaming
- `ffmpeg-filters.md` - Video/audio filters, complex filtergraphs
- `imagemagick-editing.md` - Effects, transformations, compositions
- `imagemagick-batch.md` - Xử lý hàng loạt, các thao tác song song
- `rmbg-background-removal.md` - AI models, CLI usage, batch workflows
- `common-workflows.md` - Tối ưu hóa video, ảnh responsive, tạo GIF
- `troubleshooting.md` - Sửa lỗi, mẹo hiệu suất
- `format-compatibility.md` - Hỗ trợ định dạng, khuyến nghị codec

## Skills và Lệnh Liên Quan

Kết hợp Media Processing với:

- [AI Multimodal](/vi/docs/engineer/skills/ai-multimodal) - Xử lý media trước khi gửi đến Gemini API (nén, thay đổi kích thước, chia nhỏ)
- [Frontend Design](/vi/docs/engineer/skills/frontend-design) - Tối ưu hóa ảnh đã tạo, xóa nền khỏi assets
- [Chrome DevTools](/vi/docs/engineer/skills/chrome-devtools) - Chụp ảnh màn hình, sau đó tối ưu hóa với ImageMagick

## Tham Chiếu Tham Số Thông Dụng

### Cài Đặt Chất Lượng FFmpeg

- `-crf 18` - Không mất dữ liệu nhìn thấy được
- `-crf 22` - Chất lượng cao (khuyến nghị)
- `-crf 28` - Chất lượng thấp hơn, file nhỏ hơn
- `-preset ultrafast` - Mã hóa nhanh nhất, file lớn hơn
- `-preset slow` - Mã hóa chậm hơn, nén tốt hơn

### Thay Đổi Kích Thước ImageMagick

- `800x600` - Vừa trong kích thước (duy trì tỷ lệ)
- `800x600!` - Kích thước chính xác (có thể bóp méo)
- `800x600^` - Lấp đầy kích thước (có thể cắt)
- `800x` - Chỉ thay đổi chiều rộng
- `x600` - Chỉ thay đổi chiều cao

### Chất Lượng ImageMagick

- `-quality 95` - Chất lượng cao
- `-quality 85` - Cân bằng (khuyến nghị)
- `-quality 75` - Chất lượng thấp hơn, file nhỏ hơn

### Models RMBG

- `modnet` - Mặc định, cân bằng
- `briaai` - Chất lượng cao nhất
- `u2netp` - Nhanh nhất
- `u2net` - Chất lượng tốt

## Nguyên Tắc Cốt Lõi

Xử lý media là về việc chọn công cụ và tham số phù hợp cho từng use case cụ thể. FFmpeg cho video/audio, ImageMagick cho ảnh, RMBG để xóa nền. Luôn kiểm thử trên batch nhỏ trước, backup originals, và xác minh chất lượng đầu ra trước khi xử lý hàng trăm files.
