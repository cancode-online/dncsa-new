<script lang="ts">
	import { page } from '$app/stores';
	import { getPages, getFolderMetadata } from '../utils/pages';

	import { fly, fade } from 'svelte/transition';

	import { authenticated } from '$firebase';

	let tabsArray = [] as {}[];
	let selectedTab = '';
	let selectedFolder = '';

	authenticated.subscribe(async (value) => {
		selectedTab = $page.url.pathname.split('/')[2] || '/';

		console.log(selectedTab);

		let _pages = await getPages();
		let _folderMetadata = await getFolderMetadata();

		if (selectedTab != '/' && _pages[selectedTab].folder != selectedFolder) {
			selectedFolder = _pages[selectedTab].folder;

			let _folder = _folderMetadata[_pages[selectedTab].folder];
			let _tabsArray = [];

			for (let _page of _folder.order) {
				_tabsArray.push({
					slug: _page,
					metadata: await _pages[_page].import().then((m) => {
						return m.metadata;
					})
				});
			}

			tabsArray = _tabsArray;
		} else {
			selectedFolder = '/';

			tabsArray = [
				{
					slug: '/',
					metadata: {
						title: 'Home'
					}
				}
			];
		}
	});

	$: {
		(async () => {
			selectedTab = $page.url.pathname.split('/')[2] || '/';

			let _pages = await getPages();
			let _folderMetadata = await getFolderMetadata();

			if (selectedTab != '/' && _pages[selectedTab].folder != selectedFolder) {
				selectedFolder = _pages[selectedTab].folder;

				let _folder = _folderMetadata[_pages[selectedTab].folder];
				let _tabsArray = [];

				for (let _page of _folder.order) {
					_tabsArray.push({
						slug: _page,
						metadata: await _pages[_page].import().then((m) => {
							return m.metadata;
						})
					});

					console.log();
				}

				tabsArray = _tabsArray;
			}

			if (selectedTab === '/') {
				selectedFolder = '/';

				tabsArray = [
					{
						slug: '/',
						metadata: {
							title: 'Home'
						}
					}
				];
			}
		})();
	}
</script>

<div class="flex flex-col w-full relative h-12 p-0 m-0 bg-base-300 !rounded-b-none">
	{#key tabsArray}
		<div class="absolute left-0 bottom-0 tabs flex !rounded-b-none px-2 overflow-hidden">
			{#each tabsArray as tab, i}
				<a
					href={tab.slug}
					class="tab border-none tab-lifted !px-4 !py-0 {selectedTab === tab.slug
						? 'tab-active'
						: ''}"
					in:fly={{
						x: -200,
						y: 0,
						duration: 400,
						delay: 200 + i * 25
					}}
					out:fly={{
						y: 20,
						duration: 200,
						delay: 0
					}}
				>
					<span>
						{tab.metadata.title}
					</span>
				</a>
			{/each}
		</div>
	{/key}
</div>

<style lang="postcss">
	div {
		border-radius: var(--rounded-btn, 0.5rem);
	}

	:global(.tab-active::after),
	:global(.tab-active)::before {
		background-image: radial-gradient(
			circle at var(--circle-pos),
			transparent var(--tab-grad),
			var(--tab-border-color) calc(var(--tab-grad) + 0.3px),
			var(--tab-border-color) calc(var(--tab-grad) + var(--tab-border, 1px)),
			hsla(var(--b2) / var(--tw-bg-opacity, 1))
				calc(var(--tab-grad) + var(--tab-border, 1px) + 0.3px)
		) !important;
	}

	:global(.tab-active) {
		@apply !bg-base-200 !text-base-content;
	}
	:global(.tab-active > span) {
		@apply !max-w-[10rem];
	}

	:global(.tab > span) {
		white-space: nowrap;
		max-width: 5rem;
		overflow: hidden; /* "overflow" value must be different from  visible"*/
		-o-text-overflow: ellipsis; /* Opera < 11*/
		text-overflow: ellipsis; /* IE, Safari (WebKit), Opera >= 11, FF > 6 */
	}
</style>
