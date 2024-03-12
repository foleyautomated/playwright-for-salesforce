import {Page, Locator, expect} from '@playwright/test';
import pino from "pino";
import { SfRecentlyViewedPage } from './SfRecentlyViewedPage';
import SfRecordViewPage from './SfRecordViewPage';
//import { SalesforceRecentlyViewedPage } from './salesForceRecentlyViewedPage';

//TODO - Not sure where I should put this logger...should I just drop this into every file?
//const logger = pino();


export class SfBasePage
{
    readonly globalSearch: Locator
    private constructor(
        public readonly page: Page
        ) {
        this.globalSearch = page.getByPlaceholder('Search Setup');


    }

    //static initializers
    public static async initToHome(page: Page) : Promise<SfBasePage> {
        const basePage = new SfBasePage(page)
        await basePage.page.goto('/');
        return basePage;
    }

    async GotoSfApp(appName: string): Promise<void> {
        const appsButton = this.page.locator('.slds-icon-waffle'); 
        await appsButton.click();
        const appsPopup = this.page.locator('one-app-launcher-menu');
        const searchAppsAndItemsField: Locator = this.page.getByPlaceholder('Search apps and items...');
        await searchAppsAndItemsField.fill(appName);
        const appItems: Locator = appsPopup.locator('one-app-launcher-menu-item').locator('p')
    }

    //

    // public static async initToApp(page: Page, appName: String) : Promise<SfBasePage> {
    //     let appPage = this.initToHome(page);
    // }

    //convenience methods
    async gotoRecentlyViewed(sfObjectName: string) : Promise<SfRecentlyViewedPage> {
        const recentlyViewedPage = SfRecentlyViewedPage.init(this.page, sfObjectName);
        return recentlyViewedPage;
    }

    // async gotoApp(appName: string) : Promise<SfRecentlyViewedPage> {

    // }



    //TODO - Maybe a bit ambitious, but fun nonetheless.
    //AndThen() : SalesforceBasePage { return this;}
}