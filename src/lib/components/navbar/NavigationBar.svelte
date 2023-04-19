<script lang="ts">

	import ThemeDropdown from './ThemeDropdown.svelte';
	import { authenticated, logOut } from '$firebase';
	import { goto } from '$app/navigation';

	import LucideSun from '~icons/lucide/sun';
	import LucideMoon from '~icons/lucide/moon';
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

	function switchTheme() {
		codeTheme.update((data) => {
			if (data === 'dark') {
				if (document.getElementById('theme-switch-moon')) {
					document.getElementById('theme-switch-moon')?.classList.remove('swap-off');
					document.getElementById('theme-switch-moon')?.classList.add('swap-on');

					if (document.getElementById('theme-switch-sun')) {
						document.getElementById('theme-switch-sun')?.classList.remove('swap-on');
						document.getElementById('theme-switch-sun')?.classList.add('swap-off');
					}
				}

				document.body.classList.remove('dark');
				document.documentElement.style.setProperty('color-scheme', 'light');

				return 'light';
			} else {
				if (document.getElementById('theme-switch-sun')) {
					document.getElementById('theme-switch-sun')?.classList.add('swap-on');
					document.getElementById('theme-switch-sun')?.classList.remove('swap-off');

					if (document.getElementById('theme-switch-moon')) {
						document.getElementById('theme-switch-moon')?.classList.add('swap-off');
						document.getElementById('theme-switch-moon')?.classList.remove('swap-on');
					}
				}

				document.body.classList.add('dark');
				document.documentElement.style.setProperty('color-scheme', 'dark');

				return 'dark';
			}
		});
	}
	
</script>

<div class="navbar bg-base-100 absolute gap-2 z-20">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost uppercase">AP Computer Science A</a>
	</div>
	<button
		class="swap swap-rotate swap-active btn btn-ghost p-2 h-full flex relative gap-2"
		on:click={switchTheme}
		>
		<div id="theme-switch-sun" class="swap-on text-lg self-center">
			<LucideMoon size={'30'} strokeWidth={'2px'} />
		</div>
		<div id="theme-switch-moon" class="swap-off absolute text-lg left-0 pl-2 self-center">
			<LucideSun size={'30'} strokeWidth={'2px'} />
		</div>
		<button class='inline uppercase'>
			CODE
		</button>
		<svg
            width="12px"
            height="12px"
            class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block self-center"
            xmlns="http://www.w3.org/2000/svg"
            viewbox="0 0 2048 2048"
            ><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" /></svg
        >
	</button>
	<div class="flex">
		<ThemeDropdown />
	</div>
	{#if $authenticated}
		<div class="flex">
			<button on:click={()=>{
				goto('/')
				logOut()
			}} class="btn btn-ghost uppercase">Logout</button>
		</div>
	{/if}
</div>
