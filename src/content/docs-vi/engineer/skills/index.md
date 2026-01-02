---
title: Kỹ Năng (Skills)
description: Tài liệu hướng dẫn sử dụng Skills trong ClaudeKit
section: engineer
kit: engineer
category: docs/skills
order: 1
published: true
lang: vi
---

# Kỹ Năng (Skills)

Skills là các năng lực chuyên biệt giúp mở rộng khả năng của Claude Code. ClaudeKit bao gồm hơn 46 kỹ năng được xây dựng sẵn, bao quát mọi lĩnh vực từ xác thực người dùng đến tích hợp AI.

## Skills Là Gì?

Skills là các thư mục chứa hướng dẫn, tập lệnh (scripts) và tài nguyên mà Claude tải lên một cách linh hoạt để cải thiện hiệu suất cho các tác vụ chuyên biệt. Chúng dạy cho Claude cách hoàn thành các công việc cụ thể một cách nhất quán và có thể lặp lại.

**Lợi ích chính:**
- Chuyên môn có sẵn cho các framework phổ biến.
- Các mẫu (patterns) triển khai nhất quán.
- Tích hợp sẵn các phương pháp hay nhất (best practices).
- Truy cập tức thì vào kiến thức chuyên ngành.
- Không cần cấu hình phức tạp.

---

## Danh Mục Skills

### Kỹ Năng Meta (Meta Skills)

Các kỹ năng dùng để tạo và quản lý các kỹ năng khác.

#### [skill-creator](/docs/engineer/skills/skill-creator)
Tạo các kỹ năng tùy chỉnh mới để mở rộng khả năng của Claude với kiến thức chuyên môn, quy trình làm việc hoặc tích hợp công cụ.

**Sử dụng khi:** Xây dựng các kỹ năng tùy chỉnh cho nhu cầu cụ thể của dự án.

**Ví dụ:**
```
"Sử dụng skill-creator để tạo một kỹ năng tạo schema GraphQL"
```

[→ Hướng dẫn đầy đủ về skill-creator](/docs/engineer/skills/skill-creator)

---

#### template-skill
Mẫu cơ bản để bắt đầu tạo các kỹ năng mới.

---

### Xác Thực & Bảo Mật (Authentication & Security)

#### [better-auth](/docs/engineer/skills/better-auth)
Framework xác thực đa nền tảng cho TypeScript với các tính năng email/mật khẩu, OAuth, 2FA, passkeys và đa người thuê (multi-tenancy).

**Sử dụng khi:** Triển khai xác thực trong các ứng dụng TypeScript/JavaScript.

**Tính năng:**
- Xác thực email/mật khẩu.
- Đăng nhập mạng xã hội OAuth (GitHub, Google, v.v.).
- Xác thực hai yếu tố (2FA).
- Passkeys (WebAuthn).
- Magic links.
- Quản lý tổ chức/đa người thuê.
- Hoạt động với mọi framework.

**Ví dụ:**
```
"Sử dụng better-auth để triển khai GitHub OAuth với 2FA"
```

[→ Hướng dẫn đầy đủ về better-auth](/docs/engineer/skills/better-auth)

---

### Thiết Kế & Hình Ảnh (Design & Visual)

#### canvas-design
Tạo các tác phẩm nghệ thuật hình ảnh đẹp mắt ở định dạng PNG và PDF dựa trên triết lý thiết kế chuyên nghiệp.

**Sử dụng khi:** Tạo poster, bản thiết kế hoặc nội dung hình ảnh.

**Khả năng:**
- Thiết kế hình ảnh nguyên bản.
- Hệ thống thiết kế (Design systems).
- Bộ nhận diện thương hiệu.
- Bố cục chuyên nghiệp.
- Không vi phạm bản quyền.

**Ví dụ:**
```
"Sử dụng canvas-design để tạo phần hero cho trang landing page"
```

---

### Xử Lý Tài Liệu (Document Processing)

#### [document-skills](/docs/engineer/skills/document-skills)
Đọc, phân tích và tạo các định dạng tài liệu khác nhau.

