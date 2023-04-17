<script lang="ts">
	import {
		signInWithGoogle,
		signInWithGithub,
		signInWithEmail,
		signInWithFacebook
	} from '$firebase';

	import { z, ZodError } from 'zod';

	import type { ZodParsedType } from 'zod';

	import LucideGithub from '~icons/lucide/github';
	import BiGoogle from '~icons/bi/google';
	import BiMeta from '~icons/bi/meta';

	export let state;

	let email: string = '';
	let password: string = '';

	async function post() {
		checkLogin(email, password);
	}

	const emailSchema = z.object({
		email: z.string().email({ message: 'Invalid Email' })
	});

	const passSchema = z.object({
		password: z.string().min(6, { message: 'Password must be at least 6 characters long' })
	});

	function blurEmail() {
		const emailInput = document.getElementsByName('email_box')[0] as HTMLInputElement;
		const toolLogin = document.getElementById('toolLogin') as HTMLDivElement;
		const emailValue = emailInput.value;
		try {
			emailSchema.parse({ email: emailValue });
			emailInput.classList.remove('input-error');
			toolLogin.classList.add('before:hidden', 'after:hidden');
		} catch (error) {
			toolLogin.classList.remove('before:hidden', 'after:hidden');
			toolLogin.setAttribute('data-tip', 'Invalid Email');
			emailInput.classList.add('input-error');
		}
	}

	function blurPassword() {
		const passwordInput = document.getElementsByName('password_box')[0] as HTMLInputElement;
		const toolLogin = document.getElementById('toolLogin') as HTMLDivElement;
		const passwordValue = passwordInput.value;
		try {
			passSchema.parse({ password: passwordValue });
			passwordInput.classList.remove('input-error');
			toolLogin.classList.add('before:hidden', 'after:hidden');
		} catch (error) {
			passwordInput.classList.add('input-error');
			toolLogin.classList.remove('before:hidden', 'after:hidden');
			toolLogin.setAttribute('data-tip', 'Password must be at least 6 characters long');
		}
	}

	function errorLogin() {
		const toolLogin = document.getElementById('toolLogin') as HTMLDivElement;
		const emailInput = document.getElementsByName('email_box')[0] as HTMLInputElement;
		const passwordInput = document.getElementsByName('password_box')[0] as HTMLInputElement;
		toolLogin.classList.remove('before:hidden', 'after:hidden');
		toolLogin.setAttribute('data-tip', 'Invalid Email or Password');
		emailInput.classList.add('input-error');
		passwordInput.classList.add('input-error');
	}

	function checkLogin(email: string, password: string) {
		try {
			signInWithEmail(email, password);
		} catch (error) {
			errorLogin();
		}
	}
</script>

<svelte:head>
	<title>Login to CanCode</title>
</svelte:head>

<div
	class=" bg-secondary flex flex-col p-8 w-96 h-fit justify-around self-center rounded-lg gap-4 shadow-xl"
>
	<!-- Email and Password Box -->
	<form method="POST">
		<div
			id="toolLogin"
			class="tooltip tooltip-top tooltip-error before:hidden after:hidden tooltip-open"
			data-tip=""
		>
			<input
				bind:value={email}
				on:blur={blurEmail}
				type="text"
				placeholder="Email"
				class="input w-full max-w-xs"
				name="email_box"
				id="email_box"
			/>
			<input
				bind:value={password}
				type="password"
				placeholder="Password"
				class="input w-full max-w-xs my-4"
				name="password_box"
				id="password_box"
				on:blur={blurPassword}
			/>
		</div>
		<!-- Submit Button -->
		<input type="button" value="Login" class="btn my-4 w-full" on:click={post} />
	</form>

	<!-- Login Buttons -->
	<div class="flex flex-row justify-center gap-10 pt-2 pb-1">
		<div class="tooltip tooltip-top tooltip-neutral" data-tip="GitHub">
			<button class="btn bg-base-100 w-14 h-14 text-xl p-0" on:click={signInWithGithub}>
				<LucideGithub />
			</button>
		</div>

		<div class="tooltip tooltip-top tooltip-neutral" data-tip="Google">
			<button class="btn bg-base-100 w-14 h-14 text-xl p-0" on:click={signInWithGoogle}>
				<BiGoogle />
			</button>
		</div>

		<div class="tooltip tooltip-top tooltip-neutral" data-tip="Meta">
			<button class="btn bg-base-100 w-14 h-14 text-xl p-0" on:click={signInWithFacebook}>
				<BiMeta />
			</button>
		</div>
	</div>

	<!-- Signup Redirect -->
	<div class="divider h-0">OR</div>
	<div class="self-center text-center">
		Don't have an account? <button
			class="underline"
			on:click={() => {
				state = 'signup';
			}}>Sign Up</button
		>
	</div>
</div>

<style>
	.wrapper {
		background-size: 100% 100%;
		background-position: 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
		background-image: radial-gradient(49% 81% at 45% 47%, #bc03ff45 0%, #073aff00 100%),
			radial-gradient(113% 91% at 17% -2%, #1900ffff 1%, #ff000000 99%),
			radial-gradient(142% 91% at 83% 7%, #e600ffff 1%, #3f00ff00 99%),
			radial-gradient(142% 91% at -6% 74%, #f200ffff 1%, #8900ff00 99%),
			radial-gradient(142% 91% at 111% 84%, #0016ffff 0%, #ac00ffff 100%);
	}
</style>
