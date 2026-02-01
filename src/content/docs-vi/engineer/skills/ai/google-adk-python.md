---
title: Google ADK Python
description: Xây dựng, đánh giá và deploy AI agents với Google's Agent Development Kit - toolkit code-first cho tool integration và multi-agent orchestration
section: engineer
kit: engineer
category: skills
order: 2
published: true
lang: vi
---

# Google ADK Python

> Xây dựng production-ready AI agents với tool integration, multi-agent orchestration và workflow automation sử dụng Google's Agent Development Kit.

## Skill Này Làm Gì

Google ADK (Agent Development Kit) Python là framework mã nguồn mở, code-first để xây dựng AI agents tích hợp tools, điều phối nhiều specialized agents và thực thi workflows có thể dự đoán. Không giống chat-based prototypes, ADK xem agent development như software engineering truyền thống với version control, testing và đánh giá có hệ thống.

Skill này cho phép bạn tạo LLM-powered agents với Google Search, Code Execution hoặc custom tools, kết hợp hệ thống multi-agent theo thứ bậc với coordinator patterns và deploy agents lên Vertex AI, Cloud Run hoặc custom infrastructure.

## Yêu Cầu Trước

**Cài đặt**:
```bash
# Stable release (khuyến nghị)
pip install google-adk

# Development version (tính năng mới nhất)
pip install git+https://github.com/google/adk-python.git@main
```

