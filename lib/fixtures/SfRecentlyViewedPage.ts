import { Locator, Page } from "@playwright/test";
import { SfeBasePage } from "./SfBasePage";
import { SfNewRecordModal } from "./SfNewRecordModal";

export class SfRecentlyViewedPage {
    readonly newButton: Locator;
    readonly sfObjectName: string;
    constructor(public readonly page: Page, private salesforceObjectName: string) {
        this.page = page;
        this.sfObjectName = salesforceObjectName;
        //Get Modal Locator
        this.newButton = page.locator("div[title='New']")
    }   
    async createNew() : Promise<SfNewRecordModal> {
        await this.newButton.click();
        return new SfNewRecordModal(this.page, this.sfObjectName);
    }


}