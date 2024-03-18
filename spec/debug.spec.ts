import { test, expect, request } from '@playwright/test';
import SfBasePage from '../lib/sfdynamics/SfBasePage';
import { SfRecentlyViewedPage } from '../lib/sfdynamics/SfRecentlyViewedPage';
import { SfRecordDetailsPage } from '../lib/sfdynamics/SfRecordDetailsPage';
import SfObjectInstance from '../lib/api/SObjectInstance';
import { faker } from '@faker-js/faker';
import SaleforceConnection from '../lib/api/JsfConnecter';
import { promises as fsPromises } from 'fs';
import fs from 'fs';
import * as Path from 'path';

//import UpdateLocalObjectSchema from '../lib/api/SObjectSchema';

test('SfRecordDetailsPage - Create New Account ', async ({ page }) => {
	let sObject = 'Account';

	let home = await SfBasePage.initToHome(page, 'Sales');
	let myobj = await SfObjectInstance.initFromSalesForce(sObject);
	myobj.labelsToValues['Shipping City'] = 'Denver';
	const detailsPage = await SfRecordDetailsPage.initToNewRecord(page, sObject);

	await detailsPage.fillBySObjectInstance(myobj);

	console.log('done!');
});

test('Try different SOQL Queries Here', async () => {
	const conn = await SaleforceConnection.openViaUsernameAndPass();
	const query = `SELECT  QualifiedApiName FROM EntityDefinition order by QualifiedApiName`;
	const result = await conn.query<{ Id: string }>(query);

	const outputPath = `debug/data/instance/QualifiedApiNames.json`;
	const objectDetails: string = JSON.stringify(result.records, null, 2);
	const objectDirectory = Path.dirname(outputPath);
	await fsPromises.mkdir(objectDirectory, { recursive: true });
	fs.writeFileSync(outputPath, objectDetails);
});
