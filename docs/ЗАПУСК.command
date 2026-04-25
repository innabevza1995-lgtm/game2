#!/bin/bash
# Запуск Content Oracle — двойной клик в Finder

cd "$(dirname "$0")"

# Останавливаем старый сервер на 8080, если был
lsof -ti:8080 | xargs kill -9 2>/dev/null
sleep 0.5

# Запускаем сервер
python3 -m http.server 8080 &
SERVER_PID=$!
sleep 1

# Открываем в браузере
open "http://localhost:8080/index.html"

echo "✦ Content Oracle запущен: http://localhost:8080/index.html"
echo "Закройте это окно — сервер продолжит работать."
echo "Чтобы остановить сервер, запустите СТОП.command"

wait $SERVER_PID
