#!/usr/bin/env bash
# Serve the Threadline clothing store at http://localhost:${PORT:-8080}
set -euo pipefail
cd "$(dirname "$0")/site"
PORT="${PORT:-8080}"
echo "Threadline running at http://localhost:$PORT"
exec python3 -m http.server "$PORT"
