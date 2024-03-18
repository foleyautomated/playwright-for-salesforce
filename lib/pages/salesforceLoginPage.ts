
// https://agilitypartners-dev-ed.develop.my.salesforce.com/
import { expect, type Locator, type Page } from '@playwright/test';
import SfBasePage from '../sfdynamics/SfBasePage';

export class SalesforceLoginPage {
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly sumbitButton: Locator;
    
    private constructor(
        public readonly page: Page) 
        {
        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.sumbitButton = page.locator('#Login');
    }

    static async init(page: Page) : Promise<SalesforceLoginPage> {
        const loginPage = new SalesforceLoginPage(page);
        await loginPage.page.goto(process.env.SF_API_LOGIN_URL!);
        await expect(loginPage.sumbitButton).toBeVisible();
        return loginPage;
    }

    async login(username: string, password: string) : Promise<void> {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.sumbitButton.click();

        const sfBasePage = new SfBasePage(this.page);
        const currentAppName = await sfBasePage.readCurrentSfAppName(); //Raoundabout way to Ensure Fully Loaded
        console.trace("Logging into SF; using App: " + currentAppName);

    }
}