<script lang='ts'>

    import LucideFiles from '~icons/lucide/files';
    import LucideFileText from '~icons/lucide/file-text';
    import LucideFolderOpen from '~icons/lucide/folder-open';
    import LucideCalendar from '~icons/lucide/calendar'

</script>

<div class='w-56'>
    <div class="h-12 uppercase flex justify-start p-2 w-full bg-primary border-x-2 border-t-2 border-base-200 text-primary-content !rounded-b-none">
        <div class='flex self-center w-fit gap-2'>
            <span class='self-center'><LucideCalendar /></span>
            <span class='flex-1 text-left'>Timeline</span>
        </div>
    </div>
    <div class='no-scrollbar bg-base-300 border-2 border-base-200 h-96 w-full p-1 gap-1 flex flex-col flex-nowrap overflow-y-scroll !rounded-t-none'>
        {#each [
            {
                name: 'Schedule',
                type: 'page',
            },
            {
                name: 'Unit 1',
                type: 'unit',
            },
            {
                name: 'Week 0',
                type: 'week',
            },
            {
                name: 'Week 1',
                type: 'week',
            },
            {
                name: 'Week 2',
                type: 'week',
            },
            {
                name: 'Unit 2',
                type: 'unit',
            },
            {
                name: 'Week 3',
                type: 'week',
            },
            {
                name: 'Week 4',
                type: 'week',
            },
            {
                name: 'Hackathon',
                type: 'page',
            },
            {
                name: 'Week 5',
                type: 'week',
            },
            ] as key, i}
            <a href='http://localhost:5173/page/pbl-tools'>
                {#if key.type === 'week'}
                    <button class="btn btn-sm btn-ghost w-full uppercase flex gap-2 p-2">
                        <LucideFiles />
                        <span class='flex-1 text-left'>{key.name}</span>
                    </button>
                {:else if key.type === 'unit'}
                    <button class="btn btn-sm btn-neutral w-full uppercase flex gap-2 p-2">
                        <LucideFolderOpen />
                        <span class='flex-1 text-left'>{key.name}</span>
                    </button>
                {:else if key.type === 'page'}
                    <button class="btn btn-sm btn-neutral w-full uppercase flex gap-2 p-2">
                        <LucideFileText />
                        <span class='flex-1 text-left'>{key.name}</span>
                    </button>
                {/if}
            </a>
        {/each}
    </div>
</div>