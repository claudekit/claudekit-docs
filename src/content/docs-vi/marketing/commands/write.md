---
title: "/write - Lệnh Viết Nội Dung"
description: "Tạo bài blog, kiểm tra chất lượng nội dung và quản lý quy trình xuất bản với trợ lý viết AI phù hợp với giọng văn thương hiệu của bạn"
section: marketing
category: commands
order: 3
published: true
---

# /write - Lệnh Viết Nội Dung

Tạo nội dung bằng AI với tự động trích xuất phong cách viết. Tạo bài blog phù hợp với giọng văn thương hiệu, kiểm tra chất lượng nội dung hiện có về SEO, và tối ưu hóa quy trình xuất bản.

## Các Lệnh

### /write:blog - Tạo Bài Blog

Tạo bài blog hoàn chỉnh với tự động khớp phong cách từ nội dung hiện có của bạn.

**Cú pháp:**
```bash
/write:blog "<chủ đề hoặc tiêu đề>"
```

**Chức năng:**
1. Trích xuất phong cách viết từ thư mục `/assets/writing-styles/`
2. Phân tích giọng văn, tông giọng và mẫu nội dung thương hiệu
3. Tạo bài blog với phong cách và cấu trúc phù hợp
4. Tối ưu hóa SEO và khả năng đọc
5. Lưu bản nháp vào `/assets/blog-posts/` để xem xét

**Ví dụ:**
```bash
# Bài blog về tính năng sản phẩm
/write:blog "giới thiệu hệ thống giới hạn tốc độ API mới"

# Nội dung dạng hướng dẫn
/write:blog "cách tích hợp Claude Code với CI/CD pipeline"

# Bài viết thought leadership
/write:blog "tương lai của phát triển phần mềm hỗ trợ AI"
```

**Đầu ra:**
- **File bản nháp**: `/assets/blog-posts/YYYY-MM-DD-slug.md`
- **Metadata**: Tiêu đề SEO, mô tả, thẻ, danh mục
- **Cấu trúc**: Tiêu đề H2/H3, phần mở đầu/nội dung/kết luận
- **Tài nguyên**: Hình ảnh đề xuất, đoạn code, call-to-action

**Trích Xuất Phong Cách Viết:**

Hệ thống học từ nội dung mẫu trong `/assets/writing-styles/`:

```
/assets/writing-styles/
├── author-samples/
│   ├── jane-ceo-posts.md        # Góc nhìn điều hành
│   ├── john-engineer-blogs.md   # Phân tích kỹ thuật sâu
│   └── sarah-marketing-copy.md  # Giọng văn marketing
├── brand-voice.md                # Hướng dẫn phong cách công ty
└── content-templates/
    ├── tutorial-template.md
    ├── announcement-template.md
    └── case-study-template.md
```

**Các Tham Số Phong Cách Được Trích Xuất:**
- **Tông giọng**: Chính thức, thân mật, kỹ thuật, trò chuyện
- **Giọng văn**: Ngôi thứ nhất, ngôi thứ ba, tập trung vào "chúng tôi"
- **Độ dài câu**: Ngắn gọn vs. giải thích chi tiết
- **Độ sâu kỹ thuật**: Người mới, trung cấp, chuyên gia
- **Mẫu định dạng**: Danh sách, khối code, trích dẫn, gọi chú ý

**Mẹo:**
- Thêm 2-3 bài mẫu vào `/assets/writing-styles/author-samples/` để có kết quả tốt nhất
- Bao gồm nhiều loại: thông báo, hướng dẫn, thought leadership
- Cập nhật mẫu phong cách khi giọng văn thương hiệu phát triển
- Xem xét tính chính xác thực tế của bản nháp AI trước khi xuất bản

---

### /write:audit - Kiểm Tra Chất Lượng Nội Dung

Phân tích nội dung hiện có về chất lượng, SEO, khả năng đọc và sự phù hợp thương hiệu.

**Cú pháp:**
```bash
/write:audit <đường-dẫn-file hoặc URL>
```

