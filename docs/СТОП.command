#!/bin/bash
lsof -ti:8080 | xargs kill -9 2>/dev/null
echo "✦ Сервер остановлен."
