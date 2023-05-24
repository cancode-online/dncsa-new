<script lang='ts'>

    import { onMount } from 'svelte';
    import { database, user } from '\$/firebase';
    import { doc, collection, setDoc, getDoc, getDocs } from 'firebase/firestore';

    import Frq from './Frq.svelte';
    import { admin } from '$firebase';
    import { page } from '$app/stores';
    import Table from './Table.svelte';
    import Quiz from './Quiz.svelte';

    let webpage = '/';
	$: webpage = $page.params.page;

    let type = '';

    onMount( async () => {

        const db = database();
        const pageDocRef = doc(db, 'pages' + "/" + webpage);
        const pageDocSnapshot = await getDoc(pageDocRef);
        const pageDocData = pageDocSnapshot.data();

        type = pageDocData?.type;
    });

</script>

{#if $admin} <!--$admin-->
    <div class='bg-red-500'>
        <Table {webpage} />
    </div>
{:else}
    {#if type === 'frq_assignment'}
        <div class='bg-blue-500 w-full h-full'>
          <Frq {webpage}/>
        </div>
    {:else if type === 'quiz_assignment'}
        <div class='bg-blue-500 w-full h-64'>
            <Quiz {webpage} />
        </div>
    {:else }
        <span>
            empty
        </span>
    {/if}
{/if}