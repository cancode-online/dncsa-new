<script lang='ts'>

    import Frq from './Frq.svelte';
    import { admin } from '$firebase';
    import Table from './Table.svelte';
    import Quiz from './Quiz.svelte';
    import { database } from '\$/firebase';
    import { doc, getDoc, collection, setDoc } from "firebase/firestore";
	import { onMount } from 'svelte';

    export let webpage = '';

    let type = "";
    
    console.log("webpage" + webpage);

    onMount(async () => {
        console.log("onmount");
        const db = database();

        const docRef = doc(db, "pages", webpage);
        const docSnap = await getDoc(docRef);
        const document = docSnap.data();

        if (document.type == 'quiz_assignment') {
            type = 'quiz_assignment';
        } else if (document.type == 'frq_assignment') {
            type = 'frq_assignment';
        }

        console.log(document);
        console.log(document.type);
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