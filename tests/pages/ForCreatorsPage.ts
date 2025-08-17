import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ForCreatorsPage extends BasePage {
  static readonly testsParams = [
    {
      url: 'https://rutube.ru/for_creators/#main',
      screenShotName: 'mainTab.png',
      name: 'Главная',
    },
    {
      url: 'https://rutube.ru/for_creators/#steps',
      screenShotName: 'stepsTab.png',
      name: 'Первые шаги',
    },
    {
      url: 'https://rutube.ru/for_creators/#faq',
      screenShotName: 'faqTab.png',
      name: 'Как развивать канал',
    },
    {
      url: 'https://rutube.ru/for_creators/#monetization',
      screenShotName: 'monetizationTab.png',
      name: 'Монетизация',
    },
    {
      url: 'https://rutube.ru/for_creators/#rules',
      screenShotName: 'rulesTab.png',
      name: 'Правила',
    },
    {
      url: 'https://rutube.ru/for_creators/#team',
      screenShotName: 'teamTab.png',
      name: 'Команда R',
    },
  ];
  private readonly pageContentLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.pageContentLocator = this.page.locator('#___gatsby');
  }
  async open(url: string) {
    await this.page.goto(url);
  }
  async pageHasCorrectLayout(screenShotName: string) {
    await this.checkLayoutByScreenshot(this.pageContentLocator, screenShotName);
  }
}
