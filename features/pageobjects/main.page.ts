import {$} from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get loginButton() {
    return $(`//*[contains(@class, \'auth-bar__item \')][.=\'Вход\']`);
  }
  public get profileIcon() {
    return $('.js-header-user-avatar');
  }

  public async gotoLogin() {
    await this.loginButton.click()
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open('/');
  }

  public async isOpened(): Promise<boolean> {
    return await this.profileIcon.isDisplayed()
  }
}

export default new MainPage();
