#!/bin/sh
export PATH="$(cd "$(dirname "$0")" && pwd)/node/bin:$PATH"
exec "$@"
