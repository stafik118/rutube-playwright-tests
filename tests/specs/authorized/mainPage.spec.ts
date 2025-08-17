import { test, expect } from '../../fixtures/fixtures';

test('Открытие главной страницы авториз. пользователя', async ({ mainPage }) => {});
test('Проверка доступности элементов хэдера авториз. пользователя', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов попап уведомлений авториз. пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationPopup();
  await mainPage.NotificationPopupHasCorrectSnapshot();
});
test('Проверка доступности элементов меню пользователя в хэдере авториз. пользователя', async ({
  mainPage,
}) => {
  await mainPage.openHeaderUserMenu();
  await mainPage.headerUserMenuHasCorrectSnapshot();
});
