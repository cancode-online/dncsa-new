<script lang="ts">
	import { admin } from '$firebase';
	import { page } from '$app/stores';

	let currentUserPage = $page.params.user;
	$: currentUserPage = $page.params.user;
</script>

{#if $admin}
	<div class="bg-red-500 w-full h-64">
		User submission tabs
		{#key currentUserPage}
			<slot />
		{/key}
	</div>
{:else}
	<div class="bg-blue-500 w-64 h-64">Quiz or FRQ</div>
{/if}
