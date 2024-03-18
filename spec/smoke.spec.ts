import { test, expect } from '@playwright/test';
import { SfBasePage } from '../lib/sfdynamics/SfBasePage';
import { SfRecentlyViewedPage } from '../lib/sfdynamics/SfRecentlyViewedPage';
import { SfRecordDetailsPage } from '../lib/sfdynamics/SfRecordDetailsPage';
import { faker } from '@faker-js/faker';
import jsfConnecter from '../lib/api/JsfConnecter'
import SfRecordViewPage from '../lib/sfdynamics/SfRecordViewPage';
import { QueryResult } from 'jsforce';


test('log into salesforce', async ( { page }) => {
    await page.goto("https://agilitypartners-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
});