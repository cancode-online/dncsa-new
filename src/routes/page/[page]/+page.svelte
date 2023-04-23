<script lang='ts'>

    import { fade, fly } from 'svelte/transition';

    import AuthGuard from '$lib/components/AuthGuard.svelte';
	import Login from '$routes/(auth)/login/Login.svelte';

    export let data: any;

</script>

<AuthGuard>

    <div slot='noauth' class='w-full h-full flex justify-center'>
        <Login />
    </div>

    <div class='w-full' slot='auth'>
        {#key data}
            <div class='w-full' in:fly={{
                y: 50,
                duration: 400,
                delay: 100
            }} out:fade={{
                duration: 100
            }}>
                <article
                    class="prose dark:prose-invert m-0 p-2 self-center min-w-0 max-w-none h-full w-full"
                >
                    <div class="m-0">
                        <h4 class="m-0 inline">{data.title}</h4>
                        <p class="m-0 inline">- {new Date(data.date).toLocaleDateString('en-us')}</p>
                    </div>
                    <hr class="mt-0" />
                    <div class="m-0">
                        <svelte:component this={data.content} />
                    </div>
                </article>
            </div>
        {/key}
    </div>

</AuthGuard>

<style lang="postcss">
    :global(h1 > a):before {
        position: relative;
        content: '#';
        right: 0.5rem;
        @apply text-secondary dark:text-primary font-bold;
    }

    :global(h1 > a) {
        position: relative;
        right: 1rem;
        text-decoration: none !important;
    }

    :global(h2 > a):before {
        position: relative;
        content: '#';
        right: 0.5rem;
        @apply text-secondary dark:text-primary font-bold;
    }

    :global(h2 > a) {
        position: relative;
        right: 1rem;
        text-decoration: none !important;
    }

    :global(h3 > a):before {
        position: relative;
        content: '#';
        right: 0.5rem;
        @apply text-secondary dark:text-primary font-bold;
    }

    :global(h3 > a) {
        position: relative;
        right: 1rem;
        text-decoration: none !important;
    }
</style>