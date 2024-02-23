import {Page, Locator, expect} from '@playwright/test';
import { SalesforceBasePage} from './salesforceBasePage';
import { text } from 'stream/consumers';
import { format } from 'path';


export class SalesforceModal
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
        const labelLocator = this.page.locator('label') 
            .filter( {hasText: this.scrubSpecialChararactersAndCreateRegex(label)})
        return labelLocator;
    }
    //Text Field
    textFieldLocator(label: string) : Locator {
        const fieldLocator = this.page.locator('lightning-input')
            .filter( {hasText: this.scrubSpecialChararactersAndCreateRegex(label)})
            .locator('input');
        return fieldLocator;
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
    async fillSearchField(label: string, value: string) {
        //Enter Search Value
        (this.searchFieldLocator(label)).fill(value);
        (this.searchFieldLocator(label)).click();
        const option = this.page.locator('lightning-grouped-combobox').getByTitle(value, { exact: true });
        await option.click();
    }
    //Combo Box
    comboboxFieldRootLocator(label: string) : Locator {
        const fieldLocator = this.page.locator('lightning-combobox')
            .filter( {has: this.fieldLabelLocator(label)})
        return fieldLocator;
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
    async fillDateInput(label: string, date: Date) {
        //TODO: Why is this so hard it TS?? If there isnt a better way, this logic should live somewhere more accessable to the rest of the project.
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        const formatedDate = `${month}/${day}/${year}`;
        await ( this.dateFieldLocator(label)).fill(formatedDate);
    }


    //Modal Buttom Button
     bottomButtonLocator(label: string) : Locator {
        const fieldLocator = this.page.locator('lightning-button')
            .filter( {hasText: this.scrubSpecialChararactersAndCreateRegex(label)})
            .locator('button')
        return fieldLocator;
    }
    async modalBodyLocator() : Promise<Locator> {
        const modalHeader = this.page.getByText('h2:has-text("New Account")');
        const modalBody = this.page.locator('div.actionBody').filter({ has: modalHeader });
        console.log(`Modal for ${this.objectName} Located`);
        return modalBody;
    }
    



}