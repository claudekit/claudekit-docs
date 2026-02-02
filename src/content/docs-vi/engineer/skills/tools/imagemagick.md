---
title: Kỹ năng imagemagick
description: Tài liệu hướng dẫn sử dụng kỹ năng imagemagick
section: engineer
kit: engineer
category: skills/tools
order: 22
published: true
lang: vi
---

# Kỹ năng imagemagick

Xử lý hình ảnh nâng cao - chuyển đổi định dạng, thay đổi kích thước, hiệu ứng, biến đổi và các thao tác hàng loạt.

## Khi nào nên sử dụng

Sử dụng imagemagick khi bạn cần:
- Chuyển đổi định dạng hình ảnh
- Thay đổi kích thước/Cắt hình ảnh
- Áp dụng các hiệu ứng/bộ lọc
- Tạo hình thu nhỏ (thumbnails)
- Xử lý hình ảnh hàng loạt
- Thêm hình mờ (watermarks)/văn bản
- Tối ưu hóa cho trang web

## Bắt đầu nhanh

### Cách gọi kỹ năng

```
"Sử dụng imagemagick để:
- Thay đổi kích thước tất cả ảnh sản phẩm thành 800x800
- Chuyển đổi sang định dạng WebP
- Tối ưu hóa kích thước tệp
- Giữ chất lượng cao"
```

### Kết quả nhận được

Kỹ năng này sẽ giúp bạn:
1. Chuyển đổi định dạng
2. Thay đổi kích thước/biến đổi
3. Áp dụng hiệu ứng
4. Xử lý hàng loạt
5. Tối ưu hóa đầu ra

## Các trường hợp sử dụng phổ biến

### Chuyển đổi định dạng

```
"Sử dụng imagemagick để chuyển đổi tất cả ảnh PNG sang JPEG với chất lượng 90%"
```

### Tạo hình thu nhỏ (Thumbnails)

```
"Sử dụng imagemagick để tạo hình thu nhỏ 200x200 cho tất cả hình ảnh trong thư mục"
```

### Chèn hình mờ (Watermark)

```
"Sử dụng imagemagick để thêm logo hình mờ vào góc dưới bên phải của tất cả hình ảnh"
```

### Tối ưu hóa hàng loạt

```
"Sử dụng imagemagick để tối ưu hóa tất cả hình ảnh cho web:
- Chiều rộng tối đa 1920px
- Định dạng WebP
- Chất lượng tốt
- Kích thước tệp nhỏ"
```

## Các thao tác cơ bản

### Chuyển đổi định dạng

```bash
# PNG sang JPEG
magick input.png output.jpg

# Với thiết lập chất lượng
magick input.png -quality 85 output.jpg

# Sang WebP
magick input.jpg output.webp
```

### Thay đổi kích thước (Resize)

```bash
# Vừa vặn trong 800x600 (giữ nguyên tỷ lệ)
magick input.jpg -resize 800x600 output.jpg

# Kích thước chính xác (có thể bị méo)
magick input.jpg -resize 800x600! output.jpg

# Chỉ thay đổi chiều rộng
magick input.jpg -resize 800x output.jpg

# Chỉ thay đổi chiều cao
magick input.jpg -resize x600 output.jpg

# Theo tỷ lệ phần trăm
magick input.jpg -resize 50% output.jpg
```

### Cắt hình ảnh (Crop)

```bash
# Cắt 500x500 từ góc trên bên trái
magick input.jpg -crop 500x500+0+0 output.jpg

# Cắt từ chính giữa
magick input.jpg -gravity center -crop 500x500+0+0 output.jpg
```

### Xoay hình ảnh

```bash
# Xoay 90 độ
magick input.jpg -rotate 90 output.jpg

# Lật ngang
magick input.jpg -flop output.jpg

# Lật dọc
magick input.jpg -flip output.jpg
```

## Hiệu ứng & Bộ lọc

### Làm mờ/Làm sắc nét (Blur/Sharpen)

```bash
# Làm mờ
magick input.jpg -blur 0x8 output.jpg

# Làm sắc nét
magick input.jpg -sharpen 0x1 output.jpg
```

### Điều chỉnh màu sắc

```bash
# Độ sáng (+/- 50)
magick input.jpg -modulate 120 output.jpg

# Độ tương phản (Contrast)
magick input.jpg -contrast output.jpg

# Độ bão hòa (Saturation)
magick input.jpg -modulate 100,150 output.jpg

# Thang màu xám (Grayscale)
magick input.jpg -colorspace Gray output.jpg

# Hiệu ứng màu Sepia
magick input.jpg -sepia-tone 80% output.jpg
```

### Viền & Khung

```bash
# Thêm viền
magick input.jpg -border 10 -bordercolor black output.jpg

# Thêm khung
magick input.jpg -mattecolor white -frame 10x10 output.jpg
```

### Hình mờ (Watermark)

```bash
# Thêm logo
magick input.jpg logo.png -gravity southeast -geometry +10+10 -composite output.jpg

# Thêm văn bản
magick input.jpg -gravity southeast -pointsize 20 -fill white -annotate +10+10 'Copyright 2025' output.jpg
```

## Xử lý hàng loạt

### Chuyển đổi tất cả các tệp

```bash
# Chuyển đổi tất cả PNG sang JPEG
for file in *.png; do
  magick "$file" "${file%.png}.jpg"
done
```

### Sử dụng mogrify để xử lý hàng loạt

