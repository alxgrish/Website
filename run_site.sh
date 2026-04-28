REPO_URL="https://github.com/alxgrish/Website"
TARGET_DIR="Website"

# Если папка уже есть, заходим в неё, если нет — клонируем и заходим
if [ -d "$TARGET_DIR" ]; then
    cd "$TARGET_DIR" && git pull origin main || exit 1
else
    git clone "$REPO_URL" && cd "$TARGET_DIR" || exit 1
fi

docker rm -f my_website 2>/dev/null || true

echo "Запуск образа..."
docker run -d -p 8081:80 --name my_website ghcr.io/alxgrish/website:latest || exit 1

sleep 2

if [ -d "./Birds" ]; then
    echo "Копирование файлов из ./Birds/..."
    docker cp ./Birds/. my_website:/var/www/localhost/htdocs/
else
    echo "Папка Birds не найдена!"
    exit 1
fi

docker exec my_website chmod -R 755 /var/www/localhost/htdocs
docker exec my_website sed -i 's/DirectoryIndex index.html/DirectoryIndex index.php index.html/g' /etc/apache2/httpd.conf
# Используем мягкий перезапуск Apache
docker exec my_website httpd -k graceful
