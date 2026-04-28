
REPO_URL="https://github.com/alxgrish/Website"
TARGET_DIR="Website"
if [ ! -d "$TARGET_DIR" ]; then
    git clone $REPO_URL
    cd $TARGET_DIR
else
    cd $TARGET_DIR
    git pull origin main
fi
docker rm -f my_website 2>/dev/null || true
echo "Запуск образа ghcr.io/alxgrish/website:latest..."
docker run -d -p 8081:80 --name my_website ghcr.io/alxgrish/website:latest

if [ $? -ne 0 ]; then
    exit 1
fi

sleep 2

if [ -d "./Birds" ]; then
    echo "Копирование свежих файлов из ./Birds/ в контейнер..."
    docker cp ./Birds/. my_website:/var/www/localhost/htdocs/
else
    exit 1
fi

docker exec my_website chmod -R 755 /var/www/localhost/htdocs
docker exec my_website sed -i 's/DirectoryIndex index.html/DirectoryIndex index.php index.html/g' /etc/apache2/httpd.conf
docker exec my_website httpd -k restart


