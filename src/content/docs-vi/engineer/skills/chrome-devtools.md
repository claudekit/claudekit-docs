---
title: "ck:chrome-devtools"
description: Tự động hóa trình duyệt, chụp screenshots, phân tích hiệu năng và debug với Puppeteer CLI scripts để tự động hóa và kiểm thử trình duyệt
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

Cần tự động hóa các tương tác trình duyệt, chụp screenshots của trang web, hay debug các vấn đề JavaScript? Đó chính xác là những gì Chrome DevTools skill làm bằng Puppeteer.

## Skill Này Làm Gì

Chrome DevTools cung cấp tự động hóa trình duyệt qua Puppeteer CLI scripts với persistent sessions. Tất cả scripts đều output JSON có cấu trúc để dễ parsing. Bạn có thể điều hướng đến URLs, chụp screenshots với nén tự động, click elements, điền forms, thực thi JavaScript trong page context, theo dõi console messages và errors, track network requests và responses, và đo Core Web Vitals.

Skill nhấn mạnh vào persistent browser sessions: trình duyệt tiếp tục chạy qua các lần thực thi script, bảo tồn state như các phiên đã đăng nhập và cookies. Scripts disconnect nhưng để trình duyệt tiếp tục chạy cho script tiếp theo tái sử dụng, giúp các automation workflows nhiều bước hiệu quả hơn.

Hãy nghĩ về nó như trình duyệt có thể lập trình của bạn. Khi cần kiểm thử web app render như thế nào, tự động hóa form submissions, chụp screenshots cho documentation, debug console errors, hay phân tích network performance, các scripts này xử lý được.

## Yêu Cầu Trước

Bạn cần:

- Node.js 18 trở lên
- Thư mục skill (project-scope `.claude/skills/chrome-devtools/` hoặc user-scope `~/.claude/skills/chrome-devtools/`)
- Trên Linux/WSL: Thêm Chrome dependencies (skill bao gồm installer script)

## Cài Đặt

Điều hướng đến thư mục scripts và cài đặt dependencies:

```bash
# Phát hiện vị trí skill (project-scope được ưu tiên)
SKILL_DIR=""
if [ -d ".claude/skills/chrome-devtools/scripts" ]; then
  SKILL_DIR=".claude/skills/chrome-devtools/scripts"
elif [ -d "$HOME/.claude/skills/chrome-devtools/scripts" ]; then
  SKILL_DIR="$HOME/.claude/skills/chrome-devtools/scripts"
fi

# Cài đặt dependencies
cd "$SKILL_DIR"
npm install  # Cài đặt puppeteer, sharp, debug, yargs

# Chỉ Linux/WSL: Cài đặt Chrome system libraries
./install-deps.sh
```

Kiểm tra cài đặt:

```bash
node navigate.js --url https://example.com
# Output: {"success": true, "url": "...", "title": "..."}
```

## Chế Độ Chạy Trình Duyệt

Skill tự động phát hiện OS và khởi động trình duyệt phù hợp:

- **Linux, WSL, CI environments**: Headless mode (không có cửa sổ hiển thị)
- **macOS, Windows**: Headed mode (cửa sổ trình duyệt hiển thị để debug)

Bạn có thể override với `--headless false` để thấy cửa sổ trình duyệt.

## Session Persistence

Trạng thái trình duyệt được duy trì qua các lần thực thi script qua WebSocket endpoint file (`.browser-session.json`).

**Hành vi mặc định**: Scripts disconnect nhưng giữ trình duyệt chạy để tái sử dụng.

```bash
# Script đầu tiên: khởi động trình duyệt, điều hướng, disconnect (trình duyệt vẫn chạy)
node navigate.js --url https://example.com/login

# Các scripts tiếp theo: kết nối đến trình duyệt hiện có, tái sử dụng page state
node fill.js --selector "#email" --value "user@example.com"
node fill.js --selector "#password" --value "secret"
node click.js --selector "button[type=submit]"

# Đóng trình duyệt khi xong
node navigate.js --url about:blank --close true
```

**Quản lý session**:

- Không có flag: Giữ trình duyệt chạy (mặc định)
- `--close true`: Đóng trình duyệt và xóa session

Tính năng persistence này rất mạnh cho các workflows nhiều bước như đăng nhập, điều hướng qua site và chụp screenshots.

## Các Scripts Có Sẵn

Tất cả scripts đều ở `.claude/skills/chrome-devtools/scripts/`:

