<script>
	import { authenticated } from '$firebase';
</script>

{#if $authenticated === undefined}
	<slot name="load">
		<div class="p-2">Loading...</div>
	</slot>
{:else if $authenticated === false}
	<slot name="noauth">
		<div>No slot='noauth' was provided</div>
	</slot>
{:else if $authenticated === true}
	<slot name="auth">
		<div>No slot='auth' was provided</div>
	</slot>
{/if}
