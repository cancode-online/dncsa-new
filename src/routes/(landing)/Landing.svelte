<script lang="ts">
	import Login from './Login.svelte';
	import Signup from './Signup.svelte';

	import { fade, fly } from 'svelte/transition';

	let state = 'login';

</script>

<div class="flex w-screen h-screen bg-base-100 justify-center gap-8">
	<div class="w-1/2 flex justify-end" in:fly="{{ x: -250, duration: 500, delay: 0}}" out:fade="{{duration: 250}}">
		<div class="flex flex-col justify-center w-3/4">
			<div class="!w-full !h-fit b-300 flex flex-col justify-between py-10 self-center">
					<span class="self-center text-2xl font-thin px-10 uppercase">Del Norte High School</span>
					<span class="self-center text-4xl font-bold px-10 uppercase">AP Computer Science A</span>
			</div>
		</div>
	</div>

	<div class="w-1/2 flex justify-start relative">
		{#if state === 'login'}
			<div class="absolute self-center" in:fly="{{ y: -250, duration: 450, delay: 100}}" out:fade="{{duration: 450}}">
				<Login bind:state />
			</div>
		{:else}
			<div class="absolute self-center" in:fly="{{ y: 250, duration: 450, delay: 100}}" out:fade="{{duration: 450}}">
				<Signup bind:state />
			</div>
		{/if}
	</div>
</div>
