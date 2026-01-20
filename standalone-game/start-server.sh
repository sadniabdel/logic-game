#!/bin/bash
# Simple HTTP server to run the standalone game

echo "Starting ZZLE Standalone Game Server..."
echo "Open your browser to: http://localhost:8000"
echo "Press Ctrl+C to stop the server"
echo ""

cd "$(dirname "$0")"
python3 -m http.server 8000
