<script lang='ts'>

    import { fade } from 'svelte/transition';

    import AuthGuard from '$lib/components/AuthGuard.svelte';
    import { authenticated } from '$firebase';
	import Login from '$routes/(auth)/login/Login.svelte';


</script>

<AuthGuard>

    <div slot='noauth' class='w-full h-full flex'>
        <Login />
    </div>

    <div slot='auth' in:fade={{
        duration: 200
    }} out:fade={{
        duration: 200
    }}>
        Some stuff
    </div>

</AuthGuard>