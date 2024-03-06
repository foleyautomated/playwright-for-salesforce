import { test, expect, request } from '@playwright/test';
import { SfBasePage } from '../lib/fixtures/SfBasePage';
import { SfRecentlyViewedPage } from '../lib/fixtures/SfRecentlyViewedPage';
import { SfRecordDetailsPage } from '../lib/fixtures/SfRecordDetailsPage';
import SfObjectInstance from '../lib/api/SObjectInstance';
import { faker } from '@faker-js/faker';
import SaleforceConnection from '../lib/api/SalesforceConnecter';
import { promises as fsPromises } from 'fs';
import fs from 'fs';
import * as Path from 'path';

//import UpdateLocalObjectSchema from '../lib/api/SObjectSchema';



test('Debug your bad code here', async ( { page })  => {
  let sObject = "Account";

  let myobj = await SfObjectInstance.initFromSalesForce(sObject);
  myobj.labelsToValues.set("Subject", "New Test Subject!");

  const detailsPage = await SfRecordDetailsPage.initToNewRecord(page, sObject);

  detailsPage.fillBySObjectInstance(myobj);

  console.log("done!");

  
});


test('Try different SOQL Queries Here', async () => {
  const conn = await SaleforceConnection.open();
  const query = `SELECT  QualifiedApiName FROM EntityDefinition order by QualifiedApiName`;
  const result = await conn.query<{Id: string}>(query);

  const outputPath = `debug/data/instance/QualifiedApiNames.json`;
  const objectDetails: string = JSON.stringify(result.records, null, 2);
  const objectDirectory = Path.dirname(outputPath);
  await fsPromises.mkdir(objectDirectory, {recursive: true});
  fs.writeFileSync(outputPath, objectDetails);
});