<script lang="ts">
	import { page } from '$app/stores';
	import { getFolderMetadata } from '$utils/pages';

	import LucideFiles from '~icons/lucide/files';
	import LucideFileText from '~icons/lucide/file-text';
	import LucideFolderOpen from '~icons/lucide/folder-open';
	import LucideCalendar from '~icons/lucide/calendar';
	import LucideHome from '~icons/lucide/home';

	let timeline = [];
	let _folderMetadata;

	(async () => {
		_folderMetadata = await getFolderMetadata();

		for (let folder in _folderMetadata) {
			timeline.push(folder);
		}

		timeline.sort((a, b) => {
			return (
				new Date(_folderMetadata[a].date).getTime() - new Date(_folderMetadata[b].date).getTime()
			);
		});

		timeline = timeline;
	})();

	let currentPage = $page.url.pathname.split('/')[2] || '/';
	$: currentPage = $page.url.pathname.split('/')[2] || '/';
</script>

<div class="w-48">
	<div
		class="h-10 uppercase flex justify-start p-2 w-full bg-primary text-primary-content !rounded-b-none"
	>
		<div class="flex self-center w-fit gap-2">
			<span class="self-center"><LucideCalendar /></span>
			<span class="flex-1 text-left">Timeline</span>
		</div>
	</div>
	<div
		class="no-scrollbar bg-base-300 max-h-[24rem] w-full p-1 gap-1 flex flex-col flex-nowrap overflow-y-scroll !rounded-t-none"
	>
		<a href="/">
			<button
				class="btn btn-sm btn-ghost w-full uppercase flex gap-2 p-1 {currentPage === '/'
					? 'active-timeline-button'
					: ''}"
			>
				<LucideHome />
				<span class="flex-1 text-left">Home</span>
			</button>
		</a>
		{#each timeline as folder, i}
			<a href="/page/{_folderMetadata[folder].order[0]}">
				<button
					class="btn btn-sm btn-ghost w-full uppercase flex gap-2 p-1 {_folderMetadata[
						folder
					].order.includes(currentPage)
						? 'active-timeline-button'
						: ''}"
				>
					{#if _folderMetadata[folder].type === 'page'}
						<LucideFileText />
					{:else if _folderMetadata[folder].type === 'unit'}
						<LucideFolderOpen />
					{:else}
						<LucideFiles />
					{/if}
					<span class="flex-1 text-left">{_folderMetadata[folder].title}</span>
				</button>
			</a>
		{/each}
	</div>
</div>

<style lang="postcss">
	div,
	button {
		border-radius: var(--rounded-btn, 0.5rem);
	}

	/* width */
	.no-scrollbar::-webkit-scrollbar {
		width: 0px;
	}

	/* Track */
	.no-scrollbar::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	.no-scrollbar::-webkit-scrollbar-thumb {
		background: transparent;
	}

	/* Handle on hover */
	.no-scrollbar::-webkit-scrollbar-thumb:hover {
		background: transparent;
	}

	:global(.active-timeline-button) {
		@apply !bg-primary !text-primary-content !border-primary;
	}

	:global(.active-timeline-button):hover {
		@apply !bg-primary-focus !text-primary-content !border-primary;
	}
</style>
