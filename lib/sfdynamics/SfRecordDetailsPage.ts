import {Page, Locator, expect} from '@playwright/test';
import { SfBasePage} from './SfBasePage';
//import { text } from 'stream/consumers';
import { format } from 'path';
import SObjectSchema from '../api/SObjectSchema';
import { FieldType, QueryResult } from 'jsforce';
import SaleforceConnection from '../api/SalesforceConnecter'
import LabelToValue from '../api/SObjectInstance';
import SObjectInstance from '../api/SObjectInstance';
import { SfRecentlyViewedPage } from './SfRecentlyViewedPage';
import SfRecordViewPage from './SfRecordViewPage';
import { resolve } from 'dns';



export class SfRecordDetailsPage
{

    private constructor(
        public readonly page: Page, 
        public readonly sObjName: string, 
        public readonly sObjSchema: SObjectSchema
    ) {}

    //async Initializers
    public static async initToExistingRecord(page: Page, sObjectName: string, sObjectId: string) : Promise<SfRecordDetailsPage> {
        const sfRecordsViewPage = await SfRecordViewPage.initToExistingRecord(page, sObjectName, sObjectId);
        await sfRecordsViewPage.gotoDetailsAndEdit();
        const schema: SObjectSchema = await SObjectSchema.init(sObjectName);
        return new SfRecordDetailsPage(page, sObjectName, schema);
    }
    public static async initToNewRecord(page: Page, sObjectName: string) : Promise<SfRecordDetailsPage>{
        const recentlyViewedPage = await SfRecentlyViewedPage.init(page, sObjectName);
        const newRecordDetailsPage: SfRecordDetailsPage = await (recentlyViewedPage).CreateNewRecord();
        return newRecordDetailsPage;
    }
    public static async initFromSfRecordViewPage(rvpage: SfRecordViewPage) : Promise<SfRecordDetailsPage> {
        await rvpage.detailsTab.click();
        const firstPencilIcon = rvpage.page.locator("[class*='inline-edit-trigger-ico']").first();
        await firstPencilIcon.click();
        const sObjectName = rvpage.sObjectName;
        const page = rvpage.page;
        const schema: SObjectSchema = await SObjectSchema.init(sObjectName);
        const detailsPage = new SfRecordDetailsPage(page, sObjectName, schema);
        return detailsPage;
    }
    public static async initFromSfRecentlyViewedPage(sfrecent: SfRecentlyViewedPage) : Promise<SfRecordDetailsPage> {
        await sfrecent.newButton.click();
        const detailspage = new SfRecordDetailsPage(sfrecent.page, sfrecent.sObjectName, sfrecent.sObjectSchema);
        await expect(detailspage.bottomButtonLocator("Save")).toBeVisible();
        await expect(detailspage.allFieldLabelsLocator().nth(3)).toBeVisible(); //expect at least 3 labels to exist.
        return detailspage;
    }
    
    //Generalized fill methods
    async fillBySObjectInstance(sObjectInstance: SObjectInstance) : Promise<void> {
        const visibleLabels: string[] = await this.getAllVisibleLabels();

        for(const label in sObjectInstance.labelsToValues)
        {
            const value = sObjectInstance.labelsToValues[label];
            if(visibleLabels.includes(label) && value)
            {
                await this.fillByLabel(label, value);
            }
        }
    }


