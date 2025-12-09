# ClaudeKit - Docs (Full)

---

## Getting Started

### Method 1: Manual Setup

1. Copy all directories and files of `claudekit-engineer` repo to your project:
   - .claude/*
   - docs/*
   - plans/*
   - CLAUDE.md
2. ClaudeKit utilized [Human MCP](https://www.npmjs.com/package/@goonnguyen/human-mcp) to analyze images and videos since Gemini models have better vision capabilities. But Anthropic already released [**Agent Skills**](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) which is much better for context engineering, so we already converted all tools of Human MCP to Agent Skills.
   **Notes:** Gemini API have a pretty generous free requests limit at the moment.
   - Go to [Google AI Studio](https://aistudio.google.com) and grab your API Key
   - Copy `.claude/skills/.env.example` to `.claude/skills/.env` and paste the key into the `GEMINI_API_KEY` environment variable
3. Start Claude Code in your working project: `claude` (or `claude --dangerously-skip-permissions`)
4. Run command: `/docs:init` to trigger CC scan and create specs for the whole project.You will see some markdown files generated in `docs` directory, such as “codebase-summary.md”, “code-standards.md”, “system-architecture.md”,...)
5. Now your project is ready to start development, explore the commands below.

### Method 2: ClaudeKit CLI

#### Installation

```bash
npm install -g claudekit-cli
bun add -g claudekit-cli
ck --version
```

#### Create a new project

```bash
# Interactive mode
ck new

# With options
ck new --dir my-project --kit engineer

# Specific version
ck new --kit engineer --version v1.0.0
```

#### Update Existing Project

```bash
# Interactive mode
ck init

# With options
ck init --kit engineer

# Specific version
ck init --kit engineer --version v1.0.0

# Global mode - use platform-specific user configuration
ck init --global
ck init -g --kit engineer
```

#### Authentication

The CLI requires a **GitHub Personal Access Token (PAT)** to download releases from private repositories (`claudekit-engineer` and `claudekit-marketing`). The authentication flow follows a multi-tier fallback:

1. GitHub CLI: Uses `gh auth token` if GitHub CLI is installed and authenticated
2. Environment Variables: Checks `GITHUB_TOKEN` or `GH_TOKEN`
3. OS Keychain: Retrieves stored token from system keychain
4. User Prompt: Prompts for token input and offers to save it securely

**Creating a Personal Access Token**

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope (for private repositories)
3. Copy the token

**Setting Token via Environment Variable**

```bash
export GITHUB_TOKEN=ghp_your_token_here
```

Now you're good to go!

---

## CLAUDE.md

[quan trọng] bạn không nên điều chỉnh file này, vì nó sẽ bị ghi đè mỗi lần update ClaudeKit (`ck init`). Nếu bạn muốn điều chỉnh file này mà không bị ghi đè, lúc cập nhật hãy thêm flag như sau: `ck init --exclude CLAUDE.md`

Tôi đã đọc tất cả các tài liệu về Context Engineering, và thử nghiệm tất cả chúng, tôi đã học được rằng cách làm của Manus là cực kỳ hiệu quả: Use File System As Context, đó là lý do tôi khuyên bạn giữ mọi thứ như hiện tại: chỉ để vài dòng trong `CLAUDE.md` và link nó tới những files chi tiết cụ thể hơn nằm trong thư mục `.claude/workflows/` và `docs/`
Điều này tốt cho Claude Code vì CLAUDE.md sẽ không ngốn quá nhiều tokens ban đầu khi được load lên trong dự án, chỉ khi thực hiện nhiệm vụ, nó mới tìm đến những hướng dẫn cụ thể hơn (ví dụ: `development-rules.md`)

---

## Workflows

`.claude/workflows/*`
Đây là nơi chứa những hướng dẫn chi tiết cho Claude Code và các subagents, nó đảm bảo hệ thống phối hợp ăn ý với nhau và bám sát theo những quy định khi phát triển:

`development-rules.md`
Chứa các hướng dẫn phát triển toàn diện bao gồm tiêu chuẩn chất lượng code, quy tắc điều phối subagent, quy trình pre-commit/push, và các nguyên tắc triển khai nhằm đảm bảo tính nhất quán và dễ bảo trì cho toàn bộ dự án.

`documentation-management.md`
Nơi chứa các quy chuẩn về viết tài liệu cho dự án, những tài liệu này giúp cho Claude Code không bị ảo giác và tạo ra những đoạn code dư thừa.

`orchestration-protocol.md`
Nơi đây chứa những cách để điều phối agents, ví dụ như: khởi tạo các subagents lên làm việc song song với nhau, hoặc khởi tạo các subagents tuần tự từng loại 1.

`primary-workflow.md`
Nơi chứa quy trình phát triển từ code implementation -> testing -> code review -> integration -> debugging -> report.

---

## Agents

Số lượng: **14 subagents**

1. brainstormer
2. code-reviewer
3. copywriter
4. database-admin
5. debugger
6. docs-manager
7. git-manager
8. journal-writer
9. planner
10. project-manager
11. researcher
12. scout
13. tester
14. ui-ux-designer

**Vì sao chỉ có 14 subagents mà không phải hơn?**

- Tôi đã tối ưu các subagents này trong workflow công việc hàng ngày, để đảm bảo chúng có thể phát huy hiệu quả tối đa nhất.
- Đương nhiên điều này cũng có một nhược điểm, đó là một số agents có thể hiệu quả đối với tôi và chưa hiệu quả lắm đối với quy trình làm việc của bạn, nếu bạn cảm thấy điều này, hãy liên hệ với tôi và chúng ta sẽ cùng tìm ra cách giải quyết nhé.

Thật ra bạn không cần phải tìm hiểu về các agents này đâu, vì chúng vốn đã được tối ưu và cân chỉnh workflow theo kinh nghiệm thực tiễn rồi, đồng thời các agents sẽ được **ClaudeKit** điều phối một cách tự động dựa theo các quy trình có sẵn.

Nhưng nếu muốn, hãy cứ ghé qua các file markdown trong `.claude/agents/` để tìm hiểu thêm nhé!

> Ps. If you're looking for new subagent, you can always request at: https://discord.gg/x7SwTSf3wc

---

## Commands

Đây là những commands mà mình dùng thường xuyên nhất trong bộ kit này:

`/bootstrap [prompt]`
Khi bắt đầu dự án mới, bạn có thể sử dụng lệ này, nó được xây dựng với spec-driven và test-driven, nên sẽ bắt đầu đặt từng câu hỏi một cho bạn để nó có thể hiểu trọn vẹn về những gì bạn đang muốn nó xây dựng, sau khi đã nắm rõ yêu cầu, nó sẽ bắt đầu với các "Researcher" agent để tìm hiểu trên internet và cung cấp những thông tin cần thiết nhất cho "Planner" agent để lập kế hoạch thực thi. Sau đó nó sẽ bắt đầu triển khai và kiểm thử cho tới khi mọi thứ hoạt động trơn tru.

`/bootstrap:auto [prompt]`
Tương tự như đối với lệnh trên, lệnh này dùng để khởi tạo dự án, nhưng lần này, bạn sẽ tin tưởng Claude Code hoàn toàn, nó sẽ dựa vào prompt của bạn để bắt đầu nghiên cứu, lập kế hoạch và triển khai cho tới khi hoàn tất. Vì thế để sử dụng lệnh này hiệu quả, bạn nên chuẩn bị prompt thật chi tiết.

`/cook [prompt]`
Công dụng chính: phát triển tính năng mới.

`/fix:fast [prompt]`
Fix minor bugs (fast mode), nó sẽ bỏ qua việc scout code base và lên kế hoạch, sau đó bắt tay vào làm luôn và kiểm thử lại sau khi đã hoàn tất.
[quan trọng] Chỉ nên dùng command này để sửa những lỗi nhỏ, những cập nhật bé, vì điều này giúp tiết kiệm thời gian hơn. Nếu bạn thấy Claude Code bắt đầu phạm sai lầm, hãy sử dụng command tiếp theo: `/fix:hard`

`/fix:hard [prompt]`
Fix hard bugs, khi bạn không chắc về lỗi muốn sửa, hãy sử dụng command này, và mô tả về tình trạng hiện tại bạn gặp phải, nó sẽ sử dụng nhiều subagents scout qua toàn bộ code base, sau đó phân tích và tìm kiếm nguyên nhân gốc rễ, đồng thời tìm giải pháp trên internet hay đọc qua các tài liệu để đưa giải pháp triệt để. Cuối cùng là lập một kế hoạch tỉ mỉ về việc làm thế nào để giải quyết.

`/fix:ci [github-ci-url]`
Thông thường ở mỗi dự án làm việc với AI, chúng ta NÊN có quy trình testing qua CI, cụ thể là Github Actions, một môi trường cloud để chạy lại toàn bộ test suite để kiểm tra toàn bộ tính năng của dự án, nếu quy trình này thất bại, bạn chỉ cần copy URL của workflow và đưa vào câu lệnh này, nó sẽ tự động đọc nội dung logs và tìm cách sửa.
**[lưu ý]** bạn sẽ cần cài đặt `gh` package trên máy của mình, nếu bạn chưa có, đừng lo, lúc gọi câu lệnh này thì Claude Code sẽ detect tự động và hướng dẫn bạn từng bước để setup.

`/fix:logs`
Khi sử dụng command này, toàn bộ development logs sẽ được piped ra `logs.txt`, và CC sẽ đọc trực tiếp file này mà không cần bạn phải copy lỗi paste vào cho nó bằng tay. Khá hữu dụng trong việc phát triển hàng ngày.

`/fix:test`
Claude Code sẽ khởi động các agents lên để thực hiện kiểm thử toàn bộ tests trong dự án, nếu phát hiện lỗi, nó sẽ lên kế hoạch và fix chúng cho đến khi không còn lỗi nào nữa.

`/fix:ui [prompt]`
Câu lệnh này được dùng để sửa lỗi về giao diện (UI), bạn có thể mô tả lỗi gặp phải hay đơn giản. là quăng vào một ảnh chụp màn hình hay video quay lại lỗi và nó sẽ giúp bạn điều tra nguyên nhân, sau đó sửa lỗi và thực hiện kiểm thử.

`/fix:types`
Thỉnh thoảng khi làm việc với các dự án TypeScript, bạn sẽ gặp các lỗi về “type”, lúc này chỉ cần gõ câu lệnh này, Claude Code sẽ kiểm tra xem lỗi type đó là gì và giúp bạn sửa chúng.

`/docs:init`
Nếu bạn muốn sử dụng ClaudeKit với dự án có sẵn đây sẽ là câu lệnh mà bạn nên bắt đầu. Câu lệnh này sẽ bắt các tác nhân phụ đọc toàn bộ code base của bạn và tạo ra những file specs cho dự án như: codebase-summary, project-overview-pdr, code-standards, system-architecture,... những file này sẽ giúp cho Claude Code hiểu code base tốt hơn, không bị ảo giác và tránh tạo ra những đoạn code trùng lặp trong giai đoạn phát triển sau này.

`/docs:update`
Trong quá trình phát triển mặc dù đã có những quy định bắt Claude Code bám sát theo những tài liệu specs của dự án, nhưng đôi khi nó cũng quên việc cập nhật tài liệu khi phát triển tính năng mới hoặc refactor (LLM vẫn còn nhiều thiếu sót), đó là lý do tôi tạo ra lệnh này, hãy sử dụng nó để cập nhật các tài liệu cần thiết cho dự án.

`/docs:summarize`
Lần này dùng để đọc toàn bộ tài liệu phát triển của dự án sau đó tóm tắt lại để chúng ta có thể hiểu rõ hơn. Lệnh này khá hữu dụng để onboard thành viên mới trong đội ngũ phát triển.

`/plan`
Khi bạn phát triển tính năng mới, việc lập kế hoạch là 1 điều cần thiết. Với lệnh này, Claude Code sẽ bắt đầu triệu hồi những tác nhân phụ để bắt đầu tìm kiếm trên internet những thông tin liên quan, sau đó báo cáo lại cho tác nhân lập kế hoạch và soạn ra 1 bản kế hoạch chi tiết về việc thực hiện, bạn nên xem xét kỹ file kế hoạch nằm trong thư mục "plans/" và tiếp tục prompt cho AI để điều chỉnh theo mong muốn.

`/brainstorm`
Đôi khi bạn muốn phát triển 1 tính năng nào đó nhưng lại không biết bắt đầu từ đâu thì hãy sử dụng câu lệnh này. Với khả năng hiểu về bối cảnh của dự án, lệnh này sẽ bắt đầu thảo luận với bạn 1 cách chân thành nhất về tính khả thi của tính năng và cách thức nó đề xuất để có thể phát triển tính năng đó 1 cách hiệu quả nhất. Nếu cần thiết nó có thể triệu hồi những tác nhân phụ như "Researcher" để tìm kiếm trên internet những best practices và tư vấn cho bạn. Nó được tối ưu để trở nên thành thật và thẳng thắn, nên nó sẽ luôn bám sát các quy tắc "YAGNI - KISS - DRY" giúp cho kế hoạch thực hiện trở nên thực tế và dễ bảo trì sau này.

`/watzup`
Bạn trở lại với dự án sau 1 vài tuần, có lẽ lúc này bạn sẽ không nhớ được gần nhất mình đã làm những gì hay trong Code base này đã có những gì, đây là lúc câu lệnh này phát huy tác dụng. Nó sẽ scan toàn bộ source code, thậm chí cả những lịch sử commit gần đây nhất, và báo cáo lại cho bạn 1 bản tóm tắt để bạn có thể nắm rõ tình hình hiện tại.

`/git:cm`
Stage all files và commit changes với meaningful commit message theo chuẩn conventional commit.

`/git:cp`
Stage all files, commit changes với meaningful commit message theo chuẩn conventional commit và push lên origin.

`/git:pr [to-branch] [from-branch]`
Tạo Github pull request với nội dung chi tiết về những thay đổi. Mặc định nó sẽ tạo PR đến nhánh mặc định (main) nếu như bạn không điền arguments.

**Ngoài ra còn có các commands khác như:**

`/ask`
Đơn giản thôi, với câu lệnh này bạn có thể hỏi bất cứ thứ gì về code base hiện tại, nó sẽ trả lời 1 cách ngắn gọn và thẳng thắn nhất.

`/plan:ci [github-ci-url]`
Đây là câu lệnh giúp bạn phân tích những lỗi xảy ra trong quá trình CI, chỉ cần cung cấp đường dẫn đến Github Actions workflow chứa thông báo lỗi, sau đó Claude sẽ lập kế hoạch chi tiết để sửa chúng.

`/plan:two`
Tương tự như câu lệnh lập kế hoạch nhưng lần này nó sẽ đưa ra 2 phương án tốt nhất để bạn lựa chọn.

`/plan:cro`
Nếu bạn đang phát triển 1 sản phẩm dịch vụ phần mềm, câu lệnh này sẽ giúp bạn phân tích toàn bộ mã nguồn của dự án và đưa ra kế hoạch để cải thiện tỷ lệ chuyển đổi thành đơn hàng.

`/debug [issues]`
Sử dụng câu lệnh này cùng với mô tả về lỗi mà bạn gặp phải, nó sẽ triệu hồi tác nhân phụ "Debugger" để tìm ra nguyên nhân gốc rễ và báo cáo lại cho bạn. Bạn cũng có thể cung cấp cho nó ảnh chụp màn hình hoặc video quay lại để nó có thể hiểu rõ hơn về bối cảnh.

`/journal`
Nếu bạn là 1 nhà phát triển độc lập việc xây dựng trước công chúng luôn là điều cần thiết, nhưng đôi khi bạn chỉ tập trung vào việc phát triển mà quên mất hôm đó bạn đã làm những gì hay gặp những thử thách như thế nào, hãy sử dụng câu lệnh này, nó sẽ giúp bạn viết ra nhật ký về những gì nó và bạn đã làm gần đây nhất, để bạn có thể sử dụng chúng trong việc đăng tải lên mạng xã hội hoặc viết blog.

`/scout [prompt] [amount]`
Đối với 1 code base quá lớn, câu lệnh này có thể triệu hồi hàng loạt các tác nhân chạy song song để rà soát mọi ngõ ngách của mã nguồn dự án và tìm ra thứ bạn đang tìm kiếm.

`/test`
Câu lệnh này sẽ khởi chạy toàn bộ test suite của dự án và báo cáo lại cho bạn về kết quả, nếu có lỗi xảy ra nó cũng sẽ đề xuất 1 vài hướng tiếp cận để sửa lỗi

`/design:3d`
Sử dụng câu lệnh này khi bạn muốn thực hiện 1 giao diện có những thành phần 3D (VD như Three.js), bởi vì nó được huấn luyện để tinh thông các kỹ năng về xử lý 3D.

`/design:describe [screenshot]`
Sử dụng câu lệnh này để trích xuất những thành phần và mô tả liên quan đến thiết kế của 1 ảnh chụp màn hình đầu vào.

`/design:fast`
Sử dụng câu lệnh này để triệu hồi tác nhân "ui-ux-designer" để thiết kế 1 thứ gì đó thật nhanh.

`/design:good`
Nếu bạn muốn tạo ra 1 thiết kế hoàn chỉnh và tinh tế hơn, bạn có thể sử dụng câu lệnh này. Bởi vì nó sẽ thực hiện việc lục tung internet để tìm ra những thiết kế xu hướng, học hỏi từ những bài học thực tiễn, sau đó mới bắt đầu tạo ra thiết kế giao diện.

`/design:screenshot [screenshots]`
Đây là câu lệnh được dùng để biến ảnh chụp màn hình thành giao diện (screenshot-to-code), nó sử dụng công nghệ nhận diện hình ảnh của Gemini nên có khả năng phân tích ảnh chụp màn hình 1 cách chính xác, từ đó giao diện được tạo ra giống đến 80 đến 90%. Đặc biệt: nó còn có thể sử dụng mô hình Gemini Nano Banana để tạo ra các hình ảnh sử dụng trong giao diện. Thật tuyệt vời phải không nào?

`/design:video`
Tương tự như câu lệnh biến ảnh chụp màn hình thành giao diện thì câu lệnh này biến video quay màn hình thành giao diện, với khả năng đọc hiểu video của mô hình Gemini, ClaudeKit có lẽ là công cụ duy nhất trên thị trường có khả năng này!

`/content:cro`
Sử dụng câu lệnh này để viết nội dung tăng tỷ lệ chuyển đổi cho dự án của bạn

`/content:enhance`
Sử dụng câu lệnh này để phân tích toàn bộ nội dung của dự án và đưa ra những phương án tối ưu giúp cho phần nội dung trở nên hay ho hơn

`/content:fast`
Sử dụng câu lệnh này để viết nội dung nhanh

`/content:good`
Sử dụng câu lệnh này để trị hồi những tác nhân phụ như Researcher và Planner để lập 1 kế hoạch chi tiết tạo ra nội dung thật tốt

`/integrate:polar`
Sử dụng câu lệnh này để tích hợp cổng thanh toán Polar vào dự án của bạn

`/integrate:sepay`
Sử dụng câu lệnh này để tích hợp cổng thanh toán SePay vào dự án của bạn
Lưu ý: đây chỉ là cổng thanh toán dành riêng cho thị trường Việt Nam.

---

## Skills

`skill-creator`
To create new skills

`canvas-design`
To generate canvas design

`document-skills`
To read and understand documents

`mcp-builder`
To build efficient MCP servers.

Đang cập nhật thêm!

---

## Use cases

### Bắt đầu dự án mới
*[coming soon]*

### Maintain dự án cũ
*[coming soon]*

### Screenshot to code
*[coming soon]*
