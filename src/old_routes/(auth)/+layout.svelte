<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	import AuthGuard from '$components/AuthGuard.svelte';

	// $: if ($authenticated === true) {
	//     window.location.href = '/page/unit-5';
	// }
</script>

<AuthGuard>
	<div
		slot="noauth"
		class="absolute left-0 top-0 flex w-screen h-screen bg-base-100 justify-around gap-8"
	>
		<div
			class="w-1/2 flex justify-end flex-1 h-full"
			in:fly={{
				x: -200,
				y: 0,
				duration: 400,
				delay: 200
			}}
			out:fade={{
				duration: 200
			}}
		>
			<div class="flex flex-col justify-center w-3/4">
				<div class="!w-full !h-fit b-300 flex flex-col justify-between p-10 self-center">
					<span class="self-center text-2xl font-thin uppercase">Del Norte High School</span>
					<span class="self-center text-4xl font-bold uppercase">AP Computer Science A</span>
				</div>
			</div>
		</div>
		<div class="w-1/2 flex flex-1 justify-start h-full">
			<slot />
		</div>
	</div>

	<div slot="auth" class="flex w-screen h-screen">
		<slot />
	</div>
</AuthGuard>