**Chức năng:**
1. Phân tích cấu trúc nội dung và khả năng đọc
2. Kiểm tra tối ưu SEO (từ khóa, meta, tiêu đề)
3. Đánh giá tính nhất quán giọng văn thương hiệu
4. Xác định khoảng trống nội dung và cơ hội cải thiện
5. Tạo khuyến nghị hành động cụ thể

**Ví dụ:**
```bash
# Kiểm tra file markdown local
/write:audit /assets/blog-posts/2024-12-15-api-launch.md

# Kiểm tra bài blog đã xuất bản
/write:audit https://example.com/blog/api-launch

# Kiểm tra nhiều file
/write:audit "/assets/blog-posts/*.md"
```

**Tiêu Chí Kiểm Tra:**

| Danh mục | Kiểm tra | Điểm số |
|----------|--------|---------|
| **SEO** | Thẻ tiêu đề, mô tả meta, cấu trúc H1/H2, mật độ từ khóa, liên kết nội bộ | 0-100 |
| **Khả năng đọc** | Cấp độ Flesch-Kincaid, độ phức tạp câu, độ dài đoạn văn, chuyển tiếp | 0-100 |
| **Cấu trúc** | Mở đầu hấp dẫn, dòng chảy phần, kết luận/CTA, tính nhất quán định dạng | 0-100 |
| **Giọng văn thương hiệu** | Sự phù hợp tông giọng, sử dụng thuật ngữ, tuân thủ hướng dẫn phong cách | 0-100 |
| **Tương tác** | Yếu tố đa phương tiện, takeaway hành động, khả năng chia sẻ mạng xã hội | 0-100 |

**Báo Cáo Đầu Ra:**
```markdown
# Kiểm Tra Nội Dung: Thông Báo Ra Mắt API

**Điểm Tổng Thể: 82/100** ✅ Tốt

## Điểm Mạnh
- ✅ Tối ưu SEO mạnh (tiêu đề, meta, từ khóa)
- ✅ Cấu trúc rõ ràng với dòng chảy logic
- ✅ Phần mở đầu hấp dẫn với hook vấn đề/giải pháp

## Vấn Đề Tìm Thấy
- ⚠️ **Khả năng đọc (Cấp 14)**: Giảm độ phức tạp câu cho đối tượng rộng hơn
- ⚠️ **Giọng văn thương hiệu**: Dùng "chúng tôi" thay vì "nhóm của chúng tôi" (ưu tiên hướng dẫn phong cách)
- ❌ **Thiếu CTA**: Không có call-to-action ở cuối bài

## Khuyến Nghị
1. **SEO**: Thêm liên kết nội bộ đến tài liệu API liên quan
2. **Khả năng đọc**: Tách 3 đoạn văn dài (200+ từ) thành các phần ngắn hơn
3. **Tương tác**: Thêm ví dụ code minh họa giới hạn tốc độ
4. **CTA**: Bao gồm nút "Dùng thử API" liên kết đến đăng ký

## Sửa Nhanh
- Dòng 42: "Việc triển khai, vốn phức tạp..." → "Việc triển khai rất phức tạp..."
- Dòng 68: Thêm tiêu đề H3 "Cách Hoạt Động" trước giải thích kỹ thuật
- Dòng 105: Thêm đoạn code hiển thị header giới hạn tốc độ
```

**Mẹo:**
- Chạy kiểm tra trước khi xuất bản nội dung mới
- Sử dụng cho chu kỳ làm mới nội dung hiện có
- Kiểm tra hàng loạt tất cả bài blog theo quý
- Theo dõi điểm kiểm tra theo thời gian để đo lường cải thiện

---

### /write:publish - Quy Trình Xuất Bản

Tối ưu hóa quy trình xuất bản nội dung từ bản nháp đến phát hành với kiểm tra tự động và triển khai.

**Cú pháp:**
```bash
/write:publish <file-bản-nháp> [--platform=<nền-tảng>]
```

