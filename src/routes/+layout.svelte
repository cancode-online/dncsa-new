<script lang="ts">
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.css';

	import { AppShell } from '@skeletonlabs/skeleton';
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

	// Dependency: Floating UI
	import { storePopup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	// Could possibly use $authentication but I'm not sure if that is optimal or not
</script>

<!-- App Shell -->
<AppShell>
	<!-- Page Route Content -->
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

			<!-- {#if _authenticated}
				<Dashboard>
					<slot />
				</Dashboard>
			{:else}
				<div class="bg-blue-500 w-full h-screen flex justify-center">
					<Login />
				</div>
			{/if} -->
		{/if}
	</div>
</AppShell>
