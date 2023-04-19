<script lang='ts'>

    import { Sun, Moon } from 'lucide-svelte';
	import { codeTheme } from '$stores/codeTheme';
	import { onMount } from 'svelte';

	import MaterialSymbolsMenuRounded from '~icons/material-symbols/menu-rounded';
	import IcRoundHome from '~icons/ic/round-home';

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
<button
class="swap swap-rotate swap-active btn btn-secondary dark:btn-primary p-2 rounded-full text-slate-200 dark:text-slate-"
on:click={switchTheme}
>
<div class="theme-switch-sun swap-on text-slate-200">
    <Moon size={'30'} strokeWidth={'2px'} />
</div>
<div class="theme-switch-moon swap-off text-slate-200">
    <Sun size={'30'} strokeWidth={'2px'} />
</div>
</button>