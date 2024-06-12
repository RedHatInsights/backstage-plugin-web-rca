#!/usr/bin/env sh

fsha=$(sha256sum frontend/*.tgz | awk '{print $1}' | xxd -r -p | base64)
bsha=$(sha256sum backend/*.tgz | awk '{print $1}' | xxd -r -p | base64)

echo "Frontend: sha256-${fsha}"
echo "Backend:  sha256-${bsha}"
