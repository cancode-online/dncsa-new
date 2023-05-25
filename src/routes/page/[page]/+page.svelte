<script lang="ts">
	import Frq from './Frq.svelte';
	import { admin } from '$firebase';
	import { page } from '$app/stores';
	import Table from './Table.svelte';
	import Quiz from './Quiz.svelte';
	import Metadata from './Metadata.svelte';
	import QuizEditor from './QuizEditor.svelte';

	import { getPages, getFolderMetadata } from '\$/lib/utils/pages';

	import { onMount } from 'svelte';
	import { database, user } from '$/firebase';
	import { doc, collection, setDoc, getDoc, getDocs, deleteDoc } from 'firebase/firestore';

	let webpage = '/';
	$: webpage = $page.params.page;

	let type = '';

	onMount(async () => {
		
		const db = database();
		const pageDocRef = doc(db, 'pages' + '/' + webpage);
		const pageDocSnapshot = await getDoc(pageDocRef);
		const pageDocData = pageDocSnapshot.data();

		type = pageDocData?.type;

		const _pages = await getPages();
		const post = await _pages[webpage].import();
		
		
		if(!pageDocData){

			if (post.metadata.type === 'frq_assignment' || post.metadata.type === 'quiz_assignment'){
			
				let pageData = {

					correct_answers: {},
					
					questions:
					{
						question: '',
						answers: {}

					},

					gradeTotal: post.metadata.grade_total,
					dueStart: post.metadata.due_start,
					dueEnd: post.metadata.due_end,
					type: post.metadata.type,
					ungraded_submissions: []

				}

				console.log(pageData);

				await setDoc(pageDocRef, pageData);

			}

			else{

				let pageData = {

					gradeTotal: post.metadata.grade_total,
					dueStart: post.metadata.due_start,
					dueEnd: post.metadata.due_end,
					type: post.metadata.type,

				}

				console.log(pageData);

				await setDoc(pageDocRef, pageData, {merge: true});

			}

		}
		
		else {
			if (post.metadata.type === 'page'){
				deleteDoc(pageDocRef);
			}
		}

	});

	let showmetadata = false;

	function viewMD() {
		showmetadata = true;
	}

	function viewTable() {
		showmetadata = false;
	}
</script>

{#if $admin}
	<!--$admin-->
	<div class="bg-base-200 h-12 !rounded-b-none flex justify-between p-2">
		<div class="flex gap-2">
			<input type="text" placeholder="Search..." class="input h-8 w-48" />
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
		<div class="bg-red-500">
			<Table {webpage} />
		</div>
	{:else}
		<div class="bg-red-500">
			<Metadata {webpage} />
			<QuizEditor {webpage} />
		</div>
	{/if}
{:else if type === 'frq_assignment'}
	<div class="bg-blue-500 w-full h-full">
		<Frq {webpage} />
	</div>
{:else if type === 'quiz_assignment'}
	<div class="bg-blue-500 w-full h-64">
		<Quiz {webpage} />
	</div>
{:else}
	<span> empty </span>
{/if}
