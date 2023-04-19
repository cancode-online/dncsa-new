<script lang="ts">

	import ThemeDropdown from './ThemeDropdown.svelte';
	import { authenticated, logOut } from '$firebase';
	import { goto } from '$app/navigation';

	import LucideSun from '~icons/lucide/sun';
	import LucideMoon from '~icons/lucide/moon';
	import { codeTheme } from '$stores/codeTheme';
	import { onMount } from 'svelte';

	onMount(() => {
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

<div class="navbar bg-base-100 absolute gap-2">
	<div class="flex-1 z-10">
		<a href="/" class="btn btn-ghost uppercase">AP Computer Science A</a>
	</div>
	<button
		class="swap swap-rotate swap-active btn btn-sm btn-ghost p-2 h-full flex relative gap-2"
		on:click={switchTheme}
		>
		<div id="theme-switch-sun" class="swap-on">
			<LucideMoon size={'30'} strokeWidth={'2px'} />
		</div>
		<div id="theme-switch-moon" class="swap-off absolute left-0 pl-2">
			<LucideSun size={'30'} strokeWidth={'2px'} />
		</div>
		<span>
			Code
		</span>
	</button>
	<div class="flex z-10">
		<ThemeDropdown />
	</div>
	{#if $authenticated}
		<div class="flex z-10">
			<button on:click={()=>{
				goto('/')
				logOut()
			}} class="btn btn-ghost uppercase">Logout</button>
		</div>
	{/if}
</div>
