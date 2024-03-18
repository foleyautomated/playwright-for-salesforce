import { Page, Locator, expect } from '@playwright/test';
import pino from 'pino';
import { SfRecentlyViewedPage } from './SfRecentlyViewedPage';
import SfRecordViewPage from './SfRecordViewPage';
import { base } from '@faker-js/faker';
//import { SalesforceRecentlyViewedPage } from './salesForceRecentlyViewedPage';

//TODO - Not sure where I should put this logger...should I just drop this into every file?
//const logger = pino();

export default class SfBasePage {
	readonly globalSearch: Locator;
	constructor(public readonly page: Page) {
		this.globalSearch = page.getByPlaceholder('Search Setup');
	}

	//static initializers
	public static async initToHome(page: Page, sfAppName: string): Promise<SfBasePage> {
		const basePage = new SfBasePage(page);
		await basePage.page.goto(process.env.SF_GUI_BASE_LIGHTNING_URL!, { timeout: 20000 });
		await basePage.gotoSfApp(sfAppName);
		return basePage;
	}

	//TODO: Make less dumb?
	async gotoSfApp(appName: string): Promise<SfBasePage> {
		const currentSfApp = await this.readCurrentSfAppName();
		if (currentSfApp != appName) {
			//do nothing if you're already in the right place 👍
			const appsButton = this.page.locator('.slds-icon-waffle');
			await appsButton.click();
			const appsPopup = this.page.locator('one-app-launcher-menu');
			const searchAppsAndItemsField: Locator = this.page.getByPlaceholder('Search apps and items...');
			await searchAppsAndItemsField.fill(appName);
			const appItems: Locator = appsPopup.locator('one-app-launcher-menu-item').locator('p');
			await expect(appItems.first()).toBeVisible();
			await expect(appItems.first()).toContainText(appName);

			//This is a janky way to get around the fact that I can't sort the results because item.getInnerText() is async, which sort() does not allow.
			const orderedAppItems = await appItems.all();
			let indexOfShortestSearchResult: number = 0;
			for (let i = 0; i < orderedAppItems.length; i++) {
				const itemText = (await orderedAppItems[i].allTextContents()).join('');
				const shortestItemText = (await orderedAppItems[indexOfShortestSearchResult].allTextContents()).join('');
				if (itemText.length < shortestItemText.length) {
					indexOfShortestSearchResult = i;
				}
			}
			await orderedAppItems[indexOfShortestSearchResult].click();
		}
		// await this.ensureCurrentSfAppName(appName);
		return this;
	}

	//TODO: Simplify
	async readCurrentSfAppName(): Promise<string> {
		const sfAppNameTab = this.page.locator('.slds-context-bar__app-name');
		await expect(sfAppNameTab).toHaveText(/.*\w+.*/, { timeout: 20000 });
		const currentSfAppName = await sfAppNameTab.textContent();
		if (currentSfAppName == null) {
			throw new Error('Unable to determine SF App Name');
		} else {
			return currentSfAppName;
		}
	}

	async ensureCurrentSfAppName(expectedSfAppName: string): Promise<void> {
		const appNameSpan: Locator = this.page
			.locator('.slds-context-bar__app-name')
			.locator('span');
		console.log(appNameSpan);
		// TODO : Every method of accessing this element closes the browser for some reason
		const appName = await appNameSpan.textContent();
		console.log(appName);
		expect(appName).toBe(appName);
		console.log(`Successfully ensured SF App: ${expectedSfAppName}`);
	}

	// public static async initToApp(page: Page, appName: String) : Promise<SfBasePage> {
	//     let appPage = this.initToHome(page);
	// }

	//convenience methods
	async gotoRecentlyViewed(sfObjectName: string): Promise<SfRecentlyViewedPage> {
		const recentlyViewedPage = SfRecentlyViewedPage.init(this.page, sfObjectName);
		return recentlyViewedPage;
	}

	// async gotoApp(appName: string) : Promise<SfRecentlyViewedPage> {

	// }

	//TODO - Maybe a bit ambitious, but fun nonetheless.
	//AndThen() : SalesforceBasePage { return this;}
}
