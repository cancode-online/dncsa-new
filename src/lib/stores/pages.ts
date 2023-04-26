import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const metadataImports = import.meta.glob('../../pages/**/metadata.ts');
export const pageImports = import.meta.glob('../../pages/**/**.md');

export const pages = writable<any>(null) as Writable<any>; // Contains page import and the folder it belongs to
export const folderMetadata = writable<any>(null) as Writable<any>; // Contains folder metadata

export const cachedPages = writable<any>(null) as Writable<any>;
export const toBeCached = writable<any>(null) as Writable<any>;
