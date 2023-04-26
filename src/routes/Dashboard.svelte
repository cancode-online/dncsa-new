<script>
	import Assignments from '$/lib/components/Assignments.svelte';
	import Timeline from '$/lib/components/Timeline.svelte';
	import Tabs from '$/lib/components/Tabs.svelte';

	import { fade, fly } from 'svelte/transition';
	import { authenticated } from '$/firebase';

</script>

<div
	class="flex justify-center gap-4"
	in:fade={{
		duration: 400,
		delay: 100
	}}
	out:fade={{
		duration: 100
	}}
>
	<div
		class="flex flex-1 justify-end pt-20"
		in:fly={{
			x: -100,
			duration: 400
		}}
		out:fade={{
			duration: 100
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
		<div class="flex flex-col w-full h-fit py-20 justify-start">
			<div class="w-full">
				<Tabs />
			</div>
			<slot />
		</div>
	</div>
	<div class="flex flex-1 justify-start pt-20">
		<Assignments />
	</div>
</div>

<style lang="postcss">
	div {
		border-radius: var(--rounded-btn, 0.5rem);
	}
</style>
