---
title: /content:enhance
description: Tài liệu hướng dẫn cho lệnh enhance
section: engineer
kit: engineer
category: docs/commands/content
order: 51
published: true
lang: vi
---

# /content:enhance

Phân tích và nâng cao bản viết (copy) hiện có để cải thiện sự rõ ràng, tác động, tối ưu hóa SEO và khả năng đọc. Lệnh này tinh chỉnh nội dung của bạn trong khi vẫn duy trì tiếng nói thương hiệu và thông điệp cốt lõi.

## Cú pháp

```bash
/content:enhance [mô tả nội dung hoặc đường dẫn tệp]
```

## Cách thức hoạt động

Lệnh `/content:enhance` tuân theo quy trình nâng cao toàn diện:

### 1. Phân tích Nội dung

- Đọc nội dung hiện có (tệp, URL hoặc mô tả)
- Xác định loại nội dung (blog, tài liệu, tiếp thị, v.v.)
- Phân tích chất lượng và hiệu quả hiện tại
- Nhận diện tiếng nói và tông điệu thương hiệu

### 2. Kiểm định Đa chiều

Triệu tập agent **copywriter** để kiểm định:
- **Sự rõ ràng**: Thông điệp có rõ ràng và dễ hiểu không?
- **Tác động**: Nó có thu hút và thuyết phục không?
- **SEO**: Nó đã được tối ưu hóa cho các công cụ tìm kiếm chưa?
- **Khả năng đọc**: Nó có dễ đọc và dễ quét (scannable) không?
- **Ngữ pháp**: Có lỗi hoặc cách diễn đạt vụng về không?
- **Cấu trúc**: Thông tin có được sắp xếp hợp lý không?

### 3. Đề xuất Nâng cao

Cung cấp các cải tiến cụ thể:
- Tiêu đề và tiêu đề phụ rõ ràng hơn
- Phần mở đầu và kết thúc mạnh mẽ hơn
- Cải thiện các từ nối
- Lựa chọn từ ngữ tốt hơn
- Tích hợp từ khóa SEO
- Cải thiện khả năng đọc

### 4. Nội dung đã sửa đổi

Cung cấp phiên bản đã nâng cao:
- Bảo tồn (hoặc cải thiện) cấu trúc gốc
- Duy trì tiếng nói thương hiệu
- Áp dụng tất cả các cải tiến
- So sánh trước/sau

## Ví dụ

### Nâng cao bài viết Blog

```bash
/content:enhance [cải thiện bài viết blog tại ./blog/ai-development.md]
```

**Điều gì xảy ra:**
```
1. Phân tích Nội dung
   Agent: copywriter

   Đang đọc: ./blog/ai-development.md
   Loại: Bài viết blog kỹ thuật
   Độ dài: 1.200 từ
   Đối tượng mục tiêu: Lập trình viên

   Trạng thái hiện tại:
   - Tiêu đề: Chung chung
   - Mở đầu: Chậm chạp, thông tin chính bị chôn vùi
   - Cấu trúc: Khối văn bản lớn, ít tiêu đề phụ
   - Khả năng đọc: Cấp độ 14 (đại học)
   - SEO: Không có từ khóa, meta yếu

2. Các vấn đề được xác định

   SỰ RÕ RÀNG (Điểm: 6/10):
   - Thuật ngữ chuyên môn không được giải thích
   - Câu phức tạp
   - Đại từ mơ hồ

   TÁC ĐỘNG (Điểm: 5/10):
   - Đoạn mở đầu thiếu lôi cuốn
   - Không có ví dụ thuyết phục
   - Sử dụng thể bị động xuyên suốt

   SEO (Điểm: 3/10):
   - Không có từ khóa chính
   - Thiếu mô tả meta
   - Không có liên kết nội bộ
   - Các thẻ tiêu đề chưa tối ưu

   KHẢ NĂNG ĐỌC (Điểm: 4/10):
   - Điểm Flesch: 32 (khó)
   - Các đoạn văn dài (8-10 dòng)
   - Ít danh sách liệt kê
   - Không có khoảng nghỉ trực quan

3. Các nâng cao đã áp dụng

   TIÊU ĐỀ:
   Trước: "AI Development Tools"
   Sau: "Cách các công cụ phát triển AI cắt giảm 70% thời gian lập trình"
   (+Cụ thể, tập trung vào lợi ích, bao gồm con số)

   MỞ ĐẦU:
   Trước: "AI tools are becoming popular..."
   Sau: "Bạn đã mất 3 giờ để sửa lỗi hôm qua? Các công cụ AI\n   giờ đây có thể phát hiện lỗi đó trong vài giây. Đây là cách..."
   (+Lôi cuốn bằng tình huống cụ thể, giá trị tức thì)

   CẤU TRÚC:
   - Thêm 6 tiêu đề phụ mô tả
   - Chia các đoạn văn dài thành 2-3 dòng
   - Thêm danh sách liệt kê (3 vị trí)
   - Chèn các ví dụ mã nguồn
   - Thêm các ô "Thông điệp chính"

   KHẢ NĂNG ĐỌC:
   - Điểm Flesch: 32 → 58 (dễ hơn)
   - Cấp độ lớp: 14 → 9
   - Câu trung bình: 25 từ → 16 từ
   - Thể bị động: 15% → 3%

   TỐI ƯU HÓA SEO:
   - Từ khóa chính: "AI development tools"
   - Thêm mô tả meta (155 ký tự)
   - Tối ưu hóa các thẻ H2 với từ khóa
   - Thêm 3 liên kết nội bộ
   - Thêm văn bản thay thế (alt text) cho hình ảnh

   CẢI THIỆN TỪ NGỮ:
   - "utilize" → "use" (6 vị trí)
   - "in order to" → "to" (4 vị trí)
   - Loại bỏ các từ thừa (23 trường hợp)
   - Đơn giản hóa thuật ngữ chuyên môn

4. Chỉ số Trước/Sau

   Khả năng đọc:       4/10 → 8/10
   Điểm SEO:           3/10 → 9/10
   Sự rõ ràng:         6/10 → 9/10
   Tác động:           5/10 → 8/10
   Thời gian đọc ước tính: 8 phút → 5 phút

✓ Hoàn tất nâng cao (2 phút)

Các tệp đã tạo:
- blog/ai-development-enhanced.md
- blog/ai-development-changes.diff
```

