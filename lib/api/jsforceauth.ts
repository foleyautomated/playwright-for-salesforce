import * as jsforce from 'jsforce';
import * as fs from 'fs';
import * as path from 'path';


/** Static class used to connect to Salesforce instance. */
export default abstract class SfConnection {

    constructor(){}

    /** Opens a new connection to Salesforce instance using settings from Config. */
    public static async open() : Promise<jsforce.Connection> {
            const conn = new jsforce.Connection({
                loginUrl: process.env.SF_API_LOGIN_URL,
                version: "57.0"  
            });
            await conn.login(
                process.env.SALESFORCE_USERNAME!, 
                process.env.SALESFORCE_PASSWORD!+process.env.SF_ACCESS_TOKEN,
            );
            console.log('Connected to Salesforce.');
            return conn;
    }

    /** Closes an existing connection to Salesforce. */
    public static async close(conn: any) : Promise<void> {
        await conn.logout();
        console.log('Closed connection to Salesforce.');
        return;
    }    
}