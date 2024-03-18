import { chromium, expect, type FullConfig } from '@playwright/test';
import { SalesforceLoginPage} from '../pages/salesforceLoginPage'; 
//import { SfBasePage } from '../sfdynamics/SfBasePage';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


async function globalSetup(config: FullConfig) {

  console.log("Hello From globalSetup!");



  //const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const storageStateFilePath = `${process.cwd()}/debug/states/defaultStorageState.json`;
  const ageOfStorageStateInMinutes = getFileAgeInMinutes(storageStateFilePath);
  if(
    true //TODO: FIx
    //ageOfStorageStateInMinutes == undefined ||
    //ageOfStorageStateInMinutes > Number(process.env.MAX_AGE_OF_CONTEXT_IN_MINS)
    )
  {
    console.log(`Refreshing browser state because the existing saved state is ${ageOfStorageStateInMinutes} mins old.`);
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const salesforcePage = await SalesforceLoginPage.init(page);
    await salesforcePage.login(process.env.SALESFORCE_USERNAME!, process.env.SALESFORCE_PASSWORD!);
    //TODO: Deal with 'verify code sent to blah blah email'
    await page.context().storageState({ path: storageStateFilePath});
    await browser.close();
  } else {
    console.log(`Using existing browser state because it is only ${ageOfStorageStateInMinutes} mins old.`);
  }
}

function getFileAgeInMinutes(filePath: string): number | undefined {

  if(fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const fileTimestamp = stats.mtimeMs; // Last modification time in milliseconds
    const currentTime = Date.now();
    const ageInMilliseconds = currentTime - fileTimestamp;
    const ageInMinutes = Math.floor(ageInMilliseconds / (1000 * 60)); // Convert to minutes
    console.log(`Current Age of Context, in mins: ${ageInMinutes}`)
    return ageInMinutes;
  } else {
    return undefined;
  }

}

export default globalSetup;