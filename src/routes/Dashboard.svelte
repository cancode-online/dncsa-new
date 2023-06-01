<script>
	import { fade, fly } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';

	import Timeline from '$/lib/components/Timeline.svelte';
	import Notifications from '$/lib/components/Notifications.svelte';
	import Tabs from '$/lib/components/Tabs.svelte';
	import { admin } from '$/firebase';

	let pageMaxWidth = 0;
</script>

<div class="flex justify-center gap-4 p-4">
	<div class='flex flex-col flex-1 pt-16 gap-4 justify-start'>
		<div
			class="flex justify-end"
			in:fly={{
				y: 100,
				duration: 800,
				delay: 200,
				easing: backOut
			}}
			out:fly={{
				y: 100,
				duration: 600,
				delay: 0,
				easing: backIn
			}}
		>
			<Timeline />
		</div>
		{#if $admin}
		<a href='/users' class='self-end' in:fly={{
			x: -100,
			duration: 800,
			delay: 200,
			easing: backOut
		}}
		out:fly={{
			x: -100,
			duration: 600,
			delay: 0,
			easing: backIn
		}}>
			<button class='btn btn-primary h-fit p-2 w-56 self-end right-0 flex justify-center'>
				<span class='self-center'>
					View all grades
				</span>
			</button>
		</a>
		<a href='/users' class='self-end' in:fly={{
			x: -100,
			duration: 800,
			delay: 200,
			easing: backOut
		}}
		out:fly={{
			x: -100,
			duration: 600,
			delay: 0,
			easing: backIn
		}}>
			<button class='btn btn-primary h-fit p-2 w-56 self-end right-0 flex justify-center'>
				<span class='self-center'>
					Edit groups
				</span>
			</button>
		</a>
		{/if}
	</div>

	<div
		class="flex flex-col w-full max-w-2xl"
		in:fly={{
			x: 0,
			y: 100,
			duration: 400
		}}
		out:fade={{
			duration: 100
		}}
	>
		<div class="flex flex-col w-full h-fit py-16 justify-start">
			<div class="w-full p-1 bg-base-200 !rounded-b-none">
				<Tabs />
			</div>
			<div class="!rounded-t-none flex flex-col" bind:clientWidth={pageMaxWidth}>
				<slot maxWidth={pageMaxWidth} />
			</div>
		</div>
	</div>

	<div
		class="flex flex-1 justify-start pt-16"
		in:fly={{
			y: 100,
			duration: 800,
			delay: 200,
			easing: backOut
		}}
		out:fly={{
			y: 100,
			duration: 600,
			delay: 0,
			easing: backIn
		}}
	>
		<Notifications />
	</div>
</div>

<style lang="postcss">
	div {
		border-radius: var(--rounded-btn, 0.5rem);
	}
</style>
