<script lang="ts">
	import { admin } from '$firebase';
</script>

{#if $admin}
	<div class="bg-red-500 w-64 h-64">Metadata</div>
{:else}
	<div class="bg-blue-500 w-64 h-64">Quiz or FRQ</div>
{/if}
