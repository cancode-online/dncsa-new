<script lang="ts">
	export let code = "print('Hello World')";
	export let lang = 'python';
	export let title = '';

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
		const data = await executeCode(code, lang);
		let result = data.stdout || data.stderr || 'Compilation Error';

		output = `> ${result.replace(/\n/g, '\n> ')}`;
		button = 'Re-run code';
	}
</script>

<div class="relative w-full my-2">
	<div class="rounded-t-sm min-h-12">
		<pre class="!m-0 language-js bg-transparent"><code class="language-js bg-transparent"
				>{@html prismCode}</code
			></pre>
	</div>
	<div
		class="bg-base-300 text-base-content rounded-b-sm min-h-12 prose dark:prose-invert w-full min-w-0 max-w-none"
	>
		<pre class="!m-0 language-js output !bg-transparent"><code class="language-js"
				>{@html output}</code
			></pre>
	</div>
	<button
		class="btn btn-primary btn-sm absolute bottom-0 right-0 m-2 rounded-sm"
		on:click={execute}
	>
		<span class='uppercase'>{button}</span>
	</button>
	<code
		class="absolute right-0 top-0 m-2 prose dark:prose-invert opacity-50 select-none font-thin text-sm"
		>{title}</code
	>
</div>
