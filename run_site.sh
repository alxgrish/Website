
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'


echo "Очистка"
docker rm -f my_website 2>/dev/null || true

echo "Запуск образа ghcr.io/alxgrish/website:latest..."
docker run -d -p 8081:80 --name my_website ghcr.io/alxgrish/website:latest

sleep 1

echo "Копирование файлов"
docker cp ./Birds/. my_website:/var/www/localhost/htdocs/

echo "Настройка прав доступа и PHP..."
docker exec my_website chmod -R 755 /var/www/localhost/htdocs
docker exec my_website sed -i 's/DirectoryIndex index.html/DirectoryIndex index.php index.html/g' /etc/apache2/httpd.conf
docker exec my_website httpd -k restart

echo -e "${GREEN}Готово{NC}""

