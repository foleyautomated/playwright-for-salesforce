/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { meta } from "@typescript-eslint/eslint-plugin";
import jsfConnecter from "./JsfConnecter";
import * as fs from 'fs';
import { ActionOverride, ChildRelationship, DescribeSObjectResult, Field, FieldType, NamedLayoutInfo, RecordTypeInfo, ScopeInfo, maybe } from "jsforce/describe-result";
import { writeSchemaFile } from "../utils/file.utils";

export default class SObjectSchema
{

    private constructor(
        public readonly SObjectName: string, 
        public readonly SObjectDescription: DescribeSObjectResult
    ) {}

    public static async init(sObjectName: string) : Promise<SObjectSchema>
    {
        const conn = await jsfConnecter.openViaUsernameAndPass();
        
        return new Promise<SObjectSchema>((resolve, reject) => {
            conn.sobject(sObjectName).describe((err, metadata) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                const sObjectDescription: DescribeSObjectResult = metadata;
                const schema = new SObjectSchema(sObjectName, sObjectDescription);
                resolve(schema);
                schema.updateLocalObjectSchema();
            });
        });

    }

    getTypeOfLabel(label: string) : FieldType {
        return (this.getFieldInfoByLabel(label)).type;
    } 
    getFieldInfoByLabel(label: string) : Field {
        const fieldInfo: Field = (this.SObjectDescription).fields
            .filter((f) => 
                f.label.includes(label)
                || 
                f.label.includes(label.replace(this.SObjectName, "").trim()) //'Opportunity Name' is just 'Name' in the API 
            )
            .sort((f) =>  f.label.length - label.length) //The GUI has "Parent Account" and the API has "Parent Account ID"; here we take the most similar label.
            [0]; 
        return fieldInfo;
    }
    getFieldInfoByName(name: string) : Field {
        const fieldInfo: Field = (this.SObjectDescription).fields
            .filter((f) => 
                f.name.includes(name) 
                || 
                f.name.includes(name.replace(this.SObjectName, "").trim())
                ) 
            [0]; 
        return fieldInfo;
    }

    updateLocalObjectSchema() {
        // NOTE : Making this async would create the risk of a race condition
        writeSchemaFile(
            `${this.SObjectName}_Schema.json`,
            JSON.stringify(this.SObjectDescription, null, 2)
        );
    }
}
