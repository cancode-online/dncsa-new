<script lang="ts">
	import { admin } from '$firebase';
	import { page } from '$app/stores';

	let currentUserPage = $page.params.user;
	$: currentUserPage = $page.params.user;

	let selectedTab = 0;

</script>

{#if $admin}
	<div class="bg-red-500 w-full h-64">
		<div class="flex flex-col w-full relative h-12 p-0 m-0 bg-base-300 !rounded-b-none">
			{#key []}
				<div class="absolute left-0 bottom-0 tabs flex !rounded-b-none px-2 overflow-hidden">
					{#each [{
						slug: 'foo',
						title: 'Submission 1'
					},{
						slug: 'foo',
						title: 'Submission 2'
					}] as tab, i}
						<button on:click={() => { selectedTab = i }}
							class="tab border-none tab-lifted !px-4 !py-0 {selectedTab === i
								? 'tab-active'
								: ''}"
						>
							<span>
								{tab.title}
							</span>
						</button>
					{/each}
				</div>
			{/key}
		</div>		
		{#key currentUserPage}
			<slot />
		{/key}
	</div>
{:else}
	<div class="bg-blue-500 w-64 h-64">Quiz or FRQ</div>
{/if}

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
