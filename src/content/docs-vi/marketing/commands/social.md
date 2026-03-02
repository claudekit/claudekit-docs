---
lang: vi
title: "/ckm:social"
description: "Tạo nội dung mạng xã hội được tối ưu hóa cho từng nền tảng với AI copywriting"
section: marketing
category: commands
order: 6
published: true
---

> Tạo nội dung thu hút người xem cho mọi nền tảng

## Quick Start

Tạo một bài đăng LinkedIn trong 30 giây:

```bash
/ckm:social linkedin post
```

**Điều gì xảy ra**:
1. AI hỏi chủ đề và thông điệp
2. Tạo bản sao được tối ưu hóa cho nền tảng
3. Bao gồm các khuyến nghị hashtag
4. Đề xuất thời gian đăng và định dạng

**Output**: `assets/posts/linkedin/251229-{slug}.md`

## What It Does

### Trước /ckm:social
- Viết bản sao thủ công (30-60 phút mỗi bài)
- Tối ưu hóa nền tảng không nhất quán
- Lựa chọn hashtag ngẫu nhiên
- Không có chiến lược đăng bài
- Chiến thuật tham gia không rõ ràng

### Sau /ckm:social
- Nội dung mạng xã hội do AI tạo (2 phút)
- Định dạng riêng cho từng nền tảng
- Nghiên cứu hashtag chiến lược
- Thời gian đăng bài tối ưu
- Bao gồm các kế hoạch tham gia

## Syntax

```bash
/ckm:social <platform> [type]
```

### Arguments

| Argument | Type | Description | Required |
|----------|------|-------------|----------|
| `platform` | string | Nền tảng mạng xã hội | Yes |
| `type` | string | Loại nội dung | No (default: post) |

### Supported Platforms

| Platform | Aliases | Content Types | Best For |
|----------|---------|---------------|----------|
| `twitter` | `x` | post, thread | Cập nhật thời gian thực, tin tức |
| `linkedin` | | post, article | B2B, suy nghĩ lãnh đạo |
| `instagram` | `ig` | post, carousel, story, reel | Nội dung hình ảnh, lối sống |
| `tiktok` | | reel | Kịch bản video ngắn |
| `youtube` | `yt` | shorts, community | Kịch bản video, cập nhật |

### Content Types

| Type | Description | Length | Format |
|------|-------------|--------|--------|
| `post` | Bài đăng đơn | Phụ thuộc nền tảng | Văn bản + hình ảnh tùy chọn |
| `thread` | Chuỗi bài đăng đa | 3-10 bài | Bài đăng tuần tự |
| `carousel` | Bộ sưu tập hình ảnh | 2-10 slides | Bản sao từng slide |
| `story` | Nội dung story | 15-30 giây | Định dạng dọc |
| `reel` | Kịch bản video ngắn | 15-90 giây | Hook + script + CTA |

## Examples

### Example 1: LinkedIn Post

**Input**:
```bash
/ckm:social linkedin post
```

**AI Questions**:
```
social-media-manager: Chủ đề của bạn là gì?
You: Công bố các tính năng tự động hóa AI mới

social-media-manager: Thông điệp chính?
You: Tiết kiệm 10 giờ/tuần với tự động hóa AI
```

