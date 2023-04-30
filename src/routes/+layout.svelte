<script lang="ts">
	import '../app.css';
	import NavigationBar from '$components/navbar/NavigationBar.svelte';
	import { authenticated } from '$firebase';

	import { fly, fade } from 'svelte/transition';
	import Login from '$/old_routes/(auth)/login/Login.svelte';

	let _authenticated = false;
	let _loading = true;

	authenticated.subscribe((state) => {
		_authenticated = state || false;
	});

	setTimeout(() => {
		_loading = false;
	}, 3000); // ms

	// Could possibly use $authentication but I'm not sure if that is optimal or not
</script>

<div class="transition-container w-full h-full">
	{#if _loading}
		<div>Loading...</div>
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
			<!-- Should be absolutely positioned top-0 -->
		</div>

		{#if _authenticated}
			<div
				class="bg-red-500 w-96 h-96"
				in:fly={{
					x: 0,
					y: -100,
					duration: 1000,
					delay: 100
				}}
				out:fly={{
					x: 0,
					y: -100,
					duration: 1000,
					delay: 100
				}}
			>
				Authenticated
			</div>

			<!-- <Dashboard>
            <slot />
        </Dashboard> -->
		{:else}
			<div
				class="bg-blue-500 w-full h-full flex justify-center"
			>
				<Login />
			</div>
		{/if}
	{/if}
</div>
