<script lang="ts">
	import { page } from '$app/stores';

	let tabsArray = [] as string[];

	tabsArray = ['unit-1', 'unit-2', 'unit-3', 'unit-4', 'unit-5'];

</script>

<div class="tabs bg-base-300 !rounded-b-none px-2">
	{#each tabsArray as tab, i}
		<a
			href={`/page/${tab}`}
			class="mt-2 tab border-none tab-lifted !px-4 !py-0 {$page.url.pathname.split('/')[2] === tab
				? 'tab-active'
				: ''}"
		>
			<span>
				{tab}
			</span>
		</a>
	{/each}
</div>

<style lang="postcss">
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
