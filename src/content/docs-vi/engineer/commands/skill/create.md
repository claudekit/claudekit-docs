---
title: /skill:create
description: Tạo các skill agent mới mở rộng khả năng của Claude với kiến thức chuyên môn, quy trình làm việc hoặc tích hợp công cụ
section: engineer
kit: engineer
category: commands/skill
order: 80
published: true
lang: vi
---

# /skill:create

Tạo các skill agent mới mở rộng khả năng của Claude với kiến thức chuyên môn, quy trình làm việc hoặc tích hợp công cụ. Lệnh này tuân theo quy trình 4 giai đoạn toàn diện: nghiên cứu, triển khai, xem xét và đánh giá.

## Cú pháp

```bash
/skill:create [prompt-or-llms-or-github-url]
```

## Các loại đầu vào

### 1. Prompt ngôn ngữ tự nhiên

```bash
/skill:create [tạo skill cho các thao tác cơ sở dữ liệu MongoDB]
```

### 2. URL llms.txt

```bash
/skill:create https://docs.polar.sh/llms.txt
```

### 3. Repository GitHub

```bash
/skill:create https://github.com/cloudflare/workers-sdk
```

## Cách hoạt động

Lệnh `/skill:create` tuân theo quy trình làm việc 4 giai đoạn:

### Giai đoạn 1: Nghiên cứu (2-3 phút)

Kích hoạt agent **researcher** để:
- Thu thập tài liệu (llms.txt, GitHub, web)
- Phân tích kiến thức chuyên môn cần thiết
- Xác định các khái niệm và pattern chính
- Lập sơ đồ cấu trúc skill
- Xác định nhu cầu tích hợp MCP
- Nghiên cứu các thực hành tốt nhất (best practices)

### Giai đoạn 2: Triển khai (3-5 phút)

Kích hoạt agent **skill-creator** để:
- Viết file prompt cho skill
- Cấu trúc các phần kiến thức
- Tạo các ví dụ sử dụng
- Xác định khi nào nên sử dụng skill
- Thêm hướng dẫn tích hợp công cụ
- Bao gồm các thực hành tốt nhất
- Định dạng bằng markdown

### Giai đoạn 3: Xem xét (1-2 phút)

Kích hoạt agent **code-reviewer** để:
- Xác thực cấu trúc skill
- Kiểm tra tính đầy đủ
- Xác minh các ví dụ hoạt động đúng
- Đảm bảo hướng dẫn rõ ràng
- Xác thực định dạng
- Đề xuất cải tiến

### Giai đoạn 4: Đánh giá (1 phút)

Kích hoạt agent **tester** để:
- Kiểm tra việc kích hoạt skill
- Xác minh prompt của skill được tải đúng
- Kiểm tra các ví dụ rõ ràng
- Xác thực tích hợp công cụ
- Kiểm tra các trường hợp biên (edge cases)
- Tạo báo cáo sử dụng

## Ví dụ

### Tạo Skill MongoDB

```bash
/skill:create [tạo skill cho các thao tác MongoDB bao gồm CRUD, aggregation và indexing]
```