**Nền tảng:**
- `wordpress` - Trang WordPress qua REST API
- `markdown` - Trang tĩnh (Astro, Next.js, Hugo)
- `notion` - Không gian làm việc Notion
- `medium` - Xuất bản Medium
- `dev` - Cộng đồng DEV
- `hashnode` - Blog Hashnode

**Chức năng:**
1. Chạy kiểm tra nội dung cuối cùng (SEO, khả năng đọc, chất lượng)
2. Xác thực metadata frontmatter
3. Tối ưu hóa hình ảnh (nén, văn bản thay thế, responsive)
4. Tạo đoạn mạng xã hội
5. Xuất bản lên nền tảng mục tiêu
6. Tạo bản sao lưu trữ với timestamp

**Ví dụ:**
```bash
# Xuất bản lên WordPress
/write:publish /assets/blog-posts/api-launch.md --platform=wordpress

# Xuất bản lên trang tĩnh (commit vào repo)
/write:publish /assets/blog-posts/tutorial.md --platform=markdown

# Xuất bản lên nhiều nền tảng
/write:publish /assets/blog-posts/announcement.md --platform=medium,dev,hashnode
```

**Danh Sách Kiểm Tra Trước Xuất Bản:**

Xác thực tự động trước khi xuất bản:

- ✅ **Điểm Kiểm Tra Nội Dung**: Yêu cầu tối thiểu 75/100
- ✅ **Frontmatter Đầy Đủ**: Tiêu đề, mô tả, ngày, tác giả, thẻ
- ✅ **SEO Meta**: Tiêu đề 50-60 ký tự, mô tả 150-160 ký tự
- ✅ **Hình Ảnh Tối Ưu**: < 200KB mỗi hình, có văn bản thay thế
- ✅ **Liên Kết Hợp Lệ**: Tất cả liên kết nội bộ/ngoại bộ trả về 200
- ✅ **Khối Code**: Đã chỉ định làm nổi bật cú pháp
- ✅ **Call-to-Action**: Có ít nhất một CTA

**Các Bước Quy Trình:**

1. **Giai Đoạn Kiểm Tra** (30s)
   ```
   ✓ Đang chạy kiểm tra nội dung...
   ✓ Điểm SEO: 88/100
   ✓ Khả năng đọc: Cấp 10 (đối tượng mục tiêu: chung)
   ✓ Giọng văn thương hiệu: 92% khớp
   ```

2. **Giai Đoạn Chuẩn Bị** (60s)
   ```
   ✓ Đang nén hình ảnh (3 file, 2.1MB → 487KB)
   ✓ Đang tạo đoạn mạng xã hội (Twitter, LinkedIn, Facebook)
   ✓ Đang xác thực liên kết (12 nội bộ, 5 ngoại bộ)
   ✓ Đang tạo backup: /assets/published/2024-12-30-api-launch.md
   ```

3. **Giai Đoạn Xuất Bản** (30s)
   ```
   ✓ Đang tải lên WordPress...
   ✓ Bài đăng đã xuất bản: https://example.com/blog/api-launch
   ✓ Đang chia sẻ lên mạng xã hội (đã lên lịch 9:00 AM EST)
   ```

**Đoạn Mạng Xã Hội Được Tạo:**

```markdown
## Twitter/X (280 ký tự)
🚀 Giới thiệu giới hạn tốc độ API! Bảo vệ hạ tầng với giới hạn có thể cấu hình, giám sát thời gian thực và degradation nhẹ nhàng. Tìm hiểu thêm: [link]

## LinkedIn (1300 ký tự)
Chúng tôi vui mừng thông báo giới hạn tốc độ API thông minh trong phiên bản mới nhất...
[Bài đăng chuyên nghiệp đầy đủ với điểm chính, lợi ích, liên kết]

## Facebook
[Bài đăng trò chuyện với emoji, câu hỏi hook, xem trước liên kết]
```

**Thiết Lập Môi Trường:**

Cấu hình thông tin đăng nhập xuất bản trong `.env`:

