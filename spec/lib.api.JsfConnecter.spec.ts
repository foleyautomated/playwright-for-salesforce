import { test, expect, request } from '@playwright/test';
import SfBasePage from '../lib/sfdynamics/SfBasePage';
import { SfRecentlyViewedPage } from '../lib/sfdynamics/SfRecentlyViewedPage';
import { SfRecordDetailsPage } from '../lib/sfdynamics/SfRecordDetailsPage';
import { faker } from '@faker-js/faker';
import SaleforceConnection from '../lib/api/JsfConnecter'
import * as fs from 'fs';
import SObjectInstance from '../lib/api/SObjectInstance';
import SObjectSchema from '../lib/api/SObjectSchema';

test('Connect to API Via Username And Pass', async () => {

  //TODO - Abstract out API Object creation to use a callback that returns the id

  const conn = await SaleforceConnection.openViaUsernameAndPass();
  console.log('Opening salesforce')
  const testName =  `Test Site Via API ${Date.now()}`
  const data = {"Name" : testName};
  await conn.sobject('Account').create(data);
  const acct = await conn.query<{Id: string}>(`SELECT FIELDS(ALL) FROM ACCOUNT WHERE Name = '${testName}' LIMIT 200`);
  expect(acct.records[0].Id).toBeDefined()
  console.log("ID: " + acct.records[0].Id);

});


test('Connect to API Via OAuth2', async () => {

    //TODO - Abstract out API Object creation to use a callback that returns the id
  
    const conn = await SaleforceConnection.openViaOAuth2();
    console.log('Opening salesforce')
    const testName =  `Test Site Via API ${Date.now()}`
    const data = {"Name" : testName};
    await conn.sobject('Account').create(data);
    const acct = await conn.query<{Id: string}>(`SELECT FIELDS(ALL) FROM ACCOUNT WHERE Name = '${testName}' LIMIT 200`);
    expect(acct.records[0].Id).toBeDefined()
    console.log("ID: " + acct.records[0].Id);
  
 });