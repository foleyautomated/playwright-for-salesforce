/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { meta } from "@typescript-eslint/eslint-plugin";
import SfConnection from "./jsforceauth";
import * as fs from 'fs';
import { ActionOverride, ChildRelationship, DescribeSObjectResult, Field, FieldType, NamedLayoutInfo, RecordTypeInfo, ScopeInfo, maybe } from "jsforce/describe-result";



export class SObjectSchema
{

    private sObjectDescription: DescribeSObjectResult | undefined; 

    constructor(public readonly SObjectName: string) {
        this.sObjectDescription = undefined;
    }
    async getTypeOfLabel(label: string) : Promise<FieldType> {
        return (await this.getFieldByLabel(label)).type;
    } 
    async getFieldByLabel(label: string) : Promise<Field> {
        const fieldInfo: Field = (await this.GetSObjectDescription()).fields
            .filter((f) => f.label.includes(label))
            .sort((f) =>  f.label.length - label.length) //The GUI has "Parent Account" and the API has "Parent Account ID"; here we take the most similar label.
            [0]; 
        return fieldInfo;
    }
    async GetSObjectDescription() : Promise<DescribeSObjectResult> {

        let myObj: DescribeSObjectResult = this.sObjectDescription!;

        if(this.sObjectDescription) 
        {
            return this.sObjectDescription;
            
        } 
        else
        {
            const conn = await SfConnection.open();
            await conn.sobject(this.SObjectName).describe(function(err, metadata) { 
                if (err) { return console.error(err); }
                const myob: DescribeSObjectResult = metadata; 
                myob.fields.filter((f) => f.label + f.type );
                myObj = metadata;
            });
            this.sObjectDescription = myObj;
            return this.sObjectDescription;
        }

    }
    async UpdateLocalObjectSchema() {
        const objectDetails = JSON.stringify(await this.GetSObjectDescription(), null, 2);
        const path = `./debug/${this.SObjectName}_Schema.json`;
        fs.writeFileSync(path, objectDetails);
    }
}
