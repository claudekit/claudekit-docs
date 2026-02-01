---
title: /brainstorm
description: Hợp tác với các chuyên gia cố vấn để đánh giá các phương pháp kỹ thuật sử dụng nguyên tắc YAGNI, KISS và DRY
section: engineer
kit: engineer
category: commands/core
order: 9
published: true
lang: vi
---

# /brainstorm

Lệnh brainstorm cấp cao cho giải pháp kỹ thuật. Kích hoạt sự hợp tác đa agent để đánh giá các phương pháp tiếp cận dựa trên các nguyên tắc kỹ thuật, tạo ra các đề xuất đã được kiểm chứng.

## Cú pháp

```bash
/brainstorm [câu-hỏi]
```

## Khi nào sử dụng

- **Quyết định Kiến trúc**: Lựa chọn giữa các mẫu thiết kế (design patterns) hoặc kiến trúc hệ thống
- **Lựa chọn Công nghệ**: Đánh giá các framework, thư viện hoặc công cụ
- **Thách thức Thiết kế**: Giải quyết các vấn đề phức tạp với nhiều cách tiếp cận hợp lệ
- **Đánh giá Rủi ro**: Xác định các sự đánh đổi (trade-offs) trước khi cam kết triển khai
- **Đồng thuận Nhóm**: Có một phân tích có cấu trúc để thảo luận với các bên liên quan (stakeholders)

## Ví dụ nhanh

```bash
/brainstorm [nên sử dụng Redis hay PostgreSQL để lưu trữ session?]
```

**Kết quả**:
```
Giai đoạn Khám phá:
- Tải người dùng hiện tại: 10k DAU (người dùng hoạt động hàng ngày)
- Dữ liệu session: ~2KB mỗi người dùng
- Hạ tầng hiện có: PostgreSQL là chính

Phân tích theo các Nguyên tắc:
YAGNI: Session trên PostgreSQL là đủ cho quy mô hiện tại
KISS: Một cơ sở dữ liệu duy nhất giúp giảm độ phức tạp vận hành
DRY: Tái sử dụng hệ thống quản lý kết nối (connection pooling) hiện có

Đề xuất:
Sử dụng PostgreSQL cho session, thêm lớp đệm Redis khi vượt quá 50k DAU

Báo cáo: plans/reports/brainstorm-251129-session-storage.md
```

**Kết quả**: Một phân tích có cấu trúc đã được lưu vào báo cáo markdown.

## Tham số

- `[câu-hỏi]`: Câu hỏi kỹ thuật hoặc thách thức cần phân tích từ nhiều góc độ (bắt buộc).

## Nguyên tắc Cốt lõi

Mỗi phiên brainstorm sẽ đánh giá giải pháp dựa trên ba nguyên tắc:

### YAGNI (You Aren't Gonna Need It)

Đừng xây dựng cho các yêu cầu giả định trong tương lai. Nếu một giải pháp đơn giản hơn vẫn hoạt động hiệu quả:
- Tránh tối ưu hóa sớm
- Từ chối các tính năng được thêm vào "phòng trường hợp"
- Đặt câu hỏi về các sự trừu tượng hóa (abstractions) không có nhu cầu tức thì

### KISS (Keep It Simple, Stupid)

Ưu tiên các giải pháp đơn giản hơn là các giải pháp phức tạp:
- Ít thành phần hơn = ít điểm gây lỗi hơn
- Mã nguồn dễ đọc tốt hơn mã nguồn được tối ưu quá mức
- Các mẫu (patterns) chuẩn tốt hơn các triển khai tùy chỉnh

### DRY (Don't Repeat Yourself)

Loại bỏ sự trùng lặp có ý nghĩa:
- Trích xuất logic lặp lại thành các hàm
- Tập trung hóa cấu hình
- Lưu ý: Đừng thực hiện DRY quá sớm (quy tắc: xuất hiện 3 lần mới thực hiện)

## Quy trình Hoạt động

### Quy trình 6 Giai đoạn

**Giai đoạn 1: Khám phá**

Làm rõ các yêu cầu và ràng buộc:
- Chúng ta thực sự đang giải quyết vấn đề gì?
- Có những ràng buộc nào? (ngân sách, thời gian, kỹ năng của đội ngũ)
- Tiêu chí thành công là gì?
- Những gì đã được thử nghiệm trước đó?