| Script | Mục Đích |
|--------|----------|
| `navigate.js` | Điều hướng đến URLs |
| `screenshot.js` | Chụp screenshots (tự nén nếu >5MB) |
| `click.js` | Click elements |
| `fill.js` | Điền form fields |
| `evaluate.js` | Thực thi JavaScript trong page context |
| `snapshot.js` | Trích xuất interactive elements (JSON) |
| `aria-snapshot.js` | Lấy ARIA accessibility tree (YAML với refs) |
| `select-ref.js` | Tương tác với elements theo ref từ ARIA snapshot |
| `console.js` | Theo dõi console messages/errors |
| `network.js` | Track HTTP requests/responses |
| `performance.js` | Đo Core Web Vitals |
| `ws-debug.js` | Debug WebSocket connections (cơ bản) |
| `ws-full-debug.js` | Debug WebSocket với full events/frames |

## Khả Năng Cốt Lõi

### Điều Hướng

```bash
# Điều hướng đến URL
node navigate.js --url https://example.com

# Điều hướng và đóng trình duyệt
node navigate.js --url https://example.com --close true

# Điều hướng với timeout
node navigate.js --url https://slow-site.com --timeout 60000

# Chờ trạng thái load cụ thể
node navigate.js --url https://example.com --wait-until networkidle2
```

### Screenshots

```bash
# Screenshot cơ bản
node screenshot.js --url https://example.com --output ./screenshot.png

# Full page screenshot
node screenshot.js --url https://example.com --output ./full.png --full-page true

# Screenshot element cụ thể
node screenshot.js --url https://example.com --selector ".main-content" --output ./element.png

# Screenshot trang hiện tại (không điều hướng)
node screenshot.js --output ./current.png
```

**Tự Nén**: Screenshots trên 5MB được tự động nén bằng Sharp (nhanh hơn ImageMagick 4-5 lần):

```bash
# Mặc định: nén nếu >5MB
node screenshot.js --url https://example.com --output ./screenshot.png

# Ngưỡng tùy chỉnh (3MB)
node screenshot.js --url https://example.com --output ./screenshot.png --max-size 3

# Tắt nén
node screenshot.js --url https://example.com --output ./screenshot.png --no-compress
```

Lưu screenshots trong `.claude/chrome-devtools/screenshots/` để tổ chức.

### Khám Phá Elements

Khi bạn không biết cấu trúc trang, dùng ARIA snapshot để khám phá elements:

```bash
# Lấy ARIA snapshot (định dạng YAML với semantic roles)
node aria-snapshot.js --url https://example.com

# Lưu vào file để phân tích
node aria-snapshot.js --url https://example.com --output ./.claude/chrome-devtools/snapshots/page.yaml
```

**Ví dụ YAML output**:

```yaml
- banner:
  - link "Hacker News" [ref=e1]
    /url: https://news.ycombinator.com
  - navigation:
    - link "new" [ref=e2]
    - link "past" [ref=e3]
- main:
  - list:
    - listitem:
      - link "Show HN: My new project" [ref=e8]
      - text: "128 points by user 3 hours ago"
```

**Giải thích ARIA notation**:

- `[ref=eN]` - Stable identifier cho interactive elements
- `[checked]` - Checkbox/radio đã được chọn
- `[disabled]` - Element không hoạt động
- `[expanded]` - Accordion/dropdown đang mở
- `/url:` - Link destination
- `/placeholder:` - Input placeholder text

**Tương tác theo ref**:

```bash
# Click element với ref e5
node select-ref.js --ref e5 --action click

# Điền input với ref e10
node select-ref.js --ref e10 --action fill --value "search query"

# Lấy text content
node select-ref.js --ref e8 --action text

# Screenshot element cụ thể
node select-ref.js --ref e1 --action screenshot --output ./logo.png
```

### Tự Động Hóa Form

```bash
# Điền input field
node fill.js --selector "#email" --value "user@example.com"

# Click button
node click.js --selector "button[type=submit]"

# Workflow form đầy đủ
node navigate.js --url https://example.com/login
node fill.js --selector "#username" --value "testuser"
node fill.js --selector "#password" --value "secret"
node click.js --selector "button[type=submit]"
node screenshot.js --output ./logged-in.png
```

### Thực Thi JavaScript

```bash
# Thực thi JavaScript trong page context
node evaluate.js --url https://example.com --script "document.title"

# Trích xuất dữ liệu
node evaluate.js --url https://example.com --script "
  Array.from(document.querySelectorAll('.item')).map(el => ({
    title: el.querySelector('h2')?.textContent,
    link: el.querySelector('a')?.href
  }))
" | jq '.result'

# Chờ async operation
node evaluate.js --script "await new Promise(r => setTimeout(r, 2000))"
```

### Theo Dõi Console

