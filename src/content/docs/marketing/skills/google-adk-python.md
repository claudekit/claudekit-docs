---
title: "ckm:google-adk-python"
description: "Build AI agents and multi-agent systems with Google Agent Development Kit (ADK) Python framework for marketing automation."
section: marketing
category: skills
order: 81
---

> Build production-grade AI agent workflows with Google ADK Python — orchestrate multi-agent marketing systems that run autonomously.

## What This Skill Does

**The Challenge**: Marketing automation requires coordinated AI agents that research, write, analyze, and publish — but building reliable multi-agent orchestration from scratch is complex. Agents need memory, tool access, and robust error handling.

**The Solution**: Google ADK Python skill provides patterns for building marketing agent workflows using Google's Agent Development Kit. Covers single agents with tools, multi-agent orchestration, sequential pipelines, parallel execution, and integration with Google services (Gemini, Vertex AI, Search).

## Activation

**Implicit**: Activates when user requests AI agent workflows, multi-agent systems, or marketing automation with Python and Google services.

**Explicit**: Activate via prompt:
```
Activate google-adk-python skill to build [agent workflow] for [marketing task]
```

## Capabilities

### 1. Installation and Setup
```bash
pip install google-adk
export GOOGLE_API_KEY="your-key"  # or use Vertex AI auth
```

**Basic agent**:
```python
from google.adk.agents import Agent
from google.adk.tools import google_search

research_agent = Agent(
    name="market_researcher",
    model="gemini-2.0-flash",
    instruction="You are a marketing researcher. Research the given topic thoroughly.",
    tools=[google_search],
)

result = research_agent.run("Top B2B SaaS growth strategies Q1 2026")
```

### 2. Multi-Agent Orchestration
Chain agents with outputs flowing between them.

**Sequential pipeline**:
```python
from google.adk.agents import SequentialAgent

pipeline = SequentialAgent(
    name="content_pipeline",
    sub_agents=[research_agent, copywriting_agent, review_agent],
)

result = pipeline.run("Create a blog post about AI marketing tools")
```

**Parallel workers**:
```python
from google.adk.agents import ParallelAgent

parallel = ParallelAgent(
    name="competitor_analyzer",
    sub_agents=[analyze_competitor_a, analyze_competitor_b, analyze_competitor_c],
)
```

### 3. Custom Tools
Extend agents with marketing-specific tools.

**Custom tool pattern**:
```python
from google.adk.tools import FunctionTool

def fetch_ga4_metrics(property_id: str, date_range: str) -> dict:
    """Fetch Google Analytics metrics for the given property and date range."""
    # GA4 API call here
    return {"sessions": 12400, "conversions": 340}

ga4_tool = FunctionTool(func=fetch_ga4_metrics)
analytics_agent = Agent(tools=[ga4_tool, google_search])
```

### 4. Memory and State
Persist context across agent runs.

**Session memory**:
```python
from google.adk.memory import InMemoryStore

store = InMemoryStore()
agent = Agent(memory_store=store, session_id="campaign-q1-2026")
# Agent recalls previous context in same session
```

## Prerequisites

- Python 3.10+
- `GOOGLE_API_KEY` or Vertex AI service account
- `pip install google-adk google-generativeai`

## Best Practices

**1. Single-responsibility agents**
Each agent does one thing well. Compose for complex tasks.

**2. Test agents individually before composing**
Validate each agent's output quality independently. Composition amplifies both good and bad outputs.

**3. Add fallback handling**
Marketing pipelines must not fail silently. Add try/except with graceful degradation.

## Common Use Cases

### Use Case 1: Automated Weekly Marketing Report
**Scenario**: Every Monday, fetch metrics, analyze trends, write summary, post to Slack.

**Agent pipeline**:
1. `MetricsFetcherAgent` — pulls GA4 + ad platform data
2. `TrendAnalyzerAgent` — identifies ups/downs vs previous period
3. `ReportWriterAgent` — writes 500-word executive summary
4. `PublisherAgent` — posts to Slack channel via webhook

### Use Case 2: Competitor Monitoring System
**Scenario**: Daily check of competitor blog posts, product updates, pricing changes.

**Agent pipeline**:
1. `ScraperAgent` (parallel) — scrapes 5 competitor sites
2. `ChangeDectorAgent` — diffs against last run
3. `InsightAgent` — summarizes significant changes
4. `AlertAgent` — emails team if major changes detected

## Troubleshooting

**Issue**: Agent loop doesn't terminate
**Solution**: Set `max_iterations` parameter. Add explicit termination conditions in agent instructions.

**Issue**: Parallel agents produce inconsistent results
**Solution**: Standardize output format with Pydantic models. Validate each agent's output schema.

## Related Skills

- [Context Engineering](/docs/marketing/skills/context-engineering) - Optimize agent context windows
- [Backend Development](/docs/marketing/skills/backend-development) - Deploy agent services
- [Analytics](/docs/marketing/skills/analytics) - Data sources for agents
- [Debugging](/docs/marketing/skills/debugging) - Debug agent workflows

## Related Commands

- `/ckm:brainstorm` - Design agent architectures
- `/ckm:plan` - Plan agent pipeline implementation
