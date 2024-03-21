// NOTE : Do not put anything above these two lines, environment loading must happen first
import dotenv from 'dotenv-safe';
dotenv.config({ allowEmptyValues: true });

import path from 'path';

// Define directroy locations
export const TEST_DIR = path.join(process.cwd(), 'spec');
export const DEBUG_DIR = path.join(process.cwd(), 'debug');
export const STATE_DIR = path.join(DEBUG_DIR, 'state');
export const REPORT_DIR = path.join(DEBUG_DIR, 'reports');

// Define default file paths
export const DEFAULT_STORAGE_STATE = path.join(STATE_DIR, 'default_storage_state.json');

// Define report output paths
export const MONOCART_REPORT = path.join(REPORT_DIR, 'monocart/report.html');
