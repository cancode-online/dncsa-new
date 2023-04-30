<div class="bg-base-200 h-fit max-h-screen">
	<div class="bg-base-200 h-12 !rounded-b-none flex justify-between p-2">
		<div class="flex gap-2">
			<input type="text" placeholder="Search..." class="input h-8 w-48" />
			<select class="select max-w-xs h-8 min-h-0 w-48">
				<option disabled selected>Group</option>
				<option>All</option>
				<option>2023 TRI 3 PER 2</option>
				<option>2023 TRI 3 PER 1</option>
				<option>2023 TRI 2 PER 2</option>
				<option>2023 TRI 2 PER 1</option>
			</select>
		</div>
		<div class="flex gap-2 relative justify-center">
			<button class="btn btn-primary btn-sm p-2 px-2 min-h-0 h-8 uppercase self-center">
				View metadata
			</button>
			<button class="btn btn-primary btn-sm p-2 px-2 min-h-0 h-8 uppercase self-center">
				View Table
			</button>
		</div>
	</div>
	<div class="overflow-x-auto !rounded-t-none">
		<table class="table table-compact table-zebra w-full">
			<thead>
				<tr>
					<th class="bg-base-300 !rounded-t-none">#</th>
					<th class="bg-base-300">Status</th>
					<th class="bg-base-300">Name</th>
					<th class="bg-base-300">Date</th>
					<th class="bg-base-300">Grade</th>
					<th class="bg-base-300 !rounded-t-none">Details</th>
				</tr>
			</thead>
			<tbody>
				{#each [0, 0, 0, 0] as user, i}
					<tr>
						<th>{i}</th>
						<td>
							<span class="text-error font-bold"> Missing </span>
						</td>
						<td>Tristan Copley</td>
						<td>9/3/21</td>
						<td>-/3</td>
						<td>
							<button class="btn btn-neutral btn-sm p-0 px-2 min-h-0 h-6 uppercase">Details</button>
						</td>
					</tr>
				{/each}
			</tbody>
			<tfoot>
				<tr>
					<th class="bg-base-300 !rounded-t-none">#</th>
					<th class="bg-base-300">Status</th>
					<th class="bg-base-300">Name</th>
					<th class="bg-base-300">Date</th>
					<th class="bg-base-300">Grade</th>
					<th class="bg-base-300 !rounded-t-none">Details</th>
				</tr>
			</tfoot>
		</table>
	</div>
</div>
