import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/mainPage';

test('Открытие главной страницы', async ({ mainPage }) => {});
test('Проверка доступности элементов хэдера', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов табов категории', async ({ mainPage }) => {
  await mainPage.categoriesTabsAriaSnapshot();
});
test('Проверка доступности элементов бокового меню', async ({ mainPage }) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов списка добавления контента', async ({ mainPage }) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectSnapshot();
});
test('Проверка доступности элементов попап уведомлений', async ({ mainPage }) => {
  await mainPage.openNotificationPopup();
  await mainPage.NotificationPopupHasCorrectSnapshot();
});
test('Проверка доступности элементов модального окна авторизации', async ({ mainPage }) => {
  await mainPage.openAutorizathionModal();
  await mainPage.AutorizathionModalHasCorrectSnapshot();
});
