/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { meta } from "@typescript-eslint/eslint-plugin";
import jsfConnecter from "./JsfConnecter";
import { promises as fsPromises } from 'fs';
import fs from 'fs';
import * as Path from 'path';
import { ActionOverride, ChildRelationship, DescribeSObjectResult, Field, FieldType, NamedLayoutInfo, RecordTypeInfo, ScopeInfo, maybe } from "jsforce/describe-result";
import { RecordAttributes, SObject } from "jsforce";
import SObjectSchema from "./SObjectSchema"
import { max } from "date-fns";
import { writeInstanceFile } from "../utils/file.utils";

export type LabelToValue =  { [key: string]: any };

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
        let labelsToValues: LabelToValue = {};


        const schema = await SObjectSchema.init(sObjectName);
        const conn = await jsfConnecter.openViaUsernameAndPass();
        if(!id) {
            const maxRecords = 200;
            const results = await conn.query<{Id: string}>(`SELECT FIELDS(ALL) FROM ${sObjectName} LIMIT ${maxRecords}`);
            const randomResultIndex = Math.floor(Math.random() * (results.records.length - 1));
            const randomRecord: {Id: string} = results.records[randomResultIndex];
            id = randomRecord.Id;
        } 
        const foundRecord = await conn.sobject(sObjectName).retrieve(id); 

        for(const key in foundRecord)
        {
            //TODO: Find easier way to get the value 🫠
            let value = Object.entries(foundRecord).filter((r) => r[0] == key)[0][1];
            if(value !== undefined && key != 'attributes')
            {
                const label = schema.getFieldInfoByName(key).label;
                labelsToValues[label] = value;
            }
        }
        
        


        
        instance = new SObjectInstance(sObjectName, id, schema, labelsToValues);
        //labelsToValues.delete("attributes") //Unwanted Metadata
        instance.saveLocal();
        return instance;
    }


    public static async initFromJson(){ throw new Error("Not yet implemented")} //TODO: Implement Initialization from file

    public saveLocal() {
        writeInstanceFile(
            this.sObjectName,
            `${this.sObjectId}.json`,
            JSON.stringify(this.labelsToValues, null, 2)
        );
    }
}