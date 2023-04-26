<script lang="ts">
	import Login from './login/Login.svelte';

	import { fade, fly } from 'svelte/transition';

	import { authenticated } from '$firebase';
</script>

{#if $authenticated === false}
	<Login />
{:else if $authenticated === true}
	<div
		class="w-full p-2"
		in:fly={{
			y: 50,
			duration: 400,
			delay: 100
		}}
		out:fade={{
			duration: 100
		}}
	>
		<a href="/page/unit-5">Default landing page</a>
	</div>
{/if}
