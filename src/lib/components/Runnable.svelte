<script lang="ts">
	export let code = "print('Hello World')";
	export let lang = 'python';
	export let title = '';
	export let historical = [] as String[];

	import { executeCode } from '$utils/executeCode';

	import Prism from 'prismjs';
	import 'prismjs/components/prism-clike.min.js';
	import 'prismjs/components/prism-markup-templating.min.js';

	let prismCode = code;
	let output = `<span class='opacity-40 select-none'>Output will appear here</span>`;
	let button = 'Run';

	(async () => {
		await import(`../prism/prism-${lang}.min.js`);
		prismCode = Prism.highlight(code, Prism.languages[lang], lang);
	})();

	async function execute() {
		button = 'Running...';
		output = `<span class='opacity-40 select-none'>Running...</span>`;

		let final = code;

		for (let i = historical.length - 1; i >= 0; i--) {

			final = historical[i] + ' \n ' + final;

		}

		const data = await executeCode(final, lang);
		let result = data.stdout || data.stderr || 'Compilation Error';

		output = `> ${result.replace(/\n/g, '\n> ')}`;
		button = 'Re-run code';
	}
</script>

<div class="relative w-full my-2">
	<div class="min-h-12">
		<pre class="!m-0 language-js dynamic-code-snip-input"><code
				class="!text-base-content language-js">{@html prismCode}</code
			></pre>
	</div>
	<div
		class="bg-base-300 text-base-content min-h-12 prose dark:prose-invert w-full min-w-0 max-w-none !rounded-t-none"
	>
		<pre class="!m-0 language-js output !bg-transparent"><code
				class="!text-base-content language-js">{@html output}</code
			></pre>
	</div>
	<button class="btn btn-primary btn-sm absolute bottom-0 right-0 m-2" on:click={execute}>
		<span class="uppercase">{button}</span>
	</button>
	<code
		class="absolute right-0 top-0 m-2 !text-base-content opacity-50 select-none font-thin text-sm"
		>{title}</code
	>
</div>

<style lang="postcss">
	div,
	pre {
		border-radius: var(--rounded-btn, 0.5rem);
	}

	.dynamic-code-snip-input {
		border-radius: var(--rounded-btn, 0.5rem) var(--rounded-btn, 0.5rem) 0 0 !important;
	}
</style>
