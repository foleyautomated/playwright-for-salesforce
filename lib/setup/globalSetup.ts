import { chromium, expect, type FullConfig } from '@playwright/test';
import { SalesforceLoginPage} from '../pages/salesforceLoginPage'; 
import { SalesforceBasePage } from '../fixtures/salesforceBasePage';


async function globalSetup(config: FullConfig) {

  console.log("Hello From globalSetup!");

  const { baseURL, storageState } = config.projects[0].use;

  //Uncomment to use GUI; TODO: do this not dumb
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseURL!);
  const salesforcePage = new SalesforceLoginPage(page);
  await salesforcePage.login(process.env.SALESFORCE_USERNAME!, process.env.SALESFORCE_PASSWORD!);
  const salesforceSettupPage = new SalesforceBasePage(page);
  await salesforceSettupPage.waitForTopToolbarToLoad();
  await expect(page).toHaveURL(/lightning/);

  await page.context().storageState({ path: '/debug/states/defaultStorageState.json'});
  await browser.close();
}

export default globalSetup;