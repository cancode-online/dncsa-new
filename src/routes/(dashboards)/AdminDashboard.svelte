<div class="w-screen h-screen pt-20">
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
</div>
