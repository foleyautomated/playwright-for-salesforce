/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { meta } from "@typescript-eslint/eslint-plugin";
import SfConnection from "./SfConnection";
import { promises as fsPromises } from 'fs';
import fs from 'fs';
import * as Path from 'path';
import { ActionOverride, ChildRelationship, DescribeSObjectResult, Field, FieldType, NamedLayoutInfo, RecordTypeInfo, ScopeInfo, maybe } from "jsforce/describe-result";
import { SObject } from "jsforce";
import SObjectSchema from "./SObjectSchema"
import { max } from "date-fns";


export interface LabelsAndValues {
    [key: string]: any 
}

export default class SObjectInstance
{
    private constructor(
        public readonly sObjectName: string,
        public readonly sObjectId: string,
        public readonly sObjectSchema: SObjectSchema,
        public labelToValue: LabelsAndValues
    )
    {
        delete labelToValue["attributes"] //Unwanted Metadata
    }
    /**
     * Retrieves a salesforce object by id. If no id is provided, returns a random instance. 
     * @param sObjectName 
     * @param id 
     * @returns 
     */

    public static async initFromSalesForce(sObjectName: string, id: string="") : Promise<SObjectInstance>
    {
        let instance: SObjectInstance;
        const schema = await SObjectSchema.init(sObjectName);
        const conn = await SfConnection.open();
        if(id) {
            const foundRecord = await conn.sobject(sObjectName).retrieve(id);
            instance = new SObjectInstance(sObjectName, id, schema, foundRecord);
        } else {
            const maxRecords = 200;
            const results = await conn.query<{Id: string}>(`SELECT FIELDS(ALL) FROM ${sObjectName} LIMIT ${maxRecords}`);
            const randomResultIndex = Math.floor(Math.random() * (results.records.length - 1));
            const randomRecord: {Id: string} = results.records[randomResultIndex];
            instance = new SObjectInstance(sObjectName, randomRecord.Id, schema, randomRecord);
        }
        
        instance.saveLocal();
        return instance;
    }


    public static async initFromJson(){ } //TODO: Implement Initialization from file

    public async saveLocal(filePath: string = "") : Promise<void>{
        const defaultOutputPath = `debug/data/instance/${this.sObjectName}/${this.sObjectId}.json`;
        const outputPath = Path.resolve(filePath ? filePath : defaultOutputPath);

        const objectDetails: string = JSON.stringify(this.labelToValue, null, 2);
        const objectDirectory = Path.dirname(outputPath);
        await fsPromises.mkdir(objectDirectory, {recursive: true});
        fs.writeFileSync(outputPath, objectDetails);
    }



}