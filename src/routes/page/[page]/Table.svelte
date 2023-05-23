<script lang="ts">
	import { database } from '$/firebase';
	import { doc, getDocs, getDoc, collection } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	export let webpage = '';

	let webpage_metadata = {
		due_start: '2021-10-10',
		due_end: '2021-10-10',
		grade_total: 1
	};

	let isDataLoaded = false;
	let currentPageSlug: string;
	const db = database();
	let userData: any[] = [];

	onMount(async () => {
		currentPageSlug = $page.url.pathname.split('/')[2] || '/';
		await fetchData();
		isDataLoaded = true;
	});

	async function fetchData() {
		const collectionRef = collection(db, 'users');
		const querySnapshot = await getDocs(collectionRef);

		await Promise.all(
			querySnapshot.docs.map(async (doc) => {
				const firstName = doc.data().first_name;
				const lastName = doc.data().last_name;

				const userArray = {
					first_name: firstName,
					last_name: lastName,
					recentSubmissionDate: 'N/A',
					gradeEarned: 'N',
					gradeTotal: 'A',
					status: 'Not Submitted'
				};

				const userId = doc.id;
				const pagesRef = collection(db, 'users', userId, 'pages');
				const pagesQuerySnapshot = await getDocs(pagesRef);

				if (!pagesQuerySnapshot.empty) {
					await Promise.all(
						pagesQuerySnapshot.docs.map(async (pageDoc) => {
							const pageId = pageDoc.id;
							if (pageId === currentPageSlug) {
								const pageData = pageDoc.data();
								const gradeEarned = pageData['grade']['earned'];
								const gradeTotal = pageData['grade']['total'];
								userArray.gradeEarned = gradeEarned;
								userArray.gradeTotal = gradeTotal;

								const totalSubmissions = pageData.total_submissions;
								if (totalSubmissions > 0) {
									userArray.status = 'Submitted';

									const submissionsRef = collection(pagesRef, pageId, 'submissions');
									const submissionsQuerySnapshot = await getDocs(submissionsRef);
									let latestSubmissionData;
									let latestSubmissionDate = 0;

									submissionsQuerySnapshot.forEach((submissionDoc) => {
										const submissionData = submissionDoc.data();
										const createdAt = submissionData.createdAt.toDate();

										if (createdAt > latestSubmissionDate) {
											latestSubmissionDate = createdAt;
											latestSubmissionData = submissionData;
										}
									});

									if (latestSubmissionData) {
										console.log('date: ' + latestSubmissionDate);
										const formattedDate = new Date(latestSubmissionDate).toLocaleDateString(
											'en-US'
										);
										userArray.recentSubmissionDate = formattedDate;
									}
								}
							}
						})
					);
				}

				userData.push(userArray);
			})
		);

		console.log(userData);
		isDataLoaded = true;
	}
</script>

{#if isDataLoaded}
	<div class="overflow-x-auto w-full h-full">
		<table class="table table-zebra w-full text-sm !rounded-none">
			<!-- head -->
			<thead class="font-bold">
				<tr>
					<th>#</th>
					<th>Status</th>
					<th>Name</th>
					<th>Date</th>
					<th>Grade</th>
					<th>Details</th>
				</tr>
			</thead>
			<tbody>
				{#each userData as user, i}
					<tr>
						<td>
							{i}
						</td>

						<td class="font-bold">
							{#if user.status === 'Not Submitted'}
								<span class="text-error font-bold">{user.status}</span>
							{:else}
								<span class="text-success font-bold">{user.status}</span>
							{/if}
						</td>

						<td>{user.first_name} {user.last_name}</td>

						<td>
							{#if user.recentSubmissionDate === 'N/A'}
								<span class="text-neutral opacity-75">{user.gradeEarned}/{user.gradeTotal}</span>
							{:else}
								<span>{user.recentSubmissionDate}</span>
							{/if}
						</td>

						<td>
							{#if user.gradeEarned === 'N'}
								<span class="text-neutral opacity-75">{user.gradeEarned}/{user.gradeTotal}</span>
							{:else}
								<span>{user.gradeEarned}/{user.gradeTotal}</span>
							{/if}
						</td>

						<td>
							{#if user.recentSubmissionDate === 'N/A'}
								<button class="btn btn-disabled btn-sm text-xs p-1 px-2">Details</button>
							{:else}
								<button class="btn btn-primary btn-sm text-xs p-1 px-2">Details</button>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

<style lang="postcss">
	td,
	th {
		@apply p-2 min-w-[2rem];
	}

	th {
		@apply bg-neutral text-neutral-content;
	}

	div {
		border-radius: var(--rounded-btn, 0.5rem);
	}

	:where(.table *:first-child) :where(*:first-child) :where(th, td):first-child {
		border-top-left-radius: var(--rounded-btn, 0.5rem);
	}
	:where(.table *:first-child) :where(*:first-child) :where(th, td):last-child {
		border-top-right-radius: var(--rounded-btn, 0.5rem);
	}
	:where(.table *:last-child) :where(*:last-child) :where(th, td):first-child {
		border-bottom-left-radius: var(--rounded-btn, 0.5rem);
	}
	:where(.table *:last-child) :where(*:last-child) :where(th, td):last-child {
		border-bottom-right-radius: var(--rounded-btn, 0.5rem);
	}
</style>
