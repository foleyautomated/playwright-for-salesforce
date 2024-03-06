import { Locator, Page, expect } from "@playwright/test";
import { SfBasePage } from "./SfBasePage";
import { SfRecordDetailsPage } from "./SfRecordDetailsPage";
import SObjectSchema from "../api/SObjectSchema";

export class SfRecentlyViewedPage {
    readonly newButton: Locator = this.page.locator("div[title='New']")
    public readonly url: string = `${process.env.SF_GUI_BASE_LIGHTNING_URL}/o/${this.sObjectName}/list?filterName=Recent`
    
    private constructor( 
        public readonly page: Page, 
        public readonly sObjectName: string,
        public readonly sObjectSchema: SObjectSchema
    ) {}

    public static async init(page: Page, sfObjectName: string) : Promise<SfRecentlyViewedPage> {
        const schema = await SObjectSchema.init(sfObjectName);
        const newRecentlyViewedPage = new SfRecentlyViewedPage(page, sfObjectName, schema);
        await newRecentlyViewedPage.page.goto(newRecentlyViewedPage.url);
        await expect(newRecentlyViewedPage.page).toHaveTitle(/Recently Viewed/);
        return newRecentlyViewedPage;
    }
    async CreateNewRecord() : Promise<SfRecordDetailsPage> {
        return await SfRecordDetailsPage.initFromSfRecentlyViewedPage(this);
    }


}