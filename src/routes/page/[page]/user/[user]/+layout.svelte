<script lang="ts">
	import { admin } from '$firebase';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let currentUserPage = $page.params.user;
	let currentPage = $page.params.page;
	$: {

		currentPage = $page.params.page;
		currentUserPage = $page.params.user;
	}


	$: {

		let foo = $page;

		setTimeout(()=>{
			document.getElementById('submissions')?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
		}, 250)
		
	}

	let selectedTab = 0;

	$: {

		let foo = grade;

		// Set user grade using firebase
		setGrade()

	}

	async function setGrade() {

		// Set user grade using firebase

	}

	let grade = 0;

</script>

{#if $admin}
	<div id='submissions' class="bg-base-200 w-full h-64">
		<div class="flex flex-col w-full relative h-12 p-0 m-0 bg-base-300 !rounded-b-none">
			{#key []}
				<div class="absolute left-0 bottom-0 tabs flex !rounded-b-none px-2 overflow-hidden w-full">
					{#each [{
						slug: 'foo',
						title: 'Submission 1'
					},{
						slug: 'foo',
						title: 'Submission 2'
					}] as tab, i}
					<a on:click={()=>{
						setTimeout(()=>{
			document.getElementById('submissions')?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
		}, 250)}} href={"/page/"+currentPage+"/user/"+currentUserPage+"/submission/"+(i+1)}>
						<button on:click={() => { selectedTab = i }}
							class="tab border-none tab-lifted !px-4 !py-0 {selectedTab === i
								? 'tab-active'
								: ''}"
						>
							<span>
								{tab.title}
							</span>
						</button>
					</a>
					{/each}
					<div class='flex justify-end gap-2 w-full h-12 self-end flex-1 p-2'>
						<div class='bg-base-100 w-28 flex justify-center text-base-content'>
							<input type="text" placeholder="?" bind:value={grade} class="bg-transparent w-10 text-right rounded-sm text h-8 border-none outline-none" />
							<div class='h-fit w-20 self-center text-left pl-2 '>
								/ 3
							</div>
						</div>
						<a href={'/page/'+currentPage}>
							<button class='btn btn-sm btn-primary w-20 h-8'>
								Back
							</button>
						</a>
					</div>
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
	div, input {
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
