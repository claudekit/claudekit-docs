---
title: /fix
description: Tài liệu hướng dẫn lệnh fix:ui
section: engineer
kit: engineer
category: docs/commands/fix
order: 24
published: true
lang: vi
---

# /fix

Sửa các vấn đề UI/UX bằng cách phân tích ảnh chụp màn hình, video hoặc mô tả. Lệnh này kết hợp phân tích thị giác với gỡ lỗi mã nguồn để giải quyết các vấn đề về giao diện một cách nhanh chóng.

## Cú pháp

```bash
/fix [ảnh-chụp-màn-hình/video] [mô tả]
```

## Cách hoạt động

### 1. Phân tích thị giác (nếu có media)

- Phân tích ảnh chụp màn hình bằng AI vision
- Trích xuất bố cục (layout), màu sắc, khoảng cách
- Xác định các điểm không nhất quán về mặt thị giác
- So sánh với ý định thiết kế

### 2. Định vị mã nguồn

- Tìm các tệp component liên quan
- Xác định các tệp CSS/styling
- Định vị các điểm phản hồi (responsive breakpoints)
- Ánh xạ quản lý trạng thái (state management)

### 3. Xác định nguyên nhân gốc rễ

- Phân tích các quy tắc CSS
- Kiểm tra thiết kế phản hồi (responsive design)
- Xem xét logic component
- Xác định các xung đột

### 4. Triển khai bản sửa lỗi

- Cập nhật các style
- Điều chỉnh bố cục
- Sửa các vấn đề về responsive
- Cập nhật logic component

### 5. Xác minh thị giác

- Đề xuất các bước kiểm tra thủ công
- Cung cấp các lệnh xem trước (preview)
- Khuyến nghị kiểm tra trên trình duyệt

## Ví dụ

### Kèm theo ảnh chụp màn hình

```bash
/fix [screenshot.png] - Nút bị lệch trên di động, văn bản bị tràn
```

**Phân tích thị giác:**
```
Đang phân tích ảnh chụp màn hình...

Các vấn đề được phát hiện:
1. Nút nằm cách lề phải 20px (đáng lẽ phải nằm giữa)
2. Văn bản "Continue to Payment" bị cắt thành "Continue to Pay..."
3. Khoảng cách (padding) không nhất quán (trên: 12px, dưới: 8px)
4. Chiều rộng nút: 150px (đáng lẽ phải phản hồi - responsive)

Thiết bị: iPhone 12 Pro (chiều rộng 390px)
Khung nhìn: Di động dọc
```

**Điều gì xảy ra:**
```
1. Đã định vị component
   Tệp: src/components/CheckoutButton.tsx
   Style: src/styles/checkout.css

2. Nguyên nhân gốc rễ:
   - Chiều rộng cố định thay vì phản hồi
   - Văn bản sử dụng px thay vì rem
   - Thiếu breakpoint cho di động
   - Định vị tuyệt đối (absolute positioning)

3. Các bản sửa lỗi đã áp dụng:
   ✓ Thay đổi width: 150px → width: 100%
   ✓ Thêm max-width: 320px
   ✓ Thay đổi font-size: 16px → font-size: 1rem
   ✓ Sửa định vị: absolute → relative
   ✓ Thêm padding: 12px (nhất quán)
   ✓ Thêm text-overflow: ellipsis kèm tooltip

4. Thêm các style phản hồi:
   @media (max-width: 768px) {
     .checkout-button {
       width: calc(100% - 32px);
       margin: 0 16px;
     }
   }

Hãy kiểm tra trên thiết bị di động để xác minh bản sửa lỗi.
```

### Chỉ kèm theo mô tả

```bash
/fix Hộp thoại Modal không đóng khi nhấp vào lớp nền (backdrop) trên Safari di động
```

**Điều gì xảy ra:**
```
1. Đã định vị component modal
   Tệp: src/components/Modal.tsx

2. Nguyên nhân gốc rễ:
   - Sự kiện click không được đăng ký trên iOS
   - Thiếu trình xử lý sự kiện chạm (touch event handler)
   - Vấn đề z-index với lớp nền

3. Các bản sửa lỗi đã áp dụng:
   ✓ Thêm trình lắng nghe sự kiện touchEnd
   ✓ Tăng z-index của lớp nền
   ✓ Thêm -webkit-tap-highlight-color
   ✓ Sửa việc lan truyền sự kiện (event propagation)

4. Các bản sửa lỗi dành riêng cho trình duyệt:
   /* Sửa lỗi cho Safari iOS */
   .modal-backdrop {
     cursor: pointer;
     -webkit-tap-highlight-color: transparent;
   }

Hãy kiểm tra trên Safari iOS để xác nhận.
```

### Kèm theo Video

```bash
/fix [screen-recording.mp4] - Hiệu ứng chuyển động bị giật, menu thả xuống bị nhấp nháy
```

