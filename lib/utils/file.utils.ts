import fs from 'fs';

export function getFileAgeInMinutes(path: string): number {
    if (!fs.existsSync(path)) return -1;
    const ageMs: number = fs.statSync(path).mtimeMs;
    const diffInMinutes: number = Math.floor((Date.now() - ageMs) / (1000 * 60));
    return diffInMinutes;
}

export function createDirIfNotExists(path: string) {
    if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true });
}
