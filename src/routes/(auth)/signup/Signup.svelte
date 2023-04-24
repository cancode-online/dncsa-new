<script lang="ts">
	import {
		signInWithGoogle,
		signInWithGithub,
		signInWithFacebook,
		signUpWithEmail
	} from '$firebase';

	import { goto } from '$app/navigation';

	import { fly, fade } from 'svelte/transition';

	import LucideGithub from '~icons/lucide/github';
	import MingcuteGoogleFill from '~icons/mingcute/google-fill';
	import BiMeta from '~icons/bi/meta';

	import { z } from 'zod';

	export let redirect = '/';

	let email: string = '';
	const emailSchema = z.string().email();
	let password: string = '';
	const passwordSchema = z.string().min(6);
	let firstName: string = '';
	const firstNameSchema = z.string().min(2);
	let lastName: string = '';
	const lastNameSchema = z.string().min(2);
	let confirmPassword: string = '';

	async function post() {
		try {

			signUpWithEmail(email, password, firstName, lastName);

			goto(redirect);

		} catch {

			return;

		}

	}

	function validateFirstName() {
		try {
			if (firstName.length > 0) firstNameSchema.parse(firstName);

			document?.getElementById('signup_first_name_box')?.classList.remove('input-error');
			document
				?.getElementById('signup_first_name_box_tooltip')
				?.classList.add('before:hidden', 'after:hidden');
		} catch (error) {
			document?.getElementById('signup_first_name_box')?.classList.add('input-error');
			document
				?.getElementById('signup_first_name_box_tooltip')
				?.classList.remove('before:hidden', 'after:hidden');

			return;
		}
	}

	function validateLastName() {
		try {
			if (lastName.length > 0) firstNameSchema.parse(lastName);

			document?.getElementById('signup_last_name_box')?.classList.remove('input-error');
			document
				?.getElementById('signup_last_name_box_tooltip')
				?.classList.add('before:hidden', 'after:hidden');
		} catch (error) {
			document?.getElementById('signup_ast_name_box')?.classList.add('input-error');
			document
				?.getElementById('signup_last_name_box_tooltip')
				?.classList.remove('before:hidden', 'after:hidden');

			return;
		}
	}

	function validateEmail() {
		try {
			if (email.length > 0) emailSchema.parse(email);

			document?.getElementById('signup_email_box')?.classList.remove('input-error');
			document?.getElementById('signup_email_box_tooltip')?.classList.add('before:hidden', 'after:hidden');
		} catch (error) {
			document?.getElementById('signup_email_box')?.classList.add('input-error');
			document
				?.getElementById('signup_email_box_tooltip')
				?.classList.remove('before:hidden', 'after:hidden');

			return;
		}
	}

	function validatePassword() {
		validateConfirmPassword();

		try {
			if (password.length > 0) passwordSchema.parse(password);

			document?.getElementById('signup_password_box')?.classList.remove('input-error');
			document
				?.getElementById('signup_password_box_tooltip')
				?.classList.add('before:hidden', 'after:hidden');
		} catch (error) {
			document?.getElementById('password_box')?.classList.add('input-error');
			document
				?.getElementById('signup_password_box_tooltip')
				?.classList.remove('before:hidden', 'after:hidden');

			return;
		}
	}

	function validateConfirmPassword() {
		if (confirmPassword === password) {
			document?.getElementById('signup_confirm_password_box')?.classList.remove('input-error');
			document
				?.getElementById('signup_confirm_password_box_tooltip')
				?.classList.add('before:hidden', 'after:hidden');
		} else {
			document?.getElementById('signup_confirm_password_box')?.classList.add('input-error');
			document
				?.getElementById('signup_confirm_password_box_tooltip')
				?.classList.remove('before:hidden', 'after:hidden');

			return;
		}
	}

	async function googleAuth() {

		try {

			signInWithGoogle();
			goto(redirect);

		} catch {

			return;

		}

	}

	async function githubAuth() {

		try {

			signInWithGithub()
			goto(redirect);

		} catch {

			return;

		}

	}

	async function facebookAuth() {

		try {

			signInWithFacebook();
			goto(redirect);

		} catch {

			return;

	}

	}
</script>

<svelte:head>
	<title>Signup for DN CSA</title>
</svelte:head>

