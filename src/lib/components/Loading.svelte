<script>
	import { fade, fly } from 'svelte/transition';
	import { backInOut } from 'svelte/easing';
</script>

<div
	class="w-screen h-screen bg-base-100 flex flex-col justify-center z-10"
	out:fade={{
		duration: 1500,
		delay: 0,
		easing: backInOut
	}}
>
	<div
		class="self-center text-lg fira"
		out:fly={{
			y: '-500',
			duration: 1000,
			delay: 250,
			easing: backInOut
		}}
	>
		finishing up the last few lines of code...
	</div>
</div>