**Định dạng hỗ trợ:**
- **PDF** - Trích xuất văn bản, bảng biểu, biểu mẫu, tạo file PDF mới.
- **DOCX** - Tài liệu Word với định dạng, theo dõi thay đổi.
- **PPTX** - Bản trình bày PowerPoint với bố cục, biểu đồ.
- **XLSX** - Bảng tính Excel với công thức, định dạng.

**Sử dụng khi:** Làm việc với các tài liệu văn phòng.

**Ví dụ:**
```
"Sử dụng document-skills/pdf để trích xuất các trường biểu mẫu từ file contract.pdf"
```

[→ Hướng dẫn đầy đủ về document-skills](/docs/engineer/skills/document-skills)

---

### Công Cụ Phát Triển (Development Tools)

#### [mcp-builder](/docs/engineer/skills/mcp-builder)
Tạo các máy chủ MCP (Model Context Protocol) chất lượng cao để tích hợp với các dịch vụ bên ngoài.

**Sử dụng khi:** Xây dựng máy chủ MCP bằng Python (FastMCP) hoặc Node/TypeScript.

**Sản phẩm tạo ra:**
- Khung mã nguồn máy chủ MCP.
- Định nghĩa các công cụ (tools).
- Bộ xử lý tài nguyên (resources).
- Xác thực (Authentication).
- Tài liệu hướng dẫn.

**Ví dụ:**
```
"Sử dụng mcp-builder để tạo máy chủ MCP cho Stripe API"
```

[→ Hướng dẫn đầy đủ về mcp-builder](/docs/engineer/skills/mcp-builder)

---

#### repomix
Đóng gói toàn bộ repository vào một file duy nhất để chia sẻ context.

**Sử dụng khi:** Chia sẻ context của toàn bộ codebase với AI hoặc làm tài liệu.

---

### Gỡ Lỗi & Giải Quyết Vấn Đề (Debugging & Problem Solving)

#### [systematic-debugging](/docs/engineer/skills/systematic-debugging)
Khung gỡ lỗi bốn giai đoạn đảm bảo tìm ra nguyên nhân gốc rễ trước khi thực hiện sửa lỗi.

**Sử dụng khi:** Gặp bất kỳ lỗi nào, thất bại khi chạy test, hoặc hành vi không mong muốn.

**Quy trình:**
1. Điều tra nguyên nhân gốc rễ.
2. Phân tích mẫu (pattern).
3. Kiểm tra giả thuyết.
4. Triển khai sửa lỗi.

**Ví dụ:**
```
"Sử dụng systematic-debugging để điều tra tại sao test bị thất bại"
```

[→ Hướng dẫn đầy đủ về systematic-debugging](/docs/engineer/skills/systematic-debugging)

---

#### root-cause-tracing
Kỹ thuật truy vết ngược để tìm nguồn gốc của lỗi.

#### verification-before-completion
Xác minh tính hoàn thiện của việc triển khai trước khi công bố hoàn tất.

#### defense-in-depth
Xác thực nhiều lớp và xử lý lỗi tầng tầng lớp lớp.

---

### Chiến Lược Giải Quyết Vấn Đề (Problem Solving Strategies)

#### collision-zone-thinking
Tìm điểm giao thoa giữa các yêu cầu xung đột nhau.

#### inversion-exercise
Giải quyết vấn đề bằng cách đảo ngược chúng.

#### meta-pattern-recognition
Nhận diện các mẫu chung giữa các lĩnh vực khác nhau.

#### scale-game
Suy nghĩ ở các quy mô khác nhau để tìm giải pháp.

#### simplification-cascades
Chia nhỏ các vấn đề phức tạp thành các phần đơn giản.

#### when-stuck
Các chiến lược để vượt qua khi bị tắc nghẽn.

---

### Frontend Frameworks & UI

#### [nextjs](/docs/engineer/skills/nextjs)
Hướng dẫn triển khai Next.js toàn diện.

**Sử dụng khi:** Xây dựng ứng dụng Next.js.

**Bao gồm:**
- Các mẫu App Router.
- Server Components.
- Server Actions.
- Định tuyến (Routing).
- Lấy dữ liệu (Data fetching).
- Tối ưu hóa (Optimization).

