import { When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import SearchPage from "../pageobjects/search.page";

When(/^I search (.+)$/, async (searchString) => {
  await SearchPage.search(searchString)
});

Then(/^I should see category with name (.+)$/, async (categoryName) => {
  await expect(SearchPage.categoryByNameDisplayed(categoryName)).toBeTruthy()
});
