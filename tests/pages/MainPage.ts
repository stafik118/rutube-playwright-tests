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
  private readonly userLogoLocator: Locator;
  private readonly headerUserMenuLocator: Locator;

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
    this.openMenuAriaLocator = this.page.locator('.menu-info-module__copyright');
    this.changeThemeButtonLocator = this.page.getByRole('button', {
      name: 'Переключить на светлую тему',
    });
    this.userLogoLocator = this.page.getByRole('img', { name: 'Иконка канала Кирилл' });
    this.headerUserMenuLocator = this.page.getByText(
      'Кирилл+7 *** ***-15-10Завершите регистрациюПрофильМой каналСтудия RUTUBEВыйти',
    );
  }

  //actions
  async open() {
    await this.page.goto('https://rutube.ru/');
  }
  async openHeaderUserMenu() {
    await this.userLogoLocator.click();
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
  async openAddPopupList() {
    await this.headerAddButtonLocator.click();
  }
  async openNotificationPopup() {
    await this.headerNotificationButtonLocator.click();
  }
  async openAutorizathionModal() {
    await this.headerLoginButtonLocator.click();
  }

  //assertions
  async addPopupListHasCorrectSnapshot() {
    await this.checkAriaSnapshot(this.headerAddButtonListLocator, 'addButtonSnapshot.yml');
  }
  async NotificationPopupHasCorrectSnapshot() {
    await this.checkAriaSnapshot(this.headerNotificationPopupLocator, 'notificationaSnapshot.yml');
  }
  async AutorizathionModalHasCorrectSnapshot() {
    await this.checkAriaSnapshot(this.autorizhationModalLocator, 'autorizationSnapshot.yml');
  }
  async checkThemeAttributeValue(attrubuteValue: 'dark2021' | 'white2022') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attrubuteValue);
  }
  async headerUserMenuHasCorrectSnapshot() {
    await this.checkAriaSnapshot(this.headerUserMenuLocator, 'headerUserMenuSnapshot.yml');
  }
  async headerHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerLocator, 'headerAriaSnapshot.yml');
  }
  async categoriesTabsAriaSnapshot() {
    await this.checkAriaSnapshot(this.categoriesTabsLocator, 'categoriesTabsriaSnapshot.yml');
  }
  async menuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.menuLocator, 'menuAriaSnapshot.yml');
  }
}
