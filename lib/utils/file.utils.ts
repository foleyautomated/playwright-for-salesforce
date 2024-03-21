import { DATA_SCHEMA_DIR, DATA_INSTANCE_DIR } from '../config/env.config';
import fs from 'fs';
import * as Path from 'path';

export function getFileAgeInMinutes(path: string): number {
    if (!fs.existsSync(path)) return -1;
    const ageMs: number = fs.statSync(path).mtimeMs;
    const diffInMinutes: number = Math.floor((Date.now() - ageMs) / (1000 * 60));
    return diffInMinutes;
}

export function createDirIfNotExists(path: string) {
    if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true });
}

export function writeSchemaFile(filename: string, schema: string) {
    const path = Path.join(DATA_SCHEMA_DIR, filename);
    try {
        fs.writeFileSync(path, schema);
        console.debug(`Wrote local schema file: ${filename}`);
    } catch (err: any) {
        console.error(`Failed to write local schema file: ${filename}`);
    }
}
