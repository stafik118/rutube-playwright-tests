import test from '@playwright/test';
import { SubscriptionsPage } from '../../pages/subscriptionsPage';

test('Проверка доступности контента для авториз. пользователя', async ({ page }) => {
  const subscriptionsPage = new SubscriptionsPage(page);
  await subscriptionsPage.open();
  await subscriptionsPage.closeCookiesAlert();
  await subscriptionsPage.contentHasCorrectAriaSnapshot();
});
