# Инструкция по развертыванию на GitHub Pages

## Автоматическое развертывание

Сайт настроен для автоматического развертывания на GitHub Pages через GitHub Actions.

### Что нужно сделать:

1. **Включить GitHub Pages в настройках репозитория:**
   - Перейдите в Settings → Pages
   - В разделе "Source" выберите "GitHub Actions"
   - Сохраните настройки

2. **Запушить изменения в main ветку:**
   ```bash
   git add .
   git commit -m "Настройка для GitHub Pages"
   git push origin main
   ```

3. **Проверить развертывание:**
   - Перейдите в Actions вкладку репозитория
   - Убедитесь, что workflow "Deploy to GitHub Pages" выполнился успешно
   - Сайт будет доступен по адресу: `https://ваш-username.github.io/sketch.master-/`

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

- `vite.config.ts` - настроен с `base: "/sketch.master-/"`
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/.nojekyll` - отключает Jekyll для GitHub Pages
- `public/404.html` - обрабатывает SPA роутинг
- `index.html` - содержит скрипт для SPA роутинга

## Устранение проблем

1. **Сайт не загружается:** Проверьте, что в настройках Pages выбран источник "GitHub Actions"
2. **Роутинг не работает:** Убедитесь, что файлы `404.html` и скрипт в `index.html` присутствуют
3. **Статические ресурсы не загружаются:** Проверьте, что `base` в `vite.config.ts` соответствует имени репозитория
