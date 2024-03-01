import { Locator, Page } from "@playwright/test";
import { SfeBasePage } from "./SfBasePage";
import { SObjectRecordDetails } from "./SObjectRecordDetails";

export default class SfRecordViewPage {
    readonly detailsTab: Locator;
    constructor(public readonly page: Page, public sfObjectName: string, public sfObjectId: string) {
        this.page = page;
        this.sfObjectName = sfObjectName;
        this.detailsTab = this.lighteningTabLocator("Details");
    }   
    async gotoDetails() : Promise<SObjectRecordDetails> {
        await this.detailsTab.click();
        const firstPencilIcon = this.page.locator("[class*='inline-edit-trigger-ico']").first();
        await firstPencilIcon.click();
        return new SObjectRecordDetails(this.page, this.sfObjectName);
    }
    lighteningTabLocator(tabLabel: string) : Locator {
        const tabLocator = this.page.locator("lightning-tab-bar").locator('li').getByText(tabLabel, {exact: true} );
        return tabLocator;
    }
}