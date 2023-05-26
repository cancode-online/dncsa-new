<script>
	import { fade, fly } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';

	import Timeline from '$/lib/components/Timeline.svelte';
	import Notifications from '$/lib/components/Notifications.svelte';
	import Tabs from '$/lib/components/Tabs.svelte';

	let pageMaxWidth = 0;
</script>

<div class="flex justify-center gap-4 p-4">
	<div
		class="flex flex-1 justify-end pt-16"
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