    async fillByLabel(label: string, value: object | string | Date | boolean | number | string[]) : Promise<void> {
        const fieldType: FieldType = (this.sObjSchema).getTypeOfLabel(label);
        console.log(`Filling label: '${label}' of type: <${fieldType}> with value: '${value.toString()}'`)
        switch (fieldType) {
            case "string":
                await this.fillTextField(label, value.toString());
                break;
            case "boolean":
                if(typeof value == "boolean")
                {
                    await this.fillCheckbox(label, value);
                }
                else
                {
                    await this.fillCheckbox(label, Boolean(value));
                }
                break;
            case "int":
                await this.fillTextField(label, value.toString());
                break;
            case "double":
                await this.fillTextField(label, value.toString());
                break;
            case "date":
                if(value instanceof Date)
                {
                    await this.fillDateInput(label, value);
                } else if (value instanceof string) 
                {
                    await this. 
                }
                else
                {
                    await this.fillDateInput(label,  new Date(Date.parse(value.toString())));
                }
                break;
            case "datetime":
                if(value instanceof Date)
                {
                    await this.fillDateInput(label, value);
                } 
                else
                {
                    await this.fillDateInput(label,  new Date(Date.parse(value.toString())));
                }
                break;
            case "base64":
                throw new Error("'base64' fields not yet supported");
                break;
            case "id":
                throw new Error("'id' fields not yet supported");
                break;
            case "reference":
                await this.fillSearchField(label, value.toString());
                break;
            case "currency":
                await this.fillTextField(label, value.toString());
                break;
            case "textarea":
                await this.fillTextArea(label, value.toString());
                break;
            case "percent":
                await this.fillTextField(label, value.toString());
                break;
            case "phone":
                await this.fillTextField(label, value.toString());
                break;
            case "url":
                await this.fillTextField(label, value.toString());
                break;
            case "email":
                await this.fillTextField(label, value.toString());
                break;
            case "combobox":
                await this.fillSearchField(label, value.toString());
                break;
            case "picklist":
                await this.fillCombobox(label, value.toString());
                break;
            case "multipicklist":
                const multiPicklistItems: string[] = value instanceof Array ? value : value.toString().split(";");
                await this.fillMultiSelect(label, multiPicklistItems);
                break;
            case "anyType":
                await this.fillTextField(label, value.toString());
                break;
            case "location":
                await this.fillTextField(label, value.toString());
                break;
            case "time":
                await this.fillTextField(label, value.toString());
                break;
            case "encryptedstring":
                throw new Error("'encryptedstring' fields not yet supported");
                break;
            case "address":
                throw new Error("'address' fields not yet supported");
                console.log("Handling address field type");
                break;
            case "complexvalue":
                throw new Error("'complexvalue' fields not yet supported");
                break;
            default:
                throw new Error(`Unknown field type: '${fieldType}'`);
        }
    }


    //Generalized Locators
    
    async getAllVisibleLabels(): Promise<string[]> {
        const allVisibleLabels = await this.allFieldLabelsLocator().allTextContents();
        return allVisibleLabels;
    } 

    private scrubSpecialChararactersAndCreateRegex(label: string) : RegExp
    {
        const labelWithoutSpecialCharacters = label.replace(/\W/g, '.');
        //The .? at the beginning accomodates occasional '*' salesforce prepends to required feilds
        return new RegExp(`^.?${labelWithoutSpecialCharacters}$`)
    }
    allFieldLabelsLocator() : Locator {
        //The 'or' Handles ❄️ Multi-select Label (which is actually a div)
        const allLabels =  this.page.locator('label').or(this.page.locator("[id*='group-label']"));
        return allLabels;
    }
    allRecordLayoutItemsLocator() : Locator {
        return this.page.locator('records-record-layout-item');
    }


