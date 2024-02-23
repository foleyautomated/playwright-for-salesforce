// https://agilitypartners-dev-ed.develop.lightning.force.com/lightning/page/home
import { Locator, Page } from "@playwright/test";
import { SalesforceBasePage } from "./salesforceBasePage";

export class SalesforceLightningHomePage extends SalesforceBasePage
{
    readonly sellerHomeHeader: Locator;
    constructor(page: Page) {
        super(page);

        //Get Modal Locator
        this.sellerHomeHeader = page.locator("div[title='New']")
    }   
}