**Giai đoạn 2: Nghiên cứu**

Thu thập thông tin từ nhiều nguồn:
- Tài liệu dự án (`system-architecture.md`, `code-standards.md`)
- Các API bên ngoài thông qua các công cụ MCP
- Tra cứu tài liệu thông qua `docs-seeker`
- Phân tích mã nguồn thông qua `scout`

**Giai đoạn 3: Phân tích**

Đánh giá từng phương pháp tiếp cận theo các nguyên tắc:
- YAGNI: Liệu điều này có thêm sự phức tạp không cần thiết không?
- KISS: Có cách tiếp cận nào đơn giản hơn không?
- DRY: Liệu điều này có tạo ra sự trùng lặp không?
- Bổ sung: Bảo mật, hiệu suất, khả năng bảo trì

**Giai đoạn 4: Tranh luận**

Thử thách các giả định và sở thích cá nhân:
- Đóng vai phản biện cho từng lựa chọn
- Phát hiện các sự đánh đổi tiềm ẩn
- Đặt câu hỏi về lựa chọn "hiển nhiên"
- Xem xét các trường hợp biên (edge cases) và các kịch bản lỗi (failure modes)

**Giai đoạn 5: Đồng thuận**

Xây dựng sự thống nhất về đề xuất:
- Tổng hợp các góc nhìn khác nhau
- Xếp hạng các tùy chọn kèm theo lý do
- Xác định những điểm không thể thương lượng
- Ghi nhận các sự đánh đổi được chấp nhận

**Giai đoạn 6: Tài liệu hóa**

Tạo một báo cáo markdown toàn diện:
- Mô tả vấn đề
- Các tùy chọn đã xem xét
- Phân tích dựa trên các nguyên tắc
- Đề xuất kèm theo lý do
- Rủi ro và chiến lược giảm thiểu
- Chỉ số thành công

## Các Lĩnh vực Chuyên môn

Brainstorming sử dụng nhiều góc nhìn khác nhau:

| Lĩnh vực | Trọng tâm |
|----------|-----------|
| Kiến trúc | Thiết kế hệ thống, ranh giới các thành phần, giao diện |
| Rủi ro | Các kịch bản lỗi, tác động bảo mật, nợ kỹ thuật |
| Phát triển | Ước tính thời gian, độ phức tạp khi triển khai |
| UX/DX | Trải nghiệm người dùng, trải nghiệm của lập trình viên |
| Hiệu suất | Khả năng mở rộng, độ trễ, sử dụng tài nguyên |
| Vận hành | Triển khai, giám sát, gánh nặng bảo trì |

## Công cụ Hợp tác

Quy trình brainstorm có thể triệu tập các agent:

- **planner**: Cấu trúc quá trình phân tích và tạo đề xuất
- **docs-manager**: Truy cập và cập nhật tài liệu dự án
- **searchapi MCP**: Nghiên cứu các giải pháp và mẫu thiết kế bên ngoài
- **docs-seeker**: Tra cứu tài liệu về các framework
- **ai-multimodal**: Phân tích sơ đồ hoặc tài liệu tham khảo trực quan
- **psql**: Truy vấn sơ đồ cơ sở dữ liệu để có ngữ cảnh

## Vị trí lưu trữ

Các báo cáo được lưu vào tệp markdown:

**Khi có một kế hoạch đang hoạt động**:
```
{kế-hoạch-hiện-tại}/reports/brainstorm-YYMMDD-{chủ-đề}.md
```

**Khi không có kế hoạch nào đang hoạt động**:
```
plans/reports/brainstorm-YYMMDD-{chủ-đề}.md
```

## Cấu trúc Báo cáo

Báo cáo được tạo bao gồm:

```markdown
# Brainstorm: {Chủ đề}

**Ngày**: YYMMDD
**Câu hỏi**: {Câu hỏi gốc}

## Tuyên bố Vấn đề
{Vấn đề và các ràng buộc đã được làm rõ}

## Các Tùy chọn đã Xem xét

### Tùy chọn A: {Tên}
- Mô tả
- Ưu điểm
- Nhược điểm
- Tuân thủ nguyên tắc: YAGNI ✓ KISS ✓ DRY ✓

### Tùy chọn B: {Tên}
...

## Đề xuất
{Tùy chọn được chọn kèm theo lý do}

## Rủi ro & Giảm thiểu
- Rủi ro 1: {mô tả} → Giảm thiểu: {cách tiếp cận}
...

## Chỉ số Thành công
- {Tiêu chí để đo lường thành công}

## Các bước Tiếp theo
1. {Hành động}
...
```

