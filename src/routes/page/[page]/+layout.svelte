<script lang="ts">
	import MarkdownPage from '$/lib/components/MarkdownPage.svelte';
	import Tabs from '$/lib/components/Tabs.svelte';
	import { page } from '$app/stores';

	let currentPage = '/';
	$: currentPage = $page.params.page;
</script>

<div class="flex flex-col min-h-[20rem] w-full">
	<div class="min-h-[40rem]">
		{#key currentPage}
			<MarkdownPage webpage={currentPage} />
		{/key}
	</div>

	<div class="bg-purple-500 min-h-[40rem] mt-4">
		{#key currentPage}
			Extra
			<slot />
		{/key}
	</div>
</div>
