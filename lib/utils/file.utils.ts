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
        console.debug(`Writing local schema file: ${path}`);
        fs.writeFileSync(path, schema);
        console.debug(`Wrote local schema file: ${path}`);
    } catch (err: any) {
        console.error(`Failed to write local schema file: ${path}`);
    }
}

export function writeInstanceFile(sObjectName: string, filename: string, instance: string) {
    const dirname = Path.join(DATA_INSTANCE_DIR, sObjectName);
    createDirIfNotExists(dirname);
    const path = Path.join(dirname, filename);
    try {
        console.debug(`Writing local instance file: ${path}`);
        fs.writeFileSync(path, instance);
        console.debug(`Wrote local instance file: ${path}`);
    } catch (err: any) {
        console.error(`Failed to write local instance file: ${path}`);
    }
}