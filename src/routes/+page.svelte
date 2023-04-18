<script lang="ts">
	import Landing from './(auth)/Landing.svelte';
	import { fade, fly } from 'svelte/transition';

	import AdminDashboard from './(dashboards)/AdminDashboard.svelte';
	import StudentDashboard from './(dashboards)/StudentDashboard.svelte';

	import { authenticated, admin } from '$firebase';

</script>

<div class='relative'>

	{#if $authenticated && $admin}
		<div class='absolute' in:fade out:fade>
			<AdminDashboard />
		</div>
	{/if}

	{#if $authenticated && !$admin}
		<div class='absolute' in:fade out:fade>
			<StudentDashboard />
		</div>
	{/if}

	{#if !$authenticated}
		<div class='absolute' in:fade out:fade>
			<Landing />
		</div>
	{/if}

</div>