```bash
# Capture tất cả console messages trong 10 giây
node console.js --url https://example.com --duration 10000

# Lọc theo type
node console.js --url https://example.com --types error,warn --duration 5000

# Lưu để phân tích
SESSION="$(date +%Y%m%d-%H%M%S)"
mkdir -p .claude/chrome-devtools/logs/$SESSION
node console.js --url https://example.com --duration 10000 > .claude/chrome-devtools/logs/$SESSION/console.json

# Xem errors
jq '.messages[] | select(.type=="error")' .claude/chrome-devtools/logs/$SESSION/console.json
```

### Theo Dõi Network

```bash
# Track HTTP requests
node network.js --url https://example.com

# Tìm failed requests
node network.js --url https://example.com | jq '.requests[] | select(.response.status >= 400)'

# Phân tích API calls
node network.js --url https://app.example.com | jq '.requests[] | select(.url | contains("/api/"))'
```

### Phân Tích Hiệu Năng

```bash
# Đo Core Web Vitals
node performance.js --url https://example.com | jq '.vitals'

# Output bao gồm:
# - FCP (First Contentful Paint)
# - LCP (Largest Contentful Paint)
# - CLS (Cumulative Layout Shift)
# - TTFB (Time to First Byte)
```

## Ví Dụ Thực Tế

### Kiểm Thử File HTML Local

**Quan trọng**: Không bao giờ dùng protocol `file://`. Luôn phục vụ qua local server.

```bash
# Option 1: npx serve (được khuyến nghị)
npx serve ./dist -p 3000 &
node navigate.js --url http://localhost:3000
node screenshot.js --output ./test.png

# Option 2: Python http.server
python -m http.server 3000 --directory ./dist &
node navigate.js --url http://localhost:3000
```

**Lý do**: Protocol `file://` chặn nhiều browser features (CORS, ES modules, fetch API, service workers).

### Automated Login Flow

```bash
# Điều hướng đến login page
node navigate.js --url https://app.example.com/login

# Điền credentials
node fill.js --selector "#email" --value "test@example.com"
node fill.js --selector "#password" --value "testpass123"

# Submit form
node click.js --selector "button[type=submit]"

# Chụp screenshot của dashboard
node screenshot.js --output ./dashboard.png

# Đóng trình duyệt
node navigate.js --url about:blank --close true
```

### Debug Cấu Trúc Trang Chưa Biết

```bash
# Lấy ARIA snapshot để khám phá elements
node aria-snapshot.js --url https://example.com

# Xác định target (vd: [ref=e5] cho một button)

# Tương tác theo ref
node select-ref.js --ref e5 --action click

# Xác minh kết quả
node screenshot.js --output ./result.png
```

### Capture Error Logs

```bash
# Tạo session directory
SESSION="$(date +%Y%m%d-%H%M%S)"
mkdir -p .claude/chrome-devtools/logs/$SESSION

# Capture console errors
node console.js --url https://broken-site.com --types error,pageerror --duration 5000 > .claude/chrome-devtools/logs/$SESSION/console.json

# Capture network failures
node network.js --url https://broken-site.com > .claude/chrome-devtools/logs/$SESSION/network.json

# Phân tích
jq '.messages[] | select(.type=="error") | .text' .claude/chrome-devtools/logs/$SESSION/console.json
```

### Performance Audit

```bash
# Đo hiệu năng
node performance.js --url https://example.com | jq '.vitals'

# Ví dụ output:
# {
#   "FCP": 1200,
#   "LCP": 2400,
#   "CLS": 0.05,
#   "TTFB": 300
# }
```

### Web Scraping

```bash
# Điều hướng đến trang
node navigate.js --url https://news.ycombinator.com

# Trích xuất dữ liệu
node evaluate.js --script "
  Array.from(document.querySelectorAll('.athing')).slice(0, 10).map(el => ({
    title: el.querySelector('.titleline a')?.textContent,
    link: el.querySelector('.titleline a')?.href,
    score: el.nextElementSibling?.querySelector('.score')?.textContent
  }))
" | jq '.result'
```

## Viết Custom Test Scripts

Với automation phức tạp, viết custom scripts vào `.claude/chrome-devtools/tmp/`:

```bash
# Tạo tmp directory
mkdir -p .claude/chrome-devtools/tmp

# Viết test script
cat > .claude/chrome-devtools/tmp/login-test.js << 'EOF'
import { getBrowser, getPage, disconnectBrowser, outputJSON } from '../scripts/lib/browser.js';

async function loginTest() {
  const browser = await getBrowser();
  const page = await getPage(browser);

  await page.goto('https://example.com/login');
  await page.type('#email', 'user@example.com');
  await page.type('#password', 'secret');
  await page.click('button[type=submit]');
  await page.waitForNavigation();

  outputJSON({
    success: true,
    url: page.url(),
    title: await page.title()
  });

  await disconnectBrowser();
}

loginTest();
EOF

# Chạy test
node .claude/chrome-devtools/tmp/login-test.js
```

**Nguyên tắc chính**:

- Single-purpose: một script, một task
- Luôn gọi `disconnectBrowser()` ở cuối (giữ trình duyệt chạy)
- Chỉ dùng `closeBrowser()` khi kết thúc session hoàn toàn
- Output JSON để dễ parsing
- Chỉ dùng plain JavaScript trong `page.evaluate()` callbacks

## Workflow Loop

Browser automation tuân theo vòng lặp iterative:

1. **Execute** script tập trung cho một task
2. **Observe** JSON output
3. **Assess** trạng thái hoàn thành
4. **Decide** hành động tiếp theo
5. **Repeat** cho đến khi xong

Phương pháp incremental này đáng tin cậy hơn cố gắng làm mọi thứ trong một script.

## Troubleshooting

### Thiếu Images Trong Screenshots

Nếu images không xuất hiện trong screenshots, chúng có thể đang chờ animation triggers:

```bash
# Scroll element vào tầm nhìn
node evaluate.js --script "document.querySelector('.lazy-image').scrollIntoView()"

# Chờ animation
node evaluate.js --script "await new Promise(r => setTimeout(r, 1000))"

# Chụp screenshot
node screenshot.js --output ./result.png
```

Với Intersection Observer animations, scroll qua trang:

```bash
# Scroll xuống cuối
node evaluate.js --script "window.scrollTo(0, document.body.scrollHeight)"

# Chờ
node evaluate.js --script "await new Promise(r => setTimeout(r, 1500))"

# Scroll lên đầu
node evaluate.js --script "window.scrollTo(0, 0)"

# Full page screenshot
node screenshot.js --output ./full-loaded.png --full-page true
```

### Các Lỗi Thường Gặp

| Lỗi | Giải Pháp |
|-----|-----------|
| `Cannot find package 'puppeteer'` | Chạy `npm install` trong scripts directory |
| `libnss3.so` missing (Linux) | Chạy `./install-deps.sh` |
| Element không tìm thấy | Dùng `aria-snapshot.js` để tìm selector/ref đúng |
| Script bị treo | Dùng `--timeout 60000` hoặc `--wait-until load` |
| Screenshot >5MB | Tự nén; dùng `--max-size 3` để thấp hơn |
| Session stale | Xóa `.browser-session.json` và thử lại |

## Best Practices

**Dùng Session Persistence**: Để trình duyệt tiếp tục chạy qua các scripts cho workflows nhiều bước.

**Đóng Trình Duyệt Khi Xong**: Dùng `--close true` trên script cuối để dọn dẹp.

**Khám Phá Elements Trước**: Dùng `aria-snapshot.js` cho các cấu trúc trang chưa biết thay vì đoán selectors.

**Lưu Outputs Có Tổ Chức**: Dùng timestamped session directories cho screenshots, logs và snapshots.

**Phục Vụ Files Local**: Không bao giờ dùng protocol `file://`. Luôn dùng local server.

**Test Incrementally**: Thực thi từng script, xác minh output, rồi tiếp tục.

## Script Options

Tất cả scripts đều hỗ trợ các options chung:

- `--headless false` - Hiển thị cửa sổ trình duyệt (hữu ích để debug)
- `--close true` - Đóng trình duyệt hoàn toàn (mặc định: giữ chạy)
- `--timeout 30000` - Đặt timeout tính bằng milliseconds
- `--wait-until networkidle2` - Chiến lược chờ (load, domcontentloaded, networkidle0, networkidle2)

## Tài Liệu Tham Khảo

Skill bao gồm các reference files chi tiết tại `../claudekit-engineer/.claude/skills/chrome-devtools/references/`:

- `cdp-domains.md` - Chrome DevTools Protocol domains
- `puppeteer-reference.md` - Puppeteer API patterns
- `performance-guide.md` - Core Web Vitals optimization
- `scripts/README.md` - Script options chi tiết

## Các Skills Và Commands Liên Quan

Kết hợp Chrome DevTools với:

- [Frontend Design](/vi/docs/engineer/skills/frontend-design) - Chụp screenshots của implementations để so sánh
- [Frontend Development](/vi/docs/engineer/skills/frontend-development) - Kiểm thử React applications của bạn
- [Media Processing](/vi/docs/engineer/skills/media-processing) - Tối ưu screenshots đã capture với ImageMagick

## Nguyên Tắc Chính

Browser automation là về các scripts incremental, tập trung output JSON có cấu trúc. Dùng session persistence để duy trì state qua các lần thực thi. Khám phá elements với ARIA snapshots trước khi tương tác. Kiểm thử locally với proper servers. Lưu outputs có tổ chức theo session.

Tự động hóa trình duyệt theo cách đáng tin cậy: một script, một task, output có cấu trúc, lặp lại cho đến khi xong.
