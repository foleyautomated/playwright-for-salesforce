/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { meta } from "@typescript-eslint/eslint-plugin";
import SalesforceConnecter from "./SalesforceConnecter";
import * as fs from 'fs';
import { ActionOverride, ChildRelationship, DescribeSObjectResult, Field, FieldType, NamedLayoutInfo, RecordTypeInfo, ScopeInfo, maybe } from "jsforce/describe-result";



export default class SObjectSchema
{

    private constructor(
        public readonly SObjectName: string, 
        public readonly SObjectDescription: DescribeSObjectResult
    ) {}

    public static async init(sObjectName: string) : Promise<SObjectSchema>
    {
        const conn = await SalesforceConnecter.open();
        
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
        return (this.getFieldInfoByLabel(label)).type;
    } 
    getFieldInfoByLabel(label: string) : Field {
        const fieldInfo: Field = (this.SObjectDescription).fields
            .filter((f) => f.label.includes(label))
            .sort((f) =>  f.label.length - label.length) //The GUI has "Parent Account" and the API has "Parent Account ID"; here we take the most similar label.
            [0]; 
        return fieldInfo;
    }
    getFieldInfoByName(name: string) : Field {
        const fieldInfo: Field = (this.SObjectDescription).fields
            .filter((f) => f.name.includes(name))
            [0]; 
        return fieldInfo;
    }

    updateLocalObjectSchema() {
        //TODO: Would Ideally be async
        const objectDetails = JSON.stringify(this.SObjectDescription, null, 2);
        const directory = `./debug/data/schema`;
        fs.promises.mkdir(directory, { recursive: true }).catch(console.error);
        const path = `${directory}/${this.SObjectName}_Schema.json`;
        fs.writeFileSync(path, objectDetails);
        console.log("Done Updating file!");
    }
}
