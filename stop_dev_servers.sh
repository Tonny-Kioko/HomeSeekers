#!/bin/bash

# Find all PIDs of running ./bin/dev processes
PIDS=$(ps aux | grep './bin/dev' | grep -v grep | awk '{print $2}')

# Kill all found PIDs
if [ -n "$PIDS" ]; then
  kill -9 $PIDS
  echo "Killed the following PIDs: $PIDS"
else
  echo "No running ./bin/dev processes found."
fi
