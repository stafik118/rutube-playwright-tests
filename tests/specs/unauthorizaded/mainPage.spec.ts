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
