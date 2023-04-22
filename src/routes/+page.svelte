<script lang="ts">
	import Login from './(auth)/login/Login.svelte';

	import { fade, fly } from 'svelte/transition';

	import { authenticated } from '$firebase';
</script>

{#if $authenticated === false}
	<Login />

{:else if $authenticated === true}

	<div in:fade={{
		duration: 200
	}} out:fade={{
		duration: 200
	}}>

		<a href='/page/ts'>Default landing page</a>

	</div>

{/if}