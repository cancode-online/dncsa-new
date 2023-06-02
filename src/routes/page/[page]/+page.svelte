<script lang="ts">
	import Frq from './Frq.svelte';
	import { admin } from '$firebase';
	import { page } from '$app/stores';
	import Table from './Table.svelte';
	import Quiz from './Quiz.svelte';
	import Metadata from './Metadata.svelte';
	import QuizEditor from './QuizEditor.svelte';

	import { getPages, getFolderMetadata } from '$/lib/utils/pages';

	import { onMount } from 'svelte';
	import { database, user } from '$/firebase';
	import { doc, collection, setDoc, getDoc, getDocs, deleteDoc } from 'firebase/firestore';

	let webpage = '/';
	$: webpage = $page.params.page;

	let updated = false;

	let type = '';

	async function updatePagesFirebase() {
		const db = database();
		const pageDocRef = doc(db, 'pages' + '/' + webpage);
		const pageDocSnapshot = await getDoc(pageDocRef);
		const pageDocData = pageDocSnapshot.data();

		type = pageDocData?.type;

		const _pages = await getPages();
		const post = await _pages[webpage].import();

		if (!pageDocData) {
			if (post.metadata.type === 'frq_assignment' || post.metadata.type === 'quiz_assignment') {
				let pageData = {
					correct_answers: {},

					questions: {
						question: '',
						answers: {}
					},

					grade_total: post.metadata.grade_total,
					due_start: post.metadata.due_start,
					due_end: post.metadata.due_end,
					type: post.metadata.type,

					submissions: {
						ungraded_submissions: [],
						submitted_submissions: [],
						graded_submissions: {}	
					}
				};

				console.log(pageData);

				await setDoc(pageDocRef, pageData);

				updated = true;
				type = post.metadata.type;
			} else {
				let pageData = {
					grade_total: post.metadata.grade_total,
					due_start: post.metadata.due_start,
					due_end: post.metadata.due_end,
					type: post.metadata.type
				};

				console.log(pageData);

				await setDoc(pageDocRef, pageData, { merge: true });
				updated = true;
				type = post.metadata.type;
			}
		} else {
			if (post.metadata.type === 'page') {
				await deleteDoc(pageDocRef);
				updated = true;

				type = post.metadata.type;
			}
		}
	}

	onMount(async () => {
		await updatePagesFirebase();
		updated = true;
	});

	let showmetadata = false;

	function viewMD() {
		showmetadata = true;
	}

	function viewTable() {
		showmetadata = false;
	}

	let search_value = '';

</script>

{#if $admin}
	<!--$admin-->
	<div class="bg-base-200 h-12 !rounded-b-none flex justify-between p-2">
		<div class="flex gap-2">
			<input bind:value={search_value} type="text" placeholder="Search..." class="input h-8 w-48" />
			<select class="select max-w-xs h-8 min-h-0 w-48">
				<option disabled selected>Group</option>
				<option>All</option>
				<option>2023 TRI 2 PER 1</option>
				<option>2023 TRI 2 PER 2</option>
				<option>2023 TRI 3 PER 1</option>
				<option>2023 TRI 3 PER 2</option>
			</select>
		</div>
		<div class="flex gap-2 relative justify-center">
			<button
				class="btn btn-primary btn-sm p-2 px-2 min-h-0 h-8 uppercase self-center"
				id="metadata"
				on:click={viewMD}
			>
				View metadata
			</button>
			<button
				class="btn btn-primary btn-sm p-2 px-2 min-h-0 h-8 uppercase self-center"
				on:click={viewTable}
			>
				View Table
			</button>
		</div>
	</div>
	{#if !showmetadata}
		<div>
			<Table {webpage} {search_value} />
		</div>
	{:else}
		<div>
			<Metadata {webpage} />
			{#if type === 'quiz_assignment'}
				<QuizEditor {webpage} />
			{/if}
		</div>
	{/if}
{:else if type === 'frq_assignment'}
	<div class="w-full h-full">
		{#if updated}
			<Frq {webpage} />
		{/if}
	</div>
{:else if type === 'quiz_assignment'}
	<div class="w-full h-64">
		<Quiz {webpage} />
	</div>
{:else}
	<span> empty </span>
{/if}