## Ví dụ Đầy đủ

### Kịch bản: Chọn Quản lý Trạng thái (State Management)

```bash
/brainstorm [nên sử dụng quản lý trạng thái nào cho bảng điều khiển React có cập nhật thời gian thực?]
```

**Kết quả các giai đoạn**:

**Khám phá (Discovery)**:
```
Làm rõ các yêu cầu:
- Bảng điều khiển với 20+ widgets
- Dữ liệu thời gian thực qua WebSocket
- Lưu giữ sở thích người dùng
- Đội ngũ: 3 lập trình viên, quen thuộc với React hooks

Các ràng buộc:
- Đội ngũ không có kinh nghiệm với Redux
- Hiệu suất cực kỳ quan trọng (60fps cho hoạt ảnh)
- Phải hỗ trợ chế độ ngoại tuyến
```

**Nghiên cứu (Research)**:
```
Các tùy chọn được xác định:
- Redux Toolkit + RTK Query
- Zustand
- Jotai
- React Query + Context
- Recoil

Các nguồn bên ngoài đã tham khảo:
- Các điểm đo hiệu suất quản lý trạng thái 2024
- Tài liệu React về các mẫu trạng thái
- Nghiên cứu điển hình về bảng điều khiển thời gian thực
```

**Phân tích (Analysis)**:
```
Phân tích YAGNI:
- Redux: Quá mức cần thiết cho 20 widgets, thêm nhiều mã mẫu (boilerplate)
- Zustand: API tối giản, không có các sự trừu tượng hóa không cần thiết
- React Query: Tích hợp sẵn bộ nhớ đệm giúp loại bỏ việc đồng bộ thủ công

Phân tích KISS:
- Zustand: ~10 dòng mã cho một store cơ bản
- Redux: Yêu cầu các slices, actions, selectors
- Jotai: Mô hình nguyên tử (atomic) làm tăng gánh nặng nhận thức

Phân tích DRY:
- React Query: Tập trung hóa logic lấy dữ liệu (data fetching)
- Tất cả các tùy chọn đều hỗ trợ trạng thái dùng chung
```

**Tranh luận (Debate)**:
```
Các quan điểm phản biện:
- Zustand: Hệ sinh thái ít hơn Redux
  Phản hồi: Hệ sinh thái là không cần thiết cho phạm vi của bảng điều khiển này

- React Query: Không dành cho WebSocket
  Phản hồi: Có thể tích hợp với WS để xóa bộ nhớ đệm khi có dữ liệu mới

- Không dùng Redux: Đội ngũ sẽ không học được tiêu chuẩn ngành
  Phản hồi: React hiện đại ưu tiên các giải pháp nhẹ nhàng hơn
```

**Đề xuất (Recommendation)**:
```
Zustand + React Query

Lý do:
- Zustand: Cho trạng thái giao diện (vị trí widget, sở thích)
- React Query: Cho trạng thái máy chủ (dữ liệu API, bộ nhớ đệm)
- WebSocket: Kích hoạt việc xóa bộ nhớ đệm trong React Query

Sự phù hợp với các nguyên tắc:
- YAGNI: Không có hạ tầng Redux không dùng đến
- KISS: Hai công cụ chuyên biệt thay vì một công cụ phức tạp
- DRY: React Query loại bỏ các mã mẫu fetch dữ liệu
```

**Báo cáo đã lưu**: `plans/reports/brainstorm-251129-state-management.md`

## Các trường hợp sử dụng phổ biến

### Đánh giá Kiến trúc

```bash
/brainstorm [monorepo với Turborepo hay các repo riêng biệt cho 5 dịch vụ?]
```
Nhận phân tích về độ phức tạp khi build, chia sẻ mã nguồn và các đánh đổi khi triển khai.

### Lựa chọn Công nghệ

