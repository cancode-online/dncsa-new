<script>
	import { authenticated } from '$firebase';
</script>

{#if $authenticated === undefined}
	<slot name="load">
		<div class="p-2">Loading...</div>
	</slot>
{:else if $authenticated === false}
	<slot name="noauth">
		<div>Not authenticated</div>
	</slot>
{:else if $authenticated === true}
	<slot name="auth">
		<div>Page</div>
	</slot>
{/if}
