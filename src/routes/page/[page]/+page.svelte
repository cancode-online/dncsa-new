<script lang='ts'>

    import MarkdownEditor from '$components/MarkdownEditor.svelte';
    import { admin } from '$firebase';
    import Table from './Table.svelte';

    export let webpage = '';

    

    let webpage_has_frq = true;

</script>

{#if false} <!--$admin-->
    <div class='bg-red-500'>
        <Table {webpage} />
    </div>
{:else}
    {#if webpage_has_frq}
        <div class='bg-blue-500 w-full h-full'>
          <MarkdownEditor value='3' />
        </div>
    {:else}
        <div class='bg-blue-500 w-64 h-64'>
            Quiz
        </div>
    {/if}
{/if}