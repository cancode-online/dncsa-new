<script lang="ts">
	import * as TinyMDE from 'tiny-markdown-editor/dist/tiny-mde.min.js';
	import { onMount } from 'svelte';
	import { v4 as uuidv4 } from 'uuid';
	import 'tiny-markdown-editor/dist/tiny-mde.min.css';

	export let value: string;

	let editor: any;
	let editorUID: string = uuidv4();
	let toolBar: any;
	let toolBarUID: string = uuidv4();

	onMount(() => {
		editor = new TinyMDE.Editor({ textarea: editorUID, content: value });
		toolBar = new TinyMDE.CommandBar({ element: toolBarUID, editor: editor });

		editor.addEventListener('selection', (e: any) => {
			value = editor.getContent();
		})

	});
</script>

<div class="h-full rounded-lg">
	<div id={toolBarUID} />
	<textarea id={editorUID} />
</div>

<style>
	:global(.TinyMDE) {
		@apply bg-transparent prose max-w-none h-full;
	}

	:global(.TMCommandBar) {
		@apply bg-neutral border-neutral border-8 rounded-t-lg text-primary;
	}

	:global(.TMCommandButton) {
		@apply bg-neutral fill-slate-500;
	}

	:global(.TMCommandButton:hover) {
		@apply bg-neutral fill-slate-200;
	}

	:global(.TMCommandButton_Active) {
		@apply bg-secondary border-4 rounded-md flex relative justify-center items-center border-secondary;
	}

	:global(.TMCommandButton > svg) {
		@apply absolute self-center;
	}

	:global(.TMCommandButton_Inactive) {
		@apply bg-neutral fill-slate-500;
	}

	:global(.TMCommandButton_Disabled) {
		@apply bg-neutral;
	}

	:global(.TMCommandDivider) {
		@apply border-slate-100/10 h-4 my-auto;
	}

	:global(.TMFencedCodeBacktick) {
		@apply bg-neutral border-0;
	}

	:global(.TMCodeFenceBacktickClose) {
		@apply bg-neutral border-0;
	}

	:global(.TMCodeFenceBacktickOpen) {
		@apply bg-neutral border-0;
	}
</style>