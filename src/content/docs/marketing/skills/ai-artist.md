---
title: "AI Artist"
description: "Kỹ năng kỹ thuật viết prompt cho tạo văn bản và hình ảnh AI: prompt LLM, cú pháp tạo hình ảnh, từ khóa kiểu và tinh chỉnh lặp lại."
lang: vi
section: marketing
category: skills
order: 18
---

> Tạo prompt hiệu quả cho các mô hình AI (Claude, GPT, Gemini, Midjourney, DALL-E, Stable Diffusion, Imagen, Flux) sử dụng các mô hình được chứng minh.

## Skill Này Làm Gì

**Thách Thức**: Nhận được đầu ra chất lượng cao từ các mô hình AI đòi hỏi hiểu mô hình cụ thể, cấu trúc prompt và các kỹ thuật tinh chỉnh lặp lại. Các prompt chung sản xuất kết quả chung.

**Giải Pháp**: Skill AI Artist cung cấp các mô hình kỹ thuật viết prompt cho LLM (Claude, GPT, Gemini), trình tạo hình ảnh (Midjourney, DALL-E, Stable Diffusion, Imagen, Flux) và trình tạo video (Veo, Runway). Bao gồm từ khóa kiểu, prompt âm, ví dụ vài lần và các mô hình cụ thể theo lĩnh vực.

## Kích Hoạt

**Ẩn Danh**: Kích hoạt khi các agent tạo prompt cho các tác vụ tạo AI.

**Rõ Ràng**: `/skill:add ai-artist`

## Khả Năng

### 1. Cấu Trúc Prompt LLM
Định dạng nhất quán cho các mô hình tạo văn bản.

**Mô Hình Phổ Quát**:
```markdown
[Vai Trò] Bạn là một {loại chuyên gia} chuyên về {lĩnh vực}.
[Bối Cảnh] {Thông tin nền tảng và hạn chế}
[Tác Vụ] {Hành động cụ thể để thực hiện}
[Định Dạng] {Cấu trúc đầu ra - JSON, markdown, danh sách}
[Ví Dụ] {1-3 ví dụ vài lần nếu cần}
```

**Ví Dụ - Bản Sao Tiếp Thị**:
```markdown
[Vai Trò] Bạn là một nhà viết sao chép chuyển đổi chuyên về trang đích SaaS.
[Bối Cảnh] Khán giả mục tiêu: Những người quản lý dự án B2B bực dọc theo dõi dựa trên email.
[Tác Vụ] Viết phần hero trên cùng (tiêu đề + tiêu đề phụ + CTA).
[Định Dạng] Markdown với các phần được gắn nhãn.
```

**Hướng Dẫn**: `references/llm-prompting.md`

### 2. Prompt Tạo Hình Ảnh
Cú pháp cụ thể theo mô hình cho tạo hình ảnh.

**Cấu Trúc Phổ Quát**:
```
[Chủ Đề] {chủ đề chính với chi tiết}
[Kiểu] {kiểu nghệ thuật, phương tiện, tham chiếu nghệ sĩ}
[Bố Cục] {khung hình, góc, chiếu sáng}
[Chất Lượng] {điều chỉnh độ phân giải, chất lượng kỷ ngạo}
[Âm] {những gì cần tránh - nếu được hỗ trợ}
```

**Ví Dụ - Mockup Sản Phẩm**:
```
Giao diện tdashboard SaaS hiện đại, thiết kế tối giản sạch, lược đồ màu xanh và trắng, bóng mềm, bố cục tập trung, chụp ảnh chuyên nghiệp, độ phân giải 4k --ar 16:9 --style raw
```

**Hướng Dẫn Cú Pháp Mô Hình**: `references/image-prompting.md`

### 3. Tối Ưu Hóa Cụ Thể Theo Mô Hình
Tận dụng sức mạnh và cú pháp của mỗi mô hình.

**So Sánh Mô Hình**:
| Mô Hình | Cú Pháp Chính | Điểm Mạnh |
|-------|------------|-----------|
| **Midjourney** | `--ar`, `--style`, `--chaos`, `--v 6.1` | Hình ảnh nghệ thuật, được tạo kiểu |
| **DALL-E 3** | Ngôn ngữ tự nhiên, không có tham số | Chân thực, tuân theo prompt chặt chẽ |
| **Stable Diffusion** | `(từ:1.2)` trọng số, LoRA | Kiểm soát tinh tinh, mô hình cộng đồng |
| **Flux** | Prompt tự nhiên, `--guidance` | Trộn kiểu, tính linh hoạt sáng tạo |
| **Imagen 4** | Văn bản mô tả, tỷ lệ khung hình | Hình ảnh tiếp thị, ảnh sản phẩm |

**Hướng Dẫn Cú Pháp**: `references/image-prompting.md`

## Điều Kiện Tiên Quyết