### Bản viết Trang Tiếp thị

```bash
/content:enhance [cải thiện bản viết trang Giới thiệu về chúng tôi]
```

**Điều gì xảy ra:**
```
1. Phân tích
   Nội dung: Trang Giới thiệu về chúng tôi
   Độ dài hiện tại: 500 từ
   Vấn đề: Chung chung, thuật ngữ doanh nghiệp sáo rỗng, thiếu cá tính

2. Chiến lược Nâng cao

   THAY ĐỔI TÔNG ĐIỆU:
   Trước: Doanh nghiệp, trang trọng, xa cách
   Sau: Chuyên nghiệp nhưng dễ tiếp cận, nhân văn

   TRƯỚC:
   "Công ty chúng tôi được thành lập vào năm 2020 với sứ mệnh\n   cung cấp các giải pháp sáng tạo cho các doanh nghiệp\n   trên toàn thế giới. Chúng tôi tận dụng công nghệ tiên tiến..."

   SAU:
   "Vào năm 2020, chúng tôi cảm thấy bế tắc khi nhìn các lập trình viên\n   lãng phí hàng giờ cho các tác vụ lặp đi lặp lại. Vì vậy, chúng tôi đã xây dựng\n   ClaudeKit—các agent AI thực sự hoạt động hiệu quả."

   (+Cụ thể, dễ đồng cảm, phong cách trò chuyện)

3. Các cải tiến đã áp dụng

   CẤU TRÚC CÂU CHUYỆN:
   - Vấn đề chúng tôi đã thấy
   - Tại sao chúng tôi bắt đầu
   - Điều gì làm chúng tôi khác biệt
   - Chúng tôi giúp đỡ ai hôm nay
   - Chúng tôi đang đi về đâu

   LOẠI BỎ THUẬT NGỮ SÁO RỖNG:
   ❌ "Tận dụng công nghệ tiên tiến"
   ✓ "Sử dụng AI thực sự hiệu quả"

   ❌ "Giải pháp cộng hưởng"
   ✓ "Các công cụ phối hợp nhịp nhàng với nhau"

   ❌ "Sản phẩm tốt nhất phân khúc"
   ✓ "Những công cụ tốt nhất mà chúng tôi có thể xây dựng"

   THÊM CÁ TÍNH:
   - Câu chuyện thành lập cụ thể
   - Ví dụ khách hàng thực tế
   - Trích dẫn từ các thành viên trong nhóm
   - Các chi tiết hậu trường

   TĂNG CƯỜNG UY TÍN:
   - Số liệu cụ thể (50.000+ người dùng)
   - Logo khách hàng
   - Các thành tựu cụ thể
   - Chứng chỉ của nhóm (nếu liên quan)

✓ Bản viết đã nâng cao đã được bàn giao
```

