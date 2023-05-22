<script lang='ts'>

    import Frq from './Frq.svelte';
    import { admin } from '$firebase';
    import Table from './Table.svelte';
    import Quiz from './Quiz.svelte';

    export let webpage = '';

    let type = 'quiz_assignment';

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