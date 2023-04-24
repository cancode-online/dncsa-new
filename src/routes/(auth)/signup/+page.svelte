<script lang="ts">
	import Signup from './Signup.svelte';

	import { authenticated } from '$firebase';

	$: if ($authenticated === true) {
		window.location.href = '/';
	}
	
</script>

<Signup />
