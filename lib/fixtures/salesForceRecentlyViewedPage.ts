import { Locator, Page } from "@playwright/test";
import { SalesforceBasePage } from "./salesforceBasePage";
import { SalesforceModal } from "./salesforceModal";

export class SalesforceRecentlyViewedPage {
    readonly newButton: Locator;
    readonly sfObjectName: string;
    constructor(public readonly page: Page, private salesforceObjectName: string) {
        this.page = page;
        this.sfObjectName = salesforceObjectName;
        //Get Modal Locator
        this.newButton = page.locator("div[title='New']")
    }   
    async createNew() : Promise<SalesforceModal> {
        await this.newButton.click();
        return new SalesforceModal(this.page, this.sfObjectName);
    }

}