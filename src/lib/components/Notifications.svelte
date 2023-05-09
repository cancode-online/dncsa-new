<script lang='ts'>
    import LucideBell from '~icons/lucide/bell';
    import LucideTerminal from '~icons/lucide/terminal';

    

    let notifications = [
        {
            name: "Fibonacci Sequence Assignment",
            type: "assignment",
            date: "3/12/23",
            summary: "This is a summary of the assignment",
            slug: "fibonacci-sequence-assignment"
        },
        {
            name: "Fibonacci Sequence Assignment",
            type: "assignment",
            date: "3/12/23",
            summary: "This is a summary of the assignment",
            slug: "fibonacci-sequence-assignment"
        }
    ];
    
</script>

<div class='w-72 flex flex-col gap-2'>
    <div class='bg-base-200 h-fit flex flex-col p-1'>
        <div class='btn btn-neutral flex justify-start gap-2 px-2'>
            <div>
                <LucideBell/>
            </div>
            <span class='self-center'>Notifications</span>
        </div>
    </div>
    
    {#each notifications as notification}
            <div class='flex flex-col bg-base-200 p-2 gap-2 prose'>
                <div class='flex justify-between w-full gap-2'>
                    <span class='self-center text-sm whitespace-nowrap text-ellipsis overflow-hidden font-bold'>{notification.name}</span>
                    <span class='self-center text-sm whitespace-nowrap'>{notification.date}</span>
                </div>
                <div class='w-full text-sm'>
                    {notification.summary}
                </div>
                <hr class='m-0'/>
                <div class='flex justify-between'>
                    <span class='text-sm self-center font-bold'>
                        142 submissions
                    </span>
                    <a href='/page/{notification.slug}'>
                        <button class='btn btn-sm btn-primary'>
                            GRADE
                        </button>
                    </a>
                </div>
            </div>
    {/each}
</div>

<style lang="postcss">

    div {
		border-radius: var(--rounded-btn, 0.5rem);
	}

</style>