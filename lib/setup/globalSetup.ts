import { chromium, expect, type FullConfig } from '@playwright/test';
import { SalesforceLoginPage} from '../pages/salesforceLoginPage'; 
import { SfBasePage } from '../fixtures/SfBasePage';
import * as fs from 'fs';

async function globalSetup(config: FullConfig) {

  console.log("Hello From globalSetup!");

  const { baseURL, storageState } = config.projects[0].use;
  const storageStateFilePath = '/debug/states/defaultStorageState.json';
  const ageOfStorageStateInMinutes = getFileAgeInMinutes(storageStateFilePath);

  
  if(ageOfStorageStateInMinutes > 20)
  {
    console.log(`Refreshing browser state because the existing saved state is ${ageOfStorageStateInMinutes} mins old.`)
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(baseURL!);
    const salesforcePage = new SalesforceLoginPage(page);
    await salesforcePage.login(process.env.SALESFORCE_USERNAME!, process.env.SALESFORCE_PASSWORD!);
    await expect(page).toHaveURL(/lightning/);
    await page.context().storageState({ path: storageStateFilePath});
    await browser.close();
  } else {
    console.log(`Using existing browser state because it is only ${ageOfStorageStateInMinutes} mins old.`)
  }
}

function getFileAgeInMinutes(filePath: string): number {

      const stats = fs.statSync(filePath);
      const fileTimestamp = stats.mtimeMs; // Last modification time in milliseconds
      const currentTime = Date.now();
      const ageInMilliseconds = currentTime - fileTimestamp;
      const ageInMinutes = Math.floor(ageInMilliseconds / (1000 * 60)); // Convert to minutes
      console.log(`Current Age of Context, in mins: ${ageInMinutes}`)
      return ageInMinutes;

}

export default globalSetup;