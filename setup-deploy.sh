#!/bin/bash
# ============================================================
# Скрипт автоматической настройки GitHub + Vercel + Автодеплой
# Проект: vitality-site
# ============================================================
set -e

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Настройка GitHub + Vercel автодеплой${NC}"
echo -e "${BLUE}========================================${NC}"

# Проверка .env.keys
if [ ! -f ".env.keys" ]; then
  echo -e "${RED}Ошибка: файл .env.keys не найден!${NC}"
  echo -e "Скопируй шаблон: cp .env.keys.template .env.keys"
  echo -e "И заполни все значения."
  exit 1
fi

# Загрузка ключей
source .env.keys

# Проверка обязательных переменных
check_var() {
  if [ -z "${!1}" ]; then
    echo -e "${RED}Ошибка: переменная $1 не заполнена в .env.keys${NC}"
    exit 1
  fi
}

check_var GITHUB_USERNAME
check_var GITHUB_TOKEN
check_var VERCEL_TOKEN
check_var GIT_USER_NAME
check_var GIT_USER_EMAIL

echo -e "\n${GREEN}✓ Ключи загружены${NC}"

# ============================================================
# 1. Настройка Git identity
# ============================================================
echo -e "\n${YELLOW}[1/5] Настройка git identity...${NC}"
git config user.name "$GIT_USER_NAME"
git config user.email "$GIT_USER_EMAIL"
echo -e "${GREEN}✓ Git: $GIT_USER_NAME <$GIT_USER_EMAIL>${NC}"

# ============================================================
# 2. Создание GitHub репозитория
# ============================================================
echo -e "\n${YELLOW}[2/5] Создание GitHub репозитория...${NC}"

REPO_EXISTS=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/$GITHUB_USERNAME/$GITHUB_REPO_NAME")

if [ "$REPO_EXISTS" = "200" ]; then
  echo -e "${YELLOW}Репозиторий уже существует, пропускаем создание${NC}"
else
  RESPONSE=$(curl -s -X POST \
    -H "Authorization: token $GITHUB_TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    https://api.github.com/user/repos \
    -d "{\"name\":\"$GITHUB_REPO_NAME\",\"private\":false,\"description\":\"Vitality — мультиязычный сайт\"}")

  if echo "$RESPONSE" | grep -q '"full_name"'; then
    echo -e "${GREEN}✓ Репозиторий создан: github.com/$GITHUB_USERNAME/$GITHUB_REPO_NAME${NC}"
  else
    echo -e "${RED}Ошибка создания репозитория:${NC}"
    echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('message','Unknown error'))"
    exit 1
  fi
fi

# ============================================================
# 3. Push кода на GitHub
# ============================================================
echo -e "\n${YELLOW}[3/5] Загрузка кода на GitHub...${NC}"

REMOTE_URL="https://$GITHUB_USERNAME:$GITHUB_TOKEN@github.com/$GITHUB_USERNAME/$GITHUB_REPO_NAME.git"

# Добавляем remote если не существует
if git remote get-url origin &>/dev/null; then
  git remote set-url origin "$REMOTE_URL"
else
  git remote add origin "$REMOTE_URL"
fi

# Стейджим и коммитим незафиксированные изменения
if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "feat: initial project setup with deploy pipeline"
fi

git push -u origin main
echo -e "${GREEN}✓ Код загружен на GitHub${NC}"

# ============================================================
# 4. Подключение к Vercel и деплой
# ============================================================
echo -e "\n${YELLOW}[4/5] Настройка Vercel...${NC}"

export VERCEL_TOKEN="$VERCEL_TOKEN"

# Линкуем проект с Vercel (если ещё не слинкован)
if [ ! -d ".vercel" ]; then
  vercel link --token "$VERCEL_TOKEN" --yes 2>&1 || true
fi

# Получаем Org ID и Project ID
if [ -f ".vercel/project.json" ]; then
  VERCEL_PROJECT_ID_ACTUAL=$(python3 -c "import json; d=json.load(open('.vercel/project.json')); print(d['projectId'])")
  VERCEL_ORG_ID_ACTUAL=$(python3 -c "import json; d=json.load(open('.vercel/project.json')); print(d['orgId'])")
  echo -e "${GREEN}✓ Vercel Project ID: $VERCEL_PROJECT_ID_ACTUAL${NC}"
  echo -e "${GREEN}✓ Vercel Org ID: $VERCEL_ORG_ID_ACTUAL${NC}"

  # Сохраняем в .env.keys
  sed -i '' "s/^VERCEL_ORG_ID=.*/VERCEL_ORG_ID=$VERCEL_ORG_ID_ACTUAL/" .env.keys
  sed -i '' "s/^VERCEL_PROJECT_ID=.*/VERCEL_PROJECT_ID=$VERCEL_PROJECT_ID_ACTUAL/" .env.keys
