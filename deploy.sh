#!/bin/bash

# Скрипт деплоя презентации на удалённый сервер
# Использование: ./deploy.sh

set -e  # Остановить выполнение при ошибке

# Цвета для вывода
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Настройки сервера
SERVER_USER="doklad"
SERVER_HOST="51.250.19.213"
SERVER_PATH="/var/www/doklad"
DIST_DIR="dist"
SSH_KEY="$HOME/.ssh/ssh-key-1760387445742"

# Опции SSH
SSH_OPTS="-i $SSH_KEY"

echo -e "${BLUE}🚀 Начинаем деплой презентации...${NC}\n"

# 1. Проверка зависимостей
echo -e "${BLUE}📦 Проверка node_modules...${NC}"
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}Установка зависимостей...${NC}"
    npm install
fi

# 2. Сборка проекта
echo -e "\n${BLUE}🔨 Сборка проекта...${NC}"
npm run build

# 3. Проверка что dist создан
if [ ! -d "$DIST_DIR" ]; then
    echo -e "${RED}❌ Ошибка: директория dist не создана!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Сборка завершена${NC}"

# 4. Установка nginx на сервере если нужно
echo -e "\n${BLUE}🔧 Проверка и установка nginx...${NC}"
ssh $SSH_OPTS $SERVER_USER@$SERVER_HOST << 'EOF'
# Проверяем установлен ли nginx
if ! command -v nginx &> /dev/null; then
    echo "📥 Nginx не установлен. Устанавливаем..."
    sudo apt-get update
    sudo apt-get install -y nginx
    echo "✅ Nginx установлен"
else
    echo "✅ Nginx уже установлен"
fi
EOF

# 5. Создание директории на сервере
echo -e "\n${BLUE}📁 Создание директории на сервере...${NC}"
ssh $SSH_OPTS $SERVER_USER@$SERVER_HOST "sudo mkdir -p $SERVER_PATH && sudo chown -R $SERVER_USER:$SERVER_USER $SERVER_PATH"

# 6. Копирование файлов на сервер
echo -e "\n${BLUE}📤 Копирование файлов на сервер...${NC}"
scp $SSH_OPTS -r $DIST_DIR/* $SERVER_USER@$SERVER_HOST:$SERVER_PATH/

# 7. Настройка nginx на сервере
echo -e "\n${BLUE}⚙️  Настройка nginx...${NC}"
ssh $SSH_OPTS $SERVER_USER@$SERVER_HOST << 'EOF'
# Создаём конфиг nginx
echo "Создаём конфигурацию nginx..."
sudo tee /etc/nginx/sites-available/doklad > /dev/null <<'NGINX_CONFIG'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    
    root /var/www/doklad;
    index index.html;
    
    server_name _;
    
    # Gzip сжатие
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Кеширование статики
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Отключаем логирование для статики
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        access_log off;
    }
}
NGINX_CONFIG

# Удаляем дефолтный конфиг если есть
sudo rm -f /etc/nginx/sites-enabled/default

# Активируем наш конфиг
sudo ln -sf /etc/nginx/sites-available/doklad /etc/nginx/sites-enabled/doklad

# Проверяем конфигурацию
if sudo nginx -t; then
    echo "✅ Конфигурация nginx корректна"
    
    # Перезапускаем nginx
    sudo systemctl restart nginx
    sudo systemctl enable nginx
    
    echo "✅ Nginx перезапущен"
else
    echo "❌ Ошибка в конфигурации nginx!"
    exit 1
fi
EOF

# 8. Проверка что сайт доступен
echo -e "\n${BLUE}🔍 Проверка доступности сайта...${NC}"
sleep 2
if curl -f -s -o /dev/null http://$SERVER_HOST; then
    echo -e "${GREEN}✅ Сайт доступен!${NC}"
else
    echo -e "${YELLOW}⚠️  Сайт пока недоступен, но файлы скопированы${NC}"
fi

# 9. Итоговая информация
echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Деплой успешно завершён!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "\n${BLUE}🌐 Презентация доступна по адресу:${NC}"
echo -e "${GREEN}   http://$SERVER_HOST${NC}"
echo -e "\n${BLUE}💡 Полезные команды:${NC}"
echo -e "   Проверить статус nginx:"
echo -e "   ${YELLOW}ssh $SSH_OPTS $SERVER_USER@$SERVER_HOST 'sudo systemctl status nginx'${NC}"
echo -e "\n   Просмотр логов nginx:"
echo -e "   ${YELLOW}ssh $SSH_OPTS $SERVER_USER@$SERVER_HOST 'sudo tail -f /var/log/nginx/error.log'${NC}"
echo -e "\n   Перезапустить nginx:"
echo -e "   ${YELLOW}ssh $SSH_OPTS $SERVER_USER@$SERVER_HOST 'sudo systemctl restart nginx'${NC}"
echo ""