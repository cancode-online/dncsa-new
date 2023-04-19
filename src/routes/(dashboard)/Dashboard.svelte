<script lang='ts'>

	import LucideMegaphone from '~icons/lucide/megaphone';
	import LucideBook from '~icons/lucide/book';
	import LucideCog from '~icons/lucide/cog';
	import Timeline from '$components/Timeline.svelte';

</script>

<div class='w-screen min-h-screen p-2 gap-2 pt-16 flex justify-center'>

	<div class='flex-1 flex justify-end z-10 bg-base-100'>
		<Timeline />
	</div>
	<div class='xl:w-[54rem] lg:w-[44rem] w-[10rem] bg-base-200'>
		<div class="tabs bg-base-300 !rounded-b-none px-2 pt-2">
			<a class="tab tab-lifted tab-active border-none"><span>Learning about fiboancci</span></a> 
			<a class="tab tab-lifted"><span>Tab 2</span></a> 
			<a class="tab tab-lifted"><span>CODE CODE CODDE</span></a>
			<a class="tab tab-lifted"><span>Tab 4</span></a>
			<a class="tab tab-lifted"><span>Tab 5</span></a>
		</div>
		<div class='flex flex-col flex-1 justify-center p-2'>
			<slot/>
		</div>
	</div>
	<div class='flex-1 flex justify-start z-10 bg-base-100'>
		<div class='flex flex-col w-96 h-fit gap-2'>
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

	.tab-active::after, .tab-active::before {
		background-image: radial-gradient(circle at var(--circle-pos), transparent var(--tab-grad), var(--tab-border-color) calc(var(--tab-grad) + 0.3px), var(--tab-border-color) calc(var(--tab-grad) + var(--tab-border, 1px)), hsla(var(--b2) / var(--tw-bg-opacity, 1)) calc(var(--tab-grad) + var(--tab-border, 1px) + 0.3px)) !important;
	}

	.tab-active {
		@apply !bg-base-200;
	}

	.tab > span {
		white-space: nowrap;
		max-width: 8rem;
		overflow: hidden;              /* "overflow" value must be different from  visible"*/ 
		-o-text-overflow: ellipsis;    /* Opera < 11*/
		text-overflow:    ellipsis;    /* IE, Safari (WebKit), Opera >= 11, FF > 6 */
	}

</style>