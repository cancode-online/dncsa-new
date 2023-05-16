<script lang='ts'>
    import { page } from '$app/stores';
    import Signup from '\$/old_routes/(auth)/signup/Signup.svelte';
    import Login from '\$/old_routes/(auth)/login/Login.svelte';

    let current_page = '/';
    $: current_page = $page.url.pathname;

</script>

    {#if current_page === '/signup'}
        <Signup/>
    {:else}
        <Login/>
    {/if}