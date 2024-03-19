import { existsSync, statSync } from 'fs';

export function getFileAgeInMinutes(path: string): number {
    if (!existsSync(path)) return -1;
    const ageMs: number = statSync(path).mtimeMs;
    const diffInMinutes: number = Math.floor((Date.now() - ageMs) / (1000 * 60));
    return diffInMinutes;
}
