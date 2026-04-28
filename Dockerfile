FROM alpine:latest

# Установка всех пакетов, которые мы подобрали
RUN apk update && apk add --no-cache \
    apache2 \
    php83 \
    php83-apache2 \
    php83-sqlite3 \
    php83-pdo_sqlite \
    php83-mysqli \
    php83-pdo_mysql \
    php83-mbstring \
    php83-gd \
    php83-xml \
    php83-curl \
    php83-session \
    php83-tokenizer \
    sqlite \
    mariadb \
    mariadb-client \
    composer \
    github-cli \
    bash

# Настройка путей и прав
RUN ln -sf /usr/bin/php83 /usr/bin/php && \
    mkdir -p /var/www/localhost/htdocs && \
    sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/httpd.conf

# Инициализация базы данных
RUN mysql_install_db --user=mysql --datadir=/var/lib/mysql

EXPOSE 80 3306

# Скрипт запуска сервера
CMD ["sh", "-c", "mysqld_safe --datadir='/var/lib/mysql' & httpd -D FOREGROUND"]
