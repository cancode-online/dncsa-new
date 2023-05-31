<script lang='ts'>

	import { admin } from '$firebase';
	import { page } from '$app/stores';

	let currentUserPage = $page.params.user;
	$: currentUserPage = $page.params.user;

</script>

<div>
	Current user document {Math.random()}
	<a href={Math.random().toString()}> New user </a>
</div>
