<script lang='ts'>

    import { user, database } from '$firebase';
	import { onMount } from 'svelte';
    import { getDoc, doc } from 'firebase/firestore';
    import { page } from '$app/stores';

    onMount(async ()=>{

        const db = database();
        const docRef = doc(db, `users/${$page.params.user}`);
        const docSnap = await getDoc(docRef);
        const user_data = docSnap.data();

        console.log(user_data)



    });

</script>

<div>
    user grade
</div>