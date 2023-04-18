<!-- <div class="w-screen h-screen pt-20">
	<div class="flex flex-row w-screen h-screen justify-between gap-10 p-10">
		<div class="h-96 bg-lime-300 w-fit">Schedule</div>
		<div class="flex flex-col bg-lime-300 h-full xl:w-[65rem]">
			Content Section

			<div class="flex flex-row bg-blue-500 justify-center p-4 mx-10">
				<div class="btn-group rounded-none">
					<div class="btn rounded-none normal-case">Left</div>

					<div class="btn rounded-none text-lg text-opacity-50">[Current Week]</div>

					<div class="btn rounded-none normal-case">Right</div>
				</div>
			</div>

			<div class="flex flex-col bg-blue-600 justify-center p-4 mx-10">Article Display Area</div>

			<div class="divider" />

			<div class="flex flex-col bg-blue-600 p-4 mx-10 gap-4">
				<span>Student Submissions</span>

				<table class="w-full table table-compact table-bordered table-zebra">
					<thead>
						<tr>
							<th>Status</th>
							<th>Name</th>
							<th>Date</th>
							<th>Score</th>
							<th>Details</th>
						</tr>
					</thead>
					<tbody>
						{#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as i}
							<tr>
								<td>
									<div class="flex flex-row justify-start pl-5">
										<div class="badge badge-sm bg-red-500 self-center" />
									</div>
								</td>
								<td>Student {i}</td>
								<td>{new Date().toLocaleDateString()}</td>
								<td>3.5/4</td>
								<td>
									<div class="btn btn-sm btn-square w-fit p-2">Details</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
		<div class="bg-lime-300 h-64 w-fit">Assignment Due</div>
	</div>
</div> -->

<script>
	import LucideFiles from '~icons/lucide/files';
	import LucideFileText from '~icons/lucide/file-text';
	import LucideFolderOpen from '~icons/lucide/folder-open';
</script>

<div class='w-screen h-screen p-2 gap-2 pt-16 flex'>

	<div class='w-56'>
		<button class="h-12 uppercase flex justify-start p-2 w-full bg-primary border-x-2 border-t-2 border-base-200 text-primary-content !rounded-b-none">
			<div class='flex self-center w-fit gap-2'>
				<span class='self-center'><LucideFileText /></span>
				<span class='flex-1 text-left'>Timeline</span>
			</div>
		</button>
		<div class='bg-base-300 border-2 border-base-200 h-64 w-full p-1 gap-1 flex flex-col flex-nowrap overflow-y-scroll !rounded-t-none'>
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
			{/each}
		</div>
	</div>
	
	<div class='flex-1'>

	</div>
	<div class='w-96 h-fit'>
		{#each [
			{
				name: 'Binary search',
				type: 'problem',
				due: '2021-10-10',
			},
			{
				name: 'Coding help session',
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

			{#if key.type === 'problem'}
				<button class="btn btn-sm btn-ghost w-full uppercase flex gap-2 p-2">
					<LucideFiles />
					<span class='flex-1 text-left'>{key.name}</span>
				</button>
			{:else if key.type === 'announcement'}
				<button class="btn btn-sm btn-neutral w-full uppercase flex gap-2 p-2">
					<LucideFolderOpen />
					<span class='flex-1 text-left'>{key.name}</span>
				</button>
			{:else if key.type === 'reading'}
				<button class="btn btn-sm btn-neutral w-full uppercase flex gap-2 p-2">
					<LucideFileText />
					<span class='flex-1 text-left'>{key.name}</span>
				</button>
			{/if}
		{/each}
	</div>
</div>

<style>
	div, button {
		border-radius: var(--rounded-btn, 0.5rem);
	}
</style>