<script lang="ts">
	import {
		signInWithGoogle,
		signInWithGithub,
		signUpWithEmail,
		signInWithFacebook
	} from '$firebase';

	import LucideGithub from '~icons/lucide/github';
	import MingcuteGoogleFill from '~icons/mingcute/google-fill'
	import BiMeta from '~icons/bi/meta';

	let username: string = '';
	let email: string = '';
	let password: string = '';
	let confirmPassword: string = '';

	export let state;

	async function post() {
		signUpWithEmail(email, password, username);
	}

	function checkUsername() {
		const usernameInput = document.getElementsByName('username_box')[0] as HTMLInputElement;
		const userTool = document.getElementById('tooltip-user') as HTMLDivElement;
		const submit = document.getElementById('submit') as HTMLButtonElement;
		if (usernameInput.value.length < 3) {
			requestAnimationFrame(() => {
				usernameInput.classList.add('input-error');
				userTool.classList.remove('before:hidden', 'after:hidden');
				submit.disabled = true;
			});
		} else {
			usernameInput.classList.remove('input-error');
			userTool.classList.add('before:hidden', 'after:hidden');
			submit.disabled = false;
		}
	}

	function checkEmail() {
		const emailInput = document.getElementsByName('email_box')[0] as HTMLInputElement;
		const emailTool = document.getElementById('tooltip-email') as HTMLDivElement;
		const submit = document.getElementById('submit') as HTMLButtonElement;
		if (!emailInput.value.includes('@')) {
			requestAnimationFrame(() => {
				emailInput.classList.add('input-error');
				emailTool.classList.remove('before:hidden', 'after:hidden');
				submit.disabled = true;
			});
		} else {
			emailInput.classList.remove('input-error');
			emailTool.classList.add('before:hidden', 'after:hidden');
			submit.disabled = false;
		}
	}

	function checkPasswords() {
		const passwordInput = document.getElementsByName('password_box')[0] as HTMLInputElement;
		const confirmInput = document.getElementsByName('confirm_box')[0] as HTMLInputElement;
		const submit = document.getElementById('submit') as HTMLButtonElement;
		const passTool = document.getElementById('tooltip-pass') as HTMLDivElement;
		if (passwordInput.value !== confirmInput.value) {
			requestAnimationFrame(() => {
				passwordInput.classList.add('input-error');
				confirmInput.classList.add('input-error');
				passTool.classList.remove('before:hidden', 'after:hidden');
				submit.disabled = true;
			});
		} else {
			passwordInput.classList.remove('input-error');
			confirmInput.classList.remove('input-error');
			passTool.classList.add('before:hidden', 'after:hidden');
			submit.disabled = false;
		}
	}
</script>

<svelte:head>
	<title>Signup for CanCode</title>
</svelte:head>

<div
	class="b-300 flex flex-col p-8 w-96 !h-fit justify-around self-center gap-4"
>
	<form method="POST">
		<!-- Username/Email/Password/Confirm Boxes -->
		<div
			id="tooltip-user"
			class="w-full tooltip tooltip-top tooltip-neutral before:hidden after:hidden tooltip-open"
			data-tip="Username must be at least 3 characters"
		>
			<input
				bind:value={username}
				type="text"
				placeholder="Username"
				class="input w-full max-w-xs bg-base-200"
				name="username_box"
				on:blur={checkUsername}
			/>
		</div>
		<div
			id="tooltip-email"
			class="w-full tooltip tooltip-top tooltip-neutral before:hidden after:hidden tooltip-open"
			data-tip="Email must be valid"
		>
			<input
				bind:value={email}
				type="email"
				placeholder="Email"
				class="input w-full max-w-xs my-4 bg-base-200"
				name="email_box"
				on:blur={checkEmail}
			/>
		</div>
		<div
			id="tooltip-pass"
			class="w-full tooltip tooltip-top tooltip-neutral before:hidden after:hidden tooltip-open"
			data-tip="Passwords must match"
		>
			<input
				bind:value={password}
				type="password"
				placeholder="Password"
				class="input w-full max-w-xs"
				name="password_box"
			/>
			<input
				bind:value={confirmPassword}
				type="password"
				placeholder="Confirm Password"
				class="input w-full max-w-xs my-4"
				name="confirm_box"
				on:blur={checkPasswords}
			/>
		</div>
		<!-- Submit Button -->
		<input id="submit" type="button" value="Sign Up" class="btn max-w-xs my-4 w-full" on:click={post} />
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

	<!-- Login Redirect -->
	<div class="divider h-0 px-4">OR</div>
	<div class="self-center">
		Already have an account?<button
			class="btn btn-link px-1 text-base-content"
			on:click={() => {
				state = 'login';
			}}>Login</button
		>
	</div>
</div>
