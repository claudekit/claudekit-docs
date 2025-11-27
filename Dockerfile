# Multi-stage build for ClaudeKit Docs
FROM oven/bun:1-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and lockfile
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy configuration files
COPY astro.config.mjs ./
COPY tailwind.config.mjs ./
COPY tsconfig.json ./

# Copy source code and content
COPY src ./src
COPY public ./public

# Build the application
RUN bun run build

# Production image
FROM node:20-alpine AS runner

WORKDIR /app

# Install serve for static file hosting
RUN npm install -g serve

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start server
# Remove -s flag to allow proper directory routing for static site
CMD ["serve", "dist", "-l", "3000"]
