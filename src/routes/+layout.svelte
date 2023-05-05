<script lang="ts">
	import '../app.css';
	import NavigationBar from '$components/navbar/NavigationBar.svelte';
  	import Loading from '$components/Loading.svelte';
	import { authenticated } from '$firebase';

	import { fly, fade } from 'svelte/transition';
  	import Dashboard from './Dashboard.svelte';
	import Login from '$/old_routes/(auth)/login/Login.svelte';

	let _authenticated = false;
	let _loading = true;

	authenticated.subscribe((state) => {
		_authenticated = state || false;
	});

	setTimeout(() => {
		_loading = false;
	}, 500); // ms

	// Could possibly use $authentication but I'm not sure if that is optimal or not
</script>

<div class="transition-container w-full h-full">
	{#if _loading}
		<Loading />
	{:else}

		<div
			in:fly={{
				x: 0,
				y: -100,
				duration: 1000,
				delay: 100
			}}
		>
			<NavigationBar />
		</div>

		{#if _authenticated}
			<Dashboard>
				<slot />
			</Dashboard>
		{:else}
			<div
				class="bg-blue-500 w-full h-screen flex justify-center"
			>
				<Login/>
			</div>
		{/if}
	{/if}
</div>
