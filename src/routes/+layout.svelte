<script lang="ts">
	import '$/app.css';
	import AuthGuard from '$/lib/components/AuthGuard.svelte';

	import NavigationBar from '$/lib/components/navbar/NavigationBar.svelte';
	import Alerts from '$components/Alerts.svelte';

	import { fade, fly } from 'svelte/transition';

	import { authenticated } from '$firebase';

	import { codeTheme, layoutTheme } from '$stores/theme';
	import { onMount } from 'svelte';

	onMount(() => {

		document.documentElement.setAttribute('data-theme', $layoutTheme);

		if ($codeTheme === 'light') {

			if (document && document.getElementById('theme-switch-moon')) {
				document.getElementById('theme-switch-moon')?.classList.remove('swap-off');
				document.getElementById('theme-switch-moon')?.classList.add('swap-on');

				if (document.getElementById('theme-switch-sun')) {
					document.getElementById('theme-switch-sun')?.classList.remove('swap-on');
					document.getElementById('theme-switch-sun')?.classList.add('swap-off');
				}
			}

			document.body.classList.remove('dark');
			document.documentElement.style.setProperty('color-scheme', 'light');

		} else {

			if (document && document.getElementById('theme-switch-sun')) {
				document.getElementById('theme-switch-sun')?.classList.add('swap-on');
				document.getElementById('theme-switch-sun')?.classList.remove('swap-off');

				if (document.getElementById('theme-switch-moon')) {
					document.getElementById('theme-switch-moon')?.classList.add('swap-off');
					document.getElementById('theme-switch-moon')?.classList.remove('swap-on');
				}
			}

			document.body.classList.add('dark');
			document.documentElement.style.setProperty('color-scheme', 'dark');
		}
	});

</script>

<Alerts />

{#if $authenticated === true || $authenticated === false }
	<div in:fly={
		{
			x: 0,
			y: -100,
			duration: 500
		}
	}>
		<NavigationBar />
	</div>
{/if}

<AuthGuard>
	
	<div slot='noauth'>

		<div class="flex w-screen h-screen bg-base-100 justify-around gap-8">
			<div class="lg:w-1/2 w-fit sm:flex lg:justify-end justify-center flex-1 hidden" in:fly={
				{
					x: -200,
					y: 0,
					duration: 500,
					delay: 100
				}
			}>
				<div class="flex flex-col justify-center w-3/4">
					<div class="!w-full !h-fit b-300 flex flex-col justify-between p-10 self-center">
						<span class="self-center text-2xl font-thin uppercase">Del Norte High School</span>
						<span class="self-center text-4xl font-bold uppercase">AP Computer Science A</span>
					</div>
				</div>
			</div>
		
			<div class='relative lg:w-1/2 w-full flex flex-1 lg:justify-start justify-center h-full'>
				<slot />
			</div>
			
		</div>		

	</div>

	<div slot='auth'> <!-- dashboard -->
		<div class='pt-20 bg-red-500 h-24'>
			Dashboard code goes here
		</div>
	</div>

</AuthGuard>
