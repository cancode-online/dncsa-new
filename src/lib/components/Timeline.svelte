<script lang="ts">
	import { page } from '$app/stores';
	import { getFolderMetadata } from '$utils/pages';

	import LucideFiles from '~icons/lucide/files';
	import LucideFileText from '~icons/lucide/file-text';
	import LucideFolderOpen from '~icons/lucide/folder-open';
	import LucideCalendar from '~icons/lucide/calendar';
	import LucideHome from '~icons/lucide/home';

	let _folderMetadata;
	let timeline = [];
	function sortFunction(a, b) {
		var dateA = new Date(a.date).getTime();
		var dateB = new Date(b.date).getTime();
		return dateA > dateB ? 1 : -1;
	}
	(async () => {
		_folderMetadata = await getFolderMetadata();
		for (let folder in _folderMetadata) {
			timeline.push(_folderMetadata[folder]);
		}
		timeline.sort(sortFunction);
		timeline = timeline;
	})();

</script>

<div class="bg-base-200 w-56 h-fit flex flex-col p-1 gap-1">
	<div class="btn btn-neutral flex justify-start gap-2 px-2">
		<div>
			<LucideCalendar />
		</div>
		<span class="self-center normal-case">Timeline</span>
	</div>
	{#each timeline as _page, i}
		<a href="/page/{_page.order[0]}">
			<div class="btn btn-ghost btn-sm flex justify-start px-2 gap-2 {_page.order[0] === $page.params.page ? "btn-primary" : ""}">
				<div>
					<LucideFiles />
				</div>
				<span class="self-center normal-case"> {_page.title} </span>
			</div>
		</a>
	{/each}
</div>

<style lang="postcss">
	div {
		border-radius: var(--rounded-btn, 0.5rem);
	}
</style>