[→ Hướng dẫn đầy đủ về Next.js](/docs/engineer/skills/nextjs)

---

#### [shadcn-ui](/docs/engineer/skills/shadcn-ui)
Thư viện thành phần giao diện đẹp và dễ tiếp cận cho React.

**Sử dụng khi:** Xây dựng giao diện với Tailwind CSS.

**Tính năng:**
- Các thành phần copy-paste.
- Dễ dàng tùy chỉnh.
- Hỗ trợ đầy đủ cho người khuyết tật (Accessible).
- Hỗ trợ TypeScript.

[→ Hướng dẫn đầy đủ về shadcn-ui](/docs/engineer/skills/shadcn-ui)

---

#### [tailwindcss](/docs/engineer/skills/tailwindcss)
Framework CSS ưu tiên tiện ích (utility-first).

**Sử dụng khi:** Thiết kế phong cách cho ứng dụng.

[→ Hướng dẫn đầy đủ về Tailwind CSS](/docs/engineer/skills/tailwindcss)

---

#### remix-icon
Hệ thống biểu tượng nguồn mở.

---

### Backend & Cơ Sở Dữ Liệu

#### [postgresql-psql](/docs/engineer/skills/postgresql-psql)
Quản trị và tối ưu hóa cơ sở dữ liệu PostgreSQL.

**Sử dụng khi:** Làm việc với cơ sở dữ liệu PostgreSQL.

**Bao gồm:**
- Tối ưu hóa truy vấn.
- Thiết kế schema.
- Điều chỉnh hiệu suất.
- Sao lưu/Khôi phục.
- Nhân bản (Replication).

[→ Hướng dẫn đầy đủ về PostgreSQL](/docs/engineer/skills/postgresql-psql)

---

#### mongodb
Các hoạt động và phương pháp hay nhất cho cơ sở dữ liệu MongoDB.

---

### DevOps & Cơ Sở Hạ Tầng

#### [docker](/docs/engineer/skills/docker)
Nền tảng container hóa để xây dựng, chạy và triển khai ứng dụng.

**Sử dụng khi:** Đóng gói ứng dụng, tạo Dockerfile, Docker Compose.

**Bao gồm:**
- Phương pháp viết Dockerfile tốt nhất.
- Build nhiều giai đoạn (Multi-stage builds).
- Docker Compose.
- Tăng cường bảo mật.
- Tích hợp CI/CD.
- Triển khai sản phẩm (Production deployment).

[→ Hướng dẫn đầy đủ về Docker](/docs/engineer/skills/docker)

---

#### gcloud
Các công cụ và dịch vụ của Google Cloud Platform.

**Sử dụng khi:** Làm việc với cơ sở hạ tầng GCP.

#### turborepo
Hệ thống build hiệu suất cao cho các monorepo JavaScript/TypeScript.

---

### Dịch Vụ Đám Mây (Cloud Services)

#### cloudflare
Các dịch vụ và API của Cloudflare.

#### cloudflare-workers
Môi trường thực thi serverless trên mạng lưới cạnh của Cloudflare.

#### cloudflare-r2
Lưu trữ đối tượng tương thích với S3 không mất phí băng thông ra.

#### cloudflare-browser-rendering
Tự động hóa trình duyệt Chrome không đầu trên Cloudflare.

---

### AI & Machine Learning

#### google-adk-python
Bộ công cụ phát triển AI của Google cho ứng dụng Python.

#### gemini-vision
Google Gemini Vision API để phân tích hình ảnh.

**Sử dụng khi:** Phân tích hình ảnh, trích xuất văn bản từ ảnh.

**Khả năng:**
- Hiểu nội dung hình ảnh.
- OCR (Nhận dạng ký tự quang học).
- Phát hiện vật thể.
- Phân tích bối cảnh.

#### gemini-audio
Tạo và xử lý âm thanh với Gemini.

**Tính năng:**
- Chuyển văn bản thành giọng nói.
- Phân tích âm thanh.
- Tạo giọng nói.