- Quyền truy cập vào mô hình AI mục tiêu (khóa API hoặc tài khoản nền tảng)
- Hướng dẫn sáng tạo rõ ràng hoặc hướng dẫn thương hiệu

## Cấu Hình

Không cần cấu hình. Skill cung cấp các mô hình prompt và ví dụ.

## Phương Pháp Tốt Nhất

**1. Sự Rõ Ràng Vượt Qua Tính Thông Minh**
"Một nút màu xanh" vẫn tốt hơn "Một phần tử tương tác hình chữ nhật xanh lam". Hãy cụ thể và trực tiếp.

**2. Lặp Lại Trong Các Bước Nhỏ**
Thay đổi một biến tại một thời điểm (chủ đề, kiểu, bố cục). Viết lại lớn làm cho nó khó xác định những gì hoạt động.

**3. Sử Dụng Tham Chiếu Khi Có Sẵn**
"Theo phong cách chụp ảnh sản phẩm Apple" rõ ràng hơn mô tả kiểu theo cách thủ công.

## Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp Sử Dụng 1: Tạo Hình Ảnh Hero Sản Phẩm
**Tình Huống**: Tạo hình ảnh hero cho trang đích SaaS.

**Quy Trình Công Việc**:
1. Xác định các phần tử cốt lõi: Giao diện Dashboard UI, cài đặt chuyên nghiệp, thẩm mỹ sạch
2. Prompt dự thảo:
   ```
   Giao diện tdashboard SaaS hiện đại được hiển thị trên MacBook Pro,
   ngồi trên bàn trắng với tách cà phê, ánh sáng tự nhiên mềm từ cửa sổ,
   nền văn phòng tối giản, chụp ảnh chuyên nghiệp,
   độ sâu trường, độ phân giải 8k --ar 16:9
   ```
3. Tạo với Imagen 4 hoặc Midjourney
4. Tinh chỉnh nếu cần (điều chỉnh chiếu sáng, bố cục)

**Lặp Lại**: Thường cần 2-3 thế hệ để tìm người chiến thắng.

### Trường Hợp Sử Dụng 2: Viết Văn Bản Chiến Dịch Email
**Tình Huống**: Viết email tái tham gia cho những người dùng thử không hoạt động.

**Quy Trình Công Việc**:
1. Prompt cấu trúc:
   ```markdown
   [Vai Trò] Nhà viết sao chép chuyển đổi cho B2B SaaS
   [Bối Cảnh] Người dùng thử không hoạt động 14+ ngày, kiểm tra công cụ quản lý dự án
   [Tác Vụ] Viết email tái tham gia sử dụng công thức PAS
   [Định Dạng] Dòng chủ đề + phần thân 3 đoạn + CTA
   [Ví Dụ]
   Dòng chủ đề: Chúng tôi bỏ lỡ bạn [Tên]
   Phần thân: Vấn đề → Kích động → Cấu trúc giải pháp
   ```
2. Tạo với Claude hoặc GPT
3. Kiểm tra A/B 3 biến thể

**Kết Quả**: Bản sao email chuyển đổi cao theo công thức được chứng minh.

## Khắc Phục Sự Cố

**Vấn Đề**: Hình ảnh được tạo không khớp với thương hiệu
**Giải Pháp**: Thêm các màu thương hiệu cụ thể, từ khóa kiểu và tham chiếu các tài sản hiện có. Tải skill `brand-guidelines` để bối cảnh thương hiệu.

**Vấn Đề**: Đầu ra LLM quá chi tiết hoặc chung chung
**Giải Pháp**: Thêm các hạn chế định dạng ("Tối đa 50 từ", "Sử dụng các dấu đầu dòng"). Bao gồm các ví dụ vài lần của đầu ra mong muốn.

**Vấn Đề**: Tạo hình ảnh tiếp tục thất bại bộ lọc an toàn
**Giải Pháp**: Xem xét chính sách nội dung của mô hình. Tránh các điều khoản mơ hồ kích hoạt bộ lọc. Sử dụng lời nói thay thế.

## Kỹ Năng Liên Quan

- [AI Multimodal](/vi/docs/marketing/skills/ai-multimodal) - Thực thi tạo hình ảnh/video
- [Copywriting](/vi/docs/marketing/skills/copywriting) - Công thức sao chép cho prompt LLM
- [Creativity](/vi/docs/marketing/skills/creativity) - Hướng dẫn sáng tạo và lựa chọn kiểu
- [Brand Guidelines](/vi/docs/marketing/skills/brand-guidelines) - Prompt căn chỉnh thương hiệu

## Lệnh Liên Quan

- `/design/good` - Tạo hình ảnh có prompt được tối ưu hóa
- `/content/good` - Tạo bản sao chất lượng cao
- `/ask` - Nhận lời khuyên tối ưu hóa prompt
