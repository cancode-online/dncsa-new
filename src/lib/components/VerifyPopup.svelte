<script lang="ts">
	import { onMount } from 'svelte';
	import { authenticated } from '$firebase';
	import { getAuthApp, database } from '$firebase';
	import { getDoc, doc, setDoc } from 'firebase/firestore';
	import { fly, fade } from 'svelte/transition';

	let first_name_input = '';
	let last_name_input = '';
	let _authenticated = false;
	let modalVisible = true;
	let verified;

	authenticated.subscribe(async (data) => {
		_authenticated = data || false;
	});

	onMount(async () => {
		if (_authenticated === true) {
			const auth = getAuthApp();
			const db = database();
			const docRef = doc(db, 'users', auth.currentUser.uid);
			const docSnap = await getDoc(docRef);
			const document = docSnap.data();

			first_name_input = document.first_name || '';
			last_name_input = document.last_name || '';
			verified = document.verified_info;
		}
	});

	async function verifyInfoSave() {
		if (_authenticated === true) {
			const auth = getAuthApp();
			const db = database();
			const docRef = doc(db, 'users', auth.currentUser.uid);
			console.log(auth.currentUser?.displayName);
			const docSnap = await getDoc(docRef);
			const document = docSnap.data();

			const updatedData = {
				...document,
				first_name: first_name_input,
				last_name: last_name_input,
				verified_info: false
			};

			await setDoc(docRef, updatedData, { merge: true });
			modalVisible = false;
		}
	}

	async function verifyInfoDoNotAsk() {
		if (_authenticated === true) {
			const auth = getAuthApp();
			const db = database();
			const docRef = doc(db, 'users', auth.currentUser.uid);
			const docSnap = await getDoc(docRef);
			const document = docSnap.data();

			const updatedData = {
				...document,
				first_name: first_name_input,
				last_name: last_name_input,
				verified_info: true
			};

			await setDoc(docRef, updatedData, { merge: true });
			modalVisible = false;
		}
	}
</script>

{#if modalVisible === true && !verified}
	<div
		class="w-screen h-screen flex flex-col justify-center z-100 backdrop-blur-sm"
		in:fade={{ duration: 250, delay: 500 }}
		out:fade={{ duration: 250, delay: 750 }}
	>
		<div
			class="absolute self-center"
			in:fly={{ x: 0, y: 100, duration: 300, delay: 100 }}
			out:fly={{ x: 0, y: 100, duration: 300, delay: 100 }}
		>
			<div
				id="my-modal"
				class="self-center flex flex-col justify-center items-center modal-box modal-open gap-4 w-full py-10 px-8"
			>
				<h1 class="text-2xl font-bold text-center">Is your information correct?</h1>
				<p class="mb-4">Edit or confirm details:</p>

				<div class="flex flex-col justify-center gap-8 w-5/6">
					<div class="form-control w-full">
						<span class="label-text pb-2">First Name</span>
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered w-full"
							bind:value={first_name_input}
						/>
					</div>

					<div class="form-control w-full">
						<span class="label-text pb-2">Last Name</span>
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered w-full"
							bind:value={last_name_input}
						/>
					</div>

					<div class="flex justify-around p-4 w-full">
						<button
							class="btn btn-ghost self-center text-xs normal-case"
							on:click={verifyInfoDoNotAsk}>Do Not Ask Again</button
						>
						<button class="btn btn-primary" on:click={verifyInfoSave}>Save</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
