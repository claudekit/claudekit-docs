---
title: "ClaudeKit Cheatsheet"
description: "Quick reference guide for ClaudeKit commands, features, and workflows. Essential commands and shortcuts for productive development."
category: "getting-started"
order: 5
published: true
lastUpdated: 2025-11-06
---

# ClaudeKit Cheatsheet

Quick reference guide for ClaudeKit commands, features, and essential workflows.

## Installation & Setup

### Basic Installation

```bash
# Install globally
npm install -g @claudekit/cli

# Install locally
npm install --save-dev @claudekit/cli

# Use npx (no installation)
npx @claudekit init
```

### Project Initialization

```bash
# New project
claudekit new my-project

# Existing project
claudekit init

# With template
claudekit new my-app --template nextjs-fullstack

# Specify framework
claudekit bootstrap --framework react
```

## Core Commands

### Project Management

```bash
# Project information
claudekit --version
claudekit doctor
claudekit status

# Configuration
claudekit config list
claudekit config set key value
claudekit config get key
claudekit config reset
```

### Development Workflow

```bash
# Analysis and planning
claudekit scout                    # Analyze project structure
claudekit ask "question"           # Get AI assistance
claudekit plan "feature"           # Plan implementation
claudekit debug                    # Debug issues

# Code generation
claudekit generate component Name
claudekit generate api /endpoint
claudekit generate model ModelName
claudekit generate test Component

# Code improvement
claudekit review path/             # Code review
claudekit fix path/                # Auto-fix issues
claudekit optimize path/           # Performance optimization
claudekit refactor path/           # Refactor code
```

## Slash Commands

### Core Commands

```bash
/ask "What does this function do?"
/plan "Implement user authentication"
/debug "Fix this TypeError"
/scout "Analyze the codebase structure"
/cook "Generate a REST API endpoint"
/journal "Summarize today's work"
```

### Content Commands

```bash
/enhance "Improve this documentation"
/fast "Quick implementation"
/good "Best practices implementation"
/cro "Conversion rate optimization"
```

### Design Commands

```bash
/design "Create a modern dashboard"
/screenshot "Analyze this design"
/video "Review this UI interaction"
/describe "Describe this component"
/3d "Create 3D visualization"
```

### Fix Commands

```bash
/fix types "Fix TypeScript errors"
/fix performance "Optimize performance"
/fix ui "Fix UI issues"
/fix logs "Analyze error logs"
/fix hard "Handle complex issues"
/fix fast "Quick fixes"
/fix ci "Fix CI/CD pipeline"
```

### Git Commands

```bash
/commit "Create meaningful commit message"
/commit-push "Commit and push changes"
/pull-request "Create pull request"
```

### Documentation Commands

```bash
/docs init "Initialize documentation"
/docs update "Update existing docs"
/docs summarize "Summarize documentation"
```

### Integration Commands

```bash
/integrate polar "Integrate Polar API"
/integrate sepay "Integrate SePay payment"
```

### Plan Commands

```bash
/plan ci "Plan CI/CD setup"
/plan two "Two-step implementation plan"
```

### Skill Commands

```bash
/skill create "Create new skill"
/skill fix-logs "Fix skill errors"
```

## Project Templates

### Web Applications

```bash
# Next.js Full Stack
claudekit new app --template nextjs-fullstack

# React SPA
claudekit new app --template react-spa

# Vue.js App
claudekit new app --template vue-app

# Angular App
claudekit new app --template angular-app
```

### API Projects

```bash
# Express.js API
claudekit new api --template express-api

# FastAPI Python
claudekit new api --template fastapi

# GraphQL Server
claudekit new api --template graphql-server
```

### Component Libraries

```bash
# React Library
claudekit new lib --template react-library

# Vue Library
claudekit new lib --template vue-library

# TypeScript Library
claudekit new lib --template typescript-lib
```

## Framework-Specific Commands

### React

```bash
# Generate components
claudekit generate component Button --props variant,size
claudekit generate component Modal --props isOpen,onClose
claudekit generate hook useAuth --dependencies auth

# Next.js specific
claudekit generate page /about
claudekit generate api /api/users
claudekit generate middleware auth
```

### Vue.js

```bash
# Generate components
claudekit generate component UserProfile --props user
claudekit generate component Navigation --items navItems

# Vue Router
claudekit generate route /profile --component Profile
claudekit generate route /settings --component Settings
```

### Node.js

```bash
# Generate API endpoints
claudekit generate endpoint GET /api/users
claudekit generate endpoint POST /api/auth/login
claudekit generate middleware auth
claudekit generate service UserService
```

## Database Operations

### PostgreSQL

```bash
# Create models
claudekit model create User name:string email:string
claudekit model create Post title:string content:text user:reference

# Migrations
claudekit migration create create_users_table
claudekit migration run
claudekit migration rollback
```

