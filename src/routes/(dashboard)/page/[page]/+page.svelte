<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';

	import prismLight from '$lib/prism/prism-light.txt?raw';
	import prismDark from '$lib/prism/prism-dark.txt?raw';

	import { codeTheme } from '$stores/theme';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import SEO from '$components/SEO.svelte';
	import Dashboard from '../../Dashboard.svelte';

	let unsubscribe: () => void;

	onMount(async () => {
		const prismCSS = document.createElement('style');
		prismCSS.id = 'prism-css';
		prismCSS.textContent = prismDark;
		document.head.appendChild(prismCSS);

		unsubscribe = codeTheme.subscribe((value) => {
			const prismCSS = document.getElementById('prism-css');
			if (prismCSS) prismCSS.textContent = value === 'light' ? prismLight : prismDark;
		});
	});

	onDestroy(() => {
		if (browser) {
			const prismCSS = document.getElementById('prism-css');
			if (prismCSS) prismCSS.remove();
		}

		if (typeof unsubscribe === 'function') unsubscribe();
	});

	export let data: {
		title: string;
		date: string;
		summary: string;
		content: any;
	};
</script>

<Dashboard>

<SEO title={data.title} description={data.summary} />

<article
	class="prose dark:prose-invert m-0 p-2 self-center min-w-0 max-w-none xl:w-[34rem] lg:w-[28rem] md:w-[24rem] sm:w-[16rem] w-[14rem]"
	in:fly="{{ y: 500, duration: 450, delay: 0}}" out:fly="{{ y: 500, duration: 450, delay: 0, easing: quadInOut }}"
>
	<h1 class="m-0">{data.title}</h1>
	<h4 class="m-0">Published: {data.date}</h4>
	<div class='m-0'>
		<svelte:component this={data.content} />
	</div>
</article>

<style lang="postcss">
	:global(h1 > a):before {
		position: relative;
		content: '#';
		right: 0.5rem;
		@apply text-secondary dark:text-primary font-bold;
	}

	:global(h1 > a) {
		position: relative;
		right: 1rem;
		text-decoration: none !important;
	}

	:global(h2 > a):before {
		position: relative;
		content: '#';
		right: 0.5rem;
		@apply text-secondary dark:text-primary font-bold;
	}

	:global(h2 > a) {
		position: relative;
		right: 1rem;
		text-decoration: none !important;
	}

	:global(h3 > a):before {
		position: relative;
		content: '#';
		right: 0.5rem;
		@apply text-secondary dark:text-primary font-bold;
	}

	:global(h3 > a) {
		position: relative;
		right: 1rem;
		text-decoration: none !important;
	}
</style>

</Dashboard>
