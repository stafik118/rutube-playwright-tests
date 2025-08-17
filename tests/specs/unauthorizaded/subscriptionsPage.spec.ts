import test from '@playwright/test';
import { SubscriptionsPage } from '../../pages/SubscriptionsPage';

test('Проверка доступности контента для неавториз. пользователя', async ({ page }) => {
  const subscriptionsPage = new SubscriptionsPage(page);
  await subscriptionsPage.open();
  await subscriptionsPage.closeCookiesAlert();
  await subscriptionsPage.contentHasCorrectAriaSnapshot();
});
