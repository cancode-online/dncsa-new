<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	import AuthGuard from '$lib/components/AuthGuard.svelte';
	import Login from '$routes/(auth)/login/Login.svelte';
	import Assignments from '$/lib/components/Assignments.svelte';

	export let data: any;
</script>

<AuthGuard>
	<div slot="noauth" class="w-screen h-screen flex justify-center">
		<Login redirect={''} />
	</div>

	<svelte:fragment slot='auth'>
		{#key data}
			<div class="flex flex-col h-full w-full gap-4">

				<div class="w-full bg-base-200 h-fit !rounded-t-none">
					<article
						class="prose dark:prose-invert m-0 p-4 self-center min-w-0 max-w-none h-full w-full"
						in:fly={{
							y: 50,
							duration: 400,
							delay: 100
						}}
						out:fade={{
							duration: 100
						}}
					>
						<div class="m-0 mb-1 flex justify-between">
							<div class='flex gap-2'>
								<h4 class="m-0 h-fit self-center">{data.title}</h4>
								<p class="m-0 h-fit self-center">- {new Date(data.date).toLocaleDateString('en-us')}</p>
							</div>
							<div class='badge badge-primary self-center m-0 p-1 h-fit'>
								{#if data.type === 'assignment'}
									Assignment
								{:else if data.type === 'reading'}
									Reading
								{:else if data.type === 'announcement'}
									Announcement
								{:else}
									Info
								{/if}
							</div>
						</div>
						<p class='italic m-0 mb-2 text-sm'>
							"{data.summary}"
						</p>
						<hr class="mt-0" />
						<div class="m-0">
							<svelte:component this={data.content} />
						</div>
					</article>
				</div>

				{#if data.type === 'assignment'}
					<div class='bg-base-200 h-fit max-h-screen'>
						<div class='bg-base-200 h-12 !rounded-b-none flex justify-between p-2'>
							<div class='flex gap-2'>
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
							<div class='flex gap-2 relative justify-center'>
								<button class='btn btn-primary btn-sm p-2 px-2 min-h-0 h-8 uppercase self-center'>
									View metadata
								</button>
								<button class='btn btn-primary btn-sm p-2 px-2 min-h-0 h-8 uppercase self-center'>
									View Table 
								</button>
							</div>
						</div>
						<div class="overflow-x-auto !rounded-t-none">
							<table class="table table-compact table-zebra w-full">
							  <thead>
								<tr>
								  <th class='bg-base-300 !rounded-t-none'>#</th> 
								  <th class='bg-base-300'>Status</th> 
								  <th class='bg-base-300'>Name</th> 
								  <th class='bg-base-300'>Date</th> 
								  <th class='bg-base-300'>Submissions</th> 
								  <th class='bg-base-300 !rounded-t-none'>Details</th> 
								</tr>
							  </thead> 
							  <tbody>
								{#each [0,0,0,0] as user, i}
									<tr>
										<th>{i}</th> 
										<td>
											<span class='text-error font-bold'>
												Missing
											</span>
										</td> 
										<td>Tristan Copley</td> 
										<td>9/3/21</td> 
										<td>0/3</td> 
										<td>
											<button class='btn btn-neutral btn-sm p-0 px-2 min-h-0 h-6 uppercase'>Details</button>
										</td>
									</tr>
								{/each}
							  </tbody> 
							  <tfoot>
								<tr>
									<th class='bg-base-300 !rounded-t-none'>#</th> 
									<th class='bg-base-300'>Status</th> 
									<th class='bg-base-300'>Name</th> 
									<th class='bg-base-300'>Date</th> 
									<th class='bg-base-300'>Submissions</th> 
									<th class='bg-base-300 !rounded-t-none'>Details</th> 
								  </tr>
							  </tfoot>
							</table>
						  </div>
					</div>
				{/if}

			</div>
		{/key}
	</svelte:fragment>
</AuthGuard>

<style lang="postcss">
	div {
		border-radius: var(--rounded-btn, 0.5rem);
	}
</style>