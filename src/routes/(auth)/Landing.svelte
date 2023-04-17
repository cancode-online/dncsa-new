<script lang='ts'>
import Login from "./Login.svelte";
import Signup from "./Signup.svelte";

	let state = 'login';

</script>

<div class='flex w-screen h-screen bg-primary justify-center gap-8'>

	<div class='w-96 h-72 bg-secondary self-center'>
		{ state }
	</div>

	<div class='w-96 h-72 bg-secondary self-center'>
		{#if state==='login'}
			<Login bind:state={state} />
		{:else}
			<Signup bind:state={state} />
		{/if}
	</div>

</div>