### Trang Tài liệu

```bash
/content:enhance [cải thiện tài liệu API cho phần xác thực]
```

**Điều gì xảy ra:**
```
1. Phân tích
   Loại: Tài liệu kỹ thuật
   Đối tượng: Lập trình viên tích hợp API

   Các vấn đề tìm thấy:
   - Giả định người dùng đã biết quá nhiều
   - Thiếu ví dụ thực tế
   - Thông báo lỗi không rõ ràng
   - Không có phần xử lý sự cố

2. Các nâng cao

   THÊM PHẦN BẮT ĐẦU NHANH:
   - Ví dụ hoạt động tối thiểu trước tiên
   - Sau đó mới giải thích chi tiết
   - Tiết lộ thông tin dần dần

   TRƯỚC:
   "Điểm cuối xác thực chấp nhận các yêu cầu POST\n   với tải trọng JSON chứa các trường tên người dùng và mật khẩu\n   phải được xác thực..."

   SAU:
   "Bắt đầu nhanh:

   ```bash
   curl -X POST https://api.example.com/auth \
     -H "Content-Type: application/json" \
     -d '{"email": "user@example.com", "password": "secret"}'
   ```

   Lệnh này trả về token API của bạn. Sử dụng nó trong các yêu cầu tiếp theo..."

   CẢI THIỆN CẤU TRÚC:
   1. Bắt đầu nhanh (mã nguồn hoạt động trước)
   2. Giải thích luồng xác thực
   3. Chi tiết yêu cầu/phản hồi
   4. Xử lý lỗi
   5. Xử lý sự cố
   6. Thực hành bảo mật tốt nhất

   THÊM VÍ DỤ:
   - Ví dụ cURL
   - JavaScript/Node.js
   - Python
   - Các trường hợp sử dụng phổ biến

   LÀM RÕ CÁC LỖI:
   Trước: "401 Unauthorized"
   Sau:
   "401 Unauthorized
   - Thiếu API key trong tiêu đề (header)
   - API key đã hết hạn (gia hạn trong bảng điều khiển)
   - Định dạng API key không hợp lệ"

✓ Tài liệu đã được nâng cao
```

## Khi nào nên sử dụng

### ✅ Sử dụng /content:enhance cho:

**Các bài viết Blog hiện có**
```bash
/content:enhance [cải thiện các bài viết blog cũ để tối ưu SEO]
```

**Bản viết Tiếp thị**
```bash
/content:enhance [tinh chỉnh nội dung trang chủ]
```

**Tài liệu hướng dẫn**
```bash
/content:enhance [làm cho tài liệu API rõ ràng hơn]
```

**Nội dung Email**
```bash
/content:enhance [cải thiện khả năng đọc của bản tin newsletter]
```

**Mô tả Sản phẩm**
```bash
/content:enhance [nâng cao bản viết trang sản phẩm]
```

### ❌ Không sử dụng cho:

**Tạo nội dung mới**
- Sử dụng `/content:fast` hoặc `/content:good` thay thế

**Tối ưu hóa chuyển đổi**
- Sử dụng `/content:cro` cho các cải tiến tập trung vào CRO

**Sửa lỗi ngữ pháp nhanh**
- Chỉ cần sửa trực tiếp hoặc sử dụng công cụ kiểm tra ngữ pháp

## Các khía cạnh nâng cao

### 1. Sự rõ ràng

**Trước:**
```
"Nền tảng của chúng tôi cho phép người dùng tận dụng các khả năng
AI tiên tiến để tối ưu hóa hiệu quả quy trình phát triển của họ."
```

**Sau:**
```
"Xây dựng các tính năng nhanh hơn gấp 10 lần với AI có khả năng viết,
kiểm thử và đánh giá mã nguồn của bạn."
```

### 2. Tác động

**Trước:**
```
"Chúng tôi cung cấp nhiều tính năng khác nhau cho các lập trình viên."
```

**Sau:**
```
"Phát hành tính năng tiếp theo của bạn trong vài giờ, không phải vài tuần.
Hơn 50.000 lập trình viên đã và đang làm điều đó."
```

### 3. SEO

**Các kỹ thuật tối ưu hóa:**
- Từ khóa chính trong thẻ H1
- Từ khóa phụ trong các thẻ H2
- Mật độ từ khóa tự nhiên (1-2%)
- Mô tả meta (150-160 ký tự)
- Liên kết nội bộ
- Văn bản thay thế cho hình ảnh (alt text)
- Tối ưu hóa slug URL