**Điều gì xảy ra:**
```
Giai đoạn 1: Nghiên cứu (2 phút 15 giây)
---
Agent: researcher

Đang thu thập thông tin...

Tài liệu MongoDB đã được phân tích:
✓ Các thao tác CRUD
✓ Aggregation pipelines
✓ Chiến lược Indexing
✓ Pattern thiết kế Schema
✓ Tối ưu hóa hiệu suất
✓ Replication & sharding
✓ Thực hành bảo mật tốt nhất

Kiểm tra server MCP:
✓ Tìm thấy: @modelcontextprotocol/server-mongodb
✓ Các công cụ có sẵn: query, insert, update, delete, aggregate
✓ Yêu cầu kết nối: MongoDB URI

Các thực hành tốt nhất đã xác định:
✓ Connection pooling
✓ Pattern xử lý lỗi
✓ Tối ưu hóa truy vấn
✓ Lựa chọn Index
✓ Xác thực Schema

Giai đoạn 2: Triển khai (3 phút 45 giây)
---
Agent: skill-creator

Đang tạo file skill...

Cấu trúc:
1. Tổng quan Skill
2. Khi nào sử dụng Skill này
3. Điều kiện tiên quyết
4. Hướng dẫn thao tác MongoDB
   - Các thao tác CRUD
   - Aggregation pipelines
   - Indexing
   - Thiết kế Schema
   - Tối ưu hóa hiệu suất
5. Tích hợp MCP
6. Ví dụ
7. Thực hành tốt nhất
8. Các pattern phổ biến
9. Xử lý sự cố

File đã được tạo:
.claude/skills/mongodb.md (2,847 từ)

Các phần chính bao gồm:
✓ Các trường hợp sử dụng rõ ràng
✓ Thao tác từng bước
✓ Ví dụ mã nguồn (15+)
✓ Ví dụ về aggregation pipeline
✓ Pattern tạo index
✓ Cách sử dụng công cụ MCP
✓ Xử lý lỗi
✓ Mẹo hiệu suất

Giai đoạn 3: Xem xét (1 phút 30 giây)
---
Agent: code-reviewer

Đang xem xét chất lượng skill...

Cấu trúc: ✅ Tuyệt vời
- Các phần rõ ràng
- Luồng logic tốt
- Phân cấp tốt

Tính đầy đủ: ✅ Toàn diện
- Bao phủ tất cả các thao tác CRUD
- Bao gồm các ví dụ aggregation
- Giải thích các chiến lược indexing
- Tài liệu hóa tích hợp MCP

Ví dụ: ✅ Chất lượng cao
- 15 ví dụ hoạt động tốt
- Nhiều mức độ phức tạp khác nhau
- Các kịch bản thực tế
- Sẵn sàng để copy-paste

Độ rõ ràng: ✅ Rõ ràng
- Kỹ thuật nhưng dễ tiếp cận
- Hướng dẫn từng bước
- Sử dụng tốt các khối mã (code blocks)

Đề xuất:
1. Thêm phần về transaction
2. Bao gồm ví dụ về change stream
3. Thêm xử lý sự cố cho các vấn đề kết nối

Đang áp dụng các đề xuất...
✓ Đã thêm phần transaction
✓ Đã bao gồm ví dụ change stream
✓ Đã mở rộng phần xử lý sự cố

Giai đoạn 4: Đánh giá (45 giây)
---
Agent: tester

Đang kiểm tra skill...

Kiểm tra kích hoạt:
✓ Skill tải chính xác
✓ Không có lỗi cú pháp
✓ Định dạng Markdown hợp lệ

Xác thực ví dụ:
✓ Tất cả 17 ví dụ sử dụng đúng cú pháp
✓ Các truy vấn MongoDB hợp lệ
✓ Các lời gọi công cụ MCP được định dạng đúng

Tích hợp công cụ:
✓ Server MCP được tham chiếu chính xác
✓ Hướng dẫn kết nối rõ ràng
✓ Đã bao phủ phần xác thực

Chất lượng tài liệu:
✓ Giọng văn chuyên nghiệp
✓ Độ chính xác kỹ thuật đã được xác minh
✓ Dễ dàng theo dõi

Điểm số: 9.2/10

Các điểm xuất sắc:
+ Bao phủ CRUD toàn diện
+ Ví dụ aggregation tuyệt vời
+ Tích hợp MCP rõ ràng
+ Phần xử lý sự cố tốt

Các cải tiến nhỏ cần thiết:
- Thêm nhiều ví dụ về replica set
- Bao gồm hướng dẫn về sharding

✓ Hoàn tất tạo skill (8 phút 15 giây)

Tóm tắt:
---
✓ Skill đã tạo: .claude/skills/mongodb.md
✓ 2,847 từ
✓ 17 ví dụ
✓ 8 phần chính
✓ Bao gồm tích hợp MCP
✓ Đã được xem xét và kiểm tra
✓ Điểm chất lượng: 9.2/10

Các bước tiếp theo:
1. Xem lại skill: cat .claude/skills/mongodb.md
2. Kiểm tra skill: /ask [câu hỏi về mongodb]
3. Lặp lại nếu cần: /skill:fix-logs
```

### Tạo Skill từ llms.txt

```bash
/skill:create https://docs.polar.sh/llms.txt
```