#### gemini-document-processing
Xử lý tài liệu với Gemini AI.

#### gemini-image-gen
Tạo hình ảnh sử dụng các mô hình Gemini.

#### gemini-video-understanding
Phân tích và hiểu nội dung video.

---

### Xử Lý Phương Tiện (Media Processing)

#### ffmpeg
Xử lý video và âm thanh với các công cụ dòng lệnh FFmpeg.

**Sử dụng khi:** Chuyển đổi, chỉnh sửa hoặc thao tác các file phương tiện.

**Khả năng:**
- Chuyển đổi định dạng.
- Chỉnh sửa video.
- Trích xuất âm thanh.
- Phát trực tuyến (Streaming).
- Nén file.

#### imagemagick
Xử lý hình ảnh nâng cao qua dòng lệnh.

**Sử dụng khi:** Thao tác hình ảnh hàng loạt, chuyển đổi định dạng.

**Các hoạt động:**
- Thay đổi kích thước, cắt, xoay.
- Chuyển đổi định dạng.
- Hiệu ứng và bộ lọc.
- Xử lý hàng loạt.

---

### Kiểm Thử & Tự Động Hóa Trình Duyệt

#### chrome-devtools
Tự động hóa trình duyệt Chrome để kiểm thử và gỡ lỗi.

**Sử dụng khi:** Quét web (web scraping), kiểm thử tự động, phân tích hiệu suất.

**Tính năng:**
- Tích hợp Puppeteer.
- Chrome DevTools Protocol.
- Phân tích cấu hình hiệu suất.
- Giám sát mạng.

---

### Tài Liệu & Phân Tích Code

#### docs-seeker
Tìm và truy xuất tài liệu từ nhiều nguồn khác nhau.

**Sử dụng khi:** Cần tra cứu tài liệu API, hướng dẫn framework.

#### claude-code
Kỹ năng meta để hiểu về chính hệ thống Claude Code.

---

### Thương Mại Điện Tử (E-commerce)

#### shopify
Phát triển ứng dụng Shopify và tích hợp API.

**Sử dụng khi:** Xây dựng ứng dụng hoặc tích hợp Shopify.

**Bao gồm:**
- Shopify CLI.
- GraphQL Admin API.
- UI Extensions.
- Phát triển ứng dụng.

---

## Cách Sử Dụng Skills

Skills được gọi bằng cách nhắc đến chúng trong cuộc hội thoại với Claude Code.

### Cách Gọi Cơ Bản

```
"Sử dụng [tên-kỹ-năng] để [mô tả nhiệm vụ]"
```

### Ví Dụ Thực Tế

**Xác thực:**
```
"Sử dụng better-auth để thêm GitHub OAuth vào ứng dụng Next.js của tôi"
```

**Xử lý tài liệu:**
```
"Sử dụng document-skills/pdf để trích xuất tất cả các bảng từ báo cáo quarterly-report.pdf"
```

**Container hóa:**
```
"Sử dụng docker để tạo Dockerfile cho ứng dụng Node.js của tôi"
```

**Gỡ lỗi:**
```
"Sử dụng systematic-debugging để điều tra tại sao các bài test bị thất bại"
```

**Tích hợp AI:**
```
"Sử dụng gemini-vision để phân tích hình ảnh sản phẩm này và trích xuất văn bản"
```

---

## Skills so với Lệnh (Commands)

| **Khía cạnh** | **Skills** | **Commands** |
|------------|-----------|--------------|
| **Cách gọi** | "Sử dụng [skill]..." | `/lệnh` |
| **Mục đích** | Kiến thức chuyên môn | Điều phối quy trình công việc |
| **Phạm vi** | Một nhiệm vụ tập trung | Quy trình nhiều bước |
| **Ví dụ** | better-auth, docker | /cook, /debug, /plan |

**Khi nào dùng Skills:** Khi cần chuyên môn kỹ thuật cụ thể.

**Khi nào dùng Commands:** Khi cần quy trình làm việc hoàn chỉnh với nhiều agents.

---

## Các Trường Hợp Sử Dụng Phổ Biến

### Thiết Lập Xác Thực

