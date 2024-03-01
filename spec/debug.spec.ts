import { test, expect, request } from '@playwright/test';
import { SfeBasePage } from '../lib/fixtures/SfBasePage';
import { SfRecentlyViewedPage } from '../lib/fixtures/SfRecentlyViewedPage';
import { SObjectRecordDetails } from '../lib/fixtures/SObjectRecordDetails';
import { faker } from '@faker-js/faker';
import SaleforceConnection from '../lib/api/jsforceauth';
//import UpdateLocalObjectSchema from '../lib/api/SObjectSchema';



// test('debug my stuff', async () => {

//     //TODO - Abstract out API Object creation to use a callback that returns the id
//     await UpdateLocalObjectSchema("Account");
  
//   });



test('Create New Account via API222222', async () => {

  //TODO - Abstract out API Object creation to use a callback that returns the id

  const conn = await SaleforceConnection.open();
  const testName =  `Test Site Via API ${Date.now()}`
  const data = {"Name" : testName};
  await conn.sobject('Account').create(data);
  const acct = await conn.query<{Id: string}>(`SELECT FIELDS(ALL) FROM ACCOUNT WHERE Name = '${testName}' LIMIT 200`);
  expect(acct.records[0].Id).toBeDefined()
  console.log("ID: " + acct.records[0].Id);

});

