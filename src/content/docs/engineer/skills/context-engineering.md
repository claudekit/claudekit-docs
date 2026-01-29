---
title: "Context Engineering"
description: "Monitor context usage limits, optimize token consumption, and design efficient agent architectures"
section: engineer
kit: engineer
category: skills
order: 22
---

The art and science of curating the smallest high-signal token set for maximum LLM reasoning quality while minimizing token usage.

## What This Skill Does

Context Engineering helps you design, debug, and optimize agent systems where context limits constrain performance. It provides frameworks for understanding context degradation, implementing compression strategies, and building multi-agent architectures that isolate work efficiently.

Think of it as your context budget manager—monitoring usage, detecting degradation patterns, and guiding you toward architectures that maximize reasoning quality per token spent.

## When to Activate

- Designing or debugging agent systems
- Context limits are constraining performance
- Optimizing cost or latency
- Building multi-agent coordination
- Implementing memory systems
- Evaluating agent performance
- Developing LLM-powered pipelines

## Core Principles

1. **Context quality > quantity** - High-signal tokens beat exhaustive content
2. **Attention is finite** - U-shaped curve favors beginning/end positions
3. **Progressive disclosure** - Load information just-in-time
4. **Isolation prevents degradation** - Partition work across sub-agents
5. **Measure before optimizing** - Know your baseline

## Four-Bucket Strategy

1. **Write**: Save context externally (scratchpads, files)
2. **Select**: Pull only relevant context (retrieval, filtering)
3. **Compress**: Reduce tokens while preserving info (summarization)
4. **Isolate**: Split across sub-agents (partitioning)

## Key Metrics

- **Token utilization**: Warning at 70%, trigger optimization at 80%
- **Token variance**: Explains 80% of agent performance variance
- **Multi-agent cost**: ~15x single agent baseline
- **Compaction target**: 50-70% reduction, <5% quality loss
- **Cache hit target**: 70%+ for stable workloads

## Usage

Activate when asking about context percentage, rate limits, usage warnings, context optimization, agent architectures, or memory systems.

## Example Prompts

- "What's my current context usage? Should I be concerned?"
- "How can I optimize this agent workflow to use fewer tokens?"
- "Design a multi-agent architecture for processing large codebases"
- "Why is my agent failing on large files?"
- "Implement a memory system for cross-session knowledge"

## Quick Reference Topics

- **Fundamentals**: Context anatomy, attention mechanics
- **Degradation**: Lost-in-middle, poisoning, debugging failures
- **Optimization**: Compaction, masking, caching, partitioning
- **Compression**: Long sessions, summarization strategies
- **Memory**: Cross-session persistence, knowledge graphs
- **Multi-Agent**: Coordination patterns, context isolation
- **Evaluation**: Testing agents, LLM-as-Judge, metrics
- **Tool Design**: Tool consolidation, description engineering
