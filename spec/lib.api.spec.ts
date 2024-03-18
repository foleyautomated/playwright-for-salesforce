import { test, expect, request } from '@playwright/test';
import SfBasePage from '../lib/sfdynamics/SfBasePage';
import { SfRecentlyViewedPage } from '../lib/sfdynamics/SfRecentlyViewedPage';
import { SfRecordDetailsPage } from '../lib/sfdynamics/SfRecordDetailsPage';
import { faker } from '@faker-js/faker';
import SaleforceConnection from '../lib/api/JsfConnecter';
import * as fs from 'fs';
import SObjectInstance from '../lib/api/SObjectInstance';
import SObjectSchema from '../lib/api/SObjectSchema';

test('Create New Account via API', async () => {
	//TODO - Abstract out API Object creation to use a callback that returns the id

	const conn = await SaleforceConnection.openViaUsernameAndPass();
	console.log('Opening salesforce');
	const testName = `Test Site Via API ${Date.now()}`;
	const data = { Name: testName };
	await conn.sobject('Account').create(data);
	const acct = await conn.query<{ Id: string }>(
		`SELECT FIELDS(ALL) FROM ACCOUNT WHERE Name = '${testName}' LIMIT 200`
	);
	expect(acct.records[0].Id).toBeDefined();
	console.log('ID: ' + acct.records[0].Id);
});

test('Query MainTestAccount via API', async () => {
	const accountName = 'MainTestAccount';
	//Query API To Ensure Record Creation
	const conn = await SaleforceConnection.openViaUsernameAndPass();
	await expect(async () => {
		const results = await conn.query<{ Id: string }>(
			`SELECT FIELDS(ALL) FROM ACCOUNT WHERE Name = '${accountName}' LIMIT 200`
		);
		expect(results.records[0]).toBeDefined();
		const objectDetails = JSON.stringify(results.records[0], null, 2);
		const path = `debug/Read_${accountName}.json`;
		fs.writeFileSync(path, objectDetails);
	}).toPass({ timeout: 15_000 });
});

test('Retrive MainTestAccount via API', async () => {
	const accountName = 'MainTestAccount';
	//Query API To Ensure Record Creation
	const conn = await SaleforceConnection.openViaUsernameAndPass();
	await expect(async () => {
		const results = await conn.sobject('Account').retrieve('001an000004oIIpAAM', function (err, sfRecord) {
			expect(sfRecord).toBeDefined();
			const objectDetails = JSON.stringify(sfRecord, null, 2);
			const path = `debug/Retrieve_${sfRecord.Id}.json`;
			fs.writeFileSync(path, objectDetails);
		});
	}).toPass({ timeout: 15_000 });
});

test('Retrive MainTestAccount via OAuth2 API', async () => {
	const accountName = 'MainTestAccount';
	//Query API To Ensure Record Creation
	const conn = await SaleforceConnection.openViaOAuth2();
	await expect(async () => {
		const results = await conn.sobject('Account').retrieve('001an000004oIIpAAM', function (err, sfRecord) {
			expect(sfRecord).toBeDefined();
			const objectDetails = JSON.stringify(sfRecord, null, 2);
			const path = `debug/Retrieve_${sfRecord.Id}.json`;
			fs.writeFileSync(path, objectDetails);
		});
	}).toPass({ timeout: 15_000 });
});
