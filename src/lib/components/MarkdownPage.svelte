<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { getPages } from '$utils/pages';
	import { onMount } from 'svelte';

	export let webpage;
	let data = {};
	export async function loadPageData(webpage) {
		try {
			const _pages = await getPages();
			console.log('_pages:', _pages);
			const post = await _pages[webpage].import();
			console.log('webpage:' + webpage);
			console.log('post:', post);
			const { title, date, summary, type } = post.metadata;
			const content = post.default;

			data = {
				content,
				title,
				summary,
				date,
				type
			};
		} catch (e) {
			console.log(e);
			data = {
				status: 404,
				error: 'Not found'
			};
		}

		return data;
	}

	onMount(async () => {
		const data = await loadPageData(webpage);
	});
</script>

<div class="flex flex-col h-full w-full gap-4">
	<div class="w-full bg-base-200 h-fit !rounded-t-none">
		<article
			class="prose dark:prose-invert m-0 p-4 self-center min-w-0 max-w-none h-full w-full"
			in:fly={{
				y: 50,
				duration: 400,
				delay: 100
			}}
			out:fade={{
				duration: 100
			}}
		>
			<div class="m-0 mb-1 flex justify-between">
				<div class="flex gap-2">
					<h4 class="m-0 h-fit self-center">{data.title}</h4>
					<p class="m-0 h-fit self-center">
						- {new Date(data.date).toLocaleDateString('en-us')}
					</p>
				</div>
				<div class="badge badge-primary self-center m-0 p-1 h-fit">
					{#if data.type === 'assignment'}
						Assignment
					{:else if data.type === 'reading'}
						Reading
					{:else if data.type === 'announcement'}
						Announcement
					{:else}
						Info
					{/if}
				</div>
			</div>
			<p class="italic m-0 mb-2 text-sm">
				"{data.summary}"
			</p>
			<hr class="mt-0" />
			<div class="m-0">
				<svelte:component this={data.content} />
			</div>
		</article>
	</div>
</div>

<style lang="postcss">
	div {
		border-radius: var(--rounded-btn, 0.5rem);
	}
</style>
