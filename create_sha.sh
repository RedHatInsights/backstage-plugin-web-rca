#!/usr/bin/env sh

sha256sum backstage-plugin-web-rca-backstage-plugin-web-rca-frontend-v0.1.0.tgz | awk '{print $1}' | xxd -r -p | base64
