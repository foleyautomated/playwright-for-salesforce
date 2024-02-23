import {Page, Locator, expect} from '@playwright/test';
import pino from "pino";
import { SalesforceRecentlyViewedPage } from './salesForceRecentlyViewedPage';
//import { SalesforceRecentlyViewedPage } from './salesForceRecentlyViewedPage';

//TODO - Not sure where I should put this logger...should I just drop this into every file?
//const logger = pino();


export class SalesforceBasePage
{
    readonly globalSearch: Locator
    readonly notificationsButton: Locator;

    constructor(public readonly page: Page) {
        this.globalSearch = page.getByPlaceholder('Search Setup');
        this.notificationsButton = page.getByRole('button', { name: 'Notifications' });
    }
    async goto() {
        await this.page.goto('/');
    }

    async waitForTopToolbarToLoad() {
        console.log("waiting for Salesforce Toolbar to Load...")
        //await expect(this.globalSearch).toBeVisible({timeout: 30000});
        //await expect(this.notificationsButton ).toBeVisible({timeout: 30000})
        console.log("salesforce toolbar is loaded");
    }

    async gotoRecentlyViewed(sfObjectName: string) : Promise<SalesforceRecentlyViewedPage> {
        //TODO: Figure out how to pull this URL from the config
        await this.page.goto(`https://agilitypartners-dev-ed.develop.lightning.force.com/lightning/o/${sfObjectName}/list?filterName=Recent`);
        return new SalesforceRecentlyViewedPage(this.page, sfObjectName);
    }

    //TODO - Maybe a bit ambitious, but fun nonetheless.
    //AndThen() : SalesforceBasePage { return this;}
}