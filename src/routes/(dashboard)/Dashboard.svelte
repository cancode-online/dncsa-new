<script lang='ts'>
	import LucideFiles from '~icons/lucide/files';
	import LucideFileText from '~icons/lucide/file-text';
	import LucideFolderOpen from '~icons/lucide/folder-open';
	import LucideCalendar from '~icons/lucide/calendar'

	import LucideMegaphone from '~icons/lucide/megaphone';
	import LucideBook from '~icons/lucide/book';
	import LucideCog from '~icons/lucide/cog';

	export let page: String;

</script>

<div class='w-screen min-h-screen p-2 gap-2 pt-16 flex justify-center'>

	<div class='flex-1 flex justify-end z-10 bg-base-100'>
		<div class='w-56'>
			<div class="h-12 uppercase flex justify-start p-2 w-full bg-primary border-x-2 border-t-2 border-base-200 text-primary-content !rounded-b-none">
				<div class='flex self-center w-fit gap-2'>
					<span class='self-center'><LucideCalendar /></span>
					<span class='flex-1 text-left'>Timeline</span>
				</div>
			</div>
			<div class='no-scrollbar bg-base-300 border-2 border-base-200 h-96 w-full p-1 gap-1 flex flex-col flex-nowrap overflow-y-scroll !rounded-t-none'>
				{#each [
					{
						name: 'Schedule',
						type: 'page',
					},
					{
						name: 'Unit 1',
						type: 'unit',
					},
					{
						name: 'Week 0',
						type: 'week',
					},
					{
						name: 'Week 1',
						type: 'week',
					},
					{
						name: 'Week 2',
						type: 'week',
					},
					{
						name: 'Unit 2',
						type: 'unit',
					},
					{
						name: 'Week 3',
						type: 'week',
					},
					{
						name: 'Week 4',
						type: 'week',
					},
					{
						name: 'Hackathon',
						type: 'page',
					},
					{
						name: 'Week 5',
						type: 'week',
					},
					] as key, i}
					<a href='http://localhost:5173/page/pbl-tools'>
						{#if key.type === 'week'}
						
							<button class="btn btn-sm btn-ghost w-full uppercase flex gap-2 p-2">
								<LucideFiles />
								<span class='flex-1 text-left'>{key.name}</span>
							</button>
						{:else if key.type === 'unit'}
							<button class="btn btn-sm btn-neutral w-full uppercase flex gap-2 p-2">
								<LucideFolderOpen />
								<span class='flex-1 text-left'>{key.name}</span>
							</button>
						{:else if key.type === 'page'}
							<button class="btn btn-sm btn-neutral w-full uppercase flex gap-2 p-2">
								<LucideFileText />
								<span class='flex-1 text-left'>{key.name}</span>
							</button>
						{/if}
					</a>
				{/each}
			</div>
		</div>
	</div>
	<div class='w-[54rem] bg-base-200'>
		<div class="tabs bg-base-300 !rounded-b-none">
			<a class="tab">Learning about fiboancci</a> 
			<a class="tab tab-lifted tab-active border-none">Tab 2</a> 
			<a class="tab">Tab 3</a>
			<a class="tab">Tab 3</a>
			<a class="tab">Tab 3</a>
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

</style>