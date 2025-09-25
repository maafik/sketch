# Инструкция по развертыванию на GitHub Pages

## Автоматическое развертывание

Сайт настроен для автоматического развертывания на GitHub Pages через GitHub Actions с кастомным доменом sketchmaster.store.

### Что нужно сделать:

1. **Включить GitHub Pages в настройках репозитория:**
   - Перейдите в Settings → Pages
   - В разделе "Source" выберите "GitHub Actions"
   - Сохраните настройки

2. **Настроить кастомный домен:**
   - В настройках Pages добавьте домен: `sketchmaster.store`
   - GitHub автоматически создаст CNAME запись
   - Убедитесь, что файл CNAME содержит: `sketchmaster.store`

3. **Запушить изменения в main ветку:**
   ```bash
   git add .
   git commit -m "Настройка для GitHub Pages с кастомным доменом"
   git push origin main
   ```

4. **Проверить развертывание:**
   - Перейдите в Actions вкладку репозитория
   - Убедитесь, что workflow "Deploy to GitHub Pages" выполнился успешно
   - Сайт будет доступен по адресу: `https://sketchmaster.store`

## Ручное развертывание

Если нужно развернуть вручную:

```bash
# Установить зависимости
npm install

# Собрать проект
npm run build

# Развернуть на GitHub Pages
npm run deploy
```

## Структура файлов для GitHub Pages

- `vite.config.ts` - настроен с `base: "/"` для кастомного домена
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/.nojekyll` - отключает Jekyll для GitHub Pages
- `public/404.html` - обрабатывает SPA роутинг для кастомного домена
- `index.html` - содержит скрипт для SPA роутинга
- `CNAME` - файл с кастомным доменом sketchmaster.store

## Устранение проблем

1. **Сайт не загружается:** Проверьте, что в настройках Pages выбран источник "GitHub Actions"
2. **Роутинг не работает:** Убедитесь, что файлы `404.html` и скрипт в `index.html` присутствуют
3. **Статические ресурсы не загружаются:** Проверьте, что `base` в `vite.config.ts` установлен в `"/"` для кастомного домена
4. **Кастомный домен не работает:** Убедитесь, что в настройках Pages добавлен домен `sketchmaster.store` и файл CNAME содержит правильный домен