```bash
# Thay đổi kích thước tất cả ảnh JPEG tại chỗ
mogrify -resize 800x600 *.jpg

# Chuyển đổi tất cả sang WebP
mogrify -format webp *.jpg
```

### Xử lý hàng loạt nâng cao

```bash
# Tạo hình thu nhỏ cho tất cả hình ảnh
for file in *.jpg; do
  magick "$file" -resize 200x200^ -gravity center -extent 200x200 "thumb_${file}"
done
```

## Tối ưu hóa Web

### Progressive JPEG

```bash
magick input.jpg -interlace Plane -quality 85 output.jpg
```

### Loại bỏ siêu dữ liệu (Strip Metadata)

```bash
magick input.jpg -strip output.jpg
```

### Tối ưu hóa WebP

```bash
magick input.jpg -quality 80 -define webp:method=6 output.webp
```

### Tạo các kích thước đáp ứng (Responsive)

```bash
# Tạo nhiều kích thước khác nhau
magick input.jpg -resize 1920x output-large.jpg
magick input.jpg -resize 1280x output-medium.jpg
magick input.jpg -resize 640x output-small.jpg
```

## Các tính năng nâng cao

### Tạo ảnh ghép (Montage)

```bash
# Tạo contact sheet (tổng hợp các ảnh thu nhỏ)
montage *.jpg -thumbnail 200x200 -geometry +5+5 montage.jpg
```

### Hợp nhất hình ảnh (Composite)

```bash
# Đè hai hình ảnh lên nhau
composite overlay.png background.jpg output.jpg
```

### Tạo ảnh GIF động

```bash
magick -delay 100 -loop 0 frame*.jpg animated.gif
```

### Trích xuất các khung hình từ GIF

```bash
magick animated.gif frame_%03d.jpg
```

## Thông số hình học (Geometry Specs)

- `100x100` - Vừa vặn bên trong (giữ nguyên tỷ lệ)
- `100x100!` - Kích thước chính xác (có thể bị méo)
- `100x100^` - Lấp đầy (có thể bị cắt bớt)
- `100x` - Chiều rộng 100, chiều cao tự động
- `x100` - Chiều cao 100, chiều rộng tự động
- `50%` - Thay đổi tỷ lệ thành 50%
- `100x100+10+20` - Kích thước 100x100 tại tọa độ (10,20)

## Ví dụ nhanh

**Thay đổi kích thước đơn giản:**
```
"Sử dụng imagemagick để thay đổi kích thước ảnh thành chiều rộng 800px"
```

**Tạo hình thu nhỏ hàng loạt:**
```
"Sử dụng imagemagick để tạo hình thu nhỏ vuông 300x300 cho tất cả ảnh sản phẩm"
```

**Chuyển đổi định dạng:**
```
"Sử dụng imagemagick để chuyển đổi tất cả hình ảnh sang định dạng WebP với độ nén tốt"
```

**Thêm hình mờ:**
```
"Sử dụng imagemagick để thêm văn bản bản quyền vào góc dưới bên phải của tất cả hình ảnh"
```

## Phương pháp hay nhất

1. **Luôn sao lưu bản gốc**
2. **Thử nghiệm trên một file trước**
3. **Sử dụng chất lượng phù hợp** (85-90 cho web)
4. **Loại bỏ siêu dữ liệu** cho phiên bản web
5. **Duy trì tỷ lệ khung hình**
6. **Sử dụng WebP** cho các trình duyệt hiện đại
7. **Tạo nhiều kích thước** cho thiết kế đáp ứng
8. **Tối ưu hóa kích thước tệp**

## Các tác vụ thông thường

### Ảnh Sản phẩm

```bash
# Cắt hình vuông từ chính giữa
magick input.jpg -resize 1000x1000^ -gravity center -extent 1000x1000 product.jpg
```

### Mạng xã hội

```bash
# Instagram (1080x1080)
magick input.jpg -resize 1080x1080^ -gravity center -extent 1080x1080 instagram.jpg

# Ảnh bìa Facebook (820x312)
magick input.jpg -resize 820x312^ -gravity center -extent 820x312 facebook.jpg
```

### Thân thiện với Email

```bash
# Kích thước tệp nhỏ
magick input.jpg -resize 600x -quality 70 -strip email.jpg
```

## Xử lý sự cố

### Command not found (Không tìm thấy lệnh)

```bash
# Kiểm tra phiên bản cài đặt
magick -version

# Cài đặt
brew install imagemagick  # macOS
sudo apt-get install imagemagick  # Linux
```

### Chính sách bảo mật (Security policy)

Chỉnh sửa tệp `/etc/ImageMagick-7/policy.xml` hoặc sử dụng lệnh `convert` thay vì `magick`.

### Các vấn đề về chất lượng

- Tăng giá trị chất lượng (-quality 90)
- Sử dụng PNG cho đồ họa/ảnh chụp màn hình
- Sử dụng JPEG cho ảnh chụp
- Sử dụng WebP để nén tốt nhất

## Bước tiếp theo

- [Xử lý đa phương tiện](/vi/docs/workflows)
- [FFmpeg](/vi/docs/engineer/skills/tools/ffmpeg)
- [Tự động hóa hàng loạt](/vi/docs/workflows)

---

**Tóm lại:** imagemagick xử lý mọi tác vụ về hình ảnh. Thay đổi kích thước, chuyển đổi, tối ưu hóa - công cụ dòng lệnh mạnh mẽ để thao tác với hình ảnh.
