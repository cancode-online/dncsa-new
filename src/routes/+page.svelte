<script lang="ts">
	import { fade, fly } from 'svelte/transition';
</script>

<div class="w-full p-2 bg-base-200 max-w-2xl">
	<div class='flex flex-col gap-2' in:fly={{ y: 50, duration: 400, delay: 100 }} out:fade={{ duration: 100 }}>
		<div class='bg-red-500 w-full h-96'>

		</div>
		<div class='bg-orange-500 w-full min-h-[28rem]'>
			
		</div>
		<div class='bg-blue-500 w-full h-20'>
			
		</div>
	</div>
</div>
