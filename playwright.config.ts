import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv-safe'
import path from 'path';

dotenv.config({
  allowEmptyValues: true
});
dotenv.config();

// Define directory locations
export const TEST_DIR = path.join(process.cwd(), 'spec');
export const DEBUG_DIR = path.join(process.cwd(), 'debug');
export const STATE_DIR = path.join(DEBUG_DIR, 'state');
export const REPORT_DIR = path.join(DEBUG_DIR, 'reports');

// Define file paths
export const STORAGE_STATE = path.join(STATE_DIR, 'default_browser_state.json');
export const MONOCART_REPORT = path.join(REPORT_DIR, 'monocart/report.html');

export default defineConfig({

	/* Configure basic project settings */
	testDir: TEST_DIR,
	fullyParallel: true,
	forbidOnly: !!process.env.CI, // Fail the build on CI if you accidentally left test.only in the source code.
	retries: process.env.CI ? 2 : 0, // Retry on CI only
	workers: process.env.CI ? 1 : undefined, // Opt out of parallel tests on CI.

	/* Configure reporters */
	// TODO : Different reporters for CI ?
	reporter: [
		[ 'monocart-reporter', { name: "Monocart Report", outputFile: MONOCART_REPORT }],
	],

	/* Configure setup & teardown for all projects */
	globalSetup: `${process.cwd()}/lib/hooks/globalSetup.ts`,
	globalTeardown: `${process.cwd()}/lib/hooks/globalTeardown.ts`,

	/* Configure global options for all tests  */
	use: {
		baseURL: 'https://agilitypartners-dev-ed.develop.lightning.force.com/lightning',
		storageState: STORAGE_STATE,
		trace: 'on-first-retry',
	},

	/* Configure all projects */
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		}
	],
});
