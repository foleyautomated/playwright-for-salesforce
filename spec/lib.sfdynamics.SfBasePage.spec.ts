import { test, expect, request } from '@playwright/test';
import SfBasePage from '../lib/sfdynamics/SfBasePage'

import * as Path from 'path';


let sfApps = ["Sales", "Service", "Marketing CRM Classic", "Community", "Salesforce Chatter", "Sales Console"]

for(let app of sfApps)
{
    test(`Switch Between Sf Apps ${app}`, async ( { page })  => {
        let salesPage = await SfBasePage.initToHome(page, app);  
        salesPage.ensureCurrentSfAppName(app);
    });
}

