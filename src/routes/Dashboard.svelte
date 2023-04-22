<script>

    import Assignments from '$/lib/components/Assignments.svelte';
    import Timeline from '$/lib/components/Timeline.svelte';

    import { fade, fly } from 'svelte/transition';

</script>

<div class='flex justify-center gap-2'>
    <div class='flex flex-1 bg-green-500 justify-end pt-20'>
        <Timeline/>
    </div>
    <div class='w-full max-w-2xl h-screen pt-20 bg-red-500' in:fly={{
        x: 0,
        y: -100,
        duration: 500,
        delay: 100
    }} out:fade={{
        duration: 200
    }}>
        <slot/>
    </div>
    <div class='flex flex-1 bg-green-500 justify-start pt-20'>
        <Assignments/>
    </div>
</div>

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