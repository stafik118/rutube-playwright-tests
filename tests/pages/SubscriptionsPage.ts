import { Locator, Page } from 'playwright';
import { BasePage } from './BasePage';

export class SubscriptionsPage extends BasePage {
  private readonly contentPageLocator: Locator;
  constructor(page: Page) {
    super(page);

    this.contentPageLocator = this.page.locator('.application-module__content');
  }
  async open() {
    await this.page.goto('https://rutube.ru/my/subscriptions/');
  }
  async contentHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.contentPageLocator, 'contentAriaSnapshot.yml');
  }
}
