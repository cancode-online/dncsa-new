<script lang='ts'>
    import LucideCalendar from '~icons/lucide/calendar';
    import LucideFiles from '~icons/lucide/files';

    let directories = [
        {
            name: "Week 30",
            type: "week",
            date: "2021-09-01",
            slug: "fibonacci-sequence-assignment"
        }
    ];
    
</script>

<div class='bg-base-200 w-56 h-fit flex flex-col p-1 gap-1'>
    <div class='btn btn-neutral flex justify-start gap-2 px-2'>
        <div>
            <LucideCalendar/>
        </div>
        <span class='self-center'>Timeline</span>
    </div>
    {#each directories as directory}
        <a href="/page/{directory.slug}">
            <div class='btn btn-ghost btn-sm flex justify-start px-2 gap-2'>
                <div>
                    <LucideFiles/>
                </div>
                <span class='self-center'> {directory.name} </span>
            </div>
        </a>
    {/each}
</div>

<style lang="postcss">

    div {
		border-radius: var(--rounded-btn, 0.5rem);
	}

</style>