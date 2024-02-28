import {Page, Locator, expect} from '@playwright/test';
import pino from "pino";
import { SfRecentlyViewedPage } from './SfRecentlyViewedPage';
import SfRecordViewPage from './SfRecordViewPage';
//import { SalesforceRecentlyViewedPage } from './salesForceRecentlyViewedPage';

//TODO - Not sure where I should put this logger...should I just drop this into every file?
//const logger = pino();


export class SfeBasePage
{
    readonly globalSearch: Locator
    readonly notificationsButton: Locator;

    constructor(public readonly page: Page) {
        this.globalSearch = page.getByPlaceholder('Search Setup');
        this.notificationsButton = page.getByRole('button', { name: 'Notifications' });
    }
    async goto() {
        await this.page.goto('/');
        await this.waitForTopToolbarToLoad();
    }

    async waitForTopToolbarToLoad() {
        console.log("waiting for Salesforce Toolbar to Load...")
        //await expect(this.globalSearch).toBeVisible({timeout: 30000});
        //await expect(this.notificationsButton ).toBeVisible({timeout: 30000})
        console.log("salesforce toolbar is loaded");
    }

    async gotoRecentlyViewed(sfObjectName: string) : Promise<SfRecentlyViewedPage> {
        //TODO: Figure out how to pull this URL from the config
        await this.page.goto(`https://agilitypartners-dev-ed.develop.lightning.force.com/lightning/o/${sfObjectName}/list?filterName=Recent`);
        return new SfRecentlyViewedPage(this.page, sfObjectName);
    }

    async gotoRecordViewPage(sfObjectName: string, sfObjectId: string) {
        const recordUrl = process.env.SF_GUI_BASE_LIGHTNING_URL! + `/r/${sfObjectName}/${sfObjectId}/view`;
        await this.page.goto(recordUrl);
        return new SfRecordViewPage(this.page, sfObjectName, sfObjectId);
    }

    //TODO - Maybe a bit ambitious, but fun nonetheless.
    //AndThen() : SalesforceBasePage { return this;}
}