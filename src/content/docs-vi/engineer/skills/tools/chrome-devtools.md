---
title: Chrome DevTools
description: Tự động hóa browsers, chụp screenshots, phân tích performance và debug với Puppeteer CLI scripts cho browser automation và testing
section: engineer
kit: engineer
category: skills
order: 21
lang: vi
---

Cần tự động hóa browser interactions, chụp screenshots của web pages, hoặc debug JavaScript issues? Đó chính xác là những gì Chrome DevTools skill làm sử dụng Puppeteer.

## Skill Này Làm Gì

Chrome DevTools cung cấp browser automation qua Puppeteer CLI scripts với persistent sessions. Tất cả scripts output structured JSON để dễ dàng parse. Bạn có thể điều hướng đến URLs, chụp screenshots với automatic compression, click elements, fill forms, execute JavaScript trong page context, monitor console messages và errors, track network requests và responses, và đo lường Core Web Vitals.

Skill nhấn mạnh persistent browser sessions: browser tiếp tục chạy qua các lần thực thi script, bảo toàn state như logged-in sessions và cookies. Scripts disconnect nhưng để browser chạy cho script tiếp theo reuse, giúp multi-step automation workflows hiệu quả.

Hãy nghĩ về nó như programmable browser của bạn. Khi bạn cần test cách web app render, tự động hóa form submissions, capture screenshots cho documentation, debug console errors, hoặc phân tích network performance, các scripts này xử lý nó.

## Prerequisites

Bạn cần:

- Node.js 18 hoặc cao hơn
- Skill directory (hoặc project-scope `.claude/skills/chrome-devtools/` hoặc user-scope `~/.claude/skills/chrome-devtools/`)
- Cho Linux/WSL: Additional Chrome dependencies (skill bao gồm installer script)

## Installation

Điều hướng đến scripts directory và install dependencies:

```bash
# Detect skill location (project-scope ưu tiên)
SKILL_DIR=""
if [ -d ".claude/skills/chrome-devtools/scripts" ]; then
  SKILL_DIR=".claude/skills/chrome-devtools/scripts"
elif [ -d "$HOME/.claude/skills/chrome-devtools/scripts" ]; then
  SKILL_DIR="$HOME/.claude/skills/chrome-devtools/scripts"
fi

# Install dependencies
cd "$SKILL_DIR"
npm install  # Installs puppeteer, sharp, debug, yargs

# Linux/WSL only: Install Chrome system libraries
./install-deps.sh
```

Test installation:

```bash
node navigate.js --url https://example.com
# Output: {"success": true, "url": "...", "title": "..."}
```

## Browser Running Mode

Skill tự động detect OS của bạn và launch browser phù hợp:

- **Linux, WSL, CI environments**: Headless mode (không có visible window)
- **macOS, Windows**: Headed mode (visible browser window để debug)

Bạn có thể override với `--headless false` để xem browser window.

## Session Persistence

Browser state persist qua các lần thực thi script qua WebSocket endpoint file (`.browser-session.json`).

**Default behavior**: Scripts disconnect nhưng giữ browser chạy để reuse.

```bash
# Script đầu tiên: launches browser, navigates, disconnects (browser stays running)
node navigate.js --url https://example.com/login

# Các scripts tiếp theo: connect to existing browser, reuse page state
node fill.js --selector "#email" --value "user@example.com"
node fill.js --selector "#password" --value "secret"
node click.js --selector "button[type=submit]"

# Close browser khi xong
node navigate.js --url about:blank --close true
```

**Session management**:

- No flag: Giữ browser chạy (default)
- `--close true`: Close browser và clear session

Persistence này mạnh mẽ cho multi-step workflows như logging in, điều hướng qua site và chụp screenshots.

## Available Scripts

Tất cả scripts trong `.claude/skills/chrome-devtools/scripts/`:

| Script | Purpose |
|--------|---------|
| `navigate.js` | Điều hướng đến URLs |
| `screenshot.js` | Capture screenshots (auto-compress >5MB) |
| `click.js` | Click elements |
| `fill.js` | Fill form fields |
| `evaluate.js` | Execute JavaScript trong page context |
| `snapshot.js` | Extract interactive elements (JSON) |
| `aria-snapshot.js` | Lấy ARIA accessibility tree (YAML với refs) |
| `select-ref.js` | Tương tác với elements by ref từ ARIA snapshot |
| `console.js` | Monitor console messages/errors |
| `network.js` | Track HTTP requests/responses |
| `performance.js` | Đo lường Core Web Vitals |
| `ws-debug.js` | Debug WebSocket connections (basic) |
| `ws-full-debug.js` | Debug WebSocket với full events/frames |

## Khả Năng Cốt Lõi

### Navigation

```bash
# Điều hướng đến URL
node navigate.js --url https://example.com

# Điều hướng và close browser
node navigate.js --url https://example.com --close true

# Điều hướng với timeout
node navigate.js --url https://slow-site.com --timeout 60000

# Wait cho specific load state
node navigate.js --url https://example.com --wait-until networkidle2
```

