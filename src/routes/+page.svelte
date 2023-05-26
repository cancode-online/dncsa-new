<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import MarkdownEditor from '\$/lib/components/MarkdownEditor.svelte';
	import { database, user, admin } from '\$/firebase';
	import { getDoc, collection, doc, orderBy, getDocs, query} from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { query_selector_all } from 'svelte/internal';

	let value = '# Post an Announcement';

	onMount(async () => {
		const db = database();
		const announcementsRef = collection(db, 'announcements');
		const announcementQuery = query(announcementsRef, orderBy('createdAt', 'desc'));
		const querySnapshot = await getDocs(announcementQuery);
		const mostRecentDoc = querySnapshot.docs[0];
		const mostRecentAnnouncement = mostRecentDoc.data();

		console.log(mostRecentAnnouncement);
	});

	function



	


</script>

<div class="w-full p-2 bg-base-200 max-w-2xl">
	<div class='flex flex-col gap-2' in:fly={{ y: 50, duration: 400, delay: 100 }} out:fade={{ duration: 100 }}>

		<div class='bg-red-500 w-full h-96'>

		</div>

		<div class='bg-base-100 w-full min-h-[28rem]'>
			<div class="flex flex-col w-full min-h-[2rem] p-2 justify-center">
				
				<span class="self-start text-xl mb-5 font-bold">Teacher Announcement:</span>
				
				<div class="flex flex-row w-full h-full gap-2">

					<div class="avatar self-center">
						<div class="w-10 rounded-full h-fit border border-lg border-base-300">
						<img src="https://pbs.twimg.com/profile_images/1665064826/IMG_4772_400x400.jpg" />
						</div>
					</div>
					

					<span class="self-center text-sm">John Mortensen</span>

					<span class="self-center text-sm opacity-30"> • </span>

				</div>

			</div>
		</div>

		<div class='bg-base-100 w-full min-h-[10rem] rounded-md'>
			<MarkdownEditor bind:value={value}/>
			<button class="btn btn-primary absolute right-3 bottom-3">Post</button>
		</div>

	</div>
</div>