### 4. Khả năng đọc

**Các cải tiến:**
- Câu ngắn hơn (trung bình 15-20 từ)
- Đoạn văn ngắn hơn (2-4 dòng)
- Sử dụng danh sách liệt kê
- Tiêu đề phụ sau mỗi 300 từ
- Thể chủ động (giảm thiểu thể bị động)
- Từ ngữ đơn giản (tránh thuật ngữ chuyên môn quá mức)
- Khoảng nghỉ trực quan (hình ảnh, khối mã nguồn)

## Các chỉ số về khả năng đọc

### Điểm Flesch Reading Ease

```
90-100: Rất dễ (lớp 5)
60-70:  Dễ (lớp 8-9) ← Mục tiêu cho hầu hết nội dung
30-50:  Khó (đại học)
0-30:   Rất khó
```

### Mục tiêu theo loại nội dung

```
Bài viết blog:      60-70 (Dễ)
Bản viết tiếp thị:  70-80 (Khá dễ)
Tài liệu hướng dẫn: 50-60 (Tiêu chuẩn)
Báo cáo kỹ thuật:   30-50 (Khó) - Có thể chấp nhận
```

## Thực hành SEO tốt nhất

### Sử dụng từ khóa

```
Thẻ Title:         Bao gồm từ khóa chính
H1:               Từ khóa chính
H2:               Từ khóa phụ (1-2)
Đoạn văn đầu tiên: Từ khóa chính một cách tự nhiên
Xuyên suốt:       Mật độ từ khóa 1-2%
Mô tả Meta:       Từ khóa chính
```

### SEO trên trang (On-Page SEO)

```
✓ URL mô tả (/ai-development-tools)
✓ Liên kết nội bộ (3-5 liên kết mỗi bài viết)
✓ Liên kết ngoài (1-2 liên kết uy tín)
✓ Tối ưu hóa hình ảnh (alt text, nén ảnh)
✓ Định dạng thân thiện với di động
✓ Thời gian tải trang nhanh (loại bỏ mã thừa)
```

## Các mẫu nâng cao

### Cấu trúc bài viết Blog

```
1. Tiêu đề hấp dẫn (có con số hoặc lợi ích)
2. Phần lôi cuốn (vấn đề hoặc sự thật gây ngạc nhiên)
3. Xem trước giá trị nhanh
4. Nội dung chính (tiêu đề phụ sau mỗi 300 từ)
5. Các ví dụ thực tế
6. Các thông điệp chính
7. CTA rõ ràng
```

### Cấu trúc bản viết Tiếp thị

```
1. Tiêu đề gây chú ý
2. Phụ đề (mô tả chi tiết lợi ích)
3. Xác định vấn đề
4. Trình bày giải pháp
5. Bằng chứng xã hội
6. Tính năng dưới dạng lợi ích
7. Xử lý phản đối
8. CTA mạnh mẽ
```

### Cấu trúc Tài liệu hướng dẫn

```
1. Bắt đầu nhanh (ví dụ hoạt động tối thiểu)
2. Tổng quan (nó làm được gì)
3. Cách sử dụng chi tiết
4. Các tham số/tùy chọn
5. Các ví dụ (nhiều ngôn ngữ)
6. Xử lý lỗi
7. Xử lý sự cố
8. Thực hành tốt nhất
```

## Tệp đầu ra

Sau khi `/content:enhance` hoàn tất:

### Nội dung đã nâng cao

```
content/enhanced/[tên-gốc]-enhanced.md
```

Phiên bản đầy đủ đã nâng cao sẵn sàng để sử dụng.

### Báo cáo thay đổi

```
content/enhanced/[tên-gốc]-changes.diff
```

Hiển thị tất cả các thay đổi đã thực hiện.

### Báo cáo Phân tích

```
plans/content-enhance-[tên]-YYYYMMDD.md
```

Chứa:
- Điểm phân tích gốc
- Các vấn đề được xác định
- Các nâng cao đã áp dụng
- Chỉ số trước/sau

## Thực hành tốt nhất

### Bảo tồn tiếng nói thương hiệu

```
Tông điệu gốc: Chuyên nghiệp, hữu ích
✓ Giữ lại: Chuyên nghiệp, hữu ích
✗ Thay đổi thành: Suồng sã, kỳ quặc (trừ khi được yêu cầu)
```

### Duy trì tính chính xác

```
✓ Cải thiện sự rõ ràng của các chi tiết kỹ thuật
✗ Đơn giản hóa quá mức dẫn đến không chính xác
```

