# Dockerfile for relaxzone-bot
FROM oven/bun:1.0.25-alpine

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

COPY . .

RUN bun run build || true

# Make shell.sh executable
RUN chmod +x /app/shell.sh

EXPOSE 3000

ENTRYPOINT ["/app/shell.sh"]
