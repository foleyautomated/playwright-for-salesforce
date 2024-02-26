import { test, expect, request } from '@playwright/test';
import { SalesforceBasePage } from '../lib/fixtures/salesforceBasePage';
import { SalesforceRecentlyViewedPage } from '../lib/fixtures/salesForceRecentlyViewedPage';
import { SalesforceModal } from '../lib/fixtures/salesforceModal';
import { faker } from '@faker-js/faker';
import SaleforceConnection from '../lib/api/jsforceauth';
import GenerateModuleCode from '../lib/api/sfObjectDetails';
import { Account } from '../src/generated';



test('debug my stuff', async () => {

    //TODO - Abstract out API Object creation to use a callback that returns the id
  
    await GenerateModuleCode("Account");
  

  });

  

test('Create New Account via ts-force', async () => {

  //TODO - Abstract out API Object creation to use a callback that returns the id

  const conn = await SaleforceConnection.open();
  const testName =  `Test ts-force ${Date.now()}`
  const acct = new Account();
  acct.name = testName;



  await conn.sobject('Account').create(acct);
  const retrievedAcct = await conn.query<{Id: string}>(`SELECT FIELDS(ALL) FROM ACCOUNT WHERE Name = '${testName}' LIMIT 200`);
  expect(retrievedAcct.records[0].Id).toBeDefined()
  console.log("ID: " + retrievedAcct.records[0].Id);

  expect(true).toBe(true);

});


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

