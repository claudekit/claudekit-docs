---
title: "/scout"
description: "Fast, token-efficient codebase search với parallel agent spawning tìm relevant files cho implementation tasks"
section: marketing
category: commands
order: 16
published: true
---

> Tìm relevant files nhanh với parallel search agents

## Bắt Đầu Nhanh

```bash
/scout find campaign-related components
```

**Điều gì sẽ xảy ra** (dưới 30 giây):
1. Spawn 3 parallel scout agents
2. Chia codebase một cách thông minh
3. Mỗi agent tìm kiếm assigned directories
4. Report findings tới main agent
5. Tạo consolidated report

**Kết Quả**: `plans/reports/scout-251229-{slug}.md`

## Cú Pháp

```bash
/scout [user-prompt] [scale]
```

### Đối Số

| Đối Số | Mô Tả | Default |
|----------|-------------|---------|
| `user-prompt` | What to search for | Required |
| `scale` | Number of parallel agents | 3 |

## Ví Dụ

### Ví Dụ 1: Find Campaign Files

**Đầu vào**:
```bash
/scout find campaign-related files
```

**Quá trình**:
```markdown
Spawning 3 scout agents in parallel...

Agent 1: Searching app/, components/
Agent 2: Searching lib/, utils/
Agent 3: Searching types/, api/

[30 giây sau]

✓ Scout report generated

Found 12 campaign-related files:
- lib/campaign/manager.ts
- lib/campaign/scheduler.ts
- components/CampaignCard.tsx
- components/CampaignList.tsx
- app/api/campaigns/route.ts
- types/campaign.ts
[... 6 more files]

Saved: plans/reports/scout-251229-2145-campaign-files.md
```

### Ví Dụ 2: Scale Up Search

**Đầu vào**:
```bash
/scout authentication implementation 5
```

**Spawn 5 agents** cho faster, more thorough search trong large codebases.

## Tích Hợp Quy Trình Làm Việc

```bash
# Trước planning
/scout find email-related code
/plan implement email automation

# Trước implementation
/cook add payment feature
# (internally runs /scout automatically)

# Manual search
/scout find all database models
```

## Performance

- **Speed**: 30 giây avg (vs 2-3 min manual)
- **Parallelization**: 3-10 agents
- **Timeout**: 3 min per agent
- **Token efficiency**: Minimal context usage

## Lệnh Liên Quan

- [/plan](/docs/marketing/commands/plan) - Uses /scout internally
- [/cook](/docs/marketing/commands/cook) - Uses /scout internally
- [/code](/docs/marketing/commands/code) - Implement after scouting

---

**Find files fast.** Parallel search agents map your codebase.
