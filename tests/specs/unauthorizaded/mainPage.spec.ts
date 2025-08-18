import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Открытие главной страницы неавториз. пользователя', async ({ mainPage }) => {});
test('Проверка доступности элементов хэдера неавториз. пользователя', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов табов категории неавториз. пользователя', async ({
  mainPage,
}) => {
  await mainPage.categoriesTabsAriaSnapshot();
});
test('Проверка доступности элементов бокового меню неавториз. пользователя', async ({
  mainPage,
}) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов списка добавления контента неавториз. пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectSnapshot();
});
test('Проверка доступности элементов попап уведомлений неавториз. пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationPopup();
  await mainPage.NotificationPopupHasCorrectSnapshot();
});
test('Проверка доступности элементов модального окна авторизации неавториз. пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAutorizathionModal();
  await mainPage.AutorizathionModalHasCorrectSnapshot();
});
test('Переключение темы неавториз. пользователя', async ({ mainPage }) => {
  await mainPage.checkThemeAttributeValue('dark2021');
  await mainPage.changeThemeToWhite();
  await mainPage.checkThemeAttributeValue('white2022');
});
