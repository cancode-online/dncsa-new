<script lang='ts'>

    import { page } from '$app/stores';  

    import LucideFiles from '~icons/lucide/files';
    import LucideFileText from '~icons/lucide/file-text';
    import LucideFolderOpen from '~icons/lucide/folder-open';
    import LucideCalendar from '~icons/lucide/calendar';

    import { pages, pageToFolder } from '$pages/indexer';

    const pagesArray = Object.keys(pages);
    pagesArray.sort((a, b) => {
        return (new Date(pages[a].metadata.date).getTime() < new Date(pages[b].metadata.date).getTime()) ? -1 : 1; // Sort by date
    });

</script>

<div class='w-56'>
    <div class="h-12 uppercase flex justify-start p-2 w-full bg-primary border-x-2 border-t-2 border-base-200 text-primary-content !rounded-b-none">
        <div class='flex self-center w-fit gap-2'>
            <span class='self-center'><LucideCalendar /></span>
            <span class='flex-1 text-left'>Timeline</span>
        </div>
    </div>
    <div class='no-scrollbar bg-base-300 border-2 border-base-200 max-h-[24rem] w-full p-1 gap-1 flex flex-col flex-nowrap overflow-y-scroll !rounded-t-none'>
        {#each pagesArray as folder, i}

            <a href='/page/{Object.keys(pages[folder].pages).find(pg => pages[folder].metadata.order[0])}'>
                {#if pages[folder].metadata.type === 'week'}
                    <button class="btn btn-sm btn-ghost w-full uppercase flex gap-2 p-2 {pageToFolder[$page.url.pathname.split('/')[2]] === folder ? "active-timeline-button" : ""}">
                        <LucideFiles />
                        <span class='flex-1 text-left'>{pages[folder].metadata.title}</span>
                    </button>
                {:else if pages[folder].metadata.type === 'unit'}
                    <button class="btn btn-sm btn-neutral w-full uppercase flex gap-2 p-2 {pageToFolder[$page.url.pathname.split('/')[2]] === folder ? "active-timeline-button" : ""}">
                        <LucideFolderOpen />
                        <span class='flex-1 text-left'>{pages[folder].metadata.title}</span>
                    </button>
                {:else if pages[folder].metadata.type === 'page'}
                    <button class="btn btn-sm btn-neutral w-full uppercase flex gap-2 p-2 {pageToFolder[$page.url.pathname.split('/')[2]] === folder ? "active-timeline-button" : ""}">
                        <LucideFileText />
                        <span class='flex-1 text-left'>{pages[folder].metadata.title}</span>
                    </button>
                {/if}
            </a>
        {/each}
    </div>
</div>

<style lang='postcss'>
	div, button {
		border-radius: var(--rounded-btn, 0.5rem);
	}

	/* width */
	.no-scrollbar::-webkit-scrollbar {
		width: 0px;
	}

	/* Track */
	.no-scrollbar::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	.no-scrollbar::-webkit-scrollbar-thumb {
		background: transparent;
	}

	/* Handle on hover */
	.no-scrollbar::-webkit-scrollbar-thumb:hover {
		background: transparent;
	}

    :global(.active-timeline-button) {
        @apply !bg-primary !text-primary-content !border-primary;
    }

    :global(.active-timeline-button):hover {
        @apply !bg-primary-focus !text-primary-content !border-primary;
    }

</style>