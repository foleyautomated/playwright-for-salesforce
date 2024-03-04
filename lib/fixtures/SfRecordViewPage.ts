import { Locator, Page } from "@playwright/test";
import { SfBasePage } from "./SfBasePage";
import { SfRecordDetailsPage } from "./SfRecordDetailsPage";

export default class SfRecordViewPage {
    readonly detailsTab: Locator;
    readonly relatedTab: Locator;
    readonly url: string;

    private constructor(
        public readonly page: Page,
        public sfObjectName: string, 
        public sfObjectId: string) 
        {
            this.detailsTab = this.lighteningTabLocator("Details");
            this.relatedTab = this.lighteningTabLocator("Related");
            this.url = process.env.SF_GUI_BASE_LIGHTNING_URL! + `/r/${this.sfObjectName}/${this.sfObjectId}/view`;
        }   

    public static async initToExistingRecord(page: Page, sfObjectName: string, sfObjectId: string) : Promise<SfRecordViewPage>
    {
        const recordViewPage = new SfRecordViewPage(page, sfObjectName, sfObjectId);
        await recordViewPage.page.goto(recordViewPage.url);
        return recordViewPage;
    }
    async gotoDetailsAndEdit() : Promise<SfRecordDetailsPage> {
        await this.detailsTab.click();
        const firstPencilIcon = this.page.locator("[class*='inline-edit-trigger-ico']").first();
        await firstPencilIcon.click();
        return SfRecordDetailsPage.initFromSfRecordViewPage(this);
    }
    lighteningTabLocator(tabLabel: string) : Locator {
        const tabLocator = this.page.locator("lightning-tab-bar").locator('li').getByText(tabLabel, {exact: true} );
        return tabLocator;
    }
}