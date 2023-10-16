import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page';
import MainPage from "../pageobjects/main.page";

const pages = {
    main: MainPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await MainPage.gotoLogin()
    await LoginPage.login(username, password)
});

Then(/^I should see profile icon$/, async () => {
    await expect(MainPage.isOpened()).toBeTruthy()
});

