<script lang="ts">
	import Landing from './(landing)/Landing.svelte';
	import { fade } from 'svelte/transition';

	import Dashboard from './(dashboard)/Dashboard.svelte';

	import { authenticated } from '$firebase';

</script>

<div class='relative w-full h-full'>

	{#if $authenticated}
		<div class='absolute w-full h-full' in:fade out:fade>
			<Dashboard />
		</div>
	{/if}

	{#if !$authenticated}
		<div class='absolute w-full h-full' in:fade out:fade>
			<Landing />
		</div>
	{/if}

</div>