**Expected Output**:
```markdown
✓ social-media-manager: Định nghĩa chiến lược nền tảng
✓ content-creator: Viết bản sao
✓ copywriter: Tối ưu hóa hook

---
# LinkedIn Post: AI Automation Launch

## Post Copy

Chúng tôi vừa phát hành một cái gì đó lớn.

AI Automation đã hoạt động. Và nó đã tiết kiệm 10 giờ/tuần cho các đội.

Đây là những gì thay đổi:

→ Chấm điểm khách hàng tiềm năng thủ công: 5 giờ → 15 phút
→ Phản hồi email: 3 giờ → tự động
→ Tạo báo cáo: 4 giờ → tức thì

Kết quả thực tế từ người dùng beta:
• 76% quy trình công việc nhanh hơn
• Hoàn thành 3 lần nhiều tác vụ
• 92% nói "không thể quay lại"

Phần tốt nhất? Nó hoạt động với các công cụ hiện có của bạn. Không cần di chuyển.

Dùng thử miễn phí: [link]

---

Những tác vụ thủ công nào đang lấy đi thời gian của bạn? Hãy ghi chú bên dưới 👇

## Hashtags (Khuyến nghị: 3-5)
Primary: #AIAutomation #ProductivityTools #SaaS
Secondary: #WorkflowAutomation #AITools
Niche: #SaaSTech #B2BSaaS

## Posting Strategy
Thời gian tốt nhất: Thứ Ba hoặc Thứ Năm, 8-10 AM EST
Định dạng: Chỉ văn bản (LinkedIn ưa thích nội dung gốc)
Chiến thuật tham gia: Câu hỏi trong bình luận
Pin comment: "Đây là cách nó hoạt động: [demo video link]"

## Image Recommendations
Option 1: Ảnh chụp trước/sau (thời gian tiết kiệm)
Option 2: Biểu đồ kết quả (76%, 3x, 92% thống kê)
Option 3: Ảnh chụp sản phẩm với văn bản overlay

Tạo bằng:
/ckm:design LinkedIn post graphic, 1:1 aspect, stats overlay

## Performance Predictions
Reach dự kiến: 2,500-3,500 impressions
Engagement dự kiến: 80-120 tương tác
Hiệu suất tốt nhất: Bài đăng với thống kê + câu hỏi

## Engagement Tactics
1. Trả lời 10 bình luận đầu tiên trong 1 giờ
2. Đặt câu hỏi tiếp theo
3. Gắn thẻ những kết nối có liên quan
4. Chia sẻ đến các nhóm LinkedIn liên quan

Saved: assets/posts/linkedin/251229-ai-automation-launch.md
```

### Example 2: Twitter Thread

**Input**:
```bash
/ckm:social twitter thread
```

**AI Questions**:
```
social-media-manager: Chủ đề thread?
You: Cách chúng tôi giảm churn 43% trong 60 ngày

social-media-manager: Những bài học chính để chia sẻ?
You: Phân tích dự đoán, can thiệp sớm, tự động hóa thành công khách hàng
```

**Expected Output**:
```markdown
✓ social-media-manager: Chiến lược thread được tạo
✓ content-creator: Thread được viết

---
# Twitter Thread: Churn Reduction Case Study

## Thread (10 tweets)

**Tweet 1 (Hook)**
Chúng tôi giảm churn 43% trong 60 ngày.

Đây là kế hoạch chính xác mà chúng tôi sử dụng (và bạn có thể sao chép):

🧵 Thread 👇

**Tweet 2**
Đầu tiên, chúng tôi dừng đoán ai sẽ churn.

Chúng tôi xây dựng một mô hình dự đoán chấm điểm mỗi khách hàng hàng ngày.

Green (0-30): Hạnh phúc
Yellow (31-60): Rủi ro
Red (61-100): Sắp churn

Tập trung tất cả nỗ lực vào vàng và đỏ.

**Tweet 3**
Chúng tôi học được: khách hàng không rời đi trong một ngày.

Họ rời đi từ từ, sau đó bất ngờ.

Dấu hiệu mà chúng tôi theo dõi:
→ Tần suất đăng nhập giảm
→ Sử dụng tính năng giảm
→ Phiếu hỗ trợ tăng
→ Kích thước nhóm giảm

Mô hình đã bắt được những điều này 30 ngày sớm.

**Tweet 4**
Can thiệp sớm = thay đổi trò chơi.

Khi ai đó chạm vào "yellow":
1. Email tự động từ CSM (cá nhân hóa)
2. Lịch trình cuộc gọi kiểm tra
3. Mẹo sử dụng được gửi
4. Những câu chuyện thành công được chia sẻ

Đừng chờ đến đỏ. Hành động khi vàng.

**Tweet 5**
Chúng tôi tự động hóa thành công khách hàng.

Quy trình công việc được xây dựng cho:
→ Onboarding (ngày 1, 3, 7, 14, 30)
→ Đẩy áp dụng tính năng
→ Lễ kỷ niệm chiến thắng
→ Nhắc nhở gia hạn

Tự động hóa giải phóng thời gian CSM cho các tài khoản chạm tay cao.

**Tweet 6**
Phát hiện ngạc nhiên: giá không phải là vấn đề.

91% khách hàng bỏ cuộc nói "không sử dụng đủ".

Giá trị cảm nhận = tính năng được sử dụng × kết quả đạt được

Chúng tôi chuyển từ "bán thêm tính năng" sang "tăng sử dụng".

**Tweet 7**
Chiến thuật cụ thể hiệu quả:

✓ Email báo cáo sử dụng hàng tuần
✓ Phát hiện tính năng trong ứng dụng
✓ Tóm tắt "wins" hàng tháng
✓ So sánh ngang hàng ("các đội giống như bạn sử dụng điều này")
✓ Phiên onboarding trực tiếp

Nhỏ gợi ý, tác động lớn.

**Tweet 8**
Chúng tôi đo lường mọi thứ.

Các số liệu chính:
• Churn risk score (hàng ngày)
• Feature adoption rate (hàng tuần)
• Support ticket sentiment (hàng ngày)
• Login streak (hàng ngày)
• Team expansion rate (hàng tháng)

Những gì bạn đo lường, bạn có thể cải thiện.

**Tweet 9**
Kết quả sau 60 ngày:

Trước:
→ 6.8% churn hàng tháng
→ $47k MRR mất/tháng
→ Thành công khách hàng phản ứng

Sau:
→ 3.9% churn hàng tháng (-43%)
→ $27k MRR mất/tháng (-$20k)
→ Can thiệp chủ động

ROI: 8.4x trong năm 1

**Tweet 10 (CTA)**
Muốn mô hình dự đoán churn?

Chúng tôi đã mở nguồn: [link]

Bao gồm:
→ Thuật toán chấm điểm churn
→ Quy trình công việc tự động
→ Mẫu email
→ Bảng điều khiển số liệu

Retweet cái này và tôi sẽ gửi cho bạn liên kết 🔁

---

## Thread Formatting Tips
- Sử dụng ngắt dòng để dễ đọc
- Emojis cho ngắt dòng trực quan (không lạm dụng)
- Thống kê với → bullets để dễ quét
- Đánh số mỗi tweet nếu > 5 tweets
- Hook mạnh (tweet 1) và CTA (tweet cuối)

## Hashtags (1-2 max trên Twitter)
#ChurnReduction #SaaS

## Posting Strategy
Thời gian tốt nhất: Thứ Ba-Thứ Năm, 10 AM - 2 PM EST
Engagement: Trả lời bình luận bằng những hiểu biết sâu sắc
Retweet với bình luận: Thêm ngữ cảnh sau 4 giờ
Pin thread: Giữ trên hồ sơ trong 48 giờ

## Engagement Tactics
1. Trả lời mọi bình luận trong giờ đầu tiên
2. Quote-tweet trả lời hay nhất
3. DM những người bình luận có giá trị cao
4. Thread đến blog dài (lái lưu lượng)

## Performance Predictions
Impressions dự kiến: 15,000-25,000
Engagement dự kiến: 300-500 tương tác
Truy cập hồ sơ dự kiến: 800-1,200

Saved: assets/posts/twitter/251229-churn-reduction-thread.md
```

