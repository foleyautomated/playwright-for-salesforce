import { test, expect } from '@playwright/test';
import SfBasePage from '../lib/sfdynamics/SfBasePage';
import { SfRecentlyViewedPage } from '../lib/sfdynamics/SfRecentlyViewedPage';
import { SfRecordDetailsPage } from '../lib/sfdynamics/SfRecordDetailsPage';
import { faker } from '@faker-js/faker';
import jsfConnecter from '../lib/api/JsfConnecter'
import SfRecordViewPage from '../lib/sfdynamics/SfRecordViewPage';
import { QueryResult } from 'jsforce';
import SObjectInstance from '../lib/api/SObjectInstance';
import SObjectSchema from '../lib/api/SObjectSchema';


function testName() : string {
  const testName = `TestName${Date.now()}`;
  console.log(testName)
  return testName;
}

test.afterEach(async ({ page }) => {
  await page.close();
});

const testSObjects = ["Opportunity", "Account", "Contact"]

for (const sob of testSObjects)
{
  test(`SObjectSchema - Define - ${sob}`, async () => {
    let schema = await SObjectSchema.init(sob);
  });
}

for (const sob of testSObjects)
{
  test(`SObjectInstance - Initialize - ${sob}`, async () => {
    let inst = await SObjectInstance.initFromSalesForce(sob);
  });
}





test(`SfRecodDetailsPage - Create Account via individual fill methods`, async ( { page }) => {
  const sfObjectName: string = 'Account';
  
  const newAccountModal: SfRecordDetailsPage = await SfRecordDetailsPage.initToNewRecord(page, sfObjectName);
  await newAccountModal.fillMultiSelect('DavidsMultiSelectField', ["One", "Two", "Three"]);
  await newAccountModal.fillCheckbox('IsDavidsFavorite', true);
  await newAccountModal.fillTextField('Account Name', testName() );
  await newAccountModal.fillDateInput('SLA Expiration Date', faker.date.future()); 
  await newAccountModal.fillTextArea('Shipping Street', '1234 MyStreet Dr.');
  await newAccountModal.fillTextField('Account Site', `Test Site ${Date.now()}`);
  await newAccountModal.fillSearchField('Parent Account', 'Davids Swiss Bank Account');
  await newAccountModal.fillCombobox('Rating', 'Hot');
  await (newAccountModal.bottomButtonLocator('Save')).click();

});


test('SfRecodDetailsPage - Create Contact via generalized fill method', async ( { page }) => {
  const sfObjectName: string = 'Contact';
  const title = testName();

  const newContactModal: SfRecordDetailsPage = await SfRecordDetailsPage.initToNewRecord(page, sfObjectName);
  await newContactModal.fillByLabel('Salutation', 'Dr.');
  await newContactModal.fillByLabel('First Name', 'Don');
  await newContactModal.fillByLabel('Last Name', 'Quixote');
  await newContactModal.fillByLabel('Home Phone', '89573342');
  await newContactModal.fillByLabel('Title', title);
  await newContactModal.fillByLabel('Department', 'Test Dept.');
  await newContactModal.fillByLabel('Other Street', '1234 Road St. Lane');
  await newContactModal.fillByLabel('Level', 'Tertiary');
  await newContactModal.save("Title", title);
});

test('SfRecodDetailsPage - Create Opportunity via generalized fill method', async ( { page }) => {
  const sfObjectName: string = 'Opportunity';
  const oppName = testName();

  const newContactModal: SfRecordDetailsPage = await SfRecordDetailsPage.initToNewRecord(page, sfObjectName);
  await newContactModal.fillByLabel('Opportunity Name', oppName);
  await newContactModal.fillByLabel("Close Date", '3/8/2024');
  await newContactModal.fillByLabel("Stage", 'Prospecting');
  await newContactModal.fillByLabel("Probability (%)", 0.1); 
  await newContactModal.save('Opportunity Name', oppName);
});


test('SfRecodDetailsPage - Create Account via generalized fill method', async ( { page }) => {
    const sfObjectName: string = 'Account';
    const name = testName();

    const newAccountModal: SfRecordDetailsPage = await SfRecordDetailsPage.initToNewRecord(page, sfObjectName);
    await newAccountModal.fillByLabel('DavidsMultiSelectField',  ["One", "Two", "Three"]); //["One", "Two", "Three", "Thirty-seven", "Forty", "Forty-one", "Ninety-four"]); 
    await newAccountModal.fillByLabel('IsDavidsFavorite', true);
    await newAccountModal.fillByLabel('Upsell Opportunity', 'No');
    await newAccountModal.fillByLabel('Account Name', name);
    await newAccountModal.fillByLabel('SLA Expiration Date', faker.date.future()); 
    await newAccountModal.fillByLabel('Shipping Street', '1234 MyStreet Dr.');
    //await newAccountModal.fillByLabel('Account Site', `www.mysite.com`);
    await newAccountModal.fillByLabel('Parent Account', 'Davids Swiss Bank Account');
    await newAccountModal.fillByLabel('Rating', 'Hot');
    await newAccountModal.save("Name", name);
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
  await detailsPage.save("Shipping City", "Denver")

  console.log("done!");
  
});


