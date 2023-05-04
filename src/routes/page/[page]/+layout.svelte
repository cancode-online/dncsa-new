<script lang="ts">

    import MarkdownPage from '$/lib/components/MarkdownPage.svelte';
    import { page } from '$app/stores';

    let currentPage = '/';
    $: currentPage = $page.params.page;

</script>

<div class='flex flex-col bg-blue-500 min-h-[20rem] w-full'>

    <div class='flex bg-cyan-500 h-10'>
        Tabs
    </div>

    <div class='bg-lime-500 min-h-[40rem]'>
        {#key currentPage}
            <MarkdownPage page={"unit-5"} />
        {/key}
    </div>

    <div class='bg-purple-500 min-h-[40rem] mt-4'>
        {#key currentPage}
            Extra
            <slot />
        {/key}
    </div>

</div>