### Example 3: Instagram Carousel

**Input**:
```bash
/ckm:social instagram carousel
```

**Expected Output**:
```markdown
✓ social-media-manager: Chiến lược carousel được tạo
✓ content-creator: Bản sao slide được viết

---
# Instagram Carousel: 5 Productivity Hacks

## Carousel (7 Slides)

**Slide 1 (Cover)**
Title: "5 Productivity Hacks That Actually Work"
Subtitle: "Tiết kiệm 10+ giờ mỗi tuần"
Visual: Văn bản đậm trên nền gradient
CTA: "Vuốt để xem tất cả →"

**Slide 2**
Hack #1: Time Blocking

🕐 Lịch trình công việc sâu
🕑 Không có cuộc họp trước 11 AM
🕒 Khối tập trung 90 phút

Kết quả: 4 giờ công việc không bị gián đoạn hàng ngày

**Slide 3**
Hack #2: The 2-Minute Rule

Nếu nó mất < 2 phút, hãy làm ngay.

Đừng thêm nó vào danh sách todo của bạn.
Đừng lên lịch nó.
Chỉ cần làm nó.

Tiết kiệm 45 phút/ngày quản lý tác vụ.

**Slide 4**
Hack #3: Batch Similar Tasks

Thứ Hai: Chỉ cuộc họp
Thứ Ba: Chỉ công việc sâu
Thứ Tư: Tạo nội dung
Thứ Năm: Quản lý + email
Thứ Sáu: Lập kế hoạch + xem xét

Chuyển đổi ngữ cảnh giết năng suất.

**Slide 5**
Hack #4: Automate Repetitive Work

Những gì chúng tôi tự động hóa:
→ Phản hồi email (mẫu)
→ Lên lịch mạng xã hội
→ Tạo báo cáo
→ Nhập dữ liệu

Đã tiết kiệm: 12 giờ/tuần

**Slide 6**
Hack #5: Single-Task, Don't Multitask

Multitasking = làm 3 điều tồi tệ.

Tập trung vào 1 điều một lúc.
Hoàn thành nó.
Chuyển sang điều tiếp theo.

40% năng suất hơn.

**Slide 7 (CTA)**
Hack nào bạn sẽ thử đầu tiên?

Nhận xét bên dưới! 👇

Muốn thêm mẹo năng suất?
→ Follow @yourhandle
→ Save post này
→ Chia sẻ với đội của bạn

---

## Caption

5 productivity hacks tiết kiệm 10+ giờ/tuần cho tôi 💡

Tôi từng làm việc 60 giờ/tuần và vẫn cảm thấy lạc hậu.

Sau đó tôi phát hiện ra 5 hack này.

Bây giờ tôi làm việc 40 giờ và làm gấp 2 lần.

Vuốt để xem tất cả 5 →

Cái nào gây ấn tượng với bạn? Hãy ghi chú một số (1-5) bên dưới 👇

---

#ProductivityHacks #TimeManagement #WorkSmart #ProductivityTips #WorkLifeBalance #EntrepreneurLife #SmallBusinessTips #RemoteWork

---

## Posting Strategy
Thời gian tốt nhất: Thứ Hai hoặc Thứ Tư, 11 AM - 1 PM hoặc 7 PM - 9 PM EST
Định dạng: 1080x1080 px (square)
Font: Đậm, độ tương phản cao
Màu sắc: Màu thương hiệu với khả năng đọc cao

## Engagement Tactics
1. Trả lời bình luận yêu cầu chi tiết hack cụ thể
2. Lưu trữ trả lời làm highlights ("Productivity")
3. Repost dưới dạng Reels với voiceover
4. Tạo phiên bản PDF có thể tải xuống (liên kết trong tiểu sử)

## Visual Design
Tạo slide bằng:
/ckm:design Instagram carousel slides, productivity theme, 7 slides

Style: Minimalist, bold text, consistent color scheme
Template: Title + 1-2 bullets per slide
Branding: Logo trên mỗi slide

## Performance Predictions
Reach dự kiến: 3,500-5,500 tài khoản
Saves dự kiến: 200-350 (nội dung rất có giá trị để lưu)
Shares dự kiến: 80-120
Engagement rate: 8-12%

Saved: assets/posts/instagram/251229-productivity-hacks-carousel.md
```