```
"Sử dụng better-auth để triển khai xác thực với:
- Đăng ký bằng Email/mật khẩu
- GitHub OAuth
- 2FA với TOTP
- Quản lý phiên làm việc (session)"
```

### Container Hóa

```
"Sử dụng docker để:
1. Tạo Dockerfile đa giai đoạn được tối ưu hóa
2. Thiết lập Docker Compose với PostgreSQL
3. Thêm kiểm tra sức khỏe (health checks)
4. Cấu hình cho môi trường sản xuất"
```

### Phân Tích Tài Liệu

```
"Sử dụng document-skills/docx để:
- Trích xuất tất cả các bình luận và thay đổi được theo dõi
- Giữ nguyên định dạng
- Xuất ra định dạng markdown"
```

### Các Tính Năng Được Hỗ Trợ Bởi AI

```
"Sử dụng gemini-vision để xây dựng tính năng:
- Phân tích ảnh sản phẩm
- Trích xuất thông tin chi tiết sản phẩm
- Xác thực chất lượng hình ảnh
- Trả về dữ liệu có cấu trúc"
```

### Làm Việc Với Cơ Sở Dữ Liệu

```
"Sử dụng postgresql-psql để:
- Phân tích các truy vấn chậm
- Tối ưu hóa schema
- Thêm các index phù hợp
- Thiết lập nhân bản (replication)"
```

### Giải Quyết Vấn Đề

```
"Tôi đang bị kẹt ở vấn đề kiến trúc này. Sử dụng collision-zone-thinking để tìm nơi các yêu cầu bị xung đột"
```

---

## Tạo Skills Tùy Chỉnh

### Sử dụng skill-creator

```
"Sử dụng skill-creator để tạo một kỹ năng tên là 'stripe-integration' để:
- Xử lý Stripe webhooks
- Quản lý các gói đăng ký
- Xử lý thanh toán
- Tuân theo các phương pháp hay nhất"
```

**Skill-creator sẽ:**
1. Đưa ra các câu hỏi làm rõ.
2. Thiết kế cấu trúc kỹ năng.
3. Tạo file SKILL.md.
4. Thêm các tài nguyên đi kèm nếu cần.
5. Lưu vào `.claude/skills/`.

### Cấu Trúc Của Một Skill

Mọi skill đều có:

```markdown
---
name: tên-kỹ-năng
description: Mô tả rõ ràng về chức năng và khi nào nên sử dụng
---

# Tên Kỹ Năng

Các hướng dẫn mà Claude sẽ tuân theo khi kỹ năng được kích hoạt.

## Khi Nào Sử Dụng
Liệt kê các tình huống cụ thể

## Ví Dụ
Các ví dụ sử dụng thực tế

## Phương Pháp Hay Nhất
Các hướng dẫn cần tuân theo
```

---

## Phương Pháp Hay Nhất (Best Practices)

### Hãy Cụ Thể

✅ **Tốt:**
```
"Sử dụng docker để tạo Dockerfile cho ứng dụng Next.js 14 với:
- Build đa giai đoạn
- Node 20 Alpine
- Người dùng không có quyền root
- Kiểm tra sức khỏe (health checks)"
```

❌ **Mơ hồ:**
```
"Sử dụng docker để container hóa ứng dụng này"
```

### Cung Cấp Bối Cảnh

✅ **Tốt:**
```
"Sử dụng better-auth để thêm xác thực vào ứng dụng Next.js của tôi. Tôi cần:
- GitHub và Google OAuth
- Sao lưu bằng Email/mật khẩu
- Phân quyền dựa trên vai trò
- PostgreSQL với Drizzle"
```

❌ **Tối thiểu:**
```
"Sử dụng better-auth"
```

### Xác Định Kết Quả Đầu Ra

✅ **Tốt:**
```
"Sử dụng document-skills/pdf để trích xuất bảng từ contract.pdf và lưu dưới dạng CSV vào thư mục ./exports/"
```

❌ **Không rõ ràng:**
```
"Sử dụng document-skills để đọc file PDF này"
```

---

## Kết Hợp Các Skills

