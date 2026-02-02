---
title: Planning Skill
description: Chuyển đổi complex requirements thành executable technical plans thông qua research, codebase analysis và solution design
section: engineer
kit: engineer
category: skills/tools
order: 11
published: true
lang: vi
---

# Planning

Chuyển đổi vague requirements thành detailed, executable technical plans thông qua systematic research, codebase analysis và solution design.

## Nguyên Tắc Cốt Lõi

**YAGNI, KISS, DRY trước. Plans trước code. Brutal honesty hơn politeness.**

Trước bất kỳ implementation nào, một well-researched plan loại bỏ wasted effort, premature optimization và architectural regret. Skill này không viết code—nó tạo battle-tested blueprints mà junior developers có thể execute confidently.

## Khi Nào Sử Dụng

Luôn dùng cho:
- New feature implementations
- System architecture decisions
- Technical approach evaluation
- Complex refactoring projects

Đặc biệt khi:
- Requirements span multiple components
- Trade-offs cần formal comparison
- Codebase patterns phải được preserved
- Security/performance là critical

## Quy Trình

### 1. Initial Analysis
Đọc codebase docs, `development-rules.md`, existing patterns. Hiểu constraints trước khi propose solutions.

### 2. Research Phase
Spawn researcher agents cho unknowns. Investigate libraries, patterns, architectural approaches. Skip nếu reports đã provided.

### 3. Codebase Understanding
Dùng scout agents để analyze structure, dependencies, conventions. Skip nếu scout reports provided.

### 4. Solution Design
Synthesize research + codebase analysis. Design architecture với clear trade-offs. Provide 2-3 options khi không có clear winner.

### 5. Plan Documentation
Viết self-contained plans với:
- Context: Tại sao problem này tồn tại
- Options: Evaluated alternatives với pros/cons
- Recommendation: Chosen approach với rationale
- Phases: Step-by-step implementation breakdown
- Security/Performance: Addressed concerns
- Validation: Cách verify success

### 6. Review & Output
Đảm bảo plan actionable bởi junior developers. Bao gồm code snippets/pseudocode cho clarity. Store trong timestamped directory.

## Common Use Cases

### Implementing OAuth Authentication
**Ai**: Full-stack developer thêm social login
```
"Thêm Google OAuth vào Next.js app. Chúng ta dùng NextAuth nhưng chưa configure providers. Users nên sign in với Google, store profile trong PostgreSQL và maintain sessions securely."
```

### Migrating to Microservices
**Ai**: Backend architect refactoring monolith
```
"Plan migration của user management module từ Rails monolith sang standalone microservice. Current system xử lý auth, profiles và permissions. 50k active users. Zero downtime required."
```

### Real-Time Chat Feature
**Ai**: Product engineer thêm messaging
```
"Design real-time chat cho SaaS dashboard. Users cần 1-on-1 và group conversations với message history, typing indicators và read receipts. Tech stack: React + Node.js. Consider WebSockets vs SSE."
```

### Database Schema Refactoring
**Ai**: Data engineer tối ưu queries
```
"Refactor e-commerce product catalog schema. Current design có 12 joins cho category filtering, gây 3s page loads. 100k products, 5k categories. Must maintain backward compatibility during migration."
```

### CI/CD Pipeline Setup
**Ai**: DevOps engineer automating deployments
```
"Tạo CI/CD pipeline cho TypeScript monorepo với 6 apps (3 Next.js, 2 Express APIs, 1 React Native). Chúng ta dùng GitHub Actions. Cần automated testing, preview deployments và production releases."
```

## Pro Tips

**Không kích hoạt?** Nói: *"Use planning skill to create a detailed implementation plan with research and trade-off analysis."*

**Active Plan State**: Planning skill tạo `.claude/active-plan` để prevent version proliferation. Nó prompts "Continue with existing plan? [Y/n]" khi resuming work.

**Directory Structure**:
```
plans/20251208-1430-oauth-implementation/
├── research/          # Researcher agent reports
├── scout/             # Codebase analysis reports
├── reports/           # General findings
├── plan.md            # Main plan document
└── phase-01-setup.md  # Implementation phases
```

**Report Location**: Tất cả agents viết vào `{active-plan}/reports/` dùng format `{agent}-{YYMMDD}-{slug}.md`. Fallback: `plans/reports/`

**Quality Gates**:
- Thorough: Consider edge cases, security, performance
- Specific: Concrete steps, không vague guidance
- Maintainable: Align với codebase patterns
- Actionable: Junior devs có thể execute mà không guessing

## Skills Liên Quan

- [Sequential Thinking](/docs/engineer/skills/sequential-thinking) - Multi-step analysis
- [Problem Solving](/docs/engineer/skills/problem-solving) - Complexity resolution
- [Research](/docs/engineer/skills/research) - External investigation

## Key Takeaway

Planning tạo comprehensive, executable blueprints thông qua research, codebase analysis và trade-off evaluation. Plans là self-contained documents được lưu trong timestamped directories với active plan tracking để prevent version chaos.
