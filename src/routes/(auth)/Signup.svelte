<script lang="ts">
	import { signInWithGoogle, signInWithGithub, signUpWithEmail, signInWithFacebook } from '$firebase';

    import LucideGithub from '~icons/lucide/github';
    import BiGoogle from '~icons/bi/google';
    import BiMeta from '~icons/bi/meta';

	let username: string = '';
	let email: string = '';
	let password: string = '';
	let confirmPassword: string = '';

    export let state;

    function changeState () {
        state = 'login';
        console.log(state);
    }

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


<div class=" bg-secondary flex flex-col p-8 w-96 h-fit justify-around self-center rounded-lg gap-4 shadow-xl">
    <form method="POST">
        <!-- Username/Email/Password/Confirm Boxes -->
        <div
            id="tooltip-user"
            class="w-full tooltip tooltip-top tooltip-neutral before:hidden after:hidden tooltip-open"
            data-tip="Username must be at least 3 characters"
        >
            <input bind:value={username} type="text" placeholder="Username" class="input w-full max-w-xs" name="username_box" on:blur={checkUsername} />
        </div>
        <div
            id="tooltip-email"
            class="w-full tooltip tooltip-top tooltip-neutral before:hidden after:hidden tooltip-open"
            data-tip="Email must be valid"
        >
            <input bind:value={email} type="email" placeholder="Email" class="input w-full max-w-xs my-4" name="email_box" on:blur={checkEmail} />
        </div>
        <div
            id="tooltip-pass"
            class="w-full tooltip tooltip-top tooltip-neutral before:hidden after:hidden tooltip-open"
            data-tip="Passwords must match"
        >
            <input bind:value={password} type="password" placeholder="Password" class="input w-full max-w-xs" name="password_box" />
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
        <input id="submit" type="button" value="Sign Up" class="btn my-4 w-full" on:click={post} />
    </form>

    <!-- Signup Buttons -->
    <div class="flex flex-row justify-center gap-10 pt-2 pb-1">
        <div class="tooltip tooltip-top tooltip-neutral" data-tip="GitHub">
            <button class="btn bg-base-100 w-14 h-14" on:click={signInWithGithub}>
                <LucideGithub />
            </button>
        </div>

        <div class="tooltip tooltip-top tooltip-neutral" data-tip="Google">
            <button class="btn bg-base-100 w-14 h-14" on:click={signInWithGoogle}>
                <BiGoogle/>
            </button>
        </div>

        <div class="tooltip tooltip-top tooltip-neutral" data-tip="Meta">
            <button class="btn bg-base-100 w-14 h-14" on:click={signInWithFacebook}>
                <BiMeta/>
            </button>
        </div>
    </div>

    <!-- Login Redirect -->
    <div class="divider h-0">OR</div>
    <div class="self-center">
        Already have an account? <button class="underline" on:click={changeState}>Login</button>
    </div>
</div>


