<script lang="ts">
	import {
		signInWithGoogle,
		signInWithGithub,
		signInWithEmail,
		signInWithFacebook
	} from '$firebase';

	import LucideGithub from '~icons/lucide/github';
	import MingcuteGoogleFill from '~icons/mingcute/google-fill'
	import BiMeta from '~icons/bi/meta';

	import { z } from 'zod';

	export let state;

	let email: string = '';
	const emailSchema = z.string().email();
	let password: string = '';
	const passwordSchema = z.string().min(6);

	async function post() {

		try {

		} catch {
			
		}

		signInWithEmail(email, password);
	}

	function validateEmail() {

		try {
			
			if (email.length > 0) emailSchema.parse(email);

			document?.getElementById('email_box')?.classList.remove('input-error');
			document?.getElementById('email_box_tooltip')?.classList.add('before:hidden', 'after:hidden');

		} catch (error) {

			document?.getElementById('email_box')?.classList.add('input-error');
			document?.getElementById('email_box_tooltip')?.classList.remove('before:hidden', 'after:hidden');

			return;
		}

	}

	function validatePassword() {

		try {
			
			if (password.length > 0) passwordSchema.parse(password);

			document?.getElementById('password_box')?.classList.remove('input-error');
			document?.getElementById('password_box_tooltip')?.classList.add('before:hidden', 'after:hidden');

		} catch (error) {

			document?.getElementById('password_box')?.classList.add('input-error');
			document?.getElementById('password_box_tooltip')?.classList.remove('before:hidden', 'after:hidden');

			return;
		}

	}

</script>

<svelte:head>
	<title>Login to CanCode</title>
</svelte:head>

<div
	class="b-300 flex flex-col p-8 w-96 !h-fit justify-around self-center gap-4"
>
	<!-- Email and Password Box -->
	<form method="POST">
		<div id='email_box_tooltip' class="tooltip tooltip-error tooltip-open tooltip-right w-full normal-case after:hidden before:hidden" data-tip="Invalid email">
			<input
				bind:value={email}
				on:blur={validateEmail}
				type="text"
				placeholder="Email"
				class="input w-full max-w-xs bg-base-200 placeholder:text-base-content/30"
				name="email_box"
				id="email_box"
			/>
		</div>
		<div id='password_box_tooltip' class="tooltip tooltip-error tooltip-open tooltip-right w-full normal-case after:hidden before:hidden" data-tip="Too short">
			<input
				bind:value={password}
				on:blur={validatePassword}
				type="password"
				placeholder="Password"
				class="input w-full max-w-xs my-4 bg-base-200 placeholder:text-base-content/30"
				name="password_box"
				id="password_box"
			/>
		</div>
		<!-- Submit Button -->
		<input type="button" value="login" class="btn btn-neutral uppercase max-w-xs my-4 w-full" on:click={post} />
	</form>

	<!-- Login Buttons -->
	<div class="flex flex-row justify-center gap-10 pt-2 pb-1">
		<div class="tooltip tooltip-top tooltip-neutral" data-tip="GitHub">
			<div class='input w-fit h-fit min-w-none p-0 border-none bg-base-200'>
				<button class="btn btn-ghost w-14 h-14 text-xl p-0" on:click={signInWithGithub}>
					<LucideGithub />
				</button>
			</div>
		</div>

		<div class="tooltip tooltip-top tooltip-neutral" data-tip="Google">
			<div class='input w-fit h-fit min-w-none p-0 border-none bg-base-200'>
				<button class="btn btn-ghost w-14 h-14 text-xl p-0" on:click={signInWithGoogle}>
					<MingcuteGoogleFill />
				</button>
			</div>
		</div>

		<div class="tooltip tooltip-top tooltip-neutral" data-tip="Meta">
			<div class='input w-fit h-fit min-w-none p-0 border-none bg-base-200'>
				<button class="btn btn-ghost w-14 h-14 text-xl p-0" on:click={signInWithFacebook}>
					<BiMeta />
				</button>
			</div>
		</div>
	</div>

	<!-- Signup Redirect -->
	<div class="divider h-0 px-4">OR</div>
	<div class="self-center text-center normal-case">
		Don't have an account?<button
			class="btn btn-link px-1 text-base-content normal-case"
			on:click={() => {
				state = 'signup';
			}}>Sign Up</button
		>
	</div>
</div>
