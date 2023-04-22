<script lang="ts">
	import Login from './(auth)/login/Login.svelte';

	import { authenticated } from '$firebase';
</script>

{#if $authenticated === false}
	<Login />

{:else if $authenticated === true}

	<div>

		Default landing page

	</div>

{/if}