### Đừng tối ưu hóa quá đà

```
✗ Nhồi nhét từ khóa cho SEO
✗ Làm cho nội dung trở nên ngớ ngẩn để dễ đọc
✓ Cân bằng giữa sự rõ ràng, tính chính xác và sự tối ưu hóa
```

## Các cải thiện phổ biến

### Loại bỏ từ thừa

```
❌ "In order to" → ✓ "To"
❌ "Due to the fact that" → ✓ "Because"
❌ "At this point in time" → ✓ "Now"
❌ "In the event that" → ✓ "If"
❌ "For the purpose of" → ✓ "For" hoặc "To"
```

### Tăng cường động từ

```
❌ "Is able to" → ✓ "Can"
❌ "Make use of" → ✓ "Use"
❌ "Take action" → ✓ "Act"
❌ "Provide assistance" → ✓ "Help"
```

### Thể chủ động

```
❌ "Mã nguồn được viết bởi lập trình viên"
✓ "Lập trình viên viết mã nguồn"

❌ "Lỗi được phát hiện bởi các bài kiểm thử"
✓ "Các bài kiểm thử phát hiện lỗi"
```

## Xử lý sự cố

### Nâng cao làm thay đổi ý nghĩa

**Vấn đề:** Phiên bản nâng cao nói điều gì đó khác đi.

**Giải pháp:**
```bash
# Xem báo cáo thay đổi
cat content/enhanced/[tên]-changes.diff

# Chỉ định những gì cần giữ lại
/content:enhance [cùng nội dung, nhưng giữ nguyên độ chính xác kỹ thuật của phần X]
```

### Thay đổi quá nhiều

**Vấn đề:** Nâng cao quá mạnh tay.

**Giải pháp:**
```bash
# Yêu cầu thay đổi nhẹ nhàng hơn
/content:enhance [cùng nội dung, nhưng chỉ thay đổi tối thiểu để cải thiện khả năng đọc]
```

### Mất tiếng nói thương hiệu

**Vấn đề:** Không còn nghe giống như chúng tôi nữa.

**Giải pháp:**
```bash
# Chỉ định tông điệu
/content:enhance [cùng nội dung, duy trì tông điệu chuyên nghiệp trang trọng]
```

## Sau khi nâng cao

Quy trình tiêu chuẩn:

```bash
# 1. Nâng cao nội dung
/content:enhance [mô tả nội dung]

# 2. Xem xét các thay đổi
cat content/enhanced/[tên]-changes.diff

# 3. Xem xét phiên bản đã nâng cao
cat content/enhanced/[tên]-enhanced.md

# 4. Kiểm tra sự cải thiện chỉ số
cat plans/content-enhance-*.md

# 5. Nếu hài lòng, thay thế bản gốc
mv content/enhanced/[tên]-enhanced.md [vị trí-gốc]

# 6. Commit các thay đổi
/git:cm
```

## Các chỉ số cần theo dõi

Sau khi xuất bản nội dung đã nâng cao:

### Chỉ số tương tác

- Thời gian trên trang (nên tăng)
- Tỷ lệ thoát (nên giảm)
- Độ sâu cuộn (nên tăng)
- Lượt chia sẻ mạng xã hội (có thể tăng)

### Chỉ số SEO

- Thứ hạng tìm kiếm (theo dõi các từ khóa mục tiêu)
- Lưu lượng truy cập tự nhiên (theo dõi trong 30-60 ngày)
- Tỷ lệ nhấp từ tìm kiếm
- Xuất hiện trong các đoạn trích nổi bật (featured snippets)

### Chỉ số Chuyển đổi

- Hoàn thành mục tiêu (đăng ký, tải xuống, v.v.)
- Tỷ lệ nhấp vào CTA
- Chuyển hướng sang trang tiếp theo

## Các bước tiếp theo

- [/content:cro](/docs/engineer/commands/content/cro) - Tối ưu hóa cho chuyển đổi
- [/content:good](/docs/engineer/commands/content/good) - Viết nội dung chất lượng mới
- [/docs:update](/docs/engineer/commands/docs/update) - Cập nhật tài liệu hướng dẫn

---

**Thông điệp chính**: `/content:enhance` cải thiện nội dung hiện có trên nhiều phương diện (sự rõ ràng, tác động, SEO, khả năng đọc) trong khi vẫn bảo tồn thông điệp cốt lõi và tiếng nói thương hiệu của bạn, làm cho nội dung của bạn hiệu quả hơn và dễ khám phá hơn.