**Điều gì xảy ra:**
```
Giai đoạn 1: Nghiên cứu (1 phút 30 giây)
---
Agent: researcher

Đang tải llms.txt...
URL: https://docs.polar.sh/llms.txt

Nội dung đã lấy:
- 5,249 dòng
- Nền tảng thanh toán Polar.sh
- Quản lý đăng ký (subscription)
- Xử lý webhook
- Cổng thông tin khách hàng
- Tài liệu API

Đang phân tích cấu trúc...
✓ Các phần API rõ ràng
✓ Bao gồm các ví dụ mã nguồn
✓ Đã tài liệu hóa phần xác thực
✓ Giải thích về webhook

Giai đoạn 2: Triển khai (4 phút)
---
Agent: skill-creator

Đang tạo skill Polar.sh...

Cấu trúc skill:
1. Tổng quan (Polar.sh làm gì)
2. Khi nào sử dụng skill này
3. Điều kiện tiên quyết (API keys)
4. Các tính năng cốt lõi
   - Đăng ký (Subscriptions)
   - Thanh toán một lần
   - Cổng thông tin khách hàng
   - Webhooks
5. Hướng dẫn triển khai
   - Thiết lập
   - Tạo checkout
   - Xử lý webhook
   - Quản lý khách hàng
6. Ví dụ mã nguồn (sử dụng SDK)
7. Thực hành tốt nhất
8. Hướng dẫn bảo mật
9. Kiểm tra
10. Xử lý sự cố

File đã được tạo:
.claude/skills/polar.md (3,124 từ)

✓ 23 ví dụ mã nguồn được trích xuất từ llms.txt
✓ Các endpoint API được tài liệu hóa
✓ Liệt kê các sự kiện webhook
✓ Thêm các thực hành bảo mật tốt nhất
```

### Tạo Skill từ GitHub

```bash
/skill:create https://github.com/cloudflare/workers-sdk
```

**Điều gì xảy ra:**
```
Giai đoạn 1: Nghiên cứu (2 phút 45 giây)
---
Agent: researcher

Đang phân tích repository GitHub...
Repo: cloudflare/workers-sdk

Sử dụng Repomix để phân tích codebase...
✓ 847 file đã được phân tích
✓ Tài liệu đã được trích xuất
✓ README.md đã được xử lý
✓ Thư mục ví dụ đã được quét
✓ Các pattern API được xác định

Các phát hiện chính:
- Cloudflare Workers SDK
- Công cụ CLI Wrangler
- Tài liệu API Workers
- Tích hợp cơ sở dữ liệu D1
- Thao tác lưu trữ KV
- Durable Objects
- Lưu trữ R2

Giai đoạn 2: Triển khai (5 phút)
---
Agent: skill-creator

Đang tạo skill Cloudflare Workers...

Các phần của skill:
1. Tổng quan về Cloudflare Workers
2. Khi nào sử dụng Skill này
3. Hướng dẫn CLI Wrangler
4. Phát triển Worker
   - Các worker cơ bản
   - Xử lý Request
   - Biến môi trường
5. Các dịch vụ Cloudflare
   - D1 (SQLite)
   - KV (Key-Value)
   - R2 (Object Storage)
   - Durable Objects
6. Triển khai (Deployment)
7. Kiểm tra & Debug
8. Thực hành tốt nhất
9. Các pattern phổ biến
10. Xử lý sự cố

File đã được tạo:
.claude/skills/cloudflare-workers.md (4,126 từ)

✓ 31 ví dụ mã nguồn
✓ Các lệnh CLI được tài liệu hóa
✓ Hướng dẫn tích hợp dịch vụ
✓ Quy trình triển khai
```

## Cấu trúc file Skill

Mọi skill được tạo đều tuân theo cấu trúc này:

```markdown
# [Tên Skill]

[Mô tả ngắn gọn về những gì skill giúp ích]

## Khi nào sử dụng Skill này

Sử dụng skill này khi:
- [Trường hợp sử dụng cụ thể 1]
- [Trường hợp sử dụng cụ thể 2]
- [Trường hợp sử dụng cụ thể 3]

## Điều kiện tiên quyết

- [Yêu cầu 1]
- [Yêu cầu 2]

## [Phần kiến thức chính 1]

### [Phần phụ]

[Thông tin chi tiết với các ví dụ]

```code
// Ví dụ mã nguồn hoạt động được
```

## [Phần kiến thức chính 2]

[Nội dung thêm...]

## Tích hợp MCP (nếu có)

[Cách sử dụng các công cụ MCP với skill này]

## Ví dụ

### Ví dụ 1: [Kịch bản]
```code
// Ví dụ hoạt động hoàn chỉnh
```

### Ví dụ 2: [Kịch bản]
```code
// Một ví dụ khác
```

## Thực hành tốt nhất

- [Thực hành 1]
- [Thực hành 2]

## Các pattern phổ biến

[Các pattern và giải pháp có thể tái sử dụng]

## Xử lý sự cố

**Vấn đề:** [Vấn đề thường gặp]
**Giải pháp:** [Cách khắc phục]
```

## Tiêu chí chất lượng Skill

Các skill được đánh giá dựa trên:

### 1. Tính đầy đủ (25%)

- Bao phủ tất cả các chủ đề chính
- Giải quyết các trường hợp biên
- Bao gồm xử lý lỗi
- Cân nhắc về bảo mật

### 2. Độ rõ ràng (25%)

- Giải thích rõ ràng
- Cấu trúc logic
- Dễ dàng theo dõi
- Định dạng tốt

### 3. Ví dụ (25%)

- Các ví dụ mã nguồn hoạt động được
- Nhiều mức độ phức tạp khác nhau
- Các kịch bản thực tế
- Sẵn sàng để copy-paste

### 4. Tính hữu dụng (25%)

- Ứng dụng thực tế
- Tiết kiệm thời gian
- Giảm thiểu lỗi
- Lấp đầy khoảng trống kiến thức

## Tích hợp MCP

Khi skill yêu cầu các công cụ, tích hợp MCP sẽ được bao gồm:

```markdown
## Tích hợp Server MCP

Skill này hoạt động tốt nhất với server MCP [tên-công-cụ].

### Cài đặt

```bash
npm install @modelcontextprotocol/server-[tên]
```

### Cấu trúc

Thêm vào claude_desktop_config.json:

```json
{
  "mcpServers": {
    "[tên]": {
      "command": "node",
      "args": ["path/to/server"],
      "env": {
        "API_KEY": "your-key"
      }
    }
  }
}
```

### Các công cụ có sẵn

- `tên_công_cụ_1` - Mô tả
- `tên_công_cụ_2` - Mô tả
```

## Thực hành tốt nhất để tạo Skill

### Cung cấp đầu vào chi tiết

✅ **Tốt:**
```bash
/skill:create [tạo skill để triển khai các tính năng WebSocket thời gian thực bao gồm quản lý kết nối, logic kết nối lại, hàng đợi tin nhắn và mở rộng quy mô với Redis pub/sub]
```

❌ **Mơ hồ:**
```bash
/skill:create [websockets]
```

### Sử dụng tài liệu chính thức

```bash
# Tốt nhất: llms.txt chính thức
/skill:create https://docs.service.com/llms.txt

# Tốt: GitHub chính thức
/skill:create https://github.com/official/repo

# Tạm được: Ngôn ngữ tự nhiên (nhưng ít toàn diện hơn)
/skill:create [tạo skill cho X]
```

### Chỉ định phạm vi nếu quá rộng

```bash
# Quá rộng
/skill:create [Python]

# Tốt hơn
/skill:create [lập trình async Python với asyncio]

# Tốt nhất
/skill:create [lập trình async Python với asyncio bao gồm event loops, coroutines, pattern async/await và quản lý tác vụ đồng thời]
```

## Sau khi tạo Skill

Quy trình làm việc tiêu chuẩn:

```bash
# 1. Tạo skill
/skill:create [mô tả hoặc URL]

# 2. Xem lại skill
cat .claude/skills/[tên-skill].md

# 3. Kiểm tra skill
/ask [câu hỏi liên quan đến skill]
# Skill sẽ tự động kích hoạt

# 4. Nếu tìm thấy vấn đề
/skill:fix-logs .claude/skills/[tên-skill].md

# 5. Lặp lại cho đến khi hài lòng

# 6. Commit skill
/git:cm
```

## Các file đầu ra

Sau khi `/skill:create` hoàn tất:

### File Skill

```
.claude/skills/[tên-skill].md
```

Prompt skill hoàn chỉnh sẵn sàng để sử dụng.

### Báo cáo nghiên cứu

```
plans/skill-research-[tên]-[ngày].md
```

Các phát hiện và phân tích nghiên cứu.

### Báo cáo đánh giá

```
plans/skill-evaluation-[tên]-[ngày].md
```

Điểm chất lượng và các đề xuất.

## Các trường hợp sử dụng phổ biến

### 1. Skill cho Framework/Thư viện

```bash
/skill:create https://docs.nextjs.org/llms.txt
/skill:create https://github.com/remix-run/remix
/skill:create [tạo skill cho TailwindCSS]
```

### 2. Skill cho Nền tảng Cloud

```bash
/skill:create [tạo skill để triển khai AWS Lambda]
/skill:create https://github.com/cloudflare/workers-sdk
/skill:create [phát triển Azure Functions]
```

### 3. Skill cho Cơ sở dữ liệu

```bash
/skill:create [tối ưu hóa truy vấn PostgreSQL]
/skill:create https://github.com/mongodb/mongo
/skill:create [các pattern caching Redis]
```

### 4. Skill cho Tích hợp công cụ

```bash
/skill:create [các thực hành tốt nhất cho Docker containerization]
/skill:create [GitHub Actions CI/CD]
/skill:create [triển khai Kubernetes]
```

### 5. Skill cho lĩnh vực cụ thể

```bash
/skill:create [xử lý thanh toán với Stripe]
/skill:create [email marketing với SendGrid]
/skill:create [analytics với Google Analytics]
```

## Kích hoạt Skill

Sau khi được tạo, các skill sẽ tự động kích hoạt:

```bash
# Skill: mongodb.md đã tồn tại

# Đặt câu hỏi về MongoDB
/ask [cách tạo compound index trong MongoDB]

# Hệ thống sẽ tự động:
1. Phát hiện câu hỏi liên quan đến MongoDB
2. Tải skill mongodb.md
3. Sử dụng kiến thức từ skill để trả lời
4. Cung cấp câu trả lời chi tiết, chính xác
```

## Xử lý sự cố

### Skill không kích hoạt

**Vấn đề:** Skill tồn tại nhưng không kích hoạt.

**Kiểm tra:**
```bash
# 1. Xác minh skill tồn tại
ls .claude/skills/

# 2. Kiểm tra định dạng skill
cat .claude/skills/[tên].md
# Phải có phần "Khi nào sử dụng" rõ ràng

# 3. Sửa nếu cần
/skill:fix-logs .claude/skills/[tên].md
```

### Điểm chất lượng thấp

**Vấn đề:** Skill đạt điểm dưới 8.0.

**Giải pháp:**
```bash
# Xem báo cáo đánh giá
cat plans/skill-evaluation-*.md

# Giải quyết các vấn đề được đề cập

# Tạo lại với nhiều chi tiết hơn
/skill:create [prompt chi tiết hơn]
```

### Thiếu thông tin

**Vấn đề:** Skill không đầy đủ.

**Giải pháp:**
```bash
# Thêm nhiều ngữ cảnh vào đầu vào
/skill:create [prompt gốc + các lĩnh vực cụ thể cần bao phủ]

# Hoặc chỉnh sửa file skill thủ công
# Sau đó xác thực lại
/skill:fix-logs .claude/skills/[tên].md
```

## Các bước tiếp theo

Sau khi tạo các skill:

- [/skill:fix-logs](/vi/docs/engineer/commands/skill/fix-logs) - Sửa skill dựa trên log
- [/ask](/vi/docs/engineer/commands/core/ask) - Sử dụng skill để trả lời câu hỏi
- [Hướng dẫn tạo Skill](/vi/docs/guides/creating-skills) - Tạo skill nâng cao

---

**Điểm chính**: `/skill:create` tạo ra các skill agent toàn diện thông qua quy trình 4 giai đoạn (nghiên cứu, triển khai, xem xét, đánh giá) từ các prompt ngôn ngữ tự nhiên, URL llms.txt hoặc repository GitHub—mở rộng khả năng của Claude với kiến thức chuyên môn và tích hợp công cụ.
