#!/bin/bash

# Цвета
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

REPO_URL="https://github.com"
TARGET_DIR="Website"

echo -e "${BLUE}=== Синхронизация с GitHub ===${NC}"

# 1. Клонируем или обновляем репозиторий
if [ ! -d "$TARGET_DIR" ]; then
    echo "Клонирование репозитория..."
    git clone $REPO_URL
    cd $TARGET_DIR
else
    echo "Репозиторий уже есть. Обновляем файлы..."
    cd $TARGET_DIR
    git pull origin main
fi

echo -e "${BLUE}=== Запуск контейнера ===${NC}"

# 2. Удаляем старый контейнер
docker rm -f my_website 2>/dev/null || true

# 3. Запуск образа (Убедись, что сделал Package -> Public на GitHub!)
echo "Запуск образа ghcr.io/alxgrish/website:latest..."
docker run -d -p 8081:80 --name my_website ghcr.io/alxgrish/website:latest

if [ $? -ne 0 ]; then
    echo -e "${RED}Ошибка запуска! Проверь, что образ Public в настройках GitHub Packages.${NC}"
    exit 1
fi

sleep 2

# 4. Копируем файлы из скачанной папки Birds
if [ -d "./Birds" ]; then
    echo "Копирование свежих файлов из ./Birds/ в контейнер..."
    docker cp ./Birds/. my_website:/var/www/localhost/htdocs/
else
    echo -e "${RED}Ошибка: Папка Birds не найдена в репозитории!${NC}"
    exit 1
fi

# 5. Финальная настройка Apache
echo "Настройка прав доступа и PHP..."
docker exec my_website chmod -R 755 /var/www/localhost/htdocs
docker exec my_website sed -i 's/DirectoryIndex index.html/DirectoryIndex index.php index.html/g' /etc/apache2/httpd.conf
docker exec my_website httpd -k restart

echo -e "${GREEN}=== УСПЕХ! ===${NC}"
echo -e "Сайт доступен на порту: ${BLUE}8081${NC}"
