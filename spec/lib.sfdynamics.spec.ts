import { test, expect } from '@playwright/test';
import { SfBasePage } from '../lib/sfdynamics/SfBasePage';
import { SfRecentlyViewedPage } from '../lib/sfdynamics/SfRecentlyViewedPage';
import { SfRecordDetailsPage } from '../lib/sfdynamics/SfRecordDetailsPage';
import { faker } from '@faker-js/faker';
import SalesforceConnecter from '../lib/api/SalesforceConnecter'
import SfRecordViewPage from '../lib/sfdynamics/SfRecordViewPage';
import { QueryResult } from 'jsforce';
import SObjectInstance from '../lib/api/SObjectInstance';
import SObjectSchema from '../lib/api/SObjectSchema';

// test.beforeAll(async () => {
// });

test.afterEach(async ({ page }) => {
  await page.close();
});

test('SfRecodDetailsPage - Create Account via generalized fill method', async ( { page }) => {
    const testName = `Test Name ${Date.now()}`;
    console.log("Test Name: " + testName);
    const sfObjectName: string = 'Account';

    const newAccountModal: SfRecordDetailsPage = await SfRecordDetailsPage.initToNewRecord(page, sfObjectName);
    await newAccountModal.fillByLabel('DavidsMultiSelectField', ["One", "Two", "Three", "Thirty-seven", "Forty", "Forty-one", "Ninety-four"]); 
    await newAccountModal.fillByLabel('IsDavidsFavorite', true);
    await newAccountModal.fillByLabel('Upsell Opportunity', 'No');
    await newAccountModal.fillByLabel('Account Name', testName);
    await newAccountModal.fillByLabel('SLA Expiration Date', faker.date.future()); 
    await newAccountModal.fillByLabel('Shipping Street', '1234 MyStreet Dr.');
    await newAccountModal.fillByLabel('Account Site', `www.mysite.com`);
    await newAccountModal.fillByLabel('Parent Account', 'Davids Swiss Bank Account');
    await newAccountModal.fillByLabel('Rating', 'Hot');
    await newAccountModal.save(testName, "Name");
});

test(`SfRecodDetailsPage - Create Account via individual fill methods`, async ( { page }) => {

  const newAccountModal: SfRecordDetailsPage = await SfRecordDetailsPage.initToNewRecord(page, "Account");
  await newAccountModal.fillMultiSelect('DavidsMultiSelectField', ["One", "Two", "Three"]);
  const testAccountName = `AccountName${Date.now()}`;
  await newAccountModal.fillCheckbox('IsDavidsFavorite', true);
  await newAccountModal.fillTextField('Account Name', testAccountName);
  await newAccountModal.fillDateInput('SLA Expiration Date', faker.date.future()); 
  await newAccountModal.fillTextArea('Shipping Street', '1234 MyStreet Dr.');
  await newAccountModal.fillTextField('Account Site', `Test Site ${Date.now()}`);
  await newAccountModal.fillSearchField('Parent Account', 'Davids Swiss Bank Account');
  await newAccountModal.fillCombobox('Rating', 'Hot');


  
  await (newAccountModal.bottomButtonLocator('Save')).click();

});

test('SfRecodDetailsPage - Read and Modify existing Account', async ( {page} ) => {
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

test('SfRecordDetailsPage - Copy and Modify an Account ', async ( { page })  => {
  let sObject = "Account";

  let myobj = await SObjectInstance.initFromSalesForce(sObject);
  //myobj.labelsToValues.set("Subject", "New Test Subject!");
  myobj.labelsToValues["Shipping City"] = "Denver"
  const detailsPage = await SfRecordDetailsPage.initToNewRecord(page, sObject);

  await detailsPage.fillBySObjectInstance(myobj);

  console.log("done!");
  
});

test('SObjectSchema - Create', async () => {
  let schema = await SObjectSchema.init("Account");
  schema.updateLocalObjectSchema();
  

});

test('SObjectInstance - Create', async () => {
  let sob = await SObjectInstance.initFromSalesForce("Account");
});

