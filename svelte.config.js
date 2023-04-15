import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			$: 'src',
			$lib: 'src/lib',
			$components: 'src/lib/components',
			$routes: 'src/routes',
			$stores: 'src/lib/stores',
			$types: 'src/app.d.ts',
			$utils: 'src/lib/utils',
			$files: 'src/lib/files'
		},
		adapter: adapter()
	}
};

export default config;
