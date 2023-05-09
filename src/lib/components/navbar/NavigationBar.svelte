<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import ThemeDropdown from './ThemeDropdown.svelte';
	import { authenticated, logOut } from '$firebase';
	import { goto } from '$app/navigation';
</script>

<!-- App Bar -->
<AppBar>
	<svelte:fragment slot="lead">
		<a href="/"><strong class="text-xl uppercase">AP Computer Science A</strong></a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<ThemeDropdown />
		{#if $authenticated}
			<div class="flex">
				<button
					on:click={() => {
						goto('/');
						logOut();
					}}
					class="btn btn-ghost uppercase">Logout</button
				>
			</div>
		{/if}
	</svelte:fragment>
</AppBar>
