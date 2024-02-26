# Commands:
`npx playwright test`                //Runs tests on all browsers as configured in the playwright.config file

`npx playwright test --ui`           //Run in UI Mode   

`npm install --save-dev @types/dotenv-safe` <--- mAGIC CHASE code for env
`npm i --save-dev @types/jsforce`
# Debugging
foleyautomated@gmail.com
ILoveCheeseBurgers123!
## [UI MODE](https://youtu.be/d0u6XhXknzU) 
npm i -D monocart-reporter
npx playwright show-report


### Debug a specific file
npx playwright test example.spec.ts:9 --debug

### Debug mid-execution
`playwright.locator(...)` in the console

## Codegen
//Goto a given url in Playwright
npx playwright codegen playwright.dev

//Save a given pre-saved context for next time:
npx playwright codegen https://agilitypartners-dev-ed.develop.lightning.force.com/lightning/o/Account/list?filterName=Recent --save-storage "C:/temp/debugStorageState.json"
//Load this pre-saved context
 npx playwright codegen https://agilitypartners-dev-ed.develop.lightning.force.com/lightning/o/Account/list?filterName=Recent --load-storage "C:/temp/debugStorageState.json"


## eslint
`npm i eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser`
 

## Salesforce CLI



## ts-force
https://ts-force.gitbook.io/ts-force/getting-started
https://developer.salesforce.com/tools/salesforcecli
`npm install @salesforce/cli --global`
`$ npm install ts-force`
`$ npm install -D ts-force-gen`
`npx ts-force-gen -j ts-force-config.json`


 ## SF Data Types
 []fields - "type", "label" //"name" is what sf-force uses in returns
    #double "Billing Latitude"

    #id "Id"

    #int "Employees"

    #string "Account Name"

    #boolean "Deleted"
    
    #reference "Master Record ID"
    
    #picklist "Active"
    - picklistValues[]{label: "something"}
    
    #textarea "Description"
    
    #date "SLA Expiration Date"