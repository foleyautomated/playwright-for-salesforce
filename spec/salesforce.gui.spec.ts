import { test, expect } from '@playwright/test';
import { SfBasePage } from '../lib/fixtures/SfBasePage';
import { SfRecentlyViewedPage } from '../lib/fixtures/SfRecentlyViewedPage';
import { SfRecordDetailsPage } from '../lib/fixtures/SfRecordDetailsPage';
import { faker } from '@faker-js/faker';
import SaleforceConnection from '../lib/api/SfConnection'
import SfRecordViewPage from '../lib/fixtures/SfRecordViewPage';
import { QueryResult } from 'jsforce';


// test.beforeAll(async () => {
// });


test.afterEach(async ({ page }) => {
  await page.close();
});


test('log into salesforce', async ( { page }) => {
    await page.goto("https://agilitypartners-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
  });

test('create new Account via GUI', async ( { page }) => {
    const testName = `Test Name ${Date.now()}`;
    console.log("Test Name: " + testName);
    const sfObjectName: string = 'Account';

    const newAccountModal: SfRecordDetailsPage = await SfRecordDetailsPage.initToNewRecord(page, sfObjectName);
    await newAccountModal.fill('IsDavidsFavorite', true);
    await newAccountModal.fill('Account Name', testName);
    await newAccountModal.fill('SLA Expiration Date', faker.date.future()); 
    await newAccountModal.fill('Shipping Street', '1234 MyStreet Dr.');
    await newAccountModal.fill('Account Site', `www.mysite.com`);
    await newAccountModal.fill('Parent Account', 'Davids Swiss Bank Account');
    await newAccountModal.fill('Upsell Opportunity', 'No');
    await newAccountModal.fill('Rating', 'Hot');
    await newAccountModal.fill('DavidsMultiSelectField', ["One", "Two", "Three", "Thirty-seven", "Forty", "Forty-one", "Ninety-four"]); 
    await newAccountModal.save(testName, "Name");
});


test('Read and Modify existing Account', async ( {page} ) => {
  const testName = `Test Name ${Date.now()}`;
  console.log("Test Name: " + testName);
  const sfObjectName: string = 'Account';
  const sfObjId = '001an000004oIIpAAM';

  const recordPage: SfRecordDetailsPage = await SfRecordDetailsPage.initToExistingRecord(page, sfObjectName, sfObjId)
  const accountName = await recordPage.readTextField("Account Name");
  console.log(accountName);
  const selectedMultiItems = await recordPage.readMultiSelectItems("DavidsMultiSelectField", "Chosen");
  await recordPage.fillMultiSelect('DavidsMultiSelectField', ["One", "Two", "Three", "Thirty-seven", "Forty", "Forty-one", "Ninety-four"]); 
  expect(selectedMultiItems).toContain("Thirty-seven");
  expect(accountName).toBe("MainTestAccount")
  await recordPage.clearMultiSelect('DavidsMultiSelectField');
  expect((await recordPage.readMultiSelectItems('DavidsMultiSelectField', "Chosen")).length).toBe(0);
});


//Parameterized 
const accounts = [`Test Name Via GUI Params1 ${Date.now()}`, `Test Name Via GUI Params2 ${Date.now()}`];
for(const accountName of accounts)
{
  test(`Parameterized Test for Account ${accountName}`, async ( { page }) => {

    const newAccountModal: SfRecordDetailsPage = await SfRecordDetailsPage.initToNewRecord(page, "Account");

    await newAccountModal.fillTextField('Account Name', accountName);
    await newAccountModal.fillDateInput('SLA Expiration Date', faker.date.future()); 
    await newAccountModal.fillTextArea('Shipping Street', '1234 MyStreet Dr.');
    await newAccountModal.fillTextField('Account Site', `Test Site ${Date.now()}`);
    await newAccountModal.fillSearchField('Parent Account', 'Davids Swiss Bank Account');
    await newAccountModal.fillCombobox('Rating', 'Hot');
    await newAccountModal.fillMultiSelect('DavidsMultiSelectField', ["One", "Two", "Three"]);
    
    await (newAccountModal.bottomButtonLocator('Save')).click();

  });
}

