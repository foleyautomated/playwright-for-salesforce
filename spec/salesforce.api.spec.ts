import { test, expect, request } from '@playwright/test';
import { SalesforceBasePage } from '../lib/fixtures/salesforceBasePage';
import { SalesforceRecentlyViewedPage } from '../lib/fixtures/salesForceRecentlyViewedPage';
import { SalesforceModal } from '../lib/fixtures/salesforceModal';
import { faker } from '@faker-js/faker';
import SaleforceConnection from '../lib/api/jsforceauth'
import * as fs from 'fs';
import { Account } from '../src/generated';

// test('Create New Account via API', async () => {

//   //TODO - Abstract out API Object creation to use a callback that returns the id

//   const conn = await SaleforceConnection.open();
//   const testName =  `Test Site Via API ${Date.now()}`
//   const data = {"Name" : testName};
//   await conn.sobject('Account').create(data);
//   const acct = await conn.query<{Id: string}>(`SELECT FIELDS(ALL) FROM ACCOUNT WHERE Name = '${testName}' LIMIT 200`);
//   expect(acct.records[0].Id).toBeDefined()
//   console.log("ID: " + acct.records[0].Id);

// });


// test('Wowahfdoafeafdjsalfds', async () => {

//   //TODO - Abstract out API Object creation to use a callback that returns the id

//   const conn = await SaleforceConnection.open();
//   const testName =  `Test Site Via API ${Date.now()}`
//   const data = {"Name" : testName};
//   await conn.sobject('Account').create(data);
//   const acct = await conn.query<{Id: string}>(`SELECT FIELDS(ALL) FROM ACCOUNT WHERE Name = '${testName}' LIMIT 200`);
//   expect(acct.records[0].Id).toBeDefined()
//   console.log("ID: " + acct.records[0].Id);

// });

test('test tsforce stuff', async () => {

  //TODO - Abstract out API Object creation to use a callback that returns the id

  const conn = await SaleforceConnection.open();
  const testName =  `Test ts-force ${Date.now()}`;
  const acc1 = new Account({
    name: 'hello world',
  });





  // await conn.sobject('Account').create(acct);
  // const retrievedAcct = await conn.query<{Id: string}>(`SELECT FIELDS(ALL) FROM ACCOUNT WHERE Name = '${testName}' LIMIT 200`);
  // expect(retrievedAcct.records[0].Id).toBeDefined();
  // console.log("ID: " + retrievedAcct.records[0].Id);

  expect(true).toBe(true);

});







// test('Query MainTestAccount via API', async () => {

//     const accountName = "MainTestAccount"
//     //Query API To Ensure Record Creation
//     const conn = await SaleforceConnection.open();
//     await expect(async () => {
//         const results = await conn.query<{Id: string}>(`SELECT FIELDS(ALL) FROM ACCOUNT WHERE Name = '${accountName}' LIMIT 200`);
//         expect(results.records[0]).toBeDefined();
//         const objectDetails = JSON.stringify(results.records[0], null, 2);
//         const path = `debug/Read_${accountName}.json`;
//         fs.writeFileSync(path, objectDetails );

//     }).toPass({timeout: 15_000});
// });

// test('Retrive MainTestAccount via API', async () => {

//     const accountName = "MainTestAccount";
//     //Query API To Ensure Record Creation
//     const conn = await SaleforceConnection.open();
//     await expect(async () => {
//       const results = await conn.sobject("Account").retrieve("001an000004oIIpAAM", function(err, sfRecord) {
//         expect(sfRecord).toBeDefined();
//         const objectDetails = JSON.stringify(sfRecord, null, 2);
//         const path = `debug/Retrieve_${sfRecord.Id}.json`;
//         fs.writeFileSync(path, objectDetails );
//       });
//     }).toPass({timeout: 15_000});
// });





