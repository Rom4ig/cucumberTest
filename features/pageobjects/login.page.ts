import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $(`//*[@placeholder = \'Ник или e-mail\']`);
    }

    public get inputPassword () {
        return $(`//*[@placeholder = 'Пароль']`);
    }

    public get btnSubmit () {
        return $(`//div[contains(@class, 'auth-form__con')]/button`);
    }
    public get captcha () {
        return $(`.recaptcha-checkbox-border`);
    }


    public async clickCheckbox(): Promise<void> {
        const iframe = $('iframe[title="reCAPTCHA"]');
        await iframe.click({ x: 25, y: 33 });
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await this.clickCheckbox();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('/');
    }
}

export default new LoginPage();
