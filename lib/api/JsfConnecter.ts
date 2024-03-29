/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as jsforce from 'jsforce';
import * as fs from 'fs';
import * as path from 'path';

/** Static class used to connect to Salesforce instance. */
export default class jsfConnecter {
	/** Opens a new connection to Salesforce instance using settings from Config. */
	//OAuth2
	public static async openViaOAuth2(): Promise<jsforce.Connection> {
		console.log('Authenticating into SF via OAuth2');

		// Create new connection object
		var conn = new jsforce.Connection({
			instanceUrl: process.env.SF_API_LOGIN_URL,
			oauth2: {
				clientId: process.env.SF_API_CONSUMER_KEY,
				clientSecret: process.env.SF_API_CONSUMER_SECRET,
				// redirectUri: process.env.SF_API_CALLBACK_URL,
			},
		});

		// Attempt to login using salesforce connection
		conn.login(
			process.env.SALESFORCE_USERNAME!,
			process.env.SALESFORCE_PASSWORD! + process.env.SF_ACCESS_TOKEN!,
			function (err, userInfo) {
				if (err) {
					return console.error(err);
				}
				// Now you can get the access token and instance URL information.
				// Save them to establish connection next time.
				console.log(conn.accessToken);
				console.log(conn.instanceUrl);
				// logged in user property
				console.log('User ID: ' + userInfo.id);
				console.log('Org ID: ' + userInfo.organizationId);
				// ...
			}
		).then(() => {
			console.log('Successfully logged into Salesforce via OAuth2');
		}).catch(() => {
			console.log('Failed to login to Salesforce via OAuth2');
			throw new Error('Failed to login to Salesforce via OAuth2')
		});

		return conn;
	}

	//Username, Password, Token
	public static async openViaUsernameAndPass(): Promise<jsforce.Connection> {
		console.log('Authenticating into SF via Basic Auth...');
		const conn = new jsforce.Connection({
			loginUrl: process.env.SF_API_LOGIN_URL,
			version: '57.0',
		});
		await conn.login(
			process.env.SALESFORCE_USERNAME!,
			process.env.SALESFORCE_PASSWORD! + process.env.SF_ACCESS_TOKEN
		).then(() => {
			console.log('Successfully logged into Salesforce via Username and Password');
		}).catch(() => {
			console.log('Failed to login to Salesforce via Username and Password');
			throw new Error('Failed to login to Salesforce via Username and Password')
		});
		return conn;
	}

	/** Closes an existing connection to Salesforce. */
	public static async close(conn: any): Promise<void> {
		await conn.logout();
		console.log('Closed connection to Salesforce.');
		return;
	}
}
