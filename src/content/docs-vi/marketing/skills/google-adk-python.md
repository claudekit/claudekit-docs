---
lang: vi
title: "ckm:google-adk-python"
description: "Xây dựng AI agent với Google ADK Python đa agent"
section: marketing
kit: marketing
category: skills
order: 81
---

# `ckm:google-adk-python`

> Xây dựng hệ thống multi-agent marketing mạnh mẽ với Google Agent Development Kit (ADK) Python.

## Skill Này Làm Gì

**Thách thức**: Marketing automation phức tạp đòi hỏi nhiều agents chuyên biệt làm việc phối hợp — research, content creation, SEO optimization, email scheduling — mà một agent đơn lẻ không thể xử lý hiệu quả.

**Giải pháp**: Skill google-adk-python hướng dẫn xây dựng multi-agent marketing systems với Google ADK, bao gồm agent orchestration, tool integration, memory management và deployment.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi cần xây dựng AI agent pipelines hoặc automation workflows phức tạp.

**Tường minh**: Kích hoạt qua prompt:
```
Activate google-adk-python skill to build [agent/workflow]
```

## Tính Năng

### 1. Cài Đặt Google ADK

```bash
# Cài đặt ADK
pip install google-adk

# Hoặc dùng uv (nhanh hơn)
uv add google-adk

# Verify
python -m google.adk --version
```

**Cấu hình credentials**:
```bash
# Google Gemini API
export GOOGLE_API_KEY=your_gemini_api_key

# Hoặc Google Cloud credentials
gcloud auth application-default login
```

### 2. Single Agent Cơ Bản

```python
from google.adk.agents import Agent
from google.adk.tools import Tool

# Định nghĩa tools
def analyze_campaign_performance(campaign_id: str) -> dict:
    """Phân tích hiệu suất của một campaign cụ thể."""
    # Kết nối với Google Analytics API
    return {
        "impressions": 50000,
        "clicks": 1500,
        "ctr": 0.03,
        "conversions": 45,
        "roas": 3.2
    }

def generate_optimization_recommendations(data: dict) -> str:
    """Tạo khuyến nghị tối ưu dựa trên dữ liệu."""
    # Logic analysis
    return "Tăng budget cho ad set có ROAS > 3.0"

# Tạo agent
campaign_analyst = Agent(
    name="campaign_analyst",
    model="gemini-2.0-flash",
    description="Phân tích và tối ưu hiệu suất campaigns.",
    instruction="""Bạn là marketing analyst chuyên nghiệp.
    Phân tích dữ liệu campaign và đưa ra khuyến nghị cụ thể,
    dựa trên dữ liệu thực tế.""",
    tools=[
        analyze_campaign_performance,
        generate_optimization_recommendations
    ]
)
```

### 3. Multi-Agent Marketing System

```python
from google.adk.agents import Agent, SequentialAgent, ParallelAgent

# Agent 1: Research
research_agent = Agent(
    name="market_researcher",
    model="gemini-2.0-flash",
    description="Nghiên cứu thị trường và đối thủ.",
    tools=[search_web, analyze_competitor, get_market_data]
)

# Agent 2: Content Creator
content_agent = Agent(
    name="content_creator",
    model="gemini-2.0-flash",
    description="Tạo nội dung marketing dựa trên research.",
    tools=[generate_blog_post, create_email_copy, write_ad_copy]
)

# Agent 3: SEO Optimizer
seo_agent = Agent(
    name="seo_optimizer",
    model="gemini-2.0-flash",
    description="Tối ưu content cho search engines.",
    tools=[check_keywords, optimize_meta, analyze_readability]
)

# Orchestrate: Research → Content (parallel: blog + email) → SEO
pipeline = SequentialAgent(
    name="content_pipeline",
    agents=[
        research_agent,
        ParallelAgent(
            name="content_creation",
            agents=[content_agent, seo_agent]
        )
    ]
)
```

### 4. Agent Memory và Session State

