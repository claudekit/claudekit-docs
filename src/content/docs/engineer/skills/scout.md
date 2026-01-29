---
title: "Scout"
description: "Fast codebase scouting using parallel agents for file discovery and context gathering"
section: engineer
kit: engineer
category: skills
order: 33
---

Fast, token-efficient codebase scouting using parallel agents to find files needed for tasks.

## What This Skill Does

The Scout skill rapidly explores your codebase using parallel agents to locate relevant files, understand structure, and gather context. It's like having a team of developers simultaneously searching different parts of your codebase and reporting back with findings.

Think of it as your reconnaissance mission before feature work—quickly mapping the terrain so you know exactly which files matter for your task.

## When to Use

- Beginning work on feature spanning multiple directories
- User mentions needing to "find", "locate", or "search for" files
- Starting debugging session requiring file relationships understanding
- User asks about project structure or where functionality lives
- Before changes that might affect multiple codebase parts

## Core Capabilities

- Parallel agent-based file discovery
- Token-efficient codebase exploration
- Built-in parallel scouting or external tools (Gemini/OpenCode CLI)
- Adaptive scaling based on codebase size
- Concise reporting with unresolved questions

## Arguments

- **Default**: Scout using built-in parallel exploration
- **ext**: Scout using external Gemini/OpenCode CLI tools in parallel

## Quick Start

1. Analyze user prompt to identify search targets
2. Use wide range of Grep/Glob patterns to find files and estimate scale
3. Spawn parallel agents with divided directories
4. Collect results into concise report

## Workflow

### 1. Analyze Task
- Parse user prompt for search targets
- Identify key directories, patterns, file types, lines of code
- Determine optimal scale for parallel exploration

### 2. Divide and Conquer
- Split codebase into logical segments per agent
- Assign each agent specific directories or patterns
- Ensure no overlap, maximize coverage

### 3. Spawn Parallel Agents
- Each exploration thread gets specific directories/files to analyze
- Each has <200K token context window
- Agent count depends on system resources and file scale
- Each returns detailed summary to main agent

### 4. Collect Results
- 3-minute timeout per agent (skip non-responders)
- Aggregate findings into single report
- List unresolved questions at end

## Usage

Activate by mentioning file discovery, codebase exploration, or structure understanding needs.

## Example Prompts

- "Find all authentication-related files in the codebase"
- "Where does the user profile feature live?"
- "Scout the API layer to understand the payment flow"
- "Locate all files that interact with the database"
- "Which components use the theme system?"

## Report Format

```markdown
# Scout Report

## Relevant Files
- `path/to/file.ts` - Brief description
- ...

## Unresolved Questions
- Any gaps in findings
```

## What Makes This Different

Scout doesn't just grep—it intelligently divides exploration work across parallel agents, each with full context about their assigned territory. The result: comprehensive codebase understanding in minutes, not hours.

## Related Skills

- [Cook](/docs/engineer/skills/cook) - Uses Scout before implementation
- [Fix](/docs/engineer/skills/fix) - Uses Scout to understand bug context
- [GKG](/docs/engineer/skills/gkg) - Semantic code analysis (alternative approach)
