import { Page } from '@playwright/test';
export class BasePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async closeCookiesAlert() {
    await this.page.getByRole('button', { name: 'Ок', exact: true }).click();
  }
  // async closeModal() {
  //   await this.page.getByRole('button', { name: 'Закрыть' }).click();
  // }
  // async closePush() {
  //   await this.page
  //     .locator('.svg-icon.svg-icon--IconClose.svg-icon--size.push-notification-popup-module__close')
  //     .click();
  // }
  async closeModal() {
    const closeButton = this.page.getByRole('button', { name: 'Закрыть' });

    // Проверяем, виден ли элемент в течение 3 секунд
    const isVisible = await closeButton.isVisible({ timeout: 3000 }).catch(() => false);

    if (isVisible) {
      await closeButton.click();
    }
  }

  async closePush() {
    const pushCloseButton = this.page.locator(
      '.svg-icon.svg-icon--IconClose.svg-icon--size.push-notification-popup-module__close',
    );

    // Проверяем, виден ли элемент в течение 3 секунд
    const isVisible = await pushCloseButton.isVisible({ timeout: 3000 }).catch(() => false);

    if (isVisible) {
      await pushCloseButton.click();
    }
  }
}
