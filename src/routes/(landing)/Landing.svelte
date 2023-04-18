<script lang="ts">
	import Login from './Login.svelte';
	import Signup from './Signup.svelte';

	import { fade, fly } from 'svelte/transition';

	let state = 'login';
</script>

<div class="flex w-screen h-screen bg-base-100 justify-center gap-8">
	<div class="w-1/2 flex justify-end">
		<div class="w-96 h-72 bg-base-200 self-center">
			{state}
		</div>
	</div>

	<div class="w-1/2 flex justify-start relative">
		{#if state === 'login'}
			<div class="absolute self-center" in:fly out:fade>
				<Login bind:state />
			</div>
		{:else}
			<div class="absolute self-center" in:fly out:fade>
				<Signup bind:state />
			</div>
		{/if}
	</div>
</div>