**Phân tích Video:**
```
Đang phân tích các khung hình video...

Các vấn đề được phát hiện:
- Tốc độ khung hình giảm khi chuyển động (60fps → 15fps)
- Menu thả xuống nhấp nháy 3 lần trước khi ổn định
- Việc vẽ lại (repaint) xảy ra trên mọi khung hình
- Các hiệu ứng chuyển đổi CSS gây ra việc tính toán lại bố cục

Dòng thời gian:
0:00 - Người dùng nhấp vào menu
0:01 - Nhấp nháy lần 1
0:02 - Nhấp nháy lần 2
0:03 - Nhấp nháy lần 3
0:04 - Ổn định
```

**Điều gì xảy ra:**
```
1. Đã định vị các component
   - src/components/Dropdown.tsx
   - src/animations/slide-down.css

2. Các vấn đề hiệu suất:
   - Sử dụng hiệu ứng chuyển động chiều cao (gây ra reflow)
   - Thiếu thuộc tính will-change
   - Đang chuyển động box-shadow (tốn kém tài nguyên)
   - Nhiều lần render lại (re-renders)

3. Các tối ưu hóa đã áp dụng:
   ✓ Thay đổi height → transform: scaleY()
   ✓ Thêm will-change: transform
   ✓ Loại bỏ chuyển động box-shadow
   ✓ Thêm tăng tốc GPU
   ✓ Triển khai React.memo cho các mục menu
   ✓ Debounce việc tính toán vị trí

4. Cải thiện hiệu suất:
   Trước: 15 FPS, thời gian chuyển động 150ms
   Sau: 60 FPS, thời gian chuyển động 200ms (mượt mà hơn)

Hãy kiểm tra bằng tab Performance trong DevTools.
```

## Các vấn đề UI thường gặp

### Vấn đề bố cục

```bash
# Sai lệch vị trí
/fix [screenshot] - Các phần tử không được căn thẳng hàng theo chiều dọc

# Tràn nội dung
/fix Nội dung tràn ra ngoài container trên màn hình nhỏ

# Khoảng cách
/fix Khoảng cách (padding) không nhất quán giữa các phần
```

### Vấn đề phản hồi (Responsive)

```bash
# Bố cục di động
/fix [mobile-screenshot] - Bố cục bị hỏng trên iPhone SE

# Chế độ máy tính bảng
/fix Menu điều hướng chồng lên nội dung trên iPad

# Co giãn trên máy tính để bàn
/fix Văn bản quá nhỏ trên màn hình 4K
```

### Lỗi hiển thị (Visual Bugs)

```bash
# Z-index
/fix Hộp thoại Modal hiển thị phía sau header

# Màu sắc
/fix Màu nút quá nhạt, khó đọc văn bản

# Hiệu ứng chuyển động
/fix Vòng quay tải (loading spinner) bị giật trên các thiết bị chậm
```

### Vấn đề tương tác

```bash
# Nhấp/Chạm
/fix Nút không phản hồi khi nhấp trên di động

# Trạng thái Hover
/fix Hiệu ứng hover vẫn hoạt động sau khi nhấp

# Trạng thái Focus
/fix Không thấy chỉ báo tiêu điểm (focus) từ bàn phím
```

## Thực hành tốt nhất

### Cung cấp ngữ cảnh thị giác

✅ **Kèm theo ảnh chụp màn hình:**
```bash
/fix [screenshot.png] - Mô tả rõ ràng về vấn đề
```

✅ **Kèm theo video:**
```bash
/fix [recording.mp4] - Hiển thị vấn đề tương tác
```

❌ **Chỉ văn bản (khi là vấn đề thị giác):**
```bash
/fix Có cái gì đó trông hơi sai
```

### Chỉ định thiết bị/trình duyệt

```bash
/fix [screenshot] - Nút bị lệch trên Safari di động, iPhone 12 Pro
```

### Bao gồm hành vi mong đợi

```bash
/fix [screenshot] - Modal nên nằm giữa màn hình, hiện đang bị lệch sang trái khoảng 50px
```

### Mô tả tương tác

```bash
/fix Khi di chuột qua menu thả xuống, các mục bị nhấp nháy. Đáng lẽ phải mở rộng mượt mà.
```

## Khuyến nghị kiểm tra

Sau khi bản sửa lỗi được áp dụng:

### Kiểm tra thủ công

```bash
# Trình duyệt máy tính
- Chrome (mới nhất)
- Firefox (mới nhất)
- Safari (mới nhất)
- Edge (mới nhất)

# Thiết bị di động
- Safari iOS (iPhone)
- Chrome (Android)
- Samsung Internet

# Kích thước màn hình
- Di động: 375px, 414px
- Máy tính bảng: 768px, 1024px
- Máy tính để bàn: 1920px, 2560px
```

