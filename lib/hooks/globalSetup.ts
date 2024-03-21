import { chromium, type FullConfig } from '@playwright/test';
import { SalesforceLoginPage} from '../pages/salesforceLoginPage'; 
import { STORAGE_STATE } from '../../playwright.config';
import { getFileAgeInMinutes } from '../utils/file.utils';

/**
 * Performs various setup tasks to prepare project before testing
 * 
 * @param config Full configuration defined in playwright.config.ts
 */
export default async function globalSetup(config: FullConfig) {

	// Initialize project modules
	await initializeBrowserState();
}

/**
 * Initializes a valid browser state for tests. Determines the age of the default browser state,
 * and generates a new one if it is too old. Max age is defined in minutes by env var MAX_AGE_OF_CONTEXT_IN_MINS.
 * 
 * @param stateDir Directory to store browser states in
 */
async function initializeBrowserState() {
	const browserStatePath = STORAGE_STATE;
	const browserStateAge = getFileAgeInMinutes(browserStatePath);
	const browserStateMaxAge = Number(process.env.MAX_AGE_OF_CONTEXT_IN_MINS);
	if (browserStateAge == -1 || browserStateAge > browserStateMaxAge) {
		console.log(`Generating new browser state because it is missing or older than ${browserStateMaxAge} minutes`);
		try {
			const browser = await chromium.launch();
			const page = await browser.newPage();
			const salesforcePage = await SalesforceLoginPage.init(page);
			await salesforcePage.login(process.env.SALESFORCE_USERNAME!, process.env.SALESFORCE_PASSWORD!);
			//TODO: Deal with 'verify code sent to blah blah email'
			await page.context().storageState({ path: browserStatePath });
			await browser.close();
		} catch (err: any) {
			if (err instanceof Error)
				console.error(`[FATAL] Failed to generate new browser context: ${err.message}`);
			else
				console.error('[FATAL] Failed to generate new browser context: unknown');
			process.exit(1);
		}
	} else {
		console.log(`Using existing browser state because it is only ${browserStateAge} minutes old`);
	}
}
