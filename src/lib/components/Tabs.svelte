<script lang='ts'>

    import { page } from '$app/stores';  
    import { pages, pageToFolder } from '$pages/indexer';

    let tabsArray = [] as string[];

    $: {

        if ($page.url.pathname.split('/')[2]) {
            
            let tabs = Object.keys(pages[pageToFolder[$page.url.pathname.split('/')[2]]].pages);
            tabsArray = [];

            if (tabs.length != 0) {

                let order = pages[pageToFolder[$page.url.pathname.split('/')[2]]].metadata.order;

                for (let i = 0; i < order.length; i++) {
                    
                    tabsArray[i] = order[i];
                    tabs.splice(tabs.indexOf(order[i]), 1);
                    
                }

                tabsArray = [...tabsArray, ...tabs];

            }

        }
    }

</script>

<div class="tabs bg-base-300 !rounded-b-none px-2 pt-2">
    {#each tabsArray as tab, i}
        <a href='{tab}' class="tab border-none tab-lifted !px-4 !py-0 {$page.url.pathname.split('/')[2] === tab ? "tab-active" : ""}">
            <span>
                {#await (async () => { return (await pages[pageToFolder[tab]].pages[tab]()).metadata.title })()}
                    Loading...
                {:then title}
                    {title}
                {:catch error}
                    {error}
                {/await}
            </span>
        </a> 
    {/each}
</div>

<style lang="postcss">
    :global(.tab-active::after), :global(.tab-active)::before {
		background-image: radial-gradient(circle at var(--circle-pos), transparent var(--tab-grad), var(--tab-border-color) calc(var(--tab-grad) + 0.3px), var(--tab-border-color) calc(var(--tab-grad) + var(--tab-border, 1px)), hsla(var(--b2) / var(--tw-bg-opacity, 1)) calc(var(--tab-grad) + var(--tab-border, 1px) + 0.3px)) !important;
	}

	:global(.tab-active) {
		@apply !bg-base-200 !text-base-content;
	}
    :global(.tab-active > span) {
        @apply !max-w-[10rem];
    }

	:global(.tab > span) {
		white-space: nowrap;
		max-width: 5rem;
		overflow: hidden;              /* "overflow" value must be different from  visible"*/ 
		-o-text-overflow: ellipsis;    /* Opera < 11*/
		text-overflow:    ellipsis;    /* IE, Safari (WebKit), Opera >= 11, FF > 6 */
	}
</style>