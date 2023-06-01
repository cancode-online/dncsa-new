<script lang="ts">
	import { saveQuestion } from '$firebase';

	export let webpage = '';

	let question: string = '';
	let answerChoices: string[] = ['', '', '', ''];
	let correct_answers = [-1];
	let current_question = 0;
	let can_save = false;

	$: {
		let all_answered = true;

		for (let i = 0; i < correct_answers.length; i++) {
			if (correct_answers[i] === -1) {
				all_answered = false;
			}
		}

		can_save = all_answered ? true : false;
	}

	async function handleSaveQuestion() {
		await saveQuestion(webpage, question, answerChoices, correct_answers);
		question = '';
		for (let i = 0; i < answerChoices.length; i++) {
			answerChoices[i] = '';
		}
	}
</script>

<div class="flex flex-col bg-base-200 p-2">
	<div class="w-full h-fit min-h-[8rem] flex flex-col p-2">
		<div class="text-xs pb-2 opacity-50">Question</div>
		<div class="pb-4">
			<input
				bind:value={question}
				type="text"
				placeholder="Type a question"
				class="input w-full max-w-xs bg-base-200 placeholder:text-base-content/30"
				name="question"
				id="question"
			/>
		</div>
	</div>
	<div class="text-xs px-2 pb-2 opacity-50">Answers</div>
	<div class="flex flex-col gap-2">
		{#each answerChoices as answer, i}
			<button
				on:click={() => {
					correct_answers[current_question] = i;
					correct_answers = correct_answers;
				}}
				class="{correct_answers[current_question] === i
					? 'bg-primary hover:bg-primary text-primary-content hover:text-primary-content'
					: ''} normal-case text-left min-h-8 btn btn-neutral hover:bg-base-300 border-0 bg-base-100 p-2 no-animation text-base-content"
			>
				<span class="w-full">
					{i}:
					<input
						bind:value={answerChoices[i]}
						type="text"
						placeholder="Type an answer choice"
						class="input w-full max-w-xs bg-base-100 placeholder:text-base-content/30"
						name={'a' + i}
						id={'a' + i}
					/>
				</span>
			</button>
		{/each}
	</div>
	<div class="w-full h-fit flex justify-between pt-2 gap-2">
		<div>
			<button class="btn btn-primary normal-case" on:click={handleSaveQuestion}
				>Save Question</button
			>
		</div>
	</div>
</div>

<style lang="postcss">
	div {
		border-radius: var(--rounded-btn, 0.5rem);
	}
</style>
