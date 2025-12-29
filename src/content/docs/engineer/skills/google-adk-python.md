---
title: Google ADK Python
description: Build, evaluate, and deploy AI agents with Google's Agent Development Kit - code-first toolkit for tool integration and multi-agent orchestration
section: engineer
category: skills
order: 2
published: true
---

# Google ADK Python

> Build production-ready AI agents with tool integration, multi-agent orchestration, and workflow automation using Google's Agent Development Kit.

## What This Skill Does

Google ADK (Agent Development Kit) Python is an open-source, code-first framework for building AI agents that integrate tools, coordinate multiple specialized agents, and execute predictable workflows. Unlike chat-based prototypes, ADK treats agent development like traditional software engineering with version control, testing, and systematic evaluation.

This skill enables you to create LLM-powered agents with Google Search, Code Execution, or custom tools, compose hierarchical multi-agent systems with coordinator patterns, and deploy agents to Vertex AI, Cloud Run, or custom infrastructure.

## Prerequisites

**Installation**:
```bash
# Stable release (recommended)
pip install google-adk

# Development version (latest features)
pip install git+https://github.com/google/adk-python.git@main
```

**API Access**:
- Google AI Studio API key for Gemini models (https://aistudio.google.com/apikey)
- OR Google Cloud Project with Vertex AI enabled

**Optional**:
- Docker for Cloud Run deployment
- Google Cloud SDK for Vertex AI deployment

## Activation

This skill activates automatically when:
- User mentions Google ADK, agent development, or multi-agent systems
- User needs tool integration with LLMs
- User wants to build workflow automation with AI
- User discusses agent orchestration or coordination

Manual activation:
```bash
/google-adk-python
```

## Core Concepts

### Agent Types

**LlmAgent**: LLM-powered agents with dynamic decision-making
- Define with name, model, instruction, description, and tools
- Supports sub-agents for delegation and coordination
- Intelligent routing based on context and user input
- Best for: Unpredictable inputs requiring adaptive behavior

**Workflow Agents**: Structured orchestration patterns
- **SequentialAgent**: Execute agents in defined order (pipeline)
- **ParallelAgent**: Run multiple agents concurrently (fan-out)
- **LoopAgent**: Repeat execution with iteration logic
- Best for: Predictable multi-step processes

**BaseAgent**: Foundation for custom agent implementations
- Extend to create specialized agent types
- Implement custom execution logic

### Tools Ecosystem

Pre-built tools:
- `google_search`: Web search integration
- `code_execution`: Execute Python code safely

Custom tools:
- Convert Python functions to tools with `Tool.from_function()`
- Integrate OpenAPI specifications
- Add human-in-the-loop confirmation flows

## Capabilities

### Single Agent with Tools

Create agents that use tools to accomplish tasks:

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

# Run the agent
response = agent.run("What are the latest AI trends in 2025?")
print(response)
```

**When to use**: Simple tasks where single agent with tools is sufficient (research, data fetching, computation).

### Multi-Agent Coordination

Build hierarchical systems with specialized agents:

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

# Coordinator agent delegates to specialists
coordinator = LlmAgent(
    name="Coordinator",
    model="gemini-2.5-flash",
    instruction="Delegate research tasks to Researcher, then send findings to Writer for content creation.",
    sub_agents=[researcher, writer]
)

# Coordinator intelligently routes work
result = coordinator.run("Create a blog post about renewable energy trends")
```

**When to use**: Complex tasks requiring different expertise domains, separation of concerns, or reusable specialized agents.

### Custom Tool Creation

Extend agents with domain-specific tools:

```python
from google.adk.tools import Tool

def calculate_roi(revenue: float, cost: float) -> float:
    """Calculate return on investment percentage."""
    if cost == 0:
        return 0.0
    return ((revenue - cost) / cost) * 100

# Convert function to tool
roi_tool = Tool.from_function(calculate_roi)

agent = LlmAgent(
    name="business_analyst",
    model="gemini-2.5-flash",
    instruction="Analyze business metrics and provide ROI calculations.",
    tools=[roi_tool]
)

response = agent.run("What's the ROI if we spent $50,000 and earned $85,000?")
```

**When to use**: Domain-specific calculations, API integrations, database queries, or any Python-executable logic.

### Sequential Workflow

Execute agents in defined order for multi-step pipelines:

```python
from google.adk.agents import SequentialAgent

# Define pipeline stages
workflow = SequentialAgent(
    name="research_workflow",
    agents=[researcher, summarizer, writer]
)

# Each agent processes output from previous agent
result = workflow.run("Research AI ethics and write a summary")
```

**When to use**: Predictable multi-step processes like ETL pipelines, content creation workflows, or data processing chains.

### Parallel Execution

Run multiple agents concurrently for speed:

```python
from google.adk.agents import ParallelAgent

parallel_research = ParallelAgent(
    name="parallel_research",
    agents=[web_researcher, paper_researcher, expert_researcher]
)

# All agents run simultaneously, results combined
results = parallel_research.run("Gather comprehensive data on quantum computing")
```

**When to use**: Independent tasks that can run concurrently, aggregating data from multiple sources, or reducing latency.

### Human-in-the-Loop

Require approval before tool execution for safety:

```python
from google.adk.tools import google_search

agent = LlmAgent(
    name="careful_searcher",
    model="gemini-2.5-flash",
    tools=[google_search],
    tool_confirmation=True  # User must approve each search
)

# Agent pauses for confirmation before executing tools
response = agent.run("Search for company financial data")
# User sees: "Approve search for 'company financial data'? (y/n)"
```

**When to use**: Sensitive operations, financial transactions, data deletion, or any action requiring human oversight.

## Deployment Options

### Cloud Run

Containerize and deploy to Google Cloud Run:

```bash
# Create Dockerfile
cat > Dockerfile << 'EOF'
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "agent_server.py"]
EOF

# Build and deploy
docker build -t my-agent .
gcloud run deploy my-agent --image my-agent --region us-central1
```

### Vertex AI Agent Engine

Deploy to managed infrastructure:

```python
# ADK integrates with Vertex AI for:
# - Scalable agent hosting
# - Monitoring and logging
# - Version management
# - Production-ready infrastructure
```

### Custom Infrastructure

Run locally or on custom servers:

```python
# Full control over deployment
# Run as Python script, FastAPI server, or scheduled job
if __name__ == "__main__":
    agent = LlmAgent(...)
    result = agent.run("Task description")
```

## Model Support

**Optimized for Gemini**:
- gemini-2.5-flash (fast, cost-effective)
- gemini-2.5-pro (high-quality reasoning)
- gemini-1.5-flash
- gemini-1.5-pro

**Model Agnostic**: Supports other LLM providers through standard APIs.

## Examples

### Example 1: Research Assistant

Build agent that researches topics and generates reports:

```python
from google.adk.agents import LlmAgent, SequentialAgent
from google.adk.tools import google_search

# Stage 1: Research
researcher = LlmAgent(
    name="Researcher",
    model="gemini-2.5-flash",
    instruction="Search for comprehensive information on the topic. Find recent articles, statistics, and expert opinions.",
    tools=[google_search]
)

# Stage 2: Summarize
summarizer = LlmAgent(
    name="Summarizer",
    model="gemini-2.5-flash",
    instruction="Create a concise 300-word summary highlighting key findings and trends."
)

# Stage 3: Report writer
writer = LlmAgent(
    name="Writer",
    model="gemini-2.5-flash",
    instruction="Transform summary into professional report with sections: Executive Summary, Key Findings, Recommendations."
)

# Combine into workflow
research_pipeline = SequentialAgent(
    name="research_pipeline",
    agents=[researcher, summarizer, writer]
)

report = research_pipeline.run("AI agent frameworks in enterprise software")
```

### Example 2: Customer Support Router

Route customer queries to specialized agents:

```python
# Specialized agents
billing_agent = LlmAgent(
    name="BillingAgent",
    instruction="Handle billing questions, refunds, and payment issues.",
    tools=[check_invoice_tool, process_refund_tool]
)

technical_agent = LlmAgent(
    name="TechnicalAgent",
    instruction="Troubleshoot technical issues and provide step-by-step solutions.",
    tools=[check_system_status_tool, create_ticket_tool]
)

# Router coordinates
support_router = LlmAgent(
    name="SupportRouter",
    instruction="Route customer queries to appropriate specialist. Escalate if needed.",
    sub_agents=[billing_agent, technical_agent]
)

response = support_router.run("I was charged twice for my subscription")
# Router sends to billing_agent automatically
```

## Best Practices

**Code-first philosophy**: Define agents in Python for version control, testing, and CI/CD integration.

**Modular design**: Create specialized agents for specific domains, compose into larger systems.

**Start simple**: Build single agent first, then expand to multi-agent when complexity justifies it.

**Write tests**: Treat agents like code - create test cases, validate outputs, measure performance.

**Implement safety**: Use tool confirmation for sensitive operations, add input validation.

**Monitor in production**: Track agent performance, tool usage, error rates, and latency.

**Optimize model selection**: Use flash models for speed/cost, pro models for complex reasoning.

## Troubleshooting

**Problem**: Agent doesn't use tools when expected.

**Solution**: Improve instruction clarity. Example: "Use google_search to find current information" instead of "Research the topic."

---

**Problem**: Multi-agent coordination fails.

**Solution**: Ensure coordinator instruction explicitly mentions sub-agent names and delegation strategy.

---

**Problem**: Deployment to Cloud Run fails.

**Solution**: Check environment variables (GEMINI_API_KEY), ensure all dependencies in requirements.txt, verify health check endpoint.

---

**Problem**: High latency in production.

**Solution**: Use ParallelAgent for independent tasks, cache results where possible, switch to gemini-2.5-flash from pro.

## Related Skills

- [AI Multimodal](/docs/engineer/skills/ai-multimodal) - Process images, audio, video with Gemini
- [Backend Development](/docs/engineer/skills/backend-development) - Deploy agents as APIs
- [DevOps](/docs/engineer/skills/devops) - Container orchestration and deployment

## Resources

- GitHub: https://github.com/google/adk-python
- Documentation: https://google.github.io/adk-docs/
- llms.txt: https://raw.githubusercontent.com/google/adk-python/refs/heads/main/llms.txt
