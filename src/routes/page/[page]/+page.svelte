<script lang='ts'>

    import { fade, fly } from 'svelte/transition';

    import AuthGuard from '$lib/components/AuthGuard.svelte';
	import Login from '$routes/(auth)/login/Login.svelte';

    export let data: any;

</script>

<AuthGuard>

    <svelte:fragment slot='noauth'>
        <Login />
    </svelte:fragment>

    <svelte:fragment slot='auth'>
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
    </svelte:fragment>

</AuthGuard>