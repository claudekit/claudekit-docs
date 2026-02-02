---
title: Kỹ năng ffmpeg
description: Tài liệu hướng dẫn sử dụng kỹ năng ffmpeg
section: engineer
kit: engineer
category: skills/tools
order: 21
published: true
lang: vi
---

# Kỹ năng ffmpeg

Một framework đa phương tiện toàn diện để mã hóa (encoding), chuyển đổi, truyền phát (streaming) và lọc video/âm thanh.

## Khi nào nên sử dụng

Sử dụng ffmpeg khi bạn cần:
- Chuyển đổi định dạng video
- Nén video
- Trích xuất âm thanh
- Tạo các luồng truyền phát (streams)
- Áp dụng các bộ lọc (filters)
- Xử lý hàng loạt tệp đa phương tiện
- Tạo hình thu nhỏ (thumbnails)

## Bắt đầu nhanh

### Cách gọi kỹ năng

```
"Sử dụng ffmpeg để:
- Chuyển đổi video.mkv sang MP4
- Nén xuống độ phân giải 720p
- Giảm kích thước tệp
- Duy trì chất lượng tốt"
```

### Kết quả nhận được

Kỹ năng này sẽ giúp bạn:
1. Chọn đúng codec
2. Thiết lập chất lượng tối ưu
3. Áp dụng các bộ lọc
4. Tối ưu hóa kích thước tệp
5. Xử lý hàng loạt

## Các trường hợp sử dụng phổ biến

### Chuyển đổi định dạng

```
"Sử dụng ffmpeg để chuyển đổi tất cả các tệp MKV sang MP4 với codec H.264"
```

### Nén Video

```
"Sử dụng ffmpeg để nén video 4K xuống 1080p với chất lượng tốt"
```

### Trích xuất âm thanh

```
"Sử dụng ffmpeg để trích xuất âm thanh từ video dưới dạng MP3"
```

### Tạo ảnh GIF

```
"Sử dụng ffmpeg để tạo ảnh GIF chất lượng cao từ một đoạn video"
```

## Các thao tác phổ biến

### Chuyển đổi định dạng

```bash
# Chuyển đổi đơn giản
ffmpeg -i input.mkv -c copy output.mp4

# Có mã hóa lại (re-encoding)
ffmpeg -i input.avi -c:v libx264 -c:a aac output.mp4
```

### Nén Video

```bash
# Dựa trên chất lượng (CRF 23 = mặc định, thấp hơn = tốt hơn)
ffmpeg -i input.mp4 -c:v libx264 -crf 22 -preset slow output.mp4

# Đặt kích thước tệp mục tiêu với two-pass
ffmpeg -i input.mp4 -c:v libx264 -b:v 2M -pass 1 -f null /dev/null
ffmpeg -i input.mp4 -c:v libx264 -b:v 2M -pass 2 output.mp4
```

### Trích xuất âm thanh

```bash
# Giữ nguyên định dạng gốc
ffmpeg -i video.mp4 -vn -c:a copy audio.m4a

# Chuyển đổi sang MP3
ffmpeg -i video.mp4 -vn -q:a 0 audio.mp3
```

### Cắt Video

```bash
# Không mã hóa lại (nhanh)
ffmpeg -i input.mp4 -ss 00:01:00 -to 00:02:00 -c copy output.mp4

# Có mã hóa lại (chính xác)
ffmpeg -i input.mp4 -ss 00:01:00 -t 00:01:00 -c:v libx264 output.mp4
```

## Các Codec phổ biến

### Video Codecs

- **H.264 (libx264)**: Tương thích phổ quát
- **H.265 (libx265)**: Nén tốt hơn, dành cho 4K
- **VP9**: Mã nguồn mở, được YouTube sử dụng
- **AV1**: Thế hệ mới, nén tốt nhất

### Audio Codecs

- **AAC**: Tiêu chuẩn công nghiệp
- **MP3**: Tương thích phổ quát
- **Opus**: Tốt nhất cho truyền phát/giọng nói
- **FLAC**: Chất lượng không mất dữ liệu (lossless)

## Bộ lọc Video (Video Filters)

### Thay đổi tỷ lệ/Kích thước (Scale/Resize)

```bash
# Kích thước cụ thể
ffmpeg -i input.mp4 -vf scale=1280:720 output.mp4

# Giữ nguyên tỷ lệ khung hình
ffmpeg -i input.mp4 -vf scale=1280:-1 output.mp4

# Một nửa độ phân giải
ffmpeg -i input.mp4 -vf scale=iw/2:ih/2 output.mp4
```

### Cắt khung hình (Crop)

```bash
# Cắt thủ công
ffmpeg -i input.mp4 -vf "crop=1280:720:0:0" output.mp4

# Tự động phát hiện viền đen
ffmpeg -i input.mp4 -vf cropdetect output.mp4
```

### Các bộ lọc khác

```bash
# Khử nhiễu (Denoise)
ffmpeg -i input.mp4 -vf hqdn3d output.mp4

# Xoay 90° theo chiều kim đồng hồ
ffmpeg -i input.mp4 -vf "transpose=1" output.mp4

# Thêm hình mờ (watermark)
ffmpeg -i video.mp4 -i logo.png -filter_complex "overlay=10:10" output.mp4
```

## Bộ lọc âm thanh (Audio Filters)

