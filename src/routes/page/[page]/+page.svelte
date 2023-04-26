<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	import AuthGuard from '$lib/components/AuthGuard.svelte';
	import Login from '$routes/(auth)/login/Login.svelte';

	export let data: any;
</script>

<AuthGuard>
	<div slot="noauth" class="w-screen h-screen flex justify-center">
		<Login redirect={''} />
	</div>

	<svelte:fragment slot='auth'>
		{#key data}
			<div class="flex flex-col h-full w-full !rounded-t-none gap-4">

				<div class="w-full bg-base-200 h-fit">
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
						<div class="m-0">
							<h4 class="m-0 inline">{data.title}</h4>
							<p class="m-0 inline">- {new Date(data.date).toLocaleDateString('en-us')}</p>
						</div>
						<hr class="mt-0" />
						<div class="m-0">
							<svelte:component this={data.content} />
						</div>
					</article>
				</div>

				{#if data.type === 'assignment'}
					<div class='bg-red-500 h-screen'>
						
					</div>
				{/if}

			</div>
		{/key}
	</svelte:fragment>
</AuthGuard>
