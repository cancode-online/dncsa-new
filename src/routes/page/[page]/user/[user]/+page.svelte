<script lang='ts'>
	import SvelteMarkdown from 'svelte-markdown';

	import { onMount } from 'svelte';
	import { database, getAuthApp } from '$firebase';
	import { collection, query, orderBy, getDocs, doc, getDoc } from 'firebase/firestore';

	import { admin } from '$firebase';
	import { page } from '$app/stores';

	let currentUserPage = $page.params.user;
	let currentPage = $page.params.page;
	$: {

		currentPage = $page.params.page;
		currentUserPage = $page.params.user;

		console.log(currentUserPage)

		populatePages();

	}

	const auth = getAuthApp();

	async function populatePages() {

		const db = database();

		console.log(db)

		const pagesRef = collection(db, `users/${currentUserPage}/pages/${currentPage}/submissions` );

		console.log(pagesRef)
		const querySnapshot = await getDocs(query(pagesRef, orderBy('createdAt', 'desc')));
		
		const docRef = doc(db, 'users', auth.currentUser.uid);
		const docSnap = await getDoc(docRef);
		userDoc = docSnap.data();
		
		sortedSubmissions = querySnapshot.docs.map((doc) => doc.data());
		console.log(sortedSubmissions);

		md = sortedSubmissions[0].submission_text;

	}

	let userDoc;

	let sortedSubmissions;

	let md = ''

</script>

<div class='prose p-2'>
	<SvelteMarkdown source={md} />
</div>