    fieldLabelLocator(label: string) : Locator {
        const labelLocator = this.allFieldLabelsLocator().filter( {hasText: this.scrubSpecialChararactersAndCreateRegex(label)});  
        return labelLocator;
    }
    //Text Field
    textFieldLocator(label: string) : Locator {
        const fieldLocator = this.page.locator('lightning-input')
            .filter( {hasText: this.scrubSpecialChararactersAndCreateRegex(label)})
            .locator('input');
        return fieldLocator;
    }
    async readTextField(label: string) : Promise<string>{
        const textField = this.textFieldLocator(label);
        return textField.inputValue();
    }
    async fillTextField(label: string, value: string)
    {
        const field = this.textFieldLocator(label);
        await expect( field).toBeVisible();
        await ( field).click();
        await ( field).fill(value);
    }
    //Search Field
    searchFieldLocator(label: string) : Locator {
        const fieldLocator = this.page.locator('lightning-grouped-combobox')
            .filter( {hasText: this.scrubSpecialChararactersAndCreateRegex(label)})
            .locator('input')
        return fieldLocator;
    }
    async readSearchField(label: string) : Promise<string>{
        return (await this.searchFieldLocator(label).textContent({timeout: 100}) ?? "");
    }
    async fillSearchField(label: string, value: string) {
        //Enter Search Value
        await (this.searchFieldLocator(label)).fill(value);
        await (this.searchFieldLocator(label)).click();
        const option = this.page.locator('lightning-grouped-combobox').getByTitle(value, { exact: true });
        await option.click();
    }
    //Combo Box
    comboboxFieldRootLocator(label: string) : Locator {
        const fieldLocator = this.page.locator('lightning-combobox')
            .filter( {has: this.fieldLabelLocator(label)})
        return fieldLocator;
    }
    async readCombobox(label: string) : Promise<string>{
        return this.comboboxFieldRootLocator(label).inputValue();
    }
    async fillCombobox(label: string, value: string) {
        await ( this.comboboxFieldRootLocator(label)).locator('button').click();
        await ( this.comboboxFieldRootLocator(label)).locator('span').getByTitle(value, {exact: true}).click();
    }
    //Text Area
    textAreaFieldLocator(label: string) : Locator {
        const fieldLocator = this.page.locator('lightning-textarea')
            .filter( {hasText: this.scrubSpecialChararactersAndCreateRegex(label)})
            .locator('textarea');
        return fieldLocator;
    }
    async readTextArea(label: string) : Promise<string>{
        return this.textAreaFieldLocator(label).inputValue();
    }
    async fillTextArea(label: string, value: string) {
        await ( this.textAreaFieldLocator(label)).fill(value);
    }
    //Date
    dateFieldLocator(label: string) : Locator {
        const fieldLocator = this.page.locator('lightning-datepicker')
            .filter( {has: this.fieldLabelLocator(label)})
            .locator('input');
        return fieldLocator;
    }
    //TODO: Use Actual Date Object?
    async readDateInput(label: string) : Promise<string> {
        return this.dateFieldLocator(label).inputValue();
    }
    async fillDateInput(label: string, date: Date) {
        //TODO: Why is this so hard it TS?? If there isnt a better way, this logic should live somewhere more accessable to the rest of the project.
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        const formatedDate = `${month}/${day}/${year}`;
        await (this.dateFieldLocator(label)).fill(formatedDate);
    }

    //Boolean
    checkboxLocator(label: string) {
        const fieldLocator = this.page.locator('lightning-primitive-input-checkbox')
            .filter( {has: this.fieldLabelLocator(label)})
            .locator('input');
        return fieldLocator;
    }

    async fillCheckbox(label: string, value: boolean) {
        const field = this.checkboxLocator(label);
        if(value)
        {
            await field.check();
        }
        else
        {
            await field.uncheck();
        }
    }

    async readCheckbox(label: string) : Promise<boolean>
    {
        const field = this.checkboxLocator(label);
        return field.isChecked();
    }

