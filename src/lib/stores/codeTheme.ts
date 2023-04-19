import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

const defaultValue = 'light';
const initialValue = browser ? window.localStorage.getItem('codeTheme') ?? defaultValue : defaultValue;

const codeTheme = writable<string>(initialValue) as Writable<string>;

codeTheme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('codeTheme', value);
	}
});

export { codeTheme };
