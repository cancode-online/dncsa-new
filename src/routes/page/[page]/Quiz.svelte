<script lang="ts">
	import LucideArrowRight from '~icons/lucide/arrow-right';
	import LucideArrowLeft from '~icons/lucide/arrow-left';

	export let webpage = '';

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
	let selected_answers = [-1, -1];
	let current_question = 0;
	let can_submit = false;

	$: {
		let all_answered = true;

		for (let i = 0; i < selected_answers.length; i++) {
			if (selected_answers[i] === -1) {
				all_answered = false;
			}
		}

		can_submit = all_answered ? true : false;
	}

	async function submit() {
		if (can_submit) {
			
		}
	}
</script>

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
					current_question = Math.max(0, Math.min(questions.length, current_question));
				}}
			>
				<LucideArrowLeft />
			</button>
			<button
				class="btn btn-square btn-neutral"
				on:click={() => {
					current_question++;
					current_question = Math.max(0, Math.min(questions.length, current_question));
				}}
			>
				<LucideArrowRight />
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
	div {
		border-radius: var(--rounded-btn, 0.5rem);
	}
</style>
