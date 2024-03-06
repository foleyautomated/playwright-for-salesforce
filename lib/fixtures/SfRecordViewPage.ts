import { Locator, Page } from "@playwright/test";
import { SfBasePage } from "./SfBasePage";
import { SfRecordDetailsPage } from "./SfRecordDetailsPage";

export default class SfRecordViewPage {
    readonly detailsTab: Locator = this.lighteningTabLocator("Details");
    readonly relatedTab: Locator = this.lighteningTabLocator("Related");
    readonly url: string = process.env.SF_GUI_BASE_LIGHTNING_URL! + `/r/${this.sObjectName}/${this.sObjectId}/view`;

    private constructor(
        public readonly page: Page,
        public sObjectName: string, 
        public sObjectId: string
    ) {}   

    public static async initToExistingRecord(page: Page, sfObjectName: string, sfObjectId: string) : Promise<SfRecordViewPage>
    {
        const recordViewPage = new SfRecordViewPage(page, sfObjectName, sfObjectId);
        await recordViewPage.page.goto(recordViewPage.url);
        return recordViewPage;
    }
    async gotoDetailsAndEdit() : Promise<SfRecordDetailsPage> {

        return SfRecordDetailsPage.initFromSfRecordViewPage(this);
    }
    lighteningTabLocator(tabLabel: string) : Locator {
        const tabLocator = this.page.locator("lightning-tab-bar").locator('li').getByText(tabLabel, {exact: true} );
        return tabLocator;
    }
}