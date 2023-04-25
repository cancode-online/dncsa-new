<script lang="ts">
	import '$/app.css';

	import AuthGuard from '$/lib/components/AuthGuard.svelte';
	import prismLight from '$lib/prism/prism-light.txt?raw';
	import prismDark from '$lib/prism/prism-dark.txt?raw';

	import NavigationBar from '$/lib/components/navbar/NavigationBar.svelte';
	import Alerts from '$components/Alerts.svelte';
	import Dashboard from './Dashboard.svelte';

	import { fly } from 'svelte/transition';

	import { authenticated } from '$firebase';

	import { codeTheme, layoutTheme } from '$stores/theme';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

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

	let unsubscribe: () => void;

	onMount(async () => {
		const prismCSS = document.createElement('style');
		prismCSS.id = 'prism-css';
		prismCSS.textContent = prismDark;
		document.head.appendChild(prismCSS);

		unsubscribe = codeTheme.subscribe((value) => {
			const prismCSS = document.getElementById('prism-css');
			if (prismCSS) prismCSS.textContent = value === 'dark' ? prismLight : prismDark;
		});
	});

	onDestroy(() => {
		if (browser) {
			const prismCSS = document.getElementById('prism-css');
			if (prismCSS) prismCSS.remove();
		}

		if (typeof unsubscribe === 'function') unsubscribe();
	});

</script>

<Alerts />

{#if $authenticated === true || $authenticated === false}
	<div
		in:fly={{
			x: 0,
			y: -100,
			duration: 1000,
			delay: 100,
		}}
		class='z-10'
	>
		<NavigationBar />
	</div>
{/if}

<AuthGuard>
	<div slot="noauth">
		<slot />
	</div>

	<div slot="auth">
		<Dashboard>
			<slot />
		</Dashboard>
	</div>
</AuthGuard>

<style lang="postcss">
    .transition-container {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}

	.transition-container > * {
		grid-row: 1;
		grid-column: 1;
   }
</style>