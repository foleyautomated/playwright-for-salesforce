/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { meta } from "@typescript-eslint/eslint-plugin";
import SfConnection from "./SfConnection";
import * as fs from 'fs';
import { ActionOverride, ChildRelationship, DescribeSObjectResult, Field, FieldType, NamedLayoutInfo, RecordTypeInfo, ScopeInfo, maybe } from "jsforce/describe-result";



export default class SObjectSchema
{

    private constructor(public readonly SObjectName: string, public readonly SObjectDescription: DescribeSObjectResult) {}

    public static async init(sObjectName: string) : Promise<SObjectSchema>
    {
        const conn = await SfConnection.open();
        return new Promise<SObjectSchema>((resolve, reject) => {
            conn.sobject(sObjectName).describe((err, metadata) => {
                if (err) {
                    reject(err);
                    return;
                }
                const sObjectDescription: DescribeSObjectResult = metadata;
                const schema = new SObjectSchema(sObjectName, sObjectDescription);
                resolve(schema);
            });
        });
        // let schema: SObjectSchema;
        // const conn = await SfConnection.open();
        // await conn.sobject(sObjectName).describe(function(err, metadata) { 
        //     if (err) { return console.error(err); }
        //     const sObjectDescription: DescribeSObjectResult = metadata; 
        //     sObjectDescription.fields.filter((f) => f.label + f.type );
        //     schema = new SObjectSchema(sObjectName, sObjectDescription);
        // });
        // resolve(schema);
        // return schema;

    }

    getTypeOfLabel(label: string) : FieldType {
        return (this.getFieldByLabel(label)).type;
    } 
    getFieldByLabel(label: string) : Field {
        const fieldInfo: Field = (this.SObjectDescription).fields
            .filter((f) => f.label.includes(label))
            .sort((f) =>  f.label.length - label.length) //The GUI has "Parent Account" and the API has "Parent Account ID"; here we take the most similar label.
            [0]; 
        return fieldInfo;
    }

    async UpdateLocalObjectSchema() {
        const objectDetails = JSON.stringify(this.SObjectDescription, null, 2);
        const path = `./debug/${this.SObjectName}_Schema.json`;
        fs.writeFileSync(path, objectDetails);
    }
}
