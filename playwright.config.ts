// NOTE : Do not put anything above this import, environment loading must happen first
import * as Env from './lib/config/env.config';

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

	/* Configure basic project settings */
	testDir: Env.TEST_DIR,
	fullyParallel: true,
	forbidOnly: !!process.env.CI, // Fail the build on CI if you accidentally left test.only in the source code.
	retries: process.env.CI ? 2 : 0, // Retry on CI only
	workers: process.env.CI ? 1 : undefined, // Opt out of parallel tests on CI.

	/* Configure reporters */
	// TODO : Different reporters for CI ?
	reporter: [
		[ 'monocart-reporter', { name: "Monocart Report", outputFile: Env.MONOCART_REPORT }],
	],

	/* Configure setup & teardown for all projects */
	globalSetup: `${process.cwd()}/lib/hooks/globalSetup.ts`,
	globalTeardown: `${process.cwd()}/lib/hooks/globalTeardown.ts`,

	/* Configure global options for all tests  */
	use: {
		baseURL: 'https://agilitypartners-dev-ed.develop.lightning.force.com/lightning',
		storageState: Env.DEFAULT_STORAGE_STATE,
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
