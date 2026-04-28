Запуск:

chmod +x run_site.sh

./run_site.sh

Запуск скрипта:
while true; do echo "$(date) - keep alive" >> /tmp/keepalive.log; sleep 300; done &

Остоновка скрипта:
kill %1
или
CTRL + C