```bash
# WordPress
WORDPRESS_URL=https://example.com
WORDPRESS_USERNAME=admin
WORDPRESS_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx

# Medium
MEDIUM_INTEGRATION_TOKEN=xxxxxxxxxxxxx

# DEV Community
DEV_API_KEY=xxxxxxxxxxxxx

# Hashnode
HASHNODE_API_KEY=xxxxxxxxxxxxx
HASHNODE_PUBLICATION_ID=xxxxxxxxxxxxx
```

**Mẹo:**
- Kiểm tra quy trình xuất bản trên trang staging trước
- Lên lịch bài đăng cho thời gian tương tác tối ưu
- Xem xét đoạn mạng xã hội được tạo trước khi tự động đăng
- Lưu trữ nội dung đã xuất bản để tham khảo sau này
- Sử dụng cờ `--dry-run` để xem trước mà không xuất bản

---

## Kỹ Năng Liên Quan

Các lệnh `/write` tự động kích hoạt các kỹ năng này:

- **[copywriting](/docs/marketing/skills/copywriting)** - Kỹ thuật viết và thuyết phục
- **[content-marketing](/docs/marketing/skills/content-marketing)** - Chiến lược nội dung và phân phối
- **[seo-optimization](/docs/marketing/skills/seo-optimization)** - Thực hành tốt nhất SEO
- **[analytics](/docs/marketing/skills/analytics)** - Theo dõi hiệu suất nội dung

## Agent Liên Quan

Các agent này cộng tác trong quy trình `/write`:

- **[copywriter](/docs/marketing/agents/copywriter)** - Soạn nội dung hấp dẫn
- **[content-reviewer](/docs/marketing/agents/content-reviewer)** - Kiểm tra chất lượng
- **[seo-specialist](/docs/marketing/agents/seo-specialist)** - Tối ưu cho tìm kiếm

## Quy Trình Làm Việc

Xem hướng dẫn quy trình đầy đủ:

- [Quy Trình Tạo Nội Dung](/docs/marketing/workflows/content-workflow) - Sản xuất nội dung từ đầu đến cuối
- [Quy Trình SEO](/docs/marketing/workflows/seo-workflow) - Quy trình tối ưu SEO

## Khắc Phục Sự Cố

### Không Phát Hiện Phong Cách Viết

**Vấn đề**: Nội dung được tạo không khớp với giọng văn thương hiệu.

**Giải pháp**:
1. Thêm 3+ bài mẫu vào `/assets/writing-styles/author-samples/`
2. Bao gồm nhiều loại nội dung (thông báo, hướng dẫn, thought leadership)
3. Tạo `/assets/writing-styles/brand-voice.md` với hướng dẫn phong cách rõ ràng
4. Chỉ định tông giọng trong prompt: `/write:blog "chủ đề" --tone=technical`

### Xuất Bản Thất Bại

**Vấn đề**: `/write:publish` báo lỗi trong quá trình triển khai.

**Giải pháp**:
1. Xác minh thông tin đăng nhập nền tảng trong file `.env`
2. Kiểm tra kết nối API: `curl -H "Authorization: Bearer $TOKEN" $API_URL`
3. Kiểm tra điểm kiểm tra nội dung (phải ≥75/100)
4. Xác thực schema frontmatter khớp với yêu cầu nền tảng
5. Sử dụng `--dry-run` để xem sẽ xuất bản gì mà không thực sự xuất bản

### Điểm Kiểm Tra Thấp

**Vấn đề**: Kiểm tra nội dung luôn ghi điểm dưới 75/100.

**Giải pháp**:
1. Kiểm tra khả năng đọc: Mục tiêu cấp Flesch-Kincaid 8-12 cho đối tượng chung
2. Thêm liên kết nội bộ: Liên kết đến 2-3 bài hoặc tài liệu liên quan
3. Bao gồm đa phương tiện: Thêm ít nhất 1 hình ảnh, sơ đồ hoặc ví dụ code
4. Cải thiện cấu trúc: Sử dụng tiêu đề H2/H3 để chia các phần dài
5. Thêm CTA: Bao gồm call-to-action ở cuối bài
