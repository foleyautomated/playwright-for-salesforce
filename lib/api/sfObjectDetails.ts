/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { meta } from "@typescript-eslint/eslint-plugin";
import SfConnection from "./jsforceauth";
import * as fs from 'fs';


export default async function GenerateModuleCode(sfObjectName: string)
{
    // Create a jsforce connection
    const conn = await SfConnection.open();
    // Get the Account object
    // Describe the object and its fields
    let objectMetadata;
    await conn.sobject(sfObjectName).describe(function(err, metadata) { 
        if (err) { return console.error(err); }
        objectMetadata = metadata;
    });

    const objectDetails = JSON.stringify(objectMetadata, null, 2);
    const path = `debug/${sfObjectName}DebugModel.json`;
    fs.writeFileSync(path, objectDetails);

}
