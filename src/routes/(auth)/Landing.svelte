<script lang='ts'>
import Login from "./Login.svelte";
import Signup from "./Signup.svelte";

	let state = true;
	let loginState = false;
	let signupState = false;

	$: {

		console.log(loginState, signupState);



		if (loginState) {

			console.log("login");

			loginState = false;
			signupState = false;

			state = false;

		}

		if (signupState) {

			console.log("signup");

			loginState = false;
			signupState = false;

			state = true;

		}

		let foo = loginState;
		let foo2 = signupState;

	}

</script>

<div class='flex w-screen h-screen bg-primary justify-center gap-8'>

	<div class='w-96 h-72 bg-secondary self-center'>
		Text
	</div>

	<div class='w-96 h-72 bg-secondary self-center'>
		{#if state===true}
		<Login {loginState} />
		{:else}
		<Signup {signupState} />
		{/if}
	</div>

</div>