else
  VERCEL_PROJECT_ID_ACTUAL="${VERCEL_PROJECT_ID}"
  VERCEL_ORG_ID_ACTUAL="${VERCEL_ORG_ID}"
fi

# Первый деплой
echo -e "\n${YELLOW}Запуск первого деплоя...${NC}"
vercel --token "$VERCEL_TOKEN" --prod --yes 2>&1 | tail -5

# ============================================================
# 5. Добавление Secrets в GitHub Actions
# ============================================================
echo -e "\n${YELLOW}[5/5] Добавление секретов в GitHub Actions...${NC}"

add_secret() {
  local SECRET_NAME=$1
  local SECRET_VALUE=$2

  # Получаем публичный ключ репозитория для шифрования
  KEY_RESPONSE=$(curl -s \
    -H "Authorization: token $GITHUB_TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    "https://api.github.com/repos/$GITHUB_USERNAME/$GITHUB_REPO_NAME/actions/secrets/public-key")

  KEY_ID=$(echo "$KEY_RESPONSE" | python3 -c "import sys,json; print(json.load(sys.stdin)['key_id'])")
  PUB_KEY=$(echo "$KEY_RESPONSE" | python3 -c "import sys,json; print(json.load(sys.stdin)['key'])")

  # Шифруем значение через Python (используем libsodium через nacl)
  ENCRYPTED=$(python3 -c "
import sys, base64
from base64 import b64decode, b64encode

try:
    from nacl import encoding, public
    pub = public.PublicKey(b64decode('$PUB_KEY'))
    box = public.SealedBox(pub)
    encrypted = box.encrypt(b'$SECRET_VALUE')
    print(b64encode(encrypted).decode())
except ImportError:
    # Если nacl недоступен — выводим заглушку
    print('NACL_REQUIRED')
")

  if [ "$ENCRYPTED" = "NACL_REQUIRED" ]; then
    echo -e "${YELLOW}⚠ Добавь секрет $SECRET_NAME вручную в GitHub Settings → Secrets${NC}"
    echo -e "  Значение: $SECRET_VALUE"
    return
  fi

  curl -s -X PUT \
    -H "Authorization: token $GITHUB_TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    "https://api.github.com/repos/$GITHUB_USERNAME/$GITHUB_REPO_NAME/actions/secrets/$SECRET_NAME" \
    -d "{\"encrypted_value\":\"$ENCRYPTED\",\"key_id\":\"$KEY_ID\"}" > /dev/null

  echo -e "${GREEN}✓ Секрет $SECRET_NAME добавлен${NC}"
}

# Пробуем добавить через python-nacl, если не установлен — выводим инструкцию
python3 -c "from nacl import public" 2>/dev/null && NACL_OK=true || NACL_OK=false

if [ "$NACL_OK" = true ]; then
  add_secret "VERCEL_TOKEN" "$VERCEL_TOKEN"
  add_secret "VERCEL_ORG_ID" "$VERCEL_ORG_ID_ACTUAL"
  add_secret "VERCEL_PROJECT_ID" "$VERCEL_PROJECT_ID_ACTUAL"
else
  echo -e "${YELLOW}⚠ Добавь секреты вручную в GitHub:${NC}"
  echo -e "  → https://github.com/$GITHUB_USERNAME/$GITHUB_REPO_NAME/settings/secrets/actions"
  echo ""
  echo -e "  VERCEL_TOKEN       = $VERCEL_TOKEN"
  echo -e "  VERCEL_ORG_ID      = $VERCEL_ORG_ID_ACTUAL"
  echo -e "  VERCEL_PROJECT_ID  = $VERCEL_PROJECT_ID_ACTUAL"
fi

# ============================================================
# Итог
# ============================================================
echo -e "\n${BLUE}========================================${NC}"
echo -e "${GREEN}✅ Настройка завершена!${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""
echo -e "📁 GitHub: https://github.com/$GITHUB_USERNAME/$GITHUB_REPO_NAME"
echo -e "🚀 Vercel: https://vercel.com/dashboard"
echo -e "⚡ Автодеплой: каждый push в main → деплой на Vercel"
echo ""
echo -e "Следующие шаги:"
echo -e "  1. Открой GitHub → Settings → Secrets и проверь секреты"
echo -e "  2. Сделай любое изменение и git push — деплой запустится автоматически"
