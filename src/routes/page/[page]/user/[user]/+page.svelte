<script lang='ts'>

	import { onMount } from 'svelte';
	import { database, getAuthApp } from '$firebase';
	import { collection, query, orderBy, getDocs, doc, getDoc } from 'firebase/firestore/lite';

	import { admin } from '$firebase';
	import { page } from '$app/stores';

	let currentUserPage = $page.params.user;
	$: currentUserPage = $page.params.user;

	// const auth = getAuthApp();

	// let userDoc;

	// let sortedSubmissions;

	// onMount(async () => {
	// 	const db = database();
	// 	const announcementsRef = collection(db, 'users', userId, 'pages');;
	// 	const querySnapshot = await getDocs(query(announcementsRef, orderBy('createdAt', 'desc')));
		
	// 	const docRef = doc(db, 'users', auth.currentUser.uid);
    // 	const docSnap = await getDoc(docRef);
    // 	userDoc = docSnap.data();
		
	// 	sortedSubmissions = querySnapshot.docs.map((doc) => doc.data());
	// 	console.log(sortedSubmissions);

	// });

</script>

<div>
	Current user document {Math.random()}
	<a href={Math.random().toString()}> New user </a>
</div>
