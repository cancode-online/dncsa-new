<script lang='ts'>
    import { page } from '$app/stores';
    import Login from '\$/routes/login/Login.svelte';
    import Signup from '\$/routes/signup/Signup.svelte';

    let current_page = '/';
    $: current_page = $page.url.pathname;

</script>

    {#if current_page === '/signup'}
        <Signup/>
    {:else}
        <Login/>
    {/if}