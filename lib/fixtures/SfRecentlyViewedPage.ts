import { Locator, Page } from "@playwright/test";
import { SfeBasePage } from "./SfBasePage";
import { SObjectRecordDetails } from "./SObjectRecordDetails";

export class SfRecentlyViewedPage {
    readonly newButton: Locator;
    readonly sfObjectName: string;
    constructor(public readonly page: Page, private salesforceObjectName: string) {
        this.page = page;
        this.sfObjectName = salesforceObjectName;
        //Get Modal Locator
        this.newButton = page.locator("div[title='New']")
    }   
    async createNew() : Promise<SObjectRecordDetails> {
        await this.newButton.click();
        return new SObjectRecordDetails(this.page, this.sfObjectName);
    }


}