import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx', '.svexy', '.svelte.md', '.mdx'],
	kit: {
		adapter: adapter(),
		alias: {
			$: 'src',
			$lib: 'src/lib',
			$components: 'src/lib/components',
			$routes: 'src/routes',
			$stores: 'src/lib/stores',
			$types: 'src/app.d.ts',
			$utils: 'src/lib/utils',
			$files: 'src/files',
			$firebase: 'src/firebase.ts',
			$pages: 'src/pages',
		}
	},
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx', '.svexy', '.svelte.md', '.mdx']
		})
	]
};

export default config;