    //Multi-Select
    multiSelectRootLocator(label: string) {
        const rootLocator = this.page.locator('lightning-dual-listbox')
            .filter( {has: this.fieldLabelLocator(label) });
        return rootLocator;
    }
    multiSelectPsudoColumnHeaderLocator(label: string, psudoColumnName: "Available" | "Chosen") : Locator {
        const rootLocator = this.multiSelectRootLocator(label);
        const psudoColumnHeaderLocator = rootLocator.locator('span').getByText(psudoColumnName);
        return psudoColumnHeaderLocator;
    }
    multiSelectPsudoColumnRootLocator(label: string, psudoColumnName: "Available" | "Chosen") : Locator {
        const rootLocator = this.multiSelectRootLocator(label);
        const psudoColumnRoot = rootLocator.locator("[class*='dueling-list__column']").filter( {has: this.page.locator('span').getByText(psudoColumnName)})
        return psudoColumnRoot;
    }
    multiSelectListItemsLocator(label: string, psudoColumnName: "Available" | "Chosen") : Locator {
        const psudoColumnRoot = this.multiSelectPsudoColumnRootLocator(label, psudoColumnName);
        const listItemsLocator = psudoColumnRoot.locator('li').locator('span').getByTitle(/.+/); //Multi Select Span has a title, its empty parent does not.
        return listItemsLocator;
    }
    multiSelectMoveToButtonLocator(label: string, moveSelectionTo: "Available" | "Chosen" ) : Locator {
        const rootLocator = this.multiSelectRootLocator(label); 
        const directionButton = rootLocator.locator('button').getByText(`Move selection to ${moveSelectionTo}`);
        return directionButton;
    }
    async multiSelectGetPsudoColumnSelections(label: string, psudoColumnName: "Available" | "Chosen") : Promise<string[]> {
        const listItemsLocator = this.multiSelectListItemsLocator(label, psudoColumnName);
        const items = await listItemsLocator.allTextContents();
        return items;
    }
    async fillMultiSelect(label: string, selections: string[], fromPsudoColumn: "Available" | "Chosen" = "Available") {
        const toPsudoColumn: "Available" | "Chosen" = fromPsudoColumn == "Available" ? "Chosen" : "Available";
        const sourceItemsLocator = this.multiSelectListItemsLocator(label, fromPsudoColumn);
        const moveToButtonLocator = this.multiSelectMoveToButtonLocator(label, toPsudoColumn);
        await moveToButtonLocator.focus();
        await expect(sourceItemsLocator.first()).toBeVisible();
        const selectionsAlreadySelected = await this.readMultiSelectItems(label, toPsudoColumn);
        const selectionsNotYetSelected = selections.filter((sel) => !selectionsAlreadySelected.includes(sel));

        for(const selection of selectionsNotYetSelected) {
            const currentItemLocator = sourceItemsLocator.getByText(selection, { exact: true });
            await currentItemLocator.click();
            await moveToButtonLocator.click();
            expect((await this.readMultiSelectItems(label, toPsudoColumn)).includes(selection)).toBe(true);
        }
    }
    async clearMultiSelect(label: string, fromPsudoColumn: "Available" | "Chosen" = "Chosen") {
        const toPsudoColumn: "Available" | "Chosen" = fromPsudoColumn == "Available" ? "Chosen" : "Available";
        const itemsToDisselectLocator = this.multiSelectListItemsLocator(label, fromPsudoColumn);
        const itemsToDisselect = await this.readMultiSelectItems(label, fromPsudoColumn);
        const moveToButtonLocator = this.multiSelectMoveToButtonLocator(label, toPsudoColumn);
        for(const item of itemsToDisselect) {
            const currentItemLocator = itemsToDisselectLocator.getByText(item, { exact: true });
            await currentItemLocator.click();
            await moveToButtonLocator.click();
            expect((await this.readMultiSelectItems(label, toPsudoColumn)).includes(item)).toBe(true);
        }
    }
    async readMultiSelectItems(label: string, psudoColumnName: "Available" | "Chosen") : Promise<string[]> {
        const listItemsLocator = this.multiSelectListItemsLocator(label, psudoColumnName);
        return await listItemsLocator.allInnerTexts();
    }

    //Modal Buttom Button
     bottomButtonLocator(label: string) : Locator {
        const fieldLocator = this.page.locator('lightning-button')
            .filter( {hasText: this.scrubSpecialChararactersAndCreateRegex(label)})
            .locator('button')
        return fieldLocator;
    }
    modalBodyLocator() : Locator {
        const modalHeader = this.page.getByText('h2:has-text("New Account")');
        const modalBody = this.page.locator('div.actionBody').filter({ has: modalHeader });
        console.log(`Modal for ${this.sObjName} Located`);
        return modalBody;
    }
    async save(whereProperty: string='Name', whereValue: string) {
        await (this.bottomButtonLocator('Save')).click();
        const conn = await SaleforceConnection.open();
        await expect(async () => {
          const results = await conn.query<{Id: string}>(`SELECT FIELDS(ALL) FROM ${this.sObjName} WHERE ${whereProperty} = '${whereValue}' LIMIT 200`);
          expect(results.records[0]).toBeDefined();
        }).toPass({timeout: 15_000});
    }

}