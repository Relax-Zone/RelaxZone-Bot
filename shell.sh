#!/bin/sh
# shell.sh: Start relaxzone-bot and auto-restart on crash

while true; do
  bun run start
  echo "Bot crashed. Restarting in 3 seconds..."
  sleep 3
done
