import {Page, Locator, expect} from '@playwright/test';
import { SfeBasePage} from './SfBasePage';
//import { text } from 'stream/consumers';
import { format } from 'path';


export class SfNewRecordModal
{
    readonly body: Locator;

    constructor(public readonly page: Page, public objectName: string) {
        this.page = page;
        this.objectName = objectName;
        
        //Get Modal Locator
        const modalHeader = page.getByText(`h2:has-text(${objectName})`).filter();
        this.body = page.locator('div.actionBody').filter({ has: modalHeader });
        console.log(`Modal for ${objectName} Located`);
    }
    private scrubSpecialChararactersAndCreateRegex(label: string) : RegExp
    {
        const labelWithoutSpecialCharacters = label.replace(/\W/g, '.');
        //The .? at the beginning accomodates occasional '*' salesforce prepends to required feilds
        return new RegExp(`^.?${labelWithoutSpecialCharacters}$`)
    }
    fieldLabelLocator(label: string) : Locator {
        //The 'or' Handles ❄️ Multi-select Label (which is actually a div)
        const labelLocator = this.page.locator('label').or(this.page.locator("[id*='group-label']")).filter( {hasText: this.scrubSpecialChararactersAndCreateRegex(label)});  
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
        return (await textField.textContent({timeout: 100}) ?? "");
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
        return (await this.comboboxFieldRootLocator(label).textContent({timeout: 100}) ?? "");
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
        return (await this.textAreaFieldLocator(label).textContent({timeout: 100}) ?? "");
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
    async readDateInput(label: string) : Promise<string | null> {
        const dateValue = await this.dateFieldLocator(label).textContent({timeout: 100});
        return dateValue;
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

    //Multi-Select
    multiselectRootLocator(label: string) {
        const rootLocator = this.page.locator('lightning-dual-listbox')
            .filter( {has: this.fieldLabelLocator(label) });
        return rootLocator;
    }
    multiselectPsudoColumnHeaderLocator(label: string, psudoColumnName: "Available" | "Chosen") : Locator {
        const rootLocator = this.multiselectRootLocator(label);
        const psudoColumnHeaderLocator = rootLocator.locator('span').getByText(psudoColumnName);
        return psudoColumnHeaderLocator;
    }
    multiselectPsudoColumnRootLocator(label: string, psudoColumnName: "Available" | "Chosen") : Locator {
        const rootLocator = this.multiselectRootLocator(label);
        const psudoColumnRoot = rootLocator.locator("[class*='dueling-list__column']").filter( {has: this.page.locator('span').getByText(psudoColumnName)})
        return psudoColumnRoot;
    }
    multiselectListItemsLocator(label: string, psudoColumnName: "Available" | "Chosen") : Locator {
        const psudoColumnRoot = this.multiselectPsudoColumnRootLocator(label, psudoColumnName);
        const listItemsLocator = psudoColumnRoot.locator("li");
        return listItemsLocator;
    }
    multiselectMoveToButtonLocator(label: string, moveSelectionTo: "Available" | "Chosen" ) : Locator {
        const rootLocator = this.multiselectRootLocator(label); 
        const directionButton = rootLocator.locator('button').getByText(`Move selection to ${moveSelectionTo}`);
        return directionButton;
    }
    async multiselectGetPsudoColumnSelections(label: string, psudoColumnName: "Available" | "Chosen") : Promise<string[]> {
        const listItemsLocator = this.multiselectListItemsLocator(label, psudoColumnName);
        const items = await listItemsLocator.allTextContents();
        return items;
    }
    async fillMultiSelect(label: string, selections: string[], fromPsudoColumn: "Available" | "Chosen" = "Available") {
        const toPsudoColumn: "Available" | "Chosen" = fromPsudoColumn == "Available" ? "Chosen" : "Available";
        const sourceItemsLocator = this.multiselectListItemsLocator(label, fromPsudoColumn);
        await expect(sourceItemsLocator.first()).toBeVisible();
        const targetItemsLocator = this.multiselectListItemsLocator(label, toPsudoColumn);
        const moveToButtonLocator = this.multiselectMoveToButtonLocator(label, toPsudoColumn);
        for(const selection of selections) {
            //TODO: Check for Items already selecetd
            const currentItemLocator = sourceItemsLocator.locator('span').getByText(selection, { exact: true });
            await currentItemLocator.click();
            await moveToButtonLocator.click();
            await expect(targetItemsLocator.locator('span').getByText(selection)).toContainText(selection);
            
        }
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
        console.log(`Modal for ${this.objectName} Located`);
        return modalBody;
    }
}