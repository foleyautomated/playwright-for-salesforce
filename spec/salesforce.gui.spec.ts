import { test, expect } from '@playwright/test';
import { SalesforceBasePage } from '../lib/fixtures/salesforceBasePage';
import { SalesforceRecentlyViewedPage } from '../lib/fixtures/salesForceRecentlyViewedPage';
import { SalesforceModal } from '../lib/fixtures/salesforceModal';
import { faker } from '@faker-js/faker';
import SaleforceConnection from '../lib/api/jsforceauth'


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
    const sfHome = new SalesforceBasePage(page);
    await sfHome.goto();
    await sfHome.waitForTopToolbarToLoad()
    const recentAccounts: SalesforceRecentlyViewedPage = await sfHome.gotoRecentlyViewed(sfObjectName);
    await expect(recentAccounts.page).toHaveTitle(/Recently Viewed/);
    const newAccountModal: SalesforceModal = await recentAccounts.createNew();
    await newAccountModal.fillCheckbox('IsDavidsFavorite', true);
    await newAccountModal.fillTextField('Account Name', testName);
    await newAccountModal.fillDateInput('SLA Expiration Date', faker.date.future()); 
    await newAccountModal.fillTextArea('Shipping Street', '1234 MyStreet Dr.');
    await newAccountModal.fillTextField('Account Site', `Test Site ${Date.now()}`);
    await newAccountModal.fillSearchField('Parent Account', 'Davids Swiss Bank Account');
    await newAccountModal.fillCombobox('Upsell Opportunity', 'No');
    await newAccountModal.fillCombobox('Rating', 'Hot');
    await newAccountModal.fillMultiSelect('DavidsMultiSelectField', ["One", "Two", "Three", "Thirty-seven", "Forty", "Forty-one", "Ninety-four"]);
    
    await ( newAccountModal.bottomButtonLocator('Save')).click();


    //Query API To Ensure Record Creation
    const conn = await SaleforceConnection.open();
    await expect(async () => {
      const results = await conn.query<{Id: string}>(`SELECT FIELDS(ALL) FROM ACCOUNT WHERE Name = '${testName}' LIMIT 200`);
      expect(results.records[0]).toBeDefined();
    }).toPass({timeout: 15_000});

    console.log("done!");
});



//Parameterized 
const accounts = [`Test Name Via GUI Params1 ${Date.now()}`, `Test Name Via GUI Params2 ${Date.now()}`];
for(const accountName of accounts)
{
  test(`Parameterized Test for Account ${accountName}`, async ( { page }) => {
    const sfObjectName: string = 'Account';
    const sfHome = new SalesforceBasePage(page);
    await sfHome.goto();
    await sfHome.waitForTopToolbarToLoad()
    const recentAccounts: SalesforceRecentlyViewedPage = await sfHome.gotoRecentlyViewed(sfObjectName);
    await expect(recentAccounts.page).toHaveTitle(/Recently Viewed/);
    const newAccountModal: SalesforceModal = await recentAccounts.createNew();

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

