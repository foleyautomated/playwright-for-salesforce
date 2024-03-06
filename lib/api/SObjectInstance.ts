/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { meta } from "@typescript-eslint/eslint-plugin";
import SalesforceConnecter from "./SalesforceConnecter";
import { promises as fsPromises } from 'fs';
import fs from 'fs';
import * as Path from 'path';
import { ActionOverride, ChildRelationship, DescribeSObjectResult, Field, FieldType, NamedLayoutInfo, RecordTypeInfo, ScopeInfo, maybe } from "jsforce/describe-result";
import { RecordAttributes, SObject } from "jsforce";
import SObjectSchema from "./SObjectSchema"
import { max } from "date-fns";

export type LabelToValue =  { [key: string]: any }[];

export default class SObjectInstance
{
    private constructor(
        public readonly sObjectName: string,
        public readonly sObjectId: string,
        public readonly sObjectSchema: SObjectSchema,
        public labelsToValues: LabelToValue
    ) {}
    /**
     * Retrieves a salesforce object by id. If no id is provided, returns a random instance. 
     * @param sObjectName 
     * @param id 
     * @returns 
     */

    public static async initFromSalesForce(sObjectName: string, id: string="") : Promise<SObjectInstance>
    {
        let instance: SObjectInstance;
        let labelsToValues: { [key: string]: any }[] = [];


        const schema = await SObjectSchema.init(sObjectName);
        const conn = await SalesforceConnecter.open();
        if(!id) {
            const maxRecords = 200;
            const results = await conn.query<{Id: string}>(`SELECT FIELDS(ALL) FROM ${sObjectName} LIMIT ${maxRecords}`);
            const randomResultIndex = Math.floor(Math.random() * (results.records.length - 1));
            const randomRecord: {Id: string} = results.records[randomResultIndex];
            id = randomRecord.Id;
        } 
        const foundRecord = await conn.sobject(sObjectName).retrieve(id); 

        for(const [key, value]  of Object.entries(foundRecord))
        {
            if(value !== undefined)
            {
                labelsToValues.push({key, value});
            }
        }
        
        


        
        instance = new SObjectInstance(sObjectName, id, schema, labelsToValues);
        //labelsToValues.delete("attributes") //Unwanted Metadata
        await instance.saveLocal();
        return instance;
    }


    public static async initFromJson(){ } //TODO: Implement Initialization from file

    public async saveLocal(filePath: string = "") : Promise<void>{
        const defaultOutputPath = `debug/data/instance/${this.sObjectName}/${this.sObjectId}.json`;
        const outputPath = Path.resolve(filePath ? filePath : defaultOutputPath);

        const objectDetails: string = JSON.stringify(this.labelsToValues, null, 2);
        const objectDirectory = Path.dirname(outputPath);
        await fsPromises.mkdir(objectDirectory, {recursive: true});
        console.log("Writing to '" + outputPath + "' : " + objectDetails)
        fs.writeFileSync(outputPath, objectDetails);
        console.log("File Write Complete!")
    }



}