**Truy cập API**:
- Google AI Studio API key cho Gemini models (https://aistudio.google.com/apikey)
- HOẶC Google Cloud Project với Vertex AI được bật

**Tùy chọn**:
- Docker cho Cloud Run deployment
- Google Cloud SDK cho Vertex AI deployment

## Kích Hoạt

Skill này tự động kích hoạt khi:
- User đề cập Google ADK, agent development hoặc multi-agent systems
- User cần tool integration với LLMs
- User muốn xây dựng workflow automation với AI
- User thảo luận về agent orchestration hoặc coordination

Kích hoạt thủ công:
```bash
/google-adk-python
```

## Khái Niệm Cốt Lõi

### Các Loại Agent

**LlmAgent**: LLM-powered agents với dynamic decision-making
- Định nghĩa với name, model, instruction, description và tools
- Hỗ trợ sub-agents cho delegation và coordination
- Intelligent routing dựa trên context và user input
- Tốt nhất cho: Inputs không thể dự đoán cần adaptive behavior

**Workflow Agents**: Structured orchestration patterns
- **SequentialAgent**: Thực thi agents theo thứ tự đã định (pipeline)
- **ParallelAgent**: Chạy nhiều agents đồng thời (fan-out)
- **LoopAgent**: Lặp lại execution với iteration logic
- Tốt nhất cho: Processes đa bước có thể dự đoán

**BaseAgent**: Foundation cho custom agent implementations
- Extend để tạo specialized agent types
- Implement custom execution logic

### Tools Ecosystem

Pre-built tools:
- `google_search`: Web search integration
- `code_execution`: Execute Python code safely

Custom tools:
- Chuyển Python functions thành tools với `Tool.from_function()`
- Tích hợp OpenAPI specifications
- Thêm human-in-the-loop confirmation flows

## Khả Năng

### Single Agent với Tools

Tạo agents sử dụng tools để hoàn thành tasks:

```python
from google.adk.agents import LlmAgent
from google.adk.tools import google_search

agent = LlmAgent(
    name="search_assistant",
    model="gemini-2.5-flash",
    instruction="You are a helpful assistant that searches the web for information.",
    description="Search assistant for web queries",
    tools=[google_search]
)

# Chạy agent
response = agent.run("What are the latest AI trends in 2025?")
print(response)
```

**Khi nào sử dụng**: Tasks đơn giản khi single agent với tools là đủ (research, data fetching, computation).

### Multi-Agent Coordination

Xây dựng hệ thống phân cấp với specialized agents:

```python
from google.adk.agents import LlmAgent
from google.adk.tools import google_search

# Specialized agents
researcher = LlmAgent(
    name="Researcher",
    model="gemini-2.5-flash",
    instruction="Research topics thoroughly using web search. Provide detailed summaries with sources.",
    tools=[google_search]
)

writer = LlmAgent(
    name="Writer",
    model="gemini-2.5-flash",
    instruction="Write clear, engaging content based on research. Use professional tone.",
)

# Coordinator agent delegates cho specialists
coordinator = LlmAgent(
    name="Coordinator",
    model="gemini-2.5-flash",
    instruction="Delegate research tasks to Researcher, then send findings to Writer for content creation.",
    sub_agents=[researcher, writer]
)

# Coordinator intelligently routes work
result = coordinator.run("Create a blog post about renewable energy trends")
```

**Khi nào sử dụng**: Tasks phức tạp cần different expertise domains, separation of concerns hoặc reusable specialized agents.

### Custom Tool Creation

Extend agents với domain-specific tools:

```python
from google.adk.tools import Tool

def calculate_roi(revenue: float, cost: float) -> float:
    """Calculate return on investment percentage."""
    if cost == 0:
        return 0.0
    return ((revenue - cost) / cost) * 100

# Convert function thành tool
roi_tool = Tool.from_function(calculate_roi)

agent = LlmAgent(
    name="business_analyst",
    model="gemini-2.5-flash",
    instruction="Analyze business metrics and provide ROI calculations.",
    tools=[roi_tool]
)

response = agent.run("What's the ROI if we spent $50,000 and earned $85,000?")
```

**Khi nào sử dụng**: Domain-specific calculations, API integrations, database queries hoặc bất kỳ Python-executable logic nào.

### Sequential Workflow

Thực thi agents theo thứ tự đã định cho multi-step pipelines:

```python
from google.adk.agents import SequentialAgent

# Định nghĩa pipeline stages
workflow = SequentialAgent(
    name="research_workflow",
    agents=[researcher, summarizer, writer]
)

# Mỗi agent xử lý output từ agent trước
result = workflow.run("Research AI ethics and write a summary")
```

**Khi nào sử dụng**: Processes đa bước có thể dự đoán như ETL pipelines, content creation workflows hoặc data processing chains.

### Parallel Execution

Chạy nhiều agents đồng thời để tăng tốc độ:

```python
from google.adk.agents import ParallelAgent

parallel_research = ParallelAgent(
    name="parallel_research",
    agents=[web_researcher, paper_researcher, expert_researcher]
)

# Tất cả agents chạy đồng thời, kết quả được kết hợp
results = parallel_research.run("Gather comprehensive data on quantum computing")
```

**Khi nào sử dụng**: Independent tasks có thể chạy đồng thời, aggregating data từ multiple sources hoặc reducing latency.

### Human-in-the-Loop

Yêu cầu approval trước khi tool execution để đảm bảo an toàn:

```python
from google.adk.tools import google_search

agent = LlmAgent(
    name="careful_searcher",
    model="gemini-2.5-flash",
    tools=[google_search],
    tool_confirmation=True  # User phải approve mỗi search
)

# Agent tạm dừng để confirmation trước khi executing tools
response = agent.run("Search for company financial data")
# User thấy: "Approve search for 'company financial data'? (y/n)"
```

**Khi nào sử dụng**: Sensitive operations, financial transactions, data deletion hoặc bất kỳ action nào cần human oversight.

## Tùy Chọn Deployment

### Cloud Run

Containerize và deploy lên Google Cloud Run:

```bash
# Tạo Dockerfile
cat > Dockerfile << 'EOF'
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "agent_server.py"]
EOF

# Build và deploy
docker build -t my-agent .
gcloud run deploy my-agent --image my-agent --region us-central1
```

### Vertex AI Agent Engine

Deploy lên managed infrastructure:

```python
# ADK tích hợp với Vertex AI cho:
# - Scalable agent hosting
# - Monitoring và logging
# - Version management
# - Production-ready infrastructure
```

### Custom Infrastructure

Chạy locally hoặc trên custom servers:

```python
# Full control over deployment
# Chạy như Python script, FastAPI server hoặc scheduled job
if __name__ == "__main__":
    agent = LlmAgent(...)
    result = agent.run("Task description")
```

## Hỗ Trợ Model

**Tối ưu cho Gemini**:
- gemini-2.5-flash (nhanh, cost-effective)
- gemini-2.5-pro (high-quality reasoning)
- gemini-1.5-flash
- gemini-1.5-pro

**Model Agnostic**: Hỗ trợ các LLM providers khác thông qua standard APIs.

## Best Practices

**Code-first philosophy**: Định nghĩa agents trong Python cho version control, testing và CI/CD integration.

**Modular design**: Tạo specialized agents cho specific domains, compose thành larger systems.

**Start simple**: Build single agent trước, sau đó expand sang multi-agent khi complexity justify nó.

**Write tests**: Treat agents như code - tạo test cases, validate outputs, đo performance.

**Implement safety**: Sử dụng tool confirmation cho sensitive operations, thêm input validation.

**Monitor in production**: Track agent performance, tool usage, error rates và latency.

**Optimize model selection**: Dùng flash models cho speed/cost, pro models cho complex reasoning.

## Troubleshooting

**Vấn đề**: Agent không sử dụng tools khi mong đợi.

**Giải pháp**: Cải thiện instruction clarity. Ví dụ: "Use google_search to find current information" thay vì "Research the topic."

---

**Vấn đề**: Multi-agent coordination fails.

**Giải pháp**: Đảm bảo coordinator instruction explicitly đề cập sub-agent names và delegation strategy.

---

**Vấn đề**: Deployment lên Cloud Run fails.

**Giải pháp**: Kiểm tra environment variables (GEMINI_API_KEY), đảm bảo tất cả dependencies trong requirements.txt, verify health check endpoint.

---

**Vấn đề**: High latency in production.

**Giải pháp**: Dùng ParallelAgent cho independent tasks, cache results where possible, chuyển sang gemini-2.5-flash từ pro.

## Skills Liên Quan

- [AI Multimodal](/vi/docs/engineer/skills/ai-multimodal) - Process images, audio, video với Gemini
- [Backend Development](/vi/docs/engineer/skills/backend-development) - Deploy agents như APIs
- [DevOps](/vi/docs/engineer/skills/devops) - Container orchestration và deployment

## Tài Nguyên

- GitHub: https://github.com/google/adk-python
- Documentation: https://google.github.io/adk-docs/
- llms.txt: https://raw.githubusercontent.com/google/adk-python/refs/heads/main/llms.txt
