<script lang="ts">

</script>

<div class="w-72 flex flex-col gap-4">
    {#each [0, 0, 0, 0] as notif, i}
        <div class='bg-base-200 h-fit flex flex-col prose'>
            <div class='flex justify-between p-2 pb-0'>
                <h4 class='notif-text m-0'>
                    Java Calculatorasdasd
                </h4>
                <p class='m-0'>
                    03:23:59:59
                </p>
            </div>
            <div class='p-2 pt-0'>
                <p class='m-0 break-all'>
                    Assignment description descriptome more description...
                </p> 
            </div>
            <hr class="m-0 mx-2" />
            <div class='flex p-2 justify-between'>
                <p class='m-0'>
                    Score: 4 / 4
                </p>
                <button class='btn btn-primary btn-sm m-0 uppercase'>
                    Submit
                </button>
            </div>
        </div>
    {/each}
</div>

<style lang='postcss'>
    .notif-text {
        white-space: nowrap;
        max-width: 11rem;
		overflow: hidden; /* "overflow" value must be different from  visible"*/
		-o-text-overflow: ellipsis; /* Opera < 11*/
		text-overflow: ellipsis; /* IE, Safari (WebKit), Opera >= 11, FF > 6 */
    }

    div {
		border-radius: var(--rounded-btn, 0.5rem);
	}

</style>