
// https://agilitypartners-dev-ed.develop.my.salesforce.com/
import { expect, type Locator, type Page } from '@playwright/test';

export class SalesforceLoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly sumbitButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.sumbitButton = page.locator('#Login');
    }

    async login(username: string, password: string) : Promise<void> {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.sumbitButton.click();
    }
}