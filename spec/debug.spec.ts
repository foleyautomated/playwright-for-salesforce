import { test, expect, request } from '@playwright/test';
import { SalesforceBasePage } from '../lib/fixtures/salesforceBasePage';
import { SalesforceRecentlyViewedPage } from '../lib/fixtures/salesForceRecentlyViewedPage';
import { SalesforceModal } from '../lib/fixtures/salesforceModal';
import { faker } from '@faker-js/faker';
import SaleforceConnection from '../lib/api/jsforceauth';
import GenerateModuleCode from '../lib/api/sfObjectDetails';



test('debug', async () => {

    //TODO - Abstract out API Object creation to use a callback that returns the id
  
    GenerateModuleCode("Account");
  
  });