```python
from google.adk.memory import InMemoryMemoryService
from google.adk.sessions import Session

# Session với persistent memory
session = Session(
    memory_service=InMemoryMemoryService(),
    state={
        "brand_voice": "professional, friendly",
        "target_audience": "B2B SaaS founders",
        "campaign_goals": ["awareness", "trial_signup"]
    }
)

# Agent có access vào shared state
campaign_agent = Agent(
    name="campaign_manager",
    instruction="""
    Khi tạo nội dung, luôn tuân theo brand voice: {brand_voice}
    Target audience: {target_audience}
    Campaign goals: {campaign_goals}
    """,
    tools=[...]
)

# Chạy với session
async def run_campaign():
    result = await campaign_agent.run_async(
        "Tạo email campaign cho tháng này",
        session=session
    )
    return result
```

### 5. Tool Integration Với Marketing APIs

```python
from google.adk.tools import Tool
import httpx

# Tích hợp với Google Analytics 4
async def get_ga4_metrics(
    property_id: str,
    date_range: str = "30daysAgo:today",
    metrics: list[str] = ["sessions", "conversions"]
) -> dict:
    """Lấy metrics từ Google Analytics 4."""
    # GA4 Data API call
    async with httpx.AsyncClient() as client:
        response = await client.post(
            f"https://analyticsdata.googleapis.com/v1beta/properties/{property_id}:runReport",
            headers={"Authorization": f"Bearer {get_access_token()}"},
            json={
                "dateRanges": [{"startDate": date_range.split(":")[0],
                               "endDate": date_range.split(":")[1]}],
                "metrics": [{"name": m} for m in metrics]
            }
        )
    return response.json()

# Wrap thành ADK tool
ga4_tool = Tool(
    func=get_ga4_metrics,
    name="get_ga4_metrics",
    description="Lấy dữ liệu analytics từ Google Analytics 4"
)
```

## Điều Kiện Tiên Quyết

- Python 3.10+
- Google Gemini API key hoặc Google Cloud project
- `pip install google-adk google-generativeai`

## Cấu Hình

**Project structure**:
```
marketing-agents/
├── agents/
│   ├── research_agent.py
│   ├── content_agent.py
│   └── seo_agent.py
├── tools/
│   ├── analytics_tools.py
│   ├── seo_tools.py
│   └── email_tools.py
├── pipelines/
│   └── content_pipeline.py
├── .env
└── main.py
```

**`.env` file**:
```bash
GOOGLE_API_KEY=your_gemini_api_key
GA4_PROPERTY_ID=your_property_id
```

## Thực Hành Tốt Nhất

**1. Agents Focused, Không Phải Generalist**
Mỗi agent làm tốt một việc. Research agent không nên viết content.

**2. Structured Output Giữa Agents**
Định nghĩa Pydantic models cho data passed giữa agents để đảm bảo type safety.

**3. Logging Và Observability**
Log mọi agent interaction để debug và improve performance.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Weekly Content Pipeline
**Tình huống**: Tự động tạo content marketing hàng tuần.

**Pipeline**:
1. Research Agent: Tìm trending topics trong ngành
2. Content Agent: Viết 2 blog posts + 5 social posts
3. SEO Agent: Optimize keywords và meta
4. Review Agent: QA trước khi schedule

### Trường Hợp 2: Campaign Performance Monitor
**Tình huống**: Agent tự động monitor và alert khi campaign có vấn đề.

**Pipeline**:
1. Analytics Agent: Pull metrics mỗi 6 giờ
2. Analysis Agent: So sánh với benchmarks, phát hiện anomalies
3. Alert Agent: Slack notification khi ROAS giảm > 20%

## Xử Lý Sự Cố

**Vấn đề**: Agent bị stuck trong loop
**Giải pháp**: Set `max_iterations` limit. Log mỗi iteration để debug.

**Vấn đề**: Tool calls thất bại không nhất quán
**Giải pháp**: Implement retry với exponential backoff trong tool functions.

## Skill Liên Quan

- [Context Engineering](/vi/docs/marketing/skills/context-engineering) - Multi-agent architecture
- [Backend Development](/vi/docs/marketing/skills/backend-development) - Tools backend
- [Analytics](/vi/docs/marketing/skills/analytics) - GA4 integration

## Lệnh Liên Quan

- `/ckm:google-adk-python` - Xây dựng AI agents
- `/ckm:context-engineering` - Tối ưu agent architecture
- `/ckm:backend-development` - API tools cho agents
