import test from '@playwright/test';
import { MainPage } from '../../pages/mainPage';

test('Открытие главной страницы', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
});
test('Проверка доступности элементов хэдера', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов табов категории', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.categoriesTabsAriaSnapshot();
});
test('Проверка доступности элементов бокового меню', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.menuHasCorrectAriaSnapshot();
});
