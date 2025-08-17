import { test, expect } from '../../fixtures/fixtures';

test('Проверка лэйаута', async ({ categoriesPage }) => {
  await categoriesPage.contentPageHasCorrectLayout();
});
