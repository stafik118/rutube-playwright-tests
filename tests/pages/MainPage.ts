import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabsLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButtonLocator: Locator;
  private readonly headerNotificationButtonLocator: Locator;
  private readonly headerLoginButtonLocator: Locator;
  private readonly headerAddButtonListLocator: Locator;
  private readonly headerNotificationPopupLocator: Locator;
  private readonly autorizhationModalLocator: Locator;
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly changeThemeButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.locator('.wdp-header-module__header');
    this.categoriesTabsLocator = this.page
      .getByRole('main')
      .locator('div')
      .filter({
        hasText: 'ГлавнаяРекомендацииФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ ',
      })
      .nth(1);
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
    this.headerNotificationButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
    this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
    this.headerAddButtonListLocator = this.page.locator('.wdp-header-right-module__uploader ul');
    this.headerNotificationPopupLocator = this.page.locator(
      '.wdp-notifications-popup-module__wrapper ',
    );
    this.autorizhationModalLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]');
    this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
    this.openMenuAriaLocator = this.page.locator('.menu-auth-module__title');
    this.changeThemeButtonLocator = this.page.getByRole('button', {
      name: 'Переключить на светлую тему',
    });
  }
  async open() {
    await this.page.goto('https://rutube.ru/');
  }
  async changeThemeToWhite() {
    await this.changeThemeButtonLocator.click();
  }
  async openFullMenu() {
    await this.menuButtonLocator.click();
    await this.page.waitForSelector('.menu-content-module__menuOpen', {
      state: 'visible',
      timeout: 10000,
    });
  }
  async headerHasCorrectAriaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({ name: 'headerAriaSnapshot.yml' });
  }
  async categoriesTabsAriaSnapshot() {
    await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({
      name: 'categoriesTabsriaSnapshot.yml',
    });
  }
  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({ name: 'menuAriaSnapshot.yml' });
  }
  async openAddPopupList() {
    await this.headerAddButtonLocator.click();
  }
  async openNotificationPopup() {
    await this.headerNotificationButtonLocator.click();
  }
  async openAutorizathionModal() {
    await this.headerLoginButtonLocator.click();
  }
  async addPopupListHasCorrectSnapshot() {
    await expect(this.headerAddButtonListLocator).toMatchAriaSnapshot({
      name: 'addButtonSnapshot.yml',
    });
  }
  async NotificationPopupHasCorrectSnapshot() {
    await expect(this.headerNotificationPopupLocator).toMatchAriaSnapshot({
      name: 'notificationaSnapshot.yml',
    });
  }
  async AutorizathionModalHasCorrectSnapshot() {
    await expect(this.autorizhationModalLocator).toMatchAriaSnapshot({
      name: 'autorizationSnapshot.yml',
    });
  }
  async fullMenu() {
    await expect(this.openMenuAriaLocator).toMatchAriaSnapshot({
      name: 'fullMenuSnapshot.yml',
    });
  }
  async checkThemeAttributeValue(attrubuteValue: 'dark2021' | 'white2022') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attrubuteValue);
  }
}
