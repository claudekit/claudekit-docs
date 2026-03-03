---
title: "ck:web-testing"
description: "Testing web toàn diện với Playwright, Vitest, k6 cho E2E, unit, integration, load, security, visual và accessibility testing"
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

Testing web toàn diện bao gồm unit, integration, E2E, load, security, visual regression và accessibility testing với các công cụ tiêu chuẩn ngành.

## Skill Này Làm Gì

Skill Web Testing cung cấp các pattern testing và infrastructure hoàn chỉnh cho ứng dụng web hiện đại. Nó bao gồm toàn bộ testing pyramid từ unit tests đến load testing, với kiến thức chuyên biệt về Playwright, Vitest, k6, axe-core và Lighthouse.

Hãy nghĩ đây như chuyên gia testing của bạn—biết chiến lược testing nào phù hợp với kiến trúc của bạn, cách ngăn chặn flakiness, tối ưu CI/CD pipelines và đảm bảo app của bạn đáp ứng tiêu chuẩn hiệu suất và accessibility.

## Khả Năng Cốt Lõi

- **Unit/Integration Testing**: Vitest, browser mode, AAA pattern
- **E2E Testing**: Playwright fixtures, sharding, selectors
- **Component Testing**: Các pattern React/Vue/Angular (sẵn sàng production)
- **Load Testing**: Các pattern và scenarios k6
- **Hiệu Suất**: Core Web Vitals, Lighthouse CI
- **Visual Regression**: So sánh screenshot
- **Accessibility**: WCAG, tích hợp axe-core
- **Security**: Checklist OWASP Top 10
- **Test Infrastructure**: Quản lý data, CI/CD workflows

## Bắt Đầu Nhanh

```bash
npx vitest run                    # Unit tests
npx playwright test               # E2E tests
npx playwright test --ui          # E2E với UI
k6 run load-test.js               # Load tests
npx @axe-core/cli https://example.com  # Accessibility
npx lighthouse https://example.com     # Hiệu suất
```

## Chiến Lược Testing (Chọn Model Của Bạn)

| Model | Cấu Trúc | Phù Hợp Nhất |
|-------|-----------|----------|
| Pyramid | Unit 70% > Integration 20% > E2E 10% | Monoliths |
| Trophy | Integration-heavy | Modern SPAs |
| Honeycomb | Contract-centric | Microservices |

## Cách Dùng

Kích hoạt khi đề cập đến testing, E2E, Playwright, Vitest, flakiness, Core Web Vitals, mobile gestures, cross-browser hoặc accessibility testing.

## Ví Dụ Prompt

- "Thiết lập Playwright cho E2E testing"
- "Viết unit tests cho component này với Vitest"
- "Tạo load test scenario với k6"
- "Kiểm tra accessibility với axe-core"
- "Sửa flaky tests trong login flow"
- "Tối ưu Core Web Vitals trong CI"
- "Test mobile gestures với Playwright"
- "Chạy cross-browser tests trên Chrome, Firefox, Safari"

## Tài Liệu Tham Chiếu

### Core Testing
- Unit/Integration testing với Vitest
- E2E testing với Playwright
- Các pattern component testing
- Playwright component testing (sẵn sàng production)

### Test Infrastructure
- Quản lý test data (factories, fixtures, seeding)
- Database testing (Testcontainers, transactions)
- CI/CD workflows (GitHub Actions, sharding)
- Contract testing (Pact, MSW)

### Cross-Browser & Mobile
- Checklist cross-browser
- Mobile gesture testing (touch, swipe, orientation)

### Hiệu Suất & Chất Lượng
- Core Web Vitals (LCP/CLS/INP, Lighthouse CI)
- Visual regression (so sánh screenshot)
- Giảm thiểu test flakiness

### Accessibility & Security
- Accessibility testing (WCAG, axe-core)
- Security testing (OWASP Top 10)
- Security checklists (auth, API, headers)

### API & Load
- API testing (Supertest, GraphQL)
- Load testing với k6

## Scripts

**Khởi Tạo Playwright Project:**
```bash
node ./scripts/init-playwright.js [--ct] [--dir <path>]
```
Tạo thiết lập Playwright best-practice: config, fixtures, ví dụ tests.

**Phân Tích Kết Quả Test:**
```bash
node ./scripts/analyze-test-results.js \
  --playwright test-results/results.json \
  --vitest coverage/vitest.json \
  --output markdown
```
Phân tích kết quả Playwright/Vitest/JUnit thành tóm tắt thống nhất.

## Tích Hợp CI/CD

```yaml
jobs:
  test:
    steps:
      - run: npm run test:unit      # Gate 1: Fast fail
      - run: npm run test:e2e       # Gate 2: Sau khi unit pass
      - run: npm run test:a11y      # Accessibility
      - run: npx lhci autorun       # Hiệu suất
```

## Điều Gì Làm Skill Này Khác Biệt

Skill Web Testing cung cấp các pattern đã được kiểm chứng từ các app production—giải quyết các vấn đề thực tế như test flakiness, CI pipelines chậm và tương thích cross-browser. Không phải lý thuyết, mà là infrastructure đã được chứng minh.

## Skill Liên Quan

- [Agent Browser](/vi/docs/engineer/skills/agent-browser) - Cho browser automation tối ưu AI
- [React Best Practices](/vi/docs/engineer/skills/react-best-practices) - Cho tối ưu hiệu suất
- [Web Design Guidelines](/vi/docs/engineer/skills/web-design-guidelines) - Cho tiêu chuẩn accessibility