Các skills có thể làm việc cùng nhau một cách mượt mà:

**Tài liệu + AI:**
```
"Trước tiên sử dụng document-skills/pdf để trích xuất văn bản từ spec.pdf,
sau đó sử dụng gemini-document-processing để tóm tắt các yêu cầu chính"
```

**Xác thực + Cơ sở dữ liệu:**
```
"Sử dụng better-auth cho xác thực, sau đó sử dụng postgresql-psql để tối ưu hóa schema xác thực"
```

**Gỡ lỗi + Kiểm thử:**
```
"Sử dụng systematic-debugging để tìm nguyên nhân gốc rễ, sau đó sử dụng chrome-devtools để xác minh việc sửa lỗi trên trình duyệt"
```

---

## Tra Cứu Nhanh

### Các Skills Được Sử Dụng Nhiều Nhất

| **Nhiệm vụ** | **Skill** | **Ví dụ** |
|----------|-----------|-------------|
| Xác thực | `better-auth` | "Sử dụng better-auth cho OAuth" |
| Containers | `docker` | "Sử dụng docker để tạo Dockerfile" |
| Tài liệu | `document-skills` | "Sử dụng document-skills/pdf..." |
| Gỡ lỗi | `systematic-debugging` | "Sử dụng systematic-debugging..." |
| Next.js | `nextjs` | "Sử dụng nextjs cho App Router" |
| Cơ sở dữ liệu | `postgresql-psql` | "Sử dụng postgresql-psql..." |
| AI Vision | `gemini-vision` | "Sử dụng gemini-vision để phân tích" |
| UI Components | `shadcn-ui` | "Sử dụng shadcn-ui cho biểu mẫu" |
| Máy chủ MCP | `mcp-builder` | "Sử dụng mcp-builder..." |
| Skill Tùy Chỉnh | `skill-creator` | "Sử dụng skill-creator để tạo..." |

---

## Xử Lý Sự Cố

### Skill Không Hoạt Động

**Kiểm tra:**
1. Tên kỹ năng được viết đúng chính tả.
2. Mô tả nhiệm vụ rõ ràng.
3. Cung cấp đủ bối cảnh.
4. Xác định kết quả đầu ra mong muốn.

### Cần Kỹ Năng Khác

**Lựa chọn:**
1. Kiểm tra xem có kỹ năng tương tự nào tồn tại không.
2. Sử dụng `skill-creator` để xây dựng nó.
3. Gửi yêu cầu trên Discord/GitHub.

---

## Tổng Hợp Tất Cả 46+ Skills

**Meta:** skill-creator, template-skill

**Xác thực/Bảo mật:** better-auth

**Thiết kế:** canvas-design

**Tài liệu:** pdf, docx, pptx, xlsx

**Phát triển:** mcp-builder, repomix, claude-code, docs-seeker

**Gỡ lỗi:** systematic-debugging, root-cause-tracing, verification-before-completion, defense-in-depth

**Giải quyết vấn đề:** collision-zone-thinking, inversion-exercise, meta-pattern-recognition, scale-game, simplification-cascades, when-stuck

**Frontend:** nextjs, shadcn-ui, tailwindcss, remix-icon

**Backend:** postgresql-psql, mongodb

**DevOps:** docker, gcloud, turborepo

**Đám mây:** cloudflare, cloudflare-workers, cloudflare-r2, cloudflare-browser-rendering

**AI/ML:** google-adk-python, gemini-vision, gemini-audio, gemini-document-processing, gemini-image-gen, gemini-video-understanding

**Phương tiện:** ffmpeg, imagemagick

**Kiểm thử:** chrome-devtools

**Thương mại điện tử:** shopify

---

## Bắt Đầu

**Thử ngay bây giờ:**
```
"Sử dụng better-auth để thêm xác thực vào ứng dụng của tôi"
"Sử dụng docker để đóng gói ứng dụng của tôi"
"Sử dụng systematic-debugging để điều tra lỗi này"
```

---

**Điểm Chính**: Skills mang lại năng lực chuyên môn tức thì. Chỉ cần nhắc tên kỹ năng và mô tả những gì bạn cần.