### MongoDB

```bash
# Create schemas
claudekit schema User name email profile
claudekit schema Post title content author

# Seed data
claudekit seed users --count 10
claudekit seed posts --count 50
```

## Testing Commands

### Unit Tests

```bash
# Generate tests
claudekit test unit src/components/
claudekit test unit src/utils/

# Run tests
claudekit test run --unit
claudekit test run --coverage
```

### Integration Tests

```bash
# API tests
claudekit test integration tests/api/
claudekit test api --endpoint /api/users

# Database tests
claudekit test integration tests/database/
```

### E2E Tests

```bash
# Generate E2E tests
claudekit test e2e tests/e2e/login.spec.js
claudekit test e2e tests/e2e/checkout.spec.js

# Run E2E tests
claudekit test run --e2e
claudekit test run --e2e --headless
```

## Deployment Commands

### Vercel

```bash
# Deploy to Vercel
claudekit deploy vercel

# Setup environment
claudekit deploy vercel --env production
claudekit env set vercel API_KEY=${API_KEY}
```

### Netlify

```bash
# Deploy to Netlify
claudekit deploy netlify

# Configure redirects
claudekit deploy netlify --config netlify.toml
```

### Docker

```bash
# Build Docker image
claudekit docker build

# Run container
claudekit docker run --port 3000

# Push to registry
claudekit docker push --registry ghcr
```

### Kubernetes

```bash
# Generate K8s manifests
claudekit k8s generate

# Deploy to cluster
claudekit k8s deploy

# Scale deployment
claudekit k8s scale --replicas 3
```

## Configuration

### Environment Variables

```bash
# Set environment variables
claudekit env set development NODE_ENV=development
claudekit env set production NODE_ENV=production

# List environment variables
claudekit env list

# Load from .env file
claudekit env load .env.production
```

### Project Settings

```bash
# Configure TypeScript
claudekit config set typescript.strict true
claudekit config set typescript.target ES2020

# Configure testing
claudekit config set testing.framework jest
claudekit config set testing.coverage 80

# Configure linting
claudekit config set linting.eslint true
claudekit config set linting.prettier true
```

## AI Assistant Features

### Code Analysis

```bash
# Explain code
claudekit ask "Explain this function and its purpose"

# Find bugs
claudekit debug "Look for potential issues in this code"

# Suggest improvements
claudekit ask "How can I improve this component's performance?"
```

### Documentation

```bash
# Generate docs
claudekit docs generate --format markdown
claudekit docs api --output docs/api/

# Update README
claudekit docs readme --update
```

### Refactoring

```bash
# Refactor suggestions
claudekit refactor src/components/OldComponent.js

# Modernize code
claudekit modernize src/legacy/ --target es6+
```

## Troubleshooting

### Common Issues

```bash
# Check system health
claudekit doctor

# Fix permissions
claudekit fix permissions

# Clear cache
claudekit cache clear

# Reset configuration
claudekit config reset --hard
```

### Performance Issues

```bash
# Analyze performance
claudekit analyze performance

# Profile application
claudekit profile --duration 30s

# Memory usage
claudekit analyze memory
```

## Keyboard Shortcuts

### Interactive Mode

```bash
# Start interactive mode
claudekit interactive

# Navigation shortcuts (in interactive mode)
Ctrl+C      # Exit
Tab         # Auto-complete
↑/↓         # Navigate history
Ctrl+R      # Search history
```

## Quick Examples

### Create a React Component

```bash
# Quick component creation
claudekit generate component Button \
  --props variant,size,onClick \
  --styled true \
  --typescript true

# With styled-components
claudekit generate component Card \
  --props children,title \
  --styled-components true
```

### Create API Endpoint

```bash
# Express.js endpoint
claudekit generate endpoint POST /api/users \
  --middleware auth,validation \
  --response json

# GraphQL resolver
claudekit generate resolver Query.users \
  --type [User] \
  --resolver getUserList
```

### Database Migration

```bash
# Create migration
claudekit migration create add_email_verified_to_users

# Run migration
claudekit migration run

# Rollback
claudekit migration rollback --step 1
```

## Resources

### Documentation

- [Official Docs](https://docs.claudekit.cc)
- [API Reference](../api-reference/)
- [Examples](https://github.com/mrgoonie/claudekit-cli/examples)

### Community

- [GitHub Issues](https://github.com/mrgoonie/claudekit-cli/issues)
- [Discussions](https://github.com/mrgoonie/claudekit-cli/discussions)
- [Discord Community](https://discord.gg/claudekit)

---

**Need more help?** Check our [Troubleshooting Guide](../troubleshooting/) or ask in the [Community Forums](https://github.com/mrgoonie/claudekit-cli/discussions).