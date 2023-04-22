<script>

    import { fade, fly } from 'svelte/transition';

</script>

<div class='flex justify-center'>
    <div class='flex-1'>

    </div>
    <div class='max-w-2xl h-screen pt-20 bg-red-500 transition-container w-full' in:fly={{
        x: 0,
        y: -100,
        duration: 500,
        delay: 100
    }} out:fade={{
        duration: 200
    }}>
        <slot/>
    </div>
    <div class='flex-1'>

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