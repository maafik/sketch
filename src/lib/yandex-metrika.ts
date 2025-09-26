// Утилиты для работы с Яндекс.Метрикой

declare global {
  interface Window {
    ym?: (counterId: number, method: string, goalName: string) => void;
  }
}

/**
 * Отправляет событие достижения цели в Яндекс.Метрику
 * @param goalName - Название цели для отслеживания
 * @param counterId - ID счетчика Яндекс.Метрики (по умолчанию 99130561)
 */
export const trackYandexGoal = (goalName: string, counterId: number = 99130561) => {
  // Проверяем, что мы в браузере и Яндекс.Метрика загружена
  if (typeof window !== 'undefined' && window.ym) {
    try {
      window.ym(counterId, 'reachGoal', goalName);
      console.log(`✅ Yandex Metrika goal reached: ${goalName}`);
    } catch (error) {
      console.error('❌ Error sending goal to Yandex Metrika:', error);
    }
  } else {
    console.warn('⚠️ Yandex Metrika not loaded yet or not available');
  }
};

/**
 * Проверяет, загружена ли Яндекс.Метрика
 */
export const isYandexMetrikaLoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.ym === 'function';
};

/**
 * Ждет загрузки Яндекс.Метрики и затем отправляет цель
 * @param goalName - Название цели для отслеживания
 * @param maxWaitTime - Максимальное время ожидания в миллисекундах (по умолчанию 5000)
 */
export const trackYandexGoalWhenReady = (
  goalName: string, 
  maxWaitTime: number = 5000
): Promise<void> => {
  return new Promise((resolve) => {
    if (isYandexMetrikaLoaded()) {
      trackYandexGoal(goalName);
      resolve();
      return;
    }

    const startTime = Date.now();
    const checkInterval = setInterval(() => {
      if (isYandexMetrikaLoaded()) {
        trackYandexGoal(goalName);
        clearInterval(checkInterval);
        resolve();
      } else if (Date.now() - startTime > maxWaitTime) {
        console.warn(`⚠️ Yandex Metrika not loaded within ${maxWaitTime}ms, skipping goal: ${goalName}`);
        clearInterval(checkInterval);
        resolve();
      }
    }, 100);
  });
};

// Предопределенные цели для удобства использования
export const YANDEX_GOALS = {
  VIEW_PORTFOLIO: 'view_portfolio',
  NAV_PORTFOLIO: 'nav_portfolio',
  MOBILE_NAV_PORTFOLIO: 'mobile_nav_portfolio',
  NAV_ORDER: 'nav_order',
  MOBILE_NAV_ORDER: 'mobile_nav_order',
  HERO_ORDER: 'hero_order',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  SOCIAL_CLICK: 'social_click',
  VIDEO_PLAY: 'video_play',
} as const;

export type YandexGoalType = typeof YANDEX_GOALS[keyof typeof YANDEX_GOALS];
