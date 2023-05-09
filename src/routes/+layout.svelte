<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';

	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';

	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

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
				<Signup />
			</div>
		{/if}
	{/if}
</div>