```bash
/brainstorm [Prisma vs Drizzle vs SQL thuần cho API Node.js mới?]
```
Nhận so sánh dựa trên kinh nghiệm của đội ngũ, độ phức tạp của truy vấn và nhu cầu về an toàn kiểu dữ liệu (type safety).

### Thách thức Thiết kế

```bash
/brainstorm [cách xử lý tải lên tệp: trực tiếp lên S3 hay thông qua máy chủ API?]
```
Nhận phân tích về bảo mật, chi phí và độ phức tạp cho từng cách tiếp cận.

### Chiến lược Chuyển đổi (Migration)

```bash
/brainstorm [chuyển đổi dần dần từ Express sang Fastify hay viết lại toàn bộ?]
```
Nhận phân tích rủi ro và đề xuất cách tiếp cận theo từng giai đoạn.

## Điều /brainstorm KHÔNG làm

- ❌ Triển khai mã nguồn (sử dụng `/cook`)
- ❌ Sửa lỗi (sử dụng `/debug` hoặc `/fix`)
- ❌ Đưa ra quyết định cuối cùng (bạn quyết định, hệ thống tư vấn)
- ❌ Bỏ qua việc tài liệu hóa (luôn tạo báo cáo)

## Thực hành tốt nhất

### Cung cấp Ngữ cảnh

Bao gồm các ràng buộc trong câu hỏi của bạn:
```bash
/brainstorm [
  Cách tiếp cận xác thực cho:
  - 50k người dùng, 5k hoạt động đồng thời
  - Đội ngũ biết cơ bản về JWT
  - Phải hỗ trợ SSO sau này
  - Ngân sách: Startup (tối thiểu hóa chi phí nhà cung cấp)
]
```

### Đặt các câu hỏi So sánh

✅ **Tốt**:
```bash
/brainstorm [PostgreSQL vs MongoDB cho nội dung do người dùng tạo với các bình luận lồng nhau?]
/brainstorm [SSR vs SSG vs ISR cho trang web tài liệu có cập nhật hàng ngày?]
```

❌ **Quá mơ hồ**:
```bash
/brainstorm [tôi nên dùng cơ sở dữ liệu nào?]
/brainstorm [làm thế nào để xây dựng cái này?]
```

### Xem xét Báo cáo trước khi hành động

Báo cáo markdown chứa phân tích chi tiết không hiển thị hoàn toàn trong terminal:
```bash
# Sau khi brainstorm
cat plans/reports/brainstorm-251129-{chủ-đề}.md
```

## Tích hợp vào Quy trình làm việc

### Trước khi Lập kế hoạch

```bash
# 1. Brainstorm cách tiếp cận
/brainstorm [chiến lược xác thực tốt nhất cho SaaS đa khách hàng?]

# 2. Xem báo cáo, thảo luận với đội ngũ
cat plans/reports/brainstorm-251129-auth-strategy.md

# 3. Tạo kế hoạch triển khai
/plan [triển khai xác thực JWT với sự cách ly giữa các khách hàng]

# 4. Thực thi
/cook
```

### Trong quá trình Đánh giá Kiến trúc

```bash
# 1. Đánh giá PR với những thay đổi phức tạp
git diff main

# 2. Đặt câu hỏi về cách tiếp cận
/brainstorm [liệu sự trừu tượng hóa dịch vụ này có đáng với độ phức tạp của nó không?]

# 3. Điều chỉnh dựa trên các đề xuất
```

## Các lệnh liên quan

- [/ask](/vi/docs/engineer/commands/core/ask) - Các câu hỏi kiến trúc nhanh không cần báo cáo đầy đủ
- [/plan](/vi/docs/engineer/commands/plan) - Tạo kế hoạch triển khai sau khi brainstorm
- [/cook](/vi/docs/engineer/skills/tools/cook) - Thực thi kế hoạch với các bước kiểm soát chất lượng
- [/cook](/vi/docs/engineer/skills/tools/cook) - Triển khai tính năng theo từng bước

---

**Thông điệp chính**: `/brainstorm` cung cấp phân tích đa chiều có cấu trúc cho các quyết định kỹ thuật, ghi lại các đề xuất dựa trên các nguyên tắc YAGNI, KISS và DRY. Hệ thống tư vấn - bạn là người quyết định.
