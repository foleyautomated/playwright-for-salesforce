# **SPRINT THROUGH DEMO, SAVE QUESTIONS FOR THE END**
# Intro
Two Projects:
1. SalesForce-AutomatedTests: our actual salesforce implementation at a different client
2. Playwright-Salesforce: a project I made to try and improve on/learn from SalesForce-Automated Tests

# Confi/Settup Overview
1. Run 'log into salesforce''
2. playwright.config
3. globalSetup
4. .env
5. Discuss refactoring to improve test output

# js-force Overview
2. Run 'Create New Account via API'
3. Show janky basic auth, show okta auth in other solution
4. Discuss options for refactoring to reduce test overhead

# Fixtures/Pages Overview
1. Run 'create new Account via GUI'
2. Share/discuss the Salesforce Modal Page
3. Deep dive on Locators, async/await
4. Briefly touch on Faker

# Debugging
## Saving/Loading states from the console:

1. Save a given pre-saved context for next time:
`npx playwright codegen https://agilitypartners-dev-ed.develop.lightning.force.com/lightning/o/Account/list?filterName=Recent --save-storage "C:/temp/debugStorageState.json"`
2. Load this pre-saved context
 `npx playwright codegen https://agilitypartners-dev-ed.develop.lightning.force.com/lightning/o/Account/list?filterName=Recent --load-storage "C:/temp/debugStorageState.json"`
3. introduce use of the "playwright" object through the Chromium Debugger
- Find Elements, 

## Using the DEBUG CONSOLE in VSCode
1. Add a breakpoint to one of the 'return fieldLocator' lines in salesforceModal
2. Run 'create new Account via GUI'
3. Show how you can expiriment with different selectors inside the Console

# Design/Architecture Overview
1. Show the markdown preview for this doc, just in case
2. Goto 'SfClassDesign' and talk about reusability
3. Goto 'AccountFlow' to show off simple Sequence Diagram

# Eslint
1. Look at all these suggestions:
2. Terminal: `npx eslint .`