### Screenshots

```bash
# Basic screenshot
node screenshot.js --url https://example.com --output ./screenshot.png

# Full page screenshot
node screenshot.js --url https://example.com --output ./full.png --full-page true

# Screenshot specific element
node screenshot.js --url https://example.com --selector ".main-content" --output ./element.png

# Screenshot trang hiện tại (without navigating)
node screenshot.js --output ./current.png
```

**Auto-Compression**: Screenshots trên 5MB tự động compressed sử dụng Sharp (nhanh hơn ImageMagick 4-5x):

```bash
# Default: compress nếu >5MB
node screenshot.js --url https://example.com --output ./screenshot.png

# Custom threshold (3MB)
node screenshot.js --url https://example.com --output ./screenshot.png --max-size 3

# Disable compression
node screenshot.js --url https://example.com --output ./screenshot.png --no-compress
```

Lưu screenshots trong `.claude/chrome-devtools/screenshots/` để tổ chức.

### Element Discovery

Khi bạn không biết cấu trúc trang, dùng ARIA snapshot để discover elements:

```bash
# Lấy ARIA snapshot (YAML format với semantic roles)
node aria-snapshot.js --url https://example.com

# Lưu vào file để phân tích
node aria-snapshot.js --url https://example.com --output ./.claude/chrome-devtools/snapshots/page.yaml
```

**Example YAML output**:

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
- `[checked]` - Checkbox/radio được selected
- `[disabled]` - Element inactive
- `[expanded]` - Accordion/dropdown đang open
- `/url:` - Link destination
- `/placeholder:` - Input placeholder text

**Tương tác by ref**:

```bash
# Click element với ref e5
node select-ref.js --ref e5 --action click

# Fill input với ref e10
node select-ref.js --ref e10 --action fill --value "search query"

# Lấy text content
node select-ref.js --ref e8 --action text

# Screenshot specific element
node select-ref.js --ref e1 --action screenshot --output ./logo.png
```

### Form Automation

```bash
# Fill input field
node fill.js --selector "#email" --value "user@example.com"

# Click button
node click.js --selector "button[type=submit]"

# Complete form workflow
node navigate.js --url https://example.com/login
node fill.js --selector "#username" --value "testuser"
node fill.js --selector "#password" --value "secret"
node click.js --selector "button[type=submit]"
node screenshot.js --output ./logged-in.png
```

## Real-World Examples

### Test Local HTML Files

**Quan trọng**: Không bao giờ dùng `file://` protocol. Luôn serve qua local server.

```bash
# Option 1: npx serve (recommended)
npx serve ./dist -p 3000 &
node navigate.js --url http://localhost:3000
node screenshot.js --output ./test.png

# Option 2: Python http.server
python -m http.server 3000 --directory ./dist &
node navigate.js --url http://localhost:3000
```

**Tại sao**: `file://` protocol chặn nhiều browser features (CORS, ES modules, fetch API, service workers).

### Automated Login Flow

```bash
# Điều hướng đến login page
node navigate.js --url https://app.example.com/login

# Fill credentials
node fill.js --selector "#email" --value "test@example.com"
node fill.js --selector "#password" --value "testpass123"

# Submit form
node click.js --selector "button[type=submit]"

# Wait cho navigation (implicit trong next script)
# Chụp screenshot của dashboard
node screenshot.js --output ./dashboard.png

# Close browser
node navigate.js --url about:blank --close true
```

## Best Practices

**Dùng Session Persistence**: Để browser chạy qua các scripts cho multi-step workflows.

**Close Browser When Done**: Dùng `--close true` trên script cuối cùng để dọn dẹp.

**Discover Elements First**: Dùng `aria-snapshot.js` cho unknown page structures thay vì đoán selectors.

**Store Outputs Organized**: Dùng timestamped session directories cho screenshots, logs và snapshots.

**Serve Local Files**: Không bao giờ dùng `file://` protocol. Luôn dùng local server.

**Test Incrementally**: Execute một script một lúc, verify output, sau đó proceed.

## Các Skills và Commands Liên Quan

Kết hợp Chrome DevTools với:

- [Frontend Design](/vi/docs/engineer/skills/frontend/frontend-design) - Chụp screenshots của implementations để so sánh
- [Frontend Development](/vi/docs/engineer/skills/frontend-development) - Test React applications của bạn
- [Media Processing](/vi/docs/engineer/skills/media-processing) - Tối ưu hóa captured screenshots với ImageMagick

## Nguyên Tắc Chính

Browser automation là về incremental, focused scripts output structured JSON. Dùng session persistence để duy trì state qua executions. Discover elements với ARIA snapshots trước khi tương tác. Test locally với proper servers. Store outputs organized by session.

Tự động hóa browsers theo cách đáng tin cậy: một script, một task, structured output, iterate cho đến khi xong.
