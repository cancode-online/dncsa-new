<script lang="ts">
	import Login from './Login.svelte';

	import { authenticated } from '$firebase';

	$: if ($authenticated === true) {
		window.location.href = '/';
	}

</script>

<Login />
