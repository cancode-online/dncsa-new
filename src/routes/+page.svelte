<script lang="ts">
	import { fade, fly } from 'svelte/transition';
</script>

<div class="w-full p-2 bg-base-200 max-w-2xl">
	<div in:fly={{ y: 50, duration: 400, delay: 100 }} out:fade={{ duration: 100 }}>
		Default landing page
	</div>
</div>