<div
	class="b-300 flex flex-col p-8 w-96 !h-fit justify-around gap-4 self-center absolute"
	in:fly={{
		x: 0,
		y: 100,
		duration: 400,
		delay: 200
	}}
	out:fade={{
		duration: 200
	}}
>
	<!-- Email and Password Box -->
	<form method="POST" class="flex flex-col gap-4 w-full">
		<div
			id="signup_first_name_box_tooltip"
			class="tooltip tooltip-error tooltip-open tooltip-right w-full normal-case after:hidden before:hidden"
			data-tip="Too short"
		>
			<input
				bind:value={firstName}
				on:blur={validateFirstName}
				type="text"
				placeholder="First Name"
				class="input w-full max-w-xs bg-base-200 placeholder:text-base-content/30"
				name="signup_first_name_box"
				id="signup_first_name_box"
			/>
		</div>
		<div
			id="last_name_box_tooltip"
			class="tooltip tooltip-error tooltip-open tooltip-right w-full normal-case after:hidden before:hidden"
			data-tip="Too short"
		>
			<input
				bind:value={lastName}
				on:blur={validateLastName}
				type="text"
				placeholder="Last Name"
				class="input w-full max-w-xs bg-base-200 placeholder:text-base-content/30"
				name="signup_last_name_box"
				id="signup_last_name_box"
			/>
		</div>
		<div
			id="signup_email_box_tooltip"
			class="tooltip tooltip-error tooltip-open tooltip-right w-full normal-case after:hidden before:hidden"
			data-tip="Invalid email"
		>
			<input
				bind:value={email}
				on:blur={validateEmail}
				type="text"
				placeholder="Email"
				class="input w-full max-w-xs bg-base-200 placeholder:text-base-content/30"
				name="signup_email_box"
				id="signup_email_box"
			/>
		</div>
		<div
			id="password_box_tooltip"
			class="tooltip tooltip-error tooltip-open tooltip-right w-full normal-case after:hidden before:hidden"
			data-tip="Too short"
		>
			<input
				bind:value={password}
				on:blur={validatePassword}
				type="password"
				placeholder="Password"
				class="input w-full max-w-xs bg-base-200 placeholder:text-base-content/30"
				name="signup_password_box"
				id="signup_password_box"
			/>
		</div>
		<div
			id="signup_confirm_password_box_tooltip"
			class="tooltip tooltip-error tooltip-open tooltip-right w-full normal-case after:hidden before:hidden"
			data-tip="Password does not match"
		>
			<input
				bind:value={confirmPassword}
				on:blur={validateConfirmPassword}
				type="password"
				placeholder="Confirm Password"
				class="input w-full max-w-xs bg-base-200 placeholder:text-base-content/30"
				name="signup_confirm_password_box"
				id="signup_confirm_password_box"
			/>
		</div>
		<!-- Submit Button -->
		<input
			type="button"
			value="signup"
			class="btn btn-neutral uppercase max-w-xs mb-4 w-full self-center"
			on:click={post}
		/>
	</form>

	<!-- Login Buttons -->
	<div class="flex flex-row justify-center gap-10 pt-2 pb-1">
		<div class="tooltip tooltip-top tooltip-neutral" data-tip="GitHub">
			<div class="input w-fit h-fit min-w-none p-0 border-none bg-base-200">
				<button class="btn btn-ghost w-14 h-14 text-xl p-0" on:click={githubAuth}>
					<LucideGithub />
				</button>
			</div>
		</div>

		<div class="tooltip tooltip-top tooltip-neutral" data-tip="Google">
			<div class="input w-fit h-fit min-w-none p-0 border-none bg-base-200">
				<button class="btn btn-ghost w-14 h-14 text-xl p-0" on:click={googleAuth}>
					<MingcuteGoogleFill />
				</button>
			</div>
		</div>

		<div class="tooltip tooltip-top tooltip-neutral before:uppercase" data-tip="Meta">
			<div class="input w-fit h-fit min-w-none p-0 border-none bg-base-200">
				<button class="btn btn-ghost w-14 h-14 text-xl p-0" on:click={facebookAuth}>
					<BiMeta />
				</button>
			</div>
		</div>
	</div>

	<!-- Signup Redirect -->
	<div class="divider h-0 px-4">OR</div>
	<div class="self-center text-center normal-case">
		Already have an account?<a href="/login" class="btn btn-link px-1 text-base-content normal-case"
			>Login</a
		>
	</div>
</div>
