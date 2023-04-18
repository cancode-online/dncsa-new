<script lang="ts">

	import ThemeDropdown from './ThemeDropdown.svelte';
	import { authenticated, logOut } from '$firebase';
	
</script>

<div class="navbar bg-base-100 absolute gap-2">
	<div class="flex-1 z-10">
		<a href="/" class="btn btn-ghost uppercase">AP Computer Science A</a>
	</div>
	<div class="flex z-10">
		<ThemeDropdown />
	</div>
	{#if $authenticated}
		<div class="flex z-10">
			<button on:click={logOut} class="btn btn-ghost uppercase">Logout</button>
		</div>
	{/if}
</div>