## Workflow Integration

### Multi-Platform Campaign
```bash
# Tạo nội dung cho tất cả nền tảng
/ckm:social twitter thread "Thông báo ra mắt sản phẩm"
/ckm:social linkedin post "Thông báo ra mắt sản phẩm"
/ckm:social instagram carousel "Phân tích các tính năng sản phẩm"

# Tạo hình ảnh
/ckm:design Twitter post graphic
/ckm:design LinkedIn post graphic
/ckm:design Instagram carousel slides

# Theo dõi hiệu suất
/ckm:analyze engagement
```

### Content Repurposing
```bash
# Bắt đầu với dạng dài
/ckm:content blog "Hướng dẫn năng suất hoàn chỉnh"

# Tái sử dụng cho mạng xã hội
/ckm:social twitter thread "Những điểm chính từ hướng dẫn năng suất"
/ckm:social linkedin article "Tóm tắt hướng dẫn năng suất"
/ckm:social instagram carousel "Top 7 productivity tips"
```

## Related Commands

- [/ckm:content](/docs/marketing/commands/content) - Nội dung dạng dài
- [/ckm:design](/docs/marketing/commands/design) - Đồ họa mạng xã hội
- [/ckm:campaign](/docs/marketing/commands/campaign) - Chiến dịch mạng xã hội
- [/ckm:analyze](/docs/marketing/commands/analyze) - Phân tích mạng xã hội

## Related Agents

- [social-media-manager](/docs/marketing/agents/social-media-manager) - Chiến lược nền tảng
- [content-creator](/docs/marketing/agents/content-creator) - Tạo nội dung
- [copywriter](/docs/marketing/agents/copywriter) - Hooks hấp dẫn

## Skills Activated

- **social-media**: Thực hành tốt nhất trên nền tảng
- **creativity**: Các kiểu hình ảnh riêng cho nền tảng
- **assets-organizing**: Quản lý tệp

---

**Dừng cuộn. Bắt đầu đăng.** Nội dung mạng xã hội được tăng cường bởi AI mà tham gia.