### Kiểm tra tự động

```bash
# Hồi quy thị giác (Visual regression)
npm run test:visual

# Đa trình duyệt
npm run test:browsers

# Phản hồi (Responsive)
npm run test:responsive
```

## Tích hợp với công cụ thiết kế

### Tích hợp Figma

```bash
# So sánh với thiết kế Figma
/fix [screenshot] so sánh với [figma-url]
```

### Tích hợp Storybook

```bash
# Kiểm tra component riêng biệt
npm run storybook

# Kiểm tra các trạng thái của component
```

## Các kịch bản nâng cao

### Vấn đề chế độ tối (Dark Mode)

```bash
/fix [dark-mode-screenshot] - Văn bản không hiển thị trong chế độ tối
```

**Các cách sửa:**
- Điều chỉnh độ tương phản màu sắc
- Thêm các style cho chế độ tối còn thiếu
- Sửa lỗi biến chủ đề (theme variables)

### Bố cục RTL (Phải sang trái)

```bash
/fix [rtl-screenshot] - Bố cục văn bản tiếng Ả Rập bị hỏng
```

**Các cách sửa:**
- Thêm các style dành riêng cho RTL
- Sửa các thuộc tính logic
- Đảo ngược các phần tử bố cục

### Vấn đề về khả năng tiếp cận (Accessibility)

```bash
/fix [screenshot] - Chỉ báo tiêu điểm (focus) không hiển thị cho người dùng bàn phím
```

**Các cách sửa:**
- Tăng cường style cho focus
- Thêm các thuộc tính ARIA
- Cải thiện điều hướng bàn phím

## Các giải pháp phổ biến

### Căn chỉnh Flexbox

```css
/* Trước */
.container {
  display: flex;
}

/* Sau */
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

### Chiều rộng phản hồi

```css
/* Trước */
.button {
  width: 200px;
}

/* Sau */
.button {
  width: 100%;
  max-width: 200px;
}
```

### Xếp chồng Z-index

```css
/* Trước */
.modal {
  z-index: 100;
}

/* Sau */
.modal {
  z-index: 1000;
  position: fixed;
}
```

### Tràn văn bản (Text Overflow)

```css
/* Trước */
.text {
  width: 150px;
}

/* Sau */
.text {
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## Tối ưu hóa hiệu suất

### Hiệu suất chuyển động (Animation Performance)

```css
/* Nên tránh (gây ra reflow) */
.element {
  transition: height 0.3s;
}

/* Nên dùng (tăng tốc GPU) */
.element {
  transition: transform 0.3s;
  will-change: transform;
}
```

### Giảm việc vẽ lại (Repaints)

```css
/* Nên tránh */
.hover:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Nên dùng */
.hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  opacity: 0;
  transition: opacity 0.3s;
}
.hover:hover {
  opacity: 1;
}
```

## Xử lý sự cố

### Không thể tái hiện vấn đề

**Vấn đề:** Vấn đề hiển thị trong ảnh chụp màn hình nhưng không thấy trong mã nguồn

**Giải pháp:**
```bash
# Kiểm tra trình duyệt/thiết bị cụ thể
/fix [screenshot] - Chỉ xảy ra trên Safari iOS

# Kiểm tra môi trường người dùng
# - Phiên bản trình duyệt
# - Kích thước màn hình
# - Mức độ thu phóng (zoom level)
```

### Sửa lỗi hoạt động tại cục bộ nhưng không hoạt động trên Production

**Vấn đề:** Bản sửa lỗi hoạt động tốt trong môi trường phát triển

**Giải pháp:**
```bash
# Kiểm tra quy trình build
npm run build
npm run preview

# Kiểm tra các vấn đề về CSS purging
# Kiểm tra các vấn đề về rút gọn mã (minification)
```

### Nhiều vấn đề liên quan

**Vấn đề:** Có nhiều vấn đề UI trong cùng một khu vực

**Giải pháp:**
```bash
# Sửa tất cả cùng một lúc
/fix [screenshots] - Liệt kê tất cả vấn đề: 1) căn lề, 2) độ tương phản màu, 3) khoảng cách
```

## Bước tiếp theo

- [/design:screenshot](/docs/engineer/commands/design/screenshot) - Chuyển thiết kế thành mã nguồn
- [/fix --quick](/docs/engineer/commands/fix/fast) - Các bản sửa lỗi CSS nhanh
- [/test](/docs/engineer/commands/core/test) - Các bài kiểm tra hồi quy thị giác

---

**Điểm mấu chốt**: `/fix` kết hợp phân tích thị giác với gỡ lỗi mã nguồn để nhanh chóng giải quyết các vấn đề UI/UX trên nhiều thiết bị và trình duyệt, hỗ trợ cả ảnh chụp màn hình và video.
