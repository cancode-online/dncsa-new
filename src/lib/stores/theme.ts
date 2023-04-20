import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

const codeDefault = 'dark';
const codeValue = browser ? window.localStorage.getItem('codeTheme') ?? codeDefault : codeDefault;

const codeTheme = writable<string>(codeValue) as Writable<string>;

codeTheme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('codeTheme', value);
	}
});


const layoutDefault = 'garden';
const layoutValue = browser ? window.localStorage.getItem('layoutTheme') ?? layoutDefault : layoutDefault;

const layoutTheme = writable<string>(layoutValue) as Writable<string>;

layoutTheme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('layoutTheme', value);
	}
});


export { codeTheme, layoutTheme };
