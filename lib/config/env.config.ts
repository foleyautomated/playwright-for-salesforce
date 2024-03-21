// NOTE : Do not put anything above these two lines, environment loading must happen first
import dotenv from 'dotenv-safe';
dotenv.config({ allowEmptyValues: true });

import path from 'path';
import fs from 'fs';
import { createDirIfNotExists } from '../utils/file.utils';

/*
    Desired local directory structure

    root/
    - spec/
    - debug/
      - data/
        - instance/
        - schema/
      - contexts/
      - reports/
*/

// Define and validate test directory
export const TEST_DIR = path.join(process.cwd(), 'spec');
if (!fs.existsSync(TEST_DIR))
    throw new Error(`Test directory does not exist: ${TEST_DIR}`);

// Define and validate debug directory
export const DEBUG_DIR = path.join(process.cwd(), 'debug');
createDirIfNotExists(DEBUG_DIR);
export const CONTEXT_DIR = path.join(DEBUG_DIR, 'context');
createDirIfNotExists(CONTEXT_DIR);
export const REPORTS_DIR = path.join(DEBUG_DIR, 'reports');
createDirIfNotExists(REPORTS_DIR);
export const DATA_DIR = path.join(DEBUG_DIR, 'data');
createDirIfNotExists(DATA_DIR);
export const DATA_SCHEMA_DIR = path.join(DATA_DIR, 'schema');
createDirIfNotExists(DATA_SCHEMA_DIR);
export const DATA_INSTANCE_DIR = path.join(DATA_DIR, 'instance');
createDirIfNotExists(DATA_INSTANCE_DIR);

// Define default file paths
export const DEFAULT_STORAGE_STATE = path.join(CONTEXT_DIR, 'default_browser_context.json');

// Define report output paths
export const MONOCART_REPORT = path.join(REPORTS_DIR, 'monocart/report.html');
