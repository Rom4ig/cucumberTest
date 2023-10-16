import {$} from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get fastSearch() {
    return $('.fast-search__input');
  }
  public get searchInput() {
    return $('.search__input');
  }
  public categoryByName(categoryName: String) {
    return $(`//div[contains(@class, 'result__item_category')]/a[contains (text(), '${categoryName}')]`);
  }
  public async search(text: string) {
    await browser.pause(10000)
    await this.fastSearch.clearValue()
    await this.searchInput.setValue(text)


  }

  public async categoryByNameDisplayed(categoryName: string): Promise<boolean> {
    return await this.categoryByName(categoryName).isDisplayed()
  }
}

export default new SearchPage();
