<script lang="ts">
	import LucideArrowRight from '~icons/lucide/arrow-right';
	import LucideArrowLeft from '~icons/lucide/arrow-left';
	import { onMount } from 'svelte';

	import { user, database, getAuthApp } from '$firebase';
	import { collection, doc, getDoc, setDoc} from 'firebase/firestore'
	import { updateCurrentUser } from 'firebase/auth';

	export let webpage = '';

	let selected_answers = [];

	let grade_total = 0;

	onMount(async ()=> {

		const db = database();
		const auth = getAuthApp();

		const submittedRef = doc(db, `users/${auth.currentUser.uid}/pages/${webpage}`);
		const submittedSnapshot = await getDoc(submittedRef);
		const submittedData = submittedSnapshot.data();

		if (submittedData.total_submissions == 0) {
			const docRef = doc(db, `pages/${webpage}`);
			const docSnap = await getDoc(docRef);
			const docData = docSnap.data();

			const _questions = docData.questions; 
			const correct_answers = docData.correct_answers

			for (let i = 0; i < correct_answers.length; i++) {

				selected_answers.push(-1);

			}

			grade_total = docData.grade_total;
			questions = _questions;
		} else {
			submitted = true;
		}
	});

	let questions = [
		{
			question: 'Which of the following is not a primitive?',
			answers: ['String', 'char', 'int', 'boolean']
		},
		{
			question:
				'Which of the following single lines of code could be used to declare a new variable named x and store the integer value 72 using this variable?',
			answers: [
				'Integer x = new int(72);',
				'int x = 72;',
				'int x = int 72;',
				'Integer x = Integer(72);'
			]
		}
	] as { question: string; answers: string[] }[];

	let current_question = 0;
	let can_submit = false;

	$: {
		let all_answered = true;

		for (let i = 0; i < selected_answers.length; i++) {
			if (selected_answers[i] === -1) {
				all_answered = false;
			}
		}



		can_submit = selected_answers.length > 0 ? (all_answered ? true : false) : false;
	}

	let submitted = false;
	let score = 0;
	let correct = 0;

	async function submit() {
		if (can_submit) {
			
			// updating user submission

			const response = await fetch(`/api/quiz`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				selected_answers: selected_answers,
				userUid: $user.uid,
				webpage: webpage
			})
		});
		const data = await response.json()
			score = data.score;
			correct = data.correct;
			submitted = true;
		}
	}
</script>

<div class='flex flex-col relative'>
	<div class="flex flex-col bg-base-200 p-2">
		<div class="w-full h-fit min-h-[8rem] flex flex-col p-2">
			<div class="text-xs pb-2 opacity-50">Question</div>
			<div class="pb-4">
				{questions[current_question].question}
			</div>
		</div>
		<div class="text-xs px-2 pb-2 opacity-50">Answers</div>
		<div class="flex flex-col gap-2">
			{#each questions[current_question].answers as answer, i}
				<button
					on:click={() => {
						selected_answers[current_question] = i;
						selected_answers = selected_answers;
					}}
					class="{selected_answers[current_question] === i
						? 'bg-primary hover:bg-primary text-primary-content hover:text-primary-content'
						: ''} normal-case text-left min-h-8 btn btn-neutral hover:bg-base-300 border-0 bg-base-100 p-2 no-animation text-base-content"
				>
					<span class="w-full">{i}: {answer}</span>
				</button>
			{/each}
		</div>
		<div class="w-full h-fit flex justify-between pt-2 gap-2">
			<div>
				<button class="btn {can_submit ? '' : 'btn-disabled'} btn-primary normal-case" on:click={submit}>
					Submit
				</button>
			</div>
			<div class="h-full flex justify-center self-center">
				<span class="self-center opacity-50">{current_question + 1} of {questions.length}</span>
			</div>
			<div>
				<button
					class="btn btn-square btn-neutral"
					on:click={() => {
						current_question--;
						current_question = Math.max(0, Math.min(questions.length - 1, current_question -= 1));
					}}
				>
					<LucideArrowLeft />
				</button>
				<button
					class="btn btn-square btn-neutral"
					on:click={() => {
						current_question = Math.max(0, Math.min(questions.length - 1, current_question += 1));
					}}
				>
					<LucideArrowRight />
				</button>
			</div>
		</div>
	</div>
	{#if submitted}
		<div class='absolute w-full h-full flex flex-col backdrop-blur-[2px] justify-center'>
			<div class='absolute w-full h-full bg-white z-10 opacity-30'/>
			<div class='self-center flex flex-col justify-center w-fit h-fit z-20 text-base-content top-0 bg-black bg-opacity-10 p-4'>
				<div class='flex self-center text-xl font-bold pb-8'>
					<span>You already completed this quiz</span>
				</div>
				<div class='flex self-center text-base font-medium'>
					<span>Your FINAL GRADE for this quiz is a <span class='font-bold'>{score}/{grade_total}</span></span>
				</div>
				<div class='flex self-center text-sm font-light opacity-70'>
					<span>You correctly answered <span class='font-bold'>{correct}/{questions.length}</span> questions</span>
				</div>
			</div>
		</div>
	{/if}
</div>


<style lang="postcss">
	div {
		border-radius: var(--rounded-btn, 0.5rem);
	}
</style>
