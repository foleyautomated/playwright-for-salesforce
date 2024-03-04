import { Locator, Page, expect } from "@playwright/test";
import { SfBasePage } from "./SfBasePage";
import { SfRecordDetailsPage } from "./SfRecordDetailsPage";

export class SfRecentlyViewedPage {
    readonly newButton: Locator;
    public readonly url: string;
    private constructor(
        public readonly page: Page, 
        public readonly sfObjectName: string) {
        this.newButton = page.locator("div[title='New']")
        this.url = `${process.env.SF_GUI_BASE_LIGHTNING_URL}/o/${sfObjectName}/list?filterName=Recent`
    }   
    public static async init(page: Page, sfObjectName: string) : Promise<SfRecentlyViewedPage> {
        const newRecentlyViewedPage = new SfRecentlyViewedPage(page, sfObjectName);
        await newRecentlyViewedPage.page.goto(newRecentlyViewedPage.url);
        await expect(newRecentlyViewedPage.page).toHaveTitle(/Recently Viewed/);
        return newRecentlyViewedPage;
    }
    async CreateNewRecord() : Promise<SfRecordDetailsPage> {
        await this.newButton.click();
        return SfRecordDetailsPage.initFromSfRecordViewPage(this);
    }


}