```bash
# Tăng âm lượng
ffmpeg -i input.mp4 -af "volume=10dB" output.mp4

# Chuẩn hóa âm thanh (Normalize)
ffmpeg -i input.mp4 -af loudnorm output.mp4

# Trộn các bản âm thanh
ffmpeg -i audio1.mp3 -i audio2.mp3 -filter_complex amix output.mp3
```

## Truyền phát (Streaming)

### RTMP (Twitch/YouTube)

```bash
ffmpeg -re -i input.mp4 \
  -c:v libx264 -preset veryfast -maxrate 3000k \
  -c:a aac -b:a 128k \
  -f flv rtmp://live.twitch.tv/app/YOUR_KEY
```

### HLS Streaming

```bash
ffmpeg -i input.mp4 \
  -c:v libx264 -c:a aac \
  -f hls -hls_time 6 -hls_playlist_type vod \
  playlist.m3u8
```

## Các trường hợp sử dụng nâng cao

### Tạo ảnh GIF

```bash
ffmpeg -i input.mp4 \
  -vf "fps=15,scale=640:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
  output.gif
```

### Trích xuất các khung hình

```bash
# Tất cả các khung hình
ffmpeg -i input.mp4 frame_%04d.png

# 1 khung hình mỗi giây
ffmpeg -i input.mp4 -vf fps=1 frame_%04d.png

# Một khung hình duy nhất tại giây thứ 5
ffmpeg -ss 00:00:05 -i input.mp4 -frames:v 1 frame.png
```

### Tạo video từ hình ảnh

```bash
ffmpeg -framerate 30 -i frame_%04d.png \
  -c:v libx264 -pix_fmt yuv420p output.mp4
```

### Nối các Video

Tạo file `concat.txt`:
```
file 'input1.mp4'
file 'input2.mp4'
```

Chạy lệnh:
```bash
ffmpeg -f concat -safe 0 -i concat.txt -c copy output.mp4
```

## Xử lý hàng loạt

### Chuyển đổi tất cả các tệp

```bash
for file in *.mkv; do
  ffmpeg -i "$file" -c:v libx264 -crf 22 "${file%.mkv}.mp4"
done
```

### Thay đổi kích thước tất cả video

```bash
for file in *.mp4; do
  ffmpeg -i "$file" -vf scale=-1:720 "720p_${file}"
done
```

## Tăng tốc phần cứng

### GPU NVIDIA

```bash
ffmpeg -hwaccel cuda -i input.mp4 \
  -c:v h264_nvenc -preset fast output.mp4
```

### Intel QuickSync

```bash
ffmpeg -hwaccel qsv -i input.mp4 \
  -c:v h264_qsv -preset fast output.mp4
```

## Thiết lập chất lượng

### Các giá trị CRF

- 0 = Không mất dữ liệu (file cực lớn)
- 17-18 = Gần như không mất dữ liệu về mặt thị giác
- 20-23 = Chất lượng cao (khuyến nghị)
- 24-28 = Chất lượng trung bình
- 30+ = Chất lượng thấp

### Presets (tốc độ vs độ nén)

- ultrafast, superfast, veryfast, faster, fast
- medium (mặc định)
- slow, slower, veryslow

## Ví dụ nhanh

**Chuyển đổi đơn giản:**
```
"Sử dụng ffmpeg để chuyển đổi video.mkv sang MP4"
```

**Nén cho Web:**
```
"Sử dụng ffmpeg để nén video cho web:
- Độ phân giải 1080p
- Chất lượng tốt
- Kích thước tệp nhỏ
- Codec H.264"
```

**Trích xuất âm thanh:**
```
"Sử dụng ffmpeg để trích xuất âm thanh từ tất cả video trong thư mục dưới dạng MP3"
```

**Tạo hình thu nhỏ:**
```
"Sử dụng ffmpeg để tạo hình thu nhỏ từ video tại giây thứ 5"
```

## Phương pháp hay nhất

1. **Thử nghiệm trên một đoạn ngắn trước**
2. **Sử dụng CRF để đảm bảo chất lượng**
3. **Sao chép luồng (copy streams) khi có thể** (`-c copy`)
4. **Chọn preset phù hợp**
5. **Đừng tăng độ phân giải (upscale) nếu không cần thiết**
6. **Chất lượng âm thanh nên tương xứng với video**
7. **Sử dụng tăng tốc phần cứng**
8. **Kiểm tra chất lượng đầu ra**

## Xử lý sự cố

### Unknown encoder (Không nhận dạng được bộ mã hóa)

```bash
# Kiểm tra các bộ mã hóa có sẵn
ffmpeg -encoders | grep h264
```

### Các vấn đề về tương thích

Sử dụng các giá trị mặc định an toàn:
```bash
ffmpeg -i input.mkv -c:v libx264 -profile:v high \
  -pix_fmt yuv420p -c:a aac output.mp4
```

### Vấn đề hiệu suất

- Sử dụng tăng tốc phần cứng
- Chọn các preset nhanh hơn
- Giảm độ phân giải
- Bật đa luồng (multi-threading)

## Bước tiếp theo

- [Ví dụ về đa phương tiện](/vi/docs/workflows)
- [Xử lý hình ảnh](/vi/docs/engineer/skills/tools/imagemagick)
- [Hướng dẫn truyền phát](/vi/docs/workflows)

---

**Tóm lại:** ffmpeg xử lý mọi nhu cầu về video/âm thanh. Chuyển đổi, nén, truyền phát - một công cụ cho tất cả.
