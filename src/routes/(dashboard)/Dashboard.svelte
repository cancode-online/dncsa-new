<script lang='ts'>

	import LucideMegaphone from '~icons/lucide/megaphone';
	import LucideBook from '~icons/lucide/book';
	import LucideCog from '~icons/lucide/cog';

	import Timeline from '$components/Timeline.svelte';
	import Tabs from '$components/Tabs.svelte';

	import { pages, pageToFolder } from '$pages/indexer';

</script>

<div class='max-w-screen w-screen min-h-screen p-2 gap-2 pt-16 flex justify-center'>

	<div class='flex-1 flex justify-end z-10 bg-base-100'>
		<Timeline />
	</div>
	<div class='w-full flex flex-col bg-base-200 max-w-2xl'>
		<Tabs />
		<div class='bg-base-200 h-1 !rounded-none'>
		</div>
		<div class='flex flex-col flex-1 p-2 max-h-screen overflow-y-scroll no-scrollbar'>
			<slot/>
		</div>
	</div>
	<div class='flex justify-start z-10 bg-base-100'>
		<div class='flex flex-col w-96 h-fit gap-2 min-w-[24rem]ss'>
			{#each [
				{
					name: 'Week 3 - Recursion with',
					type: 'problem',
					due: '2021-10-10',
				},
				{
					name: 'Coding help session Coding help session',
					type: 'announcement',
					due: '2021-10-10',
				},
				{
					name: 'Fibonacci sequence',
					type: 'problem',
					due: '2021-10-10',
				},
				{
					name: 'What is recursion?',
					type: 'reading',
					due: '2021-10-10',
				},
				] as key, i}
	
				<div class='w-full min-h-[4rem] h-fit flex flex-col'>
					<div class='flex justify-start w-full h-fit !rounded-b-none'>
						<div class='flex self-start justify-between w-full h-fit bg-neutral'>
							<div class='flex flex-1 gap-2 self-center bg-neutral text-neutral-content p-2 !rounded-b-none' style={ key.type != 'announcement' ? "border-top-right-radius: 0;": ""} >
								<span class='self-center'>
									{#if key.type === 'problem'}
										<LucideCog />
									{:else if key.type === 'announcement'}
										<LucideMegaphone />
									{:else if key.type === 'reading'}
										<LucideBook />
									{/if}
								</span>
								<span class='self-center'>{key.name}</span>
							</div>
							{#if key.type === 'problem' || key.type === 'reading'}
								<div class='self-start p-2 bg-primary text-primary-content !rounded-b-none !rounded-l-none'>
									<span>due 03:02:11</span>
								</div>
							{/if}
						</div>
					</div>
					<div class='flex flex-1 p-2 bg-base-300 text-base-content !rounded-t-none justify-between'>
						{#if key.type === 'problem'}
							<span class='self-center'>
								Not graded
							</span>
							<button class='btn btn-sm btn-neutral uppercase'>
								Solve
							</button>
						{:else if key.type === 'announcement'}
							<span class='self-center'>
								Important announcement
							</span>
							<button class='btn btn-sm btn-neutral uppercase'>
								View
							</button>
						{:else if key.type === 'reading'}
							<span class='self-center'>
								Not graded
							</span>
							<button class='btn btn-sm btn-neutral uppercase'>
								Read
							</button>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
	
</div>

<style lang='postcss'>